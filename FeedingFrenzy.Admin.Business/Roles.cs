
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Roles : JsonWs
    {  

    	public static int InsertRole(
    		string RoleName, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iRoleID = RolesRepository.InsertRole(
    				RoleName, 
    				Data
				);
    		
	    		return iRoleID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateRole(
    		int RoleID, 
    		string RoleName, 
    		string? Data)
    	{
    		RolesRepository.UpdateRole(
    			RoleID, 
    			RoleName, 
    			Data);
    	} 
		
    	public static void RemoveRole(int RoleID)
    	{
    		try
    		{
    			RolesRepository.RemoveRole(RoleID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static RolesRow GetRole(int RoleID)
		{
			return RolesRepository.Get(RoleID) ?? throw new ArgumentException("Could not find Role");
		}
    	
		public static RolesDataTable GetRoles()
		{
			return RolesRepository.GetAll();
		}
		
		public static int CopyRole(int RoleID)
		{
			return RolesRepository.CopyRole(RoleID);
		}
		
		public static RolesRow? GetRoleByRoleName(string RoleName)
		{
			return RolesRepository.GetRoleByRoleName(RoleName);
		}			
			
			
    	public static void UpdateRoleData(int RoleID, string Data)
    	{
    		RolesRepository.UpdateRoleData(RoleID, Data);
    	}   		
    	
			//GetRolesSp_PagingSp ommitted, can't infer types 
			
			//GetRolesByUserRoleUserIDSp_PagingSp ommitted, can't infer types 
						
    }
}    
		