
    	    	
var ContentTypesValidatorsFields = {
	
		ContentTypeID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Content Type ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		ContentTypeName : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Content Type Name. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) }	
}
			
var ContentTypes = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.ContentTypes.ashx"

	,
	CopyContentType : function(ContentTypeID, Callback) {
        return ContentTypes.CopyContentTypeObject({ ContentTypeID : ContentTypeID}, Callback);
    },

	CopyContentTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesValidators.CopyContentType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypes.CopyContentType.onValidationError))
					ContentTypes.CopyContentType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypes.Url, 
					Method : "CopyContentType", 
					Params : { ContentTypeID : oObject.ContentTypeID}, 
					Serialize : ContentTypes.CopyContentType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypes.CopyContentType.onErrorReceived) ? ContentTypes.CopyContentType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypes.Url, "CopyContentType", { ContentTypeID : oObject.ContentTypeID}, ContentTypes.CopyContentType.Serialize || {});
    },
	GetContentType : function(ContentTypeID, Callback) {
        return ContentTypes.GetContentTypeObject({ ContentTypeID : ContentTypeID}, Callback);
    },

	GetContentTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesValidators.GetContentType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypes.GetContentType.onValidationError))
					ContentTypes.GetContentType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypes.Url, 
					Method : "GetContentType", 
					Params : { ContentTypeID : oObject.ContentTypeID}, 
					Serialize : ContentTypes.GetContentType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypes.GetContentType.onErrorReceived) ? ContentTypes.GetContentType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypes.Url, "GetContentType", { ContentTypeID : oObject.ContentTypeID}, ContentTypes.GetContentType.Serialize || {});
    },
	GetContentTypeByContentTypeName : function(ContentTypeName, Callback) {
        return ContentTypes.GetContentTypeByContentTypeNameObject({ ContentTypeName : ContentTypeName}, Callback);
    },

	GetContentTypeByContentTypeNameObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesValidators.GetContentTypeByContentTypeName)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypes.GetContentTypeByContentTypeName.onValidationError))
					ContentTypes.GetContentTypeByContentTypeName.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypes.Url, 
					Method : "GetContentTypeByContentTypeName", 
					Params : { ContentTypeName : oObject.ContentTypeName}, 
					Serialize : ContentTypes.GetContentTypeByContentTypeName.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypes.GetContentTypeByContentTypeName.onErrorReceived) ? ContentTypes.GetContentTypeByContentTypeName.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypes.Url, "GetContentTypeByContentTypeName", { ContentTypeName : oObject.ContentTypeName}, ContentTypes.GetContentTypeByContentTypeName.Serialize || {});
    },
	GetContentTypes : function(Callback) {
        return ContentTypes.GetContentTypesObject({ }, Callback);
    },

	GetContentTypesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesValidators.GetContentTypes)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypes.GetContentTypes.onValidationError))
					ContentTypes.GetContentTypes.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypes.Url, 
					Method : "GetContentTypes", 
					Params : { }, 
					Serialize : ContentTypes.GetContentTypes.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypes.GetContentTypes.onErrorReceived) ? ContentTypes.GetContentTypes.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypes.Url, "GetContentTypes", { }, ContentTypes.GetContentTypes.Serialize || {});
    },
	InsertContentType : function(ContentTypeName, Data, Callback) {
        return ContentTypes.InsertContentTypeObject({ ContentTypeName : ContentTypeName,Data : Data}, Callback);
    },

	InsertContentTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesValidators.InsertContentType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypes.InsertContentType.onValidationError))
					ContentTypes.InsertContentType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypes.Url, 
					Method : "InsertContentType", 
					Params : { ContentTypeName : oObject.ContentTypeName,Data : oObject.Data}, 
					Serialize : ContentTypes.InsertContentType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypes.InsertContentType.onErrorReceived) ? ContentTypes.InsertContentType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypes.Url, "InsertContentType", { ContentTypeName : oObject.ContentTypeName,Data : oObject.Data}, ContentTypes.InsertContentType.Serialize || {});
    },
	RemoveContentType : function(ContentTypeID, Callback) {
        return ContentTypes.RemoveContentTypeObject({ ContentTypeID : ContentTypeID}, Callback);
    },

	RemoveContentTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesValidators.RemoveContentType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypes.RemoveContentType.onValidationError))
					ContentTypes.RemoveContentType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypes.Url, 
					Method : "RemoveContentType", 
					Params : { ContentTypeID : oObject.ContentTypeID}, 
					Serialize : ContentTypes.RemoveContentType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypes.RemoveContentType.onErrorReceived) ? ContentTypes.RemoveContentType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypes.Url, "RemoveContentType", { ContentTypeID : oObject.ContentTypeID}, ContentTypes.RemoveContentType.Serialize || {});
    },
	UpdateContentType : function(ContentTypeID, ContentTypeName, Data, Callback) {
        return ContentTypes.UpdateContentTypeObject({ ContentTypeID : ContentTypeID,ContentTypeName : ContentTypeName,Data : Data}, Callback);
    },

	UpdateContentTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesValidators.UpdateContentType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypes.UpdateContentType.onValidationError))
					ContentTypes.UpdateContentType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypes.Url, 
					Method : "UpdateContentType", 
					Params : { ContentTypeID : oObject.ContentTypeID,ContentTypeName : oObject.ContentTypeName,Data : oObject.Data}, 
					Serialize : ContentTypes.UpdateContentType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypes.UpdateContentType.onErrorReceived) ? ContentTypes.UpdateContentType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypes.Url, "UpdateContentType", { ContentTypeID : oObject.ContentTypeID,ContentTypeName : oObject.ContentTypeName,Data : oObject.Data}, ContentTypes.UpdateContentType.Serialize || {});
    },
	UpdateContentTypeData : function(ContentTypeID, Data, Callback) {
        return ContentTypes.UpdateContentTypeDataObject({ ContentTypeID : ContentTypeID,Data : Data}, Callback);
    },

	UpdateContentTypeDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesValidators.UpdateContentTypeData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypes.UpdateContentTypeData.onValidationError))
					ContentTypes.UpdateContentTypeData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypes.Url, 
					Method : "UpdateContentTypeData", 
					Params : { ContentTypeID : oObject.ContentTypeID,Data : oObject.Data}, 
					Serialize : ContentTypes.UpdateContentTypeData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypes.UpdateContentTypeData.onErrorReceived) ? ContentTypes.UpdateContentTypeData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypes.Url, "UpdateContentTypeData", { ContentTypeID : oObject.ContentTypeID,Data : oObject.Data}, ContentTypes.UpdateContentTypeData.Serialize || {});
    }
};

var ContentTypesValidators = {
	

	CopyContentType : {
			ContentTypeID : ContentTypesValidatorsFields.ContentTypeID	
	},

	GetContentType : {
			ContentTypeID : ContentTypesValidatorsFields.ContentTypeID	
	},

	GetContentTypeByContentTypeName : {
			ContentTypeName : ContentTypesValidatorsFields.ContentTypeName	
	},

	GetContentTypes : {	
	},

	InsertContentType : {
			ContentTypeName : ContentTypesValidatorsFields.ContentTypeName,
			Data : ContentTypesValidatorsFields.Data	
	},

	RemoveContentType : {
			ContentTypeID : ContentTypesValidatorsFields.ContentTypeID	
	},

	UpdateContentType : {
			ContentTypeID : ContentTypesValidatorsFields.ContentTypeID,
			ContentTypeName : ContentTypesValidatorsFields.ContentTypeName,
			Data : ContentTypesValidatorsFields.Data	
	},

	UpdateContentTypeData : {
			ContentTypeID : ContentTypesValidatorsFields.ContentTypeID,
			Data : ContentTypesValidatorsFields.Data	
	}
};

    