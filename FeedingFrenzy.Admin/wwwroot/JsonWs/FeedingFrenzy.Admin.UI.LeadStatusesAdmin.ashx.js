

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["LeadStatusesAdminValidatorsFields"])) {
	var LeadStatusesAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(LeadStatusesAdminValidatorsFields.FieldName)) {
	LeadStatusesAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(LeadStatusesAdminValidatorsFields.LeadStatusID)) {
	LeadStatusesAdminValidatorsFields.LeadStatusID = {Validators : [Validators.Text], InvalidMessage: "Invalid LeadStatusID"};
}
if (!ObjectUtil.HasValue(LeadStatusesAdminValidatorsFields.Name)) {
	LeadStatusesAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(LeadStatusesAdminValidatorsFields.NumRows)) {
	LeadStatusesAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(LeadStatusesAdminValidatorsFields.PreOptions)) {
	LeadStatusesAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(LeadStatusesAdminValidatorsFields.Search)) {
	LeadStatusesAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(LeadStatusesAdminValidatorsFields.SkipRows)) {
	LeadStatusesAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(LeadStatusesAdminValidatorsFields.SortAscending)) {
	LeadStatusesAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(LeadStatusesAdminValidatorsFields.SortColumn)) {
	LeadStatusesAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(LeadStatusesAdminValidatorsFields.Value)) {
	LeadStatusesAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var LeadStatusesAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.LeadStatusesAdmin.ashx"

	,
	GetDetails : function(LeadStatusID, Callback) {
        return LeadStatusesAdmin.GetDetailsObject({ LeadStatusID : LeadStatusID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatusesAdmin.GetDetails.onValidationError))
					LeadStatusesAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatusesAdmin.Url, 
					Method : "GetDetails", 
					Params : { LeadStatusID : oObject.LeadStatusID}, 
					Serialize : LeadStatusesAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatusesAdmin.GetDetails.onErrorReceived) ? LeadStatusesAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatusesAdmin.Url, "GetDetails", { LeadStatusID : oObject.LeadStatusID}, LeadStatusesAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return LeadStatusesAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatusesAdmin.GetDropDown.onValidationError))
					LeadStatusesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatusesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : LeadStatusesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatusesAdmin.GetDropDown.onErrorReceived) ? LeadStatusesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatusesAdmin.Url, "GetDropDown", { }, LeadStatusesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return LeadStatusesAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatusesAdmin.GetDropDown.onValidationError))
					LeadStatusesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatusesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : LeadStatusesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatusesAdmin.GetDropDown.onErrorReceived) ? LeadStatusesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatusesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, LeadStatusesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return LeadStatusesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatusesAdmin.GetDropDown.onValidationError))
					LeadStatusesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatusesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : LeadStatusesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatusesAdmin.GetDropDown.onErrorReceived) ? LeadStatusesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatusesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, LeadStatusesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return LeadStatusesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatusesAdmin.GetDropDown.onValidationError))
					LeadStatusesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatusesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : LeadStatusesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatusesAdmin.GetDropDown.onErrorReceived) ? LeadStatusesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatusesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, LeadStatusesAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(LeadStatusID, Callback) {
        return LeadStatusesAdmin.GetEditObject({ LeadStatusID : LeadStatusID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatusesAdmin.GetEdit.onValidationError))
					LeadStatusesAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatusesAdmin.Url, 
					Method : "GetEdit", 
					Params : { LeadStatusID : oObject.LeadStatusID}, 
					Serialize : LeadStatusesAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatusesAdmin.GetEdit.onErrorReceived) ? LeadStatusesAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatusesAdmin.Url, "GetEdit", { LeadStatusID : oObject.LeadStatusID}, LeadStatusesAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return LeadStatusesAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatusesAdmin.GetGrid.onValidationError))
					LeadStatusesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatusesAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : LeadStatusesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatusesAdmin.GetGrid.onErrorReceived) ? LeadStatusesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatusesAdmin.Url, "GetGrid", { }, LeadStatusesAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadStatusesAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatusesAdmin.GetGrid.onValidationError))
					LeadStatusesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatusesAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadStatusesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatusesAdmin.GetGrid.onErrorReceived) ? LeadStatusesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatusesAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadStatusesAdmin.GetGrid.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return LeadStatusesAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatusesAdmin.GetGridCount.onValidationError))
					LeadStatusesAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatusesAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : LeadStatusesAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatusesAdmin.GetGridCount.onErrorReceived) ? LeadStatusesAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatusesAdmin.Url, "GetGridCount", { Search : oObject.Search}, LeadStatusesAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return LeadStatusesAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatusesAdmin.GetGridHtml.onValidationError))
					LeadStatusesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatusesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : LeadStatusesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatusesAdmin.GetGridHtml.onErrorReceived) ? LeadStatusesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatusesAdmin.Url, "GetGridHtml", { }, LeadStatusesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadStatusesAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatusesAdmin.GetGridHtml.onValidationError))
					LeadStatusesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatusesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadStatusesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatusesAdmin.GetGridHtml.onErrorReceived) ? LeadStatusesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatusesAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadStatusesAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return LeadStatusesAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatusesAdmin.GetInsert.onValidationError))
					LeadStatusesAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatusesAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : LeadStatusesAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatusesAdmin.GetInsert.onErrorReceived) ? LeadStatusesAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatusesAdmin.Url, "GetInsert", { }, LeadStatusesAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return LeadStatusesAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadStatusesAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadStatusesAdmin.Initialize.onValidationError))
					LeadStatusesAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadStatusesAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : LeadStatusesAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadStatusesAdmin.Initialize.onErrorReceived) ? LeadStatusesAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadStatusesAdmin.Url, "Initialize", { }, LeadStatusesAdmin.Initialize.Serialize || {});
    }
};

var LeadStatusesAdminValidators = {
	

	GetDetails : {
			LeadStatusID : LeadStatusesAdminValidatorsFields.LeadStatusID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : LeadStatusesAdminValidatorsFields.Name,
			Value : LeadStatusesAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : LeadStatusesAdminValidatorsFields.Name,
			Value : LeadStatusesAdminValidatorsFields.Value,
			FieldName : LeadStatusesAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : LeadStatusesAdminValidatorsFields.Name,
			Value : LeadStatusesAdminValidatorsFields.Value,
			FieldName : LeadStatusesAdminValidatorsFields.FieldName,
			PreOptions : LeadStatusesAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			LeadStatusID : LeadStatusesAdminValidatorsFields.LeadStatusID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : LeadStatusesAdminValidatorsFields.Search,
			SortColumn : LeadStatusesAdminValidatorsFields.SortColumn,
			SortAscending : LeadStatusesAdminValidatorsFields.SortAscending,
			SkipRows : LeadStatusesAdminValidatorsFields.SkipRows,
			NumRows : LeadStatusesAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : LeadStatusesAdminValidatorsFields.Search	
	},

	GetGridHtml : {	
	},

	GetGridHtml : {
			Search : LeadStatusesAdminValidatorsFields.Search,
			SortColumn : LeadStatusesAdminValidatorsFields.SortColumn,
			SortAscending : LeadStatusesAdminValidatorsFields.SortAscending,
			SkipRows : LeadStatusesAdminValidatorsFields.SkipRows,
			NumRows : LeadStatusesAdminValidatorsFields.NumRows	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    