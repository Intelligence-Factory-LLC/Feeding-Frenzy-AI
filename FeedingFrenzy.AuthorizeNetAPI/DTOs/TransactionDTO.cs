using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FeedingFrenzy.AuthorizeNetAPI
{
    public class BillingAddressDTO
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public string Country { get; set; }
    }

    public class CreditCardDTO
    {
        public string CreditCardNumber { get; set; }
        public int ExpirationMonth { get; set; }
        public int ExpirationYear { get; set; }
        public string CVV { get; set; }
    }

    public class TransactionDTO
    {
        public CreditCardDTO CreditCard { get; set; }
        public BillingAddressDTO BillingAddress { get; set; }
        public decimal Amount { get; set; }    
    }

}
