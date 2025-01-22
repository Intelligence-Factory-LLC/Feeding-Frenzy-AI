using BasicUtilities;


namespace FeedingFrenzy.Admin.Business
{
	public class FileManager
	{
		public static bool IsAllowedFileExtension(string strFileName)
		{
			return StringUtil.InString(FileManagerFeature.GetFeature().AllowedFileExtensions, Path.GetExtension(strFileName));
		}

		public static string GetSavedFileName(string strOriginalFileName, string strRepository)
		{
			string pathToFiles = ResolveFilePath(strRepository);
			if (!pathToFiles.EndsWith("\\"))
				pathToFiles += "\\";
			return pathToFiles + Guid.NewGuid().ToString() + StringUtil.RemoveNonAlphanumeric(strOriginalFileName);
		}

		public static string GetFilePath(string strFileHandle, string strRepository)
		{
			string pathToFiles = ResolveFilePath(strRepository);
			if (!pathToFiles.EndsWith("\\"))
				pathToFiles += "\\";
			return pathToFiles + strFileHandle;
		}

		public static string GetFileRoot(string strRepository)
		{
			return ResolveFilePath(strRepository);
		}

		public static string SaveFile(Stream oStream, string strFileName, string strRepository)
		{
			string extension = Path.GetExtension(strFileName);
			if (!FileManager.IsAllowedFileExtension(strFileName))
				throw new Exception("The specified file does not have an allowed file extension: " + strFileName);
			string str = StringUtil.RemoveNonAlphanumeric(StringUtil.LeftOfLast(strFileName, extension)) + "-" + Guid.NewGuid().ToString() + extension;
			string pathToFiles = ResolveFilePath(strRepository);
			if (!pathToFiles.EndsWith("\\"))
				pathToFiles += "\\";
			Logs.DebugLog.WriteEvent("Writing File", pathToFiles + str);
			FileStream fileStream = File.Create(pathToFiles + str);
			byte[] buffer = new byte[oStream.Length];
			oStream.Read(buffer, 0, (int)oStream.Length);
			fileStream.Write(buffer, 0, (int)oStream.Length);
			fileStream.Close();
			return str;
		}

		public static string SaveFile(string strContents, string strFileName, string strRepository)
		{
			string extension = Path.GetExtension(strFileName);
			if (!FileManager.IsAllowedFileExtension(strFileName))
				throw new Exception("The specified file does not have an allowed file extension: " + strFileName);
			string str = StringUtil.RemoveNonAlphanumeric(StringUtil.LeftOfLast(strFileName, extension)) + "-" + Guid.NewGuid().ToString() + extension;
			string pathToFiles = ResolveFilePath(strRepository);
			if (!pathToFiles.EndsWith("\\"))
				pathToFiles += "\\";
			Logs.DebugLog.WriteEvent("Writing to File", pathToFiles + str);
			FileUtil.WriteFile(pathToFiles + str, strContents);
			return str;
		}

		public static string UpdateFile(string strContents, string strPhysicalFileName, string strRepository)
		{
			if (!FileManager.IsAllowedFileExtension(strPhysicalFileName))
				throw new Exception("The specified file does not have an allowed file extension: " + strPhysicalFileName);
			string pathToFiles = ResolveFilePath(strRepository);
			if (!pathToFiles.EndsWith("\\"))
				pathToFiles += "\\";
			string path = pathToFiles + strPhysicalFileName;
			if (!File.Exists(path))
				FileUtil.WriteFile(path, strContents); 
			FileUtil.WriteFile(path, strContents);
			return strPhysicalFileName;
		}

		public static string GetImagePath(string strImageHandle, string strRepository)
		{
			string pathToImages = ResolveImagePath(strRepository);
			if (!pathToImages.EndsWith("\\"))
				pathToImages += "\\";
			return pathToImages + strImageHandle;
		}

		public static string SaveImage(Stream oStream, string strFileName, string strRepository)
		{
			string extension = Path.GetExtension(strFileName);
			if (!FileManager.IsAllowedFileExtension(strFileName))
				throw new Exception("The specified file does not have an allowed file extension: " + strFileName);
			string str = StringUtil.RemoveNonAlphanumeric(StringUtil.LeftOfLast(strFileName, extension)) + "-" + Guid.NewGuid().ToString() + extension;
			string pathToImages = ResolveImagePath(strRepository);
			if (!pathToImages.EndsWith("\\"))
				pathToImages += "\\";
			Logs.DebugLog.WriteEvent("Writing File", pathToImages + str);
			FileStream fileStream = File.Create(pathToImages + str);
			byte[] buffer = new byte[oStream.Length];
			oStream.Read(buffer, 0, (int)oStream.Length);
			fileStream.Write(buffer, 0, (int)oStream.Length);
			fileStream.Close();
			return str;
		}

	
		public static string GetFileContents(string strPhysicalFileName, string strRepository)
		{
			return FileUtil.ReadFile(FileUtil.BuildPath(FileManager.GetFileRoot(strRepository), strPhysicalFileName));
		}

		public static string ResolveImagePath(string Repository)
		{
			FileManagerFeature rowFileManagerFeature = FileManagerFeature.GetFeature();
			return rowFileManagerFeature.PathToImages;
		}

		public static string ResolveImageURL(string Repository)
		{
			FileManagerFeature rowFileManagerFeature = FileManagerFeature.GetFeature();
			return rowFileManagerFeature.UrlToImages;
		}

		public static string ResolveFilePath(string Repository)
		{
			FileManagerFeature rowFileManagerFeature = FileManagerFeature.GetFeature();
			return rowFileManagerFeature.PathToFiles;
		}

		public static string ResolveFileURL(string Repository)
		{
			FileManagerFeature rowFileManagerFeature = FileManagerFeature.GetFeature();
			return rowFileManagerFeature.UrlToFiles;
		}
	}

}
