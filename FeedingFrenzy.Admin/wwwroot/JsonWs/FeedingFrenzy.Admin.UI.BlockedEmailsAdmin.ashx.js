

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["BlockedEmailsAdminValidatorsFields"])) {
	var BlockedEmailsAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(BlockedEmailsAdminValidatorsFields.BlockedEmailID)) {
	BlockedEmailsAdminValidatorsFields.BlockedEmailID = {Validators : [Validators.Text], InvalidMessage: "Invalid BlockedEmailID"};
}
if (!ObjectUtil.HasValue(BlockedEmailsAdminValidatorsFields.FieldName)) {
	BlockedEmailsAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(BlockedEmailsAdminValidatorsFields.Name)) {
	BlockedEmailsAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(BlockedEmailsAdminValidatorsFields.NumRows)) {
	BlockedEmailsAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(BlockedEmailsAdminValidatorsFields.PreOptions)) {
	BlockedEmailsAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(BlockedEmailsAdminValidatorsFields.Search)) {
	BlockedEmailsAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(BlockedEmailsAdminValidatorsFields.SkipRows)) {
	BlockedEmailsAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(BlockedEmailsAdminValidatorsFields.SortAscending)) {
	BlockedEmailsAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(BlockedEmailsAdminValidatorsFields.SortColumn)) {
	BlockedEmailsAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(BlockedEmailsAdminValidatorsFields.Value)) {
	BlockedEmailsAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var BlockedEmailsAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.BlockedEmailsAdmin.ashx"

	,
	GetDetails : function(BlockedEmailID, Callback) {
        return BlockedEmailsAdmin.GetDetailsObject({ BlockedEmailID : BlockedEmailID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmailsAdmin.GetDetails.onValidationError))
					BlockedEmailsAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmailsAdmin.Url, 
					Method : "GetDetails", 
					Params : { BlockedEmailID : oObject.BlockedEmailID}, 
					Serialize : BlockedEmailsAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmailsAdmin.GetDetails.onErrorReceived) ? BlockedEmailsAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmailsAdmin.Url, "GetDetails", { BlockedEmailID : oObject.BlockedEmailID}, BlockedEmailsAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return BlockedEmailsAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmailsAdmin.GetDropDown.onValidationError))
					BlockedEmailsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmailsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : BlockedEmailsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmailsAdmin.GetDropDown.onErrorReceived) ? BlockedEmailsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmailsAdmin.Url, "GetDropDown", { }, BlockedEmailsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return BlockedEmailsAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmailsAdmin.GetDropDown.onValidationError))
					BlockedEmailsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmailsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : BlockedEmailsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmailsAdmin.GetDropDown.onErrorReceived) ? BlockedEmailsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmailsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, BlockedEmailsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return BlockedEmailsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmailsAdmin.GetDropDown.onValidationError))
					BlockedEmailsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmailsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : BlockedEmailsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmailsAdmin.GetDropDown.onErrorReceived) ? BlockedEmailsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmailsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, BlockedEmailsAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return BlockedEmailsAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmailsAdmin.GetDropDown.onValidationError))
					BlockedEmailsAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmailsAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : BlockedEmailsAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmailsAdmin.GetDropDown.onErrorReceived) ? BlockedEmailsAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmailsAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, BlockedEmailsAdmin.GetDropDown.Serialize || {});
    },
	GetEdit : function(BlockedEmailID, Callback) {
        return BlockedEmailsAdmin.GetEditObject({ BlockedEmailID : BlockedEmailID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmailsAdmin.GetEdit.onValidationError))
					BlockedEmailsAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmailsAdmin.Url, 
					Method : "GetEdit", 
					Params : { BlockedEmailID : oObject.BlockedEmailID}, 
					Serialize : BlockedEmailsAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmailsAdmin.GetEdit.onErrorReceived) ? BlockedEmailsAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmailsAdmin.Url, "GetEdit", { BlockedEmailID : oObject.BlockedEmailID}, BlockedEmailsAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return BlockedEmailsAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmailsAdmin.GetGrid.onValidationError))
					BlockedEmailsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmailsAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : BlockedEmailsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmailsAdmin.GetGrid.onErrorReceived) ? BlockedEmailsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmailsAdmin.Url, "GetGrid", { }, BlockedEmailsAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return BlockedEmailsAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmailsAdmin.GetGrid.onValidationError))
					BlockedEmailsAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmailsAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : BlockedEmailsAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmailsAdmin.GetGrid.onErrorReceived) ? BlockedEmailsAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmailsAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, BlockedEmailsAdmin.GetGrid.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return BlockedEmailsAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmailsAdmin.GetGridCount.onValidationError))
					BlockedEmailsAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmailsAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : BlockedEmailsAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmailsAdmin.GetGridCount.onErrorReceived) ? BlockedEmailsAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmailsAdmin.Url, "GetGridCount", { Search : oObject.Search}, BlockedEmailsAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return BlockedEmailsAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmailsAdmin.GetGridHtml.onValidationError))
					BlockedEmailsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmailsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : BlockedEmailsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmailsAdmin.GetGridHtml.onErrorReceived) ? BlockedEmailsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmailsAdmin.Url, "GetGridHtml", { }, BlockedEmailsAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return BlockedEmailsAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmailsAdmin.GetGridHtml.onValidationError))
					BlockedEmailsAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmailsAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : BlockedEmailsAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmailsAdmin.GetGridHtml.onErrorReceived) ? BlockedEmailsAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmailsAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, BlockedEmailsAdmin.GetGridHtml.Serialize || {});
    },
	GetInsert : function(Callback) {
        return BlockedEmailsAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmailsAdmin.GetInsert.onValidationError))
					BlockedEmailsAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmailsAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : BlockedEmailsAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmailsAdmin.GetInsert.onErrorReceived) ? BlockedEmailsAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmailsAdmin.Url, "GetInsert", { }, BlockedEmailsAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return BlockedEmailsAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BlockedEmailsAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BlockedEmailsAdmin.Initialize.onValidationError))
					BlockedEmailsAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BlockedEmailsAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : BlockedEmailsAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BlockedEmailsAdmin.Initialize.onErrorReceived) ? BlockedEmailsAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BlockedEmailsAdmin.Url, "Initialize", { }, BlockedEmailsAdmin.Initialize.Serialize || {});
    }
};

