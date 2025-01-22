
    	    	
var UserRolesValidatorsFields = {
	
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		RoleID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Role ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		UserID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid User ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		UserRoleID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid User Role ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() }	
}
			
var UserRoles = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.UserRoles.ashx"

	,
	CopyUserRole : function(UserRoleID, Callback) {
        return UserRoles.CopyUserRoleObject({ UserRoleID : UserRoleID}, Callback);
    },

	CopyUserRoleObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UserRolesValidators.CopyUserRole)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UserRoles.CopyUserRole.onValidationError))
					UserRoles.CopyUserRole.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UserRoles.Url, 
					Method : "CopyUserRole", 
					Params : { UserRoleID : oObject.UserRoleID}, 
					Serialize : UserRoles.CopyUserRole.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UserRoles.CopyUserRole.onErrorReceived) ? UserRoles.CopyUserRole.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UserRoles.Url, "CopyUserRole", { UserRoleID : oObject.UserRoleID}, UserRoles.CopyUserRole.Serialize || {});
    },
	GetUserRole : function(UserRoleID, Callback) {
        return UserRoles.GetUserRoleObject({ UserRoleID : UserRoleID}, Callback);
    },

	GetUserRoleObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UserRolesValidators.GetUserRole)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UserRoles.GetUserRole.onValidationError))
					UserRoles.GetUserRole.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UserRoles.Url, 
					Method : "GetUserRole", 
					Params : { UserRoleID : oObject.UserRoleID}, 
					Serialize : UserRoles.GetUserRole.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UserRoles.GetUserRole.onErrorReceived) ? UserRoles.GetUserRole.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UserRoles.Url, "GetUserRole", { UserRoleID : oObject.UserRoleID}, UserRoles.GetUserRole.Serialize || {});
    },
	GetUserRoleByRoleIDUserID : function(RoleID, UserID, Callback) {
        return UserRoles.GetUserRoleByRoleIDUserIDObject({ RoleID : RoleID,UserID : UserID}, Callback);
    },

	GetUserRoleByRoleIDUserIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UserRolesValidators.GetUserRoleByRoleIDUserID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UserRoles.GetUserRoleByRoleIDUserID.onValidationError))
					UserRoles.GetUserRoleByRoleIDUserID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UserRoles.Url, 
					Method : "GetUserRoleByRoleIDUserID", 
					Params : { RoleID : oObject.RoleID,UserID : oObject.UserID}, 
					Serialize : UserRoles.GetUserRoleByRoleIDUserID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UserRoles.GetUserRoleByRoleIDUserID.onErrorReceived) ? UserRoles.GetUserRoleByRoleIDUserID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UserRoles.Url, "GetUserRoleByRoleIDUserID", { RoleID : oObject.RoleID,UserID : oObject.UserID}, UserRoles.GetUserRoleByRoleIDUserID.Serialize || {});
    },
	GetUserRoles : function(Callback) {
        return UserRoles.GetUserRolesObject({ }, Callback);
    },

	GetUserRolesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UserRolesValidators.GetUserRoles)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UserRoles.GetUserRoles.onValidationError))
					UserRoles.GetUserRoles.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UserRoles.Url, 
					Method : "GetUserRoles", 
					Params : { }, 
					Serialize : UserRoles.GetUserRoles.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UserRoles.GetUserRoles.onErrorReceived) ? UserRoles.GetUserRoles.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UserRoles.Url, "GetUserRoles", { }, UserRoles.GetUserRoles.Serialize || {});
    },
	GetUserRolesByRoleID : function(RoleID, Callback) {
        return UserRoles.GetUserRolesByRoleIDObject({ RoleID : RoleID}, Callback);
    },

	GetUserRolesByRoleIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UserRolesValidators.GetUserRolesByRoleID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UserRoles.GetUserRolesByRoleID.onValidationError))
					UserRoles.GetUserRolesByRoleID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UserRoles.Url, 
					Method : "GetUserRolesByRoleID", 
					Params : { RoleID : oObject.RoleID}, 
					Serialize : UserRoles.GetUserRolesByRoleID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UserRoles.GetUserRolesByRoleID.onErrorReceived) ? UserRoles.GetUserRolesByRoleID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UserRoles.Url, "GetUserRolesByRoleID", { RoleID : oObject.RoleID}, UserRoles.GetUserRolesByRoleID.Serialize || {});
    },
	GetUserRolesByUserID : function(UserID, Callback) {
        return UserRoles.GetUserRolesByUserIDObject({ UserID : UserID}, Callback);
    },

	GetUserRolesByUserIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UserRolesValidators.GetUserRolesByUserID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UserRoles.GetUserRolesByUserID.onValidationError))
					UserRoles.GetUserRolesByUserID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UserRoles.Url, 
					Method : "GetUserRolesByUserID", 
					Params : { UserID : oObject.UserID}, 
					Serialize : UserRoles.GetUserRolesByUserID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UserRoles.GetUserRolesByUserID.onErrorReceived) ? UserRoles.GetUserRolesByUserID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UserRoles.Url, "GetUserRolesByUserID", { UserID : oObject.UserID}, UserRoles.GetUserRolesByUserID.Serialize || {});
    },
	InsertUserRole : function(UserID, RoleID, Data, Callback) {
        return UserRoles.InsertUserRoleObject({ UserID : UserID,RoleID : RoleID,Data : Data}, Callback);
    },

	InsertUserRoleObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UserRolesValidators.InsertUserRole)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UserRoles.InsertUserRole.onValidationError))
					UserRoles.InsertUserRole.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UserRoles.Url, 
					Method : "InsertUserRole", 
					Params : { UserID : oObject.UserID,RoleID : oObject.RoleID,Data : oObject.Data}, 
					Serialize : UserRoles.InsertUserRole.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UserRoles.InsertUserRole.onErrorReceived) ? UserRoles.InsertUserRole.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UserRoles.Url, "InsertUserRole", { UserID : oObject.UserID,RoleID : oObject.RoleID,Data : oObject.Data}, UserRoles.InsertUserRole.Serialize || {});
    },
	RemoveUserRole : function(UserRoleID, Callback) {
        return UserRoles.RemoveUserRoleObject({ UserRoleID : UserRoleID}, Callback);
    },

	RemoveUserRoleObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UserRolesValidators.RemoveUserRole)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UserRoles.RemoveUserRole.onValidationError))
					UserRoles.RemoveUserRole.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UserRoles.Url, 
					Method : "RemoveUserRole", 
					Params : { UserRoleID : oObject.UserRoleID}, 
					Serialize : UserRoles.RemoveUserRole.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UserRoles.RemoveUserRole.onErrorReceived) ? UserRoles.RemoveUserRole.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UserRoles.Url, "RemoveUserRole", { UserRoleID : oObject.UserRoleID}, UserRoles.RemoveUserRole.Serialize || {});
    },
	UpdateUserRole : function(UserRoleID, UserID, RoleID, Data, Callback) {
        return UserRoles.UpdateUserRoleObject({ UserRoleID : UserRoleID,UserID : UserID,RoleID : RoleID,Data : Data}, Callback);
    },

	UpdateUserRoleObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UserRolesValidators.UpdateUserRole)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UserRoles.UpdateUserRole.onValidationError))
					UserRoles.UpdateUserRole.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UserRoles.Url, 
					Method : "UpdateUserRole", 
					Params : { UserRoleID : oObject.UserRoleID,UserID : oObject.UserID,RoleID : oObject.RoleID,Data : oObject.Data}, 
					Serialize : UserRoles.UpdateUserRole.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UserRoles.UpdateUserRole.onErrorReceived) ? UserRoles.UpdateUserRole.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UserRoles.Url, "UpdateUserRole", { UserRoleID : oObject.UserRoleID,UserID : oObject.UserID,RoleID : oObject.RoleID,Data : oObject.Data}, UserRoles.UpdateUserRole.Serialize || {});
    },
	UpdateUserRoleData : function(UserRoleID, Data, Callback) {
        return UserRoles.UpdateUserRoleDataObject({ UserRoleID : UserRoleID,Data : Data}, Callback);
    },

	UpdateUserRoleDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, UserRolesValidators.UpdateUserRoleData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(UserRoles.UpdateUserRoleData.onValidationError))
					UserRoles.UpdateUserRoleData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: UserRoles.Url, 
					Method : "UpdateUserRoleData", 
					Params : { UserRoleID : oObject.UserRoleID,Data : oObject.Data}, 
					Serialize : UserRoles.UpdateUserRoleData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(UserRoles.UpdateUserRoleData.onErrorReceived) ? UserRoles.UpdateUserRoleData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(UserRoles.Url, "UpdateUserRoleData", { UserRoleID : oObject.UserRoleID,Data : oObject.Data}, UserRoles.UpdateUserRoleData.Serialize || {});
    }
};

