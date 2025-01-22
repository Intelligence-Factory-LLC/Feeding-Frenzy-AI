namespace FeedingFrenzy.Admin.Middelware
{
    public class CaptureOriginalUrlMiddleware
    {
        private readonly RequestDelegate _next;

        public CaptureOriginalUrlMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            // Capture the original request URL before any rewrites
            var originalUrl = context.Request.Path + context.Request.QueryString;
            context.Items["OriginalUrl"] = originalUrl;

            // Call the next middleware in the pipeline
            await _next(context);
        }
    }
}
