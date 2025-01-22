
    	    	
var UsersValidatorsFields = {
	
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		Email : {Validators : [Validators.Email, Validators.Required], InvalidMessage: "Invalid Email. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Email() },
		FirstName : {Validators : [Validators.String], InvalidMessage: "Invalid First Name. " +   ValidatorDescriptions.Length(1, 255) },
		HasLoggedIn : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Has Logged In. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		InvitationCode : {Validators : [Validators.String], InvalidMessage: "Invalid Invitation Code. " +   ValidatorDescriptions.Length(1, 255) },
		InvitationExpiration : {Validators : [Validators.Date], InvalidMessage: "Invalid Invitation Expiration. " +   ValidatorDescriptions.Date() },
		InvitedDate : {Validators : [Validators.Date], InvalidMessage: "Invalid Invited Date. " +   ValidatorDescriptions.Date() },
		IsAdministrator : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid IsAdministrator. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		IsEnabled : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Enabled. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		IsInvited : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Is Invited. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		IsLockedOut : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid Is Locked Out. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		IsSalesRepresentative : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid IsSalesRepresentative. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		LastLoginDate : {Validators : [Validators.Date], InvalidMessage: "Invalid Last Login Date. " +   ValidatorDescriptions.Date() },
		LastName : {Validators : [Validators.String], InvalidMessage: "Invalid Last Name. " +   ValidatorDescriptions.Length(1, 255) },
		Name : {Validators : [Validators.String], InvalidMessage: "Invalid Name. " +   ValidatorDescriptions.Length(1, 255) },
		NumRows : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid NumRows. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		Password : {Validators : [Validators.Text], InvalidMessage: "Invalid Password. " +   ValidatorDescriptions.Length(1, 4000) },
		Phone : {Validators : [Validators.Phone], InvalidMessage: "Invalid Phone. " +   ValidatorDescriptions.Phone() },
		RoleID : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid RoleID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		Search : {Validators : [Validators.String], InvalidMessage: "Invalid Search. " +   ValidatorDescriptions.Length(1, 255) },
		SkipRows : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid SkipRows. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		SortAscending : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid SortAscending. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		SortColumn : {Validators : [Validators.String], InvalidMessage: "Invalid SortColumn. " +   ValidatorDescriptions.Length(1, 255) },
		UserID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid User ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() }	
}
			
