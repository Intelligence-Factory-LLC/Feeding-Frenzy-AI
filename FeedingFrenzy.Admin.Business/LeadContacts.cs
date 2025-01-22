
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class LeadContacts : JsonWs
    {  

    	public static int InsertLeadContact(
    		int LeadID, 
    		string? Name, 
    		string? Title, 
    		string? Phone, 
    		string? Email, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iLeadContactID = LeadContactsRepository.InsertLeadContact(
    				LeadID, 
    				Name, 
    				Title, 
    				Phone, 
    				Email, 
    				Data
				);
    		
	    		return iLeadContactID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateLeadContact(
    		int LeadContactID, 
    		int LeadID, 
    		string? Name, 
    		string? Title, 
    		string? Phone, 
    		string? Email, 
    		string? Data)
    	{
    		LeadContactsRepository.UpdateLeadContact(
    			LeadContactID, 
    			LeadID, 
    			Name, 
    			Title, 
    			Phone, 
    			Email, 
    			Data);
    	} 
		
    	public static void RemoveLeadContact(int LeadContactID)
    	{
    		try
    		{
    			LeadContactsRepository.RemoveLeadContact(LeadContactID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static LeadContactsRow GetLeadContact(int LeadContactID)
		{
			return LeadContactsRepository.Get(LeadContactID) ?? throw new ArgumentException("Could not find Lead Contact");
		}
    	
		public static LeadContactsDataTable GetLeadContacts()
		{
			return LeadContactsRepository.GetAll();
		}
		
		public static int CopyLeadContact(int LeadContactID)
		{
			return LeadContactsRepository.CopyLeadContact(LeadContactID);
		}
		
			
    	public static void UpdateLeadContactData(int LeadContactID, string Data)
    	{
    		LeadContactsRepository.UpdateLeadContactData(LeadContactID, Data);
    	}   		
    	
		public static LeadContactsDataTable GetLeadContactsByLeadID(int LeadID)
		{
			return LeadContactsRepository.GetLeadContactsByLeadID(LeadID);
		}		
						
    }
}    
		