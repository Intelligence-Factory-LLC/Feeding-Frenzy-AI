

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["LeadTagsAdminValidatorsFields"])) {
	var LeadTagsAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(LeadTagsAdminValidatorsFields.FieldName)) {
	LeadTagsAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(LeadTagsAdminValidatorsFields.LeadID)) {
	LeadTagsAdminValidatorsFields.LeadID = {Validators : [Validators.Text], InvalidMessage: "Invalid LeadID"};
}
if (!ObjectUtil.HasValue(LeadTagsAdminValidatorsFields.LeadTagID)) {
	LeadTagsAdminValidatorsFields.LeadTagID = {Validators : [Validators.Text], InvalidMessage: "Invalid LeadTagID"};
}
if (!ObjectUtil.HasValue(LeadTagsAdminValidatorsFields.Name)) {
	LeadTagsAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(LeadTagsAdminValidatorsFields.NumRows)) {
	LeadTagsAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(LeadTagsAdminValidatorsFields.PreOptions)) {
	LeadTagsAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(LeadTagsAdminValidatorsFields.Search)) {
	LeadTagsAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(LeadTagsAdminValidatorsFields.SkipRows)) {
	LeadTagsAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(LeadTagsAdminValidatorsFields.SortAscending)) {
	LeadTagsAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(LeadTagsAdminValidatorsFields.SortColumn)) {
	LeadTagsAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(LeadTagsAdminValidatorsFields.TagID)) {
	LeadTagsAdminValidatorsFields.TagID = {Validators : [Validators.Text], InvalidMessage: "Invalid TagID"};
}
if (!ObjectUtil.HasValue(LeadTagsAdminValidatorsFields.Value)) {
	LeadTagsAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var LeadTagsAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.LeadTagsAdmin.ashx"

	,
	GetDetails : function(LeadTagID, Callback) {
        return LeadTagsAdmin.GetDetailsObject({ LeadTagID : LeadTagID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetDetails.onValidationError))
					LeadTagsAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetDetails", 
					Params : { LeadTagID : oObject.LeadTagID}, 
					Serialize : LeadTagsAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetDetails.onErrorReceived) ? LeadTagsAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetDetails", { LeadTagID : oObject.LeadTagID}, LeadTagsAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return LeadTagsAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetDropDown.onValidationError))
					LeadTagsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : LeadTagsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetDropDown.onErrorReceived) ? LeadTagsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetDropDown", { }, LeadTagsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return LeadTagsAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetDropDown.onValidationError))
					LeadTagsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : LeadTagsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetDropDown.onErrorReceived) ? LeadTagsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, LeadTagsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return LeadTagsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetDropDown.onValidationError))
					LeadTagsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : LeadTagsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetDropDown.onErrorReceived) ? LeadTagsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, LeadTagsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return LeadTagsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetDropDown.onValidationError))
					LeadTagsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : LeadTagsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetDropDown.onErrorReceived) ? LeadTagsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, LeadTagsAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(LeadTagID, Callback) {
        return LeadTagsAdmin.GetEditObject({ LeadTagID : LeadTagID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetEdit.onValidationError))
					LeadTagsAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetEdit", 
					Params : { LeadTagID : oObject.LeadTagID}, 
					Serialize : LeadTagsAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetEdit.onErrorReceived) ? LeadTagsAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetEdit", { LeadTagID : oObject.LeadTagID}, LeadTagsAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return LeadTagsAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetGrid.onValidationError))
					LeadTagsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : LeadTagsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetGrid.onErrorReceived) ? LeadTagsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetGrid", { }, LeadTagsAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadTagsAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetGrid.onValidationError))
					LeadTagsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadTagsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetGrid.onErrorReceived) ? LeadTagsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadTagsAdmin.GetGrid.Serialize || {});
    },
	GetGridByLeadID : function(LeadID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadTagsAdmin.GetGridByLeadIDObject({ LeadID : LeadID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByLeadIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetGridByLeadID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetGridByLeadID.onValidationError))
					LeadTagsAdmin.GetGridByLeadID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetGridByLeadID", 
					Params : { LeadID : oObject.LeadID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadTagsAdmin.GetGridByLeadID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetGridByLeadID.onErrorReceived) ? LeadTagsAdmin.GetGridByLeadID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetGridByLeadID", { LeadID : oObject.LeadID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadTagsAdmin.GetGridByLeadID.Serialize || {});
    },
	GetGridByLeadID : function(LeadID, Callback) {
        return LeadTagsAdmin.GetGridByLeadIDObject({ LeadID : LeadID}, Callback);
    },

	GetGridByLeadIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetGridByLeadID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetGridByLeadID.onValidationError))
					LeadTagsAdmin.GetGridByLeadID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetGridByLeadID", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : LeadTagsAdmin.GetGridByLeadID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetGridByLeadID.onErrorReceived) ? LeadTagsAdmin.GetGridByLeadID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetGridByLeadID", { LeadID : oObject.LeadID}, LeadTagsAdmin.GetGridByLeadID.Serialize || {});
    },
	GetGridByLeadIDCount : function(LeadID, Search, Callback) {
        return LeadTagsAdmin.GetGridByLeadIDCountObject({ LeadID : LeadID,Search : Search}, Callback);
    },

	GetGridByLeadIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetGridByLeadIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetGridByLeadIDCount.onValidationError))
					LeadTagsAdmin.GetGridByLeadIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetGridByLeadIDCount", 
					Params : { LeadID : oObject.LeadID,Search : oObject.Search}, 
					Serialize : LeadTagsAdmin.GetGridByLeadIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetGridByLeadIDCount.onErrorReceived) ? LeadTagsAdmin.GetGridByLeadIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetGridByLeadIDCount", { LeadID : oObject.LeadID,Search : oObject.Search}, LeadTagsAdmin.GetGridByLeadIDCount.Serialize || {});
    },
	GetGridByLeadIDHtml : function(LeadID, Callback) {
        return LeadTagsAdmin.GetGridByLeadIDHtmlObject({ LeadID : LeadID}, Callback);
    },

	GetGridByLeadIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetGridByLeadIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetGridByLeadIDHtml.onValidationError))
					LeadTagsAdmin.GetGridByLeadIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetGridByLeadIDHtml", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : LeadTagsAdmin.GetGridByLeadIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetGridByLeadIDHtml.onErrorReceived) ? LeadTagsAdmin.GetGridByLeadIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetGridByLeadIDHtml", { LeadID : oObject.LeadID}, LeadTagsAdmin.GetGridByLeadIDHtml.Serialize || {});
    },
	GetGridByLeadIDHtml : function(LeadID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadTagsAdmin.GetGridByLeadIDHtmlObject({ LeadID : LeadID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByLeadIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetGridByLeadIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetGridByLeadIDHtml.onValidationError))
					LeadTagsAdmin.GetGridByLeadIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetGridByLeadIDHtml", 
					Params : { LeadID : oObject.LeadID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadTagsAdmin.GetGridByLeadIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetGridByLeadIDHtml.onErrorReceived) ? LeadTagsAdmin.GetGridByLeadIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetGridByLeadIDHtml", { LeadID : oObject.LeadID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadTagsAdmin.GetGridByLeadIDHtml.Serialize || {});
    },
	GetGridByTagID : function(TagID, Callback) {
        return LeadTagsAdmin.GetGridByTagIDObject({ TagID : TagID}, Callback);
    },

	GetGridByTagIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetGridByTagID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetGridByTagID.onValidationError))
					LeadTagsAdmin.GetGridByTagID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetGridByTagID", 
					Params : { TagID : oObject.TagID}, 
					Serialize : LeadTagsAdmin.GetGridByTagID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetGridByTagID.onErrorReceived) ? LeadTagsAdmin.GetGridByTagID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetGridByTagID", { TagID : oObject.TagID}, LeadTagsAdmin.GetGridByTagID.Serialize || {});
    },
	GetGridByTagID : function(TagID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadTagsAdmin.GetGridByTagIDObject({ TagID : TagID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByTagIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetGridByTagID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetGridByTagID.onValidationError))
					LeadTagsAdmin.GetGridByTagID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetGridByTagID", 
					Params : { TagID : oObject.TagID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadTagsAdmin.GetGridByTagID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetGridByTagID.onErrorReceived) ? LeadTagsAdmin.GetGridByTagID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetGridByTagID", { TagID : oObject.TagID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadTagsAdmin.GetGridByTagID.Serialize || {});
    },
	GetGridByTagIDCount : function(TagID, Search, Callback) {
        return LeadTagsAdmin.GetGridByTagIDCountObject({ TagID : TagID,Search : Search}, Callback);
    },

	GetGridByTagIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetGridByTagIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetGridByTagIDCount.onValidationError))
					LeadTagsAdmin.GetGridByTagIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetGridByTagIDCount", 
					Params : { TagID : oObject.TagID,Search : oObject.Search}, 
					Serialize : LeadTagsAdmin.GetGridByTagIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetGridByTagIDCount.onErrorReceived) ? LeadTagsAdmin.GetGridByTagIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetGridByTagIDCount", { TagID : oObject.TagID,Search : oObject.Search}, LeadTagsAdmin.GetGridByTagIDCount.Serialize || {});
    },
	GetGridByTagIDHtml : function(TagID, Callback) {
        return LeadTagsAdmin.GetGridByTagIDHtmlObject({ TagID : TagID}, Callback);
    },

	GetGridByTagIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetGridByTagIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetGridByTagIDHtml.onValidationError))
					LeadTagsAdmin.GetGridByTagIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetGridByTagIDHtml", 
					Params : { TagID : oObject.TagID}, 
					Serialize : LeadTagsAdmin.GetGridByTagIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetGridByTagIDHtml.onErrorReceived) ? LeadTagsAdmin.GetGridByTagIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetGridByTagIDHtml", { TagID : oObject.TagID}, LeadTagsAdmin.GetGridByTagIDHtml.Serialize || {});
    },
	GetGridByTagIDHtml : function(TagID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadTagsAdmin.GetGridByTagIDHtmlObject({ TagID : TagID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByTagIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetGridByTagIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetGridByTagIDHtml.onValidationError))
					LeadTagsAdmin.GetGridByTagIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetGridByTagIDHtml", 
					Params : { TagID : oObject.TagID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadTagsAdmin.GetGridByTagIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetGridByTagIDHtml.onErrorReceived) ? LeadTagsAdmin.GetGridByTagIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetGridByTagIDHtml", { TagID : oObject.TagID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadTagsAdmin.GetGridByTagIDHtml.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return LeadTagsAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetGridCount.onValidationError))
					LeadTagsAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : LeadTagsAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetGridCount.onErrorReceived) ? LeadTagsAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetGridCount", { Search : oObject.Search}, LeadTagsAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadTagsAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetGridHtml.onValidationError))
					LeadTagsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadTagsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetGridHtml.onErrorReceived) ? LeadTagsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadTagsAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return LeadTagsAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetGridHtml.onValidationError))
					LeadTagsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : LeadTagsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetGridHtml.onErrorReceived) ? LeadTagsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetGridHtml", { }, LeadTagsAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return LeadTagsAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.GetInsert.onValidationError))
					LeadTagsAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : LeadTagsAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.GetInsert.onErrorReceived) ? LeadTagsAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "GetInsert", { }, LeadTagsAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return LeadTagsAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadTagsAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadTagsAdmin.Initialize.onValidationError))
					LeadTagsAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadTagsAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : LeadTagsAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadTagsAdmin.Initialize.onErrorReceived) ? LeadTagsAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadTagsAdmin.Url, "Initialize", { }, LeadTagsAdmin.Initialize.Serialize || {});
    }
};

