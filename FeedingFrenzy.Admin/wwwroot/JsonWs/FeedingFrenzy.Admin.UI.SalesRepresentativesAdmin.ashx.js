

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["SalesRepresentativesAdminValidatorsFields"])) {
	var SalesRepresentativesAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(SalesRepresentativesAdminValidatorsFields.FieldName)) {
	SalesRepresentativesAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(SalesRepresentativesAdminValidatorsFields.Name)) {
	SalesRepresentativesAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(SalesRepresentativesAdminValidatorsFields.NumRows)) {
	SalesRepresentativesAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(SalesRepresentativesAdminValidatorsFields.PreOptions)) {
	SalesRepresentativesAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(SalesRepresentativesAdminValidatorsFields.SalesRepresentativeID)) {
	SalesRepresentativesAdminValidatorsFields.SalesRepresentativeID = {Validators : [Validators.Text], InvalidMessage: "Invalid SalesRepresentativeID"};
}
if (!ObjectUtil.HasValue(SalesRepresentativesAdminValidatorsFields.SalesRepresentativeTypeID)) {
	SalesRepresentativesAdminValidatorsFields.SalesRepresentativeTypeID = {Validators : [Validators.Text], InvalidMessage: "Invalid SalesRepresentativeTypeID"};
}
if (!ObjectUtil.HasValue(SalesRepresentativesAdminValidatorsFields.Search)) {
	SalesRepresentativesAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(SalesRepresentativesAdminValidatorsFields.SkipRows)) {
	SalesRepresentativesAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(SalesRepresentativesAdminValidatorsFields.SortAscending)) {
	SalesRepresentativesAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(SalesRepresentativesAdminValidatorsFields.SortColumn)) {
	SalesRepresentativesAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(SalesRepresentativesAdminValidatorsFields.Value)) {
	SalesRepresentativesAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var SalesRepresentativesAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.SalesRepresentativesAdmin.ashx"

	,
	GetDetails : function(SalesRepresentativeID, Callback) {
        return SalesRepresentativesAdmin.GetDetailsObject({ SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetDetails.onValidationError))
					SalesRepresentativesAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativesAdmin.Url, 
					Method : "GetDetails", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : SalesRepresentativesAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetDetails.onErrorReceived) ? SalesRepresentativesAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativesAdmin.Url, "GetDetails", { SalesRepresentativeID : oObject.SalesRepresentativeID}, SalesRepresentativesAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return SalesRepresentativesAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetDropDown.onValidationError))
					SalesRepresentativesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : SalesRepresentativesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetDropDown.onErrorReceived) ? SalesRepresentativesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativesAdmin.Url, "GetDropDown", { }, SalesRepresentativesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return SalesRepresentativesAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetDropDown.onValidationError))
					SalesRepresentativesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : SalesRepresentativesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetDropDown.onErrorReceived) ? SalesRepresentativesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, SalesRepresentativesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return SalesRepresentativesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetDropDown.onValidationError))
					SalesRepresentativesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : SalesRepresentativesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetDropDown.onErrorReceived) ? SalesRepresentativesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, SalesRepresentativesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return SalesRepresentativesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetDropDown.onValidationError))
					SalesRepresentativesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : SalesRepresentativesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetDropDown.onErrorReceived) ? SalesRepresentativesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, SalesRepresentativesAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(SalesRepresentativeID, Callback) {
        return SalesRepresentativesAdmin.GetEditObject({ SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetEdit.onValidationError))
					SalesRepresentativesAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativesAdmin.Url, 
					Method : "GetEdit", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : SalesRepresentativesAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetEdit.onErrorReceived) ? SalesRepresentativesAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativesAdmin.Url, "GetEdit", { SalesRepresentativeID : oObject.SalesRepresentativeID}, SalesRepresentativesAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return SalesRepresentativesAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetGrid.onValidationError))
					SalesRepresentativesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativesAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : SalesRepresentativesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetGrid.onErrorReceived) ? SalesRepresentativesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativesAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, SalesRepresentativesAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Callback) {
        return SalesRepresentativesAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetGrid.onValidationError))
					SalesRepresentativesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativesAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : SalesRepresentativesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetGrid.onErrorReceived) ? SalesRepresentativesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativesAdmin.Url, "GetGrid", { }, SalesRepresentativesAdmin.GetGrid.Serialize || {});
    },
	GetGridBySalesRepresentativeTypeID : function(SalesRepresentativeTypeID, Callback) {
        return SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDObject({ SalesRepresentativeTypeID : SalesRepresentativeTypeID}, Callback);
    },

	GetGridBySalesRepresentativeTypeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesAdminValidators.GetGridBySalesRepresentativeTypeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeID.onValidationError))
					SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativesAdmin.Url, 
					Method : "GetGridBySalesRepresentativeTypeID", 
					Params : { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID}, 
					Serialize : SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeID.onErrorReceived) ? SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativesAdmin.Url, "GetGridBySalesRepresentativeTypeID", { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID}, SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeID.Serialize || {});
    },
	GetGridBySalesRepresentativeTypeID : function(SalesRepresentativeTypeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDObject({ SalesRepresentativeTypeID : SalesRepresentativeTypeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridBySalesRepresentativeTypeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesAdminValidators.GetGridBySalesRepresentativeTypeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeID.onValidationError))
					SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativesAdmin.Url, 
					Method : "GetGridBySalesRepresentativeTypeID", 
					Params : { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeID.onErrorReceived) ? SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativesAdmin.Url, "GetGridBySalesRepresentativeTypeID", { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeID.Serialize || {});
    },
	GetGridBySalesRepresentativeTypeIDCount : function(SalesRepresentativeTypeID, Search, Callback) {
        return SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDCountObject({ SalesRepresentativeTypeID : SalesRepresentativeTypeID,Search : Search}, Callback);
    },

	GetGridBySalesRepresentativeTypeIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesAdminValidators.GetGridBySalesRepresentativeTypeIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDCount.onValidationError))
					SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativesAdmin.Url, 
					Method : "GetGridBySalesRepresentativeTypeIDCount", 
					Params : { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID,Search : oObject.Search}, 
					Serialize : SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDCount.onErrorReceived) ? SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativesAdmin.Url, "GetGridBySalesRepresentativeTypeIDCount", { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID,Search : oObject.Search}, SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDCount.Serialize || {});
    },
	GetGridBySalesRepresentativeTypeIDHtml : function(SalesRepresentativeTypeID, Callback) {
        return SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDHtmlObject({ SalesRepresentativeTypeID : SalesRepresentativeTypeID}, Callback);
    },

	GetGridBySalesRepresentativeTypeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesAdminValidators.GetGridBySalesRepresentativeTypeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDHtml.onValidationError))
					SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativesAdmin.Url, 
					Method : "GetGridBySalesRepresentativeTypeIDHtml", 
					Params : { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID}, 
					Serialize : SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDHtml.onErrorReceived) ? SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativesAdmin.Url, "GetGridBySalesRepresentativeTypeIDHtml", { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID}, SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDHtml.Serialize || {});
    },
	GetGridBySalesRepresentativeTypeIDHtml : function(SalesRepresentativeTypeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDHtmlObject({ SalesRepresentativeTypeID : SalesRepresentativeTypeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridBySalesRepresentativeTypeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesAdminValidators.GetGridBySalesRepresentativeTypeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDHtml.onValidationError))
					SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativesAdmin.Url, 
					Method : "GetGridBySalesRepresentativeTypeIDHtml", 
					Params : { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDHtml.onErrorReceived) ? SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativesAdmin.Url, "GetGridBySalesRepresentativeTypeIDHtml", { SalesRepresentativeTypeID : oObject.SalesRepresentativeTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, SalesRepresentativesAdmin.GetGridBySalesRepresentativeTypeIDHtml.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return SalesRepresentativesAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetGridCount.onValidationError))
					SalesRepresentativesAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativesAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : SalesRepresentativesAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetGridCount.onErrorReceived) ? SalesRepresentativesAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativesAdmin.Url, "GetGridCount", { Search : oObject.Search}, SalesRepresentativesAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return SalesRepresentativesAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetGridHtml.onValidationError))
					SalesRepresentativesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : SalesRepresentativesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetGridHtml.onErrorReceived) ? SalesRepresentativesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativesAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, SalesRepresentativesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return SalesRepresentativesAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetGridHtml.onValidationError))
					SalesRepresentativesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : SalesRepresentativesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetGridHtml.onErrorReceived) ? SalesRepresentativesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativesAdmin.Url, "GetGridHtml", { }, SalesRepresentativesAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return SalesRepresentativesAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetInsert.onValidationError))
					SalesRepresentativesAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativesAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : SalesRepresentativesAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativesAdmin.GetInsert.onErrorReceived) ? SalesRepresentativesAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativesAdmin.Url, "GetInsert", { }, SalesRepresentativesAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return SalesRepresentativesAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, SalesRepresentativesAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(SalesRepresentativesAdmin.Initialize.onValidationError))
					SalesRepresentativesAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: SalesRepresentativesAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : SalesRepresentativesAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(SalesRepresentativesAdmin.Initialize.onErrorReceived) ? SalesRepresentativesAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(SalesRepresentativesAdmin.Url, "Initialize", { }, SalesRepresentativesAdmin.Initialize.Serialize || {});
    }
};

