
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class RawEmailAddressesRow : RooTrax.Common.DB.BasicRow
	{
		
		public int RawEmailAddressID { get; set;}
			
		private int m_RawEmailID;
		public int RawEmailID
		{
			get 
			{ 
				return this.m_RawEmailID;
			}
					
			set 
			{ 
				this.m_RawEmailID = value; 
				this.m_RawEmailRow = null; 
			}
		} 
					
		public bool IsFrom { get; set;}
			
		public DateTime DateCreated { get; set;}
			
		public DateTime LastUpdated { get; set;}
			
		private int? m_EmailAddressID;
		public int? EmailAddressID
		{
			get 
			{ 
				return this.m_EmailAddressID;
			}
					
			set 
			{ 
				this.m_EmailAddressID = value; 
				this.m_EmailAddressRow = null; 
			}
		} 
					
		private int? m_DomainID;
		public int? DomainID
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
				if (null == m_DomainRow &&  null != this.DomainID && this.EnableLazyLoadProperties)
					m_DomainRow = DomainsRepository.Get((int)this.DomainID);
		
				return m_DomainRow;
			}
		}    				
		private EmailAddressesRow ? m_EmailAddressRow = null;	
		public EmailAddressesRow ? EmailAddress
		{
			get
			{
				if (null == m_EmailAddressRow &&  null != this.EmailAddressID && this.EnableLazyLoadProperties)
					m_EmailAddressRow = EmailAddressesRepository.Get((int)this.EmailAddressID);
		
				return m_EmailAddressRow;
			}
		}    				
		private RawEmailsRow ? m_RawEmailRow = null;	
		public RawEmailsRow ? RawEmail
		{
			get
			{
				if (null == m_RawEmailRow &&  this.EnableLazyLoadProperties)
					m_RawEmailRow = RawEmailsRepository.Get((int)this.RawEmailID);
		
				return m_RawEmailRow;
			}
		}    				
		
		public RawEmailAddressesRow()
		{
			
			this.RawEmailAddressID = 0;
				
			this.RawEmailID = 0;
				
			this.IsFrom = true;
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  RawEmailAddressesRow( RawEmailAddressesRow oRow)
		{
			
			this.RawEmailAddressID = oRow.RawEmailAddressID;
			
			this.RawEmailID = oRow.RawEmailID;
			
			this.IsFrom = oRow.IsFrom;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
			this.EmailAddressID = oRow.EmailAddressID;
			
			this.DomainID = oRow.DomainID;
			
		}	

		public override int GetHashCode()
		{
			return (RawEmailAddressID + 7792 << 12);
		}		

		public override string ToString()
		{
			return $"({RawEmailAddressID})";
		}
		
	}
	
	public class RawEmailAddressesDataTable : List<RawEmailAddressesRow>
	{	
		public RawEmailAddressesDataTable(RawEmailAddressesDataTable oTable)
			: base(oTable)
		{
		}

		public RawEmailAddressesDataTable()
		{
		}
	}

    public partial class RawEmailAddressesRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("RawEmailAddresses");

				return m_cache!;
			}
		}

		internal static RawEmailAddressesRow PopulateRowFromReader(SqlDataReader reader)
		{
			RawEmailAddressesRow rowRawEmailAddress = new RawEmailAddressesRow();
			
			rowRawEmailAddress.RawEmailAddressID = DataAccess.GetID(reader, "RawEmailAddressID");
			
			rowRawEmailAddress.RawEmailID = DataAccess.GetID(reader, "RawEmailID");
			
			rowRawEmailAddress.IsFrom = DataAccess.GetBoolean(reader, "IsFrom");
			
			rowRawEmailAddress.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowRawEmailAddress.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowRawEmailAddress.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
			
			rowRawEmailAddress.EmailAddressID = DataAccess.GetIDOrNull(reader, "EmailAddressID");
			
			rowRawEmailAddress.DomainID = DataAccess.GetIDOrNull(reader, "DomainID");
									

			return rowRawEmailAddress;
		}

	
		public static RawEmailAddressesDataTable GetRawEmailAddressesByEmailAddressIDSp_PagingSp(int? EmailAddressID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			RawEmailAddressesDataTable tblRawEmailAddresses = new RawEmailAddressesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRawEmailAddressesByEmailAddressIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@EmailAddressID", EmailAddressID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					RawEmailAddressesRow rowRawEmailAddress = PopulateRowFromReader(reader);

					tblRawEmailAddresses.Add(rowRawEmailAddress);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblRawEmailAddresses;
		}				
		public static RawEmailAddressesDataTable GetRawEmailAddressesByRawEmailID(int RawEmailID)
		{
			RawEmailAddressesDataTable tblRawEmailAddresses = new RawEmailAddressesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRawEmailAddressesByRawEmailIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@RawEmailID", RawEmailID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					RawEmailAddressesRow rowRawEmailAddress = PopulateRowFromReader(reader);

					tblRawEmailAddresses.Add(rowRawEmailAddress);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblRawEmailAddresses;
		}				
		public static int? GetRawEmailAddressesByRawEmailIDSp_CountSp(int RawEmailID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRawEmailAddressesByRawEmailIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@RawEmailID", RawEmailID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetRawEmailAddressesByRawEmailIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static RawEmailAddressesDataTable GetRawEmailAddressesByRawEmailIDSp_PagingSp(int RawEmailID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			RawEmailAddressesDataTable tblRawEmailAddresses = new RawEmailAddressesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRawEmailAddressesByRawEmailIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@RawEmailID", RawEmailID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					RawEmailAddressesRow rowRawEmailAddress = PopulateRowFromReader(reader);

					tblRawEmailAddresses.Add(rowRawEmailAddress);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblRawEmailAddresses;
		}				
		public static RawEmailAddressesDataTable GetRawEmailAddressesSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			RawEmailAddressesDataTable tblRawEmailAddresses = new RawEmailAddressesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRawEmailAddressesSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					RawEmailAddressesRow rowRawEmailAddress = PopulateRowFromReader(reader);

					tblRawEmailAddresses.Add(rowRawEmailAddress);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblRawEmailAddresses;
		}				
		public static int? GetRawEmailAddressesSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRawEmailAddressesSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetRawEmailAddressesSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static int InsertRawEmailAddress(RawEmailAddressesRow oRawEmailAddress)
		{
			return InsertRawEmailAddress(
    								 oRawEmailAddress.RawEmailID, 
    								 oRawEmailAddress.IsFrom, 
    								 oRawEmailAddress.Data, 
    								 oRawEmailAddress.EmailAddressID, 
    								 oRawEmailAddress.DomainID
									);			
		}

		public static int  InsertRawEmailAddress(
    		int RawEmailID, 
    		bool IsFrom, 
    		string? Data, 
    		int? EmailAddressID, 
    		int? DomainID)
		{
			int iRawEmailAddressID = 0;

			try
			{
				string strStoredProc = "InsertRawEmailAddressSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@RawEmailID", RawEmailID));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsFrom", IsFrom));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.ID("@EmailAddressID", EmailAddressID));
				
				sqlParams.Add(DataAccess.Params.ID("@DomainID", DomainID));
				
				iRawEmailAddressID = DataAccess.IntFromProc(strStoredProc, sqlParams, "RawEmailAddressID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Raw Email Address since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iRawEmailAddressID;
		}
		
		public static void UpdateRawEmailAddress(
    		int RawEmailAddressID, 
    		int RawEmailID, 
    		bool IsFrom, 
    		string? Data, 
    		int? EmailAddressID, 
    		int? DomainID)
    	{    	
    		try
			{
				string strStoredProc = "UpdateRawEmailAddressSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@RawEmailAddressID", RawEmailAddressID));
				
				sqlParams.Add(DataAccess.Params.ID("@RawEmailID", RawEmailID));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsFrom", IsFrom));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.ID("@EmailAddressID", EmailAddressID));
				
				sqlParams.Add(DataAccess.Params.ID("@DomainID", DomainID));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(RawEmailAddressID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Raw Email Address since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateRawEmailAddress(RawEmailAddressesRow oRawEmailAddress)
		{
			  UpdateRawEmailAddress(
    								 oRawEmailAddress.RawEmailAddressID, 
    								 oRawEmailAddress.RawEmailID, 
    								 oRawEmailAddress.IsFrom, 
    								 oRawEmailAddress.Data, 
    								 oRawEmailAddress.EmailAddressID, 
    								 oRawEmailAddress.DomainID
									);			
		}
		
    	public static void RemoveRawEmailAddress(int RawEmailAddressID)
    	{
			try
			{
				string strStoredProc = "RemoveRawEmailAddressSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@RawEmailAddressID", RawEmailAddressID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(RawEmailAddressID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Raw Email Address since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static RawEmailAddressesRow Get(int RawEmailAddressID)
		{
			RawEmailAddressesRow ? oRawEmailAddress = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oRawEmailAddress = Cache.Get<RawEmailAddressesRow>(RawEmailAddressID);

				if (null != oRawEmailAddress)
					return oRawEmailAddress;
			}

			try
			{
				string strStoredProc = "GetRawEmailAddressSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@RawEmailAddressID", RawEmailAddressID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oRawEmailAddress = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oRawEmailAddress)
			{
				
				Cache.Insert(oRawEmailAddress, oRawEmailAddress.RawEmailAddressID, oRawEmailAddress.RawEmailAddressID.ToString());
				
			}

			return oRawEmailAddress ?? throw new Exception("Could not find RawEmailAddress " + RawEmailAddressID);
		}
		
		public static RawEmailAddressesDataTable GetAll()
		{
			RawEmailAddressesDataTable tblRawEmailAddresses = new RawEmailAddressesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRawEmailAddressesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					RawEmailAddressesRow rowRawEmailAddress = PopulateRowFromReader(reader);
					
					tblRawEmailAddresses.Add(rowRawEmailAddress);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblRawEmailAddresses;
		}	
		
		public static int CopyRawEmailAddress(int RawEmailAddressID)
		{
			int iRawEmailAddressID = 0;

			try
			{
				string strStoredProc = "CopyRawEmailAddressSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@RawEmailAddressID", RawEmailAddressID));

				iRawEmailAddressID = DataAccess.IntFromProc(strStoredProc, sqlParams, "RawEmailAddressID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Raw Email Address since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iRawEmailAddressID;
		}  
		
    	public static void MarkRawEmailAddressAsFrom(int RawEmailAddressID)
    	{
    		try
			{
				string strStoredProc = "MarkRawEmailAddressAsFromSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@RawEmailAddressID", RawEmailAddressID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkRawEmailAddressAsNotFrom(int RawEmailAddressID)
    	{
    		try
			{
				string strStoredProc = "MarkRawEmailAddressAsNotFromSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@RawEmailAddressID", RawEmailAddressID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
			
    	public static void UpdateRawEmailAddressData(int RawEmailAddressID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateRawEmailAddressDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@RawEmailAddressID", RawEmailAddressID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(RawEmailAddressID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateRawEmailAddressData(RawEmailAddressesRow rowRawEmailAddress)
    	{
    		UpdateRawEmailAddressData(rowRawEmailAddress.RawEmailAddressID, rowRawEmailAddress.Data);
    	}  
    	
						
		public static DomainsDataTable GetDomainsByRawEmailAddressEmailAddressID(int? EmailAddressID)
		{
			DomainsDataTable tblRawEmailAddresses = new DomainsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetDomainsByRawEmailAddressEmailAddressIDSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@EmailAddressID", EmailAddressID));
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					DomainsRow rowDomain = new DomainsRow();
					
					rowDomain.DomainID = DataAccess.GetID(reader, "DomainID");
					rowDomain.DomainName = DataAccess.GetString(reader, "DomainName");
					rowDomain.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowDomain.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowDomain.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					
					tblRawEmailAddresses.Add(rowDomain);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblRawEmailAddresses;
		}					
		
						
		public static EmailAddressesDataTable GetEmailAddressesByRawEmailAddressDomainID(int? DomainID)
		{
			EmailAddressesDataTable tblRawEmailAddresses = new EmailAddressesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetEmailAddressesByRawEmailAddressDomainIDSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@DomainID", DomainID));
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
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
					
					tblRawEmailAddresses.Add(rowEmailAddress);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblRawEmailAddresses;
		}					
		
						
		public static RawEmailsDataTable GetRawEmailsByRawEmailAddressDomainID(int? DomainID)
		{
			RawEmailsDataTable tblRawEmailAddresses = new RawEmailsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRawEmailsByRawEmailAddressDomainIDSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@DomainID", DomainID));
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
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
					
					tblRawEmailAddresses.Add(rowRawEmail);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblRawEmailAddresses;
		}					
		
		public static RawEmailAddressesRow ? GetRawEmailAddressByDomainIDEmailAddressIDRawEmailID(int? DomainID, int? EmailAddressID, int RawEmailID)
		{
			RawEmailAddressesRow ? oRawEmailAddress = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oRawEmailAddress = Cache.Get<RawEmailAddressesRow>(DomainID + "|" + EmailAddressID + "|" + RawEmailID);

					if (null != oRawEmailAddress)
						return oRawEmailAddress;
				}
						

				string strStoredProc = "GetRawEmailAddressesByDomainIDEmailAddressIDRawEmailIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@DomainID", DomainID));
				
				sqlParams.Add(DataAccess.Params.ID("@EmailAddressID", EmailAddressID));
				
				sqlParams.Add(DataAccess.Params.ID("@RawEmailID", RawEmailID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oRawEmailAddress = PopulateRowFromReader(reader);
				}

				

				if (IsCachingEnabled && null != oRawEmailAddress)
				{
					Cache.Insert(oRawEmailAddress, oRawEmailAddress.RawEmailAddressID, DomainID + "|" + EmailAddressID + "|" + RawEmailID);
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oRawEmailAddress;		
		}	
			
		public static RawEmailAddressesDataTable GetRawEmailAddressesByDomainID(int? DomainID)
		{
			RawEmailAddressesDataTable tblRawEmailAddresses = new RawEmailAddressesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRawEmailAddressesByDomainIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@DomainID", DomainID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					RawEmailAddressesRow rowRawEmailAddress = PopulateRowFromReader(reader);

					tblRawEmailAddresses.Add(rowRawEmailAddress);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblRawEmailAddresses;
		}				
		public static int? GetRawEmailAddressesByDomainIDSp_CountSp(int? DomainID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRawEmailAddressesByDomainIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@DomainID", DomainID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetRawEmailAddressesByDomainIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static RawEmailAddressesDataTable GetRawEmailAddressesByDomainIDSp_PagingSp(int? DomainID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			RawEmailAddressesDataTable tblRawEmailAddresses = new RawEmailAddressesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRawEmailAddressesByDomainIDSp_PagingSp";

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
					RawEmailAddressesRow rowRawEmailAddress = PopulateRowFromReader(reader);

					tblRawEmailAddresses.Add(rowRawEmailAddress);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblRawEmailAddresses;
		}				
		public static RawEmailAddressesDataTable GetRawEmailAddressesByEmailAddressID(int? EmailAddressID)
		{
			RawEmailAddressesDataTable tblRawEmailAddresses = new RawEmailAddressesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRawEmailAddressesByEmailAddressIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@EmailAddressID", EmailAddressID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					RawEmailAddressesRow rowRawEmailAddress = PopulateRowFromReader(reader);

					tblRawEmailAddresses.Add(rowRawEmailAddress);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblRawEmailAddresses;
		}				
		public static int? GetRawEmailAddressesByEmailAddressIDSp_CountSp(int? EmailAddressID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRawEmailAddressesByEmailAddressIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@EmailAddressID", EmailAddressID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetRawEmailAddressesByEmailAddressIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		

	}

}	

		