using FeedingFrenzy.Features;
using FeedingFrenzy.TwilioAPI;

namespace FeedingFrenzy.Admin.Business
{
    public class Provisioning
    {

        public static void AddAdministrator(string strEmail)
        {
            Logs.DebugLog.WriteEvent("Provisioning.AddAdministrator", "Email: " + strEmail);

            int iUserID = Users.InsertUser2(strEmail, Authorizations.GeneratePassword(), strEmail, null);

            UserRoles.InsertUserRole(iUserID, FeedingFrenzy.Data.RolesEnum.Administrator.RoleID, null);

            //Add sales rep role by default for admin when provisioning
            UserRoles.InsertUserRole(iUserID, FeedingFrenzy.Data.RolesEnum.SalesRepresentative.RoleID, null);

            Users.SendInvite(iUserID);
        }

        public static void AddVoiceAgentAdministrator(string strEmail, string Password)
        {
            Logs.DebugLog.WriteEvent("Provisioning.AddVoiceAgentAdministrator", "Email: " + strEmail);

            int iUserID = Users.InsertUser2(strEmail, Password, strEmail, null);

            UserRoles.InsertUserRole(iUserID, FeedingFrenzy.Data.RolesEnum.Administrator.RoleID, null);

            Users.SendVoiceAgentConfirmation(iUserID);
        }

        public static void SetupFeatures(string strOrganizationName, string strHandle)
        {
            Logs.DebugLog.WriteEvent("Provisioning.SetupFeatures", "OrganizationName: " + strOrganizationName + " Handle: " + strHandle);
            SetupOrganizationFeature(strOrganizationName, strHandle);
            SetupTwilioFeature(strHandle);
        }

        private static void SetupOrganizationFeature(string strOrganizationName, string strHandle)
        {
            OrganizationFeature.Feature.OrganizationName = strOrganizationName;
            OrganizationFeature.Feature.Handle = strHandle;
            OrganizationFeature.Feature.Domain = strHandle + ".feedingfrenzy.ai";

            OrganizationFeature.SetFeature(OrganizationFeature.Feature);
        }

        private static void SetupTwilioFeature(string strHandle)
        {
            TwilioFeature.Feature.CallStatusHandler = $"https://{strHandle}.feedingfrenzy.ai/tw/call_status";
            TwilioFeature.Feature.RecordingHandler = $"https://{strHandle}.feedingfrenzy.ai/tw/call_record";
            TwilioFeature.Feature.CallStreamHandler = $"wss://{strHandle}.feedingfrenzy.ai/audiostream";

            TwilioFeature.SetFeature(TwilioFeature.Feature);
        }
    }
}
