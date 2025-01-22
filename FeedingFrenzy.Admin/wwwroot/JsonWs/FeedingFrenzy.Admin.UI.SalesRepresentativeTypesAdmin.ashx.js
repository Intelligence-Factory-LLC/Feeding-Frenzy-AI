

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["SalesRepresentativeTypesAdminValidatorsFields"])) {
	var SalesRepresentativeTypesAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(SalesRepresentativeTypesAdminValidatorsFields.FieldName)) {
	SalesRepresentativeTypesAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(SalesRepresentativeTypesAdminValidatorsFields.Name)) {
	SalesRepresentativeTypesAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(SalesRepresentativeTypesAdminValidatorsFields.NumRows)) {
	SalesRepresentativeTypesAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(SalesRepresentativeTypesAdminValidatorsFields.PreOptions)) {
	SalesRepresentativeTypesAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(SalesRepresentativeTypesAdminValidatorsFields.SalesRepresentativeTypeID)) {
	SalesRepresentativeTypesAdminValidatorsFields.SalesRepresentativeTypeID = {Validators : [Validators.Text], InvalidMessage: "Invalid SalesRepresentativeTypeID"};
}
if (!ObjectUtil.HasValue(SalesRepresentativeTypesAdminValidatorsFields.Search)) {
	SalesRepresentativeTypesAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(SalesRepresentativeTypesAdminValidatorsFields.SkipRows)) {
	SalesRepresentativeTypesAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(SalesRepresentativeTypesAdminValidatorsFields.SortAscending)) {
	SalesRepresentativeTypesAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(SalesRepresentativeTypesAdminValidatorsFields.SortColumn)) {
	SalesRepresentativeTypesAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(SalesRepresentativeTypesAdminValidatorsFields.Value)) {
	SalesRepresentativeTypesAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var SalesRepresentativeTypesAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.SalesRepresentativeTypesAdmin.ashx"

	,
	GetDetails : function(SalesRepresentativeTypeID, Callback) {
        return SalesRepresentativeTypesAdmin.GetDetailsObject({ SalesRepresentativeTypeID : SalesRepresentativeTypeID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetDetails.onValidationError))
					SalesRepresentativeTypesAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypesAdmin.Url, 
					Method : "GetDetails", 
					Params : { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID}, 
					Serialize : SalesRepresentativeTypesAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetDetails.onErrorReceived) ? SalesRepresentativeTypesAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypesAdmin.Url, "GetDetails", { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID}, SalesRepresentativeTypesAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return SalesRepresentativeTypesAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetDropDown.onValidationError))
					SalesRepresentativeTypesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : SalesRepresentativeTypesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetDropDown.onErrorReceived) ? SalesRepresentativeTypesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypesAdmin.Url, "GetDropDown", { }, SalesRepresentativeTypesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return SalesRepresentativeTypesAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetDropDown.onValidationError))
					SalesRepresentativeTypesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : SalesRepresentativeTypesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetDropDown.onErrorReceived) ? SalesRepresentativeTypesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, SalesRepresentativeTypesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return SalesRepresentativeTypesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetDropDown.onValidationError))
					SalesRepresentativeTypesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : SalesRepresentativeTypesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetDropDown.onErrorReceived) ? SalesRepresentativeTypesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, SalesRepresentativeTypesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return SalesRepresentativeTypesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetDropDown.onValidationError))
					SalesRepresentativeTypesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : SalesRepresentativeTypesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetDropDown.onErrorReceived) ? SalesRepresentativeTypesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, SalesRepresentativeTypesAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(SalesRepresentativeTypeID, Callback) {
        return SalesRepresentativeTypesAdmin.GetEditObject({ SalesRepresentativeTypeID : SalesRepresentativeTypeID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetEdit.onValidationError))
					SalesRepresentativeTypesAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypesAdmin.Url, 
					Method : "GetEdit", 
					Params : { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID}, 
					Serialize : SalesRepresentativeTypesAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetEdit.onErrorReceived) ? SalesRepresentativeTypesAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypesAdmin.Url, "GetEdit", { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID}, SalesRepresentativeTypesAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return SalesRepresentativeTypesAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetGrid.onValidationError))
					SalesRepresentativeTypesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypesAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : SalesRepresentativeTypesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetGrid.onErrorReceived) ? SalesRepresentativeTypesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypesAdmin.Url, "GetGrid", { }, SalesRepresentativeTypesAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return SalesRepresentativeTypesAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetGrid.onValidationError))
					SalesRepresentativeTypesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypesAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : SalesRepresentativeTypesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetGrid.onErrorReceived) ? SalesRepresentativeTypesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypesAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, SalesRepresentativeTypesAdmin.GetGrid.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return SalesRepresentativeTypesAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetGridCount.onValidationError))
					SalesRepresentativeTypesAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypesAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : SalesRepresentativeTypesAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetGridCount.onErrorReceived) ? SalesRepresentativeTypesAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypesAdmin.Url, "GetGridCount", { Search : oObject.Search}, SalesRepresentativeTypesAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return SalesRepresentativeTypesAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetGridHtml.onValidationError))
					SalesRepresentativeTypesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : SalesRepresentativeTypesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetGridHtml.onErrorReceived) ? SalesRepresentativeTypesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypesAdmin.Url, "GetGridHtml", { }, SalesRepresentativeTypesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return SalesRepresentativeTypesAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetGridHtml.onValidationError))
					SalesRepresentativeTypesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : SalesRepresentativeTypesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetGridHtml.onErrorReceived) ? SalesRepresentativeTypesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypesAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, SalesRepresentativeTypesAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return SalesRepresentativeTypesAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetInsert.onValidationError))
					SalesRepresentativeTypesAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypesAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : SalesRepresentativeTypesAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.GetInsert.onErrorReceived) ? SalesRepresentativeTypesAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypesAdmin.Url, "GetInsert", { }, SalesRepresentativeTypesAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return SalesRepresentativeTypesAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativeTypesAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.Initialize.onValidationError))
					SalesRepresentativeTypesAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativeTypesAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : SalesRepresentativeTypesAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativeTypesAdmin.Initialize.onErrorReceived) ? SalesRepresentativeTypesAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativeTypesAdmin.Url, "Initialize", { }, SalesRepresentativeTypesAdmin.Initialize.Serialize || {});
    }
};

