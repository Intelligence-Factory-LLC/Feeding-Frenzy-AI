

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["AuthorizationsAdminValidatorsFields"])) {
	var AuthorizationsAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(AuthorizationsAdminValidatorsFields.AuthorizationID)) {
	AuthorizationsAdminValidatorsFields.AuthorizationID = {Validators : [Validators.Text], InvalidMessage: "Invalid AuthorizationID"};
}
if (!ObjectUtil.HasValue(AuthorizationsAdminValidatorsFields.FieldName)) {
	AuthorizationsAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(AuthorizationsAdminValidatorsFields.Name)) {
	AuthorizationsAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(AuthorizationsAdminValidatorsFields.NumRows)) {
	AuthorizationsAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(AuthorizationsAdminValidatorsFields.PreOptions)) {
	AuthorizationsAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(AuthorizationsAdminValidatorsFields.Search)) {
	AuthorizationsAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(AuthorizationsAdminValidatorsFields.SkipRows)) {
	AuthorizationsAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(AuthorizationsAdminValidatorsFields.SortAscending)) {
	AuthorizationsAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(AuthorizationsAdminValidatorsFields.SortColumn)) {
	AuthorizationsAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(AuthorizationsAdminValidatorsFields.UserID)) {
	AuthorizationsAdminValidatorsFields.UserID = {Validators : [Validators.Text], InvalidMessage: "Invalid UserID"};
}
if (!ObjectUtil.HasValue(AuthorizationsAdminValidatorsFields.Value)) {
	AuthorizationsAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var AuthorizationsAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.AuthorizationsAdmin.ashx"

	,
	GetDetails : function(AuthorizationID, Callback) {
        return AuthorizationsAdmin.GetDetailsObject({ AuthorizationID : AuthorizationID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AuthorizationsAdmin.GetDetails.onValidationError))
					AuthorizationsAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AuthorizationsAdmin.Url, 
					Method : "GetDetails", 
					Params : { AuthorizationID : oObject.AuthorizationID}, 
					Serialize : AuthorizationsAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AuthorizationsAdmin.GetDetails.onErrorReceived) ? AuthorizationsAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AuthorizationsAdmin.Url, "GetDetails", { AuthorizationID : oObject.AuthorizationID}, AuthorizationsAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return AuthorizationsAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AuthorizationsAdmin.GetDropDown.onValidationError))
					AuthorizationsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AuthorizationsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : AuthorizationsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AuthorizationsAdmin.GetDropDown.onErrorReceived) ? AuthorizationsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AuthorizationsAdmin.Url, "GetDropDown", { }, AuthorizationsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return AuthorizationsAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AuthorizationsAdmin.GetDropDown.onValidationError))
					AuthorizationsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AuthorizationsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : AuthorizationsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AuthorizationsAdmin.GetDropDown.onErrorReceived) ? AuthorizationsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AuthorizationsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, AuthorizationsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return AuthorizationsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AuthorizationsAdmin.GetDropDown.onValidationError))
					AuthorizationsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AuthorizationsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : AuthorizationsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AuthorizationsAdmin.GetDropDown.onErrorReceived) ? AuthorizationsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AuthorizationsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, AuthorizationsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return AuthorizationsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AuthorizationsAdmin.GetDropDown.onValidationError))
					AuthorizationsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AuthorizationsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : AuthorizationsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AuthorizationsAdmin.GetDropDown.onErrorReceived) ? AuthorizationsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AuthorizationsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, AuthorizationsAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(AuthorizationID, Callback) {
        return AuthorizationsAdmin.GetEditObject({ AuthorizationID : AuthorizationID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AuthorizationsAdmin.GetEdit.onValidationError))
					AuthorizationsAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AuthorizationsAdmin.Url, 
					Method : "GetEdit", 
					Params : { AuthorizationID : oObject.AuthorizationID}, 
					Serialize : AuthorizationsAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AuthorizationsAdmin.GetEdit.onErrorReceived) ? AuthorizationsAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AuthorizationsAdmin.Url, "GetEdit", { AuthorizationID : oObject.AuthorizationID}, AuthorizationsAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return AuthorizationsAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AuthorizationsAdmin.GetGrid.onValidationError))
					AuthorizationsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AuthorizationsAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : AuthorizationsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AuthorizationsAdmin.GetGrid.onErrorReceived) ? AuthorizationsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AuthorizationsAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, AuthorizationsAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Callback) {
        return AuthorizationsAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AuthorizationsAdmin.GetGrid.onValidationError))
					AuthorizationsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AuthorizationsAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : AuthorizationsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AuthorizationsAdmin.GetGrid.onErrorReceived) ? AuthorizationsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AuthorizationsAdmin.Url, "GetGrid", { }, AuthorizationsAdmin.GetGrid.Serialize || {});
    },
	GetGridByUserID : function(UserID, Callback) {
        return AuthorizationsAdmin.GetGridByUserIDObject({ UserID : UserID}, Callback);
    },

	GetGridByUserIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsAdminValidators.GetGridByUserID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AuthorizationsAdmin.GetGridByUserID.onValidationError))
					AuthorizationsAdmin.GetGridByUserID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AuthorizationsAdmin.Url, 
					Method : "GetGridByUserID", 
					Params : { UserID : oObject.UserID}, 
					Serialize : AuthorizationsAdmin.GetGridByUserID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AuthorizationsAdmin.GetGridByUserID.onErrorReceived) ? AuthorizationsAdmin.GetGridByUserID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AuthorizationsAdmin.Url, "GetGridByUserID", { UserID : oObject.UserID}, AuthorizationsAdmin.GetGridByUserID.Serialize || {});
    },
	GetGridByUserID : function(UserID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return AuthorizationsAdmin.GetGridByUserIDObject({ UserID : UserID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByUserIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsAdminValidators.GetGridByUserID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AuthorizationsAdmin.GetGridByUserID.onValidationError))
					AuthorizationsAdmin.GetGridByUserID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AuthorizationsAdmin.Url, 
					Method : "GetGridByUserID", 
					Params : { UserID : oObject.UserID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : AuthorizationsAdmin.GetGridByUserID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AuthorizationsAdmin.GetGridByUserID.onErrorReceived) ? AuthorizationsAdmin.GetGridByUserID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AuthorizationsAdmin.Url, "GetGridByUserID", { UserID : oObject.UserID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, AuthorizationsAdmin.GetGridByUserID.Serialize || {});
    },
	GetGridByUserIDCount : function(UserID, Search, Callback) {
        return AuthorizationsAdmin.GetGridByUserIDCountObject({ UserID : UserID,Search : Search}, Callback);
    },

	GetGridByUserIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsAdminValidators.GetGridByUserIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AuthorizationsAdmin.GetGridByUserIDCount.onValidationError))
					AuthorizationsAdmin.GetGridByUserIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AuthorizationsAdmin.Url, 
					Method : "GetGridByUserIDCount", 
					Params : { UserID : oObject.UserID,Search : oObject.Search}, 
					Serialize : AuthorizationsAdmin.GetGridByUserIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AuthorizationsAdmin.GetGridByUserIDCount.onErrorReceived) ? AuthorizationsAdmin.GetGridByUserIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AuthorizationsAdmin.Url, "GetGridByUserIDCount", { UserID : oObject.UserID,Search : oObject.Search}, AuthorizationsAdmin.GetGridByUserIDCount.Serialize || {});
    },
	GetGridByUserIDHtml : function(UserID, Callback) {
        return AuthorizationsAdmin.GetGridByUserIDHtmlObject({ UserID : UserID}, Callback);
    },

	GetGridByUserIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsAdminValidators.GetGridByUserIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AuthorizationsAdmin.GetGridByUserIDHtml.onValidationError))
					AuthorizationsAdmin.GetGridByUserIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AuthorizationsAdmin.Url, 
					Method : "GetGridByUserIDHtml", 
					Params : { UserID : oObject.UserID}, 
					Serialize : AuthorizationsAdmin.GetGridByUserIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AuthorizationsAdmin.GetGridByUserIDHtml.onErrorReceived) ? AuthorizationsAdmin.GetGridByUserIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AuthorizationsAdmin.Url, "GetGridByUserIDHtml", { UserID : oObject.UserID}, AuthorizationsAdmin.GetGridByUserIDHtml.Serialize || {});
    },
	GetGridByUserIDHtml : function(UserID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return AuthorizationsAdmin.GetGridByUserIDHtmlObject({ UserID : UserID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByUserIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsAdminValidators.GetGridByUserIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AuthorizationsAdmin.GetGridByUserIDHtml.onValidationError))
					AuthorizationsAdmin.GetGridByUserIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AuthorizationsAdmin.Url, 
					Method : "GetGridByUserIDHtml", 
					Params : { UserID : oObject.UserID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : AuthorizationsAdmin.GetGridByUserIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AuthorizationsAdmin.GetGridByUserIDHtml.onErrorReceived) ? AuthorizationsAdmin.GetGridByUserIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AuthorizationsAdmin.Url, "GetGridByUserIDHtml", { UserID : oObject.UserID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, AuthorizationsAdmin.GetGridByUserIDHtml.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return AuthorizationsAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AuthorizationsAdmin.GetGridCount.onValidationError))
					AuthorizationsAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AuthorizationsAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : AuthorizationsAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AuthorizationsAdmin.GetGridCount.onErrorReceived) ? AuthorizationsAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AuthorizationsAdmin.Url, "GetGridCount", { Search : oObject.Search}, AuthorizationsAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return AuthorizationsAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AuthorizationsAdmin.GetGridHtml.onValidationError))
					AuthorizationsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AuthorizationsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : AuthorizationsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AuthorizationsAdmin.GetGridHtml.onErrorReceived) ? AuthorizationsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AuthorizationsAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, AuthorizationsAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return AuthorizationsAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AuthorizationsAdmin.GetGridHtml.onValidationError))
					AuthorizationsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AuthorizationsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : AuthorizationsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AuthorizationsAdmin.GetGridHtml.onErrorReceived) ? AuthorizationsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AuthorizationsAdmin.Url, "GetGridHtml", { }, AuthorizationsAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return AuthorizationsAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AuthorizationsAdmin.GetInsert.onValidationError))
					AuthorizationsAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AuthorizationsAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : AuthorizationsAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AuthorizationsAdmin.GetInsert.onErrorReceived) ? AuthorizationsAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AuthorizationsAdmin.Url, "GetInsert", { }, AuthorizationsAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return AuthorizationsAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AuthorizationsAdmin.Initialize.onValidationError))
					AuthorizationsAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AuthorizationsAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : AuthorizationsAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AuthorizationsAdmin.Initialize.onErrorReceived) ? AuthorizationsAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AuthorizationsAdmin.Url, "Initialize", { }, AuthorizationsAdmin.Initialize.Serialize || {});
    }
};

