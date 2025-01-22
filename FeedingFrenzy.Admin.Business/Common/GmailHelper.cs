using BasicUtilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Auth.OAuth2.Flows;
using Google.Apis.Auth.OAuth2.Web;
using Google.Apis.Oauth2.v2;
using Google.Apis.Gmail.v1;
using Google.Apis.Gmail.v1.Data;
using Google.Apis.Services;
using Google.Apis.Util.Store;


namespace FeedingFrenzy.Admin.Business.Common
{
    public class GmailHelper
    {
        private readonly GmailService _service;

        public GmailHelper(GmailService service)
        {
            _service = service;
        }

        private static string[] Scopes = { GmailService.Scope.GmailModify, Oauth2Service.Scope.UserinfoEmail };
        private static readonly string ApplicationName = "Google mail";
        private static readonly string ClientId = Settings.GetStringOrDefault("AppSettings:GmailHelper.ClientId", null) ?? throw new Exception("GmailHelper.ClientId is not set");
        private static readonly string ClientSecret = Settings.GetStringOrDefault("AppSettings:GmailHelper.ClientSecret", null) ?? throw new Exception("GmailHelper.ClientSecret is not set");
        private static readonly string redirectUri = Settings.GetStringOrDefault("AppSettings:GmailHelper.RedirectUri", null) ?? throw new Exception("GmailHelper.RedirectUri is not set");
        private static readonly string rootBasePath = Settings.GetStringOrDefault("AppSettings:GmailHelper.BasePath", null) ?? throw new Exception("GmailHelper.BasePath is not set");

        public static async Task<AuthorizationCodeWebApp.AuthResult> AuthorizeStart(int UserID)
        {
            string CredentialPath = $"{rootBasePath}{UserID}_token.json";
            string sUserKey = $"user_{UserID}";

            var secrets = new ClientSecrets
            {
                ClientId = ClientId,
                ClientSecret = ClientSecret
            };

            var flow = new GoogleAuthorizationCodeFlow(new GoogleAuthorizationCodeFlow.Initializer
            {
                ClientSecrets = secrets,
                Scopes = Scopes,
                DataStore = new FileDataStore(CredentialPath, true),
                Prompt = "consent"
            });

            var authResult =
                await new AuthorizationCodeWebApp(flow, redirectUri, "").AuthorizeAsync(sUserKey, CancellationToken.None);

            if (authResult.Credential != null)
            {
                if (authResult.Credential.Token == null || authResult.Credential.Token.IsStale)
                {
                    Logs.DebugLog.WriteEvent("GmailHelper.AuthorizeStart", "Token is null or expired. Refreshing token.");

                    var tokenResponse = await flow.RefreshTokenAsync(sUserKey, authResult.Credential.Token?.RefreshToken, CancellationToken.None);

                    authResult.Credential.Token = tokenResponse;

                    Logs.DebugLog.WriteEvent("GmailHelper.AuthorizeStart", tokenResponse.RefreshToken);
                }
            }

            return authResult;
        }

        public static async Task<AuthorizationCodeWebApp.AuthResult> AuthorizeStart(string UserID)
        {
            string CredentialPath = $"{rootBasePath}{UserID}_token.json";
            string sUserKey = $"user_{UserID}";

            var secrets = new ClientSecrets
            {
                ClientId = ClientId,
                ClientSecret = ClientSecret
            };

            var flow = new GoogleAuthorizationCodeFlow(new GoogleAuthorizationCodeFlow.Initializer
            {
                ClientSecrets = secrets,
                Scopes = Scopes,
                DataStore = new FileDataStore(CredentialPath, true),
                Prompt = "consent",
            });


            var authResult =
                await new AuthorizationCodeWebApp(flow, redirectUri, UserID + "|").AuthorizeAsync(sUserKey, CancellationToken.None);

            if (authResult.Credential != null)
            {
                if (authResult.Credential.Token == null || authResult.Credential.Token.IsStale)
                {
                    Logs.DebugLog.WriteEvent("GmailHelper.AuthorizeStart", "Token is null or expired. Refreshing token.");

                    var tokenResponse = await flow.RefreshTokenAsync(sUserKey, authResult.Credential.Token?.RefreshToken, CancellationToken.None);

                    authResult.Credential.Token = tokenResponse;

                    Logs.DebugLog.WriteEvent("GmailHelper.AuthorizeStart", tokenResponse.RefreshToken);
                }
            }

            return authResult;
        }
        public static async Task<UserCredential> AuthorizeFinish(int UserID, string strToken)
        {
            string CredentialPath = $"{rootBasePath}{UserID}_token.json";
            string sUserKey = $"user_{UserID}";

            var secrets = new ClientSecrets
            {
                ClientId = ClientId,
                ClientSecret = ClientSecret
            };

            var flow = new GoogleAuthorizationCodeFlow(new GoogleAuthorizationCodeFlow.Initializer
            {
                ClientSecrets = secrets,
                Scopes = Scopes,
                DataStore = new FileDataStore(CredentialPath, true),
                Prompt = "consent"
            });

            Logs.DebugLog.WriteEvent("GmailHelper.AuthorizeFinish", $"UserID:{UserID} Token:{strToken}");

            var token = await flow.ExchangeCodeForTokenAsync(sUserKey, strToken, redirectUri, CancellationToken.None);

            return new UserCredential(flow, sUserKey, token);

        }

