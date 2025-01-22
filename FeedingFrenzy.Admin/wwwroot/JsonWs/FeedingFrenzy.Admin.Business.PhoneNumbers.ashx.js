
    	    	
var PhoneNumbersValidatorsFields = {
	
		AgentName : {Validators : [Validators.String], InvalidMessage: "Invalid AgentName. " +   ValidatorDescriptions.Length(1, 255) },
		CallerName : {Validators : [Validators.String], InvalidMessage: "Invalid Caller Name. " +   ValidatorDescriptions.Length(1, 255) },
		Country : {Validators : [Validators.String], InvalidMessage: "Invalid Country. " +   ValidatorDescriptions.Length(1, 255) },
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		IsBlocked : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Is Blocked. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		IsInternal : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Is Internal. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		IsSpam : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Is Spam. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		NumRows : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid NumRows. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		phone : {Validators : [Validators.String], InvalidMessage: "Invalid phone. " +   ValidatorDescriptions.Length(1, 255) },
		PhoneNumber : {Validators : [Validators.Phone, Validators.Required], InvalidMessage: "Invalid Phone Number. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Phone() },
		PhoneNumberID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Phone Number ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		PhoneType : {Validators : [Validators.String], InvalidMessage: "Invalid Phone Type. " +   ValidatorDescriptions.Length(1, 255) },
		Search : {Validators : [Validators.String], InvalidMessage: "Invalid Search. " +   ValidatorDescriptions.Length(1, 255) },
		SkipRows : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid SkipRows. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		SortAscending : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid SortAscending. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		SortColumn : {Validators : [Validators.String], InvalidMessage: "Invalid SortColumn. " +   ValidatorDescriptions.Length(1, 255) }	
}
			
var PhoneNumbers = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.PhoneNumbers.ashx"

	,
	CopyPhoneNumber : function(PhoneNumberID, Callback) {
        return PhoneNumbers.CopyPhoneNumberObject({ PhoneNumberID : PhoneNumberID}, Callback);
    },

	CopyPhoneNumberObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersValidators.CopyPhoneNumber)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbers.CopyPhoneNumber.onValidationError))
					PhoneNumbers.CopyPhoneNumber.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbers.Url, 
					Method : "CopyPhoneNumber", 
					Params : { PhoneNumberID : oObject.PhoneNumberID}, 
					Serialize : PhoneNumbers.CopyPhoneNumber.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbers.CopyPhoneNumber.onErrorReceived) ? PhoneNumbers.CopyPhoneNumber.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbers.Url, "CopyPhoneNumber", { PhoneNumberID : oObject.PhoneNumberID}, PhoneNumbers.CopyPhoneNumber.Serialize || {});
    },
	GetLineType : function(phone, Callback) {
        return PhoneNumbers.GetLineTypeObject({ phone : phone}, Callback);
    },

	GetLineTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersValidators.GetLineType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbers.GetLineType.onValidationError))
					PhoneNumbers.GetLineType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbers.Url, 
					Method : "GetLineType", 
					Params : { phone : oObject.phone}, 
					Serialize : PhoneNumbers.GetLineType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbers.GetLineType.onErrorReceived) ? PhoneNumbers.GetLineType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbers.Url, "GetLineType", { phone : oObject.phone}, PhoneNumbers.GetLineType.Serialize || {});
    },
	GetPhoneNumber : function(PhoneNumberID, Callback) {
        return PhoneNumbers.GetPhoneNumberObject({ PhoneNumberID : PhoneNumberID}, Callback);
    },

	GetPhoneNumberObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersValidators.GetPhoneNumber)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbers.GetPhoneNumber.onValidationError))
					PhoneNumbers.GetPhoneNumber.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbers.Url, 
					Method : "GetPhoneNumber", 
					Params : { PhoneNumberID : oObject.PhoneNumberID}, 
					Serialize : PhoneNumbers.GetPhoneNumber.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbers.GetPhoneNumber.onErrorReceived) ? PhoneNumbers.GetPhoneNumber.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbers.Url, "GetPhoneNumber", { PhoneNumberID : oObject.PhoneNumberID}, PhoneNumbers.GetPhoneNumber.Serialize || {});
    },
	GetPhoneNumberByPhoneNumber : function(PhoneNumber, Callback) {
        return PhoneNumbers.GetPhoneNumberByPhoneNumberObject({ PhoneNumber : PhoneNumber}, Callback);
    },

	GetPhoneNumberByPhoneNumberObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersValidators.GetPhoneNumberByPhoneNumber)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbers.GetPhoneNumberByPhoneNumber.onValidationError))
					PhoneNumbers.GetPhoneNumberByPhoneNumber.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbers.Url, 
					Method : "GetPhoneNumberByPhoneNumber", 
					Params : { PhoneNumber : oObject.PhoneNumber}, 
					Serialize : PhoneNumbers.GetPhoneNumberByPhoneNumber.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbers.GetPhoneNumberByPhoneNumber.onErrorReceived) ? PhoneNumbers.GetPhoneNumberByPhoneNumber.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbers.Url, "GetPhoneNumberByPhoneNumber", { PhoneNumber : oObject.PhoneNumber}, PhoneNumbers.GetPhoneNumberByPhoneNumber.Serialize || {});
    },
	GetPhoneNumberByVoiceAgent : function(AgentName, Callback) {
        return PhoneNumbers.GetPhoneNumberByVoiceAgentObject({ AgentName : AgentName}, Callback);
    },

	GetPhoneNumberByVoiceAgentObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersValidators.GetPhoneNumberByVoiceAgent)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbers.GetPhoneNumberByVoiceAgent.onValidationError))
					PhoneNumbers.GetPhoneNumberByVoiceAgent.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbers.Url, 
					Method : "GetPhoneNumberByVoiceAgent", 
					Params : { AgentName : oObject.AgentName}, 
					Serialize : PhoneNumbers.GetPhoneNumberByVoiceAgent.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbers.GetPhoneNumberByVoiceAgent.onErrorReceived) ? PhoneNumbers.GetPhoneNumberByVoiceAgent.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbers.Url, "GetPhoneNumberByVoiceAgent", { AgentName : oObject.AgentName}, PhoneNumbers.GetPhoneNumberByVoiceAgent.Serialize || {});
    },
	GetPhoneNumberInfo : function(phone, Callback) {
        return PhoneNumbers.GetPhoneNumberInfoObject({ phone : phone}, Callback);
    },

	GetPhoneNumberInfoObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersValidators.GetPhoneNumberInfo)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbers.GetPhoneNumberInfo.onValidationError))
					PhoneNumbers.GetPhoneNumberInfo.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbers.Url, 
					Method : "GetPhoneNumberInfo", 
					Params : { phone : oObject.phone}, 
					Serialize : PhoneNumbers.GetPhoneNumberInfo.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbers.GetPhoneNumberInfo.onErrorReceived) ? PhoneNumbers.GetPhoneNumberInfo.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbers.Url, "GetPhoneNumberInfo", { phone : oObject.phone}, PhoneNumbers.GetPhoneNumberInfo.Serialize || {});
    },
	GetPhoneNumbers : function(Callback) {
        return PhoneNumbers.GetPhoneNumbersObject({ }, Callback);
    },

	GetPhoneNumbersObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersValidators.GetPhoneNumbers)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbers.GetPhoneNumbers.onValidationError))
					PhoneNumbers.GetPhoneNumbers.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbers.Url, 
					Method : "GetPhoneNumbers", 
					Params : { }, 
					Serialize : PhoneNumbers.GetPhoneNumbers.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbers.GetPhoneNumbers.onErrorReceived) ? PhoneNumbers.GetPhoneNumbers.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbers.Url, "GetPhoneNumbers", { }, PhoneNumbers.GetPhoneNumbers.Serialize || {});
    },
	GetPhoneNumbersSp_PagingSp : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return PhoneNumbers.GetPhoneNumbersSp_PagingSpObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetPhoneNumbersSp_PagingSpObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersValidators.GetPhoneNumbersSp_PagingSp)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbers.GetPhoneNumbersSp_PagingSp.onValidationError))
					PhoneNumbers.GetPhoneNumbersSp_PagingSp.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbers.Url, 
					Method : "GetPhoneNumbersSp_PagingSp", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : PhoneNumbers.GetPhoneNumbersSp_PagingSp.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbers.GetPhoneNumbersSp_PagingSp.onErrorReceived) ? PhoneNumbers.GetPhoneNumbersSp_PagingSp.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbers.Url, "GetPhoneNumbersSp_PagingSp", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, PhoneNumbers.GetPhoneNumbersSp_PagingSp.Serialize || {});
    },
	InsertPhoneNumber : function(PhoneNumber, PhoneType, IsInternal, CallerName, Country, Data, IsBlocked, IsSpam, Callback) {
        return PhoneNumbers.InsertPhoneNumberObject({ PhoneNumber : PhoneNumber,PhoneType : PhoneType,IsInternal : IsInternal,CallerName : CallerName,Country : Country,Data : Data,IsBlocked : IsBlocked,IsSpam : IsSpam}, Callback);
    },

	InsertPhoneNumberObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersValidators.InsertPhoneNumber)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbers.InsertPhoneNumber.onValidationError))
					PhoneNumbers.InsertPhoneNumber.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbers.Url, 
					Method : "InsertPhoneNumber", 
					Params : { PhoneNumber : oObject.PhoneNumber,PhoneType : oObject.PhoneType,IsInternal : oObject.IsInternal,CallerName : oObject.CallerName,Country : oObject.Country,Data : oObject.Data,IsBlocked : oObject.IsBlocked,IsSpam : oObject.IsSpam}, 
					Serialize : PhoneNumbers.InsertPhoneNumber.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbers.InsertPhoneNumber.onErrorReceived) ? PhoneNumbers.InsertPhoneNumber.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbers.Url, "InsertPhoneNumber", { PhoneNumber : oObject.PhoneNumber,PhoneType : oObject.PhoneType,IsInternal : oObject.IsInternal,CallerName : oObject.CallerName,Country : oObject.Country,Data : oObject.Data,IsBlocked : oObject.IsBlocked,IsSpam : oObject.IsSpam}, PhoneNumbers.InsertPhoneNumber.Serialize || {});
    },
	MarkPhoneNumberAsBlocked : function(PhoneNumberID, Callback) {
        return PhoneNumbers.MarkPhoneNumberAsBlockedObject({ PhoneNumberID : PhoneNumberID}, Callback);
    },

	MarkPhoneNumberAsBlockedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersValidators.MarkPhoneNumberAsBlocked)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbers.MarkPhoneNumberAsBlocked.onValidationError))
					PhoneNumbers.MarkPhoneNumberAsBlocked.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbers.Url, 
					Method : "MarkPhoneNumberAsBlocked", 
					Params : { PhoneNumberID : oObject.PhoneNumberID}, 
					Serialize : PhoneNumbers.MarkPhoneNumberAsBlocked.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbers.MarkPhoneNumberAsBlocked.onErrorReceived) ? PhoneNumbers.MarkPhoneNumberAsBlocked.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbers.Url, "MarkPhoneNumberAsBlocked", { PhoneNumberID : oObject.PhoneNumberID}, PhoneNumbers.MarkPhoneNumberAsBlocked.Serialize || {});
    },
	MarkPhoneNumberAsInternal : function(PhoneNumberID, Callback) {
        return PhoneNumbers.MarkPhoneNumberAsInternalObject({ PhoneNumberID : PhoneNumberID}, Callback);
    },

	MarkPhoneNumberAsInternalObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersValidators.MarkPhoneNumberAsInternal)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbers.MarkPhoneNumberAsInternal.onValidationError))
					PhoneNumbers.MarkPhoneNumberAsInternal.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbers.Url, 
					Method : "MarkPhoneNumberAsInternal", 
					Params : { PhoneNumberID : oObject.PhoneNumberID}, 
					Serialize : PhoneNumbers.MarkPhoneNumberAsInternal.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbers.MarkPhoneNumberAsInternal.onErrorReceived) ? PhoneNumbers.MarkPhoneNumberAsInternal.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbers.Url, "MarkPhoneNumberAsInternal", { PhoneNumberID : oObject.PhoneNumberID}, PhoneNumbers.MarkPhoneNumberAsInternal.Serialize || {});
    },
	MarkPhoneNumberAsNotBlocked : function(PhoneNumberID, Callback) {
        return PhoneNumbers.MarkPhoneNumberAsNotBlockedObject({ PhoneNumberID : PhoneNumberID}, Callback);
    },

	MarkPhoneNumberAsNotBlockedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersValidators.MarkPhoneNumberAsNotBlocked)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbers.MarkPhoneNumberAsNotBlocked.onValidationError))
					PhoneNumbers.MarkPhoneNumberAsNotBlocked.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbers.Url, 
					Method : "MarkPhoneNumberAsNotBlocked", 
					Params : { PhoneNumberID : oObject.PhoneNumberID}, 
					Serialize : PhoneNumbers.MarkPhoneNumberAsNotBlocked.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbers.MarkPhoneNumberAsNotBlocked.onErrorReceived) ? PhoneNumbers.MarkPhoneNumberAsNotBlocked.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbers.Url, "MarkPhoneNumberAsNotBlocked", { PhoneNumberID : oObject.PhoneNumberID}, PhoneNumbers.MarkPhoneNumberAsNotBlocked.Serialize || {});
    },
	MarkPhoneNumberAsNotInternal : function(PhoneNumberID, Callback) {
        return PhoneNumbers.MarkPhoneNumberAsNotInternalObject({ PhoneNumberID : PhoneNumberID}, Callback);
    },

	MarkPhoneNumberAsNotInternalObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersValidators.MarkPhoneNumberAsNotInternal)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbers.MarkPhoneNumberAsNotInternal.onValidationError))
					PhoneNumbers.MarkPhoneNumberAsNotInternal.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbers.Url, 
					Method : "MarkPhoneNumberAsNotInternal", 
					Params : { PhoneNumberID : oObject.PhoneNumberID}, 
					Serialize : PhoneNumbers.MarkPhoneNumberAsNotInternal.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbers.MarkPhoneNumberAsNotInternal.onErrorReceived) ? PhoneNumbers.MarkPhoneNumberAsNotInternal.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbers.Url, "MarkPhoneNumberAsNotInternal", { PhoneNumberID : oObject.PhoneNumberID}, PhoneNumbers.MarkPhoneNumberAsNotInternal.Serialize || {});
    },
	MarkPhoneNumberAsNotSpam : function(PhoneNumberID, Callback) {
        return PhoneNumbers.MarkPhoneNumberAsNotSpamObject({ PhoneNumberID : PhoneNumberID}, Callback);
    },

	MarkPhoneNumberAsNotSpamObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersValidators.MarkPhoneNumberAsNotSpam)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbers.MarkPhoneNumberAsNotSpam.onValidationError))
					PhoneNumbers.MarkPhoneNumberAsNotSpam.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbers.Url, 
					Method : "MarkPhoneNumberAsNotSpam", 
					Params : { PhoneNumberID : oObject.PhoneNumberID}, 
					Serialize : PhoneNumbers.MarkPhoneNumberAsNotSpam.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbers.MarkPhoneNumberAsNotSpam.onErrorReceived) ? PhoneNumbers.MarkPhoneNumberAsNotSpam.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbers.Url, "MarkPhoneNumberAsNotSpam", { PhoneNumberID : oObject.PhoneNumberID}, PhoneNumbers.MarkPhoneNumberAsNotSpam.Serialize || {});
    },
	MarkPhoneNumberAsSpam : function(PhoneNumberID, Callback) {
        return PhoneNumbers.MarkPhoneNumberAsSpamObject({ PhoneNumberID : PhoneNumberID}, Callback);
    },

	MarkPhoneNumberAsSpamObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersValidators.MarkPhoneNumberAsSpam)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbers.MarkPhoneNumberAsSpam.onValidationError))
					PhoneNumbers.MarkPhoneNumberAsSpam.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbers.Url, 
					Method : "MarkPhoneNumberAsSpam", 
					Params : { PhoneNumberID : oObject.PhoneNumberID}, 
					Serialize : PhoneNumbers.MarkPhoneNumberAsSpam.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbers.MarkPhoneNumberAsSpam.onErrorReceived) ? PhoneNumbers.MarkPhoneNumberAsSpam.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbers.Url, "MarkPhoneNumberAsSpam", { PhoneNumberID : oObject.PhoneNumberID}, PhoneNumbers.MarkPhoneNumberAsSpam.Serialize || {});
    },
	RemovePhoneNumber : function(PhoneNumberID, Callback) {
        return PhoneNumbers.RemovePhoneNumberObject({ PhoneNumberID : PhoneNumberID}, Callback);
    },

	RemovePhoneNumberObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersValidators.RemovePhoneNumber)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbers.RemovePhoneNumber.onValidationError))
					PhoneNumbers.RemovePhoneNumber.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbers.Url, 
					Method : "RemovePhoneNumber", 
					Params : { PhoneNumberID : oObject.PhoneNumberID}, 
					Serialize : PhoneNumbers.RemovePhoneNumber.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbers.RemovePhoneNumber.onErrorReceived) ? PhoneNumbers.RemovePhoneNumber.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbers.Url, "RemovePhoneNumber", { PhoneNumberID : oObject.PhoneNumberID}, PhoneNumbers.RemovePhoneNumber.Serialize || {});
    },
	UpdatePhoneNumber : function(PhoneNumberID, PhoneNumber, PhoneType, IsInternal, CallerName, Country, Data, IsBlocked, IsSpam, Callback) {
        return PhoneNumbers.UpdatePhoneNumberObject({ PhoneNumberID : PhoneNumberID,PhoneNumber : PhoneNumber,PhoneType : PhoneType,IsInternal : IsInternal,CallerName : CallerName,Country : Country,Data : Data,IsBlocked : IsBlocked,IsSpam : IsSpam}, Callback);
    },

	UpdatePhoneNumberObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersValidators.UpdatePhoneNumber)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbers.UpdatePhoneNumber.onValidationError))
					PhoneNumbers.UpdatePhoneNumber.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbers.Url, 
					Method : "UpdatePhoneNumber", 
					Params : { PhoneNumberID : oObject.PhoneNumberID,PhoneNumber : oObject.PhoneNumber,PhoneType : oObject.PhoneType,IsInternal : oObject.IsInternal,CallerName : oObject.CallerName,Country : oObject.Country,Data : oObject.Data,IsBlocked : oObject.IsBlocked,IsSpam : oObject.IsSpam}, 
					Serialize : PhoneNumbers.UpdatePhoneNumber.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbers.UpdatePhoneNumber.onErrorReceived) ? PhoneNumbers.UpdatePhoneNumber.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbers.Url, "UpdatePhoneNumber", { PhoneNumberID : oObject.PhoneNumberID,PhoneNumber : oObject.PhoneNumber,PhoneType : oObject.PhoneType,IsInternal : oObject.IsInternal,CallerName : oObject.CallerName,Country : oObject.Country,Data : oObject.Data,IsBlocked : oObject.IsBlocked,IsSpam : oObject.IsSpam}, PhoneNumbers.UpdatePhoneNumber.Serialize || {});
    },
	UpdatePhoneNumberData : function(PhoneNumberID, Data, Callback) {
        return PhoneNumbers.UpdatePhoneNumberDataObject({ PhoneNumberID : PhoneNumberID,Data : Data}, Callback);
    },

	UpdatePhoneNumberDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersValidators.UpdatePhoneNumberData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbers.UpdatePhoneNumberData.onValidationError))
					PhoneNumbers.UpdatePhoneNumberData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbers.Url, 
					Method : "UpdatePhoneNumberData", 
					Params : { PhoneNumberID : oObject.PhoneNumberID,Data : oObject.Data}, 
					Serialize : PhoneNumbers.UpdatePhoneNumberData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbers.UpdatePhoneNumberData.onErrorReceived) ? PhoneNumbers.UpdatePhoneNumberData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbers.Url, "UpdatePhoneNumberData", { PhoneNumberID : oObject.PhoneNumberID,Data : oObject.Data}, PhoneNumbers.UpdatePhoneNumberData.Serialize || {});
    }
};

