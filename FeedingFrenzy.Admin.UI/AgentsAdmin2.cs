
using WebAppUtilities;
using System.Collections.Generic;
namespace FeedingFrenzy.Admin.UI
{
	public partial class AgentsAdmin2 : JsonWs
	{
		public const string KSCRIPT_FILE = @"Agents\AgentsAdmin2.ks.html";
		public static void Initialize()
		{
			RooTraxState.kScriptControl.EvaluateFunction1("using", KSCRIPT_FILE);
		}
		
	}
}
	