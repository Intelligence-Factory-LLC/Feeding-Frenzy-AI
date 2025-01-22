

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["FilesAdminValidatorsFields"])) {
	var FilesAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(FilesAdminValidatorsFields.FieldName)) {
	FilesAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(FilesAdminValidatorsFields.FileID)) {
	FilesAdminValidatorsFields.FileID = {Validators : [Validators.Text], InvalidMessage: "Invalid FileID"};
}
if (!ObjectUtil.HasValue(FilesAdminValidatorsFields.Files)) {
	FilesAdminValidatorsFields.Files = {Validators : [Validators.Text], InvalidMessage: "Invalid Files"};
}
if (!ObjectUtil.HasValue(FilesAdminValidatorsFields.FileTypeID)) {
	FilesAdminValidatorsFields.FileTypeID = {Validators : [Validators.Text], InvalidMessage: "Invalid FileTypeID"};
}
if (!ObjectUtil.HasValue(FilesAdminValidatorsFields.Name)) {
	FilesAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(FilesAdminValidatorsFields.NumRows)) {
	FilesAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(FilesAdminValidatorsFields.PreOptions)) {
	FilesAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(FilesAdminValidatorsFields.Search)) {
	FilesAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(FilesAdminValidatorsFields.SkipRows)) {
	FilesAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(FilesAdminValidatorsFields.SortAscending)) {
	FilesAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(FilesAdminValidatorsFields.SortColumn)) {
	FilesAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(FilesAdminValidatorsFields.Value)) {
	FilesAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var FilesAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.FilesAdmin.ashx"

	,
	GetDetails : function(FileID, Callback) {
        return FilesAdmin.GetDetailsObject({ FileID : FileID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FilesAdmin.GetDetails.onValidationError))
					FilesAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FilesAdmin.Url, 
					Method : "GetDetails", 
					Params : { FileID : oObject.FileID}, 
					Serialize : FilesAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FilesAdmin.GetDetails.onErrorReceived) ? FilesAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FilesAdmin.Url, "GetDetails", { FileID : oObject.FileID}, FilesAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return FilesAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FilesAdmin.GetDropDown.onValidationError))
					FilesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FilesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : FilesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FilesAdmin.GetDropDown.onErrorReceived) ? FilesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FilesAdmin.Url, "GetDropDown", { }, FilesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return FilesAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FilesAdmin.GetDropDown.onValidationError))
					FilesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FilesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : FilesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FilesAdmin.GetDropDown.onErrorReceived) ? FilesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FilesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, FilesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return FilesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FilesAdmin.GetDropDown.onValidationError))
					FilesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FilesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : FilesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FilesAdmin.GetDropDown.onErrorReceived) ? FilesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FilesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, FilesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return FilesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FilesAdmin.GetDropDown.onValidationError))
					FilesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FilesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : FilesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FilesAdmin.GetDropDown.onErrorReceived) ? FilesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FilesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, FilesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDownWithNull : function(Callback) {
        return FilesAdmin.GetDropDownWithNullObject({ }, Callback);
    },

	GetDropDownWithNullObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesAdminValidators.GetDropDownWithNull)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FilesAdmin.GetDropDownWithNull.onValidationError))
					FilesAdmin.GetDropDownWithNull.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FilesAdmin.Url, 
					Method : "GetDropDownWithNull", 
					Params : { }, 
					Serialize : FilesAdmin.GetDropDownWithNull.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FilesAdmin.GetDropDownWithNull.onErrorReceived) ? FilesAdmin.GetDropDownWithNull.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FilesAdmin.Url, "GetDropDownWithNull", { }, FilesAdmin.GetDropDownWithNull.Serialize || {});
    },
	GetEdit : function(FileID, Callback) {
        return FilesAdmin.GetEditObject({ FileID : FileID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FilesAdmin.GetEdit.onValidationError))
					FilesAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FilesAdmin.Url, 
					Method : "GetEdit", 
					Params : { FileID : oObject.FileID}, 
					Serialize : FilesAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FilesAdmin.GetEdit.onErrorReceived) ? FilesAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FilesAdmin.Url, "GetEdit", { FileID : oObject.FileID}, FilesAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return FilesAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FilesAdmin.GetGrid.onValidationError))
					FilesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FilesAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : FilesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FilesAdmin.GetGrid.onErrorReceived) ? FilesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FilesAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, FilesAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Callback) {
        return FilesAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FilesAdmin.GetGrid.onValidationError))
					FilesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FilesAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : FilesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FilesAdmin.GetGrid.onErrorReceived) ? FilesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FilesAdmin.Url, "GetGrid", { }, FilesAdmin.GetGrid.Serialize || {});
    },
	GetGridByFileTypeID : function(FileTypeID, Callback) {
        return FilesAdmin.GetGridByFileTypeIDObject({ FileTypeID : FileTypeID}, Callback);
    },

	GetGridByFileTypeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesAdminValidators.GetGridByFileTypeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FilesAdmin.GetGridByFileTypeID.onValidationError))
					FilesAdmin.GetGridByFileTypeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FilesAdmin.Url, 
					Method : "GetGridByFileTypeID", 
					Params : { FileTypeID : oObject.FileTypeID}, 
					Serialize : FilesAdmin.GetGridByFileTypeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FilesAdmin.GetGridByFileTypeID.onErrorReceived) ? FilesAdmin.GetGridByFileTypeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FilesAdmin.Url, "GetGridByFileTypeID", { FileTypeID : oObject.FileTypeID}, FilesAdmin.GetGridByFileTypeID.Serialize || {});
    },
	GetGridByFileTypeID : function(FileTypeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return FilesAdmin.GetGridByFileTypeIDObject({ FileTypeID : FileTypeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByFileTypeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesAdminValidators.GetGridByFileTypeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FilesAdmin.GetGridByFileTypeID.onValidationError))
					FilesAdmin.GetGridByFileTypeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FilesAdmin.Url, 
					Method : "GetGridByFileTypeID", 
					Params : { FileTypeID : oObject.FileTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : FilesAdmin.GetGridByFileTypeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FilesAdmin.GetGridByFileTypeID.onErrorReceived) ? FilesAdmin.GetGridByFileTypeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FilesAdmin.Url, "GetGridByFileTypeID", { FileTypeID : oObject.FileTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, FilesAdmin.GetGridByFileTypeID.Serialize || {});
    },
	GetGridByFileTypeIDCount : function(FileTypeID, Search, Callback) {
        return FilesAdmin.GetGridByFileTypeIDCountObject({ FileTypeID : FileTypeID,Search : Search}, Callback);
    },

	GetGridByFileTypeIDCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesAdminValidators.GetGridByFileTypeIDCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FilesAdmin.GetGridByFileTypeIDCount.onValidationError))
					FilesAdmin.GetGridByFileTypeIDCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FilesAdmin.Url, 
					Method : "GetGridByFileTypeIDCount", 
					Params : { FileTypeID : oObject.FileTypeID,Search : oObject.Search}, 
					Serialize : FilesAdmin.GetGridByFileTypeIDCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FilesAdmin.GetGridByFileTypeIDCount.onErrorReceived) ? FilesAdmin.GetGridByFileTypeIDCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FilesAdmin.Url, "GetGridByFileTypeIDCount", { FileTypeID : oObject.FileTypeID,Search : oObject.Search}, FilesAdmin.GetGridByFileTypeIDCount.Serialize || {});
    },
	GetGridByFileTypeIDHtml : function(FileTypeID, Callback) {
        return FilesAdmin.GetGridByFileTypeIDHtmlObject({ FileTypeID : FileTypeID}, Callback);
    },

	GetGridByFileTypeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesAdminValidators.GetGridByFileTypeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FilesAdmin.GetGridByFileTypeIDHtml.onValidationError))
					FilesAdmin.GetGridByFileTypeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FilesAdmin.Url, 
					Method : "GetGridByFileTypeIDHtml", 
					Params : { FileTypeID : oObject.FileTypeID}, 
					Serialize : FilesAdmin.GetGridByFileTypeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FilesAdmin.GetGridByFileTypeIDHtml.onErrorReceived) ? FilesAdmin.GetGridByFileTypeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FilesAdmin.Url, "GetGridByFileTypeIDHtml", { FileTypeID : oObject.FileTypeID}, FilesAdmin.GetGridByFileTypeIDHtml.Serialize || {});
    },
	GetGridByFileTypeIDHtml : function(FileTypeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return FilesAdmin.GetGridByFileTypeIDHtmlObject({ FileTypeID : FileTypeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridByFileTypeIDHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesAdminValidators.GetGridByFileTypeIDHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FilesAdmin.GetGridByFileTypeIDHtml.onValidationError))
					FilesAdmin.GetGridByFileTypeIDHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FilesAdmin.Url, 
					Method : "GetGridByFileTypeIDHtml", 
					Params : { FileTypeID : oObject.FileTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : FilesAdmin.GetGridByFileTypeIDHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FilesAdmin.GetGridByFileTypeIDHtml.onErrorReceived) ? FilesAdmin.GetGridByFileTypeIDHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FilesAdmin.Url, "GetGridByFileTypeIDHtml", { FileTypeID : oObject.FileTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, FilesAdmin.GetGridByFileTypeIDHtml.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return FilesAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FilesAdmin.GetGridCount.onValidationError))
					FilesAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FilesAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : FilesAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FilesAdmin.GetGridCount.onErrorReceived) ? FilesAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FilesAdmin.Url, "GetGridCount", { Search : oObject.Search}, FilesAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return FilesAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FilesAdmin.GetGridHtml.onValidationError))
					FilesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FilesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : FilesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FilesAdmin.GetGridHtml.onErrorReceived) ? FilesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FilesAdmin.Url, "GetGridHtml", { }, FilesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return FilesAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FilesAdmin.GetGridHtml.onValidationError))
					FilesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FilesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : FilesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FilesAdmin.GetGridHtml.onErrorReceived) ? FilesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FilesAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, FilesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtmlInternal : function(Files, Callback) {
        return FilesAdmin.GetGridHtmlInternalObject({ Files : Files}, Callback);
    },

	GetGridHtmlInternalObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesAdminValidators.GetGridHtmlInternal)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FilesAdmin.GetGridHtmlInternal.onValidationError))
					FilesAdmin.GetGridHtmlInternal.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FilesAdmin.Url, 
					Method : "GetGridHtmlInternal", 
					Params : { Files : oObject.Files}, 
					Serialize : FilesAdmin.GetGridHtmlInternal.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FilesAdmin.GetGridHtmlInternal.onErrorReceived) ? FilesAdmin.GetGridHtmlInternal.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FilesAdmin.Url, "GetGridHtmlInternal", { Files : oObject.Files}, FilesAdmin.GetGridHtmlInternal.Serialize || {});
    },
	GetInsert : function(Callback) {
        return FilesAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FilesAdmin.GetInsert.onValidationError))
					FilesAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FilesAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : FilesAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FilesAdmin.GetInsert.onErrorReceived) ? FilesAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FilesAdmin.Url, "GetInsert", { }, FilesAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return FilesAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FilesAdmin.Initialize.onValidationError))
					FilesAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FilesAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : FilesAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FilesAdmin.Initialize.onErrorReceived) ? FilesAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FilesAdmin.Url, "Initialize", { }, FilesAdmin.Initialize.Serialize || {});
    }
};