var Users = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.Users.ashx"

	,
	AgreeTermsAndConditions : function(Callback) {
        return Users.AgreeTermsAndConditionsObject({ }, Callback);
    },

	AgreeTermsAndConditionsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.AgreeTermsAndConditions)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.AgreeTermsAndConditions.onValidationError))
					Users.AgreeTermsAndConditions.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "AgreeTermsAndConditions", 
					Params : { }, 
					Serialize : Users.AgreeTermsAndConditions.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.AgreeTermsAndConditions.onErrorReceived) ? Users.AgreeTermsAndConditions.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "AgreeTermsAndConditions", { }, Users.AgreeTermsAndConditions.Serialize || {});
    },
	CheckAgreeTermsAndConditions : function(Callback) {
        return Users.CheckAgreeTermsAndConditionsObject({ }, Callback);
    },

	CheckAgreeTermsAndConditionsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.CheckAgreeTermsAndConditions)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.CheckAgreeTermsAndConditions.onValidationError))
					Users.CheckAgreeTermsAndConditions.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "CheckAgreeTermsAndConditions", 
					Params : { }, 
					Serialize : Users.CheckAgreeTermsAndConditions.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.CheckAgreeTermsAndConditions.onErrorReceived) ? Users.CheckAgreeTermsAndConditions.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "CheckAgreeTermsAndConditions", { }, Users.CheckAgreeTermsAndConditions.Serialize || {});
    },
	CopyUser : function(UserID, Callback) {
        return Users.CopyUserObject({ UserID : UserID}, Callback);
    },

	CopyUserObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.CopyUser)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.CopyUser.onValidationError))
					Users.CopyUser.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "CopyUser", 
					Params : { UserID : oObject.UserID}, 
					Serialize : Users.CopyUser.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.CopyUser.onErrorReceived) ? Users.CopyUser.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "CopyUser", { UserID : oObject.UserID}, Users.CopyUser.Serialize || {});
    },
	CreateAccount : function(FirstName, LastName, Email, Phone, IsEnabled, IsLockedOut, IsSalesRepresentative, IsAdministrator, Callback) {
        return Users.CreateAccountObject({ FirstName : FirstName,LastName : LastName,Email : Email,Phone : Phone,IsEnabled : IsEnabled,IsLockedOut : IsLockedOut,IsSalesRepresentative : IsSalesRepresentative,IsAdministrator : IsAdministrator}, Callback);
    },

	CreateAccountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.CreateAccount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.CreateAccount.onValidationError))
					Users.CreateAccount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "CreateAccount", 
					Params : { FirstName : oObject.FirstName,LastName : oObject.LastName,Email : oObject.Email,Phone : oObject.Phone,IsEnabled : oObject.IsEnabled,IsLockedOut : oObject.IsLockedOut,IsSalesRepresentative : oObject.IsSalesRepresentative,IsAdministrator : oObject.IsAdministrator}, 
					Serialize : Users.CreateAccount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.CreateAccount.onErrorReceived) ? Users.CreateAccount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "CreateAccount", { FirstName : oObject.FirstName,LastName : oObject.LastName,Email : oObject.Email,Phone : oObject.Phone,IsEnabled : oObject.IsEnabled,IsLockedOut : oObject.IsLockedOut,IsSalesRepresentative : oObject.IsSalesRepresentative,IsAdministrator : oObject.IsAdministrator}, Users.CreateAccount.Serialize || {});
    },
	GetInvitationCode : function(Email, Callback) {
        return Users.GetInvitationCodeObject({ Email : Email}, Callback);
    },

	GetInvitationCodeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.GetInvitationCode)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.GetInvitationCode.onValidationError))
					Users.GetInvitationCode.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "GetInvitationCode", 
					Params : { Email : oObject.Email}, 
					Serialize : Users.GetInvitationCode.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.GetInvitationCode.onErrorReceived) ? Users.GetInvitationCode.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "GetInvitationCode", { Email : oObject.Email}, Users.GetInvitationCode.Serialize || {});
    },
	GetUser : function(UserID, Callback) {
        return Users.GetUserObject({ UserID : UserID}, Callback);
    },

	GetUserObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.GetUser)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.GetUser.onValidationError))
					Users.GetUser.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "GetUser", 
					Params : { UserID : oObject.UserID}, 
					Serialize : Users.GetUser.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.GetUser.onErrorReceived) ? Users.GetUser.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "GetUser", { UserID : oObject.UserID}, Users.GetUser.Serialize || {});
    },
	GetUserByEmail : function(Email, Callback) {
        return Users.GetUserByEmailObject({ Email : Email}, Callback);
    },

	GetUserByEmailObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.GetUserByEmail)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.GetUserByEmail.onValidationError))
					Users.GetUserByEmail.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "GetUserByEmail", 
					Params : { Email : oObject.Email}, 
					Serialize : Users.GetUserByEmail.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.GetUserByEmail.onErrorReceived) ? Users.GetUserByEmail.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "GetUserByEmail", { Email : oObject.Email}, Users.GetUserByEmail.Serialize || {});
    },
	GetUsers : function(Callback) {
        return Users.GetUsersObject({ }, Callback);
    },

	GetUsersObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.GetUsers)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.GetUsers.onValidationError))
					Users.GetUsers.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "GetUsers", 
					Params : { }, 
					Serialize : Users.GetUsers.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.GetUsers.onErrorReceived) ? Users.GetUsers.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "GetUsers", { }, Users.GetUsers.Serialize || {});
    },
	GetUsersByUserID : function(UserID, Callback) {
        return Users.GetUsersByUserIDObject({ UserID : UserID}, Callback);
    },

	GetUsersByUserIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.GetUsersByUserID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.GetUsersByUserID.onValidationError))
					Users.GetUsersByUserID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "GetUsersByUserID", 
					Params : { UserID : oObject.UserID}, 
					Serialize : Users.GetUsersByUserID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.GetUsersByUserID.onErrorReceived) ? Users.GetUsersByUserID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "GetUsersByUserID", { UserID : oObject.UserID}, Users.GetUsersByUserID.Serialize || {});
    },
	GetUsersByUserIDSp_PagingSp : function(UserID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return Users.GetUsersByUserIDSp_PagingSpObject({ UserID : UserID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetUsersByUserIDSp_PagingSpObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.GetUsersByUserIDSp_PagingSp)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.GetUsersByUserIDSp_PagingSp.onValidationError))
					Users.GetUsersByUserIDSp_PagingSp.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "GetUsersByUserIDSp_PagingSp", 
					Params : { UserID : oObject.UserID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : Users.GetUsersByUserIDSp_PagingSp.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.GetUsersByUserIDSp_PagingSp.onErrorReceived) ? Users.GetUsersByUserIDSp_PagingSp.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "GetUsersByUserIDSp_PagingSp", { UserID : oObject.UserID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, Users.GetUsersByUserIDSp_PagingSp.Serialize || {});
    },
	GetUsersByUserRoleRoleIDSp_PagingSp : function(RoleID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return Users.GetUsersByUserRoleRoleIDSp_PagingSpObject({ RoleID : RoleID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetUsersByUserRoleRoleIDSp_PagingSpObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.GetUsersByUserRoleRoleIDSp_PagingSp)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.GetUsersByUserRoleRoleIDSp_PagingSp.onValidationError))
					Users.GetUsersByUserRoleRoleIDSp_PagingSp.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "GetUsersByUserRoleRoleIDSp_PagingSp", 
					Params : { RoleID : oObject.RoleID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : Users.GetUsersByUserRoleRoleIDSp_PagingSp.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.GetUsersByUserRoleRoleIDSp_PagingSp.onErrorReceived) ? Users.GetUsersByUserRoleRoleIDSp_PagingSp.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "GetUsersByUserRoleRoleIDSp_PagingSp", { RoleID : oObject.RoleID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, Users.GetUsersByUserRoleRoleIDSp_PagingSp.Serialize || {});
    },
	GetUsersSp_PagingSp : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return Users.GetUsersSp_PagingSpObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetUsersSp_PagingSpObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.GetUsersSp_PagingSp)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.GetUsersSp_PagingSp.onValidationError))
					Users.GetUsersSp_PagingSp.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "GetUsersSp_PagingSp", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : Users.GetUsersSp_PagingSp.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.GetUsersSp_PagingSp.onErrorReceived) ? Users.GetUsersSp_PagingSp.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "GetUsersSp_PagingSp", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, Users.GetUsersSp_PagingSp.Serialize || {});
    },
	InsertUser : function(IsEnabled, Data, Email, Phone, Password, HasLoggedIn, LastLoginDate, IsLockedOut, InvitationCode, InvitationExpiration, IsInvited, InvitedDate, FirstName, LastName, Callback) {
        return Users.InsertUserObject({ IsEnabled : IsEnabled,Data : Data,Email : Email,Phone : Phone,Password : Password,HasLoggedIn : HasLoggedIn,LastLoginDate : LastLoginDate,IsLockedOut : IsLockedOut,InvitationCode : InvitationCode,InvitationExpiration : InvitationExpiration,IsInvited : IsInvited,InvitedDate : InvitedDate,FirstName : FirstName,LastName : LastName}, Callback);
    },

	InsertUserObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.InsertUser)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.InsertUser.onValidationError))
					Users.InsertUser.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "InsertUser", 
					Params : { IsEnabled : oObject.IsEnabled,Data : oObject.Data,Email : oObject.Email,Phone : oObject.Phone,Password : oObject.Password,HasLoggedIn : oObject.HasLoggedIn,LastLoginDate : oObject.LastLoginDate,IsLockedOut : oObject.IsLockedOut,InvitationCode : oObject.InvitationCode,InvitationExpiration : oObject.InvitationExpiration,IsInvited : oObject.IsInvited,InvitedDate : oObject.InvitedDate,FirstName : oObject.FirstName,LastName : oObject.LastName}, 
					Serialize : Users.InsertUser.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.InsertUser.onErrorReceived) ? Users.InsertUser.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "InsertUser", { IsEnabled : oObject.IsEnabled,Data : oObject.Data,Email : oObject.Email,Phone : oObject.Phone,Password : oObject.Password,HasLoggedIn : oObject.HasLoggedIn,LastLoginDate : oObject.LastLoginDate,IsLockedOut : oObject.IsLockedOut,InvitationCode : oObject.InvitationCode,InvitationExpiration : oObject.InvitationExpiration,IsInvited : oObject.IsInvited,InvitedDate : oObject.InvitedDate,FirstName : oObject.FirstName,LastName : oObject.LastName}, Users.InsertUser.Serialize || {});
    },
	InsertUser2 : function(Email, Password, Name, Phone, Callback) {
        return Users.InsertUser2Object({ Email : Email,Password : Password,Name : Name,Phone : Phone}, Callback);
    },

	InsertUser2Object : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.InsertUser2)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.InsertUser2.onValidationError))
					Users.InsertUser2.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "InsertUser2", 
					Params : { Email : oObject.Email,Password : oObject.Password,Name : oObject.Name,Phone : oObject.Phone}, 
					Serialize : Users.InsertUser2.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.InsertUser2.onErrorReceived) ? Users.InsertUser2.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "InsertUser2", { Email : oObject.Email,Password : oObject.Password,Name : oObject.Name,Phone : oObject.Phone}, Users.InsertUser2.Serialize || {});
    },
	MarkUserAsEnabled : function(UserID, Callback) {
        return Users.MarkUserAsEnabledObject({ UserID : UserID}, Callback);
    },

	MarkUserAsEnabledObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.MarkUserAsEnabled)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.MarkUserAsEnabled.onValidationError))
					Users.MarkUserAsEnabled.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "MarkUserAsEnabled", 
					Params : { UserID : oObject.UserID}, 
					Serialize : Users.MarkUserAsEnabled.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.MarkUserAsEnabled.onErrorReceived) ? Users.MarkUserAsEnabled.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "MarkUserAsEnabled", { UserID : oObject.UserID}, Users.MarkUserAsEnabled.Serialize || {});
    },
	MarkUserAsHasLoggedIn : function(UserID, Callback) {
        return Users.MarkUserAsHasLoggedInObject({ UserID : UserID}, Callback);
    },

	MarkUserAsHasLoggedInObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.MarkUserAsHasLoggedIn)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.MarkUserAsHasLoggedIn.onValidationError))
					Users.MarkUserAsHasLoggedIn.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "MarkUserAsHasLoggedIn", 
					Params : { UserID : oObject.UserID}, 
					Serialize : Users.MarkUserAsHasLoggedIn.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.MarkUserAsHasLoggedIn.onErrorReceived) ? Users.MarkUserAsHasLoggedIn.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "MarkUserAsHasLoggedIn", { UserID : oObject.UserID}, Users.MarkUserAsHasLoggedIn.Serialize || {});
    },
	MarkUserAsInvited : function(UserID, Callback) {
        return Users.MarkUserAsInvitedObject({ UserID : UserID}, Callback);
    },

	MarkUserAsInvitedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.MarkUserAsInvited)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.MarkUserAsInvited.onValidationError))
					Users.MarkUserAsInvited.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "MarkUserAsInvited", 
					Params : { UserID : oObject.UserID}, 
					Serialize : Users.MarkUserAsInvited.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.MarkUserAsInvited.onErrorReceived) ? Users.MarkUserAsInvited.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "MarkUserAsInvited", { UserID : oObject.UserID}, Users.MarkUserAsInvited.Serialize || {});
    },
	MarkUserAsLockedOut : function(UserID, Callback) {
        return Users.MarkUserAsLockedOutObject({ UserID : UserID}, Callback);
    },

	MarkUserAsLockedOutObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.MarkUserAsLockedOut)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.MarkUserAsLockedOut.onValidationError))
					Users.MarkUserAsLockedOut.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "MarkUserAsLockedOut", 
					Params : { UserID : oObject.UserID}, 
					Serialize : Users.MarkUserAsLockedOut.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.MarkUserAsLockedOut.onErrorReceived) ? Users.MarkUserAsLockedOut.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "MarkUserAsLockedOut", { UserID : oObject.UserID}, Users.MarkUserAsLockedOut.Serialize || {});
    },
	MarkUserAsNotEnabled : function(UserID, Callback) {
        return Users.MarkUserAsNotEnabledObject({ UserID : UserID}, Callback);
    },

	MarkUserAsNotEnabledObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.MarkUserAsNotEnabled)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.MarkUserAsNotEnabled.onValidationError))
					Users.MarkUserAsNotEnabled.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "MarkUserAsNotEnabled", 
					Params : { UserID : oObject.UserID}, 
					Serialize : Users.MarkUserAsNotEnabled.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.MarkUserAsNotEnabled.onErrorReceived) ? Users.MarkUserAsNotEnabled.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "MarkUserAsNotEnabled", { UserID : oObject.UserID}, Users.MarkUserAsNotEnabled.Serialize || {});
    },
	MarkUserAsNotHasLoggedIn : function(UserID, Callback) {
        return Users.MarkUserAsNotHasLoggedInObject({ UserID : UserID}, Callback);
    },

	MarkUserAsNotHasLoggedInObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.MarkUserAsNotHasLoggedIn)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.MarkUserAsNotHasLoggedIn.onValidationError))
					Users.MarkUserAsNotHasLoggedIn.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "MarkUserAsNotHasLoggedIn", 
					Params : { UserID : oObject.UserID}, 
					Serialize : Users.MarkUserAsNotHasLoggedIn.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.MarkUserAsNotHasLoggedIn.onErrorReceived) ? Users.MarkUserAsNotHasLoggedIn.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "MarkUserAsNotHasLoggedIn", { UserID : oObject.UserID}, Users.MarkUserAsNotHasLoggedIn.Serialize || {});
    },
	MarkUserAsNotInvited : function(UserID, Callback) {
        return Users.MarkUserAsNotInvitedObject({ UserID : UserID}, Callback);
    },

	MarkUserAsNotInvitedObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.MarkUserAsNotInvited)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.MarkUserAsNotInvited.onValidationError))
					Users.MarkUserAsNotInvited.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "MarkUserAsNotInvited", 
					Params : { UserID : oObject.UserID}, 
					Serialize : Users.MarkUserAsNotInvited.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.MarkUserAsNotInvited.onErrorReceived) ? Users.MarkUserAsNotInvited.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "MarkUserAsNotInvited", { UserID : oObject.UserID}, Users.MarkUserAsNotInvited.Serialize || {});
    },
	MarkUserAsNotLockedOut : function(UserID, Callback) {
        return Users.MarkUserAsNotLockedOutObject({ UserID : UserID}, Callback);
    },

	MarkUserAsNotLockedOutObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.MarkUserAsNotLockedOut)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.MarkUserAsNotLockedOut.onValidationError))
					Users.MarkUserAsNotLockedOut.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "MarkUserAsNotLockedOut", 
					Params : { UserID : oObject.UserID}, 
					Serialize : Users.MarkUserAsNotLockedOut.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.MarkUserAsNotLockedOut.onErrorReceived) ? Users.MarkUserAsNotLockedOut.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "MarkUserAsNotLockedOut", { UserID : oObject.UserID}, Users.MarkUserAsNotLockedOut.Serialize || {});
    },
	RemoveUser : function(UserID, Callback) {
        return Users.RemoveUserObject({ UserID : UserID}, Callback);
    },

	RemoveUserObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.RemoveUser)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.RemoveUser.onValidationError))
					Users.RemoveUser.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "RemoveUser", 
					Params : { UserID : oObject.UserID}, 
					Serialize : Users.RemoveUser.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.RemoveUser.onErrorReceived) ? Users.RemoveUser.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "RemoveUser", { UserID : oObject.UserID}, Users.RemoveUser.Serialize || {});
    },
	SendInvite : function(UserID, Callback) {
        return Users.SendInviteObject({ UserID : UserID}, Callback);
    },

	SendInviteObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.SendInvite)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.SendInvite.onValidationError))
					Users.SendInvite.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "SendInvite", 
					Params : { UserID : oObject.UserID}, 
					Serialize : Users.SendInvite.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.SendInvite.onErrorReceived) ? Users.SendInvite.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "SendInvite", { UserID : oObject.UserID}, Users.SendInvite.Serialize || {});
    },
	SendPasswordReset : function(UserID, Callback) {
        return Users.SendPasswordResetObject({ UserID : UserID}, Callback);
    },

	SendPasswordResetObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.SendPasswordReset)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.SendPasswordReset.onValidationError))
					Users.SendPasswordReset.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "SendPasswordReset", 
					Params : { UserID : oObject.UserID}, 
					Serialize : Users.SendPasswordReset.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.SendPasswordReset.onErrorReceived) ? Users.SendPasswordReset.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "SendPasswordReset", { UserID : oObject.UserID}, Users.SendPasswordReset.Serialize || {});
    },
	SendVoiceAgentConfirmation : function(UserID, Callback) {
        return Users.SendVoiceAgentConfirmationObject({ UserID : UserID}, Callback);
    },

	SendVoiceAgentConfirmationObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.SendVoiceAgentConfirmation)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.SendVoiceAgentConfirmation.onValidationError))
					Users.SendVoiceAgentConfirmation.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "SendVoiceAgentConfirmation", 
					Params : { UserID : oObject.UserID}, 
					Serialize : Users.SendVoiceAgentConfirmation.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.SendVoiceAgentConfirmation.onErrorReceived) ? Users.SendVoiceAgentConfirmation.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "SendVoiceAgentConfirmation", { UserID : oObject.UserID}, Users.SendVoiceAgentConfirmation.Serialize || {});
    },
	UpdateUserData : function(UserID, Data, Callback) {
        return Users.UpdateUserDataObject({ UserID : UserID,Data : Data}, Callback);
    },

	UpdateUserDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.UpdateUserData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.UpdateUserData.onValidationError))
					Users.UpdateUserData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "UpdateUserData", 
					Params : { UserID : oObject.UserID,Data : oObject.Data}, 
					Serialize : Users.UpdateUserData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.UpdateUserData.onErrorReceived) ? Users.UpdateUserData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "UpdateUserData", { UserID : oObject.UserID,Data : oObject.Data}, Users.UpdateUserData.Serialize || {});
    },
	UpdateUserInfo : function(Email, Phone, FirstName, LastName, IsEnabled, IsLockedOut, IsSalesRepresentative, IsAdministrator, Callback) {
        return Users.UpdateUserInfoObject({ Email : Email,Phone : Phone,FirstName : FirstName,LastName : LastName,IsEnabled : IsEnabled,IsLockedOut : IsLockedOut,IsSalesRepresentative : IsSalesRepresentative,IsAdministrator : IsAdministrator}, Callback);
    },

	UpdateUserInfoObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UsersValidators.UpdateUserInfo)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Users.UpdateUserInfo.onValidationError))
					Users.UpdateUserInfo.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Users.Url, 
					Method : "UpdateUserInfo", 
					Params : { Email : oObject.Email,Phone : oObject.Phone,FirstName : oObject.FirstName,LastName : oObject.LastName,IsEnabled : oObject.IsEnabled,IsLockedOut : oObject.IsLockedOut,IsSalesRepresentative : oObject.IsSalesRepresentative,IsAdministrator : oObject.IsAdministrator}, 
					Serialize : Users.UpdateUserInfo.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Users.UpdateUserInfo.onErrorReceived) ? Users.UpdateUserInfo.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Users.Url, "UpdateUserInfo", { Email : oObject.Email,Phone : oObject.Phone,FirstName : oObject.FirstName,LastName : oObject.LastName,IsEnabled : oObject.IsEnabled,IsLockedOut : oObject.IsLockedOut,IsSalesRepresentative : oObject.IsSalesRepresentative,IsAdministrator : oObject.IsAdministrator}, Users.UpdateUserInfo.Serialize || {});
    }
};

