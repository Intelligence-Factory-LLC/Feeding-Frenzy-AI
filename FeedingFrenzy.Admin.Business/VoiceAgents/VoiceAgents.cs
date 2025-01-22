using BasicUtilities;
using FeedingFrenzy.Data;


namespace FeedingFrenzy.Admin.Business.VoiceAgents
{
	internal class VoiceAgents
	{
		public static string BuildIntroPrompt(AgentsRow rowAgent)
		{
			string strVoice = rowAgent.DataObject.GetStringOrDefault("Voice", "default-voice");

			string strIntroInstructions = rowAgent.DataObject.GetStringOrDefault("IntroInstructions", "");

			string strIntro = $$"""
   {
        "type": "response.create",
        "response": {
            "modalities": [
                "text",
                "audio"
            ],
            "instructions": "{{strIntroInstructions}}",
            "voice": "{{strVoice}}"
        }
    }
""";

			return strIntro;
		}

		public static string BuildPrompt(AgentsRow rowAgent, CallsRow? rowCall)
		{
			string strVoice = rowAgent.DataObject.GetStringOrDefault("Voice", "default-voice");

			LeadsRow? rowLead = Leads.GetLeadsByPhone(rowCall!.CallingPhone).FirstOrDefault();

			string strPromptInstructions = JsonUtil.ToSafeString(rowAgent.DataObject.GetStringOrDefault("PromptInstructions", ""));

			string strPrompt =
$$"""
# Instructions:
{{rowAgent.DataObject.GetStringOrNull("Instructions")}}

# About the Company and Products: 
{{rowAgent.DataObject.GetStringOrNull("Information")}}

# Guidance:
Speak all phone numbers like one would read a phone number in the United States. Do not repeat yourself, unless the customer asks you to repeat. 
Do not talk about unrelated items. Keep your answers short unless the customer asks for more details.  Today is {{DateTime.Now.ToString("dddd, MMMM dd, yyyy")}}.

""";

			if (null != rowLead)
			{
				strPrompt += $"The caller's name is {rowLead?.FirstName} {rowLead?.LastName}.";
			}

			if (null != rowCall && null != rowCall.CallingPhone)
			{
				strPrompt += $"The caller's phone number is {rowCall?.CallingPhone}. ";

				foreach (CallsRow rowPrevious in CallsRepository.GetCallsSp_PagingSp(rowCall?.CallingPhone, "CallID", false, 0, 3))
				{
					if (rowPrevious.CallingPhone == rowCall.CallingPhone)
					{
						strPrompt += $$"""
The caller has called before on {rowPrevious.DateCreated.ToString("dddd, MMMM dd, yyyy")}. During
this call: 

	{{rowPrevious.TranscriptionSummary}}

""";
					}
				}

			}

			string strJsonAvailability = SalesRepresentatives.GetSalesRepAvailability();

			if (string.IsNullOrEmpty(strJsonAvailability))
			{
				// Prompt to collect lead information for a callback or follow-up
				strPrompt += """
    No sales representatives are available at this time. Please collect the caller's contact information and preferred times for a follow-up. The following details can be noted for future scheduling:

    {
        "LeadFollowUp": {
            "ContactInfo": "<Insert Caller Contact Information>",
            "PreferredTimes": "<Insert Preferred Follow-Up Times>"
        }
    }
    """;
			}
			else
			{
				JsonObject strJsonValues = new JsonObject(strJsonAvailability);

				int? iSalesRepresentativeID = strJsonValues.GetIntOrNull("SalesRepresentativeID");
				string? strSaleRepName = strJsonValues.GetStringOrDefault("Name", "A sales representative");
				JsonArray availableDates = strJsonValues.GetJsonArrayOrDefault("AvailableDates");

				// Check if there are actually available dates
				if (availableDates != null && availableDates.Count > 0)
				{
					strPrompt += $$"""
        The following availability information is provided for reference:

        {
            "SalesRepresentativeID": "{{iSalesRepresentativeID}}",
            "Name": "{{strSaleRepName}}",
            "AvailableDates": {{availableDates.ToJSON()}}
        }
        """;
				}
				else
				{
					// Collect lead information for a callback or future follow-up
					strPrompt += $$"""
        No dates are currently available for the sales representative. Please collect the caller's contact information and preferred times for a follow-up. The following details can be noted for future scheduling:

        {
            "SalesRepresentativeID": "{{iSalesRepresentativeID}}",
            "Name": "{{strSaleRepName}}",
            "LeadFollowUp": {
                "ContactInfo": "<Insert Caller Contact Information>",
                "PreferredTimes": "<Insert Preferred Follow-Up Times>"
            }
        }
        """;
				}
			}


			return strPrompt;
		}

		public static JsonArray AddCallEvent(JsonArray Events, string strEventType, object strEventDetails)
		{
			Events.Add(new JsonValue(new
			{
				EventType = strEventType,
				Timestamp = DateTime.UtcNow,
				Details = strEventDetails
			}));

			return Events;
		}



	}
}
