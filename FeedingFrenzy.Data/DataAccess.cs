using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using System.Configuration;
using System.Data;

namespace FeedingFrenzy.Data
{
	public class DataAccess : RooTrax.Common.DB.DataAccess
	{
		private static string ConnectionString = string.Empty; 

		public static void SetConnectionString(string strConnectionString)
		{
			ConnectionString = strConnectionString;
		}

		public static string GetConnectionString()
		{
			return ConnectionString;
		}

		public static void ExecProc(string strStoredProc, IEnumerable<SqlParameter> sqlParams)
		{
			RooTrax.Common.DB.DataAccess.ExecProc(strStoredProc, sqlParams, DataAccess.ConnectionString);
		}

		public static DataSet DataSetFromProc(string strStoredProc, IEnumerable<SqlParameter> sqlParams)
		{
			return RooTrax.Common.DB.DataAccess.DataSetFromProc(strStoredProc, sqlParams, DataAccess.ConnectionString);
		}


		public static SqlDataReader ReaderFromProc(string strStoredProc, IEnumerable<SqlParameter> sqlParams)
		{
			return RooTrax.Common.DB.DataAccess.ReaderFromProc(strStoredProc, sqlParams, DataAccess.ConnectionString);
		}
		async public static Task<SqlDataReader> ReaderFromProcAsync(string strStoredProc, IEnumerable<SqlParameter> sqlParams)
		{
			return await RooTrax.Common.DB.DataAccess.ReaderFromProcAsync(strStoredProc, sqlParams, DataAccess.ConnectionString);
		}
		
		public static int IntFromProc(string strStoredProc, IEnumerable<SqlParameter> sqlParams, string strFieldName)
		{
			return RooTrax.Common.DB.DataAccess.IntFromProc(strStoredProc, sqlParams, strFieldName, DataAccess.ConnectionString);
		}

		internal static decimal DecimalFromProc(string strStoredProc, SqlParams sqlParams, string strFieldName)
		{
			return RooTrax.Common.DB.DataAccess.DecimalFromProc(strStoredProc, sqlParams, strFieldName, DataAccess.ConnectionString);
		}

		internal static object ? ScalarFromFunction(string strFunction, SqlParams sqlParams)
		{
			return RooTrax.Common.DB.DataAccess.ScalarFromFunction(strFunction, sqlParams, DataAccess.ConnectionString);
		}
	}
}
