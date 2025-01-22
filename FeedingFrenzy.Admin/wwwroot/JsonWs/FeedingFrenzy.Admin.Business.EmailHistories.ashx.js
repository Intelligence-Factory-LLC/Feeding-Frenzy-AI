
    	    	
var EmailHistoriesValidatorsFields = {
	
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		Email : {Validators : [Validators.Text, Validators.Required], InvalidMessage: "Invalid Email. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 4000) },
		EmailHistoryID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Email History ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		EmailTemplateID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Email Template ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		From : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid From. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		IsPending : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Pending. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		IsSent : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Sent. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		Subject : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Subject. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		To : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid To. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) }	
}
			
var EmailHistories = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.EmailHistories.ashx"

	,
	CopyEmailHistory : function(EmailHistoryID, Callback) {
        return EmailHistories.CopyEmailHistoryObject({ EmailHistoryID : EmailHistoryID}, Callback);
    },

	CopyEmailHistoryObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesValidators.CopyEmailHistory)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistories.CopyEmailHistory.onValidationError))
					EmailHistories.CopyEmailHistory.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistories.Url, 
					Method : "CopyEmailHistory", 
					Params : { EmailHistoryID : oObject.EmailHistoryID}, 
					Serialize : EmailHistories.CopyEmailHistory.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistories.CopyEmailHistory.onErrorReceived) ? EmailHistories.CopyEmailHistory.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistories.Url, "CopyEmailHistory", { EmailHistoryID : oObject.EmailHistoryID}, EmailHistories.CopyEmailHistory.Serialize || {});
    },
	GetEmailHistories : function(Callback) {
        return EmailHistories.GetEmailHistoriesObject({ }, Callback);
    },

	GetEmailHistoriesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesValidators.GetEmailHistories)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistories.GetEmailHistories.onValidationError))
					EmailHistories.GetEmailHistories.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistories.Url, 
					Method : "GetEmailHistories", 
					Params : { }, 
					Serialize : EmailHistories.GetEmailHistories.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistories.GetEmailHistories.onErrorReceived) ? EmailHistories.GetEmailHistories.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistories.Url, "GetEmailHistories", { }, EmailHistories.GetEmailHistories.Serialize || {});
    },
	GetEmailHistoriesByEmailTemplateID : function(EmailTemplateID, Callback) {
        return EmailHistories.GetEmailHistoriesByEmailTemplateIDObject({ EmailTemplateID : EmailTemplateID}, Callback);
    },

	GetEmailHistoriesByEmailTemplateIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesValidators.GetEmailHistoriesByEmailTemplateID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistories.GetEmailHistoriesByEmailTemplateID.onValidationError))
					EmailHistories.GetEmailHistoriesByEmailTemplateID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistories.Url, 
					Method : "GetEmailHistoriesByEmailTemplateID", 
					Params : { EmailTemplateID : oObject.EmailTemplateID}, 
					Serialize : EmailHistories.GetEmailHistoriesByEmailTemplateID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistories.GetEmailHistoriesByEmailTemplateID.onErrorReceived) ? EmailHistories.GetEmailHistoriesByEmailTemplateID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistories.Url, "GetEmailHistoriesByEmailTemplateID", { EmailTemplateID : oObject.EmailTemplateID}, EmailHistories.GetEmailHistoriesByEmailTemplateID.Serialize || {});
    },
	GetEmailHistory : function(EmailHistoryID, Callback) {
        return EmailHistories.GetEmailHistoryObject({ EmailHistoryID : EmailHistoryID}, Callback);
    },

	GetEmailHistoryObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesValidators.GetEmailHistory)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistories.GetEmailHistory.onValidationError))
					EmailHistories.GetEmailHistory.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistories.Url, 
					Method : "GetEmailHistory", 
					Params : { EmailHistoryID : oObject.EmailHistoryID}, 
					Serialize : EmailHistories.GetEmailHistory.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistories.GetEmailHistory.onErrorReceived) ? EmailHistories.GetEmailHistory.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistories.Url, "GetEmailHistory", { EmailHistoryID : oObject.EmailHistoryID}, EmailHistories.GetEmailHistory.Serialize || {});
    },
	InsertEmailHistory : function(To, From, EmailTemplateID, Subject, Email, IsPending, IsSent, Data, Callback) {
        return EmailHistories.InsertEmailHistoryObject({ To : To,From : From,EmailTemplateID : EmailTemplateID,Subject : Subject,Email : Email,IsPending : IsPending,IsSent : IsSent,Data : Data}, Callback);
    },

	InsertEmailHistoryObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesValidators.InsertEmailHistory)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistories.InsertEmailHistory.onValidationError))
					EmailHistories.InsertEmailHistory.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistories.Url, 
					Method : "InsertEmailHistory", 
					Params : { To : oObject.To,From : oObject.From,EmailTemplateID : oObject.EmailTemplateID,Subject : oObject.Subject,Email : oObject.Email,IsPending : oObject.IsPending,IsSent : oObject.IsSent,Data : oObject.Data}, 
					Serialize : EmailHistories.InsertEmailHistory.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistories.InsertEmailHistory.onErrorReceived) ? EmailHistories.InsertEmailHistory.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistories.Url, "InsertEmailHistory", { To : oObject.To,From : oObject.From,EmailTemplateID : oObject.EmailTemplateID,Subject : oObject.Subject,Email : oObject.Email,IsPending : oObject.IsPending,IsSent : oObject.IsSent,Data : oObject.Data}, EmailHistories.InsertEmailHistory.Serialize || {});
    },
	MarkEmailHistoryAsNotPending : function(EmailHistoryID, Callback) {
        return EmailHistories.MarkEmailHistoryAsNotPendingObject({ EmailHistoryID : EmailHistoryID}, Callback);
    },

	MarkEmailHistoryAsNotPendingObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesValidators.MarkEmailHistoryAsNotPending)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistories.MarkEmailHistoryAsNotPending.onValidationError))
					EmailHistories.MarkEmailHistoryAsNotPending.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistories.Url, 
					Method : "MarkEmailHistoryAsNotPending", 
					Params : { EmailHistoryID : oObject.EmailHistoryID}, 
					Serialize : EmailHistories.MarkEmailHistoryAsNotPending.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistories.MarkEmailHistoryAsNotPending.onErrorReceived) ? EmailHistories.MarkEmailHistoryAsNotPending.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistories.Url, "MarkEmailHistoryAsNotPending", { EmailHistoryID : oObject.EmailHistoryID}, EmailHistories.MarkEmailHistoryAsNotPending.Serialize || {});
    },
	MarkEmailHistoryAsNotSent : function(EmailHistoryID, Callback) {
        return EmailHistories.MarkEmailHistoryAsNotSentObject({ EmailHistoryID : EmailHistoryID}, Callback);
    },

	MarkEmailHistoryAsNotSentObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesValidators.MarkEmailHistoryAsNotSent)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistories.MarkEmailHistoryAsNotSent.onValidationError))
					EmailHistories.MarkEmailHistoryAsNotSent.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistories.Url, 
					Method : "MarkEmailHistoryAsNotSent", 
					Params : { EmailHistoryID : oObject.EmailHistoryID}, 
					Serialize : EmailHistories.MarkEmailHistoryAsNotSent.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistories.MarkEmailHistoryAsNotSent.onErrorReceived) ? EmailHistories.MarkEmailHistoryAsNotSent.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistories.Url, "MarkEmailHistoryAsNotSent", { EmailHistoryID : oObject.EmailHistoryID}, EmailHistories.MarkEmailHistoryAsNotSent.Serialize || {});
    },
	MarkEmailHistoryAsPending : function(EmailHistoryID, Callback) {
        return EmailHistories.MarkEmailHistoryAsPendingObject({ EmailHistoryID : EmailHistoryID}, Callback);
    },

	MarkEmailHistoryAsPendingObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesValidators.MarkEmailHistoryAsPending)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistories.MarkEmailHistoryAsPending.onValidationError))
					EmailHistories.MarkEmailHistoryAsPending.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistories.Url, 
					Method : "MarkEmailHistoryAsPending", 
					Params : { EmailHistoryID : oObject.EmailHistoryID}, 
					Serialize : EmailHistories.MarkEmailHistoryAsPending.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistories.MarkEmailHistoryAsPending.onErrorReceived) ? EmailHistories.MarkEmailHistoryAsPending.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistories.Url, "MarkEmailHistoryAsPending", { EmailHistoryID : oObject.EmailHistoryID}, EmailHistories.MarkEmailHistoryAsPending.Serialize || {});
    },
	MarkEmailHistoryAsSent : function(EmailHistoryID, Callback) {
        return EmailHistories.MarkEmailHistoryAsSentObject({ EmailHistoryID : EmailHistoryID}, Callback);
    },

	MarkEmailHistoryAsSentObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesValidators.MarkEmailHistoryAsSent)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistories.MarkEmailHistoryAsSent.onValidationError))
					EmailHistories.MarkEmailHistoryAsSent.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistories.Url, 
					Method : "MarkEmailHistoryAsSent", 
					Params : { EmailHistoryID : oObject.EmailHistoryID}, 
					Serialize : EmailHistories.MarkEmailHistoryAsSent.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistories.MarkEmailHistoryAsSent.onErrorReceived) ? EmailHistories.MarkEmailHistoryAsSent.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistories.Url, "MarkEmailHistoryAsSent", { EmailHistoryID : oObject.EmailHistoryID}, EmailHistories.MarkEmailHistoryAsSent.Serialize || {});
    },
	RemoveEmailHistory : function(EmailHistoryID, Callback) {
        return EmailHistories.RemoveEmailHistoryObject({ EmailHistoryID : EmailHistoryID}, Callback);
    },

	RemoveEmailHistoryObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesValidators.RemoveEmailHistory)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistories.RemoveEmailHistory.onValidationError))
					EmailHistories.RemoveEmailHistory.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistories.Url, 
					Method : "RemoveEmailHistory", 
					Params : { EmailHistoryID : oObject.EmailHistoryID}, 
					Serialize : EmailHistories.RemoveEmailHistory.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistories.RemoveEmailHistory.onErrorReceived) ? EmailHistories.RemoveEmailHistory.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistories.Url, "RemoveEmailHistory", { EmailHistoryID : oObject.EmailHistoryID}, EmailHistories.RemoveEmailHistory.Serialize || {});
    },
	UpdateEmailHistory : function(EmailHistoryID, To, From, EmailTemplateID, Subject, Email, IsPending, IsSent, Data, Callback) {
        return EmailHistories.UpdateEmailHistoryObject({ EmailHistoryID : EmailHistoryID,To : To,From : From,EmailTemplateID : EmailTemplateID,Subject : Subject,Email : Email,IsPending : IsPending,IsSent : IsSent,Data : Data}, Callback);
    },

	UpdateEmailHistoryObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesValidators.UpdateEmailHistory)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistories.UpdateEmailHistory.onValidationError))
					EmailHistories.UpdateEmailHistory.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistories.Url, 
					Method : "UpdateEmailHistory", 
					Params : { EmailHistoryID : oObject.EmailHistoryID,To : oObject.To,From : oObject.From,EmailTemplateID : oObject.EmailTemplateID,Subject : oObject.Subject,Email : oObject.Email,IsPending : oObject.IsPending,IsSent : oObject.IsSent,Data : oObject.Data}, 
					Serialize : EmailHistories.UpdateEmailHistory.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistories.UpdateEmailHistory.onErrorReceived) ? EmailHistories.UpdateEmailHistory.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistories.Url, "UpdateEmailHistory", { EmailHistoryID : oObject.EmailHistoryID,To : oObject.To,From : oObject.From,EmailTemplateID : oObject.EmailTemplateID,Subject : oObject.Subject,Email : oObject.Email,IsPending : oObject.IsPending,IsSent : oObject.IsSent,Data : oObject.Data}, EmailHistories.UpdateEmailHistory.Serialize || {});
    },
	UpdateEmailHistoryData : function(EmailHistoryID, Data, Callback) {
        return EmailHistories.UpdateEmailHistoryDataObject({ EmailHistoryID : EmailHistoryID,Data : Data}, Callback);
    },

	UpdateEmailHistoryDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesValidators.UpdateEmailHistoryData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistories.UpdateEmailHistoryData.onValidationError))
					EmailHistories.UpdateEmailHistoryData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistories.Url, 
					Method : "UpdateEmailHistoryData", 
					Params : { EmailHistoryID : oObject.EmailHistoryID,Data : oObject.Data}, 
					Serialize : EmailHistories.UpdateEmailHistoryData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistories.UpdateEmailHistoryData.onErrorReceived) ? EmailHistories.UpdateEmailHistoryData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistories.Url, "UpdateEmailHistoryData", { EmailHistoryID : oObject.EmailHistoryID,Data : oObject.Data}, EmailHistories.UpdateEmailHistoryData.Serialize || {});
    }
};

