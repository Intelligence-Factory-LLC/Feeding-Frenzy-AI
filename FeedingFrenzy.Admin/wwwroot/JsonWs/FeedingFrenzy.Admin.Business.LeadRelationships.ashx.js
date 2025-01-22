
    	    	
var LeadRelationshipsValidatorsFields = {
	
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		LeadID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Lead ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		LeadRelationshipID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Lead Relationship ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		LeadRelationshipTypeID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Lead Relationship Type ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		RelatedLeadID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Related Lead ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() }	
}
			
var LeadRelationships = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.LeadRelationships.ashx"

	,
	CopyLeadRelationship : function(LeadRelationshipID, Callback) {
        return LeadRelationships.CopyLeadRelationshipObject({ LeadRelationshipID : LeadRelationshipID}, Callback);
    },

	CopyLeadRelationshipObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsValidators.CopyLeadRelationship)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationships.CopyLeadRelationship.onValidationError))
					LeadRelationships.CopyLeadRelationship.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationships.Url, 
					Method : "CopyLeadRelationship", 
					Params : { LeadRelationshipID : oObject.LeadRelationshipID}, 
					Serialize : LeadRelationships.CopyLeadRelationship.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationships.CopyLeadRelationship.onErrorReceived) ? LeadRelationships.CopyLeadRelationship.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationships.Url, "CopyLeadRelationship", { LeadRelationshipID : oObject.LeadRelationshipID}, LeadRelationships.CopyLeadRelationship.Serialize || {});
    },
	GetLeadRelationship : function(LeadRelationshipID, Callback) {
        return LeadRelationships.GetLeadRelationshipObject({ LeadRelationshipID : LeadRelationshipID}, Callback);
    },

	GetLeadRelationshipObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsValidators.GetLeadRelationship)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationships.GetLeadRelationship.onValidationError))
					LeadRelationships.GetLeadRelationship.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationships.Url, 
					Method : "GetLeadRelationship", 
					Params : { LeadRelationshipID : oObject.LeadRelationshipID}, 
					Serialize : LeadRelationships.GetLeadRelationship.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationships.GetLeadRelationship.onErrorReceived) ? LeadRelationships.GetLeadRelationship.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationships.Url, "GetLeadRelationship", { LeadRelationshipID : oObject.LeadRelationshipID}, LeadRelationships.GetLeadRelationship.Serialize || {});
    },
	GetLeadRelationships : function(Callback) {
        return LeadRelationships.GetLeadRelationshipsObject({ }, Callback);
    },

	GetLeadRelationshipsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsValidators.GetLeadRelationships)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationships.GetLeadRelationships.onValidationError))
					LeadRelationships.GetLeadRelationships.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationships.Url, 
					Method : "GetLeadRelationships", 
					Params : { }, 
					Serialize : LeadRelationships.GetLeadRelationships.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationships.GetLeadRelationships.onErrorReceived) ? LeadRelationships.GetLeadRelationships.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationships.Url, "GetLeadRelationships", { }, LeadRelationships.GetLeadRelationships.Serialize || {});
    },
	GetLeadRelationshipsByLeadID : function(LeadID, Callback) {
        return LeadRelationships.GetLeadRelationshipsByLeadIDObject({ LeadID : LeadID}, Callback);
    },

	GetLeadRelationshipsByLeadIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsValidators.GetLeadRelationshipsByLeadID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationships.GetLeadRelationshipsByLeadID.onValidationError))
					LeadRelationships.GetLeadRelationshipsByLeadID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationships.Url, 
					Method : "GetLeadRelationshipsByLeadID", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : LeadRelationships.GetLeadRelationshipsByLeadID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationships.GetLeadRelationshipsByLeadID.onErrorReceived) ? LeadRelationships.GetLeadRelationshipsByLeadID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationships.Url, "GetLeadRelationshipsByLeadID", { LeadID : oObject.LeadID}, LeadRelationships.GetLeadRelationshipsByLeadID.Serialize || {});
    },
	GetLeadRelationshipsByLeadRelationshipTypeID : function(LeadRelationshipTypeID, Callback) {
        return LeadRelationships.GetLeadRelationshipsByLeadRelationshipTypeIDObject({ LeadRelationshipTypeID : LeadRelationshipTypeID}, Callback);
    },

	GetLeadRelationshipsByLeadRelationshipTypeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsValidators.GetLeadRelationshipsByLeadRelationshipTypeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationships.GetLeadRelationshipsByLeadRelationshipTypeID.onValidationError))
					LeadRelationships.GetLeadRelationshipsByLeadRelationshipTypeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationships.Url, 
					Method : "GetLeadRelationshipsByLeadRelationshipTypeID", 
					Params : { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID}, 
					Serialize : LeadRelationships.GetLeadRelationshipsByLeadRelationshipTypeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationships.GetLeadRelationshipsByLeadRelationshipTypeID.onErrorReceived) ? LeadRelationships.GetLeadRelationshipsByLeadRelationshipTypeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationships.Url, "GetLeadRelationshipsByLeadRelationshipTypeID", { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID}, LeadRelationships.GetLeadRelationshipsByLeadRelationshipTypeID.Serialize || {});
    },
	GetLeadRelationshipsByRelatedLeadID : function(RelatedLeadID, Callback) {
        return LeadRelationships.GetLeadRelationshipsByRelatedLeadIDObject({ RelatedLeadID : RelatedLeadID}, Callback);
    },

	GetLeadRelationshipsByRelatedLeadIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsValidators.GetLeadRelationshipsByRelatedLeadID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationships.GetLeadRelationshipsByRelatedLeadID.onValidationError))
					LeadRelationships.GetLeadRelationshipsByRelatedLeadID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationships.Url, 
					Method : "GetLeadRelationshipsByRelatedLeadID", 
					Params : { RelatedLeadID : oObject.RelatedLeadID}, 
					Serialize : LeadRelationships.GetLeadRelationshipsByRelatedLeadID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationships.GetLeadRelationshipsByRelatedLeadID.onErrorReceived) ? LeadRelationships.GetLeadRelationshipsByRelatedLeadID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationships.Url, "GetLeadRelationshipsByRelatedLeadID", { RelatedLeadID : oObject.RelatedLeadID}, LeadRelationships.GetLeadRelationshipsByRelatedLeadID.Serialize || {});
    },
	InsertLeadRelationship : function(LeadRelationshipTypeID, LeadID, RelatedLeadID, Data, Callback) {
        return LeadRelationships.InsertLeadRelationshipObject({ LeadRelationshipTypeID : LeadRelationshipTypeID,LeadID : LeadID,RelatedLeadID : RelatedLeadID,Data : Data}, Callback);
    },

	InsertLeadRelationshipObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsValidators.InsertLeadRelationship)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationships.InsertLeadRelationship.onValidationError))
					LeadRelationships.InsertLeadRelationship.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationships.Url, 
					Method : "InsertLeadRelationship", 
					Params : { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID,LeadID : oObject.LeadID,RelatedLeadID : oObject.RelatedLeadID,Data : oObject.Data}, 
					Serialize : LeadRelationships.InsertLeadRelationship.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationships.InsertLeadRelationship.onErrorReceived) ? LeadRelationships.InsertLeadRelationship.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationships.Url, "InsertLeadRelationship", { LeadRelationshipTypeID : oObject.LeadRelationshipTypeID,LeadID : oObject.LeadID,RelatedLeadID : oObject.RelatedLeadID,Data : oObject.Data}, LeadRelationships.InsertLeadRelationship.Serialize || {});
    },
	RemoveLeadRelationship : function(LeadRelationshipID, Callback) {
        return LeadRelationships.RemoveLeadRelationshipObject({ LeadRelationshipID : LeadRelationshipID}, Callback);
    },

	RemoveLeadRelationshipObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsValidators.RemoveLeadRelationship)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationships.RemoveLeadRelationship.onValidationError))
					LeadRelationships.RemoveLeadRelationship.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationships.Url, 
					Method : "RemoveLeadRelationship", 
					Params : { LeadRelationshipID : oObject.LeadRelationshipID}, 
					Serialize : LeadRelationships.RemoveLeadRelationship.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationships.RemoveLeadRelationship.onErrorReceived) ? LeadRelationships.RemoveLeadRelationship.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationships.Url, "RemoveLeadRelationship", { LeadRelationshipID : oObject.LeadRelationshipID}, LeadRelationships.RemoveLeadRelationship.Serialize || {});
    },
	UpdateLeadRelationship : function(LeadRelationshipID, LeadRelationshipTypeID, LeadID, RelatedLeadID, Data, Callback) {
        return LeadRelationships.UpdateLeadRelationshipObject({ LeadRelationshipID : LeadRelationshipID,LeadRelationshipTypeID : LeadRelationshipTypeID,LeadID : LeadID,RelatedLeadID : RelatedLeadID,Data : Data}, Callback);
    },

	UpdateLeadRelationshipObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsValidators.UpdateLeadRelationship)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationships.UpdateLeadRelationship.onValidationError))
					LeadRelationships.UpdateLeadRelationship.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationships.Url, 
					Method : "UpdateLeadRelationship", 
					Params : { LeadRelationshipID : oObject.LeadRelationshipID,LeadRelationshipTypeID : oObject.LeadRelationshipTypeID,LeadID : oObject.LeadID,RelatedLeadID : oObject.RelatedLeadID,Data : oObject.Data}, 
					Serialize : LeadRelationships.UpdateLeadRelationship.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationships.UpdateLeadRelationship.onErrorReceived) ? LeadRelationships.UpdateLeadRelationship.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationships.Url, "UpdateLeadRelationship", { LeadRelationshipID : oObject.LeadRelationshipID,LeadRelationshipTypeID : oObject.LeadRelationshipTypeID,LeadID : oObject.LeadID,RelatedLeadID : oObject.RelatedLeadID,Data : oObject.Data}, LeadRelationships.UpdateLeadRelationship.Serialize || {});
    },
	UpdateLeadRelationshipData : function(LeadRelationshipID, Data, Callback) {
        return LeadRelationships.UpdateLeadRelationshipDataObject({ LeadRelationshipID : LeadRelationshipID,Data : Data}, Callback);
    },

	UpdateLeadRelationshipDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadRelationshipsValidators.UpdateLeadRelationshipData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(LeadRelationships.UpdateLeadRelationshipData.onValidationError))
					LeadRelationships.UpdateLeadRelationshipData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: LeadRelationships.Url, 
					Method : "UpdateLeadRelationshipData", 
					Params : { LeadRelationshipID : oObject.LeadRelationshipID,Data : oObject.Data}, 
					Serialize : LeadRelationships.UpdateLeadRelationshipData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(LeadRelationships.UpdateLeadRelationshipData.onErrorReceived) ? LeadRelationships.UpdateLeadRelationshipData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(LeadRelationships.Url, "UpdateLeadRelationshipData", { LeadRelationshipID : oObject.LeadRelationshipID,Data : oObject.Data}, LeadRelationships.UpdateLeadRelationshipData.Serialize || {});
    }
};

