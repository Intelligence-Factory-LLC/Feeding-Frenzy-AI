using BasicUtilities;
using FeedingFrenzy.Data;
using FeedingFrenzy.Features;
using FeedingFrenzy.TwilioAPI;
using WebAppUtilities;

namespace FeedingFrenzy.Admin.Business
{
	public partial class Calls : JsonWs
	{
		static public object Call()
		{
			string strJwt = TwilioHelper.GetJwtToken();
			return new { Jwt = strJwt, CallerID = TwilioFeature.Feature.FromNumber };
		}

		public static int InsertCallAndRecording(
			 string CallingPhone,
			 string CalledPhone,
			 string? RecordingURL,
			 bool IsIncoming,
			 string? Data,
			 string CallKey)
		{
			try
			{
				int iCallID = CallsRepository.InsertCall(
					CallingPhone,
					CalledPhone,
					0,
					true,
					RecordingURL,
					false,
					false,
					IsIncoming,
					"completed",
					null,
					false,
					false,
					null,
					Data,
					null,
					CallKey
				);

				PostProcessCall(iCallID, true).GetAwaiter().GetResult();

				return iCallID;
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}
		}
		static public async Task PostProcessCall(int CallID, bool bForceRefresh = false)
		{
			CallsRow rowCall = CallsRepository.Get(CallID);

			await PostProcessCallInternal(rowCall, bForceRefresh);
		}

		static internal async Task PostProcessCallInternal(CallsRow rowCall, bool bForceRefresh = false)
		{
			try
			{
				//Correcting Streamed Calls 
				if (StringUtil.IsEmpty(rowCall.Transcription) && rowCall.DataObject.GetJsonArrayOrDefault("TranscriptionCombined").Count > 0)
				{
					foreach (JsonValue jsonValue in rowCall.DataObject.GetJsonArrayOrDefault("TranscriptionCombined"))
					{
						JsonObject jsonTranscription = jsonValue.ToJsonObject();
						if (jsonTranscription.GetIntOrNull("LeftOrRight") == 0)
						{
							rowCall.Transcription += "Caller:\r\n";
						}
						else
						{
							rowCall.Transcription += "Answerer:\r\n";
						}

						rowCall.Transcription += jsonTranscription.GetStringOrNull("Text") + "\r\n\r\n";
					}

					rowCall.IsEmptyTranscription = false;
					rowCall.IsTranscribed = true;

					CallsRepository.UpdateCall(rowCall);
				}

				if (!rowCall.IsTranscribed || bForceRefresh)
				{
					await Transcribe(rowCall);
				}

				if (StringUtil.IsEmpty(rowCall.TranscriptionSummary))
				{
					await Summarize(rowCall);
				}

				if (!rowCall.IsEmptyTranscription && !StringUtil.IsEmpty(rowCall.Transcription))
				{
					string strTranscription = rowCall.Transcription!;

					Buffaly.SemanticDB.PhoneCalls.InsertPhoneCallTranscription(rowCall.RecordingURL!,
						"CallID", rowCall.CallKey,
						strTranscription, "Incoming Phone Call",
						JsonUtil.ToString(new
						{
							Today = rowCall.DateCreated.ToString("dddd, MMMM dd, yyyy"),
							CallID = rowCall.CallID
						}).ToString());

					string strJson = Buffaly.SemanticDB.PhoneCalls.GetExtractedInfoByExternalKey(rowCall.CallKey);
					JsonObject jsonExtractedData = new JsonObject(strJson);

					if (rowCall.DataObject.GetJsonObjectOrDefault("ExtractedData").GetStringOrNull("Timestamp") !=
						jsonExtractedData.GetStringOrNull("Timestamp")
						|| !rowCall.DataObject.GetBooleanOrFalse("HasProcessedSuggestions"))
					{
						rowCall.DataObject["ExtractedData"] = jsonExtractedData;
						rowCall.DataObject["HasProcessedSuggestions"] = true;

						if (!StringUtil.IsEmpty(rowCall.DataObject.GetStringOrNull("Summary")))
							rowCall.TranscriptionSummary = rowCall.DataObject.GetStringOrNull("Summary");

						CallsRepository.UpdateCall(rowCall);

					}
				}

				//Attempt to tie the call to a lead
				if (null == rowCall.LeadNoteID)
				{
					if (rowCall.IsIncoming)
					{
						LeadsRow? rowLead = Leads.GetLeadsByPhone(rowCall.CallingPhone).FirstOrDefault();
						if (null != rowLead)
						{
							rowCall.LeadNoteID = LeadNotes.InsertLeadNote(rowLead.LeadID, rowLead.SalesRepresentativeID ?? 1,
								"Incoming Call", null, JsonUtil.ToString(new { CallID = rowCall.CallID }).ToString(),
								LeadNoteTypesEnum.PhoneCallIn.LeadNoteTypeID);

							LeadNotesRow rowLeadNote =
								LeadNotes.GetLeadNote(rowCall.LeadNoteID.Value);

							SuggestActions(rowLeadNote, rowCall.DataObject.GetJsonObjectOrDefault("ExtractedData"));

							CallsRepository.UpdateCallData(rowCall);
						}
						else
						{
							JsonArray jsonCallEvents = rowCall.DataObject.GetJsonArrayOrDefault("Events");

							//If we find a PotentialLead event captured by the call attempt to create the lead
							if (jsonCallEvents.Any(x => x?.ToJsonObject()!.GetStringOrNull("EventType") == "PotentialLeadCaptured"))
							{
								JsonObject jsonExtractedData = rowCall.DataObject.GetJsonObjectOrDefault("ExtractedData");

								if (jsonExtractedData.GetJsonObjectOrDefault("Contact").Count > 0)
								{
									string strFirstName = jsonExtractedData.GetJsonObjectOrDefault("Contact").GetStringOrDefault("Name", string.Empty) ?? string.Empty;
									string strLastName = jsonExtractedData.GetJsonObjectOrDefault("Contact").GetStringOrDefault("LastName", string.Empty) ?? string.Empty;
									string strPhone = jsonExtractedData.GetJsonObjectOrDefault("Contact").GetStringOrDefault("Phone", string.Empty) ?? string.Empty;
									string strEmail = jsonExtractedData.GetJsonObjectOrDefault("Contact").GetStringOrDefault("Email", string.Empty) ?? string.Empty;


									Leads.InsertLead(null, null, null, null, strFirstName, strLastName, strPhone, strEmail, null, null, null, null, null, 1, null, 1, StatusesEnum.NotContacted.LeadStatusID, null, null, null, null, DateTime.Now, null);
								}
							}

						}
					}

				}

			}

			catch (Exception err)
			{
				Logs.LogError(err);
				throw;
			}
		}

