

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["FeedingFrenzyAgentValidatorsFields"])) {
	var FeedingFrenzyAgentValidatorsFields = { };
}

if (!ObjectUtil.HasValue(FeedingFrenzyAgentValidatorsFields.Directive)) {
	FeedingFrenzyAgentValidatorsFields.Directive = {Validators : [Validators.Text], InvalidMessage: "Invalid Directive"};
}
if (!ObjectUtil.HasValue(FeedingFrenzyAgentValidatorsFields.iObjectID)) {
	FeedingFrenzyAgentValidatorsFields.iObjectID = {Validators : [Validators.Integer], InvalidMessage: "Invalid iObjectID"};
}
if (!ObjectUtil.HasValue(FeedingFrenzyAgentValidatorsFields.jsonValues)) {
	FeedingFrenzyAgentValidatorsFields.jsonValues = {Validators : [Validators.Object], InvalidMessage: "Invalid jsonValues"};
}
if (!ObjectUtil.HasValue(FeedingFrenzyAgentValidatorsFields.strContext)) {
	FeedingFrenzyAgentValidatorsFields.strContext = {Validators : [Validators.Text], InvalidMessage: "Invalid strContext"};
}
if (!ObjectUtil.HasValue(FeedingFrenzyAgentValidatorsFields.strDirective)) {
	FeedingFrenzyAgentValidatorsFields.strDirective = {Validators : [Validators.Text], InvalidMessage: "Invalid strDirective"};
}
if (!ObjectUtil.HasValue(FeedingFrenzyAgentValidatorsFields.strDocumentID)) {
	FeedingFrenzyAgentValidatorsFields.strDocumentID = {Validators : [Validators.Text], InvalidMessage: "Invalid strDocumentID"};
}
if (!ObjectUtil.HasValue(FeedingFrenzyAgentValidatorsFields.strDocumentTitle)) {
	FeedingFrenzyAgentValidatorsFields.strDocumentTitle = {Validators : [Validators.Text], InvalidMessage: "Invalid strDocumentTitle"};
}
if (!ObjectUtil.HasValue(FeedingFrenzyAgentValidatorsFields.strEntity)) {
	FeedingFrenzyAgentValidatorsFields.strEntity = {Validators : [Validators.Text], InvalidMessage: "Invalid strEntity"};
}
if (!ObjectUtil.HasValue(FeedingFrenzyAgentValidatorsFields.strObjectName)) {
	FeedingFrenzyAgentValidatorsFields.strObjectName = {Validators : [Validators.Text], InvalidMessage: "Invalid strObjectName"};
}
if (!ObjectUtil.HasValue(FeedingFrenzyAgentValidatorsFields.strParent)) {
	FeedingFrenzyAgentValidatorsFields.strParent = {Validators : [Validators.Text], InvalidMessage: "Invalid strParent"};
}
if (!ObjectUtil.HasValue(FeedingFrenzyAgentValidatorsFields.strRelated)) {
	FeedingFrenzyAgentValidatorsFields.strRelated = {Validators : [Validators.Text], InvalidMessage: "Invalid strRelated"};
}
if (!ObjectUtil.HasValue(FeedingFrenzyAgentValidatorsFields.strRequestKey)) {
	FeedingFrenzyAgentValidatorsFields.strRequestKey = {Validators : [Validators.Text], InvalidMessage: "Invalid strRequestKey"};
}

		
var FeedingFrenzyAgent = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.ChatAgents.FeedingFrenzyAgent.ashx"

	,
	ContinueDirective : function(strRequestKey, Directive, jsonValues, Callback) {
        return FeedingFrenzyAgent.ContinueDirectiveObject({ strRequestKey : strRequestKey,Directive : Directive,jsonValues : jsonValues}, Callback);
    },

	ContinueDirectiveObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeedingFrenzyAgentValidators.ContinueDirective)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeedingFrenzyAgent.ContinueDirective.onValidationError))
					FeedingFrenzyAgent.ContinueDirective.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeedingFrenzyAgent.Url, 
					Method : "ContinueDirective", 
					Params : { strRequestKey : oObject.strRequestKey,Directive : oObject.Directive,jsonValues : oObject.jsonValues}, 
					Serialize : FeedingFrenzyAgent.ContinueDirective.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeedingFrenzyAgent.ContinueDirective.onErrorReceived) ? FeedingFrenzyAgent.ContinueDirective.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeedingFrenzyAgent.Url, "ContinueDirective", { strRequestKey : oObject.strRequestKey,Directive : oObject.Directive,jsonValues : oObject.jsonValues}, FeedingFrenzyAgent.ContinueDirective.Serialize || {});
    },
	InsertEntity : function(strEntity, strParent, strRelated, Callback) {
        return FeedingFrenzyAgent.InsertEntityObject({ strEntity : strEntity,strParent : strParent,strRelated : strRelated}, Callback);
    },

	InsertEntityObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeedingFrenzyAgentValidators.InsertEntity)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeedingFrenzyAgent.InsertEntity.onValidationError))
					FeedingFrenzyAgent.InsertEntity.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeedingFrenzyAgent.Url, 
					Method : "InsertEntity", 
					Params : { strEntity : oObject.strEntity,strParent : oObject.strParent,strRelated : oObject.strRelated}, 
					Serialize : FeedingFrenzyAgent.InsertEntity.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeedingFrenzyAgent.InsertEntity.onErrorReceived) ? FeedingFrenzyAgent.InsertEntity.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeedingFrenzyAgent.Url, "InsertEntity", { strEntity : oObject.strEntity,strParent : oObject.strParent,strRelated : oObject.strRelated}, FeedingFrenzyAgent.InsertEntity.Serialize || {});
    },
	InsertGoogleDocumentEntity : function(strDocumentTitle, strDocumentID, strRelated, Callback) {
        return FeedingFrenzyAgent.InsertGoogleDocumentEntityObject({ strDocumentTitle : strDocumentTitle,strDocumentID : strDocumentID,strRelated : strRelated}, Callback);
    },

	InsertGoogleDocumentEntityObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeedingFrenzyAgentValidators.InsertGoogleDocumentEntity)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeedingFrenzyAgent.InsertGoogleDocumentEntity.onValidationError))
					FeedingFrenzyAgent.InsertGoogleDocumentEntity.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeedingFrenzyAgent.Url, 
					Method : "InsertGoogleDocumentEntity", 
					Params : { strDocumentTitle : oObject.strDocumentTitle,strDocumentID : oObject.strDocumentID,strRelated : oObject.strRelated}, 
					Serialize : FeedingFrenzyAgent.InsertGoogleDocumentEntity.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeedingFrenzyAgent.InsertGoogleDocumentEntity.onErrorReceived) ? FeedingFrenzyAgent.InsertGoogleDocumentEntity.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeedingFrenzyAgent.Url, "InsertGoogleDocumentEntity", { strDocumentTitle : oObject.strDocumentTitle,strDocumentID : oObject.strDocumentID,strRelated : oObject.strRelated}, FeedingFrenzyAgent.InsertGoogleDocumentEntity.Serialize || {});
    },
	InsertObject : function(strObjectName, iObjectID, Callback) {
        return FeedingFrenzyAgent.InsertObjectObject({ strObjectName : strObjectName,iObjectID : iObjectID}, Callback);
    },

	InsertObjectObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeedingFrenzyAgentValidators.InsertObject)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeedingFrenzyAgent.InsertObject.onValidationError))
					FeedingFrenzyAgent.InsertObject.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeedingFrenzyAgent.Url, 
					Method : "InsertObject", 
					Params : { strObjectName : oObject.strObjectName,iObjectID : oObject.iObjectID}, 
					Serialize : FeedingFrenzyAgent.InsertObject.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeedingFrenzyAgent.InsertObject.onErrorReceived) ? FeedingFrenzyAgent.InsertObject.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeedingFrenzyAgent.Url, "InsertObject", { strObjectName : oObject.strObjectName,iObjectID : oObject.iObjectID}, FeedingFrenzyAgent.InsertObject.Serialize || {});
    },
	ProcessDirective : function(strContext, strDirective, Callback) {
        return FeedingFrenzyAgent.ProcessDirectiveObject({ strContext : strContext,strDirective : strDirective}, Callback);
    },

	ProcessDirectiveObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeedingFrenzyAgentValidators.ProcessDirective)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeedingFrenzyAgent.ProcessDirective.onValidationError))
					FeedingFrenzyAgent.ProcessDirective.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeedingFrenzyAgent.Url, 
					Method : "ProcessDirective", 
					Params : { strContext : oObject.strContext,strDirective : oObject.strDirective}, 
					Serialize : FeedingFrenzyAgent.ProcessDirective.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeedingFrenzyAgent.ProcessDirective.onErrorReceived) ? FeedingFrenzyAgent.ProcessDirective.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeedingFrenzyAgent.Url, "ProcessDirective", { strContext : oObject.strContext,strDirective : oObject.strDirective}, FeedingFrenzyAgent.ProcessDirective.Serialize || {});
    },
	Reset : function(Callback) {
        return FeedingFrenzyAgent.ResetObject({ }, Callback);
    },

	ResetObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeedingFrenzyAgentValidators.Reset)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeedingFrenzyAgent.Reset.onValidationError))
					FeedingFrenzyAgent.Reset.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeedingFrenzyAgent.Url, 
					Method : "Reset", 
					Params : { }, 
					Serialize : FeedingFrenzyAgent.Reset.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeedingFrenzyAgent.Reset.onErrorReceived) ? FeedingFrenzyAgent.Reset.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeedingFrenzyAgent.Url, "Reset", { }, FeedingFrenzyAgent.Reset.Serialize || {});
    }
};

