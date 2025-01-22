

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["AgentBuilderValidatorsFields"])) {
	var AgentBuilderValidatorsFields = { };
}

if (!ObjectUtil.HasValue(AgentBuilderValidatorsFields.iAgentID)) {
	AgentBuilderValidatorsFields.iAgentID = {Validators : [Validators.Integer], InvalidMessage: "Invalid iAgentID"};
}
if (!ObjectUtil.HasValue(AgentBuilderValidatorsFields.strJsonData)) {
	AgentBuilderValidatorsFields.strJsonData = {Validators : [Validators.Text], InvalidMessage: "Invalid strJsonData"};
}
if (!ObjectUtil.HasValue(AgentBuilderValidatorsFields.strUrl)) {
	AgentBuilderValidatorsFields.strUrl = {Validators : [Validators.Text], InvalidMessage: "Invalid strUrl"};
}
if (!ObjectUtil.HasValue(AgentBuilderValidatorsFields.url)) {
	AgentBuilderValidatorsFields.url = {Validators : [Validators.Text], InvalidMessage: "Invalid url"};
}

		
var AgentBuilder = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.AgentBuilder.ashx"

	,
	GetAgentData : function(url, Callback) {
        return AgentBuilder.GetAgentDataObject({ url : url}, Callback);
    },

	GetAgentDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentBuilderValidators.GetAgentData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentBuilder.GetAgentData.onValidationError))
					AgentBuilder.GetAgentData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentBuilder.Url, 
					Method : "GetAgentData", 
					Params : { url : oObject.url}, 
					Serialize : AgentBuilder.GetAgentData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentBuilder.GetAgentData.onErrorReceived) ? AgentBuilder.GetAgentData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentBuilder.Url, "GetAgentData", { url : oObject.url}, AgentBuilder.GetAgentData.Serialize || {});
    },
	InitializeAgentTraining : function(strUrl, strJsonData, iAgentID, Callback) {
        return AgentBuilder.InitializeAgentTrainingObject({ strUrl : strUrl,strJsonData : strJsonData,iAgentID : iAgentID}, Callback);
    },

	InitializeAgentTrainingObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentBuilderValidators.InitializeAgentTraining)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentBuilder.InitializeAgentTraining.onValidationError))
					AgentBuilder.InitializeAgentTraining.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentBuilder.Url, 
					Method : "InitializeAgentTraining", 
					Params : { strUrl : oObject.strUrl,strJsonData : oObject.strJsonData,iAgentID : oObject.iAgentID}, 
					Serialize : AgentBuilder.InitializeAgentTraining.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentBuilder.InitializeAgentTraining.onErrorReceived) ? AgentBuilder.InitializeAgentTraining.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentBuilder.Url, "InitializeAgentTraining", { strUrl : oObject.strUrl,strJsonData : oObject.strJsonData,iAgentID : oObject.iAgentID}, AgentBuilder.InitializeAgentTraining.Serialize || {});
    }
};

var AgentBuilderValidators = {
	

	GetAgentData : {
			url : AgentBuilderValidatorsFields.url	
	},

	InitializeAgentTraining : {
			strUrl : AgentBuilderValidatorsFields.strUrl,
			strJsonData : AgentBuilderValidatorsFields.strJsonData,
			iAgentID : AgentBuilderValidatorsFields.iAgentID	
	}
};

    