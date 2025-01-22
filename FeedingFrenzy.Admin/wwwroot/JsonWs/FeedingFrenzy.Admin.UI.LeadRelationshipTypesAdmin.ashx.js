

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["LeadRelationshipTypesAdminValidatorsFields"])) {
	var LeadRelationshipTypesAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(LeadRelationshipTypesAdminValidatorsFields.FieldName)) {
	LeadRelationshipTypesAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(LeadRelationshipTypesAdminValidatorsFields.LeadRelationshipTypeID)) {
	LeadRelationshipTypesAdminValidatorsFields.LeadRelationshipTypeID = {Validators : [Validators.Text], InvalidMessage: "Invalid LeadRelationshipTypeID"};
}
if (!ObjectUtil.HasValue(LeadRelationshipTypesAdminValidatorsFields.Name)) {
	LeadRelationshipTypesAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(LeadRelationshipTypesAdminValidatorsFields.NumRows)) {
	LeadRelationshipTypesAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(LeadRelationshipTypesAdminValidatorsFields.PreOptions)) {
	LeadRelationshipTypesAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(LeadRelationshipTypesAdminValidatorsFields.Search)) {
	LeadRelationshipTypesAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(LeadRelationshipTypesAdminValidatorsFields.SkipRows)) {
	LeadRelationshipTypesAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(LeadRelationshipTypesAdminValidatorsFields.SortAscending)) {
	LeadRelationshipTypesAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(LeadRelationshipTypesAdminValidatorsFields.SortColumn)) {
	LeadRelationshipTypesAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(LeadRelationshipTypesAdminValidatorsFields.Value)) {
	LeadRelationshipTypesAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var LeadRelationshipTypesAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.LeadRelationshipTypesAdmin.ashx"

	,
	GetDetails : function(LeadRelationshipTypeID, Callback) {
        return LeadRelationshipTypesAdmin.GetDetailsObject({ LeadRelationshipTypeID : LeadRelationshipTypeID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetDetails.onValidationError))
					LeadRelationshipTypesAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypesAdmin.Url, 
					Method : "GetDetails", 
					Params : { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID}, 
					Serialize : LeadRelationshipTypesAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetDetails.onErrorReceived) ? LeadRelationshipTypesAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypesAdmin.Url, "GetDetails", { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID}, LeadRelationshipTypesAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return LeadRelationshipTypesAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetDropDown.onValidationError))
					LeadRelationshipTypesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : LeadRelationshipTypesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetDropDown.onErrorReceived) ? LeadRelationshipTypesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypesAdmin.Url, "GetDropDown", { }, LeadRelationshipTypesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return LeadRelationshipTypesAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetDropDown.onValidationError))
					LeadRelationshipTypesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : LeadRelationshipTypesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetDropDown.onErrorReceived) ? LeadRelationshipTypesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, LeadRelationshipTypesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return LeadRelationshipTypesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetDropDown.onValidationError))
					LeadRelationshipTypesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : LeadRelationshipTypesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetDropDown.onErrorReceived) ? LeadRelationshipTypesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, LeadRelationshipTypesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return LeadRelationshipTypesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetDropDown.onValidationError))
					LeadRelationshipTypesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : LeadRelationshipTypesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetDropDown.onErrorReceived) ? LeadRelationshipTypesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, LeadRelationshipTypesAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(LeadRelationshipTypeID, Callback) {
        return LeadRelationshipTypesAdmin.GetEditObject({ LeadRelationshipTypeID : LeadRelationshipTypeID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetEdit.onValidationError))
					LeadRelationshipTypesAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypesAdmin.Url, 
					Method : "GetEdit", 
					Params : { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID}, 
					Serialize : LeadRelationshipTypesAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetEdit.onErrorReceived) ? LeadRelationshipTypesAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypesAdmin.Url, "GetEdit", { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID}, LeadRelationshipTypesAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return LeadRelationshipTypesAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetGrid.onValidationError))
					LeadRelationshipTypesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypesAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : LeadRelationshipTypesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetGrid.onErrorReceived) ? LeadRelationshipTypesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypesAdmin.Url, "GetGrid", { }, LeadRelationshipTypesAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadRelationshipTypesAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetGrid.onValidationError))
					LeadRelationshipTypesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypesAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadRelationshipTypesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetGrid.onErrorReceived) ? LeadRelationshipTypesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypesAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadRelationshipTypesAdmin.GetGrid.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return LeadRelationshipTypesAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetGridCount.onValidationError))
					LeadRelationshipTypesAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypesAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : LeadRelationshipTypesAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetGridCount.onErrorReceived) ? LeadRelationshipTypesAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypesAdmin.Url, "GetGridCount", { Search : oObject.Search}, LeadRelationshipTypesAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return LeadRelationshipTypesAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetGridHtml.onValidationError))
					LeadRelationshipTypesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : LeadRelationshipTypesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetGridHtml.onErrorReceived) ? LeadRelationshipTypesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypesAdmin.Url, "GetGridHtml", { }, LeadRelationshipTypesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadRelationshipTypesAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetGridHtml.onValidationError))
					LeadRelationshipTypesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadRelationshipTypesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetGridHtml.onErrorReceived) ? LeadRelationshipTypesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypesAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadRelationshipTypesAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return LeadRelationshipTypesAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetInsert.onValidationError))
					LeadRelationshipTypesAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypesAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : LeadRelationshipTypesAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.GetInsert.onErrorReceived) ? LeadRelationshipTypesAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypesAdmin.Url, "GetInsert", { }, LeadRelationshipTypesAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return LeadRelationshipTypesAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipTypesAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.Initialize.onValidationError))
					LeadRelationshipTypesAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipTypesAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : LeadRelationshipTypesAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipTypesAdmin.Initialize.onErrorReceived) ? LeadRelationshipTypesAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipTypesAdmin.Url, "Initialize", { }, LeadRelationshipTypesAdmin.Initialize.Serialize || {});
    }
};

