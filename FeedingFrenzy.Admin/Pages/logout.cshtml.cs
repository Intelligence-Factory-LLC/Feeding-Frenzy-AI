using BasicUtilities;
using FeedingFrenzy.Admin.Business.Admin.API;
using FeedingFrenzy.Admin.Business.API;
using FeedingFrenzy.Admin.Business.Common;
using FeedingFrenzy.Data;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;


namespace FeedingFrenzy.Admin.Pages
{
   [IgnoreAntiforgeryToken]
    public class logoutModel : BaseModel
    {
        public bool IsAuthorized { get; private set; }

        private readonly IHttpContextAccessor _httpContextAccessor;
        public logoutModel(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        private async Task<IActionResult> HandleRequest()
        {

            try
            {

                HttpContext? context = _httpContextAccessor.HttpContext;

                if (context != null)
                {
                    context.Session.Clear();  // Clears the session
                }

                IsAuthorized = false;

            }
            catch (Exception err)
            {
                Logs.LogError(err);
            }

            return new EmptyResult();
        }

        public async Task<IActionResult> OnGetAsync()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            await HandleRequest();
            
            return Page();

        }

    }
}
