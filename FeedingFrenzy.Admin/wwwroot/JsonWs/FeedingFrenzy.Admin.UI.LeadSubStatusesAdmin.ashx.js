

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["LeadSubStatusesAdminValidatorsFields"])) {
	var LeadSubStatusesAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(LeadSubStatusesAdminValidatorsFields.FieldName)) {
	LeadSubStatusesAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(LeadSubStatusesAdminValidatorsFields.LeadStatusID)) {
	LeadSubStatusesAdminValidatorsFields.LeadStatusID = {Validators : [Validators.Text], InvalidMessage: "Invalid LeadStatusID"};
}
if (!ObjectUtil.HasValue(LeadSubStatusesAdminValidatorsFields.LeadSubStatusID)) {
	LeadSubStatusesAdminValidatorsFields.LeadSubStatusID = {Validators : [Validators.Text], InvalidMessage: "Invalid LeadSubStatusID"};
}
if (!ObjectUtil.HasValue(LeadSubStatusesAdminValidatorsFields.Name)) {
	LeadSubStatusesAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(LeadSubStatusesAdminValidatorsFields.NumRows)) {
	LeadSubStatusesAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(LeadSubStatusesAdminValidatorsFields.PreOptions)) {
	LeadSubStatusesAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(LeadSubStatusesAdminValidatorsFields.Search)) {
	LeadSubStatusesAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(LeadSubStatusesAdminValidatorsFields.SkipRows)) {
	LeadSubStatusesAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(LeadSubStatusesAdminValidatorsFields.SortAscending)) {
	LeadSubStatusesAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(LeadSubStatusesAdminValidatorsFields.SortColumn)) {
	LeadSubStatusesAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(LeadSubStatusesAdminValidatorsFields.Value)) {
	LeadSubStatusesAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var LeadSubStatusesAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.LeadSubStatusesAdmin.ashx"

	,
	GetDetails : function(LeadSubStatusID, Callback) {
        return LeadSubStatusesAdmin.GetDetailsObject({ LeadSubStatusID : LeadSubStatusID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetDetails.onValidationError))
					LeadSubStatusesAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatusesAdmin.Url, 
					Method : "GetDetails", 
					Params : { LeadSubStatusID : oObject.LeadSubStatusID}, 
					Serialize : LeadSubStatusesAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetDetails.onErrorReceived) ? LeadSubStatusesAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatusesAdmin.Url, "GetDetails", { LeadSubStatusID : oObject.LeadSubStatusID}, LeadSubStatusesAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return LeadSubStatusesAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetDropDown.onValidationError))
					LeadSubStatusesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatusesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : LeadSubStatusesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetDropDown.onErrorReceived) ? LeadSubStatusesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatusesAdmin.Url, "GetDropDown", { }, LeadSubStatusesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return LeadSubStatusesAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetDropDown.onValidationError))
					LeadSubStatusesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatusesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : LeadSubStatusesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetDropDown.onErrorReceived) ? LeadSubStatusesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatusesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, LeadSubStatusesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return LeadSubStatusesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetDropDown.onValidationError))
					LeadSubStatusesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatusesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : LeadSubStatusesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetDropDown.onErrorReceived) ? LeadSubStatusesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatusesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, LeadSubStatusesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return LeadSubStatusesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetDropDown.onValidationError))
					LeadSubStatusesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatusesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : LeadSubStatusesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetDropDown.onErrorReceived) ? LeadSubStatusesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatusesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, LeadSubStatusesAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(LeadSubStatusID, Callback) {
        return LeadSubStatusesAdmin.GetEditObject({ LeadSubStatusID : LeadSubStatusID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetEdit.onValidationError))
					LeadSubStatusesAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatusesAdmin.Url, 
					Method : "GetEdit", 
					Params : { LeadSubStatusID : oObject.LeadSubStatusID}, 
					Serialize : LeadSubStatusesAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetEdit.onErrorReceived) ? LeadSubStatusesAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatusesAdmin.Url, "GetEdit", { LeadSubStatusID : oObject.LeadSubStatusID}, LeadSubStatusesAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadSubStatusesAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetGrid.onValidationError))
					LeadSubStatusesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatusesAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadSubStatusesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetGrid.onErrorReceived) ? LeadSubStatusesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatusesAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadSubStatusesAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Callback) {
        return LeadSubStatusesAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetGrid.onValidationError))
					LeadSubStatusesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatusesAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : LeadSubStatusesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetGrid.onErrorReceived) ? LeadSubStatusesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatusesAdmin.Url, "GetGrid", { }, LeadSubStatusesAdmin.GetGrid.Serialize || {});
    },
	GetGridByLeadStatusID : function(LeadStatusID, Callback) {
        return LeadSubStatusesAdmin.GetGridByLeadStatusIDObject({ LeadStatusID : LeadStatusID}, Callback);
    },

	GetGridByLeadStatusIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesAdminValidators.GetGridByLeadStatusID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetGridByLeadStatusID.onValidationError))
					LeadSubStatusesAdmin.GetGridByLeadStatusID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatusesAdmin.Url, 
					Method : "GetGridByLeadStatusID", 
					Params : { LeadStatusID : oObject.LeadStatusID}, 
					Serialize : LeadSubStatusesAdmin.GetGridByLeadStatusID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetGridByLeadStatusID.onErrorReceived) ? LeadSubStatusesAdmin.GetGridByLeadStatusID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatusesAdmin.Url, "GetGridByLeadStatusID", { LeadStatusID : oObject.LeadStatusID}, LeadSubStatusesAdmin.GetGridByLeadStatusID.Serialize || {});
    },
	GetGridByLeadStatusID : function(LeadStatusID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadSubStatusesAdmin.GetGridByLeadStatusIDObject({ LeadStatusID : LeadStatusID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByLeadStatusIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesAdminValidators.GetGridByLeadStatusID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetGridByLeadStatusID.onValidationError))
					LeadSubStatusesAdmin.GetGridByLeadStatusID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatusesAdmin.Url, 
					Method : "GetGridByLeadStatusID", 
					Params : { LeadStatusID : oObject.LeadStatusID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadSubStatusesAdmin.GetGridByLeadStatusID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetGridByLeadStatusID.onErrorReceived) ? LeadSubStatusesAdmin.GetGridByLeadStatusID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatusesAdmin.Url, "GetGridByLeadStatusID", { LeadStatusID : oObject.LeadStatusID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadSubStatusesAdmin.GetGridByLeadStatusID.Serialize || {});
    },
	GetGridByLeadStatusIDCount : function(LeadStatusID, Search, Callback) {
        return LeadSubStatusesAdmin.GetGridByLeadStatusIDCountObject({ LeadStatusID : LeadStatusID,Search : Search}, Callback);
    },

	GetGridByLeadStatusIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesAdminValidators.GetGridByLeadStatusIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetGridByLeadStatusIDCount.onValidationError))
					LeadSubStatusesAdmin.GetGridByLeadStatusIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatusesAdmin.Url, 
					Method : "GetGridByLeadStatusIDCount", 
					Params : { LeadStatusID : oObject.LeadStatusID,Search : oObject.Search}, 
					Serialize : LeadSubStatusesAdmin.GetGridByLeadStatusIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetGridByLeadStatusIDCount.onErrorReceived) ? LeadSubStatusesAdmin.GetGridByLeadStatusIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatusesAdmin.Url, "GetGridByLeadStatusIDCount", { LeadStatusID : oObject.LeadStatusID,Search : oObject.Search}, LeadSubStatusesAdmin.GetGridByLeadStatusIDCount.Serialize || {});
    },
	GetGridByLeadStatusIDHtml : function(LeadStatusID, Callback) {
        return LeadSubStatusesAdmin.GetGridByLeadStatusIDHtmlObject({ LeadStatusID : LeadStatusID}, Callback);
    },

	GetGridByLeadStatusIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesAdminValidators.GetGridByLeadStatusIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetGridByLeadStatusIDHtml.onValidationError))
					LeadSubStatusesAdmin.GetGridByLeadStatusIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatusesAdmin.Url, 
					Method : "GetGridByLeadStatusIDHtml", 
					Params : { LeadStatusID : oObject.LeadStatusID}, 
					Serialize : LeadSubStatusesAdmin.GetGridByLeadStatusIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetGridByLeadStatusIDHtml.onErrorReceived) ? LeadSubStatusesAdmin.GetGridByLeadStatusIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatusesAdmin.Url, "GetGridByLeadStatusIDHtml", { LeadStatusID : oObject.LeadStatusID}, LeadSubStatusesAdmin.GetGridByLeadStatusIDHtml.Serialize || {});
    },
	GetGridByLeadStatusIDHtml : function(LeadStatusID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadSubStatusesAdmin.GetGridByLeadStatusIDHtmlObject({ LeadStatusID : LeadStatusID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByLeadStatusIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesAdminValidators.GetGridByLeadStatusIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetGridByLeadStatusIDHtml.onValidationError))
					LeadSubStatusesAdmin.GetGridByLeadStatusIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatusesAdmin.Url, 
					Method : "GetGridByLeadStatusIDHtml", 
					Params : { LeadStatusID : oObject.LeadStatusID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadSubStatusesAdmin.GetGridByLeadStatusIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetGridByLeadStatusIDHtml.onErrorReceived) ? LeadSubStatusesAdmin.GetGridByLeadStatusIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatusesAdmin.Url, "GetGridByLeadStatusIDHtml", { LeadStatusID : oObject.LeadStatusID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadSubStatusesAdmin.GetGridByLeadStatusIDHtml.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return LeadSubStatusesAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetGridCount.onValidationError))
					LeadSubStatusesAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatusesAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : LeadSubStatusesAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetGridCount.onErrorReceived) ? LeadSubStatusesAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatusesAdmin.Url, "GetGridCount", { Search : oObject.Search}, LeadSubStatusesAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadSubStatusesAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetGridHtml.onValidationError))
					LeadSubStatusesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatusesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadSubStatusesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetGridHtml.onErrorReceived) ? LeadSubStatusesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatusesAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadSubStatusesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return LeadSubStatusesAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetGridHtml.onValidationError))
					LeadSubStatusesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatusesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : LeadSubStatusesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetGridHtml.onErrorReceived) ? LeadSubStatusesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatusesAdmin.Url, "GetGridHtml", { }, LeadSubStatusesAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return LeadSubStatusesAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetInsert.onValidationError))
					LeadSubStatusesAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatusesAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : LeadSubStatusesAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatusesAdmin.GetInsert.onErrorReceived) ? LeadSubStatusesAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatusesAdmin.Url, "GetInsert", { }, LeadSubStatusesAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return LeadSubStatusesAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadSubStatusesAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadSubStatusesAdmin.Initialize.onValidationError))
					LeadSubStatusesAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadSubStatusesAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : LeadSubStatusesAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadSubStatusesAdmin.Initialize.onErrorReceived) ? LeadSubStatusesAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadSubStatusesAdmin.Url, "Initialize", { }, LeadSubStatusesAdmin.Initialize.Serialize || {});
    }
};

