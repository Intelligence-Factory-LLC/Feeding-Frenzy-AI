

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["LeadRelationshipsAdminValidatorsFields"])) {
	var LeadRelationshipsAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(LeadRelationshipsAdminValidatorsFields.FieldName)) {
	LeadRelationshipsAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(LeadRelationshipsAdminValidatorsFields.LeadID)) {
	LeadRelationshipsAdminValidatorsFields.LeadID = {Validators : [Validators.Text], InvalidMessage: "Invalid LeadID"};
}
if (!ObjectUtil.HasValue(LeadRelationshipsAdminValidatorsFields.LeadRelationshipID)) {
	LeadRelationshipsAdminValidatorsFields.LeadRelationshipID = {Validators : [Validators.Text], InvalidMessage: "Invalid LeadRelationshipID"};
}
if (!ObjectUtil.HasValue(LeadRelationshipsAdminValidatorsFields.LeadRelationshipTypeID)) {
	LeadRelationshipsAdminValidatorsFields.LeadRelationshipTypeID = {Validators : [Validators.Text], InvalidMessage: "Invalid LeadRelationshipTypeID"};
}
if (!ObjectUtil.HasValue(LeadRelationshipsAdminValidatorsFields.Name)) {
	LeadRelationshipsAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(LeadRelationshipsAdminValidatorsFields.NumRows)) {
	LeadRelationshipsAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(LeadRelationshipsAdminValidatorsFields.PreOptions)) {
	LeadRelationshipsAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(LeadRelationshipsAdminValidatorsFields.RelatedLeadID)) {
	LeadRelationshipsAdminValidatorsFields.RelatedLeadID = {Validators : [Validators.Text], InvalidMessage: "Invalid RelatedLeadID"};
}
if (!ObjectUtil.HasValue(LeadRelationshipsAdminValidatorsFields.Search)) {
	LeadRelationshipsAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(LeadRelationshipsAdminValidatorsFields.SkipRows)) {
	LeadRelationshipsAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(LeadRelationshipsAdminValidatorsFields.SortAscending)) {
	LeadRelationshipsAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(LeadRelationshipsAdminValidatorsFields.SortColumn)) {
	LeadRelationshipsAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(LeadRelationshipsAdminValidatorsFields.Value)) {
	LeadRelationshipsAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var LeadRelationshipsAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.LeadRelationshipsAdmin.ashx"

	,
	GetDetails : function(LeadRelationshipID, Callback) {
        return LeadRelationshipsAdmin.GetDetailsObject({ LeadRelationshipID : LeadRelationshipID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetDetails.onValidationError))
					LeadRelationshipsAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetDetails", 
					Params : { LeadRelationshipID : oObject.LeadRelationshipID}, 
					Serialize : LeadRelationshipsAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetDetails.onErrorReceived) ? LeadRelationshipsAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetDetails", { LeadRelationshipID : oObject.LeadRelationshipID}, LeadRelationshipsAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return LeadRelationshipsAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetDropDown.onValidationError))
					LeadRelationshipsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : LeadRelationshipsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetDropDown.onErrorReceived) ? LeadRelationshipsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetDropDown", { }, LeadRelationshipsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return LeadRelationshipsAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetDropDown.onValidationError))
					LeadRelationshipsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : LeadRelationshipsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetDropDown.onErrorReceived) ? LeadRelationshipsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, LeadRelationshipsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return LeadRelationshipsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetDropDown.onValidationError))
					LeadRelationshipsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : LeadRelationshipsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetDropDown.onErrorReceived) ? LeadRelationshipsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, LeadRelationshipsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return LeadRelationshipsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetDropDown.onValidationError))
					LeadRelationshipsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : LeadRelationshipsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetDropDown.onErrorReceived) ? LeadRelationshipsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, LeadRelationshipsAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(LeadRelationshipID, Callback) {
        return LeadRelationshipsAdmin.GetEditObject({ LeadRelationshipID : LeadRelationshipID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetEdit.onValidationError))
					LeadRelationshipsAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetEdit", 
					Params : { LeadRelationshipID : oObject.LeadRelationshipID}, 
					Serialize : LeadRelationshipsAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetEdit.onErrorReceived) ? LeadRelationshipsAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetEdit", { LeadRelationshipID : oObject.LeadRelationshipID}, LeadRelationshipsAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return LeadRelationshipsAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGrid.onValidationError))
					LeadRelationshipsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : LeadRelationshipsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGrid.onErrorReceived) ? LeadRelationshipsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetGrid", { }, LeadRelationshipsAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadRelationshipsAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGrid.onValidationError))
					LeadRelationshipsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadRelationshipsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGrid.onErrorReceived) ? LeadRelationshipsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadRelationshipsAdmin.GetGrid.Serialize || {});
    },
	GetGridByLeadID : function(LeadID, Callback) {
        return LeadRelationshipsAdmin.GetGridByLeadIDObject({ LeadID : LeadID}, Callback);
    },

	GetGridByLeadIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetGridByLeadID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByLeadID.onValidationError))
					LeadRelationshipsAdmin.GetGridByLeadID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetGridByLeadID", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : LeadRelationshipsAdmin.GetGridByLeadID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByLeadID.onErrorReceived) ? LeadRelationshipsAdmin.GetGridByLeadID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetGridByLeadID", { LeadID : oObject.LeadID}, LeadRelationshipsAdmin.GetGridByLeadID.Serialize || {});
    },
	GetGridByLeadID : function(LeadID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadRelationshipsAdmin.GetGridByLeadIDObject({ LeadID : LeadID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByLeadIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetGridByLeadID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByLeadID.onValidationError))
					LeadRelationshipsAdmin.GetGridByLeadID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetGridByLeadID", 
					Params : { LeadID : oObject.LeadID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadRelationshipsAdmin.GetGridByLeadID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByLeadID.onErrorReceived) ? LeadRelationshipsAdmin.GetGridByLeadID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetGridByLeadID", { LeadID : oObject.LeadID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadRelationshipsAdmin.GetGridByLeadID.Serialize || {});
    },
	GetGridByLeadIDCount : function(LeadID, Search, Callback) {
        return LeadRelationshipsAdmin.GetGridByLeadIDCountObject({ LeadID : LeadID,Search : Search}, Callback);
    },

	GetGridByLeadIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetGridByLeadIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByLeadIDCount.onValidationError))
					LeadRelationshipsAdmin.GetGridByLeadIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetGridByLeadIDCount", 
					Params : { LeadID : oObject.LeadID,Search : oObject.Search}, 
					Serialize : LeadRelationshipsAdmin.GetGridByLeadIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByLeadIDCount.onErrorReceived) ? LeadRelationshipsAdmin.GetGridByLeadIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetGridByLeadIDCount", { LeadID : oObject.LeadID,Search : oObject.Search}, LeadRelationshipsAdmin.GetGridByLeadIDCount.Serialize || {});
    },
	GetGridByLeadIDHtml : function(LeadID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadRelationshipsAdmin.GetGridByLeadIDHtmlObject({ LeadID : LeadID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByLeadIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetGridByLeadIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByLeadIDHtml.onValidationError))
					LeadRelationshipsAdmin.GetGridByLeadIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetGridByLeadIDHtml", 
					Params : { LeadID : oObject.LeadID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadRelationshipsAdmin.GetGridByLeadIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByLeadIDHtml.onErrorReceived) ? LeadRelationshipsAdmin.GetGridByLeadIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetGridByLeadIDHtml", { LeadID : oObject.LeadID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadRelationshipsAdmin.GetGridByLeadIDHtml.Serialize || {});
    },
	GetGridByLeadIDHtml : function(LeadID, Callback) {
        return LeadRelationshipsAdmin.GetGridByLeadIDHtmlObject({ LeadID : LeadID}, Callback);
    },

	GetGridByLeadIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetGridByLeadIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByLeadIDHtml.onValidationError))
					LeadRelationshipsAdmin.GetGridByLeadIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetGridByLeadIDHtml", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : LeadRelationshipsAdmin.GetGridByLeadIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByLeadIDHtml.onErrorReceived) ? LeadRelationshipsAdmin.GetGridByLeadIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetGridByLeadIDHtml", { LeadID : oObject.LeadID}, LeadRelationshipsAdmin.GetGridByLeadIDHtml.Serialize || {});
    },
	GetGridByLeadRelationshipTypeID : function(LeadRelationshipTypeID, Callback) {
        return LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDObject({ LeadRelationshipTypeID : LeadRelationshipTypeID}, Callback);
    },

	GetGridByLeadRelationshipTypeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetGridByLeadRelationshipTypeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeID.onValidationError))
					LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetGridByLeadRelationshipTypeID", 
					Params : { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID}, 
					Serialize : LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeID.onErrorReceived) ? LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetGridByLeadRelationshipTypeID", { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID}, LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeID.Serialize || {});
    },
	GetGridByLeadRelationshipTypeID : function(LeadRelationshipTypeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDObject({ LeadRelationshipTypeID : LeadRelationshipTypeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByLeadRelationshipTypeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetGridByLeadRelationshipTypeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeID.onValidationError))
					LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetGridByLeadRelationshipTypeID", 
					Params : { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeID.onErrorReceived) ? LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetGridByLeadRelationshipTypeID", { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeID.Serialize || {});
    },
	GetGridByLeadRelationshipTypeIDCount : function(LeadRelationshipTypeID, Search, Callback) {
        return LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDCountObject({ LeadRelationshipTypeID : LeadRelationshipTypeID,Search : Search}, Callback);
    },

	GetGridByLeadRelationshipTypeIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetGridByLeadRelationshipTypeIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDCount.onValidationError))
					LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetGridByLeadRelationshipTypeIDCount", 
					Params : { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID,Search : oObject.Search}, 
					Serialize : LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDCount.onErrorReceived) ? LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetGridByLeadRelationshipTypeIDCount", { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID,Search : oObject.Search}, LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDCount.Serialize || {});
    },
	GetGridByLeadRelationshipTypeIDHtml : function(LeadRelationshipTypeID, Callback) {
        return LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDHtmlObject({ LeadRelationshipTypeID : LeadRelationshipTypeID}, Callback);
    },

	GetGridByLeadRelationshipTypeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetGridByLeadRelationshipTypeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDHtml.onValidationError))
					LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetGridByLeadRelationshipTypeIDHtml", 
					Params : { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID}, 
					Serialize : LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDHtml.onErrorReceived) ? LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetGridByLeadRelationshipTypeIDHtml", { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID}, LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDHtml.Serialize || {});
    },
	GetGridByLeadRelationshipTypeIDHtml : function(LeadRelationshipTypeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDHtmlObject({ LeadRelationshipTypeID : LeadRelationshipTypeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByLeadRelationshipTypeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetGridByLeadRelationshipTypeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDHtml.onValidationError))
					LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetGridByLeadRelationshipTypeIDHtml", 
					Params : { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDHtml.onErrorReceived) ? LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetGridByLeadRelationshipTypeIDHtml", { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadRelationshipsAdmin.GetGridByLeadRelationshipTypeIDHtml.Serialize || {});
    },
	GetGridByRelatedLeadID : function(RelatedLeadID, Callback) {
        return LeadRelationshipsAdmin.GetGridByRelatedLeadIDObject({ RelatedLeadID : RelatedLeadID}, Callback);
    },

	GetGridByRelatedLeadIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetGridByRelatedLeadID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByRelatedLeadID.onValidationError))
					LeadRelationshipsAdmin.GetGridByRelatedLeadID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetGridByRelatedLeadID", 
					Params : { RelatedLeadID : oObject.RelatedLeadID}, 
					Serialize : LeadRelationshipsAdmin.GetGridByRelatedLeadID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByRelatedLeadID.onErrorReceived) ? LeadRelationshipsAdmin.GetGridByRelatedLeadID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetGridByRelatedLeadID", { RelatedLeadID : oObject.RelatedLeadID}, LeadRelationshipsAdmin.GetGridByRelatedLeadID.Serialize || {});
    },
	GetGridByRelatedLeadID : function(RelatedLeadID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadRelationshipsAdmin.GetGridByRelatedLeadIDObject({ RelatedLeadID : RelatedLeadID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByRelatedLeadIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetGridByRelatedLeadID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByRelatedLeadID.onValidationError))
					LeadRelationshipsAdmin.GetGridByRelatedLeadID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetGridByRelatedLeadID", 
					Params : { RelatedLeadID : oObject.RelatedLeadID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadRelationshipsAdmin.GetGridByRelatedLeadID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByRelatedLeadID.onErrorReceived) ? LeadRelationshipsAdmin.GetGridByRelatedLeadID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetGridByRelatedLeadID", { RelatedLeadID : oObject.RelatedLeadID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadRelationshipsAdmin.GetGridByRelatedLeadID.Serialize || {});
    },
	GetGridByRelatedLeadIDCount : function(RelatedLeadID, Search, Callback) {
        return LeadRelationshipsAdmin.GetGridByRelatedLeadIDCountObject({ RelatedLeadID : RelatedLeadID,Search : Search}, Callback);
    },

	GetGridByRelatedLeadIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetGridByRelatedLeadIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByRelatedLeadIDCount.onValidationError))
					LeadRelationshipsAdmin.GetGridByRelatedLeadIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetGridByRelatedLeadIDCount", 
					Params : { RelatedLeadID : oObject.RelatedLeadID,Search : oObject.Search}, 
					Serialize : LeadRelationshipsAdmin.GetGridByRelatedLeadIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByRelatedLeadIDCount.onErrorReceived) ? LeadRelationshipsAdmin.GetGridByRelatedLeadIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetGridByRelatedLeadIDCount", { RelatedLeadID : oObject.RelatedLeadID,Search : oObject.Search}, LeadRelationshipsAdmin.GetGridByRelatedLeadIDCount.Serialize || {});
    },
	GetGridByRelatedLeadIDHtml : function(RelatedLeadID, Callback) {
        return LeadRelationshipsAdmin.GetGridByRelatedLeadIDHtmlObject({ RelatedLeadID : RelatedLeadID}, Callback);
    },

	GetGridByRelatedLeadIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetGridByRelatedLeadIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByRelatedLeadIDHtml.onValidationError))
					LeadRelationshipsAdmin.GetGridByRelatedLeadIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetGridByRelatedLeadIDHtml", 
					Params : { RelatedLeadID : oObject.RelatedLeadID}, 
					Serialize : LeadRelationshipsAdmin.GetGridByRelatedLeadIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByRelatedLeadIDHtml.onErrorReceived) ? LeadRelationshipsAdmin.GetGridByRelatedLeadIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetGridByRelatedLeadIDHtml", { RelatedLeadID : oObject.RelatedLeadID}, LeadRelationshipsAdmin.GetGridByRelatedLeadIDHtml.Serialize || {});
    },
	GetGridByRelatedLeadIDHtml : function(RelatedLeadID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadRelationshipsAdmin.GetGridByRelatedLeadIDHtmlObject({ RelatedLeadID : RelatedLeadID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByRelatedLeadIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetGridByRelatedLeadIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByRelatedLeadIDHtml.onValidationError))
					LeadRelationshipsAdmin.GetGridByRelatedLeadIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetGridByRelatedLeadIDHtml", 
					Params : { RelatedLeadID : oObject.RelatedLeadID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadRelationshipsAdmin.GetGridByRelatedLeadIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridByRelatedLeadIDHtml.onErrorReceived) ? LeadRelationshipsAdmin.GetGridByRelatedLeadIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetGridByRelatedLeadIDHtml", { RelatedLeadID : oObject.RelatedLeadID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadRelationshipsAdmin.GetGridByRelatedLeadIDHtml.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return LeadRelationshipsAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridCount.onValidationError))
					LeadRelationshipsAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : LeadRelationshipsAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridCount.onErrorReceived) ? LeadRelationshipsAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetGridCount", { Search : oObject.Search}, LeadRelationshipsAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadRelationshipsAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridHtml.onValidationError))
					LeadRelationshipsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadRelationshipsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridHtml.onErrorReceived) ? LeadRelationshipsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadRelationshipsAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return LeadRelationshipsAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridHtml.onValidationError))
					LeadRelationshipsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : LeadRelationshipsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetGridHtml.onErrorReceived) ? LeadRelationshipsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetGridHtml", { }, LeadRelationshipsAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return LeadRelationshipsAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetInsert.onValidationError))
					LeadRelationshipsAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : LeadRelationshipsAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.GetInsert.onErrorReceived) ? LeadRelationshipsAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "GetInsert", { }, LeadRelationshipsAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return LeadRelationshipsAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationshipsAdmin.Initialize.onValidationError))
					LeadRelationshipsAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationshipsAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : LeadRelationshipsAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationshipsAdmin.Initialize.onErrorReceived) ? LeadRelationshipsAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationshipsAdmin.Url, "Initialize", { }, LeadRelationshipsAdmin.Initialize.Serialize || {});
    }
};

