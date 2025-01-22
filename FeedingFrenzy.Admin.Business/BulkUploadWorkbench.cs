using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using BasicUtilities;
using FeedingFrenzy.Common;
using FeedingFrenzy.GoogleAPI;
using WebAppUtilities;

namespace FeedingFrenzy.Admin.Business
{
	public class BulkUploadWorkbench : JsonWs 
	{
		static public string GetDataSetFromFile(string File)
		{
			if (StringUtil.InString(File, "http"))
			{
				WebClient client = new WebClient();
				string strFileName = StringUtil.RightOfLast(File, "/");
				client.Credentials = new NetworkCredential("Administrator", "SOFmJM3N5v*GVcu1DuV&y0bH;1AW;hWq");
				client.DownloadFile(File, "c:\\temp\\bulk_upload_files\\" + strFileName);
				File = "c:\\temp\\bulk_upload_files\\" + strFileName;
			}

			string fileName = Path.GetFileName(File);
			
            File = $"c:\\temp\\bulk_upload_files\\{fileName}" ;

			string missingColumns = BulkUploadUtil.ValidCSV(File);

            if (File.Contains(".csv") && !String.IsNullOrEmpty(missingColumns))
				return @"{""InvalidColumnNames"":""" + missingColumns + @"""}";

            DataSet oDs = BulkUploadUtil.GetDataSetFromFile(File);

			StringBuilder sb = new StringBuilder("{");

			bool bFirst = true;

			foreach (DataTable dt in oDs.Tables)
			{
				if (bFirst)
					bFirst = false;
				else
					sb.Append(",");

				sb.AppendFormat("\"{0}\":", JsonUtil.ToSafeString(dt.TableName));
				sb.Append(JsonUtil.GetTableAsJson(dt.DefaultView));
			}

			sb.Append("}");

			return sb.ToString();
		}


		static public string GetDataSetFromGoogleSheet(string SheetID, string SheetName)
		{
			try
			{
				GoogleSheet sheet = new GoogleSheet(SheetID);
				GoogleSheetTab tab = sheet.Tabs(SheetName);

				DataTable dt = tab.Table;

				StringBuilder sb = new StringBuilder("{");
				sb.AppendFormat("\"{0}\":", JsonUtil.ToSafeString(SheetName));
				sb.Append(JsonUtil.GetTableAsJson(dt.DefaultView));
				sb.Append("}");

				return sb.ToString();
			}
			catch (Exception err)
			{
				throw new JsonWsException(err.Message);
			}
		}

		static public List<string> GetTabsFromGoogleSheet(string SheetID)
		{
			try
			{
				GoogleSheet sheet = new GoogleSheet(SheetID);

				return sheet.GetTabNames();
			}
			catch (Exception err)
			{
				throw new JsonWsException(err.Message);
			}
		}

	}

}
