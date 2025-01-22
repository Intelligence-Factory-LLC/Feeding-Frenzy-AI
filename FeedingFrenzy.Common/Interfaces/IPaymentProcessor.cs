using BasicUtilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FeedingFrenzy.Common
{
    public interface IPaymentProcessor
    {
        void Initialize(JsonObject jsonData);
        string OnProcessPayment(TransactionDTO transactionData);
    }   
}
