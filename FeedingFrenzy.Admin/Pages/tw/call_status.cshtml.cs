using BasicUtilities;
using FeedingFrenzy.Admin.Business;
using FeedingFrenzy.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace FeedingFrenzy.Admin.Pages.tw
{
	[IgnoreAntiforgeryToken]
	public class call_statusModel : BaseModel
	{
		public async Task<IActionResult> OnPostAsync()
		{
			return await HandleRequest();
		}
		private async Task<IActionResult> HandleRequest()
		{
			
			try
			{
				if (null != GetIntegerOrNull("CallID"))
				{
					Logs.DebugLog.WriteEvent("Twilio Status Query", Request.QueryString.ToString());

					int iCallID = GetIntegerOrNull("CallID") ?? throw new Exception("CallID parameter is null");
					string strCallStatus = GetStringOrNull("CallStatus") ?? throw new Exception("CallStatus parameter is null");
					double? dDuration = GetDoubleOrNull("CallDuration");

					TwilioCalls.UpdateCallStatus(iCallID, strCallStatus, dDuration);

					// Clear the response and set the content type
					Response.Clear();
					Response.ContentType = "text/xml";
					Response.StatusCode = 204;
				}
				else
				{
					Logs.DebugLog.WriteEvent("Twilio Status Empty Request", "");
				}
			}
			catch (Exception err)
			{
				Logs.LogError(err);
			}

			// Return an empty result to end the response
			return new EmptyResult();
		}
	}
}
