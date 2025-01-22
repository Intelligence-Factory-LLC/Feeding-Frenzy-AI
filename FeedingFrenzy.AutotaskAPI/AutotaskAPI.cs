using WebAppUtilities;
using FeedingFrenzy.Common;

namespace FeedingFrenzy.AutotaskAPI
{
    public class AutotaskAPI : JsonWs
    {
        public static CompaniesDTO GetCompanyByCallID(int iCallID)
        {
            AutotaskHelper _autotaskHelper = new AutotaskHelper();
            var result = _autotaskHelper.GetCompanyByCallID(iCallID);

            CompaniesDTO oCompanies = new CompaniesDTO
            {
                CompanyID = result.CompanyID,
                CompanyName = result.CompanyName
            };

            return oCompanies;
        }

        public static List<TicketsDTO> GetTicketsByCompanyID(int iCompanyID)
        {
            AutotaskHelper _autotaskHelper = new AutotaskHelper();

            var result = _autotaskHelper.GetTicketsByCompanyID(iCompanyID);

            List<TicketsDTO> lstTickets = new List<TicketsDTO>();
            foreach (var oTicket in result)
            {
                TicketsDTO oTickets = new TicketsDTO
                {
                    TicketID = oTicket.TicketID,
                    TicketNumber = oTicket.TicketNumber,
                    Title = oTicket.Title,
                    Description = oTicket.Description,
                    DueDateTime = oTicket.DueDateTime,
                    Status = oTicket.Status
                };
                lstTickets.Add(oTickets);
            }

            return lstTickets;
        }

        public static void CreateTicket(int CompanyID, int CallID, DateTime DueDateTime)
        {
            AutotaskHelper _autotaskHelper = new AutotaskHelper();
            _autotaskHelper.CreateTicket(CompanyID, CallID, DueDateTime);
        }

        public static void UpdateTicket(int CompanyID, int TicketID, int CallID, DateTime DueDateTime)
        {
            AutotaskHelper _autotaskHelper = new AutotaskHelper();
            _autotaskHelper.UpdateTicket(CompanyID, TicketID, CallID, DueDateTime);
        } 
    }
}
