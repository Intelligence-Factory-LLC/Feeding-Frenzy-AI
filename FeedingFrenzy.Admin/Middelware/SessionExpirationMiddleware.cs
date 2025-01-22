using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace FeedingFrenzy.Admin.Middelware
{
    public class SessionExpirationMiddleware
    {
        private readonly RequestDelegate _next;

        public SessionExpirationMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            // Define routes that do not require session expiration or authentication checks
            List<string> lstExcludedPaths = new List<string>
            {
                "/login", "/createpw", "/logout", "/privacy","/recoverpw", 
                "/register", "/api", "/tw","/thank-you", "/externallogin", 
                "/audiostream", "/WhatsAppWebhook", "/notifications", "/JsonWs/FeedingFrenzy.Admin.Business.Admin.API.Authentication.ashx"
            };

            if (BasicUtilities.Settings.GetBoolOrFalse("IsOnboarding"))
                lstExcludedPaths.Add("/onboarding");

            if (BasicUtilities.Settings.GetBoolOrFalse("IsAuthorizeNet"))
                lstExcludedPaths.Add("/intakeform");

            // If you need it as an array later, you can convert it like this:
            string[] excludedPathsArray = lstExcludedPaths.ToArray();

            if (!lstExcludedPaths.Any(path => context.Request.Path.StartsWithSegments(path, StringComparison.OrdinalIgnoreCase)))
			{
				string urlReferrer = context.Request.Headers["Referer"]!.ToString();
				if (!context.Session.IsAvailable)
				{
					context.Response.Redirect("/login");
					return;
				}
				if (context.User.Identity?.IsAuthenticated != true)
				{
					context.Response.Redirect("/login");
					return;
				}
			}

            await _next(context);
        }
    }
}
