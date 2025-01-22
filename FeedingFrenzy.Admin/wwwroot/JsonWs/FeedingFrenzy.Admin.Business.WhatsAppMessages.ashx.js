

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["WhatsAppMessagesValidatorsFields"])) {
	var WhatsAppMessagesValidatorsFields = { };
}


		
var WhatsAppMessages = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.WhatsAppMessages.ashx"

	,
	IsWhatsEnable : function(Callback) {
        return WhatsAppMessages.IsWhatsEnableObject({ }, Callback);
    },

	IsWhatsEnableObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, WhatsAppMessagesValidators.IsWhatsEnable)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(WhatsAppMessages.IsWhatsEnable.onValidationError))
					WhatsAppMessages.IsWhatsEnable.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: WhatsAppMessages.Url, 
					Method : "IsWhatsEnable", 
					Params : { }, 
					Serialize : WhatsAppMessages.IsWhatsEnable.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(WhatsAppMessages.IsWhatsEnable.onErrorReceived) ? WhatsAppMessages.IsWhatsEnable.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(WhatsAppMessages.Url, "IsWhatsEnable", { }, WhatsAppMessages.IsWhatsEnable.Serialize || {});
    }
};

var WhatsAppMessagesValidators = {
	

	IsWhatsEnable : {	
	}
};

    