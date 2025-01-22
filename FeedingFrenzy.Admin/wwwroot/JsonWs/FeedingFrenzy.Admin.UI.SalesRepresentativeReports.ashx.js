

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["SalesRepresentativeReportsValidatorsFields"])) {
	var SalesRepresentativeReportsValidatorsFields = { };
}

if (!ObjectUtil.HasValue(SalesRepresentativeReportsValidatorsFields.SalesRepresentativeID)) {
	SalesRepresentativeReportsValidatorsFields.SalesRepresentativeID = {Validators : [Validators.Text], InvalidMessage: "Invalid SalesRepresentativeID"};
}
if (!ObjectUtil.HasValue(SalesRepresentativeReportsValidatorsFields.StartDate)) {
	SalesRepresentativeReportsValidatorsFields.StartDate = {Validators : [Validators.Text], InvalidMessage: "Invalid StartDate"};
}
if (!ObjectUtil.HasValue(SalesRepresentativeReportsValidatorsFields.StopDate)) {
	SalesRepresentativeReportsValidatorsFields.StopDate = {Validators : [Validators.Text], InvalidMessage: "Invalid StopDate"};
}
if (!ObjectUtil.HasValue(SalesRepresentativeReportsValidatorsFields.TagID)) {
	SalesRepresentativeReportsValidatorsFields.TagID = {Validators : [Validators.Text], InvalidMessage: "Invalid TagID"};
}

		
var SalesRepresentativeReports = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.SalesRepresentativeReports.ashx"

	,
	GetCallSummary : function(SalesRepresentativeID, Callback) {
        return SalesRepresentativeReports.GetCallSummaryObject({ SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetCallSummaryObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeReportsValidators.GetCallSummary)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeReports.GetCallSummary.onValidationError))
					SalesRepresentativeReports.GetCallSummary.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeReports.Url, 
					Method : "GetCallSummary", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : SalesRepresentativeReports.GetCallSummary.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeReports.GetCallSummary.onErrorReceived) ? SalesRepresentativeReports.GetCallSummary.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeReports.Url, "GetCallSummary", { SalesRepresentativeID : oObject.SalesRepresentativeID}, SalesRepresentativeReports.GetCallSummary.Serialize || {});
    },
	GetCallSummaryByTagID : function(SalesRepresentativeID, TagID, StartDate, StopDate, Callback) {
        return SalesRepresentativeReports.GetCallSummaryByTagIDObject({ SalesRepresentativeID : SalesRepresentativeID,TagID : TagID,StartDate : StartDate,StopDate : StopDate}, Callback);
    },

	GetCallSummaryByTagIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeReportsValidators.GetCallSummaryByTagID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeReports.GetCallSummaryByTagID.onValidationError))
					SalesRepresentativeReports.GetCallSummaryByTagID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeReports.Url, 
					Method : "GetCallSummaryByTagID", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,TagID : oObject.TagID,StartDate : oObject.StartDate,StopDate : oObject.StopDate}, 
					Serialize : SalesRepresentativeReports.GetCallSummaryByTagID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeReports.GetCallSummaryByTagID.onErrorReceived) ? SalesRepresentativeReports.GetCallSummaryByTagID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeReports.Url, "GetCallSummaryByTagID", { SalesRepresentativeID : oObject.SalesRepresentativeID,TagID : oObject.TagID,StartDate : oObject.StartDate,StopDate : oObject.StopDate}, SalesRepresentativeReports.GetCallSummaryByTagID.Serialize || {});
    },
	GetCallSummaryOverall : function(StartDate, StopDate, Callback) {
        return SalesRepresentativeReports.GetCallSummaryOverallObject({ StartDate : StartDate,StopDate : StopDate}, Callback);
    },

	GetCallSummaryOverallObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeReportsValidators.GetCallSummaryOverall)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeReports.GetCallSummaryOverall.onValidationError))
					SalesRepresentativeReports.GetCallSummaryOverall.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeReports.Url, 
					Method : "GetCallSummaryOverall", 
					Params : { StartDate : oObject.StartDate,StopDate : oObject.StopDate}, 
					Serialize : SalesRepresentativeReports.GetCallSummaryOverall.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeReports.GetCallSummaryOverall.onErrorReceived) ? SalesRepresentativeReports.GetCallSummaryOverall.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeReports.Url, "GetCallSummaryOverall", { StartDate : oObject.StartDate,StopDate : oObject.StopDate}, SalesRepresentativeReports.GetCallSummaryOverall.Serialize || {});
    },
	GetCallSummaryOverallByTagID : function(TagID, StartDate, StopDate, Callback) {
        return SalesRepresentativeReports.GetCallSummaryOverallByTagIDObject({ TagID : TagID,StartDate : StartDate,StopDate : StopDate}, Callback);
    },

	GetCallSummaryOverallByTagIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeReportsValidators.GetCallSummaryOverallByTagID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeReports.GetCallSummaryOverallByTagID.onValidationError))
					SalesRepresentativeReports.GetCallSummaryOverallByTagID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeReports.Url, 
					Method : "GetCallSummaryOverallByTagID", 
					Params : { TagID : oObject.TagID,StartDate : oObject.StartDate,StopDate : oObject.StopDate}, 
					Serialize : SalesRepresentativeReports.GetCallSummaryOverallByTagID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeReports.GetCallSummaryOverallByTagID.onErrorReceived) ? SalesRepresentativeReports.GetCallSummaryOverallByTagID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeReports.Url, "GetCallSummaryOverallByTagID", { TagID : oObject.TagID,StartDate : oObject.StartDate,StopDate : oObject.StopDate}, SalesRepresentativeReports.GetCallSummaryOverallByTagID.Serialize || {});
    },
	Initialize : function(Callback) {
        return SalesRepresentativeReports.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeReportsValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeReports.Initialize.onValidationError))
					SalesRepresentativeReports.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeReports.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : SalesRepresentativeReports.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeReports.Initialize.onErrorReceived) ? SalesRepresentativeReports.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeReports.Url, "Initialize", { }, SalesRepresentativeReports.Initialize.Serialize || {});
    }
};

var SalesRepresentativeReportsValidators = {
	

	GetCallSummary : {
			SalesRepresentativeID : SalesRepresentativeReportsValidatorsFields.SalesRepresentativeID	
	},

	GetCallSummaryByTagID : {
			SalesRepresentativeID : SalesRepresentativeReportsValidatorsFields.SalesRepresentativeID,
			TagID : SalesRepresentativeReportsValidatorsFields.TagID,
			StartDate : SalesRepresentativeReportsValidatorsFields.StartDate,
			StopDate : SalesRepresentativeReportsValidatorsFields.StopDate	
	},

	GetCallSummaryOverall : {
			StartDate : SalesRepresentativeReportsValidatorsFields.StartDate,
			StopDate : SalesRepresentativeReportsValidatorsFields.StopDate	
	},

	GetCallSummaryOverallByTagID : {
			TagID : SalesRepresentativeReportsValidatorsFields.TagID,
			StartDate : SalesRepresentativeReportsValidatorsFields.StartDate,
			StopDate : SalesRepresentativeReportsValidatorsFields.StopDate	
	},

	Initialize : {	
	}
};

    