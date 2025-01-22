using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FeedingFrenzy.Common
{
    public interface IAutotaskHelper
    {
        External.Services.AutotaskHelper.CompaniesDTO GetCompanyByCallID(int iCallID);
        List<External.Services.AutotaskHelper.TicketsDTO> GetTicketsByCompanyID(int iCompanyID);
        void CreateTicket(int CompanyID, int CallID, DateTime DueDateTime);
        void UpdateTicket(int CompanyID, int TicketID, int CallID, DateTime DueDateTime);
    }
}
