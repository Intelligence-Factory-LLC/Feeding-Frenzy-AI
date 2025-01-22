using BasicUtilities;
using WebAppUtilities;
using Microsoft.AspNetCore.Http;
using FeedingFrenzy.Admin.Business.API;
using FeedingFrenzy.Data;
using FeedingFrenzy.Admin.Business.Common;
using DocumentFormat.OpenXml.InkML;
using System.Web;

namespace FeedingFrenzy.Admin.Business.Admin.API
{
    public class OAuthDTO
    {
        public string access_token { get; set; }
        public string refresh_token { get; set; }
        public string token_type { get; set; }
        public DateTime expires { get; set; }
        public int expires_in { get; set; }

        public OAuthDTO()
        {
        }

        public OAuthDTO(AuthorizationsRow rowAuthorization)
        {
            access_token = rowAuthorization.AuthorizationToken;
            refresh_token = rowAuthorization.RefreshToken;
            expires = rowAuthorization.Expiration ?? throw new Exception("OAuth Expriation is missing");
            token_type = "BEARER";
            expires_in = (int)(rowAuthorization.Expiration - DateTime.Now)?.TotalMilliseconds!;
        }
    }

    public class UserInvitationCodeDTO
    {
        public string Email { get; set; }
        public string Code { get; set; }
    }

    public class LoginResultsDTO
    {
        public OAuthDTO OAuth { get; set; }

        public bool IsAuthorized = false;
        public List<string> Roles = new List<string>();

        public enum FailureReasons
        {
            None,
            InvalidUserOrPassword,
            NotApproved,
            LockedOut,
            Expired,
            InvalidAuthorizationToken
        };

        public FailureReasons FailureReason = FailureReasons.None;
    }

    public class CreateResultsDTO
    {
        public bool IsAuthorized = false;
    }

    public class Authentication : JsonWs
    {
        static public LoginResultsDTO LoginBuffaly(string Email, string Password, HttpContext? context)
        {
            LoginResultsDTO dtoLoginResults = new LoginResultsDTO();
            bool isAuthorize = true;
            
            try
            {
                Buffaly.Data.AuthorizationsRow rowBuffalyAuthorization = null;
                try
                {
                    rowBuffalyAuthorization = Buffaly.Business.Authorizations.GetAuthorization(Email, Password);
                    isAuthorize = true;
                }
                catch (Exception ex)
                {
                    isAuthorize = false;
                }

                if (!isAuthorize)
                {
                    dtoLoginResults.IsAuthorized = false;
                    dtoLoginResults.FailureReason = LoginResultsDTO.FailureReasons.InvalidUserOrPassword;
                    return dtoLoginResults;

                }

                AuthorizationsRow rowAuthorization = new AuthorizationsRow { 
                    IsExpired = false,
                    IsRevoked = false,
                    AuthorizationToken = rowBuffalyAuthorization.AuthorizationToken,
                    Expiration = DateTime.Now.AddDays(1)
                };

                if (!rowAuthorization.IsExpired && !rowAuthorization.IsRevoked)
                {
                    dtoLoginResults.IsAuthorized = true;
                    dtoLoginResults.FailureReason = LoginResultsDTO.FailureReasons.None;
                    dtoLoginResults.OAuth = new OAuthDTO(rowAuthorization);

                    dtoLoginResults.Roles = new List<string> { "Administrator" };

                    CookieUtil.Write("OAuth", "AuthorizationToken", rowAuthorization.AuthorizationToken, context);

                    UsersDataTable users = UsersRepository.GetAll();
                    var user = users
                            .Where(x => x.UserRoleRoles?.Any(y => y.RoleName == "Administrator") == true)
                            .FirstOrDefault();

                    SetupLogin(user, context);

                }
                else
                {
                    dtoLoginResults.FailureReason = LoginResultsDTO.FailureReasons.NotApproved;
                }
            }
            catch (Authorizations.AuthorizationFailedException)
            {
                dtoLoginResults.IsAuthorized = false;
                dtoLoginResults.FailureReason = LoginResultsDTO.FailureReasons.InvalidUserOrPassword;
            }

            return dtoLoginResults;
        }

