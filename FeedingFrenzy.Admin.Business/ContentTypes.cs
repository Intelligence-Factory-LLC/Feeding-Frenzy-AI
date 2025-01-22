
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class ContentTypes : JsonWs
    {  

    	public static int InsertContentType(
    		string ContentTypeName, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iContentTypeID = ContentTypesRepository.InsertContentType(
    				ContentTypeName, 
    				Data
				);
    		
	    		return iContentTypeID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateContentType(
    		int ContentTypeID, 
    		string ContentTypeName, 
    		string? Data)
    	{
    		ContentTypesRepository.UpdateContentType(
    			ContentTypeID, 
    			ContentTypeName, 
    			Data);
    	} 
		
    	public static void RemoveContentType(int ContentTypeID)
    	{
    		try
    		{
    			ContentTypesRepository.RemoveContentType(ContentTypeID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static ContentTypesRow GetContentType(int ContentTypeID)
		{
			return ContentTypesRepository.Get(ContentTypeID) ?? throw new ArgumentException("Could not find Content Type");
		}
    	
		public static ContentTypesDataTable GetContentTypes()
		{
			return ContentTypesRepository.GetAll();
		}
		
		public static int CopyContentType(int ContentTypeID)
		{
			return ContentTypesRepository.CopyContentType(ContentTypeID);
		}
		
		public static ContentTypesRow? GetContentTypeByContentTypeName(string ContentTypeName)
		{
			return ContentTypesRepository.GetContentTypeByContentTypeName(ContentTypeName);
		}			
			
			
    	public static void UpdateContentTypeData(int ContentTypeID, string Data)
    	{
    		ContentTypesRepository.UpdateContentTypeData(ContentTypeID, Data);
    	}   		
    				
    }
}    
		