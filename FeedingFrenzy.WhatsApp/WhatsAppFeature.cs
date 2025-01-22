using BasicUtilities;
using FeedingFrenzy.Data;


namespace FeedingFrenzy.WhatsApp
{
    public class WhatsAppFeature
    {
        const string FEATURE = "WhatsApp Feature";

        public string _phoneNumberId = string.Empty;
        public string _phoneNumber = string.Empty;
        public string _accessToken = string.Empty;
        public string VERIFY_TOKEN = string.Empty;
		public bool IsEnable = false;

		public string _whatsAppApiUrl = "https://graph.facebook.com/v16.0/";
        
        static public WhatsAppFeature Feature
        {
            get
            {
                //Rely on the FeaturesRepository cache to handle the caching
                return GetFeature();
            }
        }

        static public WhatsAppFeature GetFeature()
        {
            WhatsAppFeature? feature = new WhatsAppFeature();
            FeaturesRow? rowFeature = FeaturesRepository.GetFeatureByFeatureName(FEATURE);

            if (null != rowFeature && !StringUtil.IsEmpty(rowFeature.Settings))
            {
                feature = JsonUtil.ConvertTo<WhatsAppFeature>(rowFeature.Settings!);
            }

            return feature ?? throw new Exception("Feature Not Found: " + FEATURE);
        }
        static public void SetFeature(WhatsAppFeature feature)
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
