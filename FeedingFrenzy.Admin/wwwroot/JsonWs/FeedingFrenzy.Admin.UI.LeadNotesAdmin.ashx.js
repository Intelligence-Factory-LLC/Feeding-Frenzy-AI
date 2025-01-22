

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["LeadNotesAdminValidatorsFields"])) {
	var LeadNotesAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(LeadNotesAdminValidatorsFields.FieldName)) {
	LeadNotesAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(LeadNotesAdminValidatorsFields.LeadID)) {
	LeadNotesAdminValidatorsFields.LeadID = {Validators : [Validators.Text], InvalidMessage: "Invalid LeadID"};
}
if (!ObjectUtil.HasValue(LeadNotesAdminValidatorsFields.LeadNoteID)) {
	LeadNotesAdminValidatorsFields.LeadNoteID = {Validators : [Validators.Text], InvalidMessage: "Invalid LeadNoteID"};
}
if (!ObjectUtil.HasValue(LeadNotesAdminValidatorsFields.LeadNoteTypeID)) {
	LeadNotesAdminValidatorsFields.LeadNoteTypeID = {Validators : [Validators.Text], InvalidMessage: "Invalid LeadNoteTypeID"};
}
if (!ObjectUtil.HasValue(LeadNotesAdminValidatorsFields.Name)) {
	LeadNotesAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(LeadNotesAdminValidatorsFields.NumRows)) {
	LeadNotesAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(LeadNotesAdminValidatorsFields.PreOptions)) {
	LeadNotesAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(LeadNotesAdminValidatorsFields.SalesRepresentativeID)) {
	LeadNotesAdminValidatorsFields.SalesRepresentativeID = {Validators : [Validators.Text], InvalidMessage: "Invalid SalesRepresentativeID"};
}
if (!ObjectUtil.HasValue(LeadNotesAdminValidatorsFields.Search)) {
	LeadNotesAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(LeadNotesAdminValidatorsFields.SkipRows)) {
	LeadNotesAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(LeadNotesAdminValidatorsFields.SortAscending)) {
	LeadNotesAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(LeadNotesAdminValidatorsFields.SortColumn)) {
	LeadNotesAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(LeadNotesAdminValidatorsFields.Value)) {
	LeadNotesAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var LeadNotesAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.LeadNotesAdmin.ashx"

	,
	GetDetails : function(LeadNoteID, Callback) {
        return LeadNotesAdmin.GetDetailsObject({ LeadNoteID : LeadNoteID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetDetails.onValidationError))
					LeadNotesAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetDetails", 
					Params : { LeadNoteID : oObject.LeadNoteID}, 
					Serialize : LeadNotesAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetDetails.onErrorReceived) ? LeadNotesAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetDetails", { LeadNoteID : oObject.LeadNoteID}, LeadNotesAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return LeadNotesAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetDropDown.onValidationError))
					LeadNotesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : LeadNotesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetDropDown.onErrorReceived) ? LeadNotesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetDropDown", { }, LeadNotesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return LeadNotesAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetDropDown.onValidationError))
					LeadNotesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : LeadNotesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetDropDown.onErrorReceived) ? LeadNotesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, LeadNotesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return LeadNotesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetDropDown.onValidationError))
					LeadNotesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : LeadNotesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetDropDown.onErrorReceived) ? LeadNotesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, LeadNotesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return LeadNotesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetDropDown.onValidationError))
					LeadNotesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : LeadNotesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetDropDown.onErrorReceived) ? LeadNotesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, LeadNotesAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(LeadNoteID, Callback) {
        return LeadNotesAdmin.GetEditObject({ LeadNoteID : LeadNoteID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetEdit.onValidationError))
					LeadNotesAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetEdit", 
					Params : { LeadNoteID : oObject.LeadNoteID}, 
					Serialize : LeadNotesAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetEdit.onErrorReceived) ? LeadNotesAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetEdit", { LeadNoteID : oObject.LeadNoteID}, LeadNotesAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return LeadNotesAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetGrid.onValidationError))
					LeadNotesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : LeadNotesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetGrid.onErrorReceived) ? LeadNotesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetGrid", { }, LeadNotesAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadNotesAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetGrid.onValidationError))
					LeadNotesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadNotesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetGrid.onErrorReceived) ? LeadNotesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadNotesAdmin.GetGrid.Serialize || {});
    },
	GetGridByLeadID : function(LeadID, Callback) {
        return LeadNotesAdmin.GetGridByLeadIDObject({ LeadID : LeadID}, Callback);
    },

	GetGridByLeadIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetGridByLeadID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetGridByLeadID.onValidationError))
					LeadNotesAdmin.GetGridByLeadID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetGridByLeadID", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : LeadNotesAdmin.GetGridByLeadID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetGridByLeadID.onErrorReceived) ? LeadNotesAdmin.GetGridByLeadID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetGridByLeadID", { LeadID : oObject.LeadID}, LeadNotesAdmin.GetGridByLeadID.Serialize || {});
    },
	GetGridByLeadID : function(LeadID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadNotesAdmin.GetGridByLeadIDObject({ LeadID : LeadID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByLeadIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetGridByLeadID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetGridByLeadID.onValidationError))
					LeadNotesAdmin.GetGridByLeadID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetGridByLeadID", 
					Params : { LeadID : oObject.LeadID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadNotesAdmin.GetGridByLeadID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetGridByLeadID.onErrorReceived) ? LeadNotesAdmin.GetGridByLeadID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetGridByLeadID", { LeadID : oObject.LeadID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadNotesAdmin.GetGridByLeadID.Serialize || {});
    },
	GetGridByLeadIDCount : function(LeadID, Search, Callback) {
        return LeadNotesAdmin.GetGridByLeadIDCountObject({ LeadID : LeadID,Search : Search}, Callback);
    },

	GetGridByLeadIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetGridByLeadIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetGridByLeadIDCount.onValidationError))
					LeadNotesAdmin.GetGridByLeadIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetGridByLeadIDCount", 
					Params : { LeadID : oObject.LeadID,Search : oObject.Search}, 
					Serialize : LeadNotesAdmin.GetGridByLeadIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetGridByLeadIDCount.onErrorReceived) ? LeadNotesAdmin.GetGridByLeadIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetGridByLeadIDCount", { LeadID : oObject.LeadID,Search : oObject.Search}, LeadNotesAdmin.GetGridByLeadIDCount.Serialize || {});
    },
	GetGridByLeadIDHtml : function(LeadID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadNotesAdmin.GetGridByLeadIDHtmlObject({ LeadID : LeadID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByLeadIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetGridByLeadIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetGridByLeadIDHtml.onValidationError))
					LeadNotesAdmin.GetGridByLeadIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetGridByLeadIDHtml", 
					Params : { LeadID : oObject.LeadID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadNotesAdmin.GetGridByLeadIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetGridByLeadIDHtml.onErrorReceived) ? LeadNotesAdmin.GetGridByLeadIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetGridByLeadIDHtml", { LeadID : oObject.LeadID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadNotesAdmin.GetGridByLeadIDHtml.Serialize || {});
    },
	GetGridByLeadIDHtml : function(LeadID, Callback) {
        return LeadNotesAdmin.GetGridByLeadIDHtmlObject({ LeadID : LeadID}, Callback);
    },

	GetGridByLeadIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetGridByLeadIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetGridByLeadIDHtml.onValidationError))
					LeadNotesAdmin.GetGridByLeadIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetGridByLeadIDHtml", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : LeadNotesAdmin.GetGridByLeadIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetGridByLeadIDHtml.onErrorReceived) ? LeadNotesAdmin.GetGridByLeadIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetGridByLeadIDHtml", { LeadID : oObject.LeadID}, LeadNotesAdmin.GetGridByLeadIDHtml.Serialize || {});
    },
	GetGridByLeadNoteTypeID : function(LeadNoteTypeID, Callback) {
        return LeadNotesAdmin.GetGridByLeadNoteTypeIDObject({ LeadNoteTypeID : LeadNoteTypeID}, Callback);
    },

	GetGridByLeadNoteTypeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetGridByLeadNoteTypeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetGridByLeadNoteTypeID.onValidationError))
					LeadNotesAdmin.GetGridByLeadNoteTypeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetGridByLeadNoteTypeID", 
					Params : { LeadNoteTypeID : oObject.LeadNoteTypeID}, 
					Serialize : LeadNotesAdmin.GetGridByLeadNoteTypeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetGridByLeadNoteTypeID.onErrorReceived) ? LeadNotesAdmin.GetGridByLeadNoteTypeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetGridByLeadNoteTypeID", { LeadNoteTypeID : oObject.LeadNoteTypeID}, LeadNotesAdmin.GetGridByLeadNoteTypeID.Serialize || {});
    },
	GetGridByLeadNoteTypeID : function(LeadNoteTypeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadNotesAdmin.GetGridByLeadNoteTypeIDObject({ LeadNoteTypeID : LeadNoteTypeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByLeadNoteTypeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetGridByLeadNoteTypeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetGridByLeadNoteTypeID.onValidationError))
					LeadNotesAdmin.GetGridByLeadNoteTypeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetGridByLeadNoteTypeID", 
					Params : { LeadNoteTypeID : oObject.LeadNoteTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadNotesAdmin.GetGridByLeadNoteTypeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetGridByLeadNoteTypeID.onErrorReceived) ? LeadNotesAdmin.GetGridByLeadNoteTypeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetGridByLeadNoteTypeID", { LeadNoteTypeID : oObject.LeadNoteTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadNotesAdmin.GetGridByLeadNoteTypeID.Serialize || {});
    },
	GetGridByLeadNoteTypeIDCount : function(LeadNoteTypeID, Search, Callback) {
        return LeadNotesAdmin.GetGridByLeadNoteTypeIDCountObject({ LeadNoteTypeID : LeadNoteTypeID,Search : Search}, Callback);
    },

	GetGridByLeadNoteTypeIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetGridByLeadNoteTypeIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetGridByLeadNoteTypeIDCount.onValidationError))
					LeadNotesAdmin.GetGridByLeadNoteTypeIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetGridByLeadNoteTypeIDCount", 
					Params : { LeadNoteTypeID : oObject.LeadNoteTypeID,Search : oObject.Search}, 
					Serialize : LeadNotesAdmin.GetGridByLeadNoteTypeIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetGridByLeadNoteTypeIDCount.onErrorReceived) ? LeadNotesAdmin.GetGridByLeadNoteTypeIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetGridByLeadNoteTypeIDCount", { LeadNoteTypeID : oObject.LeadNoteTypeID,Search : oObject.Search}, LeadNotesAdmin.GetGridByLeadNoteTypeIDCount.Serialize || {});
    },
	GetGridByLeadNoteTypeIDHtml : function(LeadNoteTypeID, Callback) {
        return LeadNotesAdmin.GetGridByLeadNoteTypeIDHtmlObject({ LeadNoteTypeID : LeadNoteTypeID}, Callback);
    },

	GetGridByLeadNoteTypeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetGridByLeadNoteTypeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetGridByLeadNoteTypeIDHtml.onValidationError))
					LeadNotesAdmin.GetGridByLeadNoteTypeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetGridByLeadNoteTypeIDHtml", 
					Params : { LeadNoteTypeID : oObject.LeadNoteTypeID}, 
					Serialize : LeadNotesAdmin.GetGridByLeadNoteTypeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetGridByLeadNoteTypeIDHtml.onErrorReceived) ? LeadNotesAdmin.GetGridByLeadNoteTypeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetGridByLeadNoteTypeIDHtml", { LeadNoteTypeID : oObject.LeadNoteTypeID}, LeadNotesAdmin.GetGridByLeadNoteTypeIDHtml.Serialize || {});
    },
	GetGridByLeadNoteTypeIDHtml : function(LeadNoteTypeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadNotesAdmin.GetGridByLeadNoteTypeIDHtmlObject({ LeadNoteTypeID : LeadNoteTypeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByLeadNoteTypeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetGridByLeadNoteTypeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetGridByLeadNoteTypeIDHtml.onValidationError))
					LeadNotesAdmin.GetGridByLeadNoteTypeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetGridByLeadNoteTypeIDHtml", 
					Params : { LeadNoteTypeID : oObject.LeadNoteTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadNotesAdmin.GetGridByLeadNoteTypeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetGridByLeadNoteTypeIDHtml.onErrorReceived) ? LeadNotesAdmin.GetGridByLeadNoteTypeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetGridByLeadNoteTypeIDHtml", { LeadNoteTypeID : oObject.LeadNoteTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadNotesAdmin.GetGridByLeadNoteTypeIDHtml.Serialize || {});
    },
	GetGridBySalesRepresentativeID : function(SalesRepresentativeID, Callback) {
        return LeadNotesAdmin.GetGridBySalesRepresentativeIDObject({ SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetGridBySalesRepresentativeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetGridBySalesRepresentativeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetGridBySalesRepresentativeID.onValidationError))
					LeadNotesAdmin.GetGridBySalesRepresentativeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetGridBySalesRepresentativeID", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : LeadNotesAdmin.GetGridBySalesRepresentativeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetGridBySalesRepresentativeID.onErrorReceived) ? LeadNotesAdmin.GetGridBySalesRepresentativeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetGridBySalesRepresentativeID", { SalesRepresentativeID : oObject.SalesRepresentativeID}, LeadNotesAdmin.GetGridBySalesRepresentativeID.Serialize || {});
    },
	GetGridBySalesRepresentativeID : function(SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadNotesAdmin.GetGridBySalesRepresentativeIDObject({ SalesRepresentativeID : SalesRepresentativeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridBySalesRepresentativeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetGridBySalesRepresentativeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetGridBySalesRepresentativeID.onValidationError))
					LeadNotesAdmin.GetGridBySalesRepresentativeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetGridBySalesRepresentativeID", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadNotesAdmin.GetGridBySalesRepresentativeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetGridBySalesRepresentativeID.onErrorReceived) ? LeadNotesAdmin.GetGridBySalesRepresentativeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetGridBySalesRepresentativeID", { SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadNotesAdmin.GetGridBySalesRepresentativeID.Serialize || {});
    },
	GetGridBySalesRepresentativeIDCount : function(SalesRepresentativeID, Search, Callback) {
        return LeadNotesAdmin.GetGridBySalesRepresentativeIDCountObject({ SalesRepresentativeID : SalesRepresentativeID,Search : Search}, Callback);
    },

	GetGridBySalesRepresentativeIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetGridBySalesRepresentativeIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetGridBySalesRepresentativeIDCount.onValidationError))
					LeadNotesAdmin.GetGridBySalesRepresentativeIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetGridBySalesRepresentativeIDCount", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search}, 
					Serialize : LeadNotesAdmin.GetGridBySalesRepresentativeIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetGridBySalesRepresentativeIDCount.onErrorReceived) ? LeadNotesAdmin.GetGridBySalesRepresentativeIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetGridBySalesRepresentativeIDCount", { SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search}, LeadNotesAdmin.GetGridBySalesRepresentativeIDCount.Serialize || {});
    },
	GetGridBySalesRepresentativeIDHtml : function(SalesRepresentativeID, Callback) {
        return LeadNotesAdmin.GetGridBySalesRepresentativeIDHtmlObject({ SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetGridBySalesRepresentativeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetGridBySalesRepresentativeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetGridBySalesRepresentativeIDHtml.onValidationError))
					LeadNotesAdmin.GetGridBySalesRepresentativeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetGridBySalesRepresentativeIDHtml", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : LeadNotesAdmin.GetGridBySalesRepresentativeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetGridBySalesRepresentativeIDHtml.onErrorReceived) ? LeadNotesAdmin.GetGridBySalesRepresentativeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetGridBySalesRepresentativeIDHtml", { SalesRepresentativeID : oObject.SalesRepresentativeID}, LeadNotesAdmin.GetGridBySalesRepresentativeIDHtml.Serialize || {});
    },
	GetGridBySalesRepresentativeIDHtml : function(SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadNotesAdmin.GetGridBySalesRepresentativeIDHtmlObject({ SalesRepresentativeID : SalesRepresentativeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridBySalesRepresentativeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetGridBySalesRepresentativeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetGridBySalesRepresentativeIDHtml.onValidationError))
					LeadNotesAdmin.GetGridBySalesRepresentativeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetGridBySalesRepresentativeIDHtml", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadNotesAdmin.GetGridBySalesRepresentativeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetGridBySalesRepresentativeIDHtml.onErrorReceived) ? LeadNotesAdmin.GetGridBySalesRepresentativeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetGridBySalesRepresentativeIDHtml", { SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadNotesAdmin.GetGridBySalesRepresentativeIDHtml.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return LeadNotesAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetGridCount.onValidationError))
					LeadNotesAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : LeadNotesAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetGridCount.onErrorReceived) ? LeadNotesAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetGridCount", { Search : oObject.Search}, LeadNotesAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadNotesAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetGridHtml.onValidationError))
					LeadNotesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadNotesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetGridHtml.onErrorReceived) ? LeadNotesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadNotesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return LeadNotesAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetGridHtml.onValidationError))
					LeadNotesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : LeadNotesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetGridHtml.onErrorReceived) ? LeadNotesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetGridHtml", { }, LeadNotesAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return LeadNotesAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.GetInsert.onValidationError))
					LeadNotesAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : LeadNotesAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.GetInsert.onErrorReceived) ? LeadNotesAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "GetInsert", { }, LeadNotesAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return LeadNotesAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadNotesAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadNotesAdmin.Initialize.onValidationError))
					LeadNotesAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadNotesAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : LeadNotesAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadNotesAdmin.Initialize.onErrorReceived) ? LeadNotesAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadNotesAdmin.Url, "Initialize", { }, LeadNotesAdmin.Initialize.Serialize || {});
    }
};

