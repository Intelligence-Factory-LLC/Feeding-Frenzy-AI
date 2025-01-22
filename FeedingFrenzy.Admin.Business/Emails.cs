using BasicUtilities;
using FeedingFrenzy.Data;
using FeedingFrenzy.Features;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Text;
using System.Threading.Tasks;

namespace FeedingFrenzy.Admin.Business
{
	internal class Emails
	{
		public static int SendEmailPrepare(int EmailTemplateID, string From, string To, string Subject, string EmailText)
		{
			return SendEmailAdapter.SendEmailPrepare(From, To, Subject, EmailText, EmailTemplateID);
		}

		public static void SendEmailCommit(int EmailHistoryID)
		{
			SendEmailAdapter.SendEmailCommit(EmailHistoryID);
		}

		public static int SendEmail(int EmailTemplateID, string From, string To, string Subject, string EmailText)
		{
			BlockedEmailsRow ? rowBlockedEmail = BlockedEmailsRepository.GetBlockedEmailByEmail(To);
			if (null != rowBlockedEmail)
			{
				Logs.DebugLog.WriteEvent("Blocked Email", To);
				return 0;
			}

			return SendEmailAdapter.SendEmail(From, To, Subject, EmailText, EmailTemplateID);
		}

		public static int SendEmail(int EmailTemplateID, string From, string To, string Subject, string EmailText, string Attachment)
		{
			BlockedEmailsRow ? rowBlockedEmail = BlockedEmailsRepository.GetBlockedEmailByEmail(To);
			if (null != rowBlockedEmail)
			{
				Logs.DebugLog.WriteEvent("Blocked Email", To);
				return 0;
			}

			return SendEmailAdapter.SendEmail(From, To, Subject, EmailText, EmailTemplateID, Attachment);
		}
		public static void MarkEmailAsSent(int EmailHistoryID)
		{
			EmailHistoriesRepository.MarkEmailHistoryAsSent(EmailHistoryID);
		}


		class SendEmailAdapter
		{
			public static int SendEmail(String EmailFrom, String EmailTo, String Subject, String Body, int EmailTemplateID)
			{
				int iEmailHistoryID = SendEmailPrepare(EmailFrom, EmailTo, Subject, Body, EmailTemplateID);
				SendEmailCommit(iEmailHistoryID);
				return iEmailHistoryID;
			}

			public static int SendEmail(String EmailFrom, String EmailTo, String Subject, String Body, int EmailTemplateID, string strAttachment)
			{
				int iEmailHistoryID = SendEmailPrepare(EmailFrom, EmailTo, Subject, Body, EmailTemplateID);
				SendEmailCommit(iEmailHistoryID, strAttachment);
				return iEmailHistoryID;
			}

			public static int SendEmailPrepare(String EmailFrom, String EmailTo, String Subject, String Body, int EmailTemplateID)
			{
				int iEmailHistoryID = 0;

				try
				{
					iEmailHistoryID = EmailHistoriesRepository.InsertEmailHistory(EmailTo, EmailFrom, EmailTemplateID, Subject, Body, true, false, null);
				}
				catch (Exception ex)
				{
					throw Logs.LogError(ex);
				}
				finally
				{

				}

				return iEmailHistoryID;
			}

			public static bool SendEmailCommit(int EmailHistoryID)
			{
				MailMessage oMail;
				bool bResult = false;

				try
				{
                    if (EmailFeature.Feature.SendWithCredentials)
                        return SendEmailCommitWithCredentials(EmailHistoryID);

                    EmailHistoriesRow oEmailHistoryRow = EmailHistoriesRepository.Get(EmailHistoryID);

					oMail = new MailMessage();
					oMail.From = new MailAddress(oEmailHistoryRow.From);

					string[] strTos = oEmailHistoryRow.To.Split(new char[] { ';', ',' });

					foreach (string strTo in strTos)
					{
						oMail.To.Add(new MailAddress(strTo));
					}

					oMail.Subject = oEmailHistoryRow.Subject;
					oMail.IsBodyHtml = true;
					oMail.Body = oEmailHistoryRow.Email;

					SmtpClient client = new SmtpClient();
					client.Send(oMail);

					EmailHistoriesRepository.MarkEmailHistoryAsSent(EmailHistoryID);

					bResult = true;
				}
				catch (Exception ex)
				{
					throw Logs.LogError(ex);
				}

				return bResult;
			}

