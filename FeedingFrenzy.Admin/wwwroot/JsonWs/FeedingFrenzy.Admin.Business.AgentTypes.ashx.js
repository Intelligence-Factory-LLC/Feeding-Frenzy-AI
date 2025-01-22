
    	    	
var AgentTypesValidatorsFields = {
	
		AgentTypeID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Agent Type ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		AgentTypeName : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Agent Type Name. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) }	
}
			
var AgentTypes = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.AgentTypes.ashx"

	,
	CopyAgentType : function(AgentTypeID, Callback) {
        return AgentTypes.CopyAgentTypeObject({ AgentTypeID : AgentTypeID}, Callback);
    },

	CopyAgentTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesValidators.CopyAgentType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypes.CopyAgentType.onValidationError))
					AgentTypes.CopyAgentType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypes.Url, 
					Method : "CopyAgentType", 
					Params : { AgentTypeID : oObject.AgentTypeID}, 
					Serialize : AgentTypes.CopyAgentType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypes.CopyAgentType.onErrorReceived) ? AgentTypes.CopyAgentType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypes.Url, "CopyAgentType", { AgentTypeID : oObject.AgentTypeID}, AgentTypes.CopyAgentType.Serialize || {});
    },
	GetAgentType : function(AgentTypeID, Callback) {
        return AgentTypes.GetAgentTypeObject({ AgentTypeID : AgentTypeID}, Callback);
    },

	GetAgentTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesValidators.GetAgentType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypes.GetAgentType.onValidationError))
					AgentTypes.GetAgentType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypes.Url, 
					Method : "GetAgentType", 
					Params : { AgentTypeID : oObject.AgentTypeID}, 
					Serialize : AgentTypes.GetAgentType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypes.GetAgentType.onErrorReceived) ? AgentTypes.GetAgentType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypes.Url, "GetAgentType", { AgentTypeID : oObject.AgentTypeID}, AgentTypes.GetAgentType.Serialize || {});
    },
	GetAgentTypeByAgentTypeName : function(AgentTypeName, Callback) {
        return AgentTypes.GetAgentTypeByAgentTypeNameObject({ AgentTypeName : AgentTypeName}, Callback);
    },

	GetAgentTypeByAgentTypeNameObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesValidators.GetAgentTypeByAgentTypeName)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypes.GetAgentTypeByAgentTypeName.onValidationError))
					AgentTypes.GetAgentTypeByAgentTypeName.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypes.Url, 
					Method : "GetAgentTypeByAgentTypeName", 
					Params : { AgentTypeName : oObject.AgentTypeName}, 
					Serialize : AgentTypes.GetAgentTypeByAgentTypeName.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypes.GetAgentTypeByAgentTypeName.onErrorReceived) ? AgentTypes.GetAgentTypeByAgentTypeName.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypes.Url, "GetAgentTypeByAgentTypeName", { AgentTypeName : oObject.AgentTypeName}, AgentTypes.GetAgentTypeByAgentTypeName.Serialize || {});
    },
	GetAgentTypes : function(Callback) {
        return AgentTypes.GetAgentTypesObject({ }, Callback);
    },

	GetAgentTypesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesValidators.GetAgentTypes)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypes.GetAgentTypes.onValidationError))
					AgentTypes.GetAgentTypes.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypes.Url, 
					Method : "GetAgentTypes", 
					Params : { }, 
					Serialize : AgentTypes.GetAgentTypes.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypes.GetAgentTypes.onErrorReceived) ? AgentTypes.GetAgentTypes.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypes.Url, "GetAgentTypes", { }, AgentTypes.GetAgentTypes.Serialize || {});
    },
	InsertAgentType : function(AgentTypeName, Data, Callback) {
        return AgentTypes.InsertAgentTypeObject({ AgentTypeName : AgentTypeName,Data : Data}, Callback);
    },

	InsertAgentTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesValidators.InsertAgentType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypes.InsertAgentType.onValidationError))
					AgentTypes.InsertAgentType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypes.Url, 
					Method : "InsertAgentType", 
					Params : { AgentTypeName : oObject.AgentTypeName,Data : oObject.Data}, 
					Serialize : AgentTypes.InsertAgentType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypes.InsertAgentType.onErrorReceived) ? AgentTypes.InsertAgentType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypes.Url, "InsertAgentType", { AgentTypeName : oObject.AgentTypeName,Data : oObject.Data}, AgentTypes.InsertAgentType.Serialize || {});
    },
	RemoveAgentType : function(AgentTypeID, Callback) {
        return AgentTypes.RemoveAgentTypeObject({ AgentTypeID : AgentTypeID}, Callback);
    },

	RemoveAgentTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesValidators.RemoveAgentType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypes.RemoveAgentType.onValidationError))
					AgentTypes.RemoveAgentType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypes.Url, 
					Method : "RemoveAgentType", 
					Params : { AgentTypeID : oObject.AgentTypeID}, 
					Serialize : AgentTypes.RemoveAgentType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypes.RemoveAgentType.onErrorReceived) ? AgentTypes.RemoveAgentType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypes.Url, "RemoveAgentType", { AgentTypeID : oObject.AgentTypeID}, AgentTypes.RemoveAgentType.Serialize || {});
    },
	UpdateAgentType : function(AgentTypeID, AgentTypeName, Data, Callback) {
        return AgentTypes.UpdateAgentTypeObject({ AgentTypeID : AgentTypeID,AgentTypeName : AgentTypeName,Data : Data}, Callback);
    },

	UpdateAgentTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesValidators.UpdateAgentType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypes.UpdateAgentType.onValidationError))
					AgentTypes.UpdateAgentType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypes.Url, 
					Method : "UpdateAgentType", 
					Params : { AgentTypeID : oObject.AgentTypeID,AgentTypeName : oObject.AgentTypeName,Data : oObject.Data}, 
					Serialize : AgentTypes.UpdateAgentType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypes.UpdateAgentType.onErrorReceived) ? AgentTypes.UpdateAgentType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypes.Url, "UpdateAgentType", { AgentTypeID : oObject.AgentTypeID,AgentTypeName : oObject.AgentTypeName,Data : oObject.Data}, AgentTypes.UpdateAgentType.Serialize || {});
    },
	UpdateAgentTypeData : function(AgentTypeID, Data, Callback) {
        return AgentTypes.UpdateAgentTypeDataObject({ AgentTypeID : AgentTypeID,Data : Data}, Callback);
    },

	UpdateAgentTypeDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesValidators.UpdateAgentTypeData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypes.UpdateAgentTypeData.onValidationError))
					AgentTypes.UpdateAgentTypeData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypes.Url, 
					Method : "UpdateAgentTypeData", 
					Params : { AgentTypeID : oObject.AgentTypeID,Data : oObject.Data}, 
					Serialize : AgentTypes.UpdateAgentTypeData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypes.UpdateAgentTypeData.onErrorReceived) ? AgentTypes.UpdateAgentTypeData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypes.Url, "UpdateAgentTypeData", { AgentTypeID : oObject.AgentTypeID,Data : oObject.Data}, AgentTypes.UpdateAgentTypeData.Serialize || {});
    }
};

var AgentTypesValidators = {
	

	CopyAgentType : {
			AgentTypeID : AgentTypesValidatorsFields.AgentTypeID	
	},

	GetAgentType : {
			AgentTypeID : AgentTypesValidatorsFields.AgentTypeID	
	},

	GetAgentTypeByAgentTypeName : {
			AgentTypeName : AgentTypesValidatorsFields.AgentTypeName	
	},

	GetAgentTypes : {	
	},

	InsertAgentType : {
			AgentTypeName : AgentTypesValidatorsFields.AgentTypeName,
			Data : AgentTypesValidatorsFields.Data	
	},

	RemoveAgentType : {
			AgentTypeID : AgentTypesValidatorsFields.AgentTypeID	
	},

	UpdateAgentType : {
			AgentTypeID : AgentTypesValidatorsFields.AgentTypeID,
			AgentTypeName : AgentTypesValidatorsFields.AgentTypeName,
			Data : AgentTypesValidatorsFields.Data	
	},

	UpdateAgentTypeData : {
			AgentTypeID : AgentTypesValidatorsFields.AgentTypeID,
			Data : AgentTypesValidatorsFields.Data	
	}
};

    