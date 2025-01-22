
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class FileTypesRow : RooTrax.Common.DB.BasicRow
	{
		
		public int FileTypeID { get; set;}
			
		public string FileType { get; set;}
			
		public string? AllowedExtensions { get; set;}
			
		public DateTime DateCreated { get; set;}
			
		public DateTime LastUpdated { get; set;}
			

		
		
		public FileTypesRow()
		{
			
			this.FileTypeID = 0;
				
			this.FileType = "";
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  FileTypesRow( FileTypesRow oRow)
		{
			
			this.FileTypeID = oRow.FileTypeID;
			
			this.FileType = oRow.FileType;
			
			this.AllowedExtensions = oRow.AllowedExtensions;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
		}	

		public override int GetHashCode()
		{
			return (FileTypeID + 4783 << 12);
		}		

		public override string ToString()
		{
			return $"{FileType} ({FileTypeID})";
		}
		
	}
	
	public class FileTypesDataTable : List<FileTypesRow>
	{	
		public FileTypesDataTable(FileTypesDataTable oTable)
			: base(oTable)
		{
		}

		public FileTypesDataTable()
		{
		}
	}

    public partial class FileTypesRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("FileTypes");

				return m_cache!;
			}
		}

		internal static FileTypesRow PopulateRowFromReader(SqlDataReader reader)
		{
			FileTypesRow rowFileType = new FileTypesRow();
			
			rowFileType.FileTypeID = DataAccess.GetID(reader, "FileTypeID");
			
			rowFileType.FileType = DataAccess.GetString(reader, "FileType");
			
			rowFileType.AllowedExtensions = DataAccess.GetStringOrNull(reader, "AllowedExtensions");
			
			rowFileType.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowFileType.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
									

			return rowFileType;
		}

	
		public static int InsertFileType(FileTypesRow oFileType)
		{
			return InsertFileType(
    								 oFileType.FileType, 
    								 oFileType.AllowedExtensions
									);			
		}

		public static int  InsertFileType(
    		string FileType, 
    		string? AllowedExtensions)
		{
			int iFileTypeID = 0;

			try
			{
				string strStoredProc = "InsertFileTypeSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@FileType", FileType));
				
				sqlParams.Add(DataAccess.Params.String("@AllowedExtensions", AllowedExtensions));
				
				iFileTypeID = DataAccess.IntFromProc(strStoredProc, sqlParams, "FileTypeID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert File Type since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iFileTypeID;
		}
		
		public static void UpdateFileType(
    		int FileTypeID, 
    		string FileType, 
    		string? AllowedExtensions)
    	{    	
    		try
			{
				string strStoredProc = "UpdateFileTypeSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@FileTypeID", FileTypeID));
				
				sqlParams.Add(DataAccess.Params.String("@FileType", FileType));
				
				sqlParams.Add(DataAccess.Params.String("@AllowedExtensions", AllowedExtensions));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(FileTypeID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert File Type since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateFileType(FileTypesRow oFileType)
		{
			  UpdateFileType(
    								 oFileType.FileTypeID, 
    								 oFileType.FileType, 
    								 oFileType.AllowedExtensions
									);			
		}
		
    	public static void RemoveFileType(int FileTypeID)
    	{
			try
			{
				string strStoredProc = "RemoveFileTypeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@FileTypeID", FileTypeID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(FileTypeID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this File Type since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static FileTypesRow Get(int FileTypeID)
		{
			FileTypesRow ? oFileType = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oFileType = Cache.Get<FileTypesRow>(FileTypeID);

				if (null != oFileType)
					return oFileType;
			}

			try
			{
				string strStoredProc = "GetFileTypeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@FileTypeID", FileTypeID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oFileType = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oFileType)
			{
				
				Cache.Insert(oFileType, oFileType.FileTypeID, oFileType.FileType?.ToString());
				
			}

			return oFileType ?? throw new Exception("Could not find FileType " + FileTypeID);
		}
		
		public static FileTypesDataTable GetAll()
		{
			FileTypesDataTable tblFileTypes = new FileTypesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetFileTypesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					FileTypesRow rowFileType = PopulateRowFromReader(reader);
					
					tblFileTypes.Add(rowFileType);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblFileTypes;
		}	
		
		public static int CopyFileType(int FileTypeID)
		{
			int iFileTypeID = 0;

			try
			{
				string strStoredProc = "CopyFileTypeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@FileTypeID", FileTypeID));

				iFileTypeID = DataAccess.IntFromProc(strStoredProc, sqlParams, "FileTypeID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert File Type since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iFileTypeID;
		}  
		
		public static FileTypesRow ? GetFileTypeByFileType(string FileType)
		{
			FileTypesRow ? oFileType = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oFileType = Cache.Get<FileTypesRow>(FileType.ToString());

					if (null != oFileType)
						return oFileType;
				}
						

				string strStoredProc = "GetFileTypeByFileTypeSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@FileType", FileType));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oFileType = PopulateRowFromReader(reader);
				}

				

				if (IsCachingEnabled && null != oFileType)
				{
					Cache.Insert(oFileType, oFileType.FileTypeID, oFileType.FileType?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oFileType;		
		}	
			

	}

}	

		