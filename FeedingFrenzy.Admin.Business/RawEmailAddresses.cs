
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class RawEmailAddresses : JsonWs
    {  

		public static RawEmailAddressesDataTable? GetRawEmailAddressesByEmailAddressIDSp_PagingSp(int EmailAddressID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			return RawEmailAddressesRepository.GetRawEmailAddressesByEmailAddressIDSp_PagingSp(EmailAddressID, Search, SortColumn, SortAscending, SkipRows, NumRows);
		}
			
		public static RawEmailAddressesDataTable GetRawEmailAddressesByRawEmailID(int RawEmailID)
		{
			return RawEmailAddressesRepository.GetRawEmailAddressesByRawEmailID(RawEmailID);
		}		
			
		public static RawEmailAddressesDataTable? GetRawEmailAddressesByRawEmailIDSp_PagingSp(int RawEmailID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			return RawEmailAddressesRepository.GetRawEmailAddressesByRawEmailIDSp_PagingSp(RawEmailID, Search, SortColumn, SortAscending, SkipRows, NumRows);
		}
			
		public static RawEmailAddressesDataTable? GetRawEmailAddressesSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			return RawEmailAddressesRepository.GetRawEmailAddressesSp_PagingSp(Search, SortColumn, SortAscending, SkipRows, NumRows);
		}
			
    	public static int InsertRawEmailAddress(
    		int RawEmailID, 
    		bool IsFrom, 
    		string? Data, 
    		int? EmailAddressID, 
    		int? DomainID)    	    	
    	{
    		try
    		{
    			int iRawEmailAddressID = RawEmailAddressesRepository.InsertRawEmailAddress(
    				RawEmailID, 
    				IsFrom, 
    				Data, 
    				EmailAddressID, 
    				DomainID
				);
    		
	    		return iRawEmailAddressID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateRawEmailAddress(
    		int RawEmailAddressID, 
    		int RawEmailID, 
    		bool IsFrom, 
    		string? Data, 
    		int? EmailAddressID, 
    		int? DomainID)
    	{
    		RawEmailAddressesRepository.UpdateRawEmailAddress(
    			RawEmailAddressID, 
    			RawEmailID, 
    			IsFrom, 
    			Data, 
    			EmailAddressID, 
    			DomainID);
    	} 
		
    	public static void RemoveRawEmailAddress(int RawEmailAddressID)
    	{
    		try
    		{
    			RawEmailAddressesRepository.RemoveRawEmailAddress(RawEmailAddressID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static RawEmailAddressesRow GetRawEmailAddress(int RawEmailAddressID)
		{
			return RawEmailAddressesRepository.Get(RawEmailAddressID) ?? throw new ArgumentException("Could not find Raw Email Address");
		}
    	
		public static RawEmailAddressesDataTable GetRawEmailAddresses()
		{
			return RawEmailAddressesRepository.GetAll();
		}
		
		public static int CopyRawEmailAddress(int RawEmailAddressID)
		{
			return RawEmailAddressesRepository.CopyRawEmailAddress(RawEmailAddressID);
		}
		
    	public static void MarkRawEmailAddressAsFrom(int RawEmailAddressID)
    	{
    		RawEmailAddressesRepository.MarkRawEmailAddressAsFrom(RawEmailAddressID);
    	}    		
    	
    	public static void MarkRawEmailAddressAsNotFrom(int RawEmailAddressID)
    	{
    		RawEmailAddressesRepository.MarkRawEmailAddressAsNotFrom(RawEmailAddressID);
    	}    		
    	
			
    	public static void UpdateRawEmailAddressData(int RawEmailAddressID, string Data)
    	{
    		RawEmailAddressesRepository.UpdateRawEmailAddressData(RawEmailAddressID, Data);
    	}   		
    	
		public static RawEmailAddressesRow? GetRawEmailAddressByDomainIDEmailAddressIDRawEmailID(int DomainID, int EmailAddressID, int RawEmailID)
		{
			return RawEmailAddressesRepository.GetRawEmailAddressByDomainIDEmailAddressIDRawEmailID(DomainID, EmailAddressID, RawEmailID);
		}			
			
		public static RawEmailAddressesDataTable GetRawEmailAddressesByDomainID(int DomainID)
		{
			return RawEmailAddressesRepository.GetRawEmailAddressesByDomainID(DomainID);
		}		
			
		public static RawEmailAddressesDataTable? GetRawEmailAddressesByDomainIDSp_PagingSp(int DomainID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			return RawEmailAddressesRepository.GetRawEmailAddressesByDomainIDSp_PagingSp(DomainID, Search, SortColumn, SortAscending, SkipRows, NumRows);
		}
			
		public static RawEmailAddressesDataTable GetRawEmailAddressesByEmailAddressID(int EmailAddressID)
		{
			return RawEmailAddressesRepository.GetRawEmailAddressesByEmailAddressID(EmailAddressID);
		}		
						
    }
}    
		