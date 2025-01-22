

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["MessagesAdminValidatorsFields"])) {
	var MessagesAdminValidatorsFields = { };
}

if (!ObjectUtil.HasValue(MessagesAdminValidatorsFields.FieldName)) {
	MessagesAdminValidatorsFields.FieldName = {Validators : [Validators.Text], InvalidMessage: "Invalid FieldName"};
}
if (!ObjectUtil.HasValue(MessagesAdminValidatorsFields.MessageID)) {
	MessagesAdminValidatorsFields.MessageID = {Validators : [Validators.Text], InvalidMessage: "Invalid MessageID"};
}
if (!ObjectUtil.HasValue(MessagesAdminValidatorsFields.Messages)) {
	MessagesAdminValidatorsFields.Messages = {Validators : [Validators.Text], InvalidMessage: "Invalid Messages"};
}
if (!ObjectUtil.HasValue(MessagesAdminValidatorsFields.Name)) {
	MessagesAdminValidatorsFields.Name = {Validators : [Validators.Text], InvalidMessage: "Invalid Name"};
}
if (!ObjectUtil.HasValue(MessagesAdminValidatorsFields.NumRows)) {
	MessagesAdminValidatorsFields.NumRows = {Validators : [Validators.Text], InvalidMessage: "Invalid NumRows"};
}
if (!ObjectUtil.HasValue(MessagesAdminValidatorsFields.PreOptions)) {
	MessagesAdminValidatorsFields.PreOptions = {Validators : [Validators.Text], InvalidMessage: "Invalid PreOptions"};
}
if (!ObjectUtil.HasValue(MessagesAdminValidatorsFields.Search)) {
	MessagesAdminValidatorsFields.Search = {Validators : [Validators.Text], InvalidMessage: "Invalid Search"};
}
if (!ObjectUtil.HasValue(MessagesAdminValidatorsFields.SkipRows)) {
	MessagesAdminValidatorsFields.SkipRows = {Validators : [Validators.Text], InvalidMessage: "Invalid SkipRows"};
}
if (!ObjectUtil.HasValue(MessagesAdminValidatorsFields.SortAscending)) {
	MessagesAdminValidatorsFields.SortAscending = {Validators : [Validators.Text], InvalidMessage: "Invalid SortAscending"};
}
if (!ObjectUtil.HasValue(MessagesAdminValidatorsFields.SortColumn)) {
	MessagesAdminValidatorsFields.SortColumn = {Validators : [Validators.Text], InvalidMessage: "Invalid SortColumn"};
}
if (!ObjectUtil.HasValue(MessagesAdminValidatorsFields.Value)) {
	MessagesAdminValidatorsFields.Value = {Validators : [Validators.Text], InvalidMessage: "Invalid Value"};
}

		
var MessagesAdmin = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.UI.MessagesAdmin.ashx"

	,
	GetDetails : function(MessageID, Callback) {
        return MessagesAdmin.GetDetailsObject({ MessageID : MessageID}, Callback);
    },

	GetDetailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesAdminValidators.GetDetails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(MessagesAdmin.GetDetails.onValidationError))
					MessagesAdmin.GetDetails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: MessagesAdmin.Url, 
					Method : "GetDetails", 
					Params : { MessageID : oObject.MessageID}, 
					Serialize : MessagesAdmin.GetDetails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(MessagesAdmin.GetDetails.onErrorReceived) ? MessagesAdmin.GetDetails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(MessagesAdmin.Url, "GetDetails", { MessageID : oObject.MessageID}, MessagesAdmin.GetDetails.Serialize || {});
    },
	GetDropDown : function(Callback) {
        return MessagesAdmin.GetDropDownObject({ }, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(MessagesAdmin.GetDropDown.onValidationError))
					MessagesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: MessagesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { }, 
					Serialize : MessagesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(MessagesAdmin.GetDropDown.onErrorReceived) ? MessagesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(MessagesAdmin.Url, "GetDropDown", { }, MessagesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, Callback) {
        return MessagesAdmin.GetDropDownObject({ Name : Name,Value : Value}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(MessagesAdmin.GetDropDown.onValidationError))
					MessagesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: MessagesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value}, 
					Serialize : MessagesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(MessagesAdmin.GetDropDown.onErrorReceived) ? MessagesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(MessagesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value}, MessagesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, Callback) {
        return MessagesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(MessagesAdmin.GetDropDown.onValidationError))
					MessagesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: MessagesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, 
					Serialize : MessagesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(MessagesAdmin.GetDropDown.onErrorReceived) ? MessagesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(MessagesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName}, MessagesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDown : function(Name, Value, FieldName, PreOptions, Callback) {
        return MessagesAdmin.GetDropDownObject({ Name : Name,Value : Value,FieldName : FieldName,PreOptions : PreOptions}, Callback);
    },

	GetDropDownObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesAdminValidators.GetDropDown)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(MessagesAdmin.GetDropDown.onValidationError))
					MessagesAdmin.GetDropDown.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: MessagesAdmin.Url, 
					Method : "GetDropDown", 
					Params : { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, 
					Serialize : MessagesAdmin.GetDropDown.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(MessagesAdmin.GetDropDown.onErrorReceived) ? MessagesAdmin.GetDropDown.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(MessagesAdmin.Url, "GetDropDown", { Name : oObject.Name,Value : oObject.Value,FieldName : oObject.FieldName,PreOptions : oObject.PreOptions}, MessagesAdmin.GetDropDown.Serialize || {});
    },
	GetDropDownWithNull : function(Callback) {
        return MessagesAdmin.GetDropDownWithNullObject({ }, Callback);
    },

	GetDropDownWithNullObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesAdminValidators.GetDropDownWithNull)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(MessagesAdmin.GetDropDownWithNull.onValidationError))
					MessagesAdmin.GetDropDownWithNull.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: MessagesAdmin.Url, 
					Method : "GetDropDownWithNull", 
					Params : { }, 
					Serialize : MessagesAdmin.GetDropDownWithNull.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(MessagesAdmin.GetDropDownWithNull.onErrorReceived) ? MessagesAdmin.GetDropDownWithNull.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(MessagesAdmin.Url, "GetDropDownWithNull", { }, MessagesAdmin.GetDropDownWithNull.Serialize || {});
    },
	GetEdit : function(MessageID, Callback) {
        return MessagesAdmin.GetEditObject({ MessageID : MessageID}, Callback);
    },

	GetEditObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesAdminValidators.GetEdit)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(MessagesAdmin.GetEdit.onValidationError))
					MessagesAdmin.GetEdit.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: MessagesAdmin.Url, 
					Method : "GetEdit", 
					Params : { MessageID : oObject.MessageID}, 
					Serialize : MessagesAdmin.GetEdit.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(MessagesAdmin.GetEdit.onErrorReceived) ? MessagesAdmin.GetEdit.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(MessagesAdmin.Url, "GetEdit", { MessageID : oObject.MessageID}, MessagesAdmin.GetEdit.Serialize || {});
    },
	GetGrid : function(Callback) {
        return MessagesAdmin.GetGridObject({ }, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(MessagesAdmin.GetGrid.onValidationError))
					MessagesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: MessagesAdmin.Url, 
					Method : "GetGrid", 
					Params : { }, 
					Serialize : MessagesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(MessagesAdmin.GetGrid.onErrorReceived) ? MessagesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(MessagesAdmin.Url, "GetGrid", { }, MessagesAdmin.GetGrid.Serialize || {});
    },
	GetGrid : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return MessagesAdmin.GetGridObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesAdminValidators.GetGrid)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(MessagesAdmin.GetGrid.onValidationError))
					MessagesAdmin.GetGrid.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: MessagesAdmin.Url, 
					Method : "GetGrid", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : MessagesAdmin.GetGrid.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(MessagesAdmin.GetGrid.onErrorReceived) ? MessagesAdmin.GetGrid.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(MessagesAdmin.Url, "GetGrid", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, MessagesAdmin.GetGrid.Serialize || {});
    },
	GetGridCount : function(Search, Callback) {
        return MessagesAdmin.GetGridCountObject({ Search : Search}, Callback);
    },

	GetGridCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesAdminValidators.GetGridCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(MessagesAdmin.GetGridCount.onValidationError))
					MessagesAdmin.GetGridCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: MessagesAdmin.Url, 
					Method : "GetGridCount", 
					Params : { Search : oObject.Search}, 
					Serialize : MessagesAdmin.GetGridCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(MessagesAdmin.GetGridCount.onErrorReceived) ? MessagesAdmin.GetGridCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(MessagesAdmin.Url, "GetGridCount", { Search : oObject.Search}, MessagesAdmin.GetGridCount.Serialize || {});
    },
	GetGridHtml : function(Callback) {
        return MessagesAdmin.GetGridHtmlObject({ }, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(MessagesAdmin.GetGridHtml.onValidationError))
					MessagesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: MessagesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { }, 
					Serialize : MessagesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(MessagesAdmin.GetGridHtml.onErrorReceived) ? MessagesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(MessagesAdmin.Url, "GetGridHtml", { }, MessagesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtml : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return MessagesAdmin.GetGridHtmlObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetGridHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesAdminValidators.GetGridHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(MessagesAdmin.GetGridHtml.onValidationError))
					MessagesAdmin.GetGridHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: MessagesAdmin.Url, 
					Method : "GetGridHtml", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : MessagesAdmin.GetGridHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(MessagesAdmin.GetGridHtml.onErrorReceived) ? MessagesAdmin.GetGridHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(MessagesAdmin.Url, "GetGridHtml", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, MessagesAdmin.GetGridHtml.Serialize || {});
    },
	GetGridHtmlInternal : function(Messages, Callback) {
        return MessagesAdmin.GetGridHtmlInternalObject({ Messages : Messages}, Callback);
    },

	GetGridHtmlInternalObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesAdminValidators.GetGridHtmlInternal)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(MessagesAdmin.GetGridHtmlInternal.onValidationError))
					MessagesAdmin.GetGridHtmlInternal.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: MessagesAdmin.Url, 
					Method : "GetGridHtmlInternal", 
					Params : { Messages : oObject.Messages}, 
					Serialize : MessagesAdmin.GetGridHtmlInternal.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(MessagesAdmin.GetGridHtmlInternal.onErrorReceived) ? MessagesAdmin.GetGridHtmlInternal.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(MessagesAdmin.Url, "GetGridHtmlInternal", { Messages : oObject.Messages}, MessagesAdmin.GetGridHtmlInternal.Serialize || {});
    },
	GetInsert : function(Callback) {
        return MessagesAdmin.GetInsertObject({ }, Callback);
    },

	GetInsertObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesAdminValidators.GetInsert)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(MessagesAdmin.GetInsert.onValidationError))
					MessagesAdmin.GetInsert.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: MessagesAdmin.Url, 
					Method : "GetInsert", 
					Params : { }, 
					Serialize : MessagesAdmin.GetInsert.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(MessagesAdmin.GetInsert.onErrorReceived) ? MessagesAdmin.GetInsert.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(MessagesAdmin.Url, "GetInsert", { }, MessagesAdmin.GetInsert.Serialize || {});
    },
	Initialize : function(Callback) {
        return MessagesAdmin.InitializeObject({ }, Callback);
    },

	InitializeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, MessagesAdminValidators.Initialize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(MessagesAdmin.Initialize.onValidationError))
					MessagesAdmin.Initialize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: MessagesAdmin.Url, 
					Method : "Initialize", 
					Params : { }, 
					Serialize : MessagesAdmin.Initialize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(MessagesAdmin.Initialize.onErrorReceived) ? MessagesAdmin.Initialize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(MessagesAdmin.Url, "Initialize", { }, MessagesAdmin.Initialize.Serialize || {});
    }
};

