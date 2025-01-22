
using WebAppUtilities;
using System.Collections.Generic;
namespace FeedingFrenzy.Admin.UI
{
	public class RawEmailAddressesAdmin : JsonWs
	{
		public const string KSCRIPT_FILE = @"RawEmailAddresses\RawEmailAddressesAdmin.ks.html";
		public static void Initialize()
		{
			RooTraxState.kScriptControl.EvaluateFunction1("using", KSCRIPT_FILE);
		}
	
	
		
		public static string GetDetails(string RawEmailAddressID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetDetails", 
				new List<string> { RawEmailAddressID,  }
			);
		}
		
	
		
		public static string GetDropDown(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetDropDown", 
				new List<string> {  }
			);
		}
		
		public static string GetDropDown(string Name, string Value
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetDropDown", 
				new List<string> { Name, Value,  }
			);
		}
		
		public static string GetDropDown(string Name, string Value, string FieldName
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetDropDown", 
				new List<string> { Name, Value, FieldName,  }
			);
		}
		
		public static string GetDropDown(string Name, string Value, string FieldName, string PreOptions
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetDropDown", 
				new List<string> { Name, Value, FieldName, PreOptions,  }
			);
		}
		
	
		
		public static string GetDropDownWithNull(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetDropDownWithNull", 
				new List<string> {  }
			);
		}
		
	
		
		public static string GetEdit(string RawEmailAddressID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetEdit", 
				new List<string> { RawEmailAddressID,  }
			);
		}
		
	
		
		public static string GetGrid(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGrid", 
				new List<string> {  }
			);
		}
		
		public static string GetGrid(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGrid", 
				new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByDomainID(string DomainID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGridByDomainID", 
				new List<string> { DomainID,  }
			);
		}
		
		public static string GetGridByDomainID(string DomainID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGridByDomainID", 
				new List<string> { DomainID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByDomainIDCount(string DomainID, string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGridByDomainIDCount", 
				new List<string> { DomainID, Search,  }
			);
		}
		
	
		
		public static string GetGridByDomainIDHtml(string DomainID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGridByDomainIDHtml", 
				new List<string> { DomainID,  }
			);
		}
		
		public static string GetGridByDomainIDHtml(string DomainID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGridByDomainIDHtml", 
				new List<string> { DomainID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByEmailAddressID(string EmailAddressID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGridByEmailAddressID", 
				new List<string> { EmailAddressID,  }
			);
		}
		
		public static string GetGridByEmailAddressID(string EmailAddressID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGridByEmailAddressID", 
				new List<string> { EmailAddressID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByEmailAddressIDCount(string EmailAddressID, string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGridByEmailAddressIDCount", 
				new List<string> { EmailAddressID, Search,  }
			);
		}
		
	
		
		public static string GetGridByEmailAddressIDHtml(string EmailAddressID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGridByEmailAddressIDHtml", 
				new List<string> { EmailAddressID,  }
			);
		}
		
		public static string GetGridByEmailAddressIDHtml(string EmailAddressID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGridByEmailAddressIDHtml", 
				new List<string> { EmailAddressID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByRawEmailID(string RawEmailID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGridByRawEmailID", 
				new List<string> { RawEmailID,  }
			);
		}
		
		public static string GetGridByRawEmailID(string RawEmailID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGridByRawEmailID", 
				new List<string> { RawEmailID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByRawEmailIDCount(string RawEmailID, string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGridByRawEmailIDCount", 
				new List<string> { RawEmailID, Search,  }
			);
		}
		
	
		
		public static string GetGridByRawEmailIDHtml(string RawEmailID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGridByRawEmailIDHtml", 
				new List<string> { RawEmailID,  }
			);
		}
		
		public static string GetGridByRawEmailIDHtml(string RawEmailID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGridByRawEmailIDHtml", 
				new List<string> { RawEmailID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridCount(string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGridCount", 
				new List<string> { Search,  }
			);
		}
		
	
		
		public static string GetGridHtml(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGridHtml", 
				new List<string> {  }
			);
		}
		
		public static string GetGridHtml(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGridHtml", 
				new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridHtmlInternal(string RawEmailAddresses
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetGridHtmlInternal", 
				new List<string> { RawEmailAddresses,  }
			);
		}
		
	
		
		public static string GetInsert(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"RawEmailAddressesAdmin.GetInsert", 
				new List<string> {  }
			);
		}
		
	
	}
}
	