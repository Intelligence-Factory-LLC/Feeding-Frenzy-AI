using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FeedingFrenzy.Admin.Business
{
    public class SalesRepresentativeReportHelper
    {
        static public List<DateTime> GetWorkDays(DateTime StartDate, DateTime StopDate)
        {
            List<DateTime> lstDates = new List<DateTime>();

            for (DateTime i = StartDate; i <= StopDate; i = i.AddDays(1))
            {
                if (i.DayOfWeek >= DayOfWeek.Monday && i.DayOfWeek <= DayOfWeek.Friday)
                    lstDates.Add(i);
            }

            return lstDates;
        }


    }
}
