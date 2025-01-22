
    	    	
var RawEmailsValidatorsFields = {
	
		BodyHtml : {Validators : [Validators.Text], InvalidMessage: "Invalid Body Html. " +   ValidatorDescriptions.Length(1, 4000) },
		BodyText : {Validators : [Validators.Text], InvalidMessage: "Invalid Body Text. " +   ValidatorDescriptions.Length(1, 4000) },
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		EmailDate : {Validators : [Validators.Date, Validators.Required], InvalidMessage: "Invalid Email Date. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Date() },
		From : {Validators : [Validators.String], InvalidMessage: "Invalid From. " +   ValidatorDescriptions.Length(1, 255) },
		ImportKey : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Import Key. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		IsProcessed : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Processed. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		iUserID : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid iUserID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		Label : {Validators : [Validators.String], InvalidMessage: "Invalid Label. " +   ValidatorDescriptions.Length(1, 255) },
		NumRows : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid NumRows. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		RawEmailID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Raw Email ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		rowRawEmail : {Validators : [Validators.Object, Validators.Required], InvalidMessage: "Invalid rowRawEmail. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Object() },
		rowUser : {Validators : [Validators.Object, Validators.Required], InvalidMessage: "Invalid rowUser. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Object() },
		Search : {Validators : [Validators.String], InvalidMessage: "Invalid Search. " +   ValidatorDescriptions.Length(1, 255) },
		sEmail : {Validators : [Validators.String], InvalidMessage: "Invalid sEmail. " +   ValidatorDescriptions.Length(1, 255) },
		SkipRows : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid SkipRows. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		SortAscending : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid SortAscending. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		SortColumn : {Validators : [Validators.String], InvalidMessage: "Invalid SortColumn. " +   ValidatorDescriptions.Length(1, 255) },
		strCredentialPath : {Validators : [Validators.String], InvalidMessage: "Invalid strCredentialPath. " +   ValidatorDescriptions.Length(1, 255) },
		strUserKey : {Validators : [Validators.String], InvalidMessage: "Invalid strUserKey. " +   ValidatorDescriptions.Length(1, 255) },
		Subject : {Validators : [Validators.Text], InvalidMessage: "Invalid Subject. " +   ValidatorDescriptions.Length(1, 4000) },
		ThreadID : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Thread ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		To : {Validators : [Validators.String], InvalidMessage: "Invalid To. " +   ValidatorDescriptions.Length(1, 255) },
		UserID : {Validators : [Validators.ID], InvalidMessage: "Invalid User ID. " +   ValidatorDescriptions.ID() }	
}
			
var RawEmails = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.RawEmails.ashx"

	,
	cleanEmail : function(sEmail, Callback) {
        return RawEmails.cleanEmailObject({ sEmail : sEmail}, Callback);
    },

	cleanEmailObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.cleanEmail)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.cleanEmail.onValidationError))
					RawEmails.cleanEmail.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "cleanEmail", 
					Params : { sEmail : oObject.sEmail}, 
					Serialize : RawEmails.cleanEmail.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.cleanEmail.onErrorReceived) ? RawEmails.cleanEmail.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "cleanEmail", { sEmail : oObject.sEmail}, RawEmails.cleanEmail.Serialize || {});
    },
	cleanEmail2 : function(sEmail, Callback) {
        return RawEmails.cleanEmail2Object({ sEmail : sEmail}, Callback);
    },

	cleanEmail2Object : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.cleanEmail2)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.cleanEmail2.onValidationError))
					RawEmails.cleanEmail2.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "cleanEmail2", 
					Params : { sEmail : oObject.sEmail}, 
					Serialize : RawEmails.cleanEmail2.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.cleanEmail2.onErrorReceived) ? RawEmails.cleanEmail2.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "cleanEmail2", { sEmail : oObject.sEmail}, RawEmails.cleanEmail2.Serialize || {});
    },
	CopyRawEmail : function(RawEmailID, Callback) {
        return RawEmails.CopyRawEmailObject({ RawEmailID : RawEmailID}, Callback);
    },

	CopyRawEmailObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.CopyRawEmail)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.CopyRawEmail.onValidationError))
					RawEmails.CopyRawEmail.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "CopyRawEmail", 
					Params : { RawEmailID : oObject.RawEmailID}, 
					Serialize : RawEmails.CopyRawEmail.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.CopyRawEmail.onErrorReceived) ? RawEmails.CopyRawEmail.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "CopyRawEmail", { RawEmailID : oObject.RawEmailID}, RawEmails.CopyRawEmail.Serialize || {});
    },
	DownloadEmailsByUser : function(rowUser, Callback) {
        return RawEmails.DownloadEmailsByUserObject({ rowUser : rowUser}, Callback);
    },

	DownloadEmailsByUserObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.DownloadEmailsByUser)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.DownloadEmailsByUser.onValidationError))
					RawEmails.DownloadEmailsByUser.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "DownloadEmailsByUser", 
					Params : { rowUser : oObject.rowUser}, 
					Serialize : RawEmails.DownloadEmailsByUser.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.DownloadEmailsByUser.onErrorReceived) ? RawEmails.DownloadEmailsByUser.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "DownloadEmailsByUser", { rowUser : oObject.rowUser}, RawEmails.DownloadEmailsByUser.Serialize || {});
    },
	DownloadEmailsFromDBAuth : function(Callback) {
        return RawEmails.DownloadEmailsFromDBAuthObject({ }, Callback);
    },

	DownloadEmailsFromDBAuthObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.DownloadEmailsFromDBAuth)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.DownloadEmailsFromDBAuth.onValidationError))
					RawEmails.DownloadEmailsFromDBAuth.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "DownloadEmailsFromDBAuth", 
					Params : { }, 
					Serialize : RawEmails.DownloadEmailsFromDBAuth.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.DownloadEmailsFromDBAuth.onErrorReceived) ? RawEmails.DownloadEmailsFromDBAuth.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "DownloadEmailsFromDBAuth", { }, RawEmails.DownloadEmailsFromDBAuth.Serialize || {});
    },
	DownloadingQueue2 : function(iUserID, strCredentialPath, strUserKey, Callback) {
        return RawEmails.DownloadingQueue2Object({ iUserID : iUserID,strCredentialPath : strCredentialPath,strUserKey : strUserKey}, Callback);
    },

	DownloadingQueue2Object : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.DownloadingQueue2)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.DownloadingQueue2.onValidationError))
					RawEmails.DownloadingQueue2.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "DownloadingQueue2", 
					Params : { iUserID : oObject.iUserID,strCredentialPath : oObject.strCredentialPath,strUserKey : oObject.strUserKey}, 
					Serialize : RawEmails.DownloadingQueue2.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.DownloadingQueue2.onErrorReceived) ? RawEmails.DownloadingQueue2.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "DownloadingQueue2", { iUserID : oObject.iUserID,strCredentialPath : oObject.strCredentialPath,strUserKey : oObject.strUserKey}, RawEmails.DownloadingQueue2.Serialize || {});
    },
	GetRawEmail : function(RawEmailID, Callback) {
        return RawEmails.GetRawEmailObject({ RawEmailID : RawEmailID}, Callback);
    },

	GetRawEmailObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.GetRawEmail)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.GetRawEmail.onValidationError))
					RawEmails.GetRawEmail.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "GetRawEmail", 
					Params : { RawEmailID : oObject.RawEmailID}, 
					Serialize : RawEmails.GetRawEmail.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.GetRawEmail.onErrorReceived) ? RawEmails.GetRawEmail.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "GetRawEmail", { RawEmailID : oObject.RawEmailID}, RawEmails.GetRawEmail.Serialize || {});
    },
	GetRawEmailByImportKey : function(ImportKey, Callback) {
        return RawEmails.GetRawEmailByImportKeyObject({ ImportKey : ImportKey}, Callback);
    },

	GetRawEmailByImportKeyObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.GetRawEmailByImportKey)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.GetRawEmailByImportKey.onValidationError))
					RawEmails.GetRawEmailByImportKey.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "GetRawEmailByImportKey", 
					Params : { ImportKey : oObject.ImportKey}, 
					Serialize : RawEmails.GetRawEmailByImportKey.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.GetRawEmailByImportKey.onErrorReceived) ? RawEmails.GetRawEmailByImportKey.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "GetRawEmailByImportKey", { ImportKey : oObject.ImportKey}, RawEmails.GetRawEmailByImportKey.Serialize || {});
    },
	GetRawEmails : function(Callback) {
        return RawEmails.GetRawEmailsObject({ }, Callback);
    },

	GetRawEmailsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.GetRawEmails)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.GetRawEmails.onValidationError))
					RawEmails.GetRawEmails.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "GetRawEmails", 
					Params : { }, 
					Serialize : RawEmails.GetRawEmails.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.GetRawEmails.onErrorReceived) ? RawEmails.GetRawEmails.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "GetRawEmails", { }, RawEmails.GetRawEmails.Serialize || {});
    },
	GetRawEmailsByThreadID : function(ThreadID, Callback) {
        return RawEmails.GetRawEmailsByThreadIDObject({ ThreadID : ThreadID}, Callback);
    },

	GetRawEmailsByThreadIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.GetRawEmailsByThreadID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.GetRawEmailsByThreadID.onValidationError))
					RawEmails.GetRawEmailsByThreadID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "GetRawEmailsByThreadID", 
					Params : { ThreadID : oObject.ThreadID}, 
					Serialize : RawEmails.GetRawEmailsByThreadID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.GetRawEmailsByThreadID.onErrorReceived) ? RawEmails.GetRawEmailsByThreadID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "GetRawEmailsByThreadID", { ThreadID : oObject.ThreadID}, RawEmails.GetRawEmailsByThreadID.Serialize || {});
    },
	GetRawEmailsByUserID : function(UserID, Callback) {
        return RawEmails.GetRawEmailsByUserIDObject({ UserID : UserID}, Callback);
    },

	GetRawEmailsByUserIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.GetRawEmailsByUserID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.GetRawEmailsByUserID.onValidationError))
					RawEmails.GetRawEmailsByUserID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "GetRawEmailsByUserID", 
					Params : { UserID : oObject.UserID}, 
					Serialize : RawEmails.GetRawEmailsByUserID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.GetRawEmailsByUserID.onErrorReceived) ? RawEmails.GetRawEmailsByUserID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "GetRawEmailsByUserID", { UserID : oObject.UserID}, RawEmails.GetRawEmailsByUserID.Serialize || {});
    },
	GetRawEmailsByUserIDSp_PagingSp : function(UserID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RawEmails.GetRawEmailsByUserIDSp_PagingSpObject({ UserID : UserID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetRawEmailsByUserIDSp_PagingSpObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.GetRawEmailsByUserIDSp_PagingSp)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.GetRawEmailsByUserIDSp_PagingSp.onValidationError))
					RawEmails.GetRawEmailsByUserIDSp_PagingSp.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "GetRawEmailsByUserIDSp_PagingSp", 
					Params : { UserID : oObject.UserID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RawEmails.GetRawEmailsByUserIDSp_PagingSp.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.GetRawEmailsByUserIDSp_PagingSp.onErrorReceived) ? RawEmails.GetRawEmailsByUserIDSp_PagingSp.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "GetRawEmailsByUserIDSp_PagingSp", { UserID : oObject.UserID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RawEmails.GetRawEmailsByUserIDSp_PagingSp.Serialize || {});
    },
	GetRawEmailsSp_PagingSp : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return RawEmails.GetRawEmailsSp_PagingSpObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetRawEmailsSp_PagingSpObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.GetRawEmailsSp_PagingSp)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.GetRawEmailsSp_PagingSp.onValidationError))
					RawEmails.GetRawEmailsSp_PagingSp.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "GetRawEmailsSp_PagingSp", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : RawEmails.GetRawEmailsSp_PagingSp.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.GetRawEmailsSp_PagingSp.onErrorReceived) ? RawEmails.GetRawEmailsSp_PagingSp.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "GetRawEmailsSp_PagingSp", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, RawEmails.GetRawEmailsSp_PagingSp.Serialize || {});
    },
	InsertRawEmail : function(To, From, Subject, BodyText, BodyHtml, IsProcessed, Label, Data, UserID, ImportKey, EmailDate, ThreadID, Callback) {
        return RawEmails.InsertRawEmailObject({ To : To,From : From,Subject : Subject,BodyText : BodyText,BodyHtml : BodyHtml,IsProcessed : IsProcessed,Label : Label,Data : Data,UserID : UserID,ImportKey : ImportKey,EmailDate : EmailDate,ThreadID : ThreadID}, Callback);
    },

	InsertRawEmailObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.InsertRawEmail)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.InsertRawEmail.onValidationError))
					RawEmails.InsertRawEmail.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "InsertRawEmail", 
					Params : { To : oObject.To,From : oObject.From,Subject : oObject.Subject,BodyText : oObject.BodyText,BodyHtml : oObject.BodyHtml,IsProcessed : oObject.IsProcessed,Label : oObject.Label,Data : oObject.Data,UserID : oObject.UserID,ImportKey : oObject.ImportKey,EmailDate : oObject.EmailDate,ThreadID : oObject.ThreadID}, 
					Serialize : RawEmails.InsertRawEmail.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.InsertRawEmail.onErrorReceived) ? RawEmails.InsertRawEmail.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "InsertRawEmail", { To : oObject.To,From : oObject.From,Subject : oObject.Subject,BodyText : oObject.BodyText,BodyHtml : oObject.BodyHtml,IsProcessed : oObject.IsProcessed,Label : oObject.Label,Data : oObject.Data,UserID : oObject.UserID,ImportKey : oObject.ImportKey,EmailDate : oObject.EmailDate,ThreadID : oObject.ThreadID}, RawEmails.InsertRawEmail.Serialize || {});
    },
	InsertRawEmailAddresses : function(rowRawEmail, Callback) {
        return RawEmails.InsertRawEmailAddressesObject({ rowRawEmail : rowRawEmail}, Callback);
    },

	InsertRawEmailAddressesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.InsertRawEmailAddresses)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.InsertRawEmailAddresses.onValidationError))
					RawEmails.InsertRawEmailAddresses.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "InsertRawEmailAddresses", 
					Params : { rowRawEmail : oObject.rowRawEmail}, 
					Serialize : RawEmails.InsertRawEmailAddresses.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.InsertRawEmailAddresses.onErrorReceived) ? RawEmails.InsertRawEmailAddresses.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "InsertRawEmailAddresses", { rowRawEmail : oObject.rowRawEmail}, RawEmails.InsertRawEmailAddresses.Serialize || {});
    },
	InsertRawEmailIfNew : function(To, From, Subject, BodyText, BodyHtml, Label, ImportKey, Data, UserID, EmailDate, ThreadID, Callback) {
        return RawEmails.InsertRawEmailIfNewObject({ To : To,From : From,Subject : Subject,BodyText : BodyText,BodyHtml : BodyHtml,Label : Label,ImportKey : ImportKey,Data : Data,UserID : UserID,EmailDate : EmailDate,ThreadID : ThreadID}, Callback);
    },

	InsertRawEmailIfNewObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.InsertRawEmailIfNew)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.InsertRawEmailIfNew.onValidationError))
					RawEmails.InsertRawEmailIfNew.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "InsertRawEmailIfNew", 
					Params : { To : oObject.To,From : oObject.From,Subject : oObject.Subject,BodyText : oObject.BodyText,BodyHtml : oObject.BodyHtml,Label : oObject.Label,ImportKey : oObject.ImportKey,Data : oObject.Data,UserID : oObject.UserID,EmailDate : oObject.EmailDate,ThreadID : oObject.ThreadID}, 
					Serialize : RawEmails.InsertRawEmailIfNew.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.InsertRawEmailIfNew.onErrorReceived) ? RawEmails.InsertRawEmailIfNew.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "InsertRawEmailIfNew", { To : oObject.To,From : oObject.From,Subject : oObject.Subject,BodyText : oObject.BodyText,BodyHtml : oObject.BodyHtml,Label : oObject.Label,ImportKey : oObject.ImportKey,Data : oObject.Data,UserID : oObject.UserID,EmailDate : oObject.EmailDate,ThreadID : oObject.ThreadID}, RawEmails.InsertRawEmailIfNew.Serialize || {});
    },
	InsertRawEmailIfNew2 : function(rowRawEmail, Callback) {
        return RawEmails.InsertRawEmailIfNew2Object({ rowRawEmail : rowRawEmail}, Callback);
    },

	InsertRawEmailIfNew2Object : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.InsertRawEmailIfNew2)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.InsertRawEmailIfNew2.onValidationError))
					RawEmails.InsertRawEmailIfNew2.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "InsertRawEmailIfNew2", 
					Params : { rowRawEmail : oObject.rowRawEmail}, 
					Serialize : RawEmails.InsertRawEmailIfNew2.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.InsertRawEmailIfNew2.onErrorReceived) ? RawEmails.InsertRawEmailIfNew2.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "InsertRawEmailIfNew2", { rowRawEmail : oObject.rowRawEmail}, RawEmails.InsertRawEmailIfNew2.Serialize || {});
    },
	InsertRawSentEmailIfNew : function(To, From, Subject, BodyText, BodyHtml, Label, ImportKey, Data, UserID, EmailDate, ThreadID, Callback) {
        return RawEmails.InsertRawSentEmailIfNewObject({ To : To,From : From,Subject : Subject,BodyText : BodyText,BodyHtml : BodyHtml,Label : Label,ImportKey : ImportKey,Data : Data,UserID : UserID,EmailDate : EmailDate,ThreadID : ThreadID}, Callback);
    },

	InsertRawSentEmailIfNewObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.InsertRawSentEmailIfNew)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.InsertRawSentEmailIfNew.onValidationError))
					RawEmails.InsertRawSentEmailIfNew.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "InsertRawSentEmailIfNew", 
					Params : { To : oObject.To,From : oObject.From,Subject : oObject.Subject,BodyText : oObject.BodyText,BodyHtml : oObject.BodyHtml,Label : oObject.Label,ImportKey : oObject.ImportKey,Data : oObject.Data,UserID : oObject.UserID,EmailDate : oObject.EmailDate,ThreadID : oObject.ThreadID}, 
					Serialize : RawEmails.InsertRawSentEmailIfNew.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.InsertRawSentEmailIfNew.onErrorReceived) ? RawEmails.InsertRawSentEmailIfNew.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "InsertRawSentEmailIfNew", { To : oObject.To,From : oObject.From,Subject : oObject.Subject,BodyText : oObject.BodyText,BodyHtml : oObject.BodyHtml,Label : oObject.Label,ImportKey : oObject.ImportKey,Data : oObject.Data,UserID : oObject.UserID,EmailDate : oObject.EmailDate,ThreadID : oObject.ThreadID}, RawEmails.InsertRawSentEmailIfNew.Serialize || {});
    },
	InsertRawSentEmailIfNew2 : function(rowRawEmail, Callback) {
        return RawEmails.InsertRawSentEmailIfNew2Object({ rowRawEmail : rowRawEmail}, Callback);
    },

	InsertRawSentEmailIfNew2Object : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.InsertRawSentEmailIfNew2)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.InsertRawSentEmailIfNew2.onValidationError))
					RawEmails.InsertRawSentEmailIfNew2.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "InsertRawSentEmailIfNew2", 
					Params : { rowRawEmail : oObject.rowRawEmail}, 
					Serialize : RawEmails.InsertRawSentEmailIfNew2.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.InsertRawSentEmailIfNew2.onErrorReceived) ? RawEmails.InsertRawSentEmailIfNew2.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "InsertRawSentEmailIfNew2", { rowRawEmail : oObject.rowRawEmail}, RawEmails.InsertRawSentEmailIfNew2.Serialize || {});
    },
	MarkRawEmailAsNotProcessed : function(RawEmailID, Callback) {
        return RawEmails.MarkRawEmailAsNotProcessedObject({ RawEmailID : RawEmailID}, Callback);
    },

	MarkRawEmailAsNotProcessedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.MarkRawEmailAsNotProcessed)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.MarkRawEmailAsNotProcessed.onValidationError))
					RawEmails.MarkRawEmailAsNotProcessed.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "MarkRawEmailAsNotProcessed", 
					Params : { RawEmailID : oObject.RawEmailID}, 
					Serialize : RawEmails.MarkRawEmailAsNotProcessed.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.MarkRawEmailAsNotProcessed.onErrorReceived) ? RawEmails.MarkRawEmailAsNotProcessed.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "MarkRawEmailAsNotProcessed", { RawEmailID : oObject.RawEmailID}, RawEmails.MarkRawEmailAsNotProcessed.Serialize || {});
    },
	MarkRawEmailAsProcessed : function(RawEmailID, Callback) {
        return RawEmails.MarkRawEmailAsProcessedObject({ RawEmailID : RawEmailID}, Callback);
    },

	MarkRawEmailAsProcessedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.MarkRawEmailAsProcessed)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.MarkRawEmailAsProcessed.onValidationError))
					RawEmails.MarkRawEmailAsProcessed.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "MarkRawEmailAsProcessed", 
					Params : { RawEmailID : oObject.RawEmailID}, 
					Serialize : RawEmails.MarkRawEmailAsProcessed.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.MarkRawEmailAsProcessed.onErrorReceived) ? RawEmails.MarkRawEmailAsProcessed.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "MarkRawEmailAsProcessed", { RawEmailID : oObject.RawEmailID}, RawEmails.MarkRawEmailAsProcessed.Serialize || {});
    },
	RemoveRawEmail : function(RawEmailID, Callback) {
        return RawEmails.RemoveRawEmailObject({ RawEmailID : RawEmailID}, Callback);
    },

	RemoveRawEmailObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.RemoveRawEmail)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.RemoveRawEmail.onValidationError))
					RawEmails.RemoveRawEmail.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "RemoveRawEmail", 
					Params : { RawEmailID : oObject.RawEmailID}, 
					Serialize : RawEmails.RemoveRawEmail.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.RemoveRawEmail.onErrorReceived) ? RawEmails.RemoveRawEmail.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "RemoveRawEmail", { RawEmailID : oObject.RawEmailID}, RawEmails.RemoveRawEmail.Serialize || {});
    },
	UpdateRawEmail : function(RawEmailID, To, From, Subject, BodyText, BodyHtml, IsProcessed, Label, Data, UserID, ImportKey, EmailDate, ThreadID, Callback) {
        return RawEmails.UpdateRawEmailObject({ RawEmailID : RawEmailID,To : To,From : From,Subject : Subject,BodyText : BodyText,BodyHtml : BodyHtml,IsProcessed : IsProcessed,Label : Label,Data : Data,UserID : UserID,ImportKey : ImportKey,EmailDate : EmailDate,ThreadID : ThreadID}, Callback);
    },

	UpdateRawEmailObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.UpdateRawEmail)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.UpdateRawEmail.onValidationError))
					RawEmails.UpdateRawEmail.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "UpdateRawEmail", 
					Params : { RawEmailID : oObject.RawEmailID,To : oObject.To,From : oObject.From,Subject : oObject.Subject,BodyText : oObject.BodyText,BodyHtml : oObject.BodyHtml,IsProcessed : oObject.IsProcessed,Label : oObject.Label,Data : oObject.Data,UserID : oObject.UserID,ImportKey : oObject.ImportKey,EmailDate : oObject.EmailDate,ThreadID : oObject.ThreadID}, 
					Serialize : RawEmails.UpdateRawEmail.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.UpdateRawEmail.onErrorReceived) ? RawEmails.UpdateRawEmail.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "UpdateRawEmail", { RawEmailID : oObject.RawEmailID,To : oObject.To,From : oObject.From,Subject : oObject.Subject,BodyText : oObject.BodyText,BodyHtml : oObject.BodyHtml,IsProcessed : oObject.IsProcessed,Label : oObject.Label,Data : oObject.Data,UserID : oObject.UserID,ImportKey : oObject.ImportKey,EmailDate : oObject.EmailDate,ThreadID : oObject.ThreadID}, RawEmails.UpdateRawEmail.Serialize || {});
    },
	UpdateRawEmailData : function(RawEmailID, Data, Callback) {
        return RawEmails.UpdateRawEmailDataObject({ RawEmailID : RawEmailID,Data : Data}, Callback);
    },

	UpdateRawEmailDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RawEmailsValidators.UpdateRawEmailData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(RawEmails.UpdateRawEmailData.onValidationError))
					RawEmails.UpdateRawEmailData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: RawEmails.Url, 
					Method : "UpdateRawEmailData", 
					Params : { RawEmailID : oObject.RawEmailID,Data : oObject.Data}, 
					Serialize : RawEmails.UpdateRawEmailData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(RawEmails.UpdateRawEmailData.onErrorReceived) ? RawEmails.UpdateRawEmailData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(RawEmails.Url, "UpdateRawEmailData", { RawEmailID : oObject.RawEmailID,Data : oObject.Data}, RawEmails.UpdateRawEmailData.Serialize || {});
    }
};

