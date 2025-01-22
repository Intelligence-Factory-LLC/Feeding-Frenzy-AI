
    	    	
var LeadRelationshipTypesValidatorsFields = {
	
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		LeadRelationshipTypeID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Lead Relationship Type ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		LeadRelationshipTypeName : {Validators : [Validators.String], InvalidMessage: "Invalid Lead Relationship Type Name. " +   ValidatorDescriptions.Length(1, 255) }	
}
			
var LeadRelationshipTypes = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.LeadRelationshipTypes.ashx"

	,
	CopyLeadRelationshipType : function(LeadRelationshipTypeID, Callback) {
        return LeadRelationshipTypes.CopyLeadRelationshipTypeObject({ LeadRelationshipTypeID : LeadRelationshipTypeID}, Callback);
    },

	CopyLeadRelationshipTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesValidators.CopyLeadRelationshipType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypes.CopyLeadRelationshipType.onValidationError))
					LeadRelationshipTypes.CopyLeadRelationshipType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypes.Url, 
					Method : "CopyLeadRelationshipType", 
					Params : { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID}, 
					Serialize : LeadRelationshipTypes.CopyLeadRelationshipType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypes.CopyLeadRelationshipType.onErrorReceived) ? LeadRelationshipTypes.CopyLeadRelationshipType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypes.Url, "CopyLeadRelationshipType", { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID}, LeadRelationshipTypes.CopyLeadRelationshipType.Serialize || {});
    },
	GetLeadRelationshipType : function(LeadRelationshipTypeID, Callback) {
        return LeadRelationshipTypes.GetLeadRelationshipTypeObject({ LeadRelationshipTypeID : LeadRelationshipTypeID}, Callback);
    },

	GetLeadRelationshipTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesValidators.GetLeadRelationshipType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypes.GetLeadRelationshipType.onValidationError))
					LeadRelationshipTypes.GetLeadRelationshipType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypes.Url, 
					Method : "GetLeadRelationshipType", 
					Params : { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID}, 
					Serialize : LeadRelationshipTypes.GetLeadRelationshipType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypes.GetLeadRelationshipType.onErrorReceived) ? LeadRelationshipTypes.GetLeadRelationshipType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypes.Url, "GetLeadRelationshipType", { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID}, LeadRelationshipTypes.GetLeadRelationshipType.Serialize || {});
    },
	GetLeadRelationshipTypeByLeadRelationshipTypeName : function(LeadRelationshipTypeName, Callback) {
        return LeadRelationshipTypes.GetLeadRelationshipTypeByLeadRelationshipTypeNameObject({ LeadRelationshipTypeName : LeadRelationshipTypeName}, Callback);
    },

	GetLeadRelationshipTypeByLeadRelationshipTypeNameObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesValidators.GetLeadRelationshipTypeByLeadRelationshipTypeName)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypes.GetLeadRelationshipTypeByLeadRelationshipTypeName.onValidationError))
					LeadRelationshipTypes.GetLeadRelationshipTypeByLeadRelationshipTypeName.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypes.Url, 
					Method : "GetLeadRelationshipTypeByLeadRelationshipTypeName", 
					Params : { LeadRelationshipTypeName : oObject.LeadRelationshipTypeName}, 
					Serialize : LeadRelationshipTypes.GetLeadRelationshipTypeByLeadRelationshipTypeName.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypes.GetLeadRelationshipTypeByLeadRelationshipTypeName.onErrorReceived) ? LeadRelationshipTypes.GetLeadRelationshipTypeByLeadRelationshipTypeName.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypes.Url, "GetLeadRelationshipTypeByLeadRelationshipTypeName", { LeadRelationshipTypeName : oObject.LeadRelationshipTypeName}, LeadRelationshipTypes.GetLeadRelationshipTypeByLeadRelationshipTypeName.Serialize || {});
    },
	GetLeadRelationshipTypes : function(Callback) {
        return LeadRelationshipTypes.GetLeadRelationshipTypesObject({ }, Callback);
    },

	GetLeadRelationshipTypesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesValidators.GetLeadRelationshipTypes)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypes.GetLeadRelationshipTypes.onValidationError))
					LeadRelationshipTypes.GetLeadRelationshipTypes.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypes.Url, 
					Method : "GetLeadRelationshipTypes", 
					Params : { }, 
					Serialize : LeadRelationshipTypes.GetLeadRelationshipTypes.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypes.GetLeadRelationshipTypes.onErrorReceived) ? LeadRelationshipTypes.GetLeadRelationshipTypes.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypes.Url, "GetLeadRelationshipTypes", { }, LeadRelationshipTypes.GetLeadRelationshipTypes.Serialize || {});
    },
	InsertLeadRelationshipType : function(LeadRelationshipTypeName, Data, Callback) {
        return LeadRelationshipTypes.InsertLeadRelationshipTypeObject({ LeadRelationshipTypeName : LeadRelationshipTypeName,Data : Data}, Callback);
    },

	InsertLeadRelationshipTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesValidators.InsertLeadRelationshipType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypes.InsertLeadRelationshipType.onValidationError))
					LeadRelationshipTypes.InsertLeadRelationshipType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypes.Url, 
					Method : "InsertLeadRelationshipType", 
					Params : { LeadRelationshipTypeName : oObject.LeadRelationshipTypeName,Data : oObject.Data}, 
					Serialize : LeadRelationshipTypes.InsertLeadRelationshipType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypes.InsertLeadRelationshipType.onErrorReceived) ? LeadRelationshipTypes.InsertLeadRelationshipType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypes.Url, "InsertLeadRelationshipType", { LeadRelationshipTypeName : oObject.LeadRelationshipTypeName,Data : oObject.Data}, LeadRelationshipTypes.InsertLeadRelationshipType.Serialize || {});
    },
	RemoveLeadRelationshipType : function(LeadRelationshipTypeID, Callback) {
        return LeadRelationshipTypes.RemoveLeadRelationshipTypeObject({ LeadRelationshipTypeID : LeadRelationshipTypeID}, Callback);
    },

	RemoveLeadRelationshipTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesValidators.RemoveLeadRelationshipType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypes.RemoveLeadRelationshipType.onValidationError))
					LeadRelationshipTypes.RemoveLeadRelationshipType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypes.Url, 
					Method : "RemoveLeadRelationshipType", 
					Params : { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID}, 
					Serialize : LeadRelationshipTypes.RemoveLeadRelationshipType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypes.RemoveLeadRelationshipType.onErrorReceived) ? LeadRelationshipTypes.RemoveLeadRelationshipType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypes.Url, "RemoveLeadRelationshipType", { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID}, LeadRelationshipTypes.RemoveLeadRelationshipType.Serialize || {});
    },
	UpdateLeadRelationshipType : function(LeadRelationshipTypeID, LeadRelationshipTypeName, Data, Callback) {
        return LeadRelationshipTypes.UpdateLeadRelationshipTypeObject({ LeadRelationshipTypeID : LeadRelationshipTypeID,LeadRelationshipTypeName : LeadRelationshipTypeName,Data : Data}, Callback);
    },

	UpdateLeadRelationshipTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesValidators.UpdateLeadRelationshipType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypes.UpdateLeadRelationshipType.onValidationError))
					LeadRelationshipTypes.UpdateLeadRelationshipType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypes.Url, 
					Method : "UpdateLeadRelationshipType", 
					Params : { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID,LeadRelationshipTypeName : oObject.LeadRelationshipTypeName,Data : oObject.Data}, 
					Serialize : LeadRelationshipTypes.UpdateLeadRelationshipType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypes.UpdateLeadRelationshipType.onErrorReceived) ? LeadRelationshipTypes.UpdateLeadRelationshipType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypes.Url, "UpdateLeadRelationshipType", { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID,LeadRelationshipTypeName : oObject.LeadRelationshipTypeName,Data : oObject.Data}, LeadRelationshipTypes.UpdateLeadRelationshipType.Serialize || {});
    },
	UpdateLeadRelationshipTypeData : function(LeadRelationshipTypeID, Data, Callback) {
        return LeadRelationshipTypes.UpdateLeadRelationshipTypeDataObject({ LeadRelationshipTypeID : LeadRelationshipTypeID,Data : Data}, Callback);
    },

	UpdateLeadRelationshipTypeDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesValidators.UpdateLeadRelationshipTypeData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypes.UpdateLeadRelationshipTypeData.onValidationError))
					LeadRelationshipTypes.UpdateLeadRelationshipTypeData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypes.Url, 
					Method : "UpdateLeadRelationshipTypeData", 
					Params : { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID,Data : oObject.Data}, 
					Serialize : LeadRelationshipTypes.UpdateLeadRelationshipTypeData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypes.UpdateLeadRelationshipTypeData.onErrorReceived) ? LeadRelationshipTypes.UpdateLeadRelationshipTypeData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypes.Url, "UpdateLeadRelationshipTypeData", { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID,Data : oObject.Data}, LeadRelationshipTypes.UpdateLeadRelationshipTypeData.Serialize || {});
    }
};