var LeadTagsAdminValidators = {
	

	GetDetails : {
			LeadTagID : LeadTagsAdminValidatorsFields.LeadTagID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : LeadTagsAdminValidatorsFields.Name,
			Value : LeadTagsAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : LeadTagsAdminValidatorsFields.Name,
			Value : LeadTagsAdminValidatorsFields.Value,
			FieldName : LeadTagsAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : LeadTagsAdminValidatorsFields.Name,
			Value : LeadTagsAdminValidatorsFields.Value,
			FieldName : LeadTagsAdminValidatorsFields.FieldName,
			PreOptions : LeadTagsAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			LeadTagID : LeadTagsAdminValidatorsFields.LeadTagID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : LeadTagsAdminValidatorsFields.Search,
			SortColumn : LeadTagsAdminValidatorsFields.SortColumn,
			SortAscending : LeadTagsAdminValidatorsFields.SortAscending,
			SkipRows : LeadTagsAdminValidatorsFields.SkipRows,
			NumRows : LeadTagsAdminValidatorsFields.NumRows	
	},

	GetGridByLeadID : {
			LeadID : LeadTagsAdminValidatorsFields.LeadID,
			Search : LeadTagsAdminValidatorsFields.Search,
			SortColumn : LeadTagsAdminValidatorsFields.SortColumn,
			SortAscending : LeadTagsAdminValidatorsFields.SortAscending,
			SkipRows : LeadTagsAdminValidatorsFields.SkipRows,
			NumRows : LeadTagsAdminValidatorsFields.NumRows	
	},

	GetGridByLeadID : {
			LeadID : LeadTagsAdminValidatorsFields.LeadID	
	},

	GetGridByLeadIDCount : {
			LeadID : LeadTagsAdminValidatorsFields.LeadID,
			Search : LeadTagsAdminValidatorsFields.Search	
	},

	GetGridByLeadIDHtml : {
			LeadID : LeadTagsAdminValidatorsFields.LeadID	
	},

	GetGridByLeadIDHtml : {
			LeadID : LeadTagsAdminValidatorsFields.LeadID,
			Search : LeadTagsAdminValidatorsFields.Search,
			SortColumn : LeadTagsAdminValidatorsFields.SortColumn,
			SortAscending : LeadTagsAdminValidatorsFields.SortAscending,
			SkipRows : LeadTagsAdminValidatorsFields.SkipRows,
			NumRows : LeadTagsAdminValidatorsFields.NumRows	
	},

	GetGridByTagID : {
			TagID : LeadTagsAdminValidatorsFields.TagID	
	},

	GetGridByTagID : {
			TagID : LeadTagsAdminValidatorsFields.TagID,
			Search : LeadTagsAdminValidatorsFields.Search,
			SortColumn : LeadTagsAdminValidatorsFields.SortColumn,
			SortAscending : LeadTagsAdminValidatorsFields.SortAscending,
			SkipRows : LeadTagsAdminValidatorsFields.SkipRows,
			NumRows : LeadTagsAdminValidatorsFields.NumRows	
	},

	GetGridByTagIDCount : {
			TagID : LeadTagsAdminValidatorsFields.TagID,
			Search : LeadTagsAdminValidatorsFields.Search	
	},

	GetGridByTagIDHtml : {
			TagID : LeadTagsAdminValidatorsFields.TagID	
	},

	GetGridByTagIDHtml : {
			TagID : LeadTagsAdminValidatorsFields.TagID,
			Search : LeadTagsAdminValidatorsFields.Search,
			SortColumn : LeadTagsAdminValidatorsFields.SortColumn,
			SortAscending : LeadTagsAdminValidatorsFields.SortAscending,
			SkipRows : LeadTagsAdminValidatorsFields.SkipRows,
			NumRows : LeadTagsAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : LeadTagsAdminValidatorsFields.Search	
	},

	GetGridHtml : {
			Search : LeadTagsAdminValidatorsFields.Search,
			SortColumn : LeadTagsAdminValidatorsFields.SortColumn,
			SortAscending : LeadTagsAdminValidatorsFields.SortAscending,
			SkipRows : LeadTagsAdminValidatorsFields.SkipRows,
			NumRows : LeadTagsAdminValidatorsFields.NumRows	
	},

	GetGridHtml : {	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    