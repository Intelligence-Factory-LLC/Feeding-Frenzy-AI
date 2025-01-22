using FeedingFrenzy.Admin.Business.API;
using Microsoft.AspNetCore.Http;
using WebAppUtilities;

namespace FeedingFrenzy.Admin.UI
{
	public partial class LeadsAdmin : JsonWs
	{
		private static IHttpContextAccessor _httpContextAccessor;

		public LeadsAdmin(IHttpContextAccessor httpContextAccessor)
		{
			_httpContextAccessor = httpContextAccessor;
		}

		public static string GetUnassignedGrid2Html(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows)
		{
			Initialize();
			HttpContext? context = _httpContextAccessor.HttpContext;
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetUnassignedGrid2Html",
				new List<string> { new UserState(context).SalesRepresentativeID.ToString(), Search, SortColumn, SortAscending, SkipRows, NumRows }
			);

		}
		public static string GetUnassignedGridWithSearchHtml(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows, string SearchOptions)
		{
			Initialize();
			HttpContext? context = _httpContextAccessor.HttpContext;
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetUnassignedGridWithSearchHtml",
				new List<string> { new UserState(context).SalesRepresentativeID.ToString(), Search, SortColumn, SortAscending, SkipRows, NumRows, SearchOptions }
			);

		}

		public static string GetUnassignedGridWithSearchCount(string Search, string SearchOptions)
		{
			Initialize();
			HttpContext? context = _httpContextAccessor.HttpContext;
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetUnassignedGridWithSearchCount",
				new List<string> { new UserState(context).SalesRepresentativeID.ToString(), Search, SearchOptions }
			);

		}

		public static string GetUnassignedGrid(
)
		{
			Initialize();
			HttpContext? context = _httpContextAccessor.HttpContext;
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetUnassignedGrid",
				new List<string> { new UserState(context).SalesRepresentativeID.ToString() }
			);
		}

		public static string GetUnassignedGrid(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			HttpContext? context = _httpContextAccessor.HttpContext;
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetUnassignedGrid",
				new List<string> { new UserState(context).SalesRepresentativeID.ToString(), Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetUnassignedGrid2Count(string Search
		)
		{
			Initialize();
			HttpContext? context = _httpContextAccessor.HttpContext;
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetUnassignedGrid2Count",
				new List<string> { new UserState(context).SalesRepresentativeID.ToString(), Search, }
			);
		}





		public static string GetUnassignedGridCount(string Search
		)
		{
			Initialize();

			HttpContext? context = _httpContextAccessor.HttpContext;
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetUnassignedGridCount",
				new List<string> { new UserState(context).SalesRepresentativeID.ToString(), Search, }
			);
		}



		public static string GetUnassignedGridHtml(
		)
		{
			Initialize();
			HttpContext? context = _httpContextAccessor.HttpContext;
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetUnassignedGridHtml",
				new List<string> { new UserState(context).SalesRepresentativeID.ToString() }
			);
		}

		public static string GetUnassignedGridHtml(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			HttpContext? context = _httpContextAccessor.HttpContext;
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetUnassignedGridHtml",
				new List<string> { new UserState(context).SalesRepresentativeID.ToString(), Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}


	}
}
