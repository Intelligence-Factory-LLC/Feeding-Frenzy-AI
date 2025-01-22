using AuthorizeNet.Api.Contracts.V1;
using AuthorizeNet.Api.Controllers;
using AuthorizeNet.Api.Controllers.Bases;
using AutoMapper;
using BasicUtilities;
using FeedingFrenzy.Common;
using Microsoft.Extensions.Configuration;
using System.Net;

namespace FeedingFrenzy.AuthorizeNetAPI
{
    public class Transactions : IPaymentProcessor
    {
        private readonly IMapper _mapper;
        private readonly IConfiguration _configuration;
        public Transactions(IConfiguration configuration, IMapper mapper)
        {
            _configuration = configuration;
            _mapper = mapper;
        }
        public void Initialize(JsonObject jsonData)
        {

        }

        public string OnProcessPayment(Common.TransactionDTO transactionData)
        {
            TransactionDTO oTransactionData =
                _mapper.Map<TransactionDTO>(transactionData);

            return this.CreateTransaction(oTransactionData);
        }

        public string CreateTransaction(TransactionDTO oTransaction)
        {
            string sTransactionResult = string.Empty;

            try
            {
                // Load credentials from appsettings
                var apiLoginId = _configuration["AuthorizeNet:ApiLoginId"];
                var transactionKey = _configuration["AuthorizeNet:TransactionKey"];
                var environment = _configuration["AuthorizeNet:Environment"];

                // Force TLS 1.2
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

                // Setup credentials
                ApiOperationBase<ANetApiRequest, ANetApiResponse>.RunEnvironment =
                    environment == "PRODUCTION" ? AuthorizeNet.Environment.PRODUCTION : AuthorizeNet.Environment.SANDBOX;

                ApiOperationBase<ANetApiRequest, ANetApiResponse>.MerchantAuthentication =
                    new merchantAuthenticationType { name = apiLoginId, ItemElementName = ItemChoiceType.transactionKey, Item = transactionKey };

                // Map the CreditCardDTO to creditCardType for Authorize.Net
                var creditCard = new creditCardType
                {
                    cardNumber = oTransaction.CreditCard.CreditCardNumber,
                    expirationDate = $"{oTransaction.CreditCard.ExpirationMonth:D2}/{oTransaction.CreditCard.ExpirationYear}",
                    cardCode = oTransaction.CreditCard.CVV
                };

                var paymentType = new paymentType { Item = creditCard };

                // Map the BillingAddressDTO to customerAddressType for Authorize.Net
                var billingAddress = new nameAndAddressType
                {
                    firstName = oTransaction.BillingAddress.FirstName,
                    lastName = oTransaction.BillingAddress.LastName,
                    address = oTransaction.BillingAddress.Address,
                    city = oTransaction.BillingAddress.City,
                    state = oTransaction.BillingAddress.State,
                    zip = oTransaction.BillingAddress.ZipCode,
                    country = oTransaction.BillingAddress.Country
                };

                // Set up the subscription details
                var subscription = new ARBSubscriptionType
                {
                    name = "Recurring Subscription for Feeding Frenzy",

                    payment = paymentType,

                    billTo = billingAddress,

                    paymentSchedule = new paymentScheduleType
                    {
                        interval = new paymentScheduleTypeInterval
                        {
                            length = 1, // Interval of 1 month
                            unit = ARBSubscriptionUnitEnum.months
                        },
                        startDate = DateTime.Now.AddDays(7), // Start after 7-day trial
                        totalOccurrences = 12 * 5, // No end date
                        trialOccurrences = 0 // No trial period It start after 7 days
                    },

                    amount = oTransaction.Amount, // Recurring amount after trial
                };


                var request = new ARBCreateSubscriptionRequest { subscription = subscription };

                var controller = new ARBCreateSubscriptionController(request);
                controller.Execute();

                var response = controller.GetApiResponse();

                // Check if the response is null
                if (response == null)
                {
                    Logs.DebugLog.WriteError("Response is null from Authorize.Net");
                    return "Failed: No response from payment gateway.";
                }

                // If there is a response, check for errors
                if (response.messages == null)
                {
                    Logs.DebugLog.WriteError("Response messages are null from Authorize.Net");
                    return "Failed: Response messages are missing from the payment gateway.";
                }

                if (response.messages.resultCode == messageTypeEnum.Ok)
                {
                    if (response.subscriptionId != null)
                    {
                        sTransactionResult = $"Success! Subscription ID: {response.subscriptionId}";
                    }
                }
                else
                {
                    sTransactionResult = "Subscription Failed. Error: " + response.messages.message[0].text;
                    Logs.DebugLog.WriteError("Subscription Error: " + response.messages.message[0].text);
                }
            }
            catch (Exception ex)
            {
                // Log any unexpected exceptions
                Logs.DebugLog.WriteError("Unexpected error: " + ex.Message);
                sTransactionResult = "Subscription Failed. An unexpected error occurred.";
            }

            return sTransactionResult;
        }


    }
}
