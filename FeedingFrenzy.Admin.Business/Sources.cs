
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Sources : JsonWs
    {  

    	public static int InsertSource(
    		string SourceName, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iSourceID = SourcesRepository.InsertSource(
    				SourceName, 
    				Data
				);
    		
	    		return iSourceID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateSource(
    		int SourceID, 
    		string SourceName, 
    		string? Data)
    	{
    		SourcesRepository.UpdateSource(
    			SourceID, 
    			SourceName, 
    			Data);
    	} 
		
    	public static void RemoveSource(int SourceID)
    	{
    		try
    		{
    			SourcesRepository.RemoveSource(SourceID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static SourcesRow GetSource(int SourceID)
		{
			return SourcesRepository.Get(SourceID);
		}
    	
		public static SourcesDataTable GetSources()
		{
			return SourcesRepository.GetAll();
		}
		
		public static int CopySource(int SourceID)
		{
			return SourcesRepository.CopySource(SourceID);
		}
		
		public static SourcesRow GetSourceBySourceName(string SourceName)
		{
			return SourcesRepository.GetSourceBySourceName(SourceName);
		}			
			
			
    	public static void UpdateSourceData(int SourceID, string Data)
    	{
    		SourcesRepository.UpdateSourceData(SourceID, Data);
    	}   		
    				
    }
}    
		