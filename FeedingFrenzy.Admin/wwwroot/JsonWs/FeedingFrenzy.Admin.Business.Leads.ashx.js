
    	    	
var LeadsValidatorsFields = {
	
		AccountID : {Validators : [Validators.ID], InvalidMessage: "Invalid Account ID. " +   ValidatorDescriptions.ID() },
		Address : {Validators : [Validators.String], InvalidMessage: "Invalid Address. " +   ValidatorDescriptions.Length(1, 255) },
		Address2 : {Validators : [Validators.String], InvalidMessage: "Invalid Address 2. " +   ValidatorDescriptions.Length(1, 255) },
		CampaignID : {Validators : [Validators.ID], InvalidMessage: "Invalid Campaign ID. " +   ValidatorDescriptions.ID() },
		CampaignKey : {Validators : [Validators.String], InvalidMessage: "Invalid CampaignKey. " +   ValidatorDescriptions.Length(1, 255) },
		City : {Validators : [Validators.String], InvalidMessage: "Invalid City. " +   ValidatorDescriptions.Length(1, 255) },
		Company : {Validators : [Validators.String], InvalidMessage: "Invalid Company. " +   ValidatorDescriptions.Length(1, 255) },
		Count : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid Count. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		Domain : {Validators : [Validators.String], InvalidMessage: "Invalid Domain. " +   ValidatorDescriptions.Length(1, 255) },
		Email : {Validators : [Validators.Email], InvalidMessage: "Invalid Email. " +   ValidatorDescriptions.Email() },
		FirstName : {Validators : [Validators.String], InvalidMessage: "Invalid First Name. " +   ValidatorDescriptions.Length(1, 255) },
		FollowUpDate : {Validators : [Validators.Date], InvalidMessage: "Invalid Follow Up Date. " +   ValidatorDescriptions.Date() },
		GeneratedDate : {Validators : [Validators.Date], InvalidMessage: "Invalid Generated Date. " +   ValidatorDescriptions.Date() },
		ImportKey : {Validators : [Validators.String], InvalidMessage: "Invalid Import Key. " +   ValidatorDescriptions.Length(1, 255) },
		LastContactedDate : {Validators : [Validators.Date], InvalidMessage: "Invalid Last Contacted Date. " +   ValidatorDescriptions.Date() },
		LastName : {Validators : [Validators.String], InvalidMessage: "Invalid Last Name. " +   ValidatorDescriptions.Length(1, 255) },
		LeadID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Lead ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		LeadNoteTypeName : {Validators : [Validators.String], InvalidMessage: "Invalid LeadNoteTypeName. " +   ValidatorDescriptions.Length(1, 255) },
		LeadStatusID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Lead Status ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		LeadSubStatusID : {Validators : [Validators.ID], InvalidMessage: "Invalid Lead Sub Status ID. " +   ValidatorDescriptions.ID() },
		Message : {Validators : [Validators.String], InvalidMessage: "Invalid Message. " +   ValidatorDescriptions.Length(1, 255) },
		NumRows : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid NumRows. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		OpportunitySize : {Validators : [Validators.Integer], InvalidMessage: "Invalid Opportunity Size. " +   ValidatorDescriptions.Integer() },
		Phone : {Validators : [Validators.Phone], InvalidMessage: "Invalid Phone. " +   ValidatorDescriptions.Phone() },
		PhoneLineType : {Validators : [Validators.String], InvalidMessage: "Invalid PhoneLineType. " +   ValidatorDescriptions.Length(1, 255) },
		Priority : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid Priority. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		rowLead : {Validators : [Validators.Object, Validators.Required], InvalidMessage: "Invalid rowLead. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Object() },
		SalesRepresentativeID : {Validators : [Validators.ID], InvalidMessage: "Invalid Sales Representative ID. " +   ValidatorDescriptions.ID() },
		Search : {Validators : [Validators.String], InvalidMessage: "Invalid Search. " +   ValidatorDescriptions.Length(1, 255) },
		searchOptions : {Validators : [Validators.String], InvalidMessage: "Invalid searchOptions. " +   ValidatorDescriptions.Length(1, 255) },
		SkipRows : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid SkipRows. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		SortAscending : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid SortAscending. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		SortColumn : {Validators : [Validators.String], InvalidMessage: "Invalid SortColumn. " +   ValidatorDescriptions.Length(1, 255) },
		Source : {Validators : [Validators.String], InvalidMessage: "Invalid Source. " +   ValidatorDescriptions.Length(1, 255) },
		SourceID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Source ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		SourceLeadID : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid SourceLeadID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		State : {Validators : [Validators.String], InvalidMessage: "Invalid State. " +   ValidatorDescriptions.Length(1, 255) },
		StatusID : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid StatusID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		StatusName : {Validators : [Validators.String], InvalidMessage: "Invalid StatusName. " +   ValidatorDescriptions.Length(1, 255) },
		strTagName : {Validators : [Validators.String], InvalidMessage: "Invalid strTagName. " +   ValidatorDescriptions.Length(1, 255) },
		SubStatus : {Validators : [Validators.String], InvalidMessage: "Invalid SubStatus. " +   ValidatorDescriptions.Length(1, 255) },
		TagID : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid TagID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		TagName : {Validators : [Validators.String], InvalidMessage: "Invalid TagName. " +   ValidatorDescriptions.Length(1, 255) },
		TargetLeadID : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid TargetLeadID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		ZipCode : {Validators : [Validators.Zip], InvalidMessage: "Invalid Zip Code. " +   ValidatorDescriptions.Zip() }	
}
			
var Leads = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.Leads.ashx"

	,
	AssignLead : function(LeadID, SalesRepresentativeID, Callback) {
        return Leads.AssignLeadObject({ LeadID : LeadID,SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	AssignLeadObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.AssignLead)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.AssignLead.onValidationError))
					Leads.AssignLead.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "AssignLead", 
					Params : { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : Leads.AssignLead.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.AssignLead.onErrorReceived) ? Leads.AssignLead.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "AssignLead", { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID}, Leads.AssignLead.Serialize || {});
    },
	AssignLeads : function(SalesRepresentativeID, Count, Callback) {
        return Leads.AssignLeadsObject({ SalesRepresentativeID : SalesRepresentativeID,Count : Count}, Callback);
    },

	AssignLeadsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.AssignLeads)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.AssignLeads.onValidationError))
					Leads.AssignLeads.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "AssignLeads", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,Count : oObject.Count}, 
					Serialize : Leads.AssignLeads.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.AssignLeads.onErrorReceived) ? Leads.AssignLeads.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "AssignLeads", { SalesRepresentativeID : oObject.SalesRepresentativeID,Count : oObject.Count}, Leads.AssignLeads.Serialize || {});
    },
	CanClaimLead : function(LeadID, SalesRepresentativeID, Callback) {
        return Leads.CanClaimLeadObject({ LeadID : LeadID,SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	CanClaimLeadObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.CanClaimLead)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.CanClaimLead.onValidationError))
					Leads.CanClaimLead.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "CanClaimLead", 
					Params : { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : Leads.CanClaimLead.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.CanClaimLead.onErrorReceived) ? Leads.CanClaimLead.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "CanClaimLead", { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID}, Leads.CanClaimLead.Serialize || {});
    },
	ClaimLead : function(LeadID, SalesRepresentativeID, Callback) {
        return Leads.ClaimLeadObject({ LeadID : LeadID,SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	ClaimLeadObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.ClaimLead)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.ClaimLead.onValidationError))
					Leads.ClaimLead.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "ClaimLead", 
					Params : { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : Leads.ClaimLead.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.ClaimLead.onErrorReceived) ? Leads.ClaimLead.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "ClaimLead", { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID}, Leads.ClaimLead.Serialize || {});
    },
	CopyLead : function(LeadID, Callback) {
        return Leads.CopyLeadObject({ LeadID : LeadID}, Callback);
    },

	CopyLeadObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.CopyLead)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.CopyLead.onValidationError))
					Leads.CopyLead.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "CopyLead", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : Leads.CopyLead.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.CopyLead.onErrorReceived) ? Leads.CopyLead.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "CopyLead", { LeadID : oObject.LeadID}, Leads.CopyLead.Serialize || {});
    },
	ExportLeads : function(SalesRepresentativeID, StatusID, Callback) {
        return Leads.ExportLeadsObject({ SalesRepresentativeID : SalesRepresentativeID,StatusID : StatusID}, Callback);
    },

	ExportLeadsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.ExportLeads)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.ExportLeads.onValidationError))
					Leads.ExportLeads.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "ExportLeads", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,StatusID : oObject.StatusID}, 
					Serialize : Leads.ExportLeads.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.ExportLeads.onErrorReceived) ? Leads.ExportLeads.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "ExportLeads", { SalesRepresentativeID : oObject.SalesRepresentativeID,StatusID : oObject.StatusID}, Leads.ExportLeads.Serialize || {});
    },
	ExportLeads2 : function(SalesRepresentativeID, StatusID, TagID, Callback) {
        return Leads.ExportLeads2Object({ SalesRepresentativeID : SalesRepresentativeID,StatusID : StatusID,TagID : TagID}, Callback);
    },

	ExportLeads2Object : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.ExportLeads2)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.ExportLeads2.onValidationError))
					Leads.ExportLeads2.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "ExportLeads2", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,StatusID : oObject.StatusID,TagID : oObject.TagID}, 
					Serialize : Leads.ExportLeads2.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.ExportLeads2.onErrorReceived) ? Leads.ExportLeads2.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "ExportLeads2", { SalesRepresentativeID : oObject.SalesRepresentativeID,StatusID : oObject.StatusID,TagID : oObject.TagID}, Leads.ExportLeads2.Serialize || {});
    },
	ForfeitLead : function(LeadID, SalesRepresentativeID, Callback) {
        return Leads.ForfeitLeadObject({ LeadID : LeadID,SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	ForfeitLeadObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.ForfeitLead)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.ForfeitLead.onValidationError))
					Leads.ForfeitLead.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "ForfeitLead", 
					Params : { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : Leads.ForfeitLead.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.ForfeitLead.onErrorReceived) ? Leads.ForfeitLead.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "ForfeitLead", { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID}, Leads.ForfeitLead.Serialize || {});
    },
	GetLead : function(LeadID, Callback) {
        return Leads.GetLeadObject({ LeadID : LeadID}, Callback);
    },

	GetLeadObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.GetLead)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.GetLead.onValidationError))
					Leads.GetLead.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "GetLead", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : Leads.GetLead.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.GetLead.onErrorReceived) ? Leads.GetLead.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "GetLead", { LeadID : oObject.LeadID}, Leads.GetLead.Serialize || {});
    },
	GetLeads : function(Callback) {
        return Leads.GetLeadsObject({ }, Callback);
    },

	GetLeadsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.GetLeads)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.GetLeads.onValidationError))
					Leads.GetLeads.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "GetLeads", 
					Params : { }, 
					Serialize : Leads.GetLeads.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.GetLeads.onErrorReceived) ? Leads.GetLeads.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "GetLeads", { }, Leads.GetLeads.Serialize || {});
    },
	GetLeadsByCampaignID : function(CampaignID, Callback) {
        return Leads.GetLeadsByCampaignIDObject({ CampaignID : CampaignID}, Callback);
    },

	GetLeadsByCampaignIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.GetLeadsByCampaignID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.GetLeadsByCampaignID.onValidationError))
					Leads.GetLeadsByCampaignID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "GetLeadsByCampaignID", 
					Params : { CampaignID : oObject.CampaignID}, 
					Serialize : Leads.GetLeadsByCampaignID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.GetLeadsByCampaignID.onErrorReceived) ? Leads.GetLeadsByCampaignID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "GetLeadsByCampaignID", { CampaignID : oObject.CampaignID}, Leads.GetLeadsByCampaignID.Serialize || {});
    },
	GetLeadsByEmail : function(Email, Callback) {
        return Leads.GetLeadsByEmailObject({ Email : Email}, Callback);
    },

	GetLeadsByEmailObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.GetLeadsByEmail)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.GetLeadsByEmail.onValidationError))
					Leads.GetLeadsByEmail.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "GetLeadsByEmail", 
					Params : { Email : oObject.Email}, 
					Serialize : Leads.GetLeadsByEmail.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.GetLeadsByEmail.onErrorReceived) ? Leads.GetLeadsByEmail.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "GetLeadsByEmail", { Email : oObject.Email}, Leads.GetLeadsByEmail.Serialize || {});
    },
	GetLeadsByImportKey : function(ImportKey, Callback) {
        return Leads.GetLeadsByImportKeyObject({ ImportKey : ImportKey}, Callback);
    },

	GetLeadsByImportKeyObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.GetLeadsByImportKey)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.GetLeadsByImportKey.onValidationError))
					Leads.GetLeadsByImportKey.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "GetLeadsByImportKey", 
					Params : { ImportKey : oObject.ImportKey}, 
					Serialize : Leads.GetLeadsByImportKey.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.GetLeadsByImportKey.onErrorReceived) ? Leads.GetLeadsByImportKey.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "GetLeadsByImportKey", { ImportKey : oObject.ImportKey}, Leads.GetLeadsByImportKey.Serialize || {});
    },
	GetLeadsByLeadStatusID : function(LeadStatusID, Callback) {
        return Leads.GetLeadsByLeadStatusIDObject({ LeadStatusID : LeadStatusID}, Callback);
    },

	GetLeadsByLeadStatusIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.GetLeadsByLeadStatusID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.GetLeadsByLeadStatusID.onValidationError))
					Leads.GetLeadsByLeadStatusID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "GetLeadsByLeadStatusID", 
					Params : { LeadStatusID : oObject.LeadStatusID}, 
					Serialize : Leads.GetLeadsByLeadStatusID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.GetLeadsByLeadStatusID.onErrorReceived) ? Leads.GetLeadsByLeadStatusID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "GetLeadsByLeadStatusID", { LeadStatusID : oObject.LeadStatusID}, Leads.GetLeadsByLeadStatusID.Serialize || {});
    },
	GetLeadsByLeadSubStatusID : function(LeadSubStatusID, Callback) {
        return Leads.GetLeadsByLeadSubStatusIDObject({ LeadSubStatusID : LeadSubStatusID}, Callback);
    },

	GetLeadsByLeadSubStatusIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.GetLeadsByLeadSubStatusID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.GetLeadsByLeadSubStatusID.onValidationError))
					Leads.GetLeadsByLeadSubStatusID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "GetLeadsByLeadSubStatusID", 
					Params : { LeadSubStatusID : oObject.LeadSubStatusID}, 
					Serialize : Leads.GetLeadsByLeadSubStatusID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.GetLeadsByLeadSubStatusID.onErrorReceived) ? Leads.GetLeadsByLeadSubStatusID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "GetLeadsByLeadSubStatusID", { LeadSubStatusID : oObject.LeadSubStatusID}, Leads.GetLeadsByLeadSubStatusID.Serialize || {});
    },
	GetLeadsByPhone : function(Phone, Callback) {
        return Leads.GetLeadsByPhoneObject({ Phone : Phone}, Callback);
    },

	GetLeadsByPhoneObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.GetLeadsByPhone)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.GetLeadsByPhone.onValidationError))
					Leads.GetLeadsByPhone.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "GetLeadsByPhone", 
					Params : { Phone : oObject.Phone}, 
					Serialize : Leads.GetLeadsByPhone.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.GetLeadsByPhone.onErrorReceived) ? Leads.GetLeadsByPhone.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "GetLeadsByPhone", { Phone : oObject.Phone}, Leads.GetLeadsByPhone.Serialize || {});
    },
	GetLeadsBySalesRepresentativeID : function(SalesRepresentativeID, Callback) {
        return Leads.GetLeadsBySalesRepresentativeIDObject({ SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetLeadsBySalesRepresentativeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.GetLeadsBySalesRepresentativeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.GetLeadsBySalesRepresentativeID.onValidationError))
					Leads.GetLeadsBySalesRepresentativeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "GetLeadsBySalesRepresentativeID", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : Leads.GetLeadsBySalesRepresentativeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.GetLeadsBySalesRepresentativeID.onErrorReceived) ? Leads.GetLeadsBySalesRepresentativeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "GetLeadsBySalesRepresentativeID", { SalesRepresentativeID : oObject.SalesRepresentativeID}, Leads.GetLeadsBySalesRepresentativeID.Serialize || {});
    },
	GetLeadsBySourceID : function(SourceID, Callback) {
        return Leads.GetLeadsBySourceIDObject({ SourceID : SourceID}, Callback);
    },

	GetLeadsBySourceIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.GetLeadsBySourceID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.GetLeadsBySourceID.onValidationError))
					Leads.GetLeadsBySourceID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "GetLeadsBySourceID", 
					Params : { SourceID : oObject.SourceID}, 
					Serialize : Leads.GetLeadsBySourceID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.GetLeadsBySourceID.onErrorReceived) ? Leads.GetLeadsBySourceID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "GetLeadsBySourceID", { SourceID : oObject.SourceID}, Leads.GetLeadsBySourceID.Serialize || {});
    },
	GetMatchingLeads : function(rowLead, Callback) {
        return Leads.GetMatchingLeadsObject({ rowLead : rowLead}, Callback);
    },

	GetMatchingLeadsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.GetMatchingLeads)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.GetMatchingLeads.onValidationError))
					Leads.GetMatchingLeads.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "GetMatchingLeads", 
					Params : { rowLead : oObject.rowLead}, 
					Serialize : Leads.GetMatchingLeads.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.GetMatchingLeads.onErrorReceived) ? Leads.GetMatchingLeads.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "GetMatchingLeads", { rowLead : oObject.rowLead}, Leads.GetMatchingLeads.Serialize || {});
    },
	GetNextLead : function(SalesRepresentativeID, Callback) {
        return Leads.GetNextLeadObject({ SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	GetNextLeadObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.GetNextLead)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.GetNextLead.onValidationError))
					Leads.GetNextLead.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "GetNextLead", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : Leads.GetNextLead.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.GetNextLead.onErrorReceived) ? Leads.GetNextLead.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "GetNextLead", { SalesRepresentativeID : oObject.SalesRepresentativeID}, Leads.GetNextLead.Serialize || {});
    },
	GetNextLeadByTag : function(SalesRepresentativeID, TagName, Callback) {
        return Leads.GetNextLeadByTagObject({ SalesRepresentativeID : SalesRepresentativeID,TagName : TagName}, Callback);
    },

	GetNextLeadByTagObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.GetNextLeadByTag)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.GetNextLeadByTag.onValidationError))
					Leads.GetNextLeadByTag.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "GetNextLeadByTag", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,TagName : oObject.TagName}, 
					Serialize : Leads.GetNextLeadByTag.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.GetNextLeadByTag.onErrorReceived) ? Leads.GetNextLeadByTag.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "GetNextLeadByTag", { SalesRepresentativeID : oObject.SalesRepresentativeID,TagName : oObject.TagName}, Leads.GetNextLeadByTag.Serialize || {});
    },
	GetPotentialDuplicates : function(rowLead, Callback) {
        return Leads.GetPotentialDuplicatesObject({ rowLead : rowLead}, Callback);
    },

	GetPotentialDuplicatesObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.GetPotentialDuplicates)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.GetPotentialDuplicates.onValidationError))
					Leads.GetPotentialDuplicates.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "GetPotentialDuplicates", 
					Params : { rowLead : oObject.rowLead}, 
					Serialize : Leads.GetPotentialDuplicates.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.GetPotentialDuplicates.onErrorReceived) ? Leads.GetPotentialDuplicates.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "GetPotentialDuplicates", { rowLead : oObject.rowLead}, Leads.GetPotentialDuplicates.Serialize || {});
    },
	GetSalesRepresentativeByLeadByPhone : function(Phone, Callback) {
        return Leads.GetSalesRepresentativeByLeadByPhoneObject({ Phone : Phone}, Callback);
    },

	GetSalesRepresentativeByLeadByPhoneObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.GetSalesRepresentativeByLeadByPhone)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.GetSalesRepresentativeByLeadByPhone.onValidationError))
					Leads.GetSalesRepresentativeByLeadByPhone.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "GetSalesRepresentativeByLeadByPhone", 
					Params : { Phone : oObject.Phone}, 
					Serialize : Leads.GetSalesRepresentativeByLeadByPhone.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.GetSalesRepresentativeByLeadByPhone.onErrorReceived) ? Leads.GetSalesRepresentativeByLeadByPhone.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "GetSalesRepresentativeByLeadByPhone", { Phone : oObject.Phone}, Leads.GetSalesRepresentativeByLeadByPhone.Serialize || {});
    },
	GetUnassignedGridWithSearchCount : function(SalesRepresentativeID, Search, searchOptions, Callback) {
        return Leads.GetUnassignedGridWithSearchCountObject({ SalesRepresentativeID : SalesRepresentativeID,Search : Search,searchOptions : searchOptions}, Callback);
    },

	GetUnassignedGridWithSearchCountObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.GetUnassignedGridWithSearchCount)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.GetUnassignedGridWithSearchCount.onValidationError))
					Leads.GetUnassignedGridWithSearchCount.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "GetUnassignedGridWithSearchCount", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,searchOptions : oObject.searchOptions}, 
					Serialize : Leads.GetUnassignedGridWithSearchCount.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.GetUnassignedGridWithSearchCount.onErrorReceived) ? Leads.GetUnassignedGridWithSearchCount.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "GetUnassignedGridWithSearchCount", { SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,searchOptions : oObject.searchOptions}, Leads.GetUnassignedGridWithSearchCount.Serialize || {});
    },
	GetUnassignedGridWithSearchHtml : function(SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, searchOptions, Callback) {
        return Leads.GetUnassignedGridWithSearchHtmlObject({ SalesRepresentativeID : SalesRepresentativeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows,searchOptions : searchOptions}, Callback);
    },

	GetUnassignedGridWithSearchHtmlObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.GetUnassignedGridWithSearchHtml)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.GetUnassignedGridWithSearchHtml.onValidationError))
					Leads.GetUnassignedGridWithSearchHtml.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "GetUnassignedGridWithSearchHtml", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows,searchOptions : oObject.searchOptions}, 
					Serialize : Leads.GetUnassignedGridWithSearchHtml.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.GetUnassignedGridWithSearchHtml.onErrorReceived) ? Leads.GetUnassignedGridWithSearchHtml.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "GetUnassignedGridWithSearchHtml", { SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows,searchOptions : oObject.searchOptions}, Leads.GetUnassignedGridWithSearchHtml.Serialize || {});
    },
	ImportGenericLead : function(rowLead, Source, CampaignKey, strTagName, Callback) {
        return Leads.ImportGenericLeadObject({ rowLead : rowLead,Source : Source,CampaignKey : CampaignKey,strTagName : strTagName}, Callback);
    },

	ImportGenericLeadObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.ImportGenericLead)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.ImportGenericLead.onValidationError))
					Leads.ImportGenericLead.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "ImportGenericLead", 
					Params : { rowLead : oObject.rowLead,Source : oObject.Source,CampaignKey : oObject.CampaignKey,strTagName : oObject.strTagName}, 
					Serialize : Leads.ImportGenericLead.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.ImportGenericLead.onErrorReceived) ? Leads.ImportGenericLead.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "ImportGenericLead", { rowLead : oObject.rowLead,Source : oObject.Source,CampaignKey : oObject.CampaignKey,strTagName : oObject.strTagName}, Leads.ImportGenericLead.Serialize || {});
    },
	ImportZoomInfoLead : function(rowLead, Source, CampaignKey, strTagName, Callback) {
        return Leads.ImportZoomInfoLeadObject({ rowLead : rowLead,Source : Source,CampaignKey : CampaignKey,strTagName : strTagName}, Callback);
    },

	ImportZoomInfoLeadObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.ImportZoomInfoLead)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.ImportZoomInfoLead.onValidationError))
					Leads.ImportZoomInfoLead.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "ImportZoomInfoLead", 
					Params : { rowLead : oObject.rowLead,Source : oObject.Source,CampaignKey : oObject.CampaignKey,strTagName : oObject.strTagName}, 
					Serialize : Leads.ImportZoomInfoLead.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.ImportZoomInfoLead.onErrorReceived) ? Leads.ImportZoomInfoLead.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "ImportZoomInfoLead", { rowLead : oObject.rowLead,Source : oObject.Source,CampaignKey : oObject.CampaignKey,strTagName : oObject.strTagName}, Leads.ImportZoomInfoLead.Serialize || {});
    },
	InsertEmailDomain : function(LeadID, Domain, Callback) {
        return Leads.InsertEmailDomainObject({ LeadID : LeadID,Domain : Domain}, Callback);
    },

	InsertEmailDomainObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.InsertEmailDomain)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.InsertEmailDomain.onValidationError))
					Leads.InsertEmailDomain.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "InsertEmailDomain", 
					Params : { LeadID : oObject.LeadID,Domain : oObject.Domain}, 
					Serialize : Leads.InsertEmailDomain.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.InsertEmailDomain.onErrorReceived) ? Leads.InsertEmailDomain.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "InsertEmailDomain", { LeadID : oObject.LeadID,Domain : oObject.Domain}, Leads.InsertEmailDomain.Serialize || {});
    },
	InsertLead : function(AccountID, LeadSubStatusID, FollowUpDate, Company, FirstName, LastName, Phone, Email, Address, Address2, City, State, ZipCode, SourceID, LastContactedDate, Priority, LeadStatusID, OpportunitySize, Data, SalesRepresentativeID, ImportKey, GeneratedDate, CampaignID, Callback) {
        return Leads.InsertLeadObject({ AccountID : AccountID,LeadSubStatusID : LeadSubStatusID,FollowUpDate : FollowUpDate,Company : Company,FirstName : FirstName,LastName : LastName,Phone : Phone,Email : Email,Address : Address,Address2 : Address2,City : City,State : State,ZipCode : ZipCode,SourceID : SourceID,LastContactedDate : LastContactedDate,Priority : Priority,LeadStatusID : LeadStatusID,OpportunitySize : OpportunitySize,Data : Data,SalesRepresentativeID : SalesRepresentativeID,ImportKey : ImportKey,GeneratedDate : GeneratedDate,CampaignID : CampaignID}, Callback);
    },

	InsertLeadObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.InsertLead)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.InsertLead.onValidationError))
					Leads.InsertLead.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "InsertLead", 
					Params : { AccountID : oObject.AccountID,LeadSubStatusID : oObject.LeadSubStatusID,FollowUpDate : oObject.FollowUpDate,Company : oObject.Company,FirstName : oObject.FirstName,LastName : oObject.LastName,Phone : oObject.Phone,Email : oObject.Email,Address : oObject.Address,Address2 : oObject.Address2,City : oObject.City,State : oObject.State,ZipCode : oObject.ZipCode,SourceID : oObject.SourceID,LastContactedDate : oObject.LastContactedDate,Priority : oObject.Priority,LeadStatusID : oObject.LeadStatusID,OpportunitySize : oObject.OpportunitySize,Data : oObject.Data,SalesRepresentativeID : oObject.SalesRepresentativeID,ImportKey : oObject.ImportKey,GeneratedDate : oObject.GeneratedDate,CampaignID : oObject.CampaignID}, 
					Serialize : Leads.InsertLead.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.InsertLead.onErrorReceived) ? Leads.InsertLead.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "InsertLead", { AccountID : oObject.AccountID,LeadSubStatusID : oObject.LeadSubStatusID,FollowUpDate : oObject.FollowUpDate,Company : oObject.Company,FirstName : oObject.FirstName,LastName : oObject.LastName,Phone : oObject.Phone,Email : oObject.Email,Address : oObject.Address,Address2 : oObject.Address2,City : oObject.City,State : oObject.State,ZipCode : oObject.ZipCode,SourceID : oObject.SourceID,LastContactedDate : oObject.LastContactedDate,Priority : oObject.Priority,LeadStatusID : oObject.LeadStatusID,OpportunitySize : oObject.OpportunitySize,Data : oObject.Data,SalesRepresentativeID : oObject.SalesRepresentativeID,ImportKey : oObject.ImportKey,GeneratedDate : oObject.GeneratedDate,CampaignID : oObject.CampaignID}, Leads.InsertLead.Serialize || {});
    },
	Leads_GetUnassigned_Sp_CountSp : function(SalesRepresentativeID, Search, Callback) {
        return Leads.Leads_GetUnassigned_Sp_CountSpObject({ SalesRepresentativeID : SalesRepresentativeID,Search : Search}, Callback);
    },

	Leads_GetUnassigned_Sp_CountSpObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.Leads_GetUnassigned_Sp_CountSp)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.Leads_GetUnassigned_Sp_CountSp.onValidationError))
					Leads.Leads_GetUnassigned_Sp_CountSp.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "Leads_GetUnassigned_Sp_CountSp", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search}, 
					Serialize : Leads.Leads_GetUnassigned_Sp_CountSp.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.Leads_GetUnassigned_Sp_CountSp.onErrorReceived) ? Leads.Leads_GetUnassigned_Sp_CountSp.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "Leads_GetUnassigned_Sp_CountSp", { SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search}, Leads.Leads_GetUnassigned_Sp_CountSp.Serialize || {});
    },
	Leads_GetUnassigned_Sp_PagingSp : function(SalesRepresentativeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return Leads.Leads_GetUnassigned_Sp_PagingSpObject({ SalesRepresentativeID : SalesRepresentativeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	Leads_GetUnassigned_Sp_PagingSpObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.Leads_GetUnassigned_Sp_PagingSp)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.Leads_GetUnassigned_Sp_PagingSp.onValidationError))
					Leads.Leads_GetUnassigned_Sp_PagingSp.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "Leads_GetUnassigned_Sp_PagingSp", 
					Params : { SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : Leads.Leads_GetUnassigned_Sp_PagingSp.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.Leads_GetUnassigned_Sp_PagingSp.onErrorReceived) ? Leads.Leads_GetUnassigned_Sp_PagingSp.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "Leads_GetUnassigned_Sp_PagingSp", { SalesRepresentativeID : oObject.SalesRepresentativeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, Leads.Leads_GetUnassigned_Sp_PagingSp.Serialize || {});
    },
	MergeLeads : function(SourceLeadID, TargetLeadID, SalesRepresentativeID, Callback) {
        return Leads.MergeLeadsObject({ SourceLeadID : SourceLeadID,TargetLeadID : TargetLeadID,SalesRepresentativeID : SalesRepresentativeID}, Callback);
    },

	MergeLeadsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.MergeLeads)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.MergeLeads.onValidationError))
					Leads.MergeLeads.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "MergeLeads", 
					Params : { SourceLeadID : oObject.SourceLeadID,TargetLeadID : oObject.TargetLeadID,SalesRepresentativeID : oObject.SalesRepresentativeID}, 
					Serialize : Leads.MergeLeads.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.MergeLeads.onErrorReceived) ? Leads.MergeLeads.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "MergeLeads", { SourceLeadID : oObject.SourceLeadID,TargetLeadID : oObject.TargetLeadID,SalesRepresentativeID : oObject.SalesRepresentativeID}, Leads.MergeLeads.Serialize || {});
    },
	MessageLead : function(LeadID, SalesRepresentativeID, Message, Callback) {
        return Leads.MessageLeadObject({ LeadID : LeadID,SalesRepresentativeID : SalesRepresentativeID,Message : Message}, Callback);
    },

	MessageLeadObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.MessageLead)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.MessageLead.onValidationError))
					Leads.MessageLead.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "MessageLead", 
					Params : { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID,Message : oObject.Message}, 
					Serialize : Leads.MessageLead.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.MessageLead.onErrorReceived) ? Leads.MessageLead.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "MessageLead", { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID,Message : oObject.Message}, Leads.MessageLead.Serialize || {});
    },
	MessageLead2 : function(LeadID, SalesRepresentativeID, Phone, Message, Callback) {
        return Leads.MessageLead2Object({ LeadID : LeadID,SalesRepresentativeID : SalesRepresentativeID,Phone : Phone,Message : Message}, Callback);
    },

	MessageLead2Object : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.MessageLead2)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.MessageLead2.onValidationError))
					Leads.MessageLead2.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "MessageLead2", 
					Params : { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID,Phone : oObject.Phone,Message : oObject.Message}, 
					Serialize : Leads.MessageLead2.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.MessageLead2.onErrorReceived) ? Leads.MessageLead2.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "MessageLead2", { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID,Phone : oObject.Phone,Message : oObject.Message}, Leads.MessageLead2.Serialize || {});
    },
	MessageWhatsAppLead : function(LeadID, SalesRepresentativeID, Phone, Message, Callback) {
        return Leads.MessageWhatsAppLeadObject({ LeadID : LeadID,SalesRepresentativeID : SalesRepresentativeID,Phone : Phone,Message : Message}, Callback);
    },

	MessageWhatsAppLeadObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.MessageWhatsAppLead)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.MessageWhatsAppLead.onValidationError))
					Leads.MessageWhatsAppLead.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "MessageWhatsAppLead", 
					Params : { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID,Phone : oObject.Phone,Message : oObject.Message}, 
					Serialize : Leads.MessageWhatsAppLead.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.MessageWhatsAppLead.onErrorReceived) ? Leads.MessageWhatsAppLead.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "MessageWhatsAppLead", { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID,Phone : oObject.Phone,Message : oObject.Message}, Leads.MessageWhatsAppLead.Serialize || {});
    },
	RemoveLead : function(LeadID, Callback) {
        return Leads.RemoveLeadObject({ LeadID : LeadID}, Callback);
    },

	RemoveLeadObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.RemoveLead)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.RemoveLead.onValidationError))
					Leads.RemoveLead.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "RemoveLead", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : Leads.RemoveLead.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.RemoveLead.onErrorReceived) ? Leads.RemoveLead.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "RemoveLead", { LeadID : oObject.LeadID}, Leads.RemoveLead.Serialize || {});
    },
	SendFeedingFrenzy : function(LeadID, Callback) {
        return Leads.SendFeedingFrenzyObject({ LeadID : LeadID}, Callback);
    },

	SendFeedingFrenzyObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.SendFeedingFrenzy)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.SendFeedingFrenzy.onValidationError))
					Leads.SendFeedingFrenzy.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "SendFeedingFrenzy", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : Leads.SendFeedingFrenzy.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.SendFeedingFrenzy.onErrorReceived) ? Leads.SendFeedingFrenzy.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "SendFeedingFrenzy", { LeadID : oObject.LeadID}, Leads.SendFeedingFrenzy.Serialize || {});
    },
	SendObjectToBuffaly : function(LeadID, Callback) {
        return Leads.SendObjectToBuffalyObject({ LeadID : LeadID}, Callback);
    },

	SendObjectToBuffalyObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.SendObjectToBuffaly)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.SendObjectToBuffaly.onValidationError))
					Leads.SendObjectToBuffaly.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "SendObjectToBuffaly", 
					Params : { LeadID : oObject.LeadID}, 
					Serialize : Leads.SendObjectToBuffaly.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.SendObjectToBuffaly.onErrorReceived) ? Leads.SendObjectToBuffaly.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "SendObjectToBuffaly", { LeadID : oObject.LeadID}, Leads.SendObjectToBuffaly.Serialize || {});
    },
	UpdateLead : function(AccountID, LeadSubStatusID, FollowUpDate, LeadID, Company, FirstName, LastName, Phone, Email, Address, Address2, City, State, ZipCode, SourceID, LastContactedDate, Priority, LeadStatusID, OpportunitySize, Data, SalesRepresentativeID, ImportKey, GeneratedDate, CampaignID, Callback) {
        return Leads.UpdateLeadObject({ AccountID : AccountID,LeadSubStatusID : LeadSubStatusID,FollowUpDate : FollowUpDate,LeadID : LeadID,Company : Company,FirstName : FirstName,LastName : LastName,Phone : Phone,Email : Email,Address : Address,Address2 : Address2,City : City,State : State,ZipCode : ZipCode,SourceID : SourceID,LastContactedDate : LastContactedDate,Priority : Priority,LeadStatusID : LeadStatusID,OpportunitySize : OpportunitySize,Data : Data,SalesRepresentativeID : SalesRepresentativeID,ImportKey : ImportKey,GeneratedDate : GeneratedDate,CampaignID : CampaignID}, Callback);
    },

	UpdateLeadObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.UpdateLead)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.UpdateLead.onValidationError))
					Leads.UpdateLead.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "UpdateLead", 
					Params : { AccountID : oObject.AccountID,LeadSubStatusID : oObject.LeadSubStatusID,FollowUpDate : oObject.FollowUpDate,LeadID : oObject.LeadID,Company : oObject.Company,FirstName : oObject.FirstName,LastName : oObject.LastName,Phone : oObject.Phone,Email : oObject.Email,Address : oObject.Address,Address2 : oObject.Address2,City : oObject.City,State : oObject.State,ZipCode : oObject.ZipCode,SourceID : oObject.SourceID,LastContactedDate : oObject.LastContactedDate,Priority : oObject.Priority,LeadStatusID : oObject.LeadStatusID,OpportunitySize : oObject.OpportunitySize,Data : oObject.Data,SalesRepresentativeID : oObject.SalesRepresentativeID,ImportKey : oObject.ImportKey,GeneratedDate : oObject.GeneratedDate,CampaignID : oObject.CampaignID}, 
					Serialize : Leads.UpdateLead.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.UpdateLead.onErrorReceived) ? Leads.UpdateLead.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "UpdateLead", { AccountID : oObject.AccountID,LeadSubStatusID : oObject.LeadSubStatusID,FollowUpDate : oObject.FollowUpDate,LeadID : oObject.LeadID,Company : oObject.Company,FirstName : oObject.FirstName,LastName : oObject.LastName,Phone : oObject.Phone,Email : oObject.Email,Address : oObject.Address,Address2 : oObject.Address2,City : oObject.City,State : oObject.State,ZipCode : oObject.ZipCode,SourceID : oObject.SourceID,LastContactedDate : oObject.LastContactedDate,Priority : oObject.Priority,LeadStatusID : oObject.LeadStatusID,OpportunitySize : oObject.OpportunitySize,Data : oObject.Data,SalesRepresentativeID : oObject.SalesRepresentativeID,ImportKey : oObject.ImportKey,GeneratedDate : oObject.GeneratedDate,CampaignID : oObject.CampaignID}, Leads.UpdateLead.Serialize || {});
    },
	UpdateLeadData : function(LeadID, Data, Callback) {
        return Leads.UpdateLeadDataObject({ LeadID : LeadID,Data : Data}, Callback);
    },

	UpdateLeadDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.UpdateLeadData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.UpdateLeadData.onValidationError))
					Leads.UpdateLeadData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "UpdateLeadData", 
					Params : { LeadID : oObject.LeadID,Data : oObject.Data}, 
					Serialize : Leads.UpdateLeadData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.UpdateLeadData.onErrorReceived) ? Leads.UpdateLeadData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "UpdateLeadData", { LeadID : oObject.LeadID,Data : oObject.Data}, Leads.UpdateLeadData.Serialize || {});
    },
	UpdateLeadStatus : function(LeadID, SalesRepresentativeID, StatusName, SubStatus, LeadNoteTypeName, Callback) {
        return Leads.UpdateLeadStatusObject({ LeadID : LeadID,SalesRepresentativeID : SalesRepresentativeID,StatusName : StatusName,SubStatus : SubStatus,LeadNoteTypeName : LeadNoteTypeName}, Callback);
    },

	UpdateLeadStatusObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.UpdateLeadStatus)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.UpdateLeadStatus.onValidationError))
					Leads.UpdateLeadStatus.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "UpdateLeadStatus", 
					Params : { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID,StatusName : oObject.StatusName,SubStatus : oObject.SubStatus,LeadNoteTypeName : oObject.LeadNoteTypeName}, 
					Serialize : Leads.UpdateLeadStatus.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.UpdateLeadStatus.onErrorReceived) ? Leads.UpdateLeadStatus.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "UpdateLeadStatus", { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID,StatusName : oObject.StatusName,SubStatus : oObject.SubStatus,LeadNoteTypeName : oObject.LeadNoteTypeName}, Leads.UpdateLeadStatus.Serialize || {});
    },
	UpdateLeadStatus2 : function(LeadID, SalesRepresentativeID, StatusName, SubStatus, Callback) {
        return Leads.UpdateLeadStatus2Object({ LeadID : LeadID,SalesRepresentativeID : SalesRepresentativeID,StatusName : StatusName,SubStatus : SubStatus}, Callback);
    },

	UpdateLeadStatus2Object : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.UpdateLeadStatus2)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.UpdateLeadStatus2.onValidationError))
					Leads.UpdateLeadStatus2.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "UpdateLeadStatus2", 
					Params : { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID,StatusName : oObject.StatusName,SubStatus : oObject.SubStatus}, 
					Serialize : Leads.UpdateLeadStatus2.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.UpdateLeadStatus2.onErrorReceived) ? Leads.UpdateLeadStatus2.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "UpdateLeadStatus2", { LeadID : oObject.LeadID,SalesRepresentativeID : oObject.SalesRepresentativeID,StatusName : oObject.StatusName,SubStatus : oObject.SubStatus}, Leads.UpdateLeadStatus2.Serialize || {});
    },
	UpdateOpportunitySize : function(LeadID, OpportunitySize, Callback) {
        return Leads.UpdateOpportunitySizeObject({ LeadID : LeadID,OpportunitySize : OpportunitySize}, Callback);
    },

	UpdateOpportunitySizeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.UpdateOpportunitySize)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.UpdateOpportunitySize.onValidationError))
					Leads.UpdateOpportunitySize.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "UpdateOpportunitySize", 
					Params : { LeadID : oObject.LeadID,OpportunitySize : oObject.OpportunitySize}, 
					Serialize : Leads.UpdateOpportunitySize.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.UpdateOpportunitySize.onErrorReceived) ? Leads.UpdateOpportunitySize.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "UpdateOpportunitySize", { LeadID : oObject.LeadID,OpportunitySize : oObject.OpportunitySize}, Leads.UpdateOpportunitySize.Serialize || {});
    },
	UpdatePhoneType : function(LeadID, PhoneLineType, Callback) {
        return Leads.UpdatePhoneTypeObject({ LeadID : LeadID,PhoneLineType : PhoneLineType}, Callback);
    },

	UpdatePhoneTypeObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.UpdatePhoneType)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.UpdatePhoneType.onValidationError))
					Leads.UpdatePhoneType.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "UpdatePhoneType", 
					Params : { LeadID : oObject.LeadID,PhoneLineType : oObject.PhoneLineType}, 
					Serialize : Leads.UpdatePhoneType.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.UpdatePhoneType.onErrorReceived) ? Leads.UpdatePhoneType.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "UpdatePhoneType", { LeadID : oObject.LeadID,PhoneLineType : oObject.PhoneLineType}, Leads.UpdatePhoneType.Serialize || {});
    },
	UpdatePriority : function(LeadID, Priority, Callback) {
        return Leads.UpdatePriorityObject({ LeadID : LeadID,Priority : Priority}, Callback);
    },

	UpdatePriorityObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, LeadsValidators.UpdatePriority)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Leads.UpdatePriority.onValidationError))
					Leads.UpdatePriority.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Leads.Url, 
					Method : "UpdatePriority", 
					Params : { LeadID : oObject.LeadID,Priority : oObject.Priority}, 
					Serialize : Leads.UpdatePriority.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Leads.UpdatePriority.onErrorReceived) ? Leads.UpdatePriority.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Leads.Url, "UpdatePriority", { LeadID : oObject.LeadID,Priority : oObject.Priority}, Leads.UpdatePriority.Serialize || {});
    }
};

