
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class LeadRelationshipTypes : JsonWs
    {  

    	public static int InsertLeadRelationshipType(
    		string? LeadRelationshipTypeName, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iLeadRelationshipTypeID = LeadRelationshipTypesRepository.InsertLeadRelationshipType(
    				LeadRelationshipTypeName, 
    				Data
				);
    		
	    		return iLeadRelationshipTypeID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateLeadRelationshipType(
    		int LeadRelationshipTypeID, 
    		string? LeadRelationshipTypeName, 
    		string? Data)
    	{
    		LeadRelationshipTypesRepository.UpdateLeadRelationshipType(
    			LeadRelationshipTypeID, 
    			LeadRelationshipTypeName, 
    			Data);
    	} 
		
    	public static void RemoveLeadRelationshipType(int LeadRelationshipTypeID)
    	{
    		try
    		{
    			LeadRelationshipTypesRepository.RemoveLeadRelationshipType(LeadRelationshipTypeID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static LeadRelationshipTypesRow GetLeadRelationshipType(int LeadRelationshipTypeID)
		{
			return LeadRelationshipTypesRepository.Get(LeadRelationshipTypeID) ?? throw new ArgumentException("Could not find Lead Relationship Type");
		}
    	
		public static LeadRelationshipTypesDataTable GetLeadRelationshipTypes()
		{
			return LeadRelationshipTypesRepository.GetAll();
		}
		
		public static int CopyLeadRelationshipType(int LeadRelationshipTypeID)
		{
			return LeadRelationshipTypesRepository.CopyLeadRelationshipType(LeadRelationshipTypeID);
		}
		
		public static LeadRelationshipTypesRow? GetLeadRelationshipTypeByLeadRelationshipTypeName(string LeadRelationshipTypeName)
		{
			return LeadRelationshipTypesRepository.GetLeadRelationshipTypeByLeadRelationshipTypeName(LeadRelationshipTypeName);
		}			
			
			
    	public static void UpdateLeadRelationshipTypeData(int LeadRelationshipTypeID, string Data)
    	{
    		LeadRelationshipTypesRepository.UpdateLeadRelationshipTypeData(LeadRelationshipTypeID, Data);
    	}   		
    				
    }
}    
		