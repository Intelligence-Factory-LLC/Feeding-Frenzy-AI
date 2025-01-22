using BasicUtilities;
using BasicUtilities.Collections;
using FeedingFrenzy.Admin.Business.ChatAgents;
using FeedingFrenzy.Data;
using FeedingFrenzy.Features;
using System.Data;
using WebAppUtilities;

namespace FeedingFrenzy.Admin.Business
{
    public partial class LeadNotes : JsonWs
    {
        static public List<LeadNotesRow> GetFollowUps(int SalesRepresentativeID)
        {
            LeadNotesDataTable dtLeadNotes = LeadNotesRepository.GetFollowUpsBySalesRepresentativeID(SalesRepresentativeID, DateTime.Now.AddDays(-60), DateTime.Now.AddDays(14));

            Set<int> setLeads = new Set<int>();

            List<LeadNotesRow> lstLeadNotes = new List<LeadNotesRow>();

            //The most recent note sets the follow up date
            foreach (LeadNotesRow oLeadNote in dtLeadNotes.OrderByDescending(x => x.LeadNoteID))
            {
                if (null != oLeadNote.FollowUpDate && !setLeads.Contains(oLeadNote.LeadID))
                {
                    lstLeadNotes.Add(oLeadNote);
                    setLeads.Add(oLeadNote.LeadID);
                }
            }

            return lstLeadNotes.OrderBy(x => x.FollowUpDate).ToList();
        }

        static public List<LeadNotesRow> GetFollowUps2(int SalesRepresentativeID)
        {
            List<LeadNotesRow> lstLeadNotes = LeadNotes.GetFollowUps(SalesRepresentativeID);

            return lstLeadNotes;
        }

        static public List<LeadNotesRow> GetFollowUpsByTagID(int SalesRepresentativeID, int TagID)
        {
            LeadNotesDataTable dtLeadNotes = LeadNotesRepository.GetFollowUpsBySalesRepresentativeIDTagID(SalesRepresentativeID, TagID, DateTime.Now.AddDays(-60), DateTime.Now.AddDays(14));

            Set<int> setLeads = new Set<int>();

            List<LeadNotesRow> lstLeadNotes = new List<LeadNotesRow>();

            //The most recent note sets the follow up date
            foreach (LeadNotesRow oLeadNote in dtLeadNotes.OrderByDescending(x => x.LeadNoteID))
            {
                if (null != oLeadNote.FollowUpDate && !setLeads.Contains(oLeadNote.LeadID))
                {
                    lstLeadNotes.Add(oLeadNote);
                    setLeads.Add(oLeadNote.LeadID);
                }
            }

            return lstLeadNotes.OrderBy(x => x.FollowUpDate).ToList();
        }

        static public List<LeadNotesRow> GetFollowUpsByTagID2(int SalesRepresentativeID, int TagID)
        {
            List<LeadNotesRow> lstLeadNotes = LeadNotes.GetFollowUpsByTagID(SalesRepresentativeID, TagID);
            return lstLeadNotes;
        }


        static public LeadNotesRow? GetFollowUpByLeadID(int LeadID)
        {
            LeadNotesDataTable dtLeadNotes = LeadNotesRepository.GetLeadNotesByLeadID(LeadID);
            LeadNotesRow? rowLeadNote = dtLeadNotes.Where(x => x.FollowUpDate != null).OrderByDescending(x => x.FollowUpDate).FirstOrDefault();
            return rowLeadNote;
        }

        //	public static int InsertEmailAsNote(
        //int LeadID,
        //int SalesRepresentativeID,
        //string Notes,
        //int RawEmailID)
        //	{
        //		try
        //		{
        //			LeadNotesDataTable dtLeadNotes = LeadNotesRepository.GetLeadNotesByLeadID(LeadID);
        //			if (dtLeadNotes.Any(x => x.DataObject.GetIntOrNull("RawEmailID") == RawEmailID))
        //				return 0;

