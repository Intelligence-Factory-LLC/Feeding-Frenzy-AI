
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class LeadContactsRow : RooTrax.Common.DB.BasicRow
	{
		
		public int LeadContactID { get; set;}
			
		private int m_LeadID;
		public int LeadID
		{
			get 
			{ 
				return this.m_LeadID;
			}
					
			set 
			{ 
				this.m_LeadID = value; 
				this.m_LeadRow = null; 
			}
		} 
					
		public string? Name { get; set;}
			
		public string? Title { get; set;}
			
		public string? Phone { get; set;}
			
		public string? Email { get; set;}
			
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
		
		private LeadsRow ? m_LeadRow = null;	
		public LeadsRow ? Lead
		{
			get
			{
				if (null == m_LeadRow &&  this.EnableLazyLoadProperties)
					m_LeadRow = LeadsRepository.Get((int)this.LeadID);
		
				return m_LeadRow;
			}
		}    				
		
		public LeadContactsRow()
		{
			
			this.LeadContactID = 0;
				
			this.LeadID = 0;
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  LeadContactsRow( LeadContactsRow oRow)
		{
			
			this.LeadContactID = oRow.LeadContactID;
			
			this.LeadID = oRow.LeadID;
			
			this.Name = oRow.Name;
			
			this.Title = oRow.Title;
			
			this.Phone = oRow.Phone;
			
			this.Email = oRow.Email;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
		}	

		public override int GetHashCode()
		{
			return (LeadContactID + 1752 << 12);
		}		

		public override string ToString()
		{
			return $"({LeadContactID})";
		}
		
	}
	
	public class LeadContactsDataTable : List<LeadContactsRow>
	{	
		public LeadContactsDataTable(LeadContactsDataTable oTable)
			: base(oTable)
		{
		}

		public LeadContactsDataTable()
		{
		}
	}

    public partial class LeadContactsRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("LeadContacts");

				return m_cache!;
			}
		}

		internal static LeadContactsRow PopulateRowFromReader(SqlDataReader reader)
		{
			LeadContactsRow rowLeadContact = new LeadContactsRow();
			
			rowLeadContact.LeadContactID = DataAccess.GetID(reader, "LeadContactID");
			
			rowLeadContact.LeadID = DataAccess.GetID(reader, "LeadID");
			
			rowLeadContact.Name = DataAccess.GetStringOrNull(reader, "Name");
			
			rowLeadContact.Title = DataAccess.GetStringOrNull(reader, "Title");
			
			rowLeadContact.Phone = DataAccess.GetPhoneOrNull(reader, "Phone");
			
			rowLeadContact.Email = DataAccess.GetEmailOrNull(reader, "Email");
			
			rowLeadContact.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowLeadContact.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowLeadContact.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
									

			return rowLeadContact;
		}

	
		public static LeadContactsDataTable GetLeadContactsByPhone(string? Phone)
		{
			LeadContactsDataTable tblLeadContacts = new LeadContactsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadContactsByPhoneSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Phone("@Phone", Phone));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadContactsRow rowLeadContact = PopulateRowFromReader(reader);

					tblLeadContacts.Add(rowLeadContact);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadContacts;
		}				
		public static int InsertLeadContact(LeadContactsRow oLeadContact)
		{
			return InsertLeadContact(
    								 oLeadContact.LeadID, 
    								 oLeadContact.Name, 
    								 oLeadContact.Title, 
    								 oLeadContact.Phone, 
    								 oLeadContact.Email, 
    								 oLeadContact.Data
									);			
		}

		public static int  InsertLeadContact(
    		int LeadID, 
    		string? Name, 
    		string? Title, 
    		string? Phone, 
    		string? Email, 
    		string? Data)
		{
			int iLeadContactID = 0;

			try
			{
				string strStoredProc = "InsertLeadContactSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				sqlParams.Add(DataAccess.Params.String("@Name", Name));
				
				sqlParams.Add(DataAccess.Params.String("@Title", Title));
				
				sqlParams.Add(DataAccess.Params.Phone("@Phone", Phone));
				
				sqlParams.Add(DataAccess.Params.Email("@Email", Email));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iLeadContactID = DataAccess.IntFromProc(strStoredProc, sqlParams, "LeadContactID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Contact since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iLeadContactID;
		}
		
		public static void UpdateLeadContact(
    		int LeadContactID, 
    		int LeadID, 
    		string? Name, 
    		string? Title, 
    		string? Phone, 
    		string? Email, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateLeadContactSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadContactID", LeadContactID));
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				sqlParams.Add(DataAccess.Params.String("@Name", Name));
				
				sqlParams.Add(DataAccess.Params.String("@Title", Title));
				
				sqlParams.Add(DataAccess.Params.Phone("@Phone", Phone));
				
				sqlParams.Add(DataAccess.Params.Email("@Email", Email));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadContactID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Contact since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateLeadContact(LeadContactsRow oLeadContact)
		{
			  UpdateLeadContact(
    								 oLeadContact.LeadContactID, 
    								 oLeadContact.LeadID, 
    								 oLeadContact.Name, 
    								 oLeadContact.Title, 
    								 oLeadContact.Phone, 
    								 oLeadContact.Email, 
    								 oLeadContact.Data
									);			
		}
		
    	public static void RemoveLeadContact(int LeadContactID)
    	{
			try
			{
				string strStoredProc = "RemoveLeadContactSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadContactID", LeadContactID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadContactID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Lead Contact since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static LeadContactsRow Get(int LeadContactID)
		{
			LeadContactsRow ? oLeadContact = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oLeadContact = Cache.Get<LeadContactsRow>(LeadContactID);

				if (null != oLeadContact)
					return oLeadContact;
			}

			try
			{
				string strStoredProc = "GetLeadContactSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadContactID", LeadContactID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oLeadContact = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oLeadContact)
			{
				
				Cache.Insert(oLeadContact, oLeadContact.LeadContactID, oLeadContact.LeadContactID.ToString());
				
			}

			return oLeadContact ?? throw new Exception("Could not find LeadContact " + LeadContactID);
		}
		
		public static LeadContactsDataTable GetAll()
		{
			LeadContactsDataTable tblLeadContacts = new LeadContactsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadContactsSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadContactsRow rowLeadContact = PopulateRowFromReader(reader);
					
					tblLeadContacts.Add(rowLeadContact);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadContacts;
		}	
		
		public static int CopyLeadContact(int LeadContactID)
		{
			int iLeadContactID = 0;

			try
			{
				string strStoredProc = "CopyLeadContactSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadContactID", LeadContactID));

				iLeadContactID = DataAccess.IntFromProc(strStoredProc, sqlParams, "LeadContactID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Contact since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iLeadContactID;
		}  
		
			
    	public static void UpdateLeadContactData(int LeadContactID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateLeadContactDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadContactID", LeadContactID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadContactID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateLeadContactData(LeadContactsRow rowLeadContact)
    	{
    		UpdateLeadContactData(rowLeadContact.LeadContactID, rowLeadContact.Data);
    	}  
    	
		public static LeadContactsDataTable GetLeadContactsByLeadID(int LeadID)
		{
			LeadContactsDataTable tblLeadContacts = new LeadContactsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadContactsByLeadIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadContactsRow rowLeadContact = PopulateRowFromReader(reader);

					tblLeadContacts.Add(rowLeadContact);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadContacts;
		}				
		public static LeadContactsDataTable GetLeadContactsSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			LeadContactsDataTable tblLeadContacts = new LeadContactsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadContactsSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadContactsRow rowLeadContact = PopulateRowFromReader(reader);

					tblLeadContacts.Add(rowLeadContact);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadContacts;
		}				
		public static int? GetLeadContactsSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadContactsSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetLeadContactsSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static LeadContactsDataTable GetLeadContactsByLeadIDSp_PagingSp(int LeadID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			LeadContactsDataTable tblLeadContacts = new LeadContactsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadContactsByLeadIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadContactsRow rowLeadContact = PopulateRowFromReader(reader);

					tblLeadContacts.Add(rowLeadContact);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadContacts;
		}				
		public static int? GetLeadContactsByLeadIDSp_CountSp(int LeadID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadContactsByLeadIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetLeadContactsByLeadIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		

	}

}	

		