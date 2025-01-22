
    	    	
var MessagesValidatorsFields = {
	
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		IsDelivered : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid IsDelivered. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		IsDismissed : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid IsDismissed. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		IsReceived : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid IsReceived. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		MessageID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Message ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		MessageText : {Validators : [Validators.String], InvalidMessage: "Invalid MessageText. " +   ValidatorDescriptions.Length(1, 255) },
		Phone : {Validators : [Validators.String], InvalidMessage: "Invalid Phone. " +   ValidatorDescriptions.Length(1, 255) },
		ReceivedByPhone : {Validators : [Validators.String], InvalidMessage: "Invalid ReceivedByPhone. " +   ValidatorDescriptions.Length(1, 255) },
		SentByPhone : {Validators : [Validators.String], InvalidMessage: "Invalid SentByPhone. " +   ValidatorDescriptions.Length(1, 255) }	
}
			
var Messages = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.Messages.ashx"

	,
	CopyMessage : function(MessageID, Callback) {
        return Messages.CopyMessageObject({ MessageID : MessageID}, Callback);
    },

	CopyMessageObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesValidators.CopyMessage)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Messages.CopyMessage.onValidationError))
					Messages.CopyMessage.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Messages.Url, 
					Method : "CopyMessage", 
					Params : { MessageID : oObject.MessageID}, 
					Serialize : Messages.CopyMessage.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Messages.CopyMessage.onErrorReceived) ? Messages.CopyMessage.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Messages.Url, "CopyMessage", { MessageID : oObject.MessageID}, Messages.CopyMessage.Serialize || {});
    },
	GetMessage : function(MessageID, Callback) {
        return Messages.GetMessageObject({ MessageID : MessageID}, Callback);
    },

	GetMessageObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesValidators.GetMessage)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Messages.GetMessage.onValidationError))
					Messages.GetMessage.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Messages.Url, 
					Method : "GetMessage", 
					Params : { MessageID : oObject.MessageID}, 
					Serialize : Messages.GetMessage.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Messages.GetMessage.onErrorReceived) ? Messages.GetMessage.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Messages.Url, "GetMessage", { MessageID : oObject.MessageID}, Messages.GetMessage.Serialize || {});
    },
	GetMessages : function(Callback) {
        return Messages.GetMessagesObject({ }, Callback);
    },

	GetMessagesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesValidators.GetMessages)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Messages.GetMessages.onValidationError))
					Messages.GetMessages.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Messages.Url, 
					Method : "GetMessages", 
					Params : { }, 
					Serialize : Messages.GetMessages.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Messages.GetMessages.onErrorReceived) ? Messages.GetMessages.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Messages.Url, "GetMessages", { }, Messages.GetMessages.Serialize || {});
    },
	GetMessagesByPhone : function(Phone, Callback) {
        return Messages.GetMessagesByPhoneObject({ Phone : Phone}, Callback);
    },

	GetMessagesByPhoneObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesValidators.GetMessagesByPhone)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Messages.GetMessagesByPhone.onValidationError))
					Messages.GetMessagesByPhone.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Messages.Url, 
					Method : "GetMessagesByPhone", 
					Params : { Phone : oObject.Phone}, 
					Serialize : Messages.GetMessagesByPhone.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Messages.GetMessagesByPhone.onErrorReceived) ? Messages.GetMessagesByPhone.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Messages.Url, "GetMessagesByPhone", { Phone : oObject.Phone}, Messages.GetMessagesByPhone.Serialize || {});
    },
	InsertMessage : function(MessageText, SentByPhone, ReceivedByPhone, Data, IsDelivered, IsReceived, IsDismissed, Callback) {
        return Messages.InsertMessageObject({ MessageText : MessageText,SentByPhone : SentByPhone,ReceivedByPhone : ReceivedByPhone,Data : Data,IsDelivered : IsDelivered,IsReceived : IsReceived,IsDismissed : IsDismissed}, Callback);
    },

	InsertMessageObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesValidators.InsertMessage)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Messages.InsertMessage.onValidationError))
					Messages.InsertMessage.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Messages.Url, 
					Method : "InsertMessage", 
					Params : { MessageText : oObject.MessageText,SentByPhone : oObject.SentByPhone,ReceivedByPhone : oObject.ReceivedByPhone,Data : oObject.Data,IsDelivered : oObject.IsDelivered,IsReceived : oObject.IsReceived,IsDismissed : oObject.IsDismissed}, 
					Serialize : Messages.InsertMessage.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Messages.InsertMessage.onErrorReceived) ? Messages.InsertMessage.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Messages.Url, "InsertMessage", { MessageText : oObject.MessageText,SentByPhone : oObject.SentByPhone,ReceivedByPhone : oObject.ReceivedByPhone,Data : oObject.Data,IsDelivered : oObject.IsDelivered,IsReceived : oObject.IsReceived,IsDismissed : oObject.IsDismissed}, Messages.InsertMessage.Serialize || {});
    },
	MarkMessageAsDelivered : function(MessageID, Callback) {
        return Messages.MarkMessageAsDeliveredObject({ MessageID : MessageID}, Callback);
    },

	MarkMessageAsDeliveredObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesValidators.MarkMessageAsDelivered)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Messages.MarkMessageAsDelivered.onValidationError))
					Messages.MarkMessageAsDelivered.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Messages.Url, 
					Method : "MarkMessageAsDelivered", 
					Params : { MessageID : oObject.MessageID}, 
					Serialize : Messages.MarkMessageAsDelivered.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Messages.MarkMessageAsDelivered.onErrorReceived) ? Messages.MarkMessageAsDelivered.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Messages.Url, "MarkMessageAsDelivered", { MessageID : oObject.MessageID}, Messages.MarkMessageAsDelivered.Serialize || {});
    },
	MarkMessageAsDismissed : function(MessageID, Callback) {
        return Messages.MarkMessageAsDismissedObject({ MessageID : MessageID}, Callback);
    },

	MarkMessageAsDismissedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesValidators.MarkMessageAsDismissed)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Messages.MarkMessageAsDismissed.onValidationError))
					Messages.MarkMessageAsDismissed.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Messages.Url, 
					Method : "MarkMessageAsDismissed", 
					Params : { MessageID : oObject.MessageID}, 
					Serialize : Messages.MarkMessageAsDismissed.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Messages.MarkMessageAsDismissed.onErrorReceived) ? Messages.MarkMessageAsDismissed.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Messages.Url, "MarkMessageAsDismissed", { MessageID : oObject.MessageID}, Messages.MarkMessageAsDismissed.Serialize || {});
    },
	MarkMessageAsNotDelivered : function(MessageID, Callback) {
        return Messages.MarkMessageAsNotDeliveredObject({ MessageID : MessageID}, Callback);
    },

	MarkMessageAsNotDeliveredObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesValidators.MarkMessageAsNotDelivered)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Messages.MarkMessageAsNotDelivered.onValidationError))
					Messages.MarkMessageAsNotDelivered.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Messages.Url, 
					Method : "MarkMessageAsNotDelivered", 
					Params : { MessageID : oObject.MessageID}, 
					Serialize : Messages.MarkMessageAsNotDelivered.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Messages.MarkMessageAsNotDelivered.onErrorReceived) ? Messages.MarkMessageAsNotDelivered.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Messages.Url, "MarkMessageAsNotDelivered", { MessageID : oObject.MessageID}, Messages.MarkMessageAsNotDelivered.Serialize || {});
    },
	MarkMessageAsNotDismissed : function(MessageID, Callback) {
        return Messages.MarkMessageAsNotDismissedObject({ MessageID : MessageID}, Callback);
    },

	MarkMessageAsNotDismissedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesValidators.MarkMessageAsNotDismissed)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Messages.MarkMessageAsNotDismissed.onValidationError))
					Messages.MarkMessageAsNotDismissed.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Messages.Url, 
					Method : "MarkMessageAsNotDismissed", 
					Params : { MessageID : oObject.MessageID}, 
					Serialize : Messages.MarkMessageAsNotDismissed.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Messages.MarkMessageAsNotDismissed.onErrorReceived) ? Messages.MarkMessageAsNotDismissed.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Messages.Url, "MarkMessageAsNotDismissed", { MessageID : oObject.MessageID}, Messages.MarkMessageAsNotDismissed.Serialize || {});
    },
	MarkMessageAsNotReceived : function(MessageID, Callback) {
        return Messages.MarkMessageAsNotReceivedObject({ MessageID : MessageID}, Callback);
    },

	MarkMessageAsNotReceivedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesValidators.MarkMessageAsNotReceived)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Messages.MarkMessageAsNotReceived.onValidationError))
					Messages.MarkMessageAsNotReceived.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Messages.Url, 
					Method : "MarkMessageAsNotReceived", 
					Params : { MessageID : oObject.MessageID}, 
					Serialize : Messages.MarkMessageAsNotReceived.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Messages.MarkMessageAsNotReceived.onErrorReceived) ? Messages.MarkMessageAsNotReceived.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Messages.Url, "MarkMessageAsNotReceived", { MessageID : oObject.MessageID}, Messages.MarkMessageAsNotReceived.Serialize || {});
    },
	MarkMessageAsReceived : function(MessageID, Callback) {
        return Messages.MarkMessageAsReceivedObject({ MessageID : MessageID}, Callback);
    },

	MarkMessageAsReceivedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesValidators.MarkMessageAsReceived)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Messages.MarkMessageAsReceived.onValidationError))
					Messages.MarkMessageAsReceived.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Messages.Url, 
					Method : "MarkMessageAsReceived", 
					Params : { MessageID : oObject.MessageID}, 
					Serialize : Messages.MarkMessageAsReceived.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Messages.MarkMessageAsReceived.onErrorReceived) ? Messages.MarkMessageAsReceived.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Messages.Url, "MarkMessageAsReceived", { MessageID : oObject.MessageID}, Messages.MarkMessageAsReceived.Serialize || {});
    },
	RemoveMessage : function(MessageID, Callback) {
        return Messages.RemoveMessageObject({ MessageID : MessageID}, Callback);
    },

	RemoveMessageObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesValidators.RemoveMessage)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Messages.RemoveMessage.onValidationError))
					Messages.RemoveMessage.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Messages.Url, 
					Method : "RemoveMessage", 
					Params : { MessageID : oObject.MessageID}, 
					Serialize : Messages.RemoveMessage.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Messages.RemoveMessage.onErrorReceived) ? Messages.RemoveMessage.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Messages.Url, "RemoveMessage", { MessageID : oObject.MessageID}, Messages.RemoveMessage.Serialize || {});
    },
	UpdateMessage : function(MessageID, MessageText, SentByPhone, ReceivedByPhone, Data, IsDelivered, IsReceived, IsDismissed, Callback) {
        return Messages.UpdateMessageObject({ MessageID : MessageID,MessageText : MessageText,SentByPhone : SentByPhone,ReceivedByPhone : ReceivedByPhone,Data : Data,IsDelivered : IsDelivered,IsReceived : IsReceived,IsDismissed : IsDismissed}, Callback);
    },

	UpdateMessageObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesValidators.UpdateMessage)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Messages.UpdateMessage.onValidationError))
					Messages.UpdateMessage.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Messages.Url, 
					Method : "UpdateMessage", 
					Params : { MessageID : oObject.MessageID,MessageText : oObject.MessageText,SentByPhone : oObject.SentByPhone,ReceivedByPhone : oObject.ReceivedByPhone,Data : oObject.Data,IsDelivered : oObject.IsDelivered,IsReceived : oObject.IsReceived,IsDismissed : oObject.IsDismissed}, 
					Serialize : Messages.UpdateMessage.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Messages.UpdateMessage.onErrorReceived) ? Messages.UpdateMessage.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Messages.Url, "UpdateMessage", { MessageID : oObject.MessageID,MessageText : oObject.MessageText,SentByPhone : oObject.SentByPhone,ReceivedByPhone : oObject.ReceivedByPhone,Data : oObject.Data,IsDelivered : oObject.IsDelivered,IsReceived : oObject.IsReceived,IsDismissed : oObject.IsDismissed}, Messages.UpdateMessage.Serialize || {});
    },
	UpdateMessageData : function(MessageID, Data, Callback) {
        return Messages.UpdateMessageDataObject({ MessageID : MessageID,Data : Data}, Callback);
    },

	UpdateMessageDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesValidators.UpdateMessageData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Messages.UpdateMessageData.onValidationError))
					Messages.UpdateMessageData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Messages.Url, 
					Method : "UpdateMessageData", 
					Params : { MessageID : oObject.MessageID,Data : oObject.Data}, 
					Serialize : Messages.UpdateMessageData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Messages.UpdateMessageData.onErrorReceived) ? Messages.UpdateMessageData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Messages.Url, "UpdateMessageData", { MessageID : oObject.MessageID,Data : oObject.Data}, Messages.UpdateMessageData.Serialize || {});
    }
};

