
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class SalesRepresentativeTypesRow : RooTrax.Common.DB.BasicRow
	{
		
		public int SalesRepresentativeTypeID { get; set;}
			
		public string SalesRepresentativeTypeName { get; set;}
			
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
		
		
		public SalesRepresentativeTypesRow()
		{
			
			this.SalesRepresentativeTypeID = 0;
				
			this.SalesRepresentativeTypeName = "";
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  SalesRepresentativeTypesRow( SalesRepresentativeTypesRow oRow)
		{
			
			this.SalesRepresentativeTypeID = oRow.SalesRepresentativeTypeID;
			
			this.SalesRepresentativeTypeName = oRow.SalesRepresentativeTypeName;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
		}	

		public override int GetHashCode()
		{
			return (SalesRepresentativeTypeID + 1746 << 12);
		}		

		public override string ToString()
		{
			return $"{SalesRepresentativeTypeName} ({SalesRepresentativeTypeID})";
		}
		
	}
	
	public class SalesRepresentativeTypesDataTable : List<SalesRepresentativeTypesRow>
	{	
		public SalesRepresentativeTypesDataTable(SalesRepresentativeTypesDataTable oTable)
			: base(oTable)
		{
		}

		public SalesRepresentativeTypesDataTable()
		{
		}
	}

    public partial class SalesRepresentativeTypesRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("SalesRepresentativeTypes");

				return m_cache!;
			}
		}



	
		public static int InsertSalesRepresentativeType(SalesRepresentativeTypesRow oSalesRepresentativeType)
		{
			return InsertSalesRepresentativeType(
    								 oSalesRepresentativeType.SalesRepresentativeTypeName, 
    								 oSalesRepresentativeType.Data
									);			
		}

		public static int  InsertSalesRepresentativeType(
    		string SalesRepresentativeTypeName, 
    		string? Data)
		{
			int iSalesRepresentativeTypeID = 0;

			try
			{
				string strStoredProc = "InsertSalesRepresentativeTypeSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@SalesRepresentativeTypeName", SalesRepresentativeTypeName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iSalesRepresentativeTypeID = DataAccess.IntFromProc(strStoredProc, sqlParams, "SalesRepresentativeTypeID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Sales Representative Type since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iSalesRepresentativeTypeID;
		}
		
		public static void UpdateSalesRepresentativeType(
    		int SalesRepresentativeTypeID, 
    		string SalesRepresentativeTypeName, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateSalesRepresentativeTypeSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeTypeID", SalesRepresentativeTypeID));
				
				sqlParams.Add(DataAccess.Params.String("@SalesRepresentativeTypeName", SalesRepresentativeTypeName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(SalesRepresentativeTypeID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Sales Representative Type since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateSalesRepresentativeType(SalesRepresentativeTypesRow oSalesRepresentativeType)
		{
			  UpdateSalesRepresentativeType(
    								 oSalesRepresentativeType.SalesRepresentativeTypeID, 
    								 oSalesRepresentativeType.SalesRepresentativeTypeName, 
    								 oSalesRepresentativeType.Data
									);			
		}
		
    	public static void RemoveSalesRepresentativeType(int SalesRepresentativeTypeID)
    	{
			try
			{
				string strStoredProc = "RemoveSalesRepresentativeTypeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeTypeID", SalesRepresentativeTypeID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(SalesRepresentativeTypeID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Sales Representative Type since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static SalesRepresentativeTypesRow ? Get(int SalesRepresentativeTypeID)
		{
			SalesRepresentativeTypesRow ? oSalesRepresentativeType = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oSalesRepresentativeType = Cache.Get<SalesRepresentativeTypesRow>(SalesRepresentativeTypeID);

				if (null != oSalesRepresentativeType)
					return oSalesRepresentativeType;
			}

			try
			{
				string strStoredProc = "GetSalesRepresentativeTypeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeTypeID", SalesRepresentativeTypeID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oSalesRepresentativeType = new SalesRepresentativeTypesRow();
					
					oSalesRepresentativeType.SalesRepresentativeTypeID = DataAccess.GetID(reader, "SalesRepresentativeTypeID");
					oSalesRepresentativeType.SalesRepresentativeTypeName = DataAccess.GetString(reader, "SalesRepresentativeTypeName");
					oSalesRepresentativeType.Data = DataAccess.GetStringOrNull(reader, "Data");
					oSalesRepresentativeType.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oSalesRepresentativeType.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");						
						
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

			if (IsCachingEnabled && null != oSalesRepresentativeType)
			{
				
				Cache.Insert(oSalesRepresentativeType, oSalesRepresentativeType.SalesRepresentativeTypeID, oSalesRepresentativeType.SalesRepresentativeTypeName?.ToString());
				
			}

			return oSalesRepresentativeType;
		}
		
		public static SalesRepresentativeTypesDataTable GetAll()
		{
			SalesRepresentativeTypesDataTable tblSalesRepresentativeTypes = new SalesRepresentativeTypesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetSalesRepresentativeTypesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					SalesRepresentativeTypesRow rowSalesRepresentativeType = new SalesRepresentativeTypesRow();
					
					rowSalesRepresentativeType.SalesRepresentativeTypeID = DataAccess.GetID(reader, "SalesRepresentativeTypeID");
					rowSalesRepresentativeType.SalesRepresentativeTypeName = DataAccess.GetString(reader, "SalesRepresentativeTypeName");
					rowSalesRepresentativeType.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowSalesRepresentativeType.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowSalesRepresentativeType.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					
					tblSalesRepresentativeTypes.Add(rowSalesRepresentativeType);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblSalesRepresentativeTypes;
		}	
		
		public static int CopySalesRepresentativeType(int SalesRepresentativeTypeID)
		{
			int iSalesRepresentativeTypeID = 0;

			try
			{
				string strStoredProc = "CopySalesRepresentativeTypeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeTypeID", SalesRepresentativeTypeID));

				iSalesRepresentativeTypeID = DataAccess.IntFromProc(strStoredProc, sqlParams, "SalesRepresentativeTypeID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Sales Representative Type since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iSalesRepresentativeTypeID;
		}  
		
		public static SalesRepresentativeTypesRow ? GetSalesRepresentativeTypeBySalesRepresentativeTypeName(string SalesRepresentativeTypeName)
		{
			SalesRepresentativeTypesRow ? oSalesRepresentativeType = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oSalesRepresentativeType = Cache.Get<SalesRepresentativeTypesRow>(SalesRepresentativeTypeName.ToString());

					if (null != oSalesRepresentativeType)
						return oSalesRepresentativeType;
				}
						

				string strStoredProc = "GetSalesRepresentativeTypeBySalesRepresentativeTypeNameSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@SalesRepresentativeTypeName", SalesRepresentativeTypeName));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oSalesRepresentativeType = new SalesRepresentativeTypesRow();
					
					oSalesRepresentativeType.SalesRepresentativeTypeID = DataAccess.GetID(reader, "SalesRepresentativeTypeID");
					oSalesRepresentativeType.SalesRepresentativeTypeName = DataAccess.GetString(reader, "SalesRepresentativeTypeName");
					oSalesRepresentativeType.Data = DataAccess.GetStringOrNull(reader, "Data");
					oSalesRepresentativeType.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oSalesRepresentativeType.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
				}

				

				if (IsCachingEnabled && null != oSalesRepresentativeType)
				{
					Cache.Insert(oSalesRepresentativeType, oSalesRepresentativeType.SalesRepresentativeTypeID, oSalesRepresentativeType.SalesRepresentativeTypeName?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oSalesRepresentativeType;		
		}	
			
			
    	public static void UpdateSalesRepresentativeTypeData(int SalesRepresentativeTypeID, string Data)
    	{
    		try
			{
				string strStoredProc = "UpdateSalesRepresentativeTypeDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeTypeID", SalesRepresentativeTypeID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(SalesRepresentativeTypeID);
				}
			}
		
			finally
			{

			}
    	}   		
    	
	}

}	

		