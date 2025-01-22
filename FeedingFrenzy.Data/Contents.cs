
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class ContentsRow : RooTrax.Common.DB.BasicRow
	{
		
		public int ContentID { get; set;}
			
		public string ContentName { get; set;}
			
		public string? Content { get; set;}
			
		public DateTime LastUpdated { get; set;}
			
		public DateTime DateCreated { get; set;}
			
		private int? m_ContentTypeID;
		public int? ContentTypeID
		{
			get 
			{ 
				return this.m_ContentTypeID;
			}
					
			set 
			{ 
				this.m_ContentTypeID = value; 
				this.m_ContentTypeRow = null; 
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
		
		private ContentTypesRow ? m_ContentTypeRow = null;	
		public ContentTypesRow ? ContentType
		{
			get
			{
				if (null == m_ContentTypeRow &&  null != this.ContentTypeID && this.EnableLazyLoadProperties)
					m_ContentTypeRow = ContentTypesRepository.Get((int)this.ContentTypeID);
		
				return m_ContentTypeRow;
			}
		}    				
		
		public ContentsRow()
		{
			
			this.ContentID = 0;
				
			this.ContentName = "";
				
			this.LastUpdated = DateTime.Now;
				
			this.DateCreated = DateTime.Now;
				
		}

		public  ContentsRow( ContentsRow oRow)
		{
			
			this.ContentID = oRow.ContentID;
			
			this.ContentName = oRow.ContentName;
			
			this.Content = oRow.Content;
			
			this.LastUpdated = oRow.LastUpdated;
			
			this.DateCreated = oRow.DateCreated;
			
			this.Data = oRow.Data;
			
			this.ContentTypeID = oRow.ContentTypeID;
			
		}	

		public override int GetHashCode()
		{
			return (ContentID + 1743 << 12);
		}		

		public override string ToString()
		{
			return $"{ContentName} ({ContentID})";
		}
		
	}
	
	public class ContentsDataTable : List<ContentsRow>
	{	
		public ContentsDataTable(ContentsDataTable oTable)
			: base(oTable)
		{
		}

		public ContentsDataTable()
		{
		}
	}

    public partial class ContentsRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("Contents");

				return m_cache!;
			}
		}

		internal static ContentsRow PopulateRowFromReader(SqlDataReader reader)
		{
			ContentsRow rowContent = new ContentsRow();
			
			rowContent.ContentID = DataAccess.GetID(reader, "ContentID");
			
			rowContent.ContentName = DataAccess.GetString(reader, "ContentName");
			
			rowContent.Content = DataAccess.GetTextOrNull(reader, "Content");
			
			rowContent.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
			
			rowContent.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowContent.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowContent.ContentTypeID = DataAccess.GetIDOrNull(reader, "ContentTypeID");
									

			return rowContent;
		}

	
		public static ContentsDataTable GetContentsSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			ContentsDataTable tblContents = new ContentsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetContentsSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					ContentsRow rowContent = PopulateRowFromReader(reader);

					tblContents.Add(rowContent);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblContents;
		}				
		public static int? GetContentsSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetContentsSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetContentsSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static int InsertContent(ContentsRow oContent)
		{
			return InsertContent(
    								 oContent.ContentName, 
    								 oContent.Content, 
    								 oContent.Data, 
    								 oContent.ContentTypeID
									);			
		}

		public static int  InsertContent(
    		string ContentName, 
    		string? Content, 
    		string? Data, 
    		int? ContentTypeID)
		{
			int iContentID = 0;

			try
			{
				string strStoredProc = "InsertContentSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@ContentName", ContentName));
				
				sqlParams.Add(DataAccess.Params.Text("@Content", Content));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.ID("@ContentTypeID", ContentTypeID));
				
				iContentID = DataAccess.IntFromProc(strStoredProc, sqlParams, "ContentID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Content since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iContentID;
		}
		
		public static void UpdateContent(
    		int ContentID, 
    		string ContentName, 
    		string? Content, 
    		string? Data, 
    		int? ContentTypeID)
    	{    	
    		try
			{
				string strStoredProc = "UpdateContentSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@ContentID", ContentID));
				
				sqlParams.Add(DataAccess.Params.String("@ContentName", ContentName));
				
				sqlParams.Add(DataAccess.Params.Text("@Content", Content));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.ID("@ContentTypeID", ContentTypeID));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(ContentID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Content since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateContent(ContentsRow oContent)
		{
			  UpdateContent(
    								 oContent.ContentID, 
    								 oContent.ContentName, 
    								 oContent.Content, 
    								 oContent.Data, 
    								 oContent.ContentTypeID
									);			
		}
		
    	public static void RemoveContent(int ContentID)
    	{
			try
			{
				string strStoredProc = "RemoveContentSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@ContentID", ContentID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(ContentID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Content since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static ContentsRow Get(int ContentID)
		{
			ContentsRow ? oContent = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oContent = Cache.Get<ContentsRow>(ContentID);

				if (null != oContent)
					return oContent;
			}

			try
			{
				string strStoredProc = "GetContentSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@ContentID", ContentID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oContent = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oContent)
			{
				
				Cache.Insert(oContent, oContent.ContentID, oContent.ContentName?.ToString());
				
			}

			return oContent ?? throw new Exception("Could not find Content " + ContentID);
		}
		
		public static ContentsDataTable GetAll()
		{
			ContentsDataTable tblContents = new ContentsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetContentsSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					ContentsRow rowContent = PopulateRowFromReader(reader);
					
					tblContents.Add(rowContent);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblContents;
		}	
		
		public static int CopyContent(int ContentID)
		{
			int iContentID = 0;

			try
			{
				string strStoredProc = "CopyContentSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@ContentID", ContentID));

				iContentID = DataAccess.IntFromProc(strStoredProc, sqlParams, "ContentID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Content since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iContentID;
		}  
		
		public static ContentsRow ? GetContentByContentName(string ContentName)
		{
			ContentsRow ? oContent = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oContent = Cache.Get<ContentsRow>(ContentName.ToString());

					if (null != oContent)
						return oContent;
				}
						

				string strStoredProc = "GetContentByContentNameSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@ContentName", ContentName));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oContent = PopulateRowFromReader(reader);
				}

				

				if (IsCachingEnabled && null != oContent)
				{
					Cache.Insert(oContent, oContent.ContentID, oContent.ContentName?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oContent;		
		}	
			
			
    	public static void UpdateContentData(int ContentID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateContentDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@ContentID", ContentID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(ContentID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateContentData(ContentsRow rowContent)
    	{
    		UpdateContentData(rowContent.ContentID, rowContent.Data);
    	}  
    	
		public static ContentsDataTable GetContentsByContentTypeID(int? ContentTypeID)
		{
			ContentsDataTable tblContents = new ContentsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetContentsByContentTypeIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@ContentTypeID", ContentTypeID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					ContentsRow rowContent = PopulateRowFromReader(reader);

					tblContents.Add(rowContent);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblContents;
		}				
		public static int? GetContentsByContentTypeIDSp_CountSp(int? ContentTypeID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetContentsByContentTypeIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@ContentTypeID", ContentTypeID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetContentsByContentTypeIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static ContentsDataTable GetContentsByContentTypeIDSp_PagingSp(int? ContentTypeID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			ContentsDataTable tblContents = new ContentsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetContentsByContentTypeIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@ContentTypeID", ContentTypeID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					ContentsRow rowContent = PopulateRowFromReader(reader);

					tblContents.Add(rowContent);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblContents;
		}				

	}

}	

		