

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["LeadAutomationValidatorsFields"])) {
	var LeadAutomationValidatorsFields = { };
}

if (!ObjectUtil.HasValue(LeadAutomationValidatorsFields.bForceRefresh)) {
	LeadAutomationValidatorsFields.bForceRefresh = {Validators : [Validators.Boolean], InvalidMessage: "Invalid bForceRefresh"};
}
if (!ObjectUtil.HasValue(LeadAutomationValidatorsFields.bForceUpdate)) {
	LeadAutomationValidatorsFields.bForceUpdate = {Validators : [Validators.Boolean], InvalidMessage: "Invalid bForceUpdate"};
}
if (!ObjectUtil.HasValue(LeadAutomationValidatorsFields.CallID)) {
	LeadAutomationValidatorsFields.CallID = {Validators : [Validators.Integer], InvalidMessage: "Invalid CallID"};
}
if (!ObjectUtil.HasValue(LeadAutomationValidatorsFields.Day)) {
	LeadAutomationValidatorsFields.Day = {Validators : [Validators.Date], InvalidMessage: "Invalid Day"};
}
if (!ObjectUtil.HasValue(LeadAutomationValidatorsFields.FragmentID)) {
	LeadAutomationValidatorsFields.FragmentID = {Validators : [Validators.Integer], InvalidMessage: "Invalid FragmentID"};
}
if (!ObjectUtil.HasValue(LeadAutomationValidatorsFields.LeadID)) {
	LeadAutomationValidatorsFields.LeadID = {Validators : [Validators.Integer], InvalidMessage: "Invalid LeadID"};
}
if (!ObjectUtil.HasValue(LeadAutomationValidatorsFields.LeadInfo)) {
	LeadAutomationValidatorsFields.LeadInfo = {Validators : [Validators.Text], InvalidMessage: "Invalid LeadInfo"};
}
if (!ObjectUtil.HasValue(LeadAutomationValidatorsFields.LeadNoteID)) {
	LeadAutomationValidatorsFields.LeadNoteID = {Validators : [Validators.Integer], InvalidMessage: "Invalid LeadNoteID"};
}
if (!ObjectUtil.HasValue(LeadAutomationValidatorsFields.Message)) {
	LeadAutomationValidatorsFields.Message = {Validators : [Validators.Text], InvalidMessage: "Invalid Message"};
}
if (!ObjectUtil.HasValue(LeadAutomationValidatorsFields.Model)) {
	LeadAutomationValidatorsFields.Model = {Validators : [Validators.Text], InvalidMessage: "Invalid Model"};
}
if (!ObjectUtil.HasValue(LeadAutomationValidatorsFields.Prompt)) {
	LeadAutomationValidatorsFields.Prompt = {Validators : [Validators.Text], InvalidMessage: "Invalid Prompt"};
}
if (!ObjectUtil.HasValue(LeadAutomationValidatorsFields.SalesRepresentativeID)) {
	LeadAutomationValidatorsFields.SalesRepresentativeID = {Validators : [Validators.Integer], InvalidMessage: "Invalid SalesRepresentativeID"};
}

		
var LeadAutomation = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.LeadAutomation.ashx"

	,
	ChatWithSalesRepresentativesDay : function(SalesRepresentativeID, Day, Message, Callback) {
        return LeadAutomation.ChatWithSalesRepresentativesDayObject({ SalesRepresentativeID : SalesRepresentativeID,Day : Day,Message : Message}, Callback);
    },

	ChatWithSalesRepresentativesDayObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadAutomationValidators.ChatWithSalesRepresentativesDay)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadAutomation.ChatWithSalesRepresentativesDay.onValidationError))
					LeadAutomation.ChatWithSalesRepresentativesDay.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadAutomation.Url, 
					Method : "ChatWithSalesRepresentativesDay", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,Day : oObject.Day,Message : oObject.Message}, 
					Serialize : LeadAutomation.ChatWithSalesRepresentativesDay.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadAutomation.ChatWithSalesRepresentativesDay.onErrorReceived) ? LeadAutomation.ChatWithSalesRepresentativesDay.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadAutomation.Url, "ChatWithSalesRepresentativesDay", { SalesRepresentativeID : oObject.SalesRepresentativeID,Day : oObject.Day,Message : oObject.Message}, LeadAutomation.ChatWithSalesRepresentativesDay.Serialize || {});
    },
	ChatWithSalesRepresentativesDayFragment : function(FragmentID, Message, Callback) {
        return LeadAutomation.ChatWithSalesRepresentativesDayFragmentObject({ FragmentID : FragmentID,Message : Message}, Callback);
    },

	ChatWithSalesRepresentativesDayFragmentObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadAutomationValidators.ChatWithSalesRepresentativesDayFragment)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadAutomation.ChatWithSalesRepresentativesDayFragment.onValidationError))
					LeadAutomation.ChatWithSalesRepresentativesDayFragment.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadAutomation.Url, 
					Method : "ChatWithSalesRepresentativesDayFragment", 
					Params : { FragmentID : oObject.FragmentID,Message : oObject.Message}, 
					Serialize : LeadAutomation.ChatWithSalesRepresentativesDayFragment.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadAutomation.ChatWithSalesRepresentativesDayFragment.onErrorReceived) ? LeadAutomation.ChatWithSalesRepresentativesDayFragment.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadAutomation.Url, "ChatWithSalesRepresentativesDayFragment", { FragmentID : oObject.FragmentID,Message : oObject.Message}, LeadAutomation.ChatWithSalesRepresentativesDayFragment.Serialize || {});
    },
	CompleteBasedOnLeadInfo2 : function(LeadID, Prompt, Model, Callback) {
        return LeadAutomation.CompleteBasedOnLeadInfo2Object({ LeadID : LeadID,Prompt : Prompt,Model : Model}, Callback);
    },

	CompleteBasedOnLeadInfo2Object : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadAutomationValidators.CompleteBasedOnLeadInfo2)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadAutomation.CompleteBasedOnLeadInfo2.onValidationError))
					LeadAutomation.CompleteBasedOnLeadInfo2.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadAutomation.Url, 
					Method : "CompleteBasedOnLeadInfo2", 
					Params : { LeadID : oObject.LeadID,Prompt : oObject.Prompt,Model : oObject.Model}, 
					Serialize : LeadAutomation.CompleteBasedOnLeadInfo2.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadAutomation.CompleteBasedOnLeadInfo2.onErrorReceived) ? LeadAutomation.CompleteBasedOnLeadInfo2.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadAutomation.Url, "CompleteBasedOnLeadInfo2", { LeadID : oObject.LeadID,Prompt : oObject.Prompt,Model : oObject.Model}, LeadAutomation.CompleteBasedOnLeadInfo2.Serialize || {});
    },
	CompleteJSONBasedOnLeadInfo2 : function(LeadID, Prompt, Model, Callback) {
        return LeadAutomation.CompleteJSONBasedOnLeadInfo2Object({ LeadID : LeadID,Prompt : Prompt,Model : Model}, Callback);
    },

	CompleteJSONBasedOnLeadInfo2Object : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadAutomationValidators.CompleteJSONBasedOnLeadInfo2)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadAutomation.CompleteJSONBasedOnLeadInfo2.onValidationError))
					LeadAutomation.CompleteJSONBasedOnLeadInfo2.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadAutomation.Url, 
					Method : "CompleteJSONBasedOnLeadInfo2", 
					Params : { LeadID : oObject.LeadID,Prompt : oObject.Prompt,Model : oObject.Model}, 
					Serialize : LeadAutomation.CompleteJSONBasedOnLeadInfo2.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadAutomation.CompleteJSONBasedOnLeadInfo2.onErrorReceived) ? LeadAutomation.CompleteJSONBasedOnLeadInfo2.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadAutomation.Url, "CompleteJSONBasedOnLeadInfo2", { LeadID : oObject.LeadID,Prompt : oObject.Prompt,Model : oObject.Model}, LeadAutomation.CompleteJSONBasedOnLeadInfo2.Serialize || {});
    },
	PostProcessCall : function(CallID, LeadNoteID, bForceRefresh, Callback) {
        return LeadAutomation.PostProcessCallObject({ CallID : CallID,LeadNoteID : LeadNoteID,bForceRefresh : bForceRefresh}, Callback);
    },

	PostProcessCallObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadAutomationValidators.PostProcessCall)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadAutomation.PostProcessCall.onValidationError))
					LeadAutomation.PostProcessCall.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadAutomation.Url, 
					Method : "PostProcessCall", 
					Params : { CallID : oObject.CallID,LeadNoteID : oObject.LeadNoteID,bForceRefresh : oObject.bForceRefresh}, 
					Serialize : LeadAutomation.PostProcessCall.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadAutomation.PostProcessCall.onErrorReceived) ? LeadAutomation.PostProcessCall.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadAutomation.Url, "PostProcessCall", { CallID : oObject.CallID,LeadNoteID : oObject.LeadNoteID,bForceRefresh : oObject.bForceRefresh}, LeadAutomation.PostProcessCall.Serialize || {});
    },
	SummarizeSalesRepresentativesDay : function(SalesRepresentativeID, Day, bForceUpdate, Callback) {
        return LeadAutomation.SummarizeSalesRepresentativesDayObject({ SalesRepresentativeID : SalesRepresentativeID,Day : Day,bForceUpdate : bForceUpdate}, Callback);
    },

	SummarizeSalesRepresentativesDayObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadAutomationValidators.SummarizeSalesRepresentativesDay)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadAutomation.SummarizeSalesRepresentativesDay.onValidationError))
					LeadAutomation.SummarizeSalesRepresentativesDay.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadAutomation.Url, 
					Method : "SummarizeSalesRepresentativesDay", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,Day : oObject.Day,bForceUpdate : oObject.bForceUpdate}, 
					Serialize : LeadAutomation.SummarizeSalesRepresentativesDay.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadAutomation.SummarizeSalesRepresentativesDay.onErrorReceived) ? LeadAutomation.SummarizeSalesRepresentativesDay.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadAutomation.Url, "SummarizeSalesRepresentativesDay", { SalesRepresentativeID : oObject.SalesRepresentativeID,Day : oObject.Day,bForceUpdate : oObject.bForceUpdate}, LeadAutomation.SummarizeSalesRepresentativesDay.Serialize || {});
    },
	UpdateLeadInfo : function(LeadID, LeadInfo, Callback) {
        return LeadAutomation.UpdateLeadInfoObject({ LeadID : LeadID,LeadInfo : LeadInfo}, Callback);
    },

	UpdateLeadInfoObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadAutomationValidators.UpdateLeadInfo)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadAutomation.UpdateLeadInfo.onValidationError))
					LeadAutomation.UpdateLeadInfo.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadAutomation.Url, 
					Method : "UpdateLeadInfo", 
					Params : { LeadID : oObject.LeadID,LeadInfo : oObject.LeadInfo}, 
					Serialize : LeadAutomation.UpdateLeadInfo.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadAutomation.UpdateLeadInfo.onErrorReceived) ? LeadAutomation.UpdateLeadInfo.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadAutomation.Url, "UpdateLeadInfo", { LeadID : oObject.LeadID,LeadInfo : oObject.LeadInfo}, LeadAutomation.UpdateLeadInfo.Serialize || {});
    }
};

