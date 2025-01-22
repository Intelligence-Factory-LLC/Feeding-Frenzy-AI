

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["LeadsAdminValidatorsFields"])) {
	var LeadsAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(LeadsAdminValidatorsFields.CampaignID)) {
	LeadsAdminValidatorsFields.CampaignID = {Validators : [Validators.Text], InvalidMessage: "Invalid CampaignID"};
}
if (!ObjectUtil.HasValue(LeadsAdminValidatorsFields.FieldName)) {
	LeadsAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(LeadsAdminValidatorsFields.LeadID)) {
	LeadsAdminValidatorsFields.LeadID = {Validators : [Validators.Text], InvalidMessage: "Invalid LeadID"};
}
if (!ObjectUtil.HasValue(LeadsAdminValidatorsFields.LeadStatusID)) {
	LeadsAdminValidatorsFields.LeadStatusID = {Validators : [Validators.Text], InvalidMessage: "Invalid LeadStatusID"};
}
if (!ObjectUtil.HasValue(LeadsAdminValidatorsFields.LeadSubStatusID)) {
	LeadsAdminValidatorsFields.LeadSubStatusID = {Validators : [Validators.Text], InvalidMessage: "Invalid LeadSubStatusID"};
}
if (!ObjectUtil.HasValue(LeadsAdminValidatorsFields.Name)) {
	LeadsAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(LeadsAdminValidatorsFields.NumRows)) {
	LeadsAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(LeadsAdminValidatorsFields.Phone)) {
	LeadsAdminValidatorsFields.Phone = {Validators : [Validators.Text], InvalidMessage: "Invalid Phone"};
}
if (!ObjectUtil.HasValue(LeadsAdminValidatorsFields.PreOptions)) {
	LeadsAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(LeadsAdminValidatorsFields.SalesRepresentativeID)) {
	LeadsAdminValidatorsFields.SalesRepresentativeID = {Validators : [Validators.Text], InvalidMessage: "Invalid SalesRepresentativeID"};
}
if (!ObjectUtil.HasValue(LeadsAdminValidatorsFields.Search)) {
	LeadsAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(LeadsAdminValidatorsFields.SearchOptions)) {
	LeadsAdminValidatorsFields.SearchOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid SearchOptions"};
}
if (!ObjectUtil.HasValue(LeadsAdminValidatorsFields.SkipRows)) {
	LeadsAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(LeadsAdminValidatorsFields.SortAscending)) {
	LeadsAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(LeadsAdminValidatorsFields.SortColumn)) {
	LeadsAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(LeadsAdminValidatorsFields.SourceID)) {
	LeadsAdminValidatorsFields.SourceID = {Validators : [Validators.Text], InvalidMessage: "Invalid SourceID"};
}
if (!ObjectUtil.HasValue(LeadsAdminValidatorsFields.TagID)) {
	LeadsAdminValidatorsFields.TagID = {Validators : [Validators.Text], InvalidMessage: "Invalid TagID"};
}
if (!ObjectUtil.HasValue(LeadsAdminValidatorsFields.Value)) {
	LeadsAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var LeadsAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.LeadsAdmin.ashx"

	,
	GetDetails : function(LeadID, Callback) {
        return LeadsAdmin.GetDetailsObject({ LeadID : LeadID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetDetails.onValidationError))
					LeadsAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetDetails", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : LeadsAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetDetails.onErrorReceived) ? LeadsAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetDetails", { LeadID : oObject.LeadID}, LeadsAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return LeadsAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetDropDown.onValidationError))
					LeadsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : LeadsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetDropDown.onErrorReceived) ? LeadsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetDropDown", { }, LeadsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return LeadsAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetDropDown.onValidationError))
					LeadsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : LeadsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetDropDown.onErrorReceived) ? LeadsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, LeadsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return LeadsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetDropDown.onValidationError))
					LeadsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : LeadsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetDropDown.onErrorReceived) ? LeadsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, LeadsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return LeadsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetDropDown.onValidationError))
					LeadsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : LeadsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetDropDown.onErrorReceived) ? LeadsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, LeadsAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(LeadID, Callback) {
        return LeadsAdmin.GetEditObject({ LeadID : LeadID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetEdit.onValidationError))
					LeadsAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetEdit", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : LeadsAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetEdit.onErrorReceived) ? LeadsAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetEdit", { LeadID : oObject.LeadID}, LeadsAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return LeadsAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGrid.onValidationError))
					LeadsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : LeadsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGrid.onErrorReceived) ? LeadsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGrid", { }, LeadsAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGrid.onValidationError))
					LeadsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGrid.onErrorReceived) ? LeadsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGrid.Serialize || {});
    },
	GetGridByCampaignID : function(CampaignID, Callback) {
        return LeadsAdmin.GetGridByCampaignIDObject({ CampaignID : CampaignID}, Callback);
    },

	GetGridByCampaignIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByCampaignID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByCampaignID.onValidationError))
					LeadsAdmin.GetGridByCampaignID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByCampaignID", 
					Params : { CampaignID : oObject.CampaignID}, 
					Serialize : LeadsAdmin.GetGridByCampaignID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByCampaignID.onErrorReceived) ? LeadsAdmin.GetGridByCampaignID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByCampaignID", { CampaignID : oObject.CampaignID}, LeadsAdmin.GetGridByCampaignID.Serialize || {});
    },
	GetGridByCampaignID : function(CampaignID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridByCampaignIDObject({ CampaignID : CampaignID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByCampaignIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByCampaignID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByCampaignID.onValidationError))
					LeadsAdmin.GetGridByCampaignID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByCampaignID", 
					Params : { CampaignID : oObject.CampaignID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridByCampaignID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByCampaignID.onErrorReceived) ? LeadsAdmin.GetGridByCampaignID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByCampaignID", { CampaignID : oObject.CampaignID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridByCampaignID.Serialize || {});
    },
	GetGridByCampaignIDCount : function(CampaignID, Search, Callback) {
        return LeadsAdmin.GetGridByCampaignIDCountObject({ CampaignID : CampaignID,Search : Search}, Callback);
    },

	GetGridByCampaignIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByCampaignIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByCampaignIDCount.onValidationError))
					LeadsAdmin.GetGridByCampaignIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByCampaignIDCount", 
					Params : { CampaignID : oObject.CampaignID,Search : oObject.Search}, 
					Serialize : LeadsAdmin.GetGridByCampaignIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByCampaignIDCount.onErrorReceived) ? LeadsAdmin.GetGridByCampaignIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByCampaignIDCount", { CampaignID : oObject.CampaignID,Search : oObject.Search}, LeadsAdmin.GetGridByCampaignIDCount.Serialize || {});
    },
	GetGridByCampaignIDHtml : function(CampaignID, Callback) {
        return LeadsAdmin.GetGridByCampaignIDHtmlObject({ CampaignID : CampaignID}, Callback);
    },

	GetGridByCampaignIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByCampaignIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByCampaignIDHtml.onValidationError))
					LeadsAdmin.GetGridByCampaignIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByCampaignIDHtml", 
					Params : { CampaignID : oObject.CampaignID}, 
					Serialize : LeadsAdmin.GetGridByCampaignIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByCampaignIDHtml.onErrorReceived) ? LeadsAdmin.GetGridByCampaignIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByCampaignIDHtml", { CampaignID : oObject.CampaignID}, LeadsAdmin.GetGridByCampaignIDHtml.Serialize || {});
    },
	GetGridByCampaignIDHtml : function(CampaignID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridByCampaignIDHtmlObject({ CampaignID : CampaignID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByCampaignIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByCampaignIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByCampaignIDHtml.onValidationError))
					LeadsAdmin.GetGridByCampaignIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByCampaignIDHtml", 
					Params : { CampaignID : oObject.CampaignID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridByCampaignIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByCampaignIDHtml.onErrorReceived) ? LeadsAdmin.GetGridByCampaignIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByCampaignIDHtml", { CampaignID : oObject.CampaignID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridByCampaignIDHtml.Serialize || {});
    },
	GetGridBySalesRepresentativeID : function(SalesRepresentativeID, Callback) {
        return LeadsAdmin.GetGridBySalesRepresentativeIDObject({ SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetGridBySalesRepresentativeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridBySalesRepresentativeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridBySalesRepresentativeID.onValidationError))
					LeadsAdmin.GetGridBySalesRepresentativeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridBySalesRepresentativeID", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : LeadsAdmin.GetGridBySalesRepresentativeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridBySalesRepresentativeID.onErrorReceived) ? LeadsAdmin.GetGridBySalesRepresentativeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridBySalesRepresentativeID", { SalesRepresentativeID : oObject.SalesRepresentativeID}, LeadsAdmin.GetGridBySalesRepresentativeID.Serialize || {});
    },
	GetGridBySalesRepresentativeID : function(SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridBySalesRepresentativeIDObject({ SalesRepresentativeID : SalesRepresentativeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridBySalesRepresentativeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridBySalesRepresentativeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridBySalesRepresentativeID.onValidationError))
					LeadsAdmin.GetGridBySalesRepresentativeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridBySalesRepresentativeID", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridBySalesRepresentativeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridBySalesRepresentativeID.onErrorReceived) ? LeadsAdmin.GetGridBySalesRepresentativeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridBySalesRepresentativeID", { SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridBySalesRepresentativeID.Serialize || {});
    },
	GetGridBySalesRepresentativeIDCount : function(SalesRepresentativeID, Search, Callback) {
        return LeadsAdmin.GetGridBySalesRepresentativeIDCountObject({ SalesRepresentativeID : SalesRepresentativeID,Search : Search}, Callback);
    },

	GetGridBySalesRepresentativeIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridBySalesRepresentativeIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridBySalesRepresentativeIDCount.onValidationError))
					LeadsAdmin.GetGridBySalesRepresentativeIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridBySalesRepresentativeIDCount", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search}, 
					Serialize : LeadsAdmin.GetGridBySalesRepresentativeIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridBySalesRepresentativeIDCount.onErrorReceived) ? LeadsAdmin.GetGridBySalesRepresentativeIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridBySalesRepresentativeIDCount", { SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search}, LeadsAdmin.GetGridBySalesRepresentativeIDCount.Serialize || {});
    },
	GetGridBySalesRepresentativeIDHtml : function(SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridBySalesRepresentativeIDHtmlObject({ SalesRepresentativeID : SalesRepresentativeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridBySalesRepresentativeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridBySalesRepresentativeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridBySalesRepresentativeIDHtml.onValidationError))
					LeadsAdmin.GetGridBySalesRepresentativeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridBySalesRepresentativeIDHtml", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridBySalesRepresentativeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridBySalesRepresentativeIDHtml.onErrorReceived) ? LeadsAdmin.GetGridBySalesRepresentativeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridBySalesRepresentativeIDHtml", { SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridBySalesRepresentativeIDHtml.Serialize || {});
    },
	GetGridBySalesRepresentativeIDHtml : function(SalesRepresentativeID, Callback) {
        return LeadsAdmin.GetGridBySalesRepresentativeIDHtmlObject({ SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetGridBySalesRepresentativeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridBySalesRepresentativeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridBySalesRepresentativeIDHtml.onValidationError))
					LeadsAdmin.GetGridBySalesRepresentativeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridBySalesRepresentativeIDHtml", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : LeadsAdmin.GetGridBySalesRepresentativeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridBySalesRepresentativeIDHtml.onErrorReceived) ? LeadsAdmin.GetGridBySalesRepresentativeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridBySalesRepresentativeIDHtml", { SalesRepresentativeID : oObject.SalesRepresentativeID}, LeadsAdmin.GetGridBySalesRepresentativeIDHtml.Serialize || {});
    },
	GetGridBySourceID : function(SourceID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridBySourceIDObject({ SourceID : SourceID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridBySourceIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridBySourceID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridBySourceID.onValidationError))
					LeadsAdmin.GetGridBySourceID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridBySourceID", 
					Params : { SourceID : oObject.SourceID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridBySourceID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridBySourceID.onErrorReceived) ? LeadsAdmin.GetGridBySourceID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridBySourceID", { SourceID : oObject.SourceID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridBySourceID.Serialize || {});
    },
	GetGridBySourceID : function(SourceID, Callback) {
        return LeadsAdmin.GetGridBySourceIDObject({ SourceID : SourceID}, Callback);
    },

	GetGridBySourceIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridBySourceID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridBySourceID.onValidationError))
					LeadsAdmin.GetGridBySourceID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridBySourceID", 
					Params : { SourceID : oObject.SourceID}, 
					Serialize : LeadsAdmin.GetGridBySourceID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridBySourceID.onErrorReceived) ? LeadsAdmin.GetGridBySourceID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridBySourceID", { SourceID : oObject.SourceID}, LeadsAdmin.GetGridBySourceID.Serialize || {});
    },
	GetGridBySourceIDCount : function(SourceID, Search, Callback) {
        return LeadsAdmin.GetGridBySourceIDCountObject({ SourceID : SourceID,Search : Search}, Callback);
    },

	GetGridBySourceIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridBySourceIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridBySourceIDCount.onValidationError))
					LeadsAdmin.GetGridBySourceIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridBySourceIDCount", 
					Params : { SourceID : oObject.SourceID,Search : oObject.Search}, 
					Serialize : LeadsAdmin.GetGridBySourceIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridBySourceIDCount.onErrorReceived) ? LeadsAdmin.GetGridBySourceIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridBySourceIDCount", { SourceID : oObject.SourceID,Search : oObject.Search}, LeadsAdmin.GetGridBySourceIDCount.Serialize || {});
    },
	GetGridBySourceIDHtml : function(SourceID, Callback) {
        return LeadsAdmin.GetGridBySourceIDHtmlObject({ SourceID : SourceID}, Callback);
    },

	GetGridBySourceIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridBySourceIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridBySourceIDHtml.onValidationError))
					LeadsAdmin.GetGridBySourceIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridBySourceIDHtml", 
					Params : { SourceID : oObject.SourceID}, 
					Serialize : LeadsAdmin.GetGridBySourceIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridBySourceIDHtml.onErrorReceived) ? LeadsAdmin.GetGridBySourceIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridBySourceIDHtml", { SourceID : oObject.SourceID}, LeadsAdmin.GetGridBySourceIDHtml.Serialize || {});
    },
	GetGridBySourceIDHtml : function(SourceID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridBySourceIDHtmlObject({ SourceID : SourceID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridBySourceIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridBySourceIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridBySourceIDHtml.onValidationError))
					LeadsAdmin.GetGridBySourceIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridBySourceIDHtml", 
					Params : { SourceID : oObject.SourceID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridBySourceIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridBySourceIDHtml.onErrorReceived) ? LeadsAdmin.GetGridBySourceIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridBySourceIDHtml", { SourceID : oObject.SourceID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridBySourceIDHtml.Serialize || {});
    },
	GetGridByStatusID : function(LeadStatusID, Callback) {
        return LeadsAdmin.GetGridByStatusIDObject({ LeadStatusID : LeadStatusID}, Callback);
    },

	GetGridByStatusIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByStatusID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByStatusID.onValidationError))
					LeadsAdmin.GetGridByStatusID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByStatusID", 
					Params : { LeadStatusID : oObject.LeadStatusID}, 
					Serialize : LeadsAdmin.GetGridByStatusID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByStatusID.onErrorReceived) ? LeadsAdmin.GetGridByStatusID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByStatusID", { LeadStatusID : oObject.LeadStatusID}, LeadsAdmin.GetGridByStatusID.Serialize || {});
    },
	GetGridByStatusID : function(LeadStatusID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridByStatusIDObject({ LeadStatusID : LeadStatusID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByStatusIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByStatusID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByStatusID.onValidationError))
					LeadsAdmin.GetGridByStatusID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByStatusID", 
					Params : { LeadStatusID : oObject.LeadStatusID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridByStatusID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByStatusID.onErrorReceived) ? LeadsAdmin.GetGridByStatusID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByStatusID", { LeadStatusID : oObject.LeadStatusID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridByStatusID.Serialize || {});
    },
	GetGridByStatusIDCount : function(LeadStatusID, Search, Callback) {
        return LeadsAdmin.GetGridByStatusIDCountObject({ LeadStatusID : LeadStatusID,Search : Search}, Callback);
    },

	GetGridByStatusIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByStatusIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByStatusIDCount.onValidationError))
					LeadsAdmin.GetGridByStatusIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByStatusIDCount", 
					Params : { LeadStatusID : oObject.LeadStatusID,Search : oObject.Search}, 
					Serialize : LeadsAdmin.GetGridByStatusIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByStatusIDCount.onErrorReceived) ? LeadsAdmin.GetGridByStatusIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByStatusIDCount", { LeadStatusID : oObject.LeadStatusID,Search : oObject.Search}, LeadsAdmin.GetGridByStatusIDCount.Serialize || {});
    },
	GetGridByStatusIDHtml : function(LeadStatusID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridByStatusIDHtmlObject({ LeadStatusID : LeadStatusID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByStatusIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByStatusIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByStatusIDHtml.onValidationError))
					LeadsAdmin.GetGridByStatusIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByStatusIDHtml", 
					Params : { LeadStatusID : oObject.LeadStatusID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridByStatusIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByStatusIDHtml.onErrorReceived) ? LeadsAdmin.GetGridByStatusIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByStatusIDHtml", { LeadStatusID : oObject.LeadStatusID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridByStatusIDHtml.Serialize || {});
    },
	GetGridByStatusIDHtml : function(LeadStatusID, Callback) {
        return LeadsAdmin.GetGridByStatusIDHtmlObject({ LeadStatusID : LeadStatusID}, Callback);
    },

	GetGridByStatusIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByStatusIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByStatusIDHtml.onValidationError))
					LeadsAdmin.GetGridByStatusIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByStatusIDHtml", 
					Params : { LeadStatusID : oObject.LeadStatusID}, 
					Serialize : LeadsAdmin.GetGridByStatusIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByStatusIDHtml.onErrorReceived) ? LeadsAdmin.GetGridByStatusIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByStatusIDHtml", { LeadStatusID : oObject.LeadStatusID}, LeadsAdmin.GetGridByStatusIDHtml.Serialize || {});
    },
	GetGridByStatusIDSalesRepresentativeID : function(LeadStatusID, SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDObject({ LeadStatusID : LeadStatusID,SalesRepresentativeID : SalesRepresentativeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByStatusIDSalesRepresentativeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByStatusIDSalesRepresentativeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByStatusIDSalesRepresentativeID.onValidationError))
					LeadsAdmin.GetGridByStatusIDSalesRepresentativeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByStatusIDSalesRepresentativeID", 
					Params : { LeadStatusID : oObject.LeadStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridByStatusIDSalesRepresentativeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByStatusIDSalesRepresentativeID.onErrorReceived) ? LeadsAdmin.GetGridByStatusIDSalesRepresentativeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByStatusIDSalesRepresentativeID", { LeadStatusID : oObject.LeadStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridByStatusIDSalesRepresentativeID.Serialize || {});
    },
	GetGridByStatusIDSalesRepresentativeID : function(LeadStatusID, SalesRepresentativeID, Callback) {
        return LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDObject({ LeadStatusID : LeadStatusID,SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetGridByStatusIDSalesRepresentativeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByStatusIDSalesRepresentativeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByStatusIDSalesRepresentativeID.onValidationError))
					LeadsAdmin.GetGridByStatusIDSalesRepresentativeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByStatusIDSalesRepresentativeID", 
					Params : { LeadStatusID : oObject.LeadStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : LeadsAdmin.GetGridByStatusIDSalesRepresentativeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByStatusIDSalesRepresentativeID.onErrorReceived) ? LeadsAdmin.GetGridByStatusIDSalesRepresentativeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByStatusIDSalesRepresentativeID", { LeadStatusID : oObject.LeadStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID}, LeadsAdmin.GetGridByStatusIDSalesRepresentativeID.Serialize || {});
    },
	GetGridByStatusIDSalesRepresentativeIDCount : function(LeadStatusID, SalesRepresentativeID, Search, Callback) {
        return LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDCountObject({ LeadStatusID : LeadStatusID,SalesRepresentativeID : SalesRepresentativeID,Search : Search}, Callback);
    },

	GetGridByStatusIDSalesRepresentativeIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByStatusIDSalesRepresentativeIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDCount.onValidationError))
					LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByStatusIDSalesRepresentativeIDCount", 
					Params : { LeadStatusID : oObject.LeadStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search}, 
					Serialize : LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDCount.onErrorReceived) ? LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByStatusIDSalesRepresentativeIDCount", { LeadStatusID : oObject.LeadStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search}, LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDCount.Serialize || {});
    },
	GetGridByStatusIDSalesRepresentativeIDHtml : function(LeadStatusID, SalesRepresentativeID, Callback) {
        return LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDHtmlObject({ LeadStatusID : LeadStatusID,SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetGridByStatusIDSalesRepresentativeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByStatusIDSalesRepresentativeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDHtml.onValidationError))
					LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByStatusIDSalesRepresentativeIDHtml", 
					Params : { LeadStatusID : oObject.LeadStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDHtml.onErrorReceived) ? LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByStatusIDSalesRepresentativeIDHtml", { LeadStatusID : oObject.LeadStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID}, LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDHtml.Serialize || {});
    },
	GetGridByStatusIDSalesRepresentativeIDHtml : function(LeadStatusID, SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDHtmlObject({ LeadStatusID : LeadStatusID,SalesRepresentativeID : SalesRepresentativeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByStatusIDSalesRepresentativeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByStatusIDSalesRepresentativeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDHtml.onValidationError))
					LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByStatusIDSalesRepresentativeIDHtml", 
					Params : { LeadStatusID : oObject.LeadStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDHtml.onErrorReceived) ? LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByStatusIDSalesRepresentativeIDHtml", { LeadStatusID : oObject.LeadStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridByStatusIDSalesRepresentativeIDHtml.Serialize || {});
    },
	GetGridBySubStatusID : function(LeadSubStatusID, Callback) {
        return LeadsAdmin.GetGridBySubStatusIDObject({ LeadSubStatusID : LeadSubStatusID}, Callback);
    },

	GetGridBySubStatusIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridBySubStatusID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridBySubStatusID.onValidationError))
					LeadsAdmin.GetGridBySubStatusID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridBySubStatusID", 
					Params : { LeadSubStatusID : oObject.LeadSubStatusID}, 
					Serialize : LeadsAdmin.GetGridBySubStatusID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridBySubStatusID.onErrorReceived) ? LeadsAdmin.GetGridBySubStatusID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridBySubStatusID", { LeadSubStatusID : oObject.LeadSubStatusID}, LeadsAdmin.GetGridBySubStatusID.Serialize || {});
    },
	GetGridBySubStatusID : function(LeadSubStatusID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridBySubStatusIDObject({ LeadSubStatusID : LeadSubStatusID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridBySubStatusIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridBySubStatusID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridBySubStatusID.onValidationError))
					LeadsAdmin.GetGridBySubStatusID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridBySubStatusID", 
					Params : { LeadSubStatusID : oObject.LeadSubStatusID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridBySubStatusID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridBySubStatusID.onErrorReceived) ? LeadsAdmin.GetGridBySubStatusID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridBySubStatusID", { LeadSubStatusID : oObject.LeadSubStatusID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridBySubStatusID.Serialize || {});
    },
	GetGridBySubStatusIDCount : function(LeadSubStatusID, Search, Callback) {
        return LeadsAdmin.GetGridBySubStatusIDCountObject({ LeadSubStatusID : LeadSubStatusID,Search : Search}, Callback);
    },

	GetGridBySubStatusIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridBySubStatusIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridBySubStatusIDCount.onValidationError))
					LeadsAdmin.GetGridBySubStatusIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridBySubStatusIDCount", 
					Params : { LeadSubStatusID : oObject.LeadSubStatusID,Search : oObject.Search}, 
					Serialize : LeadsAdmin.GetGridBySubStatusIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridBySubStatusIDCount.onErrorReceived) ? LeadsAdmin.GetGridBySubStatusIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridBySubStatusIDCount", { LeadSubStatusID : oObject.LeadSubStatusID,Search : oObject.Search}, LeadsAdmin.GetGridBySubStatusIDCount.Serialize || {});
    },
	GetGridBySubStatusIDHtml : function(LeadSubStatusID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridBySubStatusIDHtmlObject({ LeadSubStatusID : LeadSubStatusID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridBySubStatusIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridBySubStatusIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridBySubStatusIDHtml.onValidationError))
					LeadsAdmin.GetGridBySubStatusIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridBySubStatusIDHtml", 
					Params : { LeadSubStatusID : oObject.LeadSubStatusID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridBySubStatusIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridBySubStatusIDHtml.onErrorReceived) ? LeadsAdmin.GetGridBySubStatusIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridBySubStatusIDHtml", { LeadSubStatusID : oObject.LeadSubStatusID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridBySubStatusIDHtml.Serialize || {});
    },
	GetGridBySubStatusIDHtml : function(LeadSubStatusID, Callback) {
        return LeadsAdmin.GetGridBySubStatusIDHtmlObject({ LeadSubStatusID : LeadSubStatusID}, Callback);
    },

	GetGridBySubStatusIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridBySubStatusIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridBySubStatusIDHtml.onValidationError))
					LeadsAdmin.GetGridBySubStatusIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridBySubStatusIDHtml", 
					Params : { LeadSubStatusID : oObject.LeadSubStatusID}, 
					Serialize : LeadsAdmin.GetGridBySubStatusIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridBySubStatusIDHtml.onErrorReceived) ? LeadsAdmin.GetGridBySubStatusIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridBySubStatusIDHtml", { LeadSubStatusID : oObject.LeadSubStatusID}, LeadsAdmin.GetGridBySubStatusIDHtml.Serialize || {});
    },
	GetGridBySubStatusIDSalesRepresentativeID : function(LeadSubStatusID, SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDObject({ LeadSubStatusID : LeadSubStatusID,SalesRepresentativeID : SalesRepresentativeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridBySubStatusIDSalesRepresentativeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridBySubStatusIDSalesRepresentativeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeID.onValidationError))
					LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridBySubStatusIDSalesRepresentativeID", 
					Params : { LeadSubStatusID : oObject.LeadSubStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeID.onErrorReceived) ? LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridBySubStatusIDSalesRepresentativeID", { LeadSubStatusID : oObject.LeadSubStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeID.Serialize || {});
    },
	GetGridBySubStatusIDSalesRepresentativeID : function(LeadSubStatusID, SalesRepresentativeID, Callback) {
        return LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDObject({ LeadSubStatusID : LeadSubStatusID,SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetGridBySubStatusIDSalesRepresentativeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridBySubStatusIDSalesRepresentativeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeID.onValidationError))
					LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridBySubStatusIDSalesRepresentativeID", 
					Params : { LeadSubStatusID : oObject.LeadSubStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeID.onErrorReceived) ? LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridBySubStatusIDSalesRepresentativeID", { LeadSubStatusID : oObject.LeadSubStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID}, LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeID.Serialize || {});
    },
	GetGridBySubStatusIDSalesRepresentativeIDCount : function(LeadSubStatusID, SalesRepresentativeID, Search, Callback) {
        return LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDCountObject({ LeadSubStatusID : LeadSubStatusID,SalesRepresentativeID : SalesRepresentativeID,Search : Search}, Callback);
    },

	GetGridBySubStatusIDSalesRepresentativeIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridBySubStatusIDSalesRepresentativeIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDCount.onValidationError))
					LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridBySubStatusIDSalesRepresentativeIDCount", 
					Params : { LeadSubStatusID : oObject.LeadSubStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search}, 
					Serialize : LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDCount.onErrorReceived) ? LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridBySubStatusIDSalesRepresentativeIDCount", { LeadSubStatusID : oObject.LeadSubStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search}, LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDCount.Serialize || {});
    },
	GetGridBySubStatusIDSalesRepresentativeIDHtml : function(LeadSubStatusID, SalesRepresentativeID, Callback) {
        return LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDHtmlObject({ LeadSubStatusID : LeadSubStatusID,SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetGridBySubStatusIDSalesRepresentativeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridBySubStatusIDSalesRepresentativeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDHtml.onValidationError))
					LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridBySubStatusIDSalesRepresentativeIDHtml", 
					Params : { LeadSubStatusID : oObject.LeadSubStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDHtml.onErrorReceived) ? LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridBySubStatusIDSalesRepresentativeIDHtml", { LeadSubStatusID : oObject.LeadSubStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID}, LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDHtml.Serialize || {});
    },
	GetGridBySubStatusIDSalesRepresentativeIDHtml : function(LeadSubStatusID, SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDHtmlObject({ LeadSubStatusID : LeadSubStatusID,SalesRepresentativeID : SalesRepresentativeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridBySubStatusIDSalesRepresentativeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridBySubStatusIDSalesRepresentativeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDHtml.onValidationError))
					LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridBySubStatusIDSalesRepresentativeIDHtml", 
					Params : { LeadSubStatusID : oObject.LeadSubStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDHtml.onErrorReceived) ? LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridBySubStatusIDSalesRepresentativeIDHtml", { LeadSubStatusID : oObject.LeadSubStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridBySubStatusIDSalesRepresentativeIDHtml.Serialize || {});
    },
	GetGridByTagID : function(TagID, Callback) {
        return LeadsAdmin.GetGridByTagIDObject({ TagID : TagID}, Callback);
    },

	GetGridByTagIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagID.onValidationError))
					LeadsAdmin.GetGridByTagID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagID", 
					Params : { TagID : oObject.TagID}, 
					Serialize : LeadsAdmin.GetGridByTagID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagID.onErrorReceived) ? LeadsAdmin.GetGridByTagID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagID", { TagID : oObject.TagID}, LeadsAdmin.GetGridByTagID.Serialize || {});
    },
	GetGridByTagID : function(TagID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridByTagIDObject({ TagID : TagID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByTagIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagID.onValidationError))
					LeadsAdmin.GetGridByTagID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagID", 
					Params : { TagID : oObject.TagID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridByTagID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagID.onErrorReceived) ? LeadsAdmin.GetGridByTagID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagID", { TagID : oObject.TagID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridByTagID.Serialize || {});
    },
	GetGridByTagIDCount : function(TagID, Search, Callback) {
        return LeadsAdmin.GetGridByTagIDCountObject({ TagID : TagID,Search : Search}, Callback);
    },

	GetGridByTagIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDCount.onValidationError))
					LeadsAdmin.GetGridByTagIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDCount", 
					Params : { TagID : oObject.TagID,Search : oObject.Search}, 
					Serialize : LeadsAdmin.GetGridByTagIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDCount.onErrorReceived) ? LeadsAdmin.GetGridByTagIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDCount", { TagID : oObject.TagID,Search : oObject.Search}, LeadsAdmin.GetGridByTagIDCount.Serialize || {});
    },
	GetGridByTagIDHtml : function(TagID, Callback) {
        return LeadsAdmin.GetGridByTagIDHtmlObject({ TagID : TagID}, Callback);
    },

	GetGridByTagIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDHtml.onValidationError))
					LeadsAdmin.GetGridByTagIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDHtml", 
					Params : { TagID : oObject.TagID}, 
					Serialize : LeadsAdmin.GetGridByTagIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDHtml.onErrorReceived) ? LeadsAdmin.GetGridByTagIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDHtml", { TagID : oObject.TagID}, LeadsAdmin.GetGridByTagIDHtml.Serialize || {});
    },
	GetGridByTagIDHtml : function(TagID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridByTagIDHtmlObject({ TagID : TagID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByTagIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDHtml.onValidationError))
					LeadsAdmin.GetGridByTagIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDHtml", 
					Params : { TagID : oObject.TagID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridByTagIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDHtml.onErrorReceived) ? LeadsAdmin.GetGridByTagIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDHtml", { TagID : oObject.TagID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridByTagIDHtml.Serialize || {});
    },
	GetGridByTagIDSalesRepresentativeID : function(TagID, SalesRepresentativeID, Callback) {
        return LeadsAdmin.GetGridByTagIDSalesRepresentativeIDObject({ TagID : TagID,SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetGridByTagIDSalesRepresentativeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDSalesRepresentativeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSalesRepresentativeID.onValidationError))
					LeadsAdmin.GetGridByTagIDSalesRepresentativeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDSalesRepresentativeID", 
					Params : { TagID : oObject.TagID,SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : LeadsAdmin.GetGridByTagIDSalesRepresentativeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSalesRepresentativeID.onErrorReceived) ? LeadsAdmin.GetGridByTagIDSalesRepresentativeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDSalesRepresentativeID", { TagID : oObject.TagID,SalesRepresentativeID : oObject.SalesRepresentativeID}, LeadsAdmin.GetGridByTagIDSalesRepresentativeID.Serialize || {});
    },
	GetGridByTagIDSalesRepresentativeID : function(TagID, SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridByTagIDSalesRepresentativeIDObject({ TagID : TagID,SalesRepresentativeID : SalesRepresentativeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByTagIDSalesRepresentativeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDSalesRepresentativeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSalesRepresentativeID.onValidationError))
					LeadsAdmin.GetGridByTagIDSalesRepresentativeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDSalesRepresentativeID", 
					Params : { TagID : oObject.TagID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridByTagIDSalesRepresentativeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSalesRepresentativeID.onErrorReceived) ? LeadsAdmin.GetGridByTagIDSalesRepresentativeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDSalesRepresentativeID", { TagID : oObject.TagID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridByTagIDSalesRepresentativeID.Serialize || {});
    },
	GetGridByTagIDSalesRepresentativeIDCount : function(TagID, SalesRepresentativeID, Search, Callback) {
        return LeadsAdmin.GetGridByTagIDSalesRepresentativeIDCountObject({ TagID : TagID,SalesRepresentativeID : SalesRepresentativeID,Search : Search}, Callback);
    },

	GetGridByTagIDSalesRepresentativeIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDSalesRepresentativeIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSalesRepresentativeIDCount.onValidationError))
					LeadsAdmin.GetGridByTagIDSalesRepresentativeIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDSalesRepresentativeIDCount", 
					Params : { TagID : oObject.TagID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search}, 
					Serialize : LeadsAdmin.GetGridByTagIDSalesRepresentativeIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSalesRepresentativeIDCount.onErrorReceived) ? LeadsAdmin.GetGridByTagIDSalesRepresentativeIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDSalesRepresentativeIDCount", { TagID : oObject.TagID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search}, LeadsAdmin.GetGridByTagIDSalesRepresentativeIDCount.Serialize || {});
    },
	GetGridByTagIDSalesRepresentativeIDHtml : function(TagID, SalesRepresentativeID, Callback) {
        return LeadsAdmin.GetGridByTagIDSalesRepresentativeIDHtmlObject({ TagID : TagID,SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetGridByTagIDSalesRepresentativeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDSalesRepresentativeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSalesRepresentativeIDHtml.onValidationError))
					LeadsAdmin.GetGridByTagIDSalesRepresentativeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDSalesRepresentativeIDHtml", 
					Params : { TagID : oObject.TagID,SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : LeadsAdmin.GetGridByTagIDSalesRepresentativeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSalesRepresentativeIDHtml.onErrorReceived) ? LeadsAdmin.GetGridByTagIDSalesRepresentativeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDSalesRepresentativeIDHtml", { TagID : oObject.TagID,SalesRepresentativeID : oObject.SalesRepresentativeID}, LeadsAdmin.GetGridByTagIDSalesRepresentativeIDHtml.Serialize || {});
    },
	GetGridByTagIDSalesRepresentativeIDHtml : function(TagID, SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridByTagIDSalesRepresentativeIDHtmlObject({ TagID : TagID,SalesRepresentativeID : SalesRepresentativeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByTagIDSalesRepresentativeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDSalesRepresentativeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSalesRepresentativeIDHtml.onValidationError))
					LeadsAdmin.GetGridByTagIDSalesRepresentativeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDSalesRepresentativeIDHtml", 
					Params : { TagID : oObject.TagID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridByTagIDSalesRepresentativeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSalesRepresentativeIDHtml.onErrorReceived) ? LeadsAdmin.GetGridByTagIDSalesRepresentativeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDSalesRepresentativeIDHtml", { TagID : oObject.TagID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridByTagIDSalesRepresentativeIDHtml.Serialize || {});
    },
	GetGridByTagIDStatusID : function(TagID, LeadStatusID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridByTagIDStatusIDObject({ TagID : TagID,LeadStatusID : LeadStatusID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByTagIDStatusIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDStatusID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDStatusID.onValidationError))
					LeadsAdmin.GetGridByTagIDStatusID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDStatusID", 
					Params : { TagID : oObject.TagID,LeadStatusID : oObject.LeadStatusID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridByTagIDStatusID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDStatusID.onErrorReceived) ? LeadsAdmin.GetGridByTagIDStatusID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDStatusID", { TagID : oObject.TagID,LeadStatusID : oObject.LeadStatusID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridByTagIDStatusID.Serialize || {});
    },
	GetGridByTagIDStatusID : function(TagID, LeadStatusID, Callback) {
        return LeadsAdmin.GetGridByTagIDStatusIDObject({ TagID : TagID,LeadStatusID : LeadStatusID}, Callback);
    },

	GetGridByTagIDStatusIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDStatusID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDStatusID.onValidationError))
					LeadsAdmin.GetGridByTagIDStatusID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDStatusID", 
					Params : { TagID : oObject.TagID,LeadStatusID : oObject.LeadStatusID}, 
					Serialize : LeadsAdmin.GetGridByTagIDStatusID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDStatusID.onErrorReceived) ? LeadsAdmin.GetGridByTagIDStatusID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDStatusID", { TagID : oObject.TagID,LeadStatusID : oObject.LeadStatusID}, LeadsAdmin.GetGridByTagIDStatusID.Serialize || {});
    },
	GetGridByTagIDStatusIDCount : function(TagID, LeadStatusID, Search, Callback) {
        return LeadsAdmin.GetGridByTagIDStatusIDCountObject({ TagID : TagID,LeadStatusID : LeadStatusID,Search : Search}, Callback);
    },

	GetGridByTagIDStatusIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDStatusIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDStatusIDCount.onValidationError))
					LeadsAdmin.GetGridByTagIDStatusIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDStatusIDCount", 
					Params : { TagID : oObject.TagID,LeadStatusID : oObject.LeadStatusID,Search : oObject.Search}, 
					Serialize : LeadsAdmin.GetGridByTagIDStatusIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDStatusIDCount.onErrorReceived) ? LeadsAdmin.GetGridByTagIDStatusIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDStatusIDCount", { TagID : oObject.TagID,LeadStatusID : oObject.LeadStatusID,Search : oObject.Search}, LeadsAdmin.GetGridByTagIDStatusIDCount.Serialize || {});
    },
	GetGridByTagIDStatusIDHtml : function(TagID, LeadStatusID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridByTagIDStatusIDHtmlObject({ TagID : TagID,LeadStatusID : LeadStatusID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByTagIDStatusIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDStatusIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDStatusIDHtml.onValidationError))
					LeadsAdmin.GetGridByTagIDStatusIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDStatusIDHtml", 
					Params : { TagID : oObject.TagID,LeadStatusID : oObject.LeadStatusID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridByTagIDStatusIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDStatusIDHtml.onErrorReceived) ? LeadsAdmin.GetGridByTagIDStatusIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDStatusIDHtml", { TagID : oObject.TagID,LeadStatusID : oObject.LeadStatusID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridByTagIDStatusIDHtml.Serialize || {});
    },
	GetGridByTagIDStatusIDHtml : function(TagID, LeadStatusID, Callback) {
        return LeadsAdmin.GetGridByTagIDStatusIDHtmlObject({ TagID : TagID,LeadStatusID : LeadStatusID}, Callback);
    },

	GetGridByTagIDStatusIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDStatusIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDStatusIDHtml.onValidationError))
					LeadsAdmin.GetGridByTagIDStatusIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDStatusIDHtml", 
					Params : { TagID : oObject.TagID,LeadStatusID : oObject.LeadStatusID}, 
					Serialize : LeadsAdmin.GetGridByTagIDStatusIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDStatusIDHtml.onErrorReceived) ? LeadsAdmin.GetGridByTagIDStatusIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDStatusIDHtml", { TagID : oObject.TagID,LeadStatusID : oObject.LeadStatusID}, LeadsAdmin.GetGridByTagIDStatusIDHtml.Serialize || {});
    },
	GetGridByTagIDStatusIDSalesRepresentativeID : function(TagID, LeadStatusID, SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDObject({ TagID : TagID,LeadStatusID : LeadStatusID,SalesRepresentativeID : SalesRepresentativeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByTagIDStatusIDSalesRepresentativeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDStatusIDSalesRepresentativeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeID.onValidationError))
					LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDStatusIDSalesRepresentativeID", 
					Params : { TagID : oObject.TagID,LeadStatusID : oObject.LeadStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeID.onErrorReceived) ? LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDStatusIDSalesRepresentativeID", { TagID : oObject.TagID,LeadStatusID : oObject.LeadStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeID.Serialize || {});
    },
	GetGridByTagIDStatusIDSalesRepresentativeID : function(TagID, LeadStatusID, SalesRepresentativeID, Callback) {
        return LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDObject({ TagID : TagID,LeadStatusID : LeadStatusID,SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetGridByTagIDStatusIDSalesRepresentativeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDStatusIDSalesRepresentativeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeID.onValidationError))
					LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDStatusIDSalesRepresentativeID", 
					Params : { TagID : oObject.TagID,LeadStatusID : oObject.LeadStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeID.onErrorReceived) ? LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDStatusIDSalesRepresentativeID", { TagID : oObject.TagID,LeadStatusID : oObject.LeadStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID}, LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeID.Serialize || {});
    },
	GetGridByTagIDStatusIDSalesRepresentativeIDCount : function(TagID, LeadStatusID, SalesRepresentativeID, Search, Callback) {
        return LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDCountObject({ TagID : TagID,LeadStatusID : LeadStatusID,SalesRepresentativeID : SalesRepresentativeID,Search : Search}, Callback);
    },

	GetGridByTagIDStatusIDSalesRepresentativeIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDStatusIDSalesRepresentativeIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDCount.onValidationError))
					LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDStatusIDSalesRepresentativeIDCount", 
					Params : { TagID : oObject.TagID,LeadStatusID : oObject.LeadStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search}, 
					Serialize : LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDCount.onErrorReceived) ? LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDStatusIDSalesRepresentativeIDCount", { TagID : oObject.TagID,LeadStatusID : oObject.LeadStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search}, LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDCount.Serialize || {});
    },
	GetGridByTagIDStatusIDSalesRepresentativeIDHtml : function(TagID, LeadStatusID, SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDHtmlObject({ TagID : TagID,LeadStatusID : LeadStatusID,SalesRepresentativeID : SalesRepresentativeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByTagIDStatusIDSalesRepresentativeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDStatusIDSalesRepresentativeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDHtml.onValidationError))
					LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDStatusIDSalesRepresentativeIDHtml", 
					Params : { TagID : oObject.TagID,LeadStatusID : oObject.LeadStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDHtml.onErrorReceived) ? LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDStatusIDSalesRepresentativeIDHtml", { TagID : oObject.TagID,LeadStatusID : oObject.LeadStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDHtml.Serialize || {});
    },
	GetGridByTagIDStatusIDSalesRepresentativeIDHtml : function(TagID, LeadStatusID, SalesRepresentativeID, Callback) {
        return LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDHtmlObject({ TagID : TagID,LeadStatusID : LeadStatusID,SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetGridByTagIDStatusIDSalesRepresentativeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDStatusIDSalesRepresentativeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDHtml.onValidationError))
					LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDStatusIDSalesRepresentativeIDHtml", 
					Params : { TagID : oObject.TagID,LeadStatusID : oObject.LeadStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDHtml.onErrorReceived) ? LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDStatusIDSalesRepresentativeIDHtml", { TagID : oObject.TagID,LeadStatusID : oObject.LeadStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID}, LeadsAdmin.GetGridByTagIDStatusIDSalesRepresentativeIDHtml.Serialize || {});
    },
	GetGridByTagIDSubStatusID : function(TagID, LeadSubStatusID, Callback) {
        return LeadsAdmin.GetGridByTagIDSubStatusIDObject({ TagID : TagID,LeadSubStatusID : LeadSubStatusID}, Callback);
    },

	GetGridByTagIDSubStatusIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDSubStatusID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSubStatusID.onValidationError))
					LeadsAdmin.GetGridByTagIDSubStatusID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDSubStatusID", 
					Params : { TagID : oObject.TagID,LeadSubStatusID : oObject.LeadSubStatusID}, 
					Serialize : LeadsAdmin.GetGridByTagIDSubStatusID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSubStatusID.onErrorReceived) ? LeadsAdmin.GetGridByTagIDSubStatusID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDSubStatusID", { TagID : oObject.TagID,LeadSubStatusID : oObject.LeadSubStatusID}, LeadsAdmin.GetGridByTagIDSubStatusID.Serialize || {});
    },
	GetGridByTagIDSubStatusID : function(TagID, LeadSubStatusID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridByTagIDSubStatusIDObject({ TagID : TagID,LeadSubStatusID : LeadSubStatusID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByTagIDSubStatusIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDSubStatusID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSubStatusID.onValidationError))
					LeadsAdmin.GetGridByTagIDSubStatusID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDSubStatusID", 
					Params : { TagID : oObject.TagID,LeadSubStatusID : oObject.LeadSubStatusID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridByTagIDSubStatusID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSubStatusID.onErrorReceived) ? LeadsAdmin.GetGridByTagIDSubStatusID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDSubStatusID", { TagID : oObject.TagID,LeadSubStatusID : oObject.LeadSubStatusID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridByTagIDSubStatusID.Serialize || {});
    },
	GetGridByTagIDSubStatusIDCount : function(TagID, LeadSubStatusID, Search, Callback) {
        return LeadsAdmin.GetGridByTagIDSubStatusIDCountObject({ TagID : TagID,LeadSubStatusID : LeadSubStatusID,Search : Search}, Callback);
    },

	GetGridByTagIDSubStatusIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDSubStatusIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSubStatusIDCount.onValidationError))
					LeadsAdmin.GetGridByTagIDSubStatusIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDSubStatusIDCount", 
					Params : { TagID : oObject.TagID,LeadSubStatusID : oObject.LeadSubStatusID,Search : oObject.Search}, 
					Serialize : LeadsAdmin.GetGridByTagIDSubStatusIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSubStatusIDCount.onErrorReceived) ? LeadsAdmin.GetGridByTagIDSubStatusIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDSubStatusIDCount", { TagID : oObject.TagID,LeadSubStatusID : oObject.LeadSubStatusID,Search : oObject.Search}, LeadsAdmin.GetGridByTagIDSubStatusIDCount.Serialize || {});
    },
	GetGridByTagIDSubStatusIDHtml : function(TagID, LeadSubStatusID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridByTagIDSubStatusIDHtmlObject({ TagID : TagID,LeadSubStatusID : LeadSubStatusID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByTagIDSubStatusIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDSubStatusIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSubStatusIDHtml.onValidationError))
					LeadsAdmin.GetGridByTagIDSubStatusIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDSubStatusIDHtml", 
					Params : { TagID : oObject.TagID,LeadSubStatusID : oObject.LeadSubStatusID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridByTagIDSubStatusIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSubStatusIDHtml.onErrorReceived) ? LeadsAdmin.GetGridByTagIDSubStatusIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDSubStatusIDHtml", { TagID : oObject.TagID,LeadSubStatusID : oObject.LeadSubStatusID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridByTagIDSubStatusIDHtml.Serialize || {});
    },
	GetGridByTagIDSubStatusIDHtml : function(TagID, LeadSubStatusID, Callback) {
        return LeadsAdmin.GetGridByTagIDSubStatusIDHtmlObject({ TagID : TagID,LeadSubStatusID : LeadSubStatusID}, Callback);
    },

	GetGridByTagIDSubStatusIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDSubStatusIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSubStatusIDHtml.onValidationError))
					LeadsAdmin.GetGridByTagIDSubStatusIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDSubStatusIDHtml", 
					Params : { TagID : oObject.TagID,LeadSubStatusID : oObject.LeadSubStatusID}, 
					Serialize : LeadsAdmin.GetGridByTagIDSubStatusIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSubStatusIDHtml.onErrorReceived) ? LeadsAdmin.GetGridByTagIDSubStatusIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDSubStatusIDHtml", { TagID : oObject.TagID,LeadSubStatusID : oObject.LeadSubStatusID}, LeadsAdmin.GetGridByTagIDSubStatusIDHtml.Serialize || {});
    },
	GetGridByTagIDSubStatusIDSalesRepresentativeID : function(TagID, LeadSubStatusID, SalesRepresentativeID, Callback) {
        return LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDObject({ TagID : TagID,LeadSubStatusID : LeadSubStatusID,SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetGridByTagIDSubStatusIDSalesRepresentativeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDSubStatusIDSalesRepresentativeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeID.onValidationError))
					LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDSubStatusIDSalesRepresentativeID", 
					Params : { TagID : oObject.TagID,LeadSubStatusID : oObject.LeadSubStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeID.onErrorReceived) ? LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDSubStatusIDSalesRepresentativeID", { TagID : oObject.TagID,LeadSubStatusID : oObject.LeadSubStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID}, LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeID.Serialize || {});
    },
	GetGridByTagIDSubStatusIDSalesRepresentativeID : function(TagID, LeadSubStatusID, SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDObject({ TagID : TagID,LeadSubStatusID : LeadSubStatusID,SalesRepresentativeID : SalesRepresentativeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByTagIDSubStatusIDSalesRepresentativeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDSubStatusIDSalesRepresentativeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeID.onValidationError))
					LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDSubStatusIDSalesRepresentativeID", 
					Params : { TagID : oObject.TagID,LeadSubStatusID : oObject.LeadSubStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeID.onErrorReceived) ? LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDSubStatusIDSalesRepresentativeID", { TagID : oObject.TagID,LeadSubStatusID : oObject.LeadSubStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeID.Serialize || {});
    },
	GetGridByTagIDSubStatusIDSalesRepresentativeIDCount : function(TagID, LeadSubStatusID, SalesRepresentativeID, Search, Callback) {
        return LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDCountObject({ TagID : TagID,LeadSubStatusID : LeadSubStatusID,SalesRepresentativeID : SalesRepresentativeID,Search : Search}, Callback);
    },

	GetGridByTagIDSubStatusIDSalesRepresentativeIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDSubStatusIDSalesRepresentativeIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDCount.onValidationError))
					LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDSubStatusIDSalesRepresentativeIDCount", 
					Params : { TagID : oObject.TagID,LeadSubStatusID : oObject.LeadSubStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search}, 
					Serialize : LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDCount.onErrorReceived) ? LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDSubStatusIDSalesRepresentativeIDCount", { TagID : oObject.TagID,LeadSubStatusID : oObject.LeadSubStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search}, LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDCount.Serialize || {});
    },
	GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml : function(TagID, LeadSubStatusID, SalesRepresentativeID, Callback) {
        return LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDHtmlObject({ TagID : TagID,LeadSubStatusID : LeadSubStatusID,SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetGridByTagIDSubStatusIDSalesRepresentativeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml.onValidationError))
					LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml", 
					Params : { TagID : oObject.TagID,LeadSubStatusID : oObject.LeadSubStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml.onErrorReceived) ? LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml", { TagID : oObject.TagID,LeadSubStatusID : oObject.LeadSubStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID}, LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml.Serialize || {});
    },
	GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml : function(TagID, LeadSubStatusID, SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDHtmlObject({ TagID : TagID,LeadSubStatusID : LeadSubStatusID,SalesRepresentativeID : SalesRepresentativeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByTagIDSubStatusIDSalesRepresentativeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml.onValidationError))
					LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml", 
					Params : { TagID : oObject.TagID,LeadSubStatusID : oObject.LeadSubStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml.onErrorReceived) ? LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml", { TagID : oObject.TagID,LeadSubStatusID : oObject.LeadSubStatusID,SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return LeadsAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridCount.onValidationError))
					LeadsAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : LeadsAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridCount.onErrorReceived) ? LeadsAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridCount", { Search : oObject.Search}, LeadsAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridHtml.onValidationError))
					LeadsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridHtml.onErrorReceived) ? LeadsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return LeadsAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetGridHtml.onValidationError))
					LeadsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : LeadsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetGridHtml.onErrorReceived) ? LeadsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetGridHtml", { }, LeadsAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return LeadsAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetInsert.onValidationError))
					LeadsAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : LeadsAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetInsert.onErrorReceived) ? LeadsAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetInsert", { }, LeadsAdmin.GetInsert.Serialize || {});
    },
	GetMessagesByPhone : function(Phone, Callback) {
        return LeadsAdmin.GetMessagesByPhoneObject({ Phone : Phone}, Callback);
    },

	GetMessagesByPhoneObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetMessagesByPhone)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetMessagesByPhone.onValidationError))
					LeadsAdmin.GetMessagesByPhone.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetMessagesByPhone", 
					Params : { Phone : oObject.Phone}, 
					Serialize : LeadsAdmin.GetMessagesByPhone.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetMessagesByPhone.onErrorReceived) ? LeadsAdmin.GetMessagesByPhone.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetMessagesByPhone", { Phone : oObject.Phone}, LeadsAdmin.GetMessagesByPhone.Serialize || {});
    },
	GetUnassignedGrid : function(Callback) {
        return LeadsAdmin.GetUnassignedGridObject({ }, Callback);
    },

	GetUnassignedGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetUnassignedGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetUnassignedGrid.onValidationError))
					LeadsAdmin.GetUnassignedGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetUnassignedGrid", 
					Params : { }, 
					Serialize : LeadsAdmin.GetUnassignedGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetUnassignedGrid.onErrorReceived) ? LeadsAdmin.GetUnassignedGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetUnassignedGrid", { }, LeadsAdmin.GetUnassignedGrid.Serialize || {});
    },
	GetUnassignedGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetUnassignedGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetUnassignedGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetUnassignedGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetUnassignedGrid.onValidationError))
					LeadsAdmin.GetUnassignedGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetUnassignedGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetUnassignedGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetUnassignedGrid.onErrorReceived) ? LeadsAdmin.GetUnassignedGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetUnassignedGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetUnassignedGrid.Serialize || {});
    },
	GetUnassignedGrid2Count : function(Search, Callback) {
        return LeadsAdmin.GetUnassignedGrid2CountObject({ Search : Search}, Callback);
    },

	GetUnassignedGrid2CountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetUnassignedGrid2Count)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetUnassignedGrid2Count.onValidationError))
					LeadsAdmin.GetUnassignedGrid2Count.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetUnassignedGrid2Count", 
					Params : { Search : oObject.Search}, 
					Serialize : LeadsAdmin.GetUnassignedGrid2Count.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetUnassignedGrid2Count.onErrorReceived) ? LeadsAdmin.GetUnassignedGrid2Count.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetUnassignedGrid2Count", { Search : oObject.Search}, LeadsAdmin.GetUnassignedGrid2Count.Serialize || {});
    },
	GetUnassignedGrid2Html : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetUnassignedGrid2HtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetUnassignedGrid2HtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetUnassignedGrid2Html)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetUnassignedGrid2Html.onValidationError))
					LeadsAdmin.GetUnassignedGrid2Html.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetUnassignedGrid2Html", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetUnassignedGrid2Html.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetUnassignedGrid2Html.onErrorReceived) ? LeadsAdmin.GetUnassignedGrid2Html.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetUnassignedGrid2Html", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetUnassignedGrid2Html.Serialize || {});
    },
	GetUnassignedGridCount : function(Search, Callback) {
        return LeadsAdmin.GetUnassignedGridCountObject({ Search : Search}, Callback);
    },

	GetUnassignedGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetUnassignedGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetUnassignedGridCount.onValidationError))
					LeadsAdmin.GetUnassignedGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetUnassignedGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : LeadsAdmin.GetUnassignedGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetUnassignedGridCount.onErrorReceived) ? LeadsAdmin.GetUnassignedGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetUnassignedGridCount", { Search : oObject.Search}, LeadsAdmin.GetUnassignedGridCount.Serialize || {});
    },
	GetUnassignedGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return LeadsAdmin.GetUnassignedGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetUnassignedGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetUnassignedGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetUnassignedGridHtml.onValidationError))
					LeadsAdmin.GetUnassignedGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetUnassignedGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : LeadsAdmin.GetUnassignedGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetUnassignedGridHtml.onErrorReceived) ? LeadsAdmin.GetUnassignedGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetUnassignedGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, LeadsAdmin.GetUnassignedGridHtml.Serialize || {});
    },
	GetUnassignedGridHtml : function(Callback) {
        return LeadsAdmin.GetUnassignedGridHtmlObject({ }, Callback);
    },

	GetUnassignedGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetUnassignedGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetUnassignedGridHtml.onValidationError))
					LeadsAdmin.GetUnassignedGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetUnassignedGridHtml", 
					Params : { }, 
					Serialize : LeadsAdmin.GetUnassignedGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetUnassignedGridHtml.onErrorReceived) ? LeadsAdmin.GetUnassignedGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetUnassignedGridHtml", { }, LeadsAdmin.GetUnassignedGridHtml.Serialize || {});
    },
	GetUnassignedGridWithSearchCount : function(Search, SearchOptions, Callback) {
        return LeadsAdmin.GetUnassignedGridWithSearchCountObject({ Search : Search,SearchOptions : SearchOptions}, Callback);
    },

	GetUnassignedGridWithSearchCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetUnassignedGridWithSearchCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetUnassignedGridWithSearchCount.onValidationError))
					LeadsAdmin.GetUnassignedGridWithSearchCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetUnassignedGridWithSearchCount", 
					Params : { Search : oObject.Search,SearchOptions : oObject.SearchOptions}, 
					Serialize : LeadsAdmin.GetUnassignedGridWithSearchCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetUnassignedGridWithSearchCount.onErrorReceived) ? LeadsAdmin.GetUnassignedGridWithSearchCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetUnassignedGridWithSearchCount", { Search : oObject.Search,SearchOptions : oObject.SearchOptions}, LeadsAdmin.GetUnassignedGridWithSearchCount.Serialize || {});
    },
	GetUnassignedGridWithSearchHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, SearchOptions, Callback) {
        return LeadsAdmin.GetUnassignedGridWithSearchHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows,SearchOptions : SearchOptions}, Callback);
    },

	GetUnassignedGridWithSearchHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.GetUnassignedGridWithSearchHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.GetUnassignedGridWithSearchHtml.onValidationError))
					LeadsAdmin.GetUnassignedGridWithSearchHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "GetUnassignedGridWithSearchHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows,SearchOptions : oObject.SearchOptions}, 
					Serialize : LeadsAdmin.GetUnassignedGridWithSearchHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.GetUnassignedGridWithSearchHtml.onErrorReceived) ? LeadsAdmin.GetUnassignedGridWithSearchHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "GetUnassignedGridWithSearchHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows,SearchOptions : oObject.SearchOptions}, LeadsAdmin.GetUnassignedGridWithSearchHtml.Serialize || {});
    },
	Initialize : function(Callback) {
        return LeadsAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadsAdmin.Initialize.onValidationError))
					LeadsAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadsAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : LeadsAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadsAdmin.Initialize.onErrorReceived) ? LeadsAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadsAdmin.Url, "Initialize", { }, LeadsAdmin.Initialize.Serialize || {});
    }
};

