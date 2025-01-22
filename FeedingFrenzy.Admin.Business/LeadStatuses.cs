
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class LeadStatuses : JsonWs
    {  

    	public static int InsertLeadStatus(
    		string StatusName, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iLeadStatusID = LeadStatusesRepository.InsertLeadStatus(
    				StatusName, 
    				Data
				);
    		
	    		return iLeadStatusID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateLeadStatus(
    		int LeadStatusID, 
    		string StatusName, 
    		string? Data)
    	{
    		LeadStatusesRepository.UpdateLeadStatus(
    			LeadStatusID, 
    			StatusName, 
    			Data);
    	} 
		
    	public static void RemoveLeadStatus(int LeadStatusID)
    	{
    		try
    		{
    			LeadStatusesRepository.RemoveLeadStatus(LeadStatusID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static LeadStatusesRow GetLeadStatus(int LeadStatusID)
		{
			return LeadStatusesRepository.Get(LeadStatusID);
		}
    	
		public static LeadStatusesDataTable GetLeadStatuses()
		{
			return LeadStatusesRepository.GetAll();
		}
		
		public static int CopyLeadStatus(int LeadStatusID)
		{
			return LeadStatusesRepository.CopyLeadStatus(LeadStatusID);
		}
		
		public static LeadStatusesRow GetLeadStatusByStatusName(string StatusName)
		{
			return LeadStatusesRepository.GetLeadStatusByStatusName(StatusName);
		}			
			
			
    	public static void UpdateLeadStatusData(int LeadStatusID, string Data)
    	{
    		LeadStatusesRepository.UpdateLeadStatusData(LeadStatusID, Data);
    	}   		
    				
    }
}    
		