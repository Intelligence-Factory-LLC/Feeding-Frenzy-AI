
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class EmailHistoriesRow : RooTrax.Common.DB.BasicRow
	{
		
		public int EmailHistoryID { get; set;}
			
		public string To { get; set;}
			
		public string From { get; set;}
			
		private int m_EmailTemplateID;
		public int EmailTemplateID
		{
			get 
			{ 
				return this.m_EmailTemplateID;
			}
					
			set 
			{ 
				this.m_EmailTemplateID = value; 
				this.m_EmailTemplateRow = null; 
			}
		} 
					
		public string Subject { get; set;}
			
		public string Email { get; set;}
			
		public DateTime DateCreated { get; set;}
			
		public bool IsPending { get; set;}
			
		public bool IsSent { get; set;}
			
		public DateTime LastUpdated { get; set;}
			

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
		
		private EmailTemplatesRow ? m_EmailTemplateRow = null;	
		public EmailTemplatesRow ? EmailTemplate
		{
			get
			{
				if (null == m_EmailTemplateRow &&  this.EnableLazyLoadProperties)
					m_EmailTemplateRow = EmailTemplatesRepository.Get((int)this.EmailTemplateID);
		
				return m_EmailTemplateRow;
			}
		}    				
		
		public EmailHistoriesRow()
		{
			
			this.EmailHistoryID = 0;
				
			this.To = "";
				
			this.From = "";
				
			this.EmailTemplateID = 0;
				
			this.Subject = "";
				
			this.Email = "";
				
			this.DateCreated = DateTime.Now;
				
			this.IsPending = true;
				
			this.IsSent = true;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  EmailHistoriesRow( EmailHistoriesRow oRow)
		{
			
			this.EmailHistoryID = oRow.EmailHistoryID;
			
			this.To = oRow.To;
			
			this.From = oRow.From;
			
			this.EmailTemplateID = oRow.EmailTemplateID;
			
			this.Subject = oRow.Subject;
			
			this.Email = oRow.Email;
			
			this.DateCreated = oRow.DateCreated;
			
			this.IsPending = oRow.IsPending;
			
			this.IsSent = oRow.IsSent;
			
			this.Data = oRow.Data;
			
			this.LastUpdated = oRow.LastUpdated;
			
		}	

		public override int GetHashCode()
		{
			return (EmailHistoryID + 1741 << 12);
		}		

		public override string ToString()
		{
			return $"({EmailHistoryID})";
		}
		
	}
	
	public class EmailHistoriesDataTable : List<EmailHistoriesRow>
	{	
		public EmailHistoriesDataTable(EmailHistoriesDataTable oTable)
			: base(oTable)
		{
		}

		public EmailHistoriesDataTable()
		{
		}
	}

    public partial class EmailHistoriesRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("EmailHistories");

				return m_cache!;
			}
		}

		internal static EmailHistoriesRow PopulateRowFromReader(SqlDataReader reader)
		{
			EmailHistoriesRow rowEmailHistory = new EmailHistoriesRow();
			
			rowEmailHistory.EmailHistoryID = DataAccess.GetID(reader, "EmailHistoryID");
			
			rowEmailHistory.To = DataAccess.GetString(reader, "To");
			
			rowEmailHistory.From = DataAccess.GetString(reader, "From");
			
			rowEmailHistory.EmailTemplateID = DataAccess.GetID(reader, "EmailTemplateID");
			
			rowEmailHistory.Subject = DataAccess.GetString(reader, "Subject");
			
			rowEmailHistory.Email = DataAccess.GetText(reader, "Email");
			
			rowEmailHistory.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowEmailHistory.IsPending = DataAccess.GetBoolean(reader, "IsPending");
			
			rowEmailHistory.IsSent = DataAccess.GetBoolean(reader, "IsSent");
			
			rowEmailHistory.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowEmailHistory.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
									

			return rowEmailHistory;
		}

	
		public static EmailHistoriesDataTable GetEmailHistoriesSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			EmailHistoriesDataTable tblEmailHistories = new EmailHistoriesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetEmailHistoriesSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					EmailHistoriesRow rowEmailHistory = PopulateRowFromReader(reader);

					tblEmailHistories.Add(rowEmailHistory);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblEmailHistories;
		}				
		public static int? GetEmailHistoriesSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetEmailHistoriesSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetEmailHistoriesSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static EmailHistoriesDataTable GetEmailHistoriesByEmailTemplateIDSp_PagingSp(int EmailTemplateID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			EmailHistoriesDataTable tblEmailHistories = new EmailHistoriesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetEmailHistoriesByEmailTemplateIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@EmailTemplateID", EmailTemplateID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					EmailHistoriesRow rowEmailHistory = PopulateRowFromReader(reader);

					tblEmailHistories.Add(rowEmailHistory);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblEmailHistories;
		}				
		public static int? GetEmailHistoriesByEmailTemplateIDSp_CountSp(int EmailTemplateID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetEmailHistoriesByEmailTemplateIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@EmailTemplateID", EmailTemplateID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetEmailHistoriesByEmailTemplateIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
    	public static void RemoveEmailHistory(int EmailHistoryID)
    	{
			try
			{
				string strStoredProc = "RemoveEmailHistorySp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@EmailHistoryID", EmailHistoryID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(EmailHistoryID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Email History since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static EmailHistoriesRow Get(int EmailHistoryID)
		{
			EmailHistoriesRow ? oEmailHistory = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oEmailHistory = Cache.Get<EmailHistoriesRow>(EmailHistoryID);

				if (null != oEmailHistory)
					return oEmailHistory;
			}

			try
			{
				string strStoredProc = "GetEmailHistorySp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@EmailHistoryID", EmailHistoryID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oEmailHistory = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oEmailHistory)
			{
				
				Cache.Insert(oEmailHistory, oEmailHistory.EmailHistoryID, oEmailHistory.EmailHistoryID.ToString());
				
			}

			return oEmailHistory ?? throw new Exception("Could not find EmailHistory " + EmailHistoryID);
		}
		
		public static EmailHistoriesDataTable GetAll()
		{
			EmailHistoriesDataTable tblEmailHistories = new EmailHistoriesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetEmailHistoriesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					EmailHistoriesRow rowEmailHistory = PopulateRowFromReader(reader);
					
					tblEmailHistories.Add(rowEmailHistory);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblEmailHistories;
		}	
		
		public static int CopyEmailHistory(int EmailHistoryID)
		{
			int iEmailHistoryID = 0;

			try
			{
				string strStoredProc = "CopyEmailHistorySp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@EmailHistoryID", EmailHistoryID));

				iEmailHistoryID = DataAccess.IntFromProc(strStoredProc, sqlParams, "EmailHistoryID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Email History since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iEmailHistoryID;
		}  
		
    	public static void MarkEmailHistoryAsPending(int EmailHistoryID)
    	{
    		try
			{
				string strStoredProc = "MarkEmailHistoryAsPendingSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@EmailHistoryID", EmailHistoryID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkEmailHistoryAsNotPending(int EmailHistoryID)
    	{
    		try
			{
				string strStoredProc = "MarkEmailHistoryAsNotPendingSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@EmailHistoryID", EmailHistoryID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkEmailHistoryAsSent(int EmailHistoryID)
    	{
    		try
			{
				string strStoredProc = "MarkEmailHistoryAsSentSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@EmailHistoryID", EmailHistoryID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkEmailHistoryAsNotSent(int EmailHistoryID)
    	{
    		try
			{
				string strStoredProc = "MarkEmailHistoryAsNotSentSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@EmailHistoryID", EmailHistoryID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
			
    	public static void UpdateEmailHistoryData(int EmailHistoryID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateEmailHistoryDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@EmailHistoryID", EmailHistoryID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(EmailHistoryID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateEmailHistoryData(EmailHistoriesRow rowEmailHistory)
    	{
    		UpdateEmailHistoryData(rowEmailHistory.EmailHistoryID, rowEmailHistory.Data);
    	}  
    	
		public static EmailHistoriesDataTable GetEmailHistoriesByEmailTemplateID(int EmailTemplateID)
		{
			EmailHistoriesDataTable tblEmailHistories = new EmailHistoriesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetEmailHistoriesByEmailTemplateIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@EmailTemplateID", EmailTemplateID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					EmailHistoriesRow rowEmailHistory = PopulateRowFromReader(reader);

					tblEmailHistories.Add(rowEmailHistory);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblEmailHistories;
		}				
		public static int InsertEmailHistory(EmailHistoriesRow oEmailHistory)
		{
			return InsertEmailHistory(
    								 oEmailHistory.To, 
    								 oEmailHistory.From, 
    								 oEmailHistory.EmailTemplateID, 
    								 oEmailHistory.Subject, 
    								 oEmailHistory.Email, 
    								 oEmailHistory.IsPending, 
    								 oEmailHistory.IsSent, 
    								 oEmailHistory.Data
									);			
		}

		public static int  InsertEmailHistory(
    		string To, 
    		string From, 
    		int EmailTemplateID, 
    		string Subject, 
    		string Email, 
    		bool IsPending, 
    		bool IsSent, 
    		string? Data)
		{
			int iEmailHistoryID = 0;

			try
			{
				string strStoredProc = "InsertEmailHistorySp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@To", To));
				
				sqlParams.Add(DataAccess.Params.String("@From", From));
				
				sqlParams.Add(DataAccess.Params.ID("@EmailTemplateID", EmailTemplateID));
				
				sqlParams.Add(DataAccess.Params.String("@Subject", Subject));
				
				sqlParams.Add(DataAccess.Params.Text("@Email", Email));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsPending", IsPending));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsSent", IsSent));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iEmailHistoryID = DataAccess.IntFromProc(strStoredProc, sqlParams, "EmailHistoryID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Email History since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iEmailHistoryID;
		}
		
		public static void UpdateEmailHistory(
    		int EmailHistoryID, 
    		string To, 
    		string From, 
    		int EmailTemplateID, 
    		string Subject, 
    		string Email, 
    		bool IsPending, 
    		bool IsSent, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateEmailHistorySp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@EmailHistoryID", EmailHistoryID));
				
				sqlParams.Add(DataAccess.Params.String("@To", To));
				
				sqlParams.Add(DataAccess.Params.String("@From", From));
				
				sqlParams.Add(DataAccess.Params.ID("@EmailTemplateID", EmailTemplateID));
				
				sqlParams.Add(DataAccess.Params.String("@Subject", Subject));
				
				sqlParams.Add(DataAccess.Params.Text("@Email", Email));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsPending", IsPending));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsSent", IsSent));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(EmailHistoryID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Email History since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateEmailHistory(EmailHistoriesRow oEmailHistory)
		{
			  UpdateEmailHistory(
    								 oEmailHistory.EmailHistoryID, 
    								 oEmailHistory.To, 
    								 oEmailHistory.From, 
    								 oEmailHistory.EmailTemplateID, 
    								 oEmailHistory.Subject, 
    								 oEmailHistory.Email, 
    								 oEmailHistory.IsPending, 
    								 oEmailHistory.IsSent, 
    								 oEmailHistory.Data
									);			
		}
		

	}

}	

		