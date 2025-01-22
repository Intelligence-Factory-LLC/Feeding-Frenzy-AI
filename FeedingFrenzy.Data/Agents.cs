
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class AgentsRow : RooTrax.Common.DB.BasicRow
	{
		
		public int AgentID { get; set;}
			
		public string AgentName { get; set;}
			
		public DateTime DateCreated { get; set;}
			
		public DateTime LastUpdated { get; set;}
			
		public string? Description { get; set;}
			
		private int? m_AgentTypeID;
		public int? AgentTypeID
		{
			get 
			{ 
				return this.m_AgentTypeID;
			}
					
			set 
			{ 
				this.m_AgentTypeID = value; 
				this.m_AgentTypeRow = null; 
			}
		} 
					

		private string ? m_strContextSettings = null;
		public string ? ContextSettings 
		{ 
			get
			{
				return (null != m_jsonContextSettingsObject ? m_jsonContextSettingsObject.ToString() : m_strContextSettings);
			}

			set
			{
				m_strContextSettings = value;
				m_jsonContextSettingsObject = null;
			}
		}

		private JsonObject ? m_jsonContextSettingsObject = null;
		public JsonObject ContextSettingsObject
		{
			get
			{
				if (null == m_jsonContextSettingsObject)
					m_jsonContextSettingsObject = new JsonObject(StringUtil.IsEmpty(this.ContextSettings) ? "{}" : this.ContextSettings!);

				return m_jsonContextSettingsObject;
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
		
		private AgentTypesRow ? m_AgentTypeRow = null;	
		public AgentTypesRow ? AgentType
		{
			get
			{
				if (null == m_AgentTypeRow &&  null != this.AgentTypeID && this.EnableLazyLoadProperties)
					m_AgentTypeRow = AgentTypesRepository.Get((int)this.AgentTypeID);
		
				return m_AgentTypeRow;
			}
		}    				
		
		public AgentsRow()
		{
			
			this.AgentID = 0;
				
			this.AgentName = "";
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  AgentsRow( AgentsRow oRow)
		{
			
			this.AgentID = oRow.AgentID;
			
			this.AgentName = oRow.AgentName;
			
			this.ContextSettings = oRow.ContextSettings;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
			this.Description = oRow.Description;
			
			this.AgentTypeID = oRow.AgentTypeID;
			
		}	

		public override int GetHashCode()
		{
			return (AgentID + 6783 << 12);
		}		

		public override string ToString()
		{
			return $"{AgentName} ({AgentID})";
		}
		
	}
	
	public class AgentsDataTable : List<AgentsRow>
	{	
		public AgentsDataTable(AgentsDataTable oTable)
			: base(oTable)
		{
		}

		public AgentsDataTable()
		{
		}
	}

    public partial class AgentsRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("Agents");

				return m_cache!;
			}
		}

		internal static AgentsRow PopulateRowFromReader(SqlDataReader reader)
		{
			AgentsRow rowAgent = new AgentsRow();
			
			rowAgent.AgentID = DataAccess.GetID(reader, "AgentID");
			
			rowAgent.AgentName = DataAccess.GetString(reader, "AgentName");
			
			rowAgent.ContextSettings = DataAccess.GetStringOrNull(reader, "ContextSettings");
			
			rowAgent.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowAgent.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowAgent.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
			
			rowAgent.Description = DataAccess.GetTextOrNull(reader, "Description");
			
			rowAgent.AgentTypeID = DataAccess.GetIDOrNull(reader, "AgentTypeID");
									

			return rowAgent;
		}

	
		public static int InsertAgent(AgentsRow oAgent)
		{
			return InsertAgent(
    								 oAgent.AgentName, 
    								 oAgent.ContextSettings, 
    								 oAgent.Data, 
    								 oAgent.Description, 
    								 oAgent.AgentTypeID
									);			
		}

		public static int  InsertAgent(
    		string AgentName, 
    		string? ContextSettings, 
    		string? Data, 
    		string? Description, 
    		int? AgentTypeID)
		{
			int iAgentID = 0;

			try
			{
				string strStoredProc = "InsertAgentSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@AgentName", AgentName));
				
				sqlParams.Add(DataAccess.Params.Text("@ContextSettings", ContextSettings));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.Text("@Description", Description));
				
				sqlParams.Add(DataAccess.Params.ID("@AgentTypeID", AgentTypeID));
				
				iAgentID = DataAccess.IntFromProc(strStoredProc, sqlParams, "AgentID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Agent since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iAgentID;
		}
		
		public static void UpdateAgent(
    		int AgentID, 
    		string AgentName, 
    		string? ContextSettings, 
    		string? Data, 
    		string? Description, 
    		int? AgentTypeID)
    	{    	
    		try
			{
				string strStoredProc = "UpdateAgentSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@AgentID", AgentID));
				
				sqlParams.Add(DataAccess.Params.String("@AgentName", AgentName));
				
				sqlParams.Add(DataAccess.Params.Text("@ContextSettings", ContextSettings));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.Text("@Description", Description));
				
				sqlParams.Add(DataAccess.Params.ID("@AgentTypeID", AgentTypeID));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(AgentID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Agent since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateAgent(AgentsRow oAgent)
		{
			  UpdateAgent(
    								 oAgent.AgentID, 
    								 oAgent.AgentName, 
    								 oAgent.ContextSettings, 
    								 oAgent.Data, 
    								 oAgent.Description, 
    								 oAgent.AgentTypeID
									);			
		}
		
    	public static void RemoveAgent(int AgentID)
    	{
			try
			{
				string strStoredProc = "RemoveAgentSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@AgentID", AgentID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(AgentID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Agent since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static AgentsRow Get(int AgentID)
		{
			AgentsRow ? oAgent = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oAgent = Cache.Get<AgentsRow>(AgentID);

				if (null != oAgent)
					return oAgent;
			}

			try
			{
				string strStoredProc = "GetAgentSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@AgentID", AgentID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oAgent = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oAgent)
			{
				
				Cache.Insert(oAgent, oAgent.AgentID, oAgent.AgentName?.ToString());
				
			}

			return oAgent ?? throw new Exception("Could not find Agent " + AgentID);
		}
		
		public static AgentsDataTable GetAll()
		{
			AgentsDataTable tblAgents = new AgentsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetAgentsSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					AgentsRow rowAgent = PopulateRowFromReader(reader);
					
					tblAgents.Add(rowAgent);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblAgents;
		}	
		
		public static int CopyAgent(int AgentID)
		{
			int iAgentID = 0;

			try
			{
				string strStoredProc = "CopyAgentSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@AgentID", AgentID));

				iAgentID = DataAccess.IntFromProc(strStoredProc, sqlParams, "AgentID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Agent since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iAgentID;
		}  
		
		public static AgentsRow ? GetAgentByAgentName(string AgentName)
		{
			AgentsRow ? oAgent = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oAgent = Cache.Get<AgentsRow>(AgentName.ToString());

					if (null != oAgent)
						return oAgent;
				}
						

				string strStoredProc = "GetAgentByAgentNameSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@AgentName", AgentName));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oAgent = PopulateRowFromReader(reader);
				}

				

				if (IsCachingEnabled && null != oAgent)
				{
					Cache.Insert(oAgent, oAgent.AgentID, oAgent.AgentName?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oAgent;		
		}	
			
			
    	public static void UpdateAgentContextSettings(int AgentID, string ? ContextSettings)
    	{
    		try
			{
				string strStoredProc = "UpdateAgentContextSettingsSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@AgentID", AgentID));
				sqlParams.Add(DataAccess.Params.Text("@ContextSettings", ContextSettings));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(AgentID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateAgentContextSettings(AgentsRow rowAgent)
    	{
    		UpdateAgentContextSettings(rowAgent.AgentID, rowAgent.Data);
    	}  
    	
			
    	public static void UpdateAgentData(int AgentID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateAgentDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@AgentID", AgentID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(AgentID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateAgentData(AgentsRow rowAgent)
    	{
    		UpdateAgentData(rowAgent.AgentID, rowAgent.Data);
    	}  
    	
		public static AgentsDataTable GetAgentsSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			AgentsDataTable tblAgents = new AgentsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetAgentsSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					AgentsRow rowAgent = PopulateRowFromReader(reader);

					tblAgents.Add(rowAgent);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblAgents;
		}				
		public static int? GetAgentsSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetAgentsSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetAgentsSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static AgentsDataTable GetAgentsByAgentTypeID(int? AgentTypeID)
		{
			AgentsDataTable tblAgents = new AgentsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetAgentsByAgentTypeIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@AgentTypeID", AgentTypeID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					AgentsRow rowAgent = PopulateRowFromReader(reader);

					tblAgents.Add(rowAgent);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblAgents;
		}				
		public static int? GetAgentsByAgentTypeIDSp_CountSp(int? AgentTypeID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetAgentsByAgentTypeIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@AgentTypeID", AgentTypeID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetAgentsByAgentTypeIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static AgentsDataTable GetAgentsByAgentTypeIDSp_PagingSp(int? AgentTypeID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			AgentsDataTable tblAgents = new AgentsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetAgentsByAgentTypeIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@AgentTypeID", AgentTypeID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					AgentsRow rowAgent = PopulateRowFromReader(reader);

					tblAgents.Add(rowAgent);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblAgents;
		}				

	}

}	

		