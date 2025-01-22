
    	    	
var FilesValidatorsFields = {
	
		Contents : {Validators : [Validators.String], InvalidMessage: "Invalid Contents. " +   ValidatorDescriptions.Length(1, 255) },
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		Extension : {Validators : [Validators.String], InvalidMessage: "Invalid Extension. " +   ValidatorDescriptions.Length(1, 255) },
		FileDescription : {Validators : [Validators.String], InvalidMessage: "Invalid File Description. " +   ValidatorDescriptions.Length(1, 255) },
		FileID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid File ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		FileName : {Validators : [Validators.String], InvalidMessage: "Invalid File Name. " +   ValidatorDescriptions.Length(1, 255) },
		FileType : {Validators : [Validators.String], InvalidMessage: "Invalid FileType. " +   ValidatorDescriptions.Length(1, 255) },
		FileTypeID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid File Type ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		IsDeleted : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Deleted. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		Label : {Validators : [Validators.String], InvalidMessage: "Invalid Label. " +   ValidatorDescriptions.Length(1, 255) },
		PhysicalPath : {Validators : [Validators.String], InvalidMessage: "Invalid Physical Path. " +   ValidatorDescriptions.Length(1, 255) }	
}
			
var Files = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.Files.ashx"

	,
	CopyFile : function(FileID, Callback) {
        return Files.CopyFileObject({ FileID : FileID}, Callback);
    },

	CopyFileObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesValidators.CopyFile)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Files.CopyFile.onValidationError))
					Files.CopyFile.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Files.Url, 
					Method : "CopyFile", 
					Params : { FileID : oObject.FileID}, 
					Serialize : Files.CopyFile.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Files.CopyFile.onErrorReceived) ? Files.CopyFile.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Files.Url, "CopyFile", { FileID : oObject.FileID}, Files.CopyFile.Serialize || {});
    },
	GetDatabaseFileContents : function(FileName, Callback) {
        return Files.GetDatabaseFileContentsObject({ FileName : FileName}, Callback);
    },

	GetDatabaseFileContentsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesValidators.GetDatabaseFileContents)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Files.GetDatabaseFileContents.onValidationError))
					Files.GetDatabaseFileContents.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Files.Url, 
					Method : "GetDatabaseFileContents", 
					Params : { FileName : oObject.FileName}, 
					Serialize : Files.GetDatabaseFileContents.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Files.GetDatabaseFileContents.onErrorReceived) ? Files.GetDatabaseFileContents.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Files.Url, "GetDatabaseFileContents", { FileName : oObject.FileName}, Files.GetDatabaseFileContents.Serialize || {});
    },
	GetFile : function(FileID, Callback) {
        return Files.GetFileObject({ FileID : FileID}, Callback);
    },

	GetFileObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesValidators.GetFile)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Files.GetFile.onValidationError))
					Files.GetFile.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Files.Url, 
					Method : "GetFile", 
					Params : { FileID : oObject.FileID}, 
					Serialize : Files.GetFile.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Files.GetFile.onErrorReceived) ? Files.GetFile.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Files.Url, "GetFile", { FileID : oObject.FileID}, Files.GetFile.Serialize || {});
    },
	GetFiles : function(Callback) {
        return Files.GetFilesObject({ }, Callback);
    },

	GetFilesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesValidators.GetFiles)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Files.GetFiles.onValidationError))
					Files.GetFiles.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Files.Url, 
					Method : "GetFiles", 
					Params : { }, 
					Serialize : Files.GetFiles.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Files.GetFiles.onErrorReceived) ? Files.GetFiles.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Files.Url, "GetFiles", { }, Files.GetFiles.Serialize || {});
    },
	GetFilesByFileTypeID : function(FileTypeID, Callback) {
        return Files.GetFilesByFileTypeIDObject({ FileTypeID : FileTypeID}, Callback);
    },

	GetFilesByFileTypeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesValidators.GetFilesByFileTypeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Files.GetFilesByFileTypeID.onValidationError))
					Files.GetFilesByFileTypeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Files.Url, 
					Method : "GetFilesByFileTypeID", 
					Params : { FileTypeID : oObject.FileTypeID}, 
					Serialize : Files.GetFilesByFileTypeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Files.GetFilesByFileTypeID.onErrorReceived) ? Files.GetFilesByFileTypeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Files.Url, "GetFilesByFileTypeID", { FileTypeID : oObject.FileTypeID}, Files.GetFilesByFileTypeID.Serialize || {});
    },
	GetPhysicalFileAndContents : function(FileID, Callback) {
        return Files.GetPhysicalFileAndContentsObject({ FileID : FileID}, Callback);
    },

	GetPhysicalFileAndContentsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesValidators.GetPhysicalFileAndContents)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Files.GetPhysicalFileAndContents.onValidationError))
					Files.GetPhysicalFileAndContents.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Files.Url, 
					Method : "GetPhysicalFileAndContents", 
					Params : { FileID : oObject.FileID}, 
					Serialize : Files.GetPhysicalFileAndContents.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Files.GetPhysicalFileAndContents.onErrorReceived) ? Files.GetPhysicalFileAndContents.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Files.Url, "GetPhysicalFileAndContents", { FileID : oObject.FileID}, Files.GetPhysicalFileAndContents.Serialize || {});
    },
	GetPhysicalFileContents : function(FileName, Callback) {
        return Files.GetPhysicalFileContentsObject({ FileName : FileName}, Callback);
    },

	GetPhysicalFileContentsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesValidators.GetPhysicalFileContents)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Files.GetPhysicalFileContents.onValidationError))
					Files.GetPhysicalFileContents.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Files.Url, 
					Method : "GetPhysicalFileContents", 
					Params : { FileName : oObject.FileName}, 
					Serialize : Files.GetPhysicalFileContents.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Files.GetPhysicalFileContents.onErrorReceived) ? Files.GetPhysicalFileContents.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Files.Url, "GetPhysicalFileContents", { FileName : oObject.FileName}, Files.GetPhysicalFileContents.Serialize || {});
    },
	InsertFile : function(FileTypeID, PhysicalPath, FileName, FileDescription, Label, Data, IsDeleted, Callback) {
        return Files.InsertFileObject({ FileTypeID : FileTypeID,PhysicalPath : PhysicalPath,FileName : FileName,FileDescription : FileDescription,Label : Label,Data : Data,IsDeleted : IsDeleted}, Callback);
    },

	InsertFileObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesValidators.InsertFile)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Files.InsertFile.onValidationError))
					Files.InsertFile.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Files.Url, 
					Method : "InsertFile", 
					Params : { FileTypeID : oObject.FileTypeID,PhysicalPath : oObject.PhysicalPath,FileName : oObject.FileName,FileDescription : oObject.FileDescription,Label : oObject.Label,Data : oObject.Data,IsDeleted : oObject.IsDeleted}, 
					Serialize : Files.InsertFile.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Files.InsertFile.onErrorReceived) ? Files.InsertFile.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Files.Url, "InsertFile", { FileTypeID : oObject.FileTypeID,PhysicalPath : oObject.PhysicalPath,FileName : oObject.FileName,FileDescription : oObject.FileDescription,Label : oObject.Label,Data : oObject.Data,IsDeleted : oObject.IsDeleted}, Files.InsertFile.Serialize || {});
    },
	InsertOrUpdateDatabaseFile : function(FileType, FileName, FileDescription, Contents, Callback) {
        return Files.InsertOrUpdateDatabaseFileObject({ FileType : FileType,FileName : FileName,FileDescription : FileDescription,Contents : Contents}, Callback);
    },

	InsertOrUpdateDatabaseFileObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesValidators.InsertOrUpdateDatabaseFile)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Files.InsertOrUpdateDatabaseFile.onValidationError))
					Files.InsertOrUpdateDatabaseFile.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Files.Url, 
					Method : "InsertOrUpdateDatabaseFile", 
					Params : { FileType : oObject.FileType,FileName : oObject.FileName,FileDescription : oObject.FileDescription,Contents : oObject.Contents}, 
					Serialize : Files.InsertOrUpdateDatabaseFile.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Files.InsertOrUpdateDatabaseFile.onErrorReceived) ? Files.InsertOrUpdateDatabaseFile.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Files.Url, "InsertOrUpdateDatabaseFile", { FileType : oObject.FileType,FileName : oObject.FileName,FileDescription : oObject.FileDescription,Contents : oObject.Contents}, Files.InsertOrUpdateDatabaseFile.Serialize || {});
    },
	InsertOrUpdatePhysicalFile : function(FileType, FileName, FileDescription, Extension, Contents, Callback) {
        return Files.InsertOrUpdatePhysicalFileObject({ FileType : FileType,FileName : FileName,FileDescription : FileDescription,Extension : Extension,Contents : Contents}, Callback);
    },

	InsertOrUpdatePhysicalFileObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesValidators.InsertOrUpdatePhysicalFile)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Files.InsertOrUpdatePhysicalFile.onValidationError))
					Files.InsertOrUpdatePhysicalFile.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Files.Url, 
					Method : "InsertOrUpdatePhysicalFile", 
					Params : { FileType : oObject.FileType,FileName : oObject.FileName,FileDescription : oObject.FileDescription,Extension : oObject.Extension,Contents : oObject.Contents}, 
					Serialize : Files.InsertOrUpdatePhysicalFile.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Files.InsertOrUpdatePhysicalFile.onErrorReceived) ? Files.InsertOrUpdatePhysicalFile.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Files.Url, "InsertOrUpdatePhysicalFile", { FileType : oObject.FileType,FileName : oObject.FileName,FileDescription : oObject.FileDescription,Extension : oObject.Extension,Contents : oObject.Contents}, Files.InsertOrUpdatePhysicalFile.Serialize || {});
    },
	MarkFileAsDeleted : function(FileID, Callback) {
        return Files.MarkFileAsDeletedObject({ FileID : FileID}, Callback);
    },

	MarkFileAsDeletedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesValidators.MarkFileAsDeleted)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Files.MarkFileAsDeleted.onValidationError))
					Files.MarkFileAsDeleted.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Files.Url, 
					Method : "MarkFileAsDeleted", 
					Params : { FileID : oObject.FileID}, 
					Serialize : Files.MarkFileAsDeleted.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Files.MarkFileAsDeleted.onErrorReceived) ? Files.MarkFileAsDeleted.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Files.Url, "MarkFileAsDeleted", { FileID : oObject.FileID}, Files.MarkFileAsDeleted.Serialize || {});
    },
	MarkFileAsNotDeleted : function(FileID, Callback) {
        return Files.MarkFileAsNotDeletedObject({ FileID : FileID}, Callback);
    },

	MarkFileAsNotDeletedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesValidators.MarkFileAsNotDeleted)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Files.MarkFileAsNotDeleted.onValidationError))
					Files.MarkFileAsNotDeleted.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Files.Url, 
					Method : "MarkFileAsNotDeleted", 
					Params : { FileID : oObject.FileID}, 
					Serialize : Files.MarkFileAsNotDeleted.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Files.MarkFileAsNotDeleted.onErrorReceived) ? Files.MarkFileAsNotDeleted.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Files.Url, "MarkFileAsNotDeleted", { FileID : oObject.FileID}, Files.MarkFileAsNotDeleted.Serialize || {});
    },
	RemoveFile : function(FileID, Callback) {
        return Files.RemoveFileObject({ FileID : FileID}, Callback);
    },

	RemoveFileObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesValidators.RemoveFile)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Files.RemoveFile.onValidationError))
					Files.RemoveFile.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Files.Url, 
					Method : "RemoveFile", 
					Params : { FileID : oObject.FileID}, 
					Serialize : Files.RemoveFile.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Files.RemoveFile.onErrorReceived) ? Files.RemoveFile.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Files.Url, "RemoveFile", { FileID : oObject.FileID}, Files.RemoveFile.Serialize || {});
    },
	UpdateFile : function(FileID, FileTypeID, PhysicalPath, FileName, FileDescription, Label, Data, IsDeleted, Callback) {
        return Files.UpdateFileObject({ FileID : FileID,FileTypeID : FileTypeID,PhysicalPath : PhysicalPath,FileName : FileName,FileDescription : FileDescription,Label : Label,Data : Data,IsDeleted : IsDeleted}, Callback);
    },

	UpdateFileObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesValidators.UpdateFile)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Files.UpdateFile.onValidationError))
					Files.UpdateFile.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Files.Url, 
					Method : "UpdateFile", 
					Params : { FileID : oObject.FileID,FileTypeID : oObject.FileTypeID,PhysicalPath : oObject.PhysicalPath,FileName : oObject.FileName,FileDescription : oObject.FileDescription,Label : oObject.Label,Data : oObject.Data,IsDeleted : oObject.IsDeleted}, 
					Serialize : Files.UpdateFile.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Files.UpdateFile.onErrorReceived) ? Files.UpdateFile.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Files.Url, "UpdateFile", { FileID : oObject.FileID,FileTypeID : oObject.FileTypeID,PhysicalPath : oObject.PhysicalPath,FileName : oObject.FileName,FileDescription : oObject.FileDescription,Label : oObject.Label,Data : oObject.Data,IsDeleted : oObject.IsDeleted}, Files.UpdateFile.Serialize || {});
    },
	UpdateFileData : function(FileID, Data, Callback) {
        return Files.UpdateFileDataObject({ FileID : FileID,Data : Data}, Callback);
    },

	UpdateFileDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, FilesValidators.UpdateFileData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Files.UpdateFileData.onValidationError))
					Files.UpdateFileData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Files.Url, 
					Method : "UpdateFileData", 
					Params : { FileID : oObject.FileID,Data : oObject.Data}, 
					Serialize : Files.UpdateFileData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Files.UpdateFileData.onErrorReceived) ? Files.UpdateFileData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Files.Url, "UpdateFileData", { FileID : oObject.FileID,Data : oObject.Data}, Files.UpdateFileData.Serialize || {});
    }
};

