
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Leads : JsonWs
    {  

    	public static int InsertLead(
    		int? AccountID, 
    		int? LeadSubStatusID, 
    		DateTime? FollowUpDate, 
    		string? Company, 
    		string? FirstName, 
    		string? LastName, 
    		string? Phone, 
    		string? Email, 
    		string? Address, 
    		string? Address2, 
    		string? City, 
    		string? State, 
    		string? ZipCode, 
    		int SourceID, 
    		DateTime? LastContactedDate, 
    		int Priority, 
    		int LeadStatusID, 
    		int? OpportunitySize, 
    		string? Data, 
    		int? SalesRepresentativeID, 
    		string? ImportKey, 
    		DateTime? GeneratedDate, 
    		int? CampaignID)    	    	
    	{
    		try
    		{
    			int iLeadID = LeadsRepository.InsertLead(
    				AccountID, 
    				LeadSubStatusID, 
    				FollowUpDate, 
    				Company, 
    				FirstName, 
    				LastName, 
    				Phone, 
    				Email, 
    				Address, 
    				Address2, 
    				City, 
    				State, 
    				ZipCode, 
    				SourceID, 
    				LastContactedDate, 
    				Priority, 
    				LeadStatusID, 
    				OpportunitySize, 
    				Data, 
    				SalesRepresentativeID, 
    				ImportKey, 
    				GeneratedDate, 
    				CampaignID
				);
    		
	    		return iLeadID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateLead(
    		int? AccountID, 
    		int? LeadSubStatusID, 
    		DateTime? FollowUpDate, 
    		int LeadID, 
    		string? Company, 
    		string? FirstName, 
    		string? LastName, 
    		string? Phone, 
    		string? Email, 
    		string? Address, 
    		string? Address2, 
    		string? City, 
    		string? State, 
    		string? ZipCode, 
    		int SourceID, 
    		DateTime? LastContactedDate, 
    		int Priority, 
    		int LeadStatusID, 
    		int? OpportunitySize, 
    		string? Data, 
    		int? SalesRepresentativeID, 
    		string? ImportKey, 
    		DateTime? GeneratedDate, 
    		int? CampaignID)
    	{
    		LeadsRepository.UpdateLead(
    			AccountID, 
    			LeadSubStatusID, 
    			FollowUpDate, 
    			LeadID, 
    			Company, 
    			FirstName, 
    			LastName, 
    			Phone, 
    			Email, 
    			Address, 
    			Address2, 
    			City, 
    			State, 
    			ZipCode, 
    			SourceID, 
    			LastContactedDate, 
    			Priority, 
    			LeadStatusID, 
    			OpportunitySize, 
    			Data, 
    			SalesRepresentativeID, 
    			ImportKey, 
    			GeneratedDate, 
    			CampaignID);
    	} 
		
    	public static void RemoveLead(int LeadID)
    	{
    		try
    		{
    			LeadsRepository.RemoveLead(LeadID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static LeadsRow GetLead(int LeadID)
		{
			return LeadsRepository.Get(LeadID) ?? throw new ArgumentException("Could not find Lead");
		}
    	
		public static LeadsDataTable GetLeads()
		{
			return LeadsRepository.GetAll();
		}
		
		public static int CopyLead(int LeadID)
		{
			return LeadsRepository.CopyLead(LeadID);
		}
		
			
    	public static void UpdateLeadData(int LeadID, string Data)
    	{
    		LeadsRepository.UpdateLeadData(LeadID, Data);
    	}   		
    	
		public static LeadsDataTable GetLeadsByCampaignID(int CampaignID)
		{
			return LeadsRepository.GetLeadsByCampaignID(CampaignID);
		}		
			
		public static LeadsDataTable GetLeadsBySourceID(int SourceID)
		{
			return LeadsRepository.GetLeadsBySourceID(SourceID);
		}		
			
			//GetLeadsSp_PagingSp ommitted, can't infer types 
			
			//GetLeadsByCampaignIDSp_PagingSp ommitted, can't infer types 
			
			//GetLeadsBySourceIDSp_PagingSp ommitted, can't infer types 
			
		//public static LeadsDataTable GetLeadsByPhone(string Phone)
		//{
		//	return LeadsRepository.GetLeadsByPhone(Phone);
		//}		
			
		//public static LeadsDataTable GetLeadsByEmail(string Email)
		//{
		//	return LeadsRepository.GetLeadsByEmail(Email);
		//}		
			
		public static LeadsDataTable GetLeadsByImportKey(string ImportKey)
		{
			return LeadsRepository.GetLeadsByImportKey(ImportKey);
		}		
			
		public static LeadsDataTable GetLeadsByLeadStatusID(int LeadStatusID)
		{
			return LeadsRepository.GetLeadsByLeadStatusID(LeadStatusID);
		}		
			
		public static LeadsDataTable GetLeadsBySalesRepresentativeID(int SalesRepresentativeID)
		{
			return LeadsRepository.GetLeadsBySalesRepresentativeID(SalesRepresentativeID);
		}		
			
			//GetLeadsByTagIDSalesRepresentativeID ommitted, can't infer types 
			
			//GetDuplicate ommitted, can't infer types 
			
		public static LeadsDataTable GetLeadsByLeadSubStatusID(int LeadSubStatusID)
		{
			return LeadsRepository.GetLeadsByLeadSubStatusID(LeadSubStatusID);
		}		
						
    }
}    
		