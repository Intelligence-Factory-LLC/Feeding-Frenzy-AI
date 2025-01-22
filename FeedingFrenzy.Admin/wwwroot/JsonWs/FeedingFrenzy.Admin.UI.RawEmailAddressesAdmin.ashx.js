

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["RawEmailAddressesAdminValidatorsFields"])) {
	var RawEmailAddressesAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(RawEmailAddressesAdminValidatorsFields.DomainID)) {
	RawEmailAddressesAdminValidatorsFields.DomainID = {Validators : [Validators.Text], InvalidMessage: "Invalid DomainID"};
}
if (!ObjectUtil.HasValue(RawEmailAddressesAdminValidatorsFields.EmailAddressID)) {
	RawEmailAddressesAdminValidatorsFields.EmailAddressID = {Validators : [Validators.Text], InvalidMessage: "Invalid EmailAddressID"};
}
if (!ObjectUtil.HasValue(RawEmailAddressesAdminValidatorsFields.FieldName)) {
	RawEmailAddressesAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(RawEmailAddressesAdminValidatorsFields.Name)) {
	RawEmailAddressesAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(RawEmailAddressesAdminValidatorsFields.NumRows)) {
	RawEmailAddressesAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(RawEmailAddressesAdminValidatorsFields.PreOptions)) {
	RawEmailAddressesAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(RawEmailAddressesAdminValidatorsFields.RawEmailAddresses)) {
	RawEmailAddressesAdminValidatorsFields.RawEmailAddresses = {Validators : [Validators.Text], InvalidMessage: "Invalid RawEmailAddresses"};
}
if (!ObjectUtil.HasValue(RawEmailAddressesAdminValidatorsFields.RawEmailAddressID)) {
	RawEmailAddressesAdminValidatorsFields.RawEmailAddressID = {Validators : [Validators.Text], InvalidMessage: "Invalid RawEmailAddressID"};
}
if (!ObjectUtil.HasValue(RawEmailAddressesAdminValidatorsFields.RawEmailID)) {
	RawEmailAddressesAdminValidatorsFields.RawEmailID = {Validators : [Validators.Text], InvalidMessage: "Invalid RawEmailID"};
}
if (!ObjectUtil.HasValue(RawEmailAddressesAdminValidatorsFields.Search)) {
	RawEmailAddressesAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(RawEmailAddressesAdminValidatorsFields.SkipRows)) {
	RawEmailAddressesAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(RawEmailAddressesAdminValidatorsFields.SortAscending)) {
	RawEmailAddressesAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(RawEmailAddressesAdminValidatorsFields.SortColumn)) {
	RawEmailAddressesAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(RawEmailAddressesAdminValidatorsFields.Value)) {
	RawEmailAddressesAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var RawEmailAddressesAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.RawEmailAddressesAdmin.ashx"

	,
	GetDetails : function(RawEmailAddressID, Callback) {
        return RawEmailAddressesAdmin.GetDetailsObject({ RawEmailAddressID : RawEmailAddressID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetDetails.onValidationError))
					RawEmailAddressesAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetDetails", 
					Params : { RawEmailAddressID : oObject.RawEmailAddressID}, 
					Serialize : RawEmailAddressesAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetDetails.onErrorReceived) ? RawEmailAddressesAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetDetails", { RawEmailAddressID : oObject.RawEmailAddressID}, RawEmailAddressesAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return RawEmailAddressesAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetDropDown.onValidationError))
					RawEmailAddressesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : RawEmailAddressesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetDropDown.onErrorReceived) ? RawEmailAddressesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetDropDown", { }, RawEmailAddressesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return RawEmailAddressesAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetDropDown.onValidationError))
					RawEmailAddressesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : RawEmailAddressesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetDropDown.onErrorReceived) ? RawEmailAddressesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, RawEmailAddressesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return RawEmailAddressesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetDropDown.onValidationError))
					RawEmailAddressesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : RawEmailAddressesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetDropDown.onErrorReceived) ? RawEmailAddressesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, RawEmailAddressesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return RawEmailAddressesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetDropDown.onValidationError))
					RawEmailAddressesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : RawEmailAddressesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetDropDown.onErrorReceived) ? RawEmailAddressesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, RawEmailAddressesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDownWithNull : function(Callback) {
        return RawEmailAddressesAdmin.GetDropDownWithNullObject({ }, Callback);
    },

	GetDropDownWithNullObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetDropDownWithNull)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetDropDownWithNull.onValidationError))
					RawEmailAddressesAdmin.GetDropDownWithNull.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetDropDownWithNull", 
					Params : { }, 
					Serialize : RawEmailAddressesAdmin.GetDropDownWithNull.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetDropDownWithNull.onErrorReceived) ? RawEmailAddressesAdmin.GetDropDownWithNull.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetDropDownWithNull", { }, RawEmailAddressesAdmin.GetDropDownWithNull.Serialize || {});
    },
	GetEdit : function(RawEmailAddressID, Callback) {
        return RawEmailAddressesAdmin.GetEditObject({ RawEmailAddressID : RawEmailAddressID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetEdit.onValidationError))
					RawEmailAddressesAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetEdit", 
					Params : { RawEmailAddressID : oObject.RawEmailAddressID}, 
					Serialize : RawEmailAddressesAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetEdit.onErrorReceived) ? RawEmailAddressesAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetEdit", { RawEmailAddressID : oObject.RawEmailAddressID}, RawEmailAddressesAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return RawEmailAddressesAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGrid.onValidationError))
					RawEmailAddressesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : RawEmailAddressesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGrid.onErrorReceived) ? RawEmailAddressesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGrid", { }, RawEmailAddressesAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RawEmailAddressesAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGrid.onValidationError))
					RawEmailAddressesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RawEmailAddressesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGrid.onErrorReceived) ? RawEmailAddressesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RawEmailAddressesAdmin.GetGrid.Serialize || {});
    },
	GetGridByDomainID : function(DomainID, Callback) {
        return RawEmailAddressesAdmin.GetGridByDomainIDObject({ DomainID : DomainID}, Callback);
    },

	GetGridByDomainIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGridByDomainID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByDomainID.onValidationError))
					RawEmailAddressesAdmin.GetGridByDomainID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGridByDomainID", 
					Params : { DomainID : oObject.DomainID}, 
					Serialize : RawEmailAddressesAdmin.GetGridByDomainID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByDomainID.onErrorReceived) ? RawEmailAddressesAdmin.GetGridByDomainID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGridByDomainID", { DomainID : oObject.DomainID}, RawEmailAddressesAdmin.GetGridByDomainID.Serialize || {});
    },
	GetGridByDomainID : function(DomainID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RawEmailAddressesAdmin.GetGridByDomainIDObject({ DomainID : DomainID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByDomainIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGridByDomainID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByDomainID.onValidationError))
					RawEmailAddressesAdmin.GetGridByDomainID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGridByDomainID", 
					Params : { DomainID : oObject.DomainID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RawEmailAddressesAdmin.GetGridByDomainID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByDomainID.onErrorReceived) ? RawEmailAddressesAdmin.GetGridByDomainID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGridByDomainID", { DomainID : oObject.DomainID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RawEmailAddressesAdmin.GetGridByDomainID.Serialize || {});
    },
	GetGridByDomainIDCount : function(DomainID, Search, Callback) {
        return RawEmailAddressesAdmin.GetGridByDomainIDCountObject({ DomainID : DomainID,Search : Search}, Callback);
    },

	GetGridByDomainIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGridByDomainIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByDomainIDCount.onValidationError))
					RawEmailAddressesAdmin.GetGridByDomainIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGridByDomainIDCount", 
					Params : { DomainID : oObject.DomainID,Search : oObject.Search}, 
					Serialize : RawEmailAddressesAdmin.GetGridByDomainIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByDomainIDCount.onErrorReceived) ? RawEmailAddressesAdmin.GetGridByDomainIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGridByDomainIDCount", { DomainID : oObject.DomainID,Search : oObject.Search}, RawEmailAddressesAdmin.GetGridByDomainIDCount.Serialize || {});
    },
	GetGridByDomainIDHtml : function(DomainID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RawEmailAddressesAdmin.GetGridByDomainIDHtmlObject({ DomainID : DomainID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByDomainIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGridByDomainIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByDomainIDHtml.onValidationError))
					RawEmailAddressesAdmin.GetGridByDomainIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGridByDomainIDHtml", 
					Params : { DomainID : oObject.DomainID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RawEmailAddressesAdmin.GetGridByDomainIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByDomainIDHtml.onErrorReceived) ? RawEmailAddressesAdmin.GetGridByDomainIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGridByDomainIDHtml", { DomainID : oObject.DomainID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RawEmailAddressesAdmin.GetGridByDomainIDHtml.Serialize || {});
    },
	GetGridByDomainIDHtml : function(DomainID, Callback) {
        return RawEmailAddressesAdmin.GetGridByDomainIDHtmlObject({ DomainID : DomainID}, Callback);
    },

	GetGridByDomainIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGridByDomainIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByDomainIDHtml.onValidationError))
					RawEmailAddressesAdmin.GetGridByDomainIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGridByDomainIDHtml", 
					Params : { DomainID : oObject.DomainID}, 
					Serialize : RawEmailAddressesAdmin.GetGridByDomainIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByDomainIDHtml.onErrorReceived) ? RawEmailAddressesAdmin.GetGridByDomainIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGridByDomainIDHtml", { DomainID : oObject.DomainID}, RawEmailAddressesAdmin.GetGridByDomainIDHtml.Serialize || {});
    },
	GetGridByEmailAddressID : function(EmailAddressID, Callback) {
        return RawEmailAddressesAdmin.GetGridByEmailAddressIDObject({ EmailAddressID : EmailAddressID}, Callback);
    },

	GetGridByEmailAddressIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGridByEmailAddressID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByEmailAddressID.onValidationError))
					RawEmailAddressesAdmin.GetGridByEmailAddressID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGridByEmailAddressID", 
					Params : { EmailAddressID : oObject.EmailAddressID}, 
					Serialize : RawEmailAddressesAdmin.GetGridByEmailAddressID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByEmailAddressID.onErrorReceived) ? RawEmailAddressesAdmin.GetGridByEmailAddressID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGridByEmailAddressID", { EmailAddressID : oObject.EmailAddressID}, RawEmailAddressesAdmin.GetGridByEmailAddressID.Serialize || {});
    },
	GetGridByEmailAddressID : function(EmailAddressID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RawEmailAddressesAdmin.GetGridByEmailAddressIDObject({ EmailAddressID : EmailAddressID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByEmailAddressIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGridByEmailAddressID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByEmailAddressID.onValidationError))
					RawEmailAddressesAdmin.GetGridByEmailAddressID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGridByEmailAddressID", 
					Params : { EmailAddressID : oObject.EmailAddressID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RawEmailAddressesAdmin.GetGridByEmailAddressID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByEmailAddressID.onErrorReceived) ? RawEmailAddressesAdmin.GetGridByEmailAddressID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGridByEmailAddressID", { EmailAddressID : oObject.EmailAddressID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RawEmailAddressesAdmin.GetGridByEmailAddressID.Serialize || {});
    },
	GetGridByEmailAddressIDCount : function(EmailAddressID, Search, Callback) {
        return RawEmailAddressesAdmin.GetGridByEmailAddressIDCountObject({ EmailAddressID : EmailAddressID,Search : Search}, Callback);
    },

	GetGridByEmailAddressIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGridByEmailAddressIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByEmailAddressIDCount.onValidationError))
					RawEmailAddressesAdmin.GetGridByEmailAddressIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGridByEmailAddressIDCount", 
					Params : { EmailAddressID : oObject.EmailAddressID,Search : oObject.Search}, 
					Serialize : RawEmailAddressesAdmin.GetGridByEmailAddressIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByEmailAddressIDCount.onErrorReceived) ? RawEmailAddressesAdmin.GetGridByEmailAddressIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGridByEmailAddressIDCount", { EmailAddressID : oObject.EmailAddressID,Search : oObject.Search}, RawEmailAddressesAdmin.GetGridByEmailAddressIDCount.Serialize || {});
    },
	GetGridByEmailAddressIDHtml : function(EmailAddressID, Callback) {
        return RawEmailAddressesAdmin.GetGridByEmailAddressIDHtmlObject({ EmailAddressID : EmailAddressID}, Callback);
    },

	GetGridByEmailAddressIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGridByEmailAddressIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByEmailAddressIDHtml.onValidationError))
					RawEmailAddressesAdmin.GetGridByEmailAddressIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGridByEmailAddressIDHtml", 
					Params : { EmailAddressID : oObject.EmailAddressID}, 
					Serialize : RawEmailAddressesAdmin.GetGridByEmailAddressIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByEmailAddressIDHtml.onErrorReceived) ? RawEmailAddressesAdmin.GetGridByEmailAddressIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGridByEmailAddressIDHtml", { EmailAddressID : oObject.EmailAddressID}, RawEmailAddressesAdmin.GetGridByEmailAddressIDHtml.Serialize || {});
    },
	GetGridByEmailAddressIDHtml : function(EmailAddressID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RawEmailAddressesAdmin.GetGridByEmailAddressIDHtmlObject({ EmailAddressID : EmailAddressID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByEmailAddressIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGridByEmailAddressIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByEmailAddressIDHtml.onValidationError))
					RawEmailAddressesAdmin.GetGridByEmailAddressIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGridByEmailAddressIDHtml", 
					Params : { EmailAddressID : oObject.EmailAddressID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RawEmailAddressesAdmin.GetGridByEmailAddressIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByEmailAddressIDHtml.onErrorReceived) ? RawEmailAddressesAdmin.GetGridByEmailAddressIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGridByEmailAddressIDHtml", { EmailAddressID : oObject.EmailAddressID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RawEmailAddressesAdmin.GetGridByEmailAddressIDHtml.Serialize || {});
    },
	GetGridByRawEmailID : function(RawEmailID, Callback) {
        return RawEmailAddressesAdmin.GetGridByRawEmailIDObject({ RawEmailID : RawEmailID}, Callback);
    },

	GetGridByRawEmailIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGridByRawEmailID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByRawEmailID.onValidationError))
					RawEmailAddressesAdmin.GetGridByRawEmailID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGridByRawEmailID", 
					Params : { RawEmailID : oObject.RawEmailID}, 
					Serialize : RawEmailAddressesAdmin.GetGridByRawEmailID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByRawEmailID.onErrorReceived) ? RawEmailAddressesAdmin.GetGridByRawEmailID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGridByRawEmailID", { RawEmailID : oObject.RawEmailID}, RawEmailAddressesAdmin.GetGridByRawEmailID.Serialize || {});
    },
	GetGridByRawEmailID : function(RawEmailID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RawEmailAddressesAdmin.GetGridByRawEmailIDObject({ RawEmailID : RawEmailID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByRawEmailIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGridByRawEmailID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByRawEmailID.onValidationError))
					RawEmailAddressesAdmin.GetGridByRawEmailID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGridByRawEmailID", 
					Params : { RawEmailID : oObject.RawEmailID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RawEmailAddressesAdmin.GetGridByRawEmailID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByRawEmailID.onErrorReceived) ? RawEmailAddressesAdmin.GetGridByRawEmailID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGridByRawEmailID", { RawEmailID : oObject.RawEmailID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RawEmailAddressesAdmin.GetGridByRawEmailID.Serialize || {});
    },
	GetGridByRawEmailIDCount : function(RawEmailID, Search, Callback) {
        return RawEmailAddressesAdmin.GetGridByRawEmailIDCountObject({ RawEmailID : RawEmailID,Search : Search}, Callback);
    },

	GetGridByRawEmailIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGridByRawEmailIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByRawEmailIDCount.onValidationError))
					RawEmailAddressesAdmin.GetGridByRawEmailIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGridByRawEmailIDCount", 
					Params : { RawEmailID : oObject.RawEmailID,Search : oObject.Search}, 
					Serialize : RawEmailAddressesAdmin.GetGridByRawEmailIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByRawEmailIDCount.onErrorReceived) ? RawEmailAddressesAdmin.GetGridByRawEmailIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGridByRawEmailIDCount", { RawEmailID : oObject.RawEmailID,Search : oObject.Search}, RawEmailAddressesAdmin.GetGridByRawEmailIDCount.Serialize || {});
    },
	GetGridByRawEmailIDHtml : function(RawEmailID, Callback) {
        return RawEmailAddressesAdmin.GetGridByRawEmailIDHtmlObject({ RawEmailID : RawEmailID}, Callback);
    },

	GetGridByRawEmailIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGridByRawEmailIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByRawEmailIDHtml.onValidationError))
					RawEmailAddressesAdmin.GetGridByRawEmailIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGridByRawEmailIDHtml", 
					Params : { RawEmailID : oObject.RawEmailID}, 
					Serialize : RawEmailAddressesAdmin.GetGridByRawEmailIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByRawEmailIDHtml.onErrorReceived) ? RawEmailAddressesAdmin.GetGridByRawEmailIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGridByRawEmailIDHtml", { RawEmailID : oObject.RawEmailID}, RawEmailAddressesAdmin.GetGridByRawEmailIDHtml.Serialize || {});
    },
	GetGridByRawEmailIDHtml : function(RawEmailID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RawEmailAddressesAdmin.GetGridByRawEmailIDHtmlObject({ RawEmailID : RawEmailID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByRawEmailIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGridByRawEmailIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByRawEmailIDHtml.onValidationError))
					RawEmailAddressesAdmin.GetGridByRawEmailIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGridByRawEmailIDHtml", 
					Params : { RawEmailID : oObject.RawEmailID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RawEmailAddressesAdmin.GetGridByRawEmailIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridByRawEmailIDHtml.onErrorReceived) ? RawEmailAddressesAdmin.GetGridByRawEmailIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGridByRawEmailIDHtml", { RawEmailID : oObject.RawEmailID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RawEmailAddressesAdmin.GetGridByRawEmailIDHtml.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return RawEmailAddressesAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridCount.onValidationError))
					RawEmailAddressesAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : RawEmailAddressesAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridCount.onErrorReceived) ? RawEmailAddressesAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGridCount", { Search : oObject.Search}, RawEmailAddressesAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return RawEmailAddressesAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridHtml.onValidationError))
					RawEmailAddressesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : RawEmailAddressesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridHtml.onErrorReceived) ? RawEmailAddressesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGridHtml", { }, RawEmailAddressesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RawEmailAddressesAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridHtml.onValidationError))
					RawEmailAddressesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RawEmailAddressesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridHtml.onErrorReceived) ? RawEmailAddressesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RawEmailAddressesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtmlInternal : function(RawEmailAddresses, Callback) {
        return RawEmailAddressesAdmin.GetGridHtmlInternalObject({ RawEmailAddresses : RawEmailAddresses}, Callback);
    },

	GetGridHtmlInternalObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetGridHtmlInternal)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridHtmlInternal.onValidationError))
					RawEmailAddressesAdmin.GetGridHtmlInternal.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetGridHtmlInternal", 
					Params : { RawEmailAddresses : oObject.RawEmailAddresses}, 
					Serialize : RawEmailAddressesAdmin.GetGridHtmlInternal.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetGridHtmlInternal.onErrorReceived) ? RawEmailAddressesAdmin.GetGridHtmlInternal.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetGridHtmlInternal", { RawEmailAddresses : oObject.RawEmailAddresses}, RawEmailAddressesAdmin.GetGridHtmlInternal.Serialize || {});
    },
	GetInsert : function(Callback) {
        return RawEmailAddressesAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetInsert.onValidationError))
					RawEmailAddressesAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : RawEmailAddressesAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.GetInsert.onErrorReceived) ? RawEmailAddressesAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "GetInsert", { }, RawEmailAddressesAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return RawEmailAddressesAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailAddressesAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailAddressesAdmin.Initialize.onValidationError))
					RawEmailAddressesAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailAddressesAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : RawEmailAddressesAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailAddressesAdmin.Initialize.onErrorReceived) ? RawEmailAddressesAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailAddressesAdmin.Url, "Initialize", { }, RawEmailAddressesAdmin.Initialize.Serialize || {});
    }
};

