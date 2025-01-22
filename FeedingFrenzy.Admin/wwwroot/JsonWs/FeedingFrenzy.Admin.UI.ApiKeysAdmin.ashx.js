

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["ApiKeysAdminValidatorsFields"])) {
	var ApiKeysAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(ApiKeysAdminValidatorsFields.AuthorizationID)) {
	ApiKeysAdminValidatorsFields.AuthorizationID = {Validators : [Validators.Text], InvalidMessage: "Invalid AuthorizationID"};
}
if (!ObjectUtil.HasValue(ApiKeysAdminValidatorsFields.FieldName)) {
	ApiKeysAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(ApiKeysAdminValidatorsFields.Name)) {
	ApiKeysAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(ApiKeysAdminValidatorsFields.NumRows)) {
	ApiKeysAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(ApiKeysAdminValidatorsFields.PreOptions)) {
	ApiKeysAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(ApiKeysAdminValidatorsFields.Search)) {
	ApiKeysAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(ApiKeysAdminValidatorsFields.SkipRows)) {
	ApiKeysAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(ApiKeysAdminValidatorsFields.SortAscending)) {
	ApiKeysAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(ApiKeysAdminValidatorsFields.SortColumn)) {
	ApiKeysAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(ApiKeysAdminValidatorsFields.Value)) {
	ApiKeysAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var ApiKeysAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.ApiKeysAdmin.ashx"

	,
	GetDetails : function(AuthorizationID, Callback) {
        return ApiKeysAdmin.GetDetailsObject({ AuthorizationID : AuthorizationID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ApiKeysAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ApiKeysAdmin.GetDetails.onValidationError))
					ApiKeysAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ApiKeysAdmin.Url, 
					Method : "GetDetails", 
					Params : { AuthorizationID : oObject.AuthorizationID}, 
					Serialize : ApiKeysAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ApiKeysAdmin.GetDetails.onErrorReceived) ? ApiKeysAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ApiKeysAdmin.Url, "GetDetails", { AuthorizationID : oObject.AuthorizationID}, ApiKeysAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return ApiKeysAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ApiKeysAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ApiKeysAdmin.GetDropDown.onValidationError))
					ApiKeysAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ApiKeysAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : ApiKeysAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ApiKeysAdmin.GetDropDown.onErrorReceived) ? ApiKeysAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ApiKeysAdmin.Url, "GetDropDown", { }, ApiKeysAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return ApiKeysAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ApiKeysAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ApiKeysAdmin.GetDropDown.onValidationError))
					ApiKeysAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ApiKeysAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : ApiKeysAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ApiKeysAdmin.GetDropDown.onErrorReceived) ? ApiKeysAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ApiKeysAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, ApiKeysAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return ApiKeysAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ApiKeysAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ApiKeysAdmin.GetDropDown.onValidationError))
					ApiKeysAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ApiKeysAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : ApiKeysAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ApiKeysAdmin.GetDropDown.onErrorReceived) ? ApiKeysAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ApiKeysAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, ApiKeysAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return ApiKeysAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ApiKeysAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ApiKeysAdmin.GetDropDown.onValidationError))
					ApiKeysAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ApiKeysAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : ApiKeysAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ApiKeysAdmin.GetDropDown.onErrorReceived) ? ApiKeysAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ApiKeysAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, ApiKeysAdmin.GetDropDown.Serialize || {});
    },
	GetDropDownWithNull : function(Callback) {
        return ApiKeysAdmin.GetDropDownWithNullObject({ }, Callback);
    },

	GetDropDownWithNullObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ApiKeysAdminValidators.GetDropDownWithNull)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ApiKeysAdmin.GetDropDownWithNull.onValidationError))
					ApiKeysAdmin.GetDropDownWithNull.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ApiKeysAdmin.Url, 
					Method : "GetDropDownWithNull", 
					Params : { }, 
					Serialize : ApiKeysAdmin.GetDropDownWithNull.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ApiKeysAdmin.GetDropDownWithNull.onErrorReceived) ? ApiKeysAdmin.GetDropDownWithNull.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ApiKeysAdmin.Url, "GetDropDownWithNull", { }, ApiKeysAdmin.GetDropDownWithNull.Serialize || {});
    },
	GetEdit : function(AuthorizationID, Callback) {
        return ApiKeysAdmin.GetEditObject({ AuthorizationID : AuthorizationID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ApiKeysAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ApiKeysAdmin.GetEdit.onValidationError))
					ApiKeysAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ApiKeysAdmin.Url, 
					Method : "GetEdit", 
					Params : { AuthorizationID : oObject.AuthorizationID}, 
					Serialize : ApiKeysAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ApiKeysAdmin.GetEdit.onErrorReceived) ? ApiKeysAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ApiKeysAdmin.Url, "GetEdit", { AuthorizationID : oObject.AuthorizationID}, ApiKeysAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return ApiKeysAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ApiKeysAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ApiKeysAdmin.GetGrid.onValidationError))
					ApiKeysAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ApiKeysAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : ApiKeysAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ApiKeysAdmin.GetGrid.onErrorReceived) ? ApiKeysAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ApiKeysAdmin.Url, "GetGrid", { }, ApiKeysAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return ApiKeysAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ApiKeysAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ApiKeysAdmin.GetGrid.onValidationError))
					ApiKeysAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ApiKeysAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : ApiKeysAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ApiKeysAdmin.GetGrid.onErrorReceived) ? ApiKeysAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ApiKeysAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, ApiKeysAdmin.GetGrid.Serialize || {});
    },
	GetGridByUserID : function(Callback) {
        return ApiKeysAdmin.GetGridByUserIDObject({ }, Callback);
    },

	GetGridByUserIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ApiKeysAdminValidators.GetGridByUserID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ApiKeysAdmin.GetGridByUserID.onValidationError))
					ApiKeysAdmin.GetGridByUserID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ApiKeysAdmin.Url, 
					Method : "GetGridByUserID", 
					Params : { }, 
					Serialize : ApiKeysAdmin.GetGridByUserID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ApiKeysAdmin.GetGridByUserID.onErrorReceived) ? ApiKeysAdmin.GetGridByUserID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ApiKeysAdmin.Url, "GetGridByUserID", { }, ApiKeysAdmin.GetGridByUserID.Serialize || {});
    },
	GetGridByUserID : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return ApiKeysAdmin.GetGridByUserIDObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByUserIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ApiKeysAdminValidators.GetGridByUserID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ApiKeysAdmin.GetGridByUserID.onValidationError))
					ApiKeysAdmin.GetGridByUserID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ApiKeysAdmin.Url, 
					Method : "GetGridByUserID", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : ApiKeysAdmin.GetGridByUserID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ApiKeysAdmin.GetGridByUserID.onErrorReceived) ? ApiKeysAdmin.GetGridByUserID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ApiKeysAdmin.Url, "GetGridByUserID", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, ApiKeysAdmin.GetGridByUserID.Serialize || {});
    },
	GetGridByUserIDCount : function(Search, Callback) {
        return ApiKeysAdmin.GetGridByUserIDCountObject({ Search : Search}, Callback);
    },

	GetGridByUserIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ApiKeysAdminValidators.GetGridByUserIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ApiKeysAdmin.GetGridByUserIDCount.onValidationError))
					ApiKeysAdmin.GetGridByUserIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ApiKeysAdmin.Url, 
					Method : "GetGridByUserIDCount", 
					Params : { Search : oObject.Search}, 
					Serialize : ApiKeysAdmin.GetGridByUserIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ApiKeysAdmin.GetGridByUserIDCount.onErrorReceived) ? ApiKeysAdmin.GetGridByUserIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ApiKeysAdmin.Url, "GetGridByUserIDCount", { Search : oObject.Search}, ApiKeysAdmin.GetGridByUserIDCount.Serialize || {});
    },
	GetGridByUserIDHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return ApiKeysAdmin.GetGridByUserIDHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByUserIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ApiKeysAdminValidators.GetGridByUserIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ApiKeysAdmin.GetGridByUserIDHtml.onValidationError))
					ApiKeysAdmin.GetGridByUserIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ApiKeysAdmin.Url, 
					Method : "GetGridByUserIDHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : ApiKeysAdmin.GetGridByUserIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ApiKeysAdmin.GetGridByUserIDHtml.onErrorReceived) ? ApiKeysAdmin.GetGridByUserIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ApiKeysAdmin.Url, "GetGridByUserIDHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, ApiKeysAdmin.GetGridByUserIDHtml.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return ApiKeysAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ApiKeysAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ApiKeysAdmin.GetGridCount.onValidationError))
					ApiKeysAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ApiKeysAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : ApiKeysAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ApiKeysAdmin.GetGridCount.onErrorReceived) ? ApiKeysAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ApiKeysAdmin.Url, "GetGridCount", { Search : oObject.Search}, ApiKeysAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return ApiKeysAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ApiKeysAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ApiKeysAdmin.GetGridHtml.onValidationError))
					ApiKeysAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ApiKeysAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : ApiKeysAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ApiKeysAdmin.GetGridHtml.onErrorReceived) ? ApiKeysAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ApiKeysAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, ApiKeysAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return ApiKeysAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ApiKeysAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ApiKeysAdmin.GetGridHtml.onValidationError))
					ApiKeysAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ApiKeysAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : ApiKeysAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ApiKeysAdmin.GetGridHtml.onErrorReceived) ? ApiKeysAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ApiKeysAdmin.Url, "GetGridHtml", { }, ApiKeysAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return ApiKeysAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ApiKeysAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ApiKeysAdmin.GetInsert.onValidationError))
					ApiKeysAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ApiKeysAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : ApiKeysAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ApiKeysAdmin.GetInsert.onErrorReceived) ? ApiKeysAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ApiKeysAdmin.Url, "GetInsert", { }, ApiKeysAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return ApiKeysAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ApiKeysAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ApiKeysAdmin.Initialize.onValidationError))
					ApiKeysAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ApiKeysAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : ApiKeysAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ApiKeysAdmin.Initialize.onErrorReceived) ? ApiKeysAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ApiKeysAdmin.Url, "Initialize", { }, ApiKeysAdmin.Initialize.Serialize || {});
    }
};

