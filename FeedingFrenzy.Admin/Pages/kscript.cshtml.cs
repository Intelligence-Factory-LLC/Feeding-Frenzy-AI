using BasicUtilities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Primitives;
using FeedingFrenzy.Admin.Business.Admin.API;
using FeedingFrenzy.Admin.UI;
using System.Diagnostics.Metrics;
using Microsoft.AspNetCore.Authorization;
using FeedingFrenzy.Admin.Business;

namespace FeedingFrenzy.Admin.Pages
{
    [Authorize]
    public class kscriptModel : BaseModel
    {
		private readonly RewriteOptionsService _rewriteOptionsService;

		public kscriptModel(RewriteOptionsService rewriteOptionsService)
        {
			_rewriteOptionsService = rewriteOptionsService;
		}

		public void OnGet()
		{
			Logs.DebugLog.WriteEvent("kScript", "Get");

			try
			{
				RooTraxState.Reset();
				_rewriteOptionsService.ResetOptions();
				_rewriteOptionsService.AddRewriteRules();

				Initializer.ResetCache();
			}
			catch (Exception err)
			{
				Logs.LogError(err);
			}
		}




	}
}