

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["ApiKeysValidatorsFields"])) {
	var ApiKeysValidatorsFields = { };
}

if (!ObjectUtil.HasValue(ApiKeysValidatorsFields.KeyName)) {
	ApiKeysValidatorsFields.KeyName = {Validators : [Validators.Text], InvalidMessage: "Invalid KeyName"};
}

		
var ApiKeys = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.ApiKeys.ashx"

	,
	InsertApiKey : function(KeyName, Callback) {
        return ApiKeys.InsertApiKeyObject({ KeyName : KeyName}, Callback);
    },

	InsertApiKeyObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ApiKeysValidators.InsertApiKey)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ApiKeys.InsertApiKey.onValidationError))
					ApiKeys.InsertApiKey.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ApiKeys.Url, 
					Method : "InsertApiKey", 
					Params : { KeyName : oObject.KeyName}, 
					Serialize : ApiKeys.InsertApiKey.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ApiKeys.InsertApiKey.onErrorReceived) ? ApiKeys.InsertApiKey.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ApiKeys.Url, "InsertApiKey", { KeyName : oObject.KeyName}, ApiKeys.InsertApiKey.Serialize || {});
    }
};

var ApiKeysValidators = {
	

	InsertApiKey : {
			KeyName : ApiKeysValidatorsFields.KeyName	
	}
};

    