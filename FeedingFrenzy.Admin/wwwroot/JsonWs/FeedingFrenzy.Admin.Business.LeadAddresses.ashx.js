
    	    	
var LeadAddressesValidatorsFields = {
	
		AddressType : {Validators : [Validators.String], InvalidMessage: "Invalid Address Type. " +   ValidatorDescriptions.Length(1, 255) },
		City : {Validators : [Validators.String], InvalidMessage: "Invalid City. " +   ValidatorDescriptions.Length(1, 255) },
		Country : {Validators : [Validators.String], InvalidMessage: "Invalid Country. " +   ValidatorDescriptions.Length(1, 255) },
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		Fax : {Validators : [Validators.Phone], InvalidMessage: "Invalid Fax. " +   ValidatorDescriptions.Phone() },
		LeadAddressID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Lead Address ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		LeadID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Lead ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		Line1 : {Validators : [Validators.String], InvalidMessage: "Invalid Street. " +   ValidatorDescriptions.Length(1, 255) },
		Line2 : {Validators : [Validators.String], InvalidMessage: "Invalid . " +   ValidatorDescriptions.Length(1, 255) },
		Name : {Validators : [Validators.String], InvalidMessage: "Invalid Name. " +   ValidatorDescriptions.Length(1, 255) },
		Phone : {Validators : [Validators.Phone], InvalidMessage: "Invalid Phone. " +   ValidatorDescriptions.Phone() },
		State : {Validators : [Validators.String], InvalidMessage: "Invalid State. " +   ValidatorDescriptions.Length(1, 255) },
		Zip : {Validators : [Validators.Zip], InvalidMessage: "Invalid Zip. " +   ValidatorDescriptions.Zip() }	
}
			
