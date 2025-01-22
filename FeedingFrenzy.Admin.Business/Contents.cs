
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Contents : JsonWs
    {  

			//GetContentsSp_PagingSp ommitted, can't infer types 
			
    	public static int InsertContent(
    		string ContentName, 
    		string? Content, 
    		string? Data, 
    		int? ContentTypeID)    	    	
    	{
    		try
    		{
    			int iContentID = ContentsRepository.InsertContent(
    				ContentName, 
    				Content, 
    				Data, 
    				ContentTypeID
				);
    		
	    		return iContentID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateContent(
    		int ContentID, 
    		string ContentName, 
    		string? Content, 
    		string? Data, 
    		int? ContentTypeID)
    	{
    		ContentsRepository.UpdateContent(
    			ContentID, 
    			ContentName, 
    			Content, 
    			Data, 
    			ContentTypeID);
    	} 
		
    	public static void RemoveContent(int ContentID)
    	{
    		try
    		{
    			ContentsRepository.RemoveContent(ContentID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static ContentsRow GetContent(int ContentID)
		{
			return ContentsRepository.Get(ContentID) ?? throw new ArgumentException("Could not find Content");
		}
    	
		public static ContentsDataTable GetContents()
		{
			return ContentsRepository.GetAll();
		}
		
		public static int CopyContent(int ContentID)
		{
			return ContentsRepository.CopyContent(ContentID);
		}
		
		public static ContentsRow? GetContentByContentName(string ContentName)
		{
			return ContentsRepository.GetContentByContentName(ContentName);
		}			
			
			
    	public static void UpdateContentData(int ContentID, string Data)
    	{
    		ContentsRepository.UpdateContentData(ContentID, Data);
    	}   		
    				
    }
}    
		