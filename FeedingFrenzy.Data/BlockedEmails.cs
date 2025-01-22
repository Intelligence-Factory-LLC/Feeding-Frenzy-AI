
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class BlockedEmailsRow : RooTrax.Common.DB.BasicRow
	{
		
		public int BlockedEmailID { get; set;}
			
		public string Email { get; set;}
			
		public string? Notes { get; set;}
			
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
		
		
		public BlockedEmailsRow()
		{
			
			this.BlockedEmailID = 0;
				
			this.Email = "";
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  BlockedEmailsRow( BlockedEmailsRow oRow)
		{
			
			this.BlockedEmailID = oRow.BlockedEmailID;
			
			this.Email = oRow.Email;
			
			this.Notes = oRow.Notes;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
		}	

		public override int GetHashCode()
		{
			return (BlockedEmailID + 1742 << 12);
		}		

		public override string ToString()
		{
			return $"{Email} ({BlockedEmailID})";
		}
		
	}
	
	public class BlockedEmailsDataTable : List<BlockedEmailsRow>
	{	
		public BlockedEmailsDataTable(BlockedEmailsDataTable oTable)
			: base(oTable)
		{
		}

		public BlockedEmailsDataTable()
		{
		}
	}

    public partial class BlockedEmailsRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("BlockedEmails");

				return m_cache!;
			}
		}



	
		public static int InsertBlockedEmail(BlockedEmailsRow oBlockedEmail)
		{
			return InsertBlockedEmail(
    								 oBlockedEmail.Email, 
    								 oBlockedEmail.Notes, 
    								 oBlockedEmail.Data
									);			
		}

		public static int  InsertBlockedEmail(
    		string Email, 
    		string? Notes, 
    		string? Data)
		{
			int iBlockedEmailID = 0;

			try
			{
				string strStoredProc = "InsertBlockedEmailSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Email("@Email", Email));
				
				sqlParams.Add(DataAccess.Params.Text("@Notes", Notes));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iBlockedEmailID = DataAccess.IntFromProc(strStoredProc, sqlParams, "BlockedEmailID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Blocked Email since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iBlockedEmailID;
		}
		
		public static void UpdateBlockedEmail(
    		int BlockedEmailID, 
    		string Email, 
    		string? Notes, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateBlockedEmailSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@BlockedEmailID", BlockedEmailID));
				
				sqlParams.Add(DataAccess.Params.Email("@Email", Email));
				
				sqlParams.Add(DataAccess.Params.Text("@Notes", Notes));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(BlockedEmailID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Blocked Email since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateBlockedEmail(BlockedEmailsRow oBlockedEmail)
		{
			  UpdateBlockedEmail(
    								 oBlockedEmail.BlockedEmailID, 
    								 oBlockedEmail.Email, 
    								 oBlockedEmail.Notes, 
    								 oBlockedEmail.Data
									);			
		}
		
    	public static void RemoveBlockedEmail(int BlockedEmailID)
    	{
			try
			{
				string strStoredProc = "RemoveBlockedEmailSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@BlockedEmailID", BlockedEmailID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(BlockedEmailID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Blocked Email since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static BlockedEmailsRow ? Get(int BlockedEmailID)
		{
			BlockedEmailsRow ? oBlockedEmail = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oBlockedEmail = Cache.Get<BlockedEmailsRow>(BlockedEmailID);

				if (null != oBlockedEmail)
					return oBlockedEmail;
			}

			try
			{
				string strStoredProc = "GetBlockedEmailSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@BlockedEmailID", BlockedEmailID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oBlockedEmail = new BlockedEmailsRow();
					
					oBlockedEmail.BlockedEmailID = DataAccess.GetID(reader, "BlockedEmailID");
					oBlockedEmail.Email = DataAccess.GetEmail(reader, "Email");
					oBlockedEmail.Notes = DataAccess.GetTextOrNull(reader, "Notes");
					oBlockedEmail.Data = DataAccess.GetStringOrNull(reader, "Data");
					oBlockedEmail.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oBlockedEmail.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");						
						
				}
				else
				{
					//todo  handle error
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oBlockedEmail)
			{
				
				Cache.Insert(oBlockedEmail, oBlockedEmail.BlockedEmailID, oBlockedEmail.Email?.ToString());
				
			}

			return oBlockedEmail;
		}
		
		public static BlockedEmailsDataTable GetAll()
		{
			BlockedEmailsDataTable tblBlockedEmails = new BlockedEmailsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetBlockedEmailsSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					BlockedEmailsRow rowBlockedEmail = new BlockedEmailsRow();
					
					rowBlockedEmail.BlockedEmailID = DataAccess.GetID(reader, "BlockedEmailID");
					rowBlockedEmail.Email = DataAccess.GetEmail(reader, "Email");
					rowBlockedEmail.Notes = DataAccess.GetTextOrNull(reader, "Notes");
					rowBlockedEmail.Data = DataAccess.GetStringOrNull(reader, "Data");
					rowBlockedEmail.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowBlockedEmail.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					
					tblBlockedEmails.Add(rowBlockedEmail);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblBlockedEmails;
		}	
		
		public static int CopyBlockedEmail(int BlockedEmailID)
		{
			int iBlockedEmailID = 0;

			try
			{
				string strStoredProc = "CopyBlockedEmailSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@BlockedEmailID", BlockedEmailID));

				iBlockedEmailID = DataAccess.IntFromProc(strStoredProc, sqlParams, "BlockedEmailID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Blocked Email since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iBlockedEmailID;
		}  
		
		public static BlockedEmailsRow ? GetBlockedEmailByEmail(string Email)
		{
			BlockedEmailsRow ? oBlockedEmail = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oBlockedEmail = Cache.Get<BlockedEmailsRow>(Email.ToString());

					if (null != oBlockedEmail)
						return oBlockedEmail;
				}
						

				string strStoredProc = "GetBlockedEmailByEmailSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Email("@Email", Email));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oBlockedEmail = new BlockedEmailsRow();
					
					oBlockedEmail.BlockedEmailID = DataAccess.GetID(reader, "BlockedEmailID");
					oBlockedEmail.Email = DataAccess.GetEmail(reader, "Email");
					oBlockedEmail.Notes = DataAccess.GetTextOrNull(reader, "Notes");
					oBlockedEmail.Data = DataAccess.GetStringOrNull(reader, "Data");
					oBlockedEmail.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oBlockedEmail.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
				}

				

				if (IsCachingEnabled && null != oBlockedEmail)
				{
					Cache.Insert(oBlockedEmail, oBlockedEmail.BlockedEmailID, oBlockedEmail.Email?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oBlockedEmail;		
		}	
			
			
    	public static void UpdateBlockedEmailData(int BlockedEmailID, string Data)
    	{
    		try
			{
				string strStoredProc = "UpdateBlockedEmailDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@BlockedEmailID", BlockedEmailID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(BlockedEmailID);
				}
			}
		
			finally
			{

			}
    	}   		
    	
	}

}	

		