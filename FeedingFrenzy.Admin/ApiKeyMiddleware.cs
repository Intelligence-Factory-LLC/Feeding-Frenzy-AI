using BasicUtilities;
using FeedingFrenzy.Admin.Business;
using static FeedingFrenzy.Admin.Business.Authorizations;

namespace FeedingFrenzy.Admin
{
	public class ApiKeyMiddleware
	{
		private readonly RequestDelegate _next;

		public ApiKeyMiddleware(RequestDelegate next)
		{
			_next = next;
		}

		public async Task InvokeAsync(HttpContext context)
		{
			// Only apply this middleware to /api/* requests
			if (context.Request.Path.StartsWithSegments("/api"))
			{
				if (!context.Request.Headers.ContainsKey("Authorization"))
				{
					context.Response.StatusCode = StatusCodes.Status401Unauthorized;
					await context.Response.WriteAsync("Authorization header missing");
					return;
				}

				string authorizationHeader = context.Request.Headers["Authorization"].ToString();
				if (string.IsNullOrEmpty(authorizationHeader) || !authorizationHeader.StartsWith("Bearer "))
				{
					context.Response.StatusCode = StatusCodes.Status401Unauthorized;
					await context.Response.WriteAsync("Invalid Authorization header");
					return;
				}

				string token = StringUtil.RightOfFirst(authorizationHeader, "Bearer ").Trim();
				try
				{
					var tuple = Authorizations.IsAuthorized(token);
					if (!tuple.Item1)
					{
						context.Response.StatusCode = StatusCodes.Status401Unauthorized;
						await context.Response.WriteAsync("Unauthorized");
						return;
					}
				}
				catch (AuthorizationFailedException)
				{
					context.Response.StatusCode = StatusCodes.Status401Unauthorized;
					await context.Response.WriteAsync("Unauthorized");
					return;
				}			
			}

			// Continue to the next middleware
			await _next(context);
		}
	}
}
