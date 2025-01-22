using BasicUtilities.Collections;
using BasicUtilities;
using Google.Apis.Sheets.v4;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Google.Apis.Sheets.v4.Data;

namespace FeedingFrenzy.GoogleAPI
{
	public class GoogleSheetTab
	{
		public string SheetName = null;
		private GoogleSheet Sheet = null;
		public GoogleSheetTab(string strSheetName, GoogleSheet sheet)
		{
			SheetName = strSheetName;
			Sheet = sheet;
		}

		public DataTable Table = new DataTable();
		public Map<string, int> mapColumnToLetter = new Map<string, int>();

		public void MapColumns()
		{
			for (int i = 0; i < Table.Columns.Count; i++)
			{
				mapColumnToLetter[Table.Columns[i].ColumnName] = i + 1;
			}
		}

		private string GetColumnNumberAsLetters(int columnNumber)
		{
			int dividend = columnNumber;
			string columnName = String.Empty;
			int modulo;

			while (dividend > 0)
			{
				modulo = (dividend - 1) % 26;
				columnName = Convert.ToChar(65 + modulo).ToString() + columnName;
				dividend = (int)((dividend - modulo) / 26);
			}

			return columnName;
		}

		public string GetColumnNameAsLetters(string strColumnName)
		{
			int iCol = mapColumnToLetter[strColumnName];
			return GetColumnNumberAsLetters(iCol);
		}

		public DataRow GetRow(string strColumnName, string strValue)
		{
			foreach (DataRow rowSearch in this.Table.Rows)
			{
				if (StringUtil.EqualNoCase(GetValue(rowSearch, strColumnName), strValue))
					return rowSearch;
			}

			return null;
		}

		public int GetRowNumber(string strColumnName, string strValue)
		{
			for (int i = 0; i < this.Table.Rows.Count; i++)
			{
				DataRow rowSearch = this.Table.Rows[i];
				if (StringUtil.EqualNoCase(GetValue(rowSearch, strColumnName), strValue))
					return (i + 2);
			}

			return 0;
		}


		private string GetValue(DataRow row, string strField)
		{
			return ConvUtilities.StringFromObject(row[strField], false, null);
		}

		public void UpdateCell(int iRow, string strColumnName, object oValue)
		{
			InsertColumn(strColumnName);

			string strColumn = GetColumnNameAsLetters(strColumnName);
			var objectList = new List<object>() { oValue };
			var rangeData = new List<IList<object>> { objectList };

			var req = Sheet._sheetsService.Spreadsheets.Values.Update(new Google.Apis.Sheets.v4.Data.ValueRange
			{
				Values = rangeData
			}, Sheet.SheetID, SheetName + "!" + strColumn + iRow);
			req.ValueInputOption = SpreadsheetsResource.ValuesResource.UpdateRequest.ValueInputOptionEnum.USERENTERED;
			req.Execute();

			if (iRow >= 2)
			{
				if (this.Table.Columns.Contains(strColumnName))
					this.Table.Rows[iRow - 2][strColumnName] = oValue;
			}

			System.Threading.Thread.Sleep(1000);
		}

		public void InsertColumn(string strColumn)
		{
			if (!mapColumnToLetter.ContainsKey(strColumn))
			{
				mapColumnToLetter[strColumn] = mapColumnToLetter.Count + 1;
				UpdateCell(1, strColumn, strColumn);
			}
		}


		public void InsertRow(DataRow row)
		{
			List<object> lstValues = new List<object>();
			foreach (DataColumn col in row.Table.Columns)
			{
				lstValues.Add(row[col.ColumnName]);
			}

			int iRow = row.Table.Rows.Count + 2;
			string strEnd = GetColumnNumberAsLetters(lstValues.Count - 1);

			string strRange = this.SheetName + "!A" + iRow + ":" + strEnd + iRow;

			var rangeData = new List<IList<object>> { lstValues };

			var req = Sheet._sheetsService.Spreadsheets.Values.Update(new Google.Apis.Sheets.v4.Data.ValueRange
			{
				Values = rangeData
			}, this.Sheet.SheetID, strRange);
			req.ValueInputOption = SpreadsheetsResource.ValuesResource.UpdateRequest.ValueInputOptionEnum.USERENTERED;
			req.Execute();

			this.Table.Rows.Add(row);

			System.Threading.Thread.Sleep(1000);
		}

		public void AppendData(List<IList<object>> tableData)
		{
			// Create the ValueRange object
			var valueRange = new Google.Apis.Sheets.v4.Data.ValueRange
			{
				Values = tableData
			};

			string range = $"{this.SheetName}";

			// Update the sheet with the table data
			var appendRequest = this.Sheet._sheetsService.Spreadsheets.Values.Append(valueRange, this.Sheet.SheetID, range);
			appendRequest.ValueInputOption = Google.Apis.Sheets.v4.SpreadsheetsResource.ValuesResource.AppendRequest.ValueInputOptionEnum.RAW;
			appendRequest.Execute();
		}

        public SheetProperties CreateNewTab(string strSheetID,string sNewSheetTitle)
        {
            AddSheetRequest addSheetRequest = new AddSheetRequest
            {
                Properties = new SheetProperties
                {
                    Title = sNewSheetTitle
                }
            };
            BatchUpdateSpreadsheetRequest batchUpdateRequest = new BatchUpdateSpreadsheetRequest
            {
                Requests = new List<Request>
                {
                    new Request
                    {
                        AddSheet = addSheetRequest
                    }
                }
            };

			var newTabRequest = 
				this.Sheet._sheetsService.Spreadsheets.BatchUpdate(batchUpdateRequest, strSheetID).Execute();

            SheetProperties newSheetProperties = 
				newTabRequest.Replies[0].AddSheet.Properties;

			return newSheetProperties;
        }

    }

}