var FilesValidators = {
	

	CopyFile : {
			FileID : FilesValidatorsFields.FileID	
	},

	GetDatabaseFileContents : {
			FileName : FilesValidatorsFields.FileName	
	},

	GetFile : {
			FileID : FilesValidatorsFields.FileID	
	},

	GetFiles : {	
	},

	GetFilesByFileTypeID : {
			FileTypeID : FilesValidatorsFields.FileTypeID	
	},

	GetPhysicalFileAndContents : {
			FileID : FilesValidatorsFields.FileID	
	},

	GetPhysicalFileContents : {
			FileName : FilesValidatorsFields.FileName	
	},

	InsertFile : {
			FileTypeID : FilesValidatorsFields.FileTypeID,
			PhysicalPath : FilesValidatorsFields.PhysicalPath,
			FileName : FilesValidatorsFields.FileName,
			FileDescription : FilesValidatorsFields.FileDescription,
			Label : FilesValidatorsFields.Label,
			Data : FilesValidatorsFields.Data,
			IsDeleted : FilesValidatorsFields.IsDeleted	
	},

	InsertOrUpdateDatabaseFile : {
			FileType : FilesValidatorsFields.FileType,
			FileName : FilesValidatorsFields.FileName,
			FileDescription : FilesValidatorsFields.FileDescription,
			Contents : FilesValidatorsFields.Contents	
	},

	InsertOrUpdatePhysicalFile : {
			FileType : FilesValidatorsFields.FileType,
			FileName : FilesValidatorsFields.FileName,
			FileDescription : FilesValidatorsFields.FileDescription,
			Extension : FilesValidatorsFields.Extension,
			Contents : FilesValidatorsFields.Contents	
	},

	MarkFileAsDeleted : {
			FileID : FilesValidatorsFields.FileID	
	},

	MarkFileAsNotDeleted : {
			FileID : FilesValidatorsFields.FileID	
	},

	RemoveFile : {
			FileID : FilesValidatorsFields.FileID	
	},

	UpdateFile : {
			FileID : FilesValidatorsFields.FileID,
			FileTypeID : FilesValidatorsFields.FileTypeID,
			PhysicalPath : FilesValidatorsFields.PhysicalPath,
			FileName : FilesValidatorsFields.FileName,
			FileDescription : FilesValidatorsFields.FileDescription,
			Label : FilesValidatorsFields.Label,
			Data : FilesValidatorsFields.Data,
			IsDeleted : FilesValidatorsFields.IsDeleted	
	},

	UpdateFileData : {
			FileID : FilesValidatorsFields.FileID,
			Data : FilesValidatorsFields.Data	
	}
};

    