
    	    	
var EmailTemplatesValidatorsFields = {
	
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		EmailParams : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Email Params. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		EmailSubject : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Email Subject. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		EmailTemplate : {Validators : [Validators.String], InvalidMessage: "Invalid EmailTemplate. " +   ValidatorDescriptions.Length(1, 255) },
		EmailTemplateID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Email Template ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		EmailText : {Validators : [Validators.Text, Validators.Required], InvalidMessage: "Invalid Email Text. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 4000) },
		FromAddress : {Validators : [Validators.Email], InvalidMessage: "Invalid From Address. " +   ValidatorDescriptions.Email() },
		Name : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Name. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		Params : {Validators : [Validators.Object, Validators.Required], InvalidMessage: "Invalid Params. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Object() },
		To : {Validators : [Validators.String], InvalidMessage: "Invalid To. " +   ValidatorDescriptions.Length(1, 255) }	
}
			
var EmailTemplates = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.EmailTemplates.ashx"

	,
	CopyEmailTemplate : function(EmailTemplateID, Callback) {
        return EmailTemplates.CopyEmailTemplateObject({ EmailTemplateID : EmailTemplateID}, Callback);
    },

	CopyEmailTemplateObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesValidators.CopyEmailTemplate)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplates.CopyEmailTemplate.onValidationError))
					EmailTemplates.CopyEmailTemplate.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplates.Url, 
					Method : "CopyEmailTemplate", 
					Params : { EmailTemplateID : oObject.EmailTemplateID}, 
					Serialize : EmailTemplates.CopyEmailTemplate.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplates.CopyEmailTemplate.onErrorReceived) ? EmailTemplates.CopyEmailTemplate.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplates.Url, "CopyEmailTemplate", { EmailTemplateID : oObject.EmailTemplateID}, EmailTemplates.CopyEmailTemplate.Serialize || {});
    },
	GetEmailParamsAsJson : function(EmailTemplateID, Callback) {
        return EmailTemplates.GetEmailParamsAsJsonObject({ EmailTemplateID : EmailTemplateID}, Callback);
    },

	GetEmailParamsAsJsonObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesValidators.GetEmailParamsAsJson)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplates.GetEmailParamsAsJson.onValidationError))
					EmailTemplates.GetEmailParamsAsJson.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplates.Url, 
					Method : "GetEmailParamsAsJson", 
					Params : { EmailTemplateID : oObject.EmailTemplateID}, 
					Serialize : EmailTemplates.GetEmailParamsAsJson.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplates.GetEmailParamsAsJson.onErrorReceived) ? EmailTemplates.GetEmailParamsAsJson.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplates.Url, "GetEmailParamsAsJson", { EmailTemplateID : oObject.EmailTemplateID}, EmailTemplates.GetEmailParamsAsJson.Serialize || {});
    },
	GetEmailTemplate : function(EmailTemplateID, Callback) {
        return EmailTemplates.GetEmailTemplateObject({ EmailTemplateID : EmailTemplateID}, Callback);
    },

	GetEmailTemplateObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesValidators.GetEmailTemplate)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplates.GetEmailTemplate.onValidationError))
					EmailTemplates.GetEmailTemplate.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplates.Url, 
					Method : "GetEmailTemplate", 
					Params : { EmailTemplateID : oObject.EmailTemplateID}, 
					Serialize : EmailTemplates.GetEmailTemplate.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplates.GetEmailTemplate.onErrorReceived) ? EmailTemplates.GetEmailTemplate.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplates.Url, "GetEmailTemplate", { EmailTemplateID : oObject.EmailTemplateID}, EmailTemplates.GetEmailTemplate.Serialize || {});
    },
	GetEmailTemplateByName : function(Name, Callback) {
        return EmailTemplates.GetEmailTemplateByNameObject({ Name : Name}, Callback);
    },

	GetEmailTemplateByNameObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesValidators.GetEmailTemplateByName)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplates.GetEmailTemplateByName.onValidationError))
					EmailTemplates.GetEmailTemplateByName.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplates.Url, 
					Method : "GetEmailTemplateByName", 
					Params : { Name : oObject.Name}, 
					Serialize : EmailTemplates.GetEmailTemplateByName.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplates.GetEmailTemplateByName.onErrorReceived) ? EmailTemplates.GetEmailTemplateByName.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplates.Url, "GetEmailTemplateByName", { Name : oObject.Name}, EmailTemplates.GetEmailTemplateByName.Serialize || {});
    },
	GetEmailTemplates : function(Callback) {
        return EmailTemplates.GetEmailTemplatesObject({ }, Callback);
    },

	GetEmailTemplatesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesValidators.GetEmailTemplates)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplates.GetEmailTemplates.onValidationError))
					EmailTemplates.GetEmailTemplates.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplates.Url, 
					Method : "GetEmailTemplates", 
					Params : { }, 
					Serialize : EmailTemplates.GetEmailTemplates.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplates.GetEmailTemplates.onErrorReceived) ? EmailTemplates.GetEmailTemplates.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplates.Url, "GetEmailTemplates", { }, EmailTemplates.GetEmailTemplates.Serialize || {});
    },
	GetRenderedEmailAsHTML : function(EmailTemplateID, Params, Callback) {
        return EmailTemplates.GetRenderedEmailAsHTMLObject({ EmailTemplateID : EmailTemplateID,Params : Params}, Callback);
    },

	GetRenderedEmailAsHTMLObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesValidators.GetRenderedEmailAsHTML)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplates.GetRenderedEmailAsHTML.onValidationError))
					EmailTemplates.GetRenderedEmailAsHTML.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplates.Url, 
					Method : "GetRenderedEmailAsHTML", 
					Params : { EmailTemplateID : oObject.EmailTemplateID,Params : oObject.Params}, 
					Serialize : EmailTemplates.GetRenderedEmailAsHTML.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplates.GetRenderedEmailAsHTML.onErrorReceived) ? EmailTemplates.GetRenderedEmailAsHTML.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplates.Url, "GetRenderedEmailAsHTML", { EmailTemplateID : oObject.EmailTemplateID,Params : oObject.Params}, EmailTemplates.GetRenderedEmailAsHTML.Serialize || {});
    },
	InsertEmailTemplate : function(Name, EmailSubject, EmailText, EmailParams, FromAddress, Data, Callback) {
        return EmailTemplates.InsertEmailTemplateObject({ Name : Name,EmailSubject : EmailSubject,EmailText : EmailText,EmailParams : EmailParams,FromAddress : FromAddress,Data : Data}, Callback);
    },

	InsertEmailTemplateObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesValidators.InsertEmailTemplate)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplates.InsertEmailTemplate.onValidationError))
					EmailTemplates.InsertEmailTemplate.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplates.Url, 
					Method : "InsertEmailTemplate", 
					Params : { Name : oObject.Name,EmailSubject : oObject.EmailSubject,EmailText : oObject.EmailText,EmailParams : oObject.EmailParams,FromAddress : oObject.FromAddress,Data : oObject.Data}, 
					Serialize : EmailTemplates.InsertEmailTemplate.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplates.InsertEmailTemplate.onErrorReceived) ? EmailTemplates.InsertEmailTemplate.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplates.Url, "InsertEmailTemplate", { Name : oObject.Name,EmailSubject : oObject.EmailSubject,EmailText : oObject.EmailText,EmailParams : oObject.EmailParams,FromAddress : oObject.FromAddress,Data : oObject.Data}, EmailTemplates.InsertEmailTemplate.Serialize || {});
    },
	RemoveEmailTemplate : function(EmailTemplateID, Callback) {
        return EmailTemplates.RemoveEmailTemplateObject({ EmailTemplateID : EmailTemplateID}, Callback);
    },

	RemoveEmailTemplateObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesValidators.RemoveEmailTemplate)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplates.RemoveEmailTemplate.onValidationError))
					EmailTemplates.RemoveEmailTemplate.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplates.Url, 
					Method : "RemoveEmailTemplate", 
					Params : { EmailTemplateID : oObject.EmailTemplateID}, 
					Serialize : EmailTemplates.RemoveEmailTemplate.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplates.RemoveEmailTemplate.onErrorReceived) ? EmailTemplates.RemoveEmailTemplate.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplates.Url, "RemoveEmailTemplate", { EmailTemplateID : oObject.EmailTemplateID}, EmailTemplates.RemoveEmailTemplate.Serialize || {});
    },
	SendEmailTemplate : function(EmailTemplateID, Params, To, Callback) {
        return EmailTemplates.SendEmailTemplateObject({ EmailTemplateID : EmailTemplateID,Params : Params,To : To}, Callback);
    },

	SendEmailTemplateObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesValidators.SendEmailTemplate)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplates.SendEmailTemplate.onValidationError))
					EmailTemplates.SendEmailTemplate.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplates.Url, 
					Method : "SendEmailTemplate", 
					Params : { EmailTemplateID : oObject.EmailTemplateID,Params : oObject.Params,To : oObject.To}, 
					Serialize : EmailTemplates.SendEmailTemplate.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplates.SendEmailTemplate.onErrorReceived) ? EmailTemplates.SendEmailTemplate.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplates.Url, "SendEmailTemplate", { EmailTemplateID : oObject.EmailTemplateID,Params : oObject.Params,To : oObject.To}, EmailTemplates.SendEmailTemplate.Serialize || {});
    },
	SendEmailTemplateByName : function(EmailTemplate, Params, To, Callback) {
        return EmailTemplates.SendEmailTemplateByNameObject({ EmailTemplate : EmailTemplate,Params : Params,To : To}, Callback);
    },

	SendEmailTemplateByNameObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesValidators.SendEmailTemplateByName)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplates.SendEmailTemplateByName.onValidationError))
					EmailTemplates.SendEmailTemplateByName.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplates.Url, 
					Method : "SendEmailTemplateByName", 
					Params : { EmailTemplate : oObject.EmailTemplate,Params : oObject.Params,To : oObject.To}, 
					Serialize : EmailTemplates.SendEmailTemplateByName.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplates.SendEmailTemplateByName.onErrorReceived) ? EmailTemplates.SendEmailTemplateByName.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplates.Url, "SendEmailTemplateByName", { EmailTemplate : oObject.EmailTemplate,Params : oObject.Params,To : oObject.To}, EmailTemplates.SendEmailTemplateByName.Serialize || {});
    },
	SendSMSTemplateByName : function(EmailTemplate, Params, To, Callback) {
        return EmailTemplates.SendSMSTemplateByNameObject({ EmailTemplate : EmailTemplate,Params : Params,To : To}, Callback);
    },

	SendSMSTemplateByNameObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesValidators.SendSMSTemplateByName)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplates.SendSMSTemplateByName.onValidationError))
					EmailTemplates.SendSMSTemplateByName.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplates.Url, 
					Method : "SendSMSTemplateByName", 
					Params : { EmailTemplate : oObject.EmailTemplate,Params : oObject.Params,To : oObject.To}, 
					Serialize : EmailTemplates.SendSMSTemplateByName.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplates.SendSMSTemplateByName.onErrorReceived) ? EmailTemplates.SendSMSTemplateByName.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplates.Url, "SendSMSTemplateByName", { EmailTemplate : oObject.EmailTemplate,Params : oObject.Params,To : oObject.To}, EmailTemplates.SendSMSTemplateByName.Serialize || {});
    },
	UpdateEmailTemplate : function(EmailTemplateID, Name, EmailSubject, EmailText, EmailParams, FromAddress, Data, Callback) {
        return EmailTemplates.UpdateEmailTemplateObject({ EmailTemplateID : EmailTemplateID,Name : Name,EmailSubject : EmailSubject,EmailText : EmailText,EmailParams : EmailParams,FromAddress : FromAddress,Data : Data}, Callback);
    },

	UpdateEmailTemplateObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesValidators.UpdateEmailTemplate)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplates.UpdateEmailTemplate.onValidationError))
					EmailTemplates.UpdateEmailTemplate.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplates.Url, 
					Method : "UpdateEmailTemplate", 
					Params : { EmailTemplateID : oObject.EmailTemplateID,Name : oObject.Name,EmailSubject : oObject.EmailSubject,EmailText : oObject.EmailText,EmailParams : oObject.EmailParams,FromAddress : oObject.FromAddress,Data : oObject.Data}, 
					Serialize : EmailTemplates.UpdateEmailTemplate.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplates.UpdateEmailTemplate.onErrorReceived) ? EmailTemplates.UpdateEmailTemplate.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplates.Url, "UpdateEmailTemplate", { EmailTemplateID : oObject.EmailTemplateID,Name : oObject.Name,EmailSubject : oObject.EmailSubject,EmailText : oObject.EmailText,EmailParams : oObject.EmailParams,FromAddress : oObject.FromAddress,Data : oObject.Data}, EmailTemplates.UpdateEmailTemplate.Serialize || {});
    },
	UpdateEmailTemplateData : function(EmailTemplateID, Data, Callback) {
        return EmailTemplates.UpdateEmailTemplateDataObject({ EmailTemplateID : EmailTemplateID,Data : Data}, Callback);
    },

	UpdateEmailTemplateDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesValidators.UpdateEmailTemplateData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplates.UpdateEmailTemplateData.onValidationError))
					EmailTemplates.UpdateEmailTemplateData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplates.Url, 
					Method : "UpdateEmailTemplateData", 
					Params : { EmailTemplateID : oObject.EmailTemplateID,Data : oObject.Data}, 
					Serialize : EmailTemplates.UpdateEmailTemplateData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplates.UpdateEmailTemplateData.onErrorReceived) ? EmailTemplates.UpdateEmailTemplateData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplates.Url, "UpdateEmailTemplateData", { EmailTemplateID : oObject.EmailTemplateID,Data : oObject.Data}, EmailTemplates.UpdateEmailTemplateData.Serialize || {});
    }
};