var LeadAutomationValidators = {
	

	ChatWithSalesRepresentativesDay : {
			SalesRepresentativeID : LeadAutomationValidatorsFields.SalesRepresentativeID,
			Day : LeadAutomationValidatorsFields.Day,
			Message : LeadAutomationValidatorsFields.Message	
	},

	ChatWithSalesRepresentativesDayFragment : {
			FragmentID : LeadAutomationValidatorsFields.FragmentID,
			Message : LeadAutomationValidatorsFields.Message	
	},

	CompleteBasedOnLeadInfo2 : {
			LeadID : LeadAutomationValidatorsFields.LeadID,
			Prompt : LeadAutomationValidatorsFields.Prompt,
			Model : LeadAutomationValidatorsFields.Model	
	},

	CompleteJSONBasedOnLeadInfo2 : {
			LeadID : LeadAutomationValidatorsFields.LeadID,
			Prompt : LeadAutomationValidatorsFields.Prompt,
			Model : LeadAutomationValidatorsFields.Model	
	},

	PostProcessCall : {
			CallID : LeadAutomationValidatorsFields.CallID,
			LeadNoteID : LeadAutomationValidatorsFields.LeadNoteID,
			bForceRefresh : LeadAutomationValidatorsFields.bForceRefresh	
	},

	SummarizeSalesRepresentativesDay : {
			SalesRepresentativeID : LeadAutomationValidatorsFields.SalesRepresentativeID,
			Day : LeadAutomationValidatorsFields.Day,
			bForceUpdate : LeadAutomationValidatorsFields.bForceUpdate	
	},

	UpdateLeadInfo : {
			LeadID : LeadAutomationValidatorsFields.LeadID,
			LeadInfo : LeadAutomationValidatorsFields.LeadInfo	
	}
};

    