var FilesAdminValidators = {
	

	GetDetails : {
			FileID : FilesAdminValidatorsFields.FileID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : FilesAdminValidatorsFields.Name,
			Value : FilesAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : FilesAdminValidatorsFields.Name,
			Value : FilesAdminValidatorsFields.Value,
			FieldName : FilesAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : FilesAdminValidatorsFields.Name,
			Value : FilesAdminValidatorsFields.Value,
			FieldName : FilesAdminValidatorsFields.FieldName,
			PreOptions : FilesAdminValidatorsFields.PreOptions	
	},

	GetDropDownWithNull : {	
	},

	GetEdit : {
			FileID : FilesAdminValidatorsFields.FileID	
	},

	GetGrid : {
			Search : FilesAdminValidatorsFields.Search,
			SortColumn : FilesAdminValidatorsFields.SortColumn,
			SortAscending : FilesAdminValidatorsFields.SortAscending,
			SkipRows : FilesAdminValidatorsFields.SkipRows,
			NumRows : FilesAdminValidatorsFields.NumRows	
	},

	GetGrid : {	
	},

	GetGridByFileTypeID : {
			FileTypeID : FilesAdminValidatorsFields.FileTypeID	
	},

	GetGridByFileTypeID : {
			FileTypeID : FilesAdminValidatorsFields.FileTypeID,
			Search : FilesAdminValidatorsFields.Search,
			SortColumn : FilesAdminValidatorsFields.SortColumn,
			SortAscending : FilesAdminValidatorsFields.SortAscending,
			SkipRows : FilesAdminValidatorsFields.SkipRows,
			NumRows : FilesAdminValidatorsFields.NumRows	
	},

	GetGridByFileTypeIDCount : {
			FileTypeID : FilesAdminValidatorsFields.FileTypeID,
			Search : FilesAdminValidatorsFields.Search	
	},

	GetGridByFileTypeIDHtml : {
			FileTypeID : FilesAdminValidatorsFields.FileTypeID	
	},

	GetGridByFileTypeIDHtml : {
			FileTypeID : FilesAdminValidatorsFields.FileTypeID,
			Search : FilesAdminValidatorsFields.Search,
			SortColumn : FilesAdminValidatorsFields.SortColumn,
			SortAscending : FilesAdminValidatorsFields.SortAscending,
			SkipRows : FilesAdminValidatorsFields.SkipRows,
			NumRows : FilesAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : FilesAdminValidatorsFields.Search	
	},

	GetGridHtml : {	
	},

	GetGridHtml : {
			Search : FilesAdminValidatorsFields.Search,
			SortColumn : FilesAdminValidatorsFields.SortColumn,
			SortAscending : FilesAdminValidatorsFields.SortAscending,
			SkipRows : FilesAdminValidatorsFields.SkipRows,
			NumRows : FilesAdminValidatorsFields.NumRows	
	},

	GetGridHtmlInternal : {
			Files : FilesAdminValidatorsFields.Files	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    