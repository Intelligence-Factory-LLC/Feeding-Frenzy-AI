
    	    	
var FeaturesValidatorsFields = {
	
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		FeatureID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Feature ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		FeatureName : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Feature Name. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		IsEnabled : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Enabled. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		Settings : {Validators : [Validators.Data], InvalidMessage: "Invalid Settings. " +   ValidatorDescriptions.Length(1) },
		SettingsAssembly : {Validators : [Validators.String], InvalidMessage: "Invalid Settings Assembly. " +   ValidatorDescriptions.Length(1, 255) },
		SettingsClass : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Settings Class. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		Version : {Validators : [Validators.String], InvalidMessage: "Invalid Version. " +   ValidatorDescriptions.Length(1, 255) }	
}
			
var Features = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.Features.ashx"

	,
	CopyFeature : function(FeatureID, Callback) {
        return Features.CopyFeatureObject({ FeatureID : FeatureID}, Callback);
    },

	CopyFeatureObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesValidators.CopyFeature)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Features.CopyFeature.onValidationError))
					Features.CopyFeature.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Features.Url, 
					Method : "CopyFeature", 
					Params : { FeatureID : oObject.FeatureID}, 
					Serialize : Features.CopyFeature.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Features.CopyFeature.onErrorReceived) ? Features.CopyFeature.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Features.Url, "CopyFeature", { FeatureID : oObject.FeatureID}, Features.CopyFeature.Serialize || {});
    },
	GetFeature : function(FeatureID, Callback) {
        return Features.GetFeatureObject({ FeatureID : FeatureID}, Callback);
    },

	GetFeatureObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesValidators.GetFeature)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Features.GetFeature.onValidationError))
					Features.GetFeature.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Features.Url, 
					Method : "GetFeature", 
					Params : { FeatureID : oObject.FeatureID}, 
					Serialize : Features.GetFeature.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Features.GetFeature.onErrorReceived) ? Features.GetFeature.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Features.Url, "GetFeature", { FeatureID : oObject.FeatureID}, Features.GetFeature.Serialize || {});
    },
	GetFeatureByFeatureName : function(FeatureName, Callback) {
        return Features.GetFeatureByFeatureNameObject({ FeatureName : FeatureName}, Callback);
    },

	GetFeatureByFeatureNameObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesValidators.GetFeatureByFeatureName)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Features.GetFeatureByFeatureName.onValidationError))
					Features.GetFeatureByFeatureName.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Features.Url, 
					Method : "GetFeatureByFeatureName", 
					Params : { FeatureName : oObject.FeatureName}, 
					Serialize : Features.GetFeatureByFeatureName.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Features.GetFeatureByFeatureName.onErrorReceived) ? Features.GetFeatureByFeatureName.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Features.Url, "GetFeatureByFeatureName", { FeatureName : oObject.FeatureName}, Features.GetFeatureByFeatureName.Serialize || {});
    },
	GetFeatures : function(Callback) {
        return Features.GetFeaturesObject({ }, Callback);
    },

	GetFeaturesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesValidators.GetFeatures)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Features.GetFeatures.onValidationError))
					Features.GetFeatures.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Features.Url, 
					Method : "GetFeatures", 
					Params : { }, 
					Serialize : Features.GetFeatures.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Features.GetFeatures.onErrorReceived) ? Features.GetFeatures.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Features.Url, "GetFeatures", { }, Features.GetFeatures.Serialize || {});
    },
	InsertFeature : function(FeatureName, Version, IsEnabled, SettingsAssembly, SettingsClass, Settings, Data, Callback) {
        return Features.InsertFeatureObject({ FeatureName : FeatureName,Version : Version,IsEnabled : IsEnabled,SettingsAssembly : SettingsAssembly,SettingsClass : SettingsClass,Settings : Settings,Data : Data}, Callback);
    },

	InsertFeatureObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesValidators.InsertFeature)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Features.InsertFeature.onValidationError))
					Features.InsertFeature.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Features.Url, 
					Method : "InsertFeature", 
					Params : { FeatureName : oObject.FeatureName,Version : oObject.Version,IsEnabled : oObject.IsEnabled,SettingsAssembly : oObject.SettingsAssembly,SettingsClass : oObject.SettingsClass,Settings : oObject.Settings,Data : oObject.Data}, 
					Serialize : Features.InsertFeature.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Features.InsertFeature.onErrorReceived) ? Features.InsertFeature.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Features.Url, "InsertFeature", { FeatureName : oObject.FeatureName,Version : oObject.Version,IsEnabled : oObject.IsEnabled,SettingsAssembly : oObject.SettingsAssembly,SettingsClass : oObject.SettingsClass,Settings : oObject.Settings,Data : oObject.Data}, Features.InsertFeature.Serialize || {});
    },
	MarkFeatureAsEnabled : function(FeatureID, Callback) {
        return Features.MarkFeatureAsEnabledObject({ FeatureID : FeatureID}, Callback);
    },

	MarkFeatureAsEnabledObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesValidators.MarkFeatureAsEnabled)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Features.MarkFeatureAsEnabled.onValidationError))
					Features.MarkFeatureAsEnabled.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Features.Url, 
					Method : "MarkFeatureAsEnabled", 
					Params : { FeatureID : oObject.FeatureID}, 
					Serialize : Features.MarkFeatureAsEnabled.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Features.MarkFeatureAsEnabled.onErrorReceived) ? Features.MarkFeatureAsEnabled.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Features.Url, "MarkFeatureAsEnabled", { FeatureID : oObject.FeatureID}, Features.MarkFeatureAsEnabled.Serialize || {});
    },
	MarkFeatureAsNotEnabled : function(FeatureID, Callback) {
        return Features.MarkFeatureAsNotEnabledObject({ FeatureID : FeatureID}, Callback);
    },

	MarkFeatureAsNotEnabledObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesValidators.MarkFeatureAsNotEnabled)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Features.MarkFeatureAsNotEnabled.onValidationError))
					Features.MarkFeatureAsNotEnabled.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Features.Url, 
					Method : "MarkFeatureAsNotEnabled", 
					Params : { FeatureID : oObject.FeatureID}, 
					Serialize : Features.MarkFeatureAsNotEnabled.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Features.MarkFeatureAsNotEnabled.onErrorReceived) ? Features.MarkFeatureAsNotEnabled.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Features.Url, "MarkFeatureAsNotEnabled", { FeatureID : oObject.FeatureID}, Features.MarkFeatureAsNotEnabled.Serialize || {});
    },
	RemoveFeature : function(FeatureID, Callback) {
        return Features.RemoveFeatureObject({ FeatureID : FeatureID}, Callback);
    },

	RemoveFeatureObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesValidators.RemoveFeature)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Features.RemoveFeature.onValidationError))
					Features.RemoveFeature.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Features.Url, 
					Method : "RemoveFeature", 
					Params : { FeatureID : oObject.FeatureID}, 
					Serialize : Features.RemoveFeature.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Features.RemoveFeature.onErrorReceived) ? Features.RemoveFeature.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Features.Url, "RemoveFeature", { FeatureID : oObject.FeatureID}, Features.RemoveFeature.Serialize || {});
    },
	UpdateFeature : function(FeatureID, FeatureName, Version, IsEnabled, SettingsAssembly, SettingsClass, Settings, Data, Callback) {
        return Features.UpdateFeatureObject({ FeatureID : FeatureID,FeatureName : FeatureName,Version : Version,IsEnabled : IsEnabled,SettingsAssembly : SettingsAssembly,SettingsClass : SettingsClass,Settings : Settings,Data : Data}, Callback);
    },

	UpdateFeatureObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesValidators.UpdateFeature)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Features.UpdateFeature.onValidationError))
					Features.UpdateFeature.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Features.Url, 
					Method : "UpdateFeature", 
					Params : { FeatureID : oObject.FeatureID,FeatureName : oObject.FeatureName,Version : oObject.Version,IsEnabled : oObject.IsEnabled,SettingsAssembly : oObject.SettingsAssembly,SettingsClass : oObject.SettingsClass,Settings : oObject.Settings,Data : oObject.Data}, 
					Serialize : Features.UpdateFeature.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Features.UpdateFeature.onErrorReceived) ? Features.UpdateFeature.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Features.Url, "UpdateFeature", { FeatureID : oObject.FeatureID,FeatureName : oObject.FeatureName,Version : oObject.Version,IsEnabled : oObject.IsEnabled,SettingsAssembly : oObject.SettingsAssembly,SettingsClass : oObject.SettingsClass,Settings : oObject.Settings,Data : oObject.Data}, Features.UpdateFeature.Serialize || {});
    },
	UpdateFeatureData : function(FeatureID, Data, Callback) {
        return Features.UpdateFeatureDataObject({ FeatureID : FeatureID,Data : Data}, Callback);
    },

	UpdateFeatureDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesValidators.UpdateFeatureData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Features.UpdateFeatureData.onValidationError))
					Features.UpdateFeatureData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Features.Url, 
					Method : "UpdateFeatureData", 
					Params : { FeatureID : oObject.FeatureID,Data : oObject.Data}, 
					Serialize : Features.UpdateFeatureData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Features.UpdateFeatureData.onErrorReceived) ? Features.UpdateFeatureData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Features.Url, "UpdateFeatureData", { FeatureID : oObject.FeatureID,Data : oObject.Data}, Features.UpdateFeatureData.Serialize || {});
    },
	UpdateFeatureSettings : function(FeatureID, Settings, Callback) {
        return Features.UpdateFeatureSettingsObject({ FeatureID : FeatureID,Settings : Settings}, Callback);
    },

	UpdateFeatureSettingsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesValidators.UpdateFeatureSettings)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Features.UpdateFeatureSettings.onValidationError))
					Features.UpdateFeatureSettings.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Features.Url, 
					Method : "UpdateFeatureSettings", 
					Params : { FeatureID : oObject.FeatureID,Settings : oObject.Settings}, 
					Serialize : Features.UpdateFeatureSettings.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Features.UpdateFeatureSettings.onErrorReceived) ? Features.UpdateFeatureSettings.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Features.Url, "UpdateFeatureSettings", { FeatureID : oObject.FeatureID,Settings : oObject.Settings}, Features.UpdateFeatureSettings.Serialize || {});
    }
};

