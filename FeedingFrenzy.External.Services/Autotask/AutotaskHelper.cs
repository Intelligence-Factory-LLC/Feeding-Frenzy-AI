using FeedingFrenzy.Data;
using System.Net;
using WebAppUtilities;
using BasicUtilities;

namespace FeedingFrenzy.External.Services
{
    public class AutotaskHelper
    {

        public readonly string BaseUrl;
        public readonly string ApiIntegrationCode;
        public readonly string UserName;
        public readonly string Secret;

        public AutotaskHelper()
        {

            ServicePointManager.SecurityProtocol |= SecurityProtocolType.Tls12;

            AutotaskFeature oFeature = AutotaskFeature.GetFeature();
            ApiIntegrationCode = oFeature.ApiIntegrationCode;
            UserName = oFeature.UserName;
            Secret = oFeature.Secret;
            BaseUrl = oFeature.BaseUrl;
        }

        public class CompaniesDTO
        {
            public int CompanyID { get; set; } 
            public string? CompanyName { get; set; }

        }
        public class TicketsDTO
        {
            public int TicketID { get; set; }
            public string? TicketNumber { get; set; }
            public string? Title { get; set; }
            public string? Description { get; set; }
            public string? DueDateTime { get; set; }
            public string? Status { get; set; }
        }  
        

        public CompaniesDTO GetCompanyByCallID(int iCallID)
        {
            CallsRow rowCall = CallsRepository.Get(iCallID);

            if (rowCall == null)
                throw new JsonWsException("Call not found");

            if (rowCall.CallStatus != "completed")
                throw new JsonWsException("Call is not completed");

            int? iLeadNoteID = rowCall.DataObject.GetIntOrNull("LeadNoteID");
            LeadNotesRow rowLeadNote = LeadNotesRepository.Get(iLeadNoteID ?? 0);
            if (rowLeadNote == null)
                throw new JsonWsException("Lead Note not found");

            LeadsRow? rowLead = rowLeadNote.Lead;
            if (rowLead == null)
                throw new JsonWsException("Lead not found");

            if (string.IsNullOrEmpty(rowLead.Phone))
                throw new JsonWsException("Lead Phone not found");

            AutotaskCompanies autotaskCompanies = new AutotaskCompanies();
            JsonArray? oCompanies = autotaskCompanies.GetCompanyByPhone(rowLead.Phone);
            if (oCompanies == null || oCompanies.Count == 0)
                throw new JsonWsException("Company not found");

            string strCompanyID = oCompanies?
                .FirstOrDefault()?
                .ToJsonObject()?["id"]?.ToString() ?? string.Empty;

            if (string.IsNullOrEmpty(strCompanyID))
                throw new JsonWsException("Company ID not found");

            string strCompanyName = oCompanies?
                .FirstOrDefault()?
                .ToJsonObject()?["companyName"]?.ToString() ?? string.Empty;    

            return new CompaniesDTO { CompanyID = int.Parse(strCompanyID), CompanyName = strCompanyName };  

        }

        public List<TicketsDTO> GetTicketsByCompanyID(int iCompanyID)
        {
            AutotaskTickets autotaskTickets = new AutotaskTickets();
            JsonArray? oTickets = autotaskTickets.GetTicketsByCompanyID(iCompanyID);

            if (oTickets == null || oTickets.Count == 0)
                throw new JsonWsException("Tickets not found");

            List<TicketsDTO> tickets = new List<TicketsDTO>();

            foreach (JsonObject oTicket in oTickets!)
            {
                string strTicketID = oTicket["id"]?.ToString() ?? string.Empty;
                string strTicketNumber = oTicket["ticketNumber"]?.ToString() ?? string.Empty;
                string strTitle = oTicket["title"]?.ToString() ?? string.Empty;
                string strDescription = oTicket["description"]?.ToString() ?? string.Empty;
                string sDueDateTime = oTicket["dueDateTime"]?.ToString() ?? string.Empty;
                string strStatus = oTicket["status"]?.ToString() ?? string.Empty;

                tickets.Add(new TicketsDTO { TicketID = int.Parse(strTicketID), TicketNumber = strTicketNumber, Title = strTitle, Description = strDescription, DueDateTime = sDueDateTime, Status = strStatus });
            }

            return tickets;
        }   

