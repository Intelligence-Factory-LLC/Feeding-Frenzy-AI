
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class BlockedEmails : JsonWs
    {  

    	public static int InsertBlockedEmail(
    		string Email, 
    		string? Notes, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iBlockedEmailID = BlockedEmailsRepository.InsertBlockedEmail(
    				Email, 
    				Notes, 
    				Data
				);
    		
	    		return iBlockedEmailID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateBlockedEmail(
    		int BlockedEmailID, 
    		string Email, 
    		string? Notes, 
    		string? Data)
    	{
    		BlockedEmailsRepository.UpdateBlockedEmail(
    			BlockedEmailID, 
    			Email, 
    			Notes, 
    			Data);
    	} 
		
    	public static void RemoveBlockedEmail(int BlockedEmailID)
    	{
    		try
    		{
    			BlockedEmailsRepository.RemoveBlockedEmail(BlockedEmailID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static BlockedEmailsRow GetBlockedEmail(int BlockedEmailID)
		{
			return BlockedEmailsRepository.Get(BlockedEmailID);
		}
    	
		public static BlockedEmailsDataTable GetBlockedEmails()
		{
			return BlockedEmailsRepository.GetAll();
		}
		
		public static int CopyBlockedEmail(int BlockedEmailID)
		{
			return BlockedEmailsRepository.CopyBlockedEmail(BlockedEmailID);
		}
		
		public static BlockedEmailsRow GetBlockedEmailByEmail(string Email)
		{
			return BlockedEmailsRepository.GetBlockedEmailByEmail(Email);
		}			
			
			
    	public static void UpdateBlockedEmailData(int BlockedEmailID, string Data)
    	{
    		BlockedEmailsRepository.UpdateBlockedEmailData(BlockedEmailID, Data);
    	}   		
    				
    }
}    
		