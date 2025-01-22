namespace FeedingFrenzy.Common
{
    public class AutotaskHelper : IAutotaskHelper
    {
        public External.Services.AutotaskHelper.CompaniesDTO GetCompanyByCallID(int iCallID)
        {
            External.Services.AutotaskHelper autotaskHelper = 
                new External.Services.AutotaskHelper();

            return autotaskHelper.GetCompanyByCallID(iCallID);
        }

        public List<External.Services.AutotaskHelper.TicketsDTO> GetTicketsByCompanyID(int iCompanyID)
        {
            External.Services.AutotaskHelper autotaskHelper =
                new External.Services.AutotaskHelper();

            return autotaskHelper.GetTicketsByCompanyID(iCompanyID);

        }
        public void CreateTicket(int CompanyID, int CallID, DateTime DueDateTime)
        {
            External.Services.AutotaskHelper autotaskHelper =
                new External.Services.AutotaskHelper();

            autotaskHelper.CreateTicket(CompanyID, CallID, DueDateTime);
        }   

        public void UpdateTicket(int CompanyID, int TicketID, int CallID, DateTime DueDateTime)
        {
            External.Services.AutotaskHelper autotaskHelper =
                new External.Services.AutotaskHelper();

            autotaskHelper.UpdateTicket(CompanyID,TicketID,CallID,DueDateTime);

        }


    }
}
