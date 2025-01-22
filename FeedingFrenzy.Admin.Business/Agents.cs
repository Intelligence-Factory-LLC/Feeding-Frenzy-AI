
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Agents : JsonWs
    {  

    	public static int InsertAgent(
    		string AgentName, 
    		string? ContextSettings, 
    		string? Data, 
    		string? Description, 
    		int? AgentTypeID)    	    	
    	{
    		try
    		{
    			int iAgentID = AgentsRepository.InsertAgent(
    				AgentName, 
    				ContextSettings, 
    				Data, 
    				Description, 
    				AgentTypeID
				);
    		
	    		return iAgentID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateAgent(
    		int AgentID, 
    		string AgentName, 
    		string? ContextSettings, 
    		string? Data, 
    		string? Description, 
    		int? AgentTypeID)
    	{
    		AgentsRepository.UpdateAgent(
    			AgentID, 
    			AgentName, 
    			ContextSettings, 
    			Data, 
    			Description, 
    			AgentTypeID);
    	} 
		
    	public static void RemoveAgent(int AgentID)
    	{
    		try
    		{
    			AgentsRepository.RemoveAgent(AgentID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static AgentsRow GetAgent(int AgentID)
		{
			return AgentsRepository.Get(AgentID) ?? throw new ArgumentException("Could not find Agent");
		}
    	
		public static AgentsDataTable GetAgents()
		{
			return AgentsRepository.GetAll();
		}
		
		public static int CopyAgent(int AgentID)
		{
			return AgentsRepository.CopyAgent(AgentID);
		}
		
		public static AgentsRow? GetAgentByAgentName(string AgentName)
		{
			return AgentsRepository.GetAgentByAgentName(AgentName);
		}			
			
			
    	public static void UpdateAgentContextSettings(int AgentID, string ContextSettings)
    	{
    		AgentsRepository.UpdateAgentContextSettings(AgentID, ContextSettings);
    	}   		
    	
			
    	public static void UpdateAgentData(int AgentID, string Data)
    	{
    		AgentsRepository.UpdateAgentData(AgentID, Data);
    	}   		
    	
		public static AgentsDataTable? GetAgentsSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			return AgentsRepository.GetAgentsSp_PagingSp(Search, SortColumn, SortAscending, SkipRows, NumRows);
		}
			
		public static AgentsDataTable GetAgentsByAgentTypeID(int AgentTypeID)
		{
			return AgentsRepository.GetAgentsByAgentTypeID(AgentTypeID);
		}		
			
		public static AgentsDataTable? GetAgentsByAgentTypeIDSp_PagingSp(int AgentTypeID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			return AgentsRepository.GetAgentsByAgentTypeIDSp_PagingSp(AgentTypeID, Search, SortColumn, SortAscending, SkipRows, NumRows);
		}
						
    }
}    
		