var EmailTemplatesValidators = {
	

	CopyEmailTemplate : {
			EmailTemplateID : EmailTemplatesValidatorsFields.EmailTemplateID	
	},

	GetEmailParamsAsJson : {
			EmailTemplateID : EmailTemplatesValidatorsFields.EmailTemplateID	
	},

	GetEmailTemplate : {
			EmailTemplateID : EmailTemplatesValidatorsFields.EmailTemplateID	
	},

	GetEmailTemplateByName : {
			Name : EmailTemplatesValidatorsFields.Name	
	},

	GetEmailTemplates : {	
	},

	GetRenderedEmailAsHTML : {
			EmailTemplateID : EmailTemplatesValidatorsFields.EmailTemplateID,
			Params : EmailTemplatesValidatorsFields.Params	
	},

	InsertEmailTemplate : {
			Name : EmailTemplatesValidatorsFields.Name,
			EmailSubject : EmailTemplatesValidatorsFields.EmailSubject,
			EmailText : EmailTemplatesValidatorsFields.EmailText,
			EmailParams : EmailTemplatesValidatorsFields.EmailParams,
			FromAddress : EmailTemplatesValidatorsFields.FromAddress,
			Data : EmailTemplatesValidatorsFields.Data	
	},

	RemoveEmailTemplate : {
			EmailTemplateID : EmailTemplatesValidatorsFields.EmailTemplateID	
	},

	SendEmailTemplate : {
			EmailTemplateID : EmailTemplatesValidatorsFields.EmailTemplateID,
			Params : EmailTemplatesValidatorsFields.Params,
			To : EmailTemplatesValidatorsFields.To	
	},

	SendEmailTemplateByName : {
			EmailTemplate : EmailTemplatesValidatorsFields.EmailTemplate,
			Params : EmailTemplatesValidatorsFields.Params,
			To : EmailTemplatesValidatorsFields.To	
	},

	SendSMSTemplateByName : {
			EmailTemplate : EmailTemplatesValidatorsFields.EmailTemplate,
			Params : EmailTemplatesValidatorsFields.Params,
			To : EmailTemplatesValidatorsFields.To	
	},

	UpdateEmailTemplate : {
			EmailTemplateID : EmailTemplatesValidatorsFields.EmailTemplateID,
			Name : EmailTemplatesValidatorsFields.Name,
			EmailSubject : EmailTemplatesValidatorsFields.EmailSubject,
			EmailText : EmailTemplatesValidatorsFields.EmailText,
			EmailParams : EmailTemplatesValidatorsFields.EmailParams,
			FromAddress : EmailTemplatesValidatorsFields.FromAddress,
			Data : EmailTemplatesValidatorsFields.Data	
	},

	UpdateEmailTemplateData : {
			EmailTemplateID : EmailTemplatesValidatorsFields.EmailTemplateID,
			Data : EmailTemplatesValidatorsFields.Data	
	}
};

    