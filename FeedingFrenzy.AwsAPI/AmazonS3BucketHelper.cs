using Amazon.S3;
using Amazon.S3.Model;
using NAudio.Wave;
using System.Net;

namespace FeedingFrenzy.AwsAPI
{
	public class AmazonS3BucketHelper
	{

		public static async Task<bool> UploadObjectToS3Bucket(string filePath, string keyName, string bucketName,
			string accessKeyID, string secretAccessKey, string region
			)
		{
			bool result = false;

			var client = new AmazonS3Client(accessKeyID, secretAccessKey, (region == "us-east-1") ? Amazon.RegionEndpoint.USEast1 : Amazon.RegionEndpoint.USWest2);

			try
			{
				PutObjectRequest putRequest = new PutObjectRequest
				{
					BucketName = bucketName,
					Key = keyName,
					FilePath = filePath,
					ContentType = "text/plain",
					CannedACL = S3CannedACL.PublicRead
				};

				PutObjectResponse response = await client.PutObjectAsync(putRequest);
				result = true;
			}
			catch (Exception ex)
			{
				Logs.LogError(ex);
			}
			return result;
		}

		public static async Task<bool> UploadObjectToS3Bucket(string filePath, string keyName, string bucketName,
			string accessKeyID, string secretAccessKey, string region, string contentType
			)
		{
			bool result = false;

			var client = new AmazonS3Client(accessKeyID, secretAccessKey, (region == "us-east-1") ? Amazon.RegionEndpoint.USEast1 : Amazon.RegionEndpoint.USEast2);

			try
			{
				PutObjectRequest putRequest = new PutObjectRequest
				{
					BucketName = bucketName,
					Key = keyName,
					FilePath = filePath,
					ContentType = contentType,
					CannedACL = S3CannedACL.PublicRead
				};

				PutObjectResponse response = await client.PutObjectAsync(putRequest);
				result = true;
			}
			catch (Exception ex)
			{
				Logs.LogError(ex);
			}

			return result;
		}

		public static async Task<long> getS3FileSize(string keyName, string bucketName, string accessKeyID, string secretAccessKey, string region)
		{
			using (var amazonClient = new AmazonS3Client(accessKeyID, secretAccessKey, (region == "us-east-1") ? Amazon.RegionEndpoint.USEast1 : Amazon.RegionEndpoint.USEast2))
			{
				var getObjectMetadataRequest = new GetObjectMetadataRequest()
				{
					BucketName = bucketName,
					Key = keyName
				};
				var meta = await amazonClient.GetObjectMetadataAsync(getObjectMetadataRequest);
				return meta.Headers.ContentLength;
			}
		}

		public static async Task<bool> IsValidS3Audio(string s3AudioURL, int iMinimumSeconds = 0)
		{
			bool result = false;

			ServicePointManager.SecurityProtocol |= SecurityProtocolType.Tls12;

			using (var httpClient = new System.Net.Http.HttpClient())
			{
				// Download the WAV file from the provided URL
				var audioBytes = await httpClient.GetByteArrayAsync(s3AudioURL).ConfigureAwait(false);

				Stream audioStream = new MemoryStream(audioBytes);
				using (var reader = new WaveFileReader(audioStream))
				{
					if (reader.WaveFormat.Encoding == WaveFormatEncoding.Pcm ||
					reader.WaveFormat.Encoding == WaveFormatEncoding.IeeeFloat)
					{
						if (reader.TotalTime.TotalSeconds > iMinimumSeconds)
						{
							result = true;
						}
					}
				}
			}

			return result;
		}
	}


}
