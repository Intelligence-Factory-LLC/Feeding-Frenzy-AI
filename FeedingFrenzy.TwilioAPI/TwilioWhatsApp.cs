using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BasicUtilities;
using Twilio;
using Twilio.Rest.Api.V2010.Account;
using System.Net;

namespace FeedingFrenzy.TwilioAPI
{
    public class TwilioWhatsApp
    {
        static private void Initialize()
        {
            string twilioAccountSid = TwilioFeature.Feature.AccountSID;
            string strToken = TwilioFeature.Feature.AuthToken;

            ServicePointManager.SecurityProtocol |= SecurityProtocolType.Tls12;


            TwilioClient.Init(twilioAccountSid, strToken);
        }

        static public async Task<bool> SendSMSViaTwilioWhatsApp(string strMobileNumber, string strSMSText)
        {
            try
            {
                if (StringUtil.IsEmpty(strMobileNumber))
                {
                    Logs.DebugLog.WriteEvent("SendSMSViaTwilioWhatsApp", "Sending to empty phone number");
                    return false;
                }

                if (!StringUtil.IsValidPhoneNumber(strMobileNumber))
                {
                    Logs.DebugLog.WriteEvent("SendSMSViaTwilioWhatsApp", "Sending to invalid phone number: " + strMobileNumber);
                    return false;
                }

                Initialize();

                var message = await MessageResource.CreateAsync(
                    body: strSMSText,
                    from: new Twilio.Types.PhoneNumber($"whatsapp:{TwilioFeature.Feature.FromNumber}"),
                    to: new Twilio.Types.PhoneNumber($"whatsapp:{strMobileNumber}"));

                Console.WriteLine(message.Body);

            }
            catch (Exception err)
            {   
                Logs.LogError(err);
                Logs.DebugLog.WriteEvent("Sent to Number", strMobileNumber);
                Logs.DebugLog.WriteEvent("Sent Messages", strSMSText);

            }

            return true;
        }



    }
}