var MessagesAdminValidators = {
	

	GetDetails : {
			MessageID : MessagesAdminValidatorsFields.MessageID	
	},

	GetDropDown : {	
	},

	GetDropDown : {
			Name : MessagesAdminValidatorsFields.Name,
			Value : MessagesAdminValidatorsFields.Value	
	},

	GetDropDown : {
			Name : MessagesAdminValidatorsFields.Name,
			Value : MessagesAdminValidatorsFields.Value,
			FieldName : MessagesAdminValidatorsFields.FieldName	
	},

	GetDropDown : {
			Name : MessagesAdminValidatorsFields.Name,
			Value : MessagesAdminValidatorsFields.Value,
			FieldName : MessagesAdminValidatorsFields.FieldName,
			PreOptions : MessagesAdminValidatorsFields.PreOptions	
	},

	GetDropDownWithNull : {	
	},

	GetEdit : {
			MessageID : MessagesAdminValidatorsFields.MessageID	
	},

	GetGrid : {	
	},

	GetGrid : {
			Search : MessagesAdminValidatorsFields.Search,
			SortColumn : MessagesAdminValidatorsFields.SortColumn,
			SortAscending : MessagesAdminValidatorsFields.SortAscending,
			SkipRows : MessagesAdminValidatorsFields.SkipRows,
			NumRows : MessagesAdminValidatorsFields.NumRows	
	},

	GetGridCount : {
			Search : MessagesAdminValidatorsFields.Search	
	},

	GetGridHtml : {	
	},

	GetGridHtml : {
			Search : MessagesAdminValidatorsFields.Search,
			SortColumn : MessagesAdminValidatorsFields.SortColumn,
			SortAscending : MessagesAdminValidatorsFields.SortAscending,
			SkipRows : MessagesAdminValidatorsFields.SkipRows,
			NumRows : MessagesAdminValidatorsFields.NumRows	
	},

	GetGridHtmlInternal : {
			Messages : MessagesAdminValidatorsFields.Messages	
	},

	GetInsert : {	
	},

	Initialize : {	
	}
};

    