

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["PhoneNumbersAdminValidatorsFields"])) {
	var PhoneNumbersAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(PhoneNumbersAdminValidatorsFields.FieldName)) {
	PhoneNumbersAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(PhoneNumbersAdminValidatorsFields.Name)) {
	PhoneNumbersAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(PhoneNumbersAdminValidatorsFields.NumRows)) {
	PhoneNumbersAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(PhoneNumbersAdminValidatorsFields.PhoneNumberID)) {
	PhoneNumbersAdminValidatorsFields.PhoneNumberID = {Validators : [Validators.Text], InvalidMessage: "Invalid PhoneNumberID"};
}
if (!ObjectUtil.HasValue(PhoneNumbersAdminValidatorsFields.PhoneNumbers)) {
	PhoneNumbersAdminValidatorsFields.PhoneNumbers = {Validators : [Validators.Text], InvalidMessage: "Invalid PhoneNumbers"};
}
if (!ObjectUtil.HasValue(PhoneNumbersAdminValidatorsFields.PreOptions)) {
	PhoneNumbersAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(PhoneNumbersAdminValidatorsFields.Search)) {
	PhoneNumbersAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(PhoneNumbersAdminValidatorsFields.SkipRows)) {
	PhoneNumbersAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(PhoneNumbersAdminValidatorsFields.SortAscending)) {
	PhoneNumbersAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(PhoneNumbersAdminValidatorsFields.SortColumn)) {
	PhoneNumbersAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(PhoneNumbersAdminValidatorsFields.sPhoneNumber)) {
	PhoneNumbersAdminValidatorsFields.sPhoneNumber = {Validators : [Validators.Text], InvalidMessage: "Invalid sPhoneNumber"};
}
if (!ObjectUtil.HasValue(PhoneNumbersAdminValidatorsFields.Value)) {
	PhoneNumbersAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var PhoneNumbersAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.PhoneNumbersAdmin.ashx"

	,
	GetCallingGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return PhoneNumbersAdmin.GetCallingGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetCallingGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersAdminValidators.GetCallingGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbersAdmin.GetCallingGridHtml.onValidationError))
					PhoneNumbersAdmin.GetCallingGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbersAdmin.Url, 
					Method : "GetCallingGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : PhoneNumbersAdmin.GetCallingGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbersAdmin.GetCallingGridHtml.onErrorReceived) ? PhoneNumbersAdmin.GetCallingGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbersAdmin.Url, "GetCallingGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, PhoneNumbersAdmin.GetCallingGridHtml.Serialize || {});
    },
	GetDetails : function(PhoneNumberID, Callback) {
        return PhoneNumbersAdmin.GetDetailsObject({ PhoneNumberID : PhoneNumberID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbersAdmin.GetDetails.onValidationError))
					PhoneNumbersAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbersAdmin.Url, 
					Method : "GetDetails", 
					Params : { PhoneNumberID : oObject.PhoneNumberID}, 
					Serialize : PhoneNumbersAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbersAdmin.GetDetails.onErrorReceived) ? PhoneNumbersAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbersAdmin.Url, "GetDetails", { PhoneNumberID : oObject.PhoneNumberID}, PhoneNumbersAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return PhoneNumbersAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbersAdmin.GetDropDown.onValidationError))
					PhoneNumbersAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbersAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : PhoneNumbersAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbersAdmin.GetDropDown.onErrorReceived) ? PhoneNumbersAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbersAdmin.Url, "GetDropDown", { }, PhoneNumbersAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return PhoneNumbersAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbersAdmin.GetDropDown.onValidationError))
					PhoneNumbersAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbersAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : PhoneNumbersAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbersAdmin.GetDropDown.onErrorReceived) ? PhoneNumbersAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbersAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, PhoneNumbersAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return PhoneNumbersAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbersAdmin.GetDropDown.onValidationError))
					PhoneNumbersAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbersAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : PhoneNumbersAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbersAdmin.GetDropDown.onErrorReceived) ? PhoneNumbersAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbersAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, PhoneNumbersAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return PhoneNumbersAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbersAdmin.GetDropDown.onValidationError))
					PhoneNumbersAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbersAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : PhoneNumbersAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbersAdmin.GetDropDown.onErrorReceived) ? PhoneNumbersAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbersAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, PhoneNumbersAdmin.GetDropDown.Serialize || {});
    },
	GetDropDownWithNull : function(Callback) {
        return PhoneNumbersAdmin.GetDropDownWithNullObject({ }, Callback);
    },

	GetDropDownWithNullObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersAdminValidators.GetDropDownWithNull)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbersAdmin.GetDropDownWithNull.onValidationError))
					PhoneNumbersAdmin.GetDropDownWithNull.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbersAdmin.Url, 
					Method : "GetDropDownWithNull", 
					Params : { }, 
					Serialize : PhoneNumbersAdmin.GetDropDownWithNull.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbersAdmin.GetDropDownWithNull.onErrorReceived) ? PhoneNumbersAdmin.GetDropDownWithNull.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbersAdmin.Url, "GetDropDownWithNull", { }, PhoneNumbersAdmin.GetDropDownWithNull.Serialize || {});
    },
	GetEdit : function(PhoneNumberID, Callback) {
        return PhoneNumbersAdmin.GetEditObject({ PhoneNumberID : PhoneNumberID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbersAdmin.GetEdit.onValidationError))
					PhoneNumbersAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbersAdmin.Url, 
					Method : "GetEdit", 
					Params : { PhoneNumberID : oObject.PhoneNumberID}, 
					Serialize : PhoneNumbersAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbersAdmin.GetEdit.onErrorReceived) ? PhoneNumbersAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbersAdmin.Url, "GetEdit", { PhoneNumberID : oObject.PhoneNumberID}, PhoneNumbersAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return PhoneNumbersAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbersAdmin.GetGrid.onValidationError))
					PhoneNumbersAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbersAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : PhoneNumbersAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbersAdmin.GetGrid.onErrorReceived) ? PhoneNumbersAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbersAdmin.Url, "GetGrid", { }, PhoneNumbersAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return PhoneNumbersAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbersAdmin.GetGrid.onValidationError))
					PhoneNumbersAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbersAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : PhoneNumbersAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbersAdmin.GetGrid.onErrorReceived) ? PhoneNumbersAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbersAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, PhoneNumbersAdmin.GetGrid.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return PhoneNumbersAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbersAdmin.GetGridCount.onValidationError))
					PhoneNumbersAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbersAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : PhoneNumbersAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbersAdmin.GetGridCount.onErrorReceived) ? PhoneNumbersAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbersAdmin.Url, "GetGridCount", { Search : oObject.Search}, PhoneNumbersAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return PhoneNumbersAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbersAdmin.GetGridHtml.onValidationError))
					PhoneNumbersAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbersAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : PhoneNumbersAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbersAdmin.GetGridHtml.onErrorReceived) ? PhoneNumbersAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbersAdmin.Url, "GetGridHtml", { }, PhoneNumbersAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return PhoneNumbersAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbersAdmin.GetGridHtml.onValidationError))
					PhoneNumbersAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbersAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : PhoneNumbersAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbersAdmin.GetGridHtml.onErrorReceived) ? PhoneNumbersAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbersAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, PhoneNumbersAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtmlInternal : function(PhoneNumbers, Callback) {
        return PhoneNumbersAdmin.GetGridHtmlInternalObject({ PhoneNumbers : PhoneNumbers}, Callback);
    },

	GetGridHtmlInternalObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersAdminValidators.GetGridHtmlInternal)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbersAdmin.GetGridHtmlInternal.onValidationError))
					PhoneNumbersAdmin.GetGridHtmlInternal.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbersAdmin.Url, 
					Method : "GetGridHtmlInternal", 
					Params : { PhoneNumbers : oObject.PhoneNumbers}, 
					Serialize : PhoneNumbersAdmin.GetGridHtmlInternal.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbersAdmin.GetGridHtmlInternal.onErrorReceived) ? PhoneNumbersAdmin.GetGridHtmlInternal.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbersAdmin.Url, "GetGridHtmlInternal", { PhoneNumbers : oObject.PhoneNumbers}, PhoneNumbersAdmin.GetGridHtmlInternal.Serialize || {});
    },
	GetGridHtmlInternal2 : function(PhoneNumbers, Callback) {
        return PhoneNumbersAdmin.GetGridHtmlInternal2Object({ PhoneNumbers : PhoneNumbers}, Callback);
    },

	GetGridHtmlInternal2Object : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersAdminValidators.GetGridHtmlInternal2)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbersAdmin.GetGridHtmlInternal2.onValidationError))
					PhoneNumbersAdmin.GetGridHtmlInternal2.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbersAdmin.Url, 
					Method : "GetGridHtmlInternal2", 
					Params : { PhoneNumbers : oObject.PhoneNumbers}, 
					Serialize : PhoneNumbersAdmin.GetGridHtmlInternal2.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbersAdmin.GetGridHtmlInternal2.onErrorReceived) ? PhoneNumbersAdmin.GetGridHtmlInternal2.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbersAdmin.Url, "GetGridHtmlInternal2", { PhoneNumbers : oObject.PhoneNumbers}, PhoneNumbersAdmin.GetGridHtmlInternal2.Serialize || {});
    },
	GetInsert : function(Callback) {
        return PhoneNumbersAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbersAdmin.GetInsert.onValidationError))
					PhoneNumbersAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbersAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : PhoneNumbersAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbersAdmin.GetInsert.onErrorReceived) ? PhoneNumbersAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbersAdmin.Url, "GetInsert", { }, PhoneNumbersAdmin.GetInsert.Serialize || {});
    },
	GetSingleNumberDialer : function(sPhoneNumber, Callback) {
        return PhoneNumbersAdmin.GetSingleNumberDialerObject({ sPhoneNumber : sPhoneNumber}, Callback);
    },

	GetSingleNumberDialerObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersAdminValidators.GetSingleNumberDialer)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbersAdmin.GetSingleNumberDialer.onValidationError))
					PhoneNumbersAdmin.GetSingleNumberDialer.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbersAdmin.Url, 
					Method : "GetSingleNumberDialer", 
					Params : { sPhoneNumber : oObject.sPhoneNumber}, 
					Serialize : PhoneNumbersAdmin.GetSingleNumberDialer.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbersAdmin.GetSingleNumberDialer.onErrorReceived) ? PhoneNumbersAdmin.GetSingleNumberDialer.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbersAdmin.Url, "GetSingleNumberDialer", { sPhoneNumber : oObject.sPhoneNumber}, PhoneNumbersAdmin.GetSingleNumberDialer.Serialize || {});
    },
	Initialize : function(Callback) {
        return PhoneNumbersAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PhoneNumbersAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PhoneNumbersAdmin.Initialize.onValidationError))
					PhoneNumbersAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PhoneNumbersAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : PhoneNumbersAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PhoneNumbersAdmin.Initialize.onErrorReceived) ? PhoneNumbersAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PhoneNumbersAdmin.Url, "Initialize", { }, PhoneNumbersAdmin.Initialize.Serialize || {});
    }
};