var RawEmailsValidators = {
	

	cleanEmail : {
			sEmail : RawEmailsValidatorsFields.sEmail	
	},

	cleanEmail2 : {
			sEmail : RawEmailsValidatorsFields.sEmail	
	},

	CopyRawEmail : {
			RawEmailID : RawEmailsValidatorsFields.RawEmailID	
	},

	DownloadEmailsByUser : {
			rowUser : RawEmailsValidatorsFields.rowUser	
	},

	DownloadEmailsFromDBAuth : {	
	},

	DownloadingQueue2 : {
			iUserID : RawEmailsValidatorsFields.iUserID,
			strCredentialPath : RawEmailsValidatorsFields.strCredentialPath,
			strUserKey : RawEmailsValidatorsFields.strUserKey	
	},

	GetRawEmail : {
			RawEmailID : RawEmailsValidatorsFields.RawEmailID	
	},

	GetRawEmailByImportKey : {
			ImportKey : RawEmailsValidatorsFields.ImportKey	
	},

	GetRawEmails : {	
	},

	GetRawEmailsByThreadID : {
			ThreadID : RawEmailsValidatorsFields.ThreadID	
	},

	GetRawEmailsByUserID : {
			UserID : RawEmailsValidatorsFields.UserID	
	},

	GetRawEmailsByUserIDSp_PagingSp : {
			UserID : RawEmailsValidatorsFields.UserID,
			Search : RawEmailsValidatorsFields.Search,
			SortColumn : RawEmailsValidatorsFields.SortColumn,
			SortAscending : RawEmailsValidatorsFields.SortAscending,
			SkipRows : RawEmailsValidatorsFields.SkipRows,
			NumRows : RawEmailsValidatorsFields.NumRows	
	},

	GetRawEmailsSp_PagingSp : {
			Search : RawEmailsValidatorsFields.Search,
			SortColumn : RawEmailsValidatorsFields.SortColumn,
			SortAscending : RawEmailsValidatorsFields.SortAscending,
			SkipRows : RawEmailsValidatorsFields.SkipRows,
			NumRows : RawEmailsValidatorsFields.NumRows	
	},

	InsertRawEmail : {
			To : RawEmailsValidatorsFields.To,
			From : RawEmailsValidatorsFields.From,
			Subject : RawEmailsValidatorsFields.Subject,
			BodyText : RawEmailsValidatorsFields.BodyText,
			BodyHtml : RawEmailsValidatorsFields.BodyHtml,
			IsProcessed : RawEmailsValidatorsFields.IsProcessed,
			Label : RawEmailsValidatorsFields.Label,
			Data : RawEmailsValidatorsFields.Data,
			UserID : RawEmailsValidatorsFields.UserID,
			ImportKey : RawEmailsValidatorsFields.ImportKey,
			EmailDate : RawEmailsValidatorsFields.EmailDate,
			ThreadID : RawEmailsValidatorsFields.ThreadID	
	},

	InsertRawEmailAddresses : {
			rowRawEmail : RawEmailsValidatorsFields.rowRawEmail	
	},

	InsertRawEmailIfNew : {
			To : RawEmailsValidatorsFields.To,
			From : RawEmailsValidatorsFields.From,
			Subject : RawEmailsValidatorsFields.Subject,
			BodyText : RawEmailsValidatorsFields.BodyText,
			BodyHtml : RawEmailsValidatorsFields.BodyHtml,
			Label : RawEmailsValidatorsFields.Label,
			ImportKey : RawEmailsValidatorsFields.ImportKey,
			Data : RawEmailsValidatorsFields.Data,
			UserID : RawEmailsValidatorsFields.UserID,
			EmailDate : RawEmailsValidatorsFields.EmailDate,
			ThreadID : RawEmailsValidatorsFields.ThreadID	
	},

	InsertRawEmailIfNew2 : {
			rowRawEmail : RawEmailsValidatorsFields.rowRawEmail	
	},

	InsertRawSentEmailIfNew : {
			To : RawEmailsValidatorsFields.To,
			From : RawEmailsValidatorsFields.From,
			Subject : RawEmailsValidatorsFields.Subject,
			BodyText : RawEmailsValidatorsFields.BodyText,
			BodyHtml : RawEmailsValidatorsFields.BodyHtml,
			Label : RawEmailsValidatorsFields.Label,
			ImportKey : RawEmailsValidatorsFields.ImportKey,
			Data : RawEmailsValidatorsFields.Data,
			UserID : RawEmailsValidatorsFields.UserID,
			EmailDate : RawEmailsValidatorsFields.EmailDate,
			ThreadID : RawEmailsValidatorsFields.ThreadID	
	},

	InsertRawSentEmailIfNew2 : {
			rowRawEmail : RawEmailsValidatorsFields.rowRawEmail	
	},

	MarkRawEmailAsNotProcessed : {
			RawEmailID : RawEmailsValidatorsFields.RawEmailID	
	},

	MarkRawEmailAsProcessed : {
			RawEmailID : RawEmailsValidatorsFields.RawEmailID	
	},

	RemoveRawEmail : {
			RawEmailID : RawEmailsValidatorsFields.RawEmailID	
	},

	UpdateRawEmail : {
			RawEmailID : RawEmailsValidatorsFields.RawEmailID,
			To : RawEmailsValidatorsFields.To,
			From : RawEmailsValidatorsFields.From,
			Subject : RawEmailsValidatorsFields.Subject,
			BodyText : RawEmailsValidatorsFields.BodyText,
			BodyHtml : RawEmailsValidatorsFields.BodyHtml,
			IsProcessed : RawEmailsValidatorsFields.IsProcessed,
			Label : RawEmailsValidatorsFields.Label,
			Data : RawEmailsValidatorsFields.Data,
			UserID : RawEmailsValidatorsFields.UserID,
			ImportKey : RawEmailsValidatorsFields.ImportKey,
			EmailDate : RawEmailsValidatorsFields.EmailDate,
			ThreadID : RawEmailsValidatorsFields.ThreadID	
	},

	UpdateRawEmailData : {
			RawEmailID : RawEmailsValidatorsFields.RawEmailID,
			Data : RawEmailsValidatorsFields.Data	
	}
};

    