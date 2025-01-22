using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FeedingFrenzy.Common
{
    public class TicketsDTO
    {
        public int TicketID { get; set; }
        public string? TicketNumber { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? DueDateTime { get; set; }
        public string? Status { get; set; }
    }

}
