

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["RawEmailsAdminValidatorsFields"])) {
	var RawEmailsAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(RawEmailsAdminValidatorsFields.FieldName)) {
	RawEmailsAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(RawEmailsAdminValidatorsFields.Name)) {
	RawEmailsAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(RawEmailsAdminValidatorsFields.NumRows)) {
	RawEmailsAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(RawEmailsAdminValidatorsFields.PreOptions)) {
	RawEmailsAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(RawEmailsAdminValidatorsFields.RawEmailID)) {
	RawEmailsAdminValidatorsFields.RawEmailID = {Validators : [Validators.Text], InvalidMessage: "Invalid RawEmailID"};
}
if (!ObjectUtil.HasValue(RawEmailsAdminValidatorsFields.RawEmails)) {
	RawEmailsAdminValidatorsFields.RawEmails = {Validators : [Validators.Text], InvalidMessage: "Invalid RawEmails"};
}
if (!ObjectUtil.HasValue(RawEmailsAdminValidatorsFields.Search)) {
	RawEmailsAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(RawEmailsAdminValidatorsFields.SkipRows)) {
	RawEmailsAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(RawEmailsAdminValidatorsFields.SortAscending)) {
	RawEmailsAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(RawEmailsAdminValidatorsFields.SortColumn)) {
	RawEmailsAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(RawEmailsAdminValidatorsFields.UserID)) {
	RawEmailsAdminValidatorsFields.UserID = {Validators : [Validators.Text], InvalidMessage: "Invalid UserID"};
}
if (!ObjectUtil.HasValue(RawEmailsAdminValidatorsFields.Value)) {
	RawEmailsAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var RawEmailsAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.RawEmailsAdmin.ashx"

	,
	GetDetails : function(RawEmailID, Callback) {
        return RawEmailsAdmin.GetDetailsObject({ RawEmailID : RawEmailID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailsAdmin.GetDetails.onValidationError))
					RawEmailsAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailsAdmin.Url, 
					Method : "GetDetails", 
					Params : { RawEmailID : oObject.RawEmailID}, 
					Serialize : RawEmailsAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailsAdmin.GetDetails.onErrorReceived) ? RawEmailsAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailsAdmin.Url, "GetDetails", { RawEmailID : oObject.RawEmailID}, RawEmailsAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return RawEmailsAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailsAdmin.GetDropDown.onValidationError))
					RawEmailsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : RawEmailsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailsAdmin.GetDropDown.onErrorReceived) ? RawEmailsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailsAdmin.Url, "GetDropDown", { }, RawEmailsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return RawEmailsAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailsAdmin.GetDropDown.onValidationError))
					RawEmailsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : RawEmailsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailsAdmin.GetDropDown.onErrorReceived) ? RawEmailsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, RawEmailsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return RawEmailsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailsAdmin.GetDropDown.onValidationError))
					RawEmailsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : RawEmailsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailsAdmin.GetDropDown.onErrorReceived) ? RawEmailsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, RawEmailsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return RawEmailsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailsAdmin.GetDropDown.onValidationError))
					RawEmailsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : RawEmailsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailsAdmin.GetDropDown.onErrorReceived) ? RawEmailsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, RawEmailsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDownWithNull : function(Callback) {
        return RawEmailsAdmin.GetDropDownWithNullObject({ }, Callback);
    },

	GetDropDownWithNullObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsAdminValidators.GetDropDownWithNull)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailsAdmin.GetDropDownWithNull.onValidationError))
					RawEmailsAdmin.GetDropDownWithNull.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailsAdmin.Url, 
					Method : "GetDropDownWithNull", 
					Params : { }, 
					Serialize : RawEmailsAdmin.GetDropDownWithNull.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailsAdmin.GetDropDownWithNull.onErrorReceived) ? RawEmailsAdmin.GetDropDownWithNull.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailsAdmin.Url, "GetDropDownWithNull", { }, RawEmailsAdmin.GetDropDownWithNull.Serialize || {});
    },
	GetEdit : function(RawEmailID, Callback) {
        return RawEmailsAdmin.GetEditObject({ RawEmailID : RawEmailID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailsAdmin.GetEdit.onValidationError))
					RawEmailsAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailsAdmin.Url, 
					Method : "GetEdit", 
					Params : { RawEmailID : oObject.RawEmailID}, 
					Serialize : RawEmailsAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailsAdmin.GetEdit.onErrorReceived) ? RawEmailsAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailsAdmin.Url, "GetEdit", { RawEmailID : oObject.RawEmailID}, RawEmailsAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RawEmailsAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailsAdmin.GetGrid.onValidationError))
					RawEmailsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailsAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RawEmailsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailsAdmin.GetGrid.onErrorReceived) ? RawEmailsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailsAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RawEmailsAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Callback) {
        return RawEmailsAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailsAdmin.GetGrid.onValidationError))
					RawEmailsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailsAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : RawEmailsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailsAdmin.GetGrid.onErrorReceived) ? RawEmailsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailsAdmin.Url, "GetGrid", { }, RawEmailsAdmin.GetGrid.Serialize || {});
    },
	GetGridByUserID : function(UserID, Callback) {
        return RawEmailsAdmin.GetGridByUserIDObject({ UserID : UserID}, Callback);
    },

	GetGridByUserIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsAdminValidators.GetGridByUserID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailsAdmin.GetGridByUserID.onValidationError))
					RawEmailsAdmin.GetGridByUserID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailsAdmin.Url, 
					Method : "GetGridByUserID", 
					Params : { UserID : oObject.UserID}, 
					Serialize : RawEmailsAdmin.GetGridByUserID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailsAdmin.GetGridByUserID.onErrorReceived) ? RawEmailsAdmin.GetGridByUserID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailsAdmin.Url, "GetGridByUserID", { UserID : oObject.UserID}, RawEmailsAdmin.GetGridByUserID.Serialize || {});
    },
	GetGridByUserID : function(UserID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RawEmailsAdmin.GetGridByUserIDObject({ UserID : UserID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByUserIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsAdminValidators.GetGridByUserID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailsAdmin.GetGridByUserID.onValidationError))
					RawEmailsAdmin.GetGridByUserID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailsAdmin.Url, 
					Method : "GetGridByUserID", 
					Params : { UserID : oObject.UserID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RawEmailsAdmin.GetGridByUserID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailsAdmin.GetGridByUserID.onErrorReceived) ? RawEmailsAdmin.GetGridByUserID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailsAdmin.Url, "GetGridByUserID", { UserID : oObject.UserID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RawEmailsAdmin.GetGridByUserID.Serialize || {});
    },
	GetGridByUserIDCount : function(UserID, Search, Callback) {
        return RawEmailsAdmin.GetGridByUserIDCountObject({ UserID : UserID,Search : Search}, Callback);
    },

	GetGridByUserIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsAdminValidators.GetGridByUserIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailsAdmin.GetGridByUserIDCount.onValidationError))
					RawEmailsAdmin.GetGridByUserIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailsAdmin.Url, 
					Method : "GetGridByUserIDCount", 
					Params : { UserID : oObject.UserID,Search : oObject.Search}, 
					Serialize : RawEmailsAdmin.GetGridByUserIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailsAdmin.GetGridByUserIDCount.onErrorReceived) ? RawEmailsAdmin.GetGridByUserIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailsAdmin.Url, "GetGridByUserIDCount", { UserID : oObject.UserID,Search : oObject.Search}, RawEmailsAdmin.GetGridByUserIDCount.Serialize || {});
    },
	GetGridByUserIDHtml : function(UserID, Callback) {
        return RawEmailsAdmin.GetGridByUserIDHtmlObject({ UserID : UserID}, Callback);
    },

	GetGridByUserIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsAdminValidators.GetGridByUserIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailsAdmin.GetGridByUserIDHtml.onValidationError))
					RawEmailsAdmin.GetGridByUserIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailsAdmin.Url, 
					Method : "GetGridByUserIDHtml", 
					Params : { UserID : oObject.UserID}, 
					Serialize : RawEmailsAdmin.GetGridByUserIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailsAdmin.GetGridByUserIDHtml.onErrorReceived) ? RawEmailsAdmin.GetGridByUserIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailsAdmin.Url, "GetGridByUserIDHtml", { UserID : oObject.UserID}, RawEmailsAdmin.GetGridByUserIDHtml.Serialize || {});
    },
	GetGridByUserIDHtml : function(UserID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RawEmailsAdmin.GetGridByUserIDHtmlObject({ UserID : UserID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByUserIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsAdminValidators.GetGridByUserIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailsAdmin.GetGridByUserIDHtml.onValidationError))
					RawEmailsAdmin.GetGridByUserIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailsAdmin.Url, 
					Method : "GetGridByUserIDHtml", 
					Params : { UserID : oObject.UserID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RawEmailsAdmin.GetGridByUserIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailsAdmin.GetGridByUserIDHtml.onErrorReceived) ? RawEmailsAdmin.GetGridByUserIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailsAdmin.Url, "GetGridByUserIDHtml", { UserID : oObject.UserID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RawEmailsAdmin.GetGridByUserIDHtml.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return RawEmailsAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailsAdmin.GetGridCount.onValidationError))
					RawEmailsAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailsAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : RawEmailsAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailsAdmin.GetGridCount.onErrorReceived) ? RawEmailsAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailsAdmin.Url, "GetGridCount", { Search : oObject.Search}, RawEmailsAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return RawEmailsAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailsAdmin.GetGridHtml.onValidationError))
					RawEmailsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : RawEmailsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailsAdmin.GetGridHtml.onErrorReceived) ? RawEmailsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailsAdmin.Url, "GetGridHtml", { }, RawEmailsAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RawEmailsAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailsAdmin.GetGridHtml.onValidationError))
					RawEmailsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RawEmailsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailsAdmin.GetGridHtml.onErrorReceived) ? RawEmailsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailsAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RawEmailsAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtmlInternal : function(RawEmails, Callback) {
        return RawEmailsAdmin.GetGridHtmlInternalObject({ RawEmails : RawEmails}, Callback);
    },

	GetGridHtmlInternalObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsAdminValidators.GetGridHtmlInternal)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailsAdmin.GetGridHtmlInternal.onValidationError))
					RawEmailsAdmin.GetGridHtmlInternal.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailsAdmin.Url, 
					Method : "GetGridHtmlInternal", 
					Params : { RawEmails : oObject.RawEmails}, 
					Serialize : RawEmailsAdmin.GetGridHtmlInternal.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailsAdmin.GetGridHtmlInternal.onErrorReceived) ? RawEmailsAdmin.GetGridHtmlInternal.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailsAdmin.Url, "GetGridHtmlInternal", { RawEmails : oObject.RawEmails}, RawEmailsAdmin.GetGridHtmlInternal.Serialize || {});
    },
	GetInsert : function(Callback) {
        return RawEmailsAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailsAdmin.GetInsert.onValidationError))
					RawEmailsAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailsAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : RawEmailsAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailsAdmin.GetInsert.onErrorReceived) ? RawEmailsAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailsAdmin.Url, "GetInsert", { }, RawEmailsAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return RawEmailsAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmailsAdmin.Initialize.onValidationError))
					RawEmailsAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmailsAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : RawEmailsAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmailsAdmin.Initialize.onErrorReceived) ? RawEmailsAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmailsAdmin.Url, "Initialize", { }, RawEmailsAdmin.Initialize.Serialize || {});
    }
};

