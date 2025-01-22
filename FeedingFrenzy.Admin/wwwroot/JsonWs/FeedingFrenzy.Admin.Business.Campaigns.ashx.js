
    	    	
var CampaignsValidatorsFields = {
	
		CampaignID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Campaign ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		CampaignKey : {Validators : [Validators.String], InvalidMessage: "Invalid Campaign Key. " +   ValidatorDescriptions.Length(1, 255) },
		CampaignName : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Campaign Name. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		SourceID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Source ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() }	
}
			
var Campaigns = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.Campaigns.ashx"

	,
	CopyCampaign : function(CampaignID, Callback) {
        return Campaigns.CopyCampaignObject({ CampaignID : CampaignID}, Callback);
    },

	CopyCampaignObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsValidators.CopyCampaign)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Campaigns.CopyCampaign.onValidationError))
					Campaigns.CopyCampaign.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Campaigns.Url, 
					Method : "CopyCampaign", 
					Params : { CampaignID : oObject.CampaignID}, 
					Serialize : Campaigns.CopyCampaign.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Campaigns.CopyCampaign.onErrorReceived) ? Campaigns.CopyCampaign.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Campaigns.Url, "CopyCampaign", { CampaignID : oObject.CampaignID}, Campaigns.CopyCampaign.Serialize || {});
    },
	GetCampaign : function(CampaignID, Callback) {
        return Campaigns.GetCampaignObject({ CampaignID : CampaignID}, Callback);
    },

	GetCampaignObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsValidators.GetCampaign)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Campaigns.GetCampaign.onValidationError))
					Campaigns.GetCampaign.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Campaigns.Url, 
					Method : "GetCampaign", 
					Params : { CampaignID : oObject.CampaignID}, 
					Serialize : Campaigns.GetCampaign.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Campaigns.GetCampaign.onErrorReceived) ? Campaigns.GetCampaign.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Campaigns.Url, "GetCampaign", { CampaignID : oObject.CampaignID}, Campaigns.GetCampaign.Serialize || {});
    },
	GetCampaignByCampaignName : function(CampaignName, Callback) {
        return Campaigns.GetCampaignByCampaignNameObject({ CampaignName : CampaignName}, Callback);
    },

	GetCampaignByCampaignNameObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsValidators.GetCampaignByCampaignName)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Campaigns.GetCampaignByCampaignName.onValidationError))
					Campaigns.GetCampaignByCampaignName.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Campaigns.Url, 
					Method : "GetCampaignByCampaignName", 
					Params : { CampaignName : oObject.CampaignName}, 
					Serialize : Campaigns.GetCampaignByCampaignName.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Campaigns.GetCampaignByCampaignName.onErrorReceived) ? Campaigns.GetCampaignByCampaignName.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Campaigns.Url, "GetCampaignByCampaignName", { CampaignName : oObject.CampaignName}, Campaigns.GetCampaignByCampaignName.Serialize || {});
    },
	GetCampaigns : function(Callback) {
        return Campaigns.GetCampaignsObject({ }, Callback);
    },

	GetCampaignsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsValidators.GetCampaigns)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Campaigns.GetCampaigns.onValidationError))
					Campaigns.GetCampaigns.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Campaigns.Url, 
					Method : "GetCampaigns", 
					Params : { }, 
					Serialize : Campaigns.GetCampaigns.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Campaigns.GetCampaigns.onErrorReceived) ? Campaigns.GetCampaigns.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Campaigns.Url, "GetCampaigns", { }, Campaigns.GetCampaigns.Serialize || {});
    },
	GetCampaignsBySourceID : function(SourceID, Callback) {
        return Campaigns.GetCampaignsBySourceIDObject({ SourceID : SourceID}, Callback);
    },

	GetCampaignsBySourceIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsValidators.GetCampaignsBySourceID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Campaigns.GetCampaignsBySourceID.onValidationError))
					Campaigns.GetCampaignsBySourceID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Campaigns.Url, 
					Method : "GetCampaignsBySourceID", 
					Params : { SourceID : oObject.SourceID}, 
					Serialize : Campaigns.GetCampaignsBySourceID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Campaigns.GetCampaignsBySourceID.onErrorReceived) ? Campaigns.GetCampaignsBySourceID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Campaigns.Url, "GetCampaignsBySourceID", { SourceID : oObject.SourceID}, Campaigns.GetCampaignsBySourceID.Serialize || {});
    },
	GetOrInsertCampaignByCampaigKey : function(SourceID, CampaignKey, Callback) {
        return Campaigns.GetOrInsertCampaignByCampaigKeyObject({ SourceID : SourceID,CampaignKey : CampaignKey}, Callback);
    },

	GetOrInsertCampaignByCampaigKeyObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsValidators.GetOrInsertCampaignByCampaigKey)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Campaigns.GetOrInsertCampaignByCampaigKey.onValidationError))
					Campaigns.GetOrInsertCampaignByCampaigKey.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Campaigns.Url, 
					Method : "GetOrInsertCampaignByCampaigKey", 
					Params : { SourceID : oObject.SourceID,CampaignKey : oObject.CampaignKey}, 
					Serialize : Campaigns.GetOrInsertCampaignByCampaigKey.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Campaigns.GetOrInsertCampaignByCampaigKey.onErrorReceived) ? Campaigns.GetOrInsertCampaignByCampaigKey.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Campaigns.Url, "GetOrInsertCampaignByCampaigKey", { SourceID : oObject.SourceID,CampaignKey : oObject.CampaignKey}, Campaigns.GetOrInsertCampaignByCampaigKey.Serialize || {});
    },
	GetOrInsertCampaignByCampaignName : function(SourceID, CampaignName, Callback) {
        return Campaigns.GetOrInsertCampaignByCampaignNameObject({ SourceID : SourceID,CampaignName : CampaignName}, Callback);
    },

	GetOrInsertCampaignByCampaignNameObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsValidators.GetOrInsertCampaignByCampaignName)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Campaigns.GetOrInsertCampaignByCampaignName.onValidationError))
					Campaigns.GetOrInsertCampaignByCampaignName.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Campaigns.Url, 
					Method : "GetOrInsertCampaignByCampaignName", 
					Params : { SourceID : oObject.SourceID,CampaignName : oObject.CampaignName}, 
					Serialize : Campaigns.GetOrInsertCampaignByCampaignName.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Campaigns.GetOrInsertCampaignByCampaignName.onErrorReceived) ? Campaigns.GetOrInsertCampaignByCampaignName.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Campaigns.Url, "GetOrInsertCampaignByCampaignName", { SourceID : oObject.SourceID,CampaignName : oObject.CampaignName}, Campaigns.GetOrInsertCampaignByCampaignName.Serialize || {});
    },
	InsertCampaign : function(SourceID, CampaignName, CampaignKey, Data, Callback) {
        return Campaigns.InsertCampaignObject({ SourceID : SourceID,CampaignName : CampaignName,CampaignKey : CampaignKey,Data : Data}, Callback);
    },

	InsertCampaignObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsValidators.InsertCampaign)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Campaigns.InsertCampaign.onValidationError))
					Campaigns.InsertCampaign.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Campaigns.Url, 
					Method : "InsertCampaign", 
					Params : { SourceID : oObject.SourceID,CampaignName : oObject.CampaignName,CampaignKey : oObject.CampaignKey,Data : oObject.Data}, 
					Serialize : Campaigns.InsertCampaign.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Campaigns.InsertCampaign.onErrorReceived) ? Campaigns.InsertCampaign.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Campaigns.Url, "InsertCampaign", { SourceID : oObject.SourceID,CampaignName : oObject.CampaignName,CampaignKey : oObject.CampaignKey,Data : oObject.Data}, Campaigns.InsertCampaign.Serialize || {});
    },
	RemoveCampaign : function(CampaignID, Callback) {
        return Campaigns.RemoveCampaignObject({ CampaignID : CampaignID}, Callback);
    },

	RemoveCampaignObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsValidators.RemoveCampaign)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Campaigns.RemoveCampaign.onValidationError))
					Campaigns.RemoveCampaign.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Campaigns.Url, 
					Method : "RemoveCampaign", 
					Params : { CampaignID : oObject.CampaignID}, 
					Serialize : Campaigns.RemoveCampaign.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Campaigns.RemoveCampaign.onErrorReceived) ? Campaigns.RemoveCampaign.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Campaigns.Url, "RemoveCampaign", { CampaignID : oObject.CampaignID}, Campaigns.RemoveCampaign.Serialize || {});
    },
	UpdateCampaign : function(CampaignID, SourceID, CampaignName, CampaignKey, Data, Callback) {
        return Campaigns.UpdateCampaignObject({ CampaignID : CampaignID,SourceID : SourceID,CampaignName : CampaignName,CampaignKey : CampaignKey,Data : Data}, Callback);
    },

	UpdateCampaignObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsValidators.UpdateCampaign)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Campaigns.UpdateCampaign.onValidationError))
					Campaigns.UpdateCampaign.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Campaigns.Url, 
					Method : "UpdateCampaign", 
					Params : { CampaignID : oObject.CampaignID,SourceID : oObject.SourceID,CampaignName : oObject.CampaignName,CampaignKey : oObject.CampaignKey,Data : oObject.Data}, 
					Serialize : Campaigns.UpdateCampaign.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Campaigns.UpdateCampaign.onErrorReceived) ? Campaigns.UpdateCampaign.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Campaigns.Url, "UpdateCampaign", { CampaignID : oObject.CampaignID,SourceID : oObject.SourceID,CampaignName : oObject.CampaignName,CampaignKey : oObject.CampaignKey,Data : oObject.Data}, Campaigns.UpdateCampaign.Serialize || {});
    },
	UpdateCampaignData : function(CampaignID, Data, Callback) {
        return Campaigns.UpdateCampaignDataObject({ CampaignID : CampaignID,Data : Data}, Callback);
    },

	UpdateCampaignDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsValidators.UpdateCampaignData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Campaigns.UpdateCampaignData.onValidationError))
					Campaigns.UpdateCampaignData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Campaigns.Url, 
					Method : "UpdateCampaignData", 
					Params : { CampaignID : oObject.CampaignID,Data : oObject.Data}, 
					Serialize : Campaigns.UpdateCampaignData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Campaigns.UpdateCampaignData.onErrorReceived) ? Campaigns.UpdateCampaignData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Campaigns.Url, "UpdateCampaignData", { CampaignID : oObject.CampaignID,Data : oObject.Data}, Campaigns.UpdateCampaignData.Serialize || {});
    }
};

