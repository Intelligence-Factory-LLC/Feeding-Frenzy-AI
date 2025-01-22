
    	    	
var PageLayoutsValidatorsFields = {
	
		DefaultContent : {Validators : [Validators.String], InvalidMessage: "Invalid DefaultContent. " +   ValidatorDescriptions.Length(1, 255) },
		Handler : {Validators : [Validators.Url, Validators.Required], InvalidMessage: "Invalid Handler. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1,512) },
		IsEnabled : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Enabled. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		PageLayoutID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Page Layout ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		PageTitle : {Validators : [Validators.String], InvalidMessage: "Invalid Page Title. " +   ValidatorDescriptions.Length(1, 255) },
		SiteID : {Validators : [Validators.ID], InvalidMessage: "Invalid Site. " +   ValidatorDescriptions.ID() },
		Url : {Validators : [Validators.Url, Validators.Required], InvalidMessage: "Invalid Url. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1,512) },
		URL : {Validators : [Validators.String], InvalidMessage: "Invalid URL. " +   ValidatorDescriptions.Length(1, 255) }	
}
			
var PageLayouts = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.PageLayouts.ashx"

	,
	CopyPageLayout : function(PageLayoutID, Callback) {
        return PageLayouts.CopyPageLayoutObject({ PageLayoutID : PageLayoutID}, Callback);
    },

	CopyPageLayoutObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsValidators.CopyPageLayout)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayouts.CopyPageLayout.onValidationError))
					PageLayouts.CopyPageLayout.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayouts.Url, 
					Method : "CopyPageLayout", 
					Params : { PageLayoutID : oObject.PageLayoutID}, 
					Serialize : PageLayouts.CopyPageLayout.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayouts.CopyPageLayout.onErrorReceived) ? PageLayouts.CopyPageLayout.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayouts.Url, "CopyPageLayout", { PageLayoutID : oObject.PageLayoutID}, PageLayouts.CopyPageLayout.Serialize || {});
    },
	GetPageLayout : function(PageLayoutID, Callback) {
        return PageLayouts.GetPageLayoutObject({ PageLayoutID : PageLayoutID}, Callback);
    },

	GetPageLayoutObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsValidators.GetPageLayout)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayouts.GetPageLayout.onValidationError))
					PageLayouts.GetPageLayout.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayouts.Url, 
					Method : "GetPageLayout", 
					Params : { PageLayoutID : oObject.PageLayoutID}, 
					Serialize : PageLayouts.GetPageLayout.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayouts.GetPageLayout.onErrorReceived) ? PageLayouts.GetPageLayout.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayouts.Url, "GetPageLayout", { PageLayoutID : oObject.PageLayoutID}, PageLayouts.GetPageLayout.Serialize || {});
    },
	GetPageLayoutByUrl : function(Url, Callback) {
        return PageLayouts.GetPageLayoutByUrlObject({ Url : Url}, Callback);
    },

	GetPageLayoutByUrlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsValidators.GetPageLayoutByUrl)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayouts.GetPageLayoutByUrl.onValidationError))
					PageLayouts.GetPageLayoutByUrl.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayouts.Url, 
					Method : "GetPageLayoutByUrl", 
					Params : { Url : oObject.Url}, 
					Serialize : PageLayouts.GetPageLayoutByUrl.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayouts.GetPageLayoutByUrl.onErrorReceived) ? PageLayouts.GetPageLayoutByUrl.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayouts.Url, "GetPageLayoutByUrl", { Url : oObject.Url}, PageLayouts.GetPageLayoutByUrl.Serialize || {});
    },
	GetPageLayouts : function(Callback) {
        return PageLayouts.GetPageLayoutsObject({ }, Callback);
    },

	GetPageLayoutsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsValidators.GetPageLayouts)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayouts.GetPageLayouts.onValidationError))
					PageLayouts.GetPageLayouts.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayouts.Url, 
					Method : "GetPageLayouts", 
					Params : { }, 
					Serialize : PageLayouts.GetPageLayouts.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayouts.GetPageLayouts.onErrorReceived) ? PageLayouts.GetPageLayouts.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayouts.Url, "GetPageLayouts", { }, PageLayouts.GetPageLayouts.Serialize || {});
    },
	GetQuickHelpContentByURL : function(URL, DefaultContent, Callback) {
        return PageLayouts.GetQuickHelpContentByURLObject({ URL : URL,DefaultContent : DefaultContent}, Callback);
    },

	GetQuickHelpContentByURLObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsValidators.GetQuickHelpContentByURL)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayouts.GetQuickHelpContentByURL.onValidationError))
					PageLayouts.GetQuickHelpContentByURL.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayouts.Url, 
					Method : "GetQuickHelpContentByURL", 
					Params : { URL : oObject.URL,DefaultContent : oObject.DefaultContent}, 
					Serialize : PageLayouts.GetQuickHelpContentByURL.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayouts.GetQuickHelpContentByURL.onErrorReceived) ? PageLayouts.GetQuickHelpContentByURL.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayouts.Url, "GetQuickHelpContentByURL", { URL : oObject.URL,DefaultContent : oObject.DefaultContent}, PageLayouts.GetQuickHelpContentByURL.Serialize || {});
    },
	InsertPageLayout : function(Url, Handler, IsEnabled, PageTitle, SiteID, Callback) {
        return PageLayouts.InsertPageLayoutObject({ Url : Url,Handler : Handler,IsEnabled : IsEnabled,PageTitle : PageTitle,SiteID : SiteID}, Callback);
    },

	InsertPageLayoutObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsValidators.InsertPageLayout)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayouts.InsertPageLayout.onValidationError))
					PageLayouts.InsertPageLayout.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayouts.Url, 
					Method : "InsertPageLayout", 
					Params : { Url : oObject.Url,Handler : oObject.Handler,IsEnabled : oObject.IsEnabled,PageTitle : oObject.PageTitle,SiteID : oObject.SiteID}, 
					Serialize : PageLayouts.InsertPageLayout.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayouts.InsertPageLayout.onErrorReceived) ? PageLayouts.InsertPageLayout.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayouts.Url, "InsertPageLayout", { Url : oObject.Url,Handler : oObject.Handler,IsEnabled : oObject.IsEnabled,PageTitle : oObject.PageTitle,SiteID : oObject.SiteID}, PageLayouts.InsertPageLayout.Serialize || {});
    },
	MarkPageLayoutAsEnabled : function(PageLayoutID, Callback) {
        return PageLayouts.MarkPageLayoutAsEnabledObject({ PageLayoutID : PageLayoutID}, Callback);
    },

	MarkPageLayoutAsEnabledObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsValidators.MarkPageLayoutAsEnabled)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayouts.MarkPageLayoutAsEnabled.onValidationError))
					PageLayouts.MarkPageLayoutAsEnabled.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayouts.Url, 
					Method : "MarkPageLayoutAsEnabled", 
					Params : { PageLayoutID : oObject.PageLayoutID}, 
					Serialize : PageLayouts.MarkPageLayoutAsEnabled.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayouts.MarkPageLayoutAsEnabled.onErrorReceived) ? PageLayouts.MarkPageLayoutAsEnabled.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayouts.Url, "MarkPageLayoutAsEnabled", { PageLayoutID : oObject.PageLayoutID}, PageLayouts.MarkPageLayoutAsEnabled.Serialize || {});
    },
	MarkPageLayoutAsNotEnabled : function(PageLayoutID, Callback) {
        return PageLayouts.MarkPageLayoutAsNotEnabledObject({ PageLayoutID : PageLayoutID}, Callback);
    },

	MarkPageLayoutAsNotEnabledObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsValidators.MarkPageLayoutAsNotEnabled)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayouts.MarkPageLayoutAsNotEnabled.onValidationError))
					PageLayouts.MarkPageLayoutAsNotEnabled.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayouts.Url, 
					Method : "MarkPageLayoutAsNotEnabled", 
					Params : { PageLayoutID : oObject.PageLayoutID}, 
					Serialize : PageLayouts.MarkPageLayoutAsNotEnabled.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayouts.MarkPageLayoutAsNotEnabled.onErrorReceived) ? PageLayouts.MarkPageLayoutAsNotEnabled.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayouts.Url, "MarkPageLayoutAsNotEnabled", { PageLayoutID : oObject.PageLayoutID}, PageLayouts.MarkPageLayoutAsNotEnabled.Serialize || {});
    },
	RemovePageLayout : function(PageLayoutID, Callback) {
        return PageLayouts.RemovePageLayoutObject({ PageLayoutID : PageLayoutID}, Callback);
    },

	RemovePageLayoutObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsValidators.RemovePageLayout)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayouts.RemovePageLayout.onValidationError))
					PageLayouts.RemovePageLayout.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayouts.Url, 
					Method : "RemovePageLayout", 
					Params : { PageLayoutID : oObject.PageLayoutID}, 
					Serialize : PageLayouts.RemovePageLayout.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayouts.RemovePageLayout.onErrorReceived) ? PageLayouts.RemovePageLayout.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayouts.Url, "RemovePageLayout", { PageLayoutID : oObject.PageLayoutID}, PageLayouts.RemovePageLayout.Serialize || {});
    },
	UpdatePageLayout : function(PageLayoutID, Url, Handler, IsEnabled, PageTitle, SiteID, Callback) {
        return PageLayouts.UpdatePageLayoutObject({ PageLayoutID : PageLayoutID,Url : Url,Handler : Handler,IsEnabled : IsEnabled,PageTitle : PageTitle,SiteID : SiteID}, Callback);
    },

	UpdatePageLayoutObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsValidators.UpdatePageLayout)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayouts.UpdatePageLayout.onValidationError))
					PageLayouts.UpdatePageLayout.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayouts.Url, 
					Method : "UpdatePageLayout", 
					Params : { PageLayoutID : oObject.PageLayoutID,Url : oObject.Url,Handler : oObject.Handler,IsEnabled : oObject.IsEnabled,PageTitle : oObject.PageTitle,SiteID : oObject.SiteID}, 
					Serialize : PageLayouts.UpdatePageLayout.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayouts.UpdatePageLayout.onErrorReceived) ? PageLayouts.UpdatePageLayout.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayouts.Url, "UpdatePageLayout", { PageLayoutID : oObject.PageLayoutID,Url : oObject.Url,Handler : oObject.Handler,IsEnabled : oObject.IsEnabled,PageTitle : oObject.PageTitle,SiteID : oObject.SiteID}, PageLayouts.UpdatePageLayout.Serialize || {});
    }
};

