
using WebAppUtilities;
using System.Collections.Generic;
namespace FeedingFrenzy.Admin.UI
{
	public class LeadNotesAdmin : JsonWs
	{
		public const string KSCRIPT_FILE = @"LeadNotes\LeadNotesAdmin.ks.html";
		public static void Initialize()
		{
			RooTraxState.kScriptControl.EvaluateFunction1("using", KSCRIPT_FILE);
		}
	
	
		
		public static string GetDetails(string LeadNoteID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetDetails", 
				new List<string> { LeadNoteID,  }
			);
		}
		
	
		
		public static string GetDropDown(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetDropDown", 
				new List<string> {  }
			);
		}
		
		public static string GetDropDown(string Name, string Value
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetDropDown", 
				new List<string> { Name, Value,  }
			);
		}
		
		public static string GetDropDown(string Name, string Value, string FieldName
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetDropDown", 
				new List<string> { Name, Value, FieldName,  }
			);
		}
		
		public static string GetDropDown(string Name, string Value, string FieldName, string PreOptions
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetDropDown", 
				new List<string> { Name, Value, FieldName, PreOptions,  }
			);
		}
		
	
		
		public static string GetEdit(string LeadNoteID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetEdit", 
				new List<string> { LeadNoteID,  }
			);
		}
		
	
		
		public static string GetGrid(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetGrid", 
				new List<string> {  }
			);
		}
		
		public static string GetGrid(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetGrid", 
				new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByLeadID(string LeadID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetGridByLeadID", 
				new List<string> { LeadID,  }
			);
		}
		
		public static string GetGridByLeadID(string LeadID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetGridByLeadID", 
				new List<string> { LeadID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByLeadIDCount(string LeadID, string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetGridByLeadIDCount", 
				new List<string> { LeadID, Search,  }
			);
		}
		
	
		
		public static string GetGridByLeadIDHtml(string LeadID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetGridByLeadIDHtml", 
				new List<string> { LeadID,  }
			);
		}
		
		public static string GetGridByLeadIDHtml(string LeadID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetGridByLeadIDHtml", 
				new List<string> { LeadID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByLeadNoteTypeID(string LeadNoteTypeID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetGridByLeadNoteTypeID", 
				new List<string> { LeadNoteTypeID,  }
			);
		}
		
		public static string GetGridByLeadNoteTypeID(string LeadNoteTypeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetGridByLeadNoteTypeID", 
				new List<string> { LeadNoteTypeID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByLeadNoteTypeIDCount(string LeadNoteTypeID, string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetGridByLeadNoteTypeIDCount", 
				new List<string> { LeadNoteTypeID, Search,  }
			);
		}
		
	
		
		public static string GetGridByLeadNoteTypeIDHtml(string LeadNoteTypeID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetGridByLeadNoteTypeIDHtml", 
				new List<string> { LeadNoteTypeID,  }
			);
		}
		
		public static string GetGridByLeadNoteTypeIDHtml(string LeadNoteTypeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetGridByLeadNoteTypeIDHtml", 
				new List<string> { LeadNoteTypeID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridBySalesRepresentativeID(string SalesRepresentativeID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetGridBySalesRepresentativeID", 
				new List<string> { SalesRepresentativeID,  }
			);
		}
		
		public static string GetGridBySalesRepresentativeID(string SalesRepresentativeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetGridBySalesRepresentativeID", 
				new List<string> { SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridBySalesRepresentativeIDCount(string SalesRepresentativeID, string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetGridBySalesRepresentativeIDCount", 
				new List<string> { SalesRepresentativeID, Search,  }
			);
		}
		
	
		
		public static string GetGridBySalesRepresentativeIDHtml(string SalesRepresentativeID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetGridBySalesRepresentativeIDHtml", 
				new List<string> { SalesRepresentativeID,  }
			);
		}
		
		public static string GetGridBySalesRepresentativeIDHtml(string SalesRepresentativeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetGridBySalesRepresentativeIDHtml", 
				new List<string> { SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridCount(string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetGridCount", 
				new List<string> { Search,  }
			);
		}
		
	
		
		public static string GetGridHtml(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetGridHtml", 
				new List<string> {  }
			);
		}
		
		public static string GetGridHtml(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetGridHtml", 
				new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetInsert(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadNotesAdmin.GetInsert", 
				new List<string> {  }
			);
		}
		
	
	}
}
	