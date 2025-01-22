using WebAppUtilities;
namespace FeedingFrenzy.Admin.UI
{
	public class AuthorizationsAdmin : JsonWs
	{
		public const string KSCRIPT_FILE = @"Authorizations\AuthorizationsAdmin.ks.html";
		public static void Initialize()
		{
			RooTraxState.kScriptControl.EvaluateFunction1("using", KSCRIPT_FILE);
		}



		public static string GetDetails(string AuthorizationID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"AuthorizationsAdmin.GetDetails",
				new List<string> { AuthorizationID, }
			);
		}



		public static string GetDropDown(
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"AuthorizationsAdmin.GetDropDown",
				new List<string> { }
			);
		}

		public static string GetDropDown(string Name, string Value
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"AuthorizationsAdmin.GetDropDown",
				new List<string> { Name, Value, }
			);
		}

		public static string GetDropDown(string Name, string Value, string FieldName
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"AuthorizationsAdmin.GetDropDown",
				new List<string> { Name, Value, FieldName, }
			);
		}

		public static string GetDropDown(string Name, string Value, string FieldName, string PreOptions
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"AuthorizationsAdmin.GetDropDown",
				new List<string> { Name, Value, FieldName, PreOptions, }
			);
		}



		public static string GetEdit(string AuthorizationID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"AuthorizationsAdmin.GetEdit",
				new List<string> { AuthorizationID, }
			);
		}



		public static string GetGrid(
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"AuthorizationsAdmin.GetGrid",
				new List<string> { }
			);
		}

		public static string GetGrid(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"AuthorizationsAdmin.GetGrid",
				new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridByUserID(string UserID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"AuthorizationsAdmin.GetGridByUserID",
				new List<string> { UserID, }
			);
		}

		public static string GetGridByUserID(string UserID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"AuthorizationsAdmin.GetGridByUserID",
				new List<string> { UserID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridByUserIDCount(string UserID, string Search
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"AuthorizationsAdmin.GetGridByUserIDCount",
				new List<string> { UserID, Search, }
			);
		}



		public static string GetGridByUserIDHtml(string UserID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"AuthorizationsAdmin.GetGridByUserIDHtml",
				new List<string> { UserID, }
			);
		}

		public static string GetGridByUserIDHtml(string UserID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"AuthorizationsAdmin.GetGridByUserIDHtml",
				new List<string> { UserID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridCount(string Search
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"AuthorizationsAdmin.GetGridCount",
				new List<string> { Search, }
			);
		}



		public static string GetGridHtml(
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"AuthorizationsAdmin.GetGridHtml",
				new List<string> { }
			);
		}

		public static string GetGridHtml(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"AuthorizationsAdmin.GetGridHtml",
				new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetInsert(
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"AuthorizationsAdmin.GetInsert",
				new List<string> { }
			);
		}


	}
}
	