using Buffaly.Data;
using FeedingFrenzy.Admin.Business.Admin.API;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Security.Claims;
using System.Web;

namespace FeedingFrenzy.Admin.Pages
{
    [AllowAnonymous]
    public class externalloginModel : PageModel
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        public externalloginModel(IHttpContextAccessor httpContextAccessor)
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

        public async Task<IActionResult> OnGetAsync(string? Email = null, string? returnUrl = null)
        {

            Email = HttpUtility.UrlDecode(Email);
            if (string.IsNullOrEmpty(Email))
            {
                return Page();
            }

            ReturnUrl = returnUrl ?? string.Empty;
            UsersRow? rowUser = Buffaly.Business.Users.GetUserByEmail(Email);

            if (rowUser != null)
            {

                HttpContext? context = _httpContextAccessor.HttpContext;
                AuthorizationsRow? rowAuthorization = Buffaly.Business.Authorizations.
                    GetAuthorizationsByUserID(rowUser.UserID).FirstOrDefault(x => !x.IsApiKey && !x.IsExpired && !x.IsRevoked);

                if (rowAuthorization != null)
                {

                    LoginResultsDTO loginResult = Authentication.Impersonate(rowAuthorization.AuthorizationToken, context);


                    if (loginResult != null && loginResult.IsAuthorized)
                    {
                        var claims = new List<Claim>
                        {
                            new Claim("AuthorizationToken", rowAuthorization.AuthorizationToken)
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
                    }
                }
            }
            return LocalRedirect(returnUrl);
        }

        public async Task<IActionResult> OnPostAsync(string? returnUrl = null)
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            HttpContext? context = _httpContextAccessor.HttpContext;
            LoginResultsDTO loginResult = Authentication.LoginBuffaly(Input.Username, Input.Password, context);

            if (loginResult != null && loginResult.IsAuthorized)
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

            Message = "Login invalid";
            return Page();
        }
    }
}
