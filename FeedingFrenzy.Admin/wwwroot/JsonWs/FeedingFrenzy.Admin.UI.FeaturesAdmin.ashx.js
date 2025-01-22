

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["FeaturesAdminValidatorsFields"])) {
	var FeaturesAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(FeaturesAdminValidatorsFields.FeatureID)) {
	FeaturesAdminValidatorsFields.FeatureID = {Validators : [Validators.Text], InvalidMessage: "Invalid FeatureID"};
}
if (!ObjectUtil.HasValue(FeaturesAdminValidatorsFields.Features)) {
	FeaturesAdminValidatorsFields.Features = {Validators : [Validators.Text], InvalidMessage: "Invalid Features"};
}
if (!ObjectUtil.HasValue(FeaturesAdminValidatorsFields.FieldName)) {
	FeaturesAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(FeaturesAdminValidatorsFields.Name)) {
	FeaturesAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(FeaturesAdminValidatorsFields.NumRows)) {
	FeaturesAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(FeaturesAdminValidatorsFields.PreOptions)) {
	FeaturesAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(FeaturesAdminValidatorsFields.Search)) {
	FeaturesAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(FeaturesAdminValidatorsFields.SkipRows)) {
	FeaturesAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(FeaturesAdminValidatorsFields.SortAscending)) {
	FeaturesAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(FeaturesAdminValidatorsFields.SortColumn)) {
	FeaturesAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(FeaturesAdminValidatorsFields.Value)) {
	FeaturesAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var FeaturesAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.FeaturesAdmin.ashx"

	,
	GetDetails : function(FeatureID, Callback) {
        return FeaturesAdmin.GetDetailsObject({ FeatureID : FeatureID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeaturesAdmin.GetDetails.onValidationError))
					FeaturesAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeaturesAdmin.Url, 
					Method : "GetDetails", 
					Params : { FeatureID : oObject.FeatureID}, 
					Serialize : FeaturesAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeaturesAdmin.GetDetails.onErrorReceived) ? FeaturesAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeaturesAdmin.Url, "GetDetails", { FeatureID : oObject.FeatureID}, FeaturesAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return FeaturesAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeaturesAdmin.GetDropDown.onValidationError))
					FeaturesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeaturesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : FeaturesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeaturesAdmin.GetDropDown.onErrorReceived) ? FeaturesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeaturesAdmin.Url, "GetDropDown", { }, FeaturesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return FeaturesAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeaturesAdmin.GetDropDown.onValidationError))
					FeaturesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeaturesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : FeaturesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeaturesAdmin.GetDropDown.onErrorReceived) ? FeaturesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeaturesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, FeaturesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return FeaturesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeaturesAdmin.GetDropDown.onValidationError))
					FeaturesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeaturesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : FeaturesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeaturesAdmin.GetDropDown.onErrorReceived) ? FeaturesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeaturesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, FeaturesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return FeaturesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeaturesAdmin.GetDropDown.onValidationError))
					FeaturesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeaturesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : FeaturesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeaturesAdmin.GetDropDown.onErrorReceived) ? FeaturesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeaturesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, FeaturesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDownWithNull : function(Callback) {
        return FeaturesAdmin.GetDropDownWithNullObject({ }, Callback);
    },

	GetDropDownWithNullObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesAdminValidators.GetDropDownWithNull)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeaturesAdmin.GetDropDownWithNull.onValidationError))
					FeaturesAdmin.GetDropDownWithNull.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeaturesAdmin.Url, 
					Method : "GetDropDownWithNull", 
					Params : { }, 
					Serialize : FeaturesAdmin.GetDropDownWithNull.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeaturesAdmin.GetDropDownWithNull.onErrorReceived) ? FeaturesAdmin.GetDropDownWithNull.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeaturesAdmin.Url, "GetDropDownWithNull", { }, FeaturesAdmin.GetDropDownWithNull.Serialize || {});
    },
	GetEdit : function(FeatureID, Callback) {
        return FeaturesAdmin.GetEditObject({ FeatureID : FeatureID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeaturesAdmin.GetEdit.onValidationError))
					FeaturesAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeaturesAdmin.Url, 
					Method : "GetEdit", 
					Params : { FeatureID : oObject.FeatureID}, 
					Serialize : FeaturesAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeaturesAdmin.GetEdit.onErrorReceived) ? FeaturesAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeaturesAdmin.Url, "GetEdit", { FeatureID : oObject.FeatureID}, FeaturesAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return FeaturesAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeaturesAdmin.GetGrid.onValidationError))
					FeaturesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeaturesAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : FeaturesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeaturesAdmin.GetGrid.onErrorReceived) ? FeaturesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeaturesAdmin.Url, "GetGrid", { }, FeaturesAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return FeaturesAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeaturesAdmin.GetGrid.onValidationError))
					FeaturesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeaturesAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : FeaturesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeaturesAdmin.GetGrid.onErrorReceived) ? FeaturesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeaturesAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, FeaturesAdmin.GetGrid.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return FeaturesAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeaturesAdmin.GetGridCount.onValidationError))
					FeaturesAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeaturesAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : FeaturesAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeaturesAdmin.GetGridCount.onErrorReceived) ? FeaturesAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeaturesAdmin.Url, "GetGridCount", { Search : oObject.Search}, FeaturesAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return FeaturesAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeaturesAdmin.GetGridHtml.onValidationError))
					FeaturesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeaturesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : FeaturesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeaturesAdmin.GetGridHtml.onErrorReceived) ? FeaturesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeaturesAdmin.Url, "GetGridHtml", { }, FeaturesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return FeaturesAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeaturesAdmin.GetGridHtml.onValidationError))
					FeaturesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeaturesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : FeaturesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeaturesAdmin.GetGridHtml.onErrorReceived) ? FeaturesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeaturesAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, FeaturesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtmlInternal : function(Features, Callback) {
        return FeaturesAdmin.GetGridHtmlInternalObject({ Features : Features}, Callback);
    },

	GetGridHtmlInternalObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesAdminValidators.GetGridHtmlInternal)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeaturesAdmin.GetGridHtmlInternal.onValidationError))
					FeaturesAdmin.GetGridHtmlInternal.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeaturesAdmin.Url, 
					Method : "GetGridHtmlInternal", 
					Params : { Features : oObject.Features}, 
					Serialize : FeaturesAdmin.GetGridHtmlInternal.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeaturesAdmin.GetGridHtmlInternal.onErrorReceived) ? FeaturesAdmin.GetGridHtmlInternal.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeaturesAdmin.Url, "GetGridHtmlInternal", { Features : oObject.Features}, FeaturesAdmin.GetGridHtmlInternal.Serialize || {});
    },
	GetInsert : function(Callback) {
        return FeaturesAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeaturesAdmin.GetInsert.onValidationError))
					FeaturesAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeaturesAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : FeaturesAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeaturesAdmin.GetInsert.onErrorReceived) ? FeaturesAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeaturesAdmin.Url, "GetInsert", { }, FeaturesAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return FeaturesAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FeaturesAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FeaturesAdmin.Initialize.onValidationError))
					FeaturesAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FeaturesAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : FeaturesAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FeaturesAdmin.Initialize.onErrorReceived) ? FeaturesAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FeaturesAdmin.Url, "Initialize", { }, FeaturesAdmin.Initialize.Serialize || {});
    }
};

