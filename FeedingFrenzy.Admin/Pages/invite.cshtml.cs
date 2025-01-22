using BasicUtilities;
using FeedingFrenzy.Admin.Business;
using FeedingFrenzy.Admin.Business.Admin.API;
using FeedingFrenzy.Admin.Business.Common;
using FeedingFrenzy.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace FeedingFrenzy.Admin.Pages
{
    public class inviteModel : BaseModel
    {
        private Task<IActionResult> HandleRequest()
        {

            try
            {

            }
            catch (Exception err)
            {
                Logs.LogError(err);
            }

            return Task.FromResult<IActionResult>(new EmptyResult());
        }

        public async Task<IActionResult> OnGetAsync()
        {
            await HandleRequest();

            return Page();

        }

    }
}

