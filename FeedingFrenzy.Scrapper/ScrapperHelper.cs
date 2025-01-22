using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using HtmlAgilityPack;

namespace FeedingFrenzy.Scrapper
{
    public class ScrapperHelper
    {
        private readonly HttpClient _httpClient;

        public ScrapperHelper()
        {
            _httpClient = new HttpClient();
        }

        public async Task<HtmlPage> ScrappLink(string url)
        {
            HtmlPage htmlPage = new HtmlPage();

            try
            {
                // Fetch the HTML content from the URL
                var htmlContent = await _httpClient.GetStringAsync(url);

                // Load HTML into HtmlDocument
                HtmlDocument document = new HtmlDocument();
                document.LoadHtml(htmlContent);

                // Populate htmlPage with content
                htmlPage.Html = htmlContent;
                htmlPage.TextContent = ExtractText(document);
                htmlPage.Metadata = ExtractMetadata(document);
                htmlPage.Images = ExtractImages(document);
                htmlPage.Headings = ExtractHeadings(document);
                htmlPage.HtmlLinks = ExtractLinks(document, url);
            }
            catch (Exception ex)
            {
                Logs.DebugLog.WriteError($"Error scraping {url}: {ex.Message}");
                Logs.DebugLog.WriteError(ex);
            }
            return htmlPage;
        }

        // Extract readable text from the document
        private string ExtractText(HtmlDocument document)
        {
            var unwantedNodes = document.DocumentNode.SelectNodes("//script|//style");
            if (unwantedNodes != null)
            {
                foreach (var node in unwantedNodes)
                    node.Remove();
            }
            return document.DocumentNode.InnerText.Trim();
        }

        // Extract metadata such as title and description
        private Dictionary<string, string> ExtractMetadata(HtmlDocument document)
        {
            var metadata = new Dictionary<string, string>();
            var titleNode = document.DocumentNode.SelectSingleNode("//title");
            var metaNodes = document.DocumentNode.SelectNodes("//meta");

            if (titleNode != null)
                metadata["Title"] = titleNode.InnerText.Trim();

            if (metaNodes != null)
            {
                foreach (var node in metaNodes)
                {
                    var name = node.GetAttributeValue("name", "");
                    var content = node.GetAttributeValue("content", "");

                    if (!string.IsNullOrEmpty(name) && !string.IsNullOrEmpty(content))
                        metadata[name] = content;
                }
            }
            return metadata;
        }

        // Extract image URLs from the document
        private List<string> ExtractImages(HtmlDocument document)
        {
            var imageUrls = new List<string>();
            var imageNodes = document.DocumentNode.SelectNodes("//img");

            if (imageNodes != null)
            {
                foreach (var node in imageNodes)
                {
                    var src = node.GetAttributeValue("src", "");
                    if (!string.IsNullOrEmpty(src))
                        imageUrls.Add(src);
                }
            }
            return imageUrls;
        }

        // Extract headings (H1 to H6) for structured content
        private List<string> ExtractHeadings(HtmlDocument document)
        {
            var headings = new List<string>();
            for (int i = 1; i <= 6; i++)
            {
                var headingNodes = document.DocumentNode.SelectNodes($"//h{i}");
                if (headingNodes != null)
                {
                    foreach (var node in headingNodes)
                    {
                        headings.Add(node.InnerText.Trim());
                    }
                }
            }
            return headings;
        }

        // Extract hyperlinks with normalization
        private List<Htmllink> ExtractLinks(HtmlDocument document, string baseUrl)
        {
            var htmlLinks = new List<Htmllink>();
            var anchorNodes = document.DocumentNode.SelectNodes("//a");

            if (anchorNodes != null)
            {
                foreach (var node in anchorNodes)
                {
                    string href = node.GetAttributeValue("href", "");
                    string innerText = node.InnerText.Trim();

                    if (!string.IsNullOrEmpty(href))
                    {
                        href = NormalizeUrl(baseUrl, href);
                        htmlLinks.Add(new Htmllink { Href = href, InnerText = innerText });
                    }
                }
            }
            return htmlLinks;
        }

        // Normalize URLs to absolute format
        private string NormalizeUrl(string baseUrl, string relativeUrl)
        {
            try
            {
                var baseUri = new Uri(baseUrl);
                var resolvedUri = new Uri(baseUri, relativeUrl);
                return resolvedUri.ToString();
            }
            catch
            {
                return relativeUrl; // Return relative URL if resolution fails
            }
        }
    }

    public class HtmlPage
    {
        public string Html { get; set; }
        public string TextContent { get; set; }
        public Dictionary<string, string> Metadata { get; set; }
        public List<string> Images { get; set; }
        public List<string> Headings { get; set; }
        public List<Htmllink> HtmlLinks { get; set; }
    }

    public class Htmllink
    {
        public string InnerText { get; set; }
        public string Href { get; set; }
    }
}
