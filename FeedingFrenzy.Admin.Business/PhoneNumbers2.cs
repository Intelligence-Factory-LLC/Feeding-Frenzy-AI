using BasicUtilities;
using FeedingFrenzy.Data;
using FeedingFrenzy.TwilioAPI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using WebAppUtilities;

namespace FeedingFrenzy.Admin.Business
{
	public partial class PhoneNumbers : JsonWs
	{
		public static JsonObject ? GetLineType(string phone)
		{
			if (StringUtil.IsEmpty(phone))
				return null;

			phone = RooTrax.Common.DB.DataAccess.Formatters.CleanPhoneNumber(phone);

			if (!StringUtil.IsValidPhoneNumber(phone))
				return null;

			try
			{
				string strLookupResult = TwilioHelper.PhoneTypeLookup(phone!);
				Logs.DebugLog.WriteEvent("PhoneNumbers.GetLineType", "Phone: " + phone + " Result: " + strLookupResult);

				return new JsonObject(strLookupResult);
			}
			catch (Exception err)
			{
				if (!err.Message.Contains("was not found")) // invalid phone number
					Logs.LogError(err);

				return null;
			}			
		}

		public static PhoneNumbersRow? GetPhoneNumberByPhoneNumber(string PhoneNumber)
		{
			if (StringUtil.IsEmpty(PhoneNumber))
				return null;

			PhoneNumber = RooTrax.Common.DB.DataAccess.Formatters.CleanPhoneNumber(PhoneNumber);

			return PhoneNumbersRepository.GetPhoneNumberByPhoneNumber(PhoneNumber);
		}

		public static PhoneNumbersRow ? GetPhoneNumberInfo(string phone)
		{
			if (StringUtil.IsEmpty(phone))
				return null;

            //We need to extract the phone number from the xml response
            string pattern = @"<Number.*?>(\d+)<\/Number>";
            Match match = Regex.Match(phone, pattern);
            if (match.Success)
            {
                string phoneNumber = match.Groups[1].Value;
				phone = phoneNumber;
                Console.WriteLine($"Extracted Phone Number: {phoneNumber}");
            }

            phone = RooTrax.Common.DB.DataAccess.Formatters.CleanPhoneNumber(phone);
		
			PhoneNumbersRow? rowPhoneNumber = PhoneNumbersRepository.GetPhoneNumberByPhoneNumber(phone);

			if (null != rowPhoneNumber)
			{
				return rowPhoneNumber;
			}

			if (!StringUtil.IsValidPhoneNumber(phone))
			{                  
				// insert invalid phone number
				int iPhoneNumberID = PhoneNumbers.InsertPhoneNumber(phone, "Invalid", false, null, null, null, true, false);
				return PhoneNumbersRepository.Get(iPhoneNumberID);
			}

			try
			{
				string strLookupResult = TwilioHelper.PhoneTypeLookup(phone!);

				Logs.DebugLog.WriteEvent("PhoneNumbers.GetLineType", "Phone: " + phone + " Result: " + strLookupResult);

				JsonObject jsonObject = new JsonObject(strLookupResult);
				int iPhoneNumberID = PhoneNumbers.InsertPhoneNumber(phone, 
					StringUtil.NormalizeCase(jsonObject.GetJsonObjectOrDefault("carrier").GetStringOrDefault("type", null)),
					false, 
					StringUtil.NormalizeCase(jsonObject.GetJsonObjectOrDefault("caller_name").GetStringOrDefault("caller_name", null)),
					jsonObject.GetStringOrDefault("country_code", "US").ToUpper(),
					strLookupResult, false, false);

				rowPhoneNumber = PhoneNumbersRepository.Get(iPhoneNumberID);
			}
			catch (Exception err)
			{
				if (err.Message.Contains("was not found")) // invalid phone number
				{
					Logs.LogError(err);

					// insert invalid phone number
					int iPhoneNumberID = PhoneNumbers.InsertPhoneNumber(phone, "Invalid", false, null, null, null, true, false);
					rowPhoneNumber = PhoneNumbersRepository.Get(iPhoneNumberID);
				}
				else
					throw;				
			}

			return rowPhoneNumber;
		}

		public static PhoneNumbersRow? GetPhoneNumberByVoiceAgent(string AgentName)
        {
            List<PhoneNumbersRow> lstPhoneNumbers = 
				PhoneNumbersRepository.GetAll().ToList();

			PhoneNumbersRow? rowPhoneNumber = 
				lstPhoneNumbers.FirstOrDefault(x => x.DataObject.GetStringOrNull("VoiceAgent") == AgentName);	

			return rowPhoneNumber;

        }	
	}

}
