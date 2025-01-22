
    	    	
var LeadNotesValidatorsFields = {
	
		bForceRefresh : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid bForceRefresh. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		DocumentID : {Validators : [Validators.String], InvalidMessage: "Invalid DocumentID. " +   ValidatorDescriptions.Length(1, 255) },
		FollowUpDate : {Validators : [Validators.Date], InvalidMessage: "Invalid Follow Up Date. " +   ValidatorDescriptions.Date() },
		LeadID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Lead ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		LeadNoteID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Lead Note ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		LeadNoteTypeID : {Validators : [Validators.ID], InvalidMessage: "Invalid Lead Note Type ID. " +   ValidatorDescriptions.ID() },
		Notes : {Validators : [Validators.Text, Validators.Required], InvalidMessage: "Invalid Notes. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 4000) },
		rowNote : {Validators : [Validators.Object, Validators.Required], InvalidMessage: "Invalid rowNote. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Object() },
		SalesRepresentativeID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Sales Representative ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		strID : {Validators : [Validators.String], InvalidMessage: "Invalid strID. " +   ValidatorDescriptions.Length(1, 255) },
		TagID : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid TagID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() }	
}
			
var LeadNotes = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.LeadNotes.ashx"

	,
	CopyLeadNote : function(LeadNoteID, Callback) {
        return LeadNotes.CopyLeadNoteObject({ LeadNoteID : LeadNoteID}, Callback);
    },

	CopyLeadNoteObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.CopyLeadNote)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.CopyLeadNote.onValidationError))
					LeadNotes.CopyLeadNote.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "CopyLeadNote", 
					Params : { LeadNoteID : oObject.LeadNoteID}, 
					Serialize : LeadNotes.CopyLeadNote.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.CopyLeadNote.onErrorReceived) ? LeadNotes.CopyLeadNote.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "CopyLeadNote", { LeadNoteID : oObject.LeadNoteID}, LeadNotes.CopyLeadNote.Serialize || {});
    },
	GetAppointments : function(Callback) {
        return LeadNotes.GetAppointmentsObject({ }, Callback);
    },

	GetAppointmentsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.GetAppointments)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.GetAppointments.onValidationError))
					LeadNotes.GetAppointments.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "GetAppointments", 
					Params : { }, 
					Serialize : LeadNotes.GetAppointments.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.GetAppointments.onErrorReceived) ? LeadNotes.GetAppointments.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "GetAppointments", { }, LeadNotes.GetAppointments.Serialize || {});
    },
	GetFollowUpByLeadID : function(LeadID, Callback) {
        return LeadNotes.GetFollowUpByLeadIDObject({ LeadID : LeadID}, Callback);
    },

	GetFollowUpByLeadIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.GetFollowUpByLeadID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.GetFollowUpByLeadID.onValidationError))
					LeadNotes.GetFollowUpByLeadID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "GetFollowUpByLeadID", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : LeadNotes.GetFollowUpByLeadID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.GetFollowUpByLeadID.onErrorReceived) ? LeadNotes.GetFollowUpByLeadID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "GetFollowUpByLeadID", { LeadID : oObject.LeadID}, LeadNotes.GetFollowUpByLeadID.Serialize || {});
    },
	GetFollowUps : function(SalesRepresentativeID, Callback) {
        return LeadNotes.GetFollowUpsObject({ SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetFollowUpsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.GetFollowUps)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.GetFollowUps.onValidationError))
					LeadNotes.GetFollowUps.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "GetFollowUps", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : LeadNotes.GetFollowUps.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.GetFollowUps.onErrorReceived) ? LeadNotes.GetFollowUps.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "GetFollowUps", { SalesRepresentativeID : oObject.SalesRepresentativeID}, LeadNotes.GetFollowUps.Serialize || {});
    },
	GetFollowUps2 : function(SalesRepresentativeID, Callback) {
        return LeadNotes.GetFollowUps2Object({ SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetFollowUps2Object : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.GetFollowUps2)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.GetFollowUps2.onValidationError))
					LeadNotes.GetFollowUps2.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "GetFollowUps2", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : LeadNotes.GetFollowUps2.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.GetFollowUps2.onErrorReceived) ? LeadNotes.GetFollowUps2.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "GetFollowUps2", { SalesRepresentativeID : oObject.SalesRepresentativeID}, LeadNotes.GetFollowUps2.Serialize || {});
    },
	GetFollowUpsByTagID : function(SalesRepresentativeID, TagID, Callback) {
        return LeadNotes.GetFollowUpsByTagIDObject({ SalesRepresentativeID : SalesRepresentativeID,TagID : TagID}, Callback);
    },

	GetFollowUpsByTagIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.GetFollowUpsByTagID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.GetFollowUpsByTagID.onValidationError))
					LeadNotes.GetFollowUpsByTagID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "GetFollowUpsByTagID", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,TagID : oObject.TagID}, 
					Serialize : LeadNotes.GetFollowUpsByTagID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.GetFollowUpsByTagID.onErrorReceived) ? LeadNotes.GetFollowUpsByTagID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "GetFollowUpsByTagID", { SalesRepresentativeID : oObject.SalesRepresentativeID,TagID : oObject.TagID}, LeadNotes.GetFollowUpsByTagID.Serialize || {});
    },
	GetFollowUpsByTagID2 : function(SalesRepresentativeID, TagID, Callback) {
        return LeadNotes.GetFollowUpsByTagID2Object({ SalesRepresentativeID : SalesRepresentativeID,TagID : TagID}, Callback);
    },

	GetFollowUpsByTagID2Object : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.GetFollowUpsByTagID2)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.GetFollowUpsByTagID2.onValidationError))
					LeadNotes.GetFollowUpsByTagID2.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "GetFollowUpsByTagID2", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,TagID : oObject.TagID}, 
					Serialize : LeadNotes.GetFollowUpsByTagID2.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.GetFollowUpsByTagID2.onErrorReceived) ? LeadNotes.GetFollowUpsByTagID2.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "GetFollowUpsByTagID2", { SalesRepresentativeID : oObject.SalesRepresentativeID,TagID : oObject.TagID}, LeadNotes.GetFollowUpsByTagID2.Serialize || {});
    },
	GetGoogleDocsFilesByLeadID : function(LeadID, Callback) {
        return LeadNotes.GetGoogleDocsFilesByLeadIDObject({ LeadID : LeadID}, Callback);
    },

	GetGoogleDocsFilesByLeadIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.GetGoogleDocsFilesByLeadID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.GetGoogleDocsFilesByLeadID.onValidationError))
					LeadNotes.GetGoogleDocsFilesByLeadID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "GetGoogleDocsFilesByLeadID", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : LeadNotes.GetGoogleDocsFilesByLeadID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.GetGoogleDocsFilesByLeadID.onErrorReceived) ? LeadNotes.GetGoogleDocsFilesByLeadID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "GetGoogleDocsFilesByLeadID", { LeadID : oObject.LeadID}, LeadNotes.GetGoogleDocsFilesByLeadID.Serialize || {});
    },
	GetGoogleDocsFilesByLeadIDSync : function(LeadID, Callback) {
        return LeadNotes.GetGoogleDocsFilesByLeadIDSyncObject({ LeadID : LeadID}, Callback);
    },

	GetGoogleDocsFilesByLeadIDSyncObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.GetGoogleDocsFilesByLeadIDSync)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.GetGoogleDocsFilesByLeadIDSync.onValidationError))
					LeadNotes.GetGoogleDocsFilesByLeadIDSync.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "GetGoogleDocsFilesByLeadIDSync", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : LeadNotes.GetGoogleDocsFilesByLeadIDSync.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.GetGoogleDocsFilesByLeadIDSync.onErrorReceived) ? LeadNotes.GetGoogleDocsFilesByLeadIDSync.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "GetGoogleDocsFilesByLeadIDSync", { LeadID : oObject.LeadID}, LeadNotes.GetGoogleDocsFilesByLeadIDSync.Serialize || {});
    },
	GetGoogleDocsLeadNoteByDocumentID : function(LeadID, DocumentID, Callback) {
        return LeadNotes.GetGoogleDocsLeadNoteByDocumentIDObject({ LeadID : LeadID,DocumentID : DocumentID}, Callback);
    },

	GetGoogleDocsLeadNoteByDocumentIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.GetGoogleDocsLeadNoteByDocumentID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.GetGoogleDocsLeadNoteByDocumentID.onValidationError))
					LeadNotes.GetGoogleDocsLeadNoteByDocumentID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "GetGoogleDocsLeadNoteByDocumentID", 
					Params : { LeadID : oObject.LeadID,DocumentID : oObject.DocumentID}, 
					Serialize : LeadNotes.GetGoogleDocsLeadNoteByDocumentID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.GetGoogleDocsLeadNoteByDocumentID.onErrorReceived) ? LeadNotes.GetGoogleDocsLeadNoteByDocumentID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "GetGoogleDocsLeadNoteByDocumentID", { LeadID : oObject.LeadID,DocumentID : oObject.DocumentID}, LeadNotes.GetGoogleDocsLeadNoteByDocumentID.Serialize || {});
    },
	GetLeadNote : function(LeadNoteID, Callback) {
        return LeadNotes.GetLeadNoteObject({ LeadNoteID : LeadNoteID}, Callback);
    },

	GetLeadNoteObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.GetLeadNote)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.GetLeadNote.onValidationError))
					LeadNotes.GetLeadNote.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "GetLeadNote", 
					Params : { LeadNoteID : oObject.LeadNoteID}, 
					Serialize : LeadNotes.GetLeadNote.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.GetLeadNote.onErrorReceived) ? LeadNotes.GetLeadNote.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "GetLeadNote", { LeadNoteID : oObject.LeadNoteID}, LeadNotes.GetLeadNote.Serialize || {});
    },
	GetLeadNotes : function(Callback) {
        return LeadNotes.GetLeadNotesObject({ }, Callback);
    },

	GetLeadNotesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.GetLeadNotes)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.GetLeadNotes.onValidationError))
					LeadNotes.GetLeadNotes.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "GetLeadNotes", 
					Params : { }, 
					Serialize : LeadNotes.GetLeadNotes.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.GetLeadNotes.onErrorReceived) ? LeadNotes.GetLeadNotes.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "GetLeadNotes", { }, LeadNotes.GetLeadNotes.Serialize || {});
    },
	GetLeadNotesByLeadID : function(LeadID, Callback) {
        return LeadNotes.GetLeadNotesByLeadIDObject({ LeadID : LeadID}, Callback);
    },

	GetLeadNotesByLeadIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.GetLeadNotesByLeadID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.GetLeadNotesByLeadID.onValidationError))
					LeadNotes.GetLeadNotesByLeadID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "GetLeadNotesByLeadID", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : LeadNotes.GetLeadNotesByLeadID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.GetLeadNotesByLeadID.onErrorReceived) ? LeadNotes.GetLeadNotesByLeadID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "GetLeadNotesByLeadID", { LeadID : oObject.LeadID}, LeadNotes.GetLeadNotesByLeadID.Serialize || {});
    },
	GetLeadNotesByLeadNoteTypeID : function(LeadNoteTypeID, Callback) {
        return LeadNotes.GetLeadNotesByLeadNoteTypeIDObject({ LeadNoteTypeID : LeadNoteTypeID}, Callback);
    },

	GetLeadNotesByLeadNoteTypeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.GetLeadNotesByLeadNoteTypeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.GetLeadNotesByLeadNoteTypeID.onValidationError))
					LeadNotes.GetLeadNotesByLeadNoteTypeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "GetLeadNotesByLeadNoteTypeID", 
					Params : { LeadNoteTypeID : oObject.LeadNoteTypeID}, 
					Serialize : LeadNotes.GetLeadNotesByLeadNoteTypeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.GetLeadNotesByLeadNoteTypeID.onErrorReceived) ? LeadNotes.GetLeadNotesByLeadNoteTypeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "GetLeadNotesByLeadNoteTypeID", { LeadNoteTypeID : oObject.LeadNoteTypeID}, LeadNotes.GetLeadNotesByLeadNoteTypeID.Serialize || {});
    },
	InsertAppointmentGiven : function(LeadID, SalesRepresentativeID, FollowUpDate, Notes, Data, Callback) {
        return LeadNotes.InsertAppointmentGivenObject({ LeadID : LeadID,SalesRepresentativeID : SalesRepresentativeID,FollowUpDate : FollowUpDate,Notes : Notes,Data : Data}, Callback);
    },

	InsertAppointmentGivenObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.InsertAppointmentGiven)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.InsertAppointmentGiven.onValidationError))
					LeadNotes.InsertAppointmentGiven.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "InsertAppointmentGiven", 
					Params : { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID,FollowUpDate : oObject.FollowUpDate,Notes : oObject.Notes,Data : oObject.Data}, 
					Serialize : LeadNotes.InsertAppointmentGiven.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.InsertAppointmentGiven.onErrorReceived) ? LeadNotes.InsertAppointmentGiven.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "InsertAppointmentGiven", { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID,FollowUpDate : oObject.FollowUpDate,Notes : oObject.Notes,Data : oObject.Data}, LeadNotes.InsertAppointmentGiven.Serialize || {});
    },
	InsertAppointmentSet : function(LeadID, SalesRepresentativeID, FollowUpDate, Notes, Data, Callback) {
        return LeadNotes.InsertAppointmentSetObject({ LeadID : LeadID,SalesRepresentativeID : SalesRepresentativeID,FollowUpDate : FollowUpDate,Notes : Notes,Data : Data}, Callback);
    },

	InsertAppointmentSetObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.InsertAppointmentSet)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.InsertAppointmentSet.onValidationError))
					LeadNotes.InsertAppointmentSet.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "InsertAppointmentSet", 
					Params : { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID,FollowUpDate : oObject.FollowUpDate,Notes : oObject.Notes,Data : oObject.Data}, 
					Serialize : LeadNotes.InsertAppointmentSet.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.InsertAppointmentSet.onErrorReceived) ? LeadNotes.InsertAppointmentSet.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "InsertAppointmentSet", { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID,FollowUpDate : oObject.FollowUpDate,Notes : oObject.Notes,Data : oObject.Data}, LeadNotes.InsertAppointmentSet.Serialize || {});
    },
	InsertGoogleDocFile : function(LeadID, SalesRepresentativeID, DocumentID, Callback) {
        return LeadNotes.InsertGoogleDocFileObject({ LeadID : LeadID,SalesRepresentativeID : SalesRepresentativeID,DocumentID : DocumentID}, Callback);
    },

	InsertGoogleDocFileObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.InsertGoogleDocFile)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.InsertGoogleDocFile.onValidationError))
					LeadNotes.InsertGoogleDocFile.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "InsertGoogleDocFile", 
					Params : { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID,DocumentID : oObject.DocumentID}, 
					Serialize : LeadNotes.InsertGoogleDocFile.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.InsertGoogleDocFile.onErrorReceived) ? LeadNotes.InsertGoogleDocFile.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "InsertGoogleDocFile", { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID,DocumentID : oObject.DocumentID}, LeadNotes.InsertGoogleDocFile.Serialize || {});
    },
	InsertLeadNote : function(LeadID, SalesRepresentativeID, Notes, FollowUpDate, Data, LeadNoteTypeID, Callback) {
        return LeadNotes.InsertLeadNoteObject({ LeadID : LeadID,SalesRepresentativeID : SalesRepresentativeID,Notes : Notes,FollowUpDate : FollowUpDate,Data : Data,LeadNoteTypeID : LeadNoteTypeID}, Callback);
    },

	InsertLeadNoteObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.InsertLeadNote)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.InsertLeadNote.onValidationError))
					LeadNotes.InsertLeadNote.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "InsertLeadNote", 
					Params : { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID,Notes : oObject.Notes,FollowUpDate : oObject.FollowUpDate,Data : oObject.Data,LeadNoteTypeID : oObject.LeadNoteTypeID}, 
					Serialize : LeadNotes.InsertLeadNote.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.InsertLeadNote.onErrorReceived) ? LeadNotes.InsertLeadNote.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "InsertLeadNote", { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID,Notes : oObject.Notes,FollowUpDate : oObject.FollowUpDate,Data : oObject.Data,LeadNoteTypeID : oObject.LeadNoteTypeID}, LeadNotes.InsertLeadNote.Serialize || {});
    },
	ProcessEmailTrackingPixel : function(strID, Callback) {
        return LeadNotes.ProcessEmailTrackingPixelObject({ strID : strID}, Callback);
    },

	ProcessEmailTrackingPixelObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.ProcessEmailTrackingPixel)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.ProcessEmailTrackingPixel.onValidationError))
					LeadNotes.ProcessEmailTrackingPixel.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "ProcessEmailTrackingPixel", 
					Params : { strID : oObject.strID}, 
					Serialize : LeadNotes.ProcessEmailTrackingPixel.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.ProcessEmailTrackingPixel.onErrorReceived) ? LeadNotes.ProcessEmailTrackingPixel.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "ProcessEmailTrackingPixel", { strID : oObject.strID}, LeadNotes.ProcessEmailTrackingPixel.Serialize || {});
    },
	RemoveLeadNote : function(LeadNoteID, Callback) {
        return LeadNotes.RemoveLeadNoteObject({ LeadNoteID : LeadNoteID}, Callback);
    },

	RemoveLeadNoteObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.RemoveLeadNote)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.RemoveLeadNote.onValidationError))
					LeadNotes.RemoveLeadNote.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "RemoveLeadNote", 
					Params : { LeadNoteID : oObject.LeadNoteID}, 
					Serialize : LeadNotes.RemoveLeadNote.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.RemoveLeadNote.onErrorReceived) ? LeadNotes.RemoveLeadNote.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "RemoveLeadNote", { LeadNoteID : oObject.LeadNoteID}, LeadNotes.RemoveLeadNote.Serialize || {});
    },
	SendGoogleDocumentToBuffaly : function(rowNote, bForceRefresh, Callback) {
        return LeadNotes.SendGoogleDocumentToBuffalyObject({ rowNote : rowNote,bForceRefresh : bForceRefresh}, Callback);
    },

	SendGoogleDocumentToBuffalyObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.SendGoogleDocumentToBuffaly)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.SendGoogleDocumentToBuffaly.onValidationError))
					LeadNotes.SendGoogleDocumentToBuffaly.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "SendGoogleDocumentToBuffaly", 
					Params : { rowNote : oObject.rowNote,bForceRefresh : oObject.bForceRefresh}, 
					Serialize : LeadNotes.SendGoogleDocumentToBuffaly.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.SendGoogleDocumentToBuffaly.onErrorReceived) ? LeadNotes.SendGoogleDocumentToBuffaly.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "SendGoogleDocumentToBuffaly", { rowNote : oObject.rowNote,bForceRefresh : oObject.bForceRefresh}, LeadNotes.SendGoogleDocumentToBuffaly.Serialize || {});
    },
	UpdateLeadNote : function(LeadNoteTypeID, LeadNoteID, LeadID, SalesRepresentativeID, Notes, FollowUpDate, Data, Callback) {
        return LeadNotes.UpdateLeadNoteObject({ LeadNoteTypeID : LeadNoteTypeID,LeadNoteID : LeadNoteID,LeadID : LeadID,SalesRepresentativeID : SalesRepresentativeID,Notes : Notes,FollowUpDate : FollowUpDate,Data : Data}, Callback);
    },

	UpdateLeadNoteObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.UpdateLeadNote)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.UpdateLeadNote.onValidationError))
					LeadNotes.UpdateLeadNote.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "UpdateLeadNote", 
					Params : { LeadNoteTypeID : oObject.LeadNoteTypeID,LeadNoteID : oObject.LeadNoteID,LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID,Notes : oObject.Notes,FollowUpDate : oObject.FollowUpDate,Data : oObject.Data}, 
					Serialize : LeadNotes.UpdateLeadNote.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.UpdateLeadNote.onErrorReceived) ? LeadNotes.UpdateLeadNote.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "UpdateLeadNote", { LeadNoteTypeID : oObject.LeadNoteTypeID,LeadNoteID : oObject.LeadNoteID,LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID,Notes : oObject.Notes,FollowUpDate : oObject.FollowUpDate,Data : oObject.Data}, LeadNotes.UpdateLeadNote.Serialize || {});
    },
	UpdateLeadNoteData : function(LeadNoteID, Data, Callback) {
        return LeadNotes.UpdateLeadNoteDataObject({ LeadNoteID : LeadNoteID,Data : Data}, Callback);
    },

	UpdateLeadNoteDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesValidators.UpdateLeadNoteData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotes.UpdateLeadNoteData.onValidationError))
					LeadNotes.UpdateLeadNoteData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotes.Url, 
					Method : "UpdateLeadNoteData", 
					Params : { LeadNoteID : oObject.LeadNoteID,Data : oObject.Data}, 
					Serialize : LeadNotes.UpdateLeadNoteData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotes.UpdateLeadNoteData.onErrorReceived) ? LeadNotes.UpdateLeadNoteData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotes.Url, "UpdateLeadNoteData", { LeadNoteID : oObject.LeadNoteID,Data : oObject.Data}, LeadNotes.UpdateLeadNoteData.Serialize || {});
    }
};

