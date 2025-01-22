using BasicUtilities;
using FeedingFrenzy.Data;

namespace FeedingFrenzy.Features
{
    public class EmailFeature
    {
        static private EmailFeature? m_oFeature = null;
        const string FEATURE = "Email Feature";

        public bool SendWithCredentials = true;
        public string MailServer = String.Empty;
        public int MailPort = 587;
        public string SenderName = String.Empty;
        public string SenderEmail = String.Empty;
        public string UserName = String.Empty;
        public string Password = String.Empty;
        public bool EnableSsl = true;

        static public EmailFeature Feature
        {
            get
            {
                if (null == m_oFeature)
                    m_oFeature = GetFeature();

                return m_oFeature;
            }
        }

        static public EmailFeature GetFeature()
        {
            EmailFeature? feature = new EmailFeature();
            FeaturesRow? rowFeature = FeaturesRepository.GetFeatureByFeatureName(FEATURE);

            if (null != rowFeature && !StringUtil.IsEmpty(rowFeature.Settings))
            {
                feature = JsonUtil.ConvertTo<EmailFeature>(rowFeature.Settings!);
            }

            return feature ?? throw new Exception("Feature Not Found: " + FEATURE);
        }
        static public void SetFeature(EmailFeature feature)
        {
            FeaturesRow? rowFeature = FeaturesRepository.GetFeatureByFeatureName(FEATURE);

            if (null != rowFeature)
            {
                rowFeature.Settings = JsonUtil.ToString(feature).ToString();
                FeaturesRepository.UpdateFeatureSettings(rowFeature.FeatureID, rowFeature.Settings);
                m_oFeature = null;
            }
        }
    }
}