var UsersValidators = {
	

	AgreeTermsAndConditions : {	
	},

	CheckAgreeTermsAndConditions : {	
	},

	CopyUser : {
			UserID : UsersValidatorsFields.UserID	
	},

	CreateAccount : {
			FirstName : UsersValidatorsFields.FirstName,
			LastName : UsersValidatorsFields.LastName,
			Email : UsersValidatorsFields.Email,
			Phone : UsersValidatorsFields.Phone,
			IsEnabled : UsersValidatorsFields.IsEnabled,
			IsLockedOut : UsersValidatorsFields.IsLockedOut,
			IsSalesRepresentative : UsersValidatorsFields.IsSalesRepresentative,
			IsAdministrator : UsersValidatorsFields.IsAdministrator	
	},

	GetInvitationCode : {
			Email : UsersValidatorsFields.Email	
	},

	GetUser : {
			UserID : UsersValidatorsFields.UserID	
	},

	GetUserByEmail : {
			Email : UsersValidatorsFields.Email	
	},

	GetUsers : {	
	},

	GetUsersByUserID : {
			UserID : UsersValidatorsFields.UserID	
	},

	GetUsersByUserIDSp_PagingSp : {
			UserID : UsersValidatorsFields.UserID,
			Search : UsersValidatorsFields.Search,
			SortColumn : UsersValidatorsFields.SortColumn,
			SortAscending : UsersValidatorsFields.SortAscending,
			SkipRows : UsersValidatorsFields.SkipRows,
			NumRows : UsersValidatorsFields.NumRows	
	},

	GetUsersByUserRoleRoleIDSp_PagingSp : {
			RoleID : UsersValidatorsFields.RoleID,
			Search : UsersValidatorsFields.Search,
			SortColumn : UsersValidatorsFields.SortColumn,
			SortAscending : UsersValidatorsFields.SortAscending,
			SkipRows : UsersValidatorsFields.SkipRows,
			NumRows : UsersValidatorsFields.NumRows	
	},

	GetUsersSp_PagingSp : {
			Search : UsersValidatorsFields.Search,
			SortColumn : UsersValidatorsFields.SortColumn,
			SortAscending : UsersValidatorsFields.SortAscending,
			SkipRows : UsersValidatorsFields.SkipRows,
			NumRows : UsersValidatorsFields.NumRows	
	},

	InsertUser : {
			IsEnabled : UsersValidatorsFields.IsEnabled,
			Data : UsersValidatorsFields.Data,
			Email : UsersValidatorsFields.Email,
			Phone : UsersValidatorsFields.Phone,
			Password : UsersValidatorsFields.Password,
			HasLoggedIn : UsersValidatorsFields.HasLoggedIn,
			LastLoginDate : UsersValidatorsFields.LastLoginDate,
			IsLockedOut : UsersValidatorsFields.IsLockedOut,
			InvitationCode : UsersValidatorsFields.InvitationCode,
			InvitationExpiration : UsersValidatorsFields.InvitationExpiration,
			IsInvited : UsersValidatorsFields.IsInvited,
			InvitedDate : UsersValidatorsFields.InvitedDate,
			FirstName : UsersValidatorsFields.FirstName,
			LastName : UsersValidatorsFields.LastName	
	},

	InsertUser2 : {
			Email : UsersValidatorsFields.Email,
			Password : UsersValidatorsFields.Password,
			Name : UsersValidatorsFields.Name,
			Phone : UsersValidatorsFields.Phone	
	},

	MarkUserAsEnabled : {
			UserID : UsersValidatorsFields.UserID	
	},

	MarkUserAsHasLoggedIn : {
			UserID : UsersValidatorsFields.UserID	
	},

	MarkUserAsInvited : {
			UserID : UsersValidatorsFields.UserID	
	},

	MarkUserAsLockedOut : {
			UserID : UsersValidatorsFields.UserID	
	},

	MarkUserAsNotEnabled : {
			UserID : UsersValidatorsFields.UserID	
	},

	MarkUserAsNotHasLoggedIn : {
			UserID : UsersValidatorsFields.UserID	
	},

	MarkUserAsNotInvited : {
			UserID : UsersValidatorsFields.UserID	
	},

	MarkUserAsNotLockedOut : {
			UserID : UsersValidatorsFields.UserID	
	},

	RemoveUser : {
			UserID : UsersValidatorsFields.UserID	
	},

	SendInvite : {
			UserID : UsersValidatorsFields.UserID	
	},

	SendPasswordReset : {
			UserID : UsersValidatorsFields.UserID	
	},

	SendVoiceAgentConfirmation : {
			UserID : UsersValidatorsFields.UserID	
	},

	UpdateUserData : {
			UserID : UsersValidatorsFields.UserID,
			Data : UsersValidatorsFields.Data	
	},

	UpdateUserInfo : {
			Email : UsersValidatorsFields.Email,
			Phone : UsersValidatorsFields.Phone,
			FirstName : UsersValidatorsFields.FirstName,
			LastName : UsersValidatorsFields.LastName,
			IsEnabled : UsersValidatorsFields.IsEnabled,
			IsLockedOut : UsersValidatorsFields.IsLockedOut,
			IsSalesRepresentative : UsersValidatorsFields.IsSalesRepresentative,
			IsAdministrator : UsersValidatorsFields.IsAdministrator	
	}
};

    