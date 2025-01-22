
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
		
		public int UserID { get; set;}
			
		public bool IsEnabled { get; set;}
			
		public DateTime DateCreated { get; set;}
			
		public DateTime LastUpdated { get; set;}
			
		public string Email { get; set;}
			
		public string? Phone { get; set;}
			
		public string? Password { get; set;}
			
		public bool HasLoggedIn { get; set;}
			
		public DateTime? LastLoginDate { get; set;}
			
		public bool IsLockedOut { get; set;}
			
		public string? InvitationCode { get; set;}
			
		public DateTime? InvitationExpiration { get; set;}
			
		public bool IsInvited { get; set;}
			
		public DateTime? InvitedDate { get; set;}
			
		public string? FirstName { get; set;}
			
		public string? LastName { get; set;}
			

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
		
		private AuthorizationsDataTable ? m_Authorizations = null;
		public AuthorizationsDataTable ? Authorizations
		{
			get
			{
				if (null == m_Authorizations && this.EnableLazyLoadProperties)
					m_Authorizations = AuthorizationsRepository.GetAuthorizationsByUserID(this.UserID);
				return m_Authorizations;
			}
		}		
    				
						
		private SalesRepresentativesRow ? m_SalesRepresentativeRow = null;	
		public SalesRepresentativesRow ? SalesRepresentative
		{
			get
			{
				if (null == m_SalesRepresentativeRow &&  this.EnableLazyLoadProperties)
					m_SalesRepresentativeRow = SalesRepresentativesRepository.GetSalesRepresentativeByUserID((int)this.UserID);
		
				return m_SalesRepresentativeRow;
			}
		}		
    					
		private RolesDataTable ? m_UserRoleRoles = null;
		public RolesDataTable ? UserRoleRoles
		{
			get
			{
				if (null == m_UserRoleRoles && this.EnableLazyLoadProperties)
					m_UserRoleRoles = UserRolesRepository.GetRolesByUserRoleUserID(this.UserID);

				return m_UserRoleRoles;
			}
		}

		private UserRolesDataTable ? m_UserRoles = null;
		public UserRolesDataTable ? UserRoles
		{
			get
			{
				if (null == m_UserRoles && this.EnableLazyLoadProperties)
					m_UserRoles = UserRolesRepository.GetUserRolesByUserID(this.UserID);
				return m_UserRoles;
			}
		}	
								
		
		public UsersRow()
		{
			
			this.UserID = 0;
				
			this.IsEnabled = true;
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
			this.Email = "";
				
			this.HasLoggedIn = false;
				
			this.IsLockedOut = false;
				
			this.IsInvited = false;
				
		}

		public  UsersRow( UsersRow oRow)
		{
			
			this.UserID = oRow.UserID;
			
			this.IsEnabled = oRow.IsEnabled;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
			this.Data = oRow.Data;
			
			this.Email = oRow.Email;
			
			this.Phone = oRow.Phone;
			
			this.Password = oRow.Password;
			
			this.HasLoggedIn = oRow.HasLoggedIn;
			
			this.LastLoginDate = oRow.LastLoginDate;
			
			this.IsLockedOut = oRow.IsLockedOut;
			
			this.InvitationCode = oRow.InvitationCode;
			
			this.InvitationExpiration = oRow.InvitationExpiration;
			
			this.IsInvited = oRow.IsInvited;
			
			this.InvitedDate = oRow.InvitedDate;
			
			this.FirstName = oRow.FirstName;
			
			this.LastName = oRow.LastName;
			
		}	

		public override int GetHashCode()
		{
			return (UserID + 1713 << 12);
		}		

		public override string ToString()
		{
			return $"{Email} ({UserID})";
		}
		
	}
	
	public class UsersDataTable : List<UsersRow>
	{	
		public UsersDataTable(UsersDataTable oTable)
			: base(oTable)
		{
		}

		public UsersDataTable()
		{
		}
	}

    public partial class UsersRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("Users");

				return m_cache!;
			}
		}

		internal static UsersRow PopulateRowFromReader(SqlDataReader reader)
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
			
			rowUser.FirstName = DataAccess.GetStringOrNull(reader, "FirstName");
			
			rowUser.LastName = DataAccess.GetStringOrNull(reader, "LastName");
									

			return rowUser;
		}

	
		public static UsersDataTable GetUsersByUserRoleRoleIDSp_PagingSp(int RoleID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			UsersDataTable tblUsers = new UsersDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetUsersByUserRoleRoleIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Integer("@RoleID", RoleID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					UsersRow rowUser = PopulateRowFromReader(reader);

					tblUsers.Add(rowUser);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblUsers;
		}				
		public static int? GetUsersByUserRoleRoleIDSp_CountSp(int RoleID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetUsersByUserRoleRoleIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Integer("@RoleID", RoleID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetUsersByUserRoleRoleIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static UsersDataTable GetUsersByUserIDSp_PagingSp(int UserID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			UsersDataTable tblUsers = new UsersDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetUsersByUserIDSp_PagingSp";

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
					UsersRow rowUser = PopulateRowFromReader(reader);

					tblUsers.Add(rowUser);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblUsers;
		}				
		public static int InsertUser(UsersRow oUser)
		{
			return InsertUser(
    								 oUser.IsEnabled, 
    								 oUser.Data, 
    								 oUser.Email, 
    								 oUser.Phone, 
    								 oUser.Password, 
    								 oUser.HasLoggedIn, 
    								 oUser.LastLoginDate, 
    								 oUser.IsLockedOut, 
    								 oUser.InvitationCode, 
    								 oUser.InvitationExpiration, 
    								 oUser.IsInvited, 
    								 oUser.InvitedDate, 
    								 oUser.FirstName, 
    								 oUser.LastName
									);			
		}

		public static int  InsertUser(
    		bool IsEnabled, 
    		string? Data, 
    		string Email, 
    		string? Phone, 
    		string? Password, 
    		bool HasLoggedIn, 
    		DateTime? LastLoginDate, 
    		bool IsLockedOut, 
    		string? InvitationCode, 
    		DateTime? InvitationExpiration, 
    		bool IsInvited, 
    		DateTime? InvitedDate, 
    		string? FirstName, 
    		string? LastName)
		{
			int iUserID = 0;

			try
			{
				string strStoredProc = "InsertUserSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsEnabled", IsEnabled));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.Email("@Email", Email));
				
				sqlParams.Add(DataAccess.Params.Phone("@Phone", Phone));
				
				sqlParams.Add(DataAccess.Params.Text("@Password", Password));
				
				sqlParams.Add(DataAccess.Params.Boolean("@HasLoggedIn", HasLoggedIn));
				
				sqlParams.Add(DataAccess.Params.DateTime("@LastLoginDate", LastLoginDate));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsLockedOut", IsLockedOut));
				
				sqlParams.Add(DataAccess.Params.String("@InvitationCode", InvitationCode));
				
				sqlParams.Add(DataAccess.Params.DateTime("@InvitationExpiration", InvitationExpiration));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsInvited", IsInvited));
				
				sqlParams.Add(DataAccess.Params.DateTime("@InvitedDate", InvitedDate));
				
				sqlParams.Add(DataAccess.Params.String("@FirstName", FirstName));
				
				sqlParams.Add(DataAccess.Params.String("@LastName", LastName));
				
				iUserID = DataAccess.IntFromProc(strStoredProc, sqlParams, "UserID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert User since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iUserID;
		}
		
		public static void UpdateUser(
    		int UserID, 
    		bool IsEnabled, 
    		string? Data, 
    		string Email, 
    		string? Phone, 
    		string? Password, 
    		bool HasLoggedIn, 
    		DateTime? LastLoginDate, 
    		bool IsLockedOut, 
    		string? InvitationCode, 
    		DateTime? InvitationExpiration, 
    		bool IsInvited, 
    		DateTime? InvitedDate, 
    		string? FirstName, 
    		string? LastName)
    	{    	
    		try
			{
				string strStoredProc = "UpdateUserSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsEnabled", IsEnabled));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.Email("@Email", Email));
				
				sqlParams.Add(DataAccess.Params.Phone("@Phone", Phone));
				
				sqlParams.Add(DataAccess.Params.Text("@Password", Password));
				
				sqlParams.Add(DataAccess.Params.Boolean("@HasLoggedIn", HasLoggedIn));
				
				sqlParams.Add(DataAccess.Params.DateTime("@LastLoginDate", LastLoginDate));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsLockedOut", IsLockedOut));
				
				sqlParams.Add(DataAccess.Params.String("@InvitationCode", InvitationCode));
				
				sqlParams.Add(DataAccess.Params.DateTime("@InvitationExpiration", InvitationExpiration));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsInvited", IsInvited));
				
				sqlParams.Add(DataAccess.Params.DateTime("@InvitedDate", InvitedDate));
				
				sqlParams.Add(DataAccess.Params.String("@FirstName", FirstName));
				
				sqlParams.Add(DataAccess.Params.String("@LastName", LastName));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(UserID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert User since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateUser(UsersRow oUser)
		{
			  UpdateUser(
    								 oUser.UserID, 
    								 oUser.IsEnabled, 
    								 oUser.Data, 
    								 oUser.Email, 
    								 oUser.Phone, 
    								 oUser.Password, 
    								 oUser.HasLoggedIn, 
    								 oUser.LastLoginDate, 
    								 oUser.IsLockedOut, 
    								 oUser.InvitationCode, 
    								 oUser.InvitationExpiration, 
    								 oUser.IsInvited, 
    								 oUser.InvitedDate, 
    								 oUser.FirstName, 
    								 oUser.LastName
									);			
		}
		
    	public static void RemoveUser(int UserID)
    	{
			try
			{
				string strStoredProc = "RemoveUserSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(UserID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this User since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static UsersRow Get(int UserID)
		{
			UsersRow ? oUser = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oUser = Cache.Get<UsersRow>(UserID);

				if (null != oUser)
					return oUser;
			}

			try
			{
				string strStoredProc = "GetUserSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oUser = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oUser)
			{
				
				Cache.Insert(oUser, oUser.UserID, oUser.Email?.ToString());
				
			}

			return oUser ?? throw new Exception("Could not find User " + UserID);
		}
		
		public static UsersDataTable GetAll()
		{
			UsersDataTable tblUsers = new UsersDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetUsersSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					UsersRow rowUser = PopulateRowFromReader(reader);
					
					tblUsers.Add(rowUser);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblUsers;
		}	
		
		public static int CopyUser(int UserID)
		{
			int iUserID = 0;

			try
			{
				string strStoredProc = "CopyUserSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));

				iUserID = DataAccess.IntFromProc(strStoredProc, sqlParams, "UserID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert User since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iUserID;
		}  
		
    	public static void MarkUserAsEnabled(int UserID)
    	{
    		try
			{
				string strStoredProc = "MarkUserAsEnabledSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@UserID", UserID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkUserAsNotEnabled(int UserID)
    	{
    		try
			{
				string strStoredProc = "MarkUserAsNotEnabledSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@UserID", UserID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
			
    	public static void UpdateUserData(int UserID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateUserDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(UserID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateUserData(UsersRow rowUser)
    	{
    		UpdateUserData(rowUser.UserID, rowUser.Data);
    	}  
    	
		public static UsersRow ? GetUserByEmail(string Email)
		{
			UsersRow ? oUser = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oUser = Cache.Get<UsersRow>(Email.ToString());

					if (null != oUser)
						return oUser;
				}
						

				string strStoredProc = "GetUserByEmailSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Email("@Email", Email));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oUser = PopulateRowFromReader(reader);
				}

				

				if (IsCachingEnabled && null != oUser)
				{
					Cache.Insert(oUser, oUser.UserID, oUser.Email?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oUser;		
		}	
			
    	public static void MarkUserAsHasLoggedIn(int UserID)
    	{
    		try
			{
				string strStoredProc = "MarkUserAsHasLoggedInSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@UserID", UserID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkUserAsNotHasLoggedIn(int UserID)
    	{
    		try
			{
				string strStoredProc = "MarkUserAsNotHasLoggedInSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@UserID", UserID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkUserAsLockedOut(int UserID)
    	{
    		try
			{
				string strStoredProc = "MarkUserAsLockedOutSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@UserID", UserID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkUserAsNotLockedOut(int UserID)
    	{
    		try
			{
				string strStoredProc = "MarkUserAsNotLockedOutSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@UserID", UserID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkUserAsInvited(int UserID)
    	{
    		try
			{
				string strStoredProc = "MarkUserAsInvitedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@UserID", UserID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkUserAsNotInvited(int UserID)
    	{
    		try
			{
				string strStoredProc = "MarkUserAsNotInvitedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@UserID", UserID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
		public static UsersDataTable GetUsersSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			UsersDataTable tblUsers = new UsersDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetUsersSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					UsersRow rowUser = PopulateRowFromReader(reader);

					tblUsers.Add(rowUser);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblUsers;
		}				
		public static int? GetUsersSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetUsersSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetUsersSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static UsersDataTable GetUsersByUserID(int UserID)
		{
			UsersDataTable tblUsers = new UsersDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetUsersByUserIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					UsersRow rowUser = PopulateRowFromReader(reader);

					tblUsers.Add(rowUser);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblUsers;
		}				
		public static int? GetUsersByUserIDSp_CountSp(int UserID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetUsersByUserIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetUsersByUserIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		

	}

}	

		