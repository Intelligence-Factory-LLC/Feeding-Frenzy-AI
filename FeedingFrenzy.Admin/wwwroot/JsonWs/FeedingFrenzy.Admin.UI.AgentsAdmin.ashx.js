

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["AgentsAdminValidatorsFields"])) {
	var AgentsAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(AgentsAdminValidatorsFields.AgentID)) {
	AgentsAdminValidatorsFields.AgentID = {Validators : [Validators.Text], InvalidMessage: "Invalid AgentID"};
}
if (!ObjectUtil.HasValue(AgentsAdminValidatorsFields.Agents)) {
	AgentsAdminValidatorsFields.Agents = {Validators : [Validators.Text], InvalidMessage: "Invalid Agents"};
}
if (!ObjectUtil.HasValue(AgentsAdminValidatorsFields.FieldName)) {
	AgentsAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(AgentsAdminValidatorsFields.Name)) {
	AgentsAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(AgentsAdminValidatorsFields.NumRows)) {
	AgentsAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(AgentsAdminValidatorsFields.PreOptions)) {
	AgentsAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(AgentsAdminValidatorsFields.Search)) {
	AgentsAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(AgentsAdminValidatorsFields.SkipRows)) {
	AgentsAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(AgentsAdminValidatorsFields.SortAscending)) {
	AgentsAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(AgentsAdminValidatorsFields.SortColumn)) {
	AgentsAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(AgentsAdminValidatorsFields.Value)) {
	AgentsAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var AgentsAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.AgentsAdmin.ashx"

	,
	GetDetails : function(AgentID, Callback) {
        return AgentsAdmin.GetDetailsObject({ AgentID : AgentID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentsAdmin.GetDetails.onValidationError))
					AgentsAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentsAdmin.Url, 
					Method : "GetDetails", 
					Params : { AgentID : oObject.AgentID}, 
					Serialize : AgentsAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentsAdmin.GetDetails.onErrorReceived) ? AgentsAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentsAdmin.Url, "GetDetails", { AgentID : oObject.AgentID}, AgentsAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return AgentsAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentsAdmin.GetDropDown.onValidationError))
					AgentsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : AgentsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentsAdmin.GetDropDown.onErrorReceived) ? AgentsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentsAdmin.Url, "GetDropDown", { }, AgentsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return AgentsAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentsAdmin.GetDropDown.onValidationError))
					AgentsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : AgentsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentsAdmin.GetDropDown.onErrorReceived) ? AgentsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, AgentsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return AgentsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentsAdmin.GetDropDown.onValidationError))
					AgentsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : AgentsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentsAdmin.GetDropDown.onErrorReceived) ? AgentsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, AgentsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return AgentsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentsAdmin.GetDropDown.onValidationError))
					AgentsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : AgentsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentsAdmin.GetDropDown.onErrorReceived) ? AgentsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, AgentsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDownWithNull : function(Callback) {
        return AgentsAdmin.GetDropDownWithNullObject({ }, Callback);
    },

	GetDropDownWithNullObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsAdminValidators.GetDropDownWithNull)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentsAdmin.GetDropDownWithNull.onValidationError))
					AgentsAdmin.GetDropDownWithNull.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentsAdmin.Url, 
					Method : "GetDropDownWithNull", 
					Params : { }, 
					Serialize : AgentsAdmin.GetDropDownWithNull.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentsAdmin.GetDropDownWithNull.onErrorReceived) ? AgentsAdmin.GetDropDownWithNull.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentsAdmin.Url, "GetDropDownWithNull", { }, AgentsAdmin.GetDropDownWithNull.Serialize || {});
    },
	GetEdit : function(AgentID, Callback) {
        return AgentsAdmin.GetEditObject({ AgentID : AgentID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentsAdmin.GetEdit.onValidationError))
					AgentsAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentsAdmin.Url, 
					Method : "GetEdit", 
					Params : { AgentID : oObject.AgentID}, 
					Serialize : AgentsAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentsAdmin.GetEdit.onErrorReceived) ? AgentsAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentsAdmin.Url, "GetEdit", { AgentID : oObject.AgentID}, AgentsAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return AgentsAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentsAdmin.GetGrid.onValidationError))
					AgentsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentsAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : AgentsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentsAdmin.GetGrid.onErrorReceived) ? AgentsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentsAdmin.Url, "GetGrid", { }, AgentsAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return AgentsAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentsAdmin.GetGrid.onValidationError))
					AgentsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentsAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : AgentsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentsAdmin.GetGrid.onErrorReceived) ? AgentsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentsAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, AgentsAdmin.GetGrid.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return AgentsAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentsAdmin.GetGridCount.onValidationError))
					AgentsAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentsAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : AgentsAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentsAdmin.GetGridCount.onErrorReceived) ? AgentsAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentsAdmin.Url, "GetGridCount", { Search : oObject.Search}, AgentsAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return AgentsAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentsAdmin.GetGridHtml.onValidationError))
					AgentsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : AgentsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentsAdmin.GetGridHtml.onErrorReceived) ? AgentsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentsAdmin.Url, "GetGridHtml", { }, AgentsAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return AgentsAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentsAdmin.GetGridHtml.onValidationError))
					AgentsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : AgentsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentsAdmin.GetGridHtml.onErrorReceived) ? AgentsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentsAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, AgentsAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtmlInternal : function(Agents, Callback) {
        return AgentsAdmin.GetGridHtmlInternalObject({ Agents : Agents}, Callback);
    },

	GetGridHtmlInternalObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsAdminValidators.GetGridHtmlInternal)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentsAdmin.GetGridHtmlInternal.onValidationError))
					AgentsAdmin.GetGridHtmlInternal.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentsAdmin.Url, 
					Method : "GetGridHtmlInternal", 
					Params : { Agents : oObject.Agents}, 
					Serialize : AgentsAdmin.GetGridHtmlInternal.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentsAdmin.GetGridHtmlInternal.onErrorReceived) ? AgentsAdmin.GetGridHtmlInternal.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentsAdmin.Url, "GetGridHtmlInternal", { Agents : oObject.Agents}, AgentsAdmin.GetGridHtmlInternal.Serialize || {});
    },
	GetInsert : function(Callback) {
        return AgentsAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentsAdmin.GetInsert.onValidationError))
					AgentsAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentsAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : AgentsAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentsAdmin.GetInsert.onErrorReceived) ? AgentsAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentsAdmin.Url, "GetInsert", { }, AgentsAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return AgentsAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(AgentsAdmin.Initialize.onValidationError))
					AgentsAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: AgentsAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : AgentsAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(AgentsAdmin.Initialize.onErrorReceived) ? AgentsAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(AgentsAdmin.Url, "Initialize", { }, AgentsAdmin.Initialize.Serialize || {});
    }
};

