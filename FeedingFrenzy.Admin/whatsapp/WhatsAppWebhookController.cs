using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BasicUtilities;
using Microsoft.AspNetCore.Authorization;
using FeedingFrenzy.WhatsApp;

namespace FeedingFrenzy.Admin.whatsapp
{
    [Route("WhatsAppWebhook")]
    [ApiController]
    [AllowAnonymous]
    public class WhatsAppWebhookController : ControllerBase
    {
        
        private const string VERIFY_TOKEN = "123";       

        // GET: api/webhook (Used for Webhook Verification)
        [HttpGet]
        public string ValidateWhatsapp(
            [FromQuery(Name = "hub.mode")] string mode,
            [FromQuery(Name = "hub.verify_token")] string token,
            [FromQuery(Name = "hub.challenge")] string challenge)
        {
            Logs.DebugLog.WriteEvent("whastapp WhatsAppWebhook", "Received Webhook Validation Request Get");

            WhatsAppFeature feature = WhatsAppFeature.Feature;
            // Validate the mode and token
            if (mode == "subscribe" && token == feature.VERIFY_TOKEN)
            {
                return challenge;  // Respond with the hub.challenge to verify the webhook
            }
                        
            return ""; 
        }

        // POST: api/webhook (Used for handling incoming WhatsApp messages)
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] dynamic body)
        {
            Logs.DebugLog.WriteEvent("whastapp WhatsAppWebhook", "Received Webhook POST Request");

            
            
            Logs.DebugLog.WriteEvent("Incoming message: {0}", body.ToString());

            WhatsAppService service = new WhatsAppService();
            if (service.ReceveidMessage(body.ToString()))            
            {
                // Respond with a 200 status code to indicate the message was received
                return Ok();
            }
            else
            {
                return NotFound();
            }
            
            
        }
    }
}
