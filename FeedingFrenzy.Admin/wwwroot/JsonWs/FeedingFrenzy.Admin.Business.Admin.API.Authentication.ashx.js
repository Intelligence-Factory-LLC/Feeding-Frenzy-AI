

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["AuthenticationValidatorsFields"])) {
	var AuthenticationValidatorsFields = { };
}

if (!ObjectUtil.HasValue(AuthenticationValidatorsFields.context)) {
	AuthenticationValidatorsFields.context = {Validators : [Validators.Empty], InvalidMessage: "Invalid context"};
}
if (!ObjectUtil.HasValue(AuthenticationValidatorsFields.Email)) {
	AuthenticationValidatorsFields.Email = {Validators : [Validators.Text], InvalidMessage: "Invalid Email"};
}
if (!ObjectUtil.HasValue(AuthenticationValidatorsFields.GUID)) {
	AuthenticationValidatorsFields.GUID = {Validators : [Validators.Text], InvalidMessage: "Invalid GUID"};
}
if (!ObjectUtil.HasValue(AuthenticationValidatorsFields.Password)) {
	AuthenticationValidatorsFields.Password = {Validators : [Validators.Text], InvalidMessage: "Invalid Password"};
}
if (!ObjectUtil.HasValue(AuthenticationValidatorsFields.strAuthenticationToken)) {
	AuthenticationValidatorsFields.strAuthenticationToken = {Validators : [Validators.Text], InvalidMessage: "Invalid strAuthenticationToken"};
}
if (!ObjectUtil.HasValue(AuthenticationValidatorsFields.Token)) {
	AuthenticationValidatorsFields.Token = {Validators : [Validators.Text], InvalidMessage: "Invalid Token"};
}

		
var Authentication = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.Admin.API.Authentication.ashx"

	,
	ExternalLogin : function(Email, Token, context, Callback) {
        return Authentication.ExternalLoginObject({ Email : Email,Token : Token,context : context}, Callback);
    },

	ExternalLoginObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthenticationValidators.ExternalLogin)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authentication.ExternalLogin.onValidationError))
					Authentication.ExternalLogin.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authentication.Url, 
					Method : "ExternalLogin", 
					Params : { Email : oObject.Email,Token : oObject.Token,context : oObject.context}, 
					Serialize : Authentication.ExternalLogin.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authentication.ExternalLogin.onErrorReceived) ? Authentication.ExternalLogin.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authentication.Url, "ExternalLogin", { Email : oObject.Email,Token : oObject.Token,context : oObject.context}, Authentication.ExternalLogin.Serialize || {});
    },
	Impersonate : function(strAuthenticationToken, context, Callback) {
        return Authentication.ImpersonateObject({ strAuthenticationToken : strAuthenticationToken,context : context}, Callback);
    },

	ImpersonateObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthenticationValidators.Impersonate)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authentication.Impersonate.onValidationError))
					Authentication.Impersonate.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authentication.Url, 
					Method : "Impersonate", 
					Params : { strAuthenticationToken : oObject.strAuthenticationToken,context : oObject.context}, 
					Serialize : Authentication.Impersonate.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authentication.Impersonate.onErrorReceived) ? Authentication.Impersonate.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authentication.Url, "Impersonate", { strAuthenticationToken : oObject.strAuthenticationToken,context : oObject.context}, Authentication.Impersonate.Serialize || {});
    },
	Login : function(Email, Password, context, Callback) {
        return Authentication.LoginObject({ Email : Email,Password : Password,context : context}, Callback);
    },

	LoginObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthenticationValidators.Login)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authentication.Login.onValidationError))
					Authentication.Login.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authentication.Url, 
					Method : "Login", 
					Params : { Email : oObject.Email,Password : oObject.Password,context : oObject.context}, 
					Serialize : Authentication.Login.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authentication.Login.onErrorReceived) ? Authentication.Login.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authentication.Url, "Login", { Email : oObject.Email,Password : oObject.Password,context : oObject.context}, Authentication.Login.Serialize || {});
    },
	LoginBuffaly : function(Email, Password, context, Callback) {
        return Authentication.LoginBuffalyObject({ Email : Email,Password : Password,context : context}, Callback);
    },

	LoginBuffalyObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthenticationValidators.LoginBuffaly)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authentication.LoginBuffaly.onValidationError))
					Authentication.LoginBuffaly.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authentication.Url, 
					Method : "LoginBuffaly", 
					Params : { Email : oObject.Email,Password : oObject.Password,context : oObject.context}, 
					Serialize : Authentication.LoginBuffaly.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authentication.LoginBuffaly.onErrorReceived) ? Authentication.LoginBuffaly.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authentication.Url, "LoginBuffaly", { Email : oObject.Email,Password : oObject.Password,context : oObject.context}, Authentication.LoginBuffaly.Serialize || {});
    },
	ResetPassword : function(Email, Callback) {
        return Authentication.ResetPasswordObject({ Email : Email}, Callback);
    },

	ResetPasswordObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthenticationValidators.ResetPassword)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authentication.ResetPassword.onValidationError))
					Authentication.ResetPassword.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authentication.Url, 
					Method : "ResetPassword", 
					Params : { Email : oObject.Email}, 
					Serialize : Authentication.ResetPassword.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authentication.ResetPassword.onErrorReceived) ? Authentication.ResetPassword.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authentication.Url, "ResetPassword", { Email : oObject.Email}, Authentication.ResetPassword.Serialize || {});
    },
	SetPassword : function(Email, GUID, Password, context, Callback) {
        return Authentication.SetPasswordObject({ Email : Email,GUID : GUID,Password : Password,context : context}, Callback);
    },

	SetPasswordObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthenticationValidators.SetPassword)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authentication.SetPassword.onValidationError))
					Authentication.SetPassword.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authentication.Url, 
					Method : "SetPassword", 
					Params : { Email : oObject.Email,GUID : oObject.GUID,Password : oObject.Password,context : oObject.context}, 
					Serialize : Authentication.SetPassword.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authentication.SetPassword.onErrorReceived) ? Authentication.SetPassword.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authentication.Url, "SetPassword", { Email : oObject.Email,GUID : oObject.GUID,Password : oObject.Password,context : oObject.context}, Authentication.SetPassword.Serialize || {});
    },
	SignInWithGoogle : function(Callback) {
        return Authentication.SignInWithGoogleObject({ }, Callback);
    },

	SignInWithGoogleObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AuthenticationValidators.SignInWithGoogle)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Authentication.SignInWithGoogle.onValidationError))
					Authentication.SignInWithGoogle.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Authentication.Url, 
					Method : "SignInWithGoogle", 
					Params : { }, 
					Serialize : Authentication.SignInWithGoogle.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Authentication.SignInWithGoogle.onErrorReceived) ? Authentication.SignInWithGoogle.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Authentication.Url, "SignInWithGoogle", { }, Authentication.SignInWithGoogle.Serialize || {});
    }
};

var AuthenticationValidators = {
	

	ExternalLogin : {
			Email : AuthenticationValidatorsFields.Email,
			Token : AuthenticationValidatorsFields.Token,
			context : AuthenticationValidatorsFields.context	
	},

	Impersonate : {
			strAuthenticationToken : AuthenticationValidatorsFields.strAuthenticationToken,
			context : AuthenticationValidatorsFields.context	
	},

	Login : {
			Email : AuthenticationValidatorsFields.Email,
			Password : AuthenticationValidatorsFields.Password,
			context : AuthenticationValidatorsFields.context	
	},

	LoginBuffaly : {
			Email : AuthenticationValidatorsFields.Email,
			Password : AuthenticationValidatorsFields.Password,
			context : AuthenticationValidatorsFields.context	
	},

	ResetPassword : {
			Email : AuthenticationValidatorsFields.Email	
	},

	SetPassword : {
			Email : AuthenticationValidatorsFields.Email,
			GUID : AuthenticationValidatorsFields.GUID,
			Password : AuthenticationValidatorsFields.Password,
			context : AuthenticationValidatorsFields.context	
	},

	SignInWithGoogle : {	
	}
};

    