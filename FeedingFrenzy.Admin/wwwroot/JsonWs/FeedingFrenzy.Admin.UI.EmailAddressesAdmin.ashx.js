

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["EmailAddressesAdminValidatorsFields"])) {
	var EmailAddressesAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(EmailAddressesAdminValidatorsFields.DomainID)) {
	EmailAddressesAdminValidatorsFields.DomainID = {Validators : [Validators.Text], InvalidMessage: "Invalid DomainID"};
}
if (!ObjectUtil.HasValue(EmailAddressesAdminValidatorsFields.EmailAddresses)) {
	EmailAddressesAdminValidatorsFields.EmailAddresses = {Validators : [Validators.Text], InvalidMessage: "Invalid EmailAddresses"};
}
if (!ObjectUtil.HasValue(EmailAddressesAdminValidatorsFields.EmailAddressID)) {
	EmailAddressesAdminValidatorsFields.EmailAddressID = {Validators : [Validators.Text], InvalidMessage: "Invalid EmailAddressID"};
}
if (!ObjectUtil.HasValue(EmailAddressesAdminValidatorsFields.FieldName)) {
	EmailAddressesAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(EmailAddressesAdminValidatorsFields.Name)) {
	EmailAddressesAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(EmailAddressesAdminValidatorsFields.NumRows)) {
	EmailAddressesAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(EmailAddressesAdminValidatorsFields.PreOptions)) {
	EmailAddressesAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(EmailAddressesAdminValidatorsFields.Search)) {
	EmailAddressesAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(EmailAddressesAdminValidatorsFields.SkipRows)) {
	EmailAddressesAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(EmailAddressesAdminValidatorsFields.SortAscending)) {
	EmailAddressesAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(EmailAddressesAdminValidatorsFields.SortColumn)) {
	EmailAddressesAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(EmailAddressesAdminValidatorsFields.Value)) {
	EmailAddressesAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var EmailAddressesAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.EmailAddressesAdmin.ashx"

	,
	GetDetails : function(EmailAddressID, Callback) {
        return EmailAddressesAdmin.GetDetailsObject({ EmailAddressID : EmailAddressID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddressesAdmin.GetDetails.onValidationError))
					EmailAddressesAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddressesAdmin.Url, 
					Method : "GetDetails", 
					Params : { EmailAddressID : oObject.EmailAddressID}, 
					Serialize : EmailAddressesAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddressesAdmin.GetDetails.onErrorReceived) ? EmailAddressesAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddressesAdmin.Url, "GetDetails", { EmailAddressID : oObject.EmailAddressID}, EmailAddressesAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return EmailAddressesAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddressesAdmin.GetDropDown.onValidationError))
					EmailAddressesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddressesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : EmailAddressesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddressesAdmin.GetDropDown.onErrorReceived) ? EmailAddressesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddressesAdmin.Url, "GetDropDown", { }, EmailAddressesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return EmailAddressesAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddressesAdmin.GetDropDown.onValidationError))
					EmailAddressesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddressesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : EmailAddressesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddressesAdmin.GetDropDown.onErrorReceived) ? EmailAddressesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddressesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, EmailAddressesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return EmailAddressesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddressesAdmin.GetDropDown.onValidationError))
					EmailAddressesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddressesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : EmailAddressesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddressesAdmin.GetDropDown.onErrorReceived) ? EmailAddressesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddressesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, EmailAddressesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return EmailAddressesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddressesAdmin.GetDropDown.onValidationError))
					EmailAddressesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddressesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : EmailAddressesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddressesAdmin.GetDropDown.onErrorReceived) ? EmailAddressesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddressesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, EmailAddressesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDownWithNull : function(Callback) {
        return EmailAddressesAdmin.GetDropDownWithNullObject({ }, Callback);
    },

	GetDropDownWithNullObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesAdminValidators.GetDropDownWithNull)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddressesAdmin.GetDropDownWithNull.onValidationError))
					EmailAddressesAdmin.GetDropDownWithNull.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddressesAdmin.Url, 
					Method : "GetDropDownWithNull", 
					Params : { }, 
					Serialize : EmailAddressesAdmin.GetDropDownWithNull.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddressesAdmin.GetDropDownWithNull.onErrorReceived) ? EmailAddressesAdmin.GetDropDownWithNull.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddressesAdmin.Url, "GetDropDownWithNull", { }, EmailAddressesAdmin.GetDropDownWithNull.Serialize || {});
    },
	GetEdit : function(EmailAddressID, Callback) {
        return EmailAddressesAdmin.GetEditObject({ EmailAddressID : EmailAddressID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddressesAdmin.GetEdit.onValidationError))
					EmailAddressesAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddressesAdmin.Url, 
					Method : "GetEdit", 
					Params : { EmailAddressID : oObject.EmailAddressID}, 
					Serialize : EmailAddressesAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddressesAdmin.GetEdit.onErrorReceived) ? EmailAddressesAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddressesAdmin.Url, "GetEdit", { EmailAddressID : oObject.EmailAddressID}, EmailAddressesAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return EmailAddressesAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddressesAdmin.GetGrid.onValidationError))
					EmailAddressesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddressesAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : EmailAddressesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddressesAdmin.GetGrid.onErrorReceived) ? EmailAddressesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddressesAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, EmailAddressesAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Callback) {
        return EmailAddressesAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddressesAdmin.GetGrid.onValidationError))
					EmailAddressesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddressesAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : EmailAddressesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddressesAdmin.GetGrid.onErrorReceived) ? EmailAddressesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddressesAdmin.Url, "GetGrid", { }, EmailAddressesAdmin.GetGrid.Serialize || {});
    },
	GetGridByDomainID : function(DomainID, Callback) {
        return EmailAddressesAdmin.GetGridByDomainIDObject({ DomainID : DomainID}, Callback);
    },

	GetGridByDomainIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesAdminValidators.GetGridByDomainID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddressesAdmin.GetGridByDomainID.onValidationError))
					EmailAddressesAdmin.GetGridByDomainID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddressesAdmin.Url, 
					Method : "GetGridByDomainID", 
					Params : { DomainID : oObject.DomainID}, 
					Serialize : EmailAddressesAdmin.GetGridByDomainID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddressesAdmin.GetGridByDomainID.onErrorReceived) ? EmailAddressesAdmin.GetGridByDomainID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddressesAdmin.Url, "GetGridByDomainID", { DomainID : oObject.DomainID}, EmailAddressesAdmin.GetGridByDomainID.Serialize || {});
    },
	GetGridByDomainID : function(DomainID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return EmailAddressesAdmin.GetGridByDomainIDObject({ DomainID : DomainID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByDomainIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesAdminValidators.GetGridByDomainID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddressesAdmin.GetGridByDomainID.onValidationError))
					EmailAddressesAdmin.GetGridByDomainID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddressesAdmin.Url, 
					Method : "GetGridByDomainID", 
					Params : { DomainID : oObject.DomainID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : EmailAddressesAdmin.GetGridByDomainID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddressesAdmin.GetGridByDomainID.onErrorReceived) ? EmailAddressesAdmin.GetGridByDomainID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddressesAdmin.Url, "GetGridByDomainID", { DomainID : oObject.DomainID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, EmailAddressesAdmin.GetGridByDomainID.Serialize || {});
    },
	GetGridByDomainIDCount : function(DomainID, Search, Callback) {
        return EmailAddressesAdmin.GetGridByDomainIDCountObject({ DomainID : DomainID,Search : Search}, Callback);
    },

	GetGridByDomainIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesAdminValidators.GetGridByDomainIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddressesAdmin.GetGridByDomainIDCount.onValidationError))
					EmailAddressesAdmin.GetGridByDomainIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddressesAdmin.Url, 
					Method : "GetGridByDomainIDCount", 
					Params : { DomainID : oObject.DomainID,Search : oObject.Search}, 
					Serialize : EmailAddressesAdmin.GetGridByDomainIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddressesAdmin.GetGridByDomainIDCount.onErrorReceived) ? EmailAddressesAdmin.GetGridByDomainIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddressesAdmin.Url, "GetGridByDomainIDCount", { DomainID : oObject.DomainID,Search : oObject.Search}, EmailAddressesAdmin.GetGridByDomainIDCount.Serialize || {});
    },
	GetGridByDomainIDHtml : function(DomainID, Callback) {
        return EmailAddressesAdmin.GetGridByDomainIDHtmlObject({ DomainID : DomainID}, Callback);
    },

	GetGridByDomainIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesAdminValidators.GetGridByDomainIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddressesAdmin.GetGridByDomainIDHtml.onValidationError))
					EmailAddressesAdmin.GetGridByDomainIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddressesAdmin.Url, 
					Method : "GetGridByDomainIDHtml", 
					Params : { DomainID : oObject.DomainID}, 
					Serialize : EmailAddressesAdmin.GetGridByDomainIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddressesAdmin.GetGridByDomainIDHtml.onErrorReceived) ? EmailAddressesAdmin.GetGridByDomainIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddressesAdmin.Url, "GetGridByDomainIDHtml", { DomainID : oObject.DomainID}, EmailAddressesAdmin.GetGridByDomainIDHtml.Serialize || {});
    },
	GetGridByDomainIDHtml : function(DomainID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return EmailAddressesAdmin.GetGridByDomainIDHtmlObject({ DomainID : DomainID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByDomainIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesAdminValidators.GetGridByDomainIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddressesAdmin.GetGridByDomainIDHtml.onValidationError))
					EmailAddressesAdmin.GetGridByDomainIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddressesAdmin.Url, 
					Method : "GetGridByDomainIDHtml", 
					Params : { DomainID : oObject.DomainID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : EmailAddressesAdmin.GetGridByDomainIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddressesAdmin.GetGridByDomainIDHtml.onErrorReceived) ? EmailAddressesAdmin.GetGridByDomainIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddressesAdmin.Url, "GetGridByDomainIDHtml", { DomainID : oObject.DomainID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, EmailAddressesAdmin.GetGridByDomainIDHtml.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return EmailAddressesAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddressesAdmin.GetGridCount.onValidationError))
					EmailAddressesAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddressesAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : EmailAddressesAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddressesAdmin.GetGridCount.onErrorReceived) ? EmailAddressesAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddressesAdmin.Url, "GetGridCount", { Search : oObject.Search}, EmailAddressesAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return EmailAddressesAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddressesAdmin.GetGridHtml.onValidationError))
					EmailAddressesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddressesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : EmailAddressesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddressesAdmin.GetGridHtml.onErrorReceived) ? EmailAddressesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddressesAdmin.Url, "GetGridHtml", { }, EmailAddressesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return EmailAddressesAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddressesAdmin.GetGridHtml.onValidationError))
					EmailAddressesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddressesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : EmailAddressesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddressesAdmin.GetGridHtml.onErrorReceived) ? EmailAddressesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddressesAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, EmailAddressesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtmlInternal : function(EmailAddresses, Callback) {
        return EmailAddressesAdmin.GetGridHtmlInternalObject({ EmailAddresses : EmailAddresses}, Callback);
    },

	GetGridHtmlInternalObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesAdminValidators.GetGridHtmlInternal)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddressesAdmin.GetGridHtmlInternal.onValidationError))
					EmailAddressesAdmin.GetGridHtmlInternal.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddressesAdmin.Url, 
					Method : "GetGridHtmlInternal", 
					Params : { EmailAddresses : oObject.EmailAddresses}, 
					Serialize : EmailAddressesAdmin.GetGridHtmlInternal.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddressesAdmin.GetGridHtmlInternal.onErrorReceived) ? EmailAddressesAdmin.GetGridHtmlInternal.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddressesAdmin.Url, "GetGridHtmlInternal", { EmailAddresses : oObject.EmailAddresses}, EmailAddressesAdmin.GetGridHtmlInternal.Serialize || {});
    },
	GetInsert : function(Callback) {
        return EmailAddressesAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddressesAdmin.GetInsert.onValidationError))
					EmailAddressesAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddressesAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : EmailAddressesAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddressesAdmin.GetInsert.onErrorReceived) ? EmailAddressesAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddressesAdmin.Url, "GetInsert", { }, EmailAddressesAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return EmailAddressesAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailAddressesAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailAddressesAdmin.Initialize.onValidationError))
					EmailAddressesAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailAddressesAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : EmailAddressesAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailAddressesAdmin.Initialize.onErrorReceived) ? EmailAddressesAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailAddressesAdmin.Url, "Initialize", { }, EmailAddressesAdmin.Initialize.Serialize || {});
    }
};

