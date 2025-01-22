
    	    	
var LeadSubStatusesValidatorsFields = {
	
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		LeadStatusID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Lead Status ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		LeadSubStatusID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Lead Sub Status ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		SubStatusName : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Sub Status Name. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) }	
}
			
var LeadSubStatuses = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.LeadSubStatuses.ashx"

	,
	CopyLeadSubStatus : function(LeadSubStatusID, Callback) {
        return LeadSubStatuses.CopyLeadSubStatusObject({ LeadSubStatusID : LeadSubStatusID}, Callback);
    },

	CopyLeadSubStatusObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesValidators.CopyLeadSubStatus)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatuses.CopyLeadSubStatus.onValidationError))
					LeadSubStatuses.CopyLeadSubStatus.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatuses.Url, 
					Method : "CopyLeadSubStatus", 
					Params : { LeadSubStatusID : oObject.LeadSubStatusID}, 
					Serialize : LeadSubStatuses.CopyLeadSubStatus.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatuses.CopyLeadSubStatus.onErrorReceived) ? LeadSubStatuses.CopyLeadSubStatus.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatuses.Url, "CopyLeadSubStatus", { LeadSubStatusID : oObject.LeadSubStatusID}, LeadSubStatuses.CopyLeadSubStatus.Serialize || {});
    },
	GetLeadSubStatus : function(LeadSubStatusID, Callback) {
        return LeadSubStatuses.GetLeadSubStatusObject({ LeadSubStatusID : LeadSubStatusID}, Callback);
    },

	GetLeadSubStatusObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesValidators.GetLeadSubStatus)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatuses.GetLeadSubStatus.onValidationError))
					LeadSubStatuses.GetLeadSubStatus.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatuses.Url, 
					Method : "GetLeadSubStatus", 
					Params : { LeadSubStatusID : oObject.LeadSubStatusID}, 
					Serialize : LeadSubStatuses.GetLeadSubStatus.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatuses.GetLeadSubStatus.onErrorReceived) ? LeadSubStatuses.GetLeadSubStatus.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatuses.Url, "GetLeadSubStatus", { LeadSubStatusID : oObject.LeadSubStatusID}, LeadSubStatuses.GetLeadSubStatus.Serialize || {});
    },
	GetLeadSubStatusBySubStatusName : function(SubStatusName, Callback) {
        return LeadSubStatuses.GetLeadSubStatusBySubStatusNameObject({ SubStatusName : SubStatusName}, Callback);
    },

	GetLeadSubStatusBySubStatusNameObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesValidators.GetLeadSubStatusBySubStatusName)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatuses.GetLeadSubStatusBySubStatusName.onValidationError))
					LeadSubStatuses.GetLeadSubStatusBySubStatusName.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatuses.Url, 
					Method : "GetLeadSubStatusBySubStatusName", 
					Params : { SubStatusName : oObject.SubStatusName}, 
					Serialize : LeadSubStatuses.GetLeadSubStatusBySubStatusName.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatuses.GetLeadSubStatusBySubStatusName.onErrorReceived) ? LeadSubStatuses.GetLeadSubStatusBySubStatusName.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatuses.Url, "GetLeadSubStatusBySubStatusName", { SubStatusName : oObject.SubStatusName}, LeadSubStatuses.GetLeadSubStatusBySubStatusName.Serialize || {});
    },
	GetLeadSubStatuses : function(Callback) {
        return LeadSubStatuses.GetLeadSubStatusesObject({ }, Callback);
    },

	GetLeadSubStatusesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesValidators.GetLeadSubStatuses)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatuses.GetLeadSubStatuses.onValidationError))
					LeadSubStatuses.GetLeadSubStatuses.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatuses.Url, 
					Method : "GetLeadSubStatuses", 
					Params : { }, 
					Serialize : LeadSubStatuses.GetLeadSubStatuses.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatuses.GetLeadSubStatuses.onErrorReceived) ? LeadSubStatuses.GetLeadSubStatuses.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatuses.Url, "GetLeadSubStatuses", { }, LeadSubStatuses.GetLeadSubStatuses.Serialize || {});
    },
	GetLeadSubStatusesByLeadStatusID : function(LeadStatusID, Callback) {
        return LeadSubStatuses.GetLeadSubStatusesByLeadStatusIDObject({ LeadStatusID : LeadStatusID}, Callback);
    },

	GetLeadSubStatusesByLeadStatusIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesValidators.GetLeadSubStatusesByLeadStatusID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatuses.GetLeadSubStatusesByLeadStatusID.onValidationError))
					LeadSubStatuses.GetLeadSubStatusesByLeadStatusID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatuses.Url, 
					Method : "GetLeadSubStatusesByLeadStatusID", 
					Params : { LeadStatusID : oObject.LeadStatusID}, 
					Serialize : LeadSubStatuses.GetLeadSubStatusesByLeadStatusID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatuses.GetLeadSubStatusesByLeadStatusID.onErrorReceived) ? LeadSubStatuses.GetLeadSubStatusesByLeadStatusID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatuses.Url, "GetLeadSubStatusesByLeadStatusID", { LeadStatusID : oObject.LeadStatusID}, LeadSubStatuses.GetLeadSubStatusesByLeadStatusID.Serialize || {});
    },
	InsertLeadSubStatus : function(LeadStatusID, SubStatusName, Data, Callback) {
        return LeadSubStatuses.InsertLeadSubStatusObject({ LeadStatusID : LeadStatusID,SubStatusName : SubStatusName,Data : Data}, Callback);
    },

	InsertLeadSubStatusObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesValidators.InsertLeadSubStatus)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatuses.InsertLeadSubStatus.onValidationError))
					LeadSubStatuses.InsertLeadSubStatus.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatuses.Url, 
					Method : "InsertLeadSubStatus", 
					Params : { LeadStatusID : oObject.LeadStatusID,SubStatusName : oObject.SubStatusName,Data : oObject.Data}, 
					Serialize : LeadSubStatuses.InsertLeadSubStatus.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatuses.InsertLeadSubStatus.onErrorReceived) ? LeadSubStatuses.InsertLeadSubStatus.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatuses.Url, "InsertLeadSubStatus", { LeadStatusID : oObject.LeadStatusID,SubStatusName : oObject.SubStatusName,Data : oObject.Data}, LeadSubStatuses.InsertLeadSubStatus.Serialize || {});
    },
	RemoveLeadSubStatus : function(LeadSubStatusID, Callback) {
        return LeadSubStatuses.RemoveLeadSubStatusObject({ LeadSubStatusID : LeadSubStatusID}, Callback);
    },

	RemoveLeadSubStatusObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesValidators.RemoveLeadSubStatus)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatuses.RemoveLeadSubStatus.onValidationError))
					LeadSubStatuses.RemoveLeadSubStatus.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatuses.Url, 
					Method : "RemoveLeadSubStatus", 
					Params : { LeadSubStatusID : oObject.LeadSubStatusID}, 
					Serialize : LeadSubStatuses.RemoveLeadSubStatus.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatuses.RemoveLeadSubStatus.onErrorReceived) ? LeadSubStatuses.RemoveLeadSubStatus.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatuses.Url, "RemoveLeadSubStatus", { LeadSubStatusID : oObject.LeadSubStatusID}, LeadSubStatuses.RemoveLeadSubStatus.Serialize || {});
    },
	UpdateLeadSubStatus : function(LeadStatusID, SubStatusName, Data, LeadSubStatusID, Callback) {
        return LeadSubStatuses.UpdateLeadSubStatusObject({ LeadStatusID : LeadStatusID,SubStatusName : SubStatusName,Data : Data,LeadSubStatusID : LeadSubStatusID}, Callback);
    },

	UpdateLeadSubStatusObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesValidators.UpdateLeadSubStatus)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatuses.UpdateLeadSubStatus.onValidationError))
					LeadSubStatuses.UpdateLeadSubStatus.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatuses.Url, 
					Method : "UpdateLeadSubStatus", 
					Params : { LeadStatusID : oObject.LeadStatusID,SubStatusName : oObject.SubStatusName,Data : oObject.Data,LeadSubStatusID : oObject.LeadSubStatusID}, 
					Serialize : LeadSubStatuses.UpdateLeadSubStatus.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatuses.UpdateLeadSubStatus.onErrorReceived) ? LeadSubStatuses.UpdateLeadSubStatus.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatuses.Url, "UpdateLeadSubStatus", { LeadStatusID : oObject.LeadStatusID,SubStatusName : oObject.SubStatusName,Data : oObject.Data,LeadSubStatusID : oObject.LeadSubStatusID}, LeadSubStatuses.UpdateLeadSubStatus.Serialize || {});
    },
	UpdateLeadSubStatusData : function(LeadSubStatusID, Data, Callback) {
        return LeadSubStatuses.UpdateLeadSubStatusDataObject({ LeadSubStatusID : LeadSubStatusID,Data : Data}, Callback);
    },

	UpdateLeadSubStatusDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesValidators.UpdateLeadSubStatusData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatuses.UpdateLeadSubStatusData.onValidationError))
					LeadSubStatuses.UpdateLeadSubStatusData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatuses.Url, 
					Method : "UpdateLeadSubStatusData", 
					Params : { LeadSubStatusID : oObject.LeadSubStatusID,Data : oObject.Data}, 
					Serialize : LeadSubStatuses.UpdateLeadSubStatusData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatuses.UpdateLeadSubStatusData.onErrorReceived) ? LeadSubStatuses.UpdateLeadSubStatusData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatuses.Url, "UpdateLeadSubStatusData", { LeadSubStatusID : oObject.LeadSubStatusID,Data : oObject.Data}, LeadSubStatuses.UpdateLeadSubStatusData.Serialize || {});
    }
};

