

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["AreaCodesAdminValidatorsFields"])) {
	var AreaCodesAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(AreaCodesAdminValidatorsFields.AreaCodeID)) {
	AreaCodesAdminValidatorsFields.AreaCodeID = {Validators : [Validators.Text], InvalidMessage: "Invalid AreaCodeID"};
}
if (!ObjectUtil.HasValue(AreaCodesAdminValidatorsFields.FieldName)) {
	AreaCodesAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(AreaCodesAdminValidatorsFields.Name)) {
	AreaCodesAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(AreaCodesAdminValidatorsFields.NumRows)) {
	AreaCodesAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(AreaCodesAdminValidatorsFields.PreOptions)) {
	AreaCodesAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(AreaCodesAdminValidatorsFields.Search)) {
	AreaCodesAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(AreaCodesAdminValidatorsFields.SkipRows)) {
	AreaCodesAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(AreaCodesAdminValidatorsFields.SortAscending)) {
	AreaCodesAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(AreaCodesAdminValidatorsFields.SortColumn)) {
	AreaCodesAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(AreaCodesAdminValidatorsFields.Value)) {
	AreaCodesAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var AreaCodesAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.AreaCodesAdmin.ashx"

	,
	GetDetails : function(AreaCodeID, Callback) {
        return AreaCodesAdmin.GetDetailsObject({ AreaCodeID : AreaCodeID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodesAdmin.GetDetails.onValidationError))
					AreaCodesAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodesAdmin.Url, 
					Method : "GetDetails", 
					Params : { AreaCodeID : oObject.AreaCodeID}, 
					Serialize : AreaCodesAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodesAdmin.GetDetails.onErrorReceived) ? AreaCodesAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodesAdmin.Url, "GetDetails", { AreaCodeID : oObject.AreaCodeID}, AreaCodesAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return AreaCodesAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodesAdmin.GetDropDown.onValidationError))
					AreaCodesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : AreaCodesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodesAdmin.GetDropDown.onErrorReceived) ? AreaCodesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodesAdmin.Url, "GetDropDown", { }, AreaCodesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return AreaCodesAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodesAdmin.GetDropDown.onValidationError))
					AreaCodesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : AreaCodesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodesAdmin.GetDropDown.onErrorReceived) ? AreaCodesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, AreaCodesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return AreaCodesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodesAdmin.GetDropDown.onValidationError))
					AreaCodesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : AreaCodesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodesAdmin.GetDropDown.onErrorReceived) ? AreaCodesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, AreaCodesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return AreaCodesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodesAdmin.GetDropDown.onValidationError))
					AreaCodesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : AreaCodesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodesAdmin.GetDropDown.onErrorReceived) ? AreaCodesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, AreaCodesAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(AreaCodeID, Callback) {
        return AreaCodesAdmin.GetEditObject({ AreaCodeID : AreaCodeID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodesAdmin.GetEdit.onValidationError))
					AreaCodesAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodesAdmin.Url, 
					Method : "GetEdit", 
					Params : { AreaCodeID : oObject.AreaCodeID}, 
					Serialize : AreaCodesAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodesAdmin.GetEdit.onErrorReceived) ? AreaCodesAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodesAdmin.Url, "GetEdit", { AreaCodeID : oObject.AreaCodeID}, AreaCodesAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return AreaCodesAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodesAdmin.GetGrid.onValidationError))
					AreaCodesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodesAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : AreaCodesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodesAdmin.GetGrid.onErrorReceived) ? AreaCodesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodesAdmin.Url, "GetGrid", { }, AreaCodesAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return AreaCodesAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodesAdmin.GetGrid.onValidationError))
					AreaCodesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodesAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : AreaCodesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodesAdmin.GetGrid.onErrorReceived) ? AreaCodesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodesAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, AreaCodesAdmin.GetGrid.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return AreaCodesAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodesAdmin.GetGridCount.onValidationError))
					AreaCodesAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodesAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : AreaCodesAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodesAdmin.GetGridCount.onErrorReceived) ? AreaCodesAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodesAdmin.Url, "GetGridCount", { Search : oObject.Search}, AreaCodesAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return AreaCodesAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodesAdmin.GetGridHtml.onValidationError))
					AreaCodesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : AreaCodesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodesAdmin.GetGridHtml.onErrorReceived) ? AreaCodesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodesAdmin.Url, "GetGridHtml", { }, AreaCodesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return AreaCodesAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodesAdmin.GetGridHtml.onValidationError))
					AreaCodesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : AreaCodesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodesAdmin.GetGridHtml.onErrorReceived) ? AreaCodesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodesAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, AreaCodesAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return AreaCodesAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodesAdmin.GetInsert.onValidationError))
					AreaCodesAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodesAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : AreaCodesAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodesAdmin.GetInsert.onErrorReceived) ? AreaCodesAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodesAdmin.Url, "GetInsert", { }, AreaCodesAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return AreaCodesAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AreaCodesAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AreaCodesAdmin.Initialize.onValidationError))
					AreaCodesAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AreaCodesAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : AreaCodesAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AreaCodesAdmin.Initialize.onErrorReceived) ? AreaCodesAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AreaCodesAdmin.Url, "Initialize", { }, AreaCodesAdmin.Initialize.Serialize || {});
    }
};

var AreaCodesAdminValidators = {
	

	GetDetails : {
			AreaCodeID : AreaCodesAdminValidatorsFields.AreaCodeID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : AreaCodesAdminValidatorsFields.Name,
			Value : AreaCodesAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : AreaCodesAdminValidatorsFields.Name,
			Value : AreaCodesAdminValidatorsFields.Value,
			FieldName : AreaCodesAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : AreaCodesAdminValidatorsFields.Name,
			Value : AreaCodesAdminValidatorsFields.Value,
			FieldName : AreaCodesAdminValidatorsFields.FieldName,
			PreOptions : AreaCodesAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			AreaCodeID : AreaCodesAdminValidatorsFields.AreaCodeID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : AreaCodesAdminValidatorsFields.Search,
			SortColumn : AreaCodesAdminValidatorsFields.SortColumn,
			SortAscending : AreaCodesAdminValidatorsFields.SortAscending,
			SkipRows : AreaCodesAdminValidatorsFields.SkipRows,
			NumRows : AreaCodesAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : AreaCodesAdminValidatorsFields.Search	
	},

	GetGridHtml : {	
	},

	GetGridHtml : {
			Search : AreaCodesAdminValidatorsFields.Search,
			SortColumn : AreaCodesAdminValidatorsFields.SortColumn,
			SortAscending : AreaCodesAdminValidatorsFields.SortAscending,
			SkipRows : AreaCodesAdminValidatorsFields.SkipRows,
			NumRows : AreaCodesAdminValidatorsFields.NumRows	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    