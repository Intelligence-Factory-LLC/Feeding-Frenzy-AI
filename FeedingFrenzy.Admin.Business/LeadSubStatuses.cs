
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class LeadSubStatuses : JsonWs
    {  

    	public static int InsertLeadSubStatus(
    		int LeadStatusID, 
    		string SubStatusName, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iLeadSubStatusID = LeadSubStatusesRepository.InsertLeadSubStatus(
    				LeadStatusID, 
    				SubStatusName, 
    				Data
				);
    		
	    		return iLeadSubStatusID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateLeadSubStatus(
    		int LeadStatusID, 
    		string SubStatusName, 
    		string? Data, 
    		int LeadSubStatusID)
    	{
    		LeadSubStatusesRepository.UpdateLeadSubStatus(
    			LeadStatusID, 
    			SubStatusName, 
    			Data, 
    			LeadSubStatusID);
    	} 
		
    	public static void RemoveLeadSubStatus(int LeadSubStatusID)
    	{
    		try
    		{
    			LeadSubStatusesRepository.RemoveLeadSubStatus(LeadSubStatusID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static LeadSubStatusesRow GetLeadSubStatus(int LeadSubStatusID)
		{
			return LeadSubStatusesRepository.Get(LeadSubStatusID);
		}
    	
		public static LeadSubStatusesDataTable GetLeadSubStatuses()
		{
			return LeadSubStatusesRepository.GetAll();
		}
		
		public static int CopyLeadSubStatus(int LeadSubStatusID)
		{
			return LeadSubStatusesRepository.CopyLeadSubStatus(LeadSubStatusID);
		}
		
		public static LeadSubStatusesRow GetLeadSubStatusBySubStatusName(string SubStatusName)
		{
			return LeadSubStatusesRepository.GetLeadSubStatusBySubStatusName(SubStatusName) ?? throw new Exception("Could not find Lead SubStatus " + SubStatusName);
		}			
			
			
    	public static void UpdateLeadSubStatusData(int LeadSubStatusID, string Data)
    	{
    		LeadSubStatusesRepository.UpdateLeadSubStatusData(LeadSubStatusID, Data);
    	}   		
    	
		public static LeadSubStatusesDataTable GetLeadSubStatusesByLeadStatusID(int LeadStatusID)
		{
			return LeadSubStatusesRepository.GetLeadSubStatusesByLeadStatusID(LeadStatusID);
		}		
						
    }
}    
		