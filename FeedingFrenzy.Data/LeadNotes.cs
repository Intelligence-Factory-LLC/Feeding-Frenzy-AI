
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class LeadNotesRow : RooTrax.Common.DB.BasicRow
	{
		
		private int? m_LeadNoteTypeID;
		public int? LeadNoteTypeID
		{
			get 
			{ 
				return this.m_LeadNoteTypeID;
			}
					
			set 
			{ 
				this.m_LeadNoteTypeID = value; 
				this.m_LeadNoteTypeRow = null; 
			}
		} 
					
		public int LeadNoteID { get; set;}
			
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
					
		private int m_SalesRepresentativeID;
		public int SalesRepresentativeID
		{
			get 
			{ 
				return this.m_SalesRepresentativeID;
			}
					
			set 
			{ 
				this.m_SalesRepresentativeID = value; 
				this.m_SalesRepresentativeRow = null; 
			}
		} 
					
		public string Notes { get; set;}
			
		public DateTime? FollowUpDate { get; set;}
			
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
		private LeadNoteTypesRow ? m_LeadNoteTypeRow = null;	
		public LeadNoteTypesRow ? LeadNoteType
		{
			get
			{
				if (null == m_LeadNoteTypeRow &&  null != this.LeadNoteTypeID && this.EnableLazyLoadProperties)
					m_LeadNoteTypeRow = LeadNoteTypesRepository.Get((int)this.LeadNoteTypeID);
		
				return m_LeadNoteTypeRow;
			}
		}    				
		private SalesRepresentativesRow ? m_SalesRepresentativeRow = null;	
		public SalesRepresentativesRow ? SalesRepresentative
		{
			get
			{
				if (null == m_SalesRepresentativeRow &&  this.EnableLazyLoadProperties)
					m_SalesRepresentativeRow = SalesRepresentativesRepository.Get((int)this.SalesRepresentativeID);
		
				return m_SalesRepresentativeRow;
			}
		}    				
		
		public LeadNotesRow()
		{
			
			this.LeadNoteID = 0;
				
			this.LeadID = 0;
				
			this.SalesRepresentativeID = 0;
				
			this.Notes = "";
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  LeadNotesRow( LeadNotesRow oRow)
		{
			
			this.LeadNoteTypeID = oRow.LeadNoteTypeID;
			
			this.LeadNoteID = oRow.LeadNoteID;
			
			this.LeadID = oRow.LeadID;
			
			this.SalesRepresentativeID = oRow.SalesRepresentativeID;
			
			this.Notes = oRow.Notes;
			
			this.FollowUpDate = oRow.FollowUpDate;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
		}	

		public override int GetHashCode()
		{
			return (LeadNoteID + 1720 << 12);
		}		

		public override string ToString()
		{
			return $"({LeadNoteID})";
		}
		
	}
	
	public class LeadNotesDataTable : List<LeadNotesRow>
	{	
		public LeadNotesDataTable(LeadNotesDataTable oTable)
			: base(oTable)
		{
		}

		public LeadNotesDataTable()
		{
		}
	}

    public partial class LeadNotesRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("LeadNotes");

				return m_cache!;
			}
		}

		internal static LeadNotesRow PopulateRowFromReader(SqlDataReader reader)
		{
			LeadNotesRow rowLeadNote = new LeadNotesRow();
			
			rowLeadNote.LeadNoteTypeID = DataAccess.GetIDOrNull(reader, "LeadNoteTypeID");
			
			rowLeadNote.LeadNoteID = DataAccess.GetID(reader, "LeadNoteID");
			
			rowLeadNote.LeadID = DataAccess.GetID(reader, "LeadID");
			
			rowLeadNote.SalesRepresentativeID = DataAccess.GetID(reader, "SalesRepresentativeID");
			
			rowLeadNote.Notes = DataAccess.GetText(reader, "Notes");
			
			rowLeadNote.FollowUpDate = DataAccess.GetDateTimeOrNull(reader, "FollowUpDate");
			
			rowLeadNote.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowLeadNote.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowLeadNote.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
									

			return rowLeadNote;
		}

	
		public static LeadNotesDataTable GetLeadNotesSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			LeadNotesDataTable tblLeadNotes = new LeadNotesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadNotesSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadNotesRow rowLeadNote = PopulateRowFromReader(reader);

					tblLeadNotes.Add(rowLeadNote);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadNotes;
		}				
		public static int? GetLeadNotesSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadNotesSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetLeadNotesSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static LeadNotesDataTable GetLeadNotesByLeadIDSp_PagingSp(int LeadID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			LeadNotesDataTable tblLeadNotes = new LeadNotesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadNotesByLeadIDSp_PagingSp";

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
					LeadNotesRow rowLeadNote = PopulateRowFromReader(reader);

					tblLeadNotes.Add(rowLeadNote);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadNotes;
		}				
		public static int? GetLeadNotesByLeadIDSp_CountSp(int LeadID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadNotesByLeadIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetLeadNotesByLeadIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static LeadNotesDataTable GetLeadNotesByLeadNoteTypeIDSp_PagingSp(int? LeadNoteTypeID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			LeadNotesDataTable tblLeadNotes = new LeadNotesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadNotesByLeadNoteTypeIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadNoteTypeID", LeadNoteTypeID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadNotesRow rowLeadNote = PopulateRowFromReader(reader);

					tblLeadNotes.Add(rowLeadNote);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadNotes;
		}				
		public static int? GetLeadNotesByLeadNoteTypeIDSp_CountSp(int? LeadNoteTypeID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadNotesByLeadNoteTypeIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadNoteTypeID", LeadNoteTypeID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetLeadNotesByLeadNoteTypeIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static LeadNotesDataTable GetLeadNotesBySalesRepresentativeID(int SalesRepresentativeID)
		{
			LeadNotesDataTable tblLeadNotes = new LeadNotesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadNotesBySalesRepresentativeIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadNotesRow rowLeadNote = PopulateRowFromReader(reader);

					tblLeadNotes.Add(rowLeadNote);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadNotes;
		}				
		public static LeadNotesDataTable GetLeadNotesByLeadIDLeadNoteTypeID(int LeadID, int? LeadNoteTypeID)
		{
			LeadNotesDataTable tblLeadNotes = new LeadNotesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadNotesByLeadIDLeadNoteTypeIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				sqlParams.Add(DataAccess.Params.ID("@LeadNoteTypeID", LeadNoteTypeID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadNotesRow rowLeadNote = PopulateRowFromReader(reader);

					tblLeadNotes.Add(rowLeadNote);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadNotes;
		}				
		public static int InsertLeadNote(LeadNotesRow oLeadNote)
		{
			return InsertLeadNote(
    								 oLeadNote.LeadNoteTypeID, 
    								 oLeadNote.LeadID, 
    								 oLeadNote.SalesRepresentativeID, 
    								 oLeadNote.Notes, 
    								 oLeadNote.FollowUpDate, 
    								 oLeadNote.Data
									);			
		}

		public static int  InsertLeadNote(
    		int? LeadNoteTypeID, 
    		int LeadID, 
    		int SalesRepresentativeID, 
    		string Notes, 
    		DateTime? FollowUpDate, 
    		string? Data)
		{
			int iLeadNoteID = 0;

			try
			{
				string strStoredProc = "InsertLeadNoteSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadNoteTypeID", LeadNoteTypeID));
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));
				
				sqlParams.Add(DataAccess.Params.Text("@Notes", Notes));
				
				sqlParams.Add(DataAccess.Params.DateTime("@FollowUpDate", FollowUpDate));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iLeadNoteID = DataAccess.IntFromProc(strStoredProc, sqlParams, "LeadNoteID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Note since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iLeadNoteID;
		}
		
		public static void UpdateLeadNote(
    		int? LeadNoteTypeID, 
    		int LeadNoteID, 
    		int LeadID, 
    		int SalesRepresentativeID, 
    		string Notes, 
    		DateTime? FollowUpDate, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateLeadNoteSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadNoteTypeID", LeadNoteTypeID));
				
				sqlParams.Add(DataAccess.Params.ID("@LeadNoteID", LeadNoteID));
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));
				
				sqlParams.Add(DataAccess.Params.Text("@Notes", Notes));
				
				sqlParams.Add(DataAccess.Params.DateTime("@FollowUpDate", FollowUpDate));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadNoteID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Note since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateLeadNote(LeadNotesRow oLeadNote)
		{
			  UpdateLeadNote(
    								 oLeadNote.LeadNoteTypeID, 
    								 oLeadNote.LeadNoteID, 
    								 oLeadNote.LeadID, 
    								 oLeadNote.SalesRepresentativeID, 
    								 oLeadNote.Notes, 
    								 oLeadNote.FollowUpDate, 
    								 oLeadNote.Data
									);			
		}
		
    	public static void RemoveLeadNote(int LeadNoteID)
    	{
			try
			{
				string strStoredProc = "RemoveLeadNoteSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadNoteID", LeadNoteID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadNoteID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Lead Note since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static LeadNotesRow Get(int LeadNoteID)
		{
			LeadNotesRow ? oLeadNote = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oLeadNote = Cache.Get<LeadNotesRow>(LeadNoteID);

				if (null != oLeadNote)
					return oLeadNote;
			}

			try
			{
				string strStoredProc = "GetLeadNoteSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadNoteID", LeadNoteID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oLeadNote = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oLeadNote)
			{
				
				Cache.Insert(oLeadNote, oLeadNote.LeadNoteID, oLeadNote.LeadNoteID.ToString());
				
			}

			return oLeadNote ?? throw new Exception("Could not find LeadNote " + LeadNoteID);
		}
		
		public static LeadNotesDataTable GetAll()
		{
			LeadNotesDataTable tblLeadNotes = new LeadNotesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadNotesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadNotesRow rowLeadNote = PopulateRowFromReader(reader);
					
					tblLeadNotes.Add(rowLeadNote);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadNotes;
		}	
		
		public static int CopyLeadNote(int LeadNoteID)
		{
			int iLeadNoteID = 0;

			try
			{
				string strStoredProc = "CopyLeadNoteSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadNoteID", LeadNoteID));

				iLeadNoteID = DataAccess.IntFromProc(strStoredProc, sqlParams, "LeadNoteID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Note since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iLeadNoteID;
		}  
		
			
    	public static void UpdateLeadNoteData(int LeadNoteID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateLeadNoteDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadNoteID", LeadNoteID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadNoteID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateLeadNoteData(LeadNotesRow rowLeadNote)
    	{
    		UpdateLeadNoteData(rowLeadNote.LeadNoteID, rowLeadNote.Data);
    	}  
    	
		public static LeadNotesDataTable GetLeadNotesByLeadID(int LeadID)
		{
			LeadNotesDataTable tblLeadNotes = new LeadNotesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadNotesByLeadIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadNotesRow rowLeadNote = PopulateRowFromReader(reader);

					tblLeadNotes.Add(rowLeadNote);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadNotes;
		}				
		public static LeadNotesDataTable GetLeadNotesByLeadNoteTypeID(int? LeadNoteTypeID)
		{
			LeadNotesDataTable tblLeadNotes = new LeadNotesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadNotesByLeadNoteTypeIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadNoteTypeID", LeadNoteTypeID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadNotesRow rowLeadNote = PopulateRowFromReader(reader);

					tblLeadNotes.Add(rowLeadNote);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadNotes;
		}				
		public static LeadNotesDataTable GetFollowUpsBySalesRepresentativeID(int SalesRepresentativeID, DateTime StartDate, DateTime StopDate)
		{
			LeadNotesDataTable tblLeadNotes = new LeadNotesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "LeadNotes_GetFollowUpsBySalesRepresentativeID_Sp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));
				
				sqlParams.Add(DataAccess.Params.DateTime("@StartDate", StartDate));
				
				sqlParams.Add(DataAccess.Params.DateTime("@StopDate", StopDate));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadNotesRow rowLeadNote = PopulateRowFromReader(reader);

					tblLeadNotes.Add(rowLeadNote);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadNotes;
		}				
		public static LeadNotesDataTable GetFollowUpsBySalesRepresentativeIDTagID(int SalesRepresentativeID, int TagID, DateTime StartDate, DateTime StopDate)
		{
			LeadNotesDataTable tblLeadNotes = new LeadNotesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "LeadNotes_GetFollowUpsBySalesRepresentativeIDTagID_Sp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));
				
				sqlParams.Add(DataAccess.Params.Integer("@TagID", TagID));
				
				sqlParams.Add(DataAccess.Params.DateTime("@StartDate", StartDate));
				
				sqlParams.Add(DataAccess.Params.DateTime("@StopDate", StopDate));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadNotesRow rowLeadNote = PopulateRowFromReader(reader);

					tblLeadNotes.Add(rowLeadNote);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadNotes;
		}				
		public static LeadNotesDataTable GetLeadNotesBySalesRepresentativeIDSp_PagingSp(int SalesRepresentativeID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			LeadNotesDataTable tblLeadNotes = new LeadNotesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadNotesBySalesRepresentativeIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadNotesRow rowLeadNote = PopulateRowFromReader(reader);

					tblLeadNotes.Add(rowLeadNote);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadNotes;
		}				
		public static int? GetLeadNotesBySalesRepresentativeIDSp_CountSp(int SalesRepresentativeID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadNotesBySalesRepresentativeIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@SalesRepresentativeID", SalesRepresentativeID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetLeadNotesBySalesRepresentativeIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		

	}

}	

		