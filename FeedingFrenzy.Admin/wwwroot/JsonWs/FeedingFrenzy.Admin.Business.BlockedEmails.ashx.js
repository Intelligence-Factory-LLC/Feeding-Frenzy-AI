
    	    	
var BlockedEmailsValidatorsFields = {
	
		BlockedEmailID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Blocked Email ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		Email : {Validators : [Validators.Email, Validators.Required], InvalidMessage: "Invalid Email. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Email() },
		Notes : {Validators : [Validators.Text], InvalidMessage: "Invalid Notes. " +   ValidatorDescriptions.Length(1, 4000) }	
}
			
var BlockedEmails = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.BlockedEmails.ashx"

	,
	CopyBlockedEmail : function(BlockedEmailID, Callback) {
        return BlockedEmails.CopyBlockedEmailObject({ BlockedEmailID : BlockedEmailID}, Callback);
    },

	CopyBlockedEmailObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsValidators.CopyBlockedEmail)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmails.CopyBlockedEmail.onValidationError))
					BlockedEmails.CopyBlockedEmail.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmails.Url, 
					Method : "CopyBlockedEmail", 
					Params : { BlockedEmailID : oObject.BlockedEmailID}, 
					Serialize : BlockedEmails.CopyBlockedEmail.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmails.CopyBlockedEmail.onErrorReceived) ? BlockedEmails.CopyBlockedEmail.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmails.Url, "CopyBlockedEmail", { BlockedEmailID : oObject.BlockedEmailID}, BlockedEmails.CopyBlockedEmail.Serialize || {});
    },
	GetBlockedEmail : function(BlockedEmailID, Callback) {
        return BlockedEmails.GetBlockedEmailObject({ BlockedEmailID : BlockedEmailID}, Callback);
    },

	GetBlockedEmailObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsValidators.GetBlockedEmail)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmails.GetBlockedEmail.onValidationError))
					BlockedEmails.GetBlockedEmail.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmails.Url, 
					Method : "GetBlockedEmail", 
					Params : { BlockedEmailID : oObject.BlockedEmailID}, 
					Serialize : BlockedEmails.GetBlockedEmail.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmails.GetBlockedEmail.onErrorReceived) ? BlockedEmails.GetBlockedEmail.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmails.Url, "GetBlockedEmail", { BlockedEmailID : oObject.BlockedEmailID}, BlockedEmails.GetBlockedEmail.Serialize || {});
    },
	GetBlockedEmailByEmail : function(Email, Callback) {
        return BlockedEmails.GetBlockedEmailByEmailObject({ Email : Email}, Callback);
    },

	GetBlockedEmailByEmailObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsValidators.GetBlockedEmailByEmail)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmails.GetBlockedEmailByEmail.onValidationError))
					BlockedEmails.GetBlockedEmailByEmail.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmails.Url, 
					Method : "GetBlockedEmailByEmail", 
					Params : { Email : oObject.Email}, 
					Serialize : BlockedEmails.GetBlockedEmailByEmail.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmails.GetBlockedEmailByEmail.onErrorReceived) ? BlockedEmails.GetBlockedEmailByEmail.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmails.Url, "GetBlockedEmailByEmail", { Email : oObject.Email}, BlockedEmails.GetBlockedEmailByEmail.Serialize || {});
    },
	GetBlockedEmails : function(Callback) {
        return BlockedEmails.GetBlockedEmailsObject({ }, Callback);
    },

	GetBlockedEmailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsValidators.GetBlockedEmails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmails.GetBlockedEmails.onValidationError))
					BlockedEmails.GetBlockedEmails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmails.Url, 
					Method : "GetBlockedEmails", 
					Params : { }, 
					Serialize : BlockedEmails.GetBlockedEmails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmails.GetBlockedEmails.onErrorReceived) ? BlockedEmails.GetBlockedEmails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmails.Url, "GetBlockedEmails", { }, BlockedEmails.GetBlockedEmails.Serialize || {});
    },
	InsertBlockedEmail : function(Email, Notes, Data, Callback) {
        return BlockedEmails.InsertBlockedEmailObject({ Email : Email,Notes : Notes,Data : Data}, Callback);
    },

	InsertBlockedEmailObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsValidators.InsertBlockedEmail)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmails.InsertBlockedEmail.onValidationError))
					BlockedEmails.InsertBlockedEmail.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmails.Url, 
					Method : "InsertBlockedEmail", 
					Params : { Email : oObject.Email,Notes : oObject.Notes,Data : oObject.Data}, 
					Serialize : BlockedEmails.InsertBlockedEmail.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmails.InsertBlockedEmail.onErrorReceived) ? BlockedEmails.InsertBlockedEmail.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmails.Url, "InsertBlockedEmail", { Email : oObject.Email,Notes : oObject.Notes,Data : oObject.Data}, BlockedEmails.InsertBlockedEmail.Serialize || {});
    },
	RemoveBlockedEmail : function(BlockedEmailID, Callback) {
        return BlockedEmails.RemoveBlockedEmailObject({ BlockedEmailID : BlockedEmailID}, Callback);
    },

	RemoveBlockedEmailObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsValidators.RemoveBlockedEmail)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmails.RemoveBlockedEmail.onValidationError))
					BlockedEmails.RemoveBlockedEmail.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmails.Url, 
					Method : "RemoveBlockedEmail", 
					Params : { BlockedEmailID : oObject.BlockedEmailID}, 
					Serialize : BlockedEmails.RemoveBlockedEmail.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmails.RemoveBlockedEmail.onErrorReceived) ? BlockedEmails.RemoveBlockedEmail.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmails.Url, "RemoveBlockedEmail", { BlockedEmailID : oObject.BlockedEmailID}, BlockedEmails.RemoveBlockedEmail.Serialize || {});
    },
	UpdateBlockedEmail : function(BlockedEmailID, Email, Notes, Data, Callback) {
        return BlockedEmails.UpdateBlockedEmailObject({ BlockedEmailID : BlockedEmailID,Email : Email,Notes : Notes,Data : Data}, Callback);
    },

	UpdateBlockedEmailObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsValidators.UpdateBlockedEmail)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmails.UpdateBlockedEmail.onValidationError))
					BlockedEmails.UpdateBlockedEmail.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmails.Url, 
					Method : "UpdateBlockedEmail", 
					Params : { BlockedEmailID : oObject.BlockedEmailID,Email : oObject.Email,Notes : oObject.Notes,Data : oObject.Data}, 
					Serialize : BlockedEmails.UpdateBlockedEmail.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmails.UpdateBlockedEmail.onErrorReceived) ? BlockedEmails.UpdateBlockedEmail.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmails.Url, "UpdateBlockedEmail", { BlockedEmailID : oObject.BlockedEmailID,Email : oObject.Email,Notes : oObject.Notes,Data : oObject.Data}, BlockedEmails.UpdateBlockedEmail.Serialize || {});
    },
	UpdateBlockedEmailData : function(BlockedEmailID, Data, Callback) {
        return BlockedEmails.UpdateBlockedEmailDataObject({ BlockedEmailID : BlockedEmailID,Data : Data}, Callback);
    },

	UpdateBlockedEmailDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsValidators.UpdateBlockedEmailData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmails.UpdateBlockedEmailData.onValidationError))
					BlockedEmails.UpdateBlockedEmailData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmails.Url, 
					Method : "UpdateBlockedEmailData", 
					Params : { BlockedEmailID : oObject.BlockedEmailID,Data : oObject.Data}, 
					Serialize : BlockedEmails.UpdateBlockedEmailData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmails.UpdateBlockedEmailData.onErrorReceived) ? BlockedEmails.UpdateBlockedEmailData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmails.Url, "UpdateBlockedEmailData", { BlockedEmailID : oObject.BlockedEmailID,Data : oObject.Data}, BlockedEmails.UpdateBlockedEmailData.Serialize || {});
    }
};