var BlockedEmailsAdminValidators = {
	

	GetDetails : {
			BlockedEmailID : BlockedEmailsAdminValidatorsFields.BlockedEmailID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : BlockedEmailsAdminValidatorsFields.Name,
			Value : BlockedEmailsAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : BlockedEmailsAdminValidatorsFields.Name,
			Value : BlockedEmailsAdminValidatorsFields.Value,
			FieldName : BlockedEmailsAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : BlockedEmailsAdminValidatorsFields.Name,
			Value : BlockedEmailsAdminValidatorsFields.Value,
			FieldName : BlockedEmailsAdminValidatorsFields.FieldName,
			PreOptions : BlockedEmailsAdminValidatorsFields.PreOptions	
	},

	GetEdit : {
			BlockedEmailID : BlockedEmailsAdminValidatorsFields.BlockedEmailID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : BlockedEmailsAdminValidatorsFields.Search,
			SortColumn : BlockedEmailsAdminValidatorsFields.SortColumn,
			SortAscending : BlockedEmailsAdminValidatorsFields.SortAscending,
			SkipRows : BlockedEmailsAdminValidatorsFields.SkipRows,
			NumRows : BlockedEmailsAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : BlockedEmailsAdminValidatorsFields.Search	
	},

	GetGridHtml : {	
	},

	GetGridHtml : {
			Search : BlockedEmailsAdminValidatorsFields.Search,
			SortColumn : BlockedEmailsAdminValidatorsFields.SortColumn,
			SortAscending : BlockedEmailsAdminValidatorsFields.SortAscending,
			SkipRows : BlockedEmailsAdminValidatorsFields.SkipRows,
			NumRows : BlockedEmailsAdminValidatorsFields.NumRows	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    