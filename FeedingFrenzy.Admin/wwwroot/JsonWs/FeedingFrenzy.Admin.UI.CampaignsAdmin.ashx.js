

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["CampaignsAdminValidatorsFields"])) {
	var CampaignsAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(CampaignsAdminValidatorsFields.CampaignID)) {
	CampaignsAdminValidatorsFields.CampaignID = {Validators : [Validators.Text], InvalidMessage: "Invalid CampaignID"};
}
if (!ObjectUtil.HasValue(CampaignsAdminValidatorsFields.FieldName)) {
	CampaignsAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(CampaignsAdminValidatorsFields.Name)) {
	CampaignsAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(CampaignsAdminValidatorsFields.NumRows)) {
	CampaignsAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(CampaignsAdminValidatorsFields.PreOptions)) {
	CampaignsAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(CampaignsAdminValidatorsFields.Search)) {
	CampaignsAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(CampaignsAdminValidatorsFields.SkipRows)) {
	CampaignsAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(CampaignsAdminValidatorsFields.SortAscending)) {
	CampaignsAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(CampaignsAdminValidatorsFields.SortColumn)) {
	CampaignsAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(CampaignsAdminValidatorsFields.SourceID)) {
	CampaignsAdminValidatorsFields.SourceID = {Validators : [Validators.Text], InvalidMessage: "Invalid SourceID"};
}
if (!ObjectUtil.HasValue(CampaignsAdminValidatorsFields.Value)) {
	CampaignsAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var CampaignsAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.CampaignsAdmin.ashx"

	,
	GetDetails : function(CampaignID, Callback) {
        return CampaignsAdmin.GetDetailsObject({ CampaignID : CampaignID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(CampaignsAdmin.GetDetails.onValidationError))
					CampaignsAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: CampaignsAdmin.Url, 
					Method : "GetDetails", 
					Params : { CampaignID : oObject.CampaignID}, 
					Serialize : CampaignsAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(CampaignsAdmin.GetDetails.onErrorReceived) ? CampaignsAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(CampaignsAdmin.Url, "GetDetails", { CampaignID : oObject.CampaignID}, CampaignsAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return CampaignsAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(CampaignsAdmin.GetDropDown.onValidationError))
					CampaignsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: CampaignsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : CampaignsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(CampaignsAdmin.GetDropDown.onErrorReceived) ? CampaignsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(CampaignsAdmin.Url, "GetDropDown", { }, CampaignsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return CampaignsAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(CampaignsAdmin.GetDropDown.onValidationError))
					CampaignsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: CampaignsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : CampaignsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(CampaignsAdmin.GetDropDown.onErrorReceived) ? CampaignsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(CampaignsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, CampaignsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return CampaignsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(CampaignsAdmin.GetDropDown.onValidationError))
					CampaignsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: CampaignsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : CampaignsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(CampaignsAdmin.GetDropDown.onErrorReceived) ? CampaignsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(CampaignsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, CampaignsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return CampaignsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(CampaignsAdmin.GetDropDown.onValidationError))
					CampaignsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: CampaignsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : CampaignsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(CampaignsAdmin.GetDropDown.onErrorReceived) ? CampaignsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(CampaignsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, CampaignsAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(CampaignID, Callback) {
        return CampaignsAdmin.GetEditObject({ CampaignID : CampaignID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(CampaignsAdmin.GetEdit.onValidationError))
					CampaignsAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: CampaignsAdmin.Url, 
					Method : "GetEdit", 
					Params : { CampaignID : oObject.CampaignID}, 
					Serialize : CampaignsAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(CampaignsAdmin.GetEdit.onErrorReceived) ? CampaignsAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(CampaignsAdmin.Url, "GetEdit", { CampaignID : oObject.CampaignID}, CampaignsAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return CampaignsAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(CampaignsAdmin.GetGrid.onValidationError))
					CampaignsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: CampaignsAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : CampaignsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(CampaignsAdmin.GetGrid.onErrorReceived) ? CampaignsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(CampaignsAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, CampaignsAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Callback) {
        return CampaignsAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(CampaignsAdmin.GetGrid.onValidationError))
					CampaignsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: CampaignsAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : CampaignsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(CampaignsAdmin.GetGrid.onErrorReceived) ? CampaignsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(CampaignsAdmin.Url, "GetGrid", { }, CampaignsAdmin.GetGrid.Serialize || {});
    },
	GetGridBySourceID : function(SourceID, Callback) {
        return CampaignsAdmin.GetGridBySourceIDObject({ SourceID : SourceID}, Callback);
    },

	GetGridBySourceIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsAdminValidators.GetGridBySourceID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(CampaignsAdmin.GetGridBySourceID.onValidationError))
					CampaignsAdmin.GetGridBySourceID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: CampaignsAdmin.Url, 
					Method : "GetGridBySourceID", 
					Params : { SourceID : oObject.SourceID}, 
					Serialize : CampaignsAdmin.GetGridBySourceID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(CampaignsAdmin.GetGridBySourceID.onErrorReceived) ? CampaignsAdmin.GetGridBySourceID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(CampaignsAdmin.Url, "GetGridBySourceID", { SourceID : oObject.SourceID}, CampaignsAdmin.GetGridBySourceID.Serialize || {});
    },
	GetGridBySourceID : function(SourceID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return CampaignsAdmin.GetGridBySourceIDObject({ SourceID : SourceID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridBySourceIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsAdminValidators.GetGridBySourceID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(CampaignsAdmin.GetGridBySourceID.onValidationError))
					CampaignsAdmin.GetGridBySourceID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: CampaignsAdmin.Url, 
					Method : "GetGridBySourceID", 
					Params : { SourceID : oObject.SourceID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : CampaignsAdmin.GetGridBySourceID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(CampaignsAdmin.GetGridBySourceID.onErrorReceived) ? CampaignsAdmin.GetGridBySourceID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(CampaignsAdmin.Url, "GetGridBySourceID", { SourceID : oObject.SourceID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, CampaignsAdmin.GetGridBySourceID.Serialize || {});
    },
	GetGridBySourceIDCount : function(SourceID, Search, Callback) {
        return CampaignsAdmin.GetGridBySourceIDCountObject({ SourceID : SourceID,Search : Search}, Callback);
    },

	GetGridBySourceIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsAdminValidators.GetGridBySourceIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(CampaignsAdmin.GetGridBySourceIDCount.onValidationError))
					CampaignsAdmin.GetGridBySourceIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: CampaignsAdmin.Url, 
					Method : "GetGridBySourceIDCount", 
					Params : { SourceID : oObject.SourceID,Search : oObject.Search}, 
					Serialize : CampaignsAdmin.GetGridBySourceIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(CampaignsAdmin.GetGridBySourceIDCount.onErrorReceived) ? CampaignsAdmin.GetGridBySourceIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(CampaignsAdmin.Url, "GetGridBySourceIDCount", { SourceID : oObject.SourceID,Search : oObject.Search}, CampaignsAdmin.GetGridBySourceIDCount.Serialize || {});
    },
	GetGridBySourceIDHtml : function(SourceID, Callback) {
        return CampaignsAdmin.GetGridBySourceIDHtmlObject({ SourceID : SourceID}, Callback);
    },

	GetGridBySourceIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsAdminValidators.GetGridBySourceIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(CampaignsAdmin.GetGridBySourceIDHtml.onValidationError))
					CampaignsAdmin.GetGridBySourceIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: CampaignsAdmin.Url, 
					Method : "GetGridBySourceIDHtml", 
					Params : { SourceID : oObject.SourceID}, 
					Serialize : CampaignsAdmin.GetGridBySourceIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(CampaignsAdmin.GetGridBySourceIDHtml.onErrorReceived) ? CampaignsAdmin.GetGridBySourceIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(CampaignsAdmin.Url, "GetGridBySourceIDHtml", { SourceID : oObject.SourceID}, CampaignsAdmin.GetGridBySourceIDHtml.Serialize || {});
    },
	GetGridBySourceIDHtml : function(SourceID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return CampaignsAdmin.GetGridBySourceIDHtmlObject({ SourceID : SourceID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridBySourceIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsAdminValidators.GetGridBySourceIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(CampaignsAdmin.GetGridBySourceIDHtml.onValidationError))
					CampaignsAdmin.GetGridBySourceIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: CampaignsAdmin.Url, 
					Method : "GetGridBySourceIDHtml", 
					Params : { SourceID : oObject.SourceID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : CampaignsAdmin.GetGridBySourceIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(CampaignsAdmin.GetGridBySourceIDHtml.onErrorReceived) ? CampaignsAdmin.GetGridBySourceIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(CampaignsAdmin.Url, "GetGridBySourceIDHtml", { SourceID : oObject.SourceID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, CampaignsAdmin.GetGridBySourceIDHtml.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return CampaignsAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(CampaignsAdmin.GetGridCount.onValidationError))
					CampaignsAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: CampaignsAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : CampaignsAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(CampaignsAdmin.GetGridCount.onErrorReceived) ? CampaignsAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(CampaignsAdmin.Url, "GetGridCount", { Search : oObject.Search}, CampaignsAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return CampaignsAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(CampaignsAdmin.GetGridHtml.onValidationError))
					CampaignsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: CampaignsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : CampaignsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(CampaignsAdmin.GetGridHtml.onErrorReceived) ? CampaignsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(CampaignsAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, CampaignsAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return CampaignsAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(CampaignsAdmin.GetGridHtml.onValidationError))
					CampaignsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: CampaignsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : CampaignsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(CampaignsAdmin.GetGridHtml.onErrorReceived) ? CampaignsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(CampaignsAdmin.Url, "GetGridHtml", { }, CampaignsAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return CampaignsAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(CampaignsAdmin.GetInsert.onValidationError))
					CampaignsAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: CampaignsAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : CampaignsAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(CampaignsAdmin.GetInsert.onErrorReceived) ? CampaignsAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(CampaignsAdmin.Url, "GetInsert", { }, CampaignsAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return CampaignsAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, CampaignsAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(CampaignsAdmin.Initialize.onValidationError))
					CampaignsAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: CampaignsAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : CampaignsAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(CampaignsAdmin.Initialize.onErrorReceived) ? CampaignsAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(CampaignsAdmin.Url, "Initialize", { }, CampaignsAdmin.Initialize.Serialize || {});
    }
};

var CampaignsAdminValidators = {
	

	GetDetails : {
			CampaignID : CampaignsAdminValidatorsFields.CampaignID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : CampaignsAdminValidatorsFields.Name,
			Value : CampaignsAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : CampaignsAdminValidatorsFields.Name,
			Value : CampaignsAdminValidatorsFields.Value,
			FieldName : CampaignsAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : CampaignsAdminValidatorsFields.Name,
			Value : CampaignsAdminValidatorsFields.Value,
			FieldName : CampaignsAdminValidatorsFields.FieldName,
			PreOptions : CampaignsAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			CampaignID : CampaignsAdminValidatorsFields.CampaignID	
	},

	GetGrid : {
			Search : CampaignsAdminValidatorsFields.Search,
			SortColumn : CampaignsAdminValidatorsFields.SortColumn,
			SortAscending : CampaignsAdminValidatorsFields.SortAscending,
			SkipRows : CampaignsAdminValidatorsFields.SkipRows,
			NumRows : CampaignsAdminValidatorsFields.NumRows	
	},

	GetGrid : {	
	},

	GetGridBySourceID : {
			SourceID : CampaignsAdminValidatorsFields.SourceID	
	},

	GetGridBySourceID : {
			SourceID : CampaignsAdminValidatorsFields.SourceID,
			Search : CampaignsAdminValidatorsFields.Search,
			SortColumn : CampaignsAdminValidatorsFields.SortColumn,
			SortAscending : CampaignsAdminValidatorsFields.SortAscending,
			SkipRows : CampaignsAdminValidatorsFields.SkipRows,
			NumRows : CampaignsAdminValidatorsFields.NumRows	
	},

	GetGridBySourceIDCount : {
			SourceID : CampaignsAdminValidatorsFields.SourceID,
			Search : CampaignsAdminValidatorsFields.Search	
	},

	GetGridBySourceIDHtml : {
			SourceID : CampaignsAdminValidatorsFields.SourceID	
	},

	GetGridBySourceIDHtml : {
			SourceID : CampaignsAdminValidatorsFields.SourceID,
			Search : CampaignsAdminValidatorsFields.Search,
			SortColumn : CampaignsAdminValidatorsFields.SortColumn,
			SortAscending : CampaignsAdminValidatorsFields.SortAscending,
			SkipRows : CampaignsAdminValidatorsFields.SkipRows,
			NumRows : CampaignsAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : CampaignsAdminValidatorsFields.Search	
	},

	GetGridHtml : {
			Search : CampaignsAdminValidatorsFields.Search,
			SortColumn : CampaignsAdminValidatorsFields.SortColumn,
			SortAscending : CampaignsAdminValidatorsFields.SortAscending,
			SkipRows : CampaignsAdminValidatorsFields.SkipRows,
			NumRows : CampaignsAdminValidatorsFields.NumRows	
	},

	GetGridHtml : {	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    