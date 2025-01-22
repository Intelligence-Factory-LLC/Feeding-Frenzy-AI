

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["EmailTemplatesAdminValidatorsFields"])) {
	var EmailTemplatesAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(EmailTemplatesAdminValidatorsFields.EmailTemplateID)) {
	EmailTemplatesAdminValidatorsFields.EmailTemplateID = {Validators : [Validators.Text], InvalidMessage: "Invalid EmailTemplateID"};
}
if (!ObjectUtil.HasValue(EmailTemplatesAdminValidatorsFields.FieldName)) {
	EmailTemplatesAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(EmailTemplatesAdminValidatorsFields.Name)) {
	EmailTemplatesAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(EmailTemplatesAdminValidatorsFields.NumRows)) {
	EmailTemplatesAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(EmailTemplatesAdminValidatorsFields.PreOptions)) {
	EmailTemplatesAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(EmailTemplatesAdminValidatorsFields.Search)) {
	EmailTemplatesAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(EmailTemplatesAdminValidatorsFields.SkipRows)) {
	EmailTemplatesAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(EmailTemplatesAdminValidatorsFields.SortAscending)) {
	EmailTemplatesAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(EmailTemplatesAdminValidatorsFields.SortColumn)) {
	EmailTemplatesAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(EmailTemplatesAdminValidatorsFields.Value)) {
	EmailTemplatesAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var EmailTemplatesAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.EmailTemplatesAdmin.ashx"

	,
	GetDetails : function(EmailTemplateID, Callback) {
        return EmailTemplatesAdmin.GetDetailsObject({ EmailTemplateID : EmailTemplateID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplatesAdmin.GetDetails.onValidationError))
					EmailTemplatesAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplatesAdmin.Url, 
					Method : "GetDetails", 
					Params : { EmailTemplateID : oObject.EmailTemplateID}, 
					Serialize : EmailTemplatesAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplatesAdmin.GetDetails.onErrorReceived) ? EmailTemplatesAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplatesAdmin.Url, "GetDetails", { EmailTemplateID : oObject.EmailTemplateID}, EmailTemplatesAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return EmailTemplatesAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplatesAdmin.GetDropDown.onValidationError))
					EmailTemplatesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplatesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : EmailTemplatesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplatesAdmin.GetDropDown.onErrorReceived) ? EmailTemplatesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplatesAdmin.Url, "GetDropDown", { }, EmailTemplatesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return EmailTemplatesAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplatesAdmin.GetDropDown.onValidationError))
					EmailTemplatesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplatesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : EmailTemplatesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplatesAdmin.GetDropDown.onErrorReceived) ? EmailTemplatesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplatesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, EmailTemplatesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return EmailTemplatesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplatesAdmin.GetDropDown.onValidationError))
					EmailTemplatesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplatesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : EmailTemplatesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplatesAdmin.GetDropDown.onErrorReceived) ? EmailTemplatesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplatesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, EmailTemplatesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return EmailTemplatesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplatesAdmin.GetDropDown.onValidationError))
					EmailTemplatesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplatesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : EmailTemplatesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplatesAdmin.GetDropDown.onErrorReceived) ? EmailTemplatesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplatesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, EmailTemplatesAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(EmailTemplateID, Callback) {
        return EmailTemplatesAdmin.GetEditObject({ EmailTemplateID : EmailTemplateID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplatesAdmin.GetEdit.onValidationError))
					EmailTemplatesAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplatesAdmin.Url, 
					Method : "GetEdit", 
					Params : { EmailTemplateID : oObject.EmailTemplateID}, 
					Serialize : EmailTemplatesAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplatesAdmin.GetEdit.onErrorReceived) ? EmailTemplatesAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplatesAdmin.Url, "GetEdit", { EmailTemplateID : oObject.EmailTemplateID}, EmailTemplatesAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return EmailTemplatesAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplatesAdmin.GetGrid.onValidationError))
					EmailTemplatesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplatesAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : EmailTemplatesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplatesAdmin.GetGrid.onErrorReceived) ? EmailTemplatesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplatesAdmin.Url, "GetGrid", { }, EmailTemplatesAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return EmailTemplatesAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplatesAdmin.GetGrid.onValidationError))
					EmailTemplatesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplatesAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : EmailTemplatesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplatesAdmin.GetGrid.onErrorReceived) ? EmailTemplatesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplatesAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, EmailTemplatesAdmin.GetGrid.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return EmailTemplatesAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplatesAdmin.GetGridCount.onValidationError))
					EmailTemplatesAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplatesAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : EmailTemplatesAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplatesAdmin.GetGridCount.onErrorReceived) ? EmailTemplatesAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplatesAdmin.Url, "GetGridCount", { Search : oObject.Search}, EmailTemplatesAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return EmailTemplatesAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplatesAdmin.GetGridHtml.onValidationError))
					EmailTemplatesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplatesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : EmailTemplatesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplatesAdmin.GetGridHtml.onErrorReceived) ? EmailTemplatesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplatesAdmin.Url, "GetGridHtml", { }, EmailTemplatesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return EmailTemplatesAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplatesAdmin.GetGridHtml.onValidationError))
					EmailTemplatesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplatesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : EmailTemplatesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplatesAdmin.GetGridHtml.onErrorReceived) ? EmailTemplatesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplatesAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, EmailTemplatesAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return EmailTemplatesAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplatesAdmin.GetInsert.onValidationError))
					EmailTemplatesAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplatesAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : EmailTemplatesAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplatesAdmin.GetInsert.onErrorReceived) ? EmailTemplatesAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplatesAdmin.Url, "GetInsert", { }, EmailTemplatesAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return EmailTemplatesAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, EmailTemplatesAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(EmailTemplatesAdmin.Initialize.onValidationError))
					EmailTemplatesAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: EmailTemplatesAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : EmailTemplatesAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(EmailTemplatesAdmin.Initialize.onErrorReceived) ? EmailTemplatesAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(EmailTemplatesAdmin.Url, "Initialize", { }, EmailTemplatesAdmin.Initialize.Serialize || {});
    }
};

