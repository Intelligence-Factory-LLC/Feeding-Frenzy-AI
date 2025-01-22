

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["UsersAdminValidatorsFields"])) {
	var UsersAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(UsersAdminValidatorsFields.FieldName)) {
	UsersAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(UsersAdminValidatorsFields.Name)) {
	UsersAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(UsersAdminValidatorsFields.NumRows)) {
	UsersAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(UsersAdminValidatorsFields.PreOptions)) {
	UsersAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(UsersAdminValidatorsFields.RoleID)) {
	UsersAdminValidatorsFields.RoleID = {Validators : [Validators.Text], InvalidMessage: "Invalid RoleID"};
}
if (!ObjectUtil.HasValue(UsersAdminValidatorsFields.Search)) {
	UsersAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(UsersAdminValidatorsFields.SkipRows)) {
	UsersAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(UsersAdminValidatorsFields.SortAscending)) {
	UsersAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(UsersAdminValidatorsFields.SortColumn)) {
	UsersAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(UsersAdminValidatorsFields.UserID)) {
	UsersAdminValidatorsFields.UserID = {Validators : [Validators.Text], InvalidMessage: "Invalid UserID"};
}
if (!ObjectUtil.HasValue(UsersAdminValidatorsFields.Value)) {
	UsersAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var UsersAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.UsersAdmin.ashx"

	,
	GetDetails : function(UserID, Callback) {
        return UsersAdmin.GetDetailsObject({ UserID : UserID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UsersAdmin.GetDetails.onValidationError))
					UsersAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UsersAdmin.Url, 
					Method : "GetDetails", 
					Params : { UserID : oObject.UserID}, 
					Serialize : UsersAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UsersAdmin.GetDetails.onErrorReceived) ? UsersAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UsersAdmin.Url, "GetDetails", { UserID : oObject.UserID}, UsersAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return UsersAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UsersAdmin.GetDropDown.onValidationError))
					UsersAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UsersAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : UsersAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UsersAdmin.GetDropDown.onErrorReceived) ? UsersAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UsersAdmin.Url, "GetDropDown", { }, UsersAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return UsersAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UsersAdmin.GetDropDown.onValidationError))
					UsersAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UsersAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : UsersAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UsersAdmin.GetDropDown.onErrorReceived) ? UsersAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UsersAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, UsersAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return UsersAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UsersAdmin.GetDropDown.onValidationError))
					UsersAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UsersAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : UsersAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UsersAdmin.GetDropDown.onErrorReceived) ? UsersAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UsersAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, UsersAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return UsersAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UsersAdmin.GetDropDown.onValidationError))
					UsersAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UsersAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : UsersAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UsersAdmin.GetDropDown.onErrorReceived) ? UsersAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UsersAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, UsersAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(UserID, Callback) {
        return UsersAdmin.GetEditObject({ UserID : UserID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UsersAdmin.GetEdit.onValidationError))
					UsersAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UsersAdmin.Url, 
					Method : "GetEdit", 
					Params : { UserID : oObject.UserID}, 
					Serialize : UsersAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UsersAdmin.GetEdit.onErrorReceived) ? UsersAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UsersAdmin.Url, "GetEdit", { UserID : oObject.UserID}, UsersAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return UsersAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UsersAdmin.GetGrid.onValidationError))
					UsersAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UsersAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : UsersAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UsersAdmin.GetGrid.onErrorReceived) ? UsersAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UsersAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, UsersAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Callback) {
        return UsersAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UsersAdmin.GetGrid.onValidationError))
					UsersAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UsersAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : UsersAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UsersAdmin.GetGrid.onErrorReceived) ? UsersAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UsersAdmin.Url, "GetGrid", { }, UsersAdmin.GetGrid.Serialize || {});
    },
	GetGridByRoleID : function(RoleID, Callback) {
        return UsersAdmin.GetGridByRoleIDObject({ RoleID : RoleID}, Callback);
    },

	GetGridByRoleIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersAdminValidators.GetGridByRoleID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UsersAdmin.GetGridByRoleID.onValidationError))
					UsersAdmin.GetGridByRoleID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UsersAdmin.Url, 
					Method : "GetGridByRoleID", 
					Params : { RoleID : oObject.RoleID}, 
					Serialize : UsersAdmin.GetGridByRoleID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UsersAdmin.GetGridByRoleID.onErrorReceived) ? UsersAdmin.GetGridByRoleID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UsersAdmin.Url, "GetGridByRoleID", { RoleID : oObject.RoleID}, UsersAdmin.GetGridByRoleID.Serialize || {});
    },
	GetGridByRoleID : function(RoleID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return UsersAdmin.GetGridByRoleIDObject({ RoleID : RoleID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByRoleIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersAdminValidators.GetGridByRoleID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UsersAdmin.GetGridByRoleID.onValidationError))
					UsersAdmin.GetGridByRoleID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UsersAdmin.Url, 
					Method : "GetGridByRoleID", 
					Params : { RoleID : oObject.RoleID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : UsersAdmin.GetGridByRoleID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UsersAdmin.GetGridByRoleID.onErrorReceived) ? UsersAdmin.GetGridByRoleID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UsersAdmin.Url, "GetGridByRoleID", { RoleID : oObject.RoleID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, UsersAdmin.GetGridByRoleID.Serialize || {});
    },
	GetGridByRoleIDCount : function(RoleID, Search, Callback) {
        return UsersAdmin.GetGridByRoleIDCountObject({ RoleID : RoleID,Search : Search}, Callback);
    },

	GetGridByRoleIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersAdminValidators.GetGridByRoleIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UsersAdmin.GetGridByRoleIDCount.onValidationError))
					UsersAdmin.GetGridByRoleIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UsersAdmin.Url, 
					Method : "GetGridByRoleIDCount", 
					Params : { RoleID : oObject.RoleID,Search : oObject.Search}, 
					Serialize : UsersAdmin.GetGridByRoleIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UsersAdmin.GetGridByRoleIDCount.onErrorReceived) ? UsersAdmin.GetGridByRoleIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UsersAdmin.Url, "GetGridByRoleIDCount", { RoleID : oObject.RoleID,Search : oObject.Search}, UsersAdmin.GetGridByRoleIDCount.Serialize || {});
    },
	GetGridByRoleIDHtml : function(RoleID, Callback) {
        return UsersAdmin.GetGridByRoleIDHtmlObject({ RoleID : RoleID}, Callback);
    },

	GetGridByRoleIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersAdminValidators.GetGridByRoleIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UsersAdmin.GetGridByRoleIDHtml.onValidationError))
					UsersAdmin.GetGridByRoleIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UsersAdmin.Url, 
					Method : "GetGridByRoleIDHtml", 
					Params : { RoleID : oObject.RoleID}, 
					Serialize : UsersAdmin.GetGridByRoleIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UsersAdmin.GetGridByRoleIDHtml.onErrorReceived) ? UsersAdmin.GetGridByRoleIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UsersAdmin.Url, "GetGridByRoleIDHtml", { RoleID : oObject.RoleID}, UsersAdmin.GetGridByRoleIDHtml.Serialize || {});
    },
	GetGridByRoleIDHtml : function(RoleID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return UsersAdmin.GetGridByRoleIDHtmlObject({ RoleID : RoleID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByRoleIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersAdminValidators.GetGridByRoleIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UsersAdmin.GetGridByRoleIDHtml.onValidationError))
					UsersAdmin.GetGridByRoleIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UsersAdmin.Url, 
					Method : "GetGridByRoleIDHtml", 
					Params : { RoleID : oObject.RoleID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : UsersAdmin.GetGridByRoleIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UsersAdmin.GetGridByRoleIDHtml.onErrorReceived) ? UsersAdmin.GetGridByRoleIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UsersAdmin.Url, "GetGridByRoleIDHtml", { RoleID : oObject.RoleID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, UsersAdmin.GetGridByRoleIDHtml.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return UsersAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UsersAdmin.GetGridCount.onValidationError))
					UsersAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UsersAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : UsersAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UsersAdmin.GetGridCount.onErrorReceived) ? UsersAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UsersAdmin.Url, "GetGridCount", { Search : oObject.Search}, UsersAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return UsersAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UsersAdmin.GetGridHtml.onValidationError))
					UsersAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UsersAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : UsersAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UsersAdmin.GetGridHtml.onErrorReceived) ? UsersAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UsersAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, UsersAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return UsersAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UsersAdmin.GetGridHtml.onValidationError))
					UsersAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UsersAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : UsersAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UsersAdmin.GetGridHtml.onErrorReceived) ? UsersAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UsersAdmin.Url, "GetGridHtml", { }, UsersAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return UsersAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UsersAdmin.GetInsert.onValidationError))
					UsersAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UsersAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : UsersAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UsersAdmin.GetInsert.onErrorReceived) ? UsersAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UsersAdmin.Url, "GetInsert", { }, UsersAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return UsersAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UsersAdmin.Initialize.onValidationError))
					UsersAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UsersAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : UsersAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UsersAdmin.Initialize.onErrorReceived) ? UsersAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UsersAdmin.Url, "Initialize", { }, UsersAdmin.Initialize.Serialize || {});
    }
};

