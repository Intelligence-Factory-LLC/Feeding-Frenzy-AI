
    	    	
var CallsValidatorsFields = {
	
		bForceRefresh : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid bForceRefresh. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		CalledPhone : {Validators : [Validators.Phone, Validators.Required], InvalidMessage: "Invalid Called Phone. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Phone() },
		CallID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Call ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		CallingPhone : {Validators : [Validators.Phone, Validators.Required], InvalidMessage: "Invalid Calling Phone. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Phone() },
		CallKey : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Call Key. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		CallStatus : {Validators : [Validators.String], InvalidMessage: "Invalid Call Status. " +   ValidatorDescriptions.Length(1, 255) },
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		Duration : {Validators : [Validators.Number, Validators.Required], InvalidMessage: "Invalid Duration. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Number() },
		IsConference : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Is Conference. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		IsEmptyTranscription : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Is Empty Transcription. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		IsIncoming : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Is Incoming. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		IsRecorded : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Is Recorded. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		IsStreamed : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Is Streamed. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		IsTranscribed : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Is Transcribed. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		LastCallStatusUpdate : {Validators : [Validators.Date], InvalidMessage: "Invalid Last Call Status Update. " +   ValidatorDescriptions.Date() },
		NumRows : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid NumRows. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		RecordingURL : {Validators : [Validators.Url], InvalidMessage: "Invalid Recording URL. " +   ValidatorDescriptions.Length(1,512) },
		Search : {Validators : [Validators.String], InvalidMessage: "Invalid Search. " +   ValidatorDescriptions.Length(1, 255) },
		SkipRows : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid SkipRows. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		SortAscending : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid SortAscending. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		SortColumn : {Validators : [Validators.String], InvalidMessage: "Invalid SortColumn. " +   ValidatorDescriptions.Length(1, 255) },
		Transcription : {Validators : [Validators.Text], InvalidMessage: "Invalid Transcription. " +   ValidatorDescriptions.Length(1, 4000) },
		TranscriptionSummary : {Validators : [Validators.Text], InvalidMessage: "Invalid Transcription Summary. " +   ValidatorDescriptions.Length(1, 4000) }	
}
			
var Calls = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.Calls.ashx"

	,
	Call : function(Callback) {
        return Calls.CallObject({ }, Callback);
    },

	CallObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.Call)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.Call.onValidationError))
					Calls.Call.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "Call", 
					Params : { }, 
					Serialize : Calls.Call.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.Call.onErrorReceived) ? Calls.Call.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "Call", { }, Calls.Call.Serialize || {});
    },
	CopyCall : function(CallID, Callback) {
        return Calls.CopyCallObject({ CallID : CallID}, Callback);
    },

	CopyCallObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.CopyCall)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.CopyCall.onValidationError))
					Calls.CopyCall.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "CopyCall", 
					Params : { CallID : oObject.CallID}, 
					Serialize : Calls.CopyCall.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.CopyCall.onErrorReceived) ? Calls.CopyCall.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "CopyCall", { CallID : oObject.CallID}, Calls.CopyCall.Serialize || {});
    },
	GetCall : function(CallID, Callback) {
        return Calls.GetCallObject({ CallID : CallID}, Callback);
    },

	GetCallObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.GetCall)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.GetCall.onValidationError))
					Calls.GetCall.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "GetCall", 
					Params : { CallID : oObject.CallID}, 
					Serialize : Calls.GetCall.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.GetCall.onErrorReceived) ? Calls.GetCall.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "GetCall", { CallID : oObject.CallID}, Calls.GetCall.Serialize || {});
    },
	GetCallByCallKey : function(CallKey, Callback) {
        return Calls.GetCallByCallKeyObject({ CallKey : CallKey}, Callback);
    },

	GetCallByCallKeyObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.GetCallByCallKey)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.GetCallByCallKey.onValidationError))
					Calls.GetCallByCallKey.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "GetCallByCallKey", 
					Params : { CallKey : oObject.CallKey}, 
					Serialize : Calls.GetCallByCallKey.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.GetCallByCallKey.onErrorReceived) ? Calls.GetCallByCallKey.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "GetCallByCallKey", { CallKey : oObject.CallKey}, Calls.GetCallByCallKey.Serialize || {});
    },
	GetCalls : function(Callback) {
        return Calls.GetCallsObject({ }, Callback);
    },

	GetCallsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.GetCalls)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.GetCalls.onValidationError))
					Calls.GetCalls.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "GetCalls", 
					Params : { }, 
					Serialize : Calls.GetCalls.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.GetCalls.onErrorReceived) ? Calls.GetCalls.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "GetCalls", { }, Calls.GetCalls.Serialize || {});
    },
	GetCallsSp_PagingSp : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return Calls.GetCallsSp_PagingSpObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetCallsSp_PagingSpObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.GetCallsSp_PagingSp)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.GetCallsSp_PagingSp.onValidationError))
					Calls.GetCallsSp_PagingSp.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "GetCallsSp_PagingSp", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : Calls.GetCallsSp_PagingSp.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.GetCallsSp_PagingSp.onErrorReceived) ? Calls.GetCallsSp_PagingSp.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "GetCallsSp_PagingSp", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, Calls.GetCallsSp_PagingSp.Serialize || {});
    },
	InsertCall : function(CallingPhone, CalledPhone, Duration, IsRecorded, RecordingURL, IsConference, IsStreamed, IsIncoming, CallStatus, LastCallStatusUpdate, IsTranscribed, IsEmptyTranscription, TranscriptionSummary, Data, Transcription, CallKey, Callback) {
        return Calls.InsertCallObject({ CallingPhone : CallingPhone,CalledPhone : CalledPhone,Duration : Duration,IsRecorded : IsRecorded,RecordingURL : RecordingURL,IsConference : IsConference,IsStreamed : IsStreamed,IsIncoming : IsIncoming,CallStatus : CallStatus,LastCallStatusUpdate : LastCallStatusUpdate,IsTranscribed : IsTranscribed,IsEmptyTranscription : IsEmptyTranscription,TranscriptionSummary : TranscriptionSummary,Data : Data,Transcription : Transcription,CallKey : CallKey}, Callback);
    },

	InsertCallObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.InsertCall)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.InsertCall.onValidationError))
					Calls.InsertCall.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "InsertCall", 
					Params : { CallingPhone : oObject.CallingPhone,CalledPhone : oObject.CalledPhone,Duration : oObject.Duration,IsRecorded : oObject.IsRecorded,RecordingURL : oObject.RecordingURL,IsConference : oObject.IsConference,IsStreamed : oObject.IsStreamed,IsIncoming : oObject.IsIncoming,CallStatus : oObject.CallStatus,LastCallStatusUpdate : oObject.LastCallStatusUpdate,IsTranscribed : oObject.IsTranscribed,IsEmptyTranscription : oObject.IsEmptyTranscription,TranscriptionSummary : oObject.TranscriptionSummary,Data : oObject.Data,Transcription : oObject.Transcription,CallKey : oObject.CallKey}, 
					Serialize : Calls.InsertCall.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.InsertCall.onErrorReceived) ? Calls.InsertCall.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "InsertCall", { CallingPhone : oObject.CallingPhone,CalledPhone : oObject.CalledPhone,Duration : oObject.Duration,IsRecorded : oObject.IsRecorded,RecordingURL : oObject.RecordingURL,IsConference : oObject.IsConference,IsStreamed : oObject.IsStreamed,IsIncoming : oObject.IsIncoming,CallStatus : oObject.CallStatus,LastCallStatusUpdate : oObject.LastCallStatusUpdate,IsTranscribed : oObject.IsTranscribed,IsEmptyTranscription : oObject.IsEmptyTranscription,TranscriptionSummary : oObject.TranscriptionSummary,Data : oObject.Data,Transcription : oObject.Transcription,CallKey : oObject.CallKey}, Calls.InsertCall.Serialize || {});
    },
	InsertCallAndRecording : function(CallingPhone, CalledPhone, RecordingURL, IsIncoming, Data, CallKey, Callback) {
        return Calls.InsertCallAndRecordingObject({ CallingPhone : CallingPhone,CalledPhone : CalledPhone,RecordingURL : RecordingURL,IsIncoming : IsIncoming,Data : Data,CallKey : CallKey}, Callback);
    },

	InsertCallAndRecordingObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.InsertCallAndRecording)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.InsertCallAndRecording.onValidationError))
					Calls.InsertCallAndRecording.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "InsertCallAndRecording", 
					Params : { CallingPhone : oObject.CallingPhone,CalledPhone : oObject.CalledPhone,RecordingURL : oObject.RecordingURL,IsIncoming : oObject.IsIncoming,Data : oObject.Data,CallKey : oObject.CallKey}, 
					Serialize : Calls.InsertCallAndRecording.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.InsertCallAndRecording.onErrorReceived) ? Calls.InsertCallAndRecording.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "InsertCallAndRecording", { CallingPhone : oObject.CallingPhone,CalledPhone : oObject.CalledPhone,RecordingURL : oObject.RecordingURL,IsIncoming : oObject.IsIncoming,Data : oObject.Data,CallKey : oObject.CallKey}, Calls.InsertCallAndRecording.Serialize || {});
    },
	MarkCallAsConference : function(CallID, Callback) {
        return Calls.MarkCallAsConferenceObject({ CallID : CallID}, Callback);
    },

	MarkCallAsConferenceObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.MarkCallAsConference)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.MarkCallAsConference.onValidationError))
					Calls.MarkCallAsConference.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "MarkCallAsConference", 
					Params : { CallID : oObject.CallID}, 
					Serialize : Calls.MarkCallAsConference.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.MarkCallAsConference.onErrorReceived) ? Calls.MarkCallAsConference.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "MarkCallAsConference", { CallID : oObject.CallID}, Calls.MarkCallAsConference.Serialize || {});
    },
	MarkCallAsEmptyTranscription : function(CallID, Callback) {
        return Calls.MarkCallAsEmptyTranscriptionObject({ CallID : CallID}, Callback);
    },

	MarkCallAsEmptyTranscriptionObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.MarkCallAsEmptyTranscription)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.MarkCallAsEmptyTranscription.onValidationError))
					Calls.MarkCallAsEmptyTranscription.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "MarkCallAsEmptyTranscription", 
					Params : { CallID : oObject.CallID}, 
					Serialize : Calls.MarkCallAsEmptyTranscription.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.MarkCallAsEmptyTranscription.onErrorReceived) ? Calls.MarkCallAsEmptyTranscription.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "MarkCallAsEmptyTranscription", { CallID : oObject.CallID}, Calls.MarkCallAsEmptyTranscription.Serialize || {});
    },
	MarkCallAsIncoming : function(CallID, Callback) {
        return Calls.MarkCallAsIncomingObject({ CallID : CallID}, Callback);
    },

	MarkCallAsIncomingObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.MarkCallAsIncoming)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.MarkCallAsIncoming.onValidationError))
					Calls.MarkCallAsIncoming.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "MarkCallAsIncoming", 
					Params : { CallID : oObject.CallID}, 
					Serialize : Calls.MarkCallAsIncoming.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.MarkCallAsIncoming.onErrorReceived) ? Calls.MarkCallAsIncoming.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "MarkCallAsIncoming", { CallID : oObject.CallID}, Calls.MarkCallAsIncoming.Serialize || {});
    },
	MarkCallAsNotConference : function(CallID, Callback) {
        return Calls.MarkCallAsNotConferenceObject({ CallID : CallID}, Callback);
    },

	MarkCallAsNotConferenceObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.MarkCallAsNotConference)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.MarkCallAsNotConference.onValidationError))
					Calls.MarkCallAsNotConference.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "MarkCallAsNotConference", 
					Params : { CallID : oObject.CallID}, 
					Serialize : Calls.MarkCallAsNotConference.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.MarkCallAsNotConference.onErrorReceived) ? Calls.MarkCallAsNotConference.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "MarkCallAsNotConference", { CallID : oObject.CallID}, Calls.MarkCallAsNotConference.Serialize || {});
    },
	MarkCallAsNotEmptyTranscription : function(CallID, Callback) {
        return Calls.MarkCallAsNotEmptyTranscriptionObject({ CallID : CallID}, Callback);
    },

	MarkCallAsNotEmptyTranscriptionObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.MarkCallAsNotEmptyTranscription)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.MarkCallAsNotEmptyTranscription.onValidationError))
					Calls.MarkCallAsNotEmptyTranscription.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "MarkCallAsNotEmptyTranscription", 
					Params : { CallID : oObject.CallID}, 
					Serialize : Calls.MarkCallAsNotEmptyTranscription.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.MarkCallAsNotEmptyTranscription.onErrorReceived) ? Calls.MarkCallAsNotEmptyTranscription.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "MarkCallAsNotEmptyTranscription", { CallID : oObject.CallID}, Calls.MarkCallAsNotEmptyTranscription.Serialize || {});
    },
	MarkCallAsNotIncoming : function(CallID, Callback) {
        return Calls.MarkCallAsNotIncomingObject({ CallID : CallID}, Callback);
    },

	MarkCallAsNotIncomingObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.MarkCallAsNotIncoming)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.MarkCallAsNotIncoming.onValidationError))
					Calls.MarkCallAsNotIncoming.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "MarkCallAsNotIncoming", 
					Params : { CallID : oObject.CallID}, 
					Serialize : Calls.MarkCallAsNotIncoming.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.MarkCallAsNotIncoming.onErrorReceived) ? Calls.MarkCallAsNotIncoming.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "MarkCallAsNotIncoming", { CallID : oObject.CallID}, Calls.MarkCallAsNotIncoming.Serialize || {});
    },
	MarkCallAsNotRecorded : function(CallID, Callback) {
        return Calls.MarkCallAsNotRecordedObject({ CallID : CallID}, Callback);
    },

	MarkCallAsNotRecordedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.MarkCallAsNotRecorded)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.MarkCallAsNotRecorded.onValidationError))
					Calls.MarkCallAsNotRecorded.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "MarkCallAsNotRecorded", 
					Params : { CallID : oObject.CallID}, 
					Serialize : Calls.MarkCallAsNotRecorded.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.MarkCallAsNotRecorded.onErrorReceived) ? Calls.MarkCallAsNotRecorded.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "MarkCallAsNotRecorded", { CallID : oObject.CallID}, Calls.MarkCallAsNotRecorded.Serialize || {});
    },
	MarkCallAsNotStreamed : function(CallID, Callback) {
        return Calls.MarkCallAsNotStreamedObject({ CallID : CallID}, Callback);
    },

	MarkCallAsNotStreamedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.MarkCallAsNotStreamed)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.MarkCallAsNotStreamed.onValidationError))
					Calls.MarkCallAsNotStreamed.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "MarkCallAsNotStreamed", 
					Params : { CallID : oObject.CallID}, 
					Serialize : Calls.MarkCallAsNotStreamed.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.MarkCallAsNotStreamed.onErrorReceived) ? Calls.MarkCallAsNotStreamed.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "MarkCallAsNotStreamed", { CallID : oObject.CallID}, Calls.MarkCallAsNotStreamed.Serialize || {});
    },
	MarkCallAsNotTranscribed : function(CallID, Callback) {
        return Calls.MarkCallAsNotTranscribedObject({ CallID : CallID}, Callback);
    },

	MarkCallAsNotTranscribedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.MarkCallAsNotTranscribed)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.MarkCallAsNotTranscribed.onValidationError))
					Calls.MarkCallAsNotTranscribed.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "MarkCallAsNotTranscribed", 
					Params : { CallID : oObject.CallID}, 
					Serialize : Calls.MarkCallAsNotTranscribed.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.MarkCallAsNotTranscribed.onErrorReceived) ? Calls.MarkCallAsNotTranscribed.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "MarkCallAsNotTranscribed", { CallID : oObject.CallID}, Calls.MarkCallAsNotTranscribed.Serialize || {});
    },
	MarkCallAsRecorded : function(CallID, Callback) {
        return Calls.MarkCallAsRecordedObject({ CallID : CallID}, Callback);
    },

	MarkCallAsRecordedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.MarkCallAsRecorded)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.MarkCallAsRecorded.onValidationError))
					Calls.MarkCallAsRecorded.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "MarkCallAsRecorded", 
					Params : { CallID : oObject.CallID}, 
					Serialize : Calls.MarkCallAsRecorded.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.MarkCallAsRecorded.onErrorReceived) ? Calls.MarkCallAsRecorded.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "MarkCallAsRecorded", { CallID : oObject.CallID}, Calls.MarkCallAsRecorded.Serialize || {});
    },
	MarkCallAsStreamed : function(CallID, Callback) {
        return Calls.MarkCallAsStreamedObject({ CallID : CallID}, Callback);
    },

	MarkCallAsStreamedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.MarkCallAsStreamed)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.MarkCallAsStreamed.onValidationError))
					Calls.MarkCallAsStreamed.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "MarkCallAsStreamed", 
					Params : { CallID : oObject.CallID}, 
					Serialize : Calls.MarkCallAsStreamed.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.MarkCallAsStreamed.onErrorReceived) ? Calls.MarkCallAsStreamed.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "MarkCallAsStreamed", { CallID : oObject.CallID}, Calls.MarkCallAsStreamed.Serialize || {});
    },
	MarkCallAsTranscribed : function(CallID, Callback) {
        return Calls.MarkCallAsTranscribedObject({ CallID : CallID}, Callback);
    },

	MarkCallAsTranscribedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.MarkCallAsTranscribed)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.MarkCallAsTranscribed.onValidationError))
					Calls.MarkCallAsTranscribed.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "MarkCallAsTranscribed", 
					Params : { CallID : oObject.CallID}, 
					Serialize : Calls.MarkCallAsTranscribed.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.MarkCallAsTranscribed.onErrorReceived) ? Calls.MarkCallAsTranscribed.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "MarkCallAsTranscribed", { CallID : oObject.CallID}, Calls.MarkCallAsTranscribed.Serialize || {});
    },
	PostProcessCall : function(CallID, bForceRefresh, Callback) {
        return Calls.PostProcessCallObject({ CallID : CallID,bForceRefresh : bForceRefresh}, Callback);
    },

	PostProcessCallObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.PostProcessCall)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.PostProcessCall.onValidationError))
					Calls.PostProcessCall.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "PostProcessCall", 
					Params : { CallID : oObject.CallID,bForceRefresh : oObject.bForceRefresh}, 
					Serialize : Calls.PostProcessCall.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.PostProcessCall.onErrorReceived) ? Calls.PostProcessCall.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "PostProcessCall", { CallID : oObject.CallID,bForceRefresh : oObject.bForceRefresh}, Calls.PostProcessCall.Serialize || {});
    },
	RemoveCall : function(CallID, Callback) {
        return Calls.RemoveCallObject({ CallID : CallID}, Callback);
    },

	RemoveCallObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.RemoveCall)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.RemoveCall.onValidationError))
					Calls.RemoveCall.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "RemoveCall", 
					Params : { CallID : oObject.CallID}, 
					Serialize : Calls.RemoveCall.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.RemoveCall.onErrorReceived) ? Calls.RemoveCall.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "RemoveCall", { CallID : oObject.CallID}, Calls.RemoveCall.Serialize || {});
    },
	UpdateCall : function(CallID, CallingPhone, CalledPhone, Duration, IsRecorded, RecordingURL, IsConference, IsStreamed, IsIncoming, CallStatus, LastCallStatusUpdate, IsTranscribed, IsEmptyTranscription, TranscriptionSummary, Data, Transcription, CallKey, Callback) {
        return Calls.UpdateCallObject({ CallID : CallID,CallingPhone : CallingPhone,CalledPhone : CalledPhone,Duration : Duration,IsRecorded : IsRecorded,RecordingURL : RecordingURL,IsConference : IsConference,IsStreamed : IsStreamed,IsIncoming : IsIncoming,CallStatus : CallStatus,LastCallStatusUpdate : LastCallStatusUpdate,IsTranscribed : IsTranscribed,IsEmptyTranscription : IsEmptyTranscription,TranscriptionSummary : TranscriptionSummary,Data : Data,Transcription : Transcription,CallKey : CallKey}, Callback);
    },

	UpdateCallObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.UpdateCall)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.UpdateCall.onValidationError))
					Calls.UpdateCall.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "UpdateCall", 
					Params : { CallID : oObject.CallID,CallingPhone : oObject.CallingPhone,CalledPhone : oObject.CalledPhone,Duration : oObject.Duration,IsRecorded : oObject.IsRecorded,RecordingURL : oObject.RecordingURL,IsConference : oObject.IsConference,IsStreamed : oObject.IsStreamed,IsIncoming : oObject.IsIncoming,CallStatus : oObject.CallStatus,LastCallStatusUpdate : oObject.LastCallStatusUpdate,IsTranscribed : oObject.IsTranscribed,IsEmptyTranscription : oObject.IsEmptyTranscription,TranscriptionSummary : oObject.TranscriptionSummary,Data : oObject.Data,Transcription : oObject.Transcription,CallKey : oObject.CallKey}, 
					Serialize : Calls.UpdateCall.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.UpdateCall.onErrorReceived) ? Calls.UpdateCall.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "UpdateCall", { CallID : oObject.CallID,CallingPhone : oObject.CallingPhone,CalledPhone : oObject.CalledPhone,Duration : oObject.Duration,IsRecorded : oObject.IsRecorded,RecordingURL : oObject.RecordingURL,IsConference : oObject.IsConference,IsStreamed : oObject.IsStreamed,IsIncoming : oObject.IsIncoming,CallStatus : oObject.CallStatus,LastCallStatusUpdate : oObject.LastCallStatusUpdate,IsTranscribed : oObject.IsTranscribed,IsEmptyTranscription : oObject.IsEmptyTranscription,TranscriptionSummary : oObject.TranscriptionSummary,Data : oObject.Data,Transcription : oObject.Transcription,CallKey : oObject.CallKey}, Calls.UpdateCall.Serialize || {});
    },
	UpdateCallData : function(CallID, Data, Callback) {
        return Calls.UpdateCallDataObject({ CallID : CallID,Data : Data}, Callback);
    },

	UpdateCallDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CallsValidators.UpdateCallData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Calls.UpdateCallData.onValidationError))
					Calls.UpdateCallData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Calls.Url, 
					Method : "UpdateCallData", 
					Params : { CallID : oObject.CallID,Data : oObject.Data}, 
					Serialize : Calls.UpdateCallData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Calls.UpdateCallData.onErrorReceived) ? Calls.UpdateCallData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Calls.Url, "UpdateCallData", { CallID : oObject.CallID,Data : oObject.Data}, Calls.UpdateCallData.Serialize || {});
    }
};

