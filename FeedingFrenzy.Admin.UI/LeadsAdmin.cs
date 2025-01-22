
using WebAppUtilities;
namespace FeedingFrenzy.Admin.UI
{
	public partial class LeadsAdmin : JsonWs
	{
		public const string KSCRIPT_FILE = @"Leads\LeadsAdmin.ks.html";
		public static void Initialize()
		{
			RooTraxState.kScriptControl.EvaluateFunction1("using", KSCRIPT_FILE);
		}



		public static string GetDetails(string LeadID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetDetails",
				new List<string> { LeadID, }
			);
		}



		public static string GetDropDown(
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetDropDown",
				new List<string> { }
			);
		}

		public static string GetDropDown(string Name, string Value
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetDropDown",
				new List<string> { Name, Value, }
			);
		}

		public static string GetDropDown(string Name, string Value, string FieldName
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetDropDown",
				new List<string> { Name, Value, FieldName, }
			);
		}

		public static string GetDropDown(string Name, string Value, string FieldName, string PreOptions
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetDropDown",
				new List<string> { Name, Value, FieldName, PreOptions, }
			);
		}



		public static string GetEdit(string LeadID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetEdit",
				new List<string> { LeadID, }
			);
		}



		public static string GetGrid(
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGrid",
				new List<string> { }
			);
		}

		public static string GetGrid(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGrid",
				new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridByCampaignID(string CampaignID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByCampaignID",
				new List<string> { CampaignID, }
			);
		}

		public static string GetGridByCampaignID(string CampaignID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByCampaignID",
				new List<string> { CampaignID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridByCampaignIDCount(string CampaignID, string Search
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByCampaignIDCount",
				new List<string> { CampaignID, Search, }
			);
		}



		public static string GetGridByCampaignIDHtml(string CampaignID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByCampaignIDHtml",
				new List<string> { CampaignID, }
			);
		}

		public static string GetGridByCampaignIDHtml(string CampaignID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByCampaignIDHtml",
				new List<string> { CampaignID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridBySalesRepresentativeID(string SalesRepresentativeID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridBySalesRepresentativeID",
				new List<string> { SalesRepresentativeID, }
			);
		}

		public static string GetGridBySalesRepresentativeID(string SalesRepresentativeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridBySalesRepresentativeID",
				new List<string> { SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridBySalesRepresentativeIDCount(string SalesRepresentativeID, string Search
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridBySalesRepresentativeIDCount",
				new List<string> { SalesRepresentativeID, Search, }
			);
		}



		public static string GetGridBySalesRepresentativeIDHtml(string SalesRepresentativeID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridBySalesRepresentativeIDHtml",
				new List<string> { SalesRepresentativeID, }
			);
		}

		public static string GetGridBySalesRepresentativeIDHtml(string SalesRepresentativeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridBySalesRepresentativeIDHtml",
				new List<string> { SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridBySourceID(string SourceID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridBySourceID",
				new List<string> { SourceID, }
			);
		}

		public static string GetGridBySourceID(string SourceID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridBySourceID",
				new List<string> { SourceID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridBySourceIDCount(string SourceID, string Search
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridBySourceIDCount",
				new List<string> { SourceID, Search, }
			);
		}



		public static string GetGridBySourceIDHtml(string SourceID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridBySourceIDHtml",
				new List<string> { SourceID, }
			);
		}

		public static string GetGridBySourceIDHtml(string SourceID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridBySourceIDHtml",
				new List<string> { SourceID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridByStatusID(string LeadStatusID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByStatusID",
				new List<string> { LeadStatusID, }
			);
		}

		public static string GetGridByStatusID(string LeadStatusID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByStatusID",
				new List<string> { LeadStatusID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridByStatusIDCount(string LeadStatusID, string Search
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByStatusIDCount",
				new List<string> { LeadStatusID, Search, }
			);
		}



		public static string GetGridByStatusIDHtml(string LeadStatusID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByStatusIDHtml",
				new List<string> { LeadStatusID, }
			);
		}

		public static string GetGridByStatusIDHtml(string LeadStatusID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByStatusIDHtml",
				new List<string> { LeadStatusID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridByStatusIDSalesRepresentativeID(string LeadStatusID, string SalesRepresentativeID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByStatusIDSalesRepresentativeID",
				new List<string> { LeadStatusID, SalesRepresentativeID, }
			);
		}

		public static string GetGridByStatusIDSalesRepresentativeID(string LeadStatusID, string SalesRepresentativeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByStatusIDSalesRepresentativeID",
				new List<string> { LeadStatusID, SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridByStatusIDSalesRepresentativeIDCount(string LeadStatusID, string SalesRepresentativeID, string Search
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDCount",
				new List<string> { LeadStatusID, SalesRepresentativeID, Search, }
			);
		}



		public static string GetGridByStatusIDSalesRepresentativeIDHtml(string LeadStatusID, string SalesRepresentativeID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDHtml",
				new List<string> { LeadStatusID, SalesRepresentativeID, }
			);
		}

		public static string GetGridByStatusIDSalesRepresentativeIDHtml(string LeadStatusID, string SalesRepresentativeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDHtml",
				new List<string> { LeadStatusID, SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridBySubStatusID(string LeadSubStatusID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridBySubStatusID",
				new List<string> { LeadSubStatusID, }
			);
		}

		public static string GetGridBySubStatusID(string LeadSubStatusID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridBySubStatusID",
				new List<string> { LeadSubStatusID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridBySubStatusIDCount(string LeadSubStatusID, string Search
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridBySubStatusIDCount",
				new List<string> { LeadSubStatusID, Search, }
			);
		}



		public static string GetGridBySubStatusIDHtml(string LeadSubStatusID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridBySubStatusIDHtml",
				new List<string> { LeadSubStatusID, }
			);
		}

		public static string GetGridBySubStatusIDHtml(string LeadSubStatusID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridBySubStatusIDHtml",
				new List<string> { LeadSubStatusID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridBySubStatusIDSalesRepresentativeID(string LeadSubStatusID, string SalesRepresentativeID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeID",
				new List<string> { LeadSubStatusID, SalesRepresentativeID, }
			);
		}

		public static string GetGridBySubStatusIDSalesRepresentativeID(string LeadSubStatusID, string SalesRepresentativeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeID",
				new List<string> { LeadSubStatusID, SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridBySubStatusIDSalesRepresentativeIDCount(string LeadSubStatusID, string SalesRepresentativeID, string Search
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDCount",
				new List<string> { LeadSubStatusID, SalesRepresentativeID, Search, }
			);
		}



		public static string GetGridBySubStatusIDSalesRepresentativeIDHtml(string LeadSubStatusID, string SalesRepresentativeID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDHtml",
				new List<string> { LeadSubStatusID, SalesRepresentativeID, }
			);
		}

		public static string GetGridBySubStatusIDSalesRepresentativeIDHtml(string LeadSubStatusID, string SalesRepresentativeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDHtml",
				new List<string> { LeadSubStatusID, SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridByTagID(string TagID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagID",
				new List<string> { TagID, }
			);
		}

		public static string GetGridByTagID(string TagID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagID",
				new List<string> { TagID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridByTagIDCount(string TagID, string Search
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDCount",
				new List<string> { TagID, Search, }
			);
		}



		public static string GetGridByTagIDHtml(string TagID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDHtml",
				new List<string> { TagID, }
			);
		}

		public static string GetGridByTagIDHtml(string TagID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDHtml",
				new List<string> { TagID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridByTagIDSalesRepresentativeID(string TagID, string SalesRepresentativeID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDSalesRepresentativeID",
				new List<string> { TagID, SalesRepresentativeID, }
			);
		}

		public static string GetGridByTagIDSalesRepresentativeID(string TagID, string SalesRepresentativeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDSalesRepresentativeID",
				new List<string> { TagID, SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridByTagIDSalesRepresentativeIDCount(string TagID, string SalesRepresentativeID, string Search
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDSalesRepresentativeIDCount",
				new List<string> { TagID, SalesRepresentativeID, Search, }
			);
		}



		public static string GetGridByTagIDSalesRepresentativeIDHtml(string TagID, string SalesRepresentativeID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDSalesRepresentativeIDHtml",
				new List<string> { TagID, SalesRepresentativeID, }
			);
		}

		public static string GetGridByTagIDSalesRepresentativeIDHtml(string TagID, string SalesRepresentativeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDSalesRepresentativeIDHtml",
				new List<string> { TagID, SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridByTagIDStatusIDSalesRepresentativeID(string TagID, string LeadStatusID, string SalesRepresentativeID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeID",
				new List<string> { TagID, LeadStatusID, SalesRepresentativeID, }
			);
		}

		public static string GetGridByTagIDStatusIDSalesRepresentativeID(string TagID, string LeadStatusID, string SalesRepresentativeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeID",
				new List<string> { TagID, LeadStatusID, SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridByTagIDStatusIDSalesRepresentativeIDCount(string TagID, string LeadStatusID, string SalesRepresentativeID, string Search
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDCount",
				new List<string> { TagID, LeadStatusID, SalesRepresentativeID, Search, }
			);
		}



		public static string GetGridByTagIDStatusIDSalesRepresentativeIDHtml(string TagID, string LeadStatusID, string SalesRepresentativeID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDHtml",
				new List<string> { TagID, LeadStatusID, SalesRepresentativeID, }
			);
		}

		public static string GetGridByTagIDStatusIDSalesRepresentativeIDHtml(string TagID, string LeadStatusID, string SalesRepresentativeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDHtml",
				new List<string> { TagID, LeadStatusID, SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridByTagIDStatusID(string TagID, string LeadStatusID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDStatusID",
				new List<string> { TagID, LeadStatusID, }
			);
		}

		public static string GetGridByTagIDStatusID(string TagID, string LeadStatusID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDStatusID",
				new List<string> { TagID, LeadStatusID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridByTagIDStatusIDCount(string TagID, string LeadStatusID, string Search
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDStatusIDCount",
				new List<string> { TagID, LeadStatusID, Search, }
			);
		}



		public static string GetGridByTagIDStatusIDHtml(string TagID, string LeadStatusID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDStatusIDHtml",
				new List<string> { TagID, LeadStatusID, }
			);
		}

		public static string GetGridByTagIDStatusIDHtml(string TagID, string LeadStatusID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDStatusIDHtml",
				new List<string> { TagID, LeadStatusID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridByTagIDSubStatusID(string TagID, string LeadSubStatusID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDSubStatusID",
				new List<string> { TagID, LeadSubStatusID, }
			);
		}

		public static string GetGridByTagIDSubStatusID(string TagID, string LeadSubStatusID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDSubStatusID",
				new List<string> { TagID, LeadSubStatusID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridByTagIDSubStatusIDCount(string TagID, string LeadSubStatusID, string Search
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDSubStatusIDCount",
				new List<string> { TagID, LeadSubStatusID, Search, }
			);
		}



		public static string GetGridByTagIDSubStatusIDHtml(string TagID, string LeadSubStatusID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDSubStatusIDHtml",
				new List<string> { TagID, LeadSubStatusID, }
			);
		}

		public static string GetGridByTagIDSubStatusIDHtml(string TagID, string LeadSubStatusID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDSubStatusIDHtml",
				new List<string> { TagID, LeadSubStatusID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridByTagIDSubStatusIDSalesRepresentativeID(string TagID, string LeadSubStatusID, string SalesRepresentativeID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeID",
				new List<string> { TagID, LeadSubStatusID, SalesRepresentativeID, }
			);
		}

		public static string GetGridByTagIDSubStatusIDSalesRepresentativeID(string TagID, string LeadSubStatusID, string SalesRepresentativeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeID",
				new List<string> { TagID, LeadSubStatusID, SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridByTagIDSubStatusIDSalesRepresentativeIDCount(string TagID, string LeadSubStatusID, string SalesRepresentativeID, string Search
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDCount",
				new List<string> { TagID, LeadSubStatusID, SalesRepresentativeID, Search, }
			);
		}



		public static string GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml(string TagID, string LeadSubStatusID, string SalesRepresentativeID
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml",
				new List<string> { TagID, LeadSubStatusID, SalesRepresentativeID, }
			);
		}

		public static string GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml(string TagID, string LeadSubStatusID, string SalesRepresentativeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml",
				new List<string> { TagID, LeadSubStatusID, SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetGridCount(string Search
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridCount",
				new List<string> { Search, }
			);
		}



		public static string GetGridHtml(
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridHtml",
				new List<string> { }
			);
		}

		public static string GetGridHtml(string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetGridHtml",
				new List<string> { Search, SortColumn, SortAscending, SkipRows, NumRows, }
			);
		}



		public static string GetInsert(
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetInsert",
				new List<string> { }
			);
		}



		public static string GetMessagesByPhone(string Phone
		)
		{
			Initialize();

			return RooTraxState.kScriptControl.EvaluateFunctionN(
				"LeadsAdmin.GetMessagesByPhone",
				new List<string> { Phone, }
			);
		}


	}
}
