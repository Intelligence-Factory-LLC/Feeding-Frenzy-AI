
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class UsersRow : RooTrax.Common.DB.BasicRow
	{
		public bool IsAdministrator
		{ 		
			get
			{
				return UserRoles.Any(x => x.RoleID == RolesEnum.Administrator.RoleID);
			}
		}
		
		public bool IsSalesRepresentative
		{
			get
			{
				return UserRoles.Any(x => x.RoleID == RolesEnum.SalesRepresentative.RoleID);
			}
		}

		
	}
	
	

}	

		