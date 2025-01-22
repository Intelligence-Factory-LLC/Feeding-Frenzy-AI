

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["ContentTypesAdminValidatorsFields"])) {
	var ContentTypesAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(ContentTypesAdminValidatorsFields.ContentTypeID)) {
	ContentTypesAdminValidatorsFields.ContentTypeID = {Validators : [Validators.Text], InvalidMessage: "Invalid ContentTypeID"};
}
if (!ObjectUtil.HasValue(ContentTypesAdminValidatorsFields.ContentTypes)) {
	ContentTypesAdminValidatorsFields.ContentTypes = {Validators : [Validators.Text], InvalidMessage: "Invalid ContentTypes"};
}
if (!ObjectUtil.HasValue(ContentTypesAdminValidatorsFields.FieldName)) {
	ContentTypesAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(ContentTypesAdminValidatorsFields.Name)) {
	ContentTypesAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(ContentTypesAdminValidatorsFields.NumRows)) {
	ContentTypesAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(ContentTypesAdminValidatorsFields.PreOptions)) {
	ContentTypesAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(ContentTypesAdminValidatorsFields.Search)) {
	ContentTypesAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(ContentTypesAdminValidatorsFields.SkipRows)) {
	ContentTypesAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(ContentTypesAdminValidatorsFields.SortAscending)) {
	ContentTypesAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(ContentTypesAdminValidatorsFields.SortColumn)) {
	ContentTypesAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(ContentTypesAdminValidatorsFields.Value)) {
	ContentTypesAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var ContentTypesAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.ContentTypesAdmin.ashx"

	,
	GetDetails : function(ContentTypeID, Callback) {
        return ContentTypesAdmin.GetDetailsObject({ ContentTypeID : ContentTypeID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypesAdmin.GetDetails.onValidationError))
					ContentTypesAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypesAdmin.Url, 
					Method : "GetDetails", 
					Params : { ContentTypeID : oObject.ContentTypeID}, 
					Serialize : ContentTypesAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypesAdmin.GetDetails.onErrorReceived) ? ContentTypesAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypesAdmin.Url, "GetDetails", { ContentTypeID : oObject.ContentTypeID}, ContentTypesAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return ContentTypesAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypesAdmin.GetDropDown.onValidationError))
					ContentTypesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : ContentTypesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypesAdmin.GetDropDown.onErrorReceived) ? ContentTypesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypesAdmin.Url, "GetDropDown", { }, ContentTypesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return ContentTypesAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypesAdmin.GetDropDown.onValidationError))
					ContentTypesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : ContentTypesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypesAdmin.GetDropDown.onErrorReceived) ? ContentTypesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, ContentTypesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return ContentTypesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypesAdmin.GetDropDown.onValidationError))
					ContentTypesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : ContentTypesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypesAdmin.GetDropDown.onErrorReceived) ? ContentTypesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, ContentTypesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return ContentTypesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypesAdmin.GetDropDown.onValidationError))
					ContentTypesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : ContentTypesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypesAdmin.GetDropDown.onErrorReceived) ? ContentTypesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, ContentTypesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDownWithNull : function(Callback) {
        return ContentTypesAdmin.GetDropDownWithNullObject({ }, Callback);
    },

	GetDropDownWithNullObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesAdminValidators.GetDropDownWithNull)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypesAdmin.GetDropDownWithNull.onValidationError))
					ContentTypesAdmin.GetDropDownWithNull.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypesAdmin.Url, 
					Method : "GetDropDownWithNull", 
					Params : { }, 
					Serialize : ContentTypesAdmin.GetDropDownWithNull.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypesAdmin.GetDropDownWithNull.onErrorReceived) ? ContentTypesAdmin.GetDropDownWithNull.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypesAdmin.Url, "GetDropDownWithNull", { }, ContentTypesAdmin.GetDropDownWithNull.Serialize || {});
    },
	GetEdit : function(ContentTypeID, Callback) {
        return ContentTypesAdmin.GetEditObject({ ContentTypeID : ContentTypeID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypesAdmin.GetEdit.onValidationError))
					ContentTypesAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypesAdmin.Url, 
					Method : "GetEdit", 
					Params : { ContentTypeID : oObject.ContentTypeID}, 
					Serialize : ContentTypesAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypesAdmin.GetEdit.onErrorReceived) ? ContentTypesAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypesAdmin.Url, "GetEdit", { ContentTypeID : oObject.ContentTypeID}, ContentTypesAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return ContentTypesAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypesAdmin.GetGrid.onValidationError))
					ContentTypesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypesAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : ContentTypesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypesAdmin.GetGrid.onErrorReceived) ? ContentTypesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypesAdmin.Url, "GetGrid", { }, ContentTypesAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return ContentTypesAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypesAdmin.GetGrid.onValidationError))
					ContentTypesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypesAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : ContentTypesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypesAdmin.GetGrid.onErrorReceived) ? ContentTypesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypesAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, ContentTypesAdmin.GetGrid.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return ContentTypesAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypesAdmin.GetGridCount.onValidationError))
					ContentTypesAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypesAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : ContentTypesAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypesAdmin.GetGridCount.onErrorReceived) ? ContentTypesAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypesAdmin.Url, "GetGridCount", { Search : oObject.Search}, ContentTypesAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return ContentTypesAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypesAdmin.GetGridHtml.onValidationError))
					ContentTypesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : ContentTypesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypesAdmin.GetGridHtml.onErrorReceived) ? ContentTypesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypesAdmin.Url, "GetGridHtml", { }, ContentTypesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return ContentTypesAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypesAdmin.GetGridHtml.onValidationError))
					ContentTypesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : ContentTypesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypesAdmin.GetGridHtml.onErrorReceived) ? ContentTypesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypesAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, ContentTypesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtmlInternal : function(ContentTypes, Callback) {
        return ContentTypesAdmin.GetGridHtmlInternalObject({ ContentTypes : ContentTypes}, Callback);
    },

	GetGridHtmlInternalObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesAdminValidators.GetGridHtmlInternal)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypesAdmin.GetGridHtmlInternal.onValidationError))
					ContentTypesAdmin.GetGridHtmlInternal.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypesAdmin.Url, 
					Method : "GetGridHtmlInternal", 
					Params : { ContentTypes : oObject.ContentTypes}, 
					Serialize : ContentTypesAdmin.GetGridHtmlInternal.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypesAdmin.GetGridHtmlInternal.onErrorReceived) ? ContentTypesAdmin.GetGridHtmlInternal.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypesAdmin.Url, "GetGridHtmlInternal", { ContentTypes : oObject.ContentTypes}, ContentTypesAdmin.GetGridHtmlInternal.Serialize || {});
    },
	GetInsert : function(Callback) {
        return ContentTypesAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypesAdmin.GetInsert.onValidationError))
					ContentTypesAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypesAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : ContentTypesAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypesAdmin.GetInsert.onErrorReceived) ? ContentTypesAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypesAdmin.Url, "GetInsert", { }, ContentTypesAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return ContentTypesAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentTypesAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentTypesAdmin.Initialize.onValidationError))
					ContentTypesAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentTypesAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : ContentTypesAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentTypesAdmin.Initialize.onErrorReceived) ? ContentTypesAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentTypesAdmin.Url, "Initialize", { }, ContentTypesAdmin.Initialize.Serialize || {});
    }
};