var BlockedEmailsValidators = {
	

	CopyBlockedEmail : {
			BlockedEmailID : BlockedEmailsValidatorsFields.BlockedEmailID	
	},

	GetBlockedEmail : {
			BlockedEmailID : BlockedEmailsValidatorsFields.BlockedEmailID	
	},

	GetBlockedEmailByEmail : {
			Email : BlockedEmailsValidatorsFields.Email	
	},

	GetBlockedEmails : {	
	},

	InsertBlockedEmail : {
			Email : BlockedEmailsValidatorsFields.Email,
			Notes : BlockedEmailsValidatorsFields.Notes,
			Data : BlockedEmailsValidatorsFields.Data	
	},

	RemoveBlockedEmail : {
			BlockedEmailID : BlockedEmailsValidatorsFields.BlockedEmailID	
	},

	UpdateBlockedEmail : {
			BlockedEmailID : BlockedEmailsValidatorsFields.BlockedEmailID,
			Email : BlockedEmailsValidatorsFields.Email,
			Notes : BlockedEmailsValidatorsFields.Notes,
			Data : BlockedEmailsValidatorsFields.Data	
	},

	UpdateBlockedEmailData : {
			BlockedEmailID : BlockedEmailsValidatorsFields.BlockedEmailID,
			Data : BlockedEmailsValidatorsFields.Data	
	}
};

    