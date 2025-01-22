

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["ContentsAdminValidatorsFields"])) {
	var ContentsAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(ContentsAdminValidatorsFields.ContentID)) {
	ContentsAdminValidatorsFields.ContentID = {Validators : [Validators.Text], InvalidMessage: "Invalid ContentID"};
}
if (!ObjectUtil.HasValue(ContentsAdminValidatorsFields.Contents)) {
	ContentsAdminValidatorsFields.Contents = {Validators : [Validators.Text], InvalidMessage: "Invalid Contents"};
}
if (!ObjectUtil.HasValue(ContentsAdminValidatorsFields.ContentTypeID)) {
	ContentsAdminValidatorsFields.ContentTypeID = {Validators : [Validators.Text], InvalidMessage: "Invalid ContentTypeID"};
}
if (!ObjectUtil.HasValue(ContentsAdminValidatorsFields.FieldName)) {
	ContentsAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(ContentsAdminValidatorsFields.Name)) {
	ContentsAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(ContentsAdminValidatorsFields.NumRows)) {
	ContentsAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(ContentsAdminValidatorsFields.PreOptions)) {
	ContentsAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(ContentsAdminValidatorsFields.Search)) {
	ContentsAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(ContentsAdminValidatorsFields.SkipRows)) {
	ContentsAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(ContentsAdminValidatorsFields.SortAscending)) {
	ContentsAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(ContentsAdminValidatorsFields.SortColumn)) {
	ContentsAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(ContentsAdminValidatorsFields.Value)) {
	ContentsAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var ContentsAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.ContentsAdmin.ashx"

	,
	GetDetails : function(ContentID, Callback) {
        return ContentsAdmin.GetDetailsObject({ ContentID : ContentID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentsAdmin.GetDetails.onValidationError))
					ContentsAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentsAdmin.Url, 
					Method : "GetDetails", 
					Params : { ContentID : oObject.ContentID}, 
					Serialize : ContentsAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentsAdmin.GetDetails.onErrorReceived) ? ContentsAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentsAdmin.Url, "GetDetails", { ContentID : oObject.ContentID}, ContentsAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return ContentsAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentsAdmin.GetDropDown.onValidationError))
					ContentsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : ContentsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentsAdmin.GetDropDown.onErrorReceived) ? ContentsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentsAdmin.Url, "GetDropDown", { }, ContentsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return ContentsAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentsAdmin.GetDropDown.onValidationError))
					ContentsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : ContentsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentsAdmin.GetDropDown.onErrorReceived) ? ContentsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, ContentsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return ContentsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentsAdmin.GetDropDown.onValidationError))
					ContentsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : ContentsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentsAdmin.GetDropDown.onErrorReceived) ? ContentsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, ContentsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return ContentsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentsAdmin.GetDropDown.onValidationError))
					ContentsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : ContentsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentsAdmin.GetDropDown.onErrorReceived) ? ContentsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, ContentsAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(ContentID, Callback) {
        return ContentsAdmin.GetEditObject({ ContentID : ContentID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentsAdmin.GetEdit.onValidationError))
					ContentsAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentsAdmin.Url, 
					Method : "GetEdit", 
					Params : { ContentID : oObject.ContentID}, 
					Serialize : ContentsAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentsAdmin.GetEdit.onErrorReceived) ? ContentsAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentsAdmin.Url, "GetEdit", { ContentID : oObject.ContentID}, ContentsAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return ContentsAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentsAdmin.GetGrid.onValidationError))
					ContentsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentsAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : ContentsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentsAdmin.GetGrid.onErrorReceived) ? ContentsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentsAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, ContentsAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Callback) {
        return ContentsAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentsAdmin.GetGrid.onValidationError))
					ContentsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentsAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : ContentsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentsAdmin.GetGrid.onErrorReceived) ? ContentsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentsAdmin.Url, "GetGrid", { }, ContentsAdmin.GetGrid.Serialize || {});
    },
	GetGridByContentTypeID : function(ContentTypeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return ContentsAdmin.GetGridByContentTypeIDObject({ ContentTypeID : ContentTypeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByContentTypeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsAdminValidators.GetGridByContentTypeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentsAdmin.GetGridByContentTypeID.onValidationError))
					ContentsAdmin.GetGridByContentTypeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentsAdmin.Url, 
					Method : "GetGridByContentTypeID", 
					Params : { ContentTypeID : oObject.ContentTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : ContentsAdmin.GetGridByContentTypeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentsAdmin.GetGridByContentTypeID.onErrorReceived) ? ContentsAdmin.GetGridByContentTypeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentsAdmin.Url, "GetGridByContentTypeID", { ContentTypeID : oObject.ContentTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, ContentsAdmin.GetGridByContentTypeID.Serialize || {});
    },
	GetGridByContentTypeID : function(ContentTypeID, Callback) {
        return ContentsAdmin.GetGridByContentTypeIDObject({ ContentTypeID : ContentTypeID}, Callback);
    },

	GetGridByContentTypeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsAdminValidators.GetGridByContentTypeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentsAdmin.GetGridByContentTypeID.onValidationError))
					ContentsAdmin.GetGridByContentTypeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentsAdmin.Url, 
					Method : "GetGridByContentTypeID", 
					Params : { ContentTypeID : oObject.ContentTypeID}, 
					Serialize : ContentsAdmin.GetGridByContentTypeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentsAdmin.GetGridByContentTypeID.onErrorReceived) ? ContentsAdmin.GetGridByContentTypeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentsAdmin.Url, "GetGridByContentTypeID", { ContentTypeID : oObject.ContentTypeID}, ContentsAdmin.GetGridByContentTypeID.Serialize || {});
    },
	GetGridByContentTypeIDCount : function(ContentTypeID, Search, Callback) {
        return ContentsAdmin.GetGridByContentTypeIDCountObject({ ContentTypeID : ContentTypeID,Search : Search}, Callback);
    },

	GetGridByContentTypeIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsAdminValidators.GetGridByContentTypeIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentsAdmin.GetGridByContentTypeIDCount.onValidationError))
					ContentsAdmin.GetGridByContentTypeIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentsAdmin.Url, 
					Method : "GetGridByContentTypeIDCount", 
					Params : { ContentTypeID : oObject.ContentTypeID,Search : oObject.Search}, 
					Serialize : ContentsAdmin.GetGridByContentTypeIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentsAdmin.GetGridByContentTypeIDCount.onErrorReceived) ? ContentsAdmin.GetGridByContentTypeIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentsAdmin.Url, "GetGridByContentTypeIDCount", { ContentTypeID : oObject.ContentTypeID,Search : oObject.Search}, ContentsAdmin.GetGridByContentTypeIDCount.Serialize || {});
    },
	GetGridByContentTypeIDHtml : function(ContentTypeID, Callback) {
        return ContentsAdmin.GetGridByContentTypeIDHtmlObject({ ContentTypeID : ContentTypeID}, Callback);
    },

	GetGridByContentTypeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsAdminValidators.GetGridByContentTypeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentsAdmin.GetGridByContentTypeIDHtml.onValidationError))
					ContentsAdmin.GetGridByContentTypeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentsAdmin.Url, 
					Method : "GetGridByContentTypeIDHtml", 
					Params : { ContentTypeID : oObject.ContentTypeID}, 
					Serialize : ContentsAdmin.GetGridByContentTypeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentsAdmin.GetGridByContentTypeIDHtml.onErrorReceived) ? ContentsAdmin.GetGridByContentTypeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentsAdmin.Url, "GetGridByContentTypeIDHtml", { ContentTypeID : oObject.ContentTypeID}, ContentsAdmin.GetGridByContentTypeIDHtml.Serialize || {});
    },
	GetGridByContentTypeIDHtml : function(ContentTypeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return ContentsAdmin.GetGridByContentTypeIDHtmlObject({ ContentTypeID : ContentTypeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByContentTypeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsAdminValidators.GetGridByContentTypeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentsAdmin.GetGridByContentTypeIDHtml.onValidationError))
					ContentsAdmin.GetGridByContentTypeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentsAdmin.Url, 
					Method : "GetGridByContentTypeIDHtml", 
					Params : { ContentTypeID : oObject.ContentTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : ContentsAdmin.GetGridByContentTypeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentsAdmin.GetGridByContentTypeIDHtml.onErrorReceived) ? ContentsAdmin.GetGridByContentTypeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentsAdmin.Url, "GetGridByContentTypeIDHtml", { ContentTypeID : oObject.ContentTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, ContentsAdmin.GetGridByContentTypeIDHtml.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return ContentsAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentsAdmin.GetGridCount.onValidationError))
					ContentsAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentsAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : ContentsAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentsAdmin.GetGridCount.onErrorReceived) ? ContentsAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentsAdmin.Url, "GetGridCount", { Search : oObject.Search}, ContentsAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return ContentsAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentsAdmin.GetGridHtml.onValidationError))
					ContentsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : ContentsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentsAdmin.GetGridHtml.onErrorReceived) ? ContentsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentsAdmin.Url, "GetGridHtml", { }, ContentsAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return ContentsAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentsAdmin.GetGridHtml.onValidationError))
					ContentsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : ContentsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentsAdmin.GetGridHtml.onErrorReceived) ? ContentsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentsAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, ContentsAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtmlInternal : function(Contents, Callback) {
        return ContentsAdmin.GetGridHtmlInternalObject({ Contents : Contents}, Callback);
    },

	GetGridHtmlInternalObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsAdminValidators.GetGridHtmlInternal)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentsAdmin.GetGridHtmlInternal.onValidationError))
					ContentsAdmin.GetGridHtmlInternal.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentsAdmin.Url, 
					Method : "GetGridHtmlInternal", 
					Params : { Contents : oObject.Contents}, 
					Serialize : ContentsAdmin.GetGridHtmlInternal.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentsAdmin.GetGridHtmlInternal.onErrorReceived) ? ContentsAdmin.GetGridHtmlInternal.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentsAdmin.Url, "GetGridHtmlInternal", { Contents : oObject.Contents}, ContentsAdmin.GetGridHtmlInternal.Serialize || {});
    },
	GetInsert : function(Callback) {
        return ContentsAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentsAdmin.GetInsert.onValidationError))
					ContentsAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentsAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : ContentsAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentsAdmin.GetInsert.onErrorReceived) ? ContentsAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentsAdmin.Url, "GetInsert", { }, ContentsAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return ContentsAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, ContentsAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(ContentsAdmin.Initialize.onValidationError))
					ContentsAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: ContentsAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : ContentsAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(ContentsAdmin.Initialize.onErrorReceived) ? ContentsAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(ContentsAdmin.Url, "Initialize", { }, ContentsAdmin.Initialize.Serialize || {});
    }
};

