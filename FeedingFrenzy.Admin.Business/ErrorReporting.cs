using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAppUtilities;

namespace FeedingFrenzy.Admin.Business
{
	public class ErrorReporting : JsonWs
	{
		public static void ReportError(string Error)
		{
			try
			{
				Exception err = new Exception(Error);
				Logs.LogError(new Exception("UI Error", err));
			}

			catch (Exception)
			{

			}

		}

		public static void ReportEvent(string Event, string Message)
		{
			try
			{
				Logs.DebugLog.WriteEvent("UI Event Logged - " + Event, Message);
			}

			catch (Exception err)
			{
				Logs.LogError(err);
			}
		}
	}
}
