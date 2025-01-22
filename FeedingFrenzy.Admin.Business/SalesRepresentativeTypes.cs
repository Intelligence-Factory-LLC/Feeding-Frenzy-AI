
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class SalesRepresentativeTypes : JsonWs
    {  

    	public static int InsertSalesRepresentativeType(
    		string SalesRepresentativeTypeName, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iSalesRepresentativeTypeID = SalesRepresentativeTypesRepository.InsertSalesRepresentativeType(
    				SalesRepresentativeTypeName, 
    				Data
				);
    		
	    		return iSalesRepresentativeTypeID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateSalesRepresentativeType(
    		int SalesRepresentativeTypeID, 
    		string SalesRepresentativeTypeName, 
    		string? Data)
    	{
    		SalesRepresentativeTypesRepository.UpdateSalesRepresentativeType(
    			SalesRepresentativeTypeID, 
    			SalesRepresentativeTypeName, 
    			Data);
    	} 
		
    	public static void RemoveSalesRepresentativeType(int SalesRepresentativeTypeID)
    	{
    		try
    		{
    			SalesRepresentativeTypesRepository.RemoveSalesRepresentativeType(SalesRepresentativeTypeID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static SalesRepresentativeTypesRow? GetSalesRepresentativeType(int SalesRepresentativeTypeID)
		{
			return SalesRepresentativeTypesRepository.Get(SalesRepresentativeTypeID);
		}
    	
		public static SalesRepresentativeTypesDataTable GetSalesRepresentativeTypes()
		{
			return SalesRepresentativeTypesRepository.GetAll();
		}
		
		public static int CopySalesRepresentativeType(int SalesRepresentativeTypeID)
		{
			return SalesRepresentativeTypesRepository.CopySalesRepresentativeType(SalesRepresentativeTypeID);
		}
		
		public static SalesRepresentativeTypesRow? GetSalesRepresentativeTypeBySalesRepresentativeTypeName(string SalesRepresentativeTypeName)
		{
			return SalesRepresentativeTypesRepository.GetSalesRepresentativeTypeBySalesRepresentativeTypeName(SalesRepresentativeTypeName);
		}			
			
			
    	public static void UpdateSalesRepresentativeTypeData(int SalesRepresentativeTypeID, string Data)
    	{
    		SalesRepresentativeTypesRepository.UpdateSalesRepresentativeTypeData(SalesRepresentativeTypeID, Data);
    	}   		
    				
    }
}    
		