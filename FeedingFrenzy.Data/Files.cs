
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class FilesRow : RooTrax.Common.DB.BasicRow
	{
		
		public int FileID { get; set;}
			
		private int m_FileTypeID;
		public int FileTypeID
		{
			get 
			{ 
				return this.m_FileTypeID;
			}
					
			set 
			{ 
				this.m_FileTypeID = value; 
				this.m_FileTypeRow = null; 
			}
		} 
					
		public string? PhysicalPath { get; set;}
			
		public string? FileName { get; set;}
			
		public string? FileDescription { get; set;}
			
		public string? Label { get; set;}
			
		public bool IsDeleted { get; set;}
			
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
		
		private FileTypesRow ? m_FileTypeRow = null;	
		public FileTypesRow ? FileType
		{
			get
			{
				if (null == m_FileTypeRow &&  this.EnableLazyLoadProperties)
					m_FileTypeRow = FileTypesRepository.Get((int)this.FileTypeID);
		
				return m_FileTypeRow;
			}
		}    				
		
		public FilesRow()
		{
			
			this.FileID = 0;
				
			this.FileTypeID = 0;
				
			this.IsDeleted = false;
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  FilesRow( FilesRow oRow)
		{
			
			this.FileID = oRow.FileID;
			
			this.FileTypeID = oRow.FileTypeID;
			
			this.PhysicalPath = oRow.PhysicalPath;
			
			this.FileName = oRow.FileName;
			
			this.FileDescription = oRow.FileDescription;
			
			this.Label = oRow.Label;
			
			this.Data = oRow.Data;
			
			this.IsDeleted = oRow.IsDeleted;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
		}	

		public override int GetHashCode()
		{
			return (FileID + 4782 << 12);
		}		

		public override string ToString()
		{
			return $"({FileID})";
		}
		
	}
	
	public class FilesDataTable : List<FilesRow>
	{	
		public FilesDataTable(FilesDataTable oTable)
			: base(oTable)
		{
		}

		public FilesDataTable()
		{
		}
	}

    public partial class FilesRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("Files");

				return m_cache!;
			}
		}

		internal static FilesRow PopulateRowFromReader(SqlDataReader reader)
		{
			FilesRow rowFile = new FilesRow();
			
			rowFile.FileID = DataAccess.GetID(reader, "FileID");
			
			rowFile.FileTypeID = DataAccess.GetID(reader, "FileTypeID");
			
			rowFile.PhysicalPath = DataAccess.GetStringOrNull(reader, "PhysicalPath");
			
			rowFile.FileName = DataAccess.GetStringOrNull(reader, "FileName");
			
			rowFile.FileDescription = DataAccess.GetStringOrNull(reader, "FileDescription");
			
			rowFile.Label = DataAccess.GetStringOrNull(reader, "Label");
			
			rowFile.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowFile.IsDeleted = DataAccess.GetBoolean(reader, "IsDeleted");
			
			rowFile.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowFile.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
									

			return rowFile;
		}

	
		public static int InsertFile(FilesRow oFile)
		{
			return InsertFile(
    								 oFile.FileTypeID, 
    								 oFile.PhysicalPath, 
    								 oFile.FileName, 
    								 oFile.FileDescription, 
    								 oFile.Label, 
    								 oFile.Data, 
    								 oFile.IsDeleted
									);			
		}

		public static int  InsertFile(
    		int FileTypeID, 
    		string? PhysicalPath, 
    		string? FileName, 
    		string? FileDescription, 
    		string? Label, 
    		string? Data, 
    		bool IsDeleted)
		{
			int iFileID = 0;

			try
			{
				string strStoredProc = "InsertFileSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@FileTypeID", FileTypeID));
				
				sqlParams.Add(DataAccess.Params.String("@PhysicalPath", PhysicalPath));
				
				sqlParams.Add(DataAccess.Params.String("@FileName", FileName));
				
				sqlParams.Add(DataAccess.Params.String("@FileDescription", FileDescription));
				
				sqlParams.Add(DataAccess.Params.String("@Label", Label));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsDeleted", IsDeleted));
				
				iFileID = DataAccess.IntFromProc(strStoredProc, sqlParams, "FileID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert File since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iFileID;
		}
		
		public static void UpdateFile(
    		int FileID, 
    		int FileTypeID, 
    		string? PhysicalPath, 
    		string? FileName, 
    		string? FileDescription, 
    		string? Label, 
    		string? Data, 
    		bool IsDeleted)
    	{    	
    		try
			{
				string strStoredProc = "UpdateFileSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@FileID", FileID));
				
				sqlParams.Add(DataAccess.Params.ID("@FileTypeID", FileTypeID));
				
				sqlParams.Add(DataAccess.Params.String("@PhysicalPath", PhysicalPath));
				
				sqlParams.Add(DataAccess.Params.String("@FileName", FileName));
				
				sqlParams.Add(DataAccess.Params.String("@FileDescription", FileDescription));
				
				sqlParams.Add(DataAccess.Params.String("@Label", Label));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsDeleted", IsDeleted));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(FileID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert File since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateFile(FilesRow oFile)
		{
			  UpdateFile(
    								 oFile.FileID, 
    								 oFile.FileTypeID, 
    								 oFile.PhysicalPath, 
    								 oFile.FileName, 
    								 oFile.FileDescription, 
    								 oFile.Label, 
    								 oFile.Data, 
    								 oFile.IsDeleted
									);			
		}
		
    	public static void RemoveFile(int FileID)
    	{
			try
			{
				string strStoredProc = "RemoveFileSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@FileID", FileID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(FileID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this File since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static FilesRow Get(int FileID)
		{
			FilesRow ? oFile = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oFile = Cache.Get<FilesRow>(FileID);

				if (null != oFile)
					return oFile;
			}

			try
			{
				string strStoredProc = "GetFileSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@FileID", FileID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oFile = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oFile)
			{
				
				Cache.Insert(oFile, oFile.FileID, oFile.FileID.ToString());
				
			}

			return oFile ?? throw new Exception("Could not find File " + FileID);
		}
		
		public static FilesDataTable GetAll()
		{
			FilesDataTable tblFiles = new FilesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetFilesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					FilesRow rowFile = PopulateRowFromReader(reader);
					
					tblFiles.Add(rowFile);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblFiles;
		}	
		
		public static int CopyFile(int FileID)
		{
			int iFileID = 0;

			try
			{
				string strStoredProc = "CopyFileSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@FileID", FileID));

				iFileID = DataAccess.IntFromProc(strStoredProc, sqlParams, "FileID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert File since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iFileID;
		}  
		
			
    	public static void UpdateFileData(int FileID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateFileDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@FileID", FileID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(FileID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateFileData(FilesRow rowFile)
    	{
    		UpdateFileData(rowFile.FileID, rowFile.Data);
    	}  
    	
    	public static void MarkFileAsDeleted(int FileID)
    	{
    		try
			{
				string strStoredProc = "MarkFileAsDeletedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@FileID", FileID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkFileAsNotDeleted(int FileID)
    	{
    		try
			{
				string strStoredProc = "MarkFileAsNotDeletedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@FileID", FileID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
		public static FilesDataTable GetFilesByFileTypeID(int FileTypeID)
		{
			FilesDataTable tblFiles = new FilesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetFilesByFileTypeIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@FileTypeID", FileTypeID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					FilesRow rowFile = PopulateRowFromReader(reader);

					tblFiles.Add(rowFile);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblFiles;
		}				
		public static int? GetFilesByFileTypeIDSp_CountSp(int FileTypeID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetFilesByFileTypeIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@FileTypeID", FileTypeID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetFilesByFileTypeIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static FilesDataTable GetFilesByFileTypeIDSp_PagingSp(int FileTypeID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			FilesDataTable tblFiles = new FilesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetFilesByFileTypeIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@FileTypeID", FileTypeID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					FilesRow rowFile = PopulateRowFromReader(reader);

					tblFiles.Add(rowFile);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblFiles;
		}				
		public static FilesDataTable GetFilesSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			FilesDataTable tblFiles = new FilesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetFilesSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					FilesRow rowFile = PopulateRowFromReader(reader);

					tblFiles.Add(rowFile);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblFiles;
		}				
		public static int? GetFilesSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetFilesSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetFilesSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static FilesDataTable GetFilesByFileName(string? FileName)
		{
			FilesDataTable tblFiles = new FilesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetFilesByFileNameSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@FileName", FileName));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					FilesRow rowFile = PopulateRowFromReader(reader);

					tblFiles.Add(rowFile);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblFiles;
		}				

	}

}	

		