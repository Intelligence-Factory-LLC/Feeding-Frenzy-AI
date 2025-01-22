
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class CampaignsRow : RooTrax.Common.DB.BasicRow
	{
		
		public int CampaignID { get; set;}
			
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
					
		public string CampaignName { get; set;}
			
		public string? CampaignKey { get; set;}
			
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
		
		private LeadsDataTable ? m_Leads = null;
		public LeadsDataTable ? Leads
		{
			get
			{
				if (null == m_Leads && this.EnableLazyLoadProperties)
					m_Leads = LeadsRepository.GetLeadsByCampaignID(this.CampaignID);
				return m_Leads;
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
		
		public CampaignsRow()
		{
			
			this.CampaignID = 0;
				
			this.SourceID = 0;
				
			this.CampaignName = "";
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  CampaignsRow( CampaignsRow oRow)
		{
			
			this.CampaignID = oRow.CampaignID;
			
			this.SourceID = oRow.SourceID;
			
			this.CampaignName = oRow.CampaignName;
			
			this.CampaignKey = oRow.CampaignKey;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
		}	

		public override int GetHashCode()
		{
			return (CampaignID + 1725 << 12);
		}		

		public override string ToString()
		{
			return $"{CampaignName} ({CampaignID})";
		}
		
	}
	
	public class CampaignsDataTable : List<CampaignsRow>
	{	
		public CampaignsDataTable(CampaignsDataTable oTable)
			: base(oTable)
		{
		}

		public CampaignsDataTable()
		{
		}
	}

    public partial class CampaignsRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("Campaigns");

				return m_cache!;
			}
		}



	
		public static CampaignsDataTable GetCampaignsSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			CampaignsDataTable tblCampaigns = new CampaignsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetCampaignsSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					CampaignsRow rowCampaign = new CampaignsRow();
					
					rowCampaign.CampaignID = DataAccess.GetID(reader, "CampaignID");
					rowCampaign.SourceID = DataAccess.GetID(reader, "SourceID");
					rowCampaign.CampaignName = DataAccess.GetString(reader, "CampaignName");
					rowCampaign.CampaignKey = DataAccess.GetStringOrNull(reader, "CampaignKey");
					rowCampaign.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowCampaign.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowCampaign.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					
					tblCampaigns.Add(rowCampaign);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblCampaigns;
		}				
		public static int? GetCampaignsSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetCampaignsSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetCampaignsSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static CampaignsDataTable GetCampaignsBySourceIDSp_PagingSp(int SourceID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			CampaignsDataTable tblCampaigns = new CampaignsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetCampaignsBySourceIDSp_PagingSp";

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
					CampaignsRow rowCampaign = new CampaignsRow();
					
					rowCampaign.CampaignID = DataAccess.GetID(reader, "CampaignID");
					rowCampaign.SourceID = DataAccess.GetID(reader, "SourceID");
					rowCampaign.CampaignName = DataAccess.GetString(reader, "CampaignName");
					rowCampaign.CampaignKey = DataAccess.GetStringOrNull(reader, "CampaignKey");
					rowCampaign.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowCampaign.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowCampaign.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					
					tblCampaigns.Add(rowCampaign);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblCampaigns;
		}				
		public static int? GetCampaignsBySourceIDSp_CountSp(int SourceID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetCampaignsBySourceIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SourceID", SourceID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetCampaignsBySourceIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static int InsertCampaign(CampaignsRow oCampaign)
		{
			return InsertCampaign(
    								 oCampaign.SourceID, 
    								 oCampaign.CampaignName, 
    								 oCampaign.CampaignKey, 
    								 oCampaign.Data
									);			
		}

		public static int  InsertCampaign(
    		int SourceID, 
    		string CampaignName, 
    		string? CampaignKey, 
    		string? Data)
		{
			int iCampaignID = 0;

			try
			{
				string strStoredProc = "InsertCampaignSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SourceID", SourceID));
				
				sqlParams.Add(DataAccess.Params.String("@CampaignName", CampaignName));
				
				sqlParams.Add(DataAccess.Params.String("@CampaignKey", CampaignKey));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iCampaignID = DataAccess.IntFromProc(strStoredProc, sqlParams, "CampaignID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Campaign since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iCampaignID;
		}
		
		public static void UpdateCampaign(
    		int CampaignID, 
    		int SourceID, 
    		string CampaignName, 
    		string? CampaignKey, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateCampaignSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@CampaignID", CampaignID));
				
				sqlParams.Add(DataAccess.Params.ID("@SourceID", SourceID));
				
				sqlParams.Add(DataAccess.Params.String("@CampaignName", CampaignName));
				
				sqlParams.Add(DataAccess.Params.String("@CampaignKey", CampaignKey));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(CampaignID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Campaign since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateCampaign(CampaignsRow oCampaign)
		{
			  UpdateCampaign(
    								 oCampaign.CampaignID, 
    								 oCampaign.SourceID, 
    								 oCampaign.CampaignName, 
    								 oCampaign.CampaignKey, 
    								 oCampaign.Data
									);			
		}
		
    	public static void RemoveCampaign(int CampaignID)
    	{
			try
			{
				string strStoredProc = "RemoveCampaignSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@CampaignID", CampaignID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(CampaignID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Campaign since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static CampaignsRow ? Get(int CampaignID)
		{
			CampaignsRow ? oCampaign = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oCampaign = Cache.Get<CampaignsRow>(CampaignID);

				if (null != oCampaign)
					return oCampaign;
			}

			try
			{
				string strStoredProc = "GetCampaignSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@CampaignID", CampaignID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oCampaign = new CampaignsRow();
					
					oCampaign.CampaignID = DataAccess.GetID(reader, "CampaignID");
					oCampaign.SourceID = DataAccess.GetID(reader, "SourceID");
					oCampaign.CampaignName = DataAccess.GetString(reader, "CampaignName");
					oCampaign.CampaignKey = DataAccess.GetStringOrNull(reader, "CampaignKey");
					oCampaign.Data = DataAccess.GetStringOrNull(reader, "Data");
					oCampaign.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oCampaign.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");						
						
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

			if (IsCachingEnabled && null != oCampaign)
			{
				
				Cache.Insert(oCampaign, oCampaign.CampaignID, oCampaign.CampaignName?.ToString());
				
			}

			return oCampaign;
		}
		
		public static CampaignsDataTable GetAll()
		{
			CampaignsDataTable tblCampaigns = new CampaignsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetCampaignsSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					CampaignsRow rowCampaign = new CampaignsRow();
					
					rowCampaign.CampaignID = DataAccess.GetID(reader, "CampaignID");
					rowCampaign.SourceID = DataAccess.GetID(reader, "SourceID");
					rowCampaign.CampaignName = DataAccess.GetString(reader, "CampaignName");
					rowCampaign.CampaignKey = DataAccess.GetStringOrNull(reader, "CampaignKey");
					rowCampaign.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowCampaign.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowCampaign.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					
					tblCampaigns.Add(rowCampaign);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblCampaigns;
		}	
		
		public static int CopyCampaign(int CampaignID)
		{
			int iCampaignID = 0;

			try
			{
				string strStoredProc = "CopyCampaignSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@CampaignID", CampaignID));

				iCampaignID = DataAccess.IntFromProc(strStoredProc, sqlParams, "CampaignID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Campaign since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iCampaignID;
		}  
		
		public static CampaignsRow ? GetCampaignByCampaignName(string CampaignName)
		{
			CampaignsRow ? oCampaign = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oCampaign = Cache.Get<CampaignsRow>(CampaignName.ToString());

					if (null != oCampaign)
						return oCampaign;
				}
						

				string strStoredProc = "GetCampaignByCampaignNameSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@CampaignName", CampaignName));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oCampaign = new CampaignsRow();
					
					oCampaign.CampaignID = DataAccess.GetID(reader, "CampaignID");
					oCampaign.SourceID = DataAccess.GetID(reader, "SourceID");
					oCampaign.CampaignName = DataAccess.GetString(reader, "CampaignName");
					oCampaign.CampaignKey = DataAccess.GetStringOrNull(reader, "CampaignKey");
					oCampaign.Data = DataAccess.GetStringOrNull(reader, "Data");
					oCampaign.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oCampaign.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
				}

				

				if (IsCachingEnabled && null != oCampaign)
				{
					Cache.Insert(oCampaign, oCampaign.CampaignID, oCampaign.CampaignName?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oCampaign;		
		}	
			
			
    	public static void UpdateCampaignData(int CampaignID, string Data)
    	{
    		try
			{
				string strStoredProc = "UpdateCampaignDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@CampaignID", CampaignID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(CampaignID);
				}
			}
		
			finally
			{

			}
    	}   		
    	
		public static CampaignsDataTable GetCampaignsBySourceID(int SourceID)
		{
			CampaignsDataTable tblCampaigns = new CampaignsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetCampaignsBySourceIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SourceID", SourceID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					CampaignsRow rowCampaign = new CampaignsRow();
					
					rowCampaign.CampaignID = DataAccess.GetID(reader, "CampaignID");
					rowCampaign.SourceID = DataAccess.GetID(reader, "SourceID");
					rowCampaign.CampaignName = DataAccess.GetString(reader, "CampaignName");
					rowCampaign.CampaignKey = DataAccess.GetStringOrNull(reader, "CampaignKey");
					rowCampaign.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowCampaign.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowCampaign.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					
					tblCampaigns.Add(rowCampaign);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblCampaigns;
		}				
		public static CampaignsDataTable Campaigns_GetAll_Sp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			CampaignsDataTable tblCampaigns = new CampaignsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "Campaigns_GetAll_Sp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					CampaignsRow rowCampaign = new CampaignsRow();
					
					rowCampaign.CampaignID = DataAccess.GetID(reader, "CampaignID");
					rowCampaign.SourceID = DataAccess.GetID(reader, "SourceID");
					rowCampaign.CampaignName = DataAccess.GetString(reader, "CampaignName");
					rowCampaign.CampaignKey = DataAccess.GetStringOrNull(reader, "CampaignKey");
					rowCampaign.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowCampaign.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowCampaign.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					
					tblCampaigns.Add(rowCampaign);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblCampaigns;
		}				
		public static int? Campaigns_GetAll_Sp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "Campaigns_GetAll_Sp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from Campaigns_GetAll_Sp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static CampaignsRow ? GetCampaignByCampaignKey(string? CampaignKey)
		{
			CampaignsRow ? oCampaign = null;
			SqlDataReader ? reader = null;

			try
			{
				

				string strStoredProc = "GetCampaignsByCampaignKeySp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@CampaignKey", CampaignKey));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oCampaign = new CampaignsRow();
					
					oCampaign.CampaignID = DataAccess.GetID(reader, "CampaignID");
					oCampaign.SourceID = DataAccess.GetID(reader, "SourceID");
					oCampaign.CampaignName = DataAccess.GetString(reader, "CampaignName");
					oCampaign.CampaignKey = DataAccess.GetStringOrNull(reader, "CampaignKey");
					oCampaign.Data = DataAccess.GetStringOrNull(reader, "Data");
					oCampaign.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oCampaign.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
				}

				
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oCampaign;		
		}	
			
	}

}	

		