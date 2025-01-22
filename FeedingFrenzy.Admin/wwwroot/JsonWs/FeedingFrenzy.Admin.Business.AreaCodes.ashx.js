
    	    	
var AreaCodesValidatorsFields = {
	
		AreaCode : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Area Code. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		AreaCodeID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Area Code ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		Phone : {Validators : [Validators.String], InvalidMessage: "Invalid Phone. " +   ValidatorDescriptions.Length(1, 255) },
		Region : {Validators : [Validators.String], InvalidMessage: "Invalid Region. " +   ValidatorDescriptions.Length(1, 255) },
		TimeZone : {Validators : [Validators.String], InvalidMessage: "Invalid Time Zone. " +   ValidatorDescriptions.Length(1, 255) }	
}
			
var AreaCodes = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.AreaCodes.ashx"

	,
	CopyAreaCode : function(AreaCodeID, Callback) {
        return AreaCodes.CopyAreaCodeObject({ AreaCodeID : AreaCodeID}, Callback);
    },

	CopyAreaCodeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesValidators.CopyAreaCode)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodes.CopyAreaCode.onValidationError))
					AreaCodes.CopyAreaCode.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodes.Url, 
					Method : "CopyAreaCode", 
					Params : { AreaCodeID : oObject.AreaCodeID}, 
					Serialize : AreaCodes.CopyAreaCode.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodes.CopyAreaCode.onErrorReceived) ? AreaCodes.CopyAreaCode.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodes.Url, "CopyAreaCode", { AreaCodeID : oObject.AreaCodeID}, AreaCodes.CopyAreaCode.Serialize || {});
    },
	GetAreaCode : function(AreaCodeID, Callback) {
        return AreaCodes.GetAreaCodeObject({ AreaCodeID : AreaCodeID}, Callback);
    },

	GetAreaCodeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesValidators.GetAreaCode)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodes.GetAreaCode.onValidationError))
					AreaCodes.GetAreaCode.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodes.Url, 
					Method : "GetAreaCode", 
					Params : { AreaCodeID : oObject.AreaCodeID}, 
					Serialize : AreaCodes.GetAreaCode.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodes.GetAreaCode.onErrorReceived) ? AreaCodes.GetAreaCode.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodes.Url, "GetAreaCode", { AreaCodeID : oObject.AreaCodeID}, AreaCodes.GetAreaCode.Serialize || {});
    },
	GetAreaCodeByAreaCode : function(AreaCode, Callback) {
        return AreaCodes.GetAreaCodeByAreaCodeObject({ AreaCode : AreaCode}, Callback);
    },

	GetAreaCodeByAreaCodeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesValidators.GetAreaCodeByAreaCode)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodes.GetAreaCodeByAreaCode.onValidationError))
					AreaCodes.GetAreaCodeByAreaCode.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodes.Url, 
					Method : "GetAreaCodeByAreaCode", 
					Params : { AreaCode : oObject.AreaCode}, 
					Serialize : AreaCodes.GetAreaCodeByAreaCode.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodes.GetAreaCodeByAreaCode.onErrorReceived) ? AreaCodes.GetAreaCodeByAreaCode.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodes.Url, "GetAreaCodeByAreaCode", { AreaCode : oObject.AreaCode}, AreaCodes.GetAreaCodeByAreaCode.Serialize || {});
    },
	GetAreaCodeByPhone : function(Phone, Callback) {
        return AreaCodes.GetAreaCodeByPhoneObject({ Phone : Phone}, Callback);
    },

	GetAreaCodeByPhoneObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesValidators.GetAreaCodeByPhone)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodes.GetAreaCodeByPhone.onValidationError))
					AreaCodes.GetAreaCodeByPhone.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodes.Url, 
					Method : "GetAreaCodeByPhone", 
					Params : { Phone : oObject.Phone}, 
					Serialize : AreaCodes.GetAreaCodeByPhone.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodes.GetAreaCodeByPhone.onErrorReceived) ? AreaCodes.GetAreaCodeByPhone.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodes.Url, "GetAreaCodeByPhone", { Phone : oObject.Phone}, AreaCodes.GetAreaCodeByPhone.Serialize || {});
    },
	GetAreaCodes : function(Callback) {
        return AreaCodes.GetAreaCodesObject({ }, Callback);
    },

	GetAreaCodesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesValidators.GetAreaCodes)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodes.GetAreaCodes.onValidationError))
					AreaCodes.GetAreaCodes.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodes.Url, 
					Method : "GetAreaCodes", 
					Params : { }, 
					Serialize : AreaCodes.GetAreaCodes.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodes.GetAreaCodes.onErrorReceived) ? AreaCodes.GetAreaCodes.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodes.Url, "GetAreaCodes", { }, AreaCodes.GetAreaCodes.Serialize || {});
    },
	InsertAreaCode : function(AreaCode, TimeZone, Region, Data, Callback) {
        return AreaCodes.InsertAreaCodeObject({ AreaCode : AreaCode,TimeZone : TimeZone,Region : Region,Data : Data}, Callback);
    },

	InsertAreaCodeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesValidators.InsertAreaCode)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodes.InsertAreaCode.onValidationError))
					AreaCodes.InsertAreaCode.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodes.Url, 
					Method : "InsertAreaCode", 
					Params : { AreaCode : oObject.AreaCode,TimeZone : oObject.TimeZone,Region : oObject.Region,Data : oObject.Data}, 
					Serialize : AreaCodes.InsertAreaCode.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodes.InsertAreaCode.onErrorReceived) ? AreaCodes.InsertAreaCode.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodes.Url, "InsertAreaCode", { AreaCode : oObject.AreaCode,TimeZone : oObject.TimeZone,Region : oObject.Region,Data : oObject.Data}, AreaCodes.InsertAreaCode.Serialize || {});
    },
	RemoveAreaCode : function(AreaCodeID, Callback) {
        return AreaCodes.RemoveAreaCodeObject({ AreaCodeID : AreaCodeID}, Callback);
    },

	RemoveAreaCodeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesValidators.RemoveAreaCode)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodes.RemoveAreaCode.onValidationError))
					AreaCodes.RemoveAreaCode.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodes.Url, 
					Method : "RemoveAreaCode", 
					Params : { AreaCodeID : oObject.AreaCodeID}, 
					Serialize : AreaCodes.RemoveAreaCode.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodes.RemoveAreaCode.onErrorReceived) ? AreaCodes.RemoveAreaCode.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodes.Url, "RemoveAreaCode", { AreaCodeID : oObject.AreaCodeID}, AreaCodes.RemoveAreaCode.Serialize || {});
    },
	UpdateAreaCode : function(AreaCodeID, AreaCode, TimeZone, Region, Data, Callback) {
        return AreaCodes.UpdateAreaCodeObject({ AreaCodeID : AreaCodeID,AreaCode : AreaCode,TimeZone : TimeZone,Region : Region,Data : Data}, Callback);
    },

	UpdateAreaCodeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesValidators.UpdateAreaCode)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodes.UpdateAreaCode.onValidationError))
					AreaCodes.UpdateAreaCode.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodes.Url, 
					Method : "UpdateAreaCode", 
					Params : { AreaCodeID : oObject.AreaCodeID,AreaCode : oObject.AreaCode,TimeZone : oObject.TimeZone,Region : oObject.Region,Data : oObject.Data}, 
					Serialize : AreaCodes.UpdateAreaCode.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodes.UpdateAreaCode.onErrorReceived) ? AreaCodes.UpdateAreaCode.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodes.Url, "UpdateAreaCode", { AreaCodeID : oObject.AreaCodeID,AreaCode : oObject.AreaCode,TimeZone : oObject.TimeZone,Region : oObject.Region,Data : oObject.Data}, AreaCodes.UpdateAreaCode.Serialize || {});
    },
	UpdateAreaCodeData : function(AreaCodeID, Data, Callback) {
        return AreaCodes.UpdateAreaCodeDataObject({ AreaCodeID : AreaCodeID,Data : Data}, Callback);
    },

	UpdateAreaCodeDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesValidators.UpdateAreaCodeData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodes.UpdateAreaCodeData.onValidationError))
					AreaCodes.UpdateAreaCodeData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodes.Url, 
					Method : "UpdateAreaCodeData", 
					Params : { AreaCodeID : oObject.AreaCodeID,Data : oObject.Data}, 
					Serialize : AreaCodes.UpdateAreaCodeData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodes.UpdateAreaCodeData.onErrorReceived) ? AreaCodes.UpdateAreaCodeData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodes.Url, "UpdateAreaCodeData", { AreaCodeID : oObject.AreaCodeID,Data : oObject.Data}, AreaCodes.UpdateAreaCodeData.Serialize || {});
    }
};

