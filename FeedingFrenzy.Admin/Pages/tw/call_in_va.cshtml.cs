using BasicUtilities;
using FeedingFrenzy.Admin.Business;
using FeedingFrenzy.Data;
using FeedingFrenzy.TwilioAPI;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace FeedingFrenzy.Admin.Pages.tw
{
	[IgnoreAntiforgeryToken]
	public class call_inModelVa : BaseModel
	{
		private async Task<IActionResult> HandleRequest()
		{

			try
			{
				if (StringUtil.IsEmpty(GetStringOrNull("CallSid")))
				{
					Logs.DebugLog.WriteEvent("Twilio Call In Empty Request", "");
					return new EmptyResult();
				}

				//AccountSid = ACaa408dac449068f05ef337e9e7399491 & ApiVersion = 2010 - 04 - 01 & CallSid = CA06bdd951c31b83493bea2e86576ff1fd &
				//CallStatus = ringing & Called =% 2B13523501050 & CalledCity = LADY + LAKE & CalledCountry = US & CalledState = FL &
				//CalledZip = 32162 & Caller =% 2B14804140506 & CallerCity = PHOENIX & CallerCountry = US & CallerState = AZ & CallerZip = 85003 &
				//Direction = inbound & From =% 2B14804140506 & FromCity = PHOENIX & FromCountry = US & FromState = AZ & FromZip = 85003 &
				//To =% 2B13523501050 & ToCity = LADY + LAKE & ToCountry = US & ToState = FL & ToZip = 32162


				Logs.DebugLog.WriteEvent("Twilio Voice Agent Request Query", this.SerializeRequestQueryAndForm());

				string strCallSid = GetStringOrNull("CallSid") ?? throw new Exception("CallSid not provided");
				string strPhone = GetStringOrNull("Called") ?? string.Empty;
				string strCallerID = GetStringOrNull("Caller") ?? throw new Exception("Phone not provided");
				string strCalledPhone = GetStringOrNull("To") ?? string.Empty;

				Logs.DebugLog.WriteEvent("Voice Agent Recording Number", strCalledPhone);

				TwilioCalls.StartCallParams startCallParams = new TwilioCalls.StartCallParams
				{
					CallKey = strCallSid,
					Phone = strPhone,
					CallerID = strCallerID,
					CalledPhone = strCalledPhone,
					Record = true,
					Status = true
				};

				string strResponse = TwilioCalls.StartIncomingVoiceAgent(startCallParams);

				// Clear the response and set the content type
				Response.Clear();
				Response.ContentType = "application/xml";

				// Write the XML response
				await Response.WriteAsync(strResponse);

			}
			catch (Exception err)
			{
				throw Logs.LogError(err);
			}

			// Return an empty result to end the response
			return new EmptyResult();
		}

		public async Task<IActionResult> OnPostAsync()
		{
			return await HandleRequest();
		}
	}
}