var RawEmailsAdminValidators = {
	

	GetDetails : {
			RawEmailID : RawEmailsAdminValidatorsFields.RawEmailID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : RawEmailsAdminValidatorsFields.Name,
			Value : RawEmailsAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : RawEmailsAdminValidatorsFields.Name,
			Value : RawEmailsAdminValidatorsFields.Value,
			FieldName : RawEmailsAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : RawEmailsAdminValidatorsFields.Name,
			Value : RawEmailsAdminValidatorsFields.Value,
			FieldName : RawEmailsAdminValidatorsFields.FieldName,
			PreOptions : RawEmailsAdminValidatorsFields.PreOptions	
	},

	GetDropDownWithNull : {	
	},

	GetEdit : {
			RawEmailID : RawEmailsAdminValidatorsFields.RawEmailID	
	},

	GetGrid : {
			Search : RawEmailsAdminValidatorsFields.Search,
			SortColumn : RawEmailsAdminValidatorsFields.SortColumn,
			SortAscending : RawEmailsAdminValidatorsFields.SortAscending,
			SkipRows : RawEmailsAdminValidatorsFields.SkipRows,
			NumRows : RawEmailsAdminValidatorsFields.NumRows	
	},

	GetGrid : {	
	},

	GetGridByUserID : {
			UserID : RawEmailsAdminValidatorsFields.UserID	
	},

	GetGridByUserID : {
			UserID : RawEmailsAdminValidatorsFields.UserID,
			Search : RawEmailsAdminValidatorsFields.Search,
			SortColumn : RawEmailsAdminValidatorsFields.SortColumn,
			SortAscending : RawEmailsAdminValidatorsFields.SortAscending,
			SkipRows : RawEmailsAdminValidatorsFields.SkipRows,
			NumRows : RawEmailsAdminValidatorsFields.NumRows	
	},

	GetGridByUserIDCount : {
			UserID : RawEmailsAdminValidatorsFields.UserID,
			Search : RawEmailsAdminValidatorsFields.Search	
	},

	GetGridByUserIDHtml : {
			UserID : RawEmailsAdminValidatorsFields.UserID	
	},

	GetGridByUserIDHtml : {
			UserID : RawEmailsAdminValidatorsFields.UserID,
			Search : RawEmailsAdminValidatorsFields.Search,
			SortColumn : RawEmailsAdminValidatorsFields.SortColumn,
			SortAscending : RawEmailsAdminValidatorsFields.SortAscending,
			SkipRows : RawEmailsAdminValidatorsFields.SkipRows,
			NumRows : RawEmailsAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : RawEmailsAdminValidatorsFields.Search	
	},

	GetGridHtml : {	
	},

	GetGridHtml : {
			Search : RawEmailsAdminValidatorsFields.Search,
			SortColumn : RawEmailsAdminValidatorsFields.SortColumn,
			SortAscending : RawEmailsAdminValidatorsFields.SortAscending,
			SkipRows : RawEmailsAdminValidatorsFields.SkipRows,
			NumRows : RawEmailsAdminValidatorsFields.NumRows	
	},

	GetGridHtmlInternal : {
			RawEmails : RawEmailsAdminValidatorsFields.RawEmails	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    