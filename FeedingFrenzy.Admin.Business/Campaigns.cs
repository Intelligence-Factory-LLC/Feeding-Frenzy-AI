
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Campaigns : JsonWs
    {  

    	public static int InsertCampaign(
    		int SourceID, 
    		string CampaignName, 
    		string? CampaignKey, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iCampaignID = CampaignsRepository.InsertCampaign(
    				SourceID, 
    				CampaignName, 
    				CampaignKey, 
    				Data
				);
    		
	    		return iCampaignID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateCampaign(
    		int CampaignID, 
    		int SourceID, 
    		string CampaignName, 
    		string? CampaignKey, 
    		string? Data)
    	{
    		CampaignsRepository.UpdateCampaign(
    			CampaignID, 
    			SourceID, 
    			CampaignName, 
    			CampaignKey, 
    			Data);
    	} 
		
    	public static void RemoveCampaign(int CampaignID)
    	{
    		try
    		{
    			CampaignsRepository.RemoveCampaign(CampaignID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static CampaignsRow GetCampaign(int CampaignID)
		{
			return CampaignsRepository.Get(CampaignID);
		}
    	
		public static CampaignsDataTable GetCampaigns()
		{
			return CampaignsRepository.GetAll();
		}
		
		public static int CopyCampaign(int CampaignID)
		{
			return CampaignsRepository.CopyCampaign(CampaignID);
		}
		
		public static CampaignsRow GetCampaignByCampaignName(string CampaignName)
		{
			return CampaignsRepository.GetCampaignByCampaignName(CampaignName);
		}			
			
			
    	public static void UpdateCampaignData(int CampaignID, string Data)
    	{
    		CampaignsRepository.UpdateCampaignData(CampaignID, Data);
    	}   		
    	
		public static CampaignsDataTable GetCampaignsBySourceID(int SourceID)
		{
			return CampaignsRepository.GetCampaignsBySourceID(SourceID);
		}		
						
    }
}    
		