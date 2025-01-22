
using WebAppUtilities;
using System.Collections.Generic;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.UI
{
    public class SalesRepresentativeReports : JsonWs 
    {
        public const string KSCRIPT_FILE = @"SalesRepresentatives\SalesRepresentative.Reports.ks.html";
        public static void Initialize()
        {
            RooTraxState.kScriptControl.EvaluateFunction1("using", KSCRIPT_FILE);
        }



        public static string GetCallSummary(string SalesRepresentativeID
        )
        {
            Initialize();

            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "SalesRepresentativeReports.GetCallSummary",
                new List<string> { SalesRepresentativeID, }
            );
        }

        public static string GetCallSummaryByTagID(string SalesRepresentativeID, string TagID, string StartDate, string StopDate
        )
        {
            Initialize();

            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "SalesRepresentativeReports.GetCallSummaryByTagID",
                new List<string> { SalesRepresentativeID, TagID, StartDate, StopDate, }
            );
        }



        public static string GetCallSummaryOverall(string StartDate, string StopDate
        )
        {
            Initialize();

            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "SalesRepresentativeReports.GetCallSummaryOverall",
                new List<string> { StartDate, StopDate, }
            );
        }

        public static string GetCallSummaryOverallByTagID(string TagID, string StartDate, string StopDate
        )
        {
            Initialize();

            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "SalesRepresentativeReports.GetCallSummaryOverallByTagID",
                new List<string> { TagID, StartDate, StopDate, }
            );
        }
    }
}