var LeadRelationshipTypesValidators = {
	

	CopyLeadRelationshipType : {
			LeadRelationshipTypeID : LeadRelationshipTypesValidatorsFields.LeadRelationshipTypeID	
	},

	GetLeadRelationshipType : {
			LeadRelationshipTypeID : LeadRelationshipTypesValidatorsFields.LeadRelationshipTypeID	
	},

	GetLeadRelationshipTypeByLeadRelationshipTypeName : {
			LeadRelationshipTypeName : LeadRelationshipTypesValidatorsFields.LeadRelationshipTypeName	
	},

	GetLeadRelationshipTypes : {	
	},

	InsertLeadRelationshipType : {
			LeadRelationshipTypeName : LeadRelationshipTypesValidatorsFields.LeadRelationshipTypeName,
			Data : LeadRelationshipTypesValidatorsFields.Data	
	},

	RemoveLeadRelationshipType : {
			LeadRelationshipTypeID : LeadRelationshipTypesValidatorsFields.LeadRelationshipTypeID	
	},

	UpdateLeadRelationshipType : {
			LeadRelationshipTypeID : LeadRelationshipTypesValidatorsFields.LeadRelationshipTypeID,
			LeadRelationshipTypeName : LeadRelationshipTypesValidatorsFields.LeadRelationshipTypeName,
			Data : LeadRelationshipTypesValidatorsFields.Data	
	},

	UpdateLeadRelationshipTypeData : {
			LeadRelationshipTypeID : LeadRelationshipTypesValidatorsFields.LeadRelationshipTypeID,
			Data : LeadRelationshipTypesValidatorsFields.Data	
	}
};

    