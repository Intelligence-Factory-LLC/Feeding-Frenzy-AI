

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["EmailHistoriesAdminValidatorsFields"])) {
	var EmailHistoriesAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(EmailHistoriesAdminValidatorsFields.EmailHistoryID)) {
	EmailHistoriesAdminValidatorsFields.EmailHistoryID = {Validators : [Validators.Text], InvalidMessage: "Invalid EmailHistoryID"};
}
if (!ObjectUtil.HasValue(EmailHistoriesAdminValidatorsFields.EmailTemplateID)) {
	EmailHistoriesAdminValidatorsFields.EmailTemplateID = {Validators : [Validators.Text], InvalidMessage: "Invalid EmailTemplateID"};
}
if (!ObjectUtil.HasValue(EmailHistoriesAdminValidatorsFields.FieldName)) {
	EmailHistoriesAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(EmailHistoriesAdminValidatorsFields.Name)) {
	EmailHistoriesAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(EmailHistoriesAdminValidatorsFields.NumRows)) {
	EmailHistoriesAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(EmailHistoriesAdminValidatorsFields.PreOptions)) {
	EmailHistoriesAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(EmailHistoriesAdminValidatorsFields.Search)) {
	EmailHistoriesAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(EmailHistoriesAdminValidatorsFields.SkipRows)) {
	EmailHistoriesAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(EmailHistoriesAdminValidatorsFields.SortAscending)) {
	EmailHistoriesAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(EmailHistoriesAdminValidatorsFields.SortColumn)) {
	EmailHistoriesAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(EmailHistoriesAdminValidatorsFields.Value)) {
	EmailHistoriesAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var EmailHistoriesAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.EmailHistoriesAdmin.ashx"

	,
	GetDetails : function(EmailHistoryID, Callback) {
        return EmailHistoriesAdmin.GetDetailsObject({ EmailHistoryID : EmailHistoryID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistoriesAdmin.GetDetails.onValidationError))
					EmailHistoriesAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistoriesAdmin.Url, 
					Method : "GetDetails", 
					Params : { EmailHistoryID : oObject.EmailHistoryID}, 
					Serialize : EmailHistoriesAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistoriesAdmin.GetDetails.onErrorReceived) ? EmailHistoriesAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistoriesAdmin.Url, "GetDetails", { EmailHistoryID : oObject.EmailHistoryID}, EmailHistoriesAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return EmailHistoriesAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistoriesAdmin.GetDropDown.onValidationError))
					EmailHistoriesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistoriesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : EmailHistoriesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistoriesAdmin.GetDropDown.onErrorReceived) ? EmailHistoriesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistoriesAdmin.Url, "GetDropDown", { }, EmailHistoriesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return EmailHistoriesAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistoriesAdmin.GetDropDown.onValidationError))
					EmailHistoriesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistoriesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : EmailHistoriesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistoriesAdmin.GetDropDown.onErrorReceived) ? EmailHistoriesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistoriesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, EmailHistoriesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return EmailHistoriesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistoriesAdmin.GetDropDown.onValidationError))
					EmailHistoriesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistoriesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : EmailHistoriesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistoriesAdmin.GetDropDown.onErrorReceived) ? EmailHistoriesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistoriesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, EmailHistoriesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return EmailHistoriesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistoriesAdmin.GetDropDown.onValidationError))
					EmailHistoriesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistoriesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : EmailHistoriesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistoriesAdmin.GetDropDown.onErrorReceived) ? EmailHistoriesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistoriesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, EmailHistoriesAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(EmailHistoryID, Callback) {
        return EmailHistoriesAdmin.GetEditObject({ EmailHistoryID : EmailHistoryID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistoriesAdmin.GetEdit.onValidationError))
					EmailHistoriesAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistoriesAdmin.Url, 
					Method : "GetEdit", 
					Params : { EmailHistoryID : oObject.EmailHistoryID}, 
					Serialize : EmailHistoriesAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistoriesAdmin.GetEdit.onErrorReceived) ? EmailHistoriesAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistoriesAdmin.Url, "GetEdit", { EmailHistoryID : oObject.EmailHistoryID}, EmailHistoriesAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return EmailHistoriesAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistoriesAdmin.GetGrid.onValidationError))
					EmailHistoriesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistoriesAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : EmailHistoriesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistoriesAdmin.GetGrid.onErrorReceived) ? EmailHistoriesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistoriesAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, EmailHistoriesAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Callback) {
        return EmailHistoriesAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistoriesAdmin.GetGrid.onValidationError))
					EmailHistoriesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistoriesAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : EmailHistoriesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistoriesAdmin.GetGrid.onErrorReceived) ? EmailHistoriesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistoriesAdmin.Url, "GetGrid", { }, EmailHistoriesAdmin.GetGrid.Serialize || {});
    },
	GetGridByEmailTemplateID : function(EmailTemplateID, Callback) {
        return EmailHistoriesAdmin.GetGridByEmailTemplateIDObject({ EmailTemplateID : EmailTemplateID}, Callback);
    },

	GetGridByEmailTemplateIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesAdminValidators.GetGridByEmailTemplateID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistoriesAdmin.GetGridByEmailTemplateID.onValidationError))
					EmailHistoriesAdmin.GetGridByEmailTemplateID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistoriesAdmin.Url, 
					Method : "GetGridByEmailTemplateID", 
					Params : { EmailTemplateID : oObject.EmailTemplateID}, 
					Serialize : EmailHistoriesAdmin.GetGridByEmailTemplateID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistoriesAdmin.GetGridByEmailTemplateID.onErrorReceived) ? EmailHistoriesAdmin.GetGridByEmailTemplateID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistoriesAdmin.Url, "GetGridByEmailTemplateID", { EmailTemplateID : oObject.EmailTemplateID}, EmailHistoriesAdmin.GetGridByEmailTemplateID.Serialize || {});
    },
	GetGridByEmailTemplateID : function(EmailTemplateID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return EmailHistoriesAdmin.GetGridByEmailTemplateIDObject({ EmailTemplateID : EmailTemplateID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByEmailTemplateIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesAdminValidators.GetGridByEmailTemplateID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistoriesAdmin.GetGridByEmailTemplateID.onValidationError))
					EmailHistoriesAdmin.GetGridByEmailTemplateID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistoriesAdmin.Url, 
					Method : "GetGridByEmailTemplateID", 
					Params : { EmailTemplateID : oObject.EmailTemplateID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : EmailHistoriesAdmin.GetGridByEmailTemplateID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistoriesAdmin.GetGridByEmailTemplateID.onErrorReceived) ? EmailHistoriesAdmin.GetGridByEmailTemplateID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistoriesAdmin.Url, "GetGridByEmailTemplateID", { EmailTemplateID : oObject.EmailTemplateID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, EmailHistoriesAdmin.GetGridByEmailTemplateID.Serialize || {});
    },
	GetGridByEmailTemplateIDCount : function(EmailTemplateID, Search, Callback) {
        return EmailHistoriesAdmin.GetGridByEmailTemplateIDCountObject({ EmailTemplateID : EmailTemplateID,Search : Search}, Callback);
    },

	GetGridByEmailTemplateIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesAdminValidators.GetGridByEmailTemplateIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistoriesAdmin.GetGridByEmailTemplateIDCount.onValidationError))
					EmailHistoriesAdmin.GetGridByEmailTemplateIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistoriesAdmin.Url, 
					Method : "GetGridByEmailTemplateIDCount", 
					Params : { EmailTemplateID : oObject.EmailTemplateID,Search : oObject.Search}, 
					Serialize : EmailHistoriesAdmin.GetGridByEmailTemplateIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistoriesAdmin.GetGridByEmailTemplateIDCount.onErrorReceived) ? EmailHistoriesAdmin.GetGridByEmailTemplateIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistoriesAdmin.Url, "GetGridByEmailTemplateIDCount", { EmailTemplateID : oObject.EmailTemplateID,Search : oObject.Search}, EmailHistoriesAdmin.GetGridByEmailTemplateIDCount.Serialize || {});
    },
	GetGridByEmailTemplateIDHtml : function(EmailTemplateID, Callback) {
        return EmailHistoriesAdmin.GetGridByEmailTemplateIDHtmlObject({ EmailTemplateID : EmailTemplateID}, Callback);
    },

	GetGridByEmailTemplateIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesAdminValidators.GetGridByEmailTemplateIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistoriesAdmin.GetGridByEmailTemplateIDHtml.onValidationError))
					EmailHistoriesAdmin.GetGridByEmailTemplateIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistoriesAdmin.Url, 
					Method : "GetGridByEmailTemplateIDHtml", 
					Params : { EmailTemplateID : oObject.EmailTemplateID}, 
					Serialize : EmailHistoriesAdmin.GetGridByEmailTemplateIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistoriesAdmin.GetGridByEmailTemplateIDHtml.onErrorReceived) ? EmailHistoriesAdmin.GetGridByEmailTemplateIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistoriesAdmin.Url, "GetGridByEmailTemplateIDHtml", { EmailTemplateID : oObject.EmailTemplateID}, EmailHistoriesAdmin.GetGridByEmailTemplateIDHtml.Serialize || {});
    },
	GetGridByEmailTemplateIDHtml : function(EmailTemplateID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return EmailHistoriesAdmin.GetGridByEmailTemplateIDHtmlObject({ EmailTemplateID : EmailTemplateID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByEmailTemplateIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesAdminValidators.GetGridByEmailTemplateIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistoriesAdmin.GetGridByEmailTemplateIDHtml.onValidationError))
					EmailHistoriesAdmin.GetGridByEmailTemplateIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistoriesAdmin.Url, 
					Method : "GetGridByEmailTemplateIDHtml", 
					Params : { EmailTemplateID : oObject.EmailTemplateID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : EmailHistoriesAdmin.GetGridByEmailTemplateIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistoriesAdmin.GetGridByEmailTemplateIDHtml.onErrorReceived) ? EmailHistoriesAdmin.GetGridByEmailTemplateIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistoriesAdmin.Url, "GetGridByEmailTemplateIDHtml", { EmailTemplateID : oObject.EmailTemplateID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, EmailHistoriesAdmin.GetGridByEmailTemplateIDHtml.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return EmailHistoriesAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistoriesAdmin.GetGridCount.onValidationError))
					EmailHistoriesAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistoriesAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : EmailHistoriesAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistoriesAdmin.GetGridCount.onErrorReceived) ? EmailHistoriesAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistoriesAdmin.Url, "GetGridCount", { Search : oObject.Search}, EmailHistoriesAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return EmailHistoriesAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistoriesAdmin.GetGridHtml.onValidationError))
					EmailHistoriesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistoriesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : EmailHistoriesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistoriesAdmin.GetGridHtml.onErrorReceived) ? EmailHistoriesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistoriesAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, EmailHistoriesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return EmailHistoriesAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistoriesAdmin.GetGridHtml.onValidationError))
					EmailHistoriesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistoriesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : EmailHistoriesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistoriesAdmin.GetGridHtml.onErrorReceived) ? EmailHistoriesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistoriesAdmin.Url, "GetGridHtml", { }, EmailHistoriesAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return EmailHistoriesAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistoriesAdmin.GetInsert.onValidationError))
					EmailHistoriesAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistoriesAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : EmailHistoriesAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistoriesAdmin.GetInsert.onErrorReceived) ? EmailHistoriesAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistoriesAdmin.Url, "GetInsert", { }, EmailHistoriesAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return EmailHistoriesAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailHistoriesAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailHistoriesAdmin.Initialize.onValidationError))
					EmailHistoriesAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailHistoriesAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : EmailHistoriesAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailHistoriesAdmin.Initialize.onErrorReceived) ? EmailHistoriesAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailHistoriesAdmin.Url, "Initialize", { }, EmailHistoriesAdmin.Initialize.Serialize || {});
    }
};

