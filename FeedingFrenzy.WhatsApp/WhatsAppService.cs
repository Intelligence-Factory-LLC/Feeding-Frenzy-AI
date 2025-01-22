using System.Net.Http;
using System.Text;
using System.Text.Json.Serialization;
using BasicUtilities;
using FeedingFrenzy.Data;

namespace FeedingFrenzy.WhatsApp
{
    public class WhatsAppService
    {

        public async Task<bool> ReceveidMessage(string postMessage)
        {
            WhatsAppFeature feature = WhatsAppFeature.Feature;
            bool result = false;
            try
            {
                IncomeEntity? income = new IncomeEntity();

                if (!String.IsNullOrEmpty(postMessage))
                {
                    income = JsonUtil.ConvertTo<IncomeEntity>(postMessage);

					string message = income.entry[0].changes[0].value.messages[0].text.body;
					string from = income.entry[0].changes[0].value.metadata.display_phone_number;

					Logs.ErrorLog.WriteEvent("WhatsApp Business API message", message);
					Logs.ErrorLog.WriteEvent("WhatsApp Business API from", from);
					Logs.ErrorLog.WriteEvent("WhatsApp Business API phone number", feature._phoneNumber);

					JsonObject data = new JsonObject();
					data["IsWhatsApp"] = new JsonValue("true", false);
					MessagesRepository.InsertMessage(message!, feature._phoneNumber, from, data.ToString(), false, true, false);

					result = true;
				}
                else
                {
                    Logs.ErrorLog.WriteEvent("WhatsApp Business API", "Empty post from WhatsApp Business API");
                    result = false;
                }
            }
            catch (Exception ex)
            {
                Logs.LogError(ex);
                result = false;
            }
            return result;
        }

        public async Task<bool> SendMessage(string toPhoneNumber, string messageText)
        {
            WhatsAppFeature feature = WhatsAppFeature.Feature;
            HttpClient _httpClient = new HttpClient();
            _httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {feature._accessToken}");

            bool result = false;
            try
            {
                var url = $"{feature._whatsAppApiUrl}{feature._phoneNumberId}/messages";

                var payload = new
                {
                    messaging_product = "whatsapp",
                    to = toPhoneNumber,
                    type = "text",
                    text = new
                    {
                        body = messageText
                    }
                };

                var jsonPayload = JsonUtil.ToStringExt(payload).ToString();
                var content = new StringContent(jsonPayload, Encoding.UTF8, "application/json");

                var response = await _httpClient.PostAsync(url, content);
                var responseBody = await response.Content.ReadAsStringAsync();
                Logs.DebugLog.WriteEvent("WhatsApp response send message", responseBody);
                response.EnsureSuccessStatusCode(); // Throws an exception if the status code is not 2xx.
                result = true;
            }
            catch (Exception ex)
            {
                Logs.LogError(ex);
                result = false;
            }
            return result;
        }
    }

    public class IncomeEntity
    {        
        //public string object { get; set; }
        public IncomeEntry[] entry { get; set; }
    }

    public class IncomeEntry
    {   
        public string id { get; set; }
        public IncomeChange[] changes { get; set; }
    }

    public class IncomeChange
    {   
        public string field { get; set; }
        public IncomeValue value { get; set; }
    }

    public class IncomeValue
    {
        public string messaging_product { get; set; }
        public MetaData metadata { get; set; }
        public IncomeContact[] contacts { get; set; }
        public IncomeMessage[] messages { get; set; }
    }

    public class MetaData
    {
        public string display_phone_number { get; set; }
        public string phone_number_id { get; set; }
    }

    public class IncomeContact
    {
        public ProfileIncome profile { get; set; }

        public string wa_id { get; set; }
    }

    public class ProfileIncome
    {
        public string name { get; set; }
    }

    public class IncomeMessage
    {
        public string from { get; set; }
        public string id { get; set; }
        public string timestamp { get; set; }
        public string type { get; set; }
        public IncomeText? text { get; set; }
        public InteractiveIncome? interactive { get; set; }
        public dynamic? audio { get; set; }
        public dynamic? image { get; set; }
    }

    public class IncomeText
    {
        public string body { get; set; }
    }

    public class InteractiveIncome
    {        
        public string type { get; set; }
        public ListReply list_reply { get; set; }
    }

    public class ListReply
    {    
        public string id { get; set; }            
        public string title { get; set; }
    }
}
