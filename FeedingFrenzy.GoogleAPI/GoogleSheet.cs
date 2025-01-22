using BasicUtilities.Collections;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Drive.v3;
using Google.Apis.Drive.v3.Data;
using Google.Apis.Services;
using Google.Apis.Sheets.v4;
using Google.Apis.Sheets.v4.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FeedingFrenzy.GoogleAPI
{
	public class GoogleSheet
	{
		public string SheetID;
		public string? Name = null;
		public GoogleSheet(string strSheetID)
		{
			SheetID = strSheetID;

			ConnectToGoogle();
		}

		static readonly string[] Scopes = { SheetsService.Scope.Spreadsheets, SheetsService.Scope.DriveFile, SheetsService.Scope.Drive };

		private static GoogleCredential GetCredentialsFromFile()
		{
			GoogleCredential credential;
			using (var stream = new FileStream("c:\\temp\\aarondavid.json", FileMode.Open, FileAccess.Read))
			{
				credential = GoogleCredential.FromStream(stream).CreateScoped(Scopes);
			}
			return credential;
		}

		public SheetsService _sheetsService;
        public DriveService _driveService;

        private void ConnectToGoogle()
		{
			// Create Google Sheets API service.
			_sheetsService = new SheetsService(new BaseClientService.Initializer()
			{
				ApplicationName = "Sheets Integration",
				HttpClientInitializer = GetCredentialsFromFile()
			});

            _driveService = new DriveService(new BaseClientService.Initializer()
            {
                ApplicationName = "Drive Integration",
                HttpClientInitializer = GetCredentialsFromFile()
            });

        }

        public string GetSheetName()
		{
			var request = _sheetsService.Spreadsheets.Get(SheetID);
			Spreadsheet spreadsheet = request.Execute();
			return spreadsheet.Properties.Title;
		}

		public List<string> GetTabNames()
		{
			var request = _sheetsService.Spreadsheets.Get(SheetID);
			Spreadsheet spreadsheet = request.Execute();		
			return spreadsheet.Sheets.Select(x => x.Properties.Title).ToList();
		}

		public DataTable DataTableFromSheet(string strSheetName)
		{
			var request = _sheetsService.Spreadsheets.Values.Get(SheetID, strSheetName);
			var values = request.Execute();

			DataTable dt = new DataTable();

			if (values?.Values?.Count > 0)
			{
				IList<object> cols = values.Values[0];

				foreach (object col in cols)
				{
					string strCol = col.ToString();
					int i = 0;
					while (dt.Columns.Contains(strCol))
					{
						strCol = col.ToString() + i++;
					}

					dt.Columns.Add(strCol.Trim());
				}

				for (int i = 1; i < values.Values.Count; i++)
				{
					IList<object> row = values.Values[i];
					DataRow rowNew = dt.NewRow();

					for (int j = 0; j < row.Count && j < dt.Columns.Count; j++)
					{
						object obj = row[j];
						rowNew[j] = obj;
					}

					dt.Rows.Add(rowNew);
				}
			}

			return dt;
		}

		private Map<string, GoogleSheetTab> m_Tabs = new Map<string, GoogleSheetTab>();

		public GoogleSheetTab Tabs(string strTabName)
		{
			GoogleSheetTab tab;
			if (!m_Tabs.TryGetValue(strTabName, out tab))
			{
				tab = new GoogleSheetTab(strTabName, this);
				tab.Table = DataTableFromSheet(strTabName);
				tab.MapColumns();
				m_Tabs[strTabName] = tab;
			}

			return tab;
		}

		public GoogleSheetTab Tabs(int iIndex)
		{
			List<string> lstTabs = this.GetTabNames();
			if (iIndex < 0 || iIndex >= lstTabs.Count)
				throw new Exception("Tab not found: " + iIndex);

			return Tabs(lstTabs[iIndex]);
		}

		static public GoogleSheet CreateEmptySheetAndShare(string strSheetName)
        {
            var sheetFile = new Google.Apis.Drive.v3.Data.File
            {
                Name = strSheetName,
                MimeType = "application/vnd.google-apps.spreadsheet",
            };

			var driveService = new DriveService(new BaseClientService.Initializer()
			{
				ApplicationName = "Drive Integration",
				HttpClientInitializer = GetCredentialsFromFile()
			});

			var createRequest = driveService.Files.Create(sheetFile);
            var newFile = createRequest.Execute();

            var permission = new Google.Apis.Drive.v3.Data.Permission
            {
                Type = "domain",
                Role = "writer",
                Domain = "medekhealth.com"
            };

            var createPermissionRequest = driveService.Permissions.Create(permission, newFile.Id);
            createPermissionRequest.Execute();

            Logs.DebugLog.WriteEvent("New document ID: ", newFile.Id);

			return new GoogleSheet(newFile.Id);

        }

    }
}
