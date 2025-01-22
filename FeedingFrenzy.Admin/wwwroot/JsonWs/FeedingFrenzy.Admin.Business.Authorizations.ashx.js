
    	    	
var AuthorizationsValidatorsFields = {
	
		AuthorizationID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Authorization ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		AuthorizationToken : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Authorization Token. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		Email : {Validators : [Validators.String], InvalidMessage: "Invalid Email. " +   ValidatorDescriptions.Length(1, 255) },
		Expiration : {Validators : [Validators.Date], InvalidMessage: "Invalid Expiration. " +   ValidatorDescriptions.Date() },
		IsEncrypted : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Is Encrypted. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		IsExpired : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Is Expired. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		IsRevoked : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Is Revoked. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		LastActivityDate : {Validators : [Validators.Date], InvalidMessage: "Invalid Last Activity Date. " +   ValidatorDescriptions.Date() },
		LastRefreshedDate : {Validators : [Validators.Date], InvalidMessage: "Invalid Last Refreshed Date. " +   ValidatorDescriptions.Date() },
		NumRows : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid NumRows. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		Password : {Validators : [Validators.String], InvalidMessage: "Invalid Password. " +   ValidatorDescriptions.Length(1, 255) },
		RefreshToken : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Refresh Token. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		Search : {Validators : [Validators.String], InvalidMessage: "Invalid Search. " +   ValidatorDescriptions.Length(1, 255) },
		SkipRows : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid SkipRows. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		SortAscending : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid SortAscending. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		SortColumn : {Validators : [Validators.String], InvalidMessage: "Invalid SortColumn. " +   ValidatorDescriptions.Length(1, 255) },
		UserID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid User ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() }	
}
			