        //			int iLeadNoteID = LeadNotesRepository.InsertLeadNote(
        //				null,
        //				LeadID,
        //				SalesRepresentativeID,
        //				Notes,
        //				null,
        //				JsonUtil.ToString(new { RawEmailID = RawEmailID }).ToString()
        //			);

        //			RawEmailsRow rowRawEmail = RawEmailsRepository.Get(RawEmailID);

        //			LeadNotesRepository.UpdateDateCreated(iLeadNoteID, rowRawEmail.DateCreated);


        //			return iLeadNoteID;
        //		}
        //		catch (RooTrax.Common.DB.InsertFailedException err)
        //		{
        //			throw new JsonWsException(err.Message, err);
        //		}
        //	}


        public static int InsertLeadNote(
            int LeadID,
            int SalesRepresentativeID,
            string Notes,
            DateTime? FollowUpDate,
            string? Data,
            int? LeadNoteTypeID)
        {
            try
            {
                if (null == LeadNoteTypeID)
                {
                    if (StringUtil.InString(Notes, "Contacted - Emailed"))
                    {
                        LeadNoteTypeID = LeadNoteTypesEnum.Email.LeadNoteTypeID;
                    }
                }

                int iLeadNoteID = LeadNotesRepository.InsertLeadNote(
                    LeadNoteTypeID,
                    LeadID,
                    SalesRepresentativeID,
                    Notes,
                    FollowUpDate,
                    Data
                );

                if (FollowUpDate != null && FollowUpDate.Value > DateTime.Now)
                {
                    LeadTags.RemoveLeadTag2(LeadID, "Follow Up");
                }

                if (StringUtil.InString(Notes, "Contacted"))
                {
                    LeadsRow rowLead = LeadsRepository.Get(LeadID) ?? throw new Exception("Could not find lead: " + LeadID);
                    rowLead.LastContactedDate = DateTime.Now;
                    LeadsRepository.UpdateLead(rowLead);
                }

                if (null != FollowUpDate)
                {
                    LeadsRepository.UpdateFollowUpDate(LeadID, FollowUpDate);
                }

                return iLeadNoteID;
            }
            catch (RooTrax.Common.DB.InsertFailedException err)
            {
                throw new JsonWsException(err.Message, err);
            }
        }

        static public void ProcessEmailTrackingPixel(string strID)
        {
            if (!StringUtil.IsEmpty(strID))
            {
                string[] strSplits = StringUtil.Split(strID, "_");
                if (strSplits.Length == 2)
                {
                    int iLeadID = Convert.ToInt32(strSplits[0]);
                    string strEmailID = strSplits[1];

                    LeadNotesDataTable dtLeadNotes = LeadNotesRepository.GetLeadNotesByLeadID(iLeadID);
                    LeadNotesRow? rowLeadNote = dtLeadNotes.FirstOrDefault(x => StringUtil.EqualNoCase(x.DataObject.GetStringOrNull("EmailTrackingID"), strID));

                    if (null != rowLeadNote)
                    {
                        rowLeadNote.DataObject["IsOpened"] = true;
                        rowLeadNote.DataObject["LastOpenedDate"] = DateTime.Now;
                        rowLeadNote.DataObject["OpenCount"] = rowLeadNote.DataObject.GetIntOrDefault("OpenCount", 0) + 1;
                        LeadNotesRepository.UpdateLeadNoteData(rowLeadNote.LeadNoteID, rowLeadNote.Data);
                    }
                }
            }
        }


        static public int InsertAppointmentSet(int LeadID, int SalesRepresentativeID, DateTime? FollowUpDate, string Notes, string Data)
        {
            Leads.UpdateLeadStatusSimple(LeadID, "In the Pipeline", "Appointment Set");
            return LeadNotes.InsertLeadNote(LeadID, SalesRepresentativeID, Notes, FollowUpDate, Data, LeadNoteTypesEnum.AppointmentSet.LeadNoteTypeID);
        }
        static public int InsertAppointmentGiven(int LeadID, int SalesRepresentativeID, DateTime? FollowUpDate, string Notes, string Data)
        {
            Leads.UpdateLeadStatusSimple(LeadID, "In the Pipeline", "Presented");
            return LeadNotes.InsertLeadNote(LeadID, SalesRepresentativeID, Notes, FollowUpDate, Data, LeadNoteTypesEnum.Presented.LeadNoteTypeID);
        }



