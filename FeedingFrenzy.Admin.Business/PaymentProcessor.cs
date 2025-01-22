using FeedingFrenzy.Common;

namespace FeedingFrenzy.Admin.Business
{
    internal class PaymentProcessor
    {
        private static IPaymentProcessor m_Processor = null;
        public static IPaymentProcessor GetPaymentProcessor()
        {
            if (null == m_Processor)
            {
                IPaymentProcessor? oProcessor = null;
                oProcessor = Activator.CreateInstance("FeedingFrenzy.AuthorizeNetAPI", "FeedingFrenzy.AuthorizeNetAPI.Transactions").Unwrap() as IPaymentProcessor;

                if (null == oProcessor)
                    throw new Exception("Could not load the specified payment processor: " /*+ rowPaymentProcessor.Assembly + "/" + rowPaymentProcessor.Processor*/);

                oProcessor.Initialize(new BasicUtilities.JsonObject());

                m_Processor = oProcessor;
            }

            return m_Processor;
        }

        public void OnProcessPayment(TransactionDTO transactionData)
        {
            IPaymentProcessor processor = GetPaymentProcessor();

            if (null != processor)
            {
                processor.OnProcessPayment(transactionData);
            }
        }
    }

}


