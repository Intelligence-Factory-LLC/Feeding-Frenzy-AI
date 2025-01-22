
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class AreaCodesRow : RooTrax.Common.DB.BasicRow
	{
		
		public int AreaCodeID { get; set;}
			
		public string AreaCode { get; set;}
			
		public string? TimeZone { get; set;}
			
		public string? Region { get; set;}
			
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
		
		
		public AreaCodesRow()
		{
			
			this.AreaCodeID = 0;
				
			this.AreaCode = "";
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  AreaCodesRow( AreaCodesRow oRow)
		{
			
			this.AreaCodeID = oRow.AreaCodeID;
			
			this.AreaCode = oRow.AreaCode;
			
			this.TimeZone = oRow.TimeZone;
			
			this.Region = oRow.Region;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
		}	

		public override int GetHashCode()
		{
			return (AreaCodeID + 1751 << 12);
		}		

		public override string ToString()
		{
			return $"{AreaCode} ({AreaCodeID})";
		}
		
	}
	
	public class AreaCodesDataTable : List<AreaCodesRow>
	{	
		public AreaCodesDataTable(AreaCodesDataTable oTable)
			: base(oTable)
		{
		}

		public AreaCodesDataTable()
		{
		}
	}

    public partial class AreaCodesRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("AreaCodes");

				return m_cache!;
			}
		}

		internal static AreaCodesRow PopulateRowFromReader(SqlDataReader reader)
		{
			AreaCodesRow rowAreaCode = new AreaCodesRow();
			
			rowAreaCode.AreaCodeID = DataAccess.GetID(reader, "AreaCodeID");
			
			rowAreaCode.AreaCode = DataAccess.GetString(reader, "AreaCode");
			
			rowAreaCode.TimeZone = DataAccess.GetStringOrNull(reader, "TimeZone");
			
			rowAreaCode.Region = DataAccess.GetStringOrNull(reader, "Region");
			
			rowAreaCode.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowAreaCode.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowAreaCode.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
									

			return rowAreaCode;
		}

	
		public static int InsertAreaCode(AreaCodesRow oAreaCode)
		{
			return InsertAreaCode(
    								 oAreaCode.AreaCode, 
    								 oAreaCode.TimeZone, 
    								 oAreaCode.Region, 
    								 oAreaCode.Data
									);			
		}

		public static int  InsertAreaCode(
    		string AreaCode, 
    		string? TimeZone, 
    		string? Region, 
    		string? Data)
		{
			int iAreaCodeID = 0;

			try
			{
				string strStoredProc = "InsertAreaCodeSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@AreaCode", AreaCode));
				
				sqlParams.Add(DataAccess.Params.String("@TimeZone", TimeZone));
				
				sqlParams.Add(DataAccess.Params.String("@Region", Region));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iAreaCodeID = DataAccess.IntFromProc(strStoredProc, sqlParams, "AreaCodeID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Area Code since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iAreaCodeID;
		}
		
		public static void UpdateAreaCode(
    		int AreaCodeID, 
    		string AreaCode, 
    		string? TimeZone, 
    		string? Region, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateAreaCodeSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@AreaCodeID", AreaCodeID));
				
				sqlParams.Add(DataAccess.Params.String("@AreaCode", AreaCode));
				
				sqlParams.Add(DataAccess.Params.String("@TimeZone", TimeZone));
				
				sqlParams.Add(DataAccess.Params.String("@Region", Region));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(AreaCodeID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Area Code since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateAreaCode(AreaCodesRow oAreaCode)
		{
			  UpdateAreaCode(
    								 oAreaCode.AreaCodeID, 
    								 oAreaCode.AreaCode, 
    								 oAreaCode.TimeZone, 
    								 oAreaCode.Region, 
    								 oAreaCode.Data
									);			
		}
		
    	public static void RemoveAreaCode(int AreaCodeID)
    	{
			try
			{
				string strStoredProc = "RemoveAreaCodeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@AreaCodeID", AreaCodeID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(AreaCodeID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Area Code since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static AreaCodesRow ? Get(int AreaCodeID)
		{
			AreaCodesRow ? oAreaCode = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oAreaCode = Cache.Get<AreaCodesRow>(AreaCodeID);

				if (null != oAreaCode)
					return oAreaCode;
			}

			try
			{
				string strStoredProc = "GetAreaCodeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@AreaCodeID", AreaCodeID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oAreaCode = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oAreaCode)
			{
				
				Cache.Insert(oAreaCode, oAreaCode.AreaCodeID, oAreaCode.AreaCode?.ToString());
				
			}

			return oAreaCode;
		}
		
		public static AreaCodesDataTable GetAll()
		{
			AreaCodesDataTable tblAreaCodes = new AreaCodesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetAreaCodesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					AreaCodesRow rowAreaCode = PopulateRowFromReader(reader);
					
					tblAreaCodes.Add(rowAreaCode);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblAreaCodes;
		}	
		
		public static int CopyAreaCode(int AreaCodeID)
		{
			int iAreaCodeID = 0;

			try
			{
				string strStoredProc = "CopyAreaCodeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@AreaCodeID", AreaCodeID));

				iAreaCodeID = DataAccess.IntFromProc(strStoredProc, sqlParams, "AreaCodeID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Area Code since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iAreaCodeID;
		}  
		
		public static AreaCodesRow ? GetAreaCodeByAreaCode(string AreaCode)
		{
			AreaCodesRow ? oAreaCode = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oAreaCode = Cache.Get<AreaCodesRow>(AreaCode.ToString());

					if (null != oAreaCode)
						return oAreaCode;
				}
						

				string strStoredProc = "GetAreaCodeByAreaCodeSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@AreaCode", AreaCode));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oAreaCode = PopulateRowFromReader(reader);
				}

				

				if (IsCachingEnabled && null != oAreaCode)
				{
					Cache.Insert(oAreaCode, oAreaCode.AreaCodeID, oAreaCode.AreaCode?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oAreaCode;		
		}	
			
			
    	public static void UpdateAreaCodeData(int AreaCodeID, string Data)
    	{
    		try
			{
				string strStoredProc = "UpdateAreaCodeDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@AreaCodeID", AreaCodeID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(AreaCodeID);
				}
			}
		
			finally
			{

			}
    	}   		
    	
	}

}	

		