var Authorizations = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.Authorizations.ashx"

	,
	CopyAuthorization : function(AuthorizationID, Callback) {
        return Authorizations.CopyAuthorizationObject({ AuthorizationID : AuthorizationID}, Callback);
    },

	CopyAuthorizationObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.CopyAuthorization)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.CopyAuthorization.onValidationError))
					Authorizations.CopyAuthorization.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "CopyAuthorization", 
					Params : { AuthorizationID : oObject.AuthorizationID}, 
					Serialize : Authorizations.CopyAuthorization.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.CopyAuthorization.onErrorReceived) ? Authorizations.CopyAuthorization.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "CopyAuthorization", { AuthorizationID : oObject.AuthorizationID}, Authorizations.CopyAuthorization.Serialize || {});
    },
	GeneratePassword : function(Callback) {
        return Authorizations.GeneratePasswordObject({ }, Callback);
    },

	GeneratePasswordObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.GeneratePassword)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.GeneratePassword.onValidationError))
					Authorizations.GeneratePassword.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "GeneratePassword", 
					Params : { }, 
					Serialize : Authorizations.GeneratePassword.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.GeneratePassword.onErrorReceived) ? Authorizations.GeneratePassword.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "GeneratePassword", { }, Authorizations.GeneratePassword.Serialize || {});
    },
	GetAndUpdate : function(AuthorizationToken, Callback) {
        return Authorizations.GetAndUpdateObject({ AuthorizationToken : AuthorizationToken}, Callback);
    },

	GetAndUpdateObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.GetAndUpdate)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.GetAndUpdate.onValidationError))
					Authorizations.GetAndUpdate.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "GetAndUpdate", 
					Params : { AuthorizationToken : oObject.AuthorizationToken}, 
					Serialize : Authorizations.GetAndUpdate.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.GetAndUpdate.onErrorReceived) ? Authorizations.GetAndUpdate.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "GetAndUpdate", { AuthorizationToken : oObject.AuthorizationToken}, Authorizations.GetAndUpdate.Serialize || {});
    },
	GetApiKeyByUserIDSp_PagingSp : function(UserID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return Authorizations.GetApiKeyByUserIDSp_PagingSpObject({ UserID : UserID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetApiKeyByUserIDSp_PagingSpObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.GetApiKeyByUserIDSp_PagingSp)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.GetApiKeyByUserIDSp_PagingSp.onValidationError))
					Authorizations.GetApiKeyByUserIDSp_PagingSp.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "GetApiKeyByUserIDSp_PagingSp", 
					Params : { UserID : oObject.UserID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : Authorizations.GetApiKeyByUserIDSp_PagingSp.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.GetApiKeyByUserIDSp_PagingSp.onErrorReceived) ? Authorizations.GetApiKeyByUserIDSp_PagingSp.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "GetApiKeyByUserIDSp_PagingSp", { UserID : oObject.UserID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, Authorizations.GetApiKeyByUserIDSp_PagingSp.Serialize || {});
    },
	GetAuthorization : function(Email, Password, Callback) {
        return Authorizations.GetAuthorizationObject({ Email : Email,Password : Password}, Callback);
    },

	GetAuthorizationObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.GetAuthorization)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.GetAuthorization.onValidationError))
					Authorizations.GetAuthorization.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "GetAuthorization", 
					Params : { Email : oObject.Email,Password : oObject.Password}, 
					Serialize : Authorizations.GetAuthorization.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.GetAuthorization.onErrorReceived) ? Authorizations.GetAuthorization.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "GetAuthorization", { Email : oObject.Email,Password : oObject.Password}, Authorizations.GetAuthorization.Serialize || {});
    },
	GetAuthorization : function(AuthorizationID, Callback) {
        return Authorizations.GetAuthorizationObject({ AuthorizationID : AuthorizationID}, Callback);
    },

	GetAuthorizationObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.GetAuthorization)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.GetAuthorization.onValidationError))
					Authorizations.GetAuthorization.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "GetAuthorization", 
					Params : { AuthorizationID : oObject.AuthorizationID}, 
					Serialize : Authorizations.GetAuthorization.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.GetAuthorization.onErrorReceived) ? Authorizations.GetAuthorization.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "GetAuthorization", { AuthorizationID : oObject.AuthorizationID}, Authorizations.GetAuthorization.Serialize || {});
    },
	GetAuthorizationByAuthorizationToken : function(AuthorizationToken, Callback) {
        return Authorizations.GetAuthorizationByAuthorizationTokenObject({ AuthorizationToken : AuthorizationToken}, Callback);
    },

	GetAuthorizationByAuthorizationTokenObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.GetAuthorizationByAuthorizationToken)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.GetAuthorizationByAuthorizationToken.onValidationError))
					Authorizations.GetAuthorizationByAuthorizationToken.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "GetAuthorizationByAuthorizationToken", 
					Params : { AuthorizationToken : oObject.AuthorizationToken}, 
					Serialize : Authorizations.GetAuthorizationByAuthorizationToken.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.GetAuthorizationByAuthorizationToken.onErrorReceived) ? Authorizations.GetAuthorizationByAuthorizationToken.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "GetAuthorizationByAuthorizationToken", { AuthorizationToken : oObject.AuthorizationToken}, Authorizations.GetAuthorizationByAuthorizationToken.Serialize || {});
    },
	GetAuthorizationByRefreshToken : function(RefreshToken, Callback) {
        return Authorizations.GetAuthorizationByRefreshTokenObject({ RefreshToken : RefreshToken}, Callback);
    },

	GetAuthorizationByRefreshTokenObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.GetAuthorizationByRefreshToken)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.GetAuthorizationByRefreshToken.onValidationError))
					Authorizations.GetAuthorizationByRefreshToken.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "GetAuthorizationByRefreshToken", 
					Params : { RefreshToken : oObject.RefreshToken}, 
					Serialize : Authorizations.GetAuthorizationByRefreshToken.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.GetAuthorizationByRefreshToken.onErrorReceived) ? Authorizations.GetAuthorizationByRefreshToken.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "GetAuthorizationByRefreshToken", { RefreshToken : oObject.RefreshToken}, Authorizations.GetAuthorizationByRefreshToken.Serialize || {});
    },
	GetAuthorizations : function(Callback) {
        return Authorizations.GetAuthorizationsObject({ }, Callback);
    },

	GetAuthorizationsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.GetAuthorizations)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.GetAuthorizations.onValidationError))
					Authorizations.GetAuthorizations.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "GetAuthorizations", 
					Params : { }, 
					Serialize : Authorizations.GetAuthorizations.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.GetAuthorizations.onErrorReceived) ? Authorizations.GetAuthorizations.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "GetAuthorizations", { }, Authorizations.GetAuthorizations.Serialize || {});
    },
	GetAuthorizationsByUserID : function(UserID, Callback) {
        return Authorizations.GetAuthorizationsByUserIDObject({ UserID : UserID}, Callback);
    },

	GetAuthorizationsByUserIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.GetAuthorizationsByUserID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.GetAuthorizationsByUserID.onValidationError))
					Authorizations.GetAuthorizationsByUserID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "GetAuthorizationsByUserID", 
					Params : { UserID : oObject.UserID}, 
					Serialize : Authorizations.GetAuthorizationsByUserID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.GetAuthorizationsByUserID.onErrorReceived) ? Authorizations.GetAuthorizationsByUserID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "GetAuthorizationsByUserID", { UserID : oObject.UserID}, Authorizations.GetAuthorizationsByUserID.Serialize || {});
    },
	GetAuthorizationsByUserIDSp_PagingSp : function(UserID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return Authorizations.GetAuthorizationsByUserIDSp_PagingSpObject({ UserID : UserID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetAuthorizationsByUserIDSp_PagingSpObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.GetAuthorizationsByUserIDSp_PagingSp)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.GetAuthorizationsByUserIDSp_PagingSp.onValidationError))
					Authorizations.GetAuthorizationsByUserIDSp_PagingSp.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "GetAuthorizationsByUserIDSp_PagingSp", 
					Params : { UserID : oObject.UserID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : Authorizations.GetAuthorizationsByUserIDSp_PagingSp.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.GetAuthorizationsByUserIDSp_PagingSp.onErrorReceived) ? Authorizations.GetAuthorizationsByUserIDSp_PagingSp.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "GetAuthorizationsByUserIDSp_PagingSp", { UserID : oObject.UserID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, Authorizations.GetAuthorizationsByUserIDSp_PagingSp.Serialize || {});
    },
	GetAuthorizationsSp_PagingSp : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return Authorizations.GetAuthorizationsSp_PagingSpObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetAuthorizationsSp_PagingSpObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.GetAuthorizationsSp_PagingSp)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.GetAuthorizationsSp_PagingSp.onValidationError))
					Authorizations.GetAuthorizationsSp_PagingSp.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "GetAuthorizationsSp_PagingSp", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : Authorizations.GetAuthorizationsSp_PagingSp.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.GetAuthorizationsSp_PagingSp.onErrorReceived) ? Authorizations.GetAuthorizationsSp_PagingSp.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "GetAuthorizationsSp_PagingSp", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, Authorizations.GetAuthorizationsSp_PagingSp.Serialize || {});
    },
	InsertAuthorization : function(AuthorizationToken, RefreshToken, Expiration, UserID, LastRefreshedDate, LastActivityDate, IsExpired, IsRevoked, IsEncrypted, Data, Callback) {
        return Authorizations.InsertAuthorizationObject({ AuthorizationToken : AuthorizationToken,RefreshToken : RefreshToken,Expiration : Expiration,UserID : UserID,LastRefreshedDate : LastRefreshedDate,LastActivityDate : LastActivityDate,IsExpired : IsExpired,IsRevoked : IsRevoked,IsEncrypted : IsEncrypted,Data : Data}, Callback);
    },

	InsertAuthorizationObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.InsertAuthorization)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.InsertAuthorization.onValidationError))
					Authorizations.InsertAuthorization.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "InsertAuthorization", 
					Params : { AuthorizationToken : oObject.AuthorizationToken,RefreshToken : oObject.RefreshToken,Expiration : oObject.Expiration,UserID : oObject.UserID,LastRefreshedDate : oObject.LastRefreshedDate,LastActivityDate : oObject.LastActivityDate,IsExpired : oObject.IsExpired,IsRevoked : oObject.IsRevoked,IsEncrypted : oObject.IsEncrypted,Data : oObject.Data}, 
					Serialize : Authorizations.InsertAuthorization.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.InsertAuthorization.onErrorReceived) ? Authorizations.InsertAuthorization.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "InsertAuthorization", { AuthorizationToken : oObject.AuthorizationToken,RefreshToken : oObject.RefreshToken,Expiration : oObject.Expiration,UserID : oObject.UserID,LastRefreshedDate : oObject.LastRefreshedDate,LastActivityDate : oObject.LastActivityDate,IsExpired : oObject.IsExpired,IsRevoked : oObject.IsRevoked,IsEncrypted : oObject.IsEncrypted,Data : oObject.Data}, Authorizations.InsertAuthorization.Serialize || {});
    },
	IsAuthorized : function(AuthorizationToken, Callback) {
        return Authorizations.IsAuthorizedObject({ AuthorizationToken : AuthorizationToken}, Callback);
    },

	IsAuthorizedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.IsAuthorized)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.IsAuthorized.onValidationError))
					Authorizations.IsAuthorized.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "IsAuthorized", 
					Params : { AuthorizationToken : oObject.AuthorizationToken}, 
					Serialize : Authorizations.IsAuthorized.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.IsAuthorized.onErrorReceived) ? Authorizations.IsAuthorized.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "IsAuthorized", { AuthorizationToken : oObject.AuthorizationToken}, Authorizations.IsAuthorized.Serialize || {});
    },
	IsAuthorized2 : function(AuthorizationToken, Callback) {
        return Authorizations.IsAuthorized2Object({ AuthorizationToken : AuthorizationToken}, Callback);
    },

	IsAuthorized2Object : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.IsAuthorized2)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.IsAuthorized2.onValidationError))
					Authorizations.IsAuthorized2.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "IsAuthorized2", 
					Params : { AuthorizationToken : oObject.AuthorizationToken}, 
					Serialize : Authorizations.IsAuthorized2.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.IsAuthorized2.onErrorReceived) ? Authorizations.IsAuthorized2.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "IsAuthorized2", { AuthorizationToken : oObject.AuthorizationToken}, Authorizations.IsAuthorized2.Serialize || {});
    },
	MarkAuthorizationAsEncrypted : function(AuthorizationID, Callback) {
        return Authorizations.MarkAuthorizationAsEncryptedObject({ AuthorizationID : AuthorizationID}, Callback);
    },

	MarkAuthorizationAsEncryptedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.MarkAuthorizationAsEncrypted)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.MarkAuthorizationAsEncrypted.onValidationError))
					Authorizations.MarkAuthorizationAsEncrypted.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "MarkAuthorizationAsEncrypted", 
					Params : { AuthorizationID : oObject.AuthorizationID}, 
					Serialize : Authorizations.MarkAuthorizationAsEncrypted.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.MarkAuthorizationAsEncrypted.onErrorReceived) ? Authorizations.MarkAuthorizationAsEncrypted.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "MarkAuthorizationAsEncrypted", { AuthorizationID : oObject.AuthorizationID}, Authorizations.MarkAuthorizationAsEncrypted.Serialize || {});
    },
	MarkAuthorizationAsExpired : function(AuthorizationID, Callback) {
        return Authorizations.MarkAuthorizationAsExpiredObject({ AuthorizationID : AuthorizationID}, Callback);
    },

	MarkAuthorizationAsExpiredObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.MarkAuthorizationAsExpired)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.MarkAuthorizationAsExpired.onValidationError))
					Authorizations.MarkAuthorizationAsExpired.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "MarkAuthorizationAsExpired", 
					Params : { AuthorizationID : oObject.AuthorizationID}, 
					Serialize : Authorizations.MarkAuthorizationAsExpired.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.MarkAuthorizationAsExpired.onErrorReceived) ? Authorizations.MarkAuthorizationAsExpired.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "MarkAuthorizationAsExpired", { AuthorizationID : oObject.AuthorizationID}, Authorizations.MarkAuthorizationAsExpired.Serialize || {});
    },
	MarkAuthorizationAsNotEncrypted : function(AuthorizationID, Callback) {
        return Authorizations.MarkAuthorizationAsNotEncryptedObject({ AuthorizationID : AuthorizationID}, Callback);
    },

	MarkAuthorizationAsNotEncryptedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.MarkAuthorizationAsNotEncrypted)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.MarkAuthorizationAsNotEncrypted.onValidationError))
					Authorizations.MarkAuthorizationAsNotEncrypted.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "MarkAuthorizationAsNotEncrypted", 
					Params : { AuthorizationID : oObject.AuthorizationID}, 
					Serialize : Authorizations.MarkAuthorizationAsNotEncrypted.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.MarkAuthorizationAsNotEncrypted.onErrorReceived) ? Authorizations.MarkAuthorizationAsNotEncrypted.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "MarkAuthorizationAsNotEncrypted", { AuthorizationID : oObject.AuthorizationID}, Authorizations.MarkAuthorizationAsNotEncrypted.Serialize || {});
    },
	MarkAuthorizationAsNotExpired : function(AuthorizationID, Callback) {
        return Authorizations.MarkAuthorizationAsNotExpiredObject({ AuthorizationID : AuthorizationID}, Callback);
    },

	MarkAuthorizationAsNotExpiredObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.MarkAuthorizationAsNotExpired)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.MarkAuthorizationAsNotExpired.onValidationError))
					Authorizations.MarkAuthorizationAsNotExpired.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "MarkAuthorizationAsNotExpired", 
					Params : { AuthorizationID : oObject.AuthorizationID}, 
					Serialize : Authorizations.MarkAuthorizationAsNotExpired.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.MarkAuthorizationAsNotExpired.onErrorReceived) ? Authorizations.MarkAuthorizationAsNotExpired.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "MarkAuthorizationAsNotExpired", { AuthorizationID : oObject.AuthorizationID}, Authorizations.MarkAuthorizationAsNotExpired.Serialize || {});
    },
	MarkAuthorizationAsNotRevoked : function(AuthorizationID, Callback) {
        return Authorizations.MarkAuthorizationAsNotRevokedObject({ AuthorizationID : AuthorizationID}, Callback);
    },

	MarkAuthorizationAsNotRevokedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.MarkAuthorizationAsNotRevoked)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.MarkAuthorizationAsNotRevoked.onValidationError))
					Authorizations.MarkAuthorizationAsNotRevoked.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "MarkAuthorizationAsNotRevoked", 
					Params : { AuthorizationID : oObject.AuthorizationID}, 
					Serialize : Authorizations.MarkAuthorizationAsNotRevoked.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.MarkAuthorizationAsNotRevoked.onErrorReceived) ? Authorizations.MarkAuthorizationAsNotRevoked.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "MarkAuthorizationAsNotRevoked", { AuthorizationID : oObject.AuthorizationID}, Authorizations.MarkAuthorizationAsNotRevoked.Serialize || {});
    },
	MarkAuthorizationAsRevoked : function(AuthorizationID, Callback) {
        return Authorizations.MarkAuthorizationAsRevokedObject({ AuthorizationID : AuthorizationID}, Callback);
    },

	MarkAuthorizationAsRevokedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.MarkAuthorizationAsRevoked)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.MarkAuthorizationAsRevoked.onValidationError))
					Authorizations.MarkAuthorizationAsRevoked.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "MarkAuthorizationAsRevoked", 
					Params : { AuthorizationID : oObject.AuthorizationID}, 
					Serialize : Authorizations.MarkAuthorizationAsRevoked.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.MarkAuthorizationAsRevoked.onErrorReceived) ? Authorizations.MarkAuthorizationAsRevoked.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "MarkAuthorizationAsRevoked", { AuthorizationID : oObject.AuthorizationID}, Authorizations.MarkAuthorizationAsRevoked.Serialize || {});
    },
	RefreshAuthorization : function(RefreshToken, UserID, Callback) {
        return Authorizations.RefreshAuthorizationObject({ RefreshToken : RefreshToken,UserID : UserID}, Callback);
    },

	RefreshAuthorizationObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.RefreshAuthorization)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.RefreshAuthorization.onValidationError))
					Authorizations.RefreshAuthorization.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "RefreshAuthorization", 
					Params : { RefreshToken : oObject.RefreshToken,UserID : oObject.UserID}, 
					Serialize : Authorizations.RefreshAuthorization.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.RefreshAuthorization.onErrorReceived) ? Authorizations.RefreshAuthorization.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "RefreshAuthorization", { RefreshToken : oObject.RefreshToken,UserID : oObject.UserID}, Authorizations.RefreshAuthorization.Serialize || {});
    },
	RemoveAuthorization : function(AuthorizationID, Callback) {
        return Authorizations.RemoveAuthorizationObject({ AuthorizationID : AuthorizationID}, Callback);
    },

	RemoveAuthorizationObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.RemoveAuthorization)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.RemoveAuthorization.onValidationError))
					Authorizations.RemoveAuthorization.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "RemoveAuthorization", 
					Params : { AuthorizationID : oObject.AuthorizationID}, 
					Serialize : Authorizations.RemoveAuthorization.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.RemoveAuthorization.onErrorReceived) ? Authorizations.RemoveAuthorization.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "RemoveAuthorization", { AuthorizationID : oObject.AuthorizationID}, Authorizations.RemoveAuthorization.Serialize || {});
    },
	UpdateAuthorization : function(AuthorizationID, AuthorizationToken, RefreshToken, Expiration, UserID, LastRefreshedDate, LastActivityDate, IsExpired, IsRevoked, IsEncrypted, Data, Callback) {
        return Authorizations.UpdateAuthorizationObject({ AuthorizationID : AuthorizationID,AuthorizationToken : AuthorizationToken,RefreshToken : RefreshToken,Expiration : Expiration,UserID : UserID,LastRefreshedDate : LastRefreshedDate,LastActivityDate : LastActivityDate,IsExpired : IsExpired,IsRevoked : IsRevoked,IsEncrypted : IsEncrypted,Data : Data}, Callback);
    },

	UpdateAuthorizationObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.UpdateAuthorization)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.UpdateAuthorization.onValidationError))
					Authorizations.UpdateAuthorization.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "UpdateAuthorization", 
					Params : { AuthorizationID : oObject.AuthorizationID,AuthorizationToken : oObject.AuthorizationToken,RefreshToken : oObject.RefreshToken,Expiration : oObject.Expiration,UserID : oObject.UserID,LastRefreshedDate : oObject.LastRefreshedDate,LastActivityDate : oObject.LastActivityDate,IsExpired : oObject.IsExpired,IsRevoked : oObject.IsRevoked,IsEncrypted : oObject.IsEncrypted,Data : oObject.Data}, 
					Serialize : Authorizations.UpdateAuthorization.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.UpdateAuthorization.onErrorReceived) ? Authorizations.UpdateAuthorization.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "UpdateAuthorization", { AuthorizationID : oObject.AuthorizationID,AuthorizationToken : oObject.AuthorizationToken,RefreshToken : oObject.RefreshToken,Expiration : oObject.Expiration,UserID : oObject.UserID,LastRefreshedDate : oObject.LastRefreshedDate,LastActivityDate : oObject.LastActivityDate,IsExpired : oObject.IsExpired,IsRevoked : oObject.IsRevoked,IsEncrypted : oObject.IsEncrypted,Data : oObject.Data}, Authorizations.UpdateAuthorization.Serialize || {});
    },
	UpdateAuthorizationData : function(AuthorizationID, Data, Callback) {
        return Authorizations.UpdateAuthorizationDataObject({ AuthorizationID : AuthorizationID,Data : Data}, Callback);
    },

	UpdateAuthorizationDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthorizationsValidators.UpdateAuthorizationData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authorizations.UpdateAuthorizationData.onValidationError))
					Authorizations.UpdateAuthorizationData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authorizations.Url, 
					Method : "UpdateAuthorizationData", 
					Params : { AuthorizationID : oObject.AuthorizationID,Data : oObject.Data}, 
					Serialize : Authorizations.UpdateAuthorizationData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authorizations.UpdateAuthorizationData.onErrorReceived) ? Authorizations.UpdateAuthorizationData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authorizations.Url, "UpdateAuthorizationData", { AuthorizationID : oObject.AuthorizationID,Data : oObject.Data}, Authorizations.UpdateAuthorizationData.Serialize || {});
    }
};

