

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["RolesAdminValidatorsFields"])) {
	var RolesAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(RolesAdminValidatorsFields.FieldName)) {
	RolesAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(RolesAdminValidatorsFields.Name)) {
	RolesAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(RolesAdminValidatorsFields.NumRows)) {
	RolesAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(RolesAdminValidatorsFields.PreOptions)) {
	RolesAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(RolesAdminValidatorsFields.RoleID)) {
	RolesAdminValidatorsFields.RoleID = {Validators : [Validators.Text], InvalidMessage: "Invalid RoleID"};
}
if (!ObjectUtil.HasValue(RolesAdminValidatorsFields.Search)) {
	RolesAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(RolesAdminValidatorsFields.SkipRows)) {
	RolesAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(RolesAdminValidatorsFields.SortAscending)) {
	RolesAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(RolesAdminValidatorsFields.SortColumn)) {
	RolesAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(RolesAdminValidatorsFields.UserID)) {
	RolesAdminValidatorsFields.UserID = {Validators : [Validators.Text], InvalidMessage: "Invalid UserID"};
}
if (!ObjectUtil.HasValue(RolesAdminValidatorsFields.Value)) {
	RolesAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var RolesAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.RolesAdmin.ashx"

	,
	GetDetails : function(RoleID, Callback) {
        return RolesAdmin.GetDetailsObject({ RoleID : RoleID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RolesAdmin.GetDetails.onValidationError))
					RolesAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RolesAdmin.Url, 
					Method : "GetDetails", 
					Params : { RoleID : oObject.RoleID}, 
					Serialize : RolesAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RolesAdmin.GetDetails.onErrorReceived) ? RolesAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RolesAdmin.Url, "GetDetails", { RoleID : oObject.RoleID}, RolesAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return RolesAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RolesAdmin.GetDropDown.onValidationError))
					RolesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RolesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : RolesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RolesAdmin.GetDropDown.onErrorReceived) ? RolesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RolesAdmin.Url, "GetDropDown", { }, RolesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return RolesAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RolesAdmin.GetDropDown.onValidationError))
					RolesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RolesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : RolesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RolesAdmin.GetDropDown.onErrorReceived) ? RolesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RolesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, RolesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return RolesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RolesAdmin.GetDropDown.onValidationError))
					RolesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RolesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : RolesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RolesAdmin.GetDropDown.onErrorReceived) ? RolesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RolesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, RolesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return RolesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RolesAdmin.GetDropDown.onValidationError))
					RolesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RolesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : RolesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RolesAdmin.GetDropDown.onErrorReceived) ? RolesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RolesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, RolesAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(RoleID, Callback) {
        return RolesAdmin.GetEditObject({ RoleID : RoleID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RolesAdmin.GetEdit.onValidationError))
					RolesAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RolesAdmin.Url, 
					Method : "GetEdit", 
					Params : { RoleID : oObject.RoleID}, 
					Serialize : RolesAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RolesAdmin.GetEdit.onErrorReceived) ? RolesAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RolesAdmin.Url, "GetEdit", { RoleID : oObject.RoleID}, RolesAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RolesAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RolesAdmin.GetGrid.onValidationError))
					RolesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RolesAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RolesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RolesAdmin.GetGrid.onErrorReceived) ? RolesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RolesAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RolesAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Callback) {
        return RolesAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RolesAdmin.GetGrid.onValidationError))
					RolesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RolesAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : RolesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RolesAdmin.GetGrid.onErrorReceived) ? RolesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RolesAdmin.Url, "GetGrid", { }, RolesAdmin.GetGrid.Serialize || {});
    },
	GetGridByUserID : function(UserID, Callback) {
        return RolesAdmin.GetGridByUserIDObject({ UserID : UserID}, Callback);
    },

	GetGridByUserIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesAdminValidators.GetGridByUserID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RolesAdmin.GetGridByUserID.onValidationError))
					RolesAdmin.GetGridByUserID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RolesAdmin.Url, 
					Method : "GetGridByUserID", 
					Params : { UserID : oObject.UserID}, 
					Serialize : RolesAdmin.GetGridByUserID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RolesAdmin.GetGridByUserID.onErrorReceived) ? RolesAdmin.GetGridByUserID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RolesAdmin.Url, "GetGridByUserID", { UserID : oObject.UserID}, RolesAdmin.GetGridByUserID.Serialize || {});
    },
	GetGridByUserID : function(UserID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RolesAdmin.GetGridByUserIDObject({ UserID : UserID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByUserIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesAdminValidators.GetGridByUserID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RolesAdmin.GetGridByUserID.onValidationError))
					RolesAdmin.GetGridByUserID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RolesAdmin.Url, 
					Method : "GetGridByUserID", 
					Params : { UserID : oObject.UserID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RolesAdmin.GetGridByUserID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RolesAdmin.GetGridByUserID.onErrorReceived) ? RolesAdmin.GetGridByUserID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RolesAdmin.Url, "GetGridByUserID", { UserID : oObject.UserID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RolesAdmin.GetGridByUserID.Serialize || {});
    },
	GetGridByUserIDCount : function(UserID, Search, Callback) {
        return RolesAdmin.GetGridByUserIDCountObject({ UserID : UserID,Search : Search}, Callback);
    },

	GetGridByUserIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesAdminValidators.GetGridByUserIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RolesAdmin.GetGridByUserIDCount.onValidationError))
					RolesAdmin.GetGridByUserIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RolesAdmin.Url, 
					Method : "GetGridByUserIDCount", 
					Params : { UserID : oObject.UserID,Search : oObject.Search}, 
					Serialize : RolesAdmin.GetGridByUserIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RolesAdmin.GetGridByUserIDCount.onErrorReceived) ? RolesAdmin.GetGridByUserIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RolesAdmin.Url, "GetGridByUserIDCount", { UserID : oObject.UserID,Search : oObject.Search}, RolesAdmin.GetGridByUserIDCount.Serialize || {});
    },
	GetGridByUserIDHtml : function(UserID, Callback) {
        return RolesAdmin.GetGridByUserIDHtmlObject({ UserID : UserID}, Callback);
    },

	GetGridByUserIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesAdminValidators.GetGridByUserIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RolesAdmin.GetGridByUserIDHtml.onValidationError))
					RolesAdmin.GetGridByUserIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RolesAdmin.Url, 
					Method : "GetGridByUserIDHtml", 
					Params : { UserID : oObject.UserID}, 
					Serialize : RolesAdmin.GetGridByUserIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RolesAdmin.GetGridByUserIDHtml.onErrorReceived) ? RolesAdmin.GetGridByUserIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RolesAdmin.Url, "GetGridByUserIDHtml", { UserID : oObject.UserID}, RolesAdmin.GetGridByUserIDHtml.Serialize || {});
    },
	GetGridByUserIDHtml : function(UserID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RolesAdmin.GetGridByUserIDHtmlObject({ UserID : UserID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByUserIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesAdminValidators.GetGridByUserIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RolesAdmin.GetGridByUserIDHtml.onValidationError))
					RolesAdmin.GetGridByUserIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RolesAdmin.Url, 
					Method : "GetGridByUserIDHtml", 
					Params : { UserID : oObject.UserID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RolesAdmin.GetGridByUserIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RolesAdmin.GetGridByUserIDHtml.onErrorReceived) ? RolesAdmin.GetGridByUserIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RolesAdmin.Url, "GetGridByUserIDHtml", { UserID : oObject.UserID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RolesAdmin.GetGridByUserIDHtml.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return RolesAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RolesAdmin.GetGridCount.onValidationError))
					RolesAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RolesAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : RolesAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RolesAdmin.GetGridCount.onErrorReceived) ? RolesAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RolesAdmin.Url, "GetGridCount", { Search : oObject.Search}, RolesAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RolesAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RolesAdmin.GetGridHtml.onValidationError))
					RolesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RolesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RolesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RolesAdmin.GetGridHtml.onErrorReceived) ? RolesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RolesAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RolesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return RolesAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RolesAdmin.GetGridHtml.onValidationError))
					RolesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RolesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : RolesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RolesAdmin.GetGridHtml.onErrorReceived) ? RolesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RolesAdmin.Url, "GetGridHtml", { }, RolesAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return RolesAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RolesAdmin.GetInsert.onValidationError))
					RolesAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RolesAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : RolesAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RolesAdmin.GetInsert.onErrorReceived) ? RolesAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RolesAdmin.Url, "GetInsert", { }, RolesAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return RolesAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RolesAdmin.Initialize.onValidationError))
					RolesAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RolesAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : RolesAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RolesAdmin.Initialize.onErrorReceived) ? RolesAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RolesAdmin.Url, "Initialize", { }, RolesAdmin.Initialize.Serialize || {});
    }
};

