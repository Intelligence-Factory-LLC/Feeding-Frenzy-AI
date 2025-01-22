using BasicUtilities;
using FeedingFrenzy.Admin.Business;
using FeedingFrenzy.Admin.Business.Admin.API;
using FeedingFrenzy.Admin.Business.Common;
using FeedingFrenzy.Data;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Web;

namespace FeedingFrenzy.Admin.Pages
{
    public class registerModel : BaseModel
    {
        public bool IsInvited { get; private set; }
        public string? Email { get; private set; }
        public string? Code { get; private set; }
        private async Task<IActionResult> HandleRequest()
        {

            try
            {

                Logs.DebugLog.WriteEvent("SignUp Request Query", Request.QueryString.ToString());

                string sInvitationCode =
                    GetStringOrNull("Code") ?? throw new Exception("Code parameter is null");

                string sEmail =
                    HttpUtility.UrlDecode(GetStringOrNull("Email")) ?? throw new Exception("Email parameter is null");


                Logs.DebugLog.WriteEvent("code", sInvitationCode);
                Logs.DebugLog.WriteEvent("email", sEmail);

                if (!StringUtil.IsEmpty(sInvitationCode) && !StringUtil.IsEmpty(sEmail))
                {
                    UserInvitationCodeDTO oUserInvitation = 
                        Users.GetInvitationCode(sEmail);

                    if(oUserInvitation == null)
                    {
                        IsInvited = false;

                        return new EmptyResult();
                    }

                    if(string.IsNullOrEmpty(oUserInvitation.Email))
                    {
                        IsInvited = false;

                        return new EmptyResult();
                    }   

                    IsInvited = true;
                    Email = sEmail;
                    Code = sInvitationCode;

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

