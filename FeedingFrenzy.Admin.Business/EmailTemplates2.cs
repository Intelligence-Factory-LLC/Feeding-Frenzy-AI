
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;
using FeedingFrenzy.TwilioAPI;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class EmailTemplates : JsonWs
    {
		public static string GetRenderedEmailAsHTML(int EmailTemplateID, object Params)
		{
			EmailTemplatesRow ? rowEmailTemplate = EmailTemplates.GetEmailTemplate(EmailTemplateID);

			if (null == rowEmailTemplate)
				throw new Exception("Email Template " + EmailTemplateID + " not found");

			return GetRenderedEmailAsHTML(rowEmailTemplate, Params);
		}

		private static string GetRenderedEmailAsHTML(EmailTemplatesRow rowEmailTemplate, object Params)
		{
			JsonObject jsonParams;
			try
			{
				jsonParams = new JsonValue(Params).ToJsonObject() ?? throw new Exception("Invalid JSON"); //Removed FromSafeString because it was causing problems passing an array from a JsonWs
			}
			catch (JsonSyntaxException)
			{
				throw new Exception("Email Template " + rowEmailTemplate.Name + " Params is incorrect JSON");
			}

			return GetRenderedEmailAsHTML2(rowEmailTemplate, jsonParams);
		}

		private static string GetRenderedEmailAsHTML2(EmailTemplatesRow rowEmailTemplate, JsonObject jsonParams)
		{
			JsonArray jsonTemplateParams = new JsonArray(rowEmailTemplate.EmailParams);
			string strHtml = string.Empty;
			string strEmailText = rowEmailTemplate.EmailText?.Replace("&lt;%", "<%").Replace("%&gt;", "%>") ?? string.Empty;
			strEmailText = strEmailText.Replace("[", "<%").Replace("]", "%>");

			jsonParams["EmailText"] = new JsonValue(strEmailText, false);

			foreach (JsonValue ? oVal in jsonTemplateParams)
			{
				if (null == oVal)
					throw new Exception("Null value in Email Template Params");

				if (!jsonParams.ContainsKey(oVal.ToString()))
					throw new JsonWsException("Email template requires parameter: " + oVal.ToString());
			}

			for (int i = 0; i < jsonTemplateParams.Count; i++)
			{
				if (StringUtil.InString(jsonTemplateParams[i]?.ToString(), "Param"))
				{
					Logs.DebugLog.WriteEvent("Possible Email Template Parameter Problem", "Parameter #" + i + " has name " + jsonTemplateParams[i]?.ToString() + " which may interfere with AutomaticEmailCreator", DebugLog.debug_level_t.MINIMAL);
				}
			}

			string strCreator = "EmailTemplatesAdmin.AutomaticEmailCreatorEx";

			List<object> lstParams = new List<object>();
			lstParams.Add(jsonParams);
			lstParams.Add(strEmailText);
						
			strHtml = RooTraxState.kScriptControl.EvaluateFunctionNObjects(strCreator, lstParams);



			return strHtml;
		}

		private static string GetRenderedSubjectAsText(EmailTemplatesRow rowEmailTemplate, object Params)
		{
			JsonObject jsonParams;
			try
			{
				jsonParams = new JsonValue(Params).ToJsonObject() ?? throw new Exception("Invalid JSON");
			}
			catch (JsonSyntaxException)
			{
				throw new Exception("Email Template " + rowEmailTemplate.Name + " Params is incorrect JSON");
			}

			return GetRenderedSubjectAsText2(rowEmailTemplate, jsonParams);
		}

		private static string GetRenderedSubjectAsText2(EmailTemplatesRow rowEmailTemplate, JsonObject jsonParams)
		{
			JsonArray jsonTemplateParams = new JsonArray(rowEmailTemplate.EmailParams);
			string strHtml = string.Empty;
			string strEmailText = rowEmailTemplate.EmailSubject.Replace("&lt;%", "<%").Replace("%&gt;", "%>");
			strEmailText = strEmailText.Replace("[", "<%").Replace("]", "%>");

			jsonParams["EmailText"] = new JsonValue(strEmailText, false);

			foreach (JsonValue ? oVal in jsonTemplateParams)
			{
				if (null == oVal)
					throw new Exception("Null value in Email Template Params");

				if (!jsonParams.ContainsKey(oVal.ToString()))
					throw new JsonWsException("Email template requires parameter: " + oVal.ToString());
			}

			string strCreator = "EmailTemplatesAdmin.AutomaticEmailCreatorEx";

			List<object> lstParams = new List<object>();
			lstParams.Add(jsonParams);
			lstParams.Add(strEmailText);

			strHtml = RooTraxState.kScriptControl.EvaluateFunctionNObjects(strCreator, lstParams);

			return strHtml;
		}

		public static string GetEmailParamsAsJson(int EmailTemplateID)
		{
			return EmailTemplates.GetEmailTemplate(EmailTemplateID).EmailParams;
		}

		public static void SendEmailTemplateByName(string EmailTemplate, object Params, string To)
		{
			try
			{
				EmailTemplatesRow ? rowEmailTemplate = EmailTemplatesRepository.GetEmailTemplateByName(EmailTemplate);

				if (null != rowEmailTemplate)
					SendEmailTemplate(rowEmailTemplate, Params, To);
			}
			catch (Exception err)
			{
				Logs.LogError(err);
			}
		}

		public static void SendSMSTemplateByName(string EmailTemplate, object Params, string To)
		{
			try
			{
				EmailTemplatesRow ? rowEmailTemplate = EmailTemplatesRepository.GetEmailTemplateByName(EmailTemplate);

				if (null != rowEmailTemplate)
					SendSMSTemplate(rowEmailTemplate, Params, To);

			}
			catch (Exception err)
			{
				Logs.LogError(err);
			}
		}

		public static void SendEmailTemplate(int EmailTemplateID, object Params, string To)
		{
			EmailTemplatesRow ? rowEmailTemplate = EmailTemplates.GetEmailTemplate(EmailTemplateID);

			SendEmailTemplate(rowEmailTemplate, Params, To);
		}

		private static void SendEmailTemplate(EmailTemplatesRow rowEmailTemplate, object Params, string To)
		{
			if (StringUtil.IsEmpty(To))
			{
				Logs.DebugLog.WriteEvent("Skipping Email, Blank Address", rowEmailTemplate.Name);
			}
			else if (null == rowEmailTemplate.FromAddress)
			{
				throw new Exception("Null From Address in Email Template: " + rowEmailTemplate.Name);
			}
			else
			{
				string strHtml = GetRenderedEmailAsHTML(rowEmailTemplate, Params);
				string strSubject = rowEmailTemplate.EmailSubject.Contains("%") ? GetRenderedSubjectAsText(rowEmailTemplate, Params) : rowEmailTemplate.EmailSubject;

				Emails.SendEmail(rowEmailTemplate.EmailTemplateID, rowEmailTemplate.FromAddress,
					To, strSubject, strHtml);
			}
		}
	
		private static void SendSMSTemplate(EmailTemplatesRow rowEmailTemplate, object Params, string To)
		{
			if (StringUtil.IsEmpty(To))
			{
				Logs.DebugLog.WriteEvent("Skipping SMS, Blank Address", rowEmailTemplate.Name);
			}
			else
			{
				string strHtml = GetRenderedEmailAsHTML(rowEmailTemplate, Params);
				string strSubject = rowEmailTemplate.EmailSubject.Contains("%") ? GetRenderedSubjectAsText(rowEmailTemplate, Params) : rowEmailTemplate.EmailSubject;

				string[] strTos = To.Split(new char[] { ';', ',' });

				foreach (string strTo in strTos)
				{
					TwilioHelper.SendSMSViaTwilio(strTo, strHtml);
				}
			}
		}

	}
}    
		