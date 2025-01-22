using FeedingFrenzy.Common;

namespace FeedingFrenzy.Admin.Business
{
    internal class IntegrationProcessors
	{
		private static IIntegrationProcessor m_Processor = null;
		public static IIntegrationProcessor GetIntegrationProcessor()
		{
			if (null == m_Processor)
			{
				IIntegrationProcessor? oProcessor = null;
				oProcessor = Activator.CreateInstance("FeedingFrenzy.AutotaskAPI", "FeedingFrenzy.AutotaskAPI.AutotaskHelper").Unwrap() as IIntegrationProcessor;

				if (null == oProcessor)
					throw new Exception("Could not load the specified integration processor: " /*+ rowPaymentProcessor.Assembly + "/" + rowPaymentProcessor.Processor*/);

				oProcessor.Initialize(new BasicUtilities.JsonObject());

				m_Processor = oProcessor;
			}

			return m_Processor;
		}

		public void OnCallCompleted(int CallID)
		{
			IIntegrationProcessor processor = GetIntegrationProcessor();

			if (null != processor)
			{
				processor.OnCallCompleted(CallID);
			}
		}
	}
}
