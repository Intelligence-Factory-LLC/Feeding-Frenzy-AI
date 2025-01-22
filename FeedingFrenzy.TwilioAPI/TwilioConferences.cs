using BasicUtilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Twilio.Rest.Api.V2010.Account;
using Twilio;
using Twilio.Rest.Api.V2010.Account.Conference;
using WebAppUtilities;
using Twilio.Rest.Lookups.V1;
using Twilio.Types;
using Twilio.Clients;

using System.IO;

namespace FeedingFrenzy.TwilioAPI
{
	public class TwilioConferences
	{
		static private void Initialize()
		{
			string twilioAccountSid = TwilioFeature.Feature.AccountSID;
			string strToken = TwilioFeature.Feature.AuthToken;

			ServicePointManager.SecurityProtocol |= SecurityProtocolType.Tls12;


			TwilioClient.Init(twilioAccountSid, strToken);
		}

		static public string StartConferenceFromCall(string strFriendlyName, string CallSID, string strKey)
		{
			Initialize(); 

			string sParentSID = CallSID;

			var res = CallResource.Read(parentCallSid: sParentSID);
			string ? sChildID = res.FirstOrDefault()?.Sid;

			if (StringUtil.IsEmpty(sChildID))
				throw new JsonWsException("Could not find call resource: " + CallSID);

			string strRecordingUrl = TwilioFeature.Feature.RecordingHandler;

			string strRecord = string.Format("record=\"record-from-start\" recordingStatusCallback=\"{2}?{1}={0}&amp;c=1\" recordingStatusCallbackMethod=\"POST\" recordingStatusCallbackEvent=\"completed\" ", strFriendlyName, strKey, strRecordingUrl);

			try
			{
				var res2 = CallResource.Update(pathSid: sChildID,
		twiml: new Twilio.Types.Twiml($"<Response><Dial><Conference participantLabel=\"customer\" {strRecord}>{strFriendlyName}</Conference></Dial></Response>"));

				var res3 = CallResource.Update(pathSid: sParentSID,
					twiml: new Twilio.Types.Twiml($"<Response><Dial><Conference>{strFriendlyName}</Conference></Dial></Response>"));
			}
			catch (Exception err)
			{
				if (err.Message.Contains("Call is not in-progress"))
					throw new JsonWsException("Cannot start conference before the call is connected");

				throw new JsonWsException("Cannot start conference");
			}

			return strFriendlyName;
		}

		static public ConferenceResource? GetActiveConference(string strFriendlyName)
		{
			Initialize();

			var res = ConferenceResource.Read(friendlyName: strFriendlyName, status: ConferenceResource.StatusEnum.InProgress);

			return res.FirstOrDefault();
		}
		static public bool IsConferenceInProgress(string strFriendlyName)
		{
			return null != GetActiveConference(strFriendlyName); 
		}

		static public ParticipantResource AddParticipant(string strConferenceName, string strCallerID, string strPhone)
		{
			Initialize();

			var statusCallbackEvent = new List<string> { "ringing" };

			ParticipantResource? participant;
			try
			{
				participant = GetParticipant(strConferenceName, strPhone);
				if (null != participant)
				{
					ParticipantResource.Delete(pathConferenceSid: participant.ConferenceSid, pathCallSid: participant.CallSid);
				}			
				}
			catch
			{

			}

			try
			{
				participant = ParticipantResource.Create(
					label: strPhone,
					earlyMedia: true,
					beep: "onEnter",
					statusCallbackEvent: statusCallbackEvent,
					record: true,
					from: new Twilio.Types.PhoneNumber(strCallerID),
					to: new Twilio.Types.PhoneNumber(strPhone),
					timeout: 20,
					pathConferenceSid: strConferenceName
				);
			}
			catch (Exception err)
			{
				Logs.LogError(err);
				throw new JsonWsException(err.Message);
			}


			return participant;
		}

		static public void PlaceParticipantOnHold(string strConferenceName, string strParticipantLabel, bool Hold)
		{
			ParticipantResource? participant = TwilioConferences.GetParticipant(strConferenceName, strParticipantLabel);

			if (null != participant && participant.Hold != Hold)
			{
				TwilioConferences.HoldParticipant(strConferenceName, strParticipantLabel, Hold);
			}
		}

		static public string GetParticipantStatus(string strConferenceName, string strParticipant)
		{
			ParticipantResource ? participant = TwilioConferences.GetParticipant(strConferenceName, strParticipant);
			return (null == participant ? "null" : participant.Status.ToString());
		}

		static private ParticipantResource ? GetParticipant(string strConferenceName, string strParticipantLabel)
		{
			Initialize();
			ConferenceResource? conference = GetActiveConference(strConferenceName);
			ParticipantResource ? participant = null;

			if (null != conference)
			{
				participant = ParticipantResource.Fetch(
					 pathConferenceSid: conference.Sid,
					 pathCallSid: strParticipantLabel
				 );
			}

			return participant;
		}
		static public void MuteParticipant(string strConferenceName, string strParticipantLabel, bool Mute)
		{
			Initialize();
			ConferenceResource? conference = GetActiveConference(strConferenceName);

			if (null != conference)
			{
				var participant = ParticipantResource.Update(
					 muted: Mute,
					 pathConferenceSid: conference.Sid,
					 pathCallSid: strParticipantLabel
				 );
			}
		}
		static public void HoldParticipant(string strConferenceName, string strParticipantLabel, bool Hold)
		{
			Initialize();
			ConferenceResource? conference = GetActiveConference(strConferenceName);

			if (null != conference)
			{
				var participant = ParticipantResource.Update(
					 hold: Hold,
					 pathConferenceSid: conference.Sid,
					 pathCallSid: strParticipantLabel
				 );
			}
		}
	}
}
