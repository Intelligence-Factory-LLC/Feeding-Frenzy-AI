
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class LeadAddressesRow : RooTrax.Common.DB.BasicRow
	{
		
		public DateTime LastUpdated { get; set;}
			
		public string? AddressType { get; set;}
			
		public string? Phone { get; set;}
			
		public string? Fax { get; set;}
			
		public int LeadAddressID { get; set;}
			
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
			
		public string? Line1 { get; set;}
			
		public string? Line2 { get; set;}
			
		public string? City { get; set;}
			
		public string? State { get; set;}
			
		public string? Zip { get; set;}
			
		public string? Country { get; set;}
			
		public DateTime DateCreated { get; set;}
			

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
		
		public LeadAddressesRow()
		{
			
			this.LastUpdated = DateTime.Now;
				
			this.LeadAddressID = 0;
				
			this.LeadID = 0;
				
			this.DateCreated = DateTime.Now;
				
		}

		public  LeadAddressesRow( LeadAddressesRow oRow)
		{
			
			this.LastUpdated = oRow.LastUpdated;
			
			this.Data = oRow.Data;
			
			this.AddressType = oRow.AddressType;
			
			this.Phone = oRow.Phone;
			
			this.Fax = oRow.Fax;
			
			this.LeadAddressID = oRow.LeadAddressID;
			
			this.LeadID = oRow.LeadID;
			
			this.Name = oRow.Name;
			
			this.Line1 = oRow.Line1;
			
			this.Line2 = oRow.Line2;
			
			this.City = oRow.City;
			
			this.State = oRow.State;
			
			this.Zip = oRow.Zip;
			
			this.Country = oRow.Country;
			
			this.DateCreated = oRow.DateCreated;
			
		}	

		public override int GetHashCode()
		{
			return (LeadAddressID + 5782 << 12);
		}		

		public override string ToString()
		{
			return $"({LeadAddressID})";
		}
		
	}
	
	public class LeadAddressesDataTable : List<LeadAddressesRow>
	{	
		public LeadAddressesDataTable(LeadAddressesDataTable oTable)
			: base(oTable)
		{
		}

		public LeadAddressesDataTable()
		{
		}
	}

    public partial class LeadAddressesRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("LeadAddresses");

				return m_cache!;
			}
		}

		internal static LeadAddressesRow PopulateRowFromReader(SqlDataReader reader)
		{
			LeadAddressesRow rowLeadAddress = new LeadAddressesRow();
			
			rowLeadAddress.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
			
			rowLeadAddress.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowLeadAddress.AddressType = DataAccess.GetStringOrNull(reader, "AddressType");
			
			rowLeadAddress.Phone = DataAccess.GetPhoneOrNull(reader, "Phone");
			
			rowLeadAddress.Fax = DataAccess.GetPhoneOrNull(reader, "Fax");
			
			rowLeadAddress.LeadAddressID = DataAccess.GetID(reader, "LeadAddressID");
			
			rowLeadAddress.LeadID = DataAccess.GetID(reader, "LeadID");
			
			rowLeadAddress.Name = DataAccess.GetStringOrNull(reader, "Name");
			
			rowLeadAddress.Line1 = DataAccess.GetStringOrNull(reader, "Line1");
			
			rowLeadAddress.Line2 = DataAccess.GetStringOrNull(reader, "Line2");
			
			rowLeadAddress.City = DataAccess.GetStringOrNull(reader, "City");
			
			rowLeadAddress.State = DataAccess.GetStringOrNull(reader, "State");
			
			rowLeadAddress.Zip = DataAccess.GetZipOrNull(reader, "Zip");
			
			rowLeadAddress.Country = DataAccess.GetStringOrNull(reader, "Country");
			
			rowLeadAddress.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
									

			return rowLeadAddress;
		}

	
		public static int InsertLeadAddress(LeadAddressesRow oLeadAddress)
		{
			return InsertLeadAddress(
    								 oLeadAddress.Data, 
    								 oLeadAddress.AddressType, 
    								 oLeadAddress.Phone, 
    								 oLeadAddress.Fax, 
    								 oLeadAddress.LeadID, 
    								 oLeadAddress.Name, 
    								 oLeadAddress.Line1, 
    								 oLeadAddress.Line2, 
    								 oLeadAddress.City, 
    								 oLeadAddress.State, 
    								 oLeadAddress.Zip, 
    								 oLeadAddress.Country
									);			
		}

		public static int  InsertLeadAddress(
    		string? Data, 
    		string? AddressType, 
    		string? Phone, 
    		string? Fax, 
    		int LeadID, 
    		string? Name, 
    		string? Line1, 
    		string? Line2, 
    		string? City, 
    		string? State, 
    		string? Zip, 
    		string? Country)
		{
			int iLeadAddressID = 0;

			try
			{
				string strStoredProc = "InsertLeadAddressSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.String("@AddressType", AddressType));
				
				sqlParams.Add(DataAccess.Params.Phone("@Phone", Phone));
				
				sqlParams.Add(DataAccess.Params.Phone("@Fax", Fax));
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				sqlParams.Add(DataAccess.Params.String("@Name", Name));
				
				sqlParams.Add(DataAccess.Params.String("@Line1", Line1));
				
				sqlParams.Add(DataAccess.Params.String("@Line2", Line2));
				
				sqlParams.Add(DataAccess.Params.String("@City", City));
				
				sqlParams.Add(DataAccess.Params.String("@State", State));
				
				sqlParams.Add(DataAccess.Params.Zip("@Zip", Zip));
				
				sqlParams.Add(DataAccess.Params.String("@Country", Country));
				
				iLeadAddressID = DataAccess.IntFromProc(strStoredProc, sqlParams, "LeadAddressID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Address since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iLeadAddressID;
		}
		
		public static void UpdateLeadAddress(
    		string? Data, 
    		string? AddressType, 
    		string? Phone, 
    		string? Fax, 
    		int LeadAddressID, 
    		int LeadID, 
    		string? Name, 
    		string? Line1, 
    		string? Line2, 
    		string? City, 
    		string? State, 
    		string? Zip, 
    		string? Country)
    	{    	
    		try
			{
				string strStoredProc = "UpdateLeadAddressSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.String("@AddressType", AddressType));
				
				sqlParams.Add(DataAccess.Params.Phone("@Phone", Phone));
				
				sqlParams.Add(DataAccess.Params.Phone("@Fax", Fax));
				
				sqlParams.Add(DataAccess.Params.ID("@LeadAddressID", LeadAddressID));
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				sqlParams.Add(DataAccess.Params.String("@Name", Name));
				
				sqlParams.Add(DataAccess.Params.String("@Line1", Line1));
				
				sqlParams.Add(DataAccess.Params.String("@Line2", Line2));
				
				sqlParams.Add(DataAccess.Params.String("@City", City));
				
				sqlParams.Add(DataAccess.Params.String("@State", State));
				
				sqlParams.Add(DataAccess.Params.Zip("@Zip", Zip));
				
				sqlParams.Add(DataAccess.Params.String("@Country", Country));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadAddressID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Address since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateLeadAddress(LeadAddressesRow oLeadAddress)
		{
			  UpdateLeadAddress(
    								 oLeadAddress.Data, 
    								 oLeadAddress.AddressType, 
    								 oLeadAddress.Phone, 
    								 oLeadAddress.Fax, 
    								 oLeadAddress.LeadAddressID, 
    								 oLeadAddress.LeadID, 
    								 oLeadAddress.Name, 
    								 oLeadAddress.Line1, 
    								 oLeadAddress.Line2, 
    								 oLeadAddress.City, 
    								 oLeadAddress.State, 
    								 oLeadAddress.Zip, 
    								 oLeadAddress.Country
									);			
		}
		
    	public static void RemoveLeadAddress(int LeadAddressID)
    	{
			try
			{
				string strStoredProc = "RemoveLeadAddressSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadAddressID", LeadAddressID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadAddressID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Lead Address since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static LeadAddressesRow Get(int LeadAddressID)
		{
			LeadAddressesRow ? oLeadAddress = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oLeadAddress = Cache.Get<LeadAddressesRow>(LeadAddressID);

				if (null != oLeadAddress)
					return oLeadAddress;
			}

			try
			{
				string strStoredProc = "GetLeadAddressSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadAddressID", LeadAddressID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oLeadAddress = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oLeadAddress)
			{
				
				Cache.Insert(oLeadAddress, oLeadAddress.LeadAddressID, oLeadAddress.LeadAddressID.ToString());
				
			}

			return oLeadAddress ?? throw new Exception("Could not find LeadAddress " + LeadAddressID);
		}
		
		public static LeadAddressesDataTable GetAll()
		{
			LeadAddressesDataTable tblLeadAddresses = new LeadAddressesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadAddressesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadAddressesRow rowLeadAddress = PopulateRowFromReader(reader);
					
					tblLeadAddresses.Add(rowLeadAddress);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadAddresses;
		}	
		
		public static int CopyLeadAddress(int LeadAddressID)
		{
			int iLeadAddressID = 0;

			try
			{
				string strStoredProc = "CopyLeadAddressSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadAddressID", LeadAddressID));

				iLeadAddressID = DataAccess.IntFromProc(strStoredProc, sqlParams, "LeadAddressID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Address since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iLeadAddressID;
		}  
		
			
    	public static void UpdateLeadAddressData(int LeadAddressID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateLeadAddressDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadAddressID", LeadAddressID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadAddressID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateLeadAddressData(LeadAddressesRow rowLeadAddress)
    	{
    		UpdateLeadAddressData(rowLeadAddress.LeadAddressID, rowLeadAddress.Data);
    	}  
    	
		public static LeadAddressesDataTable GetLeadAddressesByLeadID(int LeadID)
		{
			LeadAddressesDataTable tblLeadAddresses = new LeadAddressesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadAddressesByLeadIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadAddressesRow rowLeadAddress = PopulateRowFromReader(reader);

					tblLeadAddresses.Add(rowLeadAddress);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadAddresses;
		}				
		public static int? GetLeadAddressesByLeadIDSp_CountSp(int LeadID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadAddressesByLeadIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetLeadAddressesByLeadIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static LeadAddressesDataTable GetLeadAddressesByLeadIDSp_PagingSp(int LeadID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			LeadAddressesDataTable tblLeadAddresses = new LeadAddressesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadAddressesByLeadIDSp_PagingSp";

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
					LeadAddressesRow rowLeadAddress = PopulateRowFromReader(reader);

					tblLeadAddresses.Add(rowLeadAddress);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadAddresses;
		}				

	}

}	

		