var MessagesValidators = {
	

	CopyMessage : {
			MessageID : MessagesValidatorsFields.MessageID	
	},

	GetMessage : {
			MessageID : MessagesValidatorsFields.MessageID	
	},

	GetMessages : {	
	},

	GetMessagesByPhone : {
			Phone : MessagesValidatorsFields.Phone	
	},

	InsertMessage : {
			MessageText : MessagesValidatorsFields.MessageText,
			SentByPhone : MessagesValidatorsFields.SentByPhone,
			ReceivedByPhone : MessagesValidatorsFields.ReceivedByPhone,
			Data : MessagesValidatorsFields.Data,
			IsDelivered : MessagesValidatorsFields.IsDelivered,
			IsReceived : MessagesValidatorsFields.IsReceived,
			IsDismissed : MessagesValidatorsFields.IsDismissed	
	},

	MarkMessageAsDelivered : {
			MessageID : MessagesValidatorsFields.MessageID	
	},

	MarkMessageAsDismissed : {
			MessageID : MessagesValidatorsFields.MessageID	
	},

	MarkMessageAsNotDelivered : {
			MessageID : MessagesValidatorsFields.MessageID	
	},

	MarkMessageAsNotDismissed : {
			MessageID : MessagesValidatorsFields.MessageID	
	},

	MarkMessageAsNotReceived : {
			MessageID : MessagesValidatorsFields.MessageID	
	},

	MarkMessageAsReceived : {
			MessageID : MessagesValidatorsFields.MessageID	
	},

	RemoveMessage : {
			MessageID : MessagesValidatorsFields.MessageID	
	},

	UpdateMessage : {
			MessageID : MessagesValidatorsFields.MessageID,
			MessageText : MessagesValidatorsFields.MessageText,
			SentByPhone : MessagesValidatorsFields.SentByPhone,
			ReceivedByPhone : MessagesValidatorsFields.ReceivedByPhone,
			Data : MessagesValidatorsFields.Data,
			IsDelivered : MessagesValidatorsFields.IsDelivered,
			IsReceived : MessagesValidatorsFields.IsReceived,
			IsDismissed : MessagesValidatorsFields.IsDismissed	
	},

	UpdateMessageData : {
			MessageID : MessagesValidatorsFields.MessageID,
			Data : MessagesValidatorsFields.Data	
	}
};

    