        public class AppointmentsDTO
        {
            public int SalesRepresentativeID { get; set; }
            public string? Name { get; set; }
            public string? Title { get; set; }
            public DateTime Start { get; set; }
            public DateTime? End { get; set; }
            public string? ClassName { get; set; }
        }

        static public List<AppointmentsDTO> GetAppointments()
        {
            // Retrieve lead notes filtered by appointment type
            List<LeadNotesRow> lstNotes = LeadNotesRepository.GetLeadNotesByLeadNoteTypeIDSp_PagingSp(
                LeadNoteTypesEnum.AppointmentSet.LeadNoteTypeID, "", "LeadNoteID", true, 0, 1000);

            List<AppointmentsDTO> lstAppointments = new List<AppointmentsDTO>();

            foreach (LeadNotesRow rowNote in lstNotes)
            {
                AppointmentsDTO oAppointment = new AppointmentsDTO();
                oAppointment.SalesRepresentativeID = rowNote.SalesRepresentativeID;
                oAppointment.Name = rowNote.SalesRepresentative?.Name ?? "Unknown";
                oAppointment.Title = $"{oAppointment.Name} - Appointment with {rowNote.Lead?.FirstName} {rowNote.Lead?.LastName}";
                oAppointment.Start = rowNote.FollowUpDate ?? DateTime.Now;
                oAppointment.End = rowNote.FollowUpDate;

                string? status = rowNote.DataObject.GetStringOrNull("AppointmentStatus");
                switch (status)
                {
                    case "Scheduled":
                        oAppointment.ClassName = "bg-primary";
                        break;
                    case "Presented":
                        oAppointment.ClassName = "bg-success";
                        break;
                    case "Rescheduled":
                        oAppointment.ClassName = "bg-warning";
                        break;
                    case "NoShow":
                        oAppointment.ClassName = "bg-danger";
                        break;
                    case "Closed / WON":
                        oAppointment.ClassName = "bg-info";
                        break;
                    default:
                        oAppointment.ClassName = "bg-secondary";
                        break;
                }

                lstAppointments.Add(oAppointment);
            }

            return lstAppointments;
        }

        public class GoogleDocsDTO
        {
            public int LeadID { get; set; }
            public int SalesRepresentativeID { get; set; }
            public string? SalesRepresentativeName { get; set; }
            public string? Title { get; set; }
            public string? DocumentID { get; set; }
            public string? Content { get; set; }
            public DateTime CreatedDate { get; set; }
        }

        static public int InsertGoogleDocFile(int LeadID, int SalesRepresentativeID, string DocumentID)
        {
            var docInfo = Buffaly.SemanticDB.Ingestion.GoogleDocs.InsertOrUpdateGoogleDocument(DocumentID);

            LeadNotesRow? rowLeadNote = GetGoogleDocsLeadNoteByDocumentID(LeadID, DocumentID);
            if (null == rowLeadNote)
            {
                int iLeadNoteID = LeadNotes.InsertLeadNote(LeadID, SalesRepresentativeID, docInfo.Title, null,
                    JsonUtil.ToString(new { GoogleDocID = docInfo.DocumentID, GoogleDocTitle = docInfo.Title, LeadInfoFragmentID = docInfo.FragmentID, RevisionID = docInfo.RevisionID }).ToString(),
                        LeadNoteTypesEnum.GoogleDocFile.LeadNoteTypeID);

                return iLeadNoteID;

            }

            return rowLeadNote.LeadNoteID;
        }

