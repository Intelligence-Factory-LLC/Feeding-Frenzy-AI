
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Files : JsonWs
    {  

    	public static int InsertFile(
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
    			int iFileID = FilesRepository.InsertFile(
    				FileTypeID, 
    				PhysicalPath, 
    				FileName, 
    				FileDescription, 
    				Label, 
    				Data, 
    				IsDeleted
				);
    		
	    		return iFileID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
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
    		FilesRepository.UpdateFile(
    			FileID, 
    			FileTypeID, 
    			PhysicalPath, 
    			FileName, 
    			FileDescription, 
    			Label, 
    			Data, 
    			IsDeleted);
    	} 
		
    	public static void RemoveFile(int FileID)
    	{
    		try
    		{
    			FilesRepository.RemoveFile(FileID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static FilesRow GetFile(int FileID)
		{
			return FilesRepository.Get(FileID) ?? throw new ArgumentException("Could not find File");
		}
    	
		public static FilesDataTable GetFiles()
		{
			return FilesRepository.GetAll();
		}
		
		public static int CopyFile(int FileID)
		{
			return FilesRepository.CopyFile(FileID);
		}
		
			
    	public static void UpdateFileData(int FileID, string Data)
    	{
    		FilesRepository.UpdateFileData(FileID, Data);
    	}   		
    	
    	public static void MarkFileAsDeleted(int FileID)
    	{
    		FilesRepository.MarkFileAsDeleted(FileID);
    	}    		
    	
    	public static void MarkFileAsNotDeleted(int FileID)
    	{
    		FilesRepository.MarkFileAsNotDeleted(FileID);
    	}    		
    	
		public static FilesDataTable GetFilesByFileTypeID(int FileTypeID)
		{
			return FilesRepository.GetFilesByFileTypeID(FileTypeID);
		}		
			
			//GetFilesByFileTypeIDSp_PagingSp ommitted, can't infer types 
						
    }
}    
		