var EmailHistoriesValidators = {
	

	CopyEmailHistory : {
			EmailHistoryID : EmailHistoriesValidatorsFields.EmailHistoryID	
	},

	GetEmailHistories : {	
	},

	GetEmailHistoriesByEmailTemplateID : {
			EmailTemplateID : EmailHistoriesValidatorsFields.EmailTemplateID	
	},

	GetEmailHistory : {
			EmailHistoryID : EmailHistoriesValidatorsFields.EmailHistoryID	
	},

	InsertEmailHistory : {
			To : EmailHistoriesValidatorsFields.To,
			From : EmailHistoriesValidatorsFields.From,
			EmailTemplateID : EmailHistoriesValidatorsFields.EmailTemplateID,
			Subject : EmailHistoriesValidatorsFields.Subject,
			Email : EmailHistoriesValidatorsFields.Email,
			IsPending : EmailHistoriesValidatorsFields.IsPending,
			IsSent : EmailHistoriesValidatorsFields.IsSent,
			Data : EmailHistoriesValidatorsFields.Data	
	},

	MarkEmailHistoryAsNotPending : {
			EmailHistoryID : EmailHistoriesValidatorsFields.EmailHistoryID	
	},

	MarkEmailHistoryAsNotSent : {
			EmailHistoryID : EmailHistoriesValidatorsFields.EmailHistoryID	
	},

	MarkEmailHistoryAsPending : {
			EmailHistoryID : EmailHistoriesValidatorsFields.EmailHistoryID	
	},

	MarkEmailHistoryAsSent : {
			EmailHistoryID : EmailHistoriesValidatorsFields.EmailHistoryID	
	},

	RemoveEmailHistory : {
			EmailHistoryID : EmailHistoriesValidatorsFields.EmailHistoryID	
	},

	UpdateEmailHistory : {
			EmailHistoryID : EmailHistoriesValidatorsFields.EmailHistoryID,
			To : EmailHistoriesValidatorsFields.To,
			From : EmailHistoriesValidatorsFields.From,
			EmailTemplateID : EmailHistoriesValidatorsFields.EmailTemplateID,
			Subject : EmailHistoriesValidatorsFields.Subject,
			Email : EmailHistoriesValidatorsFields.Email,
			IsPending : EmailHistoriesValidatorsFields.IsPending,
			IsSent : EmailHistoriesValidatorsFields.IsSent,
			Data : EmailHistoriesValidatorsFields.Data	
	},

	UpdateEmailHistoryData : {
			EmailHistoryID : EmailHistoriesValidatorsFields.EmailHistoryID,
			Data : EmailHistoriesValidatorsFields.Data	
	}
};

    