var EmailAddressesAdminValidators = {
	

	GetDetails : {
			EmailAddressID : EmailAddressesAdminValidatorsFields.EmailAddressID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : EmailAddressesAdminValidatorsFields.Name,
			Value : EmailAddressesAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : EmailAddressesAdminValidatorsFields.Name,
			Value : EmailAddressesAdminValidatorsFields.Value,
			FieldName : EmailAddressesAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : EmailAddressesAdminValidatorsFields.Name,
			Value : EmailAddressesAdminValidatorsFields.Value,
			FieldName : EmailAddressesAdminValidatorsFields.FieldName,
			PreOptions : EmailAddressesAdminValidatorsFields.PreOptions	
	},

	GetDropDownWithNull : {	
	},

	GetEdit : {
			EmailAddressID : EmailAddressesAdminValidatorsFields.EmailAddressID	
	},

	GetGrid : {
			Search : EmailAddressesAdminValidatorsFields.Search,
			SortColumn : EmailAddressesAdminValidatorsFields.SortColumn,
			SortAscending : EmailAddressesAdminValidatorsFields.SortAscending,
			SkipRows : EmailAddressesAdminValidatorsFields.SkipRows,
			NumRows : EmailAddressesAdminValidatorsFields.NumRows	
	},

	GetGrid : {	
	},

	GetGridByDomainID : {
			DomainID : EmailAddressesAdminValidatorsFields.DomainID	
	},

	GetGridByDomainID : {
			DomainID : EmailAddressesAdminValidatorsFields.DomainID,
			Search : EmailAddressesAdminValidatorsFields.Search,
			SortColumn : EmailAddressesAdminValidatorsFields.SortColumn,
			SortAscending : EmailAddressesAdminValidatorsFields.SortAscending,
			SkipRows : EmailAddressesAdminValidatorsFields.SkipRows,
			NumRows : EmailAddressesAdminValidatorsFields.NumRows	
	},

	GetGridByDomainIDCount : {
			DomainID : EmailAddressesAdminValidatorsFields.DomainID,
			Search : EmailAddressesAdminValidatorsFields.Search	
	},

	GetGridByDomainIDHtml : {
			DomainID : EmailAddressesAdminValidatorsFields.DomainID	
	},

	GetGridByDomainIDHtml : {
			DomainID : EmailAddressesAdminValidatorsFields.DomainID,
			Search : EmailAddressesAdminValidatorsFields.Search,
			SortColumn : EmailAddressesAdminValidatorsFields.SortColumn,
			SortAscending : EmailAddressesAdminValidatorsFields.SortAscending,
			SkipRows : EmailAddressesAdminValidatorsFields.SkipRows,
			NumRows : EmailAddressesAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : EmailAddressesAdminValidatorsFields.Search	
	},

	GetGridHtml : {	
	},

	GetGridHtml : {
			Search : EmailAddressesAdminValidatorsFields.Search,
			SortColumn : EmailAddressesAdminValidatorsFields.SortColumn,
			SortAscending : EmailAddressesAdminValidatorsFields.SortAscending,
			SkipRows : EmailAddressesAdminValidatorsFields.SkipRows,
			NumRows : EmailAddressesAdminValidatorsFields.NumRows	
	},

	GetGridHtmlInternal : {
			EmailAddresses : EmailAddressesAdminValidatorsFields.EmailAddresses	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    