        static public LeadNotesRow? GetGoogleDocsLeadNoteByDocumentID(int LeadID, string DocumentID)
        {
            LeadNotesDataTable lstNotes = LeadNotesRepository.GetLeadNotesByLeadIDLeadNoteTypeID(LeadID, LeadNoteTypesEnum.GoogleDocFile.LeadNoteTypeID);
            LeadNotesRow? rowLeadNote = lstNotes.FirstOrDefault(x => x.DataObject.GetStringOrNull("GoogleDocID") == DocumentID);
            return rowLeadNote;
        }

        static internal async Task<List<GoogleDocsDTO>> GetGoogleDocsFilesByLeadIDAsync(int LeadID)
        {
            return await Task.FromResult(GetGoogleDocsFilesByLeadID(LeadID));
        }

        static public List<GoogleDocsDTO> GetGoogleDocsFilesByLeadIDSync(int LeadID)
        {
            return Task.Run(() => GetGoogleDocsFilesByLeadIDAsync(LeadID)).Result;
        }

        static public List<GoogleDocsDTO> GetGoogleDocsFilesByLeadID(int LeadID)
        {
            LeadNotesDataTable lstNotes = LeadNotesRepository.GetLeadNotesByLeadIDLeadNoteTypeID(LeadID, LeadNoteTypesEnum.GoogleDocFile.LeadNoteTypeID);

            List<GoogleDocsDTO> lstGoogleDocs = new List<GoogleDocsDTO>();
            foreach (LeadNotesRow rowNote in lstNotes)
            {
                GoogleDocsDTO oDoc = new GoogleDocsDTO();

                oDoc.LeadID = rowNote.LeadID;
                oDoc.SalesRepresentativeID = rowNote.SalesRepresentativeID;
                oDoc.SalesRepresentativeName = rowNote.SalesRepresentative?.Name ?? "Unknown";
                oDoc.Title = rowNote.DataObject.GetStringOrNull("GoogleDocTitle") ?? "Untitled Document";
                oDoc.DocumentID = rowNote.DataObject.GetStringOrNull("GoogleDocID");
                oDoc.CreatedDate = rowNote.DateCreated;
                lstGoogleDocs.Add(oDoc);

				Task.Run(() =>
				{
					Logs.DebugLog.WriteEvent("GoogleDocument -> Buffaly", "Starting");

					try
					{
						Buffaly.SemanticDB.Ingestion.GoogleDocs.InsertOrUpdateGoogleDocument(rowNote.DataObject.GetStringOrNull("GoogleDocID") ?? "");

						if (OrganizationFeature.Feature.IsAgentChatEnabled)
						{
							if (StringUtil.IsEmpty(rowNote.DataObject.GetStringOrNull("PrototypeName")))
							{
								SendGoogleDocumentToBuffaly(rowNote);
							}
						}
					}
					catch (Exception ex)
					{
						Logs.LogError(ex);
					}

					Logs.DebugLog.WriteEvent("GoogleDocument -> Buffaly", "Stopping");
				});
			}

            return lstGoogleDocs;
        }

		public static void SendGoogleDocumentToBuffaly(LeadNotesRow rowNote, bool bForceRefresh = false)
		{
			string? strLeadPrototype = rowNote.Lead?.DataObject.GetStringOrNull("PrototypeName");
			if (null == strLeadPrototype && !bForceRefresh)
				return;

			string ? strDocumentID = rowNote.DataObject.GetStringOrNull("GoogleDocID");
			if (null == strDocumentID)
				return;

			string strTitle = rowNote.DataObject.GetStringOrNull("GoogleDocTitle") ?? "Untitled Document";
			string strPrototypeName = FeedingFrenzyAgent.InsertGoogleDocumentEntity(strTitle, strDocumentID, strLeadPrototype);
			rowNote.DataObject["PrototypeName"] = strPrototypeName;

			LeadNotesRepository.UpdateLeadNoteData(rowNote);
		}

	}
}