var AreaCodesValidators = {
	

	CopyAreaCode : {
			AreaCodeID : AreaCodesValidatorsFields.AreaCodeID	
	},

	GetAreaCode : {
			AreaCodeID : AreaCodesValidatorsFields.AreaCodeID	
	},

	GetAreaCodeByAreaCode : {
			AreaCode : AreaCodesValidatorsFields.AreaCode	
	},

	GetAreaCodeByPhone : {
			Phone : AreaCodesValidatorsFields.Phone	
	},

	GetAreaCodes : {	
	},

	InsertAreaCode : {
			AreaCode : AreaCodesValidatorsFields.AreaCode,
			TimeZone : AreaCodesValidatorsFields.TimeZone,
			Region : AreaCodesValidatorsFields.Region,
			Data : AreaCodesValidatorsFields.Data	
	},

	RemoveAreaCode : {
			AreaCodeID : AreaCodesValidatorsFields.AreaCodeID	
	},

	UpdateAreaCode : {
			AreaCodeID : AreaCodesValidatorsFields.AreaCodeID,
			AreaCode : AreaCodesValidatorsFields.AreaCode,
			TimeZone : AreaCodesValidatorsFields.TimeZone,
			Region : AreaCodesValidatorsFields.Region,
			Data : AreaCodesValidatorsFields.Data	
	},

	UpdateAreaCodeData : {
			AreaCodeID : AreaCodesValidatorsFields.AreaCodeID,
			Data : AreaCodesValidatorsFields.Data	
	}
};

    