

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["LeadContactsAdminValidatorsFields"])) {
	var LeadContactsAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(LeadContactsAdminValidatorsFields.FieldName)) {
	LeadContactsAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(LeadContactsAdminValidatorsFields.LeadContactID)) {
	LeadContactsAdminValidatorsFields.LeadContactID = {Validators : [Validators.Text], InvalidMessage: "Invalid LeadContactID"};
}
if (!ObjectUtil.HasValue(LeadContactsAdminValidatorsFields.LeadID)) {
	LeadContactsAdminValidatorsFields.LeadID = {Validators : [Validators.Text], InvalidMessage: "Invalid LeadID"};
}
if (!ObjectUtil.HasValue(LeadContactsAdminValidatorsFields.Name)) {
	LeadContactsAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(LeadContactsAdminValidatorsFields.NumRows)) {
	LeadContactsAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(LeadContactsAdminValidatorsFields.PreOptions)) {
	LeadContactsAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(LeadContactsAdminValidatorsFields.Search)) {
	LeadContactsAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(LeadContactsAdminValidatorsFields.SkipRows)) {
	LeadContactsAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(LeadContactsAdminValidatorsFields.SortAscending)) {
	LeadContactsAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(LeadContactsAdminValidatorsFields.SortColumn)) {
	LeadContactsAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(LeadContactsAdminValidatorsFields.Value)) {
	LeadContactsAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var LeadContactsAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.LeadContactsAdmin.ashx"

	,
	GetDetails : function(LeadContactID, Callback) {
        return LeadContactsAdmin.GetDetailsObject({ LeadContactID : LeadContactID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContactsAdmin.GetDetails.onValidationError))
					LeadContactsAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContactsAdmin.Url, 
					Method : "GetDetails", 
					Params : { LeadContactID : oObject.LeadContactID}, 
					Serialize : LeadContactsAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContactsAdmin.GetDetails.onErrorReceived) ? LeadContactsAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContactsAdmin.Url, "GetDetails", { LeadContactID : oObject.LeadContactID}, LeadContactsAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return LeadContactsAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContactsAdmin.GetDropDown.onValidationError))
					LeadContactsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContactsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : LeadContactsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContactsAdmin.GetDropDown.onErrorReceived) ? LeadContactsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContactsAdmin.Url, "GetDropDown", { }, LeadContactsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return LeadContactsAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContactsAdmin.GetDropDown.onValidationError))
					LeadContactsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContactsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : LeadContactsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContactsAdmin.GetDropDown.onErrorReceived) ? LeadContactsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContactsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, LeadContactsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return LeadContactsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContactsAdmin.GetDropDown.onValidationError))
					LeadContactsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContactsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : LeadContactsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContactsAdmin.GetDropDown.onErrorReceived) ? LeadContactsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContactsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, LeadContactsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return LeadContactsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContactsAdmin.GetDropDown.onValidationError))
					LeadContactsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContactsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : LeadContactsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContactsAdmin.GetDropDown.onErrorReceived) ? LeadContactsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContactsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, LeadContactsAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(LeadContactID, Callback) {
        return LeadContactsAdmin.GetEditObject({ LeadContactID : LeadContactID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContactsAdmin.GetEdit.onValidationError))
					LeadContactsAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContactsAdmin.Url, 
					Method : "GetEdit", 
					Params : { LeadContactID : oObject.LeadContactID}, 
					Serialize : LeadContactsAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContactsAdmin.GetEdit.onErrorReceived) ? LeadContactsAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContactsAdmin.Url, "GetEdit", { LeadContactID : oObject.LeadContactID}, LeadContactsAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadContactsAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContactsAdmin.GetGrid.onValidationError))
					LeadContactsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContactsAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadContactsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContactsAdmin.GetGrid.onErrorReceived) ? LeadContactsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContactsAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadContactsAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Callback) {
        return LeadContactsAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContactsAdmin.GetGrid.onValidationError))
					LeadContactsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContactsAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : LeadContactsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContactsAdmin.GetGrid.onErrorReceived) ? LeadContactsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContactsAdmin.Url, "GetGrid", { }, LeadContactsAdmin.GetGrid.Serialize || {});
    },
	GetGridByLeadID : function(LeadID, Callback) {
        return LeadContactsAdmin.GetGridByLeadIDObject({ LeadID : LeadID}, Callback);
    },

	GetGridByLeadIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsAdminValidators.GetGridByLeadID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContactsAdmin.GetGridByLeadID.onValidationError))
					LeadContactsAdmin.GetGridByLeadID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContactsAdmin.Url, 
					Method : "GetGridByLeadID", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : LeadContactsAdmin.GetGridByLeadID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContactsAdmin.GetGridByLeadID.onErrorReceived) ? LeadContactsAdmin.GetGridByLeadID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContactsAdmin.Url, "GetGridByLeadID", { LeadID : oObject.LeadID}, LeadContactsAdmin.GetGridByLeadID.Serialize || {});
    },
	GetGridByLeadID : function(LeadID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadContactsAdmin.GetGridByLeadIDObject({ LeadID : LeadID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByLeadIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsAdminValidators.GetGridByLeadID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContactsAdmin.GetGridByLeadID.onValidationError))
					LeadContactsAdmin.GetGridByLeadID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContactsAdmin.Url, 
					Method : "GetGridByLeadID", 
					Params : { LeadID : oObject.LeadID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadContactsAdmin.GetGridByLeadID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContactsAdmin.GetGridByLeadID.onErrorReceived) ? LeadContactsAdmin.GetGridByLeadID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContactsAdmin.Url, "GetGridByLeadID", { LeadID : oObject.LeadID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadContactsAdmin.GetGridByLeadID.Serialize || {});
    },
	GetGridByLeadIDCount : function(LeadID, Search, Callback) {
        return LeadContactsAdmin.GetGridByLeadIDCountObject({ LeadID : LeadID,Search : Search}, Callback);
    },

	GetGridByLeadIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsAdminValidators.GetGridByLeadIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContactsAdmin.GetGridByLeadIDCount.onValidationError))
					LeadContactsAdmin.GetGridByLeadIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContactsAdmin.Url, 
					Method : "GetGridByLeadIDCount", 
					Params : { LeadID : oObject.LeadID,Search : oObject.Search}, 
					Serialize : LeadContactsAdmin.GetGridByLeadIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContactsAdmin.GetGridByLeadIDCount.onErrorReceived) ? LeadContactsAdmin.GetGridByLeadIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContactsAdmin.Url, "GetGridByLeadIDCount", { LeadID : oObject.LeadID,Search : oObject.Search}, LeadContactsAdmin.GetGridByLeadIDCount.Serialize || {});
    },
	GetGridByLeadIDHtml : function(LeadID, Callback) {
        return LeadContactsAdmin.GetGridByLeadIDHtmlObject({ LeadID : LeadID}, Callback);
    },

	GetGridByLeadIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsAdminValidators.GetGridByLeadIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContactsAdmin.GetGridByLeadIDHtml.onValidationError))
					LeadContactsAdmin.GetGridByLeadIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContactsAdmin.Url, 
					Method : "GetGridByLeadIDHtml", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : LeadContactsAdmin.GetGridByLeadIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContactsAdmin.GetGridByLeadIDHtml.onErrorReceived) ? LeadContactsAdmin.GetGridByLeadIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContactsAdmin.Url, "GetGridByLeadIDHtml", { LeadID : oObject.LeadID}, LeadContactsAdmin.GetGridByLeadIDHtml.Serialize || {});
    },
	GetGridByLeadIDHtml : function(LeadID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadContactsAdmin.GetGridByLeadIDHtmlObject({ LeadID : LeadID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByLeadIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsAdminValidators.GetGridByLeadIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContactsAdmin.GetGridByLeadIDHtml.onValidationError))
					LeadContactsAdmin.GetGridByLeadIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContactsAdmin.Url, 
					Method : "GetGridByLeadIDHtml", 
					Params : { LeadID : oObject.LeadID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadContactsAdmin.GetGridByLeadIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContactsAdmin.GetGridByLeadIDHtml.onErrorReceived) ? LeadContactsAdmin.GetGridByLeadIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContactsAdmin.Url, "GetGridByLeadIDHtml", { LeadID : oObject.LeadID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadContactsAdmin.GetGridByLeadIDHtml.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return LeadContactsAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContactsAdmin.GetGridCount.onValidationError))
					LeadContactsAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContactsAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : LeadContactsAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContactsAdmin.GetGridCount.onErrorReceived) ? LeadContactsAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContactsAdmin.Url, "GetGridCount", { Search : oObject.Search}, LeadContactsAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadContactsAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContactsAdmin.GetGridHtml.onValidationError))
					LeadContactsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContactsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadContactsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContactsAdmin.GetGridHtml.onErrorReceived) ? LeadContactsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContactsAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadContactsAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return LeadContactsAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContactsAdmin.GetGridHtml.onValidationError))
					LeadContactsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContactsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : LeadContactsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContactsAdmin.GetGridHtml.onErrorReceived) ? LeadContactsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContactsAdmin.Url, "GetGridHtml", { }, LeadContactsAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return LeadContactsAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContactsAdmin.GetInsert.onValidationError))
					LeadContactsAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContactsAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : LeadContactsAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContactsAdmin.GetInsert.onErrorReceived) ? LeadContactsAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContactsAdmin.Url, "GetInsert", { }, LeadContactsAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return LeadContactsAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadContactsAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadContactsAdmin.Initialize.onValidationError))
					LeadContactsAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadContactsAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : LeadContactsAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadContactsAdmin.Initialize.onErrorReceived) ? LeadContactsAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadContactsAdmin.Url, "Initialize", { }, LeadContactsAdmin.Initialize.Serialize || {});
    }
};