var LeadNotesValidators = {
	

	CopyLeadNote : {
			LeadNoteID : LeadNotesValidatorsFields.LeadNoteID	
	},

	GetAppointments : {	
	},

	GetFollowUpByLeadID : {
			LeadID : LeadNotesValidatorsFields.LeadID	
	},

	GetFollowUps : {
			SalesRepresentativeID : LeadNotesValidatorsFields.SalesRepresentativeID	
	},

	GetFollowUps2 : {
			SalesRepresentativeID : LeadNotesValidatorsFields.SalesRepresentativeID	
	},

	GetFollowUpsByTagID : {
			SalesRepresentativeID : LeadNotesValidatorsFields.SalesRepresentativeID,
			TagID : LeadNotesValidatorsFields.TagID	
	},

	GetFollowUpsByTagID2 : {
			SalesRepresentativeID : LeadNotesValidatorsFields.SalesRepresentativeID,
			TagID : LeadNotesValidatorsFields.TagID	
	},

	GetGoogleDocsFilesByLeadID : {
			LeadID : LeadNotesValidatorsFields.LeadID	
	},

	GetGoogleDocsFilesByLeadIDSync : {
			LeadID : LeadNotesValidatorsFields.LeadID	
	},

	GetGoogleDocsLeadNoteByDocumentID : {
			LeadID : LeadNotesValidatorsFields.LeadID,
			DocumentID : LeadNotesValidatorsFields.DocumentID	
	},

	GetLeadNote : {
			LeadNoteID : LeadNotesValidatorsFields.LeadNoteID	
	},

	GetLeadNotes : {	
	},

	GetLeadNotesByLeadID : {
			LeadID : LeadNotesValidatorsFields.LeadID	
	},

	GetLeadNotesByLeadNoteTypeID : {
			LeadNoteTypeID : LeadNotesValidatorsFields.LeadNoteTypeID	
	},

	InsertAppointmentGiven : {
			LeadID : LeadNotesValidatorsFields.LeadID,
			SalesRepresentativeID : LeadNotesValidatorsFields.SalesRepresentativeID,
			FollowUpDate : LeadNotesValidatorsFields.FollowUpDate,
			Notes : LeadNotesValidatorsFields.Notes,
			Data : LeadNotesValidatorsFields.Data	
	},

	InsertAppointmentSet : {
			LeadID : LeadNotesValidatorsFields.LeadID,
			SalesRepresentativeID : LeadNotesValidatorsFields.SalesRepresentativeID,
			FollowUpDate : LeadNotesValidatorsFields.FollowUpDate,
			Notes : LeadNotesValidatorsFields.Notes,
			Data : LeadNotesValidatorsFields.Data	
	},

	InsertGoogleDocFile : {
			LeadID : LeadNotesValidatorsFields.LeadID,
			SalesRepresentativeID : LeadNotesValidatorsFields.SalesRepresentativeID,
			DocumentID : LeadNotesValidatorsFields.DocumentID	
	},

	InsertLeadNote : {
			LeadID : LeadNotesValidatorsFields.LeadID,
			SalesRepresentativeID : LeadNotesValidatorsFields.SalesRepresentativeID,
			Notes : LeadNotesValidatorsFields.Notes,
			FollowUpDate : LeadNotesValidatorsFields.FollowUpDate,
			Data : LeadNotesValidatorsFields.Data,
			LeadNoteTypeID : LeadNotesValidatorsFields.LeadNoteTypeID	
	},

	ProcessEmailTrackingPixel : {
			strID : LeadNotesValidatorsFields.strID	
	},

	RemoveLeadNote : {
			LeadNoteID : LeadNotesValidatorsFields.LeadNoteID	
	},

	SendGoogleDocumentToBuffaly : {
			rowNote : LeadNotesValidatorsFields.rowNote,
			bForceRefresh : LeadNotesValidatorsFields.bForceRefresh	
	},

	UpdateLeadNote : {
			LeadNoteTypeID : LeadNotesValidatorsFields.LeadNoteTypeID,
			LeadNoteID : LeadNotesValidatorsFields.LeadNoteID,
			LeadID : LeadNotesValidatorsFields.LeadID,
			SalesRepresentativeID : LeadNotesValidatorsFields.SalesRepresentativeID,
			Notes : LeadNotesValidatorsFields.Notes,
			FollowUpDate : LeadNotesValidatorsFields.FollowUpDate,
			Data : LeadNotesValidatorsFields.Data	
	},

	UpdateLeadNoteData : {
			LeadNoteID : LeadNotesValidatorsFields.LeadNoteID,
			Data : LeadNotesValidatorsFields.Data	
	}
};

    