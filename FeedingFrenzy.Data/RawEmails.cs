
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class RawEmailsRow : RooTrax.Common.DB.BasicRow
	{
		
		public int RawEmailID { get; set;}
			
		public string? To { get; set;}
			
		public string? From { get; set;}
			
		public string? Subject { get; set;}
			
		public string? BodyText { get; set;}
			
		public string? BodyHtml { get; set;}
			
		public bool IsProcessed { get; set;}
			
		public string? Label { get; set;}
			
		public DateTime DateCreated { get; set;}
			
		public DateTime LastUpdated { get; set;}
			
		private int? m_UserID;
		public int? UserID
		{
			get 
			{ 
				return this.m_UserID;
			}
					
			set 
			{ 
				this.m_UserID = value; 
				this.m_UserRow = null; 
			}
		} 
					
		public string ImportKey { get; set;}
			
		public DateTime EmailDate { get; set;}
			
		public string ThreadID { get; set;}
			

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
		
		private UsersRow ? m_UserRow = null;	
		public UsersRow ? User
		{
			get
			{
				if (null == m_UserRow &&  null != this.UserID && this.EnableLazyLoadProperties)
					m_UserRow = UsersRepository.Get((int)this.UserID);
		
				return m_UserRow;
			}
		}    				
		
		public RawEmailsRow()
		{
			
			this.RawEmailID = 0;
				
			this.IsProcessed = true;
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
			this.ImportKey = "";
				
			this.EmailDate = DateTime.Now;
				
			this.ThreadID = "";
				
		}

		public  RawEmailsRow( RawEmailsRow oRow)
		{
			
			this.RawEmailID = oRow.RawEmailID;
			
			this.To = oRow.To;
			
			this.From = oRow.From;
			
			this.Subject = oRow.Subject;
			
			this.BodyText = oRow.BodyText;
			
			this.BodyHtml = oRow.BodyHtml;
			
			this.IsProcessed = oRow.IsProcessed;
			
			this.Label = oRow.Label;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
			this.Data = oRow.Data;
			
			this.UserID = oRow.UserID;
			
			this.ImportKey = oRow.ImportKey;
			
			this.EmailDate = oRow.EmailDate;
			
			this.ThreadID = oRow.ThreadID;
			
		}	

		public override int GetHashCode()
		{
			return (RawEmailID + 7789 << 12);
		}		

		public override string ToString()
		{
			return $"{ImportKey} ({RawEmailID})";
		}
		
	}
	
	public class RawEmailsDataTable : List<RawEmailsRow>
	{	
		public RawEmailsDataTable(RawEmailsDataTable oTable)
			: base(oTable)
		{
		}

		public RawEmailsDataTable()
		{
		}
	}

    public partial class RawEmailsRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("RawEmails");

				return m_cache!;
			}
		}

		internal static RawEmailsRow PopulateRowFromReader(SqlDataReader reader)
		{
			RawEmailsRow rowRawEmail = new RawEmailsRow();
			
			rowRawEmail.RawEmailID = DataAccess.GetID(reader, "RawEmailID");
			
			rowRawEmail.To = DataAccess.GetStringOrNull(reader, "To");
			
			rowRawEmail.From = DataAccess.GetStringOrNull(reader, "From");
			
			rowRawEmail.Subject = DataAccess.GetTextOrNull(reader, "Subject");
			
			rowRawEmail.BodyText = DataAccess.GetTextOrNull(reader, "BodyText");
			
			rowRawEmail.BodyHtml = DataAccess.GetTextOrNull(reader, "BodyHtml");
			
			rowRawEmail.IsProcessed = DataAccess.GetBoolean(reader, "IsProcessed");
			
			rowRawEmail.Label = DataAccess.GetStringOrNull(reader, "Label");
			
			rowRawEmail.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowRawEmail.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
			
			rowRawEmail.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowRawEmail.UserID = DataAccess.GetIDOrNull(reader, "UserID");
			
			rowRawEmail.ImportKey = DataAccess.GetString(reader, "ImportKey");
			
			rowRawEmail.EmailDate = DataAccess.GetDateTime(reader, "EmailDate");
			
			rowRawEmail.ThreadID = DataAccess.GetString(reader, "ThreadID");
									

			return rowRawEmail;
		}

	
		public static RawEmailsRow ? GetMostRecentByUserID(int? UserID)
		{
			RawEmailsRow ? oRawEmail = null;
			SqlDataReader ? reader = null;

			try
			{
				

				string strStoredProc = "RawEmail_GetMostRecentByUserID_Sp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oRawEmail = PopulateRowFromReader(reader);
				}

				
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oRawEmail;		
		}	
			
		public static RawEmailsDataTable GetRawEmailsSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			RawEmailsDataTable tblRawEmails = new RawEmailsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRawEmailsSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					RawEmailsRow rowRawEmail = PopulateRowFromReader(reader);

					tblRawEmails.Add(rowRawEmail);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblRawEmails;
		}				
		public static int? GetRawEmailsSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRawEmailsSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetRawEmailsSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static RawEmailsRow ? GetRawEmailByImportKey(string ImportKey)
		{
			RawEmailsRow ? oRawEmail = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oRawEmail = Cache.Get<RawEmailsRow>(ImportKey.ToString());

					if (null != oRawEmail)
						return oRawEmail;
				}
						

				string strStoredProc = "GetRawEmailByImportKeySp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@ImportKey", ImportKey));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oRawEmail = PopulateRowFromReader(reader);
				}

				

				if (IsCachingEnabled && null != oRawEmail)
				{
					Cache.Insert(oRawEmail, oRawEmail.RawEmailID, oRawEmail.ImportKey?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oRawEmail;		
		}	
			
		public static RawEmailsDataTable GetRawEmailsByThreadID(string ThreadID)
		{
			RawEmailsDataTable tblRawEmails = new RawEmailsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRawEmailsByThreadIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@ThreadID", ThreadID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					RawEmailsRow rowRawEmail = PopulateRowFromReader(reader);

					tblRawEmails.Add(rowRawEmail);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblRawEmails;
		}				
		public static int InsertRawEmail(RawEmailsRow oRawEmail)
		{
			return InsertRawEmail(
    								 oRawEmail.To, 
    								 oRawEmail.From, 
    								 oRawEmail.Subject, 
    								 oRawEmail.BodyText, 
    								 oRawEmail.BodyHtml, 
    								 oRawEmail.IsProcessed, 
    								 oRawEmail.Label, 
    								 oRawEmail.Data, 
    								 oRawEmail.UserID, 
    								 oRawEmail.ImportKey, 
    								 oRawEmail.EmailDate, 
    								 oRawEmail.ThreadID
									);			
		}

		public static int  InsertRawEmail(
    		string? To, 
    		string? From, 
    		string? Subject, 
    		string? BodyText, 
    		string? BodyHtml, 
    		bool IsProcessed, 
    		string? Label, 
    		string? Data, 
    		int? UserID, 
    		string ImportKey, 
    		DateTime EmailDate, 
    		string ThreadID)
		{
			int iRawEmailID = 0;

			try
			{
				string strStoredProc = "InsertRawEmailSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@To", To));
				
				sqlParams.Add(DataAccess.Params.String("@From", From));
				
				sqlParams.Add(DataAccess.Params.Text("@Subject", Subject));
				
				sqlParams.Add(DataAccess.Params.Text("@BodyText", BodyText));
				
				sqlParams.Add(DataAccess.Params.Text("@BodyHtml", BodyHtml));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsProcessed", IsProcessed));
				
				sqlParams.Add(DataAccess.Params.String("@Label", Label));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				sqlParams.Add(DataAccess.Params.String("@ImportKey", ImportKey));
				
				sqlParams.Add(DataAccess.Params.DateTime("@EmailDate", EmailDate));
				
				sqlParams.Add(DataAccess.Params.String("@ThreadID", ThreadID));
				
				iRawEmailID = DataAccess.IntFromProc(strStoredProc, sqlParams, "RawEmailID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Raw Email since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iRawEmailID;
		}
		
		public static void UpdateRawEmail(
    		int RawEmailID, 
    		string? To, 
    		string? From, 
    		string? Subject, 
    		string? BodyText, 
    		string? BodyHtml, 
    		bool IsProcessed, 
    		string? Label, 
    		string? Data, 
    		int? UserID, 
    		string ImportKey, 
    		DateTime EmailDate, 
    		string ThreadID)
    	{    	
    		try
			{
				string strStoredProc = "UpdateRawEmailSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@RawEmailID", RawEmailID));
				
				sqlParams.Add(DataAccess.Params.String("@To", To));
				
				sqlParams.Add(DataAccess.Params.String("@From", From));
				
				sqlParams.Add(DataAccess.Params.Text("@Subject", Subject));
				
				sqlParams.Add(DataAccess.Params.Text("@BodyText", BodyText));
				
				sqlParams.Add(DataAccess.Params.Text("@BodyHtml", BodyHtml));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsProcessed", IsProcessed));
				
				sqlParams.Add(DataAccess.Params.String("@Label", Label));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				sqlParams.Add(DataAccess.Params.String("@ImportKey", ImportKey));
				
				sqlParams.Add(DataAccess.Params.DateTime("@EmailDate", EmailDate));
				
				sqlParams.Add(DataAccess.Params.String("@ThreadID", ThreadID));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(RawEmailID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Raw Email since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateRawEmail(RawEmailsRow oRawEmail)
		{
			  UpdateRawEmail(
    								 oRawEmail.RawEmailID, 
    								 oRawEmail.To, 
    								 oRawEmail.From, 
    								 oRawEmail.Subject, 
    								 oRawEmail.BodyText, 
    								 oRawEmail.BodyHtml, 
    								 oRawEmail.IsProcessed, 
    								 oRawEmail.Label, 
    								 oRawEmail.Data, 
    								 oRawEmail.UserID, 
    								 oRawEmail.ImportKey, 
    								 oRawEmail.EmailDate, 
    								 oRawEmail.ThreadID
									);			
		}
		
    	public static void RemoveRawEmail(int RawEmailID)
    	{
			try
			{
				string strStoredProc = "RemoveRawEmailSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@RawEmailID", RawEmailID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(RawEmailID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Raw Email since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static RawEmailsRow Get(int RawEmailID)
		{
			RawEmailsRow ? oRawEmail = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oRawEmail = Cache.Get<RawEmailsRow>(RawEmailID);

				if (null != oRawEmail)
					return oRawEmail;
			}

			try
			{
				string strStoredProc = "GetRawEmailSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@RawEmailID", RawEmailID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oRawEmail = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oRawEmail)
			{
				
				Cache.Insert(oRawEmail, oRawEmail.RawEmailID, oRawEmail.ImportKey?.ToString());
				
			}

			return oRawEmail ?? throw new Exception("Could not find RawEmail " + RawEmailID);
		}
		
		public static RawEmailsDataTable GetAll()
		{
			RawEmailsDataTable tblRawEmails = new RawEmailsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRawEmailsSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					RawEmailsRow rowRawEmail = PopulateRowFromReader(reader);
					
					tblRawEmails.Add(rowRawEmail);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblRawEmails;
		}	
		
		public static int CopyRawEmail(int RawEmailID)
		{
			int iRawEmailID = 0;

			try
			{
				string strStoredProc = "CopyRawEmailSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@RawEmailID", RawEmailID));

				iRawEmailID = DataAccess.IntFromProc(strStoredProc, sqlParams, "RawEmailID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Raw Email since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iRawEmailID;
		}  
		
    	public static void MarkRawEmailAsProcessed(int RawEmailID)
    	{
    		try
			{
				string strStoredProc = "MarkRawEmailAsProcessedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@RawEmailID", RawEmailID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkRawEmailAsNotProcessed(int RawEmailID)
    	{
    		try
			{
				string strStoredProc = "MarkRawEmailAsNotProcessedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@RawEmailID", RawEmailID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
			
    	public static void UpdateRawEmailData(int RawEmailID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateRawEmailDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@RawEmailID", RawEmailID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(RawEmailID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateRawEmailData(RawEmailsRow rowRawEmail)
    	{
    		UpdateRawEmailData(rowRawEmail.RawEmailID, rowRawEmail.Data);
    	}  
    	
		public static RawEmailsDataTable GetRawEmailsByUserID(int? UserID)
		{
			RawEmailsDataTable tblRawEmails = new RawEmailsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRawEmailsByUserIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					RawEmailsRow rowRawEmail = PopulateRowFromReader(reader);

					tblRawEmails.Add(rowRawEmail);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblRawEmails;
		}				
		public static int? GetRawEmailsByUserIDSp_CountSp(int? UserID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRawEmailsByUserIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetRawEmailsByUserIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static RawEmailsDataTable GetRawEmailsByUserIDSp_PagingSp(int? UserID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			RawEmailsDataTable tblRawEmails = new RawEmailsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRawEmailsByUserIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					RawEmailsRow rowRawEmail = PopulateRowFromReader(reader);

					tblRawEmails.Add(rowRawEmail);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblRawEmails;
		}				

	}

}	

		