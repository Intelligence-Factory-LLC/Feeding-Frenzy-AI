
using WebAppUtilities;
using System.Collections.Generic;
namespace FeedingFrenzy.Admin.UI
{
	public class ContentsAdmin : JsonWs
	{
		public const string KSCRIPT_FILE = @"Contents\ContentsAdmin.ks.html";
		public static void Initialize()
		{
			RooTraxState.kScriptControl.EvaluateFunction1("using", KSCRIPT_FILE);
		}
	
	
		
		public static string GetDetails(string ContentID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"ContentsAdmin.GetDetails", 
				new List<string> { ContentID,  }
			);
		}
		
	
		
		public static string GetDropDown(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"ContentsAdmin.GetDropDown", 
				new List<string> {  }
			);
		}
		
		public static string GetDropDown(string Name, string Value
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"ContentsAdmin.GetDropDown", 
				new List<string> { Name, Value,  }
			);
		}
		
		public static string GetDropDown(string Name, string Value, string FieldName
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"ContentsAdmin.GetDropDown", 
				new List<string> { Name, Value, FieldName,  }
			);
		}
		
		public static string GetDropDown(string Name, string Value, string FieldName, string PreOptions
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"ContentsAdmin.GetDropDown", 
				new List<string> { Name, Value, FieldName, PreOptions,  }
			);
		}
		
	
		
		public static string GetEdit(string ContentID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"ContentsAdmin.GetEdit", 
				new List<string> { ContentID,  }
			);
		}
		
	
		
		public static string GetGrid(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"ContentsAdmin.GetGrid", 
				new List<string> {  }
			);
		}
		
		public static string GetGrid(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"ContentsAdmin.GetGrid", 
				new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByContentTypeID(string ContentTypeID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"ContentsAdmin.GetGridByContentTypeID", 
				new List<string> { ContentTypeID,  }
			);
		}
		
		public static string GetGridByContentTypeID(string ContentTypeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"ContentsAdmin.GetGridByContentTypeID", 
				new List<string> { ContentTypeID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByContentTypeIDCount(string ContentTypeID, string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"ContentsAdmin.GetGridByContentTypeIDCount", 
				new List<string> { ContentTypeID, Search,  }
			);
		}
		
	
		
		public static string GetGridByContentTypeIDHtml(string ContentTypeID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"ContentsAdmin.GetGridByContentTypeIDHtml", 
				new List<string> { ContentTypeID,  }
			);
		}
		
		public static string GetGridByContentTypeIDHtml(string ContentTypeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"ContentsAdmin.GetGridByContentTypeIDHtml", 
				new List<string> { ContentTypeID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridCount(string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"ContentsAdmin.GetGridCount", 
				new List<string> { Search,  }
			);
		}
		
	
		
		public static string GetGridHtml(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"ContentsAdmin.GetGridHtml", 
				new List<string> {  }
			);
		}
		
		public static string GetGridHtml(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"ContentsAdmin.GetGridHtml", 
				new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridHtmlInternal(string Contents
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"ContentsAdmin.GetGridHtmlInternal", 
				new List<string> { Contents,  }
			);
		}
		
	
		
		public static string GetInsert(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"ContentsAdmin.GetInsert", 
				new List<string> {  }
			);
		}
		
	
	}
}
	