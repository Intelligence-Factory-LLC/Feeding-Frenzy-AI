
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Domains : JsonWs
    {  

		public static DomainsDataTable? GetDomainsSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			return DomainsRepository.GetDomainsSp_PagingSp(Search, SortColumn, SortAscending, SkipRows, NumRows);
		}
			
    	public static int InsertDomain(
    		string DomainName, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iDomainID = DomainsRepository.InsertDomain(
    				DomainName, 
    				Data
				);
    		
	    		return iDomainID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateDomain(
    		int DomainID, 
    		string DomainName, 
    		string? Data)
    	{
    		DomainsRepository.UpdateDomain(
    			DomainID, 
    			DomainName, 
    			Data);
    	} 
		
    	public static void RemoveDomain(int DomainID)
    	{
    		try
    		{
    			DomainsRepository.RemoveDomain(DomainID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static DomainsRow GetDomain(int DomainID)
		{
			return DomainsRepository.Get(DomainID) ?? throw new ArgumentException("Could not find Domain");
		}
    	
		public static DomainsDataTable GetDomains()
		{
			return DomainsRepository.GetAll();
		}
		
		public static int CopyDomain(int DomainID)
		{
			return DomainsRepository.CopyDomain(DomainID);
		}
		
		public static DomainsRow? GetDomainByDomainName(string DomainName)
		{
			return DomainsRepository.GetDomainByDomainName(DomainName);
		}			
			
			
    	public static void UpdateDomainData(int DomainID, string Data)
    	{
    		DomainsRepository.UpdateDomainData(DomainID, Data);
    	}   		
    				
    }
}    
		