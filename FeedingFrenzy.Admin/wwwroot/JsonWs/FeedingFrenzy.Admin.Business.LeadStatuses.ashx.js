
    	    	
var LeadStatusesValidatorsFields = {
	
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		LeadStatusID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Lead Status ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		StatusName : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Status Name. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) }	
}
			
var LeadStatuses = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.LeadStatuses.ashx"

	,
	CopyLeadStatus : function(LeadStatusID, Callback) {
        return LeadStatuses.CopyLeadStatusObject({ LeadStatusID : LeadStatusID}, Callback);
    },

	CopyLeadStatusObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesValidators.CopyLeadStatus)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatuses.CopyLeadStatus.onValidationError))
					LeadStatuses.CopyLeadStatus.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatuses.Url, 
					Method : "CopyLeadStatus", 
					Params : { LeadStatusID : oObject.LeadStatusID}, 
					Serialize : LeadStatuses.CopyLeadStatus.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatuses.CopyLeadStatus.onErrorReceived) ? LeadStatuses.CopyLeadStatus.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatuses.Url, "CopyLeadStatus", { LeadStatusID : oObject.LeadStatusID}, LeadStatuses.CopyLeadStatus.Serialize || {});
    },
	GetLeadStatus : function(LeadStatusID, Callback) {
        return LeadStatuses.GetLeadStatusObject({ LeadStatusID : LeadStatusID}, Callback);
    },

	GetLeadStatusObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesValidators.GetLeadStatus)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatuses.GetLeadStatus.onValidationError))
					LeadStatuses.GetLeadStatus.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatuses.Url, 
					Method : "GetLeadStatus", 
					Params : { LeadStatusID : oObject.LeadStatusID}, 
					Serialize : LeadStatuses.GetLeadStatus.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatuses.GetLeadStatus.onErrorReceived) ? LeadStatuses.GetLeadStatus.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatuses.Url, "GetLeadStatus", { LeadStatusID : oObject.LeadStatusID}, LeadStatuses.GetLeadStatus.Serialize || {});
    },
	GetLeadStatusByStatusName : function(StatusName, Callback) {
        return LeadStatuses.GetLeadStatusByStatusNameObject({ StatusName : StatusName}, Callback);
    },

	GetLeadStatusByStatusNameObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesValidators.GetLeadStatusByStatusName)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatuses.GetLeadStatusByStatusName.onValidationError))
					LeadStatuses.GetLeadStatusByStatusName.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatuses.Url, 
					Method : "GetLeadStatusByStatusName", 
					Params : { StatusName : oObject.StatusName}, 
					Serialize : LeadStatuses.GetLeadStatusByStatusName.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatuses.GetLeadStatusByStatusName.onErrorReceived) ? LeadStatuses.GetLeadStatusByStatusName.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatuses.Url, "GetLeadStatusByStatusName", { StatusName : oObject.StatusName}, LeadStatuses.GetLeadStatusByStatusName.Serialize || {});
    },
	GetLeadStatuses : function(Callback) {
        return LeadStatuses.GetLeadStatusesObject({ }, Callback);
    },

	GetLeadStatusesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesValidators.GetLeadStatuses)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatuses.GetLeadStatuses.onValidationError))
					LeadStatuses.GetLeadStatuses.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatuses.Url, 
					Method : "GetLeadStatuses", 
					Params : { }, 
					Serialize : LeadStatuses.GetLeadStatuses.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatuses.GetLeadStatuses.onErrorReceived) ? LeadStatuses.GetLeadStatuses.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatuses.Url, "GetLeadStatuses", { }, LeadStatuses.GetLeadStatuses.Serialize || {});
    },
	InsertLeadStatus : function(StatusName, Data, Callback) {
        return LeadStatuses.InsertLeadStatusObject({ StatusName : StatusName,Data : Data}, Callback);
    },

	InsertLeadStatusObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesValidators.InsertLeadStatus)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatuses.InsertLeadStatus.onValidationError))
					LeadStatuses.InsertLeadStatus.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatuses.Url, 
					Method : "InsertLeadStatus", 
					Params : { StatusName : oObject.StatusName,Data : oObject.Data}, 
					Serialize : LeadStatuses.InsertLeadStatus.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatuses.InsertLeadStatus.onErrorReceived) ? LeadStatuses.InsertLeadStatus.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatuses.Url, "InsertLeadStatus", { StatusName : oObject.StatusName,Data : oObject.Data}, LeadStatuses.InsertLeadStatus.Serialize || {});
    },
	RemoveLeadStatus : function(LeadStatusID, Callback) {
        return LeadStatuses.RemoveLeadStatusObject({ LeadStatusID : LeadStatusID}, Callback);
    },

	RemoveLeadStatusObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesValidators.RemoveLeadStatus)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatuses.RemoveLeadStatus.onValidationError))
					LeadStatuses.RemoveLeadStatus.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatuses.Url, 
					Method : "RemoveLeadStatus", 
					Params : { LeadStatusID : oObject.LeadStatusID}, 
					Serialize : LeadStatuses.RemoveLeadStatus.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatuses.RemoveLeadStatus.onErrorReceived) ? LeadStatuses.RemoveLeadStatus.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatuses.Url, "RemoveLeadStatus", { LeadStatusID : oObject.LeadStatusID}, LeadStatuses.RemoveLeadStatus.Serialize || {});
    },
	UpdateLeadStatus : function(LeadStatusID, StatusName, Data, Callback) {
        return LeadStatuses.UpdateLeadStatusObject({ LeadStatusID : LeadStatusID,StatusName : StatusName,Data : Data}, Callback);
    },

	UpdateLeadStatusObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesValidators.UpdateLeadStatus)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatuses.UpdateLeadStatus.onValidationError))
					LeadStatuses.UpdateLeadStatus.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatuses.Url, 
					Method : "UpdateLeadStatus", 
					Params : { LeadStatusID : oObject.LeadStatusID,StatusName : oObject.StatusName,Data : oObject.Data}, 
					Serialize : LeadStatuses.UpdateLeadStatus.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatuses.UpdateLeadStatus.onErrorReceived) ? LeadStatuses.UpdateLeadStatus.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatuses.Url, "UpdateLeadStatus", { LeadStatusID : oObject.LeadStatusID,StatusName : oObject.StatusName,Data : oObject.Data}, LeadStatuses.UpdateLeadStatus.Serialize || {});
    },
	UpdateLeadStatusData : function(LeadStatusID, Data, Callback) {
        return LeadStatuses.UpdateLeadStatusDataObject({ LeadStatusID : LeadStatusID,Data : Data}, Callback);
    },

	UpdateLeadStatusDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesValidators.UpdateLeadStatusData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatuses.UpdateLeadStatusData.onValidationError))
					LeadStatuses.UpdateLeadStatusData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatuses.Url, 
					Method : "UpdateLeadStatusData", 
					Params : { LeadStatusID : oObject.LeadStatusID,Data : oObject.Data}, 
					Serialize : LeadStatuses.UpdateLeadStatusData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatuses.UpdateLeadStatusData.onErrorReceived) ? LeadStatuses.UpdateLeadStatusData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatuses.Url, "UpdateLeadStatusData", { LeadStatusID : oObject.LeadStatusID,Data : oObject.Data}, LeadStatuses.UpdateLeadStatusData.Serialize || {});
    }
};

var LeadStatusesValidators = {
	

	CopyLeadStatus : {
			LeadStatusID : LeadStatusesValidatorsFields.LeadStatusID	
	},

	GetLeadStatus : {
			LeadStatusID : LeadStatusesValidatorsFields.LeadStatusID	
	},

	GetLeadStatusByStatusName : {
			StatusName : LeadStatusesValidatorsFields.StatusName	
	},

	GetLeadStatuses : {	
	},

	InsertLeadStatus : {
			StatusName : LeadStatusesValidatorsFields.StatusName,
			Data : LeadStatusesValidatorsFields.Data	
	},

	RemoveLeadStatus : {
			LeadStatusID : LeadStatusesValidatorsFields.LeadStatusID	
	},

	UpdateLeadStatus : {
			LeadStatusID : LeadStatusesValidatorsFields.LeadStatusID,
			StatusName : LeadStatusesValidatorsFields.StatusName,
			Data : LeadStatusesValidatorsFields.Data	
	},

	UpdateLeadStatusData : {
			LeadStatusID : LeadStatusesValidatorsFields.LeadStatusID,
			Data : LeadStatusesValidatorsFields.Data	
	}
};

    