var SalesRepresentativeTypesAdminValidators = {
	

	GetDetails : {
			SalesRepresentativeTypeID : SalesRepresentativeTypesAdminValidatorsFields.SalesRepresentativeTypeID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : SalesRepresentativeTypesAdminValidatorsFields.Name,
			Value : SalesRepresentativeTypesAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : SalesRepresentativeTypesAdminValidatorsFields.Name,
			Value : SalesRepresentativeTypesAdminValidatorsFields.Value,
			FieldName : SalesRepresentativeTypesAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : SalesRepresentativeTypesAdminValidatorsFields.Name,
			Value : SalesRepresentativeTypesAdminValidatorsFields.Value,
			FieldName : SalesRepresentativeTypesAdminValidatorsFields.FieldName,
			PreOptions : SalesRepresentativeTypesAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			SalesRepresentativeTypeID : SalesRepresentativeTypesAdminValidatorsFields.SalesRepresentativeTypeID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : SalesRepresentativeTypesAdminValidatorsFields.Search,
			SortColumn : SalesRepresentativeTypesAdminValidatorsFields.SortColumn,
			SortAscending : SalesRepresentativeTypesAdminValidatorsFields.SortAscending,
			SkipRows : SalesRepresentativeTypesAdminValidatorsFields.SkipRows,
			NumRows : SalesRepresentativeTypesAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : SalesRepresentativeTypesAdminValidatorsFields.Search	
	},

	GetGridHtml : {	
	},

	GetGridHtml : {
			Search : SalesRepresentativeTypesAdminValidatorsFields.Search,
			SortColumn : SalesRepresentativeTypesAdminValidatorsFields.SortColumn,
			SortAscending : SalesRepresentativeTypesAdminValidatorsFields.SortAscending,
			SkipRows : SalesRepresentativeTypesAdminValidatorsFields.SkipRows,
			NumRows : SalesRepresentativeTypesAdminValidatorsFields.NumRows	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    