var FeedingFrenzyAgentValidators = {
	

	ContinueDirective : {
			strRequestKey : FeedingFrenzyAgentValidatorsFields.strRequestKey,
			Directive : FeedingFrenzyAgentValidatorsFields.Directive,
			jsonValues : FeedingFrenzyAgentValidatorsFields.jsonValues	
	},

	InsertEntity : {
			strEntity : FeedingFrenzyAgentValidatorsFields.strEntity,
			strParent : FeedingFrenzyAgentValidatorsFields.strParent,
			strRelated : FeedingFrenzyAgentValidatorsFields.strRelated	
	},

	InsertGoogleDocumentEntity : {
			strDocumentTitle : FeedingFrenzyAgentValidatorsFields.strDocumentTitle,
			strDocumentID : FeedingFrenzyAgentValidatorsFields.strDocumentID,
			strRelated : FeedingFrenzyAgentValidatorsFields.strRelated	
	},

	InsertObject : {
			strObjectName : FeedingFrenzyAgentValidatorsFields.strObjectName,
			iObjectID : FeedingFrenzyAgentValidatorsFields.iObjectID	
	},

	ProcessDirective : {
			strContext : FeedingFrenzyAgentValidatorsFields.strContext,
			strDirective : FeedingFrenzyAgentValidatorsFields.strDirective	
	},

	Reset : {	
	}
};

    