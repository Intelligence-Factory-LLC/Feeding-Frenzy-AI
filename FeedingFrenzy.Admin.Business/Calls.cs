
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Calls : JsonWs
    {  

    	public static int InsertCall(
    		string CallingPhone, 
    		string CalledPhone, 
    		double Duration, 
    		bool IsRecorded, 
    		string? RecordingURL, 
    		bool IsConference, 
    		bool IsStreamed, 
    		bool IsIncoming, 
    		string? CallStatus, 
    		DateTime? LastCallStatusUpdate, 
    		bool IsTranscribed, 
    		bool IsEmptyTranscription, 
    		string? TranscriptionSummary, 
    		string? Data, 
    		string? Transcription, 
    		string CallKey)    	    	
    	{
    		try
    		{
    			int iCallID = CallsRepository.InsertCall(
    				CallingPhone, 
    				CalledPhone, 
    				Duration, 
    				IsRecorded, 
    				RecordingURL, 
    				IsConference, 
    				IsStreamed, 
    				IsIncoming, 
    				CallStatus, 
    				LastCallStatusUpdate, 
    				IsTranscribed, 
    				IsEmptyTranscription, 
    				TranscriptionSummary, 
    				Data, 
    				Transcription, 
    				CallKey
				);
    		
	    		return iCallID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateCall(
    		int CallID, 
    		string CallingPhone, 
    		string CalledPhone, 
    		double Duration, 
    		bool IsRecorded, 
    		string? RecordingURL, 
    		bool IsConference, 
    		bool IsStreamed, 
    		bool IsIncoming, 
    		string? CallStatus, 
    		DateTime? LastCallStatusUpdate, 
    		bool IsTranscribed, 
    		bool IsEmptyTranscription, 
    		string? TranscriptionSummary, 
    		string? Data, 
    		string? Transcription, 
    		string CallKey)
    	{
    		CallsRepository.UpdateCall(
    			CallID, 
    			CallingPhone, 
    			CalledPhone, 
    			Duration, 
    			IsRecorded, 
    			RecordingURL, 
    			IsConference, 
    			IsStreamed, 
    			IsIncoming, 
    			CallStatus, 
    			LastCallStatusUpdate, 
    			IsTranscribed, 
    			IsEmptyTranscription, 
    			TranscriptionSummary, 
    			Data, 
    			Transcription, 
    			CallKey);
    	} 
		
    	public static void RemoveCall(int CallID)
    	{
    		try
    		{
    			CallsRepository.RemoveCall(CallID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static CallsRow GetCall(int CallID)
		{
			return CallsRepository.Get(CallID) ?? throw new ArgumentException("Could not find Call");
		}
    	
		public static CallsDataTable GetCalls()
		{
			return CallsRepository.GetAll();
		}
		
		public static int CopyCall(int CallID)
		{
			return CallsRepository.CopyCall(CallID);
		}
		
    	public static void MarkCallAsRecorded(int CallID)
    	{
    		CallsRepository.MarkCallAsRecorded(CallID);
    	}    		
    	
    	public static void MarkCallAsNotRecorded(int CallID)
    	{
    		CallsRepository.MarkCallAsNotRecorded(CallID);
    	}    		
    	
    	public static void MarkCallAsConference(int CallID)
    	{
    		CallsRepository.MarkCallAsConference(CallID);
    	}    		
    	
    	public static void MarkCallAsNotConference(int CallID)
    	{
    		CallsRepository.MarkCallAsNotConference(CallID);
    	}    		
    	
    	public static void MarkCallAsStreamed(int CallID)
    	{
    		CallsRepository.MarkCallAsStreamed(CallID);
    	}    		
    	
    	public static void MarkCallAsNotStreamed(int CallID)
    	{
    		CallsRepository.MarkCallAsNotStreamed(CallID);
    	}    		
    	
    	public static void MarkCallAsIncoming(int CallID)
    	{
    		CallsRepository.MarkCallAsIncoming(CallID);
    	}    		
    	
    	public static void MarkCallAsNotIncoming(int CallID)
    	{
    		CallsRepository.MarkCallAsNotIncoming(CallID);
    	}    		
    	
    	public static void MarkCallAsTranscribed(int CallID)
    	{
    		CallsRepository.MarkCallAsTranscribed(CallID);
    	}    		
    	
    	public static void MarkCallAsNotTranscribed(int CallID)
    	{
    		CallsRepository.MarkCallAsNotTranscribed(CallID);
    	}    		
    	
    	public static void MarkCallAsEmptyTranscription(int CallID)
    	{
    		CallsRepository.MarkCallAsEmptyTranscription(CallID);
    	}    		
    	
    	public static void MarkCallAsNotEmptyTranscription(int CallID)
    	{
    		CallsRepository.MarkCallAsNotEmptyTranscription(CallID);
    	}    		
    	
			
    	public static void UpdateCallData(int CallID, string Data)
    	{
    		CallsRepository.UpdateCallData(CallID, Data);
    	}   		
    	
		public static CallsDataTable? GetCallsSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			return CallsRepository.GetCallsSp_PagingSp(Search, SortColumn, SortAscending, SkipRows, NumRows);
		}
			
		public static CallsRow? GetCallByCallKey(string CallKey)
		{
			return CallsRepository.GetCallByCallKey(CallKey);
		}			
						
    }
}    
		