

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["DomainsAdminValidatorsFields"])) {
	var DomainsAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(DomainsAdminValidatorsFields.DomainID)) {
	DomainsAdminValidatorsFields.DomainID = {Validators : [Validators.Text], InvalidMessage: "Invalid DomainID"};
}
if (!ObjectUtil.HasValue(DomainsAdminValidatorsFields.Domains)) {
	DomainsAdminValidatorsFields.Domains = {Validators : [Validators.Text], InvalidMessage: "Invalid Domains"};
}
if (!ObjectUtil.HasValue(DomainsAdminValidatorsFields.FieldName)) {
	DomainsAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(DomainsAdminValidatorsFields.Name)) {
	DomainsAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(DomainsAdminValidatorsFields.NumRows)) {
	DomainsAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(DomainsAdminValidatorsFields.PreOptions)) {
	DomainsAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(DomainsAdminValidatorsFields.Search)) {
	DomainsAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(DomainsAdminValidatorsFields.SkipRows)) {
	DomainsAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(DomainsAdminValidatorsFields.SortAscending)) {
	DomainsAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(DomainsAdminValidatorsFields.SortColumn)) {
	DomainsAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(DomainsAdminValidatorsFields.Value)) {
	DomainsAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var DomainsAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.DomainsAdmin.ashx"

	,
	GetDetails : function(DomainID, Callback) {
        return DomainsAdmin.GetDetailsObject({ DomainID : DomainID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(DomainsAdmin.GetDetails.onValidationError))
					DomainsAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: DomainsAdmin.Url, 
					Method : "GetDetails", 
					Params : { DomainID : oObject.DomainID}, 
					Serialize : DomainsAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(DomainsAdmin.GetDetails.onErrorReceived) ? DomainsAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(DomainsAdmin.Url, "GetDetails", { DomainID : oObject.DomainID}, DomainsAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return DomainsAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(DomainsAdmin.GetDropDown.onValidationError))
					DomainsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: DomainsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : DomainsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(DomainsAdmin.GetDropDown.onErrorReceived) ? DomainsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(DomainsAdmin.Url, "GetDropDown", { }, DomainsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return DomainsAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(DomainsAdmin.GetDropDown.onValidationError))
					DomainsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: DomainsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : DomainsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(DomainsAdmin.GetDropDown.onErrorReceived) ? DomainsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(DomainsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, DomainsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return DomainsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(DomainsAdmin.GetDropDown.onValidationError))
					DomainsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: DomainsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : DomainsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(DomainsAdmin.GetDropDown.onErrorReceived) ? DomainsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(DomainsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, DomainsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return DomainsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(DomainsAdmin.GetDropDown.onValidationError))
					DomainsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: DomainsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : DomainsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(DomainsAdmin.GetDropDown.onErrorReceived) ? DomainsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(DomainsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, DomainsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDownWithNull : function(Callback) {
        return DomainsAdmin.GetDropDownWithNullObject({ }, Callback);
    },

	GetDropDownWithNullObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsAdminValidators.GetDropDownWithNull)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(DomainsAdmin.GetDropDownWithNull.onValidationError))
					DomainsAdmin.GetDropDownWithNull.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: DomainsAdmin.Url, 
					Method : "GetDropDownWithNull", 
					Params : { }, 
					Serialize : DomainsAdmin.GetDropDownWithNull.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(DomainsAdmin.GetDropDownWithNull.onErrorReceived) ? DomainsAdmin.GetDropDownWithNull.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(DomainsAdmin.Url, "GetDropDownWithNull", { }, DomainsAdmin.GetDropDownWithNull.Serialize || {});
    },
	GetEdit : function(DomainID, Callback) {
        return DomainsAdmin.GetEditObject({ DomainID : DomainID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(DomainsAdmin.GetEdit.onValidationError))
					DomainsAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: DomainsAdmin.Url, 
					Method : "GetEdit", 
					Params : { DomainID : oObject.DomainID}, 
					Serialize : DomainsAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(DomainsAdmin.GetEdit.onErrorReceived) ? DomainsAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(DomainsAdmin.Url, "GetEdit", { DomainID : oObject.DomainID}, DomainsAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return DomainsAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(DomainsAdmin.GetGrid.onValidationError))
					DomainsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: DomainsAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : DomainsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(DomainsAdmin.GetGrid.onErrorReceived) ? DomainsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(DomainsAdmin.Url, "GetGrid", { }, DomainsAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return DomainsAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(DomainsAdmin.GetGrid.onValidationError))
					DomainsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: DomainsAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : DomainsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(DomainsAdmin.GetGrid.onErrorReceived) ? DomainsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(DomainsAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, DomainsAdmin.GetGrid.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return DomainsAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(DomainsAdmin.GetGridCount.onValidationError))
					DomainsAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: DomainsAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : DomainsAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(DomainsAdmin.GetGridCount.onErrorReceived) ? DomainsAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(DomainsAdmin.Url, "GetGridCount", { Search : oObject.Search}, DomainsAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return DomainsAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(DomainsAdmin.GetGridHtml.onValidationError))
					DomainsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: DomainsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : DomainsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(DomainsAdmin.GetGridHtml.onErrorReceived) ? DomainsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(DomainsAdmin.Url, "GetGridHtml", { }, DomainsAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return DomainsAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(DomainsAdmin.GetGridHtml.onValidationError))
					DomainsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: DomainsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : DomainsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(DomainsAdmin.GetGridHtml.onErrorReceived) ? DomainsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(DomainsAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, DomainsAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtmlInternal : function(Domains, Callback) {
        return DomainsAdmin.GetGridHtmlInternalObject({ Domains : Domains}, Callback);
    },

	GetGridHtmlInternalObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsAdminValidators.GetGridHtmlInternal)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(DomainsAdmin.GetGridHtmlInternal.onValidationError))
					DomainsAdmin.GetGridHtmlInternal.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: DomainsAdmin.Url, 
					Method : "GetGridHtmlInternal", 
					Params : { Domains : oObject.Domains}, 
					Serialize : DomainsAdmin.GetGridHtmlInternal.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(DomainsAdmin.GetGridHtmlInternal.onErrorReceived) ? DomainsAdmin.GetGridHtmlInternal.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(DomainsAdmin.Url, "GetGridHtmlInternal", { Domains : oObject.Domains}, DomainsAdmin.GetGridHtmlInternal.Serialize || {});
    },
	GetInsert : function(Callback) {
        return DomainsAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(DomainsAdmin.GetInsert.onValidationError))
					DomainsAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: DomainsAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : DomainsAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(DomainsAdmin.GetInsert.onErrorReceived) ? DomainsAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(DomainsAdmin.Url, "GetInsert", { }, DomainsAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return DomainsAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, DomainsAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(DomainsAdmin.Initialize.onValidationError))
					DomainsAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: DomainsAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : DomainsAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(DomainsAdmin.Initialize.onErrorReceived) ? DomainsAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(DomainsAdmin.Url, "Initialize", { }, DomainsAdmin.Initialize.Serialize || {});
    }
};