var RawEmailAddressesAdminValidators = {
	

	GetDetails : {
			RawEmailAddressID : RawEmailAddressesAdminValidatorsFields.RawEmailAddressID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : RawEmailAddressesAdminValidatorsFields.Name,
			Value : RawEmailAddressesAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : RawEmailAddressesAdminValidatorsFields.Name,
			Value : RawEmailAddressesAdminValidatorsFields.Value,
			FieldName : RawEmailAddressesAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : RawEmailAddressesAdminValidatorsFields.Name,
			Value : RawEmailAddressesAdminValidatorsFields.Value,
			FieldName : RawEmailAddressesAdminValidatorsFields.FieldName,
			PreOptions : RawEmailAddressesAdminValidatorsFields.PreOptions	
	},

	GetDropDownWithNull : {	
	},

	GetEdit : {
			RawEmailAddressID : RawEmailAddressesAdminValidatorsFields.RawEmailAddressID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : RawEmailAddressesAdminValidatorsFields.Search,
			SortColumn : RawEmailAddressesAdminValidatorsFields.SortColumn,
			SortAscending : RawEmailAddressesAdminValidatorsFields.SortAscending,
			SkipRows : RawEmailAddressesAdminValidatorsFields.SkipRows,
			NumRows : RawEmailAddressesAdminValidatorsFields.NumRows	
	},

	GetGridByDomainID : {
			DomainID : RawEmailAddressesAdminValidatorsFields.DomainID	
	},

	GetGridByDomainID : {
			DomainID : RawEmailAddressesAdminValidatorsFields.DomainID,
			Search : RawEmailAddressesAdminValidatorsFields.Search,
			SortColumn : RawEmailAddressesAdminValidatorsFields.SortColumn,
			SortAscending : RawEmailAddressesAdminValidatorsFields.SortAscending,
			SkipRows : RawEmailAddressesAdminValidatorsFields.SkipRows,
			NumRows : RawEmailAddressesAdminValidatorsFields.NumRows	
	},

	GetGridByDomainIDCount : {
			DomainID : RawEmailAddressesAdminValidatorsFields.DomainID,
			Search : RawEmailAddressesAdminValidatorsFields.Search	
	},

	GetGridByDomainIDHtml : {
			DomainID : RawEmailAddressesAdminValidatorsFields.DomainID,
			Search : RawEmailAddressesAdminValidatorsFields.Search,
			SortColumn : RawEmailAddressesAdminValidatorsFields.SortColumn,
			SortAscending : RawEmailAddressesAdminValidatorsFields.SortAscending,
			SkipRows : RawEmailAddressesAdminValidatorsFields.SkipRows,
			NumRows : RawEmailAddressesAdminValidatorsFields.NumRows	
	},

	GetGridByDomainIDHtml : {
			DomainID : RawEmailAddressesAdminValidatorsFields.DomainID	
	},

	GetGridByEmailAddressID : {
			EmailAddressID : RawEmailAddressesAdminValidatorsFields.EmailAddressID	
	},

	GetGridByEmailAddressID : {
			EmailAddressID : RawEmailAddressesAdminValidatorsFields.EmailAddressID,
			Search : RawEmailAddressesAdminValidatorsFields.Search,
			SortColumn : RawEmailAddressesAdminValidatorsFields.SortColumn,
			SortAscending : RawEmailAddressesAdminValidatorsFields.SortAscending,
			SkipRows : RawEmailAddressesAdminValidatorsFields.SkipRows,
			NumRows : RawEmailAddressesAdminValidatorsFields.NumRows	
	},

	GetGridByEmailAddressIDCount : {
			EmailAddressID : RawEmailAddressesAdminValidatorsFields.EmailAddressID,
			Search : RawEmailAddressesAdminValidatorsFields.Search	
	},

	GetGridByEmailAddressIDHtml : {
			EmailAddressID : RawEmailAddressesAdminValidatorsFields.EmailAddressID	
	},

	GetGridByEmailAddressIDHtml : {
			EmailAddressID : RawEmailAddressesAdminValidatorsFields.EmailAddressID,
			Search : RawEmailAddressesAdminValidatorsFields.Search,
			SortColumn : RawEmailAddressesAdminValidatorsFields.SortColumn,
			SortAscending : RawEmailAddressesAdminValidatorsFields.SortAscending,
			SkipRows : RawEmailAddressesAdminValidatorsFields.SkipRows,
			NumRows : RawEmailAddressesAdminValidatorsFields.NumRows	
	},

	GetGridByRawEmailID : {
			RawEmailID : RawEmailAddressesAdminValidatorsFields.RawEmailID	
	},

	GetGridByRawEmailID : {
			RawEmailID : RawEmailAddressesAdminValidatorsFields.RawEmailID,
			Search : RawEmailAddressesAdminValidatorsFields.Search,
			SortColumn : RawEmailAddressesAdminValidatorsFields.SortColumn,
			SortAscending : RawEmailAddressesAdminValidatorsFields.SortAscending,
			SkipRows : RawEmailAddressesAdminValidatorsFields.SkipRows,
			NumRows : RawEmailAddressesAdminValidatorsFields.NumRows	
	},

	GetGridByRawEmailIDCount : {
			RawEmailID : RawEmailAddressesAdminValidatorsFields.RawEmailID,
			Search : RawEmailAddressesAdminValidatorsFields.Search	
	},

	GetGridByRawEmailIDHtml : {
			RawEmailID : RawEmailAddressesAdminValidatorsFields.RawEmailID	
	},

	GetGridByRawEmailIDHtml : {
			RawEmailID : RawEmailAddressesAdminValidatorsFields.RawEmailID,
			Search : RawEmailAddressesAdminValidatorsFields.Search,
			SortColumn : RawEmailAddressesAdminValidatorsFields.SortColumn,
			SortAscending : RawEmailAddressesAdminValidatorsFields.SortAscending,
			SkipRows : RawEmailAddressesAdminValidatorsFields.SkipRows,
			NumRows : RawEmailAddressesAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : RawEmailAddressesAdminValidatorsFields.Search	
	},

	GetGridHtml : {	
	},

	GetGridHtml : {
			Search : RawEmailAddressesAdminValidatorsFields.Search,
			SortColumn : RawEmailAddressesAdminValidatorsFields.SortColumn,
			SortAscending : RawEmailAddressesAdminValidatorsFields.SortAscending,
			SkipRows : RawEmailAddressesAdminValidatorsFields.SkipRows,
			NumRows : RawEmailAddressesAdminValidatorsFields.NumRows	
	},

	GetGridHtmlInternal : {
			RawEmailAddresses : RawEmailAddressesAdminValidatorsFields.RawEmailAddresses	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    