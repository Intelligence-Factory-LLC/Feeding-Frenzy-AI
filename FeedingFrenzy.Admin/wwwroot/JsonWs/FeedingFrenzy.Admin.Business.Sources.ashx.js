
    	    	
var SourcesValidatorsFields = {
	
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		SourceID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Source ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		SourceName : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Source Name. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		strCampaign : {Validators : [Validators.String], InvalidMessage: "Invalid strCampaign. " +   ValidatorDescriptions.Length(1, 255) }	
}
			
var Sources = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.Sources.ashx"

	,
	CopySource : function(SourceID, Callback) {
        return Sources.CopySourceObject({ SourceID : SourceID}, Callback);
    },

	CopySourceObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SourcesValidators.CopySource)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Sources.CopySource.onValidationError))
					Sources.CopySource.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Sources.Url, 
					Method : "CopySource", 
					Params : { SourceID : oObject.SourceID}, 
					Serialize : Sources.CopySource.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Sources.CopySource.onErrorReceived) ? Sources.CopySource.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Sources.Url, "CopySource", { SourceID : oObject.SourceID}, Sources.CopySource.Serialize || {});
    },
	GetOrInsertSource : function(strCampaign, Callback) {
        return Sources.GetOrInsertSourceObject({ strCampaign : strCampaign}, Callback);
    },

	GetOrInsertSourceObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SourcesValidators.GetOrInsertSource)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Sources.GetOrInsertSource.onValidationError))
					Sources.GetOrInsertSource.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Sources.Url, 
					Method : "GetOrInsertSource", 
					Params : { strCampaign : oObject.strCampaign}, 
					Serialize : Sources.GetOrInsertSource.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Sources.GetOrInsertSource.onErrorReceived) ? Sources.GetOrInsertSource.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Sources.Url, "GetOrInsertSource", { strCampaign : oObject.strCampaign}, Sources.GetOrInsertSource.Serialize || {});
    },
	GetSource : function(SourceID, Callback) {
        return Sources.GetSourceObject({ SourceID : SourceID}, Callback);
    },

	GetSourceObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SourcesValidators.GetSource)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Sources.GetSource.onValidationError))
					Sources.GetSource.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Sources.Url, 
					Method : "GetSource", 
					Params : { SourceID : oObject.SourceID}, 
					Serialize : Sources.GetSource.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Sources.GetSource.onErrorReceived) ? Sources.GetSource.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Sources.Url, "GetSource", { SourceID : oObject.SourceID}, Sources.GetSource.Serialize || {});
    },
	GetSourceBySourceName : function(SourceName, Callback) {
        return Sources.GetSourceBySourceNameObject({ SourceName : SourceName}, Callback);
    },

	GetSourceBySourceNameObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SourcesValidators.GetSourceBySourceName)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Sources.GetSourceBySourceName.onValidationError))
					Sources.GetSourceBySourceName.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Sources.Url, 
					Method : "GetSourceBySourceName", 
					Params : { SourceName : oObject.SourceName}, 
					Serialize : Sources.GetSourceBySourceName.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Sources.GetSourceBySourceName.onErrorReceived) ? Sources.GetSourceBySourceName.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Sources.Url, "GetSourceBySourceName", { SourceName : oObject.SourceName}, Sources.GetSourceBySourceName.Serialize || {});
    },
	GetSources : function(Callback) {
        return Sources.GetSourcesObject({ }, Callback);
    },

	GetSourcesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SourcesValidators.GetSources)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Sources.GetSources.onValidationError))
					Sources.GetSources.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Sources.Url, 
					Method : "GetSources", 
					Params : { }, 
					Serialize : Sources.GetSources.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Sources.GetSources.onErrorReceived) ? Sources.GetSources.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Sources.Url, "GetSources", { }, Sources.GetSources.Serialize || {});
    },
	InsertSource : function(SourceName, Data, Callback) {
        return Sources.InsertSourceObject({ SourceName : SourceName,Data : Data}, Callback);
    },

	InsertSourceObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SourcesValidators.InsertSource)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Sources.InsertSource.onValidationError))
					Sources.InsertSource.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Sources.Url, 
					Method : "InsertSource", 
					Params : { SourceName : oObject.SourceName,Data : oObject.Data}, 
					Serialize : Sources.InsertSource.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Sources.InsertSource.onErrorReceived) ? Sources.InsertSource.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Sources.Url, "InsertSource", { SourceName : oObject.SourceName,Data : oObject.Data}, Sources.InsertSource.Serialize || {});
    },
	RemoveSource : function(SourceID, Callback) {
        return Sources.RemoveSourceObject({ SourceID : SourceID}, Callback);
    },

	RemoveSourceObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SourcesValidators.RemoveSource)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Sources.RemoveSource.onValidationError))
					Sources.RemoveSource.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Sources.Url, 
					Method : "RemoveSource", 
					Params : { SourceID : oObject.SourceID}, 
					Serialize : Sources.RemoveSource.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Sources.RemoveSource.onErrorReceived) ? Sources.RemoveSource.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Sources.Url, "RemoveSource", { SourceID : oObject.SourceID}, Sources.RemoveSource.Serialize || {});
    },
	UpdateSource : function(SourceID, SourceName, Data, Callback) {
        return Sources.UpdateSourceObject({ SourceID : SourceID,SourceName : SourceName,Data : Data}, Callback);
    },

	UpdateSourceObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SourcesValidators.UpdateSource)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Sources.UpdateSource.onValidationError))
					Sources.UpdateSource.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Sources.Url, 
					Method : "UpdateSource", 
					Params : { SourceID : oObject.SourceID,SourceName : oObject.SourceName,Data : oObject.Data}, 
					Serialize : Sources.UpdateSource.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Sources.UpdateSource.onErrorReceived) ? Sources.UpdateSource.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Sources.Url, "UpdateSource", { SourceID : oObject.SourceID,SourceName : oObject.SourceName,Data : oObject.Data}, Sources.UpdateSource.Serialize || {});
    },
	UpdateSourceData : function(SourceID, Data, Callback) {
        return Sources.UpdateSourceDataObject({ SourceID : SourceID,Data : Data}, Callback);
    },

	UpdateSourceDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SourcesValidators.UpdateSourceData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Sources.UpdateSourceData.onValidationError))
					Sources.UpdateSourceData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Sources.Url, 
					Method : "UpdateSourceData", 
					Params : { SourceID : oObject.SourceID,Data : oObject.Data}, 
					Serialize : Sources.UpdateSourceData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Sources.UpdateSourceData.onErrorReceived) ? Sources.UpdateSourceData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Sources.Url, "UpdateSourceData", { SourceID : oObject.SourceID,Data : oObject.Data}, Sources.UpdateSourceData.Serialize || {});
    }
};

var SourcesValidators = {
	

	CopySource : {
			SourceID : SourcesValidatorsFields.SourceID	
	},

	GetOrInsertSource : {
			strCampaign : SourcesValidatorsFields.strCampaign	
	},

	GetSource : {
			SourceID : SourcesValidatorsFields.SourceID	
	},

	GetSourceBySourceName : {
			SourceName : SourcesValidatorsFields.SourceName	
	},

	GetSources : {	
	},

	InsertSource : {
			SourceName : SourcesValidatorsFields.SourceName,
			Data : SourcesValidatorsFields.Data	
	},

	RemoveSource : {
			SourceID : SourcesValidatorsFields.SourceID	
	},

	UpdateSource : {
			SourceID : SourcesValidatorsFields.SourceID,
			SourceName : SourcesValidatorsFields.SourceName,
			Data : SourcesValidatorsFields.Data	
	},

	UpdateSourceData : {
			SourceID : SourcesValidatorsFields.SourceID,
			Data : SourcesValidatorsFields.Data	
	}
};

    