        static public LoginResultsDTO Impersonate(string strAuthenticationToken, HttpContext? context)
        {
            LoginResultsDTO dtoLoginResults = new LoginResultsDTO();

            try
            {
                Buffaly.Data.AuthorizationsRow? rowBuffalyAuthorization = 
                    Buffaly.Business.Authorizations.GetAuthorizationByAuthorizationToken(strAuthenticationToken);

                AuthorizationsRow rowAuthorization = new AuthorizationsRow
                {
                    IsExpired = false,
                    IsRevoked = false,
                    AuthorizationToken = rowBuffalyAuthorization.AuthorizationToken,
                    Expiration = DateTime.Now.AddDays(1)
                };

                if (!rowAuthorization.IsExpired && !rowAuthorization.IsRevoked)
                {
                    dtoLoginResults.IsAuthorized = true;
                    dtoLoginResults.FailureReason = LoginResultsDTO.FailureReasons.None;
                    dtoLoginResults.OAuth = new OAuthDTO(rowAuthorization);

                    dtoLoginResults.Roles = new List<string> { "Administrator" };

                    CookieUtil.Write("OAuth", "AuthorizationToken", rowAuthorization.AuthorizationToken, context);

                    UsersDataTable users = UsersRepository.GetAll();
                    var user = users
                            .Where(x => x.UserRoleRoles?.Any(y => y.RoleName == "Administrator") == true)
                            .FirstOrDefault();

                    SetupLogin(user, context);

                }
                else
                {
                    dtoLoginResults.FailureReason = LoginResultsDTO.FailureReasons.NotApproved;
                }
            }
            catch (Authorizations.AuthorizationFailedException)
            {
                dtoLoginResults.IsAuthorized = false;
                dtoLoginResults.FailureReason = LoginResultsDTO.FailureReasons.InvalidUserOrPassword;
            }

            return dtoLoginResults;

        }
        static public LoginResultsDTO Login(string Email, string Password, HttpContext ? context)
        {
            LoginResultsDTO dtoLoginResults = new LoginResultsDTO();

            try
            {
                AuthorizationsRow rowAuthorization = Authorizations.GetAuthorization(Email, Password);

				if (!rowAuthorization.IsExpired && !rowAuthorization.IsRevoked)
				{
					dtoLoginResults.IsAuthorized = true;
					dtoLoginResults.FailureReason = LoginResultsDTO.FailureReasons.None;
					dtoLoginResults.OAuth = new OAuthDTO(rowAuthorization);

					dtoLoginResults.Roles = rowAuthorization.User?.UserRoleRoles?.Select(x => x.RoleName).ToList() ?? new List<string>();

					CookieUtil.Write("OAuth", "AuthorizationToken", rowAuthorization.AuthorizationToken, context);

					SetupLogin(rowAuthorization.User, context);

					rowAuthorization.User.LastLoginDate = DateTime.Now;
                    rowAuthorization.User.HasLoggedIn = true;
                    UsersRepository.UpdateUser(rowAuthorization.User);

                    rowAuthorization.DataObject["IPAddress"] = GetUserIP(context);
					AuthorizationsRepository.UpdateAuthorizationData(rowAuthorization.AuthorizationID, rowAuthorization.Data);

				}
				else
				{
					dtoLoginResults.FailureReason = LoginResultsDTO.FailureReasons.NotApproved;
				}
			}
            catch (Authorizations.AuthorizationFailedException)
            {
                dtoLoginResults.IsAuthorized = false;
                dtoLoginResults.FailureReason = LoginResultsDTO.FailureReasons.InvalidUserOrPassword;
            }

            return dtoLoginResults;
        }

        private static string GetUserIP(HttpContext context)
        {
            try
            {
                return context.Connection.RemoteIpAddress.ToString();
            }
            catch (Exception err)
            {
                Logs.LogError(err);
            }
            return string.Empty;
        }
        internal static void SetupLogin(UsersRow rowUser, HttpContext context)
		{
			UserState state = new UserState(context);
			state.UserID = rowUser.UserID;
			state.Permission = new Permissions() {
				AllLeads = true,
				AllowBulkLeadOperations = true,
				AllowExportInvoices = true,
				CanCommunicateWithUnclaimedLead = true,
				EditLead = true,
				EditOrganization = true,
				EditSalesRepresentativeWeight = true,
				InsertLead = true,
				InsertOrganization = true, 
				InsertSalesRepresentative = true,
				ReassignLead = true,
				ViewAllInvoices = true,
				ViewAllOrganizations = true,
				ViewPurchaseOrders = true,
				ViewQuoting = true,
				ViewSalesReports = true,
				ViewSalesRepresentatives = true,
				AllowEditQuickHelp = rowUser.DataObject.GetBooleanOrFalse("AllowEditQuickHelp")
			};

        }