var FeaturesAdminValidators = {
	

	GetDetails : {
			FeatureID : FeaturesAdminValidatorsFields.FeatureID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : FeaturesAdminValidatorsFields.Name,
			Value : FeaturesAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : FeaturesAdminValidatorsFields.Name,
			Value : FeaturesAdminValidatorsFields.Value,
			FieldName : FeaturesAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : FeaturesAdminValidatorsFields.Name,
			Value : FeaturesAdminValidatorsFields.Value,
			FieldName : FeaturesAdminValidatorsFields.FieldName,
			PreOptions : FeaturesAdminValidatorsFields.PreOptions	
	},

	GetDropDownWithNull : {	
	},

	GetEdit : {
			FeatureID : FeaturesAdminValidatorsFields.FeatureID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : FeaturesAdminValidatorsFields.Search,
			SortColumn : FeaturesAdminValidatorsFields.SortColumn,
			SortAscending : FeaturesAdminValidatorsFields.SortAscending,
			SkipRows : FeaturesAdminValidatorsFields.SkipRows,
			NumRows : FeaturesAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : FeaturesAdminValidatorsFields.Search	
	},

	GetGridHtml : {	
	},

	GetGridHtml : {
			Search : FeaturesAdminValidatorsFields.Search,
			SortColumn : FeaturesAdminValidatorsFields.SortColumn,
			SortAscending : FeaturesAdminValidatorsFields.SortAscending,
			SkipRows : FeaturesAdminValidatorsFields.SkipRows,
			NumRows : FeaturesAdminValidatorsFields.NumRows	
	},

	GetGridHtmlInternal : {
			Features : FeaturesAdminValidatorsFields.Features	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    