var PhoneNumbersAdminValidators = {
	

	GetCallingGridHtml : {
			Search : PhoneNumbersAdminValidatorsFields.Search,
			SortColumn : PhoneNumbersAdminValidatorsFields.SortColumn,
			SortAscending : PhoneNumbersAdminValidatorsFields.SortAscending,
			SkipRows : PhoneNumbersAdminValidatorsFields.SkipRows,
			NumRows : PhoneNumbersAdminValidatorsFields.NumRows	
	},

	GetDetails : {
			PhoneNumberID : PhoneNumbersAdminValidatorsFields.PhoneNumberID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : PhoneNumbersAdminValidatorsFields.Name,
			Value : PhoneNumbersAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : PhoneNumbersAdminValidatorsFields.Name,
			Value : PhoneNumbersAdminValidatorsFields.Value,
			FieldName : PhoneNumbersAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : PhoneNumbersAdminValidatorsFields.Name,
			Value : PhoneNumbersAdminValidatorsFields.Value,
			FieldName : PhoneNumbersAdminValidatorsFields.FieldName,
			PreOptions : PhoneNumbersAdminValidatorsFields.PreOptions	
	},

	GetDropDownWithNull : {	
	},

	GetEdit : {
			PhoneNumberID : PhoneNumbersAdminValidatorsFields.PhoneNumberID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : PhoneNumbersAdminValidatorsFields.Search,
			SortColumn : PhoneNumbersAdminValidatorsFields.SortColumn,
			SortAscending : PhoneNumbersAdminValidatorsFields.SortAscending,
			SkipRows : PhoneNumbersAdminValidatorsFields.SkipRows,
			NumRows : PhoneNumbersAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : PhoneNumbersAdminValidatorsFields.Search	
	},

	GetGridHtml : {	
	},

	GetGridHtml : {
			Search : PhoneNumbersAdminValidatorsFields.Search,
			SortColumn : PhoneNumbersAdminValidatorsFields.SortColumn,
			SortAscending : PhoneNumbersAdminValidatorsFields.SortAscending,
			SkipRows : PhoneNumbersAdminValidatorsFields.SkipRows,
			NumRows : PhoneNumbersAdminValidatorsFields.NumRows	
	},

	GetGridHtmlInternal : {
			PhoneNumbers : PhoneNumbersAdminValidatorsFields.PhoneNumbers	
	},

	GetGridHtmlInternal2 : {
			PhoneNumbers : PhoneNumbersAdminValidatorsFields.PhoneNumbers	
	},

	GetInsert : {	
	},

	GetSingleNumberDialer : {
			sPhoneNumber : PhoneNumbersAdminValidatorsFields.sPhoneNumber	
	},

	Initialize : {	
	}
};

    