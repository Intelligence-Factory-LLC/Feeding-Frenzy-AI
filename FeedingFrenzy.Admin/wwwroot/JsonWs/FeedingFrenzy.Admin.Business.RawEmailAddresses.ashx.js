
    	    	
var RawEmailAddressesValidatorsFields = {
	
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		DomainID : {Validators : [Validators.ID], InvalidMessage: "Invalid Domain ID. " +   ValidatorDescriptions.ID() },
		EmailAddressID : {Validators : [Validators.ID], InvalidMessage: "Invalid Email Address ID. " +   ValidatorDescriptions.ID() },
		IsFrom : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Is From. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		NumRows : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid NumRows. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		RawEmailAddressID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Raw Email Address ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		RawEmailID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Raw Email ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		Search : {Validators : [Validators.String], InvalidMessage: "Invalid Search. " +   ValidatorDescriptions.Length(1, 255) },
		SkipRows : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid SkipRows. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		SortAscending : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid SortAscending. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		SortColumn : {Validators : [Validators.String], InvalidMessage: "Invalid SortColumn. " +   ValidatorDescriptions.Length(1, 255) }	
}
			
var RawEmailAddresses = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.RawEmailAddresses.ashx"

	,
	CopyRawEmailAddress : function(RawEmailAddressID, Callback) {
        return RawEmailAddresses.CopyRawEmailAddressObject({ RawEmailAddressID : RawEmailAddressID}, Callback);
    },

	CopyRawEmailAddressObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesValidators.CopyRawEmailAddress)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddresses.CopyRawEmailAddress.onValidationError))
					RawEmailAddresses.CopyRawEmailAddress.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddresses.Url, 
					Method : "CopyRawEmailAddress", 
					Params : { RawEmailAddressID : oObject.RawEmailAddressID}, 
					Serialize : RawEmailAddresses.CopyRawEmailAddress.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddresses.CopyRawEmailAddress.onErrorReceived) ? RawEmailAddresses.CopyRawEmailAddress.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddresses.Url, "CopyRawEmailAddress", { RawEmailAddressID : oObject.RawEmailAddressID}, RawEmailAddresses.CopyRawEmailAddress.Serialize || {});
    },
	GetRawEmailAddress : function(RawEmailAddressID, Callback) {
        return RawEmailAddresses.GetRawEmailAddressObject({ RawEmailAddressID : RawEmailAddressID}, Callback);
    },

	GetRawEmailAddressObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesValidators.GetRawEmailAddress)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddresses.GetRawEmailAddress.onValidationError))
					RawEmailAddresses.GetRawEmailAddress.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddresses.Url, 
					Method : "GetRawEmailAddress", 
					Params : { RawEmailAddressID : oObject.RawEmailAddressID}, 
					Serialize : RawEmailAddresses.GetRawEmailAddress.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddresses.GetRawEmailAddress.onErrorReceived) ? RawEmailAddresses.GetRawEmailAddress.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddresses.Url, "GetRawEmailAddress", { RawEmailAddressID : oObject.RawEmailAddressID}, RawEmailAddresses.GetRawEmailAddress.Serialize || {});
    },
	GetRawEmailAddressByDomainIDEmailAddressIDRawEmailID : function(DomainID, EmailAddressID, RawEmailID, Callback) {
        return RawEmailAddresses.GetRawEmailAddressByDomainIDEmailAddressIDRawEmailIDObject({ DomainID : DomainID,EmailAddressID : EmailAddressID,RawEmailID : RawEmailID}, Callback);
    },

	GetRawEmailAddressByDomainIDEmailAddressIDRawEmailIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesValidators.GetRawEmailAddressByDomainIDEmailAddressIDRawEmailID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddresses.GetRawEmailAddressByDomainIDEmailAddressIDRawEmailID.onValidationError))
					RawEmailAddresses.GetRawEmailAddressByDomainIDEmailAddressIDRawEmailID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddresses.Url, 
					Method : "GetRawEmailAddressByDomainIDEmailAddressIDRawEmailID", 
					Params : { DomainID : oObject.DomainID,EmailAddressID : oObject.EmailAddressID,RawEmailID : oObject.RawEmailID}, 
					Serialize : RawEmailAddresses.GetRawEmailAddressByDomainIDEmailAddressIDRawEmailID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddresses.GetRawEmailAddressByDomainIDEmailAddressIDRawEmailID.onErrorReceived) ? RawEmailAddresses.GetRawEmailAddressByDomainIDEmailAddressIDRawEmailID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddresses.Url, "GetRawEmailAddressByDomainIDEmailAddressIDRawEmailID", { DomainID : oObject.DomainID,EmailAddressID : oObject.EmailAddressID,RawEmailID : oObject.RawEmailID}, RawEmailAddresses.GetRawEmailAddressByDomainIDEmailAddressIDRawEmailID.Serialize || {});
    },
	GetRawEmailAddresses : function(Callback) {
        return RawEmailAddresses.GetRawEmailAddressesObject({ }, Callback);
    },

	GetRawEmailAddressesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesValidators.GetRawEmailAddresses)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddresses.GetRawEmailAddresses.onValidationError))
					RawEmailAddresses.GetRawEmailAddresses.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddresses.Url, 
					Method : "GetRawEmailAddresses", 
					Params : { }, 
					Serialize : RawEmailAddresses.GetRawEmailAddresses.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddresses.GetRawEmailAddresses.onErrorReceived) ? RawEmailAddresses.GetRawEmailAddresses.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddresses.Url, "GetRawEmailAddresses", { }, RawEmailAddresses.GetRawEmailAddresses.Serialize || {});
    },
	GetRawEmailAddressesByDomainID : function(DomainID, Callback) {
        return RawEmailAddresses.GetRawEmailAddressesByDomainIDObject({ DomainID : DomainID}, Callback);
    },

	GetRawEmailAddressesByDomainIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesValidators.GetRawEmailAddressesByDomainID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddresses.GetRawEmailAddressesByDomainID.onValidationError))
					RawEmailAddresses.GetRawEmailAddressesByDomainID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddresses.Url, 
					Method : "GetRawEmailAddressesByDomainID", 
					Params : { DomainID : oObject.DomainID}, 
					Serialize : RawEmailAddresses.GetRawEmailAddressesByDomainID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddresses.GetRawEmailAddressesByDomainID.onErrorReceived) ? RawEmailAddresses.GetRawEmailAddressesByDomainID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddresses.Url, "GetRawEmailAddressesByDomainID", { DomainID : oObject.DomainID}, RawEmailAddresses.GetRawEmailAddressesByDomainID.Serialize || {});
    },
	GetRawEmailAddressesByDomainIDSp_PagingSp : function(DomainID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RawEmailAddresses.GetRawEmailAddressesByDomainIDSp_PagingSpObject({ DomainID : DomainID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetRawEmailAddressesByDomainIDSp_PagingSpObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesValidators.GetRawEmailAddressesByDomainIDSp_PagingSp)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddresses.GetRawEmailAddressesByDomainIDSp_PagingSp.onValidationError))
					RawEmailAddresses.GetRawEmailAddressesByDomainIDSp_PagingSp.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddresses.Url, 
					Method : "GetRawEmailAddressesByDomainIDSp_PagingSp", 
					Params : { DomainID : oObject.DomainID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RawEmailAddresses.GetRawEmailAddressesByDomainIDSp_PagingSp.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddresses.GetRawEmailAddressesByDomainIDSp_PagingSp.onErrorReceived) ? RawEmailAddresses.GetRawEmailAddressesByDomainIDSp_PagingSp.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddresses.Url, "GetRawEmailAddressesByDomainIDSp_PagingSp", { DomainID : oObject.DomainID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RawEmailAddresses.GetRawEmailAddressesByDomainIDSp_PagingSp.Serialize || {});
    },
	GetRawEmailAddressesByEmailAddressID : function(EmailAddressID, Callback) {
        return RawEmailAddresses.GetRawEmailAddressesByEmailAddressIDObject({ EmailAddressID : EmailAddressID}, Callback);
    },

	GetRawEmailAddressesByEmailAddressIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesValidators.GetRawEmailAddressesByEmailAddressID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddresses.GetRawEmailAddressesByEmailAddressID.onValidationError))
					RawEmailAddresses.GetRawEmailAddressesByEmailAddressID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddresses.Url, 
					Method : "GetRawEmailAddressesByEmailAddressID", 
					Params : { EmailAddressID : oObject.EmailAddressID}, 
					Serialize : RawEmailAddresses.GetRawEmailAddressesByEmailAddressID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddresses.GetRawEmailAddressesByEmailAddressID.onErrorReceived) ? RawEmailAddresses.GetRawEmailAddressesByEmailAddressID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddresses.Url, "GetRawEmailAddressesByEmailAddressID", { EmailAddressID : oObject.EmailAddressID}, RawEmailAddresses.GetRawEmailAddressesByEmailAddressID.Serialize || {});
    },
	GetRawEmailAddressesByEmailAddressIDSp_PagingSp : function(EmailAddressID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RawEmailAddresses.GetRawEmailAddressesByEmailAddressIDSp_PagingSpObject({ EmailAddressID : EmailAddressID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetRawEmailAddressesByEmailAddressIDSp_PagingSpObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesValidators.GetRawEmailAddressesByEmailAddressIDSp_PagingSp)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddresses.GetRawEmailAddressesByEmailAddressIDSp_PagingSp.onValidationError))
					RawEmailAddresses.GetRawEmailAddressesByEmailAddressIDSp_PagingSp.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddresses.Url, 
					Method : "GetRawEmailAddressesByEmailAddressIDSp_PagingSp", 
					Params : { EmailAddressID : oObject.EmailAddressID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RawEmailAddresses.GetRawEmailAddressesByEmailAddressIDSp_PagingSp.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddresses.GetRawEmailAddressesByEmailAddressIDSp_PagingSp.onErrorReceived) ? RawEmailAddresses.GetRawEmailAddressesByEmailAddressIDSp_PagingSp.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddresses.Url, "GetRawEmailAddressesByEmailAddressIDSp_PagingSp", { EmailAddressID : oObject.EmailAddressID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RawEmailAddresses.GetRawEmailAddressesByEmailAddressIDSp_PagingSp.Serialize || {});
    },
	GetRawEmailAddressesByRawEmailID : function(RawEmailID, Callback) {
        return RawEmailAddresses.GetRawEmailAddressesByRawEmailIDObject({ RawEmailID : RawEmailID}, Callback);
    },

	GetRawEmailAddressesByRawEmailIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesValidators.GetRawEmailAddressesByRawEmailID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddresses.GetRawEmailAddressesByRawEmailID.onValidationError))
					RawEmailAddresses.GetRawEmailAddressesByRawEmailID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddresses.Url, 
					Method : "GetRawEmailAddressesByRawEmailID", 
					Params : { RawEmailID : oObject.RawEmailID}, 
					Serialize : RawEmailAddresses.GetRawEmailAddressesByRawEmailID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddresses.GetRawEmailAddressesByRawEmailID.onErrorReceived) ? RawEmailAddresses.GetRawEmailAddressesByRawEmailID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddresses.Url, "GetRawEmailAddressesByRawEmailID", { RawEmailID : oObject.RawEmailID}, RawEmailAddresses.GetRawEmailAddressesByRawEmailID.Serialize || {});
    },
	GetRawEmailAddressesByRawEmailIDSp_PagingSp : function(RawEmailID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RawEmailAddresses.GetRawEmailAddressesByRawEmailIDSp_PagingSpObject({ RawEmailID : RawEmailID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetRawEmailAddressesByRawEmailIDSp_PagingSpObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesValidators.GetRawEmailAddressesByRawEmailIDSp_PagingSp)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddresses.GetRawEmailAddressesByRawEmailIDSp_PagingSp.onValidationError))
					RawEmailAddresses.GetRawEmailAddressesByRawEmailIDSp_PagingSp.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddresses.Url, 
					Method : "GetRawEmailAddressesByRawEmailIDSp_PagingSp", 
					Params : { RawEmailID : oObject.RawEmailID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RawEmailAddresses.GetRawEmailAddressesByRawEmailIDSp_PagingSp.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddresses.GetRawEmailAddressesByRawEmailIDSp_PagingSp.onErrorReceived) ? RawEmailAddresses.GetRawEmailAddressesByRawEmailIDSp_PagingSp.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddresses.Url, "GetRawEmailAddressesByRawEmailIDSp_PagingSp", { RawEmailID : oObject.RawEmailID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RawEmailAddresses.GetRawEmailAddressesByRawEmailIDSp_PagingSp.Serialize || {});
    },
	GetRawEmailAddressesSp_PagingSp : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RawEmailAddresses.GetRawEmailAddressesSp_PagingSpObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetRawEmailAddressesSp_PagingSpObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesValidators.GetRawEmailAddressesSp_PagingSp)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddresses.GetRawEmailAddressesSp_PagingSp.onValidationError))
					RawEmailAddresses.GetRawEmailAddressesSp_PagingSp.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddresses.Url, 
					Method : "GetRawEmailAddressesSp_PagingSp", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RawEmailAddresses.GetRawEmailAddressesSp_PagingSp.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddresses.GetRawEmailAddressesSp_PagingSp.onErrorReceived) ? RawEmailAddresses.GetRawEmailAddressesSp_PagingSp.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddresses.Url, "GetRawEmailAddressesSp_PagingSp", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RawEmailAddresses.GetRawEmailAddressesSp_PagingSp.Serialize || {});
    },
	InsertRawEmailAddress : function(RawEmailID, IsFrom, Data, EmailAddressID, DomainID, Callback) {
        return RawEmailAddresses.InsertRawEmailAddressObject({ RawEmailID : RawEmailID,IsFrom : IsFrom,Data : Data,EmailAddressID : EmailAddressID,DomainID : DomainID}, Callback);
    },

	InsertRawEmailAddressObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesValidators.InsertRawEmailAddress)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddresses.InsertRawEmailAddress.onValidationError))
					RawEmailAddresses.InsertRawEmailAddress.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddresses.Url, 
					Method : "InsertRawEmailAddress", 
					Params : { RawEmailID : oObject.RawEmailID,IsFrom : oObject.IsFrom,Data : oObject.Data,EmailAddressID : oObject.EmailAddressID,DomainID : oObject.DomainID}, 
					Serialize : RawEmailAddresses.InsertRawEmailAddress.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddresses.InsertRawEmailAddress.onErrorReceived) ? RawEmailAddresses.InsertRawEmailAddress.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddresses.Url, "InsertRawEmailAddress", { RawEmailID : oObject.RawEmailID,IsFrom : oObject.IsFrom,Data : oObject.Data,EmailAddressID : oObject.EmailAddressID,DomainID : oObject.DomainID}, RawEmailAddresses.InsertRawEmailAddress.Serialize || {});
    },
	MarkRawEmailAddressAsFrom : function(RawEmailAddressID, Callback) {
        return RawEmailAddresses.MarkRawEmailAddressAsFromObject({ RawEmailAddressID : RawEmailAddressID}, Callback);
    },

	MarkRawEmailAddressAsFromObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesValidators.MarkRawEmailAddressAsFrom)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddresses.MarkRawEmailAddressAsFrom.onValidationError))
					RawEmailAddresses.MarkRawEmailAddressAsFrom.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddresses.Url, 
					Method : "MarkRawEmailAddressAsFrom", 
					Params : { RawEmailAddressID : oObject.RawEmailAddressID}, 
					Serialize : RawEmailAddresses.MarkRawEmailAddressAsFrom.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddresses.MarkRawEmailAddressAsFrom.onErrorReceived) ? RawEmailAddresses.MarkRawEmailAddressAsFrom.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddresses.Url, "MarkRawEmailAddressAsFrom", { RawEmailAddressID : oObject.RawEmailAddressID}, RawEmailAddresses.MarkRawEmailAddressAsFrom.Serialize || {});
    },
	MarkRawEmailAddressAsNotFrom : function(RawEmailAddressID, Callback) {
        return RawEmailAddresses.MarkRawEmailAddressAsNotFromObject({ RawEmailAddressID : RawEmailAddressID}, Callback);
    },

	MarkRawEmailAddressAsNotFromObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesValidators.MarkRawEmailAddressAsNotFrom)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddresses.MarkRawEmailAddressAsNotFrom.onValidationError))
					RawEmailAddresses.MarkRawEmailAddressAsNotFrom.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddresses.Url, 
					Method : "MarkRawEmailAddressAsNotFrom", 
					Params : { RawEmailAddressID : oObject.RawEmailAddressID}, 
					Serialize : RawEmailAddresses.MarkRawEmailAddressAsNotFrom.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddresses.MarkRawEmailAddressAsNotFrom.onErrorReceived) ? RawEmailAddresses.MarkRawEmailAddressAsNotFrom.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddresses.Url, "MarkRawEmailAddressAsNotFrom", { RawEmailAddressID : oObject.RawEmailAddressID}, RawEmailAddresses.MarkRawEmailAddressAsNotFrom.Serialize || {});
    },
	RemoveRawEmailAddress : function(RawEmailAddressID, Callback) {
        return RawEmailAddresses.RemoveRawEmailAddressObject({ RawEmailAddressID : RawEmailAddressID}, Callback);
    },

	RemoveRawEmailAddressObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesValidators.RemoveRawEmailAddress)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddresses.RemoveRawEmailAddress.onValidationError))
					RawEmailAddresses.RemoveRawEmailAddress.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddresses.Url, 
					Method : "RemoveRawEmailAddress", 
					Params : { RawEmailAddressID : oObject.RawEmailAddressID}, 
					Serialize : RawEmailAddresses.RemoveRawEmailAddress.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddresses.RemoveRawEmailAddress.onErrorReceived) ? RawEmailAddresses.RemoveRawEmailAddress.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddresses.Url, "RemoveRawEmailAddress", { RawEmailAddressID : oObject.RawEmailAddressID}, RawEmailAddresses.RemoveRawEmailAddress.Serialize || {});
    },
	UpdateRawEmailAddress : function(RawEmailAddressID, RawEmailID, IsFrom, Data, EmailAddressID, DomainID, Callback) {
        return RawEmailAddresses.UpdateRawEmailAddressObject({ RawEmailAddressID : RawEmailAddressID,RawEmailID : RawEmailID,IsFrom : IsFrom,Data : Data,EmailAddressID : EmailAddressID,DomainID : DomainID}, Callback);
    },

	UpdateRawEmailAddressObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesValidators.UpdateRawEmailAddress)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddresses.UpdateRawEmailAddress.onValidationError))
					RawEmailAddresses.UpdateRawEmailAddress.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddresses.Url, 
					Method : "UpdateRawEmailAddress", 
					Params : { RawEmailAddressID : oObject.RawEmailAddressID,RawEmailID : oObject.RawEmailID,IsFrom : oObject.IsFrom,Data : oObject.Data,EmailAddressID : oObject.EmailAddressID,DomainID : oObject.DomainID}, 
					Serialize : RawEmailAddresses.UpdateRawEmailAddress.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddresses.UpdateRawEmailAddress.onErrorReceived) ? RawEmailAddresses.UpdateRawEmailAddress.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddresses.Url, "UpdateRawEmailAddress", { RawEmailAddressID : oObject.RawEmailAddressID,RawEmailID : oObject.RawEmailID,IsFrom : oObject.IsFrom,Data : oObject.Data,EmailAddressID : oObject.EmailAddressID,DomainID : oObject.DomainID}, RawEmailAddresses.UpdateRawEmailAddress.Serialize || {});
    },
	UpdateRawEmailAddressData : function(RawEmailAddressID, Data, Callback) {
        return RawEmailAddresses.UpdateRawEmailAddressDataObject({ RawEmailAddressID : RawEmailAddressID,Data : Data}, Callback);
    },

	UpdateRawEmailAddressDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesValidators.UpdateRawEmailAddressData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddresses.UpdateRawEmailAddressData.onValidationError))
					RawEmailAddresses.UpdateRawEmailAddressData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddresses.Url, 
					Method : "UpdateRawEmailAddressData", 
					Params : { RawEmailAddressID : oObject.RawEmailAddressID,Data : oObject.Data}, 
					Serialize : RawEmailAddresses.UpdateRawEmailAddressData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddresses.UpdateRawEmailAddressData.onErrorReceived) ? RawEmailAddresses.UpdateRawEmailAddressData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddresses.Url, "UpdateRawEmailAddressData", { RawEmailAddressID : oObject.RawEmailAddressID,Data : oObject.Data}, RawEmailAddresses.UpdateRawEmailAddressData.Serialize || {});
    }
};

