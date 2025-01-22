
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class AuthorizationsRow : RooTrax.Common.DB.BasicRow
	{
		
		public int AuthorizationID { get; set;}
			
		public string AuthorizationToken { get; set;}
			
		public string RefreshToken { get; set;}
			
		public DateTime? Expiration { get; set;}
			
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
					
		public DateTime? LastRefreshedDate { get; set;}
			
		public DateTime? LastActivityDate { get; set;}
			
		public bool IsExpired { get; set;}
			
		public bool IsRevoked { get; set;}
			
		public bool IsEncrypted { get; set;}
			
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
		
		public AuthorizationsRow()
		{
			
			this.AuthorizationID = 0;
				
			this.AuthorizationToken = "";
				
			this.RefreshToken = "";
				
			this.UserID = 0;
				
			this.IsExpired = false;
				
			this.IsRevoked = false;
				
			this.IsEncrypted = false;
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  AuthorizationsRow( AuthorizationsRow oRow)
		{
			
			this.AuthorizationID = oRow.AuthorizationID;
			
			this.AuthorizationToken = oRow.AuthorizationToken;
			
			this.RefreshToken = oRow.RefreshToken;
			
			this.Expiration = oRow.Expiration;
			
			this.UserID = oRow.UserID;
			
			this.LastRefreshedDate = oRow.LastRefreshedDate;
			
			this.LastActivityDate = oRow.LastActivityDate;
			
			this.IsExpired = oRow.IsExpired;
			
			this.IsRevoked = oRow.IsRevoked;
			
			this.IsEncrypted = oRow.IsEncrypted;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
		}	

		public override int GetHashCode()
		{
			return (AuthorizationID + 1716 << 12);
		}		

		public override string ToString()
		{
			return $"{AuthorizationToken} ({AuthorizationID})";
		}
		
	}
	
	public class AuthorizationsDataTable : List<AuthorizationsRow>
	{	
		public AuthorizationsDataTable(AuthorizationsDataTable oTable)
			: base(oTable)
		{
		}

		public AuthorizationsDataTable()
		{
		}
	}

    public partial class AuthorizationsRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("Authorizations");

				return m_cache!;
			}
		}

		internal static AuthorizationsRow PopulateRowFromReader(SqlDataReader reader)
		{
			AuthorizationsRow rowAuthorization = new AuthorizationsRow();
			
			rowAuthorization.AuthorizationID = DataAccess.GetID(reader, "AuthorizationID");
			
			rowAuthorization.AuthorizationToken = DataAccess.GetString(reader, "AuthorizationToken");
			
			rowAuthorization.RefreshToken = DataAccess.GetString(reader, "RefreshToken");
			
			rowAuthorization.Expiration = DataAccess.GetDateTimeOrNull(reader, "Expiration");
			
			rowAuthorization.UserID = DataAccess.GetID(reader, "UserID");
			
			rowAuthorization.LastRefreshedDate = DataAccess.GetDateTimeOrNull(reader, "LastRefreshedDate");
			
			rowAuthorization.LastActivityDate = DataAccess.GetDateTimeOrNull(reader, "LastActivityDate");
			
			rowAuthorization.IsExpired = DataAccess.GetBoolean(reader, "IsExpired");
			
			rowAuthorization.IsRevoked = DataAccess.GetBoolean(reader, "IsRevoked");
			
			rowAuthorization.IsEncrypted = DataAccess.GetBoolean(reader, "IsEncrypted");
			
			rowAuthorization.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowAuthorization.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowAuthorization.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
									

			return rowAuthorization;
		}

	
		public static AuthorizationsDataTable GetAuthorizationsSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			AuthorizationsDataTable tblAuthorizations = new AuthorizationsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetAuthorizationsSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					AuthorizationsRow rowAuthorization = PopulateRowFromReader(reader);

					tblAuthorizations.Add(rowAuthorization);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblAuthorizations;
		}				
		public static int? GetAuthorizationsSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetAuthorizationsSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetAuthorizationsSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static AuthorizationsDataTable GetAuthorizationsByUserIDSp_PagingSp(int UserID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			AuthorizationsDataTable tblAuthorizations = new AuthorizationsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetAuthorizationsByUserIDSp_PagingSp";

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
					AuthorizationsRow rowAuthorization = PopulateRowFromReader(reader);

					tblAuthorizations.Add(rowAuthorization);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblAuthorizations;
		}				
		public static int? GetAuthorizationsByUserIDSp_CountSp(int UserID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetAuthorizationsByUserIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetAuthorizationsByUserIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static AuthorizationsRow ? GetAuthorizationByRefreshToken(string RefreshToken)
		{
			AuthorizationsRow ? oAuthorization = null;
			SqlDataReader ? reader = null;

			try
			{
				

				string strStoredProc = "GetAuthorizationsByRefreshTokenSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@RefreshToken", RefreshToken));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oAuthorization = PopulateRowFromReader(reader);
				}

				
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oAuthorization;		
		}	
			
		public static AuthorizationsRow ? GetAndUpdate(string AuthorizationToken)
		{
			AuthorizationsRow ? oAuthorization = null;
			SqlDataReader ? reader = null;

			try
			{
				

				string strStoredProc = "Authorization_Get_Sp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@AuthorizationToken", AuthorizationToken));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oAuthorization = PopulateRowFromReader(reader);
				}

				
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oAuthorization;		
		}	
			
		public static int InsertAuthorization(AuthorizationsRow oAuthorization)
		{
			return InsertAuthorization(
    								 oAuthorization.AuthorizationToken, 
    								 oAuthorization.RefreshToken, 
    								 oAuthorization.Expiration, 
    								 oAuthorization.UserID, 
    								 oAuthorization.LastRefreshedDate, 
    								 oAuthorization.LastActivityDate, 
    								 oAuthorization.IsExpired, 
    								 oAuthorization.IsRevoked, 
    								 oAuthorization.IsEncrypted, 
    								 oAuthorization.Data
									);			
		}

		public static int  InsertAuthorization(
    		string AuthorizationToken, 
    		string RefreshToken, 
    		DateTime? Expiration, 
    		int UserID, 
    		DateTime? LastRefreshedDate, 
    		DateTime? LastActivityDate, 
    		bool IsExpired, 
    		bool IsRevoked, 
    		bool IsEncrypted, 
    		string? Data)
		{
			int iAuthorizationID = 0;

			try
			{
				string strStoredProc = "InsertAuthorizationSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@AuthorizationToken", AuthorizationToken));
				
				sqlParams.Add(DataAccess.Params.String("@RefreshToken", RefreshToken));
				
				sqlParams.Add(DataAccess.Params.DateTime("@Expiration", Expiration));
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				sqlParams.Add(DataAccess.Params.DateTime("@LastRefreshedDate", LastRefreshedDate));
				
				sqlParams.Add(DataAccess.Params.DateTime("@LastActivityDate", LastActivityDate));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsExpired", IsExpired));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsRevoked", IsRevoked));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsEncrypted", IsEncrypted));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iAuthorizationID = DataAccess.IntFromProc(strStoredProc, sqlParams, "AuthorizationID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Authorization since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iAuthorizationID;
		}
		
		public static void UpdateAuthorization(
    		int AuthorizationID, 
    		string AuthorizationToken, 
    		string RefreshToken, 
    		DateTime? Expiration, 
    		int UserID, 
    		DateTime? LastRefreshedDate, 
    		DateTime? LastActivityDate, 
    		bool IsExpired, 
    		bool IsRevoked, 
    		bool IsEncrypted, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateAuthorizationSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@AuthorizationID", AuthorizationID));
				
				sqlParams.Add(DataAccess.Params.String("@AuthorizationToken", AuthorizationToken));
				
				sqlParams.Add(DataAccess.Params.String("@RefreshToken", RefreshToken));
				
				sqlParams.Add(DataAccess.Params.DateTime("@Expiration", Expiration));
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				sqlParams.Add(DataAccess.Params.DateTime("@LastRefreshedDate", LastRefreshedDate));
				
				sqlParams.Add(DataAccess.Params.DateTime("@LastActivityDate", LastActivityDate));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsExpired", IsExpired));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsRevoked", IsRevoked));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsEncrypted", IsEncrypted));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(AuthorizationID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Authorization since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateAuthorization(AuthorizationsRow oAuthorization)
		{
			  UpdateAuthorization(
    								 oAuthorization.AuthorizationID, 
    								 oAuthorization.AuthorizationToken, 
    								 oAuthorization.RefreshToken, 
    								 oAuthorization.Expiration, 
    								 oAuthorization.UserID, 
    								 oAuthorization.LastRefreshedDate, 
    								 oAuthorization.LastActivityDate, 
    								 oAuthorization.IsExpired, 
    								 oAuthorization.IsRevoked, 
    								 oAuthorization.IsEncrypted, 
    								 oAuthorization.Data
									);			
		}
		
    	public static void RemoveAuthorization(int AuthorizationID)
    	{
			try
			{
				string strStoredProc = "RemoveAuthorizationSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@AuthorizationID", AuthorizationID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(AuthorizationID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Authorization since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static AuthorizationsRow Get(int AuthorizationID)
		{
			AuthorizationsRow ? oAuthorization = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oAuthorization = Cache.Get<AuthorizationsRow>(AuthorizationID);

				if (null != oAuthorization)
					return oAuthorization;
			}

			try
			{
				string strStoredProc = "GetAuthorizationSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@AuthorizationID", AuthorizationID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oAuthorization = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oAuthorization)
			{
				
				Cache.Insert(oAuthorization, oAuthorization.AuthorizationID, oAuthorization.AuthorizationToken?.ToString());
				
			}

			return oAuthorization ?? throw new Exception("Could not find Authorization " + AuthorizationID);
		}
		
		public static AuthorizationsDataTable GetAll()
		{
			AuthorizationsDataTable tblAuthorizations = new AuthorizationsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetAuthorizationsSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					AuthorizationsRow rowAuthorization = PopulateRowFromReader(reader);
					
					tblAuthorizations.Add(rowAuthorization);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblAuthorizations;
		}	
		
		public static int CopyAuthorization(int AuthorizationID)
		{
			int iAuthorizationID = 0;

			try
			{
				string strStoredProc = "CopyAuthorizationSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@AuthorizationID", AuthorizationID));

				iAuthorizationID = DataAccess.IntFromProc(strStoredProc, sqlParams, "AuthorizationID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Authorization since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iAuthorizationID;
		}  
		
		public static AuthorizationsRow ? GetAuthorizationByAuthorizationToken(string AuthorizationToken)
		{
			AuthorizationsRow ? oAuthorization = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oAuthorization = Cache.Get<AuthorizationsRow>(AuthorizationToken.ToString());

					if (null != oAuthorization)
						return oAuthorization;
				}
						

				string strStoredProc = "GetAuthorizationByAuthorizationTokenSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@AuthorizationToken", AuthorizationToken));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oAuthorization = PopulateRowFromReader(reader);
				}

				

				if (IsCachingEnabled && null != oAuthorization)
				{
					Cache.Insert(oAuthorization, oAuthorization.AuthorizationID, oAuthorization.AuthorizationToken?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oAuthorization;		
		}	
			
    	public static void MarkAuthorizationAsExpired(int AuthorizationID)
    	{
    		try
			{
				string strStoredProc = "MarkAuthorizationAsExpiredSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@AuthorizationID", AuthorizationID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkAuthorizationAsNotExpired(int AuthorizationID)
    	{
    		try
			{
				string strStoredProc = "MarkAuthorizationAsNotExpiredSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@AuthorizationID", AuthorizationID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkAuthorizationAsRevoked(int AuthorizationID)
    	{
    		try
			{
				string strStoredProc = "MarkAuthorizationAsRevokedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@AuthorizationID", AuthorizationID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkAuthorizationAsNotRevoked(int AuthorizationID)
    	{
    		try
			{
				string strStoredProc = "MarkAuthorizationAsNotRevokedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@AuthorizationID", AuthorizationID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkAuthorizationAsEncrypted(int AuthorizationID)
    	{
    		try
			{
				string strStoredProc = "MarkAuthorizationAsEncryptedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@AuthorizationID", AuthorizationID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkAuthorizationAsNotEncrypted(int AuthorizationID)
    	{
    		try
			{
				string strStoredProc = "MarkAuthorizationAsNotEncryptedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@AuthorizationID", AuthorizationID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
			
    	public static void UpdateAuthorizationData(int AuthorizationID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateAuthorizationDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@AuthorizationID", AuthorizationID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(AuthorizationID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateAuthorizationData(AuthorizationsRow rowAuthorization)
    	{
    		UpdateAuthorizationData(rowAuthorization.AuthorizationID, rowAuthorization.Data);
    	}  
    	
		public static AuthorizationsDataTable GetAuthorizationsByUserID(int UserID)
		{
			AuthorizationsDataTable tblAuthorizations = new AuthorizationsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetAuthorizationsByUserIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					AuthorizationsRow rowAuthorization = PopulateRowFromReader(reader);

					tblAuthorizations.Add(rowAuthorization);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblAuthorizations;
		}				

	}

}	

		