            public static bool SendEmailCommitWithCredentials(int EmailHistoryID)
            {

				EmailFeature feature = EmailFeature.Feature;

                System.Net.ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
                MailMessage mailMessage = null;
                bool bResult = false;
                Logs.DebugLog.WriteEvent("SendWithCredentials init", String.Empty);
                try
                {
                    EmailHistoriesRow oEmailHistoryRow = EmailHistoriesRepository.Get(EmailHistoryID);

					SmtpClient smtpClient = new SmtpClient(feature.MailServer)
                    {
                        Port = feature.MailPort,
                        Credentials = new NetworkCredential(feature.UserName, feature.Password),
                        EnableSsl = feature.EnableSsl,
                    };

                    mailMessage = new MailMessage
                    {
                        From = new MailAddress(oEmailHistoryRow.From, feature.SenderName),
                        Subject = oEmailHistoryRow.Subject,
                        Body = oEmailHistoryRow.Email,
                        IsBodyHtml = true,
                    };

                    string[] strTos = oEmailHistoryRow.To.Split(new char[] { ';', ',' });

                    foreach (string s in strTos)
                    {
                        mailMessage.To.Add(new MailAddress(s));
                    }

                    smtpClient.Send(mailMessage);

                    bResult = true;
                    Logs.DebugLog.WriteEvent("SendWithCredentials complete", String.Empty);

                    EmailHistoriesRepository.MarkEmailHistoryAsSent(EmailHistoryID);
                }
                catch (Exception ex)
                {
                    bResult = false;

                    throw Logs.LogError(ex);
                }
                finally
                {
                    mailMessage = null;
                }

                return bResult;
            }

            public static bool SendEmailCommit(int EmailHistoryID, string strAttachment)
			{
				MailMessage oMail = new MailMessage();
				bool bResult = false;

				try
				{
					EmailHistoriesRow oEmailHistoryRow = EmailHistoriesRepository.Get(EmailHistoryID);
					oMail.From = new MailAddress(oEmailHistoryRow.From);

					string[] strTos = oEmailHistoryRow.To.Split(new char[] { ';', ',' });

					foreach (string strTo in strTos)
					{
						oMail.To.Add(new MailAddress(strTo));
					}

					oMail.Subject = oEmailHistoryRow.Subject;
					oMail.IsBodyHtml = true;
					oMail.Body = oEmailHistoryRow.Email;

					if (!StringUtil.IsEmpty(strAttachment))
					{
						// Create  the file attachment for this email message.
						using (Attachment data = new Attachment(strAttachment, MediaTypeNames.Application.Octet))
						{
							// Add time stamp information for the file.
							ContentDisposition ? disposition = data.ContentDisposition;
							if (null != disposition)
							{
								disposition.CreationDate = System.IO.File.GetCreationTime(strAttachment);
								disposition.ModificationDate = System.IO.File.GetLastWriteTime(strAttachment);
								disposition.ReadDate = System.IO.File.GetLastAccessTime(strAttachment);
								// Add the file attachment to this email message.
								oMail.Attachments.Add(data);
							}

							SmtpClient client = new SmtpClient();
							client.Send(oMail);
						}
					}
					else
					{
						SmtpClient client = new SmtpClient();
						client.Send(oMail);
					}

					EmailHistoriesRepository.MarkEmailHistoryAsSent(EmailHistoryID);

					bResult = true;
				}
				catch (Exception ex)
				{
					bResult = false;

					throw Logs.LogError(ex);
				}
				finally
				{
					oMail.Dispose(); //unlock the file
					oMail = null;
				}

				return bResult;
			}
		}

	}
}