var EmailHistoriesAdminValidators = {
	

	GetDetails : {
			EmailHistoryID : EmailHistoriesAdminValidatorsFields.EmailHistoryID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : EmailHistoriesAdminValidatorsFields.Name,
			Value : EmailHistoriesAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : EmailHistoriesAdminValidatorsFields.Name,
			Value : EmailHistoriesAdminValidatorsFields.Value,
			FieldName : EmailHistoriesAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : EmailHistoriesAdminValidatorsFields.Name,
			Value : EmailHistoriesAdminValidatorsFields.Value,
			FieldName : EmailHistoriesAdminValidatorsFields.FieldName,
			PreOptions : EmailHistoriesAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			EmailHistoryID : EmailHistoriesAdminValidatorsFields.EmailHistoryID	
	},

	GetGrid : {
			Search : EmailHistoriesAdminValidatorsFields.Search,
			SortColumn : EmailHistoriesAdminValidatorsFields.SortColumn,
			SortAscending : EmailHistoriesAdminValidatorsFields.SortAscending,
			SkipRows : EmailHistoriesAdminValidatorsFields.SkipRows,
			NumRows : EmailHistoriesAdminValidatorsFields.NumRows	
	},

	GetGrid : {	
	},

	GetGridByEmailTemplateID : {
			EmailTemplateID : EmailHistoriesAdminValidatorsFields.EmailTemplateID	
	},

	GetGridByEmailTemplateID : {
			EmailTemplateID : EmailHistoriesAdminValidatorsFields.EmailTemplateID,
			Search : EmailHistoriesAdminValidatorsFields.Search,
			SortColumn : EmailHistoriesAdminValidatorsFields.SortColumn,
			SortAscending : EmailHistoriesAdminValidatorsFields.SortAscending,
			SkipRows : EmailHistoriesAdminValidatorsFields.SkipRows,
			NumRows : EmailHistoriesAdminValidatorsFields.NumRows	
	},

	GetGridByEmailTemplateIDCount : {
			EmailTemplateID : EmailHistoriesAdminValidatorsFields.EmailTemplateID,
			Search : EmailHistoriesAdminValidatorsFields.Search	
	},

	GetGridByEmailTemplateIDHtml : {
			EmailTemplateID : EmailHistoriesAdminValidatorsFields.EmailTemplateID	
	},

	GetGridByEmailTemplateIDHtml : {
			EmailTemplateID : EmailHistoriesAdminValidatorsFields.EmailTemplateID,
			Search : EmailHistoriesAdminValidatorsFields.Search,
			SortColumn : EmailHistoriesAdminValidatorsFields.SortColumn,
			SortAscending : EmailHistoriesAdminValidatorsFields.SortAscending,
			SkipRows : EmailHistoriesAdminValidatorsFields.SkipRows,
			NumRows : EmailHistoriesAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : EmailHistoriesAdminValidatorsFields.Search	
	},

	GetGridHtml : {
			Search : EmailHistoriesAdminValidatorsFields.Search,
			SortColumn : EmailHistoriesAdminValidatorsFields.SortColumn,
			SortAscending : EmailHistoriesAdminValidatorsFields.SortAscending,
			SkipRows : EmailHistoriesAdminValidatorsFields.SkipRows,
			NumRows : EmailHistoriesAdminValidatorsFields.NumRows	
	},

	GetGridHtml : {	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    