var DomainsAdminValidators = {
	

	GetDetails : {
			DomainID : DomainsAdminValidatorsFields.DomainID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : DomainsAdminValidatorsFields.Name,
			Value : DomainsAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : DomainsAdminValidatorsFields.Name,
			Value : DomainsAdminValidatorsFields.Value,
			FieldName : DomainsAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : DomainsAdminValidatorsFields.Name,
			Value : DomainsAdminValidatorsFields.Value,
			FieldName : DomainsAdminValidatorsFields.FieldName,
			PreOptions : DomainsAdminValidatorsFields.PreOptions	
	},

	GetDropDownWithNull : {	
	},

	GetEdit : {
			DomainID : DomainsAdminValidatorsFields.DomainID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : DomainsAdminValidatorsFields.Search,
			SortColumn : DomainsAdminValidatorsFields.SortColumn,
			SortAscending : DomainsAdminValidatorsFields.SortAscending,
			SkipRows : DomainsAdminValidatorsFields.SkipRows,
			NumRows : DomainsAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : DomainsAdminValidatorsFields.Search	
	},

	GetGridHtml : {	
	},

	GetGridHtml : {
			Search : DomainsAdminValidatorsFields.Search,
			SortColumn : DomainsAdminValidatorsFields.SortColumn,
			SortAscending : DomainsAdminValidatorsFields.SortAscending,
			SkipRows : DomainsAdminValidatorsFields.SkipRows,
			NumRows : DomainsAdminValidatorsFields.NumRows	
	},

	GetGridHtmlInternal : {
			Domains : DomainsAdminValidatorsFields.Domains	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    