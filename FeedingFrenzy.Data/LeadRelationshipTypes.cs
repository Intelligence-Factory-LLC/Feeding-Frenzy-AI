
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class LeadRelationshipTypesRow : RooTrax.Common.DB.BasicRow
	{
		
		public int LeadRelationshipTypeID { get; set;}
			
		public string? LeadRelationshipTypeName { get; set;}
			
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
		
		
		public LeadRelationshipTypesRow()
		{
			
			this.LeadRelationshipTypeID = 0;
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  LeadRelationshipTypesRow( LeadRelationshipTypesRow oRow)
		{
			
			this.LeadRelationshipTypeID = oRow.LeadRelationshipTypeID;
			
			this.LeadRelationshipTypeName = oRow.LeadRelationshipTypeName;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
		}	

		public override int GetHashCode()
		{
			return (LeadRelationshipTypeID + 1753 << 12);
		}		

		public override string ToString()
		{
			return $"{LeadRelationshipTypeName} ({LeadRelationshipTypeID})";
		}
		
	}
	
	public class LeadRelationshipTypesDataTable : List<LeadRelationshipTypesRow>
	{	
		public LeadRelationshipTypesDataTable(LeadRelationshipTypesDataTable oTable)
			: base(oTable)
		{
		}

		public LeadRelationshipTypesDataTable()
		{
		}
	}

    public partial class LeadRelationshipTypesRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("LeadRelationshipTypes");

				return m_cache!;
			}
		}

		internal static LeadRelationshipTypesRow PopulateRowFromReader(SqlDataReader reader)
		{
			LeadRelationshipTypesRow rowLeadRelationshipType = new LeadRelationshipTypesRow();
			
			rowLeadRelationshipType.LeadRelationshipTypeID = DataAccess.GetID(reader, "LeadRelationshipTypeID");
			
			rowLeadRelationshipType.LeadRelationshipTypeName = DataAccess.GetStringOrNull(reader, "LeadRelationshipTypeName");
			
			rowLeadRelationshipType.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowLeadRelationshipType.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowLeadRelationshipType.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
									

			return rowLeadRelationshipType;
		}

	
		public static int InsertLeadRelationshipType(LeadRelationshipTypesRow oLeadRelationshipType)
		{
			return InsertLeadRelationshipType(
    								 oLeadRelationshipType.LeadRelationshipTypeName, 
    								 oLeadRelationshipType.Data
									);			
		}

		public static int  InsertLeadRelationshipType(
    		string? LeadRelationshipTypeName, 
    		string? Data)
		{
			int iLeadRelationshipTypeID = 0;

			try
			{
				string strStoredProc = "InsertLeadRelationshipTypeSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@LeadRelationshipTypeName", LeadRelationshipTypeName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iLeadRelationshipTypeID = DataAccess.IntFromProc(strStoredProc, sqlParams, "LeadRelationshipTypeID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Relationship Type since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iLeadRelationshipTypeID;
		}
		
		public static void UpdateLeadRelationshipType(
    		int LeadRelationshipTypeID, 
    		string? LeadRelationshipTypeName, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateLeadRelationshipTypeSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadRelationshipTypeID", LeadRelationshipTypeID));
				
				sqlParams.Add(DataAccess.Params.String("@LeadRelationshipTypeName", LeadRelationshipTypeName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadRelationshipTypeID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Relationship Type since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateLeadRelationshipType(LeadRelationshipTypesRow oLeadRelationshipType)
		{
			  UpdateLeadRelationshipType(
    								 oLeadRelationshipType.LeadRelationshipTypeID, 
    								 oLeadRelationshipType.LeadRelationshipTypeName, 
    								 oLeadRelationshipType.Data
									);			
		}
		
    	public static void RemoveLeadRelationshipType(int LeadRelationshipTypeID)
    	{
			try
			{
				string strStoredProc = "RemoveLeadRelationshipTypeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadRelationshipTypeID", LeadRelationshipTypeID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadRelationshipTypeID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Lead Relationship Type since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static LeadRelationshipTypesRow ? Get(int LeadRelationshipTypeID)
		{
			LeadRelationshipTypesRow ? oLeadRelationshipType = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oLeadRelationshipType = Cache.Get<LeadRelationshipTypesRow>(LeadRelationshipTypeID);

				if (null != oLeadRelationshipType)
					return oLeadRelationshipType;
			}

			try
			{
				string strStoredProc = "GetLeadRelationshipTypeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadRelationshipTypeID", LeadRelationshipTypeID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oLeadRelationshipType = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oLeadRelationshipType)
			{
				
				Cache.Insert(oLeadRelationshipType, oLeadRelationshipType.LeadRelationshipTypeID, oLeadRelationshipType.LeadRelationshipTypeName?.ToString());
				
			}

			return oLeadRelationshipType;
		}
		
		public static LeadRelationshipTypesDataTable GetAll()
		{
			LeadRelationshipTypesDataTable tblLeadRelationshipTypes = new LeadRelationshipTypesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadRelationshipTypesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadRelationshipTypesRow rowLeadRelationshipType = PopulateRowFromReader(reader);
					
					tblLeadRelationshipTypes.Add(rowLeadRelationshipType);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadRelationshipTypes;
		}	
		
		public static int CopyLeadRelationshipType(int LeadRelationshipTypeID)
		{
			int iLeadRelationshipTypeID = 0;

			try
			{
				string strStoredProc = "CopyLeadRelationshipTypeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadRelationshipTypeID", LeadRelationshipTypeID));

				iLeadRelationshipTypeID = DataAccess.IntFromProc(strStoredProc, sqlParams, "LeadRelationshipTypeID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Relationship Type since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iLeadRelationshipTypeID;
		}  
		
		public static LeadRelationshipTypesRow ? GetLeadRelationshipTypeByLeadRelationshipTypeName(string? LeadRelationshipTypeName)
		{
			LeadRelationshipTypesRow ? oLeadRelationshipType = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oLeadRelationshipType = Cache.Get<LeadRelationshipTypesRow>(LeadRelationshipTypeName.ToString());

					if (null != oLeadRelationshipType)
						return oLeadRelationshipType;
				}
						

				string strStoredProc = "GetLeadRelationshipTypeByLeadRelationshipTypeNameSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@LeadRelationshipTypeName", LeadRelationshipTypeName));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oLeadRelationshipType = PopulateRowFromReader(reader);
				}

				

				if (IsCachingEnabled && null != oLeadRelationshipType)
				{
					Cache.Insert(oLeadRelationshipType, oLeadRelationshipType.LeadRelationshipTypeID, oLeadRelationshipType.LeadRelationshipTypeName?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oLeadRelationshipType;		
		}	
			
			
    	public static void UpdateLeadRelationshipTypeData(int LeadRelationshipTypeID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateLeadRelationshipTypeDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadRelationshipTypeID", LeadRelationshipTypeID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadRelationshipTypeID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateLeadRelationshipTypeData(LeadRelationshipTypesRow rowLeadRelationshipType)
    	{
    		UpdateLeadRelationshipTypeData(rowLeadRelationshipType.LeadRelationshipTypeID, rowLeadRelationshipType.Data);
    	}  
    	
	}

}	

		