var LeadsValidators = {
	

	AssignLead : {
			LeadID : LeadsValidatorsFields.LeadID,
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID	
	},

	AssignLeads : {
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID,
			Count : LeadsValidatorsFields.Count	
	},

	CanClaimLead : {
			LeadID : LeadsValidatorsFields.LeadID,
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID	
	},

	ClaimLead : {
			LeadID : LeadsValidatorsFields.LeadID,
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID	
	},

	CopyLead : {
			LeadID : LeadsValidatorsFields.LeadID	
	},

	ExportLeads : {
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID,
			StatusID : LeadsValidatorsFields.StatusID	
	},

	ExportLeads2 : {
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID,
			StatusID : LeadsValidatorsFields.StatusID,
			TagID : LeadsValidatorsFields.TagID	
	},

	ForfeitLead : {
			LeadID : LeadsValidatorsFields.LeadID,
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID	
	},

	GetLead : {
			LeadID : LeadsValidatorsFields.LeadID	
	},

	GetLeads : {	
	},

	GetLeadsByCampaignID : {
			CampaignID : LeadsValidatorsFields.CampaignID	
	},

	GetLeadsByEmail : {
			Email : LeadsValidatorsFields.Email	
	},

	GetLeadsByImportKey : {
			ImportKey : LeadsValidatorsFields.ImportKey	
	},

	GetLeadsByLeadStatusID : {
			LeadStatusID : LeadsValidatorsFields.LeadStatusID	
	},

	GetLeadsByLeadSubStatusID : {
			LeadSubStatusID : LeadsValidatorsFields.LeadSubStatusID	
	},

	GetLeadsByPhone : {
			Phone : LeadsValidatorsFields.Phone	
	},

	GetLeadsBySalesRepresentativeID : {
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID	
	},

	GetLeadsBySourceID : {
			SourceID : LeadsValidatorsFields.SourceID	
	},

	GetMatchingLeads : {
			rowLead : LeadsValidatorsFields.rowLead	
	},

	GetNextLead : {
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID	
	},

	GetNextLeadByTag : {
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID,
			TagName : LeadsValidatorsFields.TagName	
	},

	GetPotentialDuplicates : {
			rowLead : LeadsValidatorsFields.rowLead	
	},

	GetSalesRepresentativeByLeadByPhone : {
			Phone : LeadsValidatorsFields.Phone	
	},

	GetUnassignedGridWithSearchCount : {
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID,
			Search : LeadsValidatorsFields.Search,
			searchOptions : LeadsValidatorsFields.searchOptions	
	},

	GetUnassignedGridWithSearchHtml : {
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID,
			Search : LeadsValidatorsFields.Search,
			SortColumn : LeadsValidatorsFields.SortColumn,
			SortAscending : LeadsValidatorsFields.SortAscending,
			SkipRows : LeadsValidatorsFields.SkipRows,
			NumRows : LeadsValidatorsFields.NumRows,
			searchOptions : LeadsValidatorsFields.searchOptions	
	},

	ImportGenericLead : {
			rowLead : LeadsValidatorsFields.rowLead,
			Source : LeadsValidatorsFields.Source,
			CampaignKey : LeadsValidatorsFields.CampaignKey,
			strTagName : LeadsValidatorsFields.strTagName	
	},

	ImportZoomInfoLead : {
			rowLead : LeadsValidatorsFields.rowLead,
			Source : LeadsValidatorsFields.Source,
			CampaignKey : LeadsValidatorsFields.CampaignKey,
			strTagName : LeadsValidatorsFields.strTagName	
	},

	InsertEmailDomain : {
			LeadID : LeadsValidatorsFields.LeadID,
			Domain : LeadsValidatorsFields.Domain	
	},

	InsertLead : {
			AccountID : LeadsValidatorsFields.AccountID,
			LeadSubStatusID : LeadsValidatorsFields.LeadSubStatusID,
			FollowUpDate : LeadsValidatorsFields.FollowUpDate,
			Company : LeadsValidatorsFields.Company,
			FirstName : LeadsValidatorsFields.FirstName,
			LastName : LeadsValidatorsFields.LastName,
			Phone : LeadsValidatorsFields.Phone,
			Email : LeadsValidatorsFields.Email,
			Address : LeadsValidatorsFields.Address,
			Address2 : LeadsValidatorsFields.Address2,
			City : LeadsValidatorsFields.City,
			State : LeadsValidatorsFields.State,
			ZipCode : LeadsValidatorsFields.ZipCode,
			SourceID : LeadsValidatorsFields.SourceID,
			LastContactedDate : LeadsValidatorsFields.LastContactedDate,
			Priority : LeadsValidatorsFields.Priority,
			LeadStatusID : LeadsValidatorsFields.LeadStatusID,
			OpportunitySize : LeadsValidatorsFields.OpportunitySize,
			Data : LeadsValidatorsFields.Data,
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID,
			ImportKey : LeadsValidatorsFields.ImportKey,
			GeneratedDate : LeadsValidatorsFields.GeneratedDate,
			CampaignID : LeadsValidatorsFields.CampaignID	
	},

	Leads_GetUnassigned_Sp_CountSp : {
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID,
			Search : LeadsValidatorsFields.Search	
	},

	Leads_GetUnassigned_Sp_PagingSp : {
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID,
			Search : LeadsValidatorsFields.Search,
			SortColumn : LeadsValidatorsFields.SortColumn,
			SortAscending : LeadsValidatorsFields.SortAscending,
			SkipRows : LeadsValidatorsFields.SkipRows,
			NumRows : LeadsValidatorsFields.NumRows	
	},

	MergeLeads : {
			SourceLeadID : LeadsValidatorsFields.SourceLeadID,
			TargetLeadID : LeadsValidatorsFields.TargetLeadID,
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID	
	},

	MessageLead : {
			LeadID : LeadsValidatorsFields.LeadID,
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID,
			Message : LeadsValidatorsFields.Message	
	},

	MessageLead2 : {
			LeadID : LeadsValidatorsFields.LeadID,
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID,
			Phone : LeadsValidatorsFields.Phone,
			Message : LeadsValidatorsFields.Message	
	},

	MessageWhatsAppLead : {
			LeadID : LeadsValidatorsFields.LeadID,
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID,
			Phone : LeadsValidatorsFields.Phone,
			Message : LeadsValidatorsFields.Message	
	},

	RemoveLead : {
			LeadID : LeadsValidatorsFields.LeadID	
	},

	SendFeedingFrenzy : {
			LeadID : LeadsValidatorsFields.LeadID	
	},

	SendObjectToBuffaly : {
			LeadID : LeadsValidatorsFields.LeadID	
	},

	UpdateLead : {
			AccountID : LeadsValidatorsFields.AccountID,
			LeadSubStatusID : LeadsValidatorsFields.LeadSubStatusID,
			FollowUpDate : LeadsValidatorsFields.FollowUpDate,
			LeadID : LeadsValidatorsFields.LeadID,
			Company : LeadsValidatorsFields.Company,
			FirstName : LeadsValidatorsFields.FirstName,
			LastName : LeadsValidatorsFields.LastName,
			Phone : LeadsValidatorsFields.Phone,
			Email : LeadsValidatorsFields.Email,
			Address : LeadsValidatorsFields.Address,
			Address2 : LeadsValidatorsFields.Address2,
			City : LeadsValidatorsFields.City,
			State : LeadsValidatorsFields.State,
			ZipCode : LeadsValidatorsFields.ZipCode,
			SourceID : LeadsValidatorsFields.SourceID,
			LastContactedDate : LeadsValidatorsFields.LastContactedDate,
			Priority : LeadsValidatorsFields.Priority,
			LeadStatusID : LeadsValidatorsFields.LeadStatusID,
			OpportunitySize : LeadsValidatorsFields.OpportunitySize,
			Data : LeadsValidatorsFields.Data,
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID,
			ImportKey : LeadsValidatorsFields.ImportKey,
			GeneratedDate : LeadsValidatorsFields.GeneratedDate,
			CampaignID : LeadsValidatorsFields.CampaignID	
	},

	UpdateLeadData : {
			LeadID : LeadsValidatorsFields.LeadID,
			Data : LeadsValidatorsFields.Data	
	},

	UpdateLeadStatus : {
			LeadID : LeadsValidatorsFields.LeadID,
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID,
			StatusName : LeadsValidatorsFields.StatusName,
			SubStatus : LeadsValidatorsFields.SubStatus,
			LeadNoteTypeName : LeadsValidatorsFields.LeadNoteTypeName	
	},

	UpdateLeadStatus2 : {
			LeadID : LeadsValidatorsFields.LeadID,
			SalesRepresentativeID : LeadsValidatorsFields.SalesRepresentativeID,
			StatusName : LeadsValidatorsFields.StatusName,
			SubStatus : LeadsValidatorsFields.SubStatus	
	},

	UpdateOpportunitySize : {
			LeadID : LeadsValidatorsFields.LeadID,
			OpportunitySize : LeadsValidatorsFields.OpportunitySize	
	},

	UpdatePhoneType : {
			LeadID : LeadsValidatorsFields.LeadID,
			PhoneLineType : LeadsValidatorsFields.PhoneLineType	
	},

	UpdatePriority : {
			LeadID : LeadsValidatorsFields.LeadID,
			Priority : LeadsValidatorsFields.Priority	
	}
};

    