var AgentsAdminValidators = {
	

	GetDetails : {
			AgentID : AgentsAdminValidatorsFields.AgentID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : AgentsAdminValidatorsFields.Name,
			Value : AgentsAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : AgentsAdminValidatorsFields.Name,
			Value : AgentsAdminValidatorsFields.Value,
			FieldName : AgentsAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : AgentsAdminValidatorsFields.Name,
			Value : AgentsAdminValidatorsFields.Value,
			FieldName : AgentsAdminValidatorsFields.FieldName,
			PreOptions : AgentsAdminValidatorsFields.PreOptions	
	},

	GetDropDownWithNull : {	
	},

	GetEdit : {
			AgentID : AgentsAdminValidatorsFields.AgentID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : AgentsAdminValidatorsFields.Search,
			SortColumn : AgentsAdminValidatorsFields.SortColumn,
			SortAscending : AgentsAdminValidatorsFields.SortAscending,
			SkipRows : AgentsAdminValidatorsFields.SkipRows,
			NumRows : AgentsAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : AgentsAdminValidatorsFields.Search	
	},

	GetGridHtml : {	
	},

	GetGridHtml : {
			Search : AgentsAdminValidatorsFields.Search,
			SortColumn : AgentsAdminValidatorsFields.SortColumn,
			SortAscending : AgentsAdminValidatorsFields.SortAscending,
			SkipRows : AgentsAdminValidatorsFields.SkipRows,
			NumRows : AgentsAdminValidatorsFields.NumRows	
	},

	GetGridHtmlInternal : {
			Agents : AgentsAdminValidatorsFields.Agents	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    