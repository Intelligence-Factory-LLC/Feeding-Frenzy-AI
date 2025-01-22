
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class LeadAddresses : JsonWs
    {  

    	public static int InsertLeadAddress(
    		string? Data, 
    		string? AddressType, 
    		string? Phone, 
    		string? Fax, 
    		int LeadID, 
    		string? Name, 
    		string? Line1, 
    		string? Line2, 
    		string? City, 
    		string? State, 
    		string? Zip, 
    		string? Country)    	    	
    	{
    		try
    		{
    			int iLeadAddressID = LeadAddressesRepository.InsertLeadAddress(
    				Data, 
    				AddressType, 
    				Phone, 
    				Fax, 
    				LeadID, 
    				Name, 
    				Line1, 
    				Line2, 
    				City, 
    				State, 
    				Zip, 
    				Country
				);
    		
	    		return iLeadAddressID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateLeadAddress(
    		string? Data, 
    		string? AddressType, 
    		string? Phone, 
    		string? Fax, 
    		int LeadAddressID, 
    		int LeadID, 
    		string? Name, 
    		string? Line1, 
    		string? Line2, 
    		string? City, 
    		string? State, 
    		string? Zip, 
    		string? Country)
    	{
    		LeadAddressesRepository.UpdateLeadAddress(
    			Data, 
    			AddressType, 
    			Phone, 
    			Fax, 
    			LeadAddressID, 
    			LeadID, 
    			Name, 
    			Line1, 
    			Line2, 
    			City, 
    			State, 
    			Zip, 
    			Country);
    	} 
		
    	public static void RemoveLeadAddress(int LeadAddressID)
    	{
    		try
    		{
    			LeadAddressesRepository.RemoveLeadAddress(LeadAddressID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static LeadAddressesRow GetLeadAddress(int LeadAddressID)
		{
			return LeadAddressesRepository.Get(LeadAddressID) ?? throw new ArgumentException("Could not find Lead Address");
		}
    	
		public static LeadAddressesDataTable GetLeadAddresses()
		{
			return LeadAddressesRepository.GetAll();
		}
		
		public static int CopyLeadAddress(int LeadAddressID)
		{
			return LeadAddressesRepository.CopyLeadAddress(LeadAddressID);
		}
		
			
    	public static void UpdateLeadAddressData(int LeadAddressID, string Data)
    	{
    		LeadAddressesRepository.UpdateLeadAddressData(LeadAddressID, Data);
    	}   		
    	
		public static LeadAddressesDataTable GetLeadAddressesByLeadID(int LeadID)
		{
			return LeadAddressesRepository.GetLeadAddressesByLeadID(LeadID);
		}		
			
			//GetLeadAddressesByLeadIDSp_PagingSp ommitted, can't infer types 
						
    }
}    
		