
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class CallsRow : RooTrax.Common.DB.BasicRow
	{
		
		public int CallID { get; set;}
			
		public string CallingPhone { get; set;}
			
		public string CalledPhone { get; set;}
			
		public double Duration { get; set;}
			
		public bool IsRecorded { get; set;}
			
		public string? RecordingURL { get; set;}
			
		public bool IsConference { get; set;}
			
		public bool IsStreamed { get; set;}
			
		public bool IsIncoming { get; set;}
			
		public string? CallStatus { get; set;}
			
		public DateTime? LastCallStatusUpdate { get; set;}
			
		public bool IsTranscribed { get; set;}
			
		public bool IsEmptyTranscription { get; set;}
			
		public string? TranscriptionSummary { get; set;}
			
		public DateTime DateCreated { get; set;}
			
		public DateTime LastUpdated { get; set;}
			
		public string? Transcription { get; set;}
			
		public string CallKey { get; set;}
			

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
		
		
		public CallsRow()
		{
			
			this.CallID = 0;
				
			this.CallingPhone = "";
				
			this.CalledPhone = "";
				
			this.Duration = 0.0;
				
			this.IsRecorded = true;
				
			this.IsConference = true;
				
			this.IsStreamed = true;
				
			this.IsIncoming = true;
				
			this.IsTranscribed = true;
				
			this.IsEmptyTranscription = true;
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
			this.CallKey = "";
				
		}

		public  CallsRow( CallsRow oRow)
		{
			
			this.CallID = oRow.CallID;
			
			this.CallingPhone = oRow.CallingPhone;
			
			this.CalledPhone = oRow.CalledPhone;
			
			this.Duration = oRow.Duration;
			
			this.IsRecorded = oRow.IsRecorded;
			
			this.RecordingURL = oRow.RecordingURL;
			
			this.IsConference = oRow.IsConference;
			
			this.IsStreamed = oRow.IsStreamed;
			
			this.IsIncoming = oRow.IsIncoming;
			
			this.CallStatus = oRow.CallStatus;
			
			this.LastCallStatusUpdate = oRow.LastCallStatusUpdate;
			
			this.IsTranscribed = oRow.IsTranscribed;
			
			this.IsEmptyTranscription = oRow.IsEmptyTranscription;
			
			this.TranscriptionSummary = oRow.TranscriptionSummary;
			
			this.Data = oRow.Data;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
			this.Transcription = oRow.Transcription;
			
			this.CallKey = oRow.CallKey;
			
		}	

		public override int GetHashCode()
		{
			return (CallID + 3783 << 12);
		}		

		public override string ToString()
		{
			return $"{CallKey} ({CallID})";
		}
		
	}
	
	public class CallsDataTable : List<CallsRow>
	{	
		public CallsDataTable(CallsDataTable oTable)
			: base(oTable)
		{
		}

		public CallsDataTable()
		{
		}
	}

    public partial class CallsRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("Calls");

				return m_cache!;
			}
		}

		internal static CallsRow PopulateRowFromReader(SqlDataReader reader)
		{
			CallsRow rowCall = new CallsRow();
			
			rowCall.CallID = DataAccess.GetID(reader, "CallID");
			
			rowCall.CallingPhone = DataAccess.GetPhone(reader, "CallingPhone");
			
			rowCall.CalledPhone = DataAccess.GetPhone(reader, "CalledPhone");
			
			rowCall.Duration = DataAccess.GetDouble(reader, "Duration");
			
			rowCall.IsRecorded = DataAccess.GetBoolean(reader, "IsRecorded");
			
			rowCall.RecordingURL = DataAccess.GetUrlOrNull(reader, "RecordingURL");
			
			rowCall.IsConference = DataAccess.GetBoolean(reader, "IsConference");
			
			rowCall.IsStreamed = DataAccess.GetBoolean(reader, "IsStreamed");
			
			rowCall.IsIncoming = DataAccess.GetBoolean(reader, "IsIncoming");
			
			rowCall.CallStatus = DataAccess.GetStringOrNull(reader, "CallStatus");
			
			rowCall.LastCallStatusUpdate = DataAccess.GetDateTimeOrNull(reader, "LastCallStatusUpdate");
			
			rowCall.IsTranscribed = DataAccess.GetBoolean(reader, "IsTranscribed");
			
			rowCall.IsEmptyTranscription = DataAccess.GetBoolean(reader, "IsEmptyTranscription");
			
			rowCall.TranscriptionSummary = DataAccess.GetTextOrNull(reader, "TranscriptionSummary");
			
			rowCall.Data = DataAccess.GetStringOrNull(reader, "Data");
			
			rowCall.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowCall.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
			
			rowCall.Transcription = DataAccess.GetTextOrNull(reader, "Transcription");
			
			rowCall.CallKey = DataAccess.GetString(reader, "CallKey");
									

			return rowCall;
		}

	
		public static int InsertCall(CallsRow oCall)
		{
			return InsertCall(
    								 oCall.CallingPhone, 
    								 oCall.CalledPhone, 
    								 oCall.Duration, 
    								 oCall.IsRecorded, 
    								 oCall.RecordingURL, 
    								 oCall.IsConference, 
    								 oCall.IsStreamed, 
    								 oCall.IsIncoming, 
    								 oCall.CallStatus, 
    								 oCall.LastCallStatusUpdate, 
    								 oCall.IsTranscribed, 
    								 oCall.IsEmptyTranscription, 
    								 oCall.TranscriptionSummary, 
    								 oCall.Data, 
    								 oCall.Transcription, 
    								 oCall.CallKey
									);			
		}

		public static int  InsertCall(
    		string CallingPhone, 
    		string CalledPhone, 
    		double Duration, 
    		bool IsRecorded, 
    		string? RecordingURL, 
    		bool IsConference, 
    		bool IsStreamed, 
    		bool IsIncoming, 
    		string? CallStatus, 
    		DateTime? LastCallStatusUpdate, 
    		bool IsTranscribed, 
    		bool IsEmptyTranscription, 
    		string? TranscriptionSummary, 
    		string? Data, 
    		string? Transcription, 
    		string CallKey)
		{
			int iCallID = 0;

			try
			{
				string strStoredProc = "InsertCallSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Phone("@CallingPhone", CallingPhone));
				
				sqlParams.Add(DataAccess.Params.Phone("@CalledPhone", CalledPhone));
				
				sqlParams.Add(DataAccess.Params.Double("@Duration", Duration));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsRecorded", IsRecorded));
				
				sqlParams.Add(DataAccess.Params.Url("@RecordingURL", RecordingURL));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsConference", IsConference));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsStreamed", IsStreamed));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsIncoming", IsIncoming));
				
				sqlParams.Add(DataAccess.Params.String("@CallStatus", CallStatus));
				
				sqlParams.Add(DataAccess.Params.DateTime("@LastCallStatusUpdate", LastCallStatusUpdate));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsTranscribed", IsTranscribed));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsEmptyTranscription", IsEmptyTranscription));
				
				sqlParams.Add(DataAccess.Params.Text("@TranscriptionSummary", TranscriptionSummary));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.Text("@Transcription", Transcription));
				
				sqlParams.Add(DataAccess.Params.String("@CallKey", CallKey));
				
				iCallID = DataAccess.IntFromProc(strStoredProc, sqlParams, "CallID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Call since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iCallID;
		}
		
		public static void UpdateCall(
    		int CallID, 
    		string CallingPhone, 
    		string CalledPhone, 
    		double Duration, 
    		bool IsRecorded, 
    		string? RecordingURL, 
    		bool IsConference, 
    		bool IsStreamed, 
    		bool IsIncoming, 
    		string? CallStatus, 
    		DateTime? LastCallStatusUpdate, 
    		bool IsTranscribed, 
    		bool IsEmptyTranscription, 
    		string? TranscriptionSummary, 
    		string? Data, 
    		string? Transcription, 
    		string CallKey)
    	{    	
    		try
			{
				string strStoredProc = "UpdateCallSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@CallID", CallID));
				
				sqlParams.Add(DataAccess.Params.Phone("@CallingPhone", CallingPhone));
				
				sqlParams.Add(DataAccess.Params.Phone("@CalledPhone", CalledPhone));
				
				sqlParams.Add(DataAccess.Params.Double("@Duration", Duration));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsRecorded", IsRecorded));
				
				sqlParams.Add(DataAccess.Params.Url("@RecordingURL", RecordingURL));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsConference", IsConference));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsStreamed", IsStreamed));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsIncoming", IsIncoming));
				
				sqlParams.Add(DataAccess.Params.String("@CallStatus", CallStatus));
				
				sqlParams.Add(DataAccess.Params.DateTime("@LastCallStatusUpdate", LastCallStatusUpdate));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsTranscribed", IsTranscribed));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsEmptyTranscription", IsEmptyTranscription));
				
				sqlParams.Add(DataAccess.Params.Text("@TranscriptionSummary", TranscriptionSummary));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				sqlParams.Add(DataAccess.Params.Text("@Transcription", Transcription));
				
				sqlParams.Add(DataAccess.Params.String("@CallKey", CallKey));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(CallID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Call since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateCall(CallsRow oCall)
		{
			  UpdateCall(
    								 oCall.CallID, 
    								 oCall.CallingPhone, 
    								 oCall.CalledPhone, 
    								 oCall.Duration, 
    								 oCall.IsRecorded, 
    								 oCall.RecordingURL, 
    								 oCall.IsConference, 
    								 oCall.IsStreamed, 
    								 oCall.IsIncoming, 
    								 oCall.CallStatus, 
    								 oCall.LastCallStatusUpdate, 
    								 oCall.IsTranscribed, 
    								 oCall.IsEmptyTranscription, 
    								 oCall.TranscriptionSummary, 
    								 oCall.Data, 
    								 oCall.Transcription, 
    								 oCall.CallKey
									);			
		}
		
    	public static void RemoveCall(int CallID)
    	{
			try
			{
				string strStoredProc = "RemoveCallSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@CallID", CallID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(CallID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Call since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static CallsRow Get(int CallID)
		{
			CallsRow ? oCall = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oCall = Cache.Get<CallsRow>(CallID);

				if (null != oCall)
					return oCall;
			}

			try
			{
				string strStoredProc = "GetCallSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@CallID", CallID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oCall = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oCall)
			{
				
				Cache.Insert(oCall, oCall.CallID, oCall.CallKey?.ToString());
				
			}

			return oCall ?? throw new Exception("Could not find Call " + CallID);
		}
		
		public static CallsDataTable GetAll()
		{
			CallsDataTable tblCalls = new CallsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetCallsSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					CallsRow rowCall = PopulateRowFromReader(reader);
					
					tblCalls.Add(rowCall);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblCalls;
		}	
		
		public static int CopyCall(int CallID)
		{
			int iCallID = 0;

			try
			{
				string strStoredProc = "CopyCallSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@CallID", CallID));

				iCallID = DataAccess.IntFromProc(strStoredProc, sqlParams, "CallID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Call since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iCallID;
		}  
		
    	public static void MarkCallAsRecorded(int CallID)
    	{
    		try
			{
				string strStoredProc = "MarkCallAsRecordedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@CallID", CallID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkCallAsNotRecorded(int CallID)
    	{
    		try
			{
				string strStoredProc = "MarkCallAsNotRecordedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@CallID", CallID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkCallAsConference(int CallID)
    	{
    		try
			{
				string strStoredProc = "MarkCallAsConferenceSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@CallID", CallID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkCallAsNotConference(int CallID)
    	{
    		try
			{
				string strStoredProc = "MarkCallAsNotConferenceSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@CallID", CallID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkCallAsStreamed(int CallID)
    	{
    		try
			{
				string strStoredProc = "MarkCallAsStreamedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@CallID", CallID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkCallAsNotStreamed(int CallID)
    	{
    		try
			{
				string strStoredProc = "MarkCallAsNotStreamedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@CallID", CallID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkCallAsIncoming(int CallID)
    	{
    		try
			{
				string strStoredProc = "MarkCallAsIncomingSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@CallID", CallID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkCallAsNotIncoming(int CallID)
    	{
    		try
			{
				string strStoredProc = "MarkCallAsNotIncomingSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@CallID", CallID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkCallAsTranscribed(int CallID)
    	{
    		try
			{
				string strStoredProc = "MarkCallAsTranscribedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@CallID", CallID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkCallAsNotTranscribed(int CallID)
    	{
    		try
			{
				string strStoredProc = "MarkCallAsNotTranscribedSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@CallID", CallID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkCallAsEmptyTranscription(int CallID)
    	{
    		try
			{
				string strStoredProc = "MarkCallAsEmptyTranscriptionSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@CallID", CallID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkCallAsNotEmptyTranscription(int CallID)
    	{
    		try
			{
				string strStoredProc = "MarkCallAsNotEmptyTranscriptionSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@CallID", CallID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
			
    	public static void UpdateCallData(int CallID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateCallDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@CallID", CallID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(CallID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateCallData(CallsRow rowCall)
    	{
    		UpdateCallData(rowCall.CallID, rowCall.Data);
    	}  
    	
		public static CallsDataTable GetCallsSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			CallsDataTable tblCalls = new CallsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetCallsSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					CallsRow rowCall = PopulateRowFromReader(reader);

					tblCalls.Add(rowCall);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblCalls;
		}				
		public static int? GetCallsSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetCallsSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetCallsSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static CallsRow ? GetCallByCallKey(string CallKey)
		{
			CallsRow ? oCall = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oCall = Cache.Get<CallsRow>(CallKey.ToString());

					if (null != oCall)
						return oCall;
				}
						

				string strStoredProc = "GetCallByCallKeySp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@CallKey", CallKey));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oCall = PopulateRowFromReader(reader);
				}

				

				if (IsCachingEnabled && null != oCall)
				{
					Cache.Insert(oCall, oCall.CallID, oCall.CallKey?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oCall;		
		}	
			

	}

}	

		