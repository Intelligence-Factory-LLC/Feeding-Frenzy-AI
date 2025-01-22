using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BasicUtilities;
using System.Data;
using System.Data.OleDb;

namespace FeedingFrenzy.Common
{
	/// <summary>
	/// Summary description for BuilkUploadUtil
	/// </summary>
	public class BulkUploadUtil
	{
		public static void EnsureTableColumn(DataTable dt, string strColumn)
		{
			if (!dt.Columns.Contains(strColumn))
				throw new Exception("Table does not contain required column: " + strColumn);
		}

		public static void EnsureTableColumns(DataTable dt, string[] strColumns)
		{
			foreach (string strCol in strColumns)
			{
				EnsureTableColumn(dt, strCol);
			}
		}

		public static string SerializeWeakProperties(DataRow row, string[] strStrongProperties)
		{
			JsonObject json = new JsonObject("{}");

			foreach (DataColumn oCol in row.Table.Columns)
			{
				if (!strStrongProperties.Contains<string>(oCol.ColumnName, StringComparer.InvariantCultureIgnoreCase))
				{
					json[oCol.ColumnName] = new JsonValue(row[oCol].ToString(), false);
				}
			}

			return json.ToJSON();
		}


		public static DataTable GetDataTableFromFile(string strFile)
		{
			DataTable dt = new DataTable();

			if (strFile.ToLower().EndsWith(".xls"))
			{
				OleDbConnection con = new OleDbConnection(string.Format(@"Provider=Microsoft.Jet.OLEDB.4.0;Data Source={0};Extended Properties=Excel 8.0", strFile));
				con.Open();
				DataTable dtWorksheets = con.GetSchema("Tables");
				OleDbDataAdapter da = new OleDbDataAdapter("select * from [" + dtWorksheets.Rows[0][2].ToString() + "]", con);
				da.Fill(dt);
			}


			else if (strFile.ToLower().EndsWith(".xlsx"))
			{
				OleDbConnection con = new OleDbConnection(string.Format("Provider=Microsoft.ACE.OLEDB.12.0;Data Source={0};Extended Properties=\"Excel 12.0;HDR=Yes;IMEX=2\"", strFile));
				con.Open();
				DataTable dtWorksheets = con.GetSchema("Tables");
				OleDbDataAdapter da = new OleDbDataAdapter("select * from [" + dtWorksheets.Rows[0][2].ToString() + "]", con);
				da.Fill(dt);
			}

			else if (strFile.ToLower().EndsWith(".csv"))
			{
				dt = BasicUtilities.CsvTokenizer.LoadCsvFile(strFile);
			}

			return dt;
		}

		public static DataSet GetDataSetFromFile(string strFile)
		{
			DataSet oDs = new DataSet();


			if (strFile.ToLower().EndsWith(".xls"))
			{
				OleDbConnection con = new OleDbConnection(string.Format(@"Provider=Microsoft.ACE.OLEDB.12.0;Data Source={0};Extended Properties=""Excel 8.0;IMEX=1;HDR=Yes;TypeGuessRows=0;ImportMixedTypes=Text""", strFile));
				con.Open();
				DataTable dtWorksheets = con.GetSchema("Tables");

				foreach (DataRow row in dtWorksheets.Rows)
				{
					DataTable dt = new DataTable(row[2].ToString());

					OleDbDataAdapter da = new OleDbDataAdapter("select * from [" + row[2].ToString() + "]", con);
					try
					{
						da.Fill(dt);

						oDs.Tables.Add(dt);
					}
					catch
					{
					}
				}

			}

			else if (strFile.ToLower().EndsWith(".xlsx"))
			{
                using (OleDbConnection con = new OleDbConnection($@"Provider=Microsoft.ACE.OLEDB.12.0;Data Source={strFile};Extended Properties='Excel 12.0;HDR=Yes;IMEX=2;TypeGuessRows=0;ImportMixedTypes=Text'"))
                {
					try
					{
                        con.Open();
                        DataTable dtWorksheets = con.GetSchema("Tables");
                        foreach (DataRow row in dtWorksheets.Rows)
                        {
                            DataTable dt = new DataTable(row[2].ToString());

							using (OleDbDataAdapter da = new OleDbDataAdapter("select * from [" + row[2].ToString() + "]", con))
							{
								try
								{
                                    da.Fill(dt);

                                    oDs.Tables.Add(dt);
                                }
								catch (Exception ex)
								{
									throw ex;
								}
							}                                
                        }
                    }
					catch (Exception ex)
					{
						throw ex;
					}
                    
                }
			}

			else if (strFile.ToLower().EndsWith(".csv"))
			{
				DataTable dt = new DataTable();

				dt = BasicUtilities.CsvTokenizer.LoadCsvFile(strFile);

				oDs.Tables.Add(dt);
			}

			return oDs;
		}


        public static string ValidCSV(string strFile)
        {
            // Define expected column names
            string[] expectedColumns = { "Company", "FirstName", "LastName", "Phone", "Email", "Address", "Address2", "City", "State", "ZipCode", "Source", "Priority", "LeadStatus", "ImportKey" };

            // Path to the CSV file
            string filePath = strFile;

            // Read the first line of the CSV file
            string firstLine;
            using (var reader = new StreamReader(filePath))
            {
                firstLine = reader.ReadLine();
            }

            // Split the first line by comma
            var actualColumns = firstLine.Split(',');

            // Validate the column names
            string missingColumns = ValidateColumns(expectedColumns, actualColumns);

            if (string.IsNullOrEmpty(missingColumns))
            {
				return String.Empty;
            }
            else
            {
                return missingColumns;
            }
        }

        // Method to validate the columns
        static string ValidateColumns(string[] expectedColumns, string[] actualColumns)
        {
            List<string> missingColumns = new List<string>();

            foreach (var expectedColumn in expectedColumns)
            {
                // Check if the expected column is in the actual columns
                bool columnFound = false;
                foreach (var actualColumn in actualColumns)
                {
                    if (expectedColumn.Equals(actualColumn, StringComparison.OrdinalIgnoreCase))
                    {
                        columnFound = true;
                        break;
                    }
                }

                // If not found, add to the list of missing columns
                if (!columnFound)
                {
                    missingColumns.Add(expectedColumn);
                }
            }

            // Return the missing columns as a comma-separated string
            return string.Join(", ", missingColumns);
        }
    }
}