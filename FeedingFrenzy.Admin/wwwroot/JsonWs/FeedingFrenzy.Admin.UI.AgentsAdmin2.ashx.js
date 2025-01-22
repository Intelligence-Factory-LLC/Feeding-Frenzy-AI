

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["AgentsAdmin2ValidatorsFields"])) {
	var AgentsAdmin2ValidatorsFields = { };
}


		
var AgentsAdmin2 = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.AgentsAdmin2.ashx"

	,
	Initialize : function(Callback) {
        return AgentsAdmin2.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsAdmin2Validators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentsAdmin2.Initialize.onValidationError))
					AgentsAdmin2.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentsAdmin2.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : AgentsAdmin2.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentsAdmin2.Initialize.onErrorReceived) ? AgentsAdmin2.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentsAdmin2.Url, "Initialize", { }, AgentsAdmin2.Initialize.Serialize || {});
    }
};

var AgentsAdmin2Validators = {
	

	Initialize : {	
	}
};

    