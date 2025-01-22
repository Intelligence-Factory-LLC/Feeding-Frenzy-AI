
using WebAppUtilities;
using System.Collections.Generic;
namespace FeedingFrenzy.Admin.UI
{
	public class EmailAddressesAdmin : JsonWs
	{
		public const string KSCRIPT_FILE = @"EmailAddresses\EmailAddressesAdmin.ks.html";
		public static void Initialize()
		{
			RooTraxState.kScriptControl.EvaluateFunction1("using", KSCRIPT_FILE);
		}
	
	
		
		public static string GetDetails(string EmailAddressID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"EmailAddressesAdmin.GetDetails", 
				new List<string> { EmailAddressID,  }
			);
		}
		
	
		
		public static string GetDropDown(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"EmailAddressesAdmin.GetDropDown", 
				new List<string> {  }
			);
		}
		
		public static string GetDropDown(string Name, string Value
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"EmailAddressesAdmin.GetDropDown", 
				new List<string> { Name, Value,  }
			);
		}
		
		public static string GetDropDown(string Name, string Value, string FieldName
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"EmailAddressesAdmin.GetDropDown", 
				new List<string> { Name, Value, FieldName,  }
			);
		}
		
		public static string GetDropDown(string Name, string Value, string FieldName, string PreOptions
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"EmailAddressesAdmin.GetDropDown", 
				new List<string> { Name, Value, FieldName, PreOptions,  }
			);
		}
		
	
		
		public static string GetDropDownWithNull(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"EmailAddressesAdmin.GetDropDownWithNull", 
				new List<string> {  }
			);
		}
		
	
		
		public static string GetEdit(string EmailAddressID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"EmailAddressesAdmin.GetEdit", 
				new List<string> { EmailAddressID,  }
			);
		}
		
	
		
		public static string GetGrid(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"EmailAddressesAdmin.GetGrid", 
				new List<string> {  }
			);
		}
		
		public static string GetGrid(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"EmailAddressesAdmin.GetGrid", 
				new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByDomainID(string DomainID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"EmailAddressesAdmin.GetGridByDomainID", 
				new List<string> { DomainID,  }
			);
		}
		
		public static string GetGridByDomainID(string DomainID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"EmailAddressesAdmin.GetGridByDomainID", 
				new List<string> { DomainID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByDomainIDCount(string DomainID, string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"EmailAddressesAdmin.GetGridByDomainIDCount", 
				new List<string> { DomainID, Search,  }
			);
		}
		
	
		
		public static string GetGridByDomainIDHtml(string DomainID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"EmailAddressesAdmin.GetGridByDomainIDHtml", 
				new List<string> { DomainID,  }
			);
		}
		
		public static string GetGridByDomainIDHtml(string DomainID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"EmailAddressesAdmin.GetGridByDomainIDHtml", 
				new List<string> { DomainID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridCount(string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"EmailAddressesAdmin.GetGridCount", 
				new List<string> { Search,  }
			);
		}
		
	
		
		public static string GetGridHtml(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"EmailAddressesAdmin.GetGridHtml", 
				new List<string> {  }
			);
		}
		
		public static string GetGridHtml(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"EmailAddressesAdmin.GetGridHtml", 
				new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridHtmlInternal(string EmailAddresses
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"EmailAddressesAdmin.GetGridHtmlInternal", 
				new List<string> { EmailAddresses,  }
			);
		}
		
	
		
		public static string GetInsert(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"EmailAddressesAdmin.GetInsert", 
				new List<string> {  }
			);
		}
		
	
	}
}
	