var ContentTypesAdminValidators = {
	

	GetDetails : {
			ContentTypeID : ContentTypesAdminValidatorsFields.ContentTypeID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : ContentTypesAdminValidatorsFields.Name,
			Value : ContentTypesAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : ContentTypesAdminValidatorsFields.Name,
			Value : ContentTypesAdminValidatorsFields.Value,
			FieldName : ContentTypesAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : ContentTypesAdminValidatorsFields.Name,
			Value : ContentTypesAdminValidatorsFields.Value,
			FieldName : ContentTypesAdminValidatorsFields.FieldName,
			PreOptions : ContentTypesAdminValidatorsFields.PreOptions	
	},

	GetDropDownWithNull : {	
	},

	GetEdit : {
			ContentTypeID : ContentTypesAdminValidatorsFields.ContentTypeID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : ContentTypesAdminValidatorsFields.Search,
			SortColumn : ContentTypesAdminValidatorsFields.SortColumn,
			SortAscending : ContentTypesAdminValidatorsFields.SortAscending,
			SkipRows : ContentTypesAdminValidatorsFields.SkipRows,
			NumRows : ContentTypesAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : ContentTypesAdminValidatorsFields.Search	
	},

	GetGridHtml : {	
	},

	GetGridHtml : {
			Search : ContentTypesAdminValidatorsFields.Search,
			SortColumn : ContentTypesAdminValidatorsFields.SortColumn,
			SortAscending : ContentTypesAdminValidatorsFields.SortAscending,
			SkipRows : ContentTypesAdminValidatorsFields.SkipRows,
			NumRows : ContentTypesAdminValidatorsFields.NumRows	
	},

	GetGridHtmlInternal : {
			ContentTypes : ContentTypesAdminValidatorsFields.ContentTypes	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    