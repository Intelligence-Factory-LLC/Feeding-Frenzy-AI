

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["PageLayoutsAdminValidatorsFields"])) {
	var PageLayoutsAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(PageLayoutsAdminValidatorsFields.FieldName)) {
	PageLayoutsAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(PageLayoutsAdminValidatorsFields.Name)) {
	PageLayoutsAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(PageLayoutsAdminValidatorsFields.NumRows)) {
	PageLayoutsAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(PageLayoutsAdminValidatorsFields.PageLayoutID)) {
	PageLayoutsAdminValidatorsFields.PageLayoutID = {Validators : [Validators.Text], InvalidMessage: "Invalid PageLayoutID"};
}
if (!ObjectUtil.HasValue(PageLayoutsAdminValidatorsFields.PreOptions)) {
	PageLayoutsAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(PageLayoutsAdminValidatorsFields.Search)) {
	PageLayoutsAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(PageLayoutsAdminValidatorsFields.SkipRows)) {
	PageLayoutsAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(PageLayoutsAdminValidatorsFields.SortAscending)) {
	PageLayoutsAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(PageLayoutsAdminValidatorsFields.SortColumn)) {
	PageLayoutsAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(PageLayoutsAdminValidatorsFields.Value)) {
	PageLayoutsAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var PageLayoutsAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.PageLayoutsAdmin.ashx"

	,
	GetDetails : function(PageLayoutID, Callback) {
        return PageLayoutsAdmin.GetDetailsObject({ PageLayoutID : PageLayoutID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayoutsAdmin.GetDetails.onValidationError))
					PageLayoutsAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayoutsAdmin.Url, 
					Method : "GetDetails", 
					Params : { PageLayoutID : oObject.PageLayoutID}, 
					Serialize : PageLayoutsAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayoutsAdmin.GetDetails.onErrorReceived) ? PageLayoutsAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayoutsAdmin.Url, "GetDetails", { PageLayoutID : oObject.PageLayoutID}, PageLayoutsAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return PageLayoutsAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayoutsAdmin.GetDropDown.onValidationError))
					PageLayoutsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayoutsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : PageLayoutsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayoutsAdmin.GetDropDown.onErrorReceived) ? PageLayoutsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayoutsAdmin.Url, "GetDropDown", { }, PageLayoutsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return PageLayoutsAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayoutsAdmin.GetDropDown.onValidationError))
					PageLayoutsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayoutsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : PageLayoutsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayoutsAdmin.GetDropDown.onErrorReceived) ? PageLayoutsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayoutsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, PageLayoutsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return PageLayoutsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayoutsAdmin.GetDropDown.onValidationError))
					PageLayoutsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayoutsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : PageLayoutsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayoutsAdmin.GetDropDown.onErrorReceived) ? PageLayoutsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayoutsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, PageLayoutsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return PageLayoutsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayoutsAdmin.GetDropDown.onValidationError))
					PageLayoutsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayoutsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : PageLayoutsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayoutsAdmin.GetDropDown.onErrorReceived) ? PageLayoutsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayoutsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, PageLayoutsAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(PageLayoutID, Callback) {
        return PageLayoutsAdmin.GetEditObject({ PageLayoutID : PageLayoutID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayoutsAdmin.GetEdit.onValidationError))
					PageLayoutsAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayoutsAdmin.Url, 
					Method : "GetEdit", 
					Params : { PageLayoutID : oObject.PageLayoutID}, 
					Serialize : PageLayoutsAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayoutsAdmin.GetEdit.onErrorReceived) ? PageLayoutsAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayoutsAdmin.Url, "GetEdit", { PageLayoutID : oObject.PageLayoutID}, PageLayoutsAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return PageLayoutsAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayoutsAdmin.GetGrid.onValidationError))
					PageLayoutsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayoutsAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : PageLayoutsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayoutsAdmin.GetGrid.onErrorReceived) ? PageLayoutsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayoutsAdmin.Url, "GetGrid", { }, PageLayoutsAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return PageLayoutsAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayoutsAdmin.GetGrid.onValidationError))
					PageLayoutsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayoutsAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : PageLayoutsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayoutsAdmin.GetGrid.onErrorReceived) ? PageLayoutsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayoutsAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, PageLayoutsAdmin.GetGrid.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return PageLayoutsAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayoutsAdmin.GetGridCount.onValidationError))
					PageLayoutsAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayoutsAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : PageLayoutsAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayoutsAdmin.GetGridCount.onErrorReceived) ? PageLayoutsAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayoutsAdmin.Url, "GetGridCount", { Search : oObject.Search}, PageLayoutsAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return PageLayoutsAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayoutsAdmin.GetGridHtml.onValidationError))
					PageLayoutsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayoutsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : PageLayoutsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayoutsAdmin.GetGridHtml.onErrorReceived) ? PageLayoutsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayoutsAdmin.Url, "GetGridHtml", { }, PageLayoutsAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return PageLayoutsAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayoutsAdmin.GetGridHtml.onValidationError))
					PageLayoutsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayoutsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : PageLayoutsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayoutsAdmin.GetGridHtml.onErrorReceived) ? PageLayoutsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayoutsAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, PageLayoutsAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return PageLayoutsAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayoutsAdmin.GetInsert.onValidationError))
					PageLayoutsAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayoutsAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : PageLayoutsAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayoutsAdmin.GetInsert.onErrorReceived) ? PageLayoutsAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayoutsAdmin.Url, "GetInsert", { }, PageLayoutsAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return PageLayoutsAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, PageLayoutsAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(PageLayoutsAdmin.Initialize.onValidationError))
					PageLayoutsAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: PageLayoutsAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : PageLayoutsAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(PageLayoutsAdmin.Initialize.onErrorReceived) ? PageLayoutsAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(PageLayoutsAdmin.Url, "Initialize", { }, PageLayoutsAdmin.Initialize.Serialize || {});
    }
};

var PageLayoutsAdminValidators = {
	

	GetDetails : {
			PageLayoutID : PageLayoutsAdminValidatorsFields.PageLayoutID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : PageLayoutsAdminValidatorsFields.Name,
			Value : PageLayoutsAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : PageLayoutsAdminValidatorsFields.Name,
			Value : PageLayoutsAdminValidatorsFields.Value,
			FieldName : PageLayoutsAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : PageLayoutsAdminValidatorsFields.Name,
			Value : PageLayoutsAdminValidatorsFields.Value,
			FieldName : PageLayoutsAdminValidatorsFields.FieldName,
			PreOptions : PageLayoutsAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			PageLayoutID : PageLayoutsAdminValidatorsFields.PageLayoutID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : PageLayoutsAdminValidatorsFields.Search,
			SortColumn : PageLayoutsAdminValidatorsFields.SortColumn,
			SortAscending : PageLayoutsAdminValidatorsFields.SortAscending,
			SkipRows : PageLayoutsAdminValidatorsFields.SkipRows,
			NumRows : PageLayoutsAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : PageLayoutsAdminValidatorsFields.Search	
	},

	GetGridHtml : {	
	},

	GetGridHtml : {
			Search : PageLayoutsAdminValidatorsFields.Search,
			SortColumn : PageLayoutsAdminValidatorsFields.SortColumn,
			SortAscending : PageLayoutsAdminValidatorsFields.SortAscending,
			SkipRows : PageLayoutsAdminValidatorsFields.SkipRows,
			NumRows : PageLayoutsAdminValidatorsFields.NumRows	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    