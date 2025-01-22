
    	    	
var SalesRepresentativeTypesValidatorsFields = {
	
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		SalesRepresentativeTypeID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Sales Representative Type ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		SalesRepresentativeTypeName : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Sales Representative Type Name. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) }	
}
			
var SalesRepresentativeTypes = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.SalesRepresentativeTypes.ashx"

	,
	CopySalesRepresentativeType : function(SalesRepresentativeTypeID, Callback) {
        return SalesRepresentativeTypes.CopySalesRepresentativeTypeObject({ SalesRepresentativeTypeID : SalesRepresentativeTypeID}, Callback);
    },

	CopySalesRepresentativeTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesValidators.CopySalesRepresentativeType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypes.CopySalesRepresentativeType.onValidationError))
					SalesRepresentativeTypes.CopySalesRepresentativeType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypes.Url, 
					Method : "CopySalesRepresentativeType", 
					Params : { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID}, 
					Serialize : SalesRepresentativeTypes.CopySalesRepresentativeType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypes.CopySalesRepresentativeType.onErrorReceived) ? SalesRepresentativeTypes.CopySalesRepresentativeType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypes.Url, "CopySalesRepresentativeType", { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID}, SalesRepresentativeTypes.CopySalesRepresentativeType.Serialize || {});
    },
	GetSalesRepresentativeType : function(SalesRepresentativeTypeID, Callback) {
        return SalesRepresentativeTypes.GetSalesRepresentativeTypeObject({ SalesRepresentativeTypeID : SalesRepresentativeTypeID}, Callback);
    },

	GetSalesRepresentativeTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesValidators.GetSalesRepresentativeType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypes.GetSalesRepresentativeType.onValidationError))
					SalesRepresentativeTypes.GetSalesRepresentativeType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypes.Url, 
					Method : "GetSalesRepresentativeType", 
					Params : { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID}, 
					Serialize : SalesRepresentativeTypes.GetSalesRepresentativeType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypes.GetSalesRepresentativeType.onErrorReceived) ? SalesRepresentativeTypes.GetSalesRepresentativeType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypes.Url, "GetSalesRepresentativeType", { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID}, SalesRepresentativeTypes.GetSalesRepresentativeType.Serialize || {});
    },
	GetSalesRepresentativeTypeBySalesRepresentativeTypeName : function(SalesRepresentativeTypeName, Callback) {
        return SalesRepresentativeTypes.GetSalesRepresentativeTypeBySalesRepresentativeTypeNameObject({ SalesRepresentativeTypeName : SalesRepresentativeTypeName}, Callback);
    },

	GetSalesRepresentativeTypeBySalesRepresentativeTypeNameObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesValidators.GetSalesRepresentativeTypeBySalesRepresentativeTypeName)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypes.GetSalesRepresentativeTypeBySalesRepresentativeTypeName.onValidationError))
					SalesRepresentativeTypes.GetSalesRepresentativeTypeBySalesRepresentativeTypeName.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypes.Url, 
					Method : "GetSalesRepresentativeTypeBySalesRepresentativeTypeName", 
					Params : { SalesRepresentativeTypeName : oObject.SalesRepresentativeTypeName}, 
					Serialize : SalesRepresentativeTypes.GetSalesRepresentativeTypeBySalesRepresentativeTypeName.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypes.GetSalesRepresentativeTypeBySalesRepresentativeTypeName.onErrorReceived) ? SalesRepresentativeTypes.GetSalesRepresentativeTypeBySalesRepresentativeTypeName.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypes.Url, "GetSalesRepresentativeTypeBySalesRepresentativeTypeName", { SalesRepresentativeTypeName : oObject.SalesRepresentativeTypeName}, SalesRepresentativeTypes.GetSalesRepresentativeTypeBySalesRepresentativeTypeName.Serialize || {});
    },
	GetSalesRepresentativeTypes : function(Callback) {
        return SalesRepresentativeTypes.GetSalesRepresentativeTypesObject({ }, Callback);
    },

	GetSalesRepresentativeTypesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesValidators.GetSalesRepresentativeTypes)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypes.GetSalesRepresentativeTypes.onValidationError))
					SalesRepresentativeTypes.GetSalesRepresentativeTypes.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypes.Url, 
					Method : "GetSalesRepresentativeTypes", 
					Params : { }, 
					Serialize : SalesRepresentativeTypes.GetSalesRepresentativeTypes.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypes.GetSalesRepresentativeTypes.onErrorReceived) ? SalesRepresentativeTypes.GetSalesRepresentativeTypes.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypes.Url, "GetSalesRepresentativeTypes", { }, SalesRepresentativeTypes.GetSalesRepresentativeTypes.Serialize || {});
    },
	InsertSalesRepresentativeType : function(SalesRepresentativeTypeName, Data, Callback) {
        return SalesRepresentativeTypes.InsertSalesRepresentativeTypeObject({ SalesRepresentativeTypeName : SalesRepresentativeTypeName,Data : Data}, Callback);
    },

	InsertSalesRepresentativeTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesValidators.InsertSalesRepresentativeType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypes.InsertSalesRepresentativeType.onValidationError))
					SalesRepresentativeTypes.InsertSalesRepresentativeType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypes.Url, 
					Method : "InsertSalesRepresentativeType", 
					Params : { SalesRepresentativeTypeName : oObject.SalesRepresentativeTypeName,Data : oObject.Data}, 
					Serialize : SalesRepresentativeTypes.InsertSalesRepresentativeType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypes.InsertSalesRepresentativeType.onErrorReceived) ? SalesRepresentativeTypes.InsertSalesRepresentativeType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypes.Url, "InsertSalesRepresentativeType", { SalesRepresentativeTypeName : oObject.SalesRepresentativeTypeName,Data : oObject.Data}, SalesRepresentativeTypes.InsertSalesRepresentativeType.Serialize || {});
    },
	RemoveSalesRepresentativeType : function(SalesRepresentativeTypeID, Callback) {
        return SalesRepresentativeTypes.RemoveSalesRepresentativeTypeObject({ SalesRepresentativeTypeID : SalesRepresentativeTypeID}, Callback);
    },

	RemoveSalesRepresentativeTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesValidators.RemoveSalesRepresentativeType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypes.RemoveSalesRepresentativeType.onValidationError))
					SalesRepresentativeTypes.RemoveSalesRepresentativeType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypes.Url, 
					Method : "RemoveSalesRepresentativeType", 
					Params : { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID}, 
					Serialize : SalesRepresentativeTypes.RemoveSalesRepresentativeType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypes.RemoveSalesRepresentativeType.onErrorReceived) ? SalesRepresentativeTypes.RemoveSalesRepresentativeType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypes.Url, "RemoveSalesRepresentativeType", { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID}, SalesRepresentativeTypes.RemoveSalesRepresentativeType.Serialize || {});
    },
	UpdateSalesRepresentativeType : function(SalesRepresentativeTypeID, SalesRepresentativeTypeName, Data, Callback) {
        return SalesRepresentativeTypes.UpdateSalesRepresentativeTypeObject({ SalesRepresentativeTypeID : SalesRepresentativeTypeID,SalesRepresentativeTypeName : SalesRepresentativeTypeName,Data : Data}, Callback);
    },

	UpdateSalesRepresentativeTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesValidators.UpdateSalesRepresentativeType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypes.UpdateSalesRepresentativeType.onValidationError))
					SalesRepresentativeTypes.UpdateSalesRepresentativeType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypes.Url, 
					Method : "UpdateSalesRepresentativeType", 
					Params : { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID,SalesRepresentativeTypeName : oObject.SalesRepresentativeTypeName,Data : oObject.Data}, 
					Serialize : SalesRepresentativeTypes.UpdateSalesRepresentativeType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypes.UpdateSalesRepresentativeType.onErrorReceived) ? SalesRepresentativeTypes.UpdateSalesRepresentativeType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypes.Url, "UpdateSalesRepresentativeType", { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID,SalesRepresentativeTypeName : oObject.SalesRepresentativeTypeName,Data : oObject.Data}, SalesRepresentativeTypes.UpdateSalesRepresentativeType.Serialize || {});
    },
	UpdateSalesRepresentativeTypeData : function(SalesRepresentativeTypeID, Data, Callback) {
        return SalesRepresentativeTypes.UpdateSalesRepresentativeTypeDataObject({ SalesRepresentativeTypeID : SalesRepresentativeTypeID,Data : Data}, Callback);
    },

	UpdateSalesRepresentativeTypeDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesValidators.UpdateSalesRepresentativeTypeData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypes.UpdateSalesRepresentativeTypeData.onValidationError))
					SalesRepresentativeTypes.UpdateSalesRepresentativeTypeData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypes.Url, 
					Method : "UpdateSalesRepresentativeTypeData", 
					Params : { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID,Data : oObject.Data}, 
					Serialize : SalesRepresentativeTypes.UpdateSalesRepresentativeTypeData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypes.UpdateSalesRepresentativeTypeData.onErrorReceived) ? SalesRepresentativeTypes.UpdateSalesRepresentativeTypeData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypes.Url, "UpdateSalesRepresentativeTypeData", { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID,Data : oObject.Data}, SalesRepresentativeTypes.UpdateSalesRepresentativeTypeData.Serialize || {});
    }
};

