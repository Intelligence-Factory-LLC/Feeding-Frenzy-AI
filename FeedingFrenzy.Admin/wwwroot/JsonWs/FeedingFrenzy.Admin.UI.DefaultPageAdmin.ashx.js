

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["DefaultPageAdminValidatorsFields"])) {
	var DefaultPageAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(DefaultPageAdminValidatorsFields.CurrentDate)) {
	DefaultPageAdminValidatorsFields.CurrentDate = {Validators : [Validators.Text], InvalidMessage: "Invalid CurrentDate"};
}
if (!ObjectUtil.HasValue(DefaultPageAdminValidatorsFields.SalesRepresentativeID)) {
	DefaultPageAdminValidatorsFields.SalesRepresentativeID = {Validators : [Validators.Text], InvalidMessage: "Invalid SalesRepresentativeID"};
}
if (!ObjectUtil.HasValue(DefaultPageAdminValidatorsFields.TagID)) {
	DefaultPageAdminValidatorsFields.TagID = {Validators : [Validators.Text], InvalidMessage: "Invalid TagID"};
}

		
var DefaultPageAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.DefaultPageAdmin.ashx"

	,
	GetMainCalendar : function(SalesRepresentativeID, CurrentDate, Callback) {
        return DefaultPageAdmin.GetMainCalendarObject({ SalesRepresentativeID : SalesRepresentativeID,CurrentDate : CurrentDate}, Callback);
    },

	GetMainCalendarObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DefaultPageAdminValidators.GetMainCalendar)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(DefaultPageAdmin.GetMainCalendar.onValidationError))
					DefaultPageAdmin.GetMainCalendar.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: DefaultPageAdmin.Url, 
					Method : "GetMainCalendar", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,CurrentDate : oObject.CurrentDate}, 
					Serialize : DefaultPageAdmin.GetMainCalendar.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(DefaultPageAdmin.GetMainCalendar.onErrorReceived) ? DefaultPageAdmin.GetMainCalendar.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(DefaultPageAdmin.Url, "GetMainCalendar", { SalesRepresentativeID : oObject.SalesRepresentativeID,CurrentDate : oObject.CurrentDate}, DefaultPageAdmin.GetMainCalendar.Serialize || {});
    },
	GetMainPanelContentForSalesRepresentative : function(SalesRepresentativeID, TagID, Callback) {
        return DefaultPageAdmin.GetMainPanelContentForSalesRepresentativeObject({ SalesRepresentativeID : SalesRepresentativeID,TagID : TagID}, Callback);
    },

	GetMainPanelContentForSalesRepresentativeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DefaultPageAdminValidators.GetMainPanelContentForSalesRepresentative)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(DefaultPageAdmin.GetMainPanelContentForSalesRepresentative.onValidationError))
					DefaultPageAdmin.GetMainPanelContentForSalesRepresentative.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: DefaultPageAdmin.Url, 
					Method : "GetMainPanelContentForSalesRepresentative", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,TagID : oObject.TagID}, 
					Serialize : DefaultPageAdmin.GetMainPanelContentForSalesRepresentative.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(DefaultPageAdmin.GetMainPanelContentForSalesRepresentative.onErrorReceived) ? DefaultPageAdmin.GetMainPanelContentForSalesRepresentative.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(DefaultPageAdmin.Url, "GetMainPanelContentForSalesRepresentative", { SalesRepresentativeID : oObject.SalesRepresentativeID,TagID : oObject.TagID}, DefaultPageAdmin.GetMainPanelContentForSalesRepresentative.Serialize || {});
    },
	Initialize : function(Callback) {
        return DefaultPageAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DefaultPageAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(DefaultPageAdmin.Initialize.onValidationError))
					DefaultPageAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: DefaultPageAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : DefaultPageAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(DefaultPageAdmin.Initialize.onErrorReceived) ? DefaultPageAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(DefaultPageAdmin.Url, "Initialize", { }, DefaultPageAdmin.Initialize.Serialize || {});
    }
};

var DefaultPageAdminValidators = {
	

	GetMainCalendar : {
			SalesRepresentativeID : DefaultPageAdminValidatorsFields.SalesRepresentativeID,
			CurrentDate : DefaultPageAdminValidatorsFields.CurrentDate	
	},

	GetMainPanelContentForSalesRepresentative : {
			SalesRepresentativeID : DefaultPageAdminValidatorsFields.SalesRepresentativeID,
			TagID : DefaultPageAdminValidatorsFields.TagID	
	},

	Initialize : {	
	}
};

    