        public class GAuthResult
        {
            public string Email;
            public string UserKey;
            public string CredentialPath;
            public DateTime ExpirationDate;
        }
        public static async Task<GAuthResult> AuthorizeFinish(string UserID, string strToken)
        {

            string strCredentialPath = $"{rootBasePath}{UserID}_token.json";
            string strUserKey = $"user_{UserID}";

            var secrets = new ClientSecrets
            {
                ClientId = ClientId,
                ClientSecret = ClientSecret
            };

            var flow = new GoogleAuthorizationCodeFlow(new GoogleAuthorizationCodeFlow.Initializer
            {
                ClientSecrets = secrets,
                Scopes = Scopes,
                DataStore = new FileDataStore(strCredentialPath, true),
                Prompt = "consent"
            });

            Logs.DebugLog.WriteEvent("GmailHelper.AuthorizeFinish", $"UserID:{UserID} Token:{strToken}");

            var token = await flow.ExchangeCodeForTokenAsync(strUserKey, strToken, redirectUri, CancellationToken.None);

            var credential = new UserCredential(flow, strUserKey, token);

            var userInfoService = new Google.Apis.Oauth2.v2.Oauth2Service(new BaseClientService.Initializer
            {
                HttpClientInitializer = credential,
                ApplicationName = ApplicationName
            });

            var userInfo = await userInfoService.Userinfo.Get().ExecuteAsync();

            Console.WriteLine("Authenticated user email: " + userInfo.Email);

            GAuthResult result = new GAuthResult();
            result.Email = userInfo.Email;
            result.UserKey = strUserKey;
            result.CredentialPath = strCredentialPath;
            result.ExpirationDate = DateTime.UtcNow.AddSeconds(token.ExpiresInSeconds.Value);


            return result;
        }
        public async Task<List<Google.Apis.Gmail.v1.Data.Message>> GetEmailsAsync(string userId = "me", string query = "", int maxResults = 100)
        {

            var emailListRequest = _service.Users.Messages.List(userId);
            emailListRequest.Q = query; // Search query, e.g., "is:unread"
            emailListRequest.MaxResults = maxResults;

            // Fetch the list of email messages
            var emailListResponse = await emailListRequest.ExecuteAsync();

            List<Google.Apis.Gmail.v1.Data.Message> messages = new List<Google.Apis.Gmail.v1.Data.Message>();
            if (emailListResponse.Messages != null && emailListResponse.Messages.Count > 0)
            {
                foreach (var email in emailListResponse.Messages)
                {
                    var emailInfoRequest = _service.Users.Messages.Get(userId, email.Id);
                    var emailInfoResponse = await emailInfoRequest.ExecuteAsync();
                    messages.Add(emailInfoResponse);
                }
            }

            return messages;
        }

        public static async Task<List<Google.Apis.Gmail.v1.Data.Message>> GetMessages(int UserID)
        {

            string CredentialPath = $"{rootBasePath}{UserID}_token.json";
            string sUserKey = $"user_{UserID}";

            var secrets = new ClientSecrets
            {
                ClientId = ClientId,
                ClientSecret = ClientSecret
            };

            var flow = new GoogleAuthorizationCodeFlow(new GoogleAuthorizationCodeFlow.Initializer
            {
                ClientSecrets = secrets,
                Scopes = Scopes,
                DataStore = new FileDataStore(CredentialPath, true),
                Prompt = "consent"
            });


            var authResult =
                await new AuthorizationCodeWebApp(flow, redirectUri, "").AuthorizeAsync(sUserKey, CancellationToken.None);

            var service = new GmailService(new BaseClientService.Initializer()
            {
                HttpClientInitializer = authResult.Credential,
                ApplicationName = "Gmail API Sample"
            });


            var gmailHelper = new GmailHelper(service);
            List<Google.Apis.Gmail.v1.Data.Message> emails = await gmailHelper.GetEmailsAsync();

            // Display email details
            foreach (var email in emails)
            {
                Logs.DebugLog.WriteEvent("GetMessages", $"Email ID: {email.Id}");
                Logs.DebugLog.WriteEvent("GetMessages", $"Email Thread ID: {email.ThreadId}");
                Logs.DebugLog.WriteEvent("GetMessages", $"Snippet: {email.Snippet}");
                Logs.DebugLog.WriteEvent("GetMessages", new string('-', 50));
            }

            return emails;
        }

