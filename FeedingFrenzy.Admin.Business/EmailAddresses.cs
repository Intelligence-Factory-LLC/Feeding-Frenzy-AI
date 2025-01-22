
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class EmailAddresses : JsonWs
    {  

    	public static int InsertEmailAddress(
    		string Email, 
    		string? Data, 
    		bool IsBlocked, 
    		bool IsInternal, 
    		int DomainID)    	    	
    	{
    		try
    		{
    			int iEmailAddressID = EmailAddressesRepository.InsertEmailAddress(
    				Email, 
    				Data, 
    				IsBlocked, 
    				IsInternal, 
    				DomainID
				);
    		
	    		return iEmailAddressID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateEmailAddress(
    		int EmailAddressID, 
    		string Email, 
    		string? Data, 
    		bool IsBlocked, 
    		bool IsInternal, 
    		int DomainID)
    	{
    		EmailAddressesRepository.UpdateEmailAddress(
    			EmailAddressID, 
    			Email, 
    			Data, 
    			IsBlocked, 
    			IsInternal, 
    			DomainID);
    	} 
		
    	public static void RemoveEmailAddress(int EmailAddressID)
    	{
    		try
    		{
    			EmailAddressesRepository.RemoveEmailAddress(EmailAddressID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static EmailAddressesRow GetEmailAddress(int EmailAddressID)
		{
			return EmailAddressesRepository.Get(EmailAddressID) ?? throw new ArgumentException("Could not find Email Address");
		}
    	
		public static EmailAddressesDataTable GetEmailAddresses()
		{
			return EmailAddressesRepository.GetAll();
		}
		
		public static int CopyEmailAddress(int EmailAddressID)
		{
			return EmailAddressesRepository.CopyEmailAddress(EmailAddressID);
		}
		
		public static EmailAddressesRow? GetEmailAddressByEmail(string Email)
		{
			return EmailAddressesRepository.GetEmailAddressByEmail(Email);
		}			
			
			
    	public static void UpdateEmailAddressData(int EmailAddressID, string Data)
    	{
    		EmailAddressesRepository.UpdateEmailAddressData(EmailAddressID, Data);
    	}   		
    	
    	public static void MarkEmailAddressAsBlocked(int EmailAddressID)
    	{
    		EmailAddressesRepository.MarkEmailAddressAsBlocked(EmailAddressID);
    	}    		
    	
    	public static void MarkEmailAddressAsNotBlocked(int EmailAddressID)
    	{
    		EmailAddressesRepository.MarkEmailAddressAsNotBlocked(EmailAddressID);
    	}    		
    	
    	public static void MarkEmailAddressAsInternal(int EmailAddressID)
    	{
    		EmailAddressesRepository.MarkEmailAddressAsInternal(EmailAddressID);
    	}    		
    	
    	public static void MarkEmailAddressAsNotInternal(int EmailAddressID)
    	{
    		EmailAddressesRepository.MarkEmailAddressAsNotInternal(EmailAddressID);
    	}    		
    	
		public static EmailAddressesDataTable GetEmailAddressesByDomainID(int DomainID)
		{
			return EmailAddressesRepository.GetEmailAddressesByDomainID(DomainID);
		}		
			
		public static EmailAddressesDataTable? GetEmailAddressesByDomainIDSp_PagingSp(int DomainID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			return EmailAddressesRepository.GetEmailAddressesByDomainIDSp_PagingSp(DomainID, Search, SortColumn, SortAscending, SkipRows, NumRows);
		}
						
    }
}    
		