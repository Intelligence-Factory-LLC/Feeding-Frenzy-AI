using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using FeedingFrenzy.Admin.Business.Admin.API;
using System.ComponentModel.DataAnnotations;
using FeedingFrenzy.Data;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace FeedingFrenzy.Admin.Pages
{
    [AllowAnonymous]
    public class recoverpwModel : PageModel
    {
        [BindProperty]
        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid Email Address.")]
        public string? Email { get; set; }
        public string? ErrorMessage { get; set; }
        public string? SuccessMessage { get; set; }
        public IActionResult OnPost()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            if(string.IsNullOrEmpty(Email))
            {
                ErrorMessage = "Email is required.";
                return Page();
            }

            UsersRow? rowUser = Admin.Business.Users.GetUserByEmail(Email);

            if (rowUser == null)
            {
                ErrorMessage = "Email not found.";
                return Page();
            }

            Authentication.ResetPassword(Email);

            SuccessMessage = "Your request was successful! Please check your email inbox for a message with instructions to reset your password. Be sure to also check your spam or junk folder.";

            return Page();
        }

        
      
    }
}
