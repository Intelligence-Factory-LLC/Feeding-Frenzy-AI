using BasicUtilities;
using FeedingFrenzy.Data;
using FeedingFrenzy.TwilioAPI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAppUtilities;

namespace FeedingFrenzy.Admin.Business
{
	public class LeadCalls : JsonWs
	{

		static public object CallLead(int LeadID, int SalesRepresentativeID)
		{
			string strJwt = TwilioHelper.GetJwtToken();
			int iLeadNoteID = Leads.UpdateLeadStatus(LeadID, SalesRepresentativeID, "Contacted", "Called", LeadNoteTypesEnum.Call.LeadNoteTypeName);
			return new { Jwt = strJwt, LeadNoteID = iLeadNoteID, CallerID = TwilioFeature.Feature.FromNumber };
		}

		static public object GetLeadByPhone(string Phone)
		{
			LeadsDataTable dtLeads = LeadsRepository.GetLeadsByPhone(Phone);
			if (dtLeads.Count == 0)
			{
				LeadContactsDataTable dtLeadContacts = LeadContactsRepository.GetLeadContactsByPhone(Phone);
				LeadContactsRow? rowLeadContact = dtLeadContacts.OrderByDescending(x => x.LeadContactID).FirstOrDefault();
				if (null == rowLeadContact)
				{
					return new { Name = "Unknown Number", CallerID = TwilioFeature.Feature.FromNumber };
				}
				
				return new { Name = rowLeadContact.Name, CallerID = TwilioFeature.Feature.FromNumber, LeadID = rowLeadContact.LeadID , Company = rowLeadContact.Lead.Company };
			}

			LeadsRow rowLead = dtLeads.OrderByDescending(x => x.LeadID).First();

			return new { LeadID = rowLead.LeadID, Name = rowLead.FirstName + " " + rowLead.LastName, Company = rowLead.Company, CallerID = TwilioFeature.Feature.FromNumber };
		}

		//static public string ConferenceLead(int LeadID, string CallSID, int UserID)
		//{
		//	string strConferenceLabel = TwilioConferences.StartConferenceFromCall(LeadID.ToString(), CallSID, "lead_id", UserID);

		//	LeadsRow rowLead = LeadsRepository.Get(LeadID);
		//	rowLead.DataObject["TwilioConferenceSID"] = strConferenceLabel;
		//	LeadsRepository.UpdateLeadData(rowLead.LeadID, rowLead.Data);

		//	return string.Empty;
		//}

		//static public bool IsCheckConferenceInProgress(int LeadID)
		//{
		//	LeadsRow rowLead = LeadsRepository.Get(LeadID);
		//	string strConferenceLabel = rowLead.DataObject.GetStringOrNull("TwilioConferenceSID");
		//	if (StringUtil.IsEmpty(strConferenceLabel))
		//		return false;

		//	if (TwilioConferences.IsConferenceInProgress(strConferenceLabel))
		//		return true;

		//	rowLead.DataObject.Remove("TwilioConferenceSID");
		//	LeadsRepository.UpdateLeadData(rowLead.LeadID, rowLead.Data);

		//	return false;
		//}

		//static public void PlaceParticipantOnHold(int LeadID, string strParticipant, bool Hold)
		//{
		//	ParticipantResource participant = TwilioConferences.GetParticipant(LeadID.ToString(), strParticipant);

		//	if (null != participant && participant.Hold != Hold)
		//	{
		//		TwilioConferences.HoldParticipant(LeadID.ToString(), strParticipant, Hold);
		//	}
		//}

		//static public void AddParticipant(int Lead, string strCallerID, string strPhoneNumber)
		//{
		//	TwilioConferences.AddParticipant(Lead.ToString(), strCallerID, strPhoneNumber);
		//}

		//static public string GetParticipantStatus(int LeadID, string strParticipant)
		//{
		//	ParticipantResource participant = TwilioConferences.GetParticipant(LeadID.ToString(), strParticipant);
		//	return (null == participant ? "null" : participant.Status.ToString());
		//}


		static public string CallConnected2(int LeadNoteID, string Phone, string CallerID)
		{
			LeadNotesRow rowLeadNote = LeadNotesRepository.Get(LeadNoteID);
			rowLeadNote.DataObject["Phone"] = Phone;
			rowLeadNote.DataObject["CallerID"] = CallerID;
			rowLeadNote.DataObject["CallStarted"] = DateTime.Now;
			LeadNotesRepository.UpdateLeadNoteData(rowLeadNote.LeadNoteID, rowLeadNote.Data);

			LeadNotesDataTable dtLeadNotes = LeadNotesRepository.GetLeadNotesByLeadID(rowLeadNote.LeadID);

			foreach (LeadNotesRow note in dtLeadNotes.OrderByDescending(x => x.LeadNoteID))
			{
				if (note.LeadNoteTypeID == LeadNoteTypesEnum.Call.LeadNoteTypeID)
				{
					JsonArray jsonArray = note.DataObject.GetJsonObjectOrDefault("ExtractedData").GetJsonArrayOrDefault("PhoneTree");
					if (jsonArray.Count > 0)
					{
						return jsonArray.ToJSON();
					}
				}

			}

			return string.Empty;
		}
		
	}
}
