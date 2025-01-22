
    	    	
var SalesRepresentativesValidatorsFields = {
	
		context : {Validators : [Validators.Empty, Validators.Required], InvalidMessage: "Invalid context. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Empty() },
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		Email : {Validators : [Validators.String], InvalidMessage: "Invalid Email. " +   ValidatorDescriptions.Length(1, 255) },
		IsEnabled : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid IsEnabled. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		Name : {Validators : [Validators.String], InvalidMessage: "Invalid Name. " +   ValidatorDescriptions.Length(1, 255) },
		Notes : {Validators : [Validators.Text], InvalidMessage: "Invalid Notes. " +   ValidatorDescriptions.Length(1, 4000) },
		Phone : {Validators : [Validators.String], InvalidMessage: "Invalid Phone. " +   ValidatorDescriptions.Length(1, 255) },
		rowSalesRepresentative : {Validators : [Validators.Object, Validators.Required], InvalidMessage: "Invalid rowSalesRepresentative. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Object() },
		SalesRepresentativeID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Sales Representative ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		SalesRepresentativeTypeID : {Validators : [Validators.ID], InvalidMessage: "Invalid Sales Representative Type ID. " +   ValidatorDescriptions.ID() },
		UserID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid User ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() }	
}
			
var SalesRepresentatives = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.SalesRepresentatives.ashx"

	,
	CopySalesRepresentative : function(SalesRepresentativeID, Callback) {
        return SalesRepresentatives.CopySalesRepresentativeObject({ SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	CopySalesRepresentativeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesValidators.CopySalesRepresentative)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentatives.CopySalesRepresentative.onValidationError))
					SalesRepresentatives.CopySalesRepresentative.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentatives.Url, 
					Method : "CopySalesRepresentative", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : SalesRepresentatives.CopySalesRepresentative.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentatives.CopySalesRepresentative.onErrorReceived) ? SalesRepresentatives.CopySalesRepresentative.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentatives.Url, "CopySalesRepresentative", { SalesRepresentativeID : oObject.SalesRepresentativeID}, SalesRepresentatives.CopySalesRepresentative.Serialize || {});
    },
	GetEnabledSalesRepresentatives : function(Callback) {
        return SalesRepresentatives.GetEnabledSalesRepresentativesObject({ }, Callback);
    },

	GetEnabledSalesRepresentativesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesValidators.GetEnabledSalesRepresentatives)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentatives.GetEnabledSalesRepresentatives.onValidationError))
					SalesRepresentatives.GetEnabledSalesRepresentatives.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentatives.Url, 
					Method : "GetEnabledSalesRepresentatives", 
					Params : { }, 
					Serialize : SalesRepresentatives.GetEnabledSalesRepresentatives.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentatives.GetEnabledSalesRepresentatives.onErrorReceived) ? SalesRepresentatives.GetEnabledSalesRepresentatives.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentatives.Url, "GetEnabledSalesRepresentatives", { }, SalesRepresentatives.GetEnabledSalesRepresentatives.Serialize || {});
    },
	GetPermissionBySalesRepresentative : function(rowSalesRepresentative, Callback) {
        return SalesRepresentatives.GetPermissionBySalesRepresentativeObject({ rowSalesRepresentative : rowSalesRepresentative}, Callback);
    },

	GetPermissionBySalesRepresentativeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesValidators.GetPermissionBySalesRepresentative)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentatives.GetPermissionBySalesRepresentative.onValidationError))
					SalesRepresentatives.GetPermissionBySalesRepresentative.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentatives.Url, 
					Method : "GetPermissionBySalesRepresentative", 
					Params : { rowSalesRepresentative : oObject.rowSalesRepresentative}, 
					Serialize : SalesRepresentatives.GetPermissionBySalesRepresentative.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentatives.GetPermissionBySalesRepresentative.onErrorReceived) ? SalesRepresentatives.GetPermissionBySalesRepresentative.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentatives.Url, "GetPermissionBySalesRepresentative", { rowSalesRepresentative : oObject.rowSalesRepresentative}, SalesRepresentatives.GetPermissionBySalesRepresentative.Serialize || {});
    },
	GetReportedSalesRepresentatives : function(Callback) {
        return SalesRepresentatives.GetReportedSalesRepresentativesObject({ }, Callback);
    },

	GetReportedSalesRepresentativesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesValidators.GetReportedSalesRepresentatives)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentatives.GetReportedSalesRepresentatives.onValidationError))
					SalesRepresentatives.GetReportedSalesRepresentatives.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentatives.Url, 
					Method : "GetReportedSalesRepresentatives", 
					Params : { }, 
					Serialize : SalesRepresentatives.GetReportedSalesRepresentatives.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentatives.GetReportedSalesRepresentatives.onErrorReceived) ? SalesRepresentatives.GetReportedSalesRepresentatives.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentatives.Url, "GetReportedSalesRepresentatives", { }, SalesRepresentatives.GetReportedSalesRepresentatives.Serialize || {});
    },
	GetSalesRepAvailability : function(Callback) {
        return SalesRepresentatives.GetSalesRepAvailabilityObject({ }, Callback);
    },

	GetSalesRepAvailabilityObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesValidators.GetSalesRepAvailability)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentatives.GetSalesRepAvailability.onValidationError))
					SalesRepresentatives.GetSalesRepAvailability.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentatives.Url, 
					Method : "GetSalesRepAvailability", 
					Params : { }, 
					Serialize : SalesRepresentatives.GetSalesRepAvailability.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentatives.GetSalesRepAvailability.onErrorReceived) ? SalesRepresentatives.GetSalesRepAvailability.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentatives.Url, "GetSalesRepAvailability", { }, SalesRepresentatives.GetSalesRepAvailability.Serialize || {});
    },
	GetSalesRepresentative : function(SalesRepresentativeID, Callback) {
        return SalesRepresentatives.GetSalesRepresentativeObject({ SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetSalesRepresentativeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesValidators.GetSalesRepresentative)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentatives.GetSalesRepresentative.onValidationError))
					SalesRepresentatives.GetSalesRepresentative.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentatives.Url, 
					Method : "GetSalesRepresentative", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : SalesRepresentatives.GetSalesRepresentative.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentatives.GetSalesRepresentative.onErrorReceived) ? SalesRepresentatives.GetSalesRepresentative.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentatives.Url, "GetSalesRepresentative", { SalesRepresentativeID : oObject.SalesRepresentativeID}, SalesRepresentatives.GetSalesRepresentative.Serialize || {});
    },
	GetSalesRepresentativeByUserID : function(UserID, Callback) {
        return SalesRepresentatives.GetSalesRepresentativeByUserIDObject({ UserID : UserID}, Callback);
    },

	GetSalesRepresentativeByUserIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesValidators.GetSalesRepresentativeByUserID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentatives.GetSalesRepresentativeByUserID.onValidationError))
					SalesRepresentatives.GetSalesRepresentativeByUserID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentatives.Url, 
					Method : "GetSalesRepresentativeByUserID", 
					Params : { UserID : oObject.UserID}, 
					Serialize : SalesRepresentatives.GetSalesRepresentativeByUserID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentatives.GetSalesRepresentativeByUserID.onErrorReceived) ? SalesRepresentatives.GetSalesRepresentativeByUserID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentatives.Url, "GetSalesRepresentativeByUserID", { UserID : oObject.UserID}, SalesRepresentatives.GetSalesRepresentativeByUserID.Serialize || {});
    },
	GetSalesRepresentatives : function(Callback) {
        return SalesRepresentatives.GetSalesRepresentativesObject({ }, Callback);
    },

	GetSalesRepresentativesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesValidators.GetSalesRepresentatives)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentatives.GetSalesRepresentatives.onValidationError))
					SalesRepresentatives.GetSalesRepresentatives.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentatives.Url, 
					Method : "GetSalesRepresentatives", 
					Params : { }, 
					Serialize : SalesRepresentatives.GetSalesRepresentatives.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentatives.GetSalesRepresentatives.onErrorReceived) ? SalesRepresentatives.GetSalesRepresentatives.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentatives.Url, "GetSalesRepresentatives", { }, SalesRepresentatives.GetSalesRepresentatives.Serialize || {});
    },
	GetSalesRepresentativesBySalesRepresentativeTypeID : function(SalesRepresentativeTypeID, Callback) {
        return SalesRepresentatives.GetSalesRepresentativesBySalesRepresentativeTypeIDObject({ SalesRepresentativeTypeID : SalesRepresentativeTypeID}, Callback);
    },

	GetSalesRepresentativesBySalesRepresentativeTypeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesValidators.GetSalesRepresentativesBySalesRepresentativeTypeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentatives.GetSalesRepresentativesBySalesRepresentativeTypeID.onValidationError))
					SalesRepresentatives.GetSalesRepresentativesBySalesRepresentativeTypeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentatives.Url, 
					Method : "GetSalesRepresentativesBySalesRepresentativeTypeID", 
					Params : { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID}, 
					Serialize : SalesRepresentatives.GetSalesRepresentativesBySalesRepresentativeTypeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentatives.GetSalesRepresentativesBySalesRepresentativeTypeID.onErrorReceived) ? SalesRepresentatives.GetSalesRepresentativesBySalesRepresentativeTypeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentatives.Url, "GetSalesRepresentativesBySalesRepresentativeTypeID", { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID}, SalesRepresentatives.GetSalesRepresentativesBySalesRepresentativeTypeID.Serialize || {});
    },
	Impersonate : function(SalesRepresentativeID, context, Callback) {
        return SalesRepresentatives.ImpersonateObject({ SalesRepresentativeID : SalesRepresentativeID,context : context}, Callback);
    },

	ImpersonateObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesValidators.Impersonate)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentatives.Impersonate.onValidationError))
					SalesRepresentatives.Impersonate.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentatives.Url, 
					Method : "Impersonate", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,context : oObject.context}, 
					Serialize : SalesRepresentatives.Impersonate.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentatives.Impersonate.onErrorReceived) ? SalesRepresentatives.Impersonate.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentatives.Url, "Impersonate", { SalesRepresentativeID : oObject.SalesRepresentativeID,context : oObject.context}, SalesRepresentatives.Impersonate.Serialize || {});
    },
	InsertSalesRepresentative : function(Notes, Data, SalesRepresentativeTypeID, UserID, Callback) {
        return SalesRepresentatives.InsertSalesRepresentativeObject({ Notes : Notes,Data : Data,SalesRepresentativeTypeID : SalesRepresentativeTypeID,UserID : UserID}, Callback);
    },

	InsertSalesRepresentativeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesValidators.InsertSalesRepresentative)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentatives.InsertSalesRepresentative.onValidationError))
					SalesRepresentatives.InsertSalesRepresentative.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentatives.Url, 
					Method : "InsertSalesRepresentative", 
					Params : { Notes : oObject.Notes,Data : oObject.Data,SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID,UserID : oObject.UserID}, 
					Serialize : SalesRepresentatives.InsertSalesRepresentative.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentatives.InsertSalesRepresentative.onErrorReceived) ? SalesRepresentatives.InsertSalesRepresentative.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentatives.Url, "InsertSalesRepresentative", { Notes : oObject.Notes,Data : oObject.Data,SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID,UserID : oObject.UserID}, SalesRepresentatives.InsertSalesRepresentative.Serialize || {});
    },
	InsertSalesRepresentative : function(Notes, IsEnabled, Data, Name, Email, Phone, SalesRepresentativeTypeID, Callback) {
        return SalesRepresentatives.InsertSalesRepresentativeObject({ Notes : Notes,IsEnabled : IsEnabled,Data : Data,Name : Name,Email : Email,Phone : Phone,SalesRepresentativeTypeID : SalesRepresentativeTypeID}, Callback);
    },

	InsertSalesRepresentativeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesValidators.InsertSalesRepresentative)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentatives.InsertSalesRepresentative.onValidationError))
					SalesRepresentatives.InsertSalesRepresentative.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentatives.Url, 
					Method : "InsertSalesRepresentative", 
					Params : { Notes : oObject.Notes,IsEnabled : oObject.IsEnabled,Data : oObject.Data,Name : oObject.Name,Email : oObject.Email,Phone : oObject.Phone,SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID}, 
					Serialize : SalesRepresentatives.InsertSalesRepresentative.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentatives.InsertSalesRepresentative.onErrorReceived) ? SalesRepresentatives.InsertSalesRepresentative.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentatives.Url, "InsertSalesRepresentative", { Notes : oObject.Notes,IsEnabled : oObject.IsEnabled,Data : oObject.Data,Name : oObject.Name,Email : oObject.Email,Phone : oObject.Phone,SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID}, SalesRepresentatives.InsertSalesRepresentative.Serialize || {});
    },
	MarkSalesRepresentativeAsEnabled : function(SalesRepresentativeID, Callback) {
        return SalesRepresentatives.MarkSalesRepresentativeAsEnabledObject({ SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	MarkSalesRepresentativeAsEnabledObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesValidators.MarkSalesRepresentativeAsEnabled)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentatives.MarkSalesRepresentativeAsEnabled.onValidationError))
					SalesRepresentatives.MarkSalesRepresentativeAsEnabled.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentatives.Url, 
					Method : "MarkSalesRepresentativeAsEnabled", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : SalesRepresentatives.MarkSalesRepresentativeAsEnabled.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentatives.MarkSalesRepresentativeAsEnabled.onErrorReceived) ? SalesRepresentatives.MarkSalesRepresentativeAsEnabled.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentatives.Url, "MarkSalesRepresentativeAsEnabled", { SalesRepresentativeID : oObject.SalesRepresentativeID}, SalesRepresentatives.MarkSalesRepresentativeAsEnabled.Serialize || {});
    },
	MarkSalesRepresentativeAsNotEnabled : function(SalesRepresentativeID, Callback) {
        return SalesRepresentatives.MarkSalesRepresentativeAsNotEnabledObject({ SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	MarkSalesRepresentativeAsNotEnabledObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesValidators.MarkSalesRepresentativeAsNotEnabled)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentatives.MarkSalesRepresentativeAsNotEnabled.onValidationError))
					SalesRepresentatives.MarkSalesRepresentativeAsNotEnabled.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentatives.Url, 
					Method : "MarkSalesRepresentativeAsNotEnabled", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : SalesRepresentatives.MarkSalesRepresentativeAsNotEnabled.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentatives.MarkSalesRepresentativeAsNotEnabled.onErrorReceived) ? SalesRepresentatives.MarkSalesRepresentativeAsNotEnabled.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentatives.Url, "MarkSalesRepresentativeAsNotEnabled", { SalesRepresentativeID : oObject.SalesRepresentativeID}, SalesRepresentatives.MarkSalesRepresentativeAsNotEnabled.Serialize || {});
    },
	RemoveSalesRepresentative : function(SalesRepresentativeID, Callback) {
        return SalesRepresentatives.RemoveSalesRepresentativeObject({ SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	RemoveSalesRepresentativeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesValidators.RemoveSalesRepresentative)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentatives.RemoveSalesRepresentative.onValidationError))
					SalesRepresentatives.RemoveSalesRepresentative.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentatives.Url, 
					Method : "RemoveSalesRepresentative", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : SalesRepresentatives.RemoveSalesRepresentative.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentatives.RemoveSalesRepresentative.onErrorReceived) ? SalesRepresentatives.RemoveSalesRepresentative.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentatives.Url, "RemoveSalesRepresentative", { SalesRepresentativeID : oObject.SalesRepresentativeID}, SalesRepresentatives.RemoveSalesRepresentative.Serialize || {});
    },
	SendObjectToBuffaly : function(SalesRepresentativeID, Callback) {
        return SalesRepresentatives.SendObjectToBuffalyObject({ SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	SendObjectToBuffalyObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesValidators.SendObjectToBuffaly)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentatives.SendObjectToBuffaly.onValidationError))
					SalesRepresentatives.SendObjectToBuffaly.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentatives.Url, 
					Method : "SendObjectToBuffaly", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : SalesRepresentatives.SendObjectToBuffaly.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentatives.SendObjectToBuffaly.onErrorReceived) ? SalesRepresentatives.SendObjectToBuffaly.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentatives.Url, "SendObjectToBuffaly", { SalesRepresentativeID : oObject.SalesRepresentativeID}, SalesRepresentatives.SendObjectToBuffaly.Serialize || {});
    },
	UpdateSalesRepresentative : function(SalesRepresentativeID, Notes, Data, SalesRepresentativeTypeID, UserID, Callback) {
        return SalesRepresentatives.UpdateSalesRepresentativeObject({ SalesRepresentativeID : SalesRepresentativeID,Notes : Notes,Data : Data,SalesRepresentativeTypeID : SalesRepresentativeTypeID,UserID : UserID}, Callback);
    },

	UpdateSalesRepresentativeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesValidators.UpdateSalesRepresentative)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentatives.UpdateSalesRepresentative.onValidationError))
					SalesRepresentatives.UpdateSalesRepresentative.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentatives.Url, 
					Method : "UpdateSalesRepresentative", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,Notes : oObject.Notes,Data : oObject.Data,SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID,UserID : oObject.UserID}, 
					Serialize : SalesRepresentatives.UpdateSalesRepresentative.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentatives.UpdateSalesRepresentative.onErrorReceived) ? SalesRepresentatives.UpdateSalesRepresentative.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentatives.Url, "UpdateSalesRepresentative", { SalesRepresentativeID : oObject.SalesRepresentativeID,Notes : oObject.Notes,Data : oObject.Data,SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID,UserID : oObject.UserID}, SalesRepresentatives.UpdateSalesRepresentative.Serialize || {});
    },
	UpdateSalesRepresentativeData : function(SalesRepresentativeID, Data, Callback) {
        return SalesRepresentatives.UpdateSalesRepresentativeDataObject({ SalesRepresentativeID : SalesRepresentativeID,Data : Data}, Callback);
    },

	UpdateSalesRepresentativeDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesValidators.UpdateSalesRepresentativeData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentatives.UpdateSalesRepresentativeData.onValidationError))
					SalesRepresentatives.UpdateSalesRepresentativeData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentatives.Url, 
					Method : "UpdateSalesRepresentativeData", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,Data : oObject.Data}, 
					Serialize : SalesRepresentatives.UpdateSalesRepresentativeData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentatives.UpdateSalesRepresentativeData.onErrorReceived) ? SalesRepresentatives.UpdateSalesRepresentativeData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentatives.Url, "UpdateSalesRepresentativeData", { SalesRepresentativeID : oObject.SalesRepresentativeID,Data : oObject.Data}, SalesRepresentatives.UpdateSalesRepresentativeData.Serialize || {});
    }
};