var LeadSubStatusesAdminValidators = {
	

	GetDetails : {
			LeadSubStatusID : LeadSubStatusesAdminValidatorsFields.LeadSubStatusID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : LeadSubStatusesAdminValidatorsFields.Name,
			Value : LeadSubStatusesAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : LeadSubStatusesAdminValidatorsFields.Name,
			Value : LeadSubStatusesAdminValidatorsFields.Value,
			FieldName : LeadSubStatusesAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : LeadSubStatusesAdminValidatorsFields.Name,
			Value : LeadSubStatusesAdminValidatorsFields.Value,
			FieldName : LeadSubStatusesAdminValidatorsFields.FieldName,
			PreOptions : LeadSubStatusesAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			LeadSubStatusID : LeadSubStatusesAdminValidatorsFields.LeadSubStatusID	
	},

	GetGrid : {
			Search : LeadSubStatusesAdminValidatorsFields.Search,
			SortColumn : LeadSubStatusesAdminValidatorsFields.SortColumn,
			SortAscending : LeadSubStatusesAdminValidatorsFields.SortAscending,
			SkipRows : LeadSubStatusesAdminValidatorsFields.SkipRows,
			NumRows : LeadSubStatusesAdminValidatorsFields.NumRows	
	},

	GetGrid : {	
	},

	GetGridByLeadStatusID : {
			LeadStatusID : LeadSubStatusesAdminValidatorsFields.LeadStatusID	
	},

	GetGridByLeadStatusID : {
			LeadStatusID : LeadSubStatusesAdminValidatorsFields.LeadStatusID,
			Search : LeadSubStatusesAdminValidatorsFields.Search,
			SortColumn : LeadSubStatusesAdminValidatorsFields.SortColumn,
			SortAscending : LeadSubStatusesAdminValidatorsFields.SortAscending,
			SkipRows : LeadSubStatusesAdminValidatorsFields.SkipRows,
			NumRows : LeadSubStatusesAdminValidatorsFields.NumRows	
	},

	GetGridByLeadStatusIDCount : {
			LeadStatusID : LeadSubStatusesAdminValidatorsFields.LeadStatusID,
			Search : LeadSubStatusesAdminValidatorsFields.Search	
	},

	GetGridByLeadStatusIDHtml : {
			LeadStatusID : LeadSubStatusesAdminValidatorsFields.LeadStatusID	
	},

	GetGridByLeadStatusIDHtml : {
			LeadStatusID : LeadSubStatusesAdminValidatorsFields.LeadStatusID,
			Search : LeadSubStatusesAdminValidatorsFields.Search,
			SortColumn : LeadSubStatusesAdminValidatorsFields.SortColumn,
			SortAscending : LeadSubStatusesAdminValidatorsFields.SortAscending,
			SkipRows : LeadSubStatusesAdminValidatorsFields.SkipRows,
			NumRows : LeadSubStatusesAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : LeadSubStatusesAdminValidatorsFields.Search	
	},

	GetGridHtml : {
			Search : LeadSubStatusesAdminValidatorsFields.Search,
			SortColumn : LeadSubStatusesAdminValidatorsFields.SortColumn,
			SortAscending : LeadSubStatusesAdminValidatorsFields.SortAscending,
			SkipRows : LeadSubStatusesAdminValidatorsFields.SkipRows,
			NumRows : LeadSubStatusesAdminValidatorsFields.NumRows	
	},

	GetGridHtml : {	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    