
    	    	
var DomainsValidatorsFields = {
	
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		DomainID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Domain ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		DomainName : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Domain Name. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		NumRows : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid NumRows. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		Search : {Validators : [Validators.String], InvalidMessage: "Invalid Search. " +   ValidatorDescriptions.Length(1, 255) },
		SkipRows : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid SkipRows. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		SortAscending : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid SortAscending. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		SortColumn : {Validators : [Validators.String], InvalidMessage: "Invalid SortColumn. " +   ValidatorDescriptions.Length(1, 255) }	
}
			
var Domains = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.Domains.ashx"

	,
	CopyDomain : function(DomainID, Callback) {
        return Domains.CopyDomainObject({ DomainID : DomainID}, Callback);
    },

	CopyDomainObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsValidators.CopyDomain)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Domains.CopyDomain.onValidationError))
					Domains.CopyDomain.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Domains.Url, 
					Method : "CopyDomain", 
					Params : { DomainID : oObject.DomainID}, 
					Serialize : Domains.CopyDomain.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Domains.CopyDomain.onErrorReceived) ? Domains.CopyDomain.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Domains.Url, "CopyDomain", { DomainID : oObject.DomainID}, Domains.CopyDomain.Serialize || {});
    },
	GetDomain : function(DomainID, Callback) {
        return Domains.GetDomainObject({ DomainID : DomainID}, Callback);
    },

	GetDomainObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsValidators.GetDomain)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Domains.GetDomain.onValidationError))
					Domains.GetDomain.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Domains.Url, 
					Method : "GetDomain", 
					Params : { DomainID : oObject.DomainID}, 
					Serialize : Domains.GetDomain.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Domains.GetDomain.onErrorReceived) ? Domains.GetDomain.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Domains.Url, "GetDomain", { DomainID : oObject.DomainID}, Domains.GetDomain.Serialize || {});
    },
	GetDomainByDomainName : function(DomainName, Callback) {
        return Domains.GetDomainByDomainNameObject({ DomainName : DomainName}, Callback);
    },

	GetDomainByDomainNameObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsValidators.GetDomainByDomainName)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Domains.GetDomainByDomainName.onValidationError))
					Domains.GetDomainByDomainName.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Domains.Url, 
					Method : "GetDomainByDomainName", 
					Params : { DomainName : oObject.DomainName}, 
					Serialize : Domains.GetDomainByDomainName.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Domains.GetDomainByDomainName.onErrorReceived) ? Domains.GetDomainByDomainName.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Domains.Url, "GetDomainByDomainName", { DomainName : oObject.DomainName}, Domains.GetDomainByDomainName.Serialize || {});
    },
	GetDomains : function(Callback) {
        return Domains.GetDomainsObject({ }, Callback);
    },

	GetDomainsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsValidators.GetDomains)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Domains.GetDomains.onValidationError))
					Domains.GetDomains.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Domains.Url, 
					Method : "GetDomains", 
					Params : { }, 
					Serialize : Domains.GetDomains.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Domains.GetDomains.onErrorReceived) ? Domains.GetDomains.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Domains.Url, "GetDomains", { }, Domains.GetDomains.Serialize || {});
    },
	GetDomainsSp_PagingSp : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return Domains.GetDomainsSp_PagingSpObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetDomainsSp_PagingSpObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsValidators.GetDomainsSp_PagingSp)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Domains.GetDomainsSp_PagingSp.onValidationError))
					Domains.GetDomainsSp_PagingSp.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Domains.Url, 
					Method : "GetDomainsSp_PagingSp", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : Domains.GetDomainsSp_PagingSp.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Domains.GetDomainsSp_PagingSp.onErrorReceived) ? Domains.GetDomainsSp_PagingSp.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Domains.Url, "GetDomainsSp_PagingSp", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, Domains.GetDomainsSp_PagingSp.Serialize || {});
    },
	GetOrInsertDomain : function(DomainName, Callback) {
        return Domains.GetOrInsertDomainObject({ DomainName : DomainName}, Callback);
    },

	GetOrInsertDomainObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsValidators.GetOrInsertDomain)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Domains.GetOrInsertDomain.onValidationError))
					Domains.GetOrInsertDomain.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Domains.Url, 
					Method : "GetOrInsertDomain", 
					Params : { DomainName : oObject.DomainName}, 
					Serialize : Domains.GetOrInsertDomain.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Domains.GetOrInsertDomain.onErrorReceived) ? Domains.GetOrInsertDomain.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Domains.Url, "GetOrInsertDomain", { DomainName : oObject.DomainName}, Domains.GetOrInsertDomain.Serialize || {});
    },
	InsertDomain : function(DomainName, Data, Callback) {
        return Domains.InsertDomainObject({ DomainName : DomainName,Data : Data}, Callback);
    },

	InsertDomainObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsValidators.InsertDomain)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Domains.InsertDomain.onValidationError))
					Domains.InsertDomain.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Domains.Url, 
					Method : "InsertDomain", 
					Params : { DomainName : oObject.DomainName,Data : oObject.Data}, 
					Serialize : Domains.InsertDomain.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Domains.InsertDomain.onErrorReceived) ? Domains.InsertDomain.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Domains.Url, "InsertDomain", { DomainName : oObject.DomainName,Data : oObject.Data}, Domains.InsertDomain.Serialize || {});
    },
	RemoveDomain : function(DomainID, Callback) {
        return Domains.RemoveDomainObject({ DomainID : DomainID}, Callback);
    },

	RemoveDomainObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsValidators.RemoveDomain)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Domains.RemoveDomain.onValidationError))
					Domains.RemoveDomain.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Domains.Url, 
					Method : "RemoveDomain", 
					Params : { DomainID : oObject.DomainID}, 
					Serialize : Domains.RemoveDomain.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Domains.RemoveDomain.onErrorReceived) ? Domains.RemoveDomain.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Domains.Url, "RemoveDomain", { DomainID : oObject.DomainID}, Domains.RemoveDomain.Serialize || {});
    },
	UpdateDomain : function(DomainID, DomainName, Data, Callback) {
        return Domains.UpdateDomainObject({ DomainID : DomainID,DomainName : DomainName,Data : Data}, Callback);
    },

	UpdateDomainObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsValidators.UpdateDomain)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Domains.UpdateDomain.onValidationError))
					Domains.UpdateDomain.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Domains.Url, 
					Method : "UpdateDomain", 
					Params : { DomainID : oObject.DomainID,DomainName : oObject.DomainName,Data : oObject.Data}, 
					Serialize : Domains.UpdateDomain.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Domains.UpdateDomain.onErrorReceived) ? Domains.UpdateDomain.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Domains.Url, "UpdateDomain", { DomainID : oObject.DomainID,DomainName : oObject.DomainName,Data : oObject.Data}, Domains.UpdateDomain.Serialize || {});
    },
	UpdateDomainData : function(DomainID, Data, Callback) {
        return Domains.UpdateDomainDataObject({ DomainID : DomainID,Data : Data}, Callback);
    },

	UpdateDomainDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsValidators.UpdateDomainData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Domains.UpdateDomainData.onValidationError))
					Domains.UpdateDomainData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Domains.Url, 
					Method : "UpdateDomainData", 
					Params : { DomainID : oObject.DomainID,Data : oObject.Data}, 
					Serialize : Domains.UpdateDomainData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Domains.UpdateDomainData.onErrorReceived) ? Domains.UpdateDomainData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Domains.Url, "UpdateDomainData", { DomainID : oObject.DomainID,Data : oObject.Data}, Domains.UpdateDomainData.Serialize || {});
    }
};

