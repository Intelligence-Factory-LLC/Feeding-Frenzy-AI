
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;
using System.Runtime.Intrinsics.Arm;
using FeedingFrenzy.AwsAPI;
using System.Net;
using FeedingFrenzy.TwilioAPI;
using Amazon.Runtime.Internal.Endpoints.StandardLibrary;
using static Buffaly.CallAnalysis.CallTranscriptions;
using OpenAIAPI;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class CallRecordings
    {
		public static async Task StoreLeadNoteInAWSAndRemoveFromTwilio(CallsRow rowCall)
		{
			try
			{

				if (await MigrateCallToAWS(rowCall))
					await DeleteFromTwilio(rowCall);

			}
			catch (Exception ex)
			{
				Logs.LogError(ex);
			}

		}

		private static async Task<bool> MigrateCallToAWS(CallsRow rowCall)
		{ 
			bool result = false;

			if (!rowCall.DataObject.GetBooleanOrFalse("isMigratedToAwsS3"))
			{
				string ? twilioUrl = rowCall.RecordingURL;
				if (!StringUtil.IsEmpty(twilioUrl))
				{
					TwilioFeature feature = TwilioFeature.Feature;

					string finalS3Link = await DownloadFromTwilioAndUploadToS3Async(
						twilioUrl!, feature.S3BucketName, feature.S3AccessKeyID, feature.S3SecretAccessKey,
						feature.S3Region, feature.S3BucketURL, feature.S3Folder);

					if (!StringUtil.IsEmpty(finalS3Link))
					{
						rowCall.DataObject["isMigratedToAwsS3"] = true;
						rowCall.DataObject["twilioUrl"] = twilioUrl!;
						rowCall.DataObject["awsUrl"] = finalS3Link;
						rowCall.RecordingURL = finalS3Link;
					
						CallsRepository.UpdateCall(rowCall);

						result = true;
					}
					else
					{
						throw new Exception("Error MigrateLeadNoteToAWS");
					}
				}
			}

			return result;
		}

		static public async Task Transcribe(CallsRow rowCall, string strCorrectingPrompt)
		{
			if (StringUtil.IsEmpty(rowCall.RecordingURL))
			{
				Logs.DebugLog.WriteEvent("Transcribe", "No Recording URL");
				return;
			}

			JsonWsMethod.DefaultTimeout = 5 * 60 * 1000;

			Buffaly.CallAnalysis.CallTranscriptions.TranscribeFromUrl2Response? response = null;

			for (int i = 0; response == null && i < 3; i++)
			{
				try
				{
					try
					{
						response = await Buffaly.CallAnalysis.CallTranscriptions.TranscribeFromUrl2(rowCall.RecordingURL!, strCorrectingPrompt, null, null);
					}
					catch (OpenAIInternalException)
					{
						response = new TranscribeFromUrl2Response();
						response.RequiresRetry = true;
					}
				}
				catch (Exception err)
				{
					Logs.DebugLog.WriteEvent("Error on Transcription", err.Message);
					Logs.DebugLog.WriteEvent("Retrying ", (i + 1).ToString());
				}
			}

			if (null == response)
				throw new Exception("Could not complete transcription after 3 attempts");

			if (response.IsEmpty || null == response.Segments)
			{
				rowCall.IsEmptyTranscription = true;
				rowCall.TranscriptionSummary = null;
				rowCall.IsTranscribed = true;
			}
			else 
			{
				rowCall.IsEmptyTranscription = false;
				
				response.Segments = Buffaly.CallAnalysis.SentimentAnalysis.AnalyzeSentimentSimple(response.Segments) ?? new List<Buffaly.CallAnalysis.CallTranscriptions.Segment>();

				rowCall.IsTranscribed = true;

				//The CallSummary returned from the transcription service is the full transcription
				rowCall.Transcription = response.CallSummary;

				rowCall.DataObject["TranscriptionCombined"] = new JsonValue(response.Segments);
				rowCall.DataObject["MostNegativeSentiment"] = response.Segments.Where(x => x.SentimentScore < -0.5).OrderBy(x => x.SentimentScore).FirstOrDefault()?.SentimentScore ?? 0.0;
				rowCall.DataObject["MostPositiveSentiment"] = response.Segments.Where(x => x.SentimentScore > 0.5).OrderByDescending(x => x.SentimentScore).FirstOrDefault()?.SentimentScore ?? 0.0;
				rowCall.DataObject["AverageSentiment"] = response.Segments.Count == 0 ? 0.0 : response.Segments.Average(x => x.SentimentScore);
				rowCall.DataObject["SentimentLabel"] = GetSentimentLabel(rowCall.DataObject.GetDoubleOrDefault("AverageSentiment", 0.0));
				rowCall.DataObject["TranscriptionLeft"] = response.Left;
				rowCall.DataObject["TranscriptionRight"] = response.Right;
			}

			CallsRepository.UpdateCall(rowCall);
		}

		static public async Task Summarize(CallsRow rowCall, string strSummaryPrompt)
		{
			try
			{
				if (!StringUtil.IsEmpty(rowCall.Transcription))
				{
					rowCall.TranscriptionSummary = await OpenAIAPI.Completions.Complete(rowCall.Transcription!, strSummaryPrompt);
					CallsRepository.UpdateCall(rowCall);
				}
			}
			catch (Exception err)
			{
				Logs.DebugLog.WriteEvent("Transcription Summary Failed", err.Message);
			}
		}


		public static async Task DeleteFromTwilio(CallsRow rowCall)
		{
			if (rowCall.DataObject.GetBooleanOrFalse("isMigratedToAwsS3") &&
				!rowCall.DataObject.GetBooleanOrFalse("isDeletedFromTwilio"))
			{
				//getting the Twilio link
				string ? twilioUrl = rowCall.DataObject.GetStringOrNull("twilioUrl");
				string ? amazonS3Url = rowCall.RecordingURL ;

				if (!String.IsNullOrEmpty(amazonS3Url) && !String.IsNullOrEmpty(twilioUrl))
				{
					String recordingSID = twilioUrl.Split('/').Last();

					if (!String.IsNullOrEmpty(recordingSID))
					{
						var isValidAudio = await AmazonS3BucketHelper.IsValidS3Audio(amazonS3Url);
						if (isValidAudio)
						{
							await TwilioHelper.DeleteTwilioAudio(recordingSID);

							rowCall.DataObject["isDeletedFromTwilio"] = true;

							CallsRepository.UpdateCall(rowCall);
						}
						else
						{
							throw new Exception("Error DeleteFromTwilio S3 file not valid");
						}
					}
					else
					{
						throw new Exception("Error DeleteFromTwilio");
					}
				}

			}
		}

		public static async Task<string> UploadAudioToS3Async(string filePath)
		{
			TwilioFeature feature = TwilioFeature.Feature;

			string finalS3Link = await UploadAudioToS3Async(
				filePath, feature.S3BucketName, feature.S3AccessKeyID, feature.S3SecretAccessKey,
				feature.S3Region, feature.S3BucketURL, feature.S3Folder);

			return finalS3Link;
		}

		private static async Task<string> UploadAudioToS3Async(string filePath, string bucketName,
			string accessKeyID, string secretAccessKey, string region, string s3BucketURL, string wavFolder)
		{
			string finalS3Link = string.Empty;

			try
			{
				// Get the file name
				string fileName = Path.GetFileName(filePath);
				string awsKeyFile = $"{wavFolder}/{fileName}";

				// Upload the file to S3
				if (await AmazonS3BucketHelper.UploadObjectToS3Bucket(filePath, awsKeyFile, bucketName,
					accessKeyID, secretAccessKey, region, "audio/wav")) // Use "audio/wav" for WAV files
				{
					finalS3Link = $"{s3BucketURL}{awsKeyFile}";
				}
			}
			catch (Exception ex)
			{
				Logs.LogError(ex);
				Logs.DebugLog.WriteEvent("Error uploading audio file", filePath);
			}

			return finalS3Link;
		}

		private static async Task<string> DownloadFromTwilioAndUploadToS3Async(string strUrl,
	string bucketName, string accessKeyID, string secretAccessKey, string region,
	string s3BucketURL, string wavFolder)
		{
			string audioUrl = strUrl;
			string finalS3Link = string.Empty;
			ServicePointManager.SecurityProtocol |= SecurityProtocolType.Tls12;
			using (var httpClient = new System.Net.Http.HttpClient())
			{
				string fullWavFile = string.Empty;
				try
				{
                    httpClient.DefaultRequestHeaders.Authorization =
                                   new System.Net.Http.Headers.AuthenticationHeaderValue(
                                       "Basic", Convert.ToBase64String(System.Text.Encoding.ASCII.GetBytes($"{TwilioFeature.Feature.AccountSID}:{TwilioFeature.Feature.AuthToken}")));

                    // Download the WAV file from the provided URL
                    var audioBytes = await httpClient.GetByteArrayAsync(audioUrl).ConfigureAwait(false);

					//saving the audio.
					string wavFileName = $"{Guid.NewGuid().ToString()}.wav";
					fullWavFile = $"{TwilioFeature.Feature.CacheDirectory}/{wavFileName}";
					string awsKeyFile = $"{wavFolder}/{wavFileName}";
					System.IO.File.WriteAllBytes(fullWavFile, audioBytes);
					if (await AmazonS3BucketHelper.UploadObjectToS3Bucket(fullWavFile, awsKeyFile, bucketName,
						accessKeyID, secretAccessKey, region, "audio/mpeg"))
					{
						finalS3Link = $"{s3BucketURL}{awsKeyFile}";
					}
				}
				catch (Exception ex)
				{
					Logs.LogError(ex);
					Logs.DebugLog.WriteEvent("Error on moving audio file", audioUrl);
				}
				finally
				{
					if (System.IO.File.Exists(fullWavFile))
						System.IO.File.Delete(fullWavFile);
				}
			}

			return finalS3Link;
		}

		static public string GetSentimentLabel(double score)
		{
			if (score < -0.75)
			{
				return "Very Negative";
			}
			else if (score < -0.5)
			{
				return "Negative";
			}
			else if (score > 0.75)
			{
				return "Very Positive";
			}
			else if (score > 0.5)
			{
				return "Positive";
			}
			else
			{
				return "Neutral";
			}
		}

	}
}    
		