

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["AgentTypesAdminValidatorsFields"])) {
	var AgentTypesAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(AgentTypesAdminValidatorsFields.AgentTypeID)) {
	AgentTypesAdminValidatorsFields.AgentTypeID = {Validators : [Validators.Text], InvalidMessage: "Invalid AgentTypeID"};
}
if (!ObjectUtil.HasValue(AgentTypesAdminValidatorsFields.AgentTypes)) {
	AgentTypesAdminValidatorsFields.AgentTypes = {Validators : [Validators.Text], InvalidMessage: "Invalid AgentTypes"};
}
if (!ObjectUtil.HasValue(AgentTypesAdminValidatorsFields.FieldName)) {
	AgentTypesAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(AgentTypesAdminValidatorsFields.Name)) {
	AgentTypesAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(AgentTypesAdminValidatorsFields.NumRows)) {
	AgentTypesAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(AgentTypesAdminValidatorsFields.PreOptions)) {
	AgentTypesAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(AgentTypesAdminValidatorsFields.Search)) {
	AgentTypesAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(AgentTypesAdminValidatorsFields.SkipRows)) {
	AgentTypesAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(AgentTypesAdminValidatorsFields.SortAscending)) {
	AgentTypesAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(AgentTypesAdminValidatorsFields.SortColumn)) {
	AgentTypesAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(AgentTypesAdminValidatorsFields.Value)) {
	AgentTypesAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var AgentTypesAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.AgentTypesAdmin.ashx"

	,
	GetDetails : function(AgentTypeID, Callback) {
        return AgentTypesAdmin.GetDetailsObject({ AgentTypeID : AgentTypeID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypesAdmin.GetDetails.onValidationError))
					AgentTypesAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypesAdmin.Url, 
					Method : "GetDetails", 
					Params : { AgentTypeID : oObject.AgentTypeID}, 
					Serialize : AgentTypesAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypesAdmin.GetDetails.onErrorReceived) ? AgentTypesAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypesAdmin.Url, "GetDetails", { AgentTypeID : oObject.AgentTypeID}, AgentTypesAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return AgentTypesAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypesAdmin.GetDropDown.onValidationError))
					AgentTypesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : AgentTypesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypesAdmin.GetDropDown.onErrorReceived) ? AgentTypesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypesAdmin.Url, "GetDropDown", { }, AgentTypesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return AgentTypesAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypesAdmin.GetDropDown.onValidationError))
					AgentTypesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : AgentTypesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypesAdmin.GetDropDown.onErrorReceived) ? AgentTypesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, AgentTypesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return AgentTypesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypesAdmin.GetDropDown.onValidationError))
					AgentTypesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : AgentTypesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypesAdmin.GetDropDown.onErrorReceived) ? AgentTypesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, AgentTypesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return AgentTypesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypesAdmin.GetDropDown.onValidationError))
					AgentTypesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : AgentTypesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypesAdmin.GetDropDown.onErrorReceived) ? AgentTypesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, AgentTypesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDownWithNull : function(Callback) {
        return AgentTypesAdmin.GetDropDownWithNullObject({ }, Callback);
    },

	GetDropDownWithNullObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesAdminValidators.GetDropDownWithNull)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypesAdmin.GetDropDownWithNull.onValidationError))
					AgentTypesAdmin.GetDropDownWithNull.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypesAdmin.Url, 
					Method : "GetDropDownWithNull", 
					Params : { }, 
					Serialize : AgentTypesAdmin.GetDropDownWithNull.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypesAdmin.GetDropDownWithNull.onErrorReceived) ? AgentTypesAdmin.GetDropDownWithNull.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypesAdmin.Url, "GetDropDownWithNull", { }, AgentTypesAdmin.GetDropDownWithNull.Serialize || {});
    },
	GetEdit : function(AgentTypeID, Callback) {
        return AgentTypesAdmin.GetEditObject({ AgentTypeID : AgentTypeID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypesAdmin.GetEdit.onValidationError))
					AgentTypesAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypesAdmin.Url, 
					Method : "GetEdit", 
					Params : { AgentTypeID : oObject.AgentTypeID}, 
					Serialize : AgentTypesAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypesAdmin.GetEdit.onErrorReceived) ? AgentTypesAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypesAdmin.Url, "GetEdit", { AgentTypeID : oObject.AgentTypeID}, AgentTypesAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return AgentTypesAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypesAdmin.GetGrid.onValidationError))
					AgentTypesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypesAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : AgentTypesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypesAdmin.GetGrid.onErrorReceived) ? AgentTypesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypesAdmin.Url, "GetGrid", { }, AgentTypesAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return AgentTypesAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypesAdmin.GetGrid.onValidationError))
					AgentTypesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypesAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : AgentTypesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypesAdmin.GetGrid.onErrorReceived) ? AgentTypesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypesAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, AgentTypesAdmin.GetGrid.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return AgentTypesAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypesAdmin.GetGridCount.onValidationError))
					AgentTypesAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypesAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : AgentTypesAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypesAdmin.GetGridCount.onErrorReceived) ? AgentTypesAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypesAdmin.Url, "GetGridCount", { Search : oObject.Search}, AgentTypesAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return AgentTypesAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypesAdmin.GetGridHtml.onValidationError))
					AgentTypesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : AgentTypesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypesAdmin.GetGridHtml.onErrorReceived) ? AgentTypesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypesAdmin.Url, "GetGridHtml", { }, AgentTypesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return AgentTypesAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypesAdmin.GetGridHtml.onValidationError))
					AgentTypesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : AgentTypesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypesAdmin.GetGridHtml.onErrorReceived) ? AgentTypesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypesAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, AgentTypesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtmlInternal : function(AgentTypes, Callback) {
        return AgentTypesAdmin.GetGridHtmlInternalObject({ AgentTypes : AgentTypes}, Callback);
    },

	GetGridHtmlInternalObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesAdminValidators.GetGridHtmlInternal)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypesAdmin.GetGridHtmlInternal.onValidationError))
					AgentTypesAdmin.GetGridHtmlInternal.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypesAdmin.Url, 
					Method : "GetGridHtmlInternal", 
					Params : { AgentTypes : oObject.AgentTypes}, 
					Serialize : AgentTypesAdmin.GetGridHtmlInternal.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypesAdmin.GetGridHtmlInternal.onErrorReceived) ? AgentTypesAdmin.GetGridHtmlInternal.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypesAdmin.Url, "GetGridHtmlInternal", { AgentTypes : oObject.AgentTypes}, AgentTypesAdmin.GetGridHtmlInternal.Serialize || {});
    },
	GetInsert : function(Callback) {
        return AgentTypesAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypesAdmin.GetInsert.onValidationError))
					AgentTypesAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypesAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : AgentTypesAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypesAdmin.GetInsert.onErrorReceived) ? AgentTypesAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypesAdmin.Url, "GetInsert", { }, AgentTypesAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return AgentTypesAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentTypesAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentTypesAdmin.Initialize.onValidationError))
					AgentTypesAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentTypesAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : AgentTypesAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentTypesAdmin.Initialize.onErrorReceived) ? AgentTypesAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentTypesAdmin.Url, "Initialize", { }, AgentTypesAdmin.Initialize.Serialize || {});
    }
};

