
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class TagsRow : RooTrax.Common.DB.BasicRow
	{
		
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
					
		public int TagID { get; set;}
			
		public string TagName { get; set;}
			
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
		private LeadsDataTable ? m_LeadTagLeads = null;
		public LeadsDataTable ? LeadTagLeads
		{
			get
			{
				if (null == m_LeadTagLeads && this.EnableLazyLoadProperties)
					m_LeadTagLeads = LeadTagsRepository.GetLeadsByLeadTagTagID(this.TagID);

				return m_LeadTagLeads;
			}
		}

		private LeadTagsDataTable ? m_LeadTags = null;
		public LeadTagsDataTable ? LeadTags
		{
			get
			{
				if (null == m_LeadTags && this.EnableLazyLoadProperties)
					m_LeadTags = LeadTagsRepository.GetLeadTagsByTagID(this.TagID);
				return m_LeadTags;
			}
		}	
								
		
		public TagsRow()
		{
			
			this.TagID = 0;
				
			this.TagName = "";
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  TagsRow( TagsRow oRow)
		{
			
			this.SalesRepresentativeID = oRow.SalesRepresentativeID;
			
			this.TagID = oRow.TagID;
			
			this.TagName = oRow.TagName;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
		}	

		public override int GetHashCode()
		{
			return (TagID + 1719 << 12);
		}		

		public override string ToString()
		{
			return $"{TagName} ({TagID})";
		}
		
	}
	
	public class TagsDataTable : List<TagsRow>
	{	
		public TagsDataTable(TagsDataTable oTable)
			: base(oTable)
		{
		}

		public TagsDataTable()
		{
		}
	}

    public partial class TagsRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("Tags");

				return m_cache!;
			}
		}

		internal static TagsRow PopulateRowFromReader(SqlDataReader reader)
		{
			TagsRow rowTag = new TagsRow();
			
			rowTag.SalesRepresentativeID = DataAccess.GetIDOrNull(reader, "SalesRepresentativeID");
			
			rowTag.TagID = DataAccess.GetID(reader, "TagID");
			
			rowTag.TagName = DataAccess.GetString(reader, "TagName");
			
			rowTag.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowTag.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowTag.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
									

			return rowTag;
		}

	
		public static TagsDataTable GetTagsSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			TagsDataTable tblTags = new TagsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetTagsSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					TagsRow rowTag = PopulateRowFromReader(reader);

					tblTags.Add(rowTag);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblTags;
		}				
		public static int? GetTagsSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetTagsSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetTagsSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static int InsertTag(TagsRow oTag)
		{
			return InsertTag(
    								 oTag.SalesRepresentativeID, 
    								 oTag.TagName, 
    								 oTag.Data
									);			
		}

		public static int  InsertTag(
    		int? SalesRepresentativeID, 
    		string TagName, 
    		string? Data)
		{
			int iTagID = 0;

			try
			{
				string strStoredProc = "InsertTagSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));
				
				sqlParams.Add(DataAccess.Params.String("@TagName", TagName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iTagID = DataAccess.IntFromProc(strStoredProc, sqlParams, "TagID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Tag since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iTagID;
		}
		
		public static void UpdateTag(
    		int? SalesRepresentativeID, 
    		int TagID, 
    		string TagName, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateTagSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));
				
				sqlParams.Add(DataAccess.Params.ID("@TagID", TagID));
				
				sqlParams.Add(DataAccess.Params.String("@TagName", TagName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(TagID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Tag since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateTag(TagsRow oTag)
		{
			  UpdateTag(
    								 oTag.SalesRepresentativeID, 
    								 oTag.TagID, 
    								 oTag.TagName, 
    								 oTag.Data
									);			
		}
		
    	public static void RemoveTag(int TagID)
    	{
			try
			{
				string strStoredProc = "RemoveTagSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@TagID", TagID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(TagID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Tag since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static TagsRow ? Get(int TagID)
		{
			TagsRow ? oTag = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oTag = Cache.Get<TagsRow>(TagID);

				if (null != oTag)
					return oTag;
			}

			try
			{
				string strStoredProc = "GetTagSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@TagID", TagID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oTag = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oTag)
			{
				
				Cache.Insert(oTag, oTag.TagID, oTag.TagName?.ToString());
				
			}

			return oTag;
		}
		
		public static TagsDataTable GetAll()
		{
			TagsDataTable tblTags = new TagsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetTagsSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					TagsRow rowTag = PopulateRowFromReader(reader);
					
					tblTags.Add(rowTag);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblTags;
		}	
		
		public static int CopyTag(int TagID)
		{
			int iTagID = 0;

			try
			{
				string strStoredProc = "CopyTagSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@TagID", TagID));

				iTagID = DataAccess.IntFromProc(strStoredProc, sqlParams, "TagID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Tag since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iTagID;
		}  
		
		public static TagsRow ? GetTagByTagName(string TagName)
		{
			TagsRow ? oTag = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oTag = Cache.Get<TagsRow>(TagName.ToString());

					if (null != oTag)
						return oTag;
				}
						

				string strStoredProc = "GetTagByTagNameSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@TagName", TagName));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oTag = PopulateRowFromReader(reader);
				}

				

				if (IsCachingEnabled && null != oTag)
				{
					Cache.Insert(oTag, oTag.TagID, oTag.TagName?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oTag;		
		}	
			
			
    	public static void UpdateTagData(int TagID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateTagDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@TagID", TagID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(TagID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateTagData(TagsRow rowTag)
    	{
    		UpdateTagData(rowTag.TagID, rowTag.Data);
    	}  
    	
		public static TagsDataTable GetTagsBySalesRepresentativeID(int? SalesRepresentativeID)
		{
			TagsDataTable tblTags = new TagsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetTagsBySalesRepresentativeIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					TagsRow rowTag = PopulateRowFromReader(reader);

					tblTags.Add(rowTag);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblTags;
		}				
	}

}	

		