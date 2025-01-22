
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class LeadRelationshipsRow : RooTrax.Common.DB.BasicRow
	{
		
		public int LeadRelationshipID { get; set;}
			
		private int m_LeadRelationshipTypeID;
		public int LeadRelationshipTypeID
		{
			get 
			{ 
				return this.m_LeadRelationshipTypeID;
			}
					
			set 
			{ 
				this.m_LeadRelationshipTypeID = value; 
				this.m_LeadRelationshipTypeRow = null; 
			}
		} 
					
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
					
		private int m_RelatedLeadID;
		public int RelatedLeadID
		{
			get 
			{ 
				return this.m_RelatedLeadID;
			}
					
			set 
			{ 
				this.m_RelatedLeadID = value; 
				this.m_RelatedLeadRow = null; 
			}
		} 
					
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
		private LeadRelationshipTypesRow ? m_LeadRelationshipTypeRow = null;	
		public LeadRelationshipTypesRow ? LeadRelationshipType
		{
			get
			{
				if (null == m_LeadRelationshipTypeRow &&  this.EnableLazyLoadProperties)
					m_LeadRelationshipTypeRow = LeadRelationshipTypesRepository.Get((int)this.LeadRelationshipTypeID);
		
				return m_LeadRelationshipTypeRow;
			}
		}    				
		private LeadsRow ? m_RelatedLeadRow = null;	
		public LeadsRow ? RelatedLead
		{
			get
			{
				if (null == m_RelatedLeadRow &&  this.EnableLazyLoadProperties)
					m_RelatedLeadRow = LeadsRepository.Get((int)this.RelatedLeadID);
		
				return m_RelatedLeadRow;
			}
		}    				
		
		public LeadRelationshipsRow()
		{
			
			this.LeadRelationshipID = 0;
				
			this.LeadRelationshipTypeID = 0;
				
			this.LeadID = 0;
				
			this.RelatedLeadID = 0;
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  LeadRelationshipsRow( LeadRelationshipsRow oRow)
		{
			
			this.LeadRelationshipID = oRow.LeadRelationshipID;
			
			this.LeadRelationshipTypeID = oRow.LeadRelationshipTypeID;
			
			this.LeadID = oRow.LeadID;
			
			this.RelatedLeadID = oRow.RelatedLeadID;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
		}	

		public override int GetHashCode()
		{
			return (LeadRelationshipID + 1754 << 12);
		}		

		public override string ToString()
		{
			return $"({LeadRelationshipID})";
		}
		
	}
	
	public class LeadRelationshipsDataTable : List<LeadRelationshipsRow>
	{	
		public LeadRelationshipsDataTable(LeadRelationshipsDataTable oTable)
			: base(oTable)
		{
		}

		public LeadRelationshipsDataTable()
		{
		}
	}

    public partial class LeadRelationshipsRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("LeadRelationships");

				return m_cache!;
			}
		}

		internal static LeadRelationshipsRow PopulateRowFromReader(SqlDataReader reader)
		{
			LeadRelationshipsRow rowLeadRelationship = new LeadRelationshipsRow();
			
			rowLeadRelationship.LeadRelationshipID = DataAccess.GetID(reader, "LeadRelationshipID");
			
			rowLeadRelationship.LeadRelationshipTypeID = DataAccess.GetID(reader, "LeadRelationshipTypeID");
			
			rowLeadRelationship.LeadID = DataAccess.GetID(reader, "LeadID");
			
			rowLeadRelationship.RelatedLeadID = DataAccess.GetID(reader, "RelatedLeadID");
			
			rowLeadRelationship.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowLeadRelationship.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowLeadRelationship.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
									

			return rowLeadRelationship;
		}

	
		public static int InsertLeadRelationship(LeadRelationshipsRow oLeadRelationship)
		{
			return InsertLeadRelationship(
    								 oLeadRelationship.LeadRelationshipTypeID, 
    								 oLeadRelationship.LeadID, 
    								 oLeadRelationship.RelatedLeadID, 
    								 oLeadRelationship.Data
									);			
		}

		public static int  InsertLeadRelationship(
    		int LeadRelationshipTypeID, 
    		int LeadID, 
    		int RelatedLeadID, 
    		string? Data)
		{
			int iLeadRelationshipID = 0;

			try
			{
				string strStoredProc = "InsertLeadRelationshipSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadRelationshipTypeID", LeadRelationshipTypeID));
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				sqlParams.Add(DataAccess.Params.ID("@RelatedLeadID", RelatedLeadID));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iLeadRelationshipID = DataAccess.IntFromProc(strStoredProc, sqlParams, "LeadRelationshipID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Relationship since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iLeadRelationshipID;
		}
		
		public static void UpdateLeadRelationship(
    		int LeadRelationshipID, 
    		int LeadRelationshipTypeID, 
    		int LeadID, 
    		int RelatedLeadID, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateLeadRelationshipSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadRelationshipID", LeadRelationshipID));
				
				sqlParams.Add(DataAccess.Params.ID("@LeadRelationshipTypeID", LeadRelationshipTypeID));
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				sqlParams.Add(DataAccess.Params.ID("@RelatedLeadID", RelatedLeadID));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadRelationshipID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Relationship since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateLeadRelationship(LeadRelationshipsRow oLeadRelationship)
		{
			  UpdateLeadRelationship(
    								 oLeadRelationship.LeadRelationshipID, 
    								 oLeadRelationship.LeadRelationshipTypeID, 
    								 oLeadRelationship.LeadID, 
    								 oLeadRelationship.RelatedLeadID, 
    								 oLeadRelationship.Data
									);			
		}
		
    	public static void RemoveLeadRelationship(int LeadRelationshipID)
    	{
			try
			{
				string strStoredProc = "RemoveLeadRelationshipSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadRelationshipID", LeadRelationshipID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadRelationshipID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Lead Relationship since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static LeadRelationshipsRow ? Get(int LeadRelationshipID)
		{
			LeadRelationshipsRow ? oLeadRelationship = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oLeadRelationship = Cache.Get<LeadRelationshipsRow>(LeadRelationshipID);

				if (null != oLeadRelationship)
					return oLeadRelationship;
			}

			try
			{
				string strStoredProc = "GetLeadRelationshipSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadRelationshipID", LeadRelationshipID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oLeadRelationship = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oLeadRelationship)
			{
				
				Cache.Insert(oLeadRelationship, oLeadRelationship.LeadRelationshipID, oLeadRelationship.LeadRelationshipID.ToString());
				
			}

			return oLeadRelationship;
		}
		
		public static LeadRelationshipsDataTable GetAll()
		{
			LeadRelationshipsDataTable tblLeadRelationships = new LeadRelationshipsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadRelationshipsSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadRelationshipsRow rowLeadRelationship = PopulateRowFromReader(reader);
					
					tblLeadRelationships.Add(rowLeadRelationship);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadRelationships;
		}	
		
		public static int CopyLeadRelationship(int LeadRelationshipID)
		{
			int iLeadRelationshipID = 0;

			try
			{
				string strStoredProc = "CopyLeadRelationshipSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadRelationshipID", LeadRelationshipID));

				iLeadRelationshipID = DataAccess.IntFromProc(strStoredProc, sqlParams, "LeadRelationshipID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Lead Relationship since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iLeadRelationshipID;
		}  
		
			
    	public static void UpdateLeadRelationshipData(int LeadRelationshipID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateLeadRelationshipDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@LeadRelationshipID", LeadRelationshipID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(LeadRelationshipID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateLeadRelationshipData(LeadRelationshipsRow rowLeadRelationship)
    	{
    		UpdateLeadRelationshipData(rowLeadRelationship.LeadRelationshipID, rowLeadRelationship.Data);
    	}  
    	
		public static LeadRelationshipsDataTable GetLeadRelationshipsByLeadID(int LeadID)
		{
			LeadRelationshipsDataTable tblLeadRelationships = new LeadRelationshipsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadRelationshipsByLeadIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadID", LeadID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadRelationshipsRow rowLeadRelationship = PopulateRowFromReader(reader);

					tblLeadRelationships.Add(rowLeadRelationship);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadRelationships;
		}				
		public static LeadRelationshipsDataTable GetLeadRelationshipsByLeadRelationshipTypeID(int LeadRelationshipTypeID)
		{
			LeadRelationshipsDataTable tblLeadRelationships = new LeadRelationshipsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadRelationshipsByLeadRelationshipTypeIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@LeadRelationshipTypeID", LeadRelationshipTypeID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadRelationshipsRow rowLeadRelationship = PopulateRowFromReader(reader);

					tblLeadRelationships.Add(rowLeadRelationship);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadRelationships;
		}				
		public static LeadRelationshipsDataTable GetLeadRelationshipsByRelatedLeadID(int RelatedLeadID)
		{
			LeadRelationshipsDataTable tblLeadRelationships = new LeadRelationshipsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetLeadRelationshipsByRelatedLeadIDSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@RelatedLeadID", RelatedLeadID));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					LeadRelationshipsRow rowLeadRelationship = PopulateRowFromReader(reader);

					tblLeadRelationships.Add(rowLeadRelationship);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblLeadRelationships;
		}				
	}

}	

		