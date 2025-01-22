
    	    	
var FileTypesValidatorsFields = {
	
		AllowedExtensions : {Validators : [Validators.String], InvalidMessage: "Invalid Allowed Extensions. " +   ValidatorDescriptions.Length(1, 255) },
		FileType : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid File Type. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		FileTypeID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid File Type ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() }	
}
			
var FileTypes = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.FileTypes.ashx"

	,
	CopyFileType : function(FileTypeID, Callback) {
        return FileTypes.CopyFileTypeObject({ FileTypeID : FileTypeID}, Callback);
    },

	CopyFileTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FileTypesValidators.CopyFileType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FileTypes.CopyFileType.onValidationError))
					FileTypes.CopyFileType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FileTypes.Url, 
					Method : "CopyFileType", 
					Params : { FileTypeID : oObject.FileTypeID}, 
					Serialize : FileTypes.CopyFileType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FileTypes.CopyFileType.onErrorReceived) ? FileTypes.CopyFileType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FileTypes.Url, "CopyFileType", { FileTypeID : oObject.FileTypeID}, FileTypes.CopyFileType.Serialize || {});
    },
	GetFileType : function(FileTypeID, Callback) {
        return FileTypes.GetFileTypeObject({ FileTypeID : FileTypeID}, Callback);
    },

	GetFileTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FileTypesValidators.GetFileType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FileTypes.GetFileType.onValidationError))
					FileTypes.GetFileType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FileTypes.Url, 
					Method : "GetFileType", 
					Params : { FileTypeID : oObject.FileTypeID}, 
					Serialize : FileTypes.GetFileType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FileTypes.GetFileType.onErrorReceived) ? FileTypes.GetFileType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FileTypes.Url, "GetFileType", { FileTypeID : oObject.FileTypeID}, FileTypes.GetFileType.Serialize || {});
    },
	GetFileTypeByFileType : function(FileType, Callback) {
        return FileTypes.GetFileTypeByFileTypeObject({ FileType : FileType}, Callback);
    },

	GetFileTypeByFileTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FileTypesValidators.GetFileTypeByFileType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FileTypes.GetFileTypeByFileType.onValidationError))
					FileTypes.GetFileTypeByFileType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FileTypes.Url, 
					Method : "GetFileTypeByFileType", 
					Params : { FileType : oObject.FileType}, 
					Serialize : FileTypes.GetFileTypeByFileType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FileTypes.GetFileTypeByFileType.onErrorReceived) ? FileTypes.GetFileTypeByFileType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FileTypes.Url, "GetFileTypeByFileType", { FileType : oObject.FileType}, FileTypes.GetFileTypeByFileType.Serialize || {});
    },
	GetFileTypes : function(Callback) {
        return FileTypes.GetFileTypesObject({ }, Callback);
    },

	GetFileTypesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FileTypesValidators.GetFileTypes)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FileTypes.GetFileTypes.onValidationError))
					FileTypes.GetFileTypes.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FileTypes.Url, 
					Method : "GetFileTypes", 
					Params : { }, 
					Serialize : FileTypes.GetFileTypes.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FileTypes.GetFileTypes.onErrorReceived) ? FileTypes.GetFileTypes.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FileTypes.Url, "GetFileTypes", { }, FileTypes.GetFileTypes.Serialize || {});
    },
	InsertFileType : function(FileType, AllowedExtensions, Callback) {
        return FileTypes.InsertFileTypeObject({ FileType : FileType,AllowedExtensions : AllowedExtensions}, Callback);
    },

	InsertFileTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FileTypesValidators.InsertFileType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FileTypes.InsertFileType.onValidationError))
					FileTypes.InsertFileType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FileTypes.Url, 
					Method : "InsertFileType", 
					Params : { FileType : oObject.FileType,AllowedExtensions : oObject.AllowedExtensions}, 
					Serialize : FileTypes.InsertFileType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FileTypes.InsertFileType.onErrorReceived) ? FileTypes.InsertFileType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FileTypes.Url, "InsertFileType", { FileType : oObject.FileType,AllowedExtensions : oObject.AllowedExtensions}, FileTypes.InsertFileType.Serialize || {});
    },
	RemoveFileType : function(FileTypeID, Callback) {
        return FileTypes.RemoveFileTypeObject({ FileTypeID : FileTypeID}, Callback);
    },

	RemoveFileTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FileTypesValidators.RemoveFileType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FileTypes.RemoveFileType.onValidationError))
					FileTypes.RemoveFileType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FileTypes.Url, 
					Method : "RemoveFileType", 
					Params : { FileTypeID : oObject.FileTypeID}, 
					Serialize : FileTypes.RemoveFileType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FileTypes.RemoveFileType.onErrorReceived) ? FileTypes.RemoveFileType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FileTypes.Url, "RemoveFileType", { FileTypeID : oObject.FileTypeID}, FileTypes.RemoveFileType.Serialize || {});
    },
	UpdateFileType : function(FileTypeID, FileType, AllowedExtensions, Callback) {
        return FileTypes.UpdateFileTypeObject({ FileTypeID : FileTypeID,FileType : FileType,AllowedExtensions : AllowedExtensions}, Callback);
    },

	UpdateFileTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FileTypesValidators.UpdateFileType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(FileTypes.UpdateFileType.onValidationError))
					FileTypes.UpdateFileType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: FileTypes.Url, 
					Method : "UpdateFileType", 
					Params : { FileTypeID : oObject.FileTypeID,FileType : oObject.FileType,AllowedExtensions : oObject.AllowedExtensions}, 
					Serialize : FileTypes.UpdateFileType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(FileTypes.UpdateFileType.onErrorReceived) ? FileTypes.UpdateFileType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(FileTypes.Url, "UpdateFileType", { FileTypeID : oObject.FileTypeID,FileType : oObject.FileType,AllowedExtensions : oObject.AllowedExtensions}, FileTypes.UpdateFileType.Serialize || {});
    }
};

var FileTypesValidators = {
	

	CopyFileType : {
			FileTypeID : FileTypesValidatorsFields.FileTypeID	
	},

	GetFileType : {
			FileTypeID : FileTypesValidatorsFields.FileTypeID	
	},

	GetFileTypeByFileType : {
			FileType : FileTypesValidatorsFields.FileType	
	},

	GetFileTypes : {	
	},

	InsertFileType : {
			FileType : FileTypesValidatorsFields.FileType,
			AllowedExtensions : FileTypesValidatorsFields.AllowedExtensions	
	},

	RemoveFileType : {
			FileTypeID : FileTypesValidatorsFields.FileTypeID	
	},

	UpdateFileType : {
			FileTypeID : FileTypesValidatorsFields.FileTypeID,
			FileType : FileTypesValidatorsFields.FileType,
			AllowedExtensions : FileTypesValidatorsFields.AllowedExtensions	
	}
};

    