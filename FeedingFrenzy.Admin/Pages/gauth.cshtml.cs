using BasicUtilities;
using FeedingFrenzy.Admin.Business.Admin.API;
using FeedingFrenzy.Admin.Business.API;
using FeedingFrenzy.Admin.Business.Common;
using FeedingFrenzy.Data;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace FeedingFrenzy.Admin.Pages
{
   [IgnoreAntiforgeryToken]
    public class gauthModel : PageModel
    {
        public bool IsAuthorized { get; private set; }
        private readonly IHttpContextAccessor _httpContextAccessor;
        public gauthModel(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        private async Task<IActionResult> HandleRequest()
        {

            try
            {

                Logs.DebugLog.WriteEvent("GAuth Request Query", Request.QueryString.ToString());

                string strCode = Request.Query["code"];

                if(String.IsNullOrEmpty(strCode))
                    throw new Exception("Code parameter is null");

                string strState = Request.Query["state"];

                if (String.IsNullOrEmpty(strState))
                    throw new Exception("Code parameter is null");

                string strUserID = StringUtil.LeftOfFirst(strState, "|");
                if (StringUtil.IsEmpty(strUserID))
                    throw new Exception("UserID is empty");


                Logs.DebugLog.WriteEvent("code", strCode);
                Logs.DebugLog.WriteEvent("state", strUserID);

                if (!StringUtil.IsEmpty(strCode) && !StringUtil.IsEmpty(strUserID))
                {
                    var result = await GmailHelper.AuthorizeFinish(strUserID, strCode);
                    string strUserEmail = result.Email;

                    UsersRow? rowUser = UsersRepository.GetUserByEmail(strUserEmail);

                    if (rowUser == null)
                    {
                        throw new Exception("user email does not exits");
                    }

                    rowUser.DataObject["ExternalToken"] = strUserID;
                    rowUser.DataObject["GAuthResult"] = new JsonValue(result);

                    UsersRepository.UpdateUserData(rowUser.UserID, rowUser.Data);

                    Logs.DebugLog.WriteEvent("Authenticated user email:", strUserEmail);
                    Logs.DebugLog.WriteEvent("Authenticated user code:", strCode);

                    HttpContext ? context = _httpContextAccessor.HttpContext;
                    
                    var oLoginResult = Authentication.ExternalLogin(strUserEmail, strUserID, context);
                    IsAuthorized = oLoginResult.IsAuthorized;

                    if (oLoginResult.IsAuthorized)
                    {
                        var claims = new List<Claim>
                        {
                            new Claim(ClaimTypes.Name, strUserEmail)
                        };

                        var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

                        var authProperties = new AuthenticationProperties
                        {
                            IsPersistent = true
                        };

                        await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme,
                            new ClaimsPrincipal(claimsIdentity),
                            authProperties);
                    }

                }

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

    }
}
