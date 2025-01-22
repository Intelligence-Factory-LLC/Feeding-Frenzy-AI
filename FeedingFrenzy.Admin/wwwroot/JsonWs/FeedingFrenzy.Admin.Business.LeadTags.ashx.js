
    	    	
var LeadTagsValidatorsFields = {
	
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		LeadID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Lead ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		LeadTagID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Lead Tag ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		TagID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Tag ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		TagName : {Validators : [Validators.String], InvalidMessage: "Invalid TagName. " +   ValidatorDescriptions.Length(1, 255) }	
}
			
var LeadTags = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.LeadTags.ashx"

	,
	CopyLeadTag : function(LeadTagID, Callback) {
        return LeadTags.CopyLeadTagObject({ LeadTagID : LeadTagID}, Callback);
    },

	CopyLeadTagObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsValidators.CopyLeadTag)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTags.CopyLeadTag.onValidationError))
					LeadTags.CopyLeadTag.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTags.Url, 
					Method : "CopyLeadTag", 
					Params : { LeadTagID : oObject.LeadTagID}, 
					Serialize : LeadTags.CopyLeadTag.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTags.CopyLeadTag.onErrorReceived) ? LeadTags.CopyLeadTag.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTags.Url, "CopyLeadTag", { LeadTagID : oObject.LeadTagID}, LeadTags.CopyLeadTag.Serialize || {});
    },
	GetLeadTag : function(LeadTagID, Callback) {
        return LeadTags.GetLeadTagObject({ LeadTagID : LeadTagID}, Callback);
    },

	GetLeadTagObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsValidators.GetLeadTag)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTags.GetLeadTag.onValidationError))
					LeadTags.GetLeadTag.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTags.Url, 
					Method : "GetLeadTag", 
					Params : { LeadTagID : oObject.LeadTagID}, 
					Serialize : LeadTags.GetLeadTag.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTags.GetLeadTag.onErrorReceived) ? LeadTags.GetLeadTag.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTags.Url, "GetLeadTag", { LeadTagID : oObject.LeadTagID}, LeadTags.GetLeadTag.Serialize || {});
    },
	GetLeadTagByLeadIDTagID : function(LeadID, TagID, Callback) {
        return LeadTags.GetLeadTagByLeadIDTagIDObject({ LeadID : LeadID,TagID : TagID}, Callback);
    },

	GetLeadTagByLeadIDTagIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsValidators.GetLeadTagByLeadIDTagID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTags.GetLeadTagByLeadIDTagID.onValidationError))
					LeadTags.GetLeadTagByLeadIDTagID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTags.Url, 
					Method : "GetLeadTagByLeadIDTagID", 
					Params : { LeadID : oObject.LeadID,TagID : oObject.TagID}, 
					Serialize : LeadTags.GetLeadTagByLeadIDTagID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTags.GetLeadTagByLeadIDTagID.onErrorReceived) ? LeadTags.GetLeadTagByLeadIDTagID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTags.Url, "GetLeadTagByLeadIDTagID", { LeadID : oObject.LeadID,TagID : oObject.TagID}, LeadTags.GetLeadTagByLeadIDTagID.Serialize || {});
    },
	GetLeadTags : function(Callback) {
        return LeadTags.GetLeadTagsObject({ }, Callback);
    },

	GetLeadTagsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsValidators.GetLeadTags)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTags.GetLeadTags.onValidationError))
					LeadTags.GetLeadTags.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTags.Url, 
					Method : "GetLeadTags", 
					Params : { }, 
					Serialize : LeadTags.GetLeadTags.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTags.GetLeadTags.onErrorReceived) ? LeadTags.GetLeadTags.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTags.Url, "GetLeadTags", { }, LeadTags.GetLeadTags.Serialize || {});
    },
	GetLeadTagsByLeadID : function(LeadID, Callback) {
        return LeadTags.GetLeadTagsByLeadIDObject({ LeadID : LeadID}, Callback);
    },

	GetLeadTagsByLeadIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsValidators.GetLeadTagsByLeadID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTags.GetLeadTagsByLeadID.onValidationError))
					LeadTags.GetLeadTagsByLeadID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTags.Url, 
					Method : "GetLeadTagsByLeadID", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : LeadTags.GetLeadTagsByLeadID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTags.GetLeadTagsByLeadID.onErrorReceived) ? LeadTags.GetLeadTagsByLeadID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTags.Url, "GetLeadTagsByLeadID", { LeadID : oObject.LeadID}, LeadTags.GetLeadTagsByLeadID.Serialize || {});
    },
	GetLeadTagsByTagID : function(TagID, Callback) {
        return LeadTags.GetLeadTagsByTagIDObject({ TagID : TagID}, Callback);
    },

	GetLeadTagsByTagIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsValidators.GetLeadTagsByTagID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTags.GetLeadTagsByTagID.onValidationError))
					LeadTags.GetLeadTagsByTagID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTags.Url, 
					Method : "GetLeadTagsByTagID", 
					Params : { TagID : oObject.TagID}, 
					Serialize : LeadTags.GetLeadTagsByTagID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTags.GetLeadTagsByTagID.onErrorReceived) ? LeadTags.GetLeadTagsByTagID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTags.Url, "GetLeadTagsByTagID", { TagID : oObject.TagID}, LeadTags.GetLeadTagsByTagID.Serialize || {});
    },
	InsertLeadTag : function(LeadID, TagID, Data, Callback) {
        return LeadTags.InsertLeadTagObject({ LeadID : LeadID,TagID : TagID,Data : Data}, Callback);
    },

	InsertLeadTagObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsValidators.InsertLeadTag)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTags.InsertLeadTag.onValidationError))
					LeadTags.InsertLeadTag.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTags.Url, 
					Method : "InsertLeadTag", 
					Params : { LeadID : oObject.LeadID,TagID : oObject.TagID,Data : oObject.Data}, 
					Serialize : LeadTags.InsertLeadTag.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTags.InsertLeadTag.onErrorReceived) ? LeadTags.InsertLeadTag.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTags.Url, "InsertLeadTag", { LeadID : oObject.LeadID,TagID : oObject.TagID,Data : oObject.Data}, LeadTags.InsertLeadTag.Serialize || {});
    },
	InsertOrUpdateLeadTag : function(LeadID, TagName, Callback) {
        return LeadTags.InsertOrUpdateLeadTagObject({ LeadID : LeadID,TagName : TagName}, Callback);
    },

	InsertOrUpdateLeadTagObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsValidators.InsertOrUpdateLeadTag)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTags.InsertOrUpdateLeadTag.onValidationError))
					LeadTags.InsertOrUpdateLeadTag.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTags.Url, 
					Method : "InsertOrUpdateLeadTag", 
					Params : { LeadID : oObject.LeadID,TagName : oObject.TagName}, 
					Serialize : LeadTags.InsertOrUpdateLeadTag.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTags.InsertOrUpdateLeadTag.onErrorReceived) ? LeadTags.InsertOrUpdateLeadTag.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTags.Url, "InsertOrUpdateLeadTag", { LeadID : oObject.LeadID,TagName : oObject.TagName}, LeadTags.InsertOrUpdateLeadTag.Serialize || {});
    },
	RemoveLeadTag : function(LeadTagID, Callback) {
        return LeadTags.RemoveLeadTagObject({ LeadTagID : LeadTagID}, Callback);
    },

	RemoveLeadTagObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsValidators.RemoveLeadTag)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTags.RemoveLeadTag.onValidationError))
					LeadTags.RemoveLeadTag.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTags.Url, 
					Method : "RemoveLeadTag", 
					Params : { LeadTagID : oObject.LeadTagID}, 
					Serialize : LeadTags.RemoveLeadTag.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTags.RemoveLeadTag.onErrorReceived) ? LeadTags.RemoveLeadTag.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTags.Url, "RemoveLeadTag", { LeadTagID : oObject.LeadTagID}, LeadTags.RemoveLeadTag.Serialize || {});
    },
	RemoveLeadTag2 : function(LeadID, TagName, Callback) {
        return LeadTags.RemoveLeadTag2Object({ LeadID : LeadID,TagName : TagName}, Callback);
    },

	RemoveLeadTag2Object : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsValidators.RemoveLeadTag2)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTags.RemoveLeadTag2.onValidationError))
					LeadTags.RemoveLeadTag2.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTags.Url, 
					Method : "RemoveLeadTag2", 
					Params : { LeadID : oObject.LeadID,TagName : oObject.TagName}, 
					Serialize : LeadTags.RemoveLeadTag2.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTags.RemoveLeadTag2.onErrorReceived) ? LeadTags.RemoveLeadTag2.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTags.Url, "RemoveLeadTag2", { LeadID : oObject.LeadID,TagName : oObject.TagName}, LeadTags.RemoveLeadTag2.Serialize || {});
    },
	UpdateLeadTag : function(LeadTagID, LeadID, TagID, Data, Callback) {
        return LeadTags.UpdateLeadTagObject({ LeadTagID : LeadTagID,LeadID : LeadID,TagID : TagID,Data : Data}, Callback);
    },

	UpdateLeadTagObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsValidators.UpdateLeadTag)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTags.UpdateLeadTag.onValidationError))
					LeadTags.UpdateLeadTag.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTags.Url, 
					Method : "UpdateLeadTag", 
					Params : { LeadTagID : oObject.LeadTagID,LeadID : oObject.LeadID,TagID : oObject.TagID,Data : oObject.Data}, 
					Serialize : LeadTags.UpdateLeadTag.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTags.UpdateLeadTag.onErrorReceived) ? LeadTags.UpdateLeadTag.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTags.Url, "UpdateLeadTag", { LeadTagID : oObject.LeadTagID,LeadID : oObject.LeadID,TagID : oObject.TagID,Data : oObject.Data}, LeadTags.UpdateLeadTag.Serialize || {});
    },
	UpdateLeadTagData : function(LeadTagID, Data, Callback) {
        return LeadTags.UpdateLeadTagDataObject({ LeadTagID : LeadTagID,Data : Data}, Callback);
    },

	UpdateLeadTagDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsValidators.UpdateLeadTagData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTags.UpdateLeadTagData.onValidationError))
					LeadTags.UpdateLeadTagData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTags.Url, 
					Method : "UpdateLeadTagData", 
					Params : { LeadTagID : oObject.LeadTagID,Data : oObject.Data}, 
					Serialize : LeadTags.UpdateLeadTagData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTags.UpdateLeadTagData.onErrorReceived) ? LeadTags.UpdateLeadTagData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTags.Url, "UpdateLeadTagData", { LeadTagID : oObject.LeadTagID,Data : oObject.Data}, LeadTags.UpdateLeadTagData.Serialize || {});
    }
};

