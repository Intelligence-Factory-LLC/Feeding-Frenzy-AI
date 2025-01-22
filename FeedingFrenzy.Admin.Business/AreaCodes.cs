
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class AreaCodes : JsonWs
    {  

    	public static int InsertAreaCode(
    		string AreaCode, 
    		string? TimeZone, 
    		string? Region, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iAreaCodeID = AreaCodesRepository.InsertAreaCode(
    				AreaCode, 
    				TimeZone, 
    				Region, 
    				Data
				);
    		
	    		return iAreaCodeID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateAreaCode(
    		int AreaCodeID, 
    		string AreaCode, 
    		string? TimeZone, 
    		string? Region, 
    		string? Data)
    	{
    		AreaCodesRepository.UpdateAreaCode(
    			AreaCodeID, 
    			AreaCode, 
    			TimeZone, 
    			Region, 
    			Data);
    	} 
		
    	public static void RemoveAreaCode(int AreaCodeID)
    	{
    		try
    		{
    			AreaCodesRepository.RemoveAreaCode(AreaCodeID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static AreaCodesRow GetAreaCode(int AreaCodeID)
		{
			return AreaCodesRepository.Get(AreaCodeID) ?? throw new ArgumentException("Could not find Area Code");
		}
    	
		public static AreaCodesDataTable GetAreaCodes()
		{
			return AreaCodesRepository.GetAll();
		}
		
		public static int CopyAreaCode(int AreaCodeID)
		{
			return AreaCodesRepository.CopyAreaCode(AreaCodeID);
		}
		
		public static AreaCodesRow? GetAreaCodeByAreaCode(string AreaCode)
		{
			return AreaCodesRepository.GetAreaCodeByAreaCode(AreaCode);
		}			
			
			
    	public static void UpdateAreaCodeData(int AreaCodeID, string Data)
    	{
    		AreaCodesRepository.UpdateAreaCodeData(AreaCodeID, Data);
    	}   		
    				
    }
}    
		