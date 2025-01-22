
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;
using System.Security.Cryptography;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Authorizations 
    {
		[Serializable]
		public class AuthorizationFailedException : JsonWsException
		{
			public AuthorizationFailedException() { }
			public AuthorizationFailedException(string message) : base(message) { }
			public AuthorizationFailedException(string message, Exception inner) : base(message, inner) { }
			protected AuthorizationFailedException(
			  System.Runtime.Serialization.SerializationInfo info,
			  System.Runtime.Serialization.StreamingContext context)
				: base(info, context) { }
		}


		public static AuthorizationsRow GetAuthorization(string Email, string Password)
		{
			AuthorizationsRow ? rowAuthorization = null;

			try
			{
				UsersRow ? rowUser = UsersRepository.GetUserByEmail(Email);

				if (null == rowUser)
					throw new AuthorizationFailedException("AuthorizationFailed");

				if (!rowUser.IsEnabled)
				{
					Logs.DebugLog.WriteEvent("User Disabled", rowUser.UserID.ToString());
					throw new AuthorizationFailedException("AuthorizationFailed");
				}


				if (!BCrypt.Net.BCrypt.Verify(Password, rowUser.Password))
				{
					Logs.DebugLog.WriteEvent("AuthorizationFailed", rowUser.UserID.ToString());
					throw new AuthorizationFailedException("AuthorizationFailed");

				}

				//Get the authorization token that is not an API Key 
				rowAuthorization = AuthorizationsRepository.GetAuthorizationsByUserID(rowUser.UserID).FirstOrDefault(x => !x.IsApiKey);
				int iRefreshExpiration = BasicUtilities.Settings.GetIntOrDefault("RefreshExpiration", 1800)!.Value ;

				if (null == rowAuthorization)
				{
					string sAuthorizationToken = Guid.NewGuid().ToString();
					string sRefreshToken = Guid.NewGuid().ToString();
					DateTime dExpiration = DateTime.Now.AddSeconds(iRefreshExpiration);

					//This conversion needs to happen when we are debugging on a non-utc machine
					dExpiration = dExpiration.ToUniversalTime();

					int iAuthorizationID = AuthorizationsRepository.InsertAuthorization(sAuthorizationToken,
						sRefreshToken, dExpiration, rowUser.UserID,
						DateTime.Now, DateTime.Now, false, false, false,
						null);

					rowAuthorization = AuthorizationsRepository.Get(iAuthorizationID);

					return rowAuthorization!;

				}

				if (rowAuthorization.IsRevoked)
					throw new AuthorizationFailedException("Authorization Revoked");


				DateTime dtExpiration = DateTime.Now.AddSeconds(iRefreshExpiration);
				
				if (dtExpiration > rowAuthorization.Expiration)
					rowAuthorization.Expiration = dtExpiration;

				rowAuthorization.LastRefreshedDate = DateTime.Now;

				AuthorizationsRepository.UpdateAuthorization(rowAuthorization);

			}
			catch (AuthorizationFailedException ex)
			{
				throw;
			}
			catch (Exception err)
			{
				Logs.LogError(err);
				throw;
			}

			return rowAuthorization!;
		}

		internal static string HashPassword(string strPassword)
		{
			if (StringUtil.IsEmpty(strPassword))
				throw new ArgumentException("Password cannot be empty");

			return BCrypt.Net.BCrypt.HashPassword(strPassword);
		}

		internal static bool DoesMeetPasswordRequirements(string strPassword)
		{
			return !(StringUtil.IsEmpty(strPassword) || strPassword.Length < 8);
		}
		public static AuthorizationsRow RefreshAuthorization(string RefreshToken, int UserID)
		{
			AuthorizationsRow ? rowAuthorization = null;
			int iRefreshExpiration = BasicUtilities.Settings.GetIntOrDefault("RefreshExpiration", 1800)!.Value;

			try
			{
				rowAuthorization = AuthorizationsRepository.GetAuthorizationByRefreshToken(RefreshToken);

				if (null == rowAuthorization)
					throw new AuthorizationFailedException("Invalid Refresh Token");

				if (rowAuthorization.UserID != UserID)
					throw new AuthorizationFailedException("RefreshToken / UserID Mismatch");

				if (rowAuthorization.IsRevoked)
					throw new AuthorizationFailedException("Authorization Revoked");

				//Note: There is still a bug here if this call gets called quickly at the same time 
				if (null == rowAuthorization.LastRefreshedDate ||
					rowAuthorization.IsExpired ||
					(DateTime.Now - rowAuthorization.LastRefreshedDate).Value.TotalSeconds > 30)
				{
					rowAuthorization.AuthorizationToken = Guid.NewGuid().ToString();

					DateTime dtExpiration = DateTime.Now.AddSeconds(iRefreshExpiration);
					if (dtExpiration > rowAuthorization.Expiration)
						rowAuthorization.Expiration = dtExpiration;

					rowAuthorization.IsExpired = false;
					rowAuthorization.LastRefreshedDate = DateTime.Now;
				}

				AuthorizationsRepository.UpdateAuthorization(rowAuthorization);

			}
			catch (AuthorizationFailedException ex)
			{
				throw;
			}
			catch (Exception err)
			{
				throw Logs.LogError(err);
			}

			return rowAuthorization;
		}

		public static Tuple<bool, AuthorizationsRow> IsAuthorized(string AuthorizationToken)
		{
			bool bAuthorized = false;
			AuthorizationsRow ? rowAuthorization = null;

			try
			{
				rowAuthorization = AuthorizationsRepository.GetAuthorizationByAuthorizationToken(AuthorizationToken);

				if (null == rowAuthorization)
					throw new AuthorizationFailedException("Invalid Authorization Token");

				if (rowAuthorization.IsRevoked)
					throw new AuthorizationFailedException("Authorization Revoked");

				if (rowAuthorization.Expiration < DateTime.Now)
				{
					Authorizations.MarkAuthorizationAsExpired(rowAuthorization.AuthorizationID);
					throw new AuthorizationFailedException("Authorization Expired");
				}

				rowAuthorization.LastActivityDate = DateTime.Now;
				AuthorizationsRepository.UpdateAuthorization(rowAuthorization);
				bAuthorized = true;
			}
			catch (AuthorizationFailedException ex)
			{
				throw;
			}
			catch (Exception err)
			{
				Logs.LogError(err);
			}

			return new Tuple<bool, AuthorizationsRow>(bAuthorized, rowAuthorization!);
		}

        internal static AuthorizationsRow GetAndRefreshAuthorization(int UserID)
        {
            AuthorizationsRow rowAuthorization = 
				AuthorizationsRepository.GetAuthorizationsByUserID(UserID).FirstOrDefault();

            int iRefreshExpiration = Settings.GetIntOrDefault("RefreshExpiration", 1800).Value;
            
            if (null == rowAuthorization)
            {
                string sAuthorizationToken = Guid.NewGuid().ToString();
                string sRefreshToken = Guid.NewGuid().ToString();
                DateTime dExpiration = DateTime.Now.AddSeconds(iRefreshExpiration);

                //This conversion needs to happen when we are debugging on a non-utc machine
                dExpiration = dExpiration.ToUniversalTime();

				AuthorizationsRow rowAuthorization2 = new AuthorizationsRow
				{
					AuthorizationToken = sAuthorizationToken,
					RefreshToken = sRefreshToken,
					Expiration = dExpiration,
					UserID = UserID,
					LastRefreshedDate = null,
					LastActivityDate = null,
					IsExpired = false,
					IsRevoked = false,
					IsEncrypted = false,
				};

                int iAuthorizationID = 
					AuthorizationsRepository.InsertAuthorization(rowAuthorization2);

                rowAuthorization = AuthorizationsRepository.Get(iAuthorizationID);
              
            }
            else
            {
                rowAuthorization.Expiration = DateTime.Now.AddSeconds(iRefreshExpiration).ToUniversalTime();
                rowAuthorization.LastRefreshedDate = DateTime.Now.ToUniversalTime();
                rowAuthorization.IsExpired = false;

                AuthorizationsRepository.UpdateAuthorization(rowAuthorization);

            }

            return rowAuthorization;
        }

		static public string GeneratePassword()
		{
			const string validChars = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?";
			char[] chars = new char[8];
			byte[] randomBytes = new byte[chars.Length];

			using (var rng = RandomNumberGenerator.Create())
			{
				rng.GetBytes(randomBytes);
			}

			for (int i = 0; i < chars.Length; i++)
			{
				chars[i] = validChars[randomBytes[i] % validChars.Length];
			}

			return new string(chars);
		}

		public static Tuple<bool, AuthorizationsRow> IsAuthorized2(string AuthorizationToken)
		{
			bool bAuthorized = false;
			AuthorizationsRow? rowAuthorization = null;

			try
			{
				//Caching must be enabled for this function to be used 
				if (!AuthorizationsRepository.IsCachingEnabled)
					return IsAuthorized(AuthorizationToken);

				Logs.DebugLog.WriteEvent("IsAuthorized2", AuthorizationToken);

				rowAuthorization = AuthorizationsRepository.Cache.Get<AuthorizationsRow>(AuthorizationToken.ToString());

				//Only need to go to the database once per minute
				if (null == rowAuthorization || rowAuthorization.LastActivityDate < DateTime.Now.AddMinutes(-1))
				{
					rowAuthorization = AuthorizationsRepository.GetAndUpdate(AuthorizationToken);
					if (null != rowAuthorization)
						AuthorizationsRepository.Cache.Insert(rowAuthorization, rowAuthorization.AuthorizationID, rowAuthorization.AuthorizationToken?.ToString());
				}

				if (null == rowAuthorization)
					throw new AuthorizationFailedException("Invalid Authorization Token");

				if (rowAuthorization.IsRevoked)
					throw new AuthorizationFailedException("Authorization Revoked");

				if (rowAuthorization.IsExpired)
					throw new AuthorizationFailedException("Authorization Expired");

				bAuthorized = true;
			}
			catch (AuthorizationFailedException ex)
			{
				Logs.DebugLog.WriteEvent("AuthorizationFailed", ex.Message);
				throw;
			}
			catch (Exception err)
			{
				Logs.LogError(err);
				throw;
			}

			return new Tuple<bool, AuthorizationsRow>(bAuthorized, rowAuthorization);
		}

		public static List<AuthorizationsRow>? GetApiKeyByUserIDSp_PagingSp(int UserID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			return AuthorizationsRepository.GetAuthorizationsByUserIDSp_PagingSp(UserID, Search, SortColumn, SortAscending, SkipRows, NumRows).Where(x => x.IsApiKey).ToList();
		}
	}
}    
		