        //public static async Task<List<Message>> GetNewMessageList(int UserID, string strLastMessageID)
        //{
        //    string CredentialPath = $"{rootBasePath}{UserID}_token.json";
        //    string sUserKey = $"user_{UserID}";

        //    return await GetNewMessageList(CredentialPath, sUserKey, strLastMessageID);
        //}

        public static async IAsyncEnumerable<Message> GetNewMessageList(string strCredentialPath, string strUserKey, string ? strLastMessageID)
        {
            GmailService service = await GetGmailService(strCredentialPath, strUserKey);

            if (null == service)
            {
				yield break;
            }

            var gmailHelper = new GmailHelper(service);
            ListMessagesResponse listMessagesResponse = await gmailHelper.GetMyEmailListAsync(100, null, null);
            List<Message> queue = new List<Message>();

            bool bLastMessageFound = false;

            while (!bLastMessageFound && listMessagesResponse.Messages?.Count > 0)
            {
                foreach (var email in listMessagesResponse.Messages)
                {
                    if (email.Id == strLastMessageID)
                    {
                        bLastMessageFound = true;
                        break;
                    }

                    queue.Add(email);
                }

                if (bLastMessageFound || queue.Count > 10000)
                    break;

				string strLastPageToken = listMessagesResponse.NextPageToken;
                listMessagesResponse = await gmailHelper.GetMyEmailListAsync(100, listMessagesResponse.NextPageToken, null);

				if (null == listMessagesResponse.NextPageToken || strLastPageToken == listMessagesResponse.NextPageToken)
					break; //we've reached the end
            }

            queue.Reverse();

            List<Message> lstMessages = new List<Message>();

            foreach (var message in queue)
            {
                var emailInfoRequest = service.Users.Messages.Get("me", message.Id);
                var emailInfoResponse = await emailInfoRequest.ExecuteAsync();

				yield return emailInfoResponse;
            }

			yield break;
		}

        private static async Task<GmailService> GetGmailService(string strCredentialPath, string strUserKey)
        {
            var secrets = new ClientSecrets
            {
                ClientId = ClientId,
                ClientSecret = ClientSecret
            };

            var flow = new GoogleAuthorizationCodeFlow(new GoogleAuthorizationCodeFlow.Initializer
            {
                ClientSecrets = secrets,
                Scopes = Scopes,
                DataStore = new FileDataStore(strCredentialPath, true),
                Prompt = "consent"
            });

            var authResult = await new AuthorizationCodeWebApp(flow, redirectUri, "").AuthorizeAsync(strUserKey, CancellationToken.None);

            if (!StringUtil.IsEmpty(authResult.RedirectUri))
                return null;

            var service = new GmailService(new BaseClientService.Initializer()
            {
                HttpClientInitializer = authResult.Credential,
                ApplicationName = "Gmail API Sample"
            });

            return service;
        }

        public static async Task<List<Message>> GetOldMessageList(string strCredentialPath, string strUserKey, DateTime dtBeforeDate, int iMax)
        {
            GmailService service = await GetGmailService(strCredentialPath, strUserKey);

            if (null == service)
            {
                return null;
            }

            string strSearch = "before:" + dtBeforeDate.ToString("d");

            var gmailHelper = new GmailHelper(service);
            ListMessagesResponse listMessagesResponse = await gmailHelper.GetMyEmailListAsync(100, null, strSearch);
            List<Message> queue = new List<Message>();

            bool bLastMessageFound = false;

            while (!bLastMessageFound && listMessagesResponse.Messages?.Count > 0)
            {
                foreach (var email in listMessagesResponse.Messages)
                {
                    queue.Add(email);

                    if (queue.Count >= iMax)
                        break;
                }

                if (bLastMessageFound || queue.Count >= iMax)
                    break;

                listMessagesResponse = await gmailHelper.GetMyEmailListAsync(100, listMessagesResponse.NextPageToken, strSearch);
            }

            List<Message> lstMessages = new List<Message>();
            foreach (var message in queue)
            {
                var emailInfoRequest = service.Users.Messages.Get("me", message.Id);
                var emailInfoResponse = await emailInfoRequest.ExecuteAsync();
                lstMessages.Add(emailInfoResponse);
            }

            return lstMessages;
        }

        public async Task<ListMessagesResponse> GetMyEmailListAsync(int maxResults, string strPageToken, string strSearch)
        {
            var emailListRequest = _service.Users.Messages.List("me");
            emailListRequest.MaxResults = maxResults;
            emailListRequest.Q = "label:inbox OR label:sent";
            if (!StringUtil.IsEmpty(strSearch))
            {
                emailListRequest.Q += " and " + strSearch;
            }

            if (!StringUtil.IsEmpty(strPageToken))
            {
                emailListRequest.PageToken = strPageToken;
            }

            // Fetch the list of email messages
            var emailListResponse = await emailListRequest.ExecuteAsync();

            return emailListResponse;
        }


    }
}
