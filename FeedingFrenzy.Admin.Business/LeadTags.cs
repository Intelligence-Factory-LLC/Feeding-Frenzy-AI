
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class LeadTags : JsonWs
    {  

    	public static int InsertLeadTag(
    		int LeadID, 
    		int TagID, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iLeadTagID = LeadTagsRepository.InsertLeadTag(
    				LeadID, 
    				TagID, 
    				Data
				);
    		
	    		return iLeadTagID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateLeadTag(
    		int LeadTagID, 
    		int LeadID, 
    		int TagID, 
    		string? Data)
    	{
    		LeadTagsRepository.UpdateLeadTag(
    			LeadTagID, 
    			LeadID, 
    			TagID, 
    			Data);
    	} 
		
    	public static void RemoveLeadTag(int LeadTagID)
    	{
    		try
    		{
    			LeadTagsRepository.RemoveLeadTag(LeadTagID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static LeadTagsRow GetLeadTag(int LeadTagID)
		{
			return LeadTagsRepository.Get(LeadTagID);
		}
    	
		public static LeadTagsDataTable GetLeadTags()
		{
			return LeadTagsRepository.GetAll();
		}
		
		public static int CopyLeadTag(int LeadTagID)
		{
			return LeadTagsRepository.CopyLeadTag(LeadTagID);
		}
		
			
    	public static void UpdateLeadTagData(int LeadTagID, string Data)
    	{
    		LeadTagsRepository.UpdateLeadTagData(LeadTagID, Data);
    	}   		
    	
		public static LeadTagsRow GetLeadTagByLeadIDTagID(int LeadID, int TagID)
		{
			return LeadTagsRepository.GetLeadTagByLeadIDTagID(LeadID, TagID);
		}			
			
		public static LeadTagsDataTable GetLeadTagsByLeadID(int LeadID)
		{
			return LeadTagsRepository.GetLeadTagsByLeadID(LeadID);
		}		
			
		public static LeadTagsDataTable GetLeadTagsByTagID(int TagID)
		{
			return LeadTagsRepository.GetLeadTagsByTagID(TagID);
		}		
						
    }
}    
		