		internal static async Task Transcribe(CallsRow rowCall)
		{
			string strCompanyName = OrganizationFeature.Feature.OrganizationName;

			string strCorrectingPrompt =
				$"Analyze the provided transcription. The caller is a sales representative from {strCompanyName}. You are checking " +
				$"a transcription of the conversation. Correct any potential misspellings or misinterpretations and return the full " +
				$"transcription of the conversation without adding any additional text or explanations or preface.";

			await CallRecordings.Transcribe(rowCall, strCorrectingPrompt);
		}

		internal static async Task Summarize(CallsRow rowCall)
		{
			string strCompanyName = OrganizationFeature.Feature.OrganizationName;

			string strSummaryPrompt =
	$"Summarize the provided transcription of a phone call between a sales representative from {strCompanyName}" +
	$"and a potential customer. Please summarize the interaction in 2-4 sentences depending on the" +
	$" length of the call. Do not make up any information. Use correct spellings and grammar. ";

			await CallRecordings.Summarize(rowCall, strSummaryPrompt);
		}

		class SuggestedAction
		{
			public string? Action;
			public string? Description;
		}

		static private void SuggestActions(LeadNotesRow rowLeadNote, JsonObject jsonExtractedData)
		{

			List<SuggestedAction> lstActions = new List<SuggestedAction>();
			JsonObject jsonActions = new JsonObject();
			LeadsRow rowLead = rowLeadNote.Lead!;
			bool bLeadUpdated = false;

			if (jsonExtractedData.ContainsKey("WasAppointmentScheduled") && jsonExtractedData.GetStringOrNull("WasAppointmentScheduled") == "Yes")
			{
				if (jsonExtractedData.ContainsKey("DateAndTimeOfAppointment") && jsonExtractedData.ContainsKey("AppointmentReason"))
				{
					rowLead.DataObject["WasAppointmentScheduled"] = true;

					bLeadUpdated = true;

					lstActions.Add(new SuggestedAction
					{
						Action = "Scheduled Appointment",
						Description = "Scheduled an appointment with the customer"
					});

					DateTime? dFollowUpDate = null;
					string strFollowUpDate = jsonExtractedData.GetStringOrDefault("DateAndTimeOfAppointment", string.Empty);
					string format = "MMMM d 'at' h:mm tt"; // Define the expected format

					if (!string.IsNullOrWhiteSpace(strFollowUpDate) & DateTime.TryParseExact(strFollowUpDate, format, System.Globalization.CultureInfo.InvariantCulture, System.Globalization.DateTimeStyles.None, out DateTime parsedDate))
					{
						dFollowUpDate = parsedDate;
					}

					string strAppointmentReason = jsonExtractedData.GetStringOrNull("AppointmentReason") ?? "No reason provided";
					string strAppointmentDetails = jsonExtractedData.GetStringOrNull("AppointmentDetails") ?? "";

					// Check if the lead has a sales person assigned
					if (rowLead.SalesRepresentativeID.HasValue)
					{

						Leads.UpdateLeadStatusSimple(rowLead.LeadID, "In the Pipeline", "Appointment Set");

						LeadNotes.InsertLeadNote(
							rowLead.LeadID,
							rowLead.SalesRepresentativeID.Value,
							$"{strAppointmentReason} - {strAppointmentDetails}",
							dFollowUpDate,
							null,
							LeadNoteTypesEnum.AppointmentSet.LeadNoteTypeID
						);
					}
					else
					{
						//TODO: Handle the null SalesRepresentativeID case

					}
				}
			}

			if (bLeadUpdated)
			{
				LeadsRepository.UpdateLeadData(rowLead);
				rowLeadNote.DataObject["SuggestedActions"] = new JsonArray(lstActions);
				LeadNotesRepository.UpdateLeadNoteData(rowLeadNote);
			}
		}

	}
}
