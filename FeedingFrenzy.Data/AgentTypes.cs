
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class AgentTypesRow : RooTrax.Common.DB.BasicRow
	{
		
		public int AgentTypeID { get; set;}
			
		public string AgentTypeName { get; set;}
			
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
		
		
		public AgentTypesRow()
		{
			
			this.AgentTypeID = 0;
				
			this.AgentTypeName = "";
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  AgentTypesRow( AgentTypesRow oRow)
		{
			
			this.AgentTypeID = oRow.AgentTypeID;
			
			this.AgentTypeName = oRow.AgentTypeName;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
		}	

		public override int GetHashCode()
		{
			return (AgentTypeID + 7787 << 12);
		}		

		public override string ToString()
		{
			return $"{AgentTypeName} ({AgentTypeID})";
		}
		
	}
	
	public class AgentTypesDataTable : List<AgentTypesRow>
	{	
		public AgentTypesDataTable(AgentTypesDataTable oTable)
			: base(oTable)
		{
		}

		public AgentTypesDataTable()
		{
		}
	}

    public partial class AgentTypesRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("AgentTypes");

				return m_cache!;
			}
		}

		internal static AgentTypesRow PopulateRowFromReader(SqlDataReader reader)
		{
			AgentTypesRow rowAgentType = new AgentTypesRow();
			
			rowAgentType.AgentTypeID = DataAccess.GetID(reader, "AgentTypeID");
			
			rowAgentType.AgentTypeName = DataAccess.GetString(reader, "AgentTypeName");
			
			rowAgentType.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowAgentType.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowAgentType.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
									

			return rowAgentType;
		}

	
		public static int InsertAgentType(AgentTypesRow oAgentType)
		{
			return InsertAgentType(
    								 oAgentType.AgentTypeName, 
    								 oAgentType.Data
									);			
		}

		public static int  InsertAgentType(
    		string AgentTypeName, 
    		string? Data)
		{
			int iAgentTypeID = 0;

			try
			{
				string strStoredProc = "InsertAgentTypeSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@AgentTypeName", AgentTypeName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iAgentTypeID = DataAccess.IntFromProc(strStoredProc, sqlParams, "AgentTypeID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Agent Type since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iAgentTypeID;
		}
		
		public static void UpdateAgentType(
    		int AgentTypeID, 
    		string AgentTypeName, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateAgentTypeSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@AgentTypeID", AgentTypeID));
				
				sqlParams.Add(DataAccess.Params.String("@AgentTypeName", AgentTypeName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(AgentTypeID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Agent Type since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateAgentType(AgentTypesRow oAgentType)
		{
			  UpdateAgentType(
    								 oAgentType.AgentTypeID, 
    								 oAgentType.AgentTypeName, 
    								 oAgentType.Data
									);			
		}
		
    	public static void RemoveAgentType(int AgentTypeID)
    	{
			try
			{
				string strStoredProc = "RemoveAgentTypeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@AgentTypeID", AgentTypeID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(AgentTypeID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Agent Type since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static AgentTypesRow Get(int AgentTypeID)
		{
			AgentTypesRow ? oAgentType = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oAgentType = Cache.Get<AgentTypesRow>(AgentTypeID);

				if (null != oAgentType)
					return oAgentType;
			}

			try
			{
				string strStoredProc = "GetAgentTypeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@AgentTypeID", AgentTypeID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oAgentType = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oAgentType)
			{
				
				Cache.Insert(oAgentType, oAgentType.AgentTypeID, oAgentType.AgentTypeName?.ToString());
				
			}

			return oAgentType ?? throw new Exception("Could not find AgentType " + AgentTypeID);
		}
		
		public static AgentTypesDataTable GetAll()
		{
			AgentTypesDataTable tblAgentTypes = new AgentTypesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetAgentTypesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					AgentTypesRow rowAgentType = PopulateRowFromReader(reader);
					
					tblAgentTypes.Add(rowAgentType);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblAgentTypes;
		}	
		
		public static int CopyAgentType(int AgentTypeID)
		{
			int iAgentTypeID = 0;

			try
			{
				string strStoredProc = "CopyAgentTypeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@AgentTypeID", AgentTypeID));

				iAgentTypeID = DataAccess.IntFromProc(strStoredProc, sqlParams, "AgentTypeID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Agent Type since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iAgentTypeID;
		}  
		
		public static AgentTypesRow ? GetAgentTypeByAgentTypeName(string AgentTypeName)
		{
			AgentTypesRow ? oAgentType = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oAgentType = Cache.Get<AgentTypesRow>(AgentTypeName.ToString());

					if (null != oAgentType)
						return oAgentType;
				}
						

				string strStoredProc = "GetAgentTypeByAgentTypeNameSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@AgentTypeName", AgentTypeName));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oAgentType = PopulateRowFromReader(reader);
				}

				

				if (IsCachingEnabled && null != oAgentType)
				{
					Cache.Insert(oAgentType, oAgentType.AgentTypeID, oAgentType.AgentTypeName?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oAgentType;		
		}	
			
			
    	public static void UpdateAgentTypeData(int AgentTypeID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateAgentTypeDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@AgentTypeID", AgentTypeID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(AgentTypeID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateAgentTypeData(AgentTypesRow rowAgentType)
    	{
    		UpdateAgentTypeData(rowAgentType.AgentTypeID, rowAgentType.Data);
    	}  
    	

	}

}	

		