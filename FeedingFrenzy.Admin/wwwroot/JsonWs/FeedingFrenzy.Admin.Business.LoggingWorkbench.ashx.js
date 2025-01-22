

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["LoggingWorkbenchValidatorsFields"])) {
	var LoggingWorkbenchValidatorsFields = { };
}

if (!ObjectUtil.HasValue(LoggingWorkbenchValidatorsFields.iCount)) {
	LoggingWorkbenchValidatorsFields.iCount = {Validators : [Validators.Integer], InvalidMessage: "Invalid iCount"};
}
if (!ObjectUtil.HasValue(LoggingWorkbenchValidatorsFields.strContext)) {
	LoggingWorkbenchValidatorsFields.strContext = {Validators : [Validators.Text], InvalidMessage: "Invalid strContext"};
}
if (!ObjectUtil.HasValue(LoggingWorkbenchValidatorsFields.strFile)) {
	LoggingWorkbenchValidatorsFields.strFile = {Validators : [Validators.Text], InvalidMessage: "Invalid strFile"};
}
if (!ObjectUtil.HasValue(LoggingWorkbenchValidatorsFields.strRequestID)) {
	LoggingWorkbenchValidatorsFields.strRequestID = {Validators : [Validators.Text], InvalidMessage: "Invalid strRequestID"};
}

		
var LoggingWorkbench = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.LoggingWorkbench.ashx"

	,
	AnalyzeNewLines : function(strFile, Callback) {
        return LoggingWorkbench.AnalyzeNewLinesObject({ strFile : strFile}, Callback);
    },

	AnalyzeNewLinesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LoggingWorkbenchValidators.AnalyzeNewLines)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LoggingWorkbench.AnalyzeNewLines.onValidationError))
					LoggingWorkbench.AnalyzeNewLines.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LoggingWorkbench.Url, 
					Method : "AnalyzeNewLines", 
					Params : { strFile : oObject.strFile}, 
					Serialize : LoggingWorkbench.AnalyzeNewLines.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LoggingWorkbench.AnalyzeNewLines.onErrorReceived) ? LoggingWorkbench.AnalyzeNewLines.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LoggingWorkbench.Url, "AnalyzeNewLines", { strFile : oObject.strFile}, LoggingWorkbench.AnalyzeNewLines.Serialize || {});
    },
	AnalyzingFile : function(strFile, Callback) {
        return LoggingWorkbench.AnalyzingFileObject({ strFile : strFile}, Callback);
    },

	AnalyzingFileObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LoggingWorkbenchValidators.AnalyzingFile)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LoggingWorkbench.AnalyzingFile.onValidationError))
					LoggingWorkbench.AnalyzingFile.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LoggingWorkbench.Url, 
					Method : "AnalyzingFile", 
					Params : { strFile : oObject.strFile}, 
					Serialize : LoggingWorkbench.AnalyzingFile.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LoggingWorkbench.AnalyzingFile.onErrorReceived) ? LoggingWorkbench.AnalyzingFile.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LoggingWorkbench.Url, "AnalyzingFile", { strFile : oObject.strFile}, LoggingWorkbench.AnalyzingFile.Serialize || {});
    },
	Clear : function(Callback) {
        return LoggingWorkbench.ClearObject({ }, Callback);
    },

	ClearObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LoggingWorkbenchValidators.Clear)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LoggingWorkbench.Clear.onValidationError))
					LoggingWorkbench.Clear.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LoggingWorkbench.Url, 
					Method : "Clear", 
					Params : { }, 
					Serialize : LoggingWorkbench.Clear.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LoggingWorkbench.Clear.onErrorReceived) ? LoggingWorkbench.Clear.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LoggingWorkbench.Url, "Clear", { }, LoggingWorkbench.Clear.Serialize || {});
    },
	GetContext : function(strContext, Callback) {
        return LoggingWorkbench.GetContextObject({ strContext : strContext}, Callback);
    },

	GetContextObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LoggingWorkbenchValidators.GetContext)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LoggingWorkbench.GetContext.onValidationError))
					LoggingWorkbench.GetContext.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LoggingWorkbench.Url, 
					Method : "GetContext", 
					Params : { strContext : oObject.strContext}, 
					Serialize : LoggingWorkbench.GetContext.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LoggingWorkbench.GetContext.onErrorReceived) ? LoggingWorkbench.GetContext.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LoggingWorkbench.Url, "GetContext", { strContext : oObject.strContext}, LoggingWorkbench.GetContext.Serialize || {});
    },
	GetJsonWsCall : function(strFile, strRequestID, Callback) {
        return LoggingWorkbench.GetJsonWsCallObject({ strFile : strFile,strRequestID : strRequestID}, Callback);
    },

	GetJsonWsCallObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LoggingWorkbenchValidators.GetJsonWsCall)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LoggingWorkbench.GetJsonWsCall.onValidationError))
					LoggingWorkbench.GetJsonWsCall.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LoggingWorkbench.Url, 
					Method : "GetJsonWsCall", 
					Params : { strFile : oObject.strFile,strRequestID : oObject.strRequestID}, 
					Serialize : LoggingWorkbench.GetJsonWsCall.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LoggingWorkbench.GetJsonWsCall.onErrorReceived) ? LoggingWorkbench.GetJsonWsCall.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LoggingWorkbench.Url, "GetJsonWsCall", { strFile : oObject.strFile,strRequestID : oObject.strRequestID}, LoggingWorkbench.GetJsonWsCall.Serialize || {});
    },
	GetLogDirectories : function(Callback) {
        return LoggingWorkbench.GetLogDirectoriesObject({ }, Callback);
    },

	GetLogDirectoriesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LoggingWorkbenchValidators.GetLogDirectories)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LoggingWorkbench.GetLogDirectories.onValidationError))
					LoggingWorkbench.GetLogDirectories.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LoggingWorkbench.Url, 
					Method : "GetLogDirectories", 
					Params : { }, 
					Serialize : LoggingWorkbench.GetLogDirectories.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LoggingWorkbench.GetLogDirectories.onErrorReceived) ? LoggingWorkbench.GetLogDirectories.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LoggingWorkbench.Url, "GetLogDirectories", { }, LoggingWorkbench.GetLogDirectories.Serialize || {});
    },
	GetLogFiles : function(Callback) {
        return LoggingWorkbench.GetLogFilesObject({ }, Callback);
    },

	GetLogFilesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LoggingWorkbenchValidators.GetLogFiles)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LoggingWorkbench.GetLogFiles.onValidationError))
					LoggingWorkbench.GetLogFiles.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LoggingWorkbench.Url, 
					Method : "GetLogFiles", 
					Params : { }, 
					Serialize : LoggingWorkbench.GetLogFiles.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LoggingWorkbench.GetLogFiles.onErrorReceived) ? LoggingWorkbench.GetLogFiles.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LoggingWorkbench.Url, "GetLogFiles", { }, LoggingWorkbench.GetLogFiles.Serialize || {});
    },
	GetLongestByElapsed : function(strFile, iCount, Callback) {
        return LoggingWorkbench.GetLongestByElapsedObject({ strFile : strFile,iCount : iCount}, Callback);
    },

	GetLongestByElapsedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LoggingWorkbenchValidators.GetLongestByElapsed)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LoggingWorkbench.GetLongestByElapsed.onValidationError))
					LoggingWorkbench.GetLongestByElapsed.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LoggingWorkbench.Url, 
					Method : "GetLongestByElapsed", 
					Params : { strFile : oObject.strFile,iCount : oObject.iCount}, 
					Serialize : LoggingWorkbench.GetLongestByElapsed.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LoggingWorkbench.GetLongestByElapsed.onErrorReceived) ? LoggingWorkbench.GetLongestByElapsed.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LoggingWorkbench.Url, "GetLongestByElapsed", { strFile : oObject.strFile,iCount : oObject.iCount}, LoggingWorkbench.GetLongestByElapsed.Serialize || {});
    },
	GetLongestByLines : function(strFile, iCount, Callback) {
        return LoggingWorkbench.GetLongestByLinesObject({ strFile : strFile,iCount : iCount}, Callback);
    },

	GetLongestByLinesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LoggingWorkbenchValidators.GetLongestByLines)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LoggingWorkbench.GetLongestByLines.onValidationError))
					LoggingWorkbench.GetLongestByLines.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LoggingWorkbench.Url, 
					Method : "GetLongestByLines", 
					Params : { strFile : oObject.strFile,iCount : oObject.iCount}, 
					Serialize : LoggingWorkbench.GetLongestByLines.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LoggingWorkbench.GetLongestByLines.onErrorReceived) ? LoggingWorkbench.GetLongestByLines.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LoggingWorkbench.Url, "GetLongestByLines", { strFile : oObject.strFile,iCount : oObject.iCount}, LoggingWorkbench.GetLongestByLines.Serialize || {});
    },
	GetNewLines : function(strFile, Callback) {
        return LoggingWorkbench.GetNewLinesObject({ strFile : strFile}, Callback);
    },

	GetNewLinesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LoggingWorkbenchValidators.GetNewLines)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LoggingWorkbench.GetNewLines.onValidationError))
					LoggingWorkbench.GetNewLines.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LoggingWorkbench.Url, 
					Method : "GetNewLines", 
					Params : { strFile : oObject.strFile}, 
					Serialize : LoggingWorkbench.GetNewLines.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LoggingWorkbench.GetNewLines.onErrorReceived) ? LoggingWorkbench.GetNewLines.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LoggingWorkbench.Url, "GetNewLines", { strFile : oObject.strFile}, LoggingWorkbench.GetNewLines.Serialize || {});
    },
	GetTimersByCount : function(strFile, iCount, Callback) {
        return LoggingWorkbench.GetTimersByCountObject({ strFile : strFile,iCount : iCount}, Callback);
    },

	GetTimersByCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LoggingWorkbenchValidators.GetTimersByCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LoggingWorkbench.GetTimersByCount.onValidationError))
					LoggingWorkbench.GetTimersByCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LoggingWorkbench.Url, 
					Method : "GetTimersByCount", 
					Params : { strFile : oObject.strFile,iCount : oObject.iCount}, 
					Serialize : LoggingWorkbench.GetTimersByCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LoggingWorkbench.GetTimersByCount.onErrorReceived) ? LoggingWorkbench.GetTimersByCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LoggingWorkbench.Url, "GetTimersByCount", { strFile : oObject.strFile,iCount : oObject.iCount}, LoggingWorkbench.GetTimersByCount.Serialize || {});
    },
	GetTimersByLongest : function(strFile, iCount, Callback) {
        return LoggingWorkbench.GetTimersByLongestObject({ strFile : strFile,iCount : iCount}, Callback);
    },

	GetTimersByLongestObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LoggingWorkbenchValidators.GetTimersByLongest)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LoggingWorkbench.GetTimersByLongest.onValidationError))
					LoggingWorkbench.GetTimersByLongest.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LoggingWorkbench.Url, 
					Method : "GetTimersByLongest", 
					Params : { strFile : oObject.strFile,iCount : oObject.iCount}, 
					Serialize : LoggingWorkbench.GetTimersByLongest.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LoggingWorkbench.GetTimersByLongest.onErrorReceived) ? LoggingWorkbench.GetTimersByLongest.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LoggingWorkbench.Url, "GetTimersByLongest", { strFile : oObject.strFile,iCount : oObject.iCount}, LoggingWorkbench.GetTimersByLongest.Serialize || {});
    },
	GetWatchedFiles : function(Callback) {
        return LoggingWorkbench.GetWatchedFilesObject({ }, Callback);
    },

	GetWatchedFilesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LoggingWorkbenchValidators.GetWatchedFiles)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LoggingWorkbench.GetWatchedFiles.onValidationError))
					LoggingWorkbench.GetWatchedFiles.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LoggingWorkbench.Url, 
					Method : "GetWatchedFiles", 
					Params : { }, 
					Serialize : LoggingWorkbench.GetWatchedFiles.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LoggingWorkbench.GetWatchedFiles.onErrorReceived) ? LoggingWorkbench.GetWatchedFiles.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LoggingWorkbench.Url, "GetWatchedFiles", { }, LoggingWorkbench.GetWatchedFiles.Serialize || {});
    },
	GetWatcher : function(Callback) {
        return LoggingWorkbench.GetWatcherObject({ }, Callback);
    },

	GetWatcherObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LoggingWorkbenchValidators.GetWatcher)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LoggingWorkbench.GetWatcher.onValidationError))
					LoggingWorkbench.GetWatcher.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LoggingWorkbench.Url, 
					Method : "GetWatcher", 
					Params : { }, 
					Serialize : LoggingWorkbench.GetWatcher.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LoggingWorkbench.GetWatcher.onErrorReceived) ? LoggingWorkbench.GetWatcher.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LoggingWorkbench.Url, "GetWatcher", { }, LoggingWorkbench.GetWatcher.Serialize || {});
    },
	ResetContext : function(strContext, Callback) {
        return LoggingWorkbench.ResetContextObject({ strContext : strContext}, Callback);
    },

	ResetContextObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LoggingWorkbenchValidators.ResetContext)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LoggingWorkbench.ResetContext.onValidationError))
					LoggingWorkbench.ResetContext.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LoggingWorkbench.Url, 
					Method : "ResetContext", 
					Params : { strContext : oObject.strContext}, 
					Serialize : LoggingWorkbench.ResetContext.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LoggingWorkbench.ResetContext.onErrorReceived) ? LoggingWorkbench.ResetContext.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LoggingWorkbench.Url, "ResetContext", { strContext : oObject.strContext}, LoggingWorkbench.ResetContext.Serialize || {});
    },
	StartJsonWsAnalyzing : function(strFile, Callback) {
        return LoggingWorkbench.StartJsonWsAnalyzingObject({ strFile : strFile}, Callback);
    },

	StartJsonWsAnalyzingObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LoggingWorkbenchValidators.StartJsonWsAnalyzing)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LoggingWorkbench.StartJsonWsAnalyzing.onValidationError))
					LoggingWorkbench.StartJsonWsAnalyzing.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LoggingWorkbench.Url, 
					Method : "StartJsonWsAnalyzing", 
					Params : { strFile : oObject.strFile}, 
					Serialize : LoggingWorkbench.StartJsonWsAnalyzing.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LoggingWorkbench.StartJsonWsAnalyzing.onErrorReceived) ? LoggingWorkbench.StartJsonWsAnalyzing.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LoggingWorkbench.Url, "StartJsonWsAnalyzing", { strFile : oObject.strFile}, LoggingWorkbench.StartJsonWsAnalyzing.Serialize || {});
    },
	StopWatchingAll : function(Callback) {
        return LoggingWorkbench.StopWatchingAllObject({ }, Callback);
    },

	StopWatchingAllObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LoggingWorkbenchValidators.StopWatchingAll)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LoggingWorkbench.StopWatchingAll.onValidationError))
					LoggingWorkbench.StopWatchingAll.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LoggingWorkbench.Url, 
					Method : "StopWatchingAll", 
					Params : { }, 
					Serialize : LoggingWorkbench.StopWatchingAll.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LoggingWorkbench.StopWatchingAll.onErrorReceived) ? LoggingWorkbench.StopWatchingAll.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LoggingWorkbench.Url, "StopWatchingAll", { }, LoggingWorkbench.StopWatchingAll.Serialize || {});
    },
	WatchFile : function(strFile, Callback) {
        return LoggingWorkbench.WatchFileObject({ strFile : strFile}, Callback);
    },

	WatchFileObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LoggingWorkbenchValidators.WatchFile)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LoggingWorkbench.WatchFile.onValidationError))
					LoggingWorkbench.WatchFile.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LoggingWorkbench.Url, 
					Method : "WatchFile", 
					Params : { strFile : oObject.strFile}, 
					Serialize : LoggingWorkbench.WatchFile.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LoggingWorkbench.WatchFile.onErrorReceived) ? LoggingWorkbench.WatchFile.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LoggingWorkbench.Url, "WatchFile", { strFile : oObject.strFile}, LoggingWorkbench.WatchFile.Serialize || {});
    }
};

