
using WebAppUtilities;
using System.Collections.Generic;
namespace FeedingFrenzy.Admin.UI
{
	public class SalesRepresentativesAdmin : JsonWs
	{
		public const string KSCRIPT_FILE = @"SalesRepresentatives\SalesRepresentativesAdmin.ks.html";
		public static void Initialize()
		{
			RooTraxState.kScriptControl.EvaluateFunction1("using", KSCRIPT_FILE);
		}
	
	
		
		public static string GetDetails(string SalesRepresentativeID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"SalesRepresentativesAdmin.GetDetails", 
				new List<string> { SalesRepresentativeID,  }
			);
		}
		
	
		
		public static string GetDropDown(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"SalesRepresentativesAdmin.GetDropDown", 
				new List<string> {  }
			);
		}
		
		public static string GetDropDown(string Name, string Value
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"SalesRepresentativesAdmin.GetDropDown", 
				new List<string> { Name, Value,  }
			);
		}
		
		public static string GetDropDown(string Name, string Value, string FieldName
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"SalesRepresentativesAdmin.GetDropDown", 
				new List<string> { Name, Value, FieldName,  }
			);
		}
		
		public static string GetDropDown(string Name, string Value, string FieldName, string PreOptions
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"SalesRepresentativesAdmin.GetDropDown", 
				new List<string> { Name, Value, FieldName, PreOptions,  }
			);
		}
		
	
		
		public static string GetEdit(string SalesRepresentativeID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"SalesRepresentativesAdmin.GetEdit", 
				new List<string> { SalesRepresentativeID,  }
			);
		}
		
	
		
		public static string GetGrid(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"SalesRepresentativesAdmin.GetGrid", 
				new List<string> {  }
			);
		}
		
		public static string GetGrid(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"SalesRepresentativesAdmin.GetGrid", 
				new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridBySalesRepresentativeTypeID(string SalesRepresentativeTypeID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeID", 
				new List<string> { SalesRepresentativeTypeID,  }
			);
		}
		
		public static string GetGridBySalesRepresentativeTypeID(string SalesRepresentativeTypeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeID", 
				new List<string> { SalesRepresentativeTypeID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridBySalesRepresentativeTypeIDCount(string SalesRepresentativeTypeID, string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDCount", 
				new List<string> { SalesRepresentativeTypeID, Search,  }
			);
		}
		
	
		
		public static string GetGridBySalesRepresentativeTypeIDHtml(string SalesRepresentativeTypeID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDHtml", 
				new List<string> { SalesRepresentativeTypeID,  }
			);
		}
		
		public static string GetGridBySalesRepresentativeTypeIDHtml(string SalesRepresentativeTypeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDHtml", 
				new List<string> { SalesRepresentativeTypeID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridCount(string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"SalesRepresentativesAdmin.GetGridCount", 
				new List<string> { Search,  }
			);
		}
		
	
		
		public static string GetGridHtml(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"SalesRepresentativesAdmin.GetGridHtml", 
				new List<string> {  }
			);
		}
		
		public static string GetGridHtml(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"SalesRepresentativesAdmin.GetGridHtml", 
				new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetInsert(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"SalesRepresentativesAdmin.GetInsert", 
				new List<string> {  }
			);
		}
		
	
	}
}
	