var UserRolesValidators = {
	

	CopyUserRole : {
			UserRoleID : UserRolesValidatorsFields.UserRoleID	
	},

	GetUserRole : {
			UserRoleID : UserRolesValidatorsFields.UserRoleID	
	},

	GetUserRoleByRoleIDUserID : {
			RoleID : UserRolesValidatorsFields.RoleID,
			UserID : UserRolesValidatorsFields.UserID	
	},

	GetUserRoles : {	
	},

	GetUserRolesByRoleID : {
			RoleID : UserRolesValidatorsFields.RoleID	
	},

	GetUserRolesByUserID : {
			UserID : UserRolesValidatorsFields.UserID	
	},

	InsertUserRole : {
			UserID : UserRolesValidatorsFields.UserID,
			RoleID : UserRolesValidatorsFields.RoleID,
			Data : UserRolesValidatorsFields.Data	
	},

	RemoveUserRole : {
			UserRoleID : UserRolesValidatorsFields.UserRoleID	
	},

	UpdateUserRole : {
			UserRoleID : UserRolesValidatorsFields.UserRoleID,
			UserID : UserRolesValidatorsFields.UserID,
			RoleID : UserRolesValidatorsFields.RoleID,
			Data : UserRolesValidatorsFields.Data	
	},

	UpdateUserRoleData : {
			UserRoleID : UserRolesValidatorsFields.UserRoleID,
			Data : UserRolesValidatorsFields.Data	
	}
};

    