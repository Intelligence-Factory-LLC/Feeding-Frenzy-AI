using BasicUtilities;
using FeedingFrenzy.Admin.Business;
using FeedingFrenzy.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Runtime.Intrinsics.Arm;

namespace FeedingFrenzy.Admin.Pages.tw
{
	[IgnoreAntiforgeryToken]
	public class call_recordModel : BaseModel
	{
		public async Task<IActionResult> OnGetAsync()
		{
			return await HandleRequest();
		}


		public async Task<IActionResult> OnPostAsync()
		{
			return await HandleRequest();
		}

		private async Task<IActionResult> HandleRequest()
		{

			try
			{
				Logs.DebugLog.WriteEvent("Twilio Record Request Query", Request.QueryString.ToString());
				
				if (null != GetIntegerOrNull("CallID"))
				{

					string strFile = GetStringOrNull("RecordingUrl") ?? throw new Exception("RecordingUrl parameter is null");
					int iCallID = GetIntegerOrNull("CallID") ?? throw new Exception("CallID parameter is null");
					double dDuration = GetDoubleOrNull("RecordingDuration") ?? 0.0;

					CallsRow rowCall = TwilioCalls.UpdateCallRecording(iCallID, strFile, dDuration);

					if (Settings.GetBoolOrDefault("AppSettings:CallRecordings.EnablePostProcessing", true) == true)
					{
#pragma warning disable CS4014 // Because this call is not awaited, execution of the current method continues before the call is completed
						Task.Run(async () =>
						{
							try
							{
								Logs.DebugLog.WriteEvent("PostProcessCall", iCallID.ToString());
								await CallRecordings.StoreLeadNoteInAWSAndRemoveFromTwilio(rowCall);

								//Remove this in the standalone version
								int? iLeadNoteID = rowCall.DataObject.GetIntOrNull("LeadNoteID");
								if (null != iLeadNoteID)
								{
									await LeadAutomation.PostProcessCall(rowCall.CallID, iLeadNoteID.Value, true);
								}
								else
								{
									await Calls.PostProcessCall(rowCall.CallID, true);
								}
							}
							catch (Exception err)
							{
								Logs.DebugLog.WriteEvent("PostProcessCall Error", err.Message);
								Logs.LogError(err);
							}
						});
#pragma warning restore CS4014 // Because this call is not awaited, execution of the current method continues before the call is completed
					}


					// Clear the response and set the content type
					Response.Clear();
					Response.ContentType = "text/xml";
					Response.StatusCode = 204;
				}
				else
				{
					Logs.DebugLog.WriteEvent("Twilio Record Empty Request", "");
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
