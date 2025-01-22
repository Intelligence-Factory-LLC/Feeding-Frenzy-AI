
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class ContentTypesRow : RooTrax.Common.DB.BasicRow
	{
		
		public int ContentTypeID { get; set;}
			
		public string ContentTypeName { get; set;}
			
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
		
		
		public ContentTypesRow()
		{
			
			this.ContentTypeID = 0;
				
			this.ContentTypeName = "";
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  ContentTypesRow( ContentTypesRow oRow)
		{
			
			this.ContentTypeID = oRow.ContentTypeID;
			
			this.ContentTypeName = oRow.ContentTypeName;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
		}	

		public override int GetHashCode()
		{
			return (ContentTypeID + 5783 << 12);
		}		

		public override string ToString()
		{
			return $"{ContentTypeName} ({ContentTypeID})";
		}
		
	}
	
	public class ContentTypesDataTable : List<ContentTypesRow>
	{	
		public ContentTypesDataTable(ContentTypesDataTable oTable)
			: base(oTable)
		{
		}

		public ContentTypesDataTable()
		{
		}
	}

    public partial class ContentTypesRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("ContentTypes");

				return m_cache!;
			}
		}

		internal static ContentTypesRow PopulateRowFromReader(SqlDataReader reader)
		{
			ContentTypesRow rowContentType = new ContentTypesRow();
			
			rowContentType.ContentTypeID = DataAccess.GetID(reader, "ContentTypeID");
			
			rowContentType.ContentTypeName = DataAccess.GetString(reader, "ContentTypeName");
			
			rowContentType.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowContentType.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowContentType.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
									

			return rowContentType;
		}

	
		public static int InsertContentType(ContentTypesRow oContentType)
		{
			return InsertContentType(
    								 oContentType.ContentTypeName, 
    								 oContentType.Data
									);			
		}

		public static int  InsertContentType(
    		string ContentTypeName, 
    		string? Data)
		{
			int iContentTypeID = 0;

			try
			{
				string strStoredProc = "InsertContentTypeSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@ContentTypeName", ContentTypeName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iContentTypeID = DataAccess.IntFromProc(strStoredProc, sqlParams, "ContentTypeID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Content Type since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iContentTypeID;
		}
		
		public static void UpdateContentType(
    		int ContentTypeID, 
    		string ContentTypeName, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateContentTypeSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@ContentTypeID", ContentTypeID));
				
				sqlParams.Add(DataAccess.Params.String("@ContentTypeName", ContentTypeName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(ContentTypeID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Content Type since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateContentType(ContentTypesRow oContentType)
		{
			  UpdateContentType(
    								 oContentType.ContentTypeID, 
    								 oContentType.ContentTypeName, 
    								 oContentType.Data
									);			
		}
		
    	public static void RemoveContentType(int ContentTypeID)
    	{
			try
			{
				string strStoredProc = "RemoveContentTypeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@ContentTypeID", ContentTypeID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(ContentTypeID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Content Type since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static ContentTypesRow Get(int ContentTypeID)
		{
			ContentTypesRow ? oContentType = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oContentType = Cache.Get<ContentTypesRow>(ContentTypeID);

				if (null != oContentType)
					return oContentType;
			}

			try
			{
				string strStoredProc = "GetContentTypeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@ContentTypeID", ContentTypeID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oContentType = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oContentType)
			{
				
				Cache.Insert(oContentType, oContentType.ContentTypeID, oContentType.ContentTypeName?.ToString());
				
			}

			return oContentType ?? throw new Exception("Could not find ContentType " + ContentTypeID);
		}
		
		public static ContentTypesDataTable GetAll()
		{
			ContentTypesDataTable tblContentTypes = new ContentTypesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetContentTypesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					ContentTypesRow rowContentType = PopulateRowFromReader(reader);
					
					tblContentTypes.Add(rowContentType);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblContentTypes;
		}	
		
		public static int CopyContentType(int ContentTypeID)
		{
			int iContentTypeID = 0;

			try
			{
				string strStoredProc = "CopyContentTypeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@ContentTypeID", ContentTypeID));

				iContentTypeID = DataAccess.IntFromProc(strStoredProc, sqlParams, "ContentTypeID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Content Type since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iContentTypeID;
		}  
		
		public static ContentTypesRow ? GetContentTypeByContentTypeName(string ContentTypeName)
		{
			ContentTypesRow ? oContentType = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oContentType = Cache.Get<ContentTypesRow>(ContentTypeName.ToString());

					if (null != oContentType)
						return oContentType;
				}
						

				string strStoredProc = "GetContentTypeByContentTypeNameSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@ContentTypeName", ContentTypeName));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oContentType = PopulateRowFromReader(reader);
				}

				

				if (IsCachingEnabled && null != oContentType)
				{
					Cache.Insert(oContentType, oContentType.ContentTypeID, oContentType.ContentTypeName?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oContentType;		
		}	
			
			
    	public static void UpdateContentTypeData(int ContentTypeID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateContentTypeDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@ContentTypeID", ContentTypeID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(ContentTypeID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateContentTypeData(ContentTypesRow rowContentType)
    	{
    		UpdateContentTypeData(rowContentType.ContentTypeID, rowContentType.Data);
    	}  
    	

	}

}	

		