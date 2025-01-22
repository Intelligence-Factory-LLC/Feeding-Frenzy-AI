
using WebAppUtilities;
namespace FeedingFrenzy.Admin.UI
{
	public class UsersAdmin : JsonWs
	{
		public const string KSCRIPT_FILE = @"Users\UsersAdmin.ks.html";
		public static void Initialize()
		{
			RooTraxState.kScriptControl.EvaluateFunction1("using", KSCRIPT_FILE);
		}
	
	
		
		public static string GetDetails(string UserID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"UsersAdmin.GetDetails", 
				new List<string> { UserID,  }
			);
		}
		
	
		
		public static string GetDropDown(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"UsersAdmin.GetDropDown", 
				new List<string> {  }
			);
		}
		
		public static string GetDropDown(string Name, string Value
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"UsersAdmin.GetDropDown", 
				new List<string> { Name, Value,  }
			);
		}
		
		public static string GetDropDown(string Name, string Value, string FieldName
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"UsersAdmin.GetDropDown", 
				new List<string> { Name, Value, FieldName,  }
			);
		}
		
		public static string GetDropDown(string Name, string Value, string FieldName, string PreOptions
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"UsersAdmin.GetDropDown", 
				new List<string> { Name, Value, FieldName, PreOptions,  }
			);
		}
		
	
		
		public static string GetEdit(string UserID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"UsersAdmin.GetEdit", 
				new List<string> { UserID,  }
			);
		}
		
	
		
		public static string GetGrid(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"UsersAdmin.GetGrid", 
				new List<string> {  }
			);
		}
		
		public static string GetGrid(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"UsersAdmin.GetGrid", 
				new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByRoleID(string RoleID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"UsersAdmin.GetGridByRoleID", 
				new List<string> { RoleID,  }
			);
		}
		
		public static string GetGridByRoleID(string RoleID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"UsersAdmin.GetGridByRoleID", 
				new List<string> { RoleID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByRoleIDCount(string RoleID, string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"UsersAdmin.GetGridByRoleIDCount", 
				new List<string> { RoleID, Search,  }
			);
		}
		
	
		
		public static string GetGridByRoleIDHtml(string RoleID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"UsersAdmin.GetGridByRoleIDHtml", 
				new List<string> { RoleID,  }
			);
		}
		
		public static string GetGridByRoleIDHtml(string RoleID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"UsersAdmin.GetGridByRoleIDHtml", 
				new List<string> { RoleID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridCount(string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"UsersAdmin.GetGridCount", 
				new List<string> { Search,  }
			);
		}
		
	
		
		public static string GetGridHtml(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"UsersAdmin.GetGridHtml", 
				new List<string> {  }
			);
		}
		
		public static string GetGridHtml(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"UsersAdmin.GetGridHtml", 
				new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetInsert(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"UsersAdmin.GetInsert", 
				new List<string> {  }
			);
		}
		
	
	}
}
	