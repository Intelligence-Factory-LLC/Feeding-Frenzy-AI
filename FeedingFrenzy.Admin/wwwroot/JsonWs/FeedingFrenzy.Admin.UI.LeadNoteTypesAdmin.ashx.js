

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["LeadNoteTypesAdminValidatorsFields"])) {
	var LeadNoteTypesAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(LeadNoteTypesAdminValidatorsFields.FieldName)) {
	LeadNoteTypesAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(LeadNoteTypesAdminValidatorsFields.LeadNoteTypeID)) {
	LeadNoteTypesAdminValidatorsFields.LeadNoteTypeID = {Validators : [Validators.Text], InvalidMessage: "Invalid LeadNoteTypeID"};
}
if (!ObjectUtil.HasValue(LeadNoteTypesAdminValidatorsFields.Name)) {
	LeadNoteTypesAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(LeadNoteTypesAdminValidatorsFields.NumRows)) {
	LeadNoteTypesAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(LeadNoteTypesAdminValidatorsFields.PreOptions)) {
	LeadNoteTypesAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(LeadNoteTypesAdminValidatorsFields.Search)) {
	LeadNoteTypesAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(LeadNoteTypesAdminValidatorsFields.SkipRows)) {
	LeadNoteTypesAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(LeadNoteTypesAdminValidatorsFields.SortAscending)) {
	LeadNoteTypesAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(LeadNoteTypesAdminValidatorsFields.SortColumn)) {
	LeadNoteTypesAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(LeadNoteTypesAdminValidatorsFields.Value)) {
	LeadNoteTypesAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var LeadNoteTypesAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.LeadNoteTypesAdmin.ashx"

	,
	GetDetails : function(LeadNoteTypeID, Callback) {
        return LeadNoteTypesAdmin.GetDetailsObject({ LeadNoteTypeID : LeadNoteTypeID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetDetails.onValidationError))
					LeadNoteTypesAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypesAdmin.Url, 
					Method : "GetDetails", 
					Params : { LeadNoteTypeID : oObject.LeadNoteTypeID}, 
					Serialize : LeadNoteTypesAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetDetails.onErrorReceived) ? LeadNoteTypesAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypesAdmin.Url, "GetDetails", { LeadNoteTypeID : oObject.LeadNoteTypeID}, LeadNoteTypesAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return LeadNoteTypesAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetDropDown.onValidationError))
					LeadNoteTypesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : LeadNoteTypesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetDropDown.onErrorReceived) ? LeadNoteTypesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypesAdmin.Url, "GetDropDown", { }, LeadNoteTypesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return LeadNoteTypesAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetDropDown.onValidationError))
					LeadNoteTypesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : LeadNoteTypesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetDropDown.onErrorReceived) ? LeadNoteTypesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, LeadNoteTypesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return LeadNoteTypesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetDropDown.onValidationError))
					LeadNoteTypesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : LeadNoteTypesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetDropDown.onErrorReceived) ? LeadNoteTypesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, LeadNoteTypesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return LeadNoteTypesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetDropDown.onValidationError))
					LeadNoteTypesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : LeadNoteTypesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetDropDown.onErrorReceived) ? LeadNoteTypesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, LeadNoteTypesAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(LeadNoteTypeID, Callback) {
        return LeadNoteTypesAdmin.GetEditObject({ LeadNoteTypeID : LeadNoteTypeID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetEdit.onValidationError))
					LeadNoteTypesAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypesAdmin.Url, 
					Method : "GetEdit", 
					Params : { LeadNoteTypeID : oObject.LeadNoteTypeID}, 
					Serialize : LeadNoteTypesAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetEdit.onErrorReceived) ? LeadNoteTypesAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypesAdmin.Url, "GetEdit", { LeadNoteTypeID : oObject.LeadNoteTypeID}, LeadNoteTypesAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return LeadNoteTypesAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetGrid.onValidationError))
					LeadNoteTypesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypesAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : LeadNoteTypesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetGrid.onErrorReceived) ? LeadNoteTypesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypesAdmin.Url, "GetGrid", { }, LeadNoteTypesAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadNoteTypesAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetGrid.onValidationError))
					LeadNoteTypesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypesAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadNoteTypesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetGrid.onErrorReceived) ? LeadNoteTypesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypesAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadNoteTypesAdmin.GetGrid.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return LeadNoteTypesAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetGridCount.onValidationError))
					LeadNoteTypesAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypesAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : LeadNoteTypesAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetGridCount.onErrorReceived) ? LeadNoteTypesAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypesAdmin.Url, "GetGridCount", { Search : oObject.Search}, LeadNoteTypesAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return LeadNoteTypesAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetGridHtml.onValidationError))
					LeadNoteTypesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : LeadNoteTypesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetGridHtml.onErrorReceived) ? LeadNoteTypesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypesAdmin.Url, "GetGridHtml", { }, LeadNoteTypesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadNoteTypesAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetGridHtml.onValidationError))
					LeadNoteTypesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadNoteTypesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetGridHtml.onErrorReceived) ? LeadNoteTypesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypesAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadNoteTypesAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return LeadNoteTypesAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetInsert.onValidationError))
					LeadNoteTypesAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypesAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : LeadNoteTypesAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypesAdmin.GetInsert.onErrorReceived) ? LeadNoteTypesAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypesAdmin.Url, "GetInsert", { }, LeadNoteTypesAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return LeadNoteTypesAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNoteTypesAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNoteTypesAdmin.Initialize.onValidationError))
					LeadNoteTypesAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNoteTypesAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : LeadNoteTypesAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNoteTypesAdmin.Initialize.onErrorReceived) ? LeadNoteTypesAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNoteTypesAdmin.Url, "Initialize", { }, LeadNoteTypesAdmin.Initialize.Serialize || {});
    }
};

var LeadNoteTypesAdminValidators = {
	

	GetDetails : {
			LeadNoteTypeID : LeadNoteTypesAdminValidatorsFields.LeadNoteTypeID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : LeadNoteTypesAdminValidatorsFields.Name,
			Value : LeadNoteTypesAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : LeadNoteTypesAdminValidatorsFields.Name,
			Value : LeadNoteTypesAdminValidatorsFields.Value,
			FieldName : LeadNoteTypesAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : LeadNoteTypesAdminValidatorsFields.Name,
			Value : LeadNoteTypesAdminValidatorsFields.Value,
			FieldName : LeadNoteTypesAdminValidatorsFields.FieldName,
			PreOptions : LeadNoteTypesAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			LeadNoteTypeID : LeadNoteTypesAdminValidatorsFields.LeadNoteTypeID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : LeadNoteTypesAdminValidatorsFields.Search,
			SortColumn : LeadNoteTypesAdminValidatorsFields.SortColumn,
			SortAscending : LeadNoteTypesAdminValidatorsFields.SortAscending,
			SkipRows : LeadNoteTypesAdminValidatorsFields.SkipRows,
			NumRows : LeadNoteTypesAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : LeadNoteTypesAdminValidatorsFields.Search	
	},

	GetGridHtml : {	
	},

	GetGridHtml : {
			Search : LeadNoteTypesAdminValidatorsFields.Search,
			SortColumn : LeadNoteTypesAdminValidatorsFields.SortColumn,
			SortAscending : LeadNoteTypesAdminValidatorsFields.SortAscending,
			SkipRows : LeadNoteTypesAdminValidatorsFields.SkipRows,
			NumRows : LeadNoteTypesAdminValidatorsFields.NumRows	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    