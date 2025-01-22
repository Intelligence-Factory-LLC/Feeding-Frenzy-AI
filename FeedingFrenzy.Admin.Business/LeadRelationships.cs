
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class LeadRelationships : JsonWs
    {  

    	public static int InsertLeadRelationship(
    		int LeadRelationshipTypeID, 
    		int LeadID, 
    		int RelatedLeadID, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iLeadRelationshipID = LeadRelationshipsRepository.InsertLeadRelationship(
    				LeadRelationshipTypeID, 
    				LeadID, 
    				RelatedLeadID, 
    				Data
				);
    		
	    		return iLeadRelationshipID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateLeadRelationship(
    		int LeadRelationshipID, 
    		int LeadRelationshipTypeID, 
    		int LeadID, 
    		int RelatedLeadID, 
    		string? Data)
    	{
    		LeadRelationshipsRepository.UpdateLeadRelationship(
    			LeadRelationshipID, 
    			LeadRelationshipTypeID, 
    			LeadID, 
    			RelatedLeadID, 
    			Data);
    	} 
		
    	public static void RemoveLeadRelationship(int LeadRelationshipID)
    	{
    		try
    		{
    			LeadRelationshipsRepository.RemoveLeadRelationship(LeadRelationshipID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static LeadRelationshipsRow GetLeadRelationship(int LeadRelationshipID)
		{
			return LeadRelationshipsRepository.Get(LeadRelationshipID) ?? throw new ArgumentException("Could not find Lead Relationship");
		}
    	
		public static LeadRelationshipsDataTable GetLeadRelationships()
		{
			return LeadRelationshipsRepository.GetAll();
		}
		
		public static int CopyLeadRelationship(int LeadRelationshipID)
		{
			return LeadRelationshipsRepository.CopyLeadRelationship(LeadRelationshipID);
		}
		
			
    	public static void UpdateLeadRelationshipData(int LeadRelationshipID, string Data)
    	{
    		LeadRelationshipsRepository.UpdateLeadRelationshipData(LeadRelationshipID, Data);
    	}   		
    	
		public static LeadRelationshipsDataTable GetLeadRelationshipsByLeadID(int LeadID)
		{
			return LeadRelationshipsRepository.GetLeadRelationshipsByLeadID(LeadID);
		}		
			
		public static LeadRelationshipsDataTable GetLeadRelationshipsByLeadRelationshipTypeID(int LeadRelationshipTypeID)
		{
			return LeadRelationshipsRepository.GetLeadRelationshipsByLeadRelationshipTypeID(LeadRelationshipTypeID);
		}		
			
		public static LeadRelationshipsDataTable GetLeadRelationshipsByRelatedLeadID(int RelatedLeadID)
		{
			return LeadRelationshipsRepository.GetLeadRelationshipsByRelatedLeadID(RelatedLeadID);
		}		
						
    }
}    
		