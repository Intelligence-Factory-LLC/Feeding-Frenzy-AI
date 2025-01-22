using BasicUtilities;
using System.Data;
using System.Data.SqlClient;

namespace FeedingFrenzy.Data
{
	public partial class LeadsRow : RooTrax.Common.DB.BasicRow
	{
		public enum Priorities { Hot = 1, Warm = 2, Normal = 3, Cold = 4 };

		public string? AutomationState
		{
			get
			{
				return DataObject.GetStringOrNull(nameof(AutomationState));
			}
			set
			{
				this.DataObject[nameof(AutomationState)] = value;
			}
		}

		public string? ExternalKey
		{
			get
			{
				return DataObject.GetStringOrNull(nameof(ExternalKey));
			}
			set
			{
				this.DataObject[nameof(ExternalKey)] = value;
			}
		}

		public string? Website
		{
			get
			{
				return this.DataObject.GetStringOrNull(nameof(Website));
			}
			set
			{
				this.DataObject[nameof(Website)] = value;
			}
		}


		public Priorities FriendlyPriority
		{
			get
			{
				return (Priorities)this.Priority;
			}

			set
			{
				this.Priority = (int)value;
			}
		}

		public string? LinkedIn
		{
			get
			{
				return this.DataObject.GetStringOrNull(nameof(LinkedIn));
			}
			set
			{
				this.DataObject[nameof(LinkedIn)] = value;
			}
		}

		public string? Facebook
		{
			get
			{
				return this.DataObject.GetStringOrNull(nameof(Facebook));
			}
			set
			{
				this.DataObject[nameof(Facebook)] = value;
			}
		}


		public string? Fax
		{
			get
			{
				return this.DataObject.GetStringOrNull(nameof(Fax));
			}
			set
			{
				this.DataObject[nameof(Fax)] = DataAccess.Formatters.CleanPhoneNumber(value);
			}
		}

		public List<string> GetEmailAddresses()
		{
			List<string> lstEmails = new List<string>();
			if (!StringUtil.IsEmpty(this.Email))
				lstEmails.Add(this.Email!);

			foreach (LeadContactsRow contact in this.LeadContacts!)
			{
				if (!StringUtil.IsEmpty(contact.Email) && !lstEmails.Any(x => StringUtil.EqualNoCase(contact.Email, x)))
					lstEmails.Add(contact.Email!);
			}

			return lstEmails;
		}

		public List<string> GetEmailDomains()
		{
			List<string> lstDomains = new List<string>();
			if (!StringUtil.IsEmpty(this.Website))
			{
				string strDomain = StringUtil.GetRootDomain(this.Website!);
				if (!StringUtil.IsEmpty(strDomain))
					lstDomains.Add(strDomain);
			}

			JsonArray jsonDomains = this.DataObject.GetJsonArrayOrDefault("EmailDomains");
			lstDomains.AddRange(jsonDomains.Select(x => x.ToString()));

			return lstDomains;
		}

	}


	public partial class LeadsRepository
	{
		public static DataTable GetLeadsByStatusIDSalesRepresentativeIDSp_PagingSp2(int StatusID, int? SalesRepresentativeID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			DataTable tblLeads = new DataTable();

			try
			{
				string strStoredProc = "GetLeadsByStatusIDSalesRepresentativeIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();

				sqlParams.Add(DataAccess.Params.ID("@StatusID", StatusID));

				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));

