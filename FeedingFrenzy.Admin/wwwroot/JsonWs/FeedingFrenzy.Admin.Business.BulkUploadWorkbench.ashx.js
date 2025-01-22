

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["BulkUploadWorkbenchValidatorsFields"])) {
	var BulkUploadWorkbenchValidatorsFields = { };
}

if (!ObjectUtil.HasValue(BulkUploadWorkbenchValidatorsFields.File)) {
	BulkUploadWorkbenchValidatorsFields.File = {Validators : [Validators.Text], InvalidMessage: "Invalid File"};
}
if (!ObjectUtil.HasValue(BulkUploadWorkbenchValidatorsFields.SheetID)) {
	BulkUploadWorkbenchValidatorsFields.SheetID = {Validators : [Validators.Text], InvalidMessage: "Invalid SheetID"};
}
if (!ObjectUtil.HasValue(BulkUploadWorkbenchValidatorsFields.SheetName)) {
	BulkUploadWorkbenchValidatorsFields.SheetName = {Validators : [Validators.Text], InvalidMessage: "Invalid SheetName"};
}

		
var BulkUploadWorkbench = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.BulkUploadWorkbench.ashx"

	,
	GetDataSetFromFile : function(File, Callback) {
        return BulkUploadWorkbench.GetDataSetFromFileObject({ File : File}, Callback);
    },

	GetDataSetFromFileObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BulkUploadWorkbenchValidators.GetDataSetFromFile)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BulkUploadWorkbench.GetDataSetFromFile.onValidationError))
					BulkUploadWorkbench.GetDataSetFromFile.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BulkUploadWorkbench.Url, 
					Method : "GetDataSetFromFile", 
					Params : { File : oObject.File}, 
					Serialize : BulkUploadWorkbench.GetDataSetFromFile.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BulkUploadWorkbench.GetDataSetFromFile.onErrorReceived) ? BulkUploadWorkbench.GetDataSetFromFile.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BulkUploadWorkbench.Url, "GetDataSetFromFile", { File : oObject.File}, BulkUploadWorkbench.GetDataSetFromFile.Serialize || {});
    },
	GetDataSetFromGoogleSheet : function(SheetID, SheetName, Callback) {
        return BulkUploadWorkbench.GetDataSetFromGoogleSheetObject({ SheetID : SheetID,SheetName : SheetName}, Callback);
    },

	GetDataSetFromGoogleSheetObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BulkUploadWorkbenchValidators.GetDataSetFromGoogleSheet)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BulkUploadWorkbench.GetDataSetFromGoogleSheet.onValidationError))
					BulkUploadWorkbench.GetDataSetFromGoogleSheet.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BulkUploadWorkbench.Url, 
					Method : "GetDataSetFromGoogleSheet", 
					Params : { SheetID : oObject.SheetID,SheetName : oObject.SheetName}, 
					Serialize : BulkUploadWorkbench.GetDataSetFromGoogleSheet.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BulkUploadWorkbench.GetDataSetFromGoogleSheet.onErrorReceived) ? BulkUploadWorkbench.GetDataSetFromGoogleSheet.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BulkUploadWorkbench.Url, "GetDataSetFromGoogleSheet", { SheetID : oObject.SheetID,SheetName : oObject.SheetName}, BulkUploadWorkbench.GetDataSetFromGoogleSheet.Serialize || {});
    },
	GetTabsFromGoogleSheet : function(SheetID, Callback) {
        return BulkUploadWorkbench.GetTabsFromGoogleSheetObject({ SheetID : SheetID}, Callback);
    },

	GetTabsFromGoogleSheetObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, BulkUploadWorkbenchValidators.GetTabsFromGoogleSheet)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(BulkUploadWorkbench.GetTabsFromGoogleSheet.onValidationError))
					BulkUploadWorkbench.GetTabsFromGoogleSheet.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: BulkUploadWorkbench.Url, 
					Method : "GetTabsFromGoogleSheet", 
					Params : { SheetID : oObject.SheetID}, 
					Serialize : BulkUploadWorkbench.GetTabsFromGoogleSheet.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(BulkUploadWorkbench.GetTabsFromGoogleSheet.onErrorReceived) ? BulkUploadWorkbench.GetTabsFromGoogleSheet.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(BulkUploadWorkbench.Url, "GetTabsFromGoogleSheet", { SheetID : oObject.SheetID}, BulkUploadWorkbench.GetTabsFromGoogleSheet.Serialize || {});
    }
};

var BulkUploadWorkbenchValidators = {
	

	GetDataSetFromFile : {
			File : BulkUploadWorkbenchValidatorsFields.File	
	},

	GetDataSetFromGoogleSheet : {
			SheetID : BulkUploadWorkbenchValidatorsFields.SheetID,
			SheetName : BulkUploadWorkbenchValidatorsFields.SheetName	
	},

	GetTabsFromGoogleSheet : {
			SheetID : BulkUploadWorkbenchValidatorsFields.SheetID	
	}
};

    