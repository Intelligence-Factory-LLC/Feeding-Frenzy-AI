using BasicUtilities;
using FeedingFrenzy.Data;
using Microsoft.AspNetCore.Rewrite;

namespace FeedingFrenzy.Admin
{
	public class RewriteOptionsService
	{
		public RewriteOptions Options { get; private set; }

		public RewriteOptionsService()
		{
			Options = new RewriteOptions();
		}

		public void ResetOptions()
		{
			Options.Rules.Clear();            
        }

		public void AddRewriteRules()
		{
			PageLayoutsDataTable dtPageLayouts = PageLayoutsRepository.GetAll();
			foreach (PageLayoutsRow rowPageLayout in dtPageLayouts)
			{
				if (rowPageLayout.Url.StartsWith("/"))
					rowPageLayout.Url = StringUtil.RightOfFirst(rowPageLayout.Url, "/");

				Logs.DebugLog.WriteEvent(rowPageLayout.Url, rowPageLayout.Handler);

				Options.AddRewrite("^" + rowPageLayout.Url + "$", rowPageLayout.Handler, true);
			}
		}
	}
}
