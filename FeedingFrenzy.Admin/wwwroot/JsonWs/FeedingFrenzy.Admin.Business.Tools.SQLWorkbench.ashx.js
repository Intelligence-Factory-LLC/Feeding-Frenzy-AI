

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["SQLWorkbenchValidatorsFields"])) {
	var SQLWorkbenchValidatorsFields = { };
}

if (!ObjectUtil.HasValue(SQLWorkbenchValidatorsFields.bForceRefresh)) {
	SQLWorkbenchValidatorsFields.bForceRefresh = {Validators : [Validators.Boolean], InvalidMessage: "Invalid bForceRefresh"};
}
if (!ObjectUtil.HasValue(SQLWorkbenchValidatorsFields.Directive)) {
	SQLWorkbenchValidatorsFields.Directive = {Validators : [Validators.Text], InvalidMessage: "Invalid Directive"};
}
if (!ObjectUtil.HasValue(SQLWorkbenchValidatorsFields.jsonValues)) {
	SQLWorkbenchValidatorsFields.jsonValues = {Validators : [Validators.Object], InvalidMessage: "Invalid jsonValues"};
}
if (!ObjectUtil.HasValue(SQLWorkbenchValidatorsFields.Query)) {
	SQLWorkbenchValidatorsFields.Query = {Validators : [Validators.Object], InvalidMessage: "Invalid Query"};
}
if (!ObjectUtil.HasValue(SQLWorkbenchValidatorsFields.SQL)) {
	SQLWorkbenchValidatorsFields.SQL = {Validators : [Validators.Text], InvalidMessage: "Invalid SQL"};
}
if (!ObjectUtil.HasValue(SQLWorkbenchValidatorsFields.strApplication)) {
	SQLWorkbenchValidatorsFields.strApplication = {Validators : [Validators.Text], InvalidMessage: "Invalid strApplication"};
}
if (!ObjectUtil.HasValue(SQLWorkbenchValidatorsFields.strConnectionHandle)) {
	SQLWorkbenchValidatorsFields.strConnectionHandle = {Validators : [Validators.Text], InvalidMessage: "Invalid strConnectionHandle"};
}
if (!ObjectUtil.HasValue(SQLWorkbenchValidatorsFields.strConnectionString)) {
	SQLWorkbenchValidatorsFields.strConnectionString = {Validators : [Validators.Text], InvalidMessage: "Invalid strConnectionString"};
}
if (!ObjectUtil.HasValue(SQLWorkbenchValidatorsFields.strContext)) {
	SQLWorkbenchValidatorsFields.strContext = {Validators : [Validators.Text], InvalidMessage: "Invalid strContext"};
}
if (!ObjectUtil.HasValue(SQLWorkbenchValidatorsFields.strDirective)) {
	SQLWorkbenchValidatorsFields.strDirective = {Validators : [Validators.Text], InvalidMessage: "Invalid strDirective"};
}
if (!ObjectUtil.HasValue(SQLWorkbenchValidatorsFields.strProjectName)) {
	SQLWorkbenchValidatorsFields.strProjectName = {Validators : [Validators.Text], InvalidMessage: "Invalid strProjectName"};
}
if (!ObjectUtil.HasValue(SQLWorkbenchValidatorsFields.strPrompt)) {
	SQLWorkbenchValidatorsFields.strPrompt = {Validators : [Validators.Text], InvalidMessage: "Invalid strPrompt"};
}
if (!ObjectUtil.HasValue(SQLWorkbenchValidatorsFields.strQuery)) {
	SQLWorkbenchValidatorsFields.strQuery = {Validators : [Validators.Text], InvalidMessage: "Invalid strQuery"};
}
if (!ObjectUtil.HasValue(SQLWorkbenchValidatorsFields.strRequestKey)) {
	SQLWorkbenchValidatorsFields.strRequestKey = {Validators : [Validators.Text], InvalidMessage: "Invalid strRequestKey"};
}

		
var SQLWorkbench = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.Tools.SQLWorkbench.ashx"

	,
	ContinueDirective : function(strRequestKey, Directive, jsonValues, Callback) {
        return SQLWorkbench.ContinueDirectiveObject({ strRequestKey : strRequestKey,Directive : Directive,jsonValues : jsonValues}, Callback);
    },

	ContinueDirectiveObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SQLWorkbenchValidators.ContinueDirective)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SQLWorkbench.ContinueDirective.onValidationError))
					SQLWorkbench.ContinueDirective.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SQLWorkbench.Url, 
					Method : "ContinueDirective", 
					Params : { strRequestKey : oObject.strRequestKey,Directive : oObject.Directive,jsonValues : oObject.jsonValues}, 
					Serialize : SQLWorkbench.ContinueDirective.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SQLWorkbench.ContinueDirective.onErrorReceived) ? SQLWorkbench.ContinueDirective.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SQLWorkbench.Url, "ContinueDirective", { strRequestKey : oObject.strRequestKey,Directive : oObject.Directive,jsonValues : oObject.jsonValues}, SQLWorkbench.ContinueDirective.Serialize || {});
    },
	ExecuteQuery : function(strContext, strQuery, Callback) {
        return SQLWorkbench.ExecuteQueryObject({ strContext : strContext,strQuery : strQuery}, Callback);
    },

	ExecuteQueryObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SQLWorkbenchValidators.ExecuteQuery)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SQLWorkbench.ExecuteQuery.onValidationError))
					SQLWorkbench.ExecuteQuery.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SQLWorkbench.Url, 
					Method : "ExecuteQuery", 
					Params : { strContext : oObject.strContext,strQuery : oObject.strQuery}, 
					Serialize : SQLWorkbench.ExecuteQuery.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SQLWorkbench.ExecuteQuery.onErrorReceived) ? SQLWorkbench.ExecuteQuery.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SQLWorkbench.Url, "ExecuteQuery", { strContext : oObject.strContext,strQuery : oObject.strQuery}, SQLWorkbench.ExecuteQuery.Serialize || {});
    },
	ExecuteQuery2 : function(strQuery, strConnectionString, Callback) {
        return SQLWorkbench.ExecuteQuery2Object({ strQuery : strQuery,strConnectionString : strConnectionString}, Callback);
    },

	ExecuteQuery2Object : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SQLWorkbenchValidators.ExecuteQuery2)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SQLWorkbench.ExecuteQuery2.onValidationError))
					SQLWorkbench.ExecuteQuery2.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SQLWorkbench.Url, 
					Method : "ExecuteQuery2", 
					Params : { strQuery : oObject.strQuery,strConnectionString : oObject.strConnectionString}, 
					Serialize : SQLWorkbench.ExecuteQuery2.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SQLWorkbench.ExecuteQuery2.onErrorReceived) ? SQLWorkbench.ExecuteQuery2.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SQLWorkbench.Url, "ExecuteQuery2", { strQuery : oObject.strQuery,strConnectionString : oObject.strConnectionString}, SQLWorkbench.ExecuteQuery2.Serialize || {});
    },
	GetContext : function(strContext, Callback) {
        return SQLWorkbench.GetContextObject({ strContext : strContext}, Callback);
    },

	GetContextObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SQLWorkbenchValidators.GetContext)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SQLWorkbench.GetContext.onValidationError))
					SQLWorkbench.GetContext.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SQLWorkbench.Url, 
					Method : "GetContext", 
					Params : { strContext : oObject.strContext}, 
					Serialize : SQLWorkbench.GetContext.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SQLWorkbench.GetContext.onErrorReceived) ? SQLWorkbench.GetContext.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SQLWorkbench.Url, "GetContext", { strContext : oObject.strContext}, SQLWorkbench.GetContext.Serialize || {});
    },
	InterpretDirective : function(strContext, strPrompt, strDirective, Callback) {
        return SQLWorkbench.InterpretDirectiveObject({ strContext : strContext,strPrompt : strPrompt,strDirective : strDirective}, Callback);
    },

	InterpretDirectiveObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SQLWorkbenchValidators.InterpretDirective)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SQLWorkbench.InterpretDirective.onValidationError))
					SQLWorkbench.InterpretDirective.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SQLWorkbench.Url, 
					Method : "InterpretDirective", 
					Params : { strContext : oObject.strContext,strPrompt : oObject.strPrompt,strDirective : oObject.strDirective}, 
					Serialize : SQLWorkbench.InterpretDirective.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SQLWorkbench.InterpretDirective.onErrorReceived) ? SQLWorkbench.InterpretDirective.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SQLWorkbench.Url, "InterpretDirective", { strContext : oObject.strContext,strPrompt : oObject.strPrompt,strDirective : oObject.strDirective}, SQLWorkbench.InterpretDirective.Serialize || {});
    },
	LoadSavedQueries : function(strContext, Callback) {
        return SQLWorkbench.LoadSavedQueriesObject({ strContext : strContext}, Callback);
    },

	LoadSavedQueriesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SQLWorkbenchValidators.LoadSavedQueries)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SQLWorkbench.LoadSavedQueries.onValidationError))
					SQLWorkbench.LoadSavedQueries.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SQLWorkbench.Url, 
					Method : "LoadSavedQueries", 
					Params : { strContext : oObject.strContext}, 
					Serialize : SQLWorkbench.LoadSavedQueries.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SQLWorkbench.LoadSavedQueries.onErrorReceived) ? SQLWorkbench.LoadSavedQueries.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SQLWorkbench.Url, "LoadSavedQueries", { strContext : oObject.strContext}, SQLWorkbench.LoadSavedQueries.Serialize || {});
    },
	Reset : function(strApplication, Callback) {
        return SQLWorkbench.ResetObject({ strApplication : strApplication}, Callback);
    },

	ResetObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SQLWorkbenchValidators.Reset)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SQLWorkbench.Reset.onValidationError))
					SQLWorkbench.Reset.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SQLWorkbench.Url, 
					Method : "Reset", 
					Params : { strApplication : oObject.strApplication}, 
					Serialize : SQLWorkbench.Reset.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SQLWorkbench.Reset.onErrorReceived) ? SQLWorkbench.Reset.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SQLWorkbench.Url, "Reset", { strApplication : oObject.strApplication}, SQLWorkbench.Reset.Serialize || {});
    },
	ResetContext : function(strContext, Callback) {
        return SQLWorkbench.ResetContextObject({ strContext : strContext}, Callback);
    },

	ResetContextObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SQLWorkbenchValidators.ResetContext)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SQLWorkbench.ResetContext.onValidationError))
					SQLWorkbench.ResetContext.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SQLWorkbench.Url, 
					Method : "ResetContext", 
					Params : { strContext : oObject.strContext}, 
					Serialize : SQLWorkbench.ResetContext.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SQLWorkbench.ResetContext.onErrorReceived) ? SQLWorkbench.ResetContext.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SQLWorkbench.Url, "ResetContext", { strContext : oObject.strContext}, SQLWorkbench.ResetContext.Serialize || {});
    },
	SaveDirectiveAndSQL : function(Directive, SQL, Callback) {
        return SQLWorkbench.SaveDirectiveAndSQLObject({ Directive : Directive,SQL : SQL}, Callback);
    },

	SaveDirectiveAndSQLObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SQLWorkbenchValidators.SaveDirectiveAndSQL)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SQLWorkbench.SaveDirectiveAndSQL.onValidationError))
					SQLWorkbench.SaveDirectiveAndSQL.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SQLWorkbench.Url, 
					Method : "SaveDirectiveAndSQL", 
					Params : { Directive : oObject.Directive,SQL : oObject.SQL}, 
					Serialize : SQLWorkbench.SaveDirectiveAndSQL.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SQLWorkbench.SaveDirectiveAndSQL.onErrorReceived) ? SQLWorkbench.SaveDirectiveAndSQL.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SQLWorkbench.Url, "SaveDirectiveAndSQL", { Directive : oObject.Directive,SQL : oObject.SQL}, SQLWorkbench.SaveDirectiveAndSQL.Serialize || {});
    },
	SaveQuery : function(strContext, Query, Callback) {
        return SQLWorkbench.SaveQueryObject({ strContext : strContext,Query : Query}, Callback);
    },

	SaveQueryObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SQLWorkbenchValidators.SaveQuery)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SQLWorkbench.SaveQuery.onValidationError))
					SQLWorkbench.SaveQuery.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SQLWorkbench.Url, 
					Method : "SaveQuery", 
					Params : { strContext : oObject.strContext,Query : oObject.Query}, 
					Serialize : SQLWorkbench.SaveQuery.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SQLWorkbench.SaveQuery.onErrorReceived) ? SQLWorkbench.SaveQuery.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SQLWorkbench.Url, "SaveQuery", { strContext : oObject.strContext,Query : oObject.Query}, SQLWorkbench.SaveQuery.Serialize || {});
    },
	SetConnectionHandle : function(strConnectionHandle, bForceRefresh, Callback) {
        return SQLWorkbench.SetConnectionHandleObject({ strConnectionHandle : strConnectionHandle,bForceRefresh : bForceRefresh}, Callback);
    },

	SetConnectionHandleObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SQLWorkbenchValidators.SetConnectionHandle)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SQLWorkbench.SetConnectionHandle.onValidationError))
					SQLWorkbench.SetConnectionHandle.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SQLWorkbench.Url, 
					Method : "SetConnectionHandle", 
					Params : { strConnectionHandle : oObject.strConnectionHandle,bForceRefresh : oObject.bForceRefresh}, 
					Serialize : SQLWorkbench.SetConnectionHandle.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SQLWorkbench.SetConnectionHandle.onErrorReceived) ? SQLWorkbench.SetConnectionHandle.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SQLWorkbench.Url, "SetConnectionHandle", { strConnectionHandle : oObject.strConnectionHandle,bForceRefresh : oObject.bForceRefresh}, SQLWorkbench.SetConnectionHandle.Serialize || {});
    },
	SetConnectionString : function(strConnectionHandle, strConnectionString, Callback) {
        return SQLWorkbench.SetConnectionStringObject({ strConnectionHandle : strConnectionHandle,strConnectionString : strConnectionString}, Callback);
    },

	SetConnectionStringObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SQLWorkbenchValidators.SetConnectionString)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SQLWorkbench.SetConnectionString.onValidationError))
					SQLWorkbench.SetConnectionString.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SQLWorkbench.Url, 
					Method : "SetConnectionString", 
					Params : { strConnectionHandle : oObject.strConnectionHandle,strConnectionString : oObject.strConnectionString}, 
					Serialize : SQLWorkbench.SetConnectionString.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SQLWorkbench.SetConnectionString.onErrorReceived) ? SQLWorkbench.SetConnectionString.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SQLWorkbench.Url, "SetConnectionString", { strConnectionHandle : oObject.strConnectionHandle,strConnectionString : oObject.strConnectionString}, SQLWorkbench.SetConnectionString.Serialize || {});
    },
	SetProjectName : function(strConnectionHandle, strProjectName, Callback) {
        return SQLWorkbench.SetProjectNameObject({ strConnectionHandle : strConnectionHandle,strProjectName : strProjectName}, Callback);
    },

	SetProjectNameObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SQLWorkbenchValidators.SetProjectName)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SQLWorkbench.SetProjectName.onValidationError))
					SQLWorkbench.SetProjectName.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SQLWorkbench.Url, 
					Method : "SetProjectName", 
					Params : { strConnectionHandle : oObject.strConnectionHandle,strProjectName : oObject.strProjectName}, 
					Serialize : SQLWorkbench.SetProjectName.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SQLWorkbench.SetProjectName.onErrorReceived) ? SQLWorkbench.SetProjectName.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SQLWorkbench.Url, "SetProjectName", { strConnectionHandle : oObject.strConnectionHandle,strProjectName : oObject.strProjectName}, SQLWorkbench.SetProjectName.Serialize || {});
    }
};