var LeadAddresses = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.LeadAddresses.ashx"

	,
	CopyLeadAddress : function(LeadAddressID, Callback) {
        return LeadAddresses.CopyLeadAddressObject({ LeadAddressID : LeadAddressID}, Callback);
    },

	CopyLeadAddressObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadAddressesValidators.CopyLeadAddress)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadAddresses.CopyLeadAddress.onValidationError))
					LeadAddresses.CopyLeadAddress.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadAddresses.Url, 
					Method : "CopyLeadAddress", 
					Params : { LeadAddressID : oObject.LeadAddressID}, 
					Serialize : LeadAddresses.CopyLeadAddress.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadAddresses.CopyLeadAddress.onErrorReceived) ? LeadAddresses.CopyLeadAddress.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadAddresses.Url, "CopyLeadAddress", { LeadAddressID : oObject.LeadAddressID}, LeadAddresses.CopyLeadAddress.Serialize || {});
    },
	GetLeadAddress : function(LeadAddressID, Callback) {
        return LeadAddresses.GetLeadAddressObject({ LeadAddressID : LeadAddressID}, Callback);
    },

	GetLeadAddressObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadAddressesValidators.GetLeadAddress)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadAddresses.GetLeadAddress.onValidationError))
					LeadAddresses.GetLeadAddress.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadAddresses.Url, 
					Method : "GetLeadAddress", 
					Params : { LeadAddressID : oObject.LeadAddressID}, 
					Serialize : LeadAddresses.GetLeadAddress.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadAddresses.GetLeadAddress.onErrorReceived) ? LeadAddresses.GetLeadAddress.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadAddresses.Url, "GetLeadAddress", { LeadAddressID : oObject.LeadAddressID}, LeadAddresses.GetLeadAddress.Serialize || {});
    },
	GetLeadAddresses : function(Callback) {
        return LeadAddresses.GetLeadAddressesObject({ }, Callback);
    },

	GetLeadAddressesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadAddressesValidators.GetLeadAddresses)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadAddresses.GetLeadAddresses.onValidationError))
					LeadAddresses.GetLeadAddresses.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadAddresses.Url, 
					Method : "GetLeadAddresses", 
					Params : { }, 
					Serialize : LeadAddresses.GetLeadAddresses.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadAddresses.GetLeadAddresses.onErrorReceived) ? LeadAddresses.GetLeadAddresses.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadAddresses.Url, "GetLeadAddresses", { }, LeadAddresses.GetLeadAddresses.Serialize || {});
    },
	GetLeadAddressesByLeadID : function(LeadID, Callback) {
        return LeadAddresses.GetLeadAddressesByLeadIDObject({ LeadID : LeadID}, Callback);
    },

	GetLeadAddressesByLeadIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadAddressesValidators.GetLeadAddressesByLeadID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadAddresses.GetLeadAddressesByLeadID.onValidationError))
					LeadAddresses.GetLeadAddressesByLeadID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadAddresses.Url, 
					Method : "GetLeadAddressesByLeadID", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : LeadAddresses.GetLeadAddressesByLeadID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadAddresses.GetLeadAddressesByLeadID.onErrorReceived) ? LeadAddresses.GetLeadAddressesByLeadID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadAddresses.Url, "GetLeadAddressesByLeadID", { LeadID : oObject.LeadID}, LeadAddresses.GetLeadAddressesByLeadID.Serialize || {});
    },
	InsertLeadAddress : function(Data, AddressType, Phone, Fax, LeadID, Name, Line1, Line2, City, State, Zip, Country, Callback) {
        return LeadAddresses.InsertLeadAddressObject({ Data : Data,AddressType : AddressType,Phone : Phone,Fax : Fax,LeadID : LeadID,Name : Name,Line1 : Line1,Line2 : Line2,City : City,State : State,Zip : Zip,Country : Country}, Callback);
    },

	InsertLeadAddressObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadAddressesValidators.InsertLeadAddress)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadAddresses.InsertLeadAddress.onValidationError))
					LeadAddresses.InsertLeadAddress.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadAddresses.Url, 
					Method : "InsertLeadAddress", 
					Params : { Data : oObject.Data,AddressType : oObject.AddressType,Phone : oObject.Phone,Fax : oObject.Fax,LeadID : oObject.LeadID,Name : oObject.Name,Line1 : oObject.Line1,Line2 : oObject.Line2,City : oObject.City,State : oObject.State,Zip : oObject.Zip,Country : oObject.Country}, 
					Serialize : LeadAddresses.InsertLeadAddress.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadAddresses.InsertLeadAddress.onErrorReceived) ? LeadAddresses.InsertLeadAddress.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadAddresses.Url, "InsertLeadAddress", { Data : oObject.Data,AddressType : oObject.AddressType,Phone : oObject.Phone,Fax : oObject.Fax,LeadID : oObject.LeadID,Name : oObject.Name,Line1 : oObject.Line1,Line2 : oObject.Line2,City : oObject.City,State : oObject.State,Zip : oObject.Zip,Country : oObject.Country}, LeadAddresses.InsertLeadAddress.Serialize || {});
    },
	RemoveLeadAddress : function(LeadAddressID, Callback) {
        return LeadAddresses.RemoveLeadAddressObject({ LeadAddressID : LeadAddressID}, Callback);
    },

	RemoveLeadAddressObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadAddressesValidators.RemoveLeadAddress)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadAddresses.RemoveLeadAddress.onValidationError))
					LeadAddresses.RemoveLeadAddress.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadAddresses.Url, 
					Method : "RemoveLeadAddress", 
					Params : { LeadAddressID : oObject.LeadAddressID}, 
					Serialize : LeadAddresses.RemoveLeadAddress.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadAddresses.RemoveLeadAddress.onErrorReceived) ? LeadAddresses.RemoveLeadAddress.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadAddresses.Url, "RemoveLeadAddress", { LeadAddressID : oObject.LeadAddressID}, LeadAddresses.RemoveLeadAddress.Serialize || {});
    },
	UpdateLeadAddress : function(Data, AddressType, Phone, Fax, LeadAddressID, LeadID, Name, Line1, Line2, City, State, Zip, Country, Callback) {
        return LeadAddresses.UpdateLeadAddressObject({ Data : Data,AddressType : AddressType,Phone : Phone,Fax : Fax,LeadAddressID : LeadAddressID,LeadID : LeadID,Name : Name,Line1 : Line1,Line2 : Line2,City : City,State : State,Zip : Zip,Country : Country}, Callback);
    },

	UpdateLeadAddressObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadAddressesValidators.UpdateLeadAddress)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadAddresses.UpdateLeadAddress.onValidationError))
					LeadAddresses.UpdateLeadAddress.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadAddresses.Url, 
					Method : "UpdateLeadAddress", 
					Params : { Data : oObject.Data,AddressType : oObject.AddressType,Phone : oObject.Phone,Fax : oObject.Fax,LeadAddressID : oObject.LeadAddressID,LeadID : oObject.LeadID,Name : oObject.Name,Line1 : oObject.Line1,Line2 : oObject.Line2,City : oObject.City,State : oObject.State,Zip : oObject.Zip,Country : oObject.Country}, 
					Serialize : LeadAddresses.UpdateLeadAddress.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadAddresses.UpdateLeadAddress.onErrorReceived) ? LeadAddresses.UpdateLeadAddress.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadAddresses.Url, "UpdateLeadAddress", { Data : oObject.Data,AddressType : oObject.AddressType,Phone : oObject.Phone,Fax : oObject.Fax,LeadAddressID : oObject.LeadAddressID,LeadID : oObject.LeadID,Name : oObject.Name,Line1 : oObject.Line1,Line2 : oObject.Line2,City : oObject.City,State : oObject.State,Zip : oObject.Zip,Country : oObject.Country}, LeadAddresses.UpdateLeadAddress.Serialize || {});
    },
	UpdateLeadAddressData : function(LeadAddressID, Data, Callback) {
        return LeadAddresses.UpdateLeadAddressDataObject({ LeadAddressID : LeadAddressID,Data : Data}, Callback);
    },

	UpdateLeadAddressDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadAddressesValidators.UpdateLeadAddressData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadAddresses.UpdateLeadAddressData.onValidationError))
					LeadAddresses.UpdateLeadAddressData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadAddresses.Url, 
					Method : "UpdateLeadAddressData", 
					Params : { LeadAddressID : oObject.LeadAddressID,Data : oObject.Data}, 
					Serialize : LeadAddresses.UpdateLeadAddressData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadAddresses.UpdateLeadAddressData.onErrorReceived) ? LeadAddresses.UpdateLeadAddressData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadAddresses.Url, "UpdateLeadAddressData", { LeadAddressID : oObject.LeadAddressID,Data : oObject.Data}, LeadAddresses.UpdateLeadAddressData.Serialize || {});
    }
};

