
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

    	internal static void InsertUserRole2(
    		int UserID, 
    		int RoleID)    	    	
    	{
			UserRolesDataTable dtUserRoles = UserRolesRepository.GetUserRolesByUserID(UserID);
			if (!dtUserRoles.Any(x => x.RoleID == RoleID))
			{
				UserRolesRepository.InsertUserRole(UserID, RoleID, null);
			}
    		 		
    	}

		public static int InsertUserRole(
	int UserID,
	int RoleID,
	string? Data)
		{
			try
			{
				int iUserRoleID = UserRolesRepository.InsertUserRole(
					UserID,
					RoleID,
					Data
				);

				if (RoleID == RolesEnum.SalesRepresentative.RoleID)
				{
					UsersRow rowUser = UsersRepository.Get(UserID);
					if (null == rowUser.SalesRepresentative)
					{
						SalesRepresentatives.InsertSalesRepresentative(null, null, null, rowUser.UserID);
					}
				}

				return iUserRoleID;
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}
		}


	}
}    
		