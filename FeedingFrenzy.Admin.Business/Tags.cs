
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Tags : JsonWs
    {  

			//GetTagsSp_PagingSp ommitted, can't infer types 
			
    	public static int InsertTag(
    		int? SalesRepresentativeID, 
    		string TagName, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iTagID = TagsRepository.InsertTag(
    				SalesRepresentativeID, 
    				TagName, 
    				Data
				);
    		
	    		return iTagID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateTag(
    		int? SalesRepresentativeID, 
    		int TagID, 
    		string TagName, 
    		string? Data)
    	{
    		TagsRepository.UpdateTag(
    			SalesRepresentativeID, 
    			TagID, 
    			TagName, 
    			Data);
    	} 
		
    	public static void RemoveTag(int TagID)
    	{
    		try
    		{
    			TagsRepository.RemoveTag(TagID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static TagsRow GetTag(int TagID)
		{
			return TagsRepository.Get(TagID) ?? throw new ArgumentException("Could not find Tag");
		}
    	
		public static TagsDataTable GetTags()
		{
			return TagsRepository.GetAll();
		}
		
		public static int CopyTag(int TagID)
		{
			return TagsRepository.CopyTag(TagID);
		}
		
		public static TagsRow? GetTagByTagName(string TagName)
		{
			return TagsRepository.GetTagByTagName(TagName);
		}			
			
			
    	public static void UpdateTagData(int TagID, string Data)
    	{
    		TagsRepository.UpdateTagData(TagID, Data);
    	}   		
    	
		public static TagsDataTable GetTagsBySalesRepresentativeID(int SalesRepresentativeID)
		{
			return TagsRepository.GetTagsBySalesRepresentativeID(SalesRepresentativeID);
		}		
						
    }
}    
		