
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class LeadsRow : RooTrax.Common.DB.BasicRow
	{
		
		public int? AccountID { get; set;}
			
		private int? m_LeadSubStatusID;
		public int? LeadSubStatusID
		{
			get 
			{ 
				return this.m_LeadSubStatusID;
			}
					
			set 
			{ 
				this.m_LeadSubStatusID = value; 
				this.m_LeadSubStatusRow = null; 
			}
		} 
					
		public DateTime? FollowUpDate { get; set;}
			
		public int LeadID { get; set;}
			
		public string? Company { get; set;}
			
		public string? FirstName { get; set;}
			
		public string? LastName { get; set;}
			
		public string? Phone { get; set;}
			
		public string? Email { get; set;}
			
		public string? Address { get; set;}
			
		public string? Address2 { get; set;}
			
		public string? City { get; set;}
			
		public string? State { get; set;}
			
		public string? ZipCode { get; set;}
			
		private int m_SourceID;
		public int SourceID
		{
			get 
			{ 
				return this.m_SourceID;
			}
					
			set 
			{ 
				this.m_SourceID = value; 
				this.m_SourceRow = null; 
			}
		} 
					
		public DateTime? LastContactedDate { get; set;}
			
		public int Priority { get; set;}
			
		private int m_LeadStatusID;
		public int LeadStatusID
		{
			get 
			{ 
				return this.m_LeadStatusID;
			}
					
			set 
			{ 
				this.m_LeadStatusID = value; 
				this.m_LeadStatusRow = null; 
			}
		} 
					
		public int? OpportunitySize { get; set;}
			
		public DateTime DateCreated { get; set;}
			
		public DateTime LastUpdated { get; set;}
			
		private int? m_SalesRepresentativeID;
		public int? SalesRepresentativeID
		{
			get 
			{ 
				return this.m_SalesRepresentativeID;
			}
					
			set 
			{ 
				this.m_SalesRepresentativeID = value; 
				this.m_SalesRepresentativeRow = null; 
			}
		} 
					
		public string? ImportKey { get; set;}
			
		public DateTime? GeneratedDate { get; set;}
			
		private int? m_CampaignID;
		public int? CampaignID
		{
			get 
			{ 
				return this.m_CampaignID;
			}
					
			set 
			{ 
				this.m_CampaignID = value; 
				this.m_CampaignRow = null; 
			}
		} 
					

		private string ? m_strData = null;
		public string ? Data 
		{ 
			get
			{
				return (null != m_jsonDataObject ? m_jsonDataObject.ToString() : m_strData);
			}

			set
			{
				m_strData = value;
				m_jsonDataObject = null;
			}
		}

		private JsonObject ? m_jsonDataObject = null;
		public JsonObject DataObject
		{
			get
			{
				if (null == m_jsonDataObject)
					m_jsonDataObject = new JsonObject(StringUtil.IsEmpty(this.Data) ? "{}" : this.Data!);

				return m_jsonDataObject;
			}
		}
		
		private LeadNotesDataTable ? m_LeadNotes = null;
		public LeadNotesDataTable ? LeadNotes
		{
			get
			{
				if (null == m_LeadNotes && this.EnableLazyLoadProperties)
					m_LeadNotes = LeadNotesRepository.GetLeadNotesByLeadID(this.LeadID);
				return m_LeadNotes;
			}
		}		
    				
		private LeadContactsDataTable ? m_LeadContacts = null;
		public LeadContactsDataTable ? LeadContacts
		{
			get
			{
				if (null == m_LeadContacts && this.EnableLazyLoadProperties)
					m_LeadContacts = LeadContactsRepository.GetLeadContactsByLeadID(this.LeadID);
				return m_LeadContacts;
			}
		}		
    				
		private CampaignsRow ? m_CampaignRow = null;	
		public CampaignsRow ? Campaign
		{
			get
			{
				if (null == m_CampaignRow &&  null != this.CampaignID && this.EnableLazyLoadProperties)
					m_CampaignRow = CampaignsRepository.Get((int)this.CampaignID);
		
				return m_CampaignRow;
			}
		}    				
		private SourcesRow ? m_SourceRow = null;	
		public SourcesRow ? Source
		{
			get
			{
				if (null == m_SourceRow &&  this.EnableLazyLoadProperties)
					m_SourceRow = SourcesRepository.Get((int)this.SourceID);
		
				return m_SourceRow;
			}
		}    				
		private LeadStatusesRow ? m_LeadStatusRow = null;	
		public LeadStatusesRow ? LeadStatus
		{
			get
			{
				if (null == m_LeadStatusRow &&  this.EnableLazyLoadProperties)
					m_LeadStatusRow = LeadStatusesRepository.Get((int)this.LeadStatusID);
		
				return m_LeadStatusRow;
			}
		}    				
		private LeadSubStatusesRow ? m_LeadSubStatusRow = null;	
		public LeadSubStatusesRow ? LeadSubStatus
		{
			get
			{
				if (null == m_LeadSubStatusRow &&  null != this.LeadSubStatusID && this.EnableLazyLoadProperties)
					m_LeadSubStatusRow = LeadSubStatusesRepository.Get((int)this.LeadSubStatusID);
		
				return m_LeadSubStatusRow;
			}
		}    				
		private SalesRepresentativesRow ? m_SalesRepresentativeRow = null;	
		public SalesRepresentativesRow ? SalesRepresentative
		{
			get
			{
				if (null == m_SalesRepresentativeRow &&  null != this.SalesRepresentativeID && this.EnableLazyLoadProperties)
					m_SalesRepresentativeRow = SalesRepresentativesRepository.Get((int)this.SalesRepresentativeID);
		
				return m_SalesRepresentativeRow;
			}
		}    				
		private TagsDataTable ? m_LeadTagTags = null;
		public TagsDataTable ? LeadTagTags
		{
			get
			{
				if (null == m_LeadTagTags && this.EnableLazyLoadProperties)
					m_LeadTagTags = LeadTagsRepository.GetTagsByLeadTagLeadID(this.LeadID);

				return m_LeadTagTags;
			}
		}

		private LeadTagsDataTable ? m_LeadTags = null;
		public LeadTagsDataTable ? LeadTags
		{
			get
			{
				if (null == m_LeadTags && this.EnableLazyLoadProperties)
					m_LeadTags = LeadTagsRepository.GetLeadTagsByLeadID(this.LeadID);
				return m_LeadTags;
			}
		}	
								
		
		public LeadsRow()
		{
			
			this.LeadID = 0;
				
			this.SourceID = 0;
				
			this.Priority = 0;
				
			this.LeadStatusID = 0;
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  LeadsRow( LeadsRow oRow)
		{
			
			this.AccountID = oRow.AccountID;
			
			this.LeadSubStatusID = oRow.LeadSubStatusID;
			
			this.FollowUpDate = oRow.FollowUpDate;
			
			this.LeadID = oRow.LeadID;
			
			this.Company = oRow.Company;
			
			this.FirstName = oRow.FirstName;
			
			this.LastName = oRow.LastName;
			
			this.Phone = oRow.Phone;
			
			this.Email = oRow.Email;
			
			this.Address = oRow.Address;
			
			this.Address2 = oRow.Address2;
			
			this.City = oRow.City;
			
			this.State = oRow.State;
			
			this.ZipCode = oRow.ZipCode;
			
			this.SourceID = oRow.SourceID;
			
			this.LastContactedDate = oRow.LastContactedDate;
			
			this.Priority = oRow.Priority;
			
			this.LeadStatusID = oRow.LeadStatusID;
			
			this.OpportunitySize = oRow.OpportunitySize;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
			this.SalesRepresentativeID = oRow.SalesRepresentativeID;
			
			this.ImportKey = oRow.ImportKey;
			
			this.GeneratedDate = oRow.GeneratedDate;
			
			this.CampaignID = oRow.CampaignID;
			
		}	

		public override int GetHashCode()
		{
			return (LeadID + 1717 << 12);
		}		

		public override string ToString()
		{
			return $"({LeadID})";
		}
		
	}
	
	public class LeadsDataTable : List<LeadsRow>
	{	
		public LeadsDataTable(LeadsDataTable oTable)
			: base(oTable)
		{
		}

		public LeadsDataTable()
		{
		}
	}

    public partial class LeadsRepository
    {
		static private bool m_bIsCachingEnabled = false; 
		static public bool IsCachingEnabled
		{
			get
			{
				return m_bIsCachingEnabled;
			}
			set
			{
				m_bIsCachingEnabled = value;
			}
		}

		private static RowCache ? m_cache = null;
		public static RowCache Cache
		{
			get
			{
				if (null == m_cache)
					m_cache = CacheManager.Instance.GetOrCreateCache("Leads");

				return m_cache!;
			}
		}

		internal static LeadsRow PopulateRowFromReader(SqlDataReader reader)
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

	
		public static int InsertLead(LeadsRow oLead)
		{
			return InsertLead(
    								 oLead.AccountID, 
    								 oLead.LeadSubStatusID, 
    								 oLead.FollowUpDate, 
    								 oLead.Company, 
    								 oLead.FirstName, 
    								 oLead.LastName, 
    								 oLead.Phone, 
    								 oLead.Email, 
    								 oLead.Address, 
    								 oLead.Address2, 
    								 oLead.City, 
    								 oLead.State, 
    								 oLead.ZipCode, 
    								 oLead.SourceID, 
    								 oLead.LastContactedDate, 
    								 oLead.Priority, 
    								 oLead.LeadStatusID, 
    								 oLead.OpportunitySize, 
    								 oLead.Data, 
    								 oLead.SalesRepresentativeID, 
    								 oLead.ImportKey, 
    								 oLead.GeneratedDate, 
    								 oLead.CampaignID
									);			
		}

		public static int  InsertLead(
    		int? AccountID, 
    		int? LeadSubStatusID, 
    		DateTime? FollowUpDate, 
    		string? Company, 
    		string? FirstName, 
    		string? LastName, 
    		string? Phone, 
    		string? Email, 
    		string? Address, 
    		string? Address2, 
    		string? City, 
    		string? State, 
    		string? ZipCode, 
    		int SourceID, 
    		DateTime? LastContactedDate, 
    		int Priority, 
    		int LeadStatusID, 
    		int? OpportunitySize, 
    		string? Data, 
    		int? SalesRepresentativeID, 
    		string? ImportKey, 
    		DateTime? GeneratedDate, 
    		int? CampaignID)
		{
			int iLeadID = 0;

			try
			{
				string strStoredProc = "InsertLeadSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@AccountID", AccountID));
				
				sqlParams.Add(DataAccess.Params.ID("@LeadSubStatusID", LeadSubStatusID));
				
				sqlParams.Add(DataAccess.Params.DateTime("@FollowUpDate", FollowUpDate));
				
				sqlParams.Add(DataAccess.Params.String("@Company", Company));
				
				sqlParams.Add(DataAccess.Params.String("@FirstName", FirstName));
				
				sqlParams.Add(DataAccess.Params.String("@LastName", LastName));
				
				sqlParams.Add(DataAccess.Params.Phone("@Phone", Phone));
				
				sqlParams.Add(DataAccess.Params.Email("@Email", Email));
				
				sqlParams.Add(DataAccess.Params.String("@Address", Address));
				
				sqlParams.Add(DataAccess.Params.String("@Address2", Address2));
				
				sqlParams.Add(DataAccess.Params.String("@City", City));
				
				sqlParams.Add(DataAccess.Params.String("@State", State));
				
				sqlParams.Add(DataAccess.Params.Zip("@ZipCode", ZipCode));
				
				sqlParams.Add(DataAccess.Params.ID("@SourceID", SourceID));
				
				sqlParams.Add(DataAccess.Params.DateTime("@LastContactedDate", LastContactedDate));
				
				sqlParams.Add(DataAccess.Params.Integer("@Priority", Priority));
				
				sqlParams.Add(DataAccess.Params.ID("@LeadStatusID", LeadStatusID));
				
				sqlParams.Add(DataAccess.Params.Integer("@OpportunitySize", OpportunitySize));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));
				
				sqlParams.Add(DataAccess.Params.String("@ImportKey", ImportKey));
				
				sqlParams.Add(DataAccess.Params.DateTime("@GeneratedDate", GeneratedDate));
				
				sqlParams.Add(DataAccess.Params.ID("@CampaignID", CampaignID));
				
				iLeadID = DataAccess.IntFromProc(strStoredProc, sqlParams, "LeadID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iLeadID;
		}
		
		public static void UpdateLead(
    		int? AccountID, 
    		int? LeadSubStatusID, 
    		DateTime? FollowUpDate, 
    		int LeadID, 
    		string? Company, 
    		string? FirstName, 
    		string? LastName, 
    		string? Phone, 
    		string? Email, 
    		string? Address, 
    		string? Address2, 
    		string? City, 
    		string? State, 
    		string? ZipCode, 
    		int SourceID, 
    		DateTime? LastContactedDate, 
    		int Priority, 
    		int LeadStatusID, 
    		int? OpportunitySize, 
    		string? Data, 
    		int? SalesRepresentativeID, 
    		string? ImportKey, 
    		DateTime? GeneratedDate, 
    		int? CampaignID)
    	{    	
    		try
			{
				string strStoredProc = "UpdateLeadSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@AccountID", AccountID));
				
				sqlParams.Add(DataAccess.Params.ID("@LeadSubStatusID", LeadSubStatusID));
				
				sqlParams.Add(DataAccess.Params.DateTime("@FollowUpDate", FollowUpDate));
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				sqlParams.Add(DataAccess.Params.String("@Company", Company));
				
				sqlParams.Add(DataAccess.Params.String("@FirstName", FirstName));
				
				sqlParams.Add(DataAccess.Params.String("@LastName", LastName));
				
				sqlParams.Add(DataAccess.Params.Phone("@Phone", Phone));
				
				sqlParams.Add(DataAccess.Params.Email("@Email", Email));
				
				sqlParams.Add(DataAccess.Params.String("@Address", Address));
				
				sqlParams.Add(DataAccess.Params.String("@Address2", Address2));
				
				sqlParams.Add(DataAccess.Params.String("@City", City));
				
				sqlParams.Add(DataAccess.Params.String("@State", State));
				
				sqlParams.Add(DataAccess.Params.Zip("@ZipCode", ZipCode));
				
				sqlParams.Add(DataAccess.Params.ID("@SourceID", SourceID));
				
				sqlParams.Add(DataAccess.Params.DateTime("@LastContactedDate", LastContactedDate));
				
				sqlParams.Add(DataAccess.Params.Integer("@Priority", Priority));
				
				sqlParams.Add(DataAccess.Params.ID("@LeadStatusID", LeadStatusID));
				
				sqlParams.Add(DataAccess.Params.Integer("@OpportunitySize", OpportunitySize));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));
				
				sqlParams.Add(DataAccess.Params.String("@ImportKey", ImportKey));
				
				sqlParams.Add(DataAccess.Params.DateTime("@GeneratedDate", GeneratedDate));
				
				sqlParams.Add(DataAccess.Params.ID("@CampaignID", CampaignID));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateLead(LeadsRow oLead)
		{
			  UpdateLead(
    								 oLead.AccountID, 
    								 oLead.LeadSubStatusID, 
    								 oLead.FollowUpDate, 
    								 oLead.LeadID, 
    								 oLead.Company, 
    								 oLead.FirstName, 
    								 oLead.LastName, 
    								 oLead.Phone, 
    								 oLead.Email, 
    								 oLead.Address, 
    								 oLead.Address2, 
    								 oLead.City, 
    								 oLead.State, 
    								 oLead.ZipCode, 
    								 oLead.SourceID, 
    								 oLead.LastContactedDate, 
    								 oLead.Priority, 
    								 oLead.LeadStatusID, 
    								 oLead.OpportunitySize, 
    								 oLead.Data, 
    								 oLead.SalesRepresentativeID, 
    								 oLead.ImportKey, 
    								 oLead.GeneratedDate, 
    								 oLead.CampaignID
									);			
		}
		
    	public static void RemoveLead(int LeadID)
    	{
			try
			{
				string strStoredProc = "RemoveLeadSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Lead since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static LeadsRow ? Get(int LeadID)
		{
			LeadsRow ? oLead = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oLead = Cache.Get<LeadsRow>(LeadID);

				if (null != oLead)
					return oLead;
			}

			try
			{
				string strStoredProc = "GetLeadSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oLead = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oLead)
			{
				
				Cache.Insert(oLead, oLead.LeadID, oLead.LeadID.ToString());
				
			}

			return oLead;
		}
		
		public static LeadsDataTable GetAll()
		{
			LeadsDataTable tblLeads = new LeadsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadsSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadsRow rowLead = PopulateRowFromReader(reader);
					
					tblLeads.Add(rowLead);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeads;
		}	
		
		public static int CopyLead(int LeadID)
		{
			int iLeadID = 0;

			try
			{
				string strStoredProc = "CopyLeadSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));

				iLeadID = DataAccess.IntFromProc(strStoredProc, sqlParams, "LeadID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iLeadID;
		}  
		
			
    	public static void UpdateLeadData(int LeadID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateLeadDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

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
		
		public static void UpdateLeadData(LeadsRow rowLead)
    	{
    		UpdateLeadData(rowLead.LeadID, rowLead.Data);
    	}  
    	
		public static LeadsDataTable GetLeadsByCampaignID(int? CampaignID)
		{
			LeadsDataTable tblLeads = new LeadsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadsByCampaignIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@CampaignID", CampaignID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadsRow rowLead = PopulateRowFromReader(reader);

					tblLeads.Add(rowLead);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeads;
		}				
		public static LeadsDataTable GetLeadsBySourceID(int SourceID)
		{
			LeadsDataTable tblLeads = new LeadsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadsBySourceIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SourceID", SourceID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadsRow rowLead = PopulateRowFromReader(reader);

					tblLeads.Add(rowLead);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeads;
		}				
		public static LeadsDataTable GetLeadsSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			LeadsDataTable tblLeads = new LeadsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadsSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadsRow rowLead = PopulateRowFromReader(reader);

					tblLeads.Add(rowLead);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeads;
		}				
		public static int? GetLeadsSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadsSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetLeadsSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static LeadsDataTable GetLeadsByCampaignIDSp_PagingSp(int? CampaignID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			LeadsDataTable tblLeads = new LeadsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadsByCampaignIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@CampaignID", CampaignID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadsRow rowLead = PopulateRowFromReader(reader);

					tblLeads.Add(rowLead);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeads;
		}				
		public static int? GetLeadsByCampaignIDSp_CountSp(int? CampaignID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadsByCampaignIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@CampaignID", CampaignID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetLeadsByCampaignIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static LeadsDataTable GetLeadsBySourceIDSp_PagingSp(int SourceID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			LeadsDataTable tblLeads = new LeadsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadsBySourceIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SourceID", SourceID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadsRow rowLead = PopulateRowFromReader(reader);

					tblLeads.Add(rowLead);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeads;
		}				
		public static int? GetLeadsBySourceIDSp_CountSp(int SourceID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadsBySourceIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SourceID", SourceID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetLeadsBySourceIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
    	public static void UpdateFollowUpDate(int LeadID, DateTime? FollowUpDate)
    	{
			try
			{
				string strStoredProc = "Lead_UpdateFollowUpDate_Sp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				sqlParams.Add(DataAccess.Params.DateTime("@FollowUpDate", FollowUpDate));
				
				
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
		
		public static LeadsDataTable GetLeadsByPhone(string? Phone)
		{
			LeadsDataTable tblLeads = new LeadsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadsByPhoneSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Phone("@Phone", Phone));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadsRow rowLead = PopulateRowFromReader(reader);

					tblLeads.Add(rowLead);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeads;
		}				
		public static LeadsDataTable GetLeadsByEmail(string? Email)
		{
			LeadsDataTable tblLeads = new LeadsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadsByEmailSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Email("@Email", Email));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadsRow rowLead = PopulateRowFromReader(reader);

					tblLeads.Add(rowLead);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeads;
		}				
		public static LeadsDataTable GetLeadsByImportKey(string? ImportKey)
		{
			LeadsDataTable tblLeads = new LeadsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadsByImportKeySp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@ImportKey", ImportKey));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadsRow rowLead = PopulateRowFromReader(reader);

					tblLeads.Add(rowLead);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeads;
		}				
		public static LeadsDataTable GetLeadsByLeadStatusID(int LeadStatusID)
		{
			LeadsDataTable tblLeads = new LeadsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadsByLeadStatusIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadStatusID", LeadStatusID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadsRow rowLead = PopulateRowFromReader(reader);

					tblLeads.Add(rowLead);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeads;
		}				
		public static LeadsDataTable GetLeadsBySalesRepresentativeID(int? SalesRepresentativeID)
		{
			LeadsDataTable tblLeads = new LeadsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadsBySalesRepresentativeIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadsRow rowLead = PopulateRowFromReader(reader);

					tblLeads.Add(rowLead);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeads;
		}				
		public static LeadsDataTable GetLeadsByTagIDSalesRepresentativeID(int TagID, int? SalesRepresentativeID)
		{
			LeadsDataTable tblLeads = new LeadsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadsByTagIDSalesRepresentativeIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Integer("@TagID", TagID));
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadsRow rowLead = PopulateRowFromReader(reader);

					tblLeads.Add(rowLead);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeads;
		}				
		public static LeadsDataTable GetDuplicate(string? Company, string? FirstName, string? LastName, string? Phone, string? Email, string? Address)
		{
			LeadsDataTable tblLeads = new LeadsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "Lead_GetDuplicate_Sp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Company", Company));
				
				sqlParams.Add(DataAccess.Params.String("@FirstName", FirstName));
				
				sqlParams.Add(DataAccess.Params.String("@LastName", LastName));
				
				sqlParams.Add(DataAccess.Params.Phone("@Phone", Phone));
				
				sqlParams.Add(DataAccess.Params.Email("@Email", Email));
				
				sqlParams.Add(DataAccess.Params.String("@Address", Address));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadsRow rowLead = PopulateRowFromReader(reader);

					tblLeads.Add(rowLead);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeads;
		}				
		public static LeadsDataTable GetLeadsByLeadSubStatusID(int? LeadSubStatusID)
		{
			LeadsDataTable tblLeads = new LeadsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadsByLeadSubStatusIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadSubStatusID", LeadSubStatusID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadsRow rowLead = PopulateRowFromReader(reader);

					tblLeads.Add(rowLead);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeads;
		}				
	}

}	

		