var RawEmailAddressesValidators = {
	

	CopyRawEmailAddress : {
			RawEmailAddressID : RawEmailAddressesValidatorsFields.RawEmailAddressID	
	},

	GetRawEmailAddress : {
			RawEmailAddressID : RawEmailAddressesValidatorsFields.RawEmailAddressID	
	},

	GetRawEmailAddressByDomainIDEmailAddressIDRawEmailID : {
			DomainID : RawEmailAddressesValidatorsFields.DomainID,
			EmailAddressID : RawEmailAddressesValidatorsFields.EmailAddressID,
			RawEmailID : RawEmailAddressesValidatorsFields.RawEmailID	
	},

	GetRawEmailAddresses : {	
	},

	GetRawEmailAddressesByDomainID : {
			DomainID : RawEmailAddressesValidatorsFields.DomainID	
	},

	GetRawEmailAddressesByDomainIDSp_PagingSp : {
			DomainID : RawEmailAddressesValidatorsFields.DomainID,
			Search : RawEmailAddressesValidatorsFields.Search,
			SortColumn : RawEmailAddressesValidatorsFields.SortColumn,
			SortAscending : RawEmailAddressesValidatorsFields.SortAscending,
			SkipRows : RawEmailAddressesValidatorsFields.SkipRows,
			NumRows : RawEmailAddressesValidatorsFields.NumRows	
	},

	GetRawEmailAddressesByEmailAddressID : {
			EmailAddressID : RawEmailAddressesValidatorsFields.EmailAddressID	
	},

	GetRawEmailAddressesByEmailAddressIDSp_PagingSp : {
			EmailAddressID : RawEmailAddressesValidatorsFields.EmailAddressID,
			Search : RawEmailAddressesValidatorsFields.Search,
			SortColumn : RawEmailAddressesValidatorsFields.SortColumn,
			SortAscending : RawEmailAddressesValidatorsFields.SortAscending,
			SkipRows : RawEmailAddressesValidatorsFields.SkipRows,
			NumRows : RawEmailAddressesValidatorsFields.NumRows	
	},

	GetRawEmailAddressesByRawEmailID : {
			RawEmailID : RawEmailAddressesValidatorsFields.RawEmailID	
	},

	GetRawEmailAddressesByRawEmailIDSp_PagingSp : {
			RawEmailID : RawEmailAddressesValidatorsFields.RawEmailID,
			Search : RawEmailAddressesValidatorsFields.Search,
			SortColumn : RawEmailAddressesValidatorsFields.SortColumn,
			SortAscending : RawEmailAddressesValidatorsFields.SortAscending,
			SkipRows : RawEmailAddressesValidatorsFields.SkipRows,
			NumRows : RawEmailAddressesValidatorsFields.NumRows	
	},

	GetRawEmailAddressesSp_PagingSp : {
			Search : RawEmailAddressesValidatorsFields.Search,
			SortColumn : RawEmailAddressesValidatorsFields.SortColumn,
			SortAscending : RawEmailAddressesValidatorsFields.SortAscending,
			SkipRows : RawEmailAddressesValidatorsFields.SkipRows,
			NumRows : RawEmailAddressesValidatorsFields.NumRows	
	},

	InsertRawEmailAddress : {
			RawEmailID : RawEmailAddressesValidatorsFields.RawEmailID,
			IsFrom : RawEmailAddressesValidatorsFields.IsFrom,
			Data : RawEmailAddressesValidatorsFields.Data,
			EmailAddressID : RawEmailAddressesValidatorsFields.EmailAddressID,
			DomainID : RawEmailAddressesValidatorsFields.DomainID	
	},

	MarkRawEmailAddressAsFrom : {
			RawEmailAddressID : RawEmailAddressesValidatorsFields.RawEmailAddressID	
	},

	MarkRawEmailAddressAsNotFrom : {
			RawEmailAddressID : RawEmailAddressesValidatorsFields.RawEmailAddressID	
	},

	RemoveRawEmailAddress : {
			RawEmailAddressID : RawEmailAddressesValidatorsFields.RawEmailAddressID	
	},

	UpdateRawEmailAddress : {
			RawEmailAddressID : RawEmailAddressesValidatorsFields.RawEmailAddressID,
			RawEmailID : RawEmailAddressesValidatorsFields.RawEmailID,
			IsFrom : RawEmailAddressesValidatorsFields.IsFrom,
			Data : RawEmailAddressesValidatorsFields.Data,
			EmailAddressID : RawEmailAddressesValidatorsFields.EmailAddressID,
			DomainID : RawEmailAddressesValidatorsFields.DomainID	
	},

	UpdateRawEmailAddressData : {
			RawEmailAddressID : RawEmailAddressesValidatorsFields.RawEmailAddressID,
			Data : RawEmailAddressesValidatorsFields.Data	
	}
};

    