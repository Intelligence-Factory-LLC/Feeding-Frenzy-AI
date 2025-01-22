
    	    	
var RolesValidatorsFields = {
	
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		RoleID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Role ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		RoleName : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Role Name. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) }	
}
			
var Roles = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.Roles.ashx"

	,
	CopyRole : function(RoleID, Callback) {
        return Roles.CopyRoleObject({ RoleID : RoleID}, Callback);
    },

	CopyRoleObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesValidators.CopyRole)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Roles.CopyRole.onValidationError))
					Roles.CopyRole.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Roles.Url, 
					Method : "CopyRole", 
					Params : { RoleID : oObject.RoleID}, 
					Serialize : Roles.CopyRole.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Roles.CopyRole.onErrorReceived) ? Roles.CopyRole.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Roles.Url, "CopyRole", { RoleID : oObject.RoleID}, Roles.CopyRole.Serialize || {});
    },
	GetRole : function(RoleID, Callback) {
        return Roles.GetRoleObject({ RoleID : RoleID}, Callback);
    },

	GetRoleObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesValidators.GetRole)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Roles.GetRole.onValidationError))
					Roles.GetRole.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Roles.Url, 
					Method : "GetRole", 
					Params : { RoleID : oObject.RoleID}, 
					Serialize : Roles.GetRole.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Roles.GetRole.onErrorReceived) ? Roles.GetRole.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Roles.Url, "GetRole", { RoleID : oObject.RoleID}, Roles.GetRole.Serialize || {});
    },
	GetRoleByRoleName : function(RoleName, Callback) {
        return Roles.GetRoleByRoleNameObject({ RoleName : RoleName}, Callback);
    },

	GetRoleByRoleNameObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesValidators.GetRoleByRoleName)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Roles.GetRoleByRoleName.onValidationError))
					Roles.GetRoleByRoleName.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Roles.Url, 
					Method : "GetRoleByRoleName", 
					Params : { RoleName : oObject.RoleName}, 
					Serialize : Roles.GetRoleByRoleName.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Roles.GetRoleByRoleName.onErrorReceived) ? Roles.GetRoleByRoleName.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Roles.Url, "GetRoleByRoleName", { RoleName : oObject.RoleName}, Roles.GetRoleByRoleName.Serialize || {});
    },
	GetRoles : function(Callback) {
        return Roles.GetRolesObject({ }, Callback);
    },

	GetRolesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesValidators.GetRoles)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Roles.GetRoles.onValidationError))
					Roles.GetRoles.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Roles.Url, 
					Method : "GetRoles", 
					Params : { }, 
					Serialize : Roles.GetRoles.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Roles.GetRoles.onErrorReceived) ? Roles.GetRoles.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Roles.Url, "GetRoles", { }, Roles.GetRoles.Serialize || {});
    },
	InsertRole : function(RoleName, Data, Callback) {
        return Roles.InsertRoleObject({ RoleName : RoleName,Data : Data}, Callback);
    },

	InsertRoleObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesValidators.InsertRole)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Roles.InsertRole.onValidationError))
					Roles.InsertRole.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Roles.Url, 
					Method : "InsertRole", 
					Params : { RoleName : oObject.RoleName,Data : oObject.Data}, 
					Serialize : Roles.InsertRole.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Roles.InsertRole.onErrorReceived) ? Roles.InsertRole.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Roles.Url, "InsertRole", { RoleName : oObject.RoleName,Data : oObject.Data}, Roles.InsertRole.Serialize || {});
    },
	RemoveRole : function(RoleID, Callback) {
        return Roles.RemoveRoleObject({ RoleID : RoleID}, Callback);
    },

	RemoveRoleObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesValidators.RemoveRole)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Roles.RemoveRole.onValidationError))
					Roles.RemoveRole.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Roles.Url, 
					Method : "RemoveRole", 
					Params : { RoleID : oObject.RoleID}, 
					Serialize : Roles.RemoveRole.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Roles.RemoveRole.onErrorReceived) ? Roles.RemoveRole.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Roles.Url, "RemoveRole", { RoleID : oObject.RoleID}, Roles.RemoveRole.Serialize || {});
    },
	UpdateRole : function(RoleID, RoleName, Data, Callback) {
        return Roles.UpdateRoleObject({ RoleID : RoleID,RoleName : RoleName,Data : Data}, Callback);
    },

	UpdateRoleObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesValidators.UpdateRole)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Roles.UpdateRole.onValidationError))
					Roles.UpdateRole.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Roles.Url, 
					Method : "UpdateRole", 
					Params : { RoleID : oObject.RoleID,RoleName : oObject.RoleName,Data : oObject.Data}, 
					Serialize : Roles.UpdateRole.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Roles.UpdateRole.onErrorReceived) ? Roles.UpdateRole.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Roles.Url, "UpdateRole", { RoleID : oObject.RoleID,RoleName : oObject.RoleName,Data : oObject.Data}, Roles.UpdateRole.Serialize || {});
    },
	UpdateRoleData : function(RoleID, Data, Callback) {
        return Roles.UpdateRoleDataObject({ RoleID : RoleID,Data : Data}, Callback);
    },

	UpdateRoleDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, RolesValidators.UpdateRoleData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Roles.UpdateRoleData.onValidationError))
					Roles.UpdateRoleData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Roles.Url, 
					Method : "UpdateRoleData", 
					Params : { RoleID : oObject.RoleID,Data : oObject.Data}, 
					Serialize : Roles.UpdateRoleData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Roles.UpdateRoleData.onErrorReceived) ? Roles.UpdateRoleData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Roles.Url, "UpdateRoleData", { RoleID : oObject.RoleID,Data : oObject.Data}, Roles.UpdateRoleData.Serialize || {});
    }
};

var RolesValidators = {
	

	CopyRole : {
			RoleID : RolesValidatorsFields.RoleID	
	},

	GetRole : {
			RoleID : RolesValidatorsFields.RoleID	
	},

	GetRoleByRoleName : {
			RoleName : RolesValidatorsFields.RoleName	
	},

	GetRoles : {	
	},

	InsertRole : {
			RoleName : RolesValidatorsFields.RoleName,
			Data : RolesValidatorsFields.Data	
	},

	RemoveRole : {
			RoleID : RolesValidatorsFields.RoleID	
	},

	UpdateRole : {
			RoleID : RolesValidatorsFields.RoleID,
			RoleName : RolesValidatorsFields.RoleName,
			Data : RolesValidatorsFields.Data	
	},

	UpdateRoleData : {
			RoleID : RolesValidatorsFields.RoleID,
			Data : RolesValidatorsFields.Data	
	}
};

    