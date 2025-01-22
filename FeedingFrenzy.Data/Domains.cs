
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class DomainsRow : RooTrax.Common.DB.BasicRow
	{
		
		public int DomainID { get; set;}
			
		public string DomainName { get; set;}
			
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
		
		private EmailAddressesDataTable ? m_EmailAddresses = null;
		public EmailAddressesDataTable ? EmailAddresses
		{
			get
			{
				if (null == m_EmailAddresses && this.EnableLazyLoadProperties)
					m_EmailAddresses = EmailAddressesRepository.GetEmailAddressesByDomainID(this.DomainID);
				return m_EmailAddresses;
			}
		}		
    				
		
		public DomainsRow()
		{
			
			this.DomainID = 0;
				
			this.DomainName = "";
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  DomainsRow( DomainsRow oRow)
		{
			
			this.DomainID = oRow.DomainID;
			
			this.DomainName = oRow.DomainName;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
		}	

		public override int GetHashCode()
		{
			return (DomainID + 7791 << 12);
		}		

		public override string ToString()
		{
			return $"{DomainName} ({DomainID})";
		}
		
	}
	
	public class DomainsDataTable : List<DomainsRow>
	{	
		public DomainsDataTable(DomainsDataTable oTable)
			: base(oTable)
		{
		}

		public DomainsDataTable()
		{
		}
	}

    public partial class DomainsRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("Domains");

				return m_cache!;
			}
		}

		internal static DomainsRow PopulateRowFromReader(SqlDataReader reader)
		{
			DomainsRow rowDomain = new DomainsRow();
			
			rowDomain.DomainID = DataAccess.GetID(reader, "DomainID");
			
			rowDomain.DomainName = DataAccess.GetString(reader, "DomainName");
			
			rowDomain.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowDomain.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowDomain.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
									

			return rowDomain;
		}

	
		public static DomainsDataTable GetDomainsSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			DomainsDataTable tblDomains = new DomainsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetDomainsSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					DomainsRow rowDomain = PopulateRowFromReader(reader);

					tblDomains.Add(rowDomain);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblDomains;
		}				
		public static int? GetDomainsSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetDomainsSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetDomainsSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static int InsertDomain(DomainsRow oDomain)
		{
			return InsertDomain(
    								 oDomain.DomainName, 
    								 oDomain.Data
									);			
		}

		public static int  InsertDomain(
    		string DomainName, 
    		string? Data)
		{
			int iDomainID = 0;

			try
			{
				string strStoredProc = "InsertDomainSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@DomainName", DomainName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iDomainID = DataAccess.IntFromProc(strStoredProc, sqlParams, "DomainID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Domain since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iDomainID;
		}
		
		public static void UpdateDomain(
    		int DomainID, 
    		string DomainName, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateDomainSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@DomainID", DomainID));
				
				sqlParams.Add(DataAccess.Params.String("@DomainName", DomainName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(DomainID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Domain since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateDomain(DomainsRow oDomain)
		{
			  UpdateDomain(
    								 oDomain.DomainID, 
    								 oDomain.DomainName, 
    								 oDomain.Data
									);			
		}
		
    	public static void RemoveDomain(int DomainID)
    	{
			try
			{
				string strStoredProc = "RemoveDomainSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@DomainID", DomainID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(DomainID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Domain since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static DomainsRow Get(int DomainID)
		{
			DomainsRow ? oDomain = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oDomain = Cache.Get<DomainsRow>(DomainID);

				if (null != oDomain)
					return oDomain;
			}

			try
			{
				string strStoredProc = "GetDomainSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@DomainID", DomainID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oDomain = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oDomain)
			{
				
				Cache.Insert(oDomain, oDomain.DomainID, oDomain.DomainName?.ToString());
				
			}

			return oDomain ?? throw new Exception("Could not find Domain " + DomainID);
		}
		
		public static DomainsDataTable GetAll()
		{
			DomainsDataTable tblDomains = new DomainsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetDomainsSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					DomainsRow rowDomain = PopulateRowFromReader(reader);
					
					tblDomains.Add(rowDomain);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblDomains;
		}	
		
		public static int CopyDomain(int DomainID)
		{
			int iDomainID = 0;

			try
			{
				string strStoredProc = "CopyDomainSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@DomainID", DomainID));

				iDomainID = DataAccess.IntFromProc(strStoredProc, sqlParams, "DomainID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Domain since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iDomainID;
		}  
		
		public static DomainsRow ? GetDomainByDomainName(string DomainName)
		{
			DomainsRow ? oDomain = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oDomain = Cache.Get<DomainsRow>(DomainName.ToString());

					if (null != oDomain)
						return oDomain;
				}
						

				string strStoredProc = "GetDomainByDomainNameSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@DomainName", DomainName));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oDomain = PopulateRowFromReader(reader);
				}

				

				if (IsCachingEnabled && null != oDomain)
				{
					Cache.Insert(oDomain, oDomain.DomainID, oDomain.DomainName?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oDomain;		
		}	
			
			
    	public static void UpdateDomainData(int DomainID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateDomainDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@DomainID", DomainID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(DomainID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateDomainData(DomainsRow rowDomain)
    	{
    		UpdateDomainData(rowDomain.DomainID, rowDomain.Data);
    	}  
    	

	}

}	

		