var SQLWorkbenchValidators = {
	

	ContinueDirective : {
			strRequestKey : SQLWorkbenchValidatorsFields.strRequestKey,
			Directive : SQLWorkbenchValidatorsFields.Directive,
			jsonValues : SQLWorkbenchValidatorsFields.jsonValues	
	},

	ExecuteQuery : {
			strContext : SQLWorkbenchValidatorsFields.strContext,
			strQuery : SQLWorkbenchValidatorsFields.strQuery	
	},

	ExecuteQuery2 : {
			strQuery : SQLWorkbenchValidatorsFields.strQuery,
			strConnectionString : SQLWorkbenchValidatorsFields.strConnectionString	
	},

	GetContext : {
			strContext : SQLWorkbenchValidatorsFields.strContext	
	},

	InterpretDirective : {
			strContext : SQLWorkbenchValidatorsFields.strContext,
			strPrompt : SQLWorkbenchValidatorsFields.strPrompt,
			strDirective : SQLWorkbenchValidatorsFields.strDirective	
	},

	LoadSavedQueries : {
			strContext : SQLWorkbenchValidatorsFields.strContext	
	},

	Reset : {
			strApplication : SQLWorkbenchValidatorsFields.strApplication	
	},

	ResetContext : {
			strContext : SQLWorkbenchValidatorsFields.strContext	
	},

	SaveDirectiveAndSQL : {
			Directive : SQLWorkbenchValidatorsFields.Directive,
			SQL : SQLWorkbenchValidatorsFields.SQL	
	},

	SaveQuery : {
			strContext : SQLWorkbenchValidatorsFields.strContext,
			Query : SQLWorkbenchValidatorsFields.Query	
	},

	SetConnectionHandle : {
			strConnectionHandle : SQLWorkbenchValidatorsFields.strConnectionHandle,
			bForceRefresh : SQLWorkbenchValidatorsFields.bForceRefresh	
	},

	SetConnectionString : {
			strConnectionHandle : SQLWorkbenchValidatorsFields.strConnectionHandle,
			strConnectionString : SQLWorkbenchValidatorsFields.strConnectionString	
	},

	SetProjectName : {
			strConnectionHandle : SQLWorkbenchValidatorsFields.strConnectionHandle,
			strProjectName : SQLWorkbenchValidatorsFields.strProjectName	
	}
};

    