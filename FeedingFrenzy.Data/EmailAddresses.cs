
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class EmailAddressesRow : RooTrax.Common.DB.BasicRow
	{
		
		public int EmailAddressID { get; set;}
			
		public string Email { get; set;}
			
		public DateTime DateCreated { get; set;}
			
		public DateTime LastUpdated { get; set;}
			
		public bool IsBlocked { get; set;}
			
		public bool IsInternal { get; set;}
			
		private int m_DomainID;
		public int DomainID
		{
			get 
			{ 
				return this.m_DomainID;
			}
					
			set 
			{ 
				this.m_DomainID = value; 
				this.m_DomainRow = null; 
			}
		} 
					

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
		
		private DomainsRow ? m_DomainRow = null;	
		public DomainsRow ? Domain
		{
			get
			{
				if (null == m_DomainRow &&  this.EnableLazyLoadProperties)
					m_DomainRow = DomainsRepository.Get((int)this.DomainID);
		
				return m_DomainRow;
			}
		}    				
		
		public EmailAddressesRow()
		{
			
			this.EmailAddressID = 0;
				
			this.Email = "";
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
			this.IsBlocked = false;
				
			this.IsInternal = false;
				
			this.DomainID = 0;
				
		}

		public  EmailAddressesRow( EmailAddressesRow oRow)
		{
			
			this.EmailAddressID = oRow.EmailAddressID;
			
			this.Email = oRow.Email;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
			this.IsBlocked = oRow.IsBlocked;
			
			this.IsInternal = oRow.IsInternal;
			
			this.DomainID = oRow.DomainID;
			
		}	

		public override int GetHashCode()
		{
			return (EmailAddressID + 7790 << 12);
		}		

		public override string ToString()
		{
			return $"{Email} ({EmailAddressID})";
		}
		
	}
	
	public class EmailAddressesDataTable : List<EmailAddressesRow>
	{	
		public EmailAddressesDataTable(EmailAddressesDataTable oTable)
			: base(oTable)
		{
		}

		public EmailAddressesDataTable()
		{
		}
	}

    public partial class EmailAddressesRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("EmailAddresses");

				return m_cache!;
			}
		}

		internal static EmailAddressesRow PopulateRowFromReader(SqlDataReader reader)
		{
			EmailAddressesRow rowEmailAddress = new EmailAddressesRow();
			
			rowEmailAddress.EmailAddressID = DataAccess.GetID(reader, "EmailAddressID");
			
			rowEmailAddress.Email = DataAccess.GetEmail(reader, "Email");
			
			rowEmailAddress.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowEmailAddress.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowEmailAddress.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
			
			rowEmailAddress.IsBlocked = DataAccess.GetBoolean(reader, "IsBlocked");
			
			rowEmailAddress.IsInternal = DataAccess.GetBoolean(reader, "IsInternal");
			
			rowEmailAddress.DomainID = DataAccess.GetID(reader, "DomainID");
									

			return rowEmailAddress;
		}

	
		public static int InsertEmailAddress(EmailAddressesRow oEmailAddress)
		{
			return InsertEmailAddress(
    								 oEmailAddress.Email, 
    								 oEmailAddress.Data, 
    								 oEmailAddress.IsBlocked, 
    								 oEmailAddress.IsInternal, 
    								 oEmailAddress.DomainID
									);			
		}

		public static int  InsertEmailAddress(
    		string Email, 
    		string? Data, 
    		bool IsBlocked, 
    		bool IsInternal, 
    		int DomainID)
		{
			int iEmailAddressID = 0;

			try
			{
				string strStoredProc = "InsertEmailAddressSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Email("@Email", Email));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsBlocked", IsBlocked));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsInternal", IsInternal));
				
				sqlParams.Add(DataAccess.Params.ID("@DomainID", DomainID));
				
				iEmailAddressID = DataAccess.IntFromProc(strStoredProc, sqlParams, "EmailAddressID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Email Address since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iEmailAddressID;
		}
		
		public static void UpdateEmailAddress(
    		int EmailAddressID, 
    		string Email, 
    		string? Data, 
    		bool IsBlocked, 
    		bool IsInternal, 
    		int DomainID)
    	{    	
    		try
			{
				string strStoredProc = "UpdateEmailAddressSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@EmailAddressID", EmailAddressID));
				
				sqlParams.Add(DataAccess.Params.Email("@Email", Email));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsBlocked", IsBlocked));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsInternal", IsInternal));
				
				sqlParams.Add(DataAccess.Params.ID("@DomainID", DomainID));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(EmailAddressID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Email Address since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateEmailAddress(EmailAddressesRow oEmailAddress)
		{
			  UpdateEmailAddress(
    								 oEmailAddress.EmailAddressID, 
    								 oEmailAddress.Email, 
    								 oEmailAddress.Data, 
    								 oEmailAddress.IsBlocked, 
    								 oEmailAddress.IsInternal, 
    								 oEmailAddress.DomainID
									);			
		}
		
    	public static void RemoveEmailAddress(int EmailAddressID)
    	{
			try
			{
				string strStoredProc = "RemoveEmailAddressSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@EmailAddressID", EmailAddressID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(EmailAddressID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Email Address since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static EmailAddressesRow Get(int EmailAddressID)
		{
			EmailAddressesRow ? oEmailAddress = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oEmailAddress = Cache.Get<EmailAddressesRow>(EmailAddressID);

				if (null != oEmailAddress)
					return oEmailAddress;
			}

			try
			{
				string strStoredProc = "GetEmailAddressSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@EmailAddressID", EmailAddressID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oEmailAddress = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oEmailAddress)
			{
				
				Cache.Insert(oEmailAddress, oEmailAddress.EmailAddressID, oEmailAddress.Email?.ToString());
				
			}

			return oEmailAddress ?? throw new Exception("Could not find EmailAddress " + EmailAddressID);
		}
		
		public static EmailAddressesDataTable GetAll()
		{
			EmailAddressesDataTable tblEmailAddresses = new EmailAddressesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetEmailAddressesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					EmailAddressesRow rowEmailAddress = PopulateRowFromReader(reader);
					
					tblEmailAddresses.Add(rowEmailAddress);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblEmailAddresses;
		}	
		
		public static int CopyEmailAddress(int EmailAddressID)
		{
			int iEmailAddressID = 0;

			try
			{
				string strStoredProc = "CopyEmailAddressSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@EmailAddressID", EmailAddressID));

				iEmailAddressID = DataAccess.IntFromProc(strStoredProc, sqlParams, "EmailAddressID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Email Address since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iEmailAddressID;
		}  
		
		public static EmailAddressesRow ? GetEmailAddressByEmail(string Email)
		{
			EmailAddressesRow ? oEmailAddress = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oEmailAddress = Cache.Get<EmailAddressesRow>(Email.ToString());

					if (null != oEmailAddress)
						return oEmailAddress;
				}
						

				string strStoredProc = "GetEmailAddressByEmailSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Email("@Email", Email));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oEmailAddress = PopulateRowFromReader(reader);
				}

				

				if (IsCachingEnabled && null != oEmailAddress)
				{
					Cache.Insert(oEmailAddress, oEmailAddress.EmailAddressID, oEmailAddress.Email?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oEmailAddress;		
		}	
			
			
    	public static void UpdateEmailAddressData(int EmailAddressID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateEmailAddressDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@EmailAddressID", EmailAddressID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(EmailAddressID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateEmailAddressData(EmailAddressesRow rowEmailAddress)
    	{
    		UpdateEmailAddressData(rowEmailAddress.EmailAddressID, rowEmailAddress.Data);
    	}  
    	
    	public static void MarkEmailAddressAsBlocked(int EmailAddressID)
    	{
    		try
			{
				string strStoredProc = "MarkEmailAddressAsBlockedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@EmailAddressID", EmailAddressID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkEmailAddressAsNotBlocked(int EmailAddressID)
    	{
    		try
			{
				string strStoredProc = "MarkEmailAddressAsNotBlockedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@EmailAddressID", EmailAddressID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkEmailAddressAsInternal(int EmailAddressID)
    	{
    		try
			{
				string strStoredProc = "MarkEmailAddressAsInternalSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@EmailAddressID", EmailAddressID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkEmailAddressAsNotInternal(int EmailAddressID)
    	{
    		try
			{
				string strStoredProc = "MarkEmailAddressAsNotInternalSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@EmailAddressID", EmailAddressID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
		public static EmailAddressesDataTable GetEmailAddressesByDomainID(int DomainID)
		{
			EmailAddressesDataTable tblEmailAddresses = new EmailAddressesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetEmailAddressesByDomainIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@DomainID", DomainID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					EmailAddressesRow rowEmailAddress = PopulateRowFromReader(reader);

					tblEmailAddresses.Add(rowEmailAddress);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblEmailAddresses;
		}				
		public static int? GetEmailAddressesByDomainIDSp_CountSp(int DomainID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetEmailAddressesByDomainIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@DomainID", DomainID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetEmailAddressesByDomainIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static EmailAddressesDataTable GetEmailAddressesByDomainIDSp_PagingSp(int DomainID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			EmailAddressesDataTable tblEmailAddresses = new EmailAddressesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetEmailAddressesByDomainIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@DomainID", DomainID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					EmailAddressesRow rowEmailAddress = PopulateRowFromReader(reader);

					tblEmailAddresses.Add(rowEmailAddress);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblEmailAddresses;
		}				

	}

}	

		