using DocumentFormat.OpenXml.EMMA;
using FeedingFrenzy.Admin.Business.Admin.API;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;

namespace FeedingFrenzy.Admin.Pages
{
    [AllowAnonymous]
    public class loginModel : PageModel
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        public loginModel(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        [BindProperty]
        public InputModel Input { get; set; }

        public string ReturnUrl { get; set; }

        public class InputModel
        {
            public string Username { get; set; }
            public string Password { get; set; }
        }

        [ViewData]
        public string Message { get; set; }

        public async Task OnGetAsync(string? returnUrl = null)
        {
            ReturnUrl = returnUrl == null ? String.Empty : returnUrl;
        }

        public async Task<IActionResult> OnPostAsync(string? returnUrl = null)
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            HttpContext? context = _httpContextAccessor.HttpContext;
            LoginResultsDTO loginResult = Authentication.Login(Input.Username, Input.Password, context);

            // Replace with your actual user validation logic
            if (loginResult!=null && loginResult.IsAuthorized)
            {
                var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, Input.Username)
            };

                var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

                var authProperties = new AuthenticationProperties
                {
                    IsPersistent = true
                };
                
                await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme,
                    new ClaimsPrincipal(claimsIdentity),
                    authProperties);

                returnUrl ??= Url.Content("~/");

                return LocalRedirect(returnUrl);
            }

            Message = "Invalid login. Please check your username and password and try again.";

            return Page();
        }

    }
}
