
using WebAppUtilities;
using System.Collections.Generic;
namespace FeedingFrenzy.Admin.UI
{
	public class LeadRelationshipsAdmin : JsonWs
	{
		public const string KSCRIPT_FILE = @"LeadRelationships\LeadRelationshipsAdmin.ks.html";
		public static void Initialize()
		{
			RooTraxState.kScriptControl.EvaluateFunction1("using", KSCRIPT_FILE);
		}
	
	
		
		public static string GetDetails(string LeadRelationshipID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetDetails", 
				new List<string> { LeadRelationshipID,  }
			);
		}
		
	
		
		public static string GetDropDown(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetDropDown", 
				new List<string> {  }
			);
		}
		
		public static string GetDropDown(string Name, string Value
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetDropDown", 
				new List<string> { Name, Value,  }
			);
		}
		
		public static string GetDropDown(string Name, string Value, string FieldName
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetDropDown", 
				new List<string> { Name, Value, FieldName,  }
			);
		}
		
		public static string GetDropDown(string Name, string Value, string FieldName, string PreOptions
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetDropDown", 
				new List<string> { Name, Value, FieldName, PreOptions,  }
			);
		}
		
	
		
		public static string GetEdit(string LeadRelationshipID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetEdit", 
				new List<string> { LeadRelationshipID,  }
			);
		}
		
	
		
		public static string GetGrid(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetGrid", 
				new List<string> {  }
			);
		}
		
		public static string GetGrid(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetGrid", 
				new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByLeadID(string LeadID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetGridByLeadID", 
				new List<string> { LeadID,  }
			);
		}
		
		public static string GetGridByLeadID(string LeadID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetGridByLeadID", 
				new List<string> { LeadID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByLeadIDCount(string LeadID, string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetGridByLeadIDCount", 
				new List<string> { LeadID, Search,  }
			);
		}
		
	
		
		public static string GetGridByLeadIDHtml(string LeadID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetGridByLeadIDHtml", 
				new List<string> { LeadID,  }
			);
		}
		
		public static string GetGridByLeadIDHtml(string LeadID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetGridByLeadIDHtml", 
				new List<string> { LeadID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByLeadRelationshipTypeID(string LeadRelationshipTypeID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeID", 
				new List<string> { LeadRelationshipTypeID,  }
			);
		}
		
		public static string GetGridByLeadRelationshipTypeID(string LeadRelationshipTypeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeID", 
				new List<string> { LeadRelationshipTypeID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByLeadRelationshipTypeIDCount(string LeadRelationshipTypeID, string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDCount", 
				new List<string> { LeadRelationshipTypeID, Search,  }
			);
		}
		
	
		
		public static string GetGridByLeadRelationshipTypeIDHtml(string LeadRelationshipTypeID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDHtml", 
				new List<string> { LeadRelationshipTypeID,  }
			);
		}
		
		public static string GetGridByLeadRelationshipTypeIDHtml(string LeadRelationshipTypeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDHtml", 
				new List<string> { LeadRelationshipTypeID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByRelatedLeadID(string RelatedLeadID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetGridByRelatedLeadID", 
				new List<string> { RelatedLeadID,  }
			);
		}
		
		public static string GetGridByRelatedLeadID(string RelatedLeadID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetGridByRelatedLeadID", 
				new List<string> { RelatedLeadID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridByRelatedLeadIDCount(string RelatedLeadID, string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetGridByRelatedLeadIDCount", 
				new List<string> { RelatedLeadID, Search,  }
			);
		}
		
	
		
		public static string GetGridByRelatedLeadIDHtml(string RelatedLeadID
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetGridByRelatedLeadIDHtml", 
				new List<string> { RelatedLeadID,  }
			);
		}
		
		public static string GetGridByRelatedLeadIDHtml(string RelatedLeadID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetGridByRelatedLeadIDHtml", 
				new List<string> { RelatedLeadID, Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetGridCount(string Search
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetGridCount", 
				new List<string> { Search,  }
			);
		}
		
	
		
		public static string GetGridHtml(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetGridHtml", 
				new List<string> {  }
			);
		}
		
		public static string GetGridHtml(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetGridHtml", 
				new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows,  }
			);
		}
		
	
		
		public static string GetInsert(
		)
		{
			Initialize();
			
			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadRelationshipsAdmin.GetInsert", 
				new List<string> {  }
			);
		}
		
	
	}
}
	