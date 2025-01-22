
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class UserRoles : JsonWs
    {  


		
		public static void UpdateUserRole(
    		int UserRoleID, 
    		int UserID, 
    		int RoleID, 
    		string? Data)
    	{
    		UserRolesRepository.UpdateUserRole(
    			UserRoleID, 
    			UserID, 
    			RoleID, 
    			Data);
    	} 
		
    	public static void RemoveUserRole(int UserRoleID)
    	{
    		try
    		{
    			UserRolesRepository.RemoveUserRole(UserRoleID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static UserRolesRow GetUserRole(int UserRoleID)
		{
			return UserRolesRepository.Get(UserRoleID);
		}
    	
		public static UserRolesDataTable GetUserRoles()
		{
			return UserRolesRepository.GetAll();
		}
		
		public static int CopyUserRole(int UserRoleID)
		{
			return UserRolesRepository.CopyUserRole(UserRoleID);
		}
		
			
    	public static void UpdateUserRoleData(int UserRoleID, string Data)
    	{
    		UserRolesRepository.UpdateUserRoleData(UserRoleID, Data);
    	}   		
    	
		public static UserRolesRow GetUserRoleByRoleIDUserID(int RoleID, int UserID)
		{
			return UserRolesRepository.GetUserRoleByRoleIDUserID(RoleID, UserID);
		}			
			
		public static UserRolesDataTable GetUserRolesByRoleID(int RoleID)
		{
			return UserRolesRepository.GetUserRolesByRoleID(RoleID);
		}		
			
		public static UserRolesDataTable GetUserRolesByUserID(int UserID)
		{
			return UserRolesRepository.GetUserRolesByUserID(UserID);
		}		
						
    }
}    
		