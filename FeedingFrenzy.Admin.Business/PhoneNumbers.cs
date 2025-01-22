
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class PhoneNumbers : JsonWs
    {  

    	public static int InsertPhoneNumber(
    		string PhoneNumber, 
    		string? PhoneType, 
    		bool IsInternal, 
    		string? CallerName, 
    		string? Country, 
    		string? Data, 
    		bool IsBlocked, 
    		bool IsSpam)    	    	
    	{
    		try
    		{
    			int iPhoneNumberID = PhoneNumbersRepository.InsertPhoneNumber(
    				PhoneNumber, 
    				PhoneType, 
    				IsInternal, 
    				CallerName, 
    				Country, 
    				Data, 
    				IsBlocked, 
    				IsSpam
				);
    		
	    		return iPhoneNumberID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdatePhoneNumber(
    		int PhoneNumberID, 
    		string PhoneNumber, 
    		string? PhoneType, 
    		bool IsInternal, 
    		string? CallerName, 
    		string? Country, 
    		string? Data, 
    		bool IsBlocked, 
    		bool IsSpam)
    	{
    		PhoneNumbersRepository.UpdatePhoneNumber(
    			PhoneNumberID, 
    			PhoneNumber, 
    			PhoneType, 
    			IsInternal, 
    			CallerName, 
    			Country, 
    			Data, 
    			IsBlocked, 
    			IsSpam);
    	} 
		
    	public static void RemovePhoneNumber(int PhoneNumberID)
    	{
    		try
    		{
    			PhoneNumbersRepository.RemovePhoneNumber(PhoneNumberID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static PhoneNumbersRow GetPhoneNumber(int PhoneNumberID)
		{
			return PhoneNumbersRepository.Get(PhoneNumberID) ?? throw new ArgumentException("Could not find Phone Number");
		}
    	
		public static PhoneNumbersDataTable GetPhoneNumbers()
		{
			return PhoneNumbersRepository.GetAll();
		}
		
		public static int CopyPhoneNumber(int PhoneNumberID)
		{
			return PhoneNumbersRepository.CopyPhoneNumber(PhoneNumberID);
		}
		
	
			
    	public static void MarkPhoneNumberAsInternal(int PhoneNumberID)
    	{
    		PhoneNumbersRepository.MarkPhoneNumberAsInternal(PhoneNumberID);
    	}    		
    	
    	public static void MarkPhoneNumberAsNotInternal(int PhoneNumberID)
    	{
    		PhoneNumbersRepository.MarkPhoneNumberAsNotInternal(PhoneNumberID);
    	}    		
    	
			
    	public static void UpdatePhoneNumberData(int PhoneNumberID, string Data)
    	{
    		PhoneNumbersRepository.UpdatePhoneNumberData(PhoneNumberID, Data);
    	}   		
    	
    	public static void MarkPhoneNumberAsBlocked(int PhoneNumberID)
    	{
    		PhoneNumbersRepository.MarkPhoneNumberAsBlocked(PhoneNumberID);
    	}    		
    	
    	public static void MarkPhoneNumberAsNotBlocked(int PhoneNumberID)
    	{
    		PhoneNumbersRepository.MarkPhoneNumberAsNotBlocked(PhoneNumberID);
    	}    		
    	
    	public static void MarkPhoneNumberAsSpam(int PhoneNumberID)
    	{
    		PhoneNumbersRepository.MarkPhoneNumberAsSpam(PhoneNumberID);
    	}    		
    	
    	public static void MarkPhoneNumberAsNotSpam(int PhoneNumberID)
    	{
    		PhoneNumbersRepository.MarkPhoneNumberAsNotSpam(PhoneNumberID);
    	}    		
    	
		public static PhoneNumbersDataTable? GetPhoneNumbersSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			return PhoneNumbersRepository.GetPhoneNumbersSp_PagingSp(Search, SortColumn, SortAscending, SkipRows, NumRows);
		}
						
    }
}    
		