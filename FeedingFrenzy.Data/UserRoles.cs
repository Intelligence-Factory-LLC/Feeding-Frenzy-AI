
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class UserRolesRow : RooTrax.Common.DB.BasicRow
	{
		
		public int UserRoleID { get; set;}
			
		private int m_UserID;
		public int UserID
		{
			get 
			{ 
				return this.m_UserID;
			}
					
			set 
			{ 
				this.m_UserID = value; 
				this.m_UserRow = null; 
			}
		} 
					
		private int m_RoleID;
		public int RoleID
		{
			get 
			{ 
				return this.m_RoleID;
			}
					
			set 
			{ 
				this.m_RoleID = value; 
				this.m_RoleRow = null; 
			}
		} 
					
		public DateTime DateCreated { get; set;}
			
		public DateTime LastUpdated { get; set;}
			

		private string ? m_strData = null;
		public string ? Data 
		{ 
			get
			{
				return (null != m_jsonDataObject ? m_jsonDataObject.ToString() : m_strData);
			}

			set
			{
				m_strData = value;
				m_jsonDataObject = null;
			}
		}

		private JsonObject ? m_jsonDataObject = null;
		public JsonObject DataObject
		{
			get
			{
				if (null == m_jsonDataObject)
					m_jsonDataObject = new JsonObject(StringUtil.IsEmpty(this.Data) ? "{}" : this.Data!);

				return m_jsonDataObject;
			}
		}
		
		private RolesRow ? m_RoleRow = null;	
		public RolesRow ? Role
		{
			get
			{
				if (null == m_RoleRow &&  this.EnableLazyLoadProperties)
					m_RoleRow = RolesRepository.Get((int)this.RoleID);
		
				return m_RoleRow;
			}
		}    				
		private UsersRow ? m_UserRow = null;	
		public UsersRow ? User
		{
			get
			{
				if (null == m_UserRow &&  this.EnableLazyLoadProperties)
					m_UserRow = UsersRepository.Get((int)this.UserID);
		
				return m_UserRow;
			}
		}    				
		
		public UserRolesRow()
		{
			
			this.UserRoleID = 0;
				
			this.UserID = 0;
				
			this.RoleID = 0;
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  UserRolesRow( UserRolesRow oRow)
		{
			
			this.UserRoleID = oRow.UserRoleID;
			
			this.UserID = oRow.UserID;
			
			this.RoleID = oRow.RoleID;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
			this.Data = oRow.Data;
			
		}	

		public override int GetHashCode()
		{
			return (UserRoleID + 1715 << 12);
		}		

		public override string ToString()
		{
			return $"({UserRoleID})";
		}
		
	}
	
	public class UserRolesDataTable : List<UserRolesRow>
	{	
		public UserRolesDataTable(UserRolesDataTable oTable)
			: base(oTable)
		{
		}

		public UserRolesDataTable()
		{
		}
	}

    public partial class UserRolesRepository
    {
		static private bool m_bIsCachingEnabled = false; 
		static public bool IsCachingEnabled
		{
			get
			{
				return m_bIsCachingEnabled;
			}
			set
			{
				m_bIsCachingEnabled = value;
			}
		}

		private static RowCache ? m_cache = null;
		public static RowCache Cache
		{
			get
			{
				if (null == m_cache)
					m_cache = CacheManager.Instance.GetOrCreateCache("UserRoles");

				return m_cache!;
			}
		}



	
		public static int InsertUserRole(UserRolesRow oUserRole)
		{
			return InsertUserRole(
    								 oUserRole.UserID, 
    								 oUserRole.RoleID, 
    								 oUserRole.Data
									);			
		}

		public static int  InsertUserRole(
    		int UserID, 
    		int RoleID, 
    		string? Data)
		{
			int iUserRoleID = 0;

			try
			{
				string strStoredProc = "InsertUserRoleSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				sqlParams.Add(DataAccess.Params.ID("@RoleID", RoleID));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iUserRoleID = DataAccess.IntFromProc(strStoredProc, sqlParams, "UserRoleID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert User Role since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iUserRoleID;
		}
		
		public static void UpdateUserRole(
    		int UserRoleID, 
    		int UserID, 
    		int RoleID, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateUserRoleSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@UserRoleID", UserRoleID));
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				sqlParams.Add(DataAccess.Params.ID("@RoleID", RoleID));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(UserRoleID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert User Role since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateUserRole(UserRolesRow oUserRole)
		{
			  UpdateUserRole(
    								 oUserRole.UserRoleID, 
    								 oUserRole.UserID, 
    								 oUserRole.RoleID, 
    								 oUserRole.Data
									);			
		}
		
    	public static void RemoveUserRole(int UserRoleID)
    	{
			try
			{
				string strStoredProc = "RemoveUserRoleSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@UserRoleID", UserRoleID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(UserRoleID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this User Role since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static UserRolesRow ? Get(int UserRoleID)
		{
			UserRolesRow ? oUserRole = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oUserRole = Cache.Get<UserRolesRow>(UserRoleID);

				if (null != oUserRole)
					return oUserRole;
			}

			try
			{
				string strStoredProc = "GetUserRoleSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@UserRoleID", UserRoleID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oUserRole = new UserRolesRow();
					
					oUserRole.UserRoleID = DataAccess.GetID(reader, "UserRoleID");
					oUserRole.UserID = DataAccess.GetID(reader, "UserID");
					oUserRole.RoleID = DataAccess.GetID(reader, "RoleID");
					oUserRole.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oUserRole.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					oUserRole.Data = DataAccess.GetStringOrNull(reader, "Data");						
						
				}
				else
				{
					//todo  handle error
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oUserRole)
			{
				
				Cache.Insert(oUserRole, oUserRole.UserRoleID, oUserRole.UserRoleID.ToString());
				
			}

			return oUserRole;
		}
		
		public static UserRolesDataTable GetAll()
		{
			UserRolesDataTable tblUserRoles = new UserRolesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetUserRolesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					UserRolesRow rowUserRole = new UserRolesRow();
					
					rowUserRole.UserRoleID = DataAccess.GetID(reader, "UserRoleID");
					rowUserRole.UserID = DataAccess.GetID(reader, "UserID");
					rowUserRole.RoleID = DataAccess.GetID(reader, "RoleID");
					rowUserRole.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowUserRole.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					rowUserRole.Data = DataAccess.GetStringOrNull(reader, "Data");
					
					tblUserRoles.Add(rowUserRole);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblUserRoles;
		}	
		
		public static int CopyUserRole(int UserRoleID)
		{
			int iUserRoleID = 0;

			try
			{
				string strStoredProc = "CopyUserRoleSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@UserRoleID", UserRoleID));

				iUserRoleID = DataAccess.IntFromProc(strStoredProc, sqlParams, "UserRoleID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert User Role since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iUserRoleID;
		}  
		
			
    	public static void UpdateUserRoleData(int UserRoleID, string Data)
    	{
    		try
			{
				string strStoredProc = "UpdateUserRoleDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@UserRoleID", UserRoleID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(UserRoleID);
				}
			}
		
			finally
			{

			}
    	}   		
    	
						
		public static RolesDataTable GetRolesByUserRoleUserID(int UserID)
		{
			RolesDataTable tblUserRoles = new RolesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRolesByUserRoleUserIDSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					RolesRow rowRole = new RolesRow();
					
					rowRole.RoleID = DataAccess.GetID(reader, "RoleID");
					rowRole.RoleName = DataAccess.GetString(reader, "RoleName");
					rowRole.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowRole.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					rowRole.Data = DataAccess.GetStringOrNull(reader, "Data");
					
					tblUserRoles.Add(rowRole);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblUserRoles;
		}					
		
						
		public static UsersDataTable GetUsersByUserRoleRoleID(int RoleID)
		{
			UsersDataTable tblUserRoles = new UsersDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetUsersByUserRoleRoleIDSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@RoleID", RoleID));
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					UsersRow rowUser = new UsersRow();
					
					rowUser.UserID = DataAccess.GetID(reader, "UserID");
					rowUser.IsEnabled = DataAccess.GetBoolean(reader, "IsEnabled");
					rowUser.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowUser.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					rowUser.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowUser.Email = DataAccess.GetEmail(reader, "Email");
					rowUser.Phone = DataAccess.GetPhoneOrNull(reader, "Phone");
					rowUser.Password = DataAccess.GetTextOrNull(reader, "Password");
					rowUser.HasLoggedIn = DataAccess.GetBoolean(reader, "HasLoggedIn");
					rowUser.LastLoginDate = DataAccess.GetDateTimeOrNull(reader, "LastLoginDate");
					rowUser.IsLockedOut = DataAccess.GetBoolean(reader, "IsLockedOut");
					rowUser.InvitationCode = DataAccess.GetStringOrNull(reader, "InvitationCode");
					rowUser.InvitationExpiration = DataAccess.GetDateTimeOrNull(reader, "InvitationExpiration");
					rowUser.IsInvited = DataAccess.GetBoolean(reader, "IsInvited");
					rowUser.InvitedDate = DataAccess.GetDateTimeOrNull(reader, "InvitedDate");
					
					tblUserRoles.Add(rowUser);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblUserRoles;
		}					
		
		public static UserRolesRow ? GetUserRoleByRoleIDUserID(int RoleID, int UserID)
		{
			UserRolesRow ? oUserRole = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oUserRole = Cache.Get<UserRolesRow>(RoleID + "|" + UserID);

					if (null != oUserRole)
						return oUserRole;
				}
						

				string strStoredProc = "GetUserRolesByRoleIDUserIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@RoleID", RoleID));
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oUserRole = new UserRolesRow();
					
					oUserRole.UserRoleID = DataAccess.GetID(reader, "UserRoleID");
					oUserRole.UserID = DataAccess.GetID(reader, "UserID");
					oUserRole.RoleID = DataAccess.GetID(reader, "RoleID");
					oUserRole.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oUserRole.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					oUserRole.Data = DataAccess.GetStringOrNull(reader, "Data");
				}

				

				if (IsCachingEnabled && null != oUserRole)
				{
					Cache.Insert(oUserRole, oUserRole.UserRoleID, RoleID + "|" + UserID);
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oUserRole;		
		}	
			
		public static UserRolesDataTable GetUserRolesByRoleID(int RoleID)
		{
			UserRolesDataTable tblUserRoles = new UserRolesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetUserRolesByRoleIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@RoleID", RoleID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					UserRolesRow rowUserRole = new UserRolesRow();
					
					rowUserRole.UserRoleID = DataAccess.GetID(reader, "UserRoleID");
					rowUserRole.UserID = DataAccess.GetID(reader, "UserID");
					rowUserRole.RoleID = DataAccess.GetID(reader, "RoleID");
					rowUserRole.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowUserRole.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					rowUserRole.Data = DataAccess.GetStringOrNull(reader, "Data");
					
					tblUserRoles.Add(rowUserRole);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblUserRoles;
		}				
		public static UserRolesDataTable GetUserRolesByUserID(int UserID)
		{
			UserRolesDataTable tblUserRoles = new UserRolesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetUserRolesByUserIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					UserRolesRow rowUserRole = new UserRolesRow();
					
					rowUserRole.UserRoleID = DataAccess.GetID(reader, "UserRoleID");
					rowUserRole.UserID = DataAccess.GetID(reader, "UserID");
					rowUserRole.RoleID = DataAccess.GetID(reader, "RoleID");
					rowUserRole.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowUserRole.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					rowUserRole.Data = DataAccess.GetStringOrNull(reader, "Data");
					
					tblUserRoles.Add(rowUserRole);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblUserRoles;
		}				
		public static UserRolesDataTable GetUserRolesSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			UserRolesDataTable tblUserRoles = new UserRolesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetUserRolesSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					UserRolesRow rowUserRole = new UserRolesRow();
					
					rowUserRole.UserRoleID = DataAccess.GetID(reader, "UserRoleID");
					rowUserRole.UserID = DataAccess.GetID(reader, "UserID");
					rowUserRole.RoleID = DataAccess.GetID(reader, "RoleID");
					rowUserRole.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowUserRole.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					rowUserRole.Data = DataAccess.GetStringOrNull(reader, "Data");
					
					tblUserRoles.Add(rowUserRole);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblUserRoles;
		}				
		public static int? GetUserRolesSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetUserRolesSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetUserRolesSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static UserRolesDataTable GetUserRolesByRoleIDSp_PagingSp(int RoleID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			UserRolesDataTable tblUserRoles = new UserRolesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetUserRolesByRoleIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@RoleID", RoleID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					UserRolesRow rowUserRole = new UserRolesRow();
					
					rowUserRole.UserRoleID = DataAccess.GetID(reader, "UserRoleID");
					rowUserRole.UserID = DataAccess.GetID(reader, "UserID");
					rowUserRole.RoleID = DataAccess.GetID(reader, "RoleID");
					rowUserRole.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowUserRole.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					rowUserRole.Data = DataAccess.GetStringOrNull(reader, "Data");
					
					tblUserRoles.Add(rowUserRole);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblUserRoles;
		}				
		public static int? GetUserRolesByRoleIDSp_CountSp(int RoleID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetUserRolesByRoleIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@RoleID", RoleID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetUserRolesByRoleIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static UserRolesDataTable GetUserRolesByUserIDSp_PagingSp(int UserID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			UserRolesDataTable tblUserRoles = new UserRolesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetUserRolesByUserIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					UserRolesRow rowUserRole = new UserRolesRow();
					
					rowUserRole.UserRoleID = DataAccess.GetID(reader, "UserRoleID");
					rowUserRole.UserID = DataAccess.GetID(reader, "UserID");
					rowUserRole.RoleID = DataAccess.GetID(reader, "RoleID");
					rowUserRole.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowUserRole.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					rowUserRole.Data = DataAccess.GetStringOrNull(reader, "Data");
					
					tblUserRoles.Add(rowUserRole);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblUserRoles;
		}				
		public static int? GetUserRolesByUserIDSp_CountSp(int UserID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetUserRolesByUserIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetUserRolesByUserIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
	}

}	

		