var SalesRepresentativesAdminValidators = {
	

	GetDetails : {
			SalesRepresentativeID : SalesRepresentativesAdminValidatorsFields.SalesRepresentativeID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : SalesRepresentativesAdminValidatorsFields.Name,
			Value : SalesRepresentativesAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : SalesRepresentativesAdminValidatorsFields.Name,
			Value : SalesRepresentativesAdminValidatorsFields.Value,
			FieldName : SalesRepresentativesAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : SalesRepresentativesAdminValidatorsFields.Name,
			Value : SalesRepresentativesAdminValidatorsFields.Value,
			FieldName : SalesRepresentativesAdminValidatorsFields.FieldName,
			PreOptions : SalesRepresentativesAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			SalesRepresentativeID : SalesRepresentativesAdminValidatorsFields.SalesRepresentativeID	
	},

	GetGrid : {
			Search : SalesRepresentativesAdminValidatorsFields.Search,
			SortColumn : SalesRepresentativesAdminValidatorsFields.SortColumn,
			SortAscending : SalesRepresentativesAdminValidatorsFields.SortAscending,
			SkipRows : SalesRepresentativesAdminValidatorsFields.SkipRows,
			NumRows : SalesRepresentativesAdminValidatorsFields.NumRows	
	},

	GetGrid : {	
	},

	GetGridBySalesRepresentativeTypeID : {
			SalesRepresentativeTypeID : SalesRepresentativesAdminValidatorsFields.SalesRepresentativeTypeID	
	},

	GetGridBySalesRepresentativeTypeID : {
			SalesRepresentativeTypeID : SalesRepresentativesAdminValidatorsFields.SalesRepresentativeTypeID,
			Search : SalesRepresentativesAdminValidatorsFields.Search,
			SortColumn : SalesRepresentativesAdminValidatorsFields.SortColumn,
			SortAscending : SalesRepresentativesAdminValidatorsFields.SortAscending,
			SkipRows : SalesRepresentativesAdminValidatorsFields.SkipRows,
			NumRows : SalesRepresentativesAdminValidatorsFields.NumRows	
	},

	GetGridBySalesRepresentativeTypeIDCount : {
			SalesRepresentativeTypeID : SalesRepresentativesAdminValidatorsFields.SalesRepresentativeTypeID,
			Search : SalesRepresentativesAdminValidatorsFields.Search	
	},

	GetGridBySalesRepresentativeTypeIDHtml : {
			SalesRepresentativeTypeID : SalesRepresentativesAdminValidatorsFields.SalesRepresentativeTypeID	
	},

	GetGridBySalesRepresentativeTypeIDHtml : {
			SalesRepresentativeTypeID : SalesRepresentativesAdminValidatorsFields.SalesRepresentativeTypeID,
			Search : SalesRepresentativesAdminValidatorsFields.Search,
			SortColumn : SalesRepresentativesAdminValidatorsFields.SortColumn,
			SortAscending : SalesRepresentativesAdminValidatorsFields.SortAscending,
			SkipRows : SalesRepresentativesAdminValidatorsFields.SkipRows,
			NumRows : SalesRepresentativesAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : SalesRepresentativesAdminValidatorsFields.Search	
	},

	GetGridHtml : {
			Search : SalesRepresentativesAdminValidatorsFields.Search,
			SortColumn : SalesRepresentativesAdminValidatorsFields.SortColumn,
			SortAscending : SalesRepresentativesAdminValidatorsFields.SortAscending,
			SkipRows : SalesRepresentativesAdminValidatorsFields.SkipRows,
			NumRows : SalesRepresentativesAdminValidatorsFields.NumRows	
	},

	GetGridHtml : {	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    