using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace FeedingFrenzy.Admin.Pages.Shared
{
    [AllowAnonymous]
    public class _ProgressBarModel : PageModel
    {
        public void OnGet()
        {
        }
    }
}
