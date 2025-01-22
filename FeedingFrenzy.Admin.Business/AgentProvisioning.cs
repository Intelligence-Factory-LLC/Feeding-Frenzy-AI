using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAppUtilities;
using BasicUtilities;
using Buffaly.Business;
using Buffaly.Data;
using FeedingFrenzy.Admin.Business.Common;


namespace FeedingFrenzy.Admin.Business
{
    public class AgentProvisioning
    {
        public static int InsertUser(string strEmail, string strPassword, string strFullName, string strPhoneNumber)
        {
            if (UsersRepository.GetUserByEmail(strEmail) != null)
                throw new JsonWsException("Email already in use");

            int iUserID = Buffaly.Business.Users.InsertUser2(strEmail, strPassword);

            UsersRow rowUser = Buffaly.Business.Users.GetUser(iUserID);
            rowUser.DataObject["FullName"] = strFullName;
            rowUser.Phone = strPhoneNumber;

            UsersRepository.UpdateUser(rowUser);

            return iUserID;
        }

        public static void AddCustomer(int iUserID)
        {
            Buffaly.Business.UserRoles.InsertUserRole(iUserID, RolesEnum.Customer.RoleID, null);
        }
        public static void CreateApplication(int iUserID)
        {
            //TODO: The application is created the name with the userid by default. This should be changed to a more user-friendly name.
            Applications.InsertApplication($"{iUserID} Feeding Frenzy", $"if.feedingfrenzy.ai/{iUserID}", "Feeding Frenzy", null, iUserID);

        }

        public static bool ProvisionStore(int iApplicationID, string strHandle)
        {
            bool bSuccess = false;
            try
            {
                string strExe = Settings.GetString("Buffaly.FeedingFrenzy.Provisioning.Cmd");

                string strWorkingDirectory = StringUtil.LeftOfLast(strExe, "\\");

                string strResult = ConsoleUtil.RunWithResult(strExe, $"-provisionstore {strHandle} {iApplicationID}", strWorkingDirectory);

                Logs.DebugLog.WriteEvent("Buffaly.FeedingFrenzy.Provisioning.Cmd", strResult);

            }
            catch (Exception)
            {
                throw;
            }

            return bSuccess;
        }
        public static bool ProvisionSchema(string strHandle, string strSection)
        {
            bool bSuccess = false;
            try
            {
                string strExe = Settings.GetString("Buffaly.FeedingFrenzy.Provisioning.Cmd");

                string strWorkingDirectory = StringUtil.LeftOfLast(strExe, "\\");

                string strResult = ConsoleUtil.RunWithResult(strExe, $"-provisionschema {strHandle} {strSection}", strWorkingDirectory);

                Logs.DebugLog.WriteEvent("Buffaly.FeedingFrenzy.Provisioning.Cmd", strResult);

            }
            catch (Exception)
            {
                throw;
            }

            return bSuccess;
        }
        public static bool ProvisionDatabase(string strHandle, string strSection)
        {
            bool bSuccess = false;
            try
            {
                string strExe = Settings.GetString("Buffaly.FeedingFrenzy.Provisioning.Cmd");

                string strWorkingDirectory = StringUtil.LeftOfLast(strExe, "\\");

                string strResult = ConsoleUtil.RunWithResult(strExe, $"-provisiondatabase {strHandle} {strSection}", strWorkingDirectory);

                Logs.DebugLog.WriteEvent("Buffaly.FeedingFrenzy.Provisioning.Cmd", strResult);

            }
            catch (Exception)
            {
                throw;
            }

            return bSuccess;
        }

        public static bool ProvisionSite(string strHandle, string strSection)
        {
            bool bSuccess = false;
            try
            {
                string strExe = Settings.GetString("Buffaly.FeedingFrenzy.Provisioning.Cmd");

                string strWorkingDirectory = StringUtil.LeftOfLast(strExe, "\\");

                string strResult = ConsoleUtil.RunWithResult(strExe, $"-provisionsite {strHandle} {strSection}", strWorkingDirectory);

                Logs.DebugLog.WriteEvent("Buffaly.FeedingFrenzy.Provisioning.Cmd", strResult);

            }
            catch (Exception)
            {
                throw;
            }

            return bSuccess;
        }

        public static bool ProvisionCustomerPortal(string strHandle, string strSection)
        {
            bool bSuccess = false;
            try
            {
                string strExe = Settings.GetString("Buffaly.FeedingFrenzy.Provisioning.Cmd");

                string strWorkingDirectory = StringUtil.LeftOfLast(strExe, "\\");

                string strResult = ConsoleUtil.RunWithResult(strExe, $"-provisioncustomerportal {strHandle} {strSection}", strWorkingDirectory);

                Logs.DebugLog.WriteEvent("Buffaly.FeedingFrenzy.Provisioning.Cmd", strResult);

            }
            catch (Exception)
            {
                throw;
            }

            return bSuccess;
        }   

    }
}
