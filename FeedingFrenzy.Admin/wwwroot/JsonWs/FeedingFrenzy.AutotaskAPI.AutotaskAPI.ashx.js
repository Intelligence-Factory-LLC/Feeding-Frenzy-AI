

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["AutotaskAPIValidatorsFields"])) {
	var AutotaskAPIValidatorsFields = { };
}

if (!ObjectUtil.HasValue(AutotaskAPIValidatorsFields.CallID)) {
	AutotaskAPIValidatorsFields.CallID = {Validators : [Validators.Integer], InvalidMessage: "Invalid CallID"};
}
if (!ObjectUtil.HasValue(AutotaskAPIValidatorsFields.CompanyID)) {
	AutotaskAPIValidatorsFields.CompanyID = {Validators : [Validators.Integer], InvalidMessage: "Invalid CompanyID"};
}
if (!ObjectUtil.HasValue(AutotaskAPIValidatorsFields.DueDateTime)) {
	AutotaskAPIValidatorsFields.DueDateTime = {Validators : [Validators.Date], InvalidMessage: "Invalid DueDateTime"};
}
if (!ObjectUtil.HasValue(AutotaskAPIValidatorsFields.iCallID)) {
	AutotaskAPIValidatorsFields.iCallID = {Validators : [Validators.Integer], InvalidMessage: "Invalid iCallID"};
}
if (!ObjectUtil.HasValue(AutotaskAPIValidatorsFields.iCompanyID)) {
	AutotaskAPIValidatorsFields.iCompanyID = {Validators : [Validators.Integer], InvalidMessage: "Invalid iCompanyID"};
}
if (!ObjectUtil.HasValue(AutotaskAPIValidatorsFields.TicketID)) {
	AutotaskAPIValidatorsFields.TicketID = {Validators : [Validators.Integer], InvalidMessage: "Invalid TicketID"};
}

		
var AutotaskAPI = {	
	Url : "/JsonWs/FeedingFrenzy.AutotaskAPI.AutotaskAPI.ashx"

	,
	CreateTicket : function(CompanyID, CallID, DueDateTime, Callback) {
        return AutotaskAPI.CreateTicketObject({ CompanyID : CompanyID,CallID : CallID,DueDateTime : DueDateTime}, Callback);
    },

	CreateTicketObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AutotaskAPIValidators.CreateTicket)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AutotaskAPI.CreateTicket.onValidationError))
					AutotaskAPI.CreateTicket.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AutotaskAPI.Url, 
					Method : "CreateTicket", 
					Params : { CompanyID : oObject.CompanyID,CallID : oObject.CallID,DueDateTime : oObject.DueDateTime}, 
					Serialize : AutotaskAPI.CreateTicket.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AutotaskAPI.CreateTicket.onErrorReceived) ? AutotaskAPI.CreateTicket.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AutotaskAPI.Url, "CreateTicket", { CompanyID : oObject.CompanyID,CallID : oObject.CallID,DueDateTime : oObject.DueDateTime}, AutotaskAPI.CreateTicket.Serialize || {});
    },
	GetCompanyByCallID : function(iCallID, Callback) {
        return AutotaskAPI.GetCompanyByCallIDObject({ iCallID : iCallID}, Callback);
    },

	GetCompanyByCallIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AutotaskAPIValidators.GetCompanyByCallID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AutotaskAPI.GetCompanyByCallID.onValidationError))
					AutotaskAPI.GetCompanyByCallID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AutotaskAPI.Url, 
					Method : "GetCompanyByCallID", 
					Params : { iCallID : oObject.iCallID}, 
					Serialize : AutotaskAPI.GetCompanyByCallID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AutotaskAPI.GetCompanyByCallID.onErrorReceived) ? AutotaskAPI.GetCompanyByCallID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AutotaskAPI.Url, "GetCompanyByCallID", { iCallID : oObject.iCallID}, AutotaskAPI.GetCompanyByCallID.Serialize || {});
    },
	GetTicketsByCompanyID : function(iCompanyID, Callback) {
        return AutotaskAPI.GetTicketsByCompanyIDObject({ iCompanyID : iCompanyID}, Callback);
    },

	GetTicketsByCompanyIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AutotaskAPIValidators.GetTicketsByCompanyID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AutotaskAPI.GetTicketsByCompanyID.onValidationError))
					AutotaskAPI.GetTicketsByCompanyID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AutotaskAPI.Url, 
					Method : "GetTicketsByCompanyID", 
					Params : { iCompanyID : oObject.iCompanyID}, 
					Serialize : AutotaskAPI.GetTicketsByCompanyID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AutotaskAPI.GetTicketsByCompanyID.onErrorReceived) ? AutotaskAPI.GetTicketsByCompanyID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AutotaskAPI.Url, "GetTicketsByCompanyID", { iCompanyID : oObject.iCompanyID}, AutotaskAPI.GetTicketsByCompanyID.Serialize || {});
    },
	UpdateTicket : function(CompanyID, TicketID, CallID, DueDateTime, Callback) {
        return AutotaskAPI.UpdateTicketObject({ CompanyID : CompanyID,TicketID : TicketID,CallID : CallID,DueDateTime : DueDateTime}, Callback);
    },

	UpdateTicketObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AutotaskAPIValidators.UpdateTicket)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AutotaskAPI.UpdateTicket.onValidationError))
					AutotaskAPI.UpdateTicket.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AutotaskAPI.Url, 
					Method : "UpdateTicket", 
					Params : { CompanyID : oObject.CompanyID,TicketID : oObject.TicketID,CallID : oObject.CallID,DueDateTime : oObject.DueDateTime}, 
					Serialize : AutotaskAPI.UpdateTicket.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AutotaskAPI.UpdateTicket.onErrorReceived) ? AutotaskAPI.UpdateTicket.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AutotaskAPI.Url, "UpdateTicket", { CompanyID : oObject.CompanyID,TicketID : oObject.TicketID,CallID : oObject.CallID,DueDateTime : oObject.DueDateTime}, AutotaskAPI.UpdateTicket.Serialize || {});
    }
};

var AutotaskAPIValidators = {
	

	CreateTicket : {
			CompanyID : AutotaskAPIValidatorsFields.CompanyID,
			CallID : AutotaskAPIValidatorsFields.CallID,
			DueDateTime : AutotaskAPIValidatorsFields.DueDateTime	
	},

	GetCompanyByCallID : {
			iCallID : AutotaskAPIValidatorsFields.iCallID	
	},

	GetTicketsByCompanyID : {
			iCompanyID : AutotaskAPIValidatorsFields.iCompanyID	
	},

	UpdateTicket : {
			CompanyID : AutotaskAPIValidatorsFields.CompanyID,
			TicketID : AutotaskAPIValidatorsFields.TicketID,
			CallID : AutotaskAPIValidatorsFields.CallID,
			DueDateTime : AutotaskAPIValidatorsFields.DueDateTime	
	}
};

    