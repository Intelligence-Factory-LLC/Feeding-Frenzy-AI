
    	    	
var ContentsValidatorsFields = {
	
		Content : {Validators : [Validators.Text], InvalidMessage: "Invalid Content. " +   ValidatorDescriptions.Length(1, 4000) },
		ContentID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Content ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		ContentName : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Content Name. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		ContentTypeID : {Validators : [Validators.ID], InvalidMessage: "Invalid Content Type ID. " +   ValidatorDescriptions.ID() },
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		Email : {Validators : [Validators.String], InvalidMessage: "Invalid Email. " +   ValidatorDescriptions.Length(1, 255) }	
}
			
var Contents = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.Contents.ashx"

	,
	CopyContent : function(ContentID, Callback) {
        return Contents.CopyContentObject({ ContentID : ContentID}, Callback);
    },

	CopyContentObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsValidators.CopyContent)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Contents.CopyContent.onValidationError))
					Contents.CopyContent.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Contents.Url, 
					Method : "CopyContent", 
					Params : { ContentID : oObject.ContentID}, 
					Serialize : Contents.CopyContent.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Contents.CopyContent.onErrorReceived) ? Contents.CopyContent.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Contents.Url, "CopyContent", { ContentID : oObject.ContentID}, Contents.CopyContent.Serialize || {});
    },
	GetContent : function(ContentID, Callback) {
        return Contents.GetContentObject({ ContentID : ContentID}, Callback);
    },

	GetContentObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsValidators.GetContent)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Contents.GetContent.onValidationError))
					Contents.GetContent.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Contents.Url, 
					Method : "GetContent", 
					Params : { ContentID : oObject.ContentID}, 
					Serialize : Contents.GetContent.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Contents.GetContent.onErrorReceived) ? Contents.GetContent.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Contents.Url, "GetContent", { ContentID : oObject.ContentID}, Contents.GetContent.Serialize || {});
    },
	GetContentByContentName : function(ContentName, Callback) {
        return Contents.GetContentByContentNameObject({ ContentName : ContentName}, Callback);
    },

	GetContentByContentNameObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsValidators.GetContentByContentName)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Contents.GetContentByContentName.onValidationError))
					Contents.GetContentByContentName.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Contents.Url, 
					Method : "GetContentByContentName", 
					Params : { ContentName : oObject.ContentName}, 
					Serialize : Contents.GetContentByContentName.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Contents.GetContentByContentName.onErrorReceived) ? Contents.GetContentByContentName.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Contents.Url, "GetContentByContentName", { ContentName : oObject.ContentName}, Contents.GetContentByContentName.Serialize || {});
    },
	GetContents : function(Callback) {
        return Contents.GetContentsObject({ }, Callback);
    },

	GetContentsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsValidators.GetContents)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Contents.GetContents.onValidationError))
					Contents.GetContents.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Contents.Url, 
					Method : "GetContents", 
					Params : { }, 
					Serialize : Contents.GetContents.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Contents.GetContents.onErrorReceived) ? Contents.GetContents.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Contents.Url, "GetContents", { }, Contents.GetContents.Serialize || {});
    },
	GetContentsByContentTypeID : function(ContentTypeID, Callback) {
        return Contents.GetContentsByContentTypeIDObject({ ContentTypeID : ContentTypeID}, Callback);
    },

	GetContentsByContentTypeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsValidators.GetContentsByContentTypeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Contents.GetContentsByContentTypeID.onValidationError))
					Contents.GetContentsByContentTypeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Contents.Url, 
					Method : "GetContentsByContentTypeID", 
					Params : { ContentTypeID : oObject.ContentTypeID}, 
					Serialize : Contents.GetContentsByContentTypeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Contents.GetContentsByContentTypeID.onErrorReceived) ? Contents.GetContentsByContentTypeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Contents.Url, "GetContentsByContentTypeID", { ContentTypeID : oObject.ContentTypeID}, Contents.GetContentsByContentTypeID.Serialize || {});
    },
	GetUserContent : function(Email, ContentName, Callback) {
        return Contents.GetUserContentObject({ Email : Email,ContentName : ContentName}, Callback);
    },

	GetUserContentObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsValidators.GetUserContent)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Contents.GetUserContent.onValidationError))
					Contents.GetUserContent.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Contents.Url, 
					Method : "GetUserContent", 
					Params : { Email : oObject.Email,ContentName : oObject.ContentName}, 
					Serialize : Contents.GetUserContent.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Contents.GetUserContent.onErrorReceived) ? Contents.GetUserContent.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Contents.Url, "GetUserContent", { Email : oObject.Email,ContentName : oObject.ContentName}, Contents.GetUserContent.Serialize || {});
    },
	GetUserContents : function(Email, Callback) {
        return Contents.GetUserContentsObject({ Email : Email}, Callback);
    },

	GetUserContentsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsValidators.GetUserContents)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Contents.GetUserContents.onValidationError))
					Contents.GetUserContents.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Contents.Url, 
					Method : "GetUserContents", 
					Params : { Email : oObject.Email}, 
					Serialize : Contents.GetUserContents.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Contents.GetUserContents.onErrorReceived) ? Contents.GetUserContents.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Contents.Url, "GetUserContents", { Email : oObject.Email}, Contents.GetUserContents.Serialize || {});
    },
	InsertContent : function(ContentName, Content, Data, ContentTypeID, Callback) {
        return Contents.InsertContentObject({ ContentName : ContentName,Content : Content,Data : Data,ContentTypeID : ContentTypeID}, Callback);
    },

	InsertContentObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsValidators.InsertContent)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Contents.InsertContent.onValidationError))
					Contents.InsertContent.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Contents.Url, 
					Method : "InsertContent", 
					Params : { ContentName : oObject.ContentName,Content : oObject.Content,Data : oObject.Data,ContentTypeID : oObject.ContentTypeID}, 
					Serialize : Contents.InsertContent.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Contents.InsertContent.onErrorReceived) ? Contents.InsertContent.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Contents.Url, "InsertContent", { ContentName : oObject.ContentName,Content : oObject.Content,Data : oObject.Data,ContentTypeID : oObject.ContentTypeID}, Contents.InsertContent.Serialize || {});
    },
	InsertOrUpdateContent : function(ContentName, Content, Data, Callback) {
        return Contents.InsertOrUpdateContentObject({ ContentName : ContentName,Content : Content,Data : Data}, Callback);
    },

	InsertOrUpdateContentObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsValidators.InsertOrUpdateContent)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Contents.InsertOrUpdateContent.onValidationError))
					Contents.InsertOrUpdateContent.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Contents.Url, 
					Method : "InsertOrUpdateContent", 
					Params : { ContentName : oObject.ContentName,Content : oObject.Content,Data : oObject.Data}, 
					Serialize : Contents.InsertOrUpdateContent.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Contents.InsertOrUpdateContent.onErrorReceived) ? Contents.InsertOrUpdateContent.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Contents.Url, "InsertOrUpdateContent", { ContentName : oObject.ContentName,Content : oObject.Content,Data : oObject.Data}, Contents.InsertOrUpdateContent.Serialize || {});
    },
	InsertOrUpdateUserContent : function(Email, Content, Callback) {
        return Contents.InsertOrUpdateUserContentObject({ Email : Email,Content : Content}, Callback);
    },

	InsertOrUpdateUserContentObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsValidators.InsertOrUpdateUserContent)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Contents.InsertOrUpdateUserContent.onValidationError))
					Contents.InsertOrUpdateUserContent.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Contents.Url, 
					Method : "InsertOrUpdateUserContent", 
					Params : { Email : oObject.Email,Content : oObject.Content}, 
					Serialize : Contents.InsertOrUpdateUserContent.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Contents.InsertOrUpdateUserContent.onErrorReceived) ? Contents.InsertOrUpdateUserContent.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Contents.Url, "InsertOrUpdateUserContent", { Email : oObject.Email,Content : oObject.Content}, Contents.InsertOrUpdateUserContent.Serialize || {});
    },
	RemoveContent : function(ContentID, Callback) {
        return Contents.RemoveContentObject({ ContentID : ContentID}, Callback);
    },

	RemoveContentObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsValidators.RemoveContent)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Contents.RemoveContent.onValidationError))
					Contents.RemoveContent.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Contents.Url, 
					Method : "RemoveContent", 
					Params : { ContentID : oObject.ContentID}, 
					Serialize : Contents.RemoveContent.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Contents.RemoveContent.onErrorReceived) ? Contents.RemoveContent.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Contents.Url, "RemoveContent", { ContentID : oObject.ContentID}, Contents.RemoveContent.Serialize || {});
    },
	RemoveUserContent : function(Email, ContentName, Callback) {
        return Contents.RemoveUserContentObject({ Email : Email,ContentName : ContentName}, Callback);
    },

	RemoveUserContentObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsValidators.RemoveUserContent)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Contents.RemoveUserContent.onValidationError))
					Contents.RemoveUserContent.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Contents.Url, 
					Method : "RemoveUserContent", 
					Params : { Email : oObject.Email,ContentName : oObject.ContentName}, 
					Serialize : Contents.RemoveUserContent.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Contents.RemoveUserContent.onErrorReceived) ? Contents.RemoveUserContent.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Contents.Url, "RemoveUserContent", { Email : oObject.Email,ContentName : oObject.ContentName}, Contents.RemoveUserContent.Serialize || {});
    },
	UpdateContent : function(ContentID, ContentName, Content, Data, ContentTypeID, Callback) {
        return Contents.UpdateContentObject({ ContentID : ContentID,ContentName : ContentName,Content : Content,Data : Data,ContentTypeID : ContentTypeID}, Callback);
    },

	UpdateContentObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsValidators.UpdateContent)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Contents.UpdateContent.onValidationError))
					Contents.UpdateContent.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Contents.Url, 
					Method : "UpdateContent", 
					Params : { ContentID : oObject.ContentID,ContentName : oObject.ContentName,Content : oObject.Content,Data : oObject.Data,ContentTypeID : oObject.ContentTypeID}, 
					Serialize : Contents.UpdateContent.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Contents.UpdateContent.onErrorReceived) ? Contents.UpdateContent.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Contents.Url, "UpdateContent", { ContentID : oObject.ContentID,ContentName : oObject.ContentName,Content : oObject.Content,Data : oObject.Data,ContentTypeID : oObject.ContentTypeID}, Contents.UpdateContent.Serialize || {});
    },
	UpdateContentData : function(ContentID, Data, Callback) {
        return Contents.UpdateContentDataObject({ ContentID : ContentID,Data : Data}, Callback);
    },

	UpdateContentDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsValidators.UpdateContentData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Contents.UpdateContentData.onValidationError))
					Contents.UpdateContentData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Contents.Url, 
					Method : "UpdateContentData", 
					Params : { ContentID : oObject.ContentID,Data : oObject.Data}, 
					Serialize : Contents.UpdateContentData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Contents.UpdateContentData.onErrorReceived) ? Contents.UpdateContentData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Contents.Url, "UpdateContentData", { ContentID : oObject.ContentID,Data : oObject.Data}, Contents.UpdateContentData.Serialize || {});
    }
};

