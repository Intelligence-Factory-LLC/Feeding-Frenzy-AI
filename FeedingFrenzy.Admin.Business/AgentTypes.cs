
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class AgentTypes : JsonWs
    {  

    	public static int InsertAgentType(
    		string AgentTypeName, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iAgentTypeID = AgentTypesRepository.InsertAgentType(
    				AgentTypeName, 
    				Data
				);
    		
	    		return iAgentTypeID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateAgentType(
    		int AgentTypeID, 
    		string AgentTypeName, 
    		string? Data)
    	{
    		AgentTypesRepository.UpdateAgentType(
    			AgentTypeID, 
    			AgentTypeName, 
    			Data);
    	} 
		
    	public static void RemoveAgentType(int AgentTypeID)
    	{
    		try
    		{
    			AgentTypesRepository.RemoveAgentType(AgentTypeID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static AgentTypesRow GetAgentType(int AgentTypeID)
		{
			return AgentTypesRepository.Get(AgentTypeID) ?? throw new ArgumentException("Could not find Agent Type");
		}
    	
		public static AgentTypesDataTable GetAgentTypes()
		{
			return AgentTypesRepository.GetAll();
		}
		
		public static int CopyAgentType(int AgentTypeID)
		{
			return AgentTypesRepository.CopyAgentType(AgentTypeID);
		}
		
		public static AgentTypesRow? GetAgentTypeByAgentTypeName(string AgentTypeName)
		{
			return AgentTypesRepository.GetAgentTypeByAgentTypeName(AgentTypeName);
		}			
			
			
    	public static void UpdateAgentTypeData(int AgentTypeID, string Data)
    	{
    		AgentTypesRepository.UpdateAgentTypeData(AgentTypeID, Data);
    	}   		
    				
    }
}    
		