var AuthorizationsAdminValidators = {
	

	GetDetails : {
			AuthorizationID : AuthorizationsAdminValidatorsFields.AuthorizationID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : AuthorizationsAdminValidatorsFields.Name,
			Value : AuthorizationsAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : AuthorizationsAdminValidatorsFields.Name,
			Value : AuthorizationsAdminValidatorsFields.Value,
			FieldName : AuthorizationsAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : AuthorizationsAdminValidatorsFields.Name,
			Value : AuthorizationsAdminValidatorsFields.Value,
			FieldName : AuthorizationsAdminValidatorsFields.FieldName,
			PreOptions : AuthorizationsAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			AuthorizationID : AuthorizationsAdminValidatorsFields.AuthorizationID	
	},

	GetGrid : {
			Search : AuthorizationsAdminValidatorsFields.Search,
			SortColumn : AuthorizationsAdminValidatorsFields.SortColumn,
			SortAscending : AuthorizationsAdminValidatorsFields.SortAscending,
			SkipRows : AuthorizationsAdminValidatorsFields.SkipRows,
			NumRows : AuthorizationsAdminValidatorsFields.NumRows	
	},

	GetGrid : {	
	},

	GetGridByUserID : {
			UserID : AuthorizationsAdminValidatorsFields.UserID	
	},

	GetGridByUserID : {
			UserID : AuthorizationsAdminValidatorsFields.UserID,
			Search : AuthorizationsAdminValidatorsFields.Search,
			SortColumn : AuthorizationsAdminValidatorsFields.SortColumn,
			SortAscending : AuthorizationsAdminValidatorsFields.SortAscending,
			SkipRows : AuthorizationsAdminValidatorsFields.SkipRows,
			NumRows : AuthorizationsAdminValidatorsFields.NumRows	
	},

	GetGridByUserIDCount : {
			UserID : AuthorizationsAdminValidatorsFields.UserID,
			Search : AuthorizationsAdminValidatorsFields.Search	
	},

	GetGridByUserIDHtml : {
			UserID : AuthorizationsAdminValidatorsFields.UserID	
	},

	GetGridByUserIDHtml : {
			UserID : AuthorizationsAdminValidatorsFields.UserID,
			Search : AuthorizationsAdminValidatorsFields.Search,
			SortColumn : AuthorizationsAdminValidatorsFields.SortColumn,
			SortAscending : AuthorizationsAdminValidatorsFields.SortAscending,
			SkipRows : AuthorizationsAdminValidatorsFields.SkipRows,
			NumRows : AuthorizationsAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : AuthorizationsAdminValidatorsFields.Search	
	},

	GetGridHtml : {
			Search : AuthorizationsAdminValidatorsFields.Search,
			SortColumn : AuthorizationsAdminValidatorsFields.SortColumn,
			SortAscending : AuthorizationsAdminValidatorsFields.SortAscending,
			SkipRows : AuthorizationsAdminValidatorsFields.SkipRows,
			NumRows : AuthorizationsAdminValidatorsFields.NumRows	
	},

	GetGridHtml : {	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    