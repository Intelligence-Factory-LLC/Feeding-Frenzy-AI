using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;
using FeedingFrenzy.Common;
using FeedingFrenzy.Admin.Business;
using AutoMapper;

namespace FeedingFrenzy.Admin.Pages
{
    public class intakeformModel : PageModel
    {
        private readonly IMapper _mapper;
        private readonly IConfiguration _configuration;

        [BindProperty]
        [Required(ErrorMessage = "First name is required.")]
        public string FirstName { get; set; }

        [BindProperty]
        [Required(ErrorMessage = "Last name is required.")]
        public string LastName { get; set; }

        [BindProperty]
        [Required(ErrorMessage = "Address is required.")]
        public string Address { get; set; }

        [BindProperty]
        [Required(ErrorMessage = "City is required.")]
        public string City { get; set; }

        [BindProperty]
        [Required(ErrorMessage = "State is required.")]
        public string State { get; set; }

        [BindProperty]
        [Required(ErrorMessage = "Zip code is required.")]
        [DataType(DataType.PostalCode)]
        public string ZipCode { get; set; }

        [BindProperty]
        [Required(ErrorMessage = "Country is required.")]
        public string Country { get; set; }

        [BindProperty]
        [Required(ErrorMessage = "Card number is required.")]
        [CreditCard(ErrorMessage = "Invalid card number.")]
        public string CardNumber { get; set; }

        [BindProperty]
        [Required(ErrorMessage = "Card name is required.")]
        public string CardName { get; set; }

        [BindProperty]
        [Required(ErrorMessage = "Security code is required.")]
        [StringLength(4, MinimumLength = 3, ErrorMessage = "Security code must be 3 or 4 digits.")]
        public string SecurityCode { get; set; }

        [BindProperty]
        [Required(ErrorMessage = "Expiration month is required.")]
        [Range(1, 12, ErrorMessage = "Expiration month must be between 1 and 12.")]
        public int ExpirationMonth { get; set; }

        [BindProperty]
        [Required(ErrorMessage = "Expiration year is required.")]
        [Range(2023, 2100, ErrorMessage = "Expiration year must be a valid year.")]
        public int ExpirationYear { get; set; }

        [BindProperty]
        public decimal Amount { get; set; }

        public string ErrorMessage { get; set; } // Holds the error message
        public intakeformModel(IConfiguration configuration, IMapper mapper)
        {
            _configuration = configuration;
            _mapper = mapper;
        }

        public void OnGet()
        {
        }

        public IActionResult OnPost()
        {
            if (!ModelState.IsValid)
            {
                // Return to the form with validation errors
                return Page(); 
            }

            // Access all the form fields here:
            var firstName = FirstName;
            var lastName = LastName;
            var address = Address;
            var city = City;
            var state = State;
            var zipCode = ZipCode;
            var country = Country;
            var cardNumber = CardNumber;
            var cardName = CardName;
            var securityCode = SecurityCode;
            var expirationMonth = ExpirationMonth;
            var expirationYear = ExpirationYear;
            var amount = Amount;


            var transaction = new TransactionDTO
            {
                BillingAddress = new BillingAddressDTO
                {
                    FirstName = firstName,
                    LastName = lastName,
                    Address = address,
                    City = city,
                    State = state,
                    ZipCode = zipCode,
                    Country = country
                },
                CreditCard = new CreditCardDTO
                {
                    CreditCardNumber = cardNumber,
                    ExpirationMonth = expirationMonth,
                    ExpirationYear = expirationYear,
                    CVV = securityCode
                },
                Amount = amount
            };


            try
            {
                AuthorizeNetAPI.Transactions oPayment = 
                    new AuthorizeNetAPI.Transactions(_configuration, _mapper);
                
                string result = oPayment.OnProcessPayment(transaction);

                if (string.IsNullOrEmpty(result))
                {
                    // Handle error: Set an error message to show on the page
                    ErrorMessage = "An error occurred while processing your payment. Please try again.";
                    return Page(); // Stay on the same page and display the error
                }

                if (result.Contains("Success"))
                {
                    // Payment successful: Redirect to the thank-you page
                    return RedirectToPage("/thank-you");
                }
                else
                {
                    // Handle the failure case and show the error message
                    ErrorMessage = $"Your payment was not successful. Please check your details and try again. {result}";
                    return Page(); // Stay on the same page
                }
            }
            catch (Exception ex)
            {
                // Log the exception and show a generic error message
                ErrorMessage = $"An unexpected error occurred. Please try again later.";
                Logs.DebugLog.WriteError("Payment processing error: " + ex.Message);
                return Page(); // Stay on the same page
            }


        }
    }
}