		public class SetPasswordResult
		{
			public string ? Result = null;
			public bool IsAdminAccount = false;
			public OAuthDTO ? OAuth = null;
		}
		static public LoginResultsDTO SetPassword(string Email, string GUID, string Password, HttpContext? context)
		{
			if (!Authorizations.DoesMeetPasswordRequirements(Password))
				throw new JsonWsException("Password does not meet requirements");

			UsersRow ? rowUser = UsersRepository.GetUserByEmail(Email);
			if (null == rowUser)
				throw new JsonWsException("That email is not recognized.");

			DateTime? dtInviteExpiration = rowUser.InvitationExpiration;
			if (null == dtInviteExpiration || dtInviteExpiration < DateTime.Now)
				throw new JsonWsException("Invite Expired");

			string ? strInviteCode = rowUser.InvitationCode;
			if (!StringUtil.EqualNoCase(strInviteCode, GUID))
				throw new JsonWsException("Invalid invitation code");

			string strHashed = Authorizations.HashPassword(Password);
			rowUser.Password = strHashed;
			rowUser.InvitationCode = null;
			rowUser.InvitationExpiration = null;
			UsersRepository.UpdateUser(rowUser);

			AuthorizationsRow rowAuthorization = Authorizations.GetAuthorization(Email, Password);
			
			return FinishAuthorization(rowAuthorization.AuthorizationToken, context);
		}

		static public void ResetPassword(string Email)
		{
			UsersRow ? rowUser = UsersRepository.GetUserByEmail(Email);

            Logs.DebugLog.WriteEvent("ResetPassword", rowUser.Email);   
			if (null != rowUser)
				Business.Users.SendPasswordReset(rowUser.UserID);
		}

        static public string SignInWithGoogle()
        {
            return GmailHelper.AuthorizeStart(Guid.NewGuid().ToString()).Result.RedirectUri;
        }

        public static LoginResultsDTO ExternalLogin(string Email, string Token, HttpContext? context)
        {
            UsersRow ? rowUser = UsersRepository.GetUserByEmail(Email);

            if (null == rowUser)
                throw new Authorizations.AuthorizationFailedException("AuthorizationFailed");

            if (!StringUtil.EqualNoCase(rowUser.DataObject.GetStringOrNull("ExternalToken"), Token))
                throw new Authorizations.AuthorizationFailedException("AuthorizationFailed");

            rowUser.DataObject["ExternalToken"] = null;
            UsersRepository.UpdateUserData(rowUser.UserID, rowUser.Data);

            AuthorizationsRow rowAuthorization = Authorizations.GetAndRefreshAuthorization(rowUser.UserID);
            
            return FinishAuthorization(rowAuthorization.AuthorizationToken, context);
        }

        static private LoginResultsDTO FinishAuthorization(string AuthorizationToken, HttpContext? context)
        {
            LoginResultsDTO dtoLoginResults = new LoginResultsDTO();
            
            try
            {

                AuthorizationsRow? rowAuthorization = Authorizations.GetAuthorizationByAuthorizationToken(AuthorizationToken);

                if (null == rowAuthorization)
                {
                    Logs.DebugLog.WriteEvent(AuthorizationToken, "AuthorizationToken not found");

                    dtoLoginResults.IsAuthorized = false;
                    dtoLoginResults.FailureReason = LoginResultsDTO.FailureReasons.InvalidAuthorizationToken;
                    return dtoLoginResults;
                }

                if (rowAuthorization.IsExpired || rowAuthorization.IsRevoked)
                {
                    Logs.DebugLog.WriteEvent(AuthorizationToken, "AuthorizationToken expired or revoked");

                    dtoLoginResults.IsAuthorized = false;
                    dtoLoginResults.FailureReason = LoginResultsDTO.FailureReasons.InvalidAuthorizationToken;
                    return dtoLoginResults;
                }

                if (!rowAuthorization.User.IsEnabled)
                {
                    Logs.DebugLog.WriteEvent(AuthorizationToken, "User is not enabled");

                    throw new Authorizations.AuthorizationFailedException("AuthorizationFailed");
                }

                dtoLoginResults.IsAuthorized = true;
                dtoLoginResults.FailureReason = LoginResultsDTO.FailureReasons.None;
                dtoLoginResults.OAuth = new OAuthDTO(rowAuthorization);

                dtoLoginResults.Roles = rowAuthorization.User?.UserRoleRoles?.Select(x => x.RoleName).ToList() ?? new List<string>();

				if (null != context)
				{
					CookieUtil.Write("OAuth", "AuthorizationToken", rowAuthorization.AuthorizationToken, context);
					SetupLogin(rowAuthorization.User, context);
				}

                rowAuthorization.User.LastLoginDate = DateTime.Now;
                rowAuthorization.User.HasLoggedIn = true;
                UsersRepository.UpdateUserData(rowAuthorization.User.UserID, rowAuthorization.User.Data);

                rowAuthorization.DataObject["IPAddress"] = GetUserIP(context);
                AuthorizationsRepository.UpdateAuthorizationData(rowAuthorization.AuthorizationID, rowAuthorization.Data);


            }
            catch (Authorizations.AuthorizationFailedException)
            {
                dtoLoginResults.IsAuthorized = false;
                dtoLoginResults.FailureReason = LoginResultsDTO.FailureReasons.InvalidUserOrPassword;
                return dtoLoginResults;
            }

            return dtoLoginResults;
        }


    }
}