var LeadRelationshipsValidators = {
	

	CopyLeadRelationship : {
			LeadRelationshipID : LeadRelationshipsValidatorsFields.LeadRelationshipID	
	},

	GetLeadRelationship : {
			LeadRelationshipID : LeadRelationshipsValidatorsFields.LeadRelationshipID	
	},

	GetLeadRelationships : {	
	},

	GetLeadRelationshipsByLeadID : {
			LeadID : LeadRelationshipsValidatorsFields.LeadID	
	},

	GetLeadRelationshipsByLeadRelationshipTypeID : {
			LeadRelationshipTypeID : LeadRelationshipsValidatorsFields.LeadRelationshipTypeID	
	},

	GetLeadRelationshipsByRelatedLeadID : {
			RelatedLeadID : LeadRelationshipsValidatorsFields.RelatedLeadID	
	},

	InsertLeadRelationship : {
			LeadRelationshipTypeID : LeadRelationshipsValidatorsFields.LeadRelationshipTypeID,
			LeadID : LeadRelationshipsValidatorsFields.LeadID,
			RelatedLeadID : LeadRelationshipsValidatorsFields.RelatedLeadID,
			Data : LeadRelationshipsValidatorsFields.Data	
	},

	RemoveLeadRelationship : {
			LeadRelationshipID : LeadRelationshipsValidatorsFields.LeadRelationshipID	
	},

	UpdateLeadRelationship : {
			LeadRelationshipID : LeadRelationshipsValidatorsFields.LeadRelationshipID,
			LeadRelationshipTypeID : LeadRelationshipsValidatorsFields.LeadRelationshipTypeID,
			LeadID : LeadRelationshipsValidatorsFields.LeadID,
			RelatedLeadID : LeadRelationshipsValidatorsFields.RelatedLeadID,
			Data : LeadRelationshipsValidatorsFields.Data	
	},

	UpdateLeadRelationshipData : {
			LeadRelationshipID : LeadRelationshipsValidatorsFields.LeadRelationshipID,
			Data : LeadRelationshipsValidatorsFields.Data	
	}
};

    