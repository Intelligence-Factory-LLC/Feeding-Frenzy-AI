
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class FileTypes : JsonWs
    {  

    	public static int InsertFileType(
    		string FileType, 
    		string? AllowedExtensions)    	    	
    	{
    		try
    		{
    			int iFileTypeID = FileTypesRepository.InsertFileType(
    				FileType, 
    				AllowedExtensions
				);
    		
	    		return iFileTypeID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateFileType(
    		int FileTypeID, 
    		string FileType, 
    		string? AllowedExtensions)
    	{
    		FileTypesRepository.UpdateFileType(
    			FileTypeID, 
    			FileType, 
    			AllowedExtensions);
    	} 
		
    	public static void RemoveFileType(int FileTypeID)
    	{
    		try
    		{
    			FileTypesRepository.RemoveFileType(FileTypeID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static FileTypesRow GetFileType(int FileTypeID)
		{
			return FileTypesRepository.Get(FileTypeID) ?? throw new ArgumentException("Could not find File Type");
		}
    	
		public static FileTypesDataTable GetFileTypes()
		{
			return FileTypesRepository.GetAll();
		}
		
		public static int CopyFileType(int FileTypeID)
		{
			return FileTypesRepository.CopyFileType(FileTypeID);
		}
		
		public static FileTypesRow? GetFileTypeByFileType(string FileType)
		{
			return FileTypesRepository.GetFileTypeByFileType(FileType);
		}			
						
    }
}    
		