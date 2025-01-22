
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;
using FeedingFrenzy.TwilioAPI;
using Twilio.TwiML.Voice;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class TwilioCalls
    {
		static public void AddParticipant(int CallID, string strCallerID, string strPhoneNumber)
		{
			TwilioConferences.AddParticipant(CallID.ToString(), strCallerID, strPhoneNumber);
		}

		static public void ConferenceCall(int CallID)
		{
			CallsRow rowCall = CallsRepository.Get(CallID);

			string strConferenceLabel = TwilioConferences.StartConferenceFromCall(rowCall.CallID.ToString(), rowCall.CallKey, "CallID");

			rowCall.DataObject["TwilioConferenceSID"] = strConferenceLabel;
			rowCall.IsConference = true;
			
			CallsRepository.UpdateCall(rowCall);
		}
		static public string GetParticipantStatus(int CallID, string strParticipant)
		{
			return TwilioConferences.GetParticipantStatus(CallID.ToString(), strParticipant);
		}

		static public bool IsCheckConferenceInProgress(int CallID)
		{
			CallsRow rowCall = CallsRepository.Get(CallID);

			string? strConferenceLabel = rowCall.DataObject.GetStringOrNull("TwilioConferenceSID");
			if (StringUtil.IsEmpty(strConferenceLabel))
				return false;

			if (TwilioConferences.IsConferenceInProgress(strConferenceLabel!))
				return true;

			rowCall.DataObject.Remove("TwilioConferenceSID");
			CallsRepository.UpdateCallData(rowCall);

			return false;
		}

		static public void PlaceParticipantOnHold(int CallID, string strParticipant, bool Hold)
		{
			TwilioConferences.PlaceParticipantOnHold(CallID.ToString(), strParticipant, Hold);

		}

		public class StartCallParams
		{
			public string CallKey;
			public string Phone;
			public string CallerID;
			public string CalledPhone;
			public bool Record;
			public bool Join;
			public bool Status;
			public bool Stream;
			public int ? LeadNoteID;
		}
		static public string StartCall(StartCallParams oParams)
		{
			Logs.DebugLog.WriteEvent("Twilio.StartCall", JsonUtil.ToString(oParams).ToString());
			CallsRow rowCall = new CallsRow();
			rowCall.CallKey = oParams.CallKey;
			rowCall.CalledPhone = oParams.Phone;
			rowCall.CallingPhone = oParams.CallerID;
			rowCall.CallStatus = null;
			rowCall.Duration = 0.0;
			rowCall.IsConference = oParams.Join;
			rowCall.IsRecorded = oParams.Record;
			rowCall.IsStreamed = oParams.Stream;
			rowCall.IsIncoming = false;
			rowCall.IsEmptyTranscription = false;
			rowCall.IsTranscribed = false;

			if (null != oParams.LeadNoteID)
			{
				rowCall.LeadNoteID = oParams.LeadNoteID;
			}

			rowCall.CallID = CallsRepository.InsertCall(rowCall);

			string strRecordingHandler = TwilioFeature.Feature.RecordingHandler;
			string strRecord = string.Format("record=\"record-from-answer-dual\" recordingStatusCallback=\"{0}?CallID={1}\" recordingStatusCallbackMethod=\"POST\" recordingStatusCallbackEvent=\"completed\" recordingTrack=\"both\" ", strRecordingHandler, rowCall.CallID);

			string strResponse = String.Empty;

			if (oParams.Status)
			{
				string strStatusHandler = TwilioFeature.Feature.CallStatusHandler;
				oParams.Phone = string.Format("<Number statusCallbackEvent=\"initiated ringing answered completed\" statusCallback =\"{0}?CallID={1}\" statusCallbackMethod=\"POST\">", strStatusHandler, rowCall.CallID)
				+ oParams.Phone
				+ "</Number>";
			}

			if (!oParams.Join)
				strResponse = string.Format("<Response><Dial callerId=\"{0}\" {2}>{1}</Dial><Pause length=\"2\"/></Response>", oParams.CallerID, oParams.Phone, oParams.Record ? strRecord : "");
			else
				strResponse = string.Format("<Response><Dial><Conference>{0}</Conference></Dial></Response>", rowCall.CallID);


			if (oParams.Stream)
			{
				string strWssServer = TwilioFeature.Feature.CallStreamHandler;

				strResponse = string.Format("<Response><Start><Stream track=\"both_tracks\" url=\"{2}\"><Parameter name=\"CallID\" value=\"{3}\" /></Stream></Start><Dial callerId=\"{0}\">{1}</Dial><Pause length=\"2\"/></Response>", oParams.CallerID, oParams.Phone, strWssServer, rowCall.CallID);
			}

			PhoneNumbersRow rowPhoneNumber = PhoneNumbers.GetPhoneNumberInfo(oParams.Phone) ?? throw new Exception("Unable to create PhoneNumber");
			rowPhoneNumber.LastContacted = DateTime.Now;
			rowPhoneNumber.CallCount++;
			PhoneNumbersRepository.UpdatePhoneNumber(rowPhoneNumber);



			Logs.DebugLog.WriteEvent("Twilio Call Response", strResponse);
			return strResponse;
		}

		static public string StartIncomingCall(StartCallParams oParams)
		{
			Logs.DebugLog.WriteEvent("Twilio.StartIncomingCall", JsonUtil.ToString(oParams).ToString());
			CallsRow rowCall = new CallsRow();
			rowCall.CallKey = oParams.CallKey;
			rowCall.CalledPhone = oParams.Phone;
			rowCall.CallingPhone = oParams.CallerID;
			rowCall.CallStatus = null;
			rowCall.Duration = 0.0;
			rowCall.IsConference = false;
			rowCall.IsRecorded = oParams.Record;
			rowCall.IsStreamed = oParams.Stream;
			rowCall.IsIncoming = true;
			rowCall.IsEmptyTranscription = false;
			rowCall.IsTranscribed = false;

			rowCall.CallID = CallsRepository.InsertCall(rowCall);

			string strRecordingHandler = TwilioFeature.Feature.RecordingHandler;
			string strRecord = string.Format("record=\"record-from-answer-dual\" recordingStatusCallback=\"{0}?CallID={1}\" recordingStatusCallbackMethod=\"POST\" recordingStatusCallbackEvent=\"completed\" recordingTrack=\"both\" ", strRecordingHandler, rowCall.CallID);

			string strResponse = String.Empty;

			if (oParams.Status)
			{
				string strStatusHandler = TwilioFeature.Feature.CallStatusHandler;
				oParams.Phone = string.Format("<Number statusCallbackEvent=\"initiated ringing answered completed\" statusCallback =\"{0}?CallID={1}\" statusCallbackMethod=\"POST\">", strStatusHandler, rowCall.CallID)
				+ oParams.Phone
				+ "</Number>";
			}

			strResponse = string.Format("<Response><Dial callerId=\"{0}\" {2}>{1}</Dial><Pause length=\"2\"/></Response>", oParams.CallerID, oParams.Phone, oParams.Record ? strRecord : "");


			//if (oParams.Stream)
			//{
			//	string strWssServer = TwilioFeature.Feature.CallStreamHandler;

			//	strResponse = string.Format("<Response><Start><Stream track=\"both_tracks\" url=\"{2}\"><Parameter name=\"CallID\" value=\"{3}\" /></Stream></Start><Dial callerId=\"{0}\">{1}</Dial><Pause length=\"2\"/></Response>", oParams.CallerID, oParams.Phone, strWssServer, rowCall.CallID);
			//}

			Logs.DebugLog.WriteEvent("Twilio Call In Response", strResponse);
			return strResponse;
		}

		static public string StartIncomingVoiceAgent(StartCallParams oParams)
		{
			Logs.DebugLog.WriteEvent("Twilio.StartIncomingCall", JsonUtil.ToString(oParams).ToString());
			CallsRow rowCall = new CallsRow();
			rowCall.CallKey = oParams.CallKey;
			rowCall.CalledPhone = oParams.Phone;
			rowCall.CallingPhone = oParams.CallerID;
			rowCall.CallStatus = null;
			rowCall.Duration = 0.0;
			rowCall.IsConference = false;
			rowCall.IsRecorded = oParams.Record;
			rowCall.IsStreamed = oParams.Stream;
			rowCall.IsIncoming = true;
			rowCall.IsEmptyTranscription = false;
			rowCall.IsTranscribed = false;

			rowCall.CallID = CallsRepository.InsertCall(rowCall);

			AgentsRow? rowAgent = null;
			if (!StringUtil.IsEmpty(oParams.CalledPhone))
			{
				PhoneNumbersRow rowPhoneNumber = PhoneNumbers.GetPhoneNumberByPhoneNumber(oParams.CalledPhone);
				if (null != rowPhoneNumber && !StringUtil.IsEmpty(rowPhoneNumber.DataObject.GetStringOrNull("VoiceAgent")))
				{
					rowAgent = AgentsRepository.GetAgentByAgentName(rowPhoneNumber.DataObject.GetStringOrNull("VoiceAgent"));
				}
			}
			

			string strWssServer = TwilioFeature.Feature.CallStreamHandler;
			string strXml = TwilioFeature.Feature.CallStreamIncomingXml;
			if (StringUtil.IsEmpty(strXml))
			{
				strXml = @"
<Response>
	<Say>Please wait while we connect your call to a Voice Agent, powered by Feeding Frenzy</Say>
	<Pause length=""1""/>
	<Say>You are now connected!</Say>
	<Connect><Stream url=""{WssServer}""/></Connect>
</Response>";
			}

			strXml = StringUtil.ReplaceAll(strXml, "{WssServer}", strWssServer);
			strXml = StringUtil.ReplaceAll(strXml, "{CallID}", rowCall.CallID.ToString());
			strXml = StringUtil.ReplaceAll(strXml, "{CallerID}", oParams.CallerID);
			strXml = StringUtil.ReplaceAll(strXml, "{PhoneNumber}", oParams.Phone);
			strXml = StringUtil.ReplaceAll(strXml, "{AgentID}", rowAgent?.AgentID.ToString() ?? "");
			strXml = StringUtil.ReplaceAll(strXml, "{AgentName}", rowAgent?.AgentName ?? "");

			Logs.DebugLog.WriteEvent("Twilio Call In Response", strXml);

			return strXml;
		}
		public static CallsRow UpdateCallRecording(int iCallID, string strRecordingURL, double dDuration)
		{
			CallsRow rowCall = CallsRepository.Get(iCallID);
			rowCall.RecordingURL = strRecordingURL;
			rowCall.Duration = dDuration;

			CallsRepository.UpdateCall(rowCall);

			return rowCall;
		}

		public static CallsRow UpdateCallStatus(int iCallID, string strStatus, double ? dDuration)
		{
			CallsRow rowCall = CallsRepository.Get(iCallID);
			rowCall.CallStatus = strStatus;
			rowCall.LastCallStatusUpdate = DateTime.Now;

			if (StringUtil.EqualNoCase(strStatus, "completed"))
				rowCall.Duration = dDuration ?? 0.0;

			CallsRepository.UpdateCall(rowCall);

			return rowCall;
		}

	}
}    
		