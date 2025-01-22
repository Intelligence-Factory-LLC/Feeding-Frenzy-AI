
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class PhoneNumbersRow : RooTrax.Common.DB.BasicRow
	{
		
		public int PhoneNumberID { get; set;}
			
		public string PhoneNumber { get; set;}
			
		public string? PhoneType { get; set;}
			
		public bool IsInternal { get; set;}
			
		public string? CallerName { get; set;}
			
		public string? Country { get; set;}
			
		public DateTime DateCreated { get; set;}
			
		public DateTime LastUpdated { get; set;}
			
		public bool IsBlocked { get; set;}
			
		public bool IsSpam { get; set;}
			

		private string ? m_strData = null;
		public string ? Data 
		{ 
			get
			{
				return (null != m_jsonDataObject ? m_jsonDataObject.ToString() : m_strData);
			}

			set
			{
				m_strData = value;
				m_jsonDataObject = null;
			}
		}

		private JsonObject ? m_jsonDataObject = null;
		public JsonObject DataObject
		{
			get
			{
				if (null == m_jsonDataObject)
					m_jsonDataObject = new JsonObject(StringUtil.IsEmpty(this.Data) ? "{}" : this.Data!);

				return m_jsonDataObject;
			}
		}
		
		
		public PhoneNumbersRow()
		{
			
			this.PhoneNumberID = 0;
				
			this.PhoneNumber = "";
				
			this.IsInternal = false;
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
			this.IsBlocked = false;
				
			this.IsSpam = false;
				
		}

		public  PhoneNumbersRow( PhoneNumbersRow oRow)
		{
			
			this.PhoneNumberID = oRow.PhoneNumberID;
			
			this.PhoneNumber = oRow.PhoneNumber;
			
			this.PhoneType = oRow.PhoneType;
			
			this.IsInternal = oRow.IsInternal;
			
			this.CallerName = oRow.CallerName;
			
			this.Country = oRow.Country;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
			this.IsBlocked = oRow.IsBlocked;
			
			this.IsSpam = oRow.IsSpam;
			
		}	

		public override int GetHashCode()
		{
			return (PhoneNumberID + 6787 << 12);
		}		

		public override string ToString()
		{
			return $"{PhoneNumber} ({PhoneNumberID})";
		}
		
	}
	
	public class PhoneNumbersDataTable : List<PhoneNumbersRow>
	{	
		public PhoneNumbersDataTable(PhoneNumbersDataTable oTable)
			: base(oTable)
		{
		}

		public PhoneNumbersDataTable()
		{
		}
	}

    public partial class PhoneNumbersRepository
    {
		static private bool m_bIsCachingEnabled = false; 
		static public bool IsCachingEnabled
		{
			get
			{
				return m_bIsCachingEnabled;
			}
			set
			{
				m_bIsCachingEnabled = value;
			}
		}

		private static RowCache ? m_cache = null;
		public static RowCache Cache
		{
			get
			{
				if (null == m_cache)
					m_cache = CacheManager.Instance.GetOrCreateCache("PhoneNumbers");

				return m_cache!;
			}
		}

		internal static PhoneNumbersRow PopulateRowFromReader(SqlDataReader reader)
		{
			PhoneNumbersRow rowPhoneNumber = new PhoneNumbersRow();
			
			rowPhoneNumber.PhoneNumberID = DataAccess.GetID(reader, "PhoneNumberID");
			
			rowPhoneNumber.PhoneNumber = DataAccess.GetPhone(reader, "PhoneNumber");
			
			rowPhoneNumber.PhoneType = DataAccess.GetStringOrNull(reader, "PhoneType");
			
			rowPhoneNumber.IsInternal = DataAccess.GetBoolean(reader, "IsInternal");
			
			rowPhoneNumber.CallerName = DataAccess.GetStringOrNull(reader, "CallerName");
			
			rowPhoneNumber.Country = DataAccess.GetStringOrNull(reader, "Country");
			
			rowPhoneNumber.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowPhoneNumber.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowPhoneNumber.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
			
			rowPhoneNumber.IsBlocked = DataAccess.GetBoolean(reader, "IsBlocked");
			
			rowPhoneNumber.IsSpam = DataAccess.GetBoolean(reader, "IsSpam");
									

			return rowPhoneNumber;
		}

	
		public static int InsertPhoneNumber(PhoneNumbersRow oPhoneNumber)
		{
			return InsertPhoneNumber(
    								 oPhoneNumber.PhoneNumber, 
    								 oPhoneNumber.PhoneType, 
    								 oPhoneNumber.IsInternal, 
    								 oPhoneNumber.CallerName, 
    								 oPhoneNumber.Country, 
    								 oPhoneNumber.Data, 
    								 oPhoneNumber.IsBlocked, 
    								 oPhoneNumber.IsSpam
									);			
		}

		public static int  InsertPhoneNumber(
    		string PhoneNumber, 
    		string? PhoneType, 
    		bool IsInternal, 
    		string? CallerName, 
    		string? Country, 
    		string? Data, 
    		bool IsBlocked, 
    		bool IsSpam)
		{
			int iPhoneNumberID = 0;

			try
			{
				string strStoredProc = "InsertPhoneNumberSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Phone("@PhoneNumber", PhoneNumber));
				
				sqlParams.Add(DataAccess.Params.String("@PhoneType", PhoneType));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsInternal", IsInternal));
				
				sqlParams.Add(DataAccess.Params.String("@CallerName", CallerName));
				
				sqlParams.Add(DataAccess.Params.String("@Country", Country));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsBlocked", IsBlocked));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsSpam", IsSpam));
				
				iPhoneNumberID = DataAccess.IntFromProc(strStoredProc, sqlParams, "PhoneNumberID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Phone Number since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iPhoneNumberID;
		}
		
		public static void UpdatePhoneNumber(
    		int PhoneNumberID, 
    		string PhoneNumber, 
    		string? PhoneType, 
    		bool IsInternal, 
    		string? CallerName, 
    		string? Country, 
    		string? Data, 
    		bool IsBlocked, 
    		bool IsSpam)
    	{    	
    		try
			{
				string strStoredProc = "UpdatePhoneNumberSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@PhoneNumberID", PhoneNumberID));
				
				sqlParams.Add(DataAccess.Params.Phone("@PhoneNumber", PhoneNumber));
				
				sqlParams.Add(DataAccess.Params.String("@PhoneType", PhoneType));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsInternal", IsInternal));
				
				sqlParams.Add(DataAccess.Params.String("@CallerName", CallerName));
				
				sqlParams.Add(DataAccess.Params.String("@Country", Country));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsBlocked", IsBlocked));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsSpam", IsSpam));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(PhoneNumberID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Phone Number since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdatePhoneNumber(PhoneNumbersRow oPhoneNumber)
		{
			  UpdatePhoneNumber(
    								 oPhoneNumber.PhoneNumberID, 
    								 oPhoneNumber.PhoneNumber, 
    								 oPhoneNumber.PhoneType, 
    								 oPhoneNumber.IsInternal, 
    								 oPhoneNumber.CallerName, 
    								 oPhoneNumber.Country, 
    								 oPhoneNumber.Data, 
    								 oPhoneNumber.IsBlocked, 
    								 oPhoneNumber.IsSpam
									);			
		}
		
    	public static void RemovePhoneNumber(int PhoneNumberID)
    	{
			try
			{
				string strStoredProc = "RemovePhoneNumberSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@PhoneNumberID", PhoneNumberID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(PhoneNumberID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Phone Number since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static PhoneNumbersRow Get(int PhoneNumberID)
		{
			PhoneNumbersRow ? oPhoneNumber = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oPhoneNumber = Cache.Get<PhoneNumbersRow>(PhoneNumberID);

				if (null != oPhoneNumber)
					return oPhoneNumber;
			}

			try
			{
				string strStoredProc = "GetPhoneNumberSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@PhoneNumberID", PhoneNumberID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oPhoneNumber = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oPhoneNumber)
			{
				
				Cache.Insert(oPhoneNumber, oPhoneNumber.PhoneNumberID, oPhoneNumber.PhoneNumber?.ToString());
				
			}

			return oPhoneNumber ?? throw new Exception("Could not find PhoneNumber " + PhoneNumberID);
		}
		
		public static PhoneNumbersDataTable GetAll()
		{
			PhoneNumbersDataTable tblPhoneNumbers = new PhoneNumbersDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetPhoneNumbersSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					PhoneNumbersRow rowPhoneNumber = PopulateRowFromReader(reader);
					
					tblPhoneNumbers.Add(rowPhoneNumber);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblPhoneNumbers;
		}	
		
		public static int CopyPhoneNumber(int PhoneNumberID)
		{
			int iPhoneNumberID = 0;

			try
			{
				string strStoredProc = "CopyPhoneNumberSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@PhoneNumberID", PhoneNumberID));

				iPhoneNumberID = DataAccess.IntFromProc(strStoredProc, sqlParams, "PhoneNumberID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Phone Number since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iPhoneNumberID;
		}  
		
		public static PhoneNumbersRow ? GetPhoneNumberByPhoneNumber(string PhoneNumber)
		{
			PhoneNumbersRow ? oPhoneNumber = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oPhoneNumber = Cache.Get<PhoneNumbersRow>(PhoneNumber.ToString());

					if (null != oPhoneNumber)
						return oPhoneNumber;
				}
						

				string strStoredProc = "GetPhoneNumberByPhoneNumberSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Phone("@PhoneNumber", PhoneNumber));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oPhoneNumber = PopulateRowFromReader(reader);
				}

				

				if (IsCachingEnabled && null != oPhoneNumber)
				{
					Cache.Insert(oPhoneNumber, oPhoneNumber.PhoneNumberID, oPhoneNumber.PhoneNumber?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oPhoneNumber;		
		}	
			
    	public static void MarkPhoneNumberAsInternal(int PhoneNumberID)
    	{
    		try
			{
				string strStoredProc = "MarkPhoneNumberAsInternalSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@PhoneNumberID", PhoneNumberID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkPhoneNumberAsNotInternal(int PhoneNumberID)
    	{
    		try
			{
				string strStoredProc = "MarkPhoneNumberAsNotInternalSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@PhoneNumberID", PhoneNumberID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
			
    	public static void UpdatePhoneNumberData(int PhoneNumberID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdatePhoneNumberDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@PhoneNumberID", PhoneNumberID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(PhoneNumberID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdatePhoneNumberData(PhoneNumbersRow rowPhoneNumber)
    	{
    		UpdatePhoneNumberData(rowPhoneNumber.PhoneNumberID, rowPhoneNumber.Data);
    	}  
    	
    	public static void MarkPhoneNumberAsBlocked(int PhoneNumberID)
    	{
    		try
			{
				string strStoredProc = "MarkPhoneNumberAsBlockedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@PhoneNumberID", PhoneNumberID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkPhoneNumberAsNotBlocked(int PhoneNumberID)
    	{
    		try
			{
				string strStoredProc = "MarkPhoneNumberAsNotBlockedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@PhoneNumberID", PhoneNumberID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkPhoneNumberAsSpam(int PhoneNumberID)
    	{
    		try
			{
				string strStoredProc = "MarkPhoneNumberAsSpamSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@PhoneNumberID", PhoneNumberID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkPhoneNumberAsNotSpam(int PhoneNumberID)
    	{
    		try
			{
				string strStoredProc = "MarkPhoneNumberAsNotSpamSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@PhoneNumberID", PhoneNumberID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
		public static PhoneNumbersDataTable GetPhoneNumbersSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			PhoneNumbersDataTable tblPhoneNumbers = new PhoneNumbersDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetPhoneNumbersSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					PhoneNumbersRow rowPhoneNumber = PopulateRowFromReader(reader);

					tblPhoneNumbers.Add(rowPhoneNumber);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblPhoneNumbers;
		}				
		public static int? GetPhoneNumbersSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetPhoneNumbersSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetPhoneNumbersSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		

	}

}	

		