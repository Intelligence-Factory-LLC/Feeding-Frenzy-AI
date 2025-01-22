
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class MessagesRow : RooTrax.Common.DB.BasicRow
	{
		
		public int MessageID { get; set;}
			
		public string MessageText { get; set;}
			
		public string SentByPhone { get; set;}
			
		public string ReceivedByPhone { get; set;}
			
		public DateTime DateCreated { get; set;}
			
		public DateTime LastUpdated { get; set;}
			
		public bool IsDelivered { get; set;}
			
		public bool IsReceived { get; set;}
			
		public bool IsDismissed { get; set;}
			

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
		
		
		public MessagesRow()
		{
			
			this.MessageID = 0;
				
			this.MessageText = "";
				
			this.SentByPhone = "";
				
			this.ReceivedByPhone = "";
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
			this.IsDelivered = false;
				
			this.IsReceived = true;
				
			this.IsDismissed = true;
				
		}

		public  MessagesRow( MessagesRow oRow)
		{
			
			this.MessageID = oRow.MessageID;
			
			this.MessageText = oRow.MessageText;
			
			this.SentByPhone = oRow.SentByPhone;
			
			this.ReceivedByPhone = oRow.ReceivedByPhone;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
			this.Data = oRow.Data;
			
			this.IsDelivered = oRow.IsDelivered;
			
			this.IsReceived = oRow.IsReceived;
			
			this.IsDismissed = oRow.IsDismissed;
			
		}	

		public override int GetHashCode()
		{
			return (MessageID + 3782 << 12);
		}		

		public override string ToString()
		{
			return $"({MessageID})";
		}
		
	}
	
	public class MessagesDataTable : List<MessagesRow>
	{	
		public MessagesDataTable(MessagesDataTable oTable)
			: base(oTable)
		{
		}

		public MessagesDataTable()
		{
		}
	}

    public partial class MessagesRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("Messages");

				return m_cache!;
			}
		}

		internal static MessagesRow PopulateRowFromReader(SqlDataReader reader)
		{
			MessagesRow rowMessage = new MessagesRow();
			
			rowMessage.MessageID = DataAccess.GetID(reader, "MessageID");
			
			rowMessage.MessageText = DataAccess.GetText(reader, "MessageText");
			
			rowMessage.SentByPhone = DataAccess.GetPhone(reader, "SentByPhone");
			
			rowMessage.ReceivedByPhone = DataAccess.GetPhone(reader, "ReceivedByPhone");
			
			rowMessage.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowMessage.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
			
			rowMessage.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowMessage.IsDelivered = DataAccess.GetBoolean(reader, "IsDelivered");
			
			rowMessage.IsReceived = DataAccess.GetBoolean(reader, "IsReceived");
			
			rowMessage.IsDismissed = DataAccess.GetBoolean(reader, "IsDismissed");
									

			return rowMessage;
		}

	
		public static int InsertMessage(MessagesRow oMessage)
		{
			return InsertMessage(
    								 oMessage.MessageText, 
    								 oMessage.SentByPhone, 
    								 oMessage.ReceivedByPhone, 
    								 oMessage.Data, 
    								 oMessage.IsDelivered, 
    								 oMessage.IsReceived, 
    								 oMessage.IsDismissed
									);			
		}

		public static int  InsertMessage(
    		string MessageText, 
    		string SentByPhone, 
    		string ReceivedByPhone, 
    		string? Data, 
    		bool IsDelivered, 
    		bool IsReceived, 
    		bool IsDismissed)
		{
			int iMessageID = 0;

			try
			{
				string strStoredProc = "InsertMessageSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Text("@MessageText", MessageText));
				
				sqlParams.Add(DataAccess.Params.Phone("@SentByPhone", SentByPhone));
				
				sqlParams.Add(DataAccess.Params.Phone("@ReceivedByPhone", ReceivedByPhone));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsDelivered", IsDelivered));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsReceived", IsReceived));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsDismissed", IsDismissed));
				
				iMessageID = DataAccess.IntFromProc(strStoredProc, sqlParams, "MessageID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Message since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iMessageID;
		}
		
		public static void UpdateMessage(
    		int MessageID, 
    		string MessageText, 
    		string SentByPhone, 
    		string ReceivedByPhone, 
    		string? Data, 
    		bool IsDelivered, 
    		bool IsReceived, 
    		bool IsDismissed)
    	{    	
    		try
			{
				string strStoredProc = "UpdateMessageSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@MessageID", MessageID));
				
				sqlParams.Add(DataAccess.Params.Text("@MessageText", MessageText));
				
				sqlParams.Add(DataAccess.Params.Phone("@SentByPhone", SentByPhone));
				
				sqlParams.Add(DataAccess.Params.Phone("@ReceivedByPhone", ReceivedByPhone));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsDelivered", IsDelivered));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsReceived", IsReceived));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsDismissed", IsDismissed));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(MessageID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Message since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateMessage(MessagesRow oMessage)
		{
			  UpdateMessage(
    								 oMessage.MessageID, 
    								 oMessage.MessageText, 
    								 oMessage.SentByPhone, 
    								 oMessage.ReceivedByPhone, 
    								 oMessage.Data, 
    								 oMessage.IsDelivered, 
    								 oMessage.IsReceived, 
    								 oMessage.IsDismissed
									);			
		}
		
    	public static void RemoveMessage(int MessageID)
    	{
			try
			{
				string strStoredProc = "RemoveMessageSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@MessageID", MessageID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(MessageID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Message since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static MessagesRow Get(int MessageID)
		{
			MessagesRow ? oMessage = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oMessage = Cache.Get<MessagesRow>(MessageID);

				if (null != oMessage)
					return oMessage;
			}

			try
			{
				string strStoredProc = "GetMessageSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@MessageID", MessageID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oMessage = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oMessage)
			{
				
				Cache.Insert(oMessage, oMessage.MessageID, oMessage.MessageID.ToString());
				
			}

			return oMessage ?? throw new Exception("Could not find Message " + MessageID);
		}
		
		public static MessagesDataTable GetAll()
		{
			MessagesDataTable tblMessages = new MessagesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetMessagesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					MessagesRow rowMessage = PopulateRowFromReader(reader);
					
					tblMessages.Add(rowMessage);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblMessages;
		}	
		
		public static int CopyMessage(int MessageID)
		{
			int iMessageID = 0;

			try
			{
				string strStoredProc = "CopyMessageSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@MessageID", MessageID));

				iMessageID = DataAccess.IntFromProc(strStoredProc, sqlParams, "MessageID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Message since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iMessageID;
		}  
		
			
    	public static void UpdateMessageData(int MessageID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateMessageDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@MessageID", MessageID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(MessageID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateMessageData(MessagesRow rowMessage)
    	{
    		UpdateMessageData(rowMessage.MessageID, rowMessage.Data);
    	}  
    	
    	public static void MarkMessageAsDelivered(int MessageID)
    	{
    		try
			{
				string strStoredProc = "MarkMessageAsDeliveredSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@MessageID", MessageID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkMessageAsNotDelivered(int MessageID)
    	{
    		try
			{
				string strStoredProc = "MarkMessageAsNotDeliveredSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@MessageID", MessageID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkMessageAsReceived(int MessageID)
    	{
    		try
			{
				string strStoredProc = "MarkMessageAsReceivedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@MessageID", MessageID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkMessageAsNotReceived(int MessageID)
    	{
    		try
			{
				string strStoredProc = "MarkMessageAsNotReceivedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@MessageID", MessageID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkMessageAsDismissed(int MessageID)
    	{
    		try
			{
				string strStoredProc = "MarkMessageAsDismissedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@MessageID", MessageID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkMessageAsNotDismissed(int MessageID)
    	{
    		try
			{
				string strStoredProc = "MarkMessageAsNotDismissedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@MessageID", MessageID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
		public static MessagesDataTable GetByPhone(string Phone)
		{
			MessagesDataTable tblMessages = new MessagesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "Messages_GetByPhone_Sp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Phone", Phone));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					MessagesRow rowMessage = PopulateRowFromReader(reader);

					tblMessages.Add(rowMessage);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblMessages;
		}				

	}

}	

		