var CampaignsValidators = {
	

	CopyCampaign : {
			CampaignID : CampaignsValidatorsFields.CampaignID	
	},

	GetCampaign : {
			CampaignID : CampaignsValidatorsFields.CampaignID	
	},

	GetCampaignByCampaignName : {
			CampaignName : CampaignsValidatorsFields.CampaignName	
	},

	GetCampaigns : {	
	},

	GetCampaignsBySourceID : {
			SourceID : CampaignsValidatorsFields.SourceID	
	},

	GetOrInsertCampaignByCampaigKey : {
			SourceID : CampaignsValidatorsFields.SourceID,
			CampaignKey : CampaignsValidatorsFields.CampaignKey	
	},

	GetOrInsertCampaignByCampaignName : {
			SourceID : CampaignsValidatorsFields.SourceID,
			CampaignName : CampaignsValidatorsFields.CampaignName	
	},

	InsertCampaign : {
			SourceID : CampaignsValidatorsFields.SourceID,
			CampaignName : CampaignsValidatorsFields.CampaignName,
			CampaignKey : CampaignsValidatorsFields.CampaignKey,
			Data : CampaignsValidatorsFields.Data	
	},

	RemoveCampaign : {
			CampaignID : CampaignsValidatorsFields.CampaignID	
	},

	UpdateCampaign : {
			CampaignID : CampaignsValidatorsFields.CampaignID,
			SourceID : CampaignsValidatorsFields.SourceID,
			CampaignName : CampaignsValidatorsFields.CampaignName,
			CampaignKey : CampaignsValidatorsFields.CampaignKey,
			Data : CampaignsValidatorsFields.Data	
	},

	UpdateCampaignData : {
			CampaignID : CampaignsValidatorsFields.CampaignID,
			Data : CampaignsValidatorsFields.Data	
	}
};

    