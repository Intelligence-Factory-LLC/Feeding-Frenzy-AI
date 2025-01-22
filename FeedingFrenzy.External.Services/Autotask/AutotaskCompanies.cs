using BasicUtilities;
using System.Net;
using System.Text;

namespace FeedingFrenzy.External.Services
{
    public class AutotaskCompanies
    {
        private readonly string BaseUrl;    
        private readonly string ApiIntegrationCode;
        private readonly string UserName;
        private readonly string Secret;
        public AutotaskCompanies()
        {
            var autotaskHelper = new AutotaskHelper();
            BaseUrl = autotaskHelper.BaseUrl;
            ApiIntegrationCode = autotaskHelper.ApiIntegrationCode;
            UserName = autotaskHelper.UserName;
            Secret = autotaskHelper.Secret;
        }

        public JsonArray? GetCompanyByName(string CompanyName)
        {
            string strResult = string.Empty;
            using (var httpClient = new HttpClient())
            {
                string apiUrl = $"{BaseUrl}Companies/query";

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
                                field = "companyName",
                                value = CompanyName,
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
        public JsonArray? GetCompanyByPhone(string PhoneNumber)
        {
            ServicePointManager.SecurityProtocol |= SecurityProtocolType.Tls12;

            string strResult = string.Empty;
            using (var httpClient = new HttpClient())
            {
                string apiUrl = $"{BaseUrl}Companies/query";

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
                                field = "phone",
                                value = PhoneNumber,
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

    }
}
