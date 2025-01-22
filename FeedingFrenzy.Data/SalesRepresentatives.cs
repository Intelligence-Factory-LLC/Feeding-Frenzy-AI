
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class SalesRepresentativesRow : RooTrax.Common.DB.BasicRow
	{
		
		public int SalesRepresentativeID { get; set;}
			
		public string? Notes { get; set;}
			
		public DateTime LastUpdated { get; set;}
			
		public DateTime DateCreated { get; set;}
			
		private int? m_SalesRepresentativeTypeID;
		public int? SalesRepresentativeTypeID
		{
			get 
			{ 
				return this.m_SalesRepresentativeTypeID;
			}
					
			set 
			{ 
				this.m_SalesRepresentativeTypeID = value; 
				this.m_SalesRepresentativeTypeRow = null; 
			}
		} 
					
		private int m_UserID;
		public int UserID
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
		
		private LeadNotesDataTable ? m_LeadNotes = null;
		public LeadNotesDataTable ? LeadNotes
		{
			get
			{
				if (null == m_LeadNotes && this.EnableLazyLoadProperties)
					m_LeadNotes = LeadNotesRepository.GetLeadNotesBySalesRepresentativeID(this.SalesRepresentativeID);
				return m_LeadNotes;
			}
		}		
    				
		private LeadsDataTable ? m_Leads = null;
		public LeadsDataTable ? Leads
		{
			get
			{
				if (null == m_Leads && this.EnableLazyLoadProperties)
					m_Leads = LeadsRepository.GetLeadsBySalesRepresentativeID(this.SalesRepresentativeID);
				return m_Leads;
			}
		}		
    				
		private TagsDataTable ? m_Tags = null;
		public TagsDataTable ? Tags
		{
			get
			{
				if (null == m_Tags && this.EnableLazyLoadProperties)
					m_Tags = TagsRepository.GetTagsBySalesRepresentativeID(this.SalesRepresentativeID);
				return m_Tags;
			}
		}		
    				
		private SalesRepresentativeTypesRow ? m_SalesRepresentativeTypeRow = null;	
		public SalesRepresentativeTypesRow ? SalesRepresentativeType
		{
			get
			{
				if (null == m_SalesRepresentativeTypeRow &&  null != this.SalesRepresentativeTypeID && this.EnableLazyLoadProperties)
					m_SalesRepresentativeTypeRow = SalesRepresentativeTypesRepository.Get((int)this.SalesRepresentativeTypeID);
		
				return m_SalesRepresentativeTypeRow;
			}
		}    				
	 				
		private UsersRow ? m_UserRow = null;	
		public UsersRow ? User
		{
			get
			{
				if (null == m_UserRow &&  this.EnableLazyLoadProperties)
					m_UserRow = UsersRepository.Get((int)this.UserID);
		
				return m_UserRow;
			}
		}    				
		
		public SalesRepresentativesRow()
		{
			
			this.SalesRepresentativeID = 0;
				
			this.LastUpdated = DateTime.Now;
				
			this.DateCreated = DateTime.Now;
				
			this.UserID = 0;
				
		}

		public  SalesRepresentativesRow( SalesRepresentativesRow oRow)
		{
			
			this.SalesRepresentativeID = oRow.SalesRepresentativeID;
			
			this.Notes = oRow.Notes;
			
			this.LastUpdated = oRow.LastUpdated;
			
			this.DateCreated = oRow.DateCreated;
			
			this.Data = oRow.Data;
			
			this.SalesRepresentativeTypeID = oRow.SalesRepresentativeTypeID;
			
			this.UserID = oRow.UserID;
			
		}	

		public override int GetHashCode()
		{
			return (SalesRepresentativeID + 1745 << 12);
		}		

		public override string ToString()
		{
			return $"({SalesRepresentativeID})";
		}
		
	}
	
	public class SalesRepresentativesDataTable : List<SalesRepresentativesRow>
	{	
		public SalesRepresentativesDataTable(SalesRepresentativesDataTable oTable)
			: base(oTable)
		{
		}

		public SalesRepresentativesDataTable()
		{
		}
	}

    public partial class SalesRepresentativesRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("SalesRepresentatives");

				return m_cache!;
			}
		}

		internal static SalesRepresentativesRow PopulateRowFromReader(SqlDataReader reader)
		{
			SalesRepresentativesRow rowSalesRepresentative = new SalesRepresentativesRow();
			
			rowSalesRepresentative.SalesRepresentativeID = DataAccess.GetID(reader, "SalesRepresentativeID");
			
			rowSalesRepresentative.Notes = DataAccess.GetTextOrNull(reader, "Notes");
			
			rowSalesRepresentative.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
			
			rowSalesRepresentative.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowSalesRepresentative.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowSalesRepresentative.SalesRepresentativeTypeID = DataAccess.GetIDOrNull(reader, "SalesRepresentativeTypeID");
			
			rowSalesRepresentative.UserID = DataAccess.GetID(reader, "UserID");
									

			return rowSalesRepresentative;
		}

	
		public static int InsertSalesRepresentative(SalesRepresentativesRow oSalesRepresentative)
		{
			return InsertSalesRepresentative(
    								 oSalesRepresentative.Notes, 
    								 oSalesRepresentative.Data, 
    								 oSalesRepresentative.SalesRepresentativeTypeID, 
    								 oSalesRepresentative.UserID
									);			
		}

		public static int  InsertSalesRepresentative(
    		string? Notes, 
    		string? Data, 
    		int? SalesRepresentativeTypeID, 
    		int UserID)
		{
			int iSalesRepresentativeID = 0;

			try
			{
				string strStoredProc = "InsertSalesRepresentativeSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Text("@Notes", Notes));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeTypeID", SalesRepresentativeTypeID));
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				iSalesRepresentativeID = DataAccess.IntFromProc(strStoredProc, sqlParams, "SalesRepresentativeID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Sales Representative since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iSalesRepresentativeID;
		}
		
		public static void UpdateSalesRepresentative(
    		int SalesRepresentativeID, 
    		string? Notes, 
    		string? Data, 
    		int? SalesRepresentativeTypeID, 
    		int UserID)
    	{    	
    		try
			{
				string strStoredProc = "UpdateSalesRepresentativeSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));
				
				sqlParams.Add(DataAccess.Params.Text("@Notes", Notes));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeTypeID", SalesRepresentativeTypeID));
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(SalesRepresentativeID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Sales Representative since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateSalesRepresentative(SalesRepresentativesRow oSalesRepresentative)
		{
			  UpdateSalesRepresentative(
    								 oSalesRepresentative.SalesRepresentativeID, 
    								 oSalesRepresentative.Notes, 
    								 oSalesRepresentative.Data, 
    								 oSalesRepresentative.SalesRepresentativeTypeID, 
    								 oSalesRepresentative.UserID
									);			
		}
		
    	public static void RemoveSalesRepresentative(int SalesRepresentativeID)
    	{
			try
			{
				string strStoredProc = "RemoveSalesRepresentativeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(SalesRepresentativeID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Sales Representative since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static SalesRepresentativesRow Get(int SalesRepresentativeID)
		{
			SalesRepresentativesRow ? oSalesRepresentative = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oSalesRepresentative = Cache.Get<SalesRepresentativesRow>(SalesRepresentativeID);

				if (null != oSalesRepresentative)
					return oSalesRepresentative;
			}

			try
			{
				string strStoredProc = "GetSalesRepresentativeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oSalesRepresentative = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oSalesRepresentative)
			{
				
				Cache.Insert(oSalesRepresentative, oSalesRepresentative.SalesRepresentativeID, oSalesRepresentative.SalesRepresentativeID.ToString());
				
			}

			return oSalesRepresentative ?? throw new Exception("Could not find SalesRepresentative " + SalesRepresentativeID);
		}
		
		public static SalesRepresentativesDataTable GetAll()
		{
			SalesRepresentativesDataTable tblSalesRepresentatives = new SalesRepresentativesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetSalesRepresentativesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					SalesRepresentativesRow rowSalesRepresentative = PopulateRowFromReader(reader);
					
					tblSalesRepresentatives.Add(rowSalesRepresentative);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblSalesRepresentatives;
		}	
		
		public static int CopySalesRepresentative(int SalesRepresentativeID)
		{
			int iSalesRepresentativeID = 0;

			try
			{
				string strStoredProc = "CopySalesRepresentativeSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));

				iSalesRepresentativeID = DataAccess.IntFromProc(strStoredProc, sqlParams, "SalesRepresentativeID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Sales Representative since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iSalesRepresentativeID;
		}  
		
    	public static void MarkSalesRepresentativeAsEnabled(int SalesRepresentativeID)
    	{
    		try
			{
				string strStoredProc = "MarkSalesRepresentativeAsEnabledSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@SalesRepresentativeID", SalesRepresentativeID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkSalesRepresentativeAsNotEnabled(int SalesRepresentativeID)
    	{
    		try
			{
				string strStoredProc = "MarkSalesRepresentativeAsNotEnabledSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@SalesRepresentativeID", SalesRepresentativeID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
			
    	public static void UpdateSalesRepresentativeData(int SalesRepresentativeID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateSalesRepresentativeDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(SalesRepresentativeID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateSalesRepresentativeData(SalesRepresentativesRow rowSalesRepresentative)
    	{
    		UpdateSalesRepresentativeData(rowSalesRepresentative.SalesRepresentativeID, rowSalesRepresentative.Data);
    	}  
    	
		public static SalesRepresentativesDataTable GetSalesRepresentativesBySalesRepresentativeTypeID(int? SalesRepresentativeTypeID)
		{
			SalesRepresentativesDataTable tblSalesRepresentatives = new SalesRepresentativesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetSalesRepresentativesBySalesRepresentativeTypeIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeTypeID", SalesRepresentativeTypeID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					SalesRepresentativesRow rowSalesRepresentative = PopulateRowFromReader(reader);

					tblSalesRepresentatives.Add(rowSalesRepresentative);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblSalesRepresentatives;
		}				
		public static SalesRepresentativesDataTable GetSalesRepresentativesSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			SalesRepresentativesDataTable tblSalesRepresentatives = new SalesRepresentativesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetSalesRepresentativesSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					SalesRepresentativesRow rowSalesRepresentative = PopulateRowFromReader(reader);

					tblSalesRepresentatives.Add(rowSalesRepresentative);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblSalesRepresentatives;
		}				
		public static int? GetSalesRepresentativesSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetSalesRepresentativesSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetSalesRepresentativesSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static SalesRepresentativesDataTable GetSalesRepresentativesBySalesRepresentativeTypeIDSp_PagingSp(int? SalesRepresentativeTypeID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			SalesRepresentativesDataTable tblSalesRepresentatives = new SalesRepresentativesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetSalesRepresentativesBySalesRepresentativeTypeIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeTypeID", SalesRepresentativeTypeID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					SalesRepresentativesRow rowSalesRepresentative = PopulateRowFromReader(reader);

					tblSalesRepresentatives.Add(rowSalesRepresentative);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblSalesRepresentatives;
		}				
		public static int? GetSalesRepresentativesBySalesRepresentativeTypeIDSp_CountSp(int? SalesRepresentativeTypeID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetSalesRepresentativesBySalesRepresentativeTypeIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeTypeID", SalesRepresentativeTypeID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetSalesRepresentativesBySalesRepresentativeTypeIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static SalesRepresentativesRow ? GetSalesRepresentativeByUserID(int UserID)
		{
			SalesRepresentativesRow ? oSalesRepresentative = null;
			SqlDataReader ? reader = null;

			try
			{
				

				string strStoredProc = "GetSalesRepresentativesByUserIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oSalesRepresentative = PopulateRowFromReader(reader);
				}

				
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oSalesRepresentative;		
		}	
			

	}

}	

		