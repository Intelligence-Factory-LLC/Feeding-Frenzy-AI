using BasicUtilities;
using FeedingFrenzy.Admin.Business;
using FeedingFrenzy.Admin.Business.Admin.API;
using FeedingFrenzy.Admin.Business.Common;
using FeedingFrenzy.Data;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;
using System.Web;

namespace FeedingFrenzy.Admin.Pages
{
    public class createpwModel : BaseModel
    {
        [BindProperty]
        public bool IsInvited { get; private set; }

        [BindProperty]
        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid Email Address.")]
        public string Email { get; set; }

        [BindProperty]
        [Required(ErrorMessage = "Password is required.")]
        [DataType(System.ComponentModel.DataAnnotations.DataType.Password)]
        [MinLength(8, ErrorMessage = "Password must be at least 8 characters long.")]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$",
            ErrorMessage = "Password must contain at least one lowercase letter, one uppercase letter, and one number.")]
        public string Password { get; set; }

        [BindProperty]
        public string? Code { get; set; }

        public string ErrorMessage { get; set; } // Holds the error message


        private readonly IHttpContextAccessor _httpContextAccessor;
        public createpwModel(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }
        private async Task<IActionResult> HandleRequest()
        {

            try
            {

                Logs.DebugLog.WriteEvent("Create Password Request Query", Request.QueryString.ToString());

                string sInvitationCode =
                    GetStringOrNull("Code") ?? throw new Exception("Code parameter is null");

                string sEmail =
                    HttpUtility.UrlDecode(GetStringOrNull("Email")) ?? throw new Exception("Email parameter is null");


                Logs.DebugLog.WriteEvent("code", sInvitationCode);
                Logs.DebugLog.WriteEvent("email", sEmail);

                Email = sEmail;
                Code = sInvitationCode;

            }
            catch (Exception err)
            {
                Logs.LogError(err);
            }

            return new EmptyResult();
        }

        public async Task<IActionResult> OnGetAsync()
        {
            await HandleRequest();

            return Page();

        }

        public async Task<IActionResult> OnPost()
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return Page();
                }


               if (string.IsNullOrEmpty(Code))
                {
                    ErrorMessage = "Invitation code is missing. Please contact support.";
                    return Page();
                }

                if (string.IsNullOrEmpty(Email))
                {
                    ErrorMessage = "Email address is missing. Please provide a valid email.";
                    return Page();
                }

                UserInvitationCodeDTO? oUserInvitation = Users.GetInvitationCode(Email);
                if (oUserInvitation == null || string.IsNullOrEmpty(oUserInvitation.Email))
                {
                    ErrorMessage = "Your invitation is no longer valid. Please contact support.";
                    return Page(); // Return to the same page with an error message
                }

                if (string.IsNullOrEmpty(Password))
                {
                    ErrorMessage = "The password field cannot be empty. Please enter a password.";
                    return Page(); // Return to the same page with the error message
                }

                string sCode = Code ?? throw new Exception("Invitation code is not available.");

                HttpContext? context = _httpContextAccessor.HttpContext;
                // Call Authentication.SetPassword with the required parameters
                LoginResultsDTO result = Authentication.SetPassword(Email, sCode, Password, context);

                if (result.IsAuthorized)
                {
                    Logs.DebugLog.WriteEvent("Password set successfully.", Email);

                    return RedirectToPage("/login"); // Redirect to a success page or a login page
                }
                else
                {
                    ErrorMessage = "Failed to set password. Please try again";
                }
            }
            catch (Exception err)
            {
                Logs.LogError(err);

                ErrorMessage = "An error occurred while setting the password";
            }

            return Page();
        }
    }
}


