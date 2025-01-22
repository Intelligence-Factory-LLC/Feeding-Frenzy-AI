
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;
using System.Web;
using FeedingFrenzy.Admin.Business.API;
using Microsoft.AspNetCore.Http;
using FeedingFrenzy.Features;
using FeedingFrenzy.Admin.Business.Admin.API;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Users : JsonWs
    {
		private static HttpContext _httpContext => new HttpContextAccessor().HttpContext;
		static public int CreateAccount(string FirstName, string LastName, string Email, 
			string Phone, bool IsEnabled, bool IsLockedOut, bool IsSalesRepresentative, bool IsAdministrator)
		{
			if (UsersRepository.GetUserByEmail(Email) != null)
				throw new JsonWsException("Email already in use");

			UsersRow rowUser = new UsersRow();
			rowUser.Email = Email;
			rowUser.Phone = Phone;
			rowUser.FirstName = FirstName;
			rowUser.LastName = LastName;
			rowUser.IsEnabled = IsEnabled;
			rowUser.IsLockedOut = IsLockedOut;
			rowUser.Password = Authorizations.GeneratePassword();
			rowUser.IsInvited = false;
			rowUser.UserID = UsersRepository.InsertUser(rowUser);

			if (IsAdministrator)
				UserRoles.InsertUserRole(rowUser.UserID, RolesEnum.Administrator.RoleID, null);


            if (IsSalesRepresentative)
                UserRoles.InsertUserRole(rowUser.UserID, RolesEnum.SalesRepresentative.RoleID, null);

            return rowUser.UserID;
		}

		public static int InsertUser2(
            string Email,
            string Password,
            string Name, 
            string ? Phone
        )
        {
            if (!Authorizations.DoesMeetPasswordRequirements(Password))
                throw new JsonWsException("Password does not meet requirements");

            string strHashed = Authorizations.HashPassword(Password);

            try
            {
                UsersRow rowUser = new UsersRow();
                rowUser.Password = strHashed;
                rowUser.Email = Email;
                rowUser.Phone = Phone;
                rowUser.DataObject["Name"] = Name;
                rowUser.IsEnabled = true;

                int iUserID = UsersRepository.InsertUser(rowUser);

                return iUserID;
            }
            catch (RooTrax.Common.DB.InsertFailedException err)
            {
                throw new JsonWsException(err.Message, err);
            }
        }


        static public void SendInvite(int UserID)
		{
			UsersRow rowUser = Users.GetUser(UserID);

			string strCode = Guid.NewGuid().ToString();
			rowUser.InvitationExpiration = DateTime.Now.AddHours(24);
			rowUser.InvitationCode = strCode;

			UsersRepository.UpdateUser(rowUser);

			string strEmail = HttpUtility.UrlEncode(rowUser.Email);
			Console.WriteLine($"Set password by copying and paste the following path and parameters right after current running host: http://localhost:xxxx/createpw?Code={strCode}&Email={rowUser.Email}");
			EmailTemplates.SendEmailTemplateByName("Account Invite", new { InviteCode = strCode, Email = strEmail, Domain = OrganizationFeature.Feature.Domain }, rowUser.Email);
		}

        static public void SendVoiceAgentConfirmation(int UserID)
        {
            UsersRow rowUser = Users.GetUser(UserID);

            string strCode = Guid.NewGuid().ToString();
            rowUser.InvitationExpiration = DateTime.Now.AddHours(24);
            rowUser.InvitationCode = strCode;

            UsersRepository.UpdateUser(rowUser);

            string strEmail = HttpUtility.UrlEncode(rowUser.Email);
            EmailTemplates.SendEmailTemplateByName("Voice Agent Confirm Invite ", new { InviteCode = strCode, Email = strEmail, Domain = OrganizationFeature.Feature.Domain }, rowUser.Email);
        }



        static public void SendPasswordReset(int UserID)
		{
			UsersRow rowUser = Users.GetUser(UserID);

			string strCode = Guid.NewGuid().ToString();
			rowUser.InvitationExpiration = DateTime.Now.AddHours(24);
			rowUser.InvitationCode = strCode;

			UsersRepository.UpdateUser(rowUser);

			string strEmail = HttpUtility.UrlEncode(rowUser.Email);
			EmailTemplates.SendEmailTemplateByName("Password Reset", new { InviteCode = strCode, Email = strEmail, Domain = OrganizationFeature.Feature.Domain }, rowUser.Email);
		}


		static public void AgreeTermsAndConditions()
		{
			try
			{
                Buffaly.Data.ContentsRow content = Buffaly.Business.Contents.GetContentByContentName("TermsAndConditionsAgreement");

				int version = content.DataObject.GetIntOrDefault("Version", 1).Value;

                UsersRow user = UsersRepository.Get(new FeedingFrenzy.Admin.Business.API.UserState(_httpContext).UserID);
				user.DataObject["AgreesToTermsDate"] = DateTime.Now;
				user.DataObject["HasAgreedToTerms"] = true;
                user.DataObject["LastTermsAndConditionsVersion"] = version;

                UsersRepository.UpdateUserData(user.UserID,user.Data);
			}
			catch (Exception ex)
			{
				Logs.LogError(ex);
				throw new JsonWsException("Error on Agree Terms And Conditions");
			}
		}

		static public bool CheckAgreeTermsAndConditions()
		{
			try
			{
				UsersRow user = UsersRepository.Get(new FeedingFrenzy.Admin.Business.API.UserState(_httpContext).UserID);

				if (user == null)
				{
					throw new JsonWsException("Error on Check Agree Terms And Conditions");
				}

				bool showTermsAndConditions = false;

				Buffaly.Data.ContentsRow content = Buffaly.Business.Contents.GetContentByContentName("TermsAndConditionsAgreement");
				
				if (!user.DataObject.GetBooleanOrDefault("HasAgreedToTerms", false).Value)
				{
					showTermsAndConditions = true;
				}

                if (user.DataObject.GetIntOrDefault("LastTermsAndConditionsVersion", 0).Value < content.DataObject.GetIntOrDefault("Version",1).Value)
                {
                    showTermsAndConditions = true;
                }


                return showTermsAndConditions;
			}
			catch (Exception ex)
			{
				Logs.LogError(ex);
				throw new JsonWsException("Error on Agree Terms And Conditions");
			}
		}

		static public void UpdateUserInfo(string Email, string Phone, 
			string FirstName, string LastName,
			bool IsEnabled, bool IsLockedOut, bool IsSalesRepresentative, 
			bool IsAdministrator)
		{
			UsersRow? rowUser = UsersRepository.GetUserByEmail(Email);
			if (null == rowUser)
				throw new JsonWsException("That email is not recognized.");

			rowUser.Phone = Phone;
            rowUser.FirstName = FirstName;
            rowUser.LastName = LastName;
            rowUser.IsEnabled = IsEnabled;
            rowUser.IsLockedOut = IsLockedOut;

			if (IsAdministrator && !rowUser.IsAdministrator)
				UserRoles.InsertUserRole(rowUser.UserID, RolesEnum.Administrator.RoleID, null);

			if (IsSalesRepresentative && !rowUser.IsSalesRepresentative)
				UserRoles.InsertUserRole(rowUser.UserID, RolesEnum.SalesRepresentative.RoleID, null);

			if (!IsAdministrator && rowUser.IsAdministrator)
				UserRoles.RemoveUserRole(rowUser.UserRoles.First(x => x.RoleID  == RolesEnum.Administrator.RoleID).UserRoleID);

			if (!IsSalesRepresentative && rowUser.IsSalesRepresentative)
				UserRoles.RemoveUserRole(rowUser.UserRoles.First(x => x.RoleID == RolesEnum.SalesRepresentative.RoleID).UserRoleID);

            UsersRepository.UpdateUser(rowUser);
		}


		static public UserInvitationCodeDTO? GetInvitationCode(string Email)
		{
			UsersRow? rowUser = UsersRepository.GetUserByEmail(Email);

			if (rowUser == null)
				return null;

			string? InvitationCode = rowUser.InvitationCode;
			if (String.IsNullOrEmpty(InvitationCode))
			{
				Logs.DebugLog.WriteEvent("GetInvitationCode", $"Invitation Code is null or empty: {InvitationCode}");
				return null;

			}

			DateTime? ExpirationDate = rowUser.InvitationExpiration;
			if (ExpirationDate == null)
			{
				Logs.DebugLog.WriteEvent("GetInvitationCode", $"Invitation date is null: {ExpirationDate}");
				return null;
			}

			if (DateTime.Now > ExpirationDate)
			{
				Logs.DebugLog.WriteEvent("GetInvitationCode", $"Invitation date is expired: {ExpirationDate}");
				return null;
			}

			UserInvitationCodeDTO oUserInvitation = new UserInvitationCodeDTO
			{
				Email = HttpUtility.UrlEncode(rowUser.Email),
				Code = rowUser.InvitationCode!,
			};

			return oUserInvitation;
		}


		internal static void UpdateUser(
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
			UsersRepository.UpdateUser(
				UserID,
				IsEnabled,
				Data,
				Email,
				Phone,
				Password,
				HasLoggedIn,
				LastLoginDate,
				IsLockedOut,
				InvitationCode,
				InvitationExpiration,
				IsInvited,
				InvitedDate,
				FirstName,
				LastName);
		}
	}
}    
		