var DomainsValidators = {
	

	CopyDomain : {
			DomainID : DomainsValidatorsFields.DomainID	
	},

	GetDomain : {
			DomainID : DomainsValidatorsFields.DomainID	
	},

	GetDomainByDomainName : {
			DomainName : DomainsValidatorsFields.DomainName	
	},

	GetDomains : {	
	},

	GetDomainsSp_PagingSp : {
			Search : DomainsValidatorsFields.Search,
			SortColumn : DomainsValidatorsFields.SortColumn,
			SortAscending : DomainsValidatorsFields.SortAscending,
			SkipRows : DomainsValidatorsFields.SkipRows,
			NumRows : DomainsValidatorsFields.NumRows	
	},

	GetOrInsertDomain : {
			DomainName : DomainsValidatorsFields.DomainName	
	},

	InsertDomain : {
			DomainName : DomainsValidatorsFields.DomainName,
			Data : DomainsValidatorsFields.Data	
	},

	RemoveDomain : {
			DomainID : DomainsValidatorsFields.DomainID	
	},

	UpdateDomain : {
			DomainID : DomainsValidatorsFields.DomainID,
			DomainName : DomainsValidatorsFields.DomainName,
			Data : DomainsValidatorsFields.Data	
	},

	UpdateDomainData : {
			DomainID : DomainsValidatorsFields.DomainID,
			Data : DomainsValidatorsFields.Data	
	}
};

    