

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["kScriptWorkbenchValidatorsFields"])) {
	var kScriptWorkbenchValidatorsFields = { };
}

if (!ObjectUtil.HasValue(kScriptWorkbenchValidatorsFields.Handler)) {
	kScriptWorkbenchValidatorsFields.Handler = {Validators : [Validators.Text], InvalidMessage: "Invalid Handler"};
}
if (!ObjectUtil.HasValue(kScriptWorkbenchValidatorsFields.kScript)) {
	kScriptWorkbenchValidatorsFields.kScript = {Validators : [Validators.Text], InvalidMessage: "Invalid kScript"};
}

		
var kScriptWorkbench = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.Tools.kScriptWorkbench.ashx"

	,
	Evaluate : function(kScript, Handler, Callback) {
        return kScriptWorkbench.EvaluateObject({ kScript : kScript,Handler : Handler}, Callback);
    },

	EvaluateObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, kScriptWorkbenchValidators.Evaluate)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(kScriptWorkbench.Evaluate.onValidationError))
					kScriptWorkbench.Evaluate.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: kScriptWorkbench.Url, 
					Method : "Evaluate", 
					Params : { kScript : oObject.kScript,Handler : oObject.Handler}, 
					Serialize : kScriptWorkbench.Evaluate.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(kScriptWorkbench.Evaluate.onErrorReceived) ? kScriptWorkbench.Evaluate.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(kScriptWorkbench.Url, "Evaluate", { kScript : oObject.kScript,Handler : oObject.Handler}, kScriptWorkbench.Evaluate.Serialize || {});
    },
	Reset : function(Handler, Callback) {
        return kScriptWorkbench.ResetObject({ Handler : Handler}, Callback);
    },

	ResetObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, kScriptWorkbenchValidators.Reset)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(kScriptWorkbench.Reset.onValidationError))
					kScriptWorkbench.Reset.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: kScriptWorkbench.Url, 
					Method : "Reset", 
					Params : { Handler : oObject.Handler}, 
					Serialize : kScriptWorkbench.Reset.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(kScriptWorkbench.Reset.onErrorReceived) ? kScriptWorkbench.Reset.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(kScriptWorkbench.Url, "Reset", { Handler : oObject.Handler}, kScriptWorkbench.Reset.Serialize || {});
    }
};

var kScriptWorkbenchValidators = {
	

	Evaluate : {
			kScript : kScriptWorkbenchValidatorsFields.kScript,
			Handler : kScriptWorkbenchValidatorsFields.Handler	
	},

	Reset : {
			Handler : kScriptWorkbenchValidatorsFields.Handler	
	}
};

    