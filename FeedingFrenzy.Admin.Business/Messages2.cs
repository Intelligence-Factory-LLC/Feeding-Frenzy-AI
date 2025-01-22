using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FeedingFrenzy.Data;
using WebAppUtilities;

namespace FeedingFrenzy.Admin.Business
{
    public partial class Messages : JsonWs
    {
        public static MessagesDataTable GetMessagesByPhone(string Phone)
        {
            return MessagesRepository.GetByPhone(Phone);
        }
    }
}