var FeaturesValidators = {
	

	CopyFeature : {
			FeatureID : FeaturesValidatorsFields.FeatureID	
	},

	GetFeature : {
			FeatureID : FeaturesValidatorsFields.FeatureID	
	},

	GetFeatureByFeatureName : {
			FeatureName : FeaturesValidatorsFields.FeatureName	
	},

	GetFeatures : {	
	},

	InsertFeature : {
			FeatureName : FeaturesValidatorsFields.FeatureName,
			Version : FeaturesValidatorsFields.Version,
			IsEnabled : FeaturesValidatorsFields.IsEnabled,
			SettingsAssembly : FeaturesValidatorsFields.SettingsAssembly,
			SettingsClass : FeaturesValidatorsFields.SettingsClass,
			Settings : FeaturesValidatorsFields.Settings,
			Data : FeaturesValidatorsFields.Data	
	},

	MarkFeatureAsEnabled : {
			FeatureID : FeaturesValidatorsFields.FeatureID	
	},

	MarkFeatureAsNotEnabled : {
			FeatureID : FeaturesValidatorsFields.FeatureID	
	},

	RemoveFeature : {
			FeatureID : FeaturesValidatorsFields.FeatureID	
	},

	UpdateFeature : {
			FeatureID : FeaturesValidatorsFields.FeatureID,
			FeatureName : FeaturesValidatorsFields.FeatureName,
			Version : FeaturesValidatorsFields.Version,
			IsEnabled : FeaturesValidatorsFields.IsEnabled,
			SettingsAssembly : FeaturesValidatorsFields.SettingsAssembly,
			SettingsClass : FeaturesValidatorsFields.SettingsClass,
			Settings : FeaturesValidatorsFields.Settings,
			Data : FeaturesValidatorsFields.Data	
	},

	UpdateFeatureData : {
			FeatureID : FeaturesValidatorsFields.FeatureID,
			Data : FeaturesValidatorsFields.Data	
	},

	UpdateFeatureSettings : {
			FeatureID : FeaturesValidatorsFields.FeatureID,
			Settings : FeaturesValidatorsFields.Settings	
	}
};

    