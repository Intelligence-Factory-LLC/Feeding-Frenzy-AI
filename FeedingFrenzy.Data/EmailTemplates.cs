
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class EmailTemplatesRow : RooTrax.Common.DB.BasicRow
	{
		
		public int EmailTemplateID { get; set;}
			
		public string Name { get; set;}
			
		public string EmailSubject { get; set;}
			
		public string EmailText { get; set;}
			
		public string EmailParams { get; set;}
			
		public string? FromAddress { get; set;}
			
		public DateTime DateCreated { get; set;}
			
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
		
		private EmailHistoriesDataTable ? m_EmailHistories = null;
		public EmailHistoriesDataTable ? EmailHistories
		{
			get
			{
				if (null == m_EmailHistories && this.EnableLazyLoadProperties)
					m_EmailHistories = EmailHistoriesRepository.GetEmailHistoriesByEmailTemplateID(this.EmailTemplateID);
				return m_EmailHistories;
			}
		}		
    				
		
		public EmailTemplatesRow()
		{
			
			this.EmailTemplateID = 0;
				
			this.Name = "";
				
			this.EmailSubject = "";
				
			this.EmailText = "";
				
			this.EmailParams = "";
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  EmailTemplatesRow( EmailTemplatesRow oRow)
		{
			
			this.EmailTemplateID = oRow.EmailTemplateID;
			
			this.Name = oRow.Name;
			
			this.EmailSubject = oRow.EmailSubject;
			
			this.EmailText = oRow.EmailText;
			
			this.EmailParams = oRow.EmailParams;
			
			this.FromAddress = oRow.FromAddress;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
			this.Data = oRow.Data;
			
		}	

		public override int GetHashCode()
		{
			return (EmailTemplateID + 1740 << 12);
		}		

		public override string ToString()
		{
			return $"{Name} ({EmailTemplateID})";
		}
		
	}
	
	public class EmailTemplatesDataTable : List<EmailTemplatesRow>
	{	
		public EmailTemplatesDataTable(EmailTemplatesDataTable oTable)
			: base(oTable)
		{
		}

		public EmailTemplatesDataTable()
		{
		}
	}

    public partial class EmailTemplatesRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("EmailTemplates");

				return m_cache!;
			}
		}

		internal static EmailTemplatesRow PopulateRowFromReader(SqlDataReader reader)
		{
			EmailTemplatesRow rowEmailTemplate = new EmailTemplatesRow();
			
			rowEmailTemplate.EmailTemplateID = DataAccess.GetID(reader, "EmailTemplateID");
			
			rowEmailTemplate.Name = DataAccess.GetString(reader, "Name");
			
			rowEmailTemplate.EmailSubject = DataAccess.GetString(reader, "EmailSubject");
			
			rowEmailTemplate.EmailText = DataAccess.GetText(reader, "EmailText");
			
			rowEmailTemplate.EmailParams = DataAccess.GetString(reader, "EmailParams");
			
			rowEmailTemplate.FromAddress = DataAccess.GetEmailOrNull(reader, "FromAddress");
			
			rowEmailTemplate.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowEmailTemplate.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
			
			rowEmailTemplate.Data = DataAccess.GetStringOrNull(reader, "Data");
									

			return rowEmailTemplate;
		}

	
		public static EmailTemplatesDataTable GetEmailTemplatesSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			EmailTemplatesDataTable tblEmailTemplates = new EmailTemplatesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetEmailTemplatesSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					EmailTemplatesRow rowEmailTemplate = PopulateRowFromReader(reader);

					tblEmailTemplates.Add(rowEmailTemplate);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblEmailTemplates;
		}				
		public static int? GetEmailTemplatesSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetEmailTemplatesSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetEmailTemplatesSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static int InsertEmailTemplate(EmailTemplatesRow oEmailTemplate)
		{
			return InsertEmailTemplate(
    								 oEmailTemplate.Name, 
    								 oEmailTemplate.EmailSubject, 
    								 oEmailTemplate.EmailText, 
    								 oEmailTemplate.EmailParams, 
    								 oEmailTemplate.FromAddress, 
    								 oEmailTemplate.Data
									);			
		}

		public static int  InsertEmailTemplate(
    		string Name, 
    		string EmailSubject, 
    		string EmailText, 
    		string EmailParams, 
    		string? FromAddress, 
    		string? Data)
		{
			int iEmailTemplateID = 0;

			try
			{
				string strStoredProc = "InsertEmailTemplateSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Name", Name));
				
				sqlParams.Add(DataAccess.Params.String("@EmailSubject", EmailSubject));
				
				sqlParams.Add(DataAccess.Params.Text("@EmailText", EmailText));
				
				sqlParams.Add(DataAccess.Params.String("@EmailParams", EmailParams));
				
				sqlParams.Add(DataAccess.Params.Email("@FromAddress", FromAddress));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iEmailTemplateID = DataAccess.IntFromProc(strStoredProc, sqlParams, "EmailTemplateID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Email Template since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iEmailTemplateID;
		}
		
		public static void UpdateEmailTemplate(
    		int EmailTemplateID, 
    		string Name, 
    		string EmailSubject, 
    		string EmailText, 
    		string EmailParams, 
    		string? FromAddress, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateEmailTemplateSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@EmailTemplateID", EmailTemplateID));
				
				sqlParams.Add(DataAccess.Params.String("@Name", Name));
				
				sqlParams.Add(DataAccess.Params.String("@EmailSubject", EmailSubject));
				
				sqlParams.Add(DataAccess.Params.Text("@EmailText", EmailText));
				
				sqlParams.Add(DataAccess.Params.String("@EmailParams", EmailParams));
				
				sqlParams.Add(DataAccess.Params.Email("@FromAddress", FromAddress));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(EmailTemplateID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Email Template since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateEmailTemplate(EmailTemplatesRow oEmailTemplate)
		{
			  UpdateEmailTemplate(
    								 oEmailTemplate.EmailTemplateID, 
    								 oEmailTemplate.Name, 
    								 oEmailTemplate.EmailSubject, 
    								 oEmailTemplate.EmailText, 
    								 oEmailTemplate.EmailParams, 
    								 oEmailTemplate.FromAddress, 
    								 oEmailTemplate.Data
									);			
		}
		
    	public static void RemoveEmailTemplate(int EmailTemplateID)
    	{
			try
			{
				string strStoredProc = "RemoveEmailTemplateSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@EmailTemplateID", EmailTemplateID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(EmailTemplateID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Email Template since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static EmailTemplatesRow Get(int EmailTemplateID)
		{
			EmailTemplatesRow ? oEmailTemplate = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oEmailTemplate = Cache.Get<EmailTemplatesRow>(EmailTemplateID);

				if (null != oEmailTemplate)
					return oEmailTemplate;
			}

			try
			{
				string strStoredProc = "GetEmailTemplateSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@EmailTemplateID", EmailTemplateID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oEmailTemplate = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oEmailTemplate)
			{
				
				Cache.Insert(oEmailTemplate, oEmailTemplate.EmailTemplateID, oEmailTemplate.Name?.ToString());
				
			}

			return oEmailTemplate ?? throw new Exception("Could not find EmailTemplate " + EmailTemplateID);
		}
		
		public static EmailTemplatesDataTable GetAll()
		{
			EmailTemplatesDataTable tblEmailTemplates = new EmailTemplatesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetEmailTemplatesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					EmailTemplatesRow rowEmailTemplate = PopulateRowFromReader(reader);
					
					tblEmailTemplates.Add(rowEmailTemplate);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblEmailTemplates;
		}	
		
		public static int CopyEmailTemplate(int EmailTemplateID)
		{
			int iEmailTemplateID = 0;

			try
			{
				string strStoredProc = "CopyEmailTemplateSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@EmailTemplateID", EmailTemplateID));

				iEmailTemplateID = DataAccess.IntFromProc(strStoredProc, sqlParams, "EmailTemplateID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Email Template since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iEmailTemplateID;
		}  
		
		public static EmailTemplatesRow ? GetEmailTemplateByName(string Name)
		{
			EmailTemplatesRow ? oEmailTemplate = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oEmailTemplate = Cache.Get<EmailTemplatesRow>(Name.ToString());

					if (null != oEmailTemplate)
						return oEmailTemplate;
				}
						

				string strStoredProc = "GetEmailTemplateByNameSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Name", Name));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oEmailTemplate = PopulateRowFromReader(reader);
				}

				

				if (IsCachingEnabled && null != oEmailTemplate)
				{
					Cache.Insert(oEmailTemplate, oEmailTemplate.EmailTemplateID, oEmailTemplate.Name?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oEmailTemplate;		
		}	
			
			
    	public static void UpdateEmailTemplateData(int EmailTemplateID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateEmailTemplateDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@EmailTemplateID", EmailTemplateID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(EmailTemplateID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateEmailTemplateData(EmailTemplatesRow rowEmailTemplate)
    	{
    		UpdateEmailTemplateData(rowEmailTemplate.EmailTemplateID, rowEmailTemplate.Data);
    	}  
    	

	}

}	

		