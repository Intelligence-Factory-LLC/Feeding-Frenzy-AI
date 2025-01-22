using BasicUtilities;
using FeedingFrenzy.Data;

namespace FeedingFrenzy.AutotaskAPI
{
	public class AutotaskFeature
	{

		static private AutotaskFeature? m_oFeature = null;
		const string FEATURE = "Autotask Feature";

		public string BaseUrl = string.Empty;
		public string ApiIntegrationCode = string.Empty;
		public string UserName = string.Empty;
		public string Secret = string.Empty;
		static public AutotaskFeature Feature
		{
			get
			{
				if (null == m_oFeature)
					m_oFeature = GetFeature();

				return m_oFeature;
			}
		}

		static public AutotaskFeature GetFeature()
		{
			AutotaskFeature? feature = new AutotaskFeature();
			FeaturesRow? rowFeature = FeaturesRepository.GetFeatureByFeatureName(FEATURE);

			if (null != rowFeature && !StringUtil.IsEmpty(rowFeature.Settings))
			{
				feature = JsonUtil.ConvertTo<AutotaskFeature>(rowFeature.Settings!);
			}

			return feature ?? throw new Exception("Feature Not Found: " + FEATURE);
		}
		static public void SetFeature(AutotaskFeature feature)
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