var AgentTypesAdminValidators = {
	

	GetDetails : {
			AgentTypeID : AgentTypesAdminValidatorsFields.AgentTypeID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : AgentTypesAdminValidatorsFields.Name,
			Value : AgentTypesAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : AgentTypesAdminValidatorsFields.Name,
			Value : AgentTypesAdminValidatorsFields.Value,
			FieldName : AgentTypesAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : AgentTypesAdminValidatorsFields.Name,
			Value : AgentTypesAdminValidatorsFields.Value,
			FieldName : AgentTypesAdminValidatorsFields.FieldName,
			PreOptions : AgentTypesAdminValidatorsFields.PreOptions	
	},

	GetDropDownWithNull : {	
	},

	GetEdit : {
			AgentTypeID : AgentTypesAdminValidatorsFields.AgentTypeID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : AgentTypesAdminValidatorsFields.Search,
			SortColumn : AgentTypesAdminValidatorsFields.SortColumn,
			SortAscending : AgentTypesAdminValidatorsFields.SortAscending,
			SkipRows : AgentTypesAdminValidatorsFields.SkipRows,
			NumRows : AgentTypesAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : AgentTypesAdminValidatorsFields.Search	
	},

	GetGridHtml : {	
	},

	GetGridHtml : {
			Search : AgentTypesAdminValidatorsFields.Search,
			SortColumn : AgentTypesAdminValidatorsFields.SortColumn,
			SortAscending : AgentTypesAdminValidatorsFields.SortAscending,
			SkipRows : AgentTypesAdminValidatorsFields.SkipRows,
			NumRows : AgentTypesAdminValidatorsFields.NumRows	
	},

	GetGridHtmlInternal : {
			AgentTypes : AgentTypesAdminValidatorsFields.AgentTypes	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    