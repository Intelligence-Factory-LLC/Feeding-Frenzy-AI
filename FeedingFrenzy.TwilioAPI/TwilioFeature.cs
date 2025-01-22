using BasicUtilities;
using FeedingFrenzy.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FeedingFrenzy.TwilioAPI
{
	public class TwilioFeature
	{
		const string FEATURE = "Twilio Feature";

		public string AccountSID = string.Empty;
		public string AuthToken = string.Empty;
		public string FromNumber = string.Empty;
		public string IncomingCallsNumber = string.Empty;

		//Phone fields
		public string ApiKey = "";
		public string ApiSecret = "";
		public string ApplicationSid = "";
		public string Jwt = string.Empty;
		public DateTime Expiration = DateTime.Now;


		public string RecordingHandler = "https://sensorapi.YourOwnDomain.com/tw_record.aspx";
		public string CallStatusHandler = "https://sensorapi.YourOwnDomain.com/tw_record_status.aspx";
		public string CallStreamHandler = "wss://wss.buffaly.com/audiostream";
		public string CallStreamIncomingXml = "";

		public string CacheDirectory = "c:\\temp\\twilio\\";

		//For saving the audio files to AWS
		public string S3BucketName = "";
		public string S3BucketURL = "";
		public string S3AccessKeyID = "";
		public string S3SecretAccessKey = "";
		public string S3Region = "";
		public string S3Folder = "";
		static public TwilioFeature Feature
		{
			get
			{
				//Rely on the FeaturesRepository cache to handle the caching
				return GetFeature();
			}
		}

		static public TwilioFeature GetFeature()
		{
			TwilioFeature ? feature = new TwilioFeature();
			FeaturesRow ? rowFeature = FeaturesRepository.GetFeatureByFeatureName(FEATURE);

			if (null != rowFeature && !StringUtil.IsEmpty(rowFeature.Settings))
			{
				feature = JsonUtil.ConvertTo<TwilioFeature>(rowFeature.Settings!);
			}

			return feature ?? throw new Exception("Feature Not Found: " + FEATURE);
		}
		static public void SetFeature(TwilioFeature feature)
		{
			FeaturesRow? rowFeature = FeaturesRepository.GetFeatureByFeatureName(FEATURE);

			if (null != rowFeature)
			{
				rowFeature.Settings = JsonUtil.ToString(feature).ToString();
				FeaturesRepository.UpdateFeatureSettings(rowFeature.FeatureID, rowFeature.Settings);
			}
		}
	}

}
