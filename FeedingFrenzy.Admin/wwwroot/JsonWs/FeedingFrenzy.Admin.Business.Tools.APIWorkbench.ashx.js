

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["APIWorkbenchValidatorsFields"])) {
	var APIWorkbenchValidatorsFields = { };
}

if (!ObjectUtil.HasValue(APIWorkbenchValidatorsFields.Code)) {
	APIWorkbenchValidatorsFields.Code = {Validators : [Validators.Text], InvalidMessage: "Invalid Code"};
}
if (!ObjectUtil.HasValue(APIWorkbenchValidatorsFields.Directive)) {
	APIWorkbenchValidatorsFields.Directive = {Validators : [Validators.Text], InvalidMessage: "Invalid Directive"};
}
if (!ObjectUtil.HasValue(APIWorkbenchValidatorsFields.FragmentID)) {
	APIWorkbenchValidatorsFields.FragmentID = {Validators : [Validators.Integer], InvalidMessage: "Invalid FragmentID"};
}
if (!ObjectUtil.HasValue(APIWorkbenchValidatorsFields.jsonValues)) {
	APIWorkbenchValidatorsFields.jsonValues = {Validators : [Validators.Object], InvalidMessage: "Invalid jsonValues"};
}
if (!ObjectUtil.HasValue(APIWorkbenchValidatorsFields.Model)) {
	APIWorkbenchValidatorsFields.Model = {Validators : [Validators.Text], InvalidMessage: "Invalid Model"};
}

		
var APIWorkbench = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.Tools.APIWorkbench.ashx"

	,
	ContinueCode : function(FragmentID, Code, Model, jsonValues, Callback) {
        return APIWorkbench.ContinueCodeObject({ FragmentID : FragmentID,Code : Code,Model : Model,jsonValues : jsonValues}, Callback);
    },

	ContinueCodeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, APIWorkbenchValidators.ContinueCode)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(APIWorkbench.ContinueCode.onValidationError))
					APIWorkbench.ContinueCode.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: APIWorkbench.Url, 
					Method : "ContinueCode", 
					Params : { FragmentID : oObject.FragmentID,Code : oObject.Code,Model : oObject.Model,jsonValues : oObject.jsonValues}, 
					Serialize : APIWorkbench.ContinueCode.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(APIWorkbench.ContinueCode.onErrorReceived) ? APIWorkbench.ContinueCode.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(APIWorkbench.Url, "ContinueCode", { FragmentID : oObject.FragmentID,Code : oObject.Code,Model : oObject.Model,jsonValues : oObject.jsonValues}, APIWorkbench.ContinueCode.Serialize || {});
    },
	InterpretDirective : function(FragmentID, Directive, Model, jsonValues, Callback) {
        return APIWorkbench.InterpretDirectiveObject({ FragmentID : FragmentID,Directive : Directive,Model : Model,jsonValues : jsonValues}, Callback);
    },

	InterpretDirectiveObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, APIWorkbenchValidators.InterpretDirective)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(APIWorkbench.InterpretDirective.onValidationError))
					APIWorkbench.InterpretDirective.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: APIWorkbench.Url, 
					Method : "InterpretDirective", 
					Params : { FragmentID : oObject.FragmentID,Directive : oObject.Directive,Model : oObject.Model,jsonValues : oObject.jsonValues}, 
					Serialize : APIWorkbench.InterpretDirective.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(APIWorkbench.InterpretDirective.onErrorReceived) ? APIWorkbench.InterpretDirective.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(APIWorkbench.Url, "InterpretDirective", { FragmentID : oObject.FragmentID,Directive : oObject.Directive,Model : oObject.Model,jsonValues : oObject.jsonValues}, APIWorkbench.InterpretDirective.Serialize || {});
    },
	RefineCode : function(FragmentID, Directive, Code, Model, jsonValues, Callback) {
        return APIWorkbench.RefineCodeObject({ FragmentID : FragmentID,Directive : Directive,Code : Code,Model : Model,jsonValues : jsonValues}, Callback);
    },

	RefineCodeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, APIWorkbenchValidators.RefineCode)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(APIWorkbench.RefineCode.onValidationError))
					APIWorkbench.RefineCode.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: APIWorkbench.Url, 
					Method : "RefineCode", 
					Params : { FragmentID : oObject.FragmentID,Directive : oObject.Directive,Code : oObject.Code,Model : oObject.Model,jsonValues : oObject.jsonValues}, 
					Serialize : APIWorkbench.RefineCode.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(APIWorkbench.RefineCode.onErrorReceived) ? APIWorkbench.RefineCode.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(APIWorkbench.Url, "RefineCode", { FragmentID : oObject.FragmentID,Directive : oObject.Directive,Code : oObject.Code,Model : oObject.Model,jsonValues : oObject.jsonValues}, APIWorkbench.RefineCode.Serialize || {});
    },
	SaveDirectiveAndImplementation : function(Directive, Code, Callback) {
        return APIWorkbench.SaveDirectiveAndImplementationObject({ Directive : Directive,Code : Code}, Callback);
    },

	SaveDirectiveAndImplementationObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, APIWorkbenchValidators.SaveDirectiveAndImplementation)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(APIWorkbench.SaveDirectiveAndImplementation.onValidationError))
					APIWorkbench.SaveDirectiveAndImplementation.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: APIWorkbench.Url, 
					Method : "SaveDirectiveAndImplementation", 
					Params : { Directive : oObject.Directive,Code : oObject.Code}, 
					Serialize : APIWorkbench.SaveDirectiveAndImplementation.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(APIWorkbench.SaveDirectiveAndImplementation.onErrorReceived) ? APIWorkbench.SaveDirectiveAndImplementation.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(APIWorkbench.Url, "SaveDirectiveAndImplementation", { Directive : oObject.Directive,Code : oObject.Code}, APIWorkbench.SaveDirectiveAndImplementation.Serialize || {});
    }
};

var APIWorkbenchValidators = {
	

	ContinueCode : {
			FragmentID : APIWorkbenchValidatorsFields.FragmentID,
			Code : APIWorkbenchValidatorsFields.Code,
			Model : APIWorkbenchValidatorsFields.Model,
			jsonValues : APIWorkbenchValidatorsFields.jsonValues	
	},

	InterpretDirective : {
			FragmentID : APIWorkbenchValidatorsFields.FragmentID,
			Directive : APIWorkbenchValidatorsFields.Directive,
			Model : APIWorkbenchValidatorsFields.Model,
			jsonValues : APIWorkbenchValidatorsFields.jsonValues	
	},

	RefineCode : {
			FragmentID : APIWorkbenchValidatorsFields.FragmentID,
			Directive : APIWorkbenchValidatorsFields.Directive,
			Code : APIWorkbenchValidatorsFields.Code,
			Model : APIWorkbenchValidatorsFields.Model,
			jsonValues : APIWorkbenchValidatorsFields.jsonValues	
	},

	SaveDirectiveAndImplementation : {
			Directive : APIWorkbenchValidatorsFields.Directive,
			Code : APIWorkbenchValidatorsFields.Code	
	}
};

    