var ContentsAdminValidators = {
	

	GetDetails : {
			ContentID : ContentsAdminValidatorsFields.ContentID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : ContentsAdminValidatorsFields.Name,
			Value : ContentsAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : ContentsAdminValidatorsFields.Name,
			Value : ContentsAdminValidatorsFields.Value,
			FieldName : ContentsAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : ContentsAdminValidatorsFields.Name,
			Value : ContentsAdminValidatorsFields.Value,
			FieldName : ContentsAdminValidatorsFields.FieldName,
			PreOptions : ContentsAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			ContentID : ContentsAdminValidatorsFields.ContentID	
	},

	GetGrid : {
			Search : ContentsAdminValidatorsFields.Search,
			SortColumn : ContentsAdminValidatorsFields.SortColumn,
			SortAscending : ContentsAdminValidatorsFields.SortAscending,
			SkipRows : ContentsAdminValidatorsFields.SkipRows,
			NumRows : ContentsAdminValidatorsFields.NumRows	
	},

	GetGrid : {	
	},

	GetGridByContentTypeID : {
			ContentTypeID : ContentsAdminValidatorsFields.ContentTypeID,
			Search : ContentsAdminValidatorsFields.Search,
			SortColumn : ContentsAdminValidatorsFields.SortColumn,
			SortAscending : ContentsAdminValidatorsFields.SortAscending,
			SkipRows : ContentsAdminValidatorsFields.SkipRows,
			NumRows : ContentsAdminValidatorsFields.NumRows	
	},

	GetGridByContentTypeID : {
			ContentTypeID : ContentsAdminValidatorsFields.ContentTypeID	
	},

	GetGridByContentTypeIDCount : {
			ContentTypeID : ContentsAdminValidatorsFields.ContentTypeID,
			Search : ContentsAdminValidatorsFields.Search	
	},

	GetGridByContentTypeIDHtml : {
			ContentTypeID : ContentsAdminValidatorsFields.ContentTypeID	
	},

	GetGridByContentTypeIDHtml : {
			ContentTypeID : ContentsAdminValidatorsFields.ContentTypeID,
			Search : ContentsAdminValidatorsFields.Search,
			SortColumn : ContentsAdminValidatorsFields.SortColumn,
			SortAscending : ContentsAdminValidatorsFields.SortAscending,
			SkipRows : ContentsAdminValidatorsFields.SkipRows,
			NumRows : ContentsAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : ContentsAdminValidatorsFields.Search	
	},

	GetGridHtml : {	
	},

	GetGridHtml : {
			Search : ContentsAdminValidatorsFields.Search,
			SortColumn : ContentsAdminValidatorsFields.SortColumn,
			SortAscending : ContentsAdminValidatorsFields.SortAscending,
			SkipRows : ContentsAdminValidatorsFields.SkipRows,
			NumRows : ContentsAdminValidatorsFields.NumRows	
	},

	GetGridHtmlInternal : {
			Contents : ContentsAdminValidatorsFields.Contents	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    