        public void AttachTranscriptionToTicket(int iCallID)
        {
            CallsRow rowCall = CallsRepository.Get(iCallID);

            if (rowCall == null)
                throw new JsonWsException("Call not found");

            if (rowCall.CallStatus != "completed")
                throw new JsonWsException("Call is not completed");

            int? iLeadNoteID = rowCall.DataObject.GetIntOrNull("LeadNoteID");
            LeadNotesRow rowLeadNote = LeadNotesRepository.Get(iLeadNoteID ?? 0);
            if (rowLeadNote == null)
                throw new JsonWsException("Lead Note not found");

            LeadsRow? rowLead = rowLeadNote.Lead;
            if (rowLead == null)
                throw new JsonWsException("Lead not found");

            if (string.IsNullOrEmpty(rowLead.Phone))
                throw new JsonWsException("Lead Phone not found");

            AutotaskCompanies autotaskCompanies = new AutotaskCompanies();
            JsonArray? oCompanies = autotaskCompanies.GetCompanyByPhone(rowLead.Phone);
            if (oCompanies == null || oCompanies.Count == 0)
                throw new JsonWsException("Company not found");

            string strCompanyID = oCompanies?
                .FirstOrDefault()?
                .ToJsonObject()?["id"]?.ToString() ?? string.Empty;

            if (string.IsNullOrEmpty(strCompanyID))
                throw new JsonWsException("Company ID not found");

            AutotaskTickets autotaskTickets = new AutotaskTickets();
            JsonArray? oTickets =
                autotaskTickets.GetTicketsByCompanyID(int.Parse(strCompanyID));

            if (oTickets == null || oTickets.Count == 0)
            {
                CreateTicket(autotaskTickets, strCompanyID, rowLead, rowCall);

                return;
            }

            Dictionary<string, JsonObject> mapActiveTickets =
                new Dictionary<string, JsonObject>();

            foreach (JsonObject oTicket in oTickets!)
            {
                string strTicketID =
                    oTicket["id"]?.ToString() ?? string.Empty;

                string sDueDateTime =
                    oTicket["dueDateTime"]?.ToString() ?? string.Empty;

                DateTime dDueDateTime = DateTime.Parse(sDueDateTime);

                bool isExpired = dDueDateTime < DateTime.Now;
                if (!isExpired)
                    mapActiveTickets.Add(strTicketID, oTicket);
            }

            if (mapActiveTickets.Count == 0)
            {
                CreateTicket(autotaskTickets, strCompanyID, rowLead, rowCall);
                return;
            }

            //TODO: What happend if there are multiple active tickets?
            if (mapActiveTickets.Count > 1)
                throw new JsonWsException("Multiple active tickets found");

            int iTicketID =
                int.Parse(mapActiveTickets.Keys.First());
            
            //The description already exists so I take the new transcription as a Ticket Note
            var oTicketNotes =
                autotaskTickets.CreateNoteByTicketID(iTicketID, "New Ticket Note", rowCall.TranscriptionSummary ?? string.Empty);

            if (oTicketNotes == null)
                throw new JsonWsException("The Ticket Note could not be created");

            LeadsRow rowLeadUpdate = new LeadsRow(rowLead);
            rowLeadUpdate.DataObject["Autotask.Tickets"] = oTickets;
            rowLeadUpdate.DataObject["Autotask.TicketNote"] = oTicketNotes;
            LeadsRepository.UpdateLeadData(rowLeadUpdate);

        }

