

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["LeadCallsValidatorsFields"])) {
	var LeadCallsValidatorsFields = { };
}

if (!ObjectUtil.HasValue(LeadCallsValidatorsFields.CallerID)) {
	LeadCallsValidatorsFields.CallerID = {Validators : [Validators.Text], InvalidMessage: "Invalid CallerID"};
}
if (!ObjectUtil.HasValue(LeadCallsValidatorsFields.LeadID)) {
	LeadCallsValidatorsFields.LeadID = {Validators : [Validators.Integer], InvalidMessage: "Invalid LeadID"};
}
if (!ObjectUtil.HasValue(LeadCallsValidatorsFields.LeadNoteID)) {
	LeadCallsValidatorsFields.LeadNoteID = {Validators : [Validators.Integer], InvalidMessage: "Invalid LeadNoteID"};
}
if (!ObjectUtil.HasValue(LeadCallsValidatorsFields.Phone)) {
	LeadCallsValidatorsFields.Phone = {Validators : [Validators.Text], InvalidMessage: "Invalid Phone"};
}
if (!ObjectUtil.HasValue(LeadCallsValidatorsFields.SalesRepresentativeID)) {
	LeadCallsValidatorsFields.SalesRepresentativeID = {Validators : [Validators.Integer], InvalidMessage: "Invalid SalesRepresentativeID"};
}

		
var LeadCalls = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.LeadCalls.ashx"

	,
	CallConnected2 : function(LeadNoteID, Phone, CallerID, Callback) {
        return LeadCalls.CallConnected2Object({ LeadNoteID : LeadNoteID,Phone : Phone,CallerID : CallerID}, Callback);
    },

	CallConnected2Object : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadCallsValidators.CallConnected2)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadCalls.CallConnected2.onValidationError))
					LeadCalls.CallConnected2.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadCalls.Url, 
					Method : "CallConnected2", 
					Params : { LeadNoteID : oObject.LeadNoteID,Phone : oObject.Phone,CallerID : oObject.CallerID}, 
					Serialize : LeadCalls.CallConnected2.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadCalls.CallConnected2.onErrorReceived) ? LeadCalls.CallConnected2.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadCalls.Url, "CallConnected2", { LeadNoteID : oObject.LeadNoteID,Phone : oObject.Phone,CallerID : oObject.CallerID}, LeadCalls.CallConnected2.Serialize || {});
    },
	CallLead : function(LeadID, SalesRepresentativeID, Callback) {
        return LeadCalls.CallLeadObject({ LeadID : LeadID,SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	CallLeadObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadCallsValidators.CallLead)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadCalls.CallLead.onValidationError))
					LeadCalls.CallLead.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadCalls.Url, 
					Method : "CallLead", 
					Params : { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : LeadCalls.CallLead.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadCalls.CallLead.onErrorReceived) ? LeadCalls.CallLead.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadCalls.Url, "CallLead", { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID}, LeadCalls.CallLead.Serialize || {});
    },
	GetLeadByPhone : function(Phone, Callback) {
        return LeadCalls.GetLeadByPhoneObject({ Phone : Phone}, Callback);
    },

	GetLeadByPhoneObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadCallsValidators.GetLeadByPhone)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadCalls.GetLeadByPhone.onValidationError))
					LeadCalls.GetLeadByPhone.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadCalls.Url, 
					Method : "GetLeadByPhone", 
					Params : { Phone : oObject.Phone}, 
					Serialize : LeadCalls.GetLeadByPhone.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadCalls.GetLeadByPhone.onErrorReceived) ? LeadCalls.GetLeadByPhone.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadCalls.Url, "GetLeadByPhone", { Phone : oObject.Phone}, LeadCalls.GetLeadByPhone.Serialize || {});
    }
};

var LeadCallsValidators = {
	

	CallConnected2 : {
			LeadNoteID : LeadCallsValidatorsFields.LeadNoteID,
			Phone : LeadCallsValidatorsFields.Phone,
			CallerID : LeadCallsValidatorsFields.CallerID	
	},

	CallLead : {
			LeadID : LeadCallsValidatorsFields.LeadID,
			SalesRepresentativeID : LeadCallsValidatorsFields.SalesRepresentativeID	
	},

	GetLeadByPhone : {
			Phone : LeadCallsValidatorsFields.Phone	
	}
};

    