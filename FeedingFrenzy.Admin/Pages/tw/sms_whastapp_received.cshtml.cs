using BasicUtilities;
using FeedingFrenzy.Admin.Business;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Runtime.Intrinsics.Arm;
using WebAppUtilities;

namespace FeedingFrenzy.Admin.Pages.tw
{
    public class sms_whastapp_receivedModel : BaseModel
    {
		private void HandleRequest()
		{
			string? strBody = GetStringOrNull("Body");

			try
			{
				if (!StringUtil.IsEmpty(strBody))
				{
                    Logs.DebugLog.WriteEvent("Twilio whastapp Request", string.Format("Body: {1}", strBody));

                    string? strPhone = GetStringOrNull("From") ?? throw new Exception("SMS whastapp lacks From address");
					string? strReceived = GetStringOrNull("To") ?? throw new Exception("SMS whastapp lacks To address");

                    JsonObject data = new JsonObject();
                    data["IsWhatsApp"] = new JsonValue("true", false);
                    Messages.InsertMessage(strBody!, strPhone, strReceived, data.ToString(), true, true, false);
				}
				else
				{
					Logs.DebugLog.WriteEvent("Twilio whastapp Request", "Empty Body");
				}
			}
			catch (JsonWsException)
			{
				//Don't log these
			}
			catch (Exception err)
			{
				Logs.LogError(err);
			}
		}

        public void OnGet()
        {
			HandleRequest();
		}

		public void OnPost()
		{
			HandleRequest();
		}
	}
}