var RolesAdminValidators = {
	

	GetDetails : {
			RoleID : RolesAdminValidatorsFields.RoleID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : RolesAdminValidatorsFields.Name,
			Value : RolesAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : RolesAdminValidatorsFields.Name,
			Value : RolesAdminValidatorsFields.Value,
			FieldName : RolesAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : RolesAdminValidatorsFields.Name,
			Value : RolesAdminValidatorsFields.Value,
			FieldName : RolesAdminValidatorsFields.FieldName,
			PreOptions : RolesAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			RoleID : RolesAdminValidatorsFields.RoleID	
	},

	GetGrid : {
			Search : RolesAdminValidatorsFields.Search,
			SortColumn : RolesAdminValidatorsFields.SortColumn,
			SortAscending : RolesAdminValidatorsFields.SortAscending,
			SkipRows : RolesAdminValidatorsFields.SkipRows,
			NumRows : RolesAdminValidatorsFields.NumRows	
	},

	GetGrid : {	
	},

	GetGridByUserID : {
			UserID : RolesAdminValidatorsFields.UserID	
	},

	GetGridByUserID : {
			UserID : RolesAdminValidatorsFields.UserID,
			Search : RolesAdminValidatorsFields.Search,
			SortColumn : RolesAdminValidatorsFields.SortColumn,
			SortAscending : RolesAdminValidatorsFields.SortAscending,
			SkipRows : RolesAdminValidatorsFields.SkipRows,
			NumRows : RolesAdminValidatorsFields.NumRows	
	},

	GetGridByUserIDCount : {
			UserID : RolesAdminValidatorsFields.UserID,
			Search : RolesAdminValidatorsFields.Search	
	},

	GetGridByUserIDHtml : {
			UserID : RolesAdminValidatorsFields.UserID	
	},

	GetGridByUserIDHtml : {
			UserID : RolesAdminValidatorsFields.UserID,
			Search : RolesAdminValidatorsFields.Search,
			SortColumn : RolesAdminValidatorsFields.SortColumn,
			SortAscending : RolesAdminValidatorsFields.SortAscending,
			SkipRows : RolesAdminValidatorsFields.SkipRows,
			NumRows : RolesAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : RolesAdminValidatorsFields.Search	
	},

	GetGridHtml : {
			Search : RolesAdminValidatorsFields.Search,
			SortColumn : RolesAdminValidatorsFields.SortColumn,
			SortAscending : RolesAdminValidatorsFields.SortAscending,
			SkipRows : RolesAdminValidatorsFields.SkipRows,
			NumRows : RolesAdminValidatorsFields.NumRows	
	},

	GetGridHtml : {	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    