var LeadNotesAdminValidators = {
	

	GetDetails : {
			LeadNoteID : LeadNotesAdminValidatorsFields.LeadNoteID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : LeadNotesAdminValidatorsFields.Name,
			Value : LeadNotesAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : LeadNotesAdminValidatorsFields.Name,
			Value : LeadNotesAdminValidatorsFields.Value,
			FieldName : LeadNotesAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : LeadNotesAdminValidatorsFields.Name,
			Value : LeadNotesAdminValidatorsFields.Value,
			FieldName : LeadNotesAdminValidatorsFields.FieldName,
			PreOptions : LeadNotesAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			LeadNoteID : LeadNotesAdminValidatorsFields.LeadNoteID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : LeadNotesAdminValidatorsFields.Search,
			SortColumn : LeadNotesAdminValidatorsFields.SortColumn,
			SortAscending : LeadNotesAdminValidatorsFields.SortAscending,
			SkipRows : LeadNotesAdminValidatorsFields.SkipRows,
			NumRows : LeadNotesAdminValidatorsFields.NumRows	
	},

	GetGridByLeadID : {
			LeadID : LeadNotesAdminValidatorsFields.LeadID	
	},

	GetGridByLeadID : {
			LeadID : LeadNotesAdminValidatorsFields.LeadID,
			Search : LeadNotesAdminValidatorsFields.Search,
			SortColumn : LeadNotesAdminValidatorsFields.SortColumn,
			SortAscending : LeadNotesAdminValidatorsFields.SortAscending,
			SkipRows : LeadNotesAdminValidatorsFields.SkipRows,
			NumRows : LeadNotesAdminValidatorsFields.NumRows	
	},

	GetGridByLeadIDCount : {
			LeadID : LeadNotesAdminValidatorsFields.LeadID,
			Search : LeadNotesAdminValidatorsFields.Search	
	},

	GetGridByLeadIDHtml : {
			LeadID : LeadNotesAdminValidatorsFields.LeadID,
			Search : LeadNotesAdminValidatorsFields.Search,
			SortColumn : LeadNotesAdminValidatorsFields.SortColumn,
			SortAscending : LeadNotesAdminValidatorsFields.SortAscending,
			SkipRows : LeadNotesAdminValidatorsFields.SkipRows,
			NumRows : LeadNotesAdminValidatorsFields.NumRows	
	},

	GetGridByLeadIDHtml : {
			LeadID : LeadNotesAdminValidatorsFields.LeadID	
	},

	GetGridByLeadNoteTypeID : {
			LeadNoteTypeID : LeadNotesAdminValidatorsFields.LeadNoteTypeID	
	},

	GetGridByLeadNoteTypeID : {
			LeadNoteTypeID : LeadNotesAdminValidatorsFields.LeadNoteTypeID,
			Search : LeadNotesAdminValidatorsFields.Search,
			SortColumn : LeadNotesAdminValidatorsFields.SortColumn,
			SortAscending : LeadNotesAdminValidatorsFields.SortAscending,
			SkipRows : LeadNotesAdminValidatorsFields.SkipRows,
			NumRows : LeadNotesAdminValidatorsFields.NumRows	
	},

	GetGridByLeadNoteTypeIDCount : {
			LeadNoteTypeID : LeadNotesAdminValidatorsFields.LeadNoteTypeID,
			Search : LeadNotesAdminValidatorsFields.Search	
	},

	GetGridByLeadNoteTypeIDHtml : {
			LeadNoteTypeID : LeadNotesAdminValidatorsFields.LeadNoteTypeID	
	},

	GetGridByLeadNoteTypeIDHtml : {
			LeadNoteTypeID : LeadNotesAdminValidatorsFields.LeadNoteTypeID,
			Search : LeadNotesAdminValidatorsFields.Search,
			SortColumn : LeadNotesAdminValidatorsFields.SortColumn,
			SortAscending : LeadNotesAdminValidatorsFields.SortAscending,
			SkipRows : LeadNotesAdminValidatorsFields.SkipRows,
			NumRows : LeadNotesAdminValidatorsFields.NumRows	
	},

	GetGridBySalesRepresentativeID : {
			SalesRepresentativeID : LeadNotesAdminValidatorsFields.SalesRepresentativeID	
	},

	GetGridBySalesRepresentativeID : {
			SalesRepresentativeID : LeadNotesAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadNotesAdminValidatorsFields.Search,
			SortColumn : LeadNotesAdminValidatorsFields.SortColumn,
			SortAscending : LeadNotesAdminValidatorsFields.SortAscending,
			SkipRows : LeadNotesAdminValidatorsFields.SkipRows,
			NumRows : LeadNotesAdminValidatorsFields.NumRows	
	},

	GetGridBySalesRepresentativeIDCount : {
			SalesRepresentativeID : LeadNotesAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadNotesAdminValidatorsFields.Search	
	},

	GetGridBySalesRepresentativeIDHtml : {
			SalesRepresentativeID : LeadNotesAdminValidatorsFields.SalesRepresentativeID	
	},

	GetGridBySalesRepresentativeIDHtml : {
			SalesRepresentativeID : LeadNotesAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadNotesAdminValidatorsFields.Search,
			SortColumn : LeadNotesAdminValidatorsFields.SortColumn,
			SortAscending : LeadNotesAdminValidatorsFields.SortAscending,
			SkipRows : LeadNotesAdminValidatorsFields.SkipRows,
			NumRows : LeadNotesAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : LeadNotesAdminValidatorsFields.Search	
	},

	GetGridHtml : {
			Search : LeadNotesAdminValidatorsFields.Search,
			SortColumn : LeadNotesAdminValidatorsFields.SortColumn,
			SortAscending : LeadNotesAdminValidatorsFields.SortAscending,
			SkipRows : LeadNotesAdminValidatorsFields.SkipRows,
			NumRows : LeadNotesAdminValidatorsFields.NumRows	
	},

	GetGridHtml : {	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    