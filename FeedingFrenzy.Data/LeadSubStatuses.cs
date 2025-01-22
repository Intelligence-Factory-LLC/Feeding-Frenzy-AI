
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class LeadSubStatusesRow : RooTrax.Common.DB.BasicRow
	{
		
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
					
		public string SubStatusName { get; set;}
			
		public DateTime DateCreated { get; set;}
			
		public DateTime LastUpdated { get; set;}
			
		public int LeadSubStatusID { get; set;}
			

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
		
		public LeadSubStatusesRow()
		{
			
			this.LeadStatusID = 0;
				
			this.SubStatusName = "";
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
			this.LeadSubStatusID = 0;
				
		}

		public  LeadSubStatusesRow( LeadSubStatusesRow oRow)
		{
			
			this.LeadStatusID = oRow.LeadStatusID;
			
			this.SubStatusName = oRow.SubStatusName;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
			this.LeadSubStatusID = oRow.LeadSubStatusID;
			
		}	

		public override int GetHashCode()
		{
			return (LeadSubStatusID + 1723 << 12);
		}		

		public override string ToString()
		{
			return $"{SubStatusName} ({LeadSubStatusID})";
		}
		
	}
	
	public class LeadSubStatusesDataTable : List<LeadSubStatusesRow>
	{	
		public LeadSubStatusesDataTable(LeadSubStatusesDataTable oTable)
			: base(oTable)
		{
		}

		public LeadSubStatusesDataTable()
		{
		}
	}

    public partial class LeadSubStatusesRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("LeadSubStatuses");

				return m_cache!;
			}
		}



	
		public static int InsertLeadSubStatus(LeadSubStatusesRow oLeadSubStatus)
		{
			return InsertLeadSubStatus(
    								 oLeadSubStatus.LeadStatusID, 
    								 oLeadSubStatus.SubStatusName, 
    								 oLeadSubStatus.Data
									);			
		}

		public static int  InsertLeadSubStatus(
    		int LeadStatusID, 
    		string SubStatusName, 
    		string? Data)
		{
			int iLeadSubStatusID = 0;

			try
			{
				string strStoredProc = "InsertLeadSubStatusSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadStatusID", LeadStatusID));
				
				sqlParams.Add(DataAccess.Params.String("@SubStatusName", SubStatusName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iLeadSubStatusID = DataAccess.IntFromProc(strStoredProc, sqlParams, "LeadSubStatusID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Sub Status since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iLeadSubStatusID;
		}
		
		public static void UpdateLeadSubStatus(
    		int LeadStatusID, 
    		string SubStatusName, 
    		string? Data, 
    		int LeadSubStatusID)
    	{    	
    		try
			{
				string strStoredProc = "UpdateLeadSubStatusSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadStatusID", LeadStatusID));
				
				sqlParams.Add(DataAccess.Params.String("@SubStatusName", SubStatusName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.ID("@LeadSubStatusID", LeadSubStatusID));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadSubStatusID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Sub Status since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateLeadSubStatus(LeadSubStatusesRow oLeadSubStatus)
		{
			  UpdateLeadSubStatus(
    								 oLeadSubStatus.LeadStatusID, 
    								 oLeadSubStatus.SubStatusName, 
    								 oLeadSubStatus.Data, 
    								 oLeadSubStatus.LeadSubStatusID
									);			
		}
		
    	public static void RemoveLeadSubStatus(int LeadSubStatusID)
    	{
			try
			{
				string strStoredProc = "RemoveLeadSubStatusSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadSubStatusID", LeadSubStatusID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadSubStatusID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Lead Sub Status since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static LeadSubStatusesRow ? Get(int LeadSubStatusID)
		{
			LeadSubStatusesRow ? oLeadSubStatus = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oLeadSubStatus = Cache.Get<LeadSubStatusesRow>(LeadSubStatusID);

				if (null != oLeadSubStatus)
					return oLeadSubStatus;
			}

			try
			{
				string strStoredProc = "GetLeadSubStatusSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadSubStatusID", LeadSubStatusID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oLeadSubStatus = new LeadSubStatusesRow();
					
					oLeadSubStatus.LeadStatusID = DataAccess.GetID(reader, "LeadStatusID");
					oLeadSubStatus.SubStatusName = DataAccess.GetString(reader, "SubStatusName");
					oLeadSubStatus.Data = DataAccess.GetStringOrNull(reader, "Data");
					oLeadSubStatus.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oLeadSubStatus.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					oLeadSubStatus.LeadSubStatusID = DataAccess.GetID(reader, "LeadSubStatusID");						
						
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

			if (IsCachingEnabled && null != oLeadSubStatus)
			{
				
				Cache.Insert(oLeadSubStatus, oLeadSubStatus.LeadSubStatusID, oLeadSubStatus.SubStatusName?.ToString());
				
			}

			return oLeadSubStatus;
		}
		
		public static LeadSubStatusesDataTable GetAll()
		{
			LeadSubStatusesDataTable tblLeadSubStatuses = new LeadSubStatusesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadSubStatusesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadSubStatusesRow rowLeadSubStatus = new LeadSubStatusesRow();
					
					rowLeadSubStatus.LeadStatusID = DataAccess.GetID(reader, "LeadStatusID");
					rowLeadSubStatus.SubStatusName = DataAccess.GetString(reader, "SubStatusName");
					rowLeadSubStatus.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowLeadSubStatus.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowLeadSubStatus.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					rowLeadSubStatus.LeadSubStatusID = DataAccess.GetID(reader, "LeadSubStatusID");
					
					tblLeadSubStatuses.Add(rowLeadSubStatus);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadSubStatuses;
		}	
		
		public static int CopyLeadSubStatus(int LeadSubStatusID)
		{
			int iLeadSubStatusID = 0;

			try
			{
				string strStoredProc = "CopyLeadSubStatusSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadSubStatusID", LeadSubStatusID));

				iLeadSubStatusID = DataAccess.IntFromProc(strStoredProc, sqlParams, "LeadSubStatusID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Sub Status since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iLeadSubStatusID;
		}  
		
		public static LeadSubStatusesRow ? GetLeadSubStatusBySubStatusName(string SubStatusName)
		{
			LeadSubStatusesRow ? oLeadSubStatus = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oLeadSubStatus = Cache.Get<LeadSubStatusesRow>(SubStatusName.ToString());

					if (null != oLeadSubStatus)
						return oLeadSubStatus;
				}
						

				string strStoredProc = "GetLeadSubStatusBySubStatusNameSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@SubStatusName", SubStatusName));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oLeadSubStatus = new LeadSubStatusesRow();
					
					oLeadSubStatus.LeadStatusID = DataAccess.GetID(reader, "LeadStatusID");
					oLeadSubStatus.SubStatusName = DataAccess.GetString(reader, "SubStatusName");
					oLeadSubStatus.Data = DataAccess.GetStringOrNull(reader, "Data");
					oLeadSubStatus.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oLeadSubStatus.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					oLeadSubStatus.LeadSubStatusID = DataAccess.GetID(reader, "LeadSubStatusID");
				}

				

				if (IsCachingEnabled && null != oLeadSubStatus)
				{
					Cache.Insert(oLeadSubStatus, oLeadSubStatus.LeadSubStatusID, oLeadSubStatus.SubStatusName?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oLeadSubStatus;		
		}	
			
			
    	public static void UpdateLeadSubStatusData(int LeadSubStatusID, string Data)
    	{
    		try
			{
				string strStoredProc = "UpdateLeadSubStatusDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadSubStatusID", LeadSubStatusID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadSubStatusID);
				}
			}
		
			finally
			{

			}
    	}   		
    	
		public static LeadSubStatusesDataTable GetLeadSubStatusesByLeadStatusID(int LeadStatusID)
		{
			LeadSubStatusesDataTable tblLeadSubStatuses = new LeadSubStatusesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadSubStatusesByLeadStatusIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadStatusID", LeadStatusID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadSubStatusesRow rowLeadSubStatus = new LeadSubStatusesRow();
					
					rowLeadSubStatus.LeadStatusID = DataAccess.GetID(reader, "LeadStatusID");
					rowLeadSubStatus.SubStatusName = DataAccess.GetString(reader, "SubStatusName");
					rowLeadSubStatus.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowLeadSubStatus.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowLeadSubStatus.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					rowLeadSubStatus.LeadSubStatusID = DataAccess.GetID(reader, "LeadSubStatusID");
					
					tblLeadSubStatuses.Add(rowLeadSubStatus);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadSubStatuses;
		}				
	}

}	

		