var UsersAdminValidators = {
	

	GetDetails : {
			UserID : UsersAdminValidatorsFields.UserID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : UsersAdminValidatorsFields.Name,
			Value : UsersAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : UsersAdminValidatorsFields.Name,
			Value : UsersAdminValidatorsFields.Value,
			FieldName : UsersAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : UsersAdminValidatorsFields.Name,
			Value : UsersAdminValidatorsFields.Value,
			FieldName : UsersAdminValidatorsFields.FieldName,
			PreOptions : UsersAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			UserID : UsersAdminValidatorsFields.UserID	
	},

	GetGrid : {
			Search : UsersAdminValidatorsFields.Search,
			SortColumn : UsersAdminValidatorsFields.SortColumn,
			SortAscending : UsersAdminValidatorsFields.SortAscending,
			SkipRows : UsersAdminValidatorsFields.SkipRows,
			NumRows : UsersAdminValidatorsFields.NumRows	
	},

	GetGrid : {	
	},

	GetGridByRoleID : {
			RoleID : UsersAdminValidatorsFields.RoleID	
	},

	GetGridByRoleID : {
			RoleID : UsersAdminValidatorsFields.RoleID,
			Search : UsersAdminValidatorsFields.Search,
			SortColumn : UsersAdminValidatorsFields.SortColumn,
			SortAscending : UsersAdminValidatorsFields.SortAscending,
			SkipRows : UsersAdminValidatorsFields.SkipRows,
			NumRows : UsersAdminValidatorsFields.NumRows	
	},

	GetGridByRoleIDCount : {
			RoleID : UsersAdminValidatorsFields.RoleID,
			Search : UsersAdminValidatorsFields.Search	
	},

	GetGridByRoleIDHtml : {
			RoleID : UsersAdminValidatorsFields.RoleID	
	},

	GetGridByRoleIDHtml : {
			RoleID : UsersAdminValidatorsFields.RoleID,
			Search : UsersAdminValidatorsFields.Search,
			SortColumn : UsersAdminValidatorsFields.SortColumn,
			SortAscending : UsersAdminValidatorsFields.SortAscending,
			SkipRows : UsersAdminValidatorsFields.SkipRows,
			NumRows : UsersAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : UsersAdminValidatorsFields.Search	
	},

	GetGridHtml : {
			Search : UsersAdminValidatorsFields.Search,
			SortColumn : UsersAdminValidatorsFields.SortColumn,
			SortAscending : UsersAdminValidatorsFields.SortAscending,
			SkipRows : UsersAdminValidatorsFields.SkipRows,
			NumRows : UsersAdminValidatorsFields.NumRows	
	},

	GetGridHtml : {	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    