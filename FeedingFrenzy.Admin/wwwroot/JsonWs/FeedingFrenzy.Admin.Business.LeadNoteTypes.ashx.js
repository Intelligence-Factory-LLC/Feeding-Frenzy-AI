
    	    	
var LeadNoteTypesValidatorsFields = {
	
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		LeadNoteTypeID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Lead Note Type ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		LeadNoteTypeName : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Lead Note Type Name. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) }	
}
			
var LeadNoteTypes = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.LeadNoteTypes.ashx"

	,
	CopyLeadNoteType : function(LeadNoteTypeID, Callback) {
        return LeadNoteTypes.CopyLeadNoteTypeObject({ LeadNoteTypeID : LeadNoteTypeID}, Callback);
    },

	CopyLeadNoteTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesValidators.CopyLeadNoteType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypes.CopyLeadNoteType.onValidationError))
					LeadNoteTypes.CopyLeadNoteType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypes.Url, 
					Method : "CopyLeadNoteType", 
					Params : { LeadNoteTypeID : oObject.LeadNoteTypeID}, 
					Serialize : LeadNoteTypes.CopyLeadNoteType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypes.CopyLeadNoteType.onErrorReceived) ? LeadNoteTypes.CopyLeadNoteType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypes.Url, "CopyLeadNoteType", { LeadNoteTypeID : oObject.LeadNoteTypeID}, LeadNoteTypes.CopyLeadNoteType.Serialize || {});
    },
	GetLeadNoteType : function(LeadNoteTypeID, Callback) {
        return LeadNoteTypes.GetLeadNoteTypeObject({ LeadNoteTypeID : LeadNoteTypeID}, Callback);
    },

	GetLeadNoteTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesValidators.GetLeadNoteType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypes.GetLeadNoteType.onValidationError))
					LeadNoteTypes.GetLeadNoteType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypes.Url, 
					Method : "GetLeadNoteType", 
					Params : { LeadNoteTypeID : oObject.LeadNoteTypeID}, 
					Serialize : LeadNoteTypes.GetLeadNoteType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypes.GetLeadNoteType.onErrorReceived) ? LeadNoteTypes.GetLeadNoteType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypes.Url, "GetLeadNoteType", { LeadNoteTypeID : oObject.LeadNoteTypeID}, LeadNoteTypes.GetLeadNoteType.Serialize || {});
    },
	GetLeadNoteTypeByLeadNoteTypeName : function(LeadNoteTypeName, Callback) {
        return LeadNoteTypes.GetLeadNoteTypeByLeadNoteTypeNameObject({ LeadNoteTypeName : LeadNoteTypeName}, Callback);
    },

	GetLeadNoteTypeByLeadNoteTypeNameObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesValidators.GetLeadNoteTypeByLeadNoteTypeName)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypes.GetLeadNoteTypeByLeadNoteTypeName.onValidationError))
					LeadNoteTypes.GetLeadNoteTypeByLeadNoteTypeName.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypes.Url, 
					Method : "GetLeadNoteTypeByLeadNoteTypeName", 
					Params : { LeadNoteTypeName : oObject.LeadNoteTypeName}, 
					Serialize : LeadNoteTypes.GetLeadNoteTypeByLeadNoteTypeName.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypes.GetLeadNoteTypeByLeadNoteTypeName.onErrorReceived) ? LeadNoteTypes.GetLeadNoteTypeByLeadNoteTypeName.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypes.Url, "GetLeadNoteTypeByLeadNoteTypeName", { LeadNoteTypeName : oObject.LeadNoteTypeName}, LeadNoteTypes.GetLeadNoteTypeByLeadNoteTypeName.Serialize || {});
    },
	GetLeadNoteTypes : function(Callback) {
        return LeadNoteTypes.GetLeadNoteTypesObject({ }, Callback);
    },

	GetLeadNoteTypesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesValidators.GetLeadNoteTypes)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypes.GetLeadNoteTypes.onValidationError))
					LeadNoteTypes.GetLeadNoteTypes.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypes.Url, 
					Method : "GetLeadNoteTypes", 
					Params : { }, 
					Serialize : LeadNoteTypes.GetLeadNoteTypes.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypes.GetLeadNoteTypes.onErrorReceived) ? LeadNoteTypes.GetLeadNoteTypes.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypes.Url, "GetLeadNoteTypes", { }, LeadNoteTypes.GetLeadNoteTypes.Serialize || {});
    },
	InsertLeadNoteType : function(LeadNoteTypeName, Data, Callback) {
        return LeadNoteTypes.InsertLeadNoteTypeObject({ LeadNoteTypeName : LeadNoteTypeName,Data : Data}, Callback);
    },

	InsertLeadNoteTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesValidators.InsertLeadNoteType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypes.InsertLeadNoteType.onValidationError))
					LeadNoteTypes.InsertLeadNoteType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypes.Url, 
					Method : "InsertLeadNoteType", 
					Params : { LeadNoteTypeName : oObject.LeadNoteTypeName,Data : oObject.Data}, 
					Serialize : LeadNoteTypes.InsertLeadNoteType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypes.InsertLeadNoteType.onErrorReceived) ? LeadNoteTypes.InsertLeadNoteType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypes.Url, "InsertLeadNoteType", { LeadNoteTypeName : oObject.LeadNoteTypeName,Data : oObject.Data}, LeadNoteTypes.InsertLeadNoteType.Serialize || {});
    },
	RemoveLeadNoteType : function(LeadNoteTypeID, Callback) {
        return LeadNoteTypes.RemoveLeadNoteTypeObject({ LeadNoteTypeID : LeadNoteTypeID}, Callback);
    },

	RemoveLeadNoteTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesValidators.RemoveLeadNoteType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypes.RemoveLeadNoteType.onValidationError))
					LeadNoteTypes.RemoveLeadNoteType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypes.Url, 
					Method : "RemoveLeadNoteType", 
					Params : { LeadNoteTypeID : oObject.LeadNoteTypeID}, 
					Serialize : LeadNoteTypes.RemoveLeadNoteType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypes.RemoveLeadNoteType.onErrorReceived) ? LeadNoteTypes.RemoveLeadNoteType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypes.Url, "RemoveLeadNoteType", { LeadNoteTypeID : oObject.LeadNoteTypeID}, LeadNoteTypes.RemoveLeadNoteType.Serialize || {});
    },
	UpdateLeadNoteType : function(LeadNoteTypeID, LeadNoteTypeName, Data, Callback) {
        return LeadNoteTypes.UpdateLeadNoteTypeObject({ LeadNoteTypeID : LeadNoteTypeID,LeadNoteTypeName : LeadNoteTypeName,Data : Data}, Callback);
    },

	UpdateLeadNoteTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesValidators.UpdateLeadNoteType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypes.UpdateLeadNoteType.onValidationError))
					LeadNoteTypes.UpdateLeadNoteType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypes.Url, 
					Method : "UpdateLeadNoteType", 
					Params : { LeadNoteTypeID : oObject.LeadNoteTypeID,LeadNoteTypeName : oObject.LeadNoteTypeName,Data : oObject.Data}, 
					Serialize : LeadNoteTypes.UpdateLeadNoteType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypes.UpdateLeadNoteType.onErrorReceived) ? LeadNoteTypes.UpdateLeadNoteType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypes.Url, "UpdateLeadNoteType", { LeadNoteTypeID : oObject.LeadNoteTypeID,LeadNoteTypeName : oObject.LeadNoteTypeName,Data : oObject.Data}, LeadNoteTypes.UpdateLeadNoteType.Serialize || {});
    },
	UpdateLeadNoteTypeData : function(LeadNoteTypeID, Data, Callback) {
        return LeadNoteTypes.UpdateLeadNoteTypeDataObject({ LeadNoteTypeID : LeadNoteTypeID,Data : Data}, Callback);
    },

	UpdateLeadNoteTypeDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesValidators.UpdateLeadNoteTypeData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypes.UpdateLeadNoteTypeData.onValidationError))
					LeadNoteTypes.UpdateLeadNoteTypeData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypes.Url, 
					Method : "UpdateLeadNoteTypeData", 
					Params : { LeadNoteTypeID : oObject.LeadNoteTypeID,Data : oObject.Data}, 
					Serialize : LeadNoteTypes.UpdateLeadNoteTypeData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypes.UpdateLeadNoteTypeData.onErrorReceived) ? LeadNoteTypes.UpdateLeadNoteTypeData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypes.Url, "UpdateLeadNoteTypeData", { LeadNoteTypeID : oObject.LeadNoteTypeID,Data : oObject.Data}, LeadNoteTypes.UpdateLeadNoteTypeData.Serialize || {});
    }
};

