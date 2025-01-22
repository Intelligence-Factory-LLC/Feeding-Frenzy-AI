
    	    	
var EmailAddressesValidatorsFields = {
	
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		DomainID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Domain ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		Email : {Validators : [Validators.Email, Validators.Required], InvalidMessage: "Invalid Email. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Email() },
		EmailAddressID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Email Address ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		IsBlocked : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Is Blocked. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		IsInternal : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Is Internal. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		NumRows : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid NumRows. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		Search : {Validators : [Validators.String], InvalidMessage: "Invalid Search. " +   ValidatorDescriptions.Length(1, 255) },
		SkipRows : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid SkipRows. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		SortAscending : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid SortAscending. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		SortColumn : {Validators : [Validators.String], InvalidMessage: "Invalid SortColumn. " +   ValidatorDescriptions.Length(1, 255) }	
}
			
var EmailAddresses = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.EmailAddresses.ashx"

	,
	CopyEmailAddress : function(EmailAddressID, Callback) {
        return EmailAddresses.CopyEmailAddressObject({ EmailAddressID : EmailAddressID}, Callback);
    },

	CopyEmailAddressObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesValidators.CopyEmailAddress)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddresses.CopyEmailAddress.onValidationError))
					EmailAddresses.CopyEmailAddress.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddresses.Url, 
					Method : "CopyEmailAddress", 
					Params : { EmailAddressID : oObject.EmailAddressID}, 
					Serialize : EmailAddresses.CopyEmailAddress.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddresses.CopyEmailAddress.onErrorReceived) ? EmailAddresses.CopyEmailAddress.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddresses.Url, "CopyEmailAddress", { EmailAddressID : oObject.EmailAddressID}, EmailAddresses.CopyEmailAddress.Serialize || {});
    },
	GetEmailAddress : function(EmailAddressID, Callback) {
        return EmailAddresses.GetEmailAddressObject({ EmailAddressID : EmailAddressID}, Callback);
    },

	GetEmailAddressObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesValidators.GetEmailAddress)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddresses.GetEmailAddress.onValidationError))
					EmailAddresses.GetEmailAddress.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddresses.Url, 
					Method : "GetEmailAddress", 
					Params : { EmailAddressID : oObject.EmailAddressID}, 
					Serialize : EmailAddresses.GetEmailAddress.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddresses.GetEmailAddress.onErrorReceived) ? EmailAddresses.GetEmailAddress.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddresses.Url, "GetEmailAddress", { EmailAddressID : oObject.EmailAddressID}, EmailAddresses.GetEmailAddress.Serialize || {});
    },
	GetEmailAddressByEmail : function(Email, Callback) {
        return EmailAddresses.GetEmailAddressByEmailObject({ Email : Email}, Callback);
    },

	GetEmailAddressByEmailObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesValidators.GetEmailAddressByEmail)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddresses.GetEmailAddressByEmail.onValidationError))
					EmailAddresses.GetEmailAddressByEmail.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddresses.Url, 
					Method : "GetEmailAddressByEmail", 
					Params : { Email : oObject.Email}, 
					Serialize : EmailAddresses.GetEmailAddressByEmail.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddresses.GetEmailAddressByEmail.onErrorReceived) ? EmailAddresses.GetEmailAddressByEmail.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddresses.Url, "GetEmailAddressByEmail", { Email : oObject.Email}, EmailAddresses.GetEmailAddressByEmail.Serialize || {});
    },
	GetEmailAddresses : function(Callback) {
        return EmailAddresses.GetEmailAddressesObject({ }, Callback);
    },

	GetEmailAddressesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesValidators.GetEmailAddresses)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddresses.GetEmailAddresses.onValidationError))
					EmailAddresses.GetEmailAddresses.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddresses.Url, 
					Method : "GetEmailAddresses", 
					Params : { }, 
					Serialize : EmailAddresses.GetEmailAddresses.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddresses.GetEmailAddresses.onErrorReceived) ? EmailAddresses.GetEmailAddresses.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddresses.Url, "GetEmailAddresses", { }, EmailAddresses.GetEmailAddresses.Serialize || {});
    },
	GetEmailAddressesByDomainID : function(DomainID, Callback) {
        return EmailAddresses.GetEmailAddressesByDomainIDObject({ DomainID : DomainID}, Callback);
    },

	GetEmailAddressesByDomainIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesValidators.GetEmailAddressesByDomainID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddresses.GetEmailAddressesByDomainID.onValidationError))
					EmailAddresses.GetEmailAddressesByDomainID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddresses.Url, 
					Method : "GetEmailAddressesByDomainID", 
					Params : { DomainID : oObject.DomainID}, 
					Serialize : EmailAddresses.GetEmailAddressesByDomainID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddresses.GetEmailAddressesByDomainID.onErrorReceived) ? EmailAddresses.GetEmailAddressesByDomainID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddresses.Url, "GetEmailAddressesByDomainID", { DomainID : oObject.DomainID}, EmailAddresses.GetEmailAddressesByDomainID.Serialize || {});
    },
	GetEmailAddressesByDomainIDSp_PagingSp : function(DomainID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return EmailAddresses.GetEmailAddressesByDomainIDSp_PagingSpObject({ DomainID : DomainID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetEmailAddressesByDomainIDSp_PagingSpObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesValidators.GetEmailAddressesByDomainIDSp_PagingSp)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddresses.GetEmailAddressesByDomainIDSp_PagingSp.onValidationError))
					EmailAddresses.GetEmailAddressesByDomainIDSp_PagingSp.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddresses.Url, 
					Method : "GetEmailAddressesByDomainIDSp_PagingSp", 
					Params : { DomainID : oObject.DomainID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : EmailAddresses.GetEmailAddressesByDomainIDSp_PagingSp.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddresses.GetEmailAddressesByDomainIDSp_PagingSp.onErrorReceived) ? EmailAddresses.GetEmailAddressesByDomainIDSp_PagingSp.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddresses.Url, "GetEmailAddressesByDomainIDSp_PagingSp", { DomainID : oObject.DomainID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, EmailAddresses.GetEmailAddressesByDomainIDSp_PagingSp.Serialize || {});
    },
	GetOrInsertEmailAddress : function(Email, Callback) {
        return EmailAddresses.GetOrInsertEmailAddressObject({ Email : Email}, Callback);
    },

	GetOrInsertEmailAddressObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesValidators.GetOrInsertEmailAddress)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddresses.GetOrInsertEmailAddress.onValidationError))
					EmailAddresses.GetOrInsertEmailAddress.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddresses.Url, 
					Method : "GetOrInsertEmailAddress", 
					Params : { Email : oObject.Email}, 
					Serialize : EmailAddresses.GetOrInsertEmailAddress.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddresses.GetOrInsertEmailAddress.onErrorReceived) ? EmailAddresses.GetOrInsertEmailAddress.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddresses.Url, "GetOrInsertEmailAddress", { Email : oObject.Email}, EmailAddresses.GetOrInsertEmailAddress.Serialize || {});
    },
	InsertEmailAddress : function(Email, Data, IsBlocked, IsInternal, DomainID, Callback) {
        return EmailAddresses.InsertEmailAddressObject({ Email : Email,Data : Data,IsBlocked : IsBlocked,IsInternal : IsInternal,DomainID : DomainID}, Callback);
    },

	InsertEmailAddressObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesValidators.InsertEmailAddress)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddresses.InsertEmailAddress.onValidationError))
					EmailAddresses.InsertEmailAddress.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddresses.Url, 
					Method : "InsertEmailAddress", 
					Params : { Email : oObject.Email,Data : oObject.Data,IsBlocked : oObject.IsBlocked,IsInternal : oObject.IsInternal,DomainID : oObject.DomainID}, 
					Serialize : EmailAddresses.InsertEmailAddress.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddresses.InsertEmailAddress.onErrorReceived) ? EmailAddresses.InsertEmailAddress.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddresses.Url, "InsertEmailAddress", { Email : oObject.Email,Data : oObject.Data,IsBlocked : oObject.IsBlocked,IsInternal : oObject.IsInternal,DomainID : oObject.DomainID}, EmailAddresses.InsertEmailAddress.Serialize || {});
    },
	MarkEmailAddressAsBlocked : function(EmailAddressID, Callback) {
        return EmailAddresses.MarkEmailAddressAsBlockedObject({ EmailAddressID : EmailAddressID}, Callback);
    },

	MarkEmailAddressAsBlockedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesValidators.MarkEmailAddressAsBlocked)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddresses.MarkEmailAddressAsBlocked.onValidationError))
					EmailAddresses.MarkEmailAddressAsBlocked.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddresses.Url, 
					Method : "MarkEmailAddressAsBlocked", 
					Params : { EmailAddressID : oObject.EmailAddressID}, 
					Serialize : EmailAddresses.MarkEmailAddressAsBlocked.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddresses.MarkEmailAddressAsBlocked.onErrorReceived) ? EmailAddresses.MarkEmailAddressAsBlocked.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddresses.Url, "MarkEmailAddressAsBlocked", { EmailAddressID : oObject.EmailAddressID}, EmailAddresses.MarkEmailAddressAsBlocked.Serialize || {});
    },
	MarkEmailAddressAsInternal : function(EmailAddressID, Callback) {
        return EmailAddresses.MarkEmailAddressAsInternalObject({ EmailAddressID : EmailAddressID}, Callback);
    },

	MarkEmailAddressAsInternalObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesValidators.MarkEmailAddressAsInternal)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddresses.MarkEmailAddressAsInternal.onValidationError))
					EmailAddresses.MarkEmailAddressAsInternal.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddresses.Url, 
					Method : "MarkEmailAddressAsInternal", 
					Params : { EmailAddressID : oObject.EmailAddressID}, 
					Serialize : EmailAddresses.MarkEmailAddressAsInternal.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddresses.MarkEmailAddressAsInternal.onErrorReceived) ? EmailAddresses.MarkEmailAddressAsInternal.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddresses.Url, "MarkEmailAddressAsInternal", { EmailAddressID : oObject.EmailAddressID}, EmailAddresses.MarkEmailAddressAsInternal.Serialize || {});
    },
	MarkEmailAddressAsNotBlocked : function(EmailAddressID, Callback) {
        return EmailAddresses.MarkEmailAddressAsNotBlockedObject({ EmailAddressID : EmailAddressID}, Callback);
    },

	MarkEmailAddressAsNotBlockedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesValidators.MarkEmailAddressAsNotBlocked)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddresses.MarkEmailAddressAsNotBlocked.onValidationError))
					EmailAddresses.MarkEmailAddressAsNotBlocked.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddresses.Url, 
					Method : "MarkEmailAddressAsNotBlocked", 
					Params : { EmailAddressID : oObject.EmailAddressID}, 
					Serialize : EmailAddresses.MarkEmailAddressAsNotBlocked.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddresses.MarkEmailAddressAsNotBlocked.onErrorReceived) ? EmailAddresses.MarkEmailAddressAsNotBlocked.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddresses.Url, "MarkEmailAddressAsNotBlocked", { EmailAddressID : oObject.EmailAddressID}, EmailAddresses.MarkEmailAddressAsNotBlocked.Serialize || {});
    },
	MarkEmailAddressAsNotInternal : function(EmailAddressID, Callback) {
        return EmailAddresses.MarkEmailAddressAsNotInternalObject({ EmailAddressID : EmailAddressID}, Callback);
    },

	MarkEmailAddressAsNotInternalObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesValidators.MarkEmailAddressAsNotInternal)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddresses.MarkEmailAddressAsNotInternal.onValidationError))
					EmailAddresses.MarkEmailAddressAsNotInternal.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddresses.Url, 
					Method : "MarkEmailAddressAsNotInternal", 
					Params : { EmailAddressID : oObject.EmailAddressID}, 
					Serialize : EmailAddresses.MarkEmailAddressAsNotInternal.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddresses.MarkEmailAddressAsNotInternal.onErrorReceived) ? EmailAddresses.MarkEmailAddressAsNotInternal.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddresses.Url, "MarkEmailAddressAsNotInternal", { EmailAddressID : oObject.EmailAddressID}, EmailAddresses.MarkEmailAddressAsNotInternal.Serialize || {});
    },
	RemoveEmailAddress : function(EmailAddressID, Callback) {
        return EmailAddresses.RemoveEmailAddressObject({ EmailAddressID : EmailAddressID}, Callback);
    },

	RemoveEmailAddressObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesValidators.RemoveEmailAddress)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddresses.RemoveEmailAddress.onValidationError))
					EmailAddresses.RemoveEmailAddress.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddresses.Url, 
					Method : "RemoveEmailAddress", 
					Params : { EmailAddressID : oObject.EmailAddressID}, 
					Serialize : EmailAddresses.RemoveEmailAddress.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddresses.RemoveEmailAddress.onErrorReceived) ? EmailAddresses.RemoveEmailAddress.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddresses.Url, "RemoveEmailAddress", { EmailAddressID : oObject.EmailAddressID}, EmailAddresses.RemoveEmailAddress.Serialize || {});
    },
	UpdateEmailAddress : function(EmailAddressID, Email, Data, IsBlocked, IsInternal, DomainID, Callback) {
        return EmailAddresses.UpdateEmailAddressObject({ EmailAddressID : EmailAddressID,Email : Email,Data : Data,IsBlocked : IsBlocked,IsInternal : IsInternal,DomainID : DomainID}, Callback);
    },

	UpdateEmailAddressObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesValidators.UpdateEmailAddress)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddresses.UpdateEmailAddress.onValidationError))
					EmailAddresses.UpdateEmailAddress.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddresses.Url, 
					Method : "UpdateEmailAddress", 
					Params : { EmailAddressID : oObject.EmailAddressID,Email : oObject.Email,Data : oObject.Data,IsBlocked : oObject.IsBlocked,IsInternal : oObject.IsInternal,DomainID : oObject.DomainID}, 
					Serialize : EmailAddresses.UpdateEmailAddress.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddresses.UpdateEmailAddress.onErrorReceived) ? EmailAddresses.UpdateEmailAddress.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddresses.Url, "UpdateEmailAddress", { EmailAddressID : oObject.EmailAddressID,Email : oObject.Email,Data : oObject.Data,IsBlocked : oObject.IsBlocked,IsInternal : oObject.IsInternal,DomainID : oObject.DomainID}, EmailAddresses.UpdateEmailAddress.Serialize || {});
    },
	UpdateEmailAddressData : function(EmailAddressID, Data, Callback) {
        return EmailAddresses.UpdateEmailAddressDataObject({ EmailAddressID : EmailAddressID,Data : Data}, Callback);
    },

	UpdateEmailAddressDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesValidators.UpdateEmailAddressData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddresses.UpdateEmailAddressData.onValidationError))
					EmailAddresses.UpdateEmailAddressData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddresses.Url, 
					Method : "UpdateEmailAddressData", 
					Params : { EmailAddressID : oObject.EmailAddressID,Data : oObject.Data}, 
					Serialize : EmailAddresses.UpdateEmailAddressData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddresses.UpdateEmailAddressData.onErrorReceived) ? EmailAddresses.UpdateEmailAddressData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddresses.Url, "UpdateEmailAddressData", { EmailAddressID : oObject.EmailAddressID,Data : oObject.Data}, EmailAddresses.UpdateEmailAddressData.Serialize || {});
    }
};