var EmailTemplatesAdminValidators = {
	

	GetDetails : {
			EmailTemplateID : EmailTemplatesAdminValidatorsFields.EmailTemplateID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : EmailTemplatesAdminValidatorsFields.Name,
			Value : EmailTemplatesAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : EmailTemplatesAdminValidatorsFields.Name,
			Value : EmailTemplatesAdminValidatorsFields.Value,
			FieldName : EmailTemplatesAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : EmailTemplatesAdminValidatorsFields.Name,
			Value : EmailTemplatesAdminValidatorsFields.Value,
			FieldName : EmailTemplatesAdminValidatorsFields.FieldName,
			PreOptions : EmailTemplatesAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			EmailTemplateID : EmailTemplatesAdminValidatorsFields.EmailTemplateID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : EmailTemplatesAdminValidatorsFields.Search,
			SortColumn : EmailTemplatesAdminValidatorsFields.SortColumn,
			SortAscending : EmailTemplatesAdminValidatorsFields.SortAscending,
			SkipRows : EmailTemplatesAdminValidatorsFields.SkipRows,
			NumRows : EmailTemplatesAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : EmailTemplatesAdminValidatorsFields.Search	
	},

	GetGridHtml : {	
	},

	GetGridHtml : {
			Search : EmailTemplatesAdminValidatorsFields.Search,
			SortColumn : EmailTemplatesAdminValidatorsFields.SortColumn,
			SortAscending : EmailTemplatesAdminValidatorsFields.SortAscending,
			SkipRows : EmailTemplatesAdminValidatorsFields.SkipRows,
			NumRows : EmailTemplatesAdminValidatorsFields.NumRows	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    