				sqlParams.Add(DataAccess.Params.String("@Search", Search));

				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));

				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));

				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));

				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));


				tblLeads = DataAccess.DataSetFromProc(strStoredProc, sqlParams).Tables[0];

			}
			finally
			{

			}

			return tblLeads;
		}
		public static DataTable GetLeadsByTagIDStatusIDSalesRepresentativeIDSp_PagingSp2(int TagID, int StatusID, int? SalesRepresentativeID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			DataTable tblLeads = new DataTable();

			try
			{
				string strStoredProc = "GetLeadsByTagIDStatusIDSalesRepresentativeIDSp_PagingSp2";

				SqlParams sqlParams = new SqlParams();

				sqlParams.Add(DataAccess.Params.Integer("@TagID", TagID));

				sqlParams.Add(DataAccess.Params.ID("@StatusID", StatusID));

				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));

				sqlParams.Add(DataAccess.Params.String("@Search", Search));

				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));

				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));

				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));

				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));


				tblLeads = DataAccess.DataSetFromProc(strStoredProc, sqlParams).Tables[0];

			}
			finally
			{

			}

			return tblLeads;
		}
		public static DataTable GetLeadsByTagIDStatusIDSp_PagingSp2(int TagID, int StatusID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			DataTable tblLeads = new DataTable();

			try
			{
				string strStoredProc = "GetLeadsByTagIDStatusIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();

				sqlParams.Add(DataAccess.Params.Integer("@TagID", TagID));

				sqlParams.Add(DataAccess.Params.ID("@StatusID", StatusID));

				sqlParams.Add(DataAccess.Params.String("@Search", Search));

				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));

				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));

				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));

				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));


				tblLeads = DataAccess.DataSetFromProc(strStoredProc, sqlParams).Tables[0];
			}
			finally
			{
			}

			return tblLeads;
		}

		public static LeadsDataTable Leads_GetUnassigned2_Sp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows, int Weight)
		{
			LeadsDataTable tblLeads = new LeadsDataTable();
			SqlDataReader reader = null;

			try
			{
				string strStoredProc = "Leads_GetUnassigned2_Sp_PagingSp";

				SqlParams sqlParams = new SqlParams();

				sqlParams.Add(DataAccess.Params.String("@Search", Search));

				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));

				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));

				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));

				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));

				sqlParams.Add(DataAccess.Params.Integer("@Weight", Weight));


				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadsRow rowLead = PopulateLeadsRowFromReader(reader);

					tblLeads.Add(rowLead);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeads;
		}

		public static int? Leads_GetUnassigned2_Sp_CountSp(string Search, int Weight)
		{
			int? result;
			SqlDataReader reader = null;

			try
			{
				string strStoredProc = "Leads_GetUnassigned2_Sp_CountSp";

				SqlParams sqlParams = new SqlParams();

				sqlParams.Add(DataAccess.Params.Integer("@Weight", Weight));
				sqlParams.Add(DataAccess.Params.String("@Search", Search));


				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from Leads_GetUnassigned_Sp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}


		static public LeadsRow PopulateLeadsRowFromReader(SqlDataReader reader)
		{
			LeadsRow rowLead = new LeadsRow();

			rowLead.AccountID = DataAccess.GetIDOrNull(reader, "AccountID");
			rowLead.LeadSubStatusID = DataAccess.GetIDOrNull(reader, "LeadSubStatusID");
			rowLead.FollowUpDate = DataAccess.GetDateTimeOrNull(reader, "FollowUpDate");
			rowLead.LeadID = DataAccess.GetID(reader, "LeadID");
			rowLead.Company = DataAccess.GetStringOrNull(reader, "Company");
			rowLead.FirstName = DataAccess.GetStringOrNull(reader, "FirstName");
			rowLead.LastName = DataAccess.GetStringOrNull(reader, "LastName");
			rowLead.Phone = DataAccess.GetPhoneOrNull(reader, "Phone");
			rowLead.Email = DataAccess.GetEmailOrNull(reader, "Email");
			rowLead.Address = DataAccess.GetStringOrNull(reader, "Address");
			rowLead.Address2 = DataAccess.GetStringOrNull(reader, "Address2");
			rowLead.City = DataAccess.GetStringOrNull(reader, "City");
			rowLead.State = DataAccess.GetStringOrNull(reader, "State");
			rowLead.ZipCode = DataAccess.GetZipOrNull(reader, "ZipCode");
			rowLead.SourceID = DataAccess.GetID(reader, "SourceID");
			rowLead.LastContactedDate = DataAccess.GetDateTimeOrNull(reader, "LastContactedDate");
			rowLead.Priority = DataAccess.GetInteger(reader, "Priority");
			rowLead.LeadStatusID = DataAccess.GetID(reader, "LeadStatusID");
			rowLead.OpportunitySize = DataAccess.GetIntegerOrNull(reader, "OpportunitySize");
			rowLead.Data = DataAccess.GetStringOrNull(reader, "Data");
			rowLead.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			rowLead.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
			rowLead.SalesRepresentativeID = DataAccess.GetIDOrNull(reader, "SalesRepresentativeID");
			rowLead.ImportKey = DataAccess.GetStringOrNull(reader, "ImportKey");
			rowLead.GeneratedDate = DataAccess.GetDateTimeOrNull(reader, "GeneratedDate");
			rowLead.CampaignID = DataAccess.GetIDOrNull(reader, "CampaignID");

			return rowLead;
		}



		public static LeadsDataTable GetLeadsByTagIDStatusIDSp_PagingSp(int TagID, int StatusID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			LeadsDataTable tblLeads = new LeadsDataTable();
			SqlDataReader reader = null;

			try
			{
				string strStoredProc = "GetLeadsByTagIDStatusIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();

				sqlParams.Add(DataAccess.Params.Integer("@TagID", TagID));

				sqlParams.Add(DataAccess.Params.ID("@StatusID", StatusID));

				sqlParams.Add(DataAccess.Params.String("@Search", Search));

				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));

				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));

				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));

				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));


				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadsRow rowLead = PopulateLeadsRowFromReader(reader);

					tblLeads.Add(rowLead);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeads;
		}

		public static LeadsDataTable Leads_GetUnassigned_Sp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			LeadsDataTable tblLeads = new LeadsDataTable();
			SqlDataReader reader = null;

			try
			{
				string strStoredProc = "Leads_GetUnassigned_Sp_PagingSp";

				SqlParams sqlParams = new SqlParams();

				sqlParams.Add(DataAccess.Params.String("@Search", Search));

				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));

				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));

				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));

				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));


				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadsRow rowLead = new LeadsRow();

					//rowLead.SubStatusID = DataAccess.GetIDOrNull(reader, "SubStatusID");
					rowLead.FollowUpDate = DataAccess.GetDateTimeOrNull(reader, "FollowUpDate");
					rowLead.LeadID = DataAccess.GetID(reader, "LeadID");
					rowLead.Company = DataAccess.GetStringOrNull(reader, "Company");
					rowLead.FirstName = DataAccess.GetStringOrNull(reader, "FirstName");
					rowLead.LastName = DataAccess.GetStringOrNull(reader, "LastName");
					//rowLead.Title = DataAccess.GetStringOrNull(reader, "Title");
					//rowLead.Function = DataAccess.GetStringOrNull(reader, "Function");
					rowLead.Phone = DataAccess.GetPhoneOrNull(reader, "Phone");
					rowLead.Email = DataAccess.GetEmailOrNull(reader, "Email");
					rowLead.Address = DataAccess.GetStringOrNull(reader, "Address");
					rowLead.Address2 = DataAccess.GetStringOrNull(reader, "Address2");
					rowLead.City = DataAccess.GetStringOrNull(reader, "City");
					rowLead.State = DataAccess.GetStringOrNull(reader, "State");
					rowLead.ZipCode = DataAccess.GetZipOrNull(reader, "ZipCode");
					rowLead.SourceID = DataAccess.GetID(reader, "SourceID");
					//rowLead.CampainKey = DataAccess.GetStringOrNull(reader, "CampainKey");
					rowLead.LastContactedDate = DataAccess.GetDateTimeOrNull(reader, "LastContactedDate");
					rowLead.Priority = DataAccess.GetInteger(reader, "Priority");
					//rowLead.StatusID = DataAccess.GetID(reader, "StatusID");
					rowLead.OpportunitySize = DataAccess.GetIntegerOrNull(reader, "OpportunitySize");
					rowLead.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowLead.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowLead.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					rowLead.SalesRepresentativeID = DataAccess.GetIDOrNull(reader, "SalesRepresentativeID");
					rowLead.ImportKey = DataAccess.GetStringOrNull(reader, "ImportKey");
					rowLead.GeneratedDate = DataAccess.GetDateTimeOrNull(reader, "GeneratedDate");
					rowLead.CampaignID = DataAccess.GetIDOrNull(reader, "CampaignID");

					tblLeads.Add(rowLead);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeads;
		}
		public static int? Leads_GetUnassigned_Sp_CountSp(string Search)
		{
			int? result;
			SqlDataReader reader = null;

			try
			{
				string strStoredProc = "Leads_GetUnassigned_Sp_CountSp";

				SqlParams sqlParams = new SqlParams();

				sqlParams.Add(DataAccess.Params.String("@Search", Search));


				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from Leads_GetUnassigned_Sp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}

		public static void AssignLead(int LeadID, int? SalesRepresentativeID)
		{
			try
			{
				string strStoredProc = "Lead_AssignLead_Sp";

				SqlParams sqlParams = new SqlParams();

				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));

				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));


				DataAccess.ExecProc(strStoredProc, sqlParams);


				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadID);
				}

			}

			finally
			{
			}
		}
	}

}

