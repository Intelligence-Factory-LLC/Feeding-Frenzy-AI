using Amazon.Runtime.Internal.Util;
using BasicUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAppUtilities;
using FeedingFrenzy.Features;
using Buffaly.SemanticDB;
using Buffaly.SemanticDB.Data;
using FeedingFrenzy.Admin.Business.ChatAgents;

namespace FeedingFrenzy.Admin.Business
{
	public class LeadAutomation : JsonWs
	{
		static public async Task PostProcessCall(int CallID, int LeadNoteID, bool bForceRefresh = false)
		{
			LeadNotesRow rowLeadNote = LeadNotesRepository.Get(LeadNoteID);
			CallsRow rowCall = CallsRepository.Get(CallID);

			await PostProcessCallInternal(rowCall, rowLeadNote, bForceRefresh);
		}


		static internal async Task PostProcessCallInternal(CallsRow rowCall, LeadNotesRow rowLeadNote, bool bForceRefresh = false)
		{
			if (rowLeadNote.DataObject.GetIntOrNull("CallID") != rowCall.CallID)
			{
				rowLeadNote.DataObject["CallID"] = rowCall.CallID;
				LeadNotesRepository.UpdateLeadNoteData(rowLeadNote);
			}

			if (!rowCall.IsTranscribed || bForceRefresh)
			{
				await Transcribe(rowLeadNote, rowCall);
			}

			if (!rowCall.IsEmptyTranscription && !StringUtil.IsEmpty(rowCall.Transcription))
			{
				string strTranscription = rowCall.Transcription!;


				Buffaly.SemanticDB.PhoneCalls.InsertPhoneCallTranscription(rowCall.RecordingURL!,
					rowLeadNote.LeadID.ToString(), rowLeadNote.LeadNoteID.ToString(),
					strTranscription, "Lead Phone Call",
					JsonUtil.ToString(new
					{
						Today = rowLeadNote.DateCreated.ToString("dddd, MMMM dd, yyyy"),
						LeadNoteID = rowLeadNote.LeadNoteID,
						LeadID = rowLeadNote.LeadID,
						CallID = rowCall.CallID
					}).ToString());

				string strJson = Buffaly.SemanticDB.PhoneCalls.GetExtractedInfoByExternalKey(rowLeadNote.LeadNoteID.ToString());
				JsonObject jsonExtractedData = new JsonObject(strJson);

				if (rowLeadNote.DataObject.GetJsonObjectOrDefault("ExtractedData").GetStringOrNull("Timestamp") !=
					jsonExtractedData.GetStringOrNull("Timestamp")
					|| !rowLeadNote.DataObject.GetBooleanOrFalse("HasProcessedSuggestions"))
				{
					rowLeadNote.DataObject["ExtractedData"] = jsonExtractedData;
					rowLeadNote.DataObject["HasProcessedSuggestions"] = true;
					LeadNotesRepository.UpdateLeadNoteData(rowLeadNote);

					SuggestActions(rowLeadNote, jsonExtractedData);
				}
			}
		}

		internal static async Task Transcribe(LeadNotesRow rowLeadNote, CallsRow rowCall)
		{
			SalesRepresentativesRow rowSalesRep = SalesRepresentativesRepository.Get(rowLeadNote.SalesRepresentativeID);
			string strCompanyName = BasicUtilities.Settings.GetStringOrDefault("AppSettings:CompanyName", "Intelligence Factory")!;

			string strPrompt = $"The caller is a sales representative with {strCompanyName} named {rowSalesRep.User.FirstName} {rowSalesRep.User.LastName} . " +
				$"The answerer is a potential customer, thought to be from {rowLeadNote.Lead!.Company}. You are checking " +
				$"a transcription of the conversation. Correct any potential misspellings or misinterpretations and return the full " +
				$"transcription of the conversation without adding any additional text or explanations or preface.";

			string strSummaryPrompt =
				$"Summarize the provided transcription of a phone call between a sales representative from {strCompanyName}" +
				$"and a potential customer. Please summarize the interaction in 2-4 sentences depending on the" +
				$" length of the call. Do not make up any information. Use correct spellings and grammar. ";

			await CallRecordings.Transcribe(rowCall, strPrompt);
			await CallRecordings.Summarize(rowCall, strSummaryPrompt);
		}


		class SuggestedAction
		{
			public string Action;
			public string Description;
		}