var ApiKeysAdminValidators = {
	

	GetDetails : {
			AuthorizationID : ApiKeysAdminValidatorsFields.AuthorizationID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : ApiKeysAdminValidatorsFields.Name,
			Value : ApiKeysAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : ApiKeysAdminValidatorsFields.Name,
			Value : ApiKeysAdminValidatorsFields.Value,
			FieldName : ApiKeysAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : ApiKeysAdminValidatorsFields.Name,
			Value : ApiKeysAdminValidatorsFields.Value,
			FieldName : ApiKeysAdminValidatorsFields.FieldName,
			PreOptions : ApiKeysAdminValidatorsFields.PreOptions	
	},

	GetDropDownWithNull : {	
	},

	GetEdit : {
			AuthorizationID : ApiKeysAdminValidatorsFields.AuthorizationID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : ApiKeysAdminValidatorsFields.Search,
			SortColumn : ApiKeysAdminValidatorsFields.SortColumn,
			SortAscending : ApiKeysAdminValidatorsFields.SortAscending,
			SkipRows : ApiKeysAdminValidatorsFields.SkipRows,
			NumRows : ApiKeysAdminValidatorsFields.NumRows	
	},

	GetGridByUserID : {	
	},

	GetGridByUserID : {
			Search : ApiKeysAdminValidatorsFields.Search,
			SortColumn : ApiKeysAdminValidatorsFields.SortColumn,
			SortAscending : ApiKeysAdminValidatorsFields.SortAscending,
			SkipRows : ApiKeysAdminValidatorsFields.SkipRows,
			NumRows : ApiKeysAdminValidatorsFields.NumRows	
	},

	GetGridByUserIDCount : {
			Search : ApiKeysAdminValidatorsFields.Search	
	},

	GetGridByUserIDHtml : {
			Search : ApiKeysAdminValidatorsFields.Search,
			SortColumn : ApiKeysAdminValidatorsFields.SortColumn,
			SortAscending : ApiKeysAdminValidatorsFields.SortAscending,
			SkipRows : ApiKeysAdminValidatorsFields.SkipRows,
			NumRows : ApiKeysAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : ApiKeysAdminValidatorsFields.Search	
	},

	GetGridHtml : {
			Search : ApiKeysAdminValidatorsFields.Search,
			SortColumn : ApiKeysAdminValidatorsFields.SortColumn,
			SortAscending : ApiKeysAdminValidatorsFields.SortAscending,
			SkipRows : ApiKeysAdminValidatorsFields.SkipRows,
			NumRows : ApiKeysAdminValidatorsFields.NumRows	
	},

	GetGridHtml : {	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    