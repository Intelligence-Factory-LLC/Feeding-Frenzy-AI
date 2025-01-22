
    	    	
var LeadContactsValidatorsFields = {
	
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		Email : {Validators : [Validators.Email], InvalidMessage: "Invalid Email. " +   ValidatorDescriptions.Email() },
		LeadContactID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Lead Contact ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		LeadID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid LeadID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		Name : {Validators : [Validators.String], InvalidMessage: "Invalid Name. " +   ValidatorDescriptions.Length(1, 255) },
		Phone : {Validators : [Validators.Phone], InvalidMessage: "Invalid Phone. " +   ValidatorDescriptions.Phone() },
		Title : {Validators : [Validators.String], InvalidMessage: "Invalid Title. " +   ValidatorDescriptions.Length(1, 255) }	
}
			
var LeadContacts = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.LeadContacts.ashx"

	,
	CopyLeadContact : function(LeadContactID, Callback) {
        return LeadContacts.CopyLeadContactObject({ LeadContactID : LeadContactID}, Callback);
    },

	CopyLeadContactObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsValidators.CopyLeadContact)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContacts.CopyLeadContact.onValidationError))
					LeadContacts.CopyLeadContact.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContacts.Url, 
					Method : "CopyLeadContact", 
					Params : { LeadContactID : oObject.LeadContactID}, 
					Serialize : LeadContacts.CopyLeadContact.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContacts.CopyLeadContact.onErrorReceived) ? LeadContacts.CopyLeadContact.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContacts.Url, "CopyLeadContact", { LeadContactID : oObject.LeadContactID}, LeadContacts.CopyLeadContact.Serialize || {});
    },
	GetLeadContact : function(LeadContactID, Callback) {
        return LeadContacts.GetLeadContactObject({ LeadContactID : LeadContactID}, Callback);
    },

	GetLeadContactObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsValidators.GetLeadContact)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContacts.GetLeadContact.onValidationError))
					LeadContacts.GetLeadContact.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContacts.Url, 
					Method : "GetLeadContact", 
					Params : { LeadContactID : oObject.LeadContactID}, 
					Serialize : LeadContacts.GetLeadContact.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContacts.GetLeadContact.onErrorReceived) ? LeadContacts.GetLeadContact.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContacts.Url, "GetLeadContact", { LeadContactID : oObject.LeadContactID}, LeadContacts.GetLeadContact.Serialize || {});
    },
	GetLeadContacts : function(Callback) {
        return LeadContacts.GetLeadContactsObject({ }, Callback);
    },

	GetLeadContactsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsValidators.GetLeadContacts)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContacts.GetLeadContacts.onValidationError))
					LeadContacts.GetLeadContacts.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContacts.Url, 
					Method : "GetLeadContacts", 
					Params : { }, 
					Serialize : LeadContacts.GetLeadContacts.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContacts.GetLeadContacts.onErrorReceived) ? LeadContacts.GetLeadContacts.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContacts.Url, "GetLeadContacts", { }, LeadContacts.GetLeadContacts.Serialize || {});
    },
	GetLeadContactsByLeadID : function(LeadID, Callback) {
        return LeadContacts.GetLeadContactsByLeadIDObject({ LeadID : LeadID}, Callback);
    },

	GetLeadContactsByLeadIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsValidators.GetLeadContactsByLeadID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContacts.GetLeadContactsByLeadID.onValidationError))
					LeadContacts.GetLeadContactsByLeadID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContacts.Url, 
					Method : "GetLeadContactsByLeadID", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : LeadContacts.GetLeadContactsByLeadID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContacts.GetLeadContactsByLeadID.onErrorReceived) ? LeadContacts.GetLeadContactsByLeadID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContacts.Url, "GetLeadContactsByLeadID", { LeadID : oObject.LeadID}, LeadContacts.GetLeadContactsByLeadID.Serialize || {});
    },
	InsertLeadContact : function(LeadID, Name, Title, Phone, Email, Data, Callback) {
        return LeadContacts.InsertLeadContactObject({ LeadID : LeadID,Name : Name,Title : Title,Phone : Phone,Email : Email,Data : Data}, Callback);
    },

	InsertLeadContactObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsValidators.InsertLeadContact)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContacts.InsertLeadContact.onValidationError))
					LeadContacts.InsertLeadContact.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContacts.Url, 
					Method : "InsertLeadContact", 
					Params : { LeadID : oObject.LeadID,Name : oObject.Name,Title : oObject.Title,Phone : oObject.Phone,Email : oObject.Email,Data : oObject.Data}, 
					Serialize : LeadContacts.InsertLeadContact.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContacts.InsertLeadContact.onErrorReceived) ? LeadContacts.InsertLeadContact.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContacts.Url, "InsertLeadContact", { LeadID : oObject.LeadID,Name : oObject.Name,Title : oObject.Title,Phone : oObject.Phone,Email : oObject.Email,Data : oObject.Data}, LeadContacts.InsertLeadContact.Serialize || {});
    },
	RemoveLeadContact : function(LeadContactID, Callback) {
        return LeadContacts.RemoveLeadContactObject({ LeadContactID : LeadContactID}, Callback);
    },

	RemoveLeadContactObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsValidators.RemoveLeadContact)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContacts.RemoveLeadContact.onValidationError))
					LeadContacts.RemoveLeadContact.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContacts.Url, 
					Method : "RemoveLeadContact", 
					Params : { LeadContactID : oObject.LeadContactID}, 
					Serialize : LeadContacts.RemoveLeadContact.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContacts.RemoveLeadContact.onErrorReceived) ? LeadContacts.RemoveLeadContact.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContacts.Url, "RemoveLeadContact", { LeadContactID : oObject.LeadContactID}, LeadContacts.RemoveLeadContact.Serialize || {});
    },
	UpdateLeadContact : function(LeadContactID, LeadID, Name, Title, Phone, Email, Data, Callback) {
        return LeadContacts.UpdateLeadContactObject({ LeadContactID : LeadContactID,LeadID : LeadID,Name : Name,Title : Title,Phone : Phone,Email : Email,Data : Data}, Callback);
    },

	UpdateLeadContactObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsValidators.UpdateLeadContact)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContacts.UpdateLeadContact.onValidationError))
					LeadContacts.UpdateLeadContact.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContacts.Url, 
					Method : "UpdateLeadContact", 
					Params : { LeadContactID : oObject.LeadContactID,LeadID : oObject.LeadID,Name : oObject.Name,Title : oObject.Title,Phone : oObject.Phone,Email : oObject.Email,Data : oObject.Data}, 
					Serialize : LeadContacts.UpdateLeadContact.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContacts.UpdateLeadContact.onErrorReceived) ? LeadContacts.UpdateLeadContact.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContacts.Url, "UpdateLeadContact", { LeadContactID : oObject.LeadContactID,LeadID : oObject.LeadID,Name : oObject.Name,Title : oObject.Title,Phone : oObject.Phone,Email : oObject.Email,Data : oObject.Data}, LeadContacts.UpdateLeadContact.Serialize || {});
    },
	UpdateLeadContactData : function(LeadContactID, Data, Callback) {
        return LeadContacts.UpdateLeadContactDataObject({ LeadContactID : LeadContactID,Data : Data}, Callback);
    },

	UpdateLeadContactDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsValidators.UpdateLeadContactData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContacts.UpdateLeadContactData.onValidationError))
					LeadContacts.UpdateLeadContactData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContacts.Url, 
					Method : "UpdateLeadContactData", 
					Params : { LeadContactID : oObject.LeadContactID,Data : oObject.Data}, 
					Serialize : LeadContacts.UpdateLeadContactData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContacts.UpdateLeadContactData.onErrorReceived) ? LeadContacts.UpdateLeadContactData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContacts.Url, "UpdateLeadContactData", { LeadContactID : oObject.LeadContactID,Data : oObject.Data}, LeadContacts.UpdateLeadContactData.Serialize || {});
    }
};