var LeadContactsAdminValidators = {
	

	GetDetails : {
			LeadContactID : LeadContactsAdminValidatorsFields.LeadContactID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : LeadContactsAdminValidatorsFields.Name,
			Value : LeadContactsAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : LeadContactsAdminValidatorsFields.Name,
			Value : LeadContactsAdminValidatorsFields.Value,
			FieldName : LeadContactsAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : LeadContactsAdminValidatorsFields.Name,
			Value : LeadContactsAdminValidatorsFields.Value,
			FieldName : LeadContactsAdminValidatorsFields.FieldName,
			PreOptions : LeadContactsAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			LeadContactID : LeadContactsAdminValidatorsFields.LeadContactID	
	},

	GetGrid : {
			Search : LeadContactsAdminValidatorsFields.Search,
			SortColumn : LeadContactsAdminValidatorsFields.SortColumn,
			SortAscending : LeadContactsAdminValidatorsFields.SortAscending,
			SkipRows : LeadContactsAdminValidatorsFields.SkipRows,
			NumRows : LeadContactsAdminValidatorsFields.NumRows	
	},

	GetGrid : {	
	},

	GetGridByLeadID : {
			LeadID : LeadContactsAdminValidatorsFields.LeadID	
	},

	GetGridByLeadID : {
			LeadID : LeadContactsAdminValidatorsFields.LeadID,
			Search : LeadContactsAdminValidatorsFields.Search,
			SortColumn : LeadContactsAdminValidatorsFields.SortColumn,
			SortAscending : LeadContactsAdminValidatorsFields.SortAscending,
			SkipRows : LeadContactsAdminValidatorsFields.SkipRows,
			NumRows : LeadContactsAdminValidatorsFields.NumRows	
	},

	GetGridByLeadIDCount : {
			LeadID : LeadContactsAdminValidatorsFields.LeadID,
			Search : LeadContactsAdminValidatorsFields.Search	
	},

	GetGridByLeadIDHtml : {
			LeadID : LeadContactsAdminValidatorsFields.LeadID	
	},

	GetGridByLeadIDHtml : {
			LeadID : LeadContactsAdminValidatorsFields.LeadID,
			Search : LeadContactsAdminValidatorsFields.Search,
			SortColumn : LeadContactsAdminValidatorsFields.SortColumn,
			SortAscending : LeadContactsAdminValidatorsFields.SortAscending,
			SkipRows : LeadContactsAdminValidatorsFields.SkipRows,
			NumRows : LeadContactsAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : LeadContactsAdminValidatorsFields.Search	
	},

	GetGridHtml : {
			Search : LeadContactsAdminValidatorsFields.Search,
			SortColumn : LeadContactsAdminValidatorsFields.SortColumn,
			SortAscending : LeadContactsAdminValidatorsFields.SortAscending,
			SkipRows : LeadContactsAdminValidatorsFields.SkipRows,
			NumRows : LeadContactsAdminValidatorsFields.NumRows	
	},

	GetGridHtml : {	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    