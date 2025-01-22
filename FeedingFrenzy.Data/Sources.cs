
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class SourcesRow : RooTrax.Common.DB.BasicRow
	{
		
		public int SourceID { get; set;}
			
		public string SourceName { get; set;}
			
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
					m_Leads = LeadsRepository.GetLeadsBySourceID(this.SourceID);
				return m_Leads;
			}
		}		
    				
		private CampaignsDataTable ? m_Campaigns = null;
		public CampaignsDataTable ? Campaigns
		{
			get
			{
				if (null == m_Campaigns && this.EnableLazyLoadProperties)
					m_Campaigns = CampaignsRepository.GetCampaignsBySourceID(this.SourceID);
				return m_Campaigns;
			}
		}		
    				
		
		public SourcesRow()
		{
			
			this.SourceID = 0;
				
			this.SourceName = "";
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  SourcesRow( SourcesRow oRow)
		{
			
			this.SourceID = oRow.SourceID;
			
			this.SourceName = oRow.SourceName;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
		}	

		public override int GetHashCode()
		{
			return (SourceID + 1724 << 12);
		}		

		public override string ToString()
		{
			return $"{SourceName} ({SourceID})";
		}
		
	}
	
	public class SourcesDataTable : List<SourcesRow>
	{	
		public SourcesDataTable(SourcesDataTable oTable)
			: base(oTable)
		{
		}

		public SourcesDataTable()
		{
		}
	}

    public partial class SourcesRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("Sources");

				return m_cache!;
			}
		}



	
		public static int InsertSource(SourcesRow oSource)
		{
			return InsertSource(
    								 oSource.SourceName, 
    								 oSource.Data
									);			
		}

		public static int  InsertSource(
    		string SourceName, 
    		string? Data)
		{
			int iSourceID = 0;

			try
			{
				string strStoredProc = "InsertSourceSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@SourceName", SourceName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iSourceID = DataAccess.IntFromProc(strStoredProc, sqlParams, "SourceID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Source since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iSourceID;
		}
		
		public static void UpdateSource(
    		int SourceID, 
    		string SourceName, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateSourceSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SourceID", SourceID));
				
				sqlParams.Add(DataAccess.Params.String("@SourceName", SourceName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(SourceID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Source since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateSource(SourcesRow oSource)
		{
			  UpdateSource(
    								 oSource.SourceID, 
    								 oSource.SourceName, 
    								 oSource.Data
									);			
		}
		
    	public static void RemoveSource(int SourceID)
    	{
			try
			{
				string strStoredProc = "RemoveSourceSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@SourceID", SourceID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(SourceID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Source since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static SourcesRow ? Get(int SourceID)
		{
			SourcesRow ? oSource = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oSource = Cache.Get<SourcesRow>(SourceID);

				if (null != oSource)
					return oSource;
			}

			try
			{
				string strStoredProc = "GetSourceSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@SourceID", SourceID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oSource = new SourcesRow();
					
					oSource.SourceID = DataAccess.GetID(reader, "SourceID");
					oSource.SourceName = DataAccess.GetString(reader, "SourceName");
					oSource.Data = DataAccess.GetStringOrNull(reader, "Data");
					oSource.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oSource.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");						
						
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

			if (IsCachingEnabled && null != oSource)
			{
				
				Cache.Insert(oSource, oSource.SourceID, oSource.SourceName?.ToString());
				
			}

			return oSource;
		}
		
		public static SourcesDataTable GetAll()
		{
			SourcesDataTable tblSources = new SourcesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetSourcesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					SourcesRow rowSource = new SourcesRow();
					
					rowSource.SourceID = DataAccess.GetID(reader, "SourceID");
					rowSource.SourceName = DataAccess.GetString(reader, "SourceName");
					rowSource.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowSource.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowSource.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					
					tblSources.Add(rowSource);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblSources;
		}	
		
		public static int CopySource(int SourceID)
		{
			int iSourceID = 0;

			try
			{
				string strStoredProc = "CopySourceSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@SourceID", SourceID));

				iSourceID = DataAccess.IntFromProc(strStoredProc, sqlParams, "SourceID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Source since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iSourceID;
		}  
		
		public static SourcesRow ? GetSourceBySourceName(string SourceName)
		{
			SourcesRow ? oSource = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oSource = Cache.Get<SourcesRow>(SourceName.ToString());

					if (null != oSource)
						return oSource;
				}
						

				string strStoredProc = "GetSourceBySourceNameSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@SourceName", SourceName));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oSource = new SourcesRow();
					
					oSource.SourceID = DataAccess.GetID(reader, "SourceID");
					oSource.SourceName = DataAccess.GetString(reader, "SourceName");
					oSource.Data = DataAccess.GetStringOrNull(reader, "Data");
					oSource.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oSource.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
				}

				

				if (IsCachingEnabled && null != oSource)
				{
					Cache.Insert(oSource, oSource.SourceID, oSource.SourceName?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oSource;		
		}	
			
			
    	public static void UpdateSourceData(int SourceID, string Data)
    	{
    		try
			{
				string strStoredProc = "UpdateSourceDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@SourceID", SourceID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(SourceID);
				}
			}
		
			finally
			{

			}
    	}   		
    	
	}

}	

		