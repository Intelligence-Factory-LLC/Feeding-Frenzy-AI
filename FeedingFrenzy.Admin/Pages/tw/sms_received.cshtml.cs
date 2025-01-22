using BasicUtilities;
using FeedingFrenzy.Admin.Business;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Runtime.Intrinsics.Arm;
using WebAppUtilities;

namespace FeedingFrenzy.Admin.Pages.tw
{
    public class sms_receivedModel : BaseModel
    {
		private void HandleRequest()
		{
			string? strBody = GetStringOrNull("Body");

			try
			{
				Logs.DebugLog.WriteEvent("Twilio SMS Request", string.Format("Body: {1}", strBody));

				if (!StringUtil.IsEmpty(strBody))
				{
					string? strPhone = GetStringOrNull("From") ?? throw new Exception("SMS lacks From address");
					string? strReceived = GetStringOrNull("To") ?? throw new Exception("SMS lacks To address");

					Messages.InsertMessage(strBody!, strPhone, strReceived, null, true, true, false);
				}
				else
				{
					Logs.DebugLog.WriteEvent("Twilio Request", "Empty Body");
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
