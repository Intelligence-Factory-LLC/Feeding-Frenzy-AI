
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class LeadNotes : JsonWs
    {  

    	private static int InsertLeadNote(
    		int? LeadNoteTypeID, 
    		int LeadID, 
    		int SalesRepresentativeID, 
    		string Notes, 
    		DateTime? FollowUpDate, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iLeadNoteID = LeadNotesRepository.InsertLeadNote(
    				LeadNoteTypeID, 
    				LeadID, 
    				SalesRepresentativeID, 
    				Notes, 
    				FollowUpDate, 
    				Data
				);
    		
	    		return iLeadNoteID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateLeadNote(
    		int? LeadNoteTypeID, 
    		int LeadNoteID, 
    		int LeadID, 
    		int SalesRepresentativeID, 
    		string Notes, 
    		DateTime? FollowUpDate, 
    		string? Data)
    	{
    		LeadNotesRepository.UpdateLeadNote(
    			LeadNoteTypeID, 
    			LeadNoteID, 
    			LeadID, 
    			SalesRepresentativeID, 
    			Notes, 
    			FollowUpDate, 
    			Data);
    	} 
		
    	public static void RemoveLeadNote(int LeadNoteID)
    	{
    		try
    		{
    			LeadNotesRepository.RemoveLeadNote(LeadNoteID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static LeadNotesRow GetLeadNote(int LeadNoteID)
		{
			return LeadNotesRepository.Get(LeadNoteID);
		}
    	
		public static LeadNotesDataTable GetLeadNotes()
		{
			return LeadNotesRepository.GetAll();
		}
		
		public static int CopyLeadNote(int LeadNoteID)
		{
			return LeadNotesRepository.CopyLeadNote(LeadNoteID);
		}
		
			
    	public static void UpdateLeadNoteData(int LeadNoteID, string Data)
    	{
    		LeadNotesRepository.UpdateLeadNoteData(LeadNoteID, Data);
    	}   		
    	
		public static LeadNotesDataTable GetLeadNotesByLeadID(int LeadID)
		{
			return LeadNotesRepository.GetLeadNotesByLeadID(LeadID);
		}		
			
		public static LeadNotesDataTable GetLeadNotesByLeadNoteTypeID(int LeadNoteTypeID)
		{
			return LeadNotesRepository.GetLeadNotesByLeadNoteTypeID(LeadNoteTypeID);
		}		
						
    }
}    
		