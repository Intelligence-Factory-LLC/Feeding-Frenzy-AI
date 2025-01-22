
using WebAppUtilities;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using FeedingFrenzy.Admin.Business.API;

namespace FeedingFrenzy.Admin.UI
{
    public class ApiKeysAdmin : JsonWs
    {
        public const string KSCRIPT_FILE = @"ApiKeysAdmin.ks.html";
        public static void Initialize()
        {
            RooTraxState.kScriptControl.EvaluateFunction1("using", KSCRIPT_FILE);
        }

        private static IHttpContextAccessor _httpContextAccessor;

        public ApiKeysAdmin(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public static string GetDetails(string AuthorizationID
        )
        {
            Initialize();

            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "ApiKeysAdmin.GetDetails",
                new List<string> { AuthorizationID, }
            );
        }



        public static string GetDropDown(
        )
        {
            Initialize();

            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "ApiKeysAdmin.GetDropDown",
                new List<string> { }
            );
        }

        public static string GetDropDown(string Name, string Value
        )
        {
            Initialize();

            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "ApiKeysAdmin.GetDropDown",
                new List<string> { Name, Value, }
            );
        }

        public static string GetDropDown(string Name, string Value, string FieldName
        )
        {
            Initialize();

            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "ApiKeysAdmin.GetDropDown",
                new List<string> { Name, Value, FieldName, }
            );
        }

        public static string GetDropDown(string Name, string Value, string FieldName, string PreOptions
        )
        {
            Initialize();

            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "ApiKeysAdmin.GetDropDown",
                new List<string> { Name, Value, FieldName, PreOptions, }
            );
        }



        public static string GetDropDownWithNull(
        )
        {
            Initialize();

            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "ApiKeysAdmin.GetDropDownWithNull",
                new List<string> { }
            );
        }



        public static string GetEdit(string AuthorizationID
        )
        {
            Initialize();

            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "ApiKeysAdmin.GetEdit",
                new List<string> { AuthorizationID, }
            );
        }



        public static string GetGrid(
        )
        {
            Initialize();

            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "ApiKeysAdmin.GetGrid",
                new List<string> { }
            );
        }

        public static string GetGrid(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
        )
        {
            Initialize();

            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "ApiKeysAdmin.GetGrid",
                new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows, }
            );
        }



        public static string GetGridByUserID(
        )
        {
            Initialize();

            HttpContext? context = _httpContextAccessor.HttpContext;
            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "ApiKeysAdmin.GetGridByUserID",
                new List<string> { new UserState(context).UserID.ToString() }
            );
        }

        public static string GetGridByUserID(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
        )
        {
            Initialize();

            HttpContext? context = _httpContextAccessor.HttpContext;
            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "ApiKeysAdmin.GetGridByUserID",
                new List<string> { new UserState(context).UserID.ToString(), Search, SortColumn, SortAscending, SkipRows, NumRows, }
            );
        }



        public static string GetGridByUserIDCount(string Search
        )
        {
            Initialize();

            HttpContext? context = _httpContextAccessor.HttpContext;
            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "ApiKeysAdmin.GetGridByUserIDCount",
                new List<string> { new UserState(context).UserID.ToString(), Search, }
            );
        }



        public static string GetGridByUserIDHtml(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
        )
        {
            Initialize();

            HttpContext? context = _httpContextAccessor.HttpContext;
            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "ApiKeysAdmin.GetGridByUserIDHtml",
                new List<string> { new UserState(context).UserID.ToString(), Search, SortColumn, SortAscending, SkipRows, NumRows, }
            );
        }



        public static string GetGridCount(string Search
        )
        {
            Initialize();

            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "ApiKeysAdmin.GetGridCount",
                new List<string> { Search, }
            );
        }



        public static string GetGridHtml(
        )
        {
            Initialize();

            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "ApiKeysAdmin.GetGridHtml",
                new List<string> { }
            );
        }

        public static string GetGridHtml(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
        )
        {
            Initialize();

            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "ApiKeysAdmin.GetGridHtml",
                new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows, }
            );
        }



        public static string GetInsert(
        )
        {
            Initialize();

            return RooTraxState.kScriptControl.EvaluateFunctionN(
                "ApiKeysAdmin.GetInsert",
                new List<string> { }
            );
        }


    }
}