		static private void SuggestActions(LeadNotesRow rowLeadNote, JsonObject jsonExtractedData)
		{
			List<SuggestedAction> lstActions = new List<SuggestedAction>();

			JsonObject jsonActions = new JsonObject();
			LeadsRow rowLead = rowLeadNote.Lead!;
			bool bLeadUpdated = false;
			if (jsonExtractedData.ContainsKey("PhoneTree"))
			{
				if (rowLead.DataObject.GetJsonArrayOrDefault("PhoneTree").Count < jsonExtractedData.GetJsonArrayOrDefault("PhoneTree").Count)
				{
					rowLead.DataObject["PhoneTree"] = jsonExtractedData.GetJsonArrayOrDefault("PhoneTree");
					bLeadUpdated = true;

					lstActions.Add(new SuggestedAction
					{
						Action = "Updated Phone Tree",
						Description = "Updated the phone tree with the new information"
					});
				}
			}

			if (jsonExtractedData.ContainsKey("OfficeHours"))
			{
				if (rowLead.DataObject.GetJsonArrayOrDefault("OfficeHours")?.Count < jsonExtractedData.GetJsonArrayOrDefault("OfficeHours")?.Count)
				{
					rowLead.DataObject["OfficeHours"] = jsonExtractedData.GetJsonArrayOrDefault("OfficeHours");
					bLeadUpdated = true;

					lstActions.Add(new SuggestedAction
					{
						Action = "Updated Office Hours",
						Description = "Updated the office hours with the new information"
					});
				}
			}

			if (jsonExtractedData.ContainsKey("Contacts"))
			{
				JsonArray jsonContacts = jsonExtractedData.GetJsonArrayOrDefault("Contacts");
				foreach (JsonObject contact in jsonContacts.Select(x => x.ToJsonObject()))
				{
					SuggestedContact suggestedContact = JsonUtil.ConvertTo<SuggestedContact>(contact.ToJSON())!;
					SuggestedAction ? action = MergeSuggestedContact(rowLeadNote, suggestedContact);
					if (null != action)
					{
						bLeadUpdated = true;
						lstActions.Add(action);
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

		class SuggestedContact
		{
			public string? Name;
			public string? Phone;
			public string? Fax;
			public string? Address;
			public string? Email;
		}

		static private SuggestedAction ? MergeSuggestedContact(LeadNotesRow rowLeadNote, SuggestedContact contact)
		{
			SuggestedAction ? suggestedAction = null;

			LeadsRow rowLead = rowLeadNote.Lead!;

			if (!StringUtil.IsEmpty(contact.Fax))
			{
				if (StringUtil.IsEmpty(rowLead.Fax) && StringUtil.IsValidPhoneNumber(contact.Fax))
				{
					rowLead.Fax = contact.Fax;

					suggestedAction = new SuggestedAction
					{
						Action = "Updated Fax",
						Description = "Updated the fax number to " + FormatUtil.StringToPhone(contact.Fax!)
					};
				}
			}

			SalesRepresentativesRow rowSalesRep = SalesRepresentativesRepository.Get(rowLeadNote.SalesRepresentativeID);
			if (StringUtil.EqualNoCase(rowSalesRep.Email, contact.Email))
				contact.Email = null;

			if (StringUtil.EqualNoCase(rowSalesRep.Name, contact.Name))
				contact.Name = null;

			contact.Phone = StringUtil.Clean(contact.Phone, "0123456789");

			if (StringUtil.EqualNoCase(contact.Phone, rowSalesRep.Phone) || !StringUtil.IsValidPhoneNumber(contact.Fax))
				contact.Phone = null;

			bool bMergeLeadContact = false;
			if (!StringUtil.IsEmpty(contact.Email))
			{
				if (StringUtil.IsEmpty(rowLead.Email))
				{
					rowLead.Email = contact.Email;

					suggestedAction = new SuggestedAction
					{
						Action = "Updated Email",
						Description = "Updated email to " + contact.Email
					};
				}
				else
				{
					bMergeLeadContact = true;
				}
			}

			if (!StringUtil.IsEmpty(contact.Address))
			{
				if (StringUtil.IsEmpty(rowLead.Address))
				{
					rowLead.Address = contact.Address;

					suggestedAction = new SuggestedAction
					{
						Action = "Updated Address",
						Description = "Updated address to " + contact.Address
					};
				}
			}


			if (!StringUtil.IsEmpty(contact.Phone) && !StringUtil.EqualNoCase(contact.Phone, rowLead.Phone))
			{
				bMergeLeadContact = true;
			}

			if (bMergeLeadContact)
			{
				LeadContactsRow ? rowLeadContact = null;
				//Reload from the DB because the contacts could change between iterations
				LeadContactsDataTable dtLeadContacts = LeadContactsRepository.GetLeadContactsByLeadID(rowLead.LeadID);


				if (!StringUtil.IsEmpty(contact.Phone))
				{
					rowLeadContact = dtLeadContacts.FirstOrDefault(x => StringUtil.EqualNoCase(x.Phone, contact.Phone));
				}

				if (null == rowLeadContact && !StringUtil.IsEmpty(contact.Email))
				{
					rowLeadContact = dtLeadContacts.FirstOrDefault(x => StringUtil.EqualNoCase(x.Email, contact.Email));
				}

				if (null == rowLeadContact && !StringUtil.IsEmpty(contact.Name))
				{
					rowLeadContact = dtLeadContacts.FirstOrDefault(x => StringUtil.EqualNoCase(x.Name, contact.Name));
				}

				if (null == rowLeadContact)
				{
					if (StringUtil.IsEmpty(contact.Name))
						contact.Name = "Alternate Contact";

					LeadContactsRepository.InsertLeadContact(rowLead.LeadID, contact.Name, null, contact.Phone, contact.Email,
						JsonUtil.ToString(
							new
							{
								IsSuggested = true,
								LeadNoteID = rowLeadNote.LeadNoteID
							}).ToString()
						);

					suggestedAction = new SuggestedAction
					{
						Action = "Added Contact",
						Description = "Added a new contact named " + contact.Name
					};
				}
				else
				{
					bool bContactUpdated = false;

					if (!StringUtil.IsEmpty(contact.Email) && StringUtil.IsEmpty(rowLeadContact.Email))
					{
						rowLeadContact.Email = contact.Email;
						bContactUpdated = true;
					}
					if (!StringUtil.IsEmpty(contact.Email) && StringUtil.IsEmpty(rowLeadContact.Email))
					{
						rowLeadContact.Email = contact.Email;
					}

					if (!StringUtil.IsEmpty(contact.Phone) && StringUtil.IsEmpty(rowLeadContact.Phone))
					{
						rowLeadContact.Phone = contact.Phone;
					}

					if (!StringUtil.IsEmpty(contact.Name) && StringUtil.IsEmpty(rowLeadContact.Name))
					{
						rowLeadContact.Name = contact.Name;
					}

					if (bContactUpdated)
					{
						suggestedAction = new SuggestedAction
						{
							Action = "Updated Contact",
							Description = "Updated contact " + rowLeadContact.Name
						};

						LeadContactsRepository.UpdateLeadContact(rowLeadContact);
					}
				}
			}

			return suggestedAction;
		}


		static public bool UpdateLeadInfo(int LeadID, string LeadInfo)
		{
			LeadsRow rowLead = Leads.GetLead(LeadID);
			string strHash = StringUtil.GetMD5(LeadInfo);

			if (!StringUtil.EqualNoCase(strHash, rowLead.DataObject.GetStringOrNull("LeadInfoHash")))
			{
				int? iFragmentID = rowLead.DataObject.GetIntOrNull("LeadInfoFragmentID");

				if (null == iFragmentID)
				{
					iFragmentID = Buffaly.SemanticDB.Fragments.InsertFragment(LeadInfo, null, "Lead Info " + LeadID, null);
				}
				else
				{
					Buffaly.SemanticDB.Fragments.UpdateFragment(iFragmentID.Value, LeadInfo, null, "Lead Info " + LeadID, null);
				}
				rowLead.DataObject["LeadInfoFragmentID"] = iFragmentID;
				rowLead.DataObject["LeadInfoHash"] = strHash;
				LeadsRepository.UpdateLeadData(rowLead.LeadID, rowLead.Data);

				return true;
			}

			return false;
		}


		static public string CompleteBasedOnLeadInfo2(int LeadID, string Prompt, string Model)
		{
			LeadsRow rowLead = Leads.GetLead(LeadID);
			
            int? iFragmentID = rowLead.DataObject.GetIntOrNull("LeadInfoFragmentID");
			if (null == iFragmentID)
				throw new JsonWsException("No Fragment ID");

            string strCompanyName = OrganizationFeature.Feature.OrganizationName;
            Prompt = Prompt.Replace("{CompanyName}", strCompanyName);

            string strResponse = Buffaly.SemanticDB.Fragments.GetCompletion2(iFragmentID.Value, Prompt, Model);

			return strResponse;
		}


		static public string CompleteJSONBasedOnLeadInfo2(int LeadID, string Prompt, string Model)
		{
			LeadsRow rowLead = Leads.GetLead(LeadID);
			
            int? iFragmentID = rowLead.DataObject.GetIntOrNull("LeadInfoFragmentID");
			if (null == iFragmentID)
				throw new JsonWsException("No Fragment ID");

            string strCompanyName = OrganizationFeature.Feature.OrganizationName;
            Prompt = Prompt.Replace("{CompanyName}", strCompanyName);

            string strResponse = Buffaly.SemanticDB.Fragments.GetCompletionAsJSON2(iFragmentID.Value, Prompt, Model);

			return strResponse;
		}

		static public int SummarizeSalesRepresentativesDay(int SalesRepresentativeID, DateTime Day, bool bForceUpdate = false)
		{
			string strFragmentKey = $"Sales Representative Daily Summary {SalesRepresentativeID} for {Day}";
			FragmentsRow ? rowFragment = Fragments.GetFragmentByFragmentKey(strFragmentKey);
			if (null == rowFragment || bForceUpdate)
			{
				RooTraxState.kScriptControl.EvaluateFunction1("using", "SalesRepresentatives\\SalesRepresentative.Reports.ks.html");
				string? strSummary = RooTraxState.kScriptControl.EvaluateFunctionNObjects("SalesRepresentativeReports.GetSalesRepresentativesDay", new List<object> { SalesRepresentativeID, Day });

				if (StringUtil.IsEmpty(strSummary))
					throw new JsonWsException("No Summary Generated");

				if (null == rowFragment)
				{
					int iFragmentID = Fragments.InsertFragment(strSummary!, null, strFragmentKey, null);
					rowFragment = Fragments.GetFragment(iFragmentID);
				}
				else
				{
					rowFragment.Fragment = strSummary!;
					FragmentsRepository.UpdateFragment(rowFragment);
				}

				FragmentTags.InsertOrUpdateFragmentTag(rowFragment.FragmentID, "Sales Representative Day Info");
			}

			return rowFragment!.FragmentID;
		}

		static public string ChatWithSalesRepresentativesDayFragment(int FragmentID, string Message)
		{
			string strPrompt = @"
You are an advanced assistant designed to analyze, interpret, and apply sales-related data to deliver actionable and relevant responses. You will receive two distinct inputs:  

1. **Details of the Day**: A block of text containing raw information about a sales representative's activities, such as:  
   - Actions taken throughout the day (e.g., meetings, research, administrative tasks).  
   - Calls made, including transcripts or summaries.  
   - Appointments scheduled or held.  
   - Notes about prospects, clients, or sales progress.  
   - Any additional context about the sales process or outcomes.  

2. **User Message**: A specific query, instruction, or request that requires processing the provided details of the day. This message may include requests such as:  
   - Summarizing the sales representative’s day.  
   - Identifying key outcomes, highlights, or areas of improvement.  
   - Generating recommendations for next steps.  
   - Answering specific questions about the activities, calls, or outcomes described in the details.  

### Expectations for Your Role:  

- **Contextual Understanding**: Carefully analyze the ""Details of the Day"" to extract relevant information that directly addresses the user’s message. Identify and prioritize significant points, such as successful calls, important decisions, or impactful insights.  

- **Tailored Responses**: Use the user message to guide your response. Your output must be tailored to their request, incorporating relevant data, summaries, or insights from the provided details.  

- **Clarity and Relevance**: Ensure all responses are clear, concise, and focused on delivering actionable or insightful information. Avoid including extraneous details or assumptions unless explicitly requested.  

- **Professionalism and Tone**: Maintain a professional, empathetic, and solution-focused tone in all responses.  

You are not expected to provide directions or ask clarifying questions unless explicitly instructed by the user. Focus solely on processing the inputs provided to generate a precise and effective response.  
";
			return Fragments.GetCompletion3(FragmentID, strPrompt, Message, OpenAIAPI.OpenAIFeature.Feature.SmallModel);
		}


		static public string ChatWithSalesRepresentativesDay(int SalesRepresentativeID, string Day, string Message)
		{
			int iFragmentID = SummarizeSalesRepresentativesDay(SalesRepresentativeID, DateTime.Parse(Day));
			return ChatWithSalesRepresentativesDayFragment(iFragmentID, Message);
		}



	}
}
