using Google.Apis.Auth.OAuth2;
using Google.Apis.Docs.v1;
using Google.Apis.Docs.v1.Data;
using Google.Apis.Drive.v3;
using Google.Apis.Services;
using System.Text;

namespace FeedingFrenzy.GoogleAPI
{
    public class GoogleDocs
    {
        public string DocID;
        public GoogleDocs(string strDocID)
        {
            DocID = strDocID;

            ConnectToGoogle();

        }


        static readonly string[] Scopes = { DocsService.Scope.Documents, DriveService.Scope.DriveFile, DriveService.Scope.Drive };

        private static GoogleCredential GetCredentialsFromFile()
        {
            GoogleCredential credential;
            using (var stream = new FileStream("c:\\temp\\aarondavid.json", FileMode.Open, FileAccess.Read))
            {
                credential = GoogleCredential.FromStream(stream).CreateScoped(Scopes);
            }
            return credential;
        }

        public DocsService docsService;
        public DriveService driveService;
        private void ConnectToGoogle()
        {
            docsService = new DocsService(new BaseClientService.Initializer()
            {
                ApplicationName = "Docs Integration",
                HttpClientInitializer = GetCredentialsFromFile()
            });

            driveService = new DriveService(new BaseClientService.Initializer()
            {
                ApplicationName = "Drive Integration",
                HttpClientInitializer = GetCredentialsFromFile()
            });

        }

        public static string ExtractTextFromDocument(Document doc)
        {
            if (doc == null)
                throw new ArgumentNullException(nameof(doc));

            var textBuilder = new System.Text.StringBuilder();

            // Check if Body is available
            if (doc.Body != null && doc.Body.Content != null && doc.Body.Content.Count > 0)
            {
                textBuilder.AppendLine("=== Document Body Content ===");
                textBuilder.AppendLine(ExtractTextFromBody(doc.Body.Content));
            }

            // Extract content from tabs
            if (doc.Tabs != null && doc.Tabs.Count > 0)
            {
                textBuilder.AppendLine("\n=== Document Tabs Content ===");
                ProcessTabs(doc.Tabs, textBuilder);
            }

            // If neither Body nor Tabs exist, handle as empty document
            if ((doc.Body == null || doc.Body.Content == null || doc.Body.Content.Count == 0) &&
                (doc.Tabs == null || doc.Tabs.Count == 0))
            {
                textBuilder.AppendLine("This document contains no content.");
            }

            return textBuilder.ToString();
        }

        public static string ExtractTextFromBody(IList<StructuralElement> elements)
        {
            if (elements == null) return string.Empty;

            var textBuilder = new System.Text.StringBuilder();

            foreach (var element in elements)
            {
                // Handle Paragraph elements
                if (element.Paragraph != null)
                {
                    foreach (var paragraphElement in element.Paragraph.Elements)
                    {
                        if (paragraphElement.TextRun?.Content != null)
                        {
                            textBuilder.Append(paragraphElement.TextRun.Content);
                        }
                    }
                }

                // Handle Table elements (nested content)
                if (element.Table != null)
                {
                    foreach (var row in element.Table.TableRows)
                    {
                        foreach (var cell in row.TableCells)
                        {
                            textBuilder.Append(ExtractTextFromBody(cell.Content));
                        }
                    }
                }

                // Handle Section Breaks
                if (element.SectionBreak != null)
                {
                    textBuilder.AppendLine("\n--- Section Break ---\n");
                }
            }

            return textBuilder.ToString();
        }

        public static string ExtractTextFromTab(DocumentTab tab)
        {
            if (tab == null || tab.Body == null || tab.Body.Content == null)
                return string.Empty;

            var textBuilder = new System.Text.StringBuilder();

            // Extract text from the tab's body
            textBuilder.Append(ExtractTextFromBody(tab.Body.Content));

            return textBuilder.ToString();
        }

        public static void ProcessTabs(IList<Tab> tabs, StringBuilder textBuilder, int level = 1)
        {
            if (tabs == null || tabs.Count == 0) return;

            string indent = new string('\t', level - 1); // Indentation based on hierarchy level

            foreach (var tab in tabs)
            {
                // Append the current tab's title and content
                textBuilder.AppendLine($"{indent}--- Tab: {tab.TabProperties.Title} ---\n");
                textBuilder.Append(ExtractTextFromTab(tab.DocumentTab));

                // Recursively process child tabs
                if (tab.ChildTabs != null && tab.ChildTabs.Count > 0)
                {
                    ProcessTabs(tab.ChildTabs, textBuilder, level + 1);
                }
            }
        }



    }
}