var LoggingWorkbenchValidators = {
	

	AnalyzeNewLines : {
			strFile : LoggingWorkbenchValidatorsFields.strFile	
	},

	AnalyzingFile : {
			strFile : LoggingWorkbenchValidatorsFields.strFile	
	},

	Clear : {	
	},

	GetContext : {
			strContext : LoggingWorkbenchValidatorsFields.strContext	
	},

	GetJsonWsCall : {
			strFile : LoggingWorkbenchValidatorsFields.strFile,
			strRequestID : LoggingWorkbenchValidatorsFields.strRequestID	
	},

	GetLogDirectories : {	
	},

	GetLogFiles : {	
	},

	GetLongestByElapsed : {
			strFile : LoggingWorkbenchValidatorsFields.strFile,
			iCount : LoggingWorkbenchValidatorsFields.iCount	
	},

	GetLongestByLines : {
			strFile : LoggingWorkbenchValidatorsFields.strFile,
			iCount : LoggingWorkbenchValidatorsFields.iCount	
	},

	GetNewLines : {
			strFile : LoggingWorkbenchValidatorsFields.strFile	
	},

	GetTimersByCount : {
			strFile : LoggingWorkbenchValidatorsFields.strFile,
			iCount : LoggingWorkbenchValidatorsFields.iCount	
	},

	GetTimersByLongest : {
			strFile : LoggingWorkbenchValidatorsFields.strFile,
			iCount : LoggingWorkbenchValidatorsFields.iCount	
	},

	GetWatchedFiles : {	
	},

	GetWatcher : {	
	},

	ResetContext : {
			strContext : LoggingWorkbenchValidatorsFields.strContext	
	},

	StartJsonWsAnalyzing : {
			strFile : LoggingWorkbenchValidatorsFields.strFile	
	},

	StopWatchingAll : {	
	},

	WatchFile : {
			strFile : LoggingWorkbenchValidatorsFields.strFile	
	}
};

    