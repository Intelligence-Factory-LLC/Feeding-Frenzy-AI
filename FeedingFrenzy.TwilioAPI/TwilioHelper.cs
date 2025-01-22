using BasicUtilities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Twilio;
using Twilio.Jwt.AccessToken;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Rest.Lookups.V1;
using Twilio.Types;

namespace FeedingFrenzy.TwilioAPI
{
	public class TwilioHelper
	{
		static private void Initialize()
		{
			string twilioAccountSid = TwilioFeature.Feature.AccountSID;
			string strToken = TwilioFeature.Feature.AuthToken;

			ServicePointManager.SecurityProtocol |= SecurityProtocolType.Tls12;


			TwilioClient.Init(twilioAccountSid, strToken);
		}

		static public bool SendSMSViaTwilio(string strMobileNumber, string strSMSText)
		{
			try
			{
				SendSMSViaTwilioNewVersion(strMobileNumber, strSMSText);
			}
			catch (Exception err)
			{
				Logs.LogError(err);
				Logs.DebugLog.WriteEvent("Sent to Number", strMobileNumber);
				Logs.DebugLog.WriteEvent("Sent Messages", strSMSText);
			}
			return true;
		}

		static public bool SendSMSViaTwilioNewVersion(string strMobileNumber, string strSMSText)
		{
			try
			{
				if (StringUtil.IsEmpty(strMobileNumber))
				{
					Logs.DebugLog.WriteEvent("SendSMSViaTwilioNewVersion", "Sending to empty phone number");
					return false;
				}

				if (!StringUtil.IsValidPhoneNumber(strMobileNumber))
				{
					Logs.DebugLog.WriteEvent("SendSMSViaTwilioNewVersion", "Sending to invalid phone number: " + strMobileNumber);
					return false;
				}

				Initialize();

				var message = MessageResource.Create(
				 body: strSMSText,
				 from: new Twilio.Types.PhoneNumber(TwilioFeature.Feature.FromNumber),
				 to: new Twilio.Types.PhoneNumber(strMobileNumber)
				 );

				Logs.DebugLog.WriteEvent("Twilio Message Sent", string.Format("Phone: {0}, SMS: {1}", strMobileNumber, strSMSText));

			}
			catch (Exception err)
			{

				if (err.Message.Contains("Attempt to send to unsubscribed recipient"))
				{
					Logs.DebugLog.WriteEvent("Unsubscribed Phone", strMobileNumber);
				}
				else
				{
					Logs.LogError(err);
					Logs.DebugLog.WriteEvent("Sent to Number", strMobileNumber);
					Logs.DebugLog.WriteEvent("Sent Messages", strSMSText);
				}

			}

			return true;
		}


		static public string GetJwtToken()
		{
			TwilioFeature feature = TwilioFeature.GetFeature();
			if (feature.Expiration < DateTime.Now.AddMinutes(10))
			{
				string twilioAccountSid = feature.AccountSID;
				string twilioApiKey = feature.ApiKey;
				string twilioApiSecret = feature.ApiSecret;

				// These are specific to Voice
				const string identity = "user";

				// Create a Voice grant for this token
				var grant = new VoiceGrant();
				grant.OutgoingApplicationSid = feature.ApplicationSid;

				// Optional: add to allow incoming calls
				grant.IncomingAllow = true;

				var grants = new HashSet<IGrant>
		{
			{ grant }
		};

				// Create an Access Token generator
				var token = new Token(
					twilioAccountSid,
					twilioApiKey,
					twilioApiSecret,
					identity,
					null,
					null,
					grants);

				feature.Jwt = token.ToJwt();
				feature.Expiration = DateTime.Now.AddHours(1);
				TwilioFeature.SetFeature(feature);
			}

			return feature.Jwt;
		}


		public static async Task DeleteTwilioAudio(string recordingSid)
		{

			Initialize();

			// Delete the recording
			await Twilio.Rest.Api.V2010.Account.RecordingResource.DeleteAsync(pathSid: recordingSid);
		}

		public static string PhoneTypeLookup(string number)
		{
			Initialize();


			FetchPhoneNumberOptions request = new FetchPhoneNumberOptions(number)
			{
				CountryCode = "US",
				Type = new List<string> { "carrier", "caller-name", "line-type-intelligence" }
			};

			PhoneNumberResource phoneNumberLookup = PhoneNumberResource.Fetch(request);

			string json = JsonConvert.SerializeObject(phoneNumberLookup, Formatting.Indented);


			return json;
		}
	}
}
