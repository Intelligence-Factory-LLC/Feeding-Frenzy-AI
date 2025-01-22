
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class LeadTagsRow : RooTrax.Common.DB.BasicRow
	{
		
		public int LeadTagID { get; set;}
			
		private int m_LeadID;
		public int LeadID
		{
			get 
			{ 
				return this.m_LeadID;
			}
					
			set 
			{ 
				this.m_LeadID = value; 
				this.m_LeadRow = null; 
			}
		} 
					
		private int m_TagID;
		public int TagID
		{
			get 
			{ 
				return this.m_TagID;
			}
					
			set 
			{ 
				this.m_TagID = value; 
				this.m_TagRow = null; 
			}
		} 
					
		public DateTime DateCreated { get; set;}
			
		public DateTime LastUpdated { get; set;}
			

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
		
		private LeadsRow ? m_LeadRow = null;	
		public LeadsRow ? Lead
		{
			get
			{
				if (null == m_LeadRow &&  this.EnableLazyLoadProperties)
					m_LeadRow = LeadsRepository.Get((int)this.LeadID);
		
				return m_LeadRow;
			}
		}    				
		private TagsRow ? m_TagRow = null;	
		public TagsRow ? Tag
		{
			get
			{
				if (null == m_TagRow &&  this.EnableLazyLoadProperties)
					m_TagRow = TagsRepository.Get((int)this.TagID);
		
				return m_TagRow;
			}
		}    				
		
		public LeadTagsRow()
		{
			
			this.LeadTagID = 0;
				
			this.LeadID = 0;
				
			this.TagID = 0;
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  LeadTagsRow( LeadTagsRow oRow)
		{
			
			this.LeadTagID = oRow.LeadTagID;
			
			this.LeadID = oRow.LeadID;
			
			this.TagID = oRow.TagID;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
		}	

		public override int GetHashCode()
		{
			return (LeadTagID + 1718 << 12);
		}		

		public override string ToString()
		{
			return $"({LeadTagID})";
		}
		
	}
	
	public class LeadTagsDataTable : List<LeadTagsRow>
	{	
		public LeadTagsDataTable(LeadTagsDataTable oTable)
			: base(oTable)
		{
		}

		public LeadTagsDataTable()
		{
		}
	}

    public partial class LeadTagsRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("LeadTags");

				return m_cache!;
			}
		}



	
		public static LeadTagsDataTable GetLeadTagsByLeadIDSp_PagingSp(int LeadID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			LeadTagsDataTable tblLeadTags = new LeadTagsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadTagsByLeadIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadTagsRow rowLeadTag = new LeadTagsRow();
					
					rowLeadTag.LeadTagID = DataAccess.GetID(reader, "LeadTagID");
					rowLeadTag.LeadID = DataAccess.GetID(reader, "LeadID");
					rowLeadTag.TagID = DataAccess.GetID(reader, "TagID");
					rowLeadTag.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowLeadTag.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowLeadTag.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					
					tblLeadTags.Add(rowLeadTag);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadTags;
		}				
		public static int? GetLeadTagsByLeadIDSp_CountSp(int LeadID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadTagsByLeadIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetLeadTagsByLeadIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static LeadTagsDataTable GetLeadTagsByTagIDSp_PagingSp(int TagID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			LeadTagsDataTable tblLeadTags = new LeadTagsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadTagsByTagIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@TagID", TagID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadTagsRow rowLeadTag = new LeadTagsRow();
					
					rowLeadTag.LeadTagID = DataAccess.GetID(reader, "LeadTagID");
					rowLeadTag.LeadID = DataAccess.GetID(reader, "LeadID");
					rowLeadTag.TagID = DataAccess.GetID(reader, "TagID");
					rowLeadTag.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowLeadTag.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowLeadTag.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					
					tblLeadTags.Add(rowLeadTag);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadTags;
		}				
		public static int? GetLeadTagsByTagIDSp_CountSp(int TagID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadTagsByTagIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@TagID", TagID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetLeadTagsByTagIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static int InsertLeadTag(LeadTagsRow oLeadTag)
		{
			return InsertLeadTag(
    								 oLeadTag.LeadID, 
    								 oLeadTag.TagID, 
    								 oLeadTag.Data
									);			
		}

		public static int  InsertLeadTag(
    		int LeadID, 
    		int TagID, 
    		string? Data)
		{
			int iLeadTagID = 0;

			try
			{
				string strStoredProc = "InsertLeadTagSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				sqlParams.Add(DataAccess.Params.ID("@TagID", TagID));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iLeadTagID = DataAccess.IntFromProc(strStoredProc, sqlParams, "LeadTagID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Tag since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iLeadTagID;
		}
		
		public static void UpdateLeadTag(
    		int LeadTagID, 
    		int LeadID, 
    		int TagID, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateLeadTagSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadTagID", LeadTagID));
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				sqlParams.Add(DataAccess.Params.ID("@TagID", TagID));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadTagID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Tag since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateLeadTag(LeadTagsRow oLeadTag)
		{
			  UpdateLeadTag(
    								 oLeadTag.LeadTagID, 
    								 oLeadTag.LeadID, 
    								 oLeadTag.TagID, 
    								 oLeadTag.Data
									);			
		}
		
    	public static void RemoveLeadTag(int LeadTagID)
    	{
			try
			{
				string strStoredProc = "RemoveLeadTagSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadTagID", LeadTagID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadTagID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Lead Tag since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static LeadTagsRow ? Get(int LeadTagID)
		{
			LeadTagsRow ? oLeadTag = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oLeadTag = Cache.Get<LeadTagsRow>(LeadTagID);

				if (null != oLeadTag)
					return oLeadTag;
			}

			try
			{
				string strStoredProc = "GetLeadTagSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadTagID", LeadTagID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oLeadTag = new LeadTagsRow();
					
					oLeadTag.LeadTagID = DataAccess.GetID(reader, "LeadTagID");
					oLeadTag.LeadID = DataAccess.GetID(reader, "LeadID");
					oLeadTag.TagID = DataAccess.GetID(reader, "TagID");
					oLeadTag.Data = DataAccess.GetStringOrNull(reader, "Data");
					oLeadTag.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oLeadTag.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");						
						
				}
				else
				{
					//todo  handle error
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oLeadTag)
			{
				
				Cache.Insert(oLeadTag, oLeadTag.LeadTagID, oLeadTag.LeadTagID.ToString());
				
			}

			return oLeadTag;
		}
		
		public static LeadTagsDataTable GetAll()
		{
			LeadTagsDataTable tblLeadTags = new LeadTagsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadTagsSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadTagsRow rowLeadTag = new LeadTagsRow();
					
					rowLeadTag.LeadTagID = DataAccess.GetID(reader, "LeadTagID");
					rowLeadTag.LeadID = DataAccess.GetID(reader, "LeadID");
					rowLeadTag.TagID = DataAccess.GetID(reader, "TagID");
					rowLeadTag.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowLeadTag.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowLeadTag.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					
					tblLeadTags.Add(rowLeadTag);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadTags;
		}	
		
		public static int CopyLeadTag(int LeadTagID)
		{
			int iLeadTagID = 0;

			try
			{
				string strStoredProc = "CopyLeadTagSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadTagID", LeadTagID));

				iLeadTagID = DataAccess.IntFromProc(strStoredProc, sqlParams, "LeadTagID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Tag since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iLeadTagID;
		}  
		
			
    	public static void UpdateLeadTagData(int LeadTagID, string Data)
    	{
    		try
			{
				string strStoredProc = "UpdateLeadTagDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadTagID", LeadTagID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadTagID);
				}
			}
		
			finally
			{

			}
    	}   		
    	
						
		public static LeadsDataTable GetLeadsByLeadTagTagID(int TagID)
		{
			LeadsDataTable tblLeadTags = new LeadsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadsByLeadTagTagIDSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@TagID", TagID));
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
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
					
					tblLeadTags.Add(rowLead);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadTags;
		}					
		
						
		public static TagsDataTable GetTagsByLeadTagLeadID(int LeadID)
		{
			TagsDataTable tblLeadTags = new TagsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetTagsByLeadTagLeadIDSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					TagsRow rowTag = new TagsRow();
					
					rowTag.TagID = DataAccess.GetID(reader, "TagID");
					rowTag.TagName = DataAccess.GetString(reader, "TagName");
					rowTag.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowTag.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowTag.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					
					tblLeadTags.Add(rowTag);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadTags;
		}					
		
		public static LeadTagsRow ? GetLeadTagByLeadIDTagID(int LeadID, int TagID)
		{
			LeadTagsRow ? oLeadTag = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oLeadTag = Cache.Get<LeadTagsRow>(LeadID + "|" + TagID);

					if (null != oLeadTag)
						return oLeadTag;
				}
						

				string strStoredProc = "GetLeadTagsByLeadIDTagIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				sqlParams.Add(DataAccess.Params.ID("@TagID", TagID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oLeadTag = new LeadTagsRow();
					
					oLeadTag.LeadTagID = DataAccess.GetID(reader, "LeadTagID");
					oLeadTag.LeadID = DataAccess.GetID(reader, "LeadID");
					oLeadTag.TagID = DataAccess.GetID(reader, "TagID");
					oLeadTag.Data = DataAccess.GetStringOrNull(reader, "Data");
					oLeadTag.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oLeadTag.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
				}

				

				if (IsCachingEnabled && null != oLeadTag)
				{
					Cache.Insert(oLeadTag, oLeadTag.LeadTagID, LeadID + "|" + TagID);
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oLeadTag;		
		}	
			
		public static LeadTagsDataTable GetLeadTagsByLeadID(int LeadID)
		{
			LeadTagsDataTable tblLeadTags = new LeadTagsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadTagsByLeadIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadTagsRow rowLeadTag = new LeadTagsRow();
					
					rowLeadTag.LeadTagID = DataAccess.GetID(reader, "LeadTagID");
					rowLeadTag.LeadID = DataAccess.GetID(reader, "LeadID");
					rowLeadTag.TagID = DataAccess.GetID(reader, "TagID");
					rowLeadTag.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowLeadTag.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowLeadTag.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					
					tblLeadTags.Add(rowLeadTag);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadTags;
		}				
		public static LeadTagsDataTable GetLeadTagsByTagID(int TagID)
		{
			LeadTagsDataTable tblLeadTags = new LeadTagsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadTagsByTagIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@TagID", TagID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadTagsRow rowLeadTag = new LeadTagsRow();
					
					rowLeadTag.LeadTagID = DataAccess.GetID(reader, "LeadTagID");
					rowLeadTag.LeadID = DataAccess.GetID(reader, "LeadID");
					rowLeadTag.TagID = DataAccess.GetID(reader, "TagID");
					rowLeadTag.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowLeadTag.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowLeadTag.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					
					tblLeadTags.Add(rowLeadTag);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadTags;
		}				
		public static LeadTagsDataTable GetLeadTagsSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			LeadTagsDataTable tblLeadTags = new LeadTagsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadTagsSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadTagsRow rowLeadTag = new LeadTagsRow();
					
					rowLeadTag.LeadTagID = DataAccess.GetID(reader, "LeadTagID");
					rowLeadTag.LeadID = DataAccess.GetID(reader, "LeadID");
					rowLeadTag.TagID = DataAccess.GetID(reader, "TagID");
					rowLeadTag.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowLeadTag.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowLeadTag.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					
					tblLeadTags.Add(rowLeadTag);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadTags;
		}				
		public static int? GetLeadTagsSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadTagsSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetLeadTagsSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
	}

}	

		