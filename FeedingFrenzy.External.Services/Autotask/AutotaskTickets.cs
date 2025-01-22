using BasicUtilities;
using System.Net;
using System.Net.Sockets;
using System.Text;

namespace FeedingFrenzy.External.Services
{
    public class AutotaskTickets
    {
        private readonly string BaseUrl;
        private readonly string ApiIntegrationCode;
        private readonly string UserName;
        private readonly string Secret;

        public AutotaskTickets() 
        {

            var autotaskHelper = new AutotaskHelper();
            BaseUrl = autotaskHelper.BaseUrl;
            ApiIntegrationCode = autotaskHelper.ApiIntegrationCode;
            UserName = autotaskHelper.UserName;
            Secret = autotaskHelper.Secret;
        }

        public JsonArray? GetTicketByID(int ID)
        {

            using (var httpClient = new HttpClient())
            {
                string apiUrl = $"{BaseUrl}Tickets/query";

                using (var request = new HttpRequestMessage(HttpMethod.Post, apiUrl))
                {
                    request.Headers.Add("accept", "application/json");
                    request.Headers.Add("ApiIntegrationCode", ApiIntegrationCode);
                    request.Headers.Add("UserName", UserName);
                    request.Headers.Add("Secret", Secret);

                    var requestBody = new
                    {
                        MaxRecords = 10,
                        IncludeFields = new string[] { },
                        Filter = new[]
                        {
                            new
                            {
                                op = "eq",
                                field = "id",
                                value = ID,
                                udf = false,
                                items = new object[] { }
                            }
                        }
                    };

                    var jsonContent = new StringContent(JsonUtil.ToString(requestBody).ToString(), Encoding.UTF8, "application/json");
                    request.Content = jsonContent;

                    var response = httpClient.Send(request);
                    var responseContent = response.Content.ReadAsStringAsync().Result;

                    if (response.IsSuccessStatusCode)
                    {
                        JsonObject jsonResponse = new JsonObject(responseContent);

                        return jsonResponse["items"]?.ToJsonArray();

                    }
                    else
                    {
                        if (string.IsNullOrEmpty(responseContent))
                        {
                            Logs.DebugLog.WriteError(response.ToString());

                            return null;
                        }

                        JsonObject jsonResponse = new JsonObject(responseContent);

                        return jsonResponse["errors"]?.ToJsonArray();

                    }

                }
            }

        }
        public JsonArray? GetTicketByTicketNumber(string TicketNumber)
        {

            using (var httpClient = new HttpClient())
            {
                string apiUrl = $"{BaseUrl}Tickets/query";

                using (var request = new HttpRequestMessage(HttpMethod.Post, apiUrl))
                {
                    request.Headers.Add("accept", "application/json");
                    request.Headers.Add("ApiIntegrationCode", ApiIntegrationCode);
                    request.Headers.Add("UserName", UserName);
                    request.Headers.Add("Secret", Secret);

                    var requestBody = new
                    {
                        MaxRecords = 10,
                        IncludeFields = new string[] { },
                        Filter = new[]
                        {
                            new
                            {
                                op = "eq",
                                field = "ticketNumber",
                                value = TicketNumber,
                                udf = false,
                                items = new object[] { }
                            }
                        }
                    };

                    var jsonContent = new StringContent(JsonUtil.ToString(requestBody).ToString(), Encoding.UTF8, "application/json");
                    request.Content = jsonContent;

                    var response = httpClient.Send(request);
                    var responseContent = response.Content.ReadAsStringAsync().Result;

                    if (response.IsSuccessStatusCode)
                    {
                        JsonObject jsonResponse = new JsonObject(responseContent);

                        return jsonResponse["items"]?.ToJsonArray();

                    }
                    else
                    {
                        if (string.IsNullOrEmpty(responseContent))
                        {
                            Logs.DebugLog.WriteError(response.ToString());

                            return null;
                        }

                        JsonObject jsonResponse = new JsonObject(responseContent);

                        return jsonResponse["errors"]?.ToJsonArray();

                    }

                }
            }

        }
        public JsonArray? GetTicketsByCompanyID(int CompanyID)
        {

            using (var httpClient = new HttpClient())
            {
                string apiUrl = $"{BaseUrl}Tickets/query";

                using (var request = new HttpRequestMessage(HttpMethod.Post, apiUrl))
                {
                    request.Headers.Add("accept", "application/json");
                    request.Headers.Add("ApiIntegrationCode", ApiIntegrationCode);
                    request.Headers.Add("UserName", UserName);
                    request.Headers.Add("Secret", Secret);

                    var requestBody = new
                    {
                        MaxRecords = 10,
                        IncludeFields = new string[] { },
                        Filter = new[]
                        {
                            new
                            {
                                op = "eq",
                                field = "companyID",
                                value = CompanyID,
                                udf = false,
                                items = new object[] { }
                            }
                        }
                    };

                    var jsonContent = new StringContent(JsonUtil.ToString(requestBody).ToString(), Encoding.UTF8, "application/json");
                    request.Content = jsonContent;

                    var response = httpClient.Send(request);
                    var responseContent = response.Content.ReadAsStringAsync().Result;

                    if (response.IsSuccessStatusCode)
                    {
                        JsonObject jsonResponse = new JsonObject(responseContent);

                        return jsonResponse["items"]?.ToJsonArray();

                    }
                    else
                    {
                        if (string.IsNullOrEmpty(responseContent))
                        {
                            Logs.DebugLog.WriteError(response.ToString());

                            return null;
                        }

                        JsonObject jsonResponse = new JsonObject(responseContent);

                        return jsonResponse["errors"]?.ToJsonArray();

                    }
                }
            }

        }
        public JsonObject? CreateTicket(int CompanyID, string TicketNumber, string Description, DateTime dDueDateTime)
        {

            using (var httpClient = new HttpClient())
            {
                string apiUrl = $"{BaseUrl}Tickets";

                using (var request = new HttpRequestMessage(HttpMethod.Post, apiUrl))
                {
                    request.Headers.Add("accept", "application/json");
                    request.Headers.Add("ApiIntegrationCode", ApiIntegrationCode);
                    request.Headers.Add("UserName", UserName);
                    request.Headers.Add("Secret", Secret);

                    string sTicketNumber = CreateCorrelativeTicketNumber(TicketNumber); 

                    var requestBody = new
                    {
                        billingCodeID = 29682801,
                        companyLocationID = 659,
                        contactID = 30687352,
                        issueType = 6,
                        lastActivityPersonType = 1,
                        lastActivityResourceID = 29682942,
                        serviceLevelAgreementID = 1,
                        source = 2,
                        subIssueType = 128,
                        ticketCategory = 3,
                        ticketType = 1,
                        Priority = 2,
                        Status = 1,
                        queueID = 29682833,
                        CompanyID = CompanyID,
                        Description = Description,
                        Title = sTicketNumber, //TODO : By defauilt set the title to the ticket number
                        dueDateTime = dDueDateTime,
                        ticketNumber = sTicketNumber,   
                    };

                    var jsonContent = new StringContent(JsonUtil.ToString(requestBody).ToString(), Encoding.UTF8, "application/json");
                    request.Content = jsonContent;

                    var response = httpClient.Send(request);
                    var responseContent = response.Content.ReadAsStringAsync().Result;

                    if (response.IsSuccessStatusCode)
                    {
                        JsonObject jsonResponse = new JsonObject(responseContent);

                        return jsonResponse;

                    }
                    else
                    {
                        JsonObject jsonResponse = new JsonObject(responseContent);

                        return jsonResponse;

                    }
                }
            }

        }
        public JsonObject? UpdateTicket(int CompanyID, int TicketID, string Description, DateTime dDueDateTime)
        {

            using (var httpClient = new HttpClient())
            {
                string apiUrl = $"{BaseUrl}Tickets";

                using (var request = new HttpRequestMessage(HttpMethod.Patch, apiUrl))
                {
                    request.Headers.Add("accept", "application/json");
                    request.Headers.Add("ApiIntegrationCode", ApiIntegrationCode);
                    request.Headers.Add("UserName", UserName);
                    request.Headers.Add("Secret", Secret);


                    var requestBody = new
                    {
                        id = TicketID,
                        CompanyID = CompanyID,
                        Description = Description,
                        dueDateTime = dDueDateTime,
                    };

                    var jsonContent = new StringContent(JsonUtil.ToString(requestBody).ToString(), Encoding.UTF8, "application/json");
                    request.Content = jsonContent;

                    var response = httpClient.Send(request);
                    var responseContent = response.Content.ReadAsStringAsync().Result;

                    if (response.IsSuccessStatusCode)
                    {
                        JsonObject jsonResponse = new JsonObject(responseContent);

                        return jsonResponse;

                    }
                    else
                    {
                        JsonObject jsonResponse = new JsonObject(responseContent);

                        return jsonResponse;

                    }
                }
            }

        }
        public string CreateNoteByTicketID(int TicketID, string Title, string Description)
        {
            using (var httpClient = new HttpClient())
            {
                string apiUrl = $"{BaseUrl}Tickets/{TicketID}/notes";

                using (var request = new HttpRequestMessage(HttpMethod.Post, apiUrl))
                {
                    request.Headers.Add("accept", "application/json");
                    request.Headers.Add("ApiIntegrationCode", ApiIntegrationCode);
                    request.Headers.Add("UserName", UserName);
                    request.Headers.Add("Secret", Secret);

                    var requestBody = new
                    {
                        TicketID = TicketID,
                        Description = Description,
                        NoteType = 1,
                        Publish = 1,
                        Title = Title,
                    };

                    var jsonContent = new StringContent(JsonUtil.ToString(requestBody).ToString(), Encoding.UTF8, "application/json");
                    request.Content = jsonContent;

                    var response = httpClient.Send(request);
                    var responseContent = response.Content.ReadAsStringAsync().Result;

                    if (response.IsSuccessStatusCode)
                    {
                        JsonObject jsonResponse = new JsonObject(responseContent);

                        return jsonResponse.ToString();

                    }
                    else
                    {
                        return responseContent.ToString();
                    }
                }
            }

        }
        public string UpdateNotesByTicketNoteID(int TicketID, int TicketNoteID, string Title, string Description)
        {
            using (var httpClient = new HttpClient())
            {
                string apiUrl = $"{BaseUrl}/Tickets/{TicketID}/notes";

                using (var request = new HttpRequestMessage(HttpMethod.Patch, apiUrl))
                {
                    request.Headers.Add("accept", "application/json");
                    request.Headers.Add("ApiIntegrationCode", ApiIntegrationCode);
                    request.Headers.Add("UserName", UserName);
                    request.Headers.Add("Secret", Secret);


                    var requestBody = new
                    {
                        id = TicketNoteID,
                        ticketID = TicketID,
                        Description = Description,
                        NoteType = 1,
                        Publish = 1,
                        Title = Title,
                    };

                    var jsonContent = new StringContent(JsonUtil.ToString(requestBody).ToString(), Encoding.UTF8, "application/json");
                    request.Content = jsonContent;

                    var response = httpClient.Send(request);
                    var responseContent = response.Content.ReadAsStringAsync().Result;

                    if (response.IsSuccessStatusCode)
                    {
                        JsonObject jsonResponse = new JsonObject(responseContent);

                        return jsonResponse.ToString();

                    }
                    else
                    {
                        return responseContent.ToString();
                    }
                }
            }

        }

        private string CreateCorrelativeTicketNumber(string ticketNumber)
        {
            // Check if the input ticketNumber is null or empty
            if (string.IsNullOrEmpty(ticketNumber))
            {
                // Generate a new ticket number with today's date and 0001 as the first ticket number
                return $"T{DateTime.Today:yyyyMMdd}.0001";
            }

            // Extract the date part and numeric part using span slicing for efficiency
            var datePart = ticketNumber.AsSpan(0, 9);
            var numericPart = ticketNumber.AsSpan(10);

            // Increment the numeric part and format it back to four digits
            return $"{datePart}.{int.Parse(numericPart) + 1:D4}";

        }

    }
}