var PhoneNumbersValidators = {
	

	CopyPhoneNumber : {
			PhoneNumberID : PhoneNumbersValidatorsFields.PhoneNumberID	
	},

	GetLineType : {
			phone : PhoneNumbersValidatorsFields.phone	
	},

	GetPhoneNumber : {
			PhoneNumberID : PhoneNumbersValidatorsFields.PhoneNumberID	
	},

	GetPhoneNumberByPhoneNumber : {
			PhoneNumber : PhoneNumbersValidatorsFields.PhoneNumber	
	},

	GetPhoneNumberByVoiceAgent : {
			AgentName : PhoneNumbersValidatorsFields.AgentName	
	},

	GetPhoneNumberInfo : {
			phone : PhoneNumbersValidatorsFields.phone	
	},

	GetPhoneNumbers : {	
	},

	GetPhoneNumbersSp_PagingSp : {
			Search : PhoneNumbersValidatorsFields.Search,
			SortColumn : PhoneNumbersValidatorsFields.SortColumn,
			SortAscending : PhoneNumbersValidatorsFields.SortAscending,
			SkipRows : PhoneNumbersValidatorsFields.SkipRows,
			NumRows : PhoneNumbersValidatorsFields.NumRows	
	},

	InsertPhoneNumber : {
			PhoneNumber : PhoneNumbersValidatorsFields.PhoneNumber,
			PhoneType : PhoneNumbersValidatorsFields.PhoneType,
			IsInternal : PhoneNumbersValidatorsFields.IsInternal,
			CallerName : PhoneNumbersValidatorsFields.CallerName,
			Country : PhoneNumbersValidatorsFields.Country,
			Data : PhoneNumbersValidatorsFields.Data,
			IsBlocked : PhoneNumbersValidatorsFields.IsBlocked,
			IsSpam : PhoneNumbersValidatorsFields.IsSpam	
	},

	MarkPhoneNumberAsBlocked : {
			PhoneNumberID : PhoneNumbersValidatorsFields.PhoneNumberID	
	},

	MarkPhoneNumberAsInternal : {
			PhoneNumberID : PhoneNumbersValidatorsFields.PhoneNumberID	
	},

	MarkPhoneNumberAsNotBlocked : {
			PhoneNumberID : PhoneNumbersValidatorsFields.PhoneNumberID	
	},

	MarkPhoneNumberAsNotInternal : {
			PhoneNumberID : PhoneNumbersValidatorsFields.PhoneNumberID	
	},

	MarkPhoneNumberAsNotSpam : {
			PhoneNumberID : PhoneNumbersValidatorsFields.PhoneNumberID	
	},

	MarkPhoneNumberAsSpam : {
			PhoneNumberID : PhoneNumbersValidatorsFields.PhoneNumberID	
	},

	RemovePhoneNumber : {
			PhoneNumberID : PhoneNumbersValidatorsFields.PhoneNumberID	
	},

	UpdatePhoneNumber : {
			PhoneNumberID : PhoneNumbersValidatorsFields.PhoneNumberID,
			PhoneNumber : PhoneNumbersValidatorsFields.PhoneNumber,
			PhoneType : PhoneNumbersValidatorsFields.PhoneType,
			IsInternal : PhoneNumbersValidatorsFields.IsInternal,
			CallerName : PhoneNumbersValidatorsFields.CallerName,
			Country : PhoneNumbersValidatorsFields.Country,
			Data : PhoneNumbersValidatorsFields.Data,
			IsBlocked : PhoneNumbersValidatorsFields.IsBlocked,
			IsSpam : PhoneNumbersValidatorsFields.IsSpam	
	},

	UpdatePhoneNumberData : {
			PhoneNumberID : PhoneNumbersValidatorsFields.PhoneNumberID,
			Data : PhoneNumbersValidatorsFields.Data	
	}
};

    