var LeadRelationshipTypesAdminValidators = {
	

	GetDetails : {
			LeadRelationshipTypeID : LeadRelationshipTypesAdminValidatorsFields.LeadRelationshipTypeID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : LeadRelationshipTypesAdminValidatorsFields.Name,
			Value : LeadRelationshipTypesAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : LeadRelationshipTypesAdminValidatorsFields.Name,
			Value : LeadRelationshipTypesAdminValidatorsFields.Value,
			FieldName : LeadRelationshipTypesAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : LeadRelationshipTypesAdminValidatorsFields.Name,
			Value : LeadRelationshipTypesAdminValidatorsFields.Value,
			FieldName : LeadRelationshipTypesAdminValidatorsFields.FieldName,
			PreOptions : LeadRelationshipTypesAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			LeadRelationshipTypeID : LeadRelationshipTypesAdminValidatorsFields.LeadRelationshipTypeID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : LeadRelationshipTypesAdminValidatorsFields.Search,
			SortColumn : LeadRelationshipTypesAdminValidatorsFields.SortColumn,
			SortAscending : LeadRelationshipTypesAdminValidatorsFields.SortAscending,
			SkipRows : LeadRelationshipTypesAdminValidatorsFields.SkipRows,
			NumRows : LeadRelationshipTypesAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : LeadRelationshipTypesAdminValidatorsFields.Search	
	},

	GetGridHtml : {	
	},

	GetGridHtml : {
			Search : LeadRelationshipTypesAdminValidatorsFields.Search,
			SortColumn : LeadRelationshipTypesAdminValidatorsFields.SortColumn,
			SortAscending : LeadRelationshipTypesAdminValidatorsFields.SortAscending,
			SkipRows : LeadRelationshipTypesAdminValidatorsFields.SkipRows,
			NumRows : LeadRelationshipTypesAdminValidatorsFields.NumRows	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    