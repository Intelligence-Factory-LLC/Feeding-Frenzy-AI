using Microsoft.AspNetCore.Http;
using WebAppUtilities;

namespace FeedingFrenzy.Admin.UI
{
    public partial class DefaultPageAdmin : JsonWs
    {
        public const string KSCRIPT_FILE = @"Dashboard\DefaultPageAdmin.ks.html";

        private static IHttpContextAccessor _httpContextAccessor;
        public static void Initialize()
        {
            RooTraxState.kScriptControl.EvaluateFunction1("using", KSCRIPT_FILE);
        }

        public DefaultPageAdmin(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public static string GetMainPanelContentForSalesRepresentative(string SalesRepresentativeID, string TagID)
        {
            Initialize();

            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "DefaultPageAdmin.GetMainPanelContentForSalesRepresentative",
                new List<string> { SalesRepresentativeID, TagID, }
            );
        }

        public static string GetMainCalendar(string SalesRepresentativeID, string CurrentDate)
        {
            Initialize();
            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "DefaultPageAdmin.GetMainCalendar",
                new List<string> { SalesRepresentativeID, CurrentDate }
            );

        }
    }
}
