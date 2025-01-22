
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;
using BasicUtilities.Collections;
using System.Text.RegularExpressions;
using FeedingFrenzy.Admin.Business.Common;
using Google.Apis.Gmail.v1.Data;
using System.Globalization;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class RawEmails : JsonWs
    {
		public static int? InsertRawEmailIfNew2(RawEmailsRow rowRawEmail)
		{
			return InsertRawEmailIfNew(rowRawEmail.To,
								rowRawEmail.From,
							rowRawEmail.Subject,
							rowRawEmail.BodyText,
							rowRawEmail.BodyHtml,
							rowRawEmail.Label,
							rowRawEmail.ImportKey,
							rowRawEmail.Data,
							rowRawEmail.UserID,
							rowRawEmail.EmailDate,
							rowRawEmail.ThreadID
							);
		}

		public static int? InsertRawSentEmailIfNew2(RawEmailsRow rowRawEmail)
		{
			return InsertRawSentEmailIfNew(rowRawEmail.To,
										rowRawEmail.From,
										rowRawEmail.Subject,
										rowRawEmail.BodyText,
										rowRawEmail.BodyHtml,
										rowRawEmail.Label,
										rowRawEmail.ImportKey,
										rowRawEmail.Data,
										rowRawEmail.UserID,
										rowRawEmail.EmailDate,
										rowRawEmail.ThreadID
										);
		}

		public static int? InsertRawEmailIfNew(
			string ? To,
			string ? From,
			string ? Subject,
			string ? BodyText,
			string ? BodyHtml,
			string ? Label,
			string ImportKey,
			string ? Data,
			int ? UserID,
			DateTime EmailDate,
			string ThreadID
			)
		{
			try
			{
				RawEmailsRow ? rowRawEmail = RawEmailsRepository.GetRawEmailByImportKey(ImportKey);
				if (null == rowRawEmail)
				{
					//UsersRow rowUser = UsersRepository.Get(UserID);
					//SalesRepresentativesRow ? rowSalesRepresentative = rowUser.SalesRepresentative;

					//List<int> lstLeads = GetClosestLeadsByEmail(From, rowSalesRepresentative);

					//int? iLeadID = null;
					//if (lstLeads.Count == 0)
					//	lstLeads = GetClosestLeadsByEmail(To, rowSalesRepresentative);

					//if (lstLeads.Count > 0)
					//	iLeadID = lstLeads.First();

					//if (null != iLeadID)
					//{
					//	jsonObject["LeadID"] = iLeadID;
					//	Data = jsonObject.ToJSON();
					//}

					int iRawEmailID = RawEmailsRepository.InsertRawEmail(
						To,
						From,
						Subject,
						BodyText,
						BodyHtml,
						false,
						Label,
						Data,
						UserID,
						ImportKey,
						EmailDate,
						ThreadID
					);

					rowRawEmail = RawEmailsRepository.Get(iRawEmailID);
					InsertRawEmailAddresses(rowRawEmail);



					//if (rowRawEmail.IsInternalOnly)
					//{
					//	Logs.DebugLog.WriteEvent("RawEmails.InsertRawEmailIfNew", $"Ignoring internal email To: {rowRawEmail.To}, From: {rowRawEmail.From}");
					//}
					//else
					//{
					//	try
					//	{
					//		//For certain testing accounts this can be a huge list
					//		foreach (int i in lstLeads.Take(10))
					//		{
					//			int iLeadNoteID = LeadNotes.InsertEmailAsNote(i, rowSalesRepresentative?.SalesRepresentativeID ?? 7, Subject, iRawEmailID);

					//			if (i == iLeadID && null != rowSalesRepresentative)
					//			{
					//				LeadNotesRow rowLeadNote = LeadNotesRepository.Get(iLeadNoteID);
					//				LeadsRow rowLead = LeadsRepository.Get(iLeadID.Value);
					//				rowLeadNote.EnableLazyLoadProperties = false;
					//				rowLead.EnableLazyLoadProperties = false;

					//				Messaging.Messages.SendMessage(rowSalesRepresentative.Email, new Messaging.Messages.Message
					//				{
					//					MessageType = "LeadSentEmail",
					//					To = rowSalesRepresentative.Email,
					//					Payload = new
					//					{
					//						LeadID = rowLead.LeadID,
					//						Lead = rowLead,
					//						LeadNote = rowLeadNote
					//					}
					//				});
					//			}
					//		}
					//	}
					//	catch (Exception err)
					//	{
					//		Logs.LogError(err);
					//	}
					//}


					if (IsBouncedEmail(rowRawEmail))
					{
						Set<string> lstEmails = ExtractEmailAddresses(rowRawEmail.BodyText + rowRawEmail.BodyHtml);
						lstEmails.Remove(rowRawEmail.To);

						SalesRepresentativesDataTable dtSalesRepresentatives = SalesRepresentativesRepository.GetAll();

						foreach (string strBouncedEmail in lstEmails)
						{
							if (dtSalesRepresentatives.Any(x => StringUtil.EqualNoCase(x.Email, strBouncedEmail)))
								continue;

							BlockedEmailsRepository.InsertBlockedEmail(strBouncedEmail, "From raw email", JsonUtil.ToString(new { RawEmailID = rowRawEmail.RawEmailID }).ToString());
						}

						RawEmailsRepository.MarkRawEmailAsProcessed(rowRawEmail.RawEmailID);
					}


					return iRawEmailID;
				}
			}
			catch (RooTrax.Common.DB.InsertFailedException)
			{
				//Ignore the error as these sometimes run concurrently 
			}

			return null;
		}

		public static int? InsertRawSentEmailIfNew(
			string? To,
			string? From,
			string? Subject,
			string? BodyText,
			string? BodyHtml,
			string? Label,
			string ImportKey,
			string? Data,
			int? UserID,
			DateTime EmailDate,
			string ThreadID
	)
		{
			try
			{
				RawEmailsRow ? rowRawEmail = RawEmailsRepository.GetRawEmailByImportKey(ImportKey);
				if (null == rowRawEmail)
				{
					//UsersRow rowUser = UsersRepository.Get(UserID);
					//SalesRepresentativesRow rowSalesRepresentative = SalesRepresentativesRepository.GetSalesRepresentativeByEmail(rowUser.Email);

					//List<int> lstLeads = GetClosestLeadsByEmail(To, rowSalesRepresentative);
					//int? iLeadID = lstLeads.FirstOrDefault();

					//if (null != iLeadID)
					//{
					//	jsonObject["LeadID"] = iLeadID;
					//	Data = jsonObject.ToJSON();
					//}


					int iRawEmailID = RawEmailsRepository.InsertRawEmail(
						To,
						From,
						Subject,
						BodyText,
						BodyHtml,
						false,
						Label,
						Data,
						UserID,
						ImportKey,
						EmailDate,
						ThreadID
					);

					//foreach (int i in lstLeads)
					//{
					//	LeadNotes.InsertEmailAsNote(i, rowSalesRepresentative?.SalesRepresentativeID ?? 7, Subject, iRawEmailID);
					//}

					rowRawEmail = RawEmailsRepository.Get(iRawEmailID);
					InsertRawEmailAddresses(rowRawEmail);

					return iRawEmailID;
				}
			}
			catch (RooTrax.Common.DB.InsertFailedException)
			{
				//Ignore on duplicate
			}

			return null;
		}


		static public void InsertRawEmailAddresses(RawEmailsRow rowRawEmail)
		{
			List<string> lstTo = cleanEmail2(rowRawEmail.To);
			List<string> lstFrom = cleanEmail2(rowRawEmail.From);

			RawEmailAddressesDataTable dtAddresses = RawEmailAddressesRepository.GetRawEmailAddressesByRawEmailID(rowRawEmail.RawEmailID);

			foreach (string strTo in lstTo)
			{
				EmailAddressesRow rowEmailAddress = EmailAddresses.GetOrInsertEmailAddress(strTo);

				if (dtAddresses.Any(x => x.EmailAddressID == rowEmailAddress.EmailAddressID && x.IsFrom == false))
					continue;

				RawEmailAddressesRepository.InsertRawEmailAddress(rowRawEmail.RawEmailID, false, null, rowEmailAddress.EmailAddressID, rowEmailAddress.DomainID);
			}

			foreach (string strFrom in lstFrom)
			{
				EmailAddressesRow rowEmailAddress = EmailAddresses.GetOrInsertEmailAddress(strFrom);
				if (dtAddresses.Any(x => x.EmailAddressID == rowEmailAddress.EmailAddressID && x.IsFrom == true))
					continue;

				RawEmailAddressesRepository.InsertRawEmailAddress(rowRawEmail.RawEmailID, true, null, rowEmailAddress.EmailAddressID, rowEmailAddress.DomainID);
			}
		}


		static public List<string> cleanEmail2(string sEmail)
		{
			if (null == sEmail)
				return new List<string>();

			string[] sEmails = StringUtil.Split(sEmail, ",");
			List<string> lstEmails = new List<string>();


			for (int i = 0; i < sEmails.Length; i++)
			{
				string strEmail = sEmails[i];
				strEmail = strEmail.Trim();

				if (StringUtil.InString(strEmail, "<"))
					strEmail = StringUtil.Between(strEmail, "<", ">");

				if (StringUtil.InString(strEmail, ">"))
					strEmail = StringUtil.LeftOfFirst(strEmail, ">");

				if (!StringUtil.IsEmpty(strEmail) && strEmail.Contains("@") &&
					!lstEmails.Any(x => StringUtil.EqualNoCase(x, strEmail)))
					lstEmails.Add(strEmail);
			}

			return lstEmails;
		}

		private static bool IsCommonEmailDomain(string strDomain)
		{
			string[] strDomains =
			{
	"gmail.com",
	"yahoo.com",
	"hotmail.com",
	"outlook.com",
	"medekhealth.com",
	"google.com",
	"yahoo.co.uk",
	"aol.com",
	"icloud.com",
	"mail.com",
	"live.com",
	"msn.com",
	"comcast.net",
	"me.com",
	"att.net",
	"verizon.net",
	"mac.com",
	"cox.net",
	"bellsouth.net",
	"charter.net",
	"earthlink.net",
	"optonline.net",
	"sbcglobal.net",
	"rocketmail.com",
	"ymail.com",
	"gmx.com",
	"protonmail.com",
	"zoho.com",
	"yandex.com",
	"rediffmail.com",
	"mail.ru",
	"inbox.com",
	"lycos.com",
	"aim.com",
	"fastmail.com",
	"hushmail.com",
	"shortmail.com",
	"tutanota.com",
	"mailfence.com",
	"posteo.net",
	"runbox.com",
	"mailbox.org"
};
			return strDomains.Any(x => StringUtil.EqualNoCase(x, strDomain));
		}
		private static bool IsBouncedEmail(RawEmailsRow rowRawEmail)
		{
			string[] strSubjects = {
				"Delivery Status Notification (Failure)",
				"Undeliverable:",
				"Undeliverable mail:"};

			foreach (string strSubject in strSubjects)
			{
				if (StringUtil.InString(rowRawEmail.Subject, strSubject))
					return true;
			}

			return false;
		}

		private static Set<string> ExtractEmailAddresses(string input)
		{
			Set<string> emails = new Set<string>();
			Regex regex = new Regex(@"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b");
			MatchCollection matches = regex.Matches(input);
			foreach (Match match in matches)
			{
				emails.Add(match.Value);
			}
			return emails;
		}

		static public async Task DownloadEmailsFromDBAuth()
		{
			UsersDataTable dtUsers = UsersRepository.GetAll();

			foreach (UsersRow rowUser in dtUsers)
			{
				try
				{
					await DownloadEmailsByUser(rowUser);
				}
				catch (Exception err)
				{
					Logs.DebugLog.WriteEvent("Failed to download emails for user", rowUser.Email);

					Logs.LogError(err);
				}
			}

		}

		public static async Task DownloadEmailsByUser(UsersRow rowUser)
		{
			if (rowUser.Email.Contains("+"))
				return;

			if (rowUser.DataObject.GetStringOrNull("GAuthResult") == null)
				return;

			GmailHelper.GAuthResult gAuthResult = JsonUtil.ConvertTo<Common.GmailHelper.GAuthResult>(rowUser.DataObject.GetStringOrNull("GAuthResult"));

			if (gAuthResult.ExpirationDate < DateTime.Now)
				return;

			Logs.DebugLog.WriteEvent("Downloading emails for user", rowUser.Email);

			await RawEmails.DownloadingQueue2(rowUser.UserID, gAuthResult.CredentialPath, gAuthResult.UserKey);
		}

		static public async Task<bool> DownloadingQueue2(int iUserID, string strCredentialPath, string strUserKey)
		{
			Logs.DebugLog.WriteEvent("DownloadingQueue", $"Checking messages for user {iUserID}");


			RawEmailsRow ? rowRawEmail = RawEmailsRepository.GetMostRecentByUserID(iUserID);
			string ? strLastMessageID = rowRawEmail?.ImportKey;

			await foreach (var message in GmailHelper.GetNewMessageList(strCredentialPath, strUserKey, strLastMessageID))
			{
				Logs.DebugLog.WriteEvent(message.Id, string.Join(",", message.LabelIds) + " " + message.Snippet);
				ProcessMessage(iUserID, message);
			}

			return true;
		}

		static private void ProcessMessage(int iUserID, Google.Apis.Gmail.v1.Data.Message msg)
		{
			bool bSent = msg.LabelIds.Any(x => StringUtil.EqualNoCase(x, "SENT"));


			try
			{
				RawEmailsRow rowRawEmail = new RawEmailsRow();
				rowRawEmail.ImportKey = msg.Id;
				rowRawEmail.UserID = iUserID;

				rowRawEmail.DataObject["Received"] = parseDate(getHeader(msg.Payload.Headers, "Date"))?.ToString("u");
				rowRawEmail.DataObject["ThreadID"] = msg.ThreadId;
				rowRawEmail.DataObject["MessageID"] = getHeader(msg.Payload.Headers, "Message-ID");
				rowRawEmail.DataObject["Snippet"] = getSnippet(msg);

				rowRawEmail.To = cleanEmail(getHeader(msg.Payload.Headers, "To"));
				rowRawEmail.From = cleanEmail(getHeader(msg.Payload.Headers, "Reply-to"));
				rowRawEmail.Subject = getHeader(msg.Payload.Headers, "Subject");
				rowRawEmail.BodyText = getTextBody(msg);
				rowRawEmail.BodyHtml = getBody(msg);

				if (StringUtil.IsEmpty(rowRawEmail.From))
					rowRawEmail.From = cleanEmail(getHeader(msg.Payload.Headers, "From"));

				rowRawEmail.Label = "Unknown";

				if (StringUtil.IsEmpty(rowRawEmail.To))
				{
					Logs.DebugLog.WriteEvent("DownloadingQueue.ProcessMessage", $"Could not parse To for message {msg.Id}");
					return;
				}

				if (bSent)
				{
					RawEmails.InsertRawSentEmailIfNew2(rowRawEmail);
				}
				else
				{
					RawEmails.InsertRawEmailIfNew2(rowRawEmail);
				}
			}
			catch (Exception err)
			{
				Logs.DebugLog.WriteEvent("DownloadingQueue.ProcessMessage", $"Error processing message {msg.Id}: {err.Message}");
				Logs.LogError(err);
			}

		}

		/////////////////////ProcessMessage Helpers/////////////////////////
		///
		///

		static public string cleanEmail(string sEmail)
		{
			return string.Join(",", cleanEmail2(sEmail));
		}
		static private string getHeader(IList<MessagePartHeader> headers, string sName)
		{
			var header = headers.FirstOrDefault(x => StringUtil.EqualNoCase(x.Name, sName));

			if (header != null)
				return header.Value;

			return null;
		}


		static private string getTextPart(IList<MessagePart> parts)
		{
			if (null != parts)
			{
				foreach (var part in parts)
				{
					if (part.Parts == null || part.Parts.Count == 0)
					{
						if (part.MimeType == "text/plain")
							return part.Body.Data;
					}
					else
						return getTextPart(part.Parts);
				}
			}

			return "";
		}

		static private string getHTMLPart(IList<MessagePart> parts)
		{
			if (null != parts)
			{
				foreach (var part in parts)
				{
					if (part.Parts == null || part.Parts.Count == 0)
					{
						if (part.MimeType == "text/html")
							return part.Body.Data;
					}
					else
						return getHTMLPart(part.Parts);
				}
			}

			return "";
		}

		private static string DecodeBase64(string encodedBody)
		{
			if (StringUtil.IsEmpty(encodedBody))
				return "";

			// Replace '-' with '+', '_' with '/', and remove spaces
			encodedBody = Regex.Replace(encodedBody, "-", "+").Replace("_", "/").Replace(@"\s", string.Empty);

			// Decode Base64
			byte[] data = Convert.FromBase64String(encodedBody);
			string decodedString = Encoding.UTF8.GetString(data);

			// Decode URI components
			return Uri.UnescapeDataString(decodedString);
		}
		static private string getTextBody(Google.Apis.Gmail.v1.Data.Message msg)
		{
			string encodedBody = getTextPart(msg.Payload.Parts);

			if (StringUtil.IsEmpty(encodedBody))
				return "";


			return DecodeBase64(encodedBody);
		}


		static private string getBody(Google.Apis.Gmail.v1.Data.Message msg)
		{
			string encodedBody = "";

			if (msg.Payload.Parts == null || msg.Payload.Parts.Count == 0)
				encodedBody = msg.Payload.Body.Data;
			else
			{
				encodedBody = getHTMLPart(msg.Payload.Parts);

				if (StringUtil.IsEmpty(encodedBody))
					encodedBody = getTextPart(msg.Payload.Parts);
			}

			return DecodeBase64(encodedBody);
		}

		static private string getSnippet(Google.Apis.Gmail.v1.Data.Message msg)
		{
			return msg.Snippet;
		}

		static private DateTime? parseDate(string sDate)
		{
			if (DateTime.TryParse(sDate, out DateTime parsedDate))
			{
				DateTime utcDate = parsedDate.ToUniversalTime();
				return utcDate;
			}
			else if (DateTime.TryParseExact(StringUtil.LeftOfLast(sDate, " "), "ddd, d MMM yyyy HH:mm:ss zzz", CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime parsedDate2))
			{
				DateTime utcDate = parsedDate2.ToUniversalTime();
				return utcDate;
			}
			else
			{
				Logs.DebugLog.WriteEvent("ProcessMessage", $"Could not parse date for message {sDate}");
				return null;
			}
		}
	}
}    
		