var SalesRepresentativeTypesValidators = {
	

	CopySalesRepresentativeType : {
			SalesRepresentativeTypeID : SalesRepresentativeTypesValidatorsFields.SalesRepresentativeTypeID	
	},

	GetSalesRepresentativeType : {
			SalesRepresentativeTypeID : SalesRepresentativeTypesValidatorsFields.SalesRepresentativeTypeID	
	},

	GetSalesRepresentativeTypeBySalesRepresentativeTypeName : {
			SalesRepresentativeTypeName : SalesRepresentativeTypesValidatorsFields.SalesRepresentativeTypeName	
	},

	GetSalesRepresentativeTypes : {	
	},

	InsertSalesRepresentativeType : {
			SalesRepresentativeTypeName : SalesRepresentativeTypesValidatorsFields.SalesRepresentativeTypeName,
			Data : SalesRepresentativeTypesValidatorsFields.Data	
	},

	RemoveSalesRepresentativeType : {
			SalesRepresentativeTypeID : SalesRepresentativeTypesValidatorsFields.SalesRepresentativeTypeID	
	},

	UpdateSalesRepresentativeType : {
			SalesRepresentativeTypeID : SalesRepresentativeTypesValidatorsFields.SalesRepresentativeTypeID,
			SalesRepresentativeTypeName : SalesRepresentativeTypesValidatorsFields.SalesRepresentativeTypeName,
			Data : SalesRepresentativeTypesValidatorsFields.Data	
	},

	UpdateSalesRepresentativeTypeData : {
			SalesRepresentativeTypeID : SalesRepresentativeTypesValidatorsFields.SalesRepresentativeTypeID,
			Data : SalesRepresentativeTypesValidatorsFields.Data	
	}
};

    