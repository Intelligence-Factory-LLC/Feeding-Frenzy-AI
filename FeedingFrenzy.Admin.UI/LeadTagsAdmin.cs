
using WebAppUtilities;
namespace FeedingFrenzy.Admin.UI
{
	public class LeadTagsAdmin : JsonWs
	{
		public const string KSCRIPT_FILE = @"LeadTags\LeadTagsAdmin.ks.html";
		public static void Initialize()
		{
			RooTraxState.kScriptControl.EvaluateFunction1("using", KSCRIPT_FILE);
		}
	
	
		
		public static string GetDetails(string LeadTagID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetDetails", 
				new List<string> { LeadTagID,  }
			);
		}
		
	
		
		public static string GetDropDown(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetDropDown", 
				new List<string> {  }
			);
		}
		
		public static string GetDropDown(string Name, string Value
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetDropDown", 
				new List<string> { Name, Value,  }
			);
		}
		
		public static string GetDropDown(string Name, string Value, string FieldName
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetDropDown", 
				new List<string> { Name, Value, FieldName,  }
			);
		}
		
		public static string GetDropDown(string Name, string Value, string FieldName, string PreOptions
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetDropDown", 
				new List<string> { Name, Value, FieldName, PreOptions,  }
			);
		}
		
	
		
		public static string GetEdit(string LeadTagID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetEdit", 
				new List<string> { LeadTagID,  }
			);
		}
		
	
		
		public static string GetGrid(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetGrid", 
				new List<string> {  }
			);
		}
		
		public static string GetGrid(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetGrid", 
				new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByLeadID(string LeadID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetGridByLeadID", 
				new List<string> { LeadID,  }
			);
		}
		
		public static string GetGridByLeadID(string LeadID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetGridByLeadID", 
				new List<string> { LeadID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByLeadIDCount(string LeadID, string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetGridByLeadIDCount", 
				new List<string> { LeadID, Search,  }
			);
		}
		
	
		
		public static string GetGridByLeadIDHtml(string LeadID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetGridByLeadIDHtml", 
				new List<string> { LeadID,  }
			);
		}
		
		public static string GetGridByLeadIDHtml(string LeadID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetGridByLeadIDHtml", 
				new List<string> { LeadID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByTagID(string TagID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetGridByTagID", 
				new List<string> { TagID,  }
			);
		}
		
		public static string GetGridByTagID(string TagID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetGridByTagID", 
				new List<string> { TagID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByTagIDCount(string TagID, string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetGridByTagIDCount", 
				new List<string> { TagID, Search,  }
			);
		}
		
	
		
		public static string GetGridByTagIDHtml(string TagID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetGridByTagIDHtml", 
				new List<string> { TagID,  }
			);
		}
		
		public static string GetGridByTagIDHtml(string TagID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetGridByTagIDHtml", 
				new List<string> { TagID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridCount(string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetGridCount", 
				new List<string> { Search,  }
			);
		}
		
	
		
		public static string GetGridHtml(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetGridHtml", 
				new List<string> {  }
			);
		}
		
		public static string GetGridHtml(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetGridHtml", 
				new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetInsert(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadTagsAdmin.GetInsert", 
				new List<string> {  }
			);
		}
		
	
	}
}
	