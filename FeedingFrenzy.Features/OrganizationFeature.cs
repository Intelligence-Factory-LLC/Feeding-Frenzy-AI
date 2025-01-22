using BasicUtilities;
using FeedingFrenzy.Data;

namespace FeedingFrenzy.Features
{
    public class OrganizationFeature
    {
        static private OrganizationFeature? m_oFeature = null;
        const string FEATURE = "Organization Feature";

        public string OrganizationName = string.Empty;
        public string Domain = string.Empty;
        public string LogoUrl = string.Empty;
        public string Handle = string.Empty;
        public bool IsAgentChatEnabled = false;
        static public OrganizationFeature Feature
        {
            get
            {
                if (null == m_oFeature)
                    m_oFeature = GetFeature();

                return m_oFeature;
            }
        }

        static public OrganizationFeature GetFeature()
        {
            OrganizationFeature? feature = new OrganizationFeature();
            FeaturesRow? rowFeature = FeaturesRepository.GetFeatureByFeatureName(FEATURE);

            if (null != rowFeature && !StringUtil.IsEmpty(rowFeature.Settings))
            {
                feature = JsonUtil.ConvertTo<OrganizationFeature>(rowFeature.Settings!);
            }

            return feature ?? throw new Exception("Feature Not Found: " + FEATURE);
        }
        static public void SetFeature(OrganizationFeature feature)
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
