using BasicUtilities;
using FeedingFrenzy.Data;


namespace FeedingFrenzy.Admin.Business
{
    public class FileManagerFeature
    {
        public const string FEATURE_NAME = "File Manager Feature";

        public string AllowedFileExtensions = string.Empty;

        public string PathToFiles = string.Empty;
        public string UrlToFiles = string.Empty;

        public string PathToImages = string.Empty;
        public string UrlToImages = string.Empty;

        static public FileManagerFeature GetFeature()
        {
            FileManagerFeature feature = new FileManagerFeature();
            FeaturesRow ? rowFeature = FeaturesRepository.GetFeatureByFeatureName(FileManagerFeature.FEATURE_NAME);

            if (null != rowFeature && null != rowFeature.Settings)
            {
                feature = JsonUtil.ConvertTo<FileManagerFeature>(rowFeature.Settings) ?? throw new Exception("Could not convert settings to feature");
            }

            return feature;
        }

        static public void SetFeature(FileManagerFeature feature)
        {
            FeaturesRow rowFeature = Features.GetFeatureByFeatureName(FileManagerFeature.FEATURE_NAME);

            if (null != rowFeature)
            {
                rowFeature.Settings = JsonUtil.ToString(feature).ToString();
                FeaturesRepository.UpdateFeatureSettings(rowFeature.FeatureID, rowFeature.Settings);
            }
        }
    }
}