var LeadAddressesValidators = {
	

	CopyLeadAddress : {
			LeadAddressID : LeadAddressesValidatorsFields.LeadAddressID	
	},

	GetLeadAddress : {
			LeadAddressID : LeadAddressesValidatorsFields.LeadAddressID	
	},

	GetLeadAddresses : {	
	},

	GetLeadAddressesByLeadID : {
			LeadID : LeadAddressesValidatorsFields.LeadID	
	},

	InsertLeadAddress : {
			Data : LeadAddressesValidatorsFields.Data,
			AddressType : LeadAddressesValidatorsFields.AddressType,
			Phone : LeadAddressesValidatorsFields.Phone,
			Fax : LeadAddressesValidatorsFields.Fax,
			LeadID : LeadAddressesValidatorsFields.LeadID,
			Name : LeadAddressesValidatorsFields.Name,
			Line1 : LeadAddressesValidatorsFields.Line1,
			Line2 : LeadAddressesValidatorsFields.Line2,
			City : LeadAddressesValidatorsFields.City,
			State : LeadAddressesValidatorsFields.State,
			Zip : LeadAddressesValidatorsFields.Zip,
			Country : LeadAddressesValidatorsFields.Country	
	},

	RemoveLeadAddress : {
			LeadAddressID : LeadAddressesValidatorsFields.LeadAddressID	
	},

	UpdateLeadAddress : {
			Data : LeadAddressesValidatorsFields.Data,
			AddressType : LeadAddressesValidatorsFields.AddressType,
			Phone : LeadAddressesValidatorsFields.Phone,
			Fax : LeadAddressesValidatorsFields.Fax,
			LeadAddressID : LeadAddressesValidatorsFields.LeadAddressID,
			LeadID : LeadAddressesValidatorsFields.LeadID,
			Name : LeadAddressesValidatorsFields.Name,
			Line1 : LeadAddressesValidatorsFields.Line1,
			Line2 : LeadAddressesValidatorsFields.Line2,
			City : LeadAddressesValidatorsFields.City,
			State : LeadAddressesValidatorsFields.State,
			Zip : LeadAddressesValidatorsFields.Zip,
			Country : LeadAddressesValidatorsFields.Country	
	},

	UpdateLeadAddressData : {
			LeadAddressID : LeadAddressesValidatorsFields.LeadAddressID,
			Data : LeadAddressesValidatorsFields.Data	
	}
};

    