var LeadContactsValidators = {
	

	CopyLeadContact : {
			LeadContactID : LeadContactsValidatorsFields.LeadContactID	
	},

	GetLeadContact : {
			LeadContactID : LeadContactsValidatorsFields.LeadContactID	
	},

	GetLeadContacts : {	
	},

	GetLeadContactsByLeadID : {
			LeadID : LeadContactsValidatorsFields.LeadID	
	},

	InsertLeadContact : {
			LeadID : LeadContactsValidatorsFields.LeadID,
			Name : LeadContactsValidatorsFields.Name,
			Title : LeadContactsValidatorsFields.Title,
			Phone : LeadContactsValidatorsFields.Phone,
			Email : LeadContactsValidatorsFields.Email,
			Data : LeadContactsValidatorsFields.Data	
	},

	RemoveLeadContact : {
			LeadContactID : LeadContactsValidatorsFields.LeadContactID	
	},

	UpdateLeadContact : {
			LeadContactID : LeadContactsValidatorsFields.LeadContactID,
			LeadID : LeadContactsValidatorsFields.LeadID,
			Name : LeadContactsValidatorsFields.Name,
			Title : LeadContactsValidatorsFields.Title,
			Phone : LeadContactsValidatorsFields.Phone,
			Email : LeadContactsValidatorsFields.Email,
			Data : LeadContactsValidatorsFields.Data	
	},

	UpdateLeadContactData : {
			LeadContactID : LeadContactsValidatorsFields.LeadContactID,
			Data : LeadContactsValidatorsFields.Data	
	}
};

    