var AuthorizationsValidators = {
	

	CopyAuthorization : {
			AuthorizationID : AuthorizationsValidatorsFields.AuthorizationID	
	},

	GeneratePassword : {	
	},

	GetAndUpdate : {
			AuthorizationToken : AuthorizationsValidatorsFields.AuthorizationToken	
	},

	GetApiKeyByUserIDSp_PagingSp : {
			UserID : AuthorizationsValidatorsFields.UserID,
			Search : AuthorizationsValidatorsFields.Search,
			SortColumn : AuthorizationsValidatorsFields.SortColumn,
			SortAscending : AuthorizationsValidatorsFields.SortAscending,
			SkipRows : AuthorizationsValidatorsFields.SkipRows,
			NumRows : AuthorizationsValidatorsFields.NumRows	
	},

	GetAuthorization : {
			Email : AuthorizationsValidatorsFields.Email,
			Password : AuthorizationsValidatorsFields.Password	
	},

	GetAuthorization : {
			AuthorizationID : AuthorizationsValidatorsFields.AuthorizationID	
	},

	GetAuthorizationByAuthorizationToken : {
			AuthorizationToken : AuthorizationsValidatorsFields.AuthorizationToken	
	},

	GetAuthorizationByRefreshToken : {
			RefreshToken : AuthorizationsValidatorsFields.RefreshToken	
	},

	GetAuthorizations : {	
	},

	GetAuthorizationsByUserID : {
			UserID : AuthorizationsValidatorsFields.UserID	
	},

	GetAuthorizationsByUserIDSp_PagingSp : {
			UserID : AuthorizationsValidatorsFields.UserID,
			Search : AuthorizationsValidatorsFields.Search,
			SortColumn : AuthorizationsValidatorsFields.SortColumn,
			SortAscending : AuthorizationsValidatorsFields.SortAscending,
			SkipRows : AuthorizationsValidatorsFields.SkipRows,
			NumRows : AuthorizationsValidatorsFields.NumRows	
	},

	GetAuthorizationsSp_PagingSp : {
			Search : AuthorizationsValidatorsFields.Search,
			SortColumn : AuthorizationsValidatorsFields.SortColumn,
			SortAscending : AuthorizationsValidatorsFields.SortAscending,
			SkipRows : AuthorizationsValidatorsFields.SkipRows,
			NumRows : AuthorizationsValidatorsFields.NumRows	
	},

	InsertAuthorization : {
			AuthorizationToken : AuthorizationsValidatorsFields.AuthorizationToken,
			RefreshToken : AuthorizationsValidatorsFields.RefreshToken,
			Expiration : AuthorizationsValidatorsFields.Expiration,
			UserID : AuthorizationsValidatorsFields.UserID,
			LastRefreshedDate : AuthorizationsValidatorsFields.LastRefreshedDate,
			LastActivityDate : AuthorizationsValidatorsFields.LastActivityDate,
			IsExpired : AuthorizationsValidatorsFields.IsExpired,
			IsRevoked : AuthorizationsValidatorsFields.IsRevoked,
			IsEncrypted : AuthorizationsValidatorsFields.IsEncrypted,
			Data : AuthorizationsValidatorsFields.Data	
	},

	IsAuthorized : {
			AuthorizationToken : AuthorizationsValidatorsFields.AuthorizationToken	
	},

	IsAuthorized2 : {
			AuthorizationToken : AuthorizationsValidatorsFields.AuthorizationToken	
	},

	MarkAuthorizationAsEncrypted : {
			AuthorizationID : AuthorizationsValidatorsFields.AuthorizationID	
	},

	MarkAuthorizationAsExpired : {
			AuthorizationID : AuthorizationsValidatorsFields.AuthorizationID	
	},

	MarkAuthorizationAsNotEncrypted : {
			AuthorizationID : AuthorizationsValidatorsFields.AuthorizationID	
	},

	MarkAuthorizationAsNotExpired : {
			AuthorizationID : AuthorizationsValidatorsFields.AuthorizationID	
	},

	MarkAuthorizationAsNotRevoked : {
			AuthorizationID : AuthorizationsValidatorsFields.AuthorizationID	
	},

	MarkAuthorizationAsRevoked : {
			AuthorizationID : AuthorizationsValidatorsFields.AuthorizationID	
	},

	RefreshAuthorization : {
			RefreshToken : AuthorizationsValidatorsFields.RefreshToken,
			UserID : AuthorizationsValidatorsFields.UserID	
	},

	RemoveAuthorization : {
			AuthorizationID : AuthorizationsValidatorsFields.AuthorizationID	
	},

	UpdateAuthorization : {
			AuthorizationID : AuthorizationsValidatorsFields.AuthorizationID,
			AuthorizationToken : AuthorizationsValidatorsFields.AuthorizationToken,
			RefreshToken : AuthorizationsValidatorsFields.RefreshToken,
			Expiration : AuthorizationsValidatorsFields.Expiration,
			UserID : AuthorizationsValidatorsFields.UserID,
			LastRefreshedDate : AuthorizationsValidatorsFields.LastRefreshedDate,
			LastActivityDate : AuthorizationsValidatorsFields.LastActivityDate,
			IsExpired : AuthorizationsValidatorsFields.IsExpired,
			IsRevoked : AuthorizationsValidatorsFields.IsRevoked,
			IsEncrypted : AuthorizationsValidatorsFields.IsEncrypted,
			Data : AuthorizationsValidatorsFields.Data	
	},

	UpdateAuthorizationData : {
			AuthorizationID : AuthorizationsValidatorsFields.AuthorizationID,
			Data : AuthorizationsValidatorsFields.Data	
	}
};

    