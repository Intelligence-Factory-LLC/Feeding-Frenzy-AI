using RooTrax.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Intrinsics.Arm;
using System.Text;
using System.Threading.Tasks;
using WebAppUtilities;

namespace FeedingFrenzy.Admin.Business.Tools
{
	public class kScriptWorkbench : JsonWs
	{
		static public string Evaluate(string kScript, string Handler)
		{
			string strResult;

			try
			{
				Reset(Handler);
				strResult = RooTraxState.kScriptControl.EvaluateString(kScript) ?? string.Empty;
			}
			catch (Exception err)
			{
				strResult = err.Message;
				while (err.InnerException != null)
				{
					err = err.InnerException;
					strResult += "\n" + err.Message;
				}
			}

			return strResult;
		}

		static public void Reset(string Handler)
		{
			RooTraxState.Reset();
		}


	}
}
