
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class LeadStatusesRow : RooTrax.Common.DB.BasicRow
	{
		
		public int LeadStatusID { get; set;}
			
		public string StatusName { get; set;}
			
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
		
		private LeadSubStatusesDataTable ? m_LeadSubStatuses = null;
		public LeadSubStatusesDataTable ? LeadSubStatuses
		{
			get
			{
				if (null == m_LeadSubStatuses && this.EnableLazyLoadProperties)
					m_LeadSubStatuses = LeadSubStatusesRepository.GetLeadSubStatusesByLeadStatusID(this.LeadStatusID);
				return m_LeadSubStatuses;
			}
		}		
    				
		
		public LeadStatusesRow()
		{
			
			this.LeadStatusID = 0;
				
			this.StatusName = "";
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  LeadStatusesRow( LeadStatusesRow oRow)
		{
			
			this.LeadStatusID = oRow.LeadStatusID;
			
			this.StatusName = oRow.StatusName;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
		}	

		public override int GetHashCode()
		{
			return (LeadStatusID + 1722 << 12);
		}		

		public override string ToString()
		{
			return $"{StatusName} ({LeadStatusID})";
		}
		
	}
	
	public class LeadStatusesDataTable : List<LeadStatusesRow>
	{	
		public LeadStatusesDataTable(LeadStatusesDataTable oTable)
			: base(oTable)
		{
		}

		public LeadStatusesDataTable()
		{
		}
	}

    public partial class LeadStatusesRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("LeadStatuses");

				return m_cache!;
			}
		}



	
		public static int InsertLeadStatus(LeadStatusesRow oLeadStatus)
		{
			return InsertLeadStatus(
    								 oLeadStatus.StatusName, 
    								 oLeadStatus.Data
									);			
		}

		public static int  InsertLeadStatus(
    		string StatusName, 
    		string? Data)
		{
			int iLeadStatusID = 0;

			try
			{
				string strStoredProc = "InsertLeadStatusSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@StatusName", StatusName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iLeadStatusID = DataAccess.IntFromProc(strStoredProc, sqlParams, "LeadStatusID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Status since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iLeadStatusID;
		}
		
		public static void UpdateLeadStatus(
    		int LeadStatusID, 
    		string StatusName, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateLeadStatusSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadStatusID", LeadStatusID));
				
				sqlParams.Add(DataAccess.Params.String("@StatusName", StatusName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadStatusID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Status since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateLeadStatus(LeadStatusesRow oLeadStatus)
		{
			  UpdateLeadStatus(
    								 oLeadStatus.LeadStatusID, 
    								 oLeadStatus.StatusName, 
    								 oLeadStatus.Data
									);			
		}
		
    	public static void RemoveLeadStatus(int LeadStatusID)
    	{
			try
			{
				string strStoredProc = "RemoveLeadStatusSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadStatusID", LeadStatusID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadStatusID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Lead Status since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static LeadStatusesRow ? Get(int LeadStatusID)
		{
			LeadStatusesRow ? oLeadStatus = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oLeadStatus = Cache.Get<LeadStatusesRow>(LeadStatusID);

				if (null != oLeadStatus)
					return oLeadStatus;
			}

			try
			{
				string strStoredProc = "GetLeadStatusSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadStatusID", LeadStatusID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oLeadStatus = new LeadStatusesRow();
					
					oLeadStatus.LeadStatusID = DataAccess.GetID(reader, "LeadStatusID");
					oLeadStatus.StatusName = DataAccess.GetString(reader, "StatusName");
					oLeadStatus.Data = DataAccess.GetStringOrNull(reader, "Data");
					oLeadStatus.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oLeadStatus.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");						
						
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

			if (IsCachingEnabled && null != oLeadStatus)
			{
				
				Cache.Insert(oLeadStatus, oLeadStatus.LeadStatusID, oLeadStatus.StatusName?.ToString());
				
			}

			return oLeadStatus;
		}
		
		public static LeadStatusesDataTable GetAll()
		{
			LeadStatusesDataTable tblLeadStatuses = new LeadStatusesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadStatusesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadStatusesRow rowLeadStatus = new LeadStatusesRow();
					
					rowLeadStatus.LeadStatusID = DataAccess.GetID(reader, "LeadStatusID");
					rowLeadStatus.StatusName = DataAccess.GetString(reader, "StatusName");
					rowLeadStatus.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowLeadStatus.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowLeadStatus.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					
					tblLeadStatuses.Add(rowLeadStatus);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadStatuses;
		}	
		
		public static int CopyLeadStatus(int LeadStatusID)
		{
			int iLeadStatusID = 0;

			try
			{
				string strStoredProc = "CopyLeadStatusSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadStatusID", LeadStatusID));

				iLeadStatusID = DataAccess.IntFromProc(strStoredProc, sqlParams, "LeadStatusID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Status since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iLeadStatusID;
		}  
		
		public static LeadStatusesRow ? GetLeadStatusByStatusName(string StatusName)
		{
			LeadStatusesRow ? oLeadStatus = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oLeadStatus = Cache.Get<LeadStatusesRow>(StatusName.ToString());

					if (null != oLeadStatus)
						return oLeadStatus;
				}
						

				string strStoredProc = "GetLeadStatusByStatusNameSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@StatusName", StatusName));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oLeadStatus = new LeadStatusesRow();
					
					oLeadStatus.LeadStatusID = DataAccess.GetID(reader, "LeadStatusID");
					oLeadStatus.StatusName = DataAccess.GetString(reader, "StatusName");
					oLeadStatus.Data = DataAccess.GetStringOrNull(reader, "Data");
					oLeadStatus.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oLeadStatus.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
				}

				

				if (IsCachingEnabled && null != oLeadStatus)
				{
					Cache.Insert(oLeadStatus, oLeadStatus.LeadStatusID, oLeadStatus.StatusName?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oLeadStatus;		
		}	
			
			
    	public static void UpdateLeadStatusData(int LeadStatusID, string Data)
    	{
    		try
			{
				string strStoredProc = "UpdateLeadStatusDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadStatusID", LeadStatusID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadStatusID);
				}
			}
		
			finally
			{

			}
    	}   		
    	
	}

}	

		