var SalesRepresentativesValidators = {
	

	CopySalesRepresentative : {
			SalesRepresentativeID : SalesRepresentativesValidatorsFields.SalesRepresentativeID	
	},

	GetEnabledSalesRepresentatives : {	
	},

	GetPermissionBySalesRepresentative : {
			rowSalesRepresentative : SalesRepresentativesValidatorsFields.rowSalesRepresentative	
	},

	GetReportedSalesRepresentatives : {	
	},

	GetSalesRepAvailability : {	
	},

	GetSalesRepresentative : {
			SalesRepresentativeID : SalesRepresentativesValidatorsFields.SalesRepresentativeID	
	},

	GetSalesRepresentativeByUserID : {
			UserID : SalesRepresentativesValidatorsFields.UserID	
	},

	GetSalesRepresentatives : {	
	},

	GetSalesRepresentativesBySalesRepresentativeTypeID : {
			SalesRepresentativeTypeID : SalesRepresentativesValidatorsFields.SalesRepresentativeTypeID	
	},

	Impersonate : {
			SalesRepresentativeID : SalesRepresentativesValidatorsFields.SalesRepresentativeID,
			context : SalesRepresentativesValidatorsFields.context	
	},

	InsertSalesRepresentative : {
			Notes : SalesRepresentativesValidatorsFields.Notes,
			Data : SalesRepresentativesValidatorsFields.Data,
			SalesRepresentativeTypeID : SalesRepresentativesValidatorsFields.SalesRepresentativeTypeID,
			UserID : SalesRepresentativesValidatorsFields.UserID	
	},

	InsertSalesRepresentative : {
			Notes : SalesRepresentativesValidatorsFields.Notes,
			IsEnabled : SalesRepresentativesValidatorsFields.IsEnabled,
			Data : SalesRepresentativesValidatorsFields.Data,
			Name : SalesRepresentativesValidatorsFields.Name,
			Email : SalesRepresentativesValidatorsFields.Email,
			Phone : SalesRepresentativesValidatorsFields.Phone,
			SalesRepresentativeTypeID : SalesRepresentativesValidatorsFields.SalesRepresentativeTypeID	
	},

	MarkSalesRepresentativeAsEnabled : {
			SalesRepresentativeID : SalesRepresentativesValidatorsFields.SalesRepresentativeID	
	},

	MarkSalesRepresentativeAsNotEnabled : {
			SalesRepresentativeID : SalesRepresentativesValidatorsFields.SalesRepresentativeID	
	},

	RemoveSalesRepresentative : {
			SalesRepresentativeID : SalesRepresentativesValidatorsFields.SalesRepresentativeID	
	},

	SendObjectToBuffaly : {
			SalesRepresentativeID : SalesRepresentativesValidatorsFields.SalesRepresentativeID	
	},

	UpdateSalesRepresentative : {
			SalesRepresentativeID : SalesRepresentativesValidatorsFields.SalesRepresentativeID,
			Notes : SalesRepresentativesValidatorsFields.Notes,
			Data : SalesRepresentativesValidatorsFields.Data,
			SalesRepresentativeTypeID : SalesRepresentativesValidatorsFields.SalesRepresentativeTypeID,
			UserID : SalesRepresentativesValidatorsFields.UserID	
	},

	UpdateSalesRepresentativeData : {
			SalesRepresentativeID : SalesRepresentativesValidatorsFields.SalesRepresentativeID,
			Data : SalesRepresentativesValidatorsFields.Data	
	}
};

    