var PageLayoutsValidators = {
	

	CopyPageLayout : {
			PageLayoutID : PageLayoutsValidatorsFields.PageLayoutID	
	},

	GetPageLayout : {
			PageLayoutID : PageLayoutsValidatorsFields.PageLayoutID	
	},

	GetPageLayoutByUrl : {
			Url : PageLayoutsValidatorsFields.Url	
	},

	GetPageLayouts : {	
	},

	GetQuickHelpContentByURL : {
			URL : PageLayoutsValidatorsFields.URL,
			DefaultContent : PageLayoutsValidatorsFields.DefaultContent	
	},

	InsertPageLayout : {
			Url : PageLayoutsValidatorsFields.Url,
			Handler : PageLayoutsValidatorsFields.Handler,
			IsEnabled : PageLayoutsValidatorsFields.IsEnabled,
			PageTitle : PageLayoutsValidatorsFields.PageTitle,
			SiteID : PageLayoutsValidatorsFields.SiteID	
	},

	MarkPageLayoutAsEnabled : {
			PageLayoutID : PageLayoutsValidatorsFields.PageLayoutID	
	},

	MarkPageLayoutAsNotEnabled : {
			PageLayoutID : PageLayoutsValidatorsFields.PageLayoutID	
	},

	RemovePageLayout : {
			PageLayoutID : PageLayoutsValidatorsFields.PageLayoutID	
	},

	UpdatePageLayout : {
			PageLayoutID : PageLayoutsValidatorsFields.PageLayoutID,
			Url : PageLayoutsValidatorsFields.Url,
			Handler : PageLayoutsValidatorsFields.Handler,
			IsEnabled : PageLayoutsValidatorsFields.IsEnabled,
			PageTitle : PageLayoutsValidatorsFields.PageTitle,
			SiteID : PageLayoutsValidatorsFields.SiteID	
	}
};

    