var ContentsValidators = {
	

	CopyContent : {
			ContentID : ContentsValidatorsFields.ContentID	
	},

	GetContent : {
			ContentID : ContentsValidatorsFields.ContentID	
	},

	GetContentByContentName : {
			ContentName : ContentsValidatorsFields.ContentName	
	},

	GetContents : {	
	},

	GetContentsByContentTypeID : {
			ContentTypeID : ContentsValidatorsFields.ContentTypeID	
	},

	GetUserContent : {
			Email : ContentsValidatorsFields.Email,
			ContentName : ContentsValidatorsFields.ContentName	
	},

	GetUserContents : {
			Email : ContentsValidatorsFields.Email	
	},

	InsertContent : {
			ContentName : ContentsValidatorsFields.ContentName,
			Content : ContentsValidatorsFields.Content,
			Data : ContentsValidatorsFields.Data,
			ContentTypeID : ContentsValidatorsFields.ContentTypeID	
	},

	InsertOrUpdateContent : {
			ContentName : ContentsValidatorsFields.ContentName,
			Content : ContentsValidatorsFields.Content,
			Data : ContentsValidatorsFields.Data	
	},

	InsertOrUpdateUserContent : {
			Email : ContentsValidatorsFields.Email,
			Content : ContentsValidatorsFields.Content	
	},

	RemoveContent : {
			ContentID : ContentsValidatorsFields.ContentID	
	},

	RemoveUserContent : {
			Email : ContentsValidatorsFields.Email,
			ContentName : ContentsValidatorsFields.ContentName	
	},

	UpdateContent : {
			ContentID : ContentsValidatorsFields.ContentID,
			ContentName : ContentsValidatorsFields.ContentName,
			Content : ContentsValidatorsFields.Content,
			Data : ContentsValidatorsFields.Data,
			ContentTypeID : ContentsValidatorsFields.ContentTypeID	
	},

	UpdateContentData : {
			ContentID : ContentsValidatorsFields.ContentID,
			Data : ContentsValidatorsFields.Data	
	}
};

    