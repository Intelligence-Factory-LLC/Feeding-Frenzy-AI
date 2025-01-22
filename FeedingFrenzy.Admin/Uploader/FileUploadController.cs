using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Threading.Tasks;

namespace FeedingFrenzy.Admin.Uploader
{
    [Route("[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class FileUploadController : ControllerBase
    {
        [HttpPost("upload")]
        [AllowAnonymous]
        public async Task<IActionResult> UploadFile([FromForm] IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("No file was uploaded.");
            }

            // Define where to save the uploaded file
            var savePath = "C:\\temp\\bulk_upload_files\\";

            // Ensure the directory exists
            if (!Directory.Exists(savePath))
            {
                Directory.CreateDirectory(savePath);
            }

            // Generate a unique name for the file and save it
            var filePath = Path.Combine(savePath, file.FileName);

            if (System.IO.File.Exists(filePath))
                System.IO.File.Delete(filePath);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            return Ok(new { message = "File uploaded successfully", fileName = file.FileName });
        }
    }
}
