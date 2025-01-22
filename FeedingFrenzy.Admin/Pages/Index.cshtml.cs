using FeedingFrenzy.Admin.Business.API;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FeedingFrenzy.Admin.Pages
{
    [Authorize]
    public class IndexModel : BaseModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }



        public string? TermsAndConditions
        {
            get
            {
                return Buffaly.Business.Contents.GetContentByContentName("TermsAndConditionsAgreement")?.Content;

            }
        }

        public string? DashboardContent
        {
            get
            {
                string strHtml = string.Empty;

                if (UserState.IsAdministrator)
                {
                   strHtml = FeedingFrenzy.Admin.UI.DefaultPageAdmin.GetMainCalendar(UserState.SalesRepresentativeID.ToString(), DateTime.Now.AddDays(-1).ToShortDateString());

                }
                else
                {
                    strHtml = FeedingFrenzy.Admin.Business.Contents.GetContentByContentName("DashboardContent")?.Content ??
                             "<img src=\"/images/FeedingFrenzyControlCenter.png\" style=\"width:87%!important\" />";

                }

                return strHtml;
            }

        }

        public string? GetMainPanelContentForSalesRepresentative
        {
            get
            {
                return FeedingFrenzy.Admin.UI.DefaultPageAdmin.GetMainPanelContentForSalesRepresentative("1", "0");
            }
        }

        public IActionResult OnGet()
        {
            return Page();
        }
    }
}