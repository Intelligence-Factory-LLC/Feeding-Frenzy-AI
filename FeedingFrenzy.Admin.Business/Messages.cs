
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Messages : JsonWs
    {  

    	public static int InsertMessage(
    		string MessageText, 
    		string SentByPhone, 
    		string ReceivedByPhone, 
    		string? Data, 
    		bool IsDelivered, 
    		bool IsReceived, 
    		bool IsDismissed)    	    	
    	{
    		try
    		{
    			int iMessageID = MessagesRepository.InsertMessage(
    				MessageText, 
    				SentByPhone, 
    				ReceivedByPhone, 
    				Data, 
    				IsDelivered, 
    				IsReceived, 
    				IsDismissed
				);
    		
	    		return iMessageID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateMessage(
    		int MessageID, 
    		string MessageText, 
    		string SentByPhone, 
    		string ReceivedByPhone, 
    		string? Data, 
    		bool IsDelivered, 
    		bool IsReceived, 
    		bool IsDismissed)
    	{
    		MessagesRepository.UpdateMessage(
    			MessageID, 
    			MessageText, 
    			SentByPhone, 
    			ReceivedByPhone, 
    			Data, 
    			IsDelivered, 
    			IsReceived, 
    			IsDismissed);
    	} 
		
    	public static void RemoveMessage(int MessageID)
    	{
    		try
    		{
    			MessagesRepository.RemoveMessage(MessageID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static MessagesRow GetMessage(int MessageID)
		{
			return MessagesRepository.Get(MessageID) ?? throw new ArgumentException("Could not find Message");
		}
    	
		public static MessagesDataTable GetMessages()
		{
			return MessagesRepository.GetAll();
		}
		
		public static int CopyMessage(int MessageID)
		{
			return MessagesRepository.CopyMessage(MessageID);
		}
		
			
    	public static void UpdateMessageData(int MessageID, string Data)
    	{
    		MessagesRepository.UpdateMessageData(MessageID, Data);
    	}   		
    	
    	public static void MarkMessageAsDelivered(int MessageID)
    	{
    		MessagesRepository.MarkMessageAsDelivered(MessageID);
    	}    		
    	
    	public static void MarkMessageAsNotDelivered(int MessageID)
    	{
    		MessagesRepository.MarkMessageAsNotDelivered(MessageID);
    	}    		
    	
    	public static void MarkMessageAsReceived(int MessageID)
    	{
    		MessagesRepository.MarkMessageAsReceived(MessageID);
    	}    		
    	
    	public static void MarkMessageAsNotReceived(int MessageID)
    	{
    		MessagesRepository.MarkMessageAsNotReceived(MessageID);
    	}    		
    	
    	public static void MarkMessageAsDismissed(int MessageID)
    	{
    		MessagesRepository.MarkMessageAsDismissed(MessageID);
    	}    		
    	
    	public static void MarkMessageAsNotDismissed(int MessageID)
    	{
    		MessagesRepository.MarkMessageAsNotDismissed(MessageID);
    	}    		
    				
    }
}    
		