var CallsValidators = {
	

	Call : {	
	},

	CopyCall : {
			CallID : CallsValidatorsFields.CallID	
	},

	GetCall : {
			CallID : CallsValidatorsFields.CallID	
	},

	GetCallByCallKey : {
			CallKey : CallsValidatorsFields.CallKey	
	},

	GetCalls : {	
	},

	GetCallsSp_PagingSp : {
			Search : CallsValidatorsFields.Search,
			SortColumn : CallsValidatorsFields.SortColumn,
			SortAscending : CallsValidatorsFields.SortAscending,
			SkipRows : CallsValidatorsFields.SkipRows,
			NumRows : CallsValidatorsFields.NumRows	
	},

	InsertCall : {
			CallingPhone : CallsValidatorsFields.CallingPhone,
			CalledPhone : CallsValidatorsFields.CalledPhone,
			Duration : CallsValidatorsFields.Duration,
			IsRecorded : CallsValidatorsFields.IsRecorded,
			RecordingURL : CallsValidatorsFields.RecordingURL,
			IsConference : CallsValidatorsFields.IsConference,
			IsStreamed : CallsValidatorsFields.IsStreamed,
			IsIncoming : CallsValidatorsFields.IsIncoming,
			CallStatus : CallsValidatorsFields.CallStatus,
			LastCallStatusUpdate : CallsValidatorsFields.LastCallStatusUpdate,
			IsTranscribed : CallsValidatorsFields.IsTranscribed,
			IsEmptyTranscription : CallsValidatorsFields.IsEmptyTranscription,
			TranscriptionSummary : CallsValidatorsFields.TranscriptionSummary,
			Data : CallsValidatorsFields.Data,
			Transcription : CallsValidatorsFields.Transcription,
			CallKey : CallsValidatorsFields.CallKey	
	},

	InsertCallAndRecording : {
			CallingPhone : CallsValidatorsFields.CallingPhone,
			CalledPhone : CallsValidatorsFields.CalledPhone,
			RecordingURL : CallsValidatorsFields.RecordingURL,
			IsIncoming : CallsValidatorsFields.IsIncoming,
			Data : CallsValidatorsFields.Data,
			CallKey : CallsValidatorsFields.CallKey	
	},

	MarkCallAsConference : {
			CallID : CallsValidatorsFields.CallID	
	},

	MarkCallAsEmptyTranscription : {
			CallID : CallsValidatorsFields.CallID	
	},

	MarkCallAsIncoming : {
			CallID : CallsValidatorsFields.CallID	
	},

	MarkCallAsNotConference : {
			CallID : CallsValidatorsFields.CallID	
	},

	MarkCallAsNotEmptyTranscription : {
			CallID : CallsValidatorsFields.CallID	
	},

	MarkCallAsNotIncoming : {
			CallID : CallsValidatorsFields.CallID	
	},

	MarkCallAsNotRecorded : {
			CallID : CallsValidatorsFields.CallID	
	},

	MarkCallAsNotStreamed : {
			CallID : CallsValidatorsFields.CallID	
	},

	MarkCallAsNotTranscribed : {
			CallID : CallsValidatorsFields.CallID	
	},

	MarkCallAsRecorded : {
			CallID : CallsValidatorsFields.CallID	
	},

	MarkCallAsStreamed : {
			CallID : CallsValidatorsFields.CallID	
	},

	MarkCallAsTranscribed : {
			CallID : CallsValidatorsFields.CallID	
	},

	PostProcessCall : {
			CallID : CallsValidatorsFields.CallID,
			bForceRefresh : CallsValidatorsFields.bForceRefresh	
	},

	RemoveCall : {
			CallID : CallsValidatorsFields.CallID	
	},

	UpdateCall : {
			CallID : CallsValidatorsFields.CallID,
			CallingPhone : CallsValidatorsFields.CallingPhone,
			CalledPhone : CallsValidatorsFields.CalledPhone,
			Duration : CallsValidatorsFields.Duration,
			IsRecorded : CallsValidatorsFields.IsRecorded,
			RecordingURL : CallsValidatorsFields.RecordingURL,
			IsConference : CallsValidatorsFields.IsConference,
			IsStreamed : CallsValidatorsFields.IsStreamed,
			IsIncoming : CallsValidatorsFields.IsIncoming,
			CallStatus : CallsValidatorsFields.CallStatus,
			LastCallStatusUpdate : CallsValidatorsFields.LastCallStatusUpdate,
			IsTranscribed : CallsValidatorsFields.IsTranscribed,
			IsEmptyTranscription : CallsValidatorsFields.IsEmptyTranscription,
			TranscriptionSummary : CallsValidatorsFields.TranscriptionSummary,
			Data : CallsValidatorsFields.Data,
			Transcription : CallsValidatorsFields.Transcription,
			CallKey : CallsValidatorsFields.CallKey	
	},

	UpdateCallData : {
			CallID : CallsValidatorsFields.CallID,
			Data : CallsValidatorsFields.Data	
	}
};

    