var LeadSubStatusesValidators = {
	

	CopyLeadSubStatus : {
			LeadSubStatusID : LeadSubStatusesValidatorsFields.LeadSubStatusID	
	},

	GetLeadSubStatus : {
			LeadSubStatusID : LeadSubStatusesValidatorsFields.LeadSubStatusID	
	},

	GetLeadSubStatusBySubStatusName : {
			SubStatusName : LeadSubStatusesValidatorsFields.SubStatusName	
	},

	GetLeadSubStatuses : {	
	},

	GetLeadSubStatusesByLeadStatusID : {
			LeadStatusID : LeadSubStatusesValidatorsFields.LeadStatusID	
	},

	InsertLeadSubStatus : {
			LeadStatusID : LeadSubStatusesValidatorsFields.LeadStatusID,
			SubStatusName : LeadSubStatusesValidatorsFields.SubStatusName,
			Data : LeadSubStatusesValidatorsFields.Data	
	},

	RemoveLeadSubStatus : {
			LeadSubStatusID : LeadSubStatusesValidatorsFields.LeadSubStatusID	
	},

	UpdateLeadSubStatus : {
			LeadStatusID : LeadSubStatusesValidatorsFields.LeadStatusID,
			SubStatusName : LeadSubStatusesValidatorsFields.SubStatusName,
			Data : LeadSubStatusesValidatorsFields.Data,
			LeadSubStatusID : LeadSubStatusesValidatorsFields.LeadSubStatusID	
	},

	UpdateLeadSubStatusData : {
			LeadSubStatusID : LeadSubStatusesValidatorsFields.LeadSubStatusID,
			Data : LeadSubStatusesValidatorsFields.Data	
	}
};

    