var LeadNoteTypesValidators = {
	

	CopyLeadNoteType : {
			LeadNoteTypeID : LeadNoteTypesValidatorsFields.LeadNoteTypeID	
	},

	GetLeadNoteType : {
			LeadNoteTypeID : LeadNoteTypesValidatorsFields.LeadNoteTypeID	
	},

	GetLeadNoteTypeByLeadNoteTypeName : {
			LeadNoteTypeName : LeadNoteTypesValidatorsFields.LeadNoteTypeName	
	},

	GetLeadNoteTypes : {	
	},

	InsertLeadNoteType : {
			LeadNoteTypeName : LeadNoteTypesValidatorsFields.LeadNoteTypeName,
			Data : LeadNoteTypesValidatorsFields.Data	
	},

	RemoveLeadNoteType : {
			LeadNoteTypeID : LeadNoteTypesValidatorsFields.LeadNoteTypeID	
	},

	UpdateLeadNoteType : {
			LeadNoteTypeID : LeadNoteTypesValidatorsFields.LeadNoteTypeID,
			LeadNoteTypeName : LeadNoteTypesValidatorsFields.LeadNoteTypeName,
			Data : LeadNoteTypesValidatorsFields.Data	
	},

	UpdateLeadNoteTypeData : {
			LeadNoteTypeID : LeadNoteTypesValidatorsFields.LeadNoteTypeID,
			Data : LeadNoteTypesValidatorsFields.Data	
	}
};

    