
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class EmailHistories : JsonWs
    {  

    	public static int InsertEmailHistory(
    		string To, 
    		string From, 
    		int EmailTemplateID, 
    		string Subject, 
    		string Email, 
    		bool IsPending, 
    		bool IsSent, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iEmailHistoryID = EmailHistoriesRepository.InsertEmailHistory(
    				To, 
    				From, 
    				EmailTemplateID, 
    				Subject, 
    				Email, 
    				IsPending, 
    				IsSent, 
    				Data
				);
    		
	    		return iEmailHistoryID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateEmailHistory(
    		int EmailHistoryID, 
    		string To, 
    		string From, 
    		int EmailTemplateID, 
    		string Subject, 
    		string Email, 
    		bool IsPending, 
    		bool IsSent, 
    		string? Data)
    	{
    		EmailHistoriesRepository.UpdateEmailHistory(
    			EmailHistoryID, 
    			To, 
    			From, 
    			EmailTemplateID, 
    			Subject, 
    			Email, 
    			IsPending, 
    			IsSent, 
    			Data);
    	} 
		
    	public static void RemoveEmailHistory(int EmailHistoryID)
    	{
    		try
    		{
    			EmailHistoriesRepository.RemoveEmailHistory(EmailHistoryID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static EmailHistoriesRow GetEmailHistory(int EmailHistoryID)
		{
			return EmailHistoriesRepository.Get(EmailHistoryID);
		}
    	
		public static EmailHistoriesDataTable GetEmailHistories()
		{
			return EmailHistoriesRepository.GetAll();
		}
		
		public static int CopyEmailHistory(int EmailHistoryID)
		{
			return EmailHistoriesRepository.CopyEmailHistory(EmailHistoryID);
		}
		
    	public static void MarkEmailHistoryAsPending(int EmailHistoryID)
    	{
    		EmailHistoriesRepository.MarkEmailHistoryAsPending(EmailHistoryID);
    	}    		
    	
    	public static void MarkEmailHistoryAsNotPending(int EmailHistoryID)
    	{
    		EmailHistoriesRepository.MarkEmailHistoryAsNotPending(EmailHistoryID);
    	}    		
    	
    	public static void MarkEmailHistoryAsSent(int EmailHistoryID)
    	{
    		EmailHistoriesRepository.MarkEmailHistoryAsSent(EmailHistoryID);
    	}    		
    	
    	public static void MarkEmailHistoryAsNotSent(int EmailHistoryID)
    	{
    		EmailHistoriesRepository.MarkEmailHistoryAsNotSent(EmailHistoryID);
    	}    		
    	
			
    	public static void UpdateEmailHistoryData(int EmailHistoryID, string Data)
    	{
    		EmailHistoriesRepository.UpdateEmailHistoryData(EmailHistoryID, Data);
    	}   		
    	
		public static EmailHistoriesDataTable GetEmailHistoriesByEmailTemplateID(int EmailTemplateID)
		{
			return EmailHistoriesRepository.GetEmailHistoriesByEmailTemplateID(EmailTemplateID);
		}		
						
    }
}    
		