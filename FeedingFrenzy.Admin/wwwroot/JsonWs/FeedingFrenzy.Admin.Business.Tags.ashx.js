
    	    	
var TagsValidatorsFields = {
	
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		SalesRepresentativeID : {Validators : [Validators.ID], InvalidMessage: "Invalid Sales Representative ID. " +   ValidatorDescriptions.ID() },
		TagID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Tag ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		TagName : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Tag Name. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) }	
}
			
var Tags = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.Tags.ashx"

	,
	CopyTag : function(TagID, Callback) {
        return Tags.CopyTagObject({ TagID : TagID}, Callback);
    },

	CopyTagObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, TagsValidators.CopyTag)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Tags.CopyTag.onValidationError))
					Tags.CopyTag.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Tags.Url, 
					Method : "CopyTag", 
					Params : { TagID : oObject.TagID}, 
					Serialize : Tags.CopyTag.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Tags.CopyTag.onErrorReceived) ? Tags.CopyTag.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Tags.Url, "CopyTag", { TagID : oObject.TagID}, Tags.CopyTag.Serialize || {});
    },
	GetTag : function(TagID, Callback) {
        return Tags.GetTagObject({ TagID : TagID}, Callback);
    },

	GetTagObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, TagsValidators.GetTag)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Tags.GetTag.onValidationError))
					Tags.GetTag.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Tags.Url, 
					Method : "GetTag", 
					Params : { TagID : oObject.TagID}, 
					Serialize : Tags.GetTag.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Tags.GetTag.onErrorReceived) ? Tags.GetTag.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Tags.Url, "GetTag", { TagID : oObject.TagID}, Tags.GetTag.Serialize || {});
    },
	GetTagByTagName : function(TagName, Callback) {
        return Tags.GetTagByTagNameObject({ TagName : TagName}, Callback);
    },

	GetTagByTagNameObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, TagsValidators.GetTagByTagName)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Tags.GetTagByTagName.onValidationError))
					Tags.GetTagByTagName.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Tags.Url, 
					Method : "GetTagByTagName", 
					Params : { TagName : oObject.TagName}, 
					Serialize : Tags.GetTagByTagName.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Tags.GetTagByTagName.onErrorReceived) ? Tags.GetTagByTagName.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Tags.Url, "GetTagByTagName", { TagName : oObject.TagName}, Tags.GetTagByTagName.Serialize || {});
    },
	GetTags : function(Callback) {
        return Tags.GetTagsObject({ }, Callback);
    },

	GetTagsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, TagsValidators.GetTags)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Tags.GetTags.onValidationError))
					Tags.GetTags.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Tags.Url, 
					Method : "GetTags", 
					Params : { }, 
					Serialize : Tags.GetTags.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Tags.GetTags.onErrorReceived) ? Tags.GetTags.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Tags.Url, "GetTags", { }, Tags.GetTags.Serialize || {});
    },
	GetTagsBySalesRepresentativeID : function(SalesRepresentativeID, Callback) {
        return Tags.GetTagsBySalesRepresentativeIDObject({ SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetTagsBySalesRepresentativeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, TagsValidators.GetTagsBySalesRepresentativeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Tags.GetTagsBySalesRepresentativeID.onValidationError))
					Tags.GetTagsBySalesRepresentativeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Tags.Url, 
					Method : "GetTagsBySalesRepresentativeID", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : Tags.GetTagsBySalesRepresentativeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Tags.GetTagsBySalesRepresentativeID.onErrorReceived) ? Tags.GetTagsBySalesRepresentativeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Tags.Url, "GetTagsBySalesRepresentativeID", { SalesRepresentativeID : oObject.SalesRepresentativeID}, Tags.GetTagsBySalesRepresentativeID.Serialize || {});
    },
	InsertTag : function(SalesRepresentativeID, TagName, Data, Callback) {
        return Tags.InsertTagObject({ SalesRepresentativeID : SalesRepresentativeID,TagName : TagName,Data : Data}, Callback);
    },

	InsertTagObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, TagsValidators.InsertTag)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Tags.InsertTag.onValidationError))
					Tags.InsertTag.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Tags.Url, 
					Method : "InsertTag", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,TagName : oObject.TagName,Data : oObject.Data}, 
					Serialize : Tags.InsertTag.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Tags.InsertTag.onErrorReceived) ? Tags.InsertTag.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Tags.Url, "InsertTag", { SalesRepresentativeID : oObject.SalesRepresentativeID,TagName : oObject.TagName,Data : oObject.Data}, Tags.InsertTag.Serialize || {});
    },
	RemoveTag : function(TagID, Callback) {
        return Tags.RemoveTagObject({ TagID : TagID}, Callback);
    },

	RemoveTagObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, TagsValidators.RemoveTag)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Tags.RemoveTag.onValidationError))
					Tags.RemoveTag.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Tags.Url, 
					Method : "RemoveTag", 
					Params : { TagID : oObject.TagID}, 
					Serialize : Tags.RemoveTag.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Tags.RemoveTag.onErrorReceived) ? Tags.RemoveTag.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Tags.Url, "RemoveTag", { TagID : oObject.TagID}, Tags.RemoveTag.Serialize || {});
    },
	UpdateTag : function(SalesRepresentativeID, TagID, TagName, Data, Callback) {
        return Tags.UpdateTagObject({ SalesRepresentativeID : SalesRepresentativeID,TagID : TagID,TagName : TagName,Data : Data}, Callback);
    },

	UpdateTagObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, TagsValidators.UpdateTag)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Tags.UpdateTag.onValidationError))
					Tags.UpdateTag.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Tags.Url, 
					Method : "UpdateTag", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,TagID : oObject.TagID,TagName : oObject.TagName,Data : oObject.Data}, 
					Serialize : Tags.UpdateTag.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Tags.UpdateTag.onErrorReceived) ? Tags.UpdateTag.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Tags.Url, "UpdateTag", { SalesRepresentativeID : oObject.SalesRepresentativeID,TagID : oObject.TagID,TagName : oObject.TagName,Data : oObject.Data}, Tags.UpdateTag.Serialize || {});
    },
	UpdateTagData : function(TagID, Data, Callback) {
        return Tags.UpdateTagDataObject({ TagID : TagID,Data : Data}, Callback);
    },

	UpdateTagDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, TagsValidators.UpdateTagData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Tags.UpdateTagData.onValidationError))
					Tags.UpdateTagData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Tags.Url, 
					Method : "UpdateTagData", 
					Params : { TagID : oObject.TagID,Data : oObject.Data}, 
					Serialize : Tags.UpdateTagData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Tags.UpdateTagData.onErrorReceived) ? Tags.UpdateTagData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Tags.Url, "UpdateTagData", { TagID : oObject.TagID,Data : oObject.Data}, Tags.UpdateTagData.Serialize || {});
    }
};

var TagsValidators = {
	

	CopyTag : {
			TagID : TagsValidatorsFields.TagID	
	},

	GetTag : {
			TagID : TagsValidatorsFields.TagID	
	},

	GetTagByTagName : {
			TagName : TagsValidatorsFields.TagName	
	},

	GetTags : {	
	},

	GetTagsBySalesRepresentativeID : {
			SalesRepresentativeID : TagsValidatorsFields.SalesRepresentativeID	
	},

	InsertTag : {
			SalesRepresentativeID : TagsValidatorsFields.SalesRepresentativeID,
			TagName : TagsValidatorsFields.TagName,
			Data : TagsValidatorsFields.Data	
	},

	RemoveTag : {
			TagID : TagsValidatorsFields.TagID	
	},

	UpdateTag : {
			SalesRepresentativeID : TagsValidatorsFields.SalesRepresentativeID,
			TagID : TagsValidatorsFields.TagID,
			TagName : TagsValidatorsFields.TagName,
			Data : TagsValidatorsFields.Data	
	},

	UpdateTagData : {
			TagID : TagsValidatorsFields.TagID,
			Data : TagsValidatorsFields.Data	
	}
};

    