var LeadRelationshipsAdminValidators = {
	

	GetDetails : {
			LeadRelationshipID : LeadRelationshipsAdminValidatorsFields.LeadRelationshipID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : LeadRelationshipsAdminValidatorsFields.Name,
			Value : LeadRelationshipsAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : LeadRelationshipsAdminValidatorsFields.Name,
			Value : LeadRelationshipsAdminValidatorsFields.Value,
			FieldName : LeadRelationshipsAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : LeadRelationshipsAdminValidatorsFields.Name,
			Value : LeadRelationshipsAdminValidatorsFields.Value,
			FieldName : LeadRelationshipsAdminValidatorsFields.FieldName,
			PreOptions : LeadRelationshipsAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			LeadRelationshipID : LeadRelationshipsAdminValidatorsFields.LeadRelationshipID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : LeadRelationshipsAdminValidatorsFields.Search,
			SortColumn : LeadRelationshipsAdminValidatorsFields.SortColumn,
			SortAscending : LeadRelationshipsAdminValidatorsFields.SortAscending,
			SkipRows : LeadRelationshipsAdminValidatorsFields.SkipRows,
			NumRows : LeadRelationshipsAdminValidatorsFields.NumRows	
	},

	GetGridByLeadID : {
			LeadID : LeadRelationshipsAdminValidatorsFields.LeadID	
	},

	GetGridByLeadID : {
			LeadID : LeadRelationshipsAdminValidatorsFields.LeadID,
			Search : LeadRelationshipsAdminValidatorsFields.Search,
			SortColumn : LeadRelationshipsAdminValidatorsFields.SortColumn,
			SortAscending : LeadRelationshipsAdminValidatorsFields.SortAscending,
			SkipRows : LeadRelationshipsAdminValidatorsFields.SkipRows,
			NumRows : LeadRelationshipsAdminValidatorsFields.NumRows	
	},

	GetGridByLeadIDCount : {
			LeadID : LeadRelationshipsAdminValidatorsFields.LeadID,
			Search : LeadRelationshipsAdminValidatorsFields.Search	
	},

	GetGridByLeadIDHtml : {
			LeadID : LeadRelationshipsAdminValidatorsFields.LeadID,
			Search : LeadRelationshipsAdminValidatorsFields.Search,
			SortColumn : LeadRelationshipsAdminValidatorsFields.SortColumn,
			SortAscending : LeadRelationshipsAdminValidatorsFields.SortAscending,
			SkipRows : LeadRelationshipsAdminValidatorsFields.SkipRows,
			NumRows : LeadRelationshipsAdminValidatorsFields.NumRows	
	},

	GetGridByLeadIDHtml : {
			LeadID : LeadRelationshipsAdminValidatorsFields.LeadID	
	},

	GetGridByLeadRelationshipTypeID : {
			LeadRelationshipTypeID : LeadRelationshipsAdminValidatorsFields.LeadRelationshipTypeID	
	},

	GetGridByLeadRelationshipTypeID : {
			LeadRelationshipTypeID : LeadRelationshipsAdminValidatorsFields.LeadRelationshipTypeID,
			Search : LeadRelationshipsAdminValidatorsFields.Search,
			SortColumn : LeadRelationshipsAdminValidatorsFields.SortColumn,
			SortAscending : LeadRelationshipsAdminValidatorsFields.SortAscending,
			SkipRows : LeadRelationshipsAdminValidatorsFields.SkipRows,
			NumRows : LeadRelationshipsAdminValidatorsFields.NumRows	
	},

	GetGridByLeadRelationshipTypeIDCount : {
			LeadRelationshipTypeID : LeadRelationshipsAdminValidatorsFields.LeadRelationshipTypeID,
			Search : LeadRelationshipsAdminValidatorsFields.Search	
	},

	GetGridByLeadRelationshipTypeIDHtml : {
			LeadRelationshipTypeID : LeadRelationshipsAdminValidatorsFields.LeadRelationshipTypeID	
	},

	GetGridByLeadRelationshipTypeIDHtml : {
			LeadRelationshipTypeID : LeadRelationshipsAdminValidatorsFields.LeadRelationshipTypeID,
			Search : LeadRelationshipsAdminValidatorsFields.Search,
			SortColumn : LeadRelationshipsAdminValidatorsFields.SortColumn,
			SortAscending : LeadRelationshipsAdminValidatorsFields.SortAscending,
			SkipRows : LeadRelationshipsAdminValidatorsFields.SkipRows,
			NumRows : LeadRelationshipsAdminValidatorsFields.NumRows	
	},

	GetGridByRelatedLeadID : {
			RelatedLeadID : LeadRelationshipsAdminValidatorsFields.RelatedLeadID	
	},

	GetGridByRelatedLeadID : {
			RelatedLeadID : LeadRelationshipsAdminValidatorsFields.RelatedLeadID,
			Search : LeadRelationshipsAdminValidatorsFields.Search,
			SortColumn : LeadRelationshipsAdminValidatorsFields.SortColumn,
			SortAscending : LeadRelationshipsAdminValidatorsFields.SortAscending,
			SkipRows : LeadRelationshipsAdminValidatorsFields.SkipRows,
			NumRows : LeadRelationshipsAdminValidatorsFields.NumRows	
	},

	GetGridByRelatedLeadIDCount : {
			RelatedLeadID : LeadRelationshipsAdminValidatorsFields.RelatedLeadID,
			Search : LeadRelationshipsAdminValidatorsFields.Search	
	},

	GetGridByRelatedLeadIDHtml : {
			RelatedLeadID : LeadRelationshipsAdminValidatorsFields.RelatedLeadID	
	},

	GetGridByRelatedLeadIDHtml : {
			RelatedLeadID : LeadRelationshipsAdminValidatorsFields.RelatedLeadID,
			Search : LeadRelationshipsAdminValidatorsFields.Search,
			SortColumn : LeadRelationshipsAdminValidatorsFields.SortColumn,
			SortAscending : LeadRelationshipsAdminValidatorsFields.SortAscending,
			SkipRows : LeadRelationshipsAdminValidatorsFields.SkipRows,
			NumRows : LeadRelationshipsAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : LeadRelationshipsAdminValidatorsFields.Search	
	},

	GetGridHtml : {
			Search : LeadRelationshipsAdminValidatorsFields.Search,
			SortColumn : LeadRelationshipsAdminValidatorsFields.SortColumn,
			SortAscending : LeadRelationshipsAdminValidatorsFields.SortAscending,
			SkipRows : LeadRelationshipsAdminValidatorsFields.SkipRows,
			NumRows : LeadRelationshipsAdminValidatorsFields.NumRows	
	},

	GetGridHtml : {	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    