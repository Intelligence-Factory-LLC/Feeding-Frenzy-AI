using BasicUtilities;
using FeedingFrenzy.Data;
using OpenAIAPI;

namespace FeedingFrenzy.Admin.Business.CallAgents
{
    /// <summary>
    /// Tools used by the CallAgent for extracting structured information
    /// from call transcriptions.
    /// </summary>
    public static class CallAgentTools
    {
        /// <summary>
        /// Extracts phone tree options, alternate phone numbers, and office hours
        /// from a call transcription.
        /// </summary>
        /// <param name="call">The call metadata.</param>
        /// <param name="transcription">Full transcription of the call.</param>
        /// <returns>A JSON object with PhoneTree, AlternatePhoneNumbers, and OfficeHours fields.</returns>
        public static async Task<JsonObject> ExtractPhoneTree(CallsRow call, string transcription)
        {
            string prompt = @"The following is a transcript of a conversation. The first part of the conversation may have options for navigating a phone tree. Pull out the numbers and prompts and put them in a list (if they exist). Analyze the entire prompt and pull out every option. If there are alternate phone numbers listed, put those in a separate field. If there is an option to speak to the operator, list that first. If any office hours are mentioned extract those and place them in a separate list.  List the results as a JSON array as follows:

{
PhoneTree: [""Press 0: Action 1"", ""Press 1: Action 2"", ...],
AlternatePhoneNumbers: [""Dial 123-456-7890 for xxxxx""],
OfficeHours:[""list any mentions of hours they are open""]
}";

            string result = await OpenAIAPI.Completions.Complete(transcription, prompt);
            return new JsonObject(result);
        }

        /// <summary>
        /// Extracts office hours mentioned in a call transcription.
        /// </summary>
        /// <param name="call">The call metadata.</param>
        /// <param name="transcription">Full transcription of the call.</param>
        /// <returns>A JSON object containing an OfficeHours array.</returns>
        public static async Task<JsonObject> ExtractOfficeHours(CallsRow call, string transcription)
        {
            string prompt = @"The following is a transcript of a conversation. Extract every mention of office hours and return them as JSON in the following format:
{
OfficeHours:[""list any mentions of hours they are open""]
}";

            string result = await OpenAIAPI.Completions.Complete(transcription, prompt);
            return new JsonObject(result);
        }

        /// <summary>
        /// Extracts alternate contact numbers mentioned in a call transcription.
        /// </summary>
        /// <param name="call">The call metadata.</param>
        /// <param name="transcription">Full transcription of the call.</param>
        /// <returns>A JSON object containing an AlternatePhoneNumbers array.</returns>
        public static async Task<JsonObject> ExtractAlternateContactNumbers(CallsRow call, string transcription)
        {
            string prompt = @"The following is a transcript of a conversation. Extract any alternate phone numbers or contact numbers mentioned and return them as JSON in the following format:
{
AlternatePhoneNumbers:[""Dial 123-456-7890 for xxxxx""]
}";

            string result = await OpenAIAPI.Completions.Complete(transcription, prompt);
            return new JsonObject(result);
        }
    }
}