        public void CreateTicket(int CompanyID,int CallID, DateTime DueDateTime)
        {
            CallsRow rowCall = CallsRepository.Get(CallID);

            if (rowCall == null)
                throw new JsonWsException("Call not found");

            if (rowCall.CallStatus != "completed")
                throw new JsonWsException("Call is not completed");

            int? iLeadNoteID = rowCall.DataObject.GetIntOrNull("LeadNoteID");
            LeadNotesRow rowLeadNote = LeadNotesRepository.Get(iLeadNoteID ?? 0);
            if (rowLeadNote == null)
                throw new JsonWsException("Lead Note not found");

            LeadsRow? rowLead = rowLeadNote.Lead;
            if (rowLead == null)
                throw new JsonWsException("Lead not found");

            if (string.IsNullOrEmpty(rowLead.Phone))
                throw new JsonWsException("Lead Phone not found");

            AutotaskTickets autotaskTickets = new AutotaskTickets();
            JsonObject? oResult =
                 autotaskTickets.CreateTicket(CompanyID, string.Empty, rowCall.TranscriptionSummary ?? string.Empty, DueDateTime);

            if (oResult.ContainsKey("errors") && oResult["errors"] != null)
            {
                string sError = oResult["errors"]?.ToString() ?? string.Empty;

                Logs.DebugLog.WriteError(sError);

                throw new JsonWsException(sError);
            }

            string strTicketID =
                oResult["itemId"]?.ToString() ?? string.Empty;

            if (string.IsNullOrEmpty(strTicketID))
                throw new JsonWsException("The Ticket could not be created");

            var oTicket =
                autotaskTickets.GetTicketByID(int.Parse(strTicketID));

            if (oTicket == null)
                throw new JsonWsException("The Ticket could not be found");

            LeadsRow rowLeadUpdate = new LeadsRow(rowLead);
            rowLeadUpdate.DataObject["Autotask.Tickets"] = oTicket;
            LeadsRepository.UpdateLeadData(rowLeadUpdate);

        }

        public void UpdateTicket(int CompanyID,int TicketID, int CallID, DateTime DueDateTime)
        {
            CallsRow rowCall = CallsRepository.Get(CallID);

            if (rowCall == null)
                throw new JsonWsException("Call not found");

            if (rowCall.CallStatus != "completed")
                throw new JsonWsException("Call is not completed");

            int? iLeadNoteID = rowCall.DataObject.GetIntOrNull("LeadNoteID");
            LeadNotesRow rowLeadNote = LeadNotesRepository.Get(iLeadNoteID ?? 0);
            if (rowLeadNote == null)
                throw new JsonWsException("Lead Note not found");

            LeadsRow? rowLead = rowLeadNote.Lead;
            if (rowLead == null)
                throw new JsonWsException("Lead not found");

            if (string.IsNullOrEmpty(rowLead.Phone))
                throw new JsonWsException("Lead Phone not found");

            AutotaskTickets autotaskTickets = new AutotaskTickets();
            JsonArray? oTickets =
                 autotaskTickets.GetTicketByID(TicketID);

            if (oTickets != null && oTickets.Count > 0)
            {
                var oTicket =
                    autotaskTickets.UpdateTicket(CompanyID,TicketID, rowCall.TranscriptionSummary ?? string.Empty, DueDateTime);

                if (oTicket == null)
                    throw new JsonWsException("The Ticket could not be updated");

            }
            else
            {              

                throw new JsonWsException("No ticket data found.");
            }

        }
        public void CreateTicket(AutotaskTickets autotaskTickets, string strCompanyID, LeadsRow rowLead, CallsRow rowCall)
        {
            //TODO: Temporal Hack for 1 day by default   
            DateTime dDueDateTime = DateTime.Now.AddDays(1);
            JsonObject? oResult =
                 autotaskTickets.CreateTicket(int.Parse(strCompanyID), string.Empty, rowCall.TranscriptionSummary ?? string.Empty, dDueDateTime);

            if (oResult.ContainsKey("errors") && oResult["errors"] != null)
            {
                string sError = oResult["errors"]?.ToString() ?? string.Empty;

                Logs.DebugLog.WriteError(sError);

                throw new JsonWsException(sError);
            }

            string strTicketID =
                oResult["itemId"]?.ToString() ?? string.Empty;

            if (string.IsNullOrEmpty(strTicketID))
                throw new JsonWsException("The Ticket could not be created");

            var oTicket =
                autotaskTickets.GetTicketByID(int.Parse(strTicketID));

            if (oTicket == null)
                throw new JsonWsException("The Ticket could not be found");

            LeadsRow rowLeadUpdate = new LeadsRow(rowLead);
            rowLeadUpdate.DataObject["Autotask.Tickets"] = oTicket;
            LeadsRepository.UpdateLeadData(rowLeadUpdate);

        }

	}
}
