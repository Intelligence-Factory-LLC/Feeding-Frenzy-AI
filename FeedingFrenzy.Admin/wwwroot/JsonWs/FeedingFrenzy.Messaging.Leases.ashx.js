

//To override these validators, define them in another file and include that file before this one
if (typeof(window) == "undefined" || !ObjectUtil.HasValue(window["LeasesValidatorsFields"])) {
	var LeasesValidatorsFields = { };
}

if (!ObjectUtil.HasValue(LeasesValidatorsFields.LeaseType)) {
	LeasesValidatorsFields.LeaseType = {Validators : [Validators.Text], InvalidMessage: "Invalid LeaseType"};
}
if (!ObjectUtil.HasValue(LeasesValidatorsFields.ObjectID)) {
	LeasesValidatorsFields.ObjectID = {Validators : [Validators.Integer], InvalidMessage: "Invalid ObjectID"};
}
if (!ObjectUtil.HasValue(LeasesValidatorsFields.ObjectName)) {
	LeasesValidatorsFields.ObjectName = {Validators : [Validators.Text], InvalidMessage: "Invalid ObjectName"};
}
if (!ObjectUtil.HasValue(LeasesValidatorsFields.SessionID)) {
	LeasesValidatorsFields.SessionID = {Validators : [Validators.Text], InvalidMessage: "Invalid SessionID"};
}
if (!ObjectUtil.HasValue(LeasesValidatorsFields.User)) {
	LeasesValidatorsFields.User = {Validators : [Validators.Text], InvalidMessage: "Invalid User"};
}

		
var Leases = {	
	Url : "/JsonWs/FeedingFrenzy.Messaging.Leases.ashx"

	,
	AquireLease : function(User, ObjectName, ObjectID, LeaseType, Callback) {
        return Leases.AquireLeaseObject({ User : User,ObjectName : ObjectName,ObjectID : ObjectID,LeaseType : LeaseType}, Callback);
    },

	AquireLeaseObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeasesValidators.AquireLease)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leases.AquireLease.onValidationError))
					Leases.AquireLease.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leases.Url, 
					Method : "AquireLease", 
					Params : { User : oObject.User,ObjectName : oObject.ObjectName,ObjectID : oObject.ObjectID,LeaseType : oObject.LeaseType}, 
					Serialize : Leases.AquireLease.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leases.AquireLease.onErrorReceived) ? Leases.AquireLease.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leases.Url, "AquireLease", { User : oObject.User,ObjectName : oObject.ObjectName,ObjectID : oObject.ObjectID,LeaseType : oObject.LeaseType}, Leases.AquireLease.Serialize || {});
    },
	AquireLease2 : function(User, SessionID, ObjectName, ObjectID, LeaseType, Callback) {
        return Leases.AquireLease2Object({ User : User,SessionID : SessionID,ObjectName : ObjectName,ObjectID : ObjectID,LeaseType : LeaseType}, Callback);
    },

	AquireLease2Object : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeasesValidators.AquireLease2)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leases.AquireLease2.onValidationError))
					Leases.AquireLease2.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leases.Url, 
					Method : "AquireLease2", 
					Params : { User : oObject.User,SessionID : oObject.SessionID,ObjectName : oObject.ObjectName,ObjectID : oObject.ObjectID,LeaseType : oObject.LeaseType}, 
					Serialize : Leases.AquireLease2.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leases.AquireLease2.onErrorReceived) ? Leases.AquireLease2.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leases.Url, "AquireLease2", { User : oObject.User,SessionID : oObject.SessionID,ObjectName : oObject.ObjectName,ObjectID : oObject.ObjectID,LeaseType : oObject.LeaseType}, Leases.AquireLease2.Serialize || {});
    },
	GetActiveLeases : function(ObjectName, ObjectID, Callback) {
        return Leases.GetActiveLeasesObject({ ObjectName : ObjectName,ObjectID : ObjectID}, Callback);
    },

	GetActiveLeasesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeasesValidators.GetActiveLeases)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leases.GetActiveLeases.onValidationError))
					Leases.GetActiveLeases.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leases.Url, 
					Method : "GetActiveLeases", 
					Params : { ObjectName : oObject.ObjectName,ObjectID : oObject.ObjectID}, 
					Serialize : Leases.GetActiveLeases.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leases.GetActiveLeases.onErrorReceived) ? Leases.GetActiveLeases.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leases.Url, "GetActiveLeases", { ObjectName : oObject.ObjectName,ObjectID : oObject.ObjectID}, Leases.GetActiveLeases.Serialize || {});
    },
	GetLeases : function(User, Callback) {
        return Leases.GetLeasesObject({ User : User}, Callback);
    },

	GetLeasesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeasesValidators.GetLeases)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leases.GetLeases.onValidationError))
					Leases.GetLeases.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leases.Url, 
					Method : "GetLeases", 
					Params : { User : oObject.User}, 
					Serialize : Leases.GetLeases.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leases.GetLeases.onErrorReceived) ? Leases.GetLeases.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leases.Url, "GetLeases", { User : oObject.User}, Leases.GetLeases.Serialize || {});
    },
	GetUsers : function(Callback) {
        return Leases.GetUsersObject({ }, Callback);
    },

	GetUsersObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeasesValidators.GetUsers)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leases.GetUsers.onValidationError))
					Leases.GetUsers.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leases.Url, 
					Method : "GetUsers", 
					Params : { }, 
					Serialize : Leases.GetUsers.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leases.GetUsers.onErrorReceived) ? Leases.GetUsers.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leases.Url, "GetUsers", { }, Leases.GetUsers.Serialize || {});
    }
};

var LeasesValidators = {
	

	AquireLease : {
			User : LeasesValidatorsFields.User,
			ObjectName : LeasesValidatorsFields.ObjectName,
			ObjectID : LeasesValidatorsFields.ObjectID,
			LeaseType : LeasesValidatorsFields.LeaseType	
	},

	AquireLease2 : {
			User : LeasesValidatorsFields.User,
			SessionID : LeasesValidatorsFields.SessionID,
			ObjectName : LeasesValidatorsFields.ObjectName,
			ObjectID : LeasesValidatorsFields.ObjectID,
			LeaseType : LeasesValidatorsFields.LeaseType	
	},

	GetActiveLeases : {
			ObjectName : LeasesValidatorsFields.ObjectName,
			ObjectID : LeasesValidatorsFields.ObjectID	
	},

	GetLeases : {
			User : LeasesValidatorsFields.User	
	},

	GetUsers : {	
	}
};

    