var EmailAddressesValidators = {
	

	CopyEmailAddress : {
			EmailAddressID : EmailAddressesValidatorsFields.EmailAddressID	
	},

	GetEmailAddress : {
			EmailAddressID : EmailAddressesValidatorsFields.EmailAddressID	
	},

	GetEmailAddressByEmail : {
			Email : EmailAddressesValidatorsFields.Email	
	},

	GetEmailAddresses : {	
	},

	GetEmailAddressesByDomainID : {
			DomainID : EmailAddressesValidatorsFields.DomainID	
	},

	GetEmailAddressesByDomainIDSp_PagingSp : {
			DomainID : EmailAddressesValidatorsFields.DomainID,
			Search : EmailAddressesValidatorsFields.Search,
			SortColumn : EmailAddressesValidatorsFields.SortColumn,
			SortAscending : EmailAddressesValidatorsFields.SortAscending,
			SkipRows : EmailAddressesValidatorsFields.SkipRows,
			NumRows : EmailAddressesValidatorsFields.NumRows	
	},

	GetOrInsertEmailAddress : {
			Email : EmailAddressesValidatorsFields.Email	
	},

	InsertEmailAddress : {
			Email : EmailAddressesValidatorsFields.Email,
			Data : EmailAddressesValidatorsFields.Data,
			IsBlocked : EmailAddressesValidatorsFields.IsBlocked,
			IsInternal : EmailAddressesValidatorsFields.IsInternal,
			DomainID : EmailAddressesValidatorsFields.DomainID	
	},

	MarkEmailAddressAsBlocked : {
			EmailAddressID : EmailAddressesValidatorsFields.EmailAddressID	
	},

	MarkEmailAddressAsInternal : {
			EmailAddressID : EmailAddressesValidatorsFields.EmailAddressID	
	},

	MarkEmailAddressAsNotBlocked : {
			EmailAddressID : EmailAddressesValidatorsFields.EmailAddressID	
	},

	MarkEmailAddressAsNotInternal : {
			EmailAddressID : EmailAddressesValidatorsFields.EmailAddressID	
	},

	RemoveEmailAddress : {
			EmailAddressID : EmailAddressesValidatorsFields.EmailAddressID	
	},

	UpdateEmailAddress : {
			EmailAddressID : EmailAddressesValidatorsFields.EmailAddressID,
			Email : EmailAddressesValidatorsFields.Email,
			Data : EmailAddressesValidatorsFields.Data,
			IsBlocked : EmailAddressesValidatorsFields.IsBlocked,
			IsInternal : EmailAddressesValidatorsFields.IsInternal,
			DomainID : EmailAddressesValidatorsFields.DomainID	
	},

	UpdateEmailAddressData : {
			EmailAddressID : EmailAddressesValidatorsFields.EmailAddressID,
			Data : EmailAddressesValidatorsFields.Data	
	}
};

    