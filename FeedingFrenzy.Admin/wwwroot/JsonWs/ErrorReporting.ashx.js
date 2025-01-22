

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["ErrorReportingValidatorsFields"])) {
	var ErrorReportingValidatorsFields = { };
}

if (!ObjectUtil.HasValue(ErrorReportingValidatorsFields.Error)) {
	ErrorReportingValidatorsFields.Error = {Validators : [Validators.Text], InvalidMessage: "Invalid Error"};
}
if (!ObjectUtil.HasValue(ErrorReportingValidatorsFields.Event)) {
	ErrorReportingValidatorsFields.Event = {Validators : [Validators.Text], InvalidMessage: "Invalid Event"};
}
if (!ObjectUtil.HasValue(ErrorReportingValidatorsFields.Message)) {
	ErrorReportingValidatorsFields.Message = {Validators : [Validators.Text], InvalidMessage: "Invalid Message"};
}

		
var ErrorReporting = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.ErrorReporting.ashx"

	,
	ReportError : function(Error, Callback) {
        return ErrorReporting.ReportErrorObject({ Error : Error}, Callback);
    },

	ReportErrorObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ErrorReportingValidators.ReportError)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ErrorReporting.ReportError.onValidationError))
					ErrorReporting.ReportError.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ErrorReporting.Url, 
					Method : "ReportError", 
					Params : { Error : oObject.Error}, 
					Serialize : ErrorReporting.ReportError.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ErrorReporting.ReportError.onErrorReceived) ? ErrorReporting.ReportError.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ErrorReporting.Url, "ReportError", { Error : oObject.Error}, ErrorReporting.ReportError.Serialize || {});
    },
	ReportEvent : function(Event, Message, Callback) {
        return ErrorReporting.ReportEventObject({ Event : Event,Message : Message}, Callback);
    },

	ReportEventObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ErrorReportingValidators.ReportEvent)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ErrorReporting.ReportEvent.onValidationError))
					ErrorReporting.ReportEvent.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ErrorReporting.Url, 
					Method : "ReportEvent", 
					Params : { Event : oObject.Event,Message : oObject.Message}, 
					Serialize : ErrorReporting.ReportEvent.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ErrorReporting.ReportEvent.onErrorReceived) ? ErrorReporting.ReportEvent.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ErrorReporting.Url, "ReportEvent", { Event : oObject.Event,Message : oObject.Message}, ErrorReporting.ReportEvent.Serialize || {});
    }
};

var ErrorReportingValidators = {
	

	ReportError : {
			Error : ErrorReportingValidatorsFields.Error	
	},

	ReportEvent : {
			Event : ErrorReportingValidatorsFields.Event,
			Message : ErrorReportingValidatorsFields.Message	
	}
};

    