var LeadTagsValidators = {
	

	CopyLeadTag : {
			LeadTagID : LeadTagsValidatorsFields.LeadTagID	
	},

	GetLeadTag : {
			LeadTagID : LeadTagsValidatorsFields.LeadTagID	
	},

	GetLeadTagByLeadIDTagID : {
			LeadID : LeadTagsValidatorsFields.LeadID,
			TagID : LeadTagsValidatorsFields.TagID	
	},

	GetLeadTags : {	
	},

	GetLeadTagsByLeadID : {
			LeadID : LeadTagsValidatorsFields.LeadID	
	},

	GetLeadTagsByTagID : {
			TagID : LeadTagsValidatorsFields.TagID	
	},

	InsertLeadTag : {
			LeadID : LeadTagsValidatorsFields.LeadID,
			TagID : LeadTagsValidatorsFields.TagID,
			Data : LeadTagsValidatorsFields.Data	
	},

	InsertOrUpdateLeadTag : {
			LeadID : LeadTagsValidatorsFields.LeadID,
			TagName : LeadTagsValidatorsFields.TagName	
	},

	RemoveLeadTag : {
			LeadTagID : LeadTagsValidatorsFields.LeadTagID	
	},

	RemoveLeadTag2 : {
			LeadID : LeadTagsValidatorsFields.LeadID,
			TagName : LeadTagsValidatorsFields.TagName	
	},

	UpdateLeadTag : {
			LeadTagID : LeadTagsValidatorsFields.LeadTagID,
			LeadID : LeadTagsValidatorsFields.LeadID,
			TagID : LeadTagsValidatorsFields.TagID,
			Data : LeadTagsValidatorsFields.Data	
	},

	UpdateLeadTagData : {
			LeadTagID : LeadTagsValidatorsFields.LeadTagID,
			Data : LeadTagsValidatorsFields.Data	
	}
};

    