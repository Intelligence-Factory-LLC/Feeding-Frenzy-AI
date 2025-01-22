using Amazon.S3;
using Amazon.S3.Model;
using FeedingFrenzy.Data;
using WebAppUtilities;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Files : JsonWs
    {
		public static int InsertOrUpdatePhysicalFile(string FileType,
			string FileName,
			string FileDescription,
			string Extension,
			string Contents)
		{
			FileTypesRow ? rowFileType = FileTypesRepository.GetFileTypeByFileType(FileType);
			if (null == rowFileType)
				throw new Exception("Could not find file type: " + FileType);

			FilesRow ? rowFile = FilesRepository.GetFilesByFileName(FileName).FirstOrDefault(x => x.FileTypeID == rowFileType.FileTypeID);

			if (null == rowFile)
			{
				rowFile = new FilesRow();
			}

			if (!Extension.StartsWith("."))
				Extension = "." + Extension;

			string strSavedFile = FileManager.SaveFile(Contents, FileName + Extension, "RPM");

			rowFile.FileTypeID = rowFileType.FileTypeID;
			rowFile.FileName = FileName;
			rowFile.FileDescription = FileDescription;
			rowFile.PhysicalPath = strSavedFile;

			if (rowFile.FileID == 0)
				rowFile.FileID = FilesRepository.InsertFile(rowFile);

			else
				FilesRepository.UpdateFile(rowFile);

			return rowFile.FileID;

		}

		public static int InsertOrUpdateDatabaseFile(string FileType,
			string FileName,
			string FileDescription,
			string Contents)
		{
			FileTypesRow ? rowFileType = FileTypesRepository.GetFileTypeByFileType(FileType);
			if (null == rowFileType)
				throw new Exception("Could not find file type: " + FileType);

			FilesRow ? rowFile = FilesRepository.GetFilesByFileName(FileName).FirstOrDefault(x => x.FileTypeID == rowFileType.FileTypeID);

			if (null == rowFile)
			{
				rowFile = new FilesRow();
			}

			rowFile.FileTypeID = rowFileType.FileTypeID;
			rowFile.FileName = FileName;
			rowFile.FileDescription = FileDescription;
			rowFile.DataObject["Contents"] = Contents;

			if (rowFile.FileID == 0)
				rowFile.FileID = FilesRepository.InsertFile(rowFile);

			else
				FilesRepository.UpdateFile(rowFile);

			return rowFile.FileID;

		}

		public static string ? GetDatabaseFileContents(string FileName)
		{
			FilesRow ? rowFile = FilesRepository.GetFilesByFileName(FileName).FirstOrDefault();

			return rowFile?.DataObject?.GetStringOrNull("Contents");
		}

		public static string ? GetPhysicalFileContents(string FileName)
		{
			FilesRow ? rowFile = FilesRepository.GetFilesByFileName(FileName).FirstOrDefault();
			if (null == rowFile || null == rowFile.PhysicalPath)
				return null;

			return FileManager.GetFileContents(rowFile.PhysicalPath, "RPM");
		}

		public static FilesRow GetPhysicalFileAndContents(int FileID)
		{
			FilesRow oFile = Files.GetFile(FileID);
			if (null == oFile.PhysicalPath)
				throw new Exception("File does not have a physical path");
			
			oFile.DataObject["Contents"] = FileManager.GetFileContents(oFile.PhysicalPath, "RPM");
			return oFile;
		}
	}
}    
		