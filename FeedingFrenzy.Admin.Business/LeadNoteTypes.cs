
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class LeadNoteTypes : JsonWs
    {  

    	public static int InsertLeadNoteType(
    		string LeadNoteTypeName, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iLeadNoteTypeID = LeadNoteTypesRepository.InsertLeadNoteType(
    				LeadNoteTypeName, 
    				Data
				);
    		
	    		return iLeadNoteTypeID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateLeadNoteType(
    		int LeadNoteTypeID, 
    		string LeadNoteTypeName, 
    		string? Data)
    	{
    		LeadNoteTypesRepository.UpdateLeadNoteType(
    			LeadNoteTypeID, 
    			LeadNoteTypeName, 
    			Data);
    	} 
		
    	public static void RemoveLeadNoteType(int LeadNoteTypeID)
    	{
    		try
    		{
    			LeadNoteTypesRepository.RemoveLeadNoteType(LeadNoteTypeID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static LeadNoteTypesRow GetLeadNoteType(int LeadNoteTypeID)
		{
			return LeadNoteTypesRepository.Get(LeadNoteTypeID);
		}
    	
		public static LeadNoteTypesDataTable GetLeadNoteTypes()
		{
			return LeadNoteTypesRepository.GetAll();
		}
		
		public static int CopyLeadNoteType(int LeadNoteTypeID)
		{
			return LeadNoteTypesRepository.CopyLeadNoteType(LeadNoteTypeID);
		}
		
		public static LeadNoteTypesRow GetLeadNoteTypeByLeadNoteTypeName(string LeadNoteTypeName)
		{
			return LeadNoteTypesRepository.GetLeadNoteTypeByLeadNoteTypeName(LeadNoteTypeName);
		}			
			
			
    	public static void UpdateLeadNoteTypeData(int LeadNoteTypeID, string Data)
    	{
    		LeadNoteTypesRepository.UpdateLeadNoteTypeData(LeadNoteTypeID, Data);
    	}   		
    				
    }
}    
		