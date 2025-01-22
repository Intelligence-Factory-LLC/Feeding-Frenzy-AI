
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class RawEmails : JsonWs
    {  

		public static RawEmailsDataTable? GetRawEmailsSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			return RawEmailsRepository.GetRawEmailsSp_PagingSp(Search, SortColumn, SortAscending, SkipRows, NumRows);
		}
			
		public static RawEmailsRow? GetRawEmailByImportKey(string ImportKey)
		{
			return RawEmailsRepository.GetRawEmailByImportKey(ImportKey);
		}			
			
		public static RawEmailsDataTable GetRawEmailsByThreadID(string ThreadID)
		{
			return RawEmailsRepository.GetRawEmailsByThreadID(ThreadID);
		}		
			
    	public static int InsertRawEmail(
    		string? To, 
    		string? From, 
    		string? Subject, 
    		string? BodyText, 
    		string? BodyHtml, 
    		bool IsProcessed, 
    		string? Label, 
    		string? Data, 
    		int? UserID, 
    		string ImportKey, 
    		DateTime EmailDate, 
    		string ThreadID)    	    	
    	{
    		try
    		{
    			int iRawEmailID = RawEmailsRepository.InsertRawEmail(
    				To, 
    				From, 
    				Subject, 
    				BodyText, 
    				BodyHtml, 
    				IsProcessed, 
    				Label, 
    				Data, 
    				UserID, 
    				ImportKey, 
    				EmailDate, 
    				ThreadID
				);
    		
	    		return iRawEmailID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateRawEmail(
    		int RawEmailID, 
    		string? To, 
    		string? From, 
    		string? Subject, 
    		string? BodyText, 
    		string? BodyHtml, 
    		bool IsProcessed, 
    		string? Label, 
    		string? Data, 
    		int? UserID, 
    		string ImportKey, 
    		DateTime EmailDate, 
    		string ThreadID)
    	{
    		RawEmailsRepository.UpdateRawEmail(
    			RawEmailID, 
    			To, 
    			From, 
    			Subject, 
    			BodyText, 
    			BodyHtml, 
    			IsProcessed, 
    			Label, 
    			Data, 
    			UserID, 
    			ImportKey, 
    			EmailDate, 
    			ThreadID);
    	} 
		
    	public static void RemoveRawEmail(int RawEmailID)
    	{
    		try
    		{
    			RawEmailsRepository.RemoveRawEmail(RawEmailID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static RawEmailsRow GetRawEmail(int RawEmailID)
		{
			return RawEmailsRepository.Get(RawEmailID) ?? throw new ArgumentException("Could not find Raw Email");
		}
    	
		public static RawEmailsDataTable GetRawEmails()
		{
			return RawEmailsRepository.GetAll();
		}
		
		public static int CopyRawEmail(int RawEmailID)
		{
			return RawEmailsRepository.CopyRawEmail(RawEmailID);
		}
		
    	public static void MarkRawEmailAsProcessed(int RawEmailID)
    	{
    		RawEmailsRepository.MarkRawEmailAsProcessed(RawEmailID);
    	}    		
    	
    	public static void MarkRawEmailAsNotProcessed(int RawEmailID)
    	{
    		RawEmailsRepository.MarkRawEmailAsNotProcessed(RawEmailID);
    	}    		
    	
			
    	public static void UpdateRawEmailData(int RawEmailID, string Data)
    	{
    		RawEmailsRepository.UpdateRawEmailData(RawEmailID, Data);
    	}   		
    	
		public static RawEmailsDataTable GetRawEmailsByUserID(int UserID)
		{
			return RawEmailsRepository.GetRawEmailsByUserID(UserID);
		}		
			
		public static RawEmailsDataTable? GetRawEmailsByUserIDSp_PagingSp(int UserID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			return RawEmailsRepository.GetRawEmailsByUserIDSp_PagingSp(UserID, Search, SortColumn, SortAscending, SkipRows, NumRows);
		}
						
    }
}    
		