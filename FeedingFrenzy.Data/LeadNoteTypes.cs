
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class LeadNoteTypesRow : RooTrax.Common.DB.BasicRow
	{
		
		public int LeadNoteTypeID { get; set;}
			
		public string LeadNoteTypeName { get; set;}
			
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
		
		private LeadNotesDataTable ? m_LeadNotes = null;
		public LeadNotesDataTable ? LeadNotes
		{
			get
			{
				if (null == m_LeadNotes && this.EnableLazyLoadProperties)
					m_LeadNotes = LeadNotesRepository.GetLeadNotesByLeadNoteTypeID(this.LeadNoteTypeID);
				return m_LeadNotes;
			}
		}		
    				
		
		public LeadNoteTypesRow()
		{
			
			this.LeadNoteTypeID = 0;
				
			this.LeadNoteTypeName = "";
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  LeadNoteTypesRow( LeadNoteTypesRow oRow)
		{
			
			this.LeadNoteTypeID = oRow.LeadNoteTypeID;
			
			this.LeadNoteTypeName = oRow.LeadNoteTypeName;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
		}	

		public override int GetHashCode()
		{
			return (LeadNoteTypeID + 1721 << 12);
		}		

		public override string ToString()
		{
			return $"{LeadNoteTypeName} ({LeadNoteTypeID})";
		}
		
	}
	
	public class LeadNoteTypesDataTable : List<LeadNoteTypesRow>
	{	
		public LeadNoteTypesDataTable(LeadNoteTypesDataTable oTable)
			: base(oTable)
		{
		}

		public LeadNoteTypesDataTable()
		{
		}
	}

    public partial class LeadNoteTypesRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("LeadNoteTypes");

				return m_cache!;
			}
		}



	
		public static int InsertLeadNoteType(LeadNoteTypesRow oLeadNoteType)
		{
			return InsertLeadNoteType(
    								 oLeadNoteType.LeadNoteTypeName, 
    								 oLeadNoteType.Data
									);			
		}

		public static int  InsertLeadNoteType(
    		string LeadNoteTypeName, 
    		string? Data)
		{
			int iLeadNoteTypeID = 0;

			try
			{
				string strStoredProc = "InsertLeadNoteTypeSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@LeadNoteTypeName", LeadNoteTypeName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iLeadNoteTypeID = DataAccess.IntFromProc(strStoredProc, sqlParams, "LeadNoteTypeID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Note Type since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iLeadNoteTypeID;
		}
		
		public static void UpdateLeadNoteType(
    		int LeadNoteTypeID, 
    		string LeadNoteTypeName, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateLeadNoteTypeSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadNoteTypeID", LeadNoteTypeID));
				
				sqlParams.Add(DataAccess.Params.String("@LeadNoteTypeName", LeadNoteTypeName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadNoteTypeID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Note Type since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateLeadNoteType(LeadNoteTypesRow oLeadNoteType)
		{
			  UpdateLeadNoteType(
    								 oLeadNoteType.LeadNoteTypeID, 
    								 oLeadNoteType.LeadNoteTypeName, 
    								 oLeadNoteType.Data
									);			
		}
		
    	public static void RemoveLeadNoteType(int LeadNoteTypeID)
    	{
			try
			{
				string strStoredProc = "RemoveLeadNoteTypeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadNoteTypeID", LeadNoteTypeID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadNoteTypeID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Lead Note Type since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static LeadNoteTypesRow ? Get(int LeadNoteTypeID)
		{
			LeadNoteTypesRow ? oLeadNoteType = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oLeadNoteType = Cache.Get<LeadNoteTypesRow>(LeadNoteTypeID);

				if (null != oLeadNoteType)
					return oLeadNoteType;
			}

			try
			{
				string strStoredProc = "GetLeadNoteTypeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadNoteTypeID", LeadNoteTypeID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oLeadNoteType = new LeadNoteTypesRow();
					
					oLeadNoteType.LeadNoteTypeID = DataAccess.GetID(reader, "LeadNoteTypeID");
					oLeadNoteType.LeadNoteTypeName = DataAccess.GetString(reader, "LeadNoteTypeName");
					oLeadNoteType.Data = DataAccess.GetStringOrNull(reader, "Data");
					oLeadNoteType.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oLeadNoteType.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");						
						
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

			if (IsCachingEnabled && null != oLeadNoteType)
			{
				
				Cache.Insert(oLeadNoteType, oLeadNoteType.LeadNoteTypeID, oLeadNoteType.LeadNoteTypeName?.ToString());
				
			}

			return oLeadNoteType;
		}
		
		public static LeadNoteTypesDataTable GetAll()
		{
			LeadNoteTypesDataTable tblLeadNoteTypes = new LeadNoteTypesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadNoteTypesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadNoteTypesRow rowLeadNoteType = new LeadNoteTypesRow();
					
					rowLeadNoteType.LeadNoteTypeID = DataAccess.GetID(reader, "LeadNoteTypeID");
					rowLeadNoteType.LeadNoteTypeName = DataAccess.GetString(reader, "LeadNoteTypeName");
					rowLeadNoteType.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowLeadNoteType.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowLeadNoteType.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					
					tblLeadNoteTypes.Add(rowLeadNoteType);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadNoteTypes;
		}	
		
		public static int CopyLeadNoteType(int LeadNoteTypeID)
		{
			int iLeadNoteTypeID = 0;

			try
			{
				string strStoredProc = "CopyLeadNoteTypeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadNoteTypeID", LeadNoteTypeID));

				iLeadNoteTypeID = DataAccess.IntFromProc(strStoredProc, sqlParams, "LeadNoteTypeID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Note Type since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iLeadNoteTypeID;
		}  
		
		public static LeadNoteTypesRow ? GetLeadNoteTypeByLeadNoteTypeName(string LeadNoteTypeName)
		{
			LeadNoteTypesRow ? oLeadNoteType = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oLeadNoteType = Cache.Get<LeadNoteTypesRow>(LeadNoteTypeName.ToString());

					if (null != oLeadNoteType)
						return oLeadNoteType;
				}
						

				string strStoredProc = "GetLeadNoteTypeByLeadNoteTypeNameSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@LeadNoteTypeName", LeadNoteTypeName));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oLeadNoteType = new LeadNoteTypesRow();
					
					oLeadNoteType.LeadNoteTypeID = DataAccess.GetID(reader, "LeadNoteTypeID");
					oLeadNoteType.LeadNoteTypeName = DataAccess.GetString(reader, "LeadNoteTypeName");
					oLeadNoteType.Data = DataAccess.GetStringOrNull(reader, "Data");
					oLeadNoteType.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oLeadNoteType.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
				}

				

				if (IsCachingEnabled && null != oLeadNoteType)
				{
					Cache.Insert(oLeadNoteType, oLeadNoteType.LeadNoteTypeID, oLeadNoteType.LeadNoteTypeName?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oLeadNoteType;		
		}	
			
			
    	public static void UpdateLeadNoteTypeData(int LeadNoteTypeID, string Data)
    	{
    		try
			{
				string strStoredProc = "UpdateLeadNoteTypeDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadNoteTypeID", LeadNoteTypeID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadNoteTypeID);
				}
			}
		
			finally
			{

			}
    	}   		
    	
	}

}	

		