using System;
using System.Collections.Generic;
using WebAppUtilities;
using FeedingFrenzy.Scrapper;
using System.Diagnostics;
using BasicUtilities;
using FeedingFrenzy.Data;
using FeedingFrenzy.Features;

namespace FeedingFrenzy.Admin.Business
{
    public class AgentBuilder : JsonWs
    {
        public static string GetAgentData(string url)
        {
            ScrapperHelper oHelper = new ScrapperHelper();

            HtmlPage oPageData = oHelper.ScrappLink(url).Result;

            Logs.DebugLog.WriteEvent("AgentBuilder.DisplayAgentData", $"Scrapped data from {url}"); 

            Logs.DebugLog.WriteEvent("HTML Content", oPageData.Html);
            
            Logs.DebugLog.WriteEvent("Text Content", oPageData.TextContent);
            
            foreach (var meta in oPageData.Metadata)
            {
                Logs.DebugLog.WriteEvent("Metadata", $"{meta.Key}: {meta.Value}");
            }

            foreach (var img in oPageData.Images)
            {
                Logs.DebugLog.WriteEvent("Images", $"{img}");
            }

            foreach (var heading in oPageData.Headings)
            {
                Logs.DebugLog.WriteEvent("Headings", $"{heading}");
            }

            foreach (var link in oPageData.HtmlLinks)
            {
                Logs.DebugLog.WriteEvent("Links", $"{link.InnerText} - {link.Href}");
            }

            return JsonUtil.ToStringExt(oPageData).ToString();
        }

        public static void InitializeAgentTraining(string strUrl, string strJsonData, int iAgentID)
        {
            AgentsRow rowAgent = Agents.GetAgent(iAgentID);

            if(rowAgent == null)
            {
                throw new JsonWsException("Agent not found");
            }   

            HtmlPage? oPage = JsonUtil.ConvertTo<HtmlPage>(strJsonData);    

            Logs.DebugLog.WriteEvent("AgentBuilder.InitializeAgentTraining", $"Initializing agent training with data: {strJsonData}");

            if(oPage == null)
            {
                throw new JsonWsException("Invalid data format");
            }

            string strText = $"TextContent: {oPage?.TextContent} " +
                             $"Headings:{oPage?.Headings} " +
                             $"Links: {oPage?.HtmlLinks} " +
                             $"Metadata: {oPage?.Metadata}";

            string strIntro =
                $"Introduction Say the following and nothing else until you get a response: Hi, I am {rowAgent.AgentName}, a Voice Agent from {OrganizationFeature.Feature.OrganizationName}. Who am I speaking with?";

            Logs.DebugLog.WriteEvent("AgentBuilder.InitializeAgentTraining", $"Intro: {strIntro}");

            string strInstructions =
                $"You are a courteous and knowledgeable AI Sales Representative named {rowAgent.AgentName}, representing {OrganizationFeature.Feature.OrganizationName}. " +
                $"Your primary goal is to engage with potential customers, introduce them to the capabilities of our Voice Agent technology, and gather key contact information (name, phone number, and email if possible) for follow-up by a human team member.\n\n" +
                $"Guidelines for Interaction:\n\n" +
                $"1. **Concise Responses:** Keep answers brief—ideally one or two sentences—to ensure smooth communication and give the customer time to respond. Avoid unnecessary details unless the customer requests additional information.\n\n" +
                $"2. **Focus on Contact Information:** Strategically work towards obtaining the customer's name, phone number, and email. If they do not wish to provide information initially, look for natural opportunities in the conversation to revisit this request later on.\n\n" +
                $"3. **Professional Tone and Pacing:** Speak clearly and at a steady pace, with a polite and professional tone. Avoid repeating information unless the customer specifically asks.\n\n" +
                $"4. **Deflection to Human Support:** If the customer requests to speak to a human representative, respond with, \"I am transferring you now,\" and indicate readiness for the transfer.\n\n" +
                $"5. **Ending the Conversation:** Before ending, make a final effort to obtain any missing contact details. For instance, say, \"Before we finish, could I get your name and email?\"\n\n" +
                $"6. **Phone Number Formatting:** When sharing or confirming phone numbers, follow the U.S. format (e.g., 123-456-7890) to ensure clarity.";

            Logs.DebugLog.WriteEvent("AgentBuilder.InitializeAgentTraining", $"Instructions: {strInstructions}");   

            string strPrompt =
                $"Extract and categorize the comprehensive background information provided from the website at {strUrl}. " +
                $"For each main category or theme identified, provide detailed summaries that capture all relevant points, " +
                $"context, and specifics that might be useful for training the AI agent to answer questions accurately and fully. " +
                $"Include insights, key takeaways, and any essential subtopics, ensuring that each category is sufficiently detailed " +
                $"to support a wide range of inquiries. Maintain accuracy, completeness, and correct spelling and grammar throughout.";

            string strBackgroundInformation = 
                OpenAIAPI.Completions.Complete(strText, strPrompt, "gpt-4o-mini").Result;

            Logs.DebugLog.WriteEvent("AgentBuilder.InitializeAgentTraining", $"Background information: {strBackgroundInformation}");

            rowAgent.DataObject["IntroInstructions"] = strIntro;
            rowAgent.DataObject["Instructions"] = strInstructions;
            rowAgent.DataObject["Information"] = strBackgroundInformation;            
            AgentsRepository.UpdateAgentData(rowAgent);

            int iContentID = Contents.InsertOrUpdateContent($"{rowAgent.AgentName} - Scrapping Page",oPage.TextContent, string.Empty);
            ContentsRow rowContent = Contents.GetContent(iContentID);
            rowContent.ContentTypeID = ContentTypesEnum.AgentScript.ContentTypeID;
            ContentsRepository.UpdateContent(rowContent);

        }
    }
}
