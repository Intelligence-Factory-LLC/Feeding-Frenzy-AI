
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class SalesRepresentatives : JsonWs
    {  

    	public static int InsertSalesRepresentative(
    		string? Notes, 
    		string? Data, 
    		int? SalesRepresentativeTypeID, 
    		int UserID)    	    	
    	{
    		try
    		{
    			int iSalesRepresentativeID = SalesRepresentativesRepository.InsertSalesRepresentative(
    				Notes, 
    				Data, 
    				SalesRepresentativeTypeID, 
    				UserID
				);
    		
	    		return iSalesRepresentativeID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateSalesRepresentative(
    		int SalesRepresentativeID, 
    		string? Notes, 
    		string? Data, 
    		int? SalesRepresentativeTypeID, 
    		int UserID)
    	{
    		SalesRepresentativesRepository.UpdateSalesRepresentative(
    			SalesRepresentativeID, 
    			Notes, 
    			Data, 
    			SalesRepresentativeTypeID, 
    			UserID);
    	} 
		
    	public static void RemoveSalesRepresentative(int SalesRepresentativeID)
    	{
    		try
    		{
    			SalesRepresentativesRepository.RemoveSalesRepresentative(SalesRepresentativeID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static SalesRepresentativesRow GetSalesRepresentative(int SalesRepresentativeID)
		{
			return SalesRepresentativesRepository.Get(SalesRepresentativeID) ?? throw new ArgumentException("Could not find Sales Representative");
		}
    	
		public static SalesRepresentativesDataTable GetSalesRepresentatives()
		{
			return SalesRepresentativesRepository.GetAll();
		}
		
		public static int CopySalesRepresentative(int SalesRepresentativeID)
		{
			return SalesRepresentativesRepository.CopySalesRepresentative(SalesRepresentativeID);
		}
		
    	public static void MarkSalesRepresentativeAsEnabled(int SalesRepresentativeID)
    	{
    		SalesRepresentativesRepository.MarkSalesRepresentativeAsEnabled(SalesRepresentativeID);
    	}    		
    	
    	public static void MarkSalesRepresentativeAsNotEnabled(int SalesRepresentativeID)
    	{
    		SalesRepresentativesRepository.MarkSalesRepresentativeAsNotEnabled(SalesRepresentativeID);
    	}    		
    	
			
    	public static void UpdateSalesRepresentativeData(int SalesRepresentativeID, string Data)
    	{
    		SalesRepresentativesRepository.UpdateSalesRepresentativeData(SalesRepresentativeID, Data);
    	}   		
    	
		public static SalesRepresentativesDataTable GetSalesRepresentativesBySalesRepresentativeTypeID(int SalesRepresentativeTypeID)
		{
			return SalesRepresentativesRepository.GetSalesRepresentativesBySalesRepresentativeTypeID(SalesRepresentativeTypeID);
		}		
			
			//GetSalesRepresentativesSp_PagingSp ommitted, can't infer types 
			
			//GetSalesRepresentativesBySalesRepresentativeTypeIDSp_PagingSp ommitted, can't infer types 
			
		public static SalesRepresentativesRow? GetSalesRepresentativeByUserID(int UserID)
		{
			return SalesRepresentativesRepository.GetSalesRepresentativeByUserID(UserID);
		}			
						
    }
}    
		