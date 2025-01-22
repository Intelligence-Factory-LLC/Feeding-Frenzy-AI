using BasicUtilities;
using FeedingFrenzy.Admin.Business;
using FeedingFrenzy.Data;
using FeedingFrenzy.TwilioAPI;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace FeedingFrenzy.Admin.Pages.tw
{
	[IgnoreAntiforgeryToken]
	public class call_startModel : BaseModel
    {
		private async Task<IActionResult> HandleRequest()
		{

			try
			{
				if (StringUtil.IsEmpty(GetStringOrNull("CallSid")))
				{
					Logs.DebugLog.WriteEvent("Twilio Call Empty Request", "");
					return new EmptyResult();
				}

				//Status=true&ApiVersion=2010-04-01&Called=&Join=false&CallStatus=ringing&
				//From=client%3Auser&Direction=inbound&AccountSid=ACaa408dac449068f05ef337e9e7399491&
				//ApplicationSid=AP56340eab49b5e3e8c8928b249b922aaf&LeadNoteID=14&Caller=client%3Auser&
				//Phone=4072837399&Record=false&Stream=false&CallSid=CA5a29a061f94483ed1562f39a1c635c1b&To=&
				//CallerID=16896001779

				//rpm.status=true&ApiVersion=2010-04-01&rpm.patient_id=11356&Called=&
				//rpm.LeadNoteID=null&CallStatus=ringing&From=client%3Auser&Direction=inbound&
				//rpm.PatientNoteID=266720&AccountSid=ACaa408dac449068f05ef337e9e7399491&
				//ApplicationSid=AP2c4ea4a472fbb3f4d3a1fe2ab3abbce5&rpm.phone=4232550972&
				//rpm.join=false&Caller=client%3Auser&rpm.record=true&
				//CallSid=CA06bee9f9ca10314f3655e880973c29e8&
				//To=&rpm.user_id=1909&rpm.id=18663363335


				//Logs.DebugLog.WriteEvent("Twilio Call Request", strBody);
				Logs.DebugLog.WriteEvent("Twilio Call Start Request", SerializeRequestQueryAndForm());

				string strCallSid = GetStringOrNull("CallSid") ?? throw new Exception("CallSid not provided");
				string strPhone = GetStringOrNull("Phone") ?? throw new Exception("Phone not provided");
				string strCallerID = GetStringOrNull("CallerID") ?? TwilioFeature.Feature.FromNumber;

				bool bRecord = GetBooleanOrFalse("Record");
				bool bJoin = GetBooleanOrFalse("Join");
				bool bStatus = GetBooleanOrFalse("Status");
				bool bStream = GetBooleanOrFalse("Stream");

				TwilioCalls.StartCallParams startCallParams = new TwilioCalls.StartCallParams
				{
					CallKey = strCallSid,
					Phone = strPhone,
					CallerID = strCallerID,
					Record = bRecord,
					Join = bJoin,
					Status = bStatus,
					Stream = bStream,
					LeadNoteID = GetIntegerOrNull("LeadNoteID")
				};

				string strResponse = TwilioCalls.StartCall(startCallParams);

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
