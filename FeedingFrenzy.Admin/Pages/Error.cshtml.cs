using BasicUtilities;
using FeedingFrenzy.Admin.Business.API;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Diagnostics;

namespace FeedingFrenzy.Admin.Pages
{
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    [IgnoreAntiforgeryToken]
    public class ErrorModel : BaseModel
    {
        public string? RequestId { get; set; }
		public string ErrorMessage { get; set; }

		public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);

        private readonly ILogger<ErrorModel> _logger;

        public ErrorModel(ILogger<ErrorModel> logger)
        {
            _logger = logger;
        }

        public IActionResult OnGet()
        {
            RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier;

			var exceptionHandlerPathFeature = HttpContext.Features.Get<IExceptionHandlerFeature>();

			if (exceptionHandlerPathFeature != null)
			{
				// Get the exception that caused the error
				var exception = exceptionHandlerPathFeature.Error;

				// Log the exception
				_logger.LogError(exception, "An unhandled exception occurred.");

				// Optionally, you can set a custom error message to display on the error page
				ErrorMessage = exception.Message;

				if (exception is SessionExpiredException)
				{

					// Get the referring page URL
					string referer = HttpContext.Request.Headers["Referer"].ToString();

					if (!StringUtil.IsEmpty(referer))
					{
						// Convert the referer to a relative path by removing the domain part
						var uri = new Uri(referer);
						var relativePath = uri.PathAndQuery;

						// URL encode the relative path to safely include it in the query string
						var encodedRelativePath = Uri.EscapeDataString(relativePath);

						// Redirect to the login page with the relative referring page in the URL
						return Redirect($"/login?ReturnUrl={encodedRelativePath}");
					}

					else
					{
						return Redirect("/login");
					}

				}
			}

			// Return the Error page for other types of exceptions
			return Page();
		}
    }
}