var LeadsAdminValidators = {
	

	GetDetails : {
			LeadID : LeadsAdminValidatorsFields.LeadID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : LeadsAdminValidatorsFields.Name,
			Value : LeadsAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : LeadsAdminValidatorsFields.Name,
			Value : LeadsAdminValidatorsFields.Value,
			FieldName : LeadsAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : LeadsAdminValidatorsFields.Name,
			Value : LeadsAdminValidatorsFields.Value,
			FieldName : LeadsAdminValidatorsFields.FieldName,
			PreOptions : LeadsAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			LeadID : LeadsAdminValidatorsFields.LeadID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridByCampaignID : {
			CampaignID : LeadsAdminValidatorsFields.CampaignID	
	},

	GetGridByCampaignID : {
			CampaignID : LeadsAdminValidatorsFields.CampaignID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridByCampaignIDCount : {
			CampaignID : LeadsAdminValidatorsFields.CampaignID,
			Search : LeadsAdminValidatorsFields.Search	
	},

	GetGridByCampaignIDHtml : {
			CampaignID : LeadsAdminValidatorsFields.CampaignID	
	},

	GetGridByCampaignIDHtml : {
			CampaignID : LeadsAdminValidatorsFields.CampaignID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridBySalesRepresentativeID : {
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID	
	},

	GetGridBySalesRepresentativeID : {
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridBySalesRepresentativeIDCount : {
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadsAdminValidatorsFields.Search	
	},

	GetGridBySalesRepresentativeIDHtml : {
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridBySalesRepresentativeIDHtml : {
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID	
	},

	GetGridBySourceID : {
			SourceID : LeadsAdminValidatorsFields.SourceID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridBySourceID : {
			SourceID : LeadsAdminValidatorsFields.SourceID	
	},

	GetGridBySourceIDCount : {
			SourceID : LeadsAdminValidatorsFields.SourceID,
			Search : LeadsAdminValidatorsFields.Search	
	},

	GetGridBySourceIDHtml : {
			SourceID : LeadsAdminValidatorsFields.SourceID	
	},

	GetGridBySourceIDHtml : {
			SourceID : LeadsAdminValidatorsFields.SourceID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridByStatusID : {
			LeadStatusID : LeadsAdminValidatorsFields.LeadStatusID	
	},

	GetGridByStatusID : {
			LeadStatusID : LeadsAdminValidatorsFields.LeadStatusID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridByStatusIDCount : {
			LeadStatusID : LeadsAdminValidatorsFields.LeadStatusID,
			Search : LeadsAdminValidatorsFields.Search	
	},

	GetGridByStatusIDHtml : {
			LeadStatusID : LeadsAdminValidatorsFields.LeadStatusID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridByStatusIDHtml : {
			LeadStatusID : LeadsAdminValidatorsFields.LeadStatusID	
	},

	GetGridByStatusIDSalesRepresentativeID : {
			LeadStatusID : LeadsAdminValidatorsFields.LeadStatusID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridByStatusIDSalesRepresentativeID : {
			LeadStatusID : LeadsAdminValidatorsFields.LeadStatusID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID	
	},

	GetGridByStatusIDSalesRepresentativeIDCount : {
			LeadStatusID : LeadsAdminValidatorsFields.LeadStatusID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadsAdminValidatorsFields.Search	
	},

	GetGridByStatusIDSalesRepresentativeIDHtml : {
			LeadStatusID : LeadsAdminValidatorsFields.LeadStatusID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID	
	},

	GetGridByStatusIDSalesRepresentativeIDHtml : {
			LeadStatusID : LeadsAdminValidatorsFields.LeadStatusID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridBySubStatusID : {
			LeadSubStatusID : LeadsAdminValidatorsFields.LeadSubStatusID	
	},

	GetGridBySubStatusID : {
			LeadSubStatusID : LeadsAdminValidatorsFields.LeadSubStatusID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridBySubStatusIDCount : {
			LeadSubStatusID : LeadsAdminValidatorsFields.LeadSubStatusID,
			Search : LeadsAdminValidatorsFields.Search	
	},

	GetGridBySubStatusIDHtml : {
			LeadSubStatusID : LeadsAdminValidatorsFields.LeadSubStatusID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridBySubStatusIDHtml : {
			LeadSubStatusID : LeadsAdminValidatorsFields.LeadSubStatusID	
	},

	GetGridBySubStatusIDSalesRepresentativeID : {
			LeadSubStatusID : LeadsAdminValidatorsFields.LeadSubStatusID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridBySubStatusIDSalesRepresentativeID : {
			LeadSubStatusID : LeadsAdminValidatorsFields.LeadSubStatusID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID	
	},

	GetGridBySubStatusIDSalesRepresentativeIDCount : {
			LeadSubStatusID : LeadsAdminValidatorsFields.LeadSubStatusID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadsAdminValidatorsFields.Search	
	},

	GetGridBySubStatusIDSalesRepresentativeIDHtml : {
			LeadSubStatusID : LeadsAdminValidatorsFields.LeadSubStatusID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID	
	},

	GetGridBySubStatusIDSalesRepresentativeIDHtml : {
			LeadSubStatusID : LeadsAdminValidatorsFields.LeadSubStatusID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridByTagID : {
			TagID : LeadsAdminValidatorsFields.TagID	
	},

	GetGridByTagID : {
			TagID : LeadsAdminValidatorsFields.TagID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridByTagIDCount : {
			TagID : LeadsAdminValidatorsFields.TagID,
			Search : LeadsAdminValidatorsFields.Search	
	},

	GetGridByTagIDHtml : {
			TagID : LeadsAdminValidatorsFields.TagID	
	},

	GetGridByTagIDHtml : {
			TagID : LeadsAdminValidatorsFields.TagID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridByTagIDSalesRepresentativeID : {
			TagID : LeadsAdminValidatorsFields.TagID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID	
	},

	GetGridByTagIDSalesRepresentativeID : {
			TagID : LeadsAdminValidatorsFields.TagID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridByTagIDSalesRepresentativeIDCount : {
			TagID : LeadsAdminValidatorsFields.TagID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadsAdminValidatorsFields.Search	
	},

	GetGridByTagIDSalesRepresentativeIDHtml : {
			TagID : LeadsAdminValidatorsFields.TagID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID	
	},

	GetGridByTagIDSalesRepresentativeIDHtml : {
			TagID : LeadsAdminValidatorsFields.TagID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridByTagIDStatusID : {
			TagID : LeadsAdminValidatorsFields.TagID,
			LeadStatusID : LeadsAdminValidatorsFields.LeadStatusID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridByTagIDStatusID : {
			TagID : LeadsAdminValidatorsFields.TagID,
			LeadStatusID : LeadsAdminValidatorsFields.LeadStatusID	
	},

	GetGridByTagIDStatusIDCount : {
			TagID : LeadsAdminValidatorsFields.TagID,
			LeadStatusID : LeadsAdminValidatorsFields.LeadStatusID,
			Search : LeadsAdminValidatorsFields.Search	
	},

	GetGridByTagIDStatusIDHtml : {
			TagID : LeadsAdminValidatorsFields.TagID,
			LeadStatusID : LeadsAdminValidatorsFields.LeadStatusID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridByTagIDStatusIDHtml : {
			TagID : LeadsAdminValidatorsFields.TagID,
			LeadStatusID : LeadsAdminValidatorsFields.LeadStatusID	
	},

	GetGridByTagIDStatusIDSalesRepresentativeID : {
			TagID : LeadsAdminValidatorsFields.TagID,
			LeadStatusID : LeadsAdminValidatorsFields.LeadStatusID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridByTagIDStatusIDSalesRepresentativeID : {
			TagID : LeadsAdminValidatorsFields.TagID,
			LeadStatusID : LeadsAdminValidatorsFields.LeadStatusID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID	
	},

	GetGridByTagIDStatusIDSalesRepresentativeIDCount : {
			TagID : LeadsAdminValidatorsFields.TagID,
			LeadStatusID : LeadsAdminValidatorsFields.LeadStatusID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadsAdminValidatorsFields.Search	
	},

	GetGridByTagIDStatusIDSalesRepresentativeIDHtml : {
			TagID : LeadsAdminValidatorsFields.TagID,
			LeadStatusID : LeadsAdminValidatorsFields.LeadStatusID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridByTagIDStatusIDSalesRepresentativeIDHtml : {
			TagID : LeadsAdminValidatorsFields.TagID,
			LeadStatusID : LeadsAdminValidatorsFields.LeadStatusID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID	
	},

	GetGridByTagIDSubStatusID : {
			TagID : LeadsAdminValidatorsFields.TagID,
			LeadSubStatusID : LeadsAdminValidatorsFields.LeadSubStatusID	
	},

	GetGridByTagIDSubStatusID : {
			TagID : LeadsAdminValidatorsFields.TagID,
			LeadSubStatusID : LeadsAdminValidatorsFields.LeadSubStatusID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridByTagIDSubStatusIDCount : {
			TagID : LeadsAdminValidatorsFields.TagID,
			LeadSubStatusID : LeadsAdminValidatorsFields.LeadSubStatusID,
			Search : LeadsAdminValidatorsFields.Search	
	},

	GetGridByTagIDSubStatusIDHtml : {
			TagID : LeadsAdminValidatorsFields.TagID,
			LeadSubStatusID : LeadsAdminValidatorsFields.LeadSubStatusID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridByTagIDSubStatusIDHtml : {
			TagID : LeadsAdminValidatorsFields.TagID,
			LeadSubStatusID : LeadsAdminValidatorsFields.LeadSubStatusID	
	},

	GetGridByTagIDSubStatusIDSalesRepresentativeID : {
			TagID : LeadsAdminValidatorsFields.TagID,
			LeadSubStatusID : LeadsAdminValidatorsFields.LeadSubStatusID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID	
	},

	GetGridByTagIDSubStatusIDSalesRepresentativeID : {
			TagID : LeadsAdminValidatorsFields.TagID,
			LeadSubStatusID : LeadsAdminValidatorsFields.LeadSubStatusID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridByTagIDSubStatusIDSalesRepresentativeIDCount : {
			TagID : LeadsAdminValidatorsFields.TagID,
			LeadSubStatusID : LeadsAdminValidatorsFields.LeadSubStatusID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadsAdminValidatorsFields.Search	
	},

	GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml : {
			TagID : LeadsAdminValidatorsFields.TagID,
			LeadSubStatusID : LeadsAdminValidatorsFields.LeadSubStatusID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID	
	},

	GetGridByTagIDSubStatusIDSalesRepresentativeIDHtml : {
			TagID : LeadsAdminValidatorsFields.TagID,
			LeadSubStatusID : LeadsAdminValidatorsFields.LeadSubStatusID,
			SalesRepresentativeID : LeadsAdminValidatorsFields.SalesRepresentativeID,
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : LeadsAdminValidatorsFields.Search	
	},

	GetGridHtml : {
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetGridHtml : {	
	},

	GetInsert : {	
	},

	GetMessagesByPhone : {
			Phone : LeadsAdminValidatorsFields.Phone	
	},

	GetUnassignedGrid : {	
	},

	GetUnassignedGrid : {
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetUnassignedGrid2Count : {
			Search : LeadsAdminValidatorsFields.Search	
	},

	GetUnassignedGrid2Html : {
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetUnassignedGridCount : {
			Search : LeadsAdminValidatorsFields.Search	
	},

	GetUnassignedGridHtml : {
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows	
	},

	GetUnassignedGridHtml : {	
	},

	GetUnassignedGridWithSearchCount : {
			Search : LeadsAdminValidatorsFields.Search,
			SearchOptions : LeadsAdminValidatorsFields.SearchOptions	
	},

	GetUnassignedGridWithSearchHtml : {
			Search : LeadsAdminValidatorsFields.Search,
			SortColumn : LeadsAdminValidatorsFields.SortColumn,
			SortAscending : LeadsAdminValidatorsFields.SortAscending,
			SkipRows : LeadsAdminValidatorsFields.SkipRows,
			NumRows : LeadsAdminValidatorsFields.NumRows,
			SearchOptions : LeadsAdminValidatorsFields.SearchOptions	
	},

	Initialize : {	
	}
};

    