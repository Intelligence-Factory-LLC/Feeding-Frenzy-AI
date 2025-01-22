
    	    	
var AgentsValidatorsFields = {
	
		AgentID : {Validators : [Validators.ID, Validators.Required], InvalidMessage: "Invalid Agent ID. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.ID() },
		AgentName : {Validators : [Validators.String, Validators.Required], InvalidMessage: "Invalid Agent Name. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Length(1, 255) },
		AgentTypeID : {Validators : [Validators.ID], InvalidMessage: "Invalid Agent Type ID. " +   ValidatorDescriptions.ID() },
		ContextSettings : {Validators : [Validators.Data], InvalidMessage: "Invalid Context Settings. " +   ValidatorDescriptions.Length(1) },
		Data : {Validators : [Validators.Data], InvalidMessage: "Invalid Data. " +   ValidatorDescriptions.Length(1) },
		Description : {Validators : [Validators.Text], InvalidMessage: "Invalid Description. " +   ValidatorDescriptions.Length(1, 4000) },
		NumRows : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid NumRows. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		Search : {Validators : [Validators.String], InvalidMessage: "Invalid Search. " +   ValidatorDescriptions.Length(1, 255) },
		SkipRows : {Validators : [Validators.Integer, Validators.Required], InvalidMessage: "Invalid SkipRows. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Integer() },
		SortAscending : {Validators : [Validators.Boolean, Validators.Required], InvalidMessage: "Invalid SortAscending. " +   ValidatorDescriptions.Required() + ' ' +  ValidatorDescriptions.Boolean() },
		SortColumn : {Validators : [Validators.String], InvalidMessage: "Invalid SortColumn. " +   ValidatorDescriptions.Length(1, 255) }	
}
			
var Agents = {	
	Url : "/JsonWs/FeedingFrenzy.Admin.Business.Agents.ashx"

	,
	CopyAgent : function(AgentID, Callback) {
        return Agents.CopyAgentObject({ AgentID : AgentID}, Callback);
    },

	CopyAgentObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsValidators.CopyAgent)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Agents.CopyAgent.onValidationError))
					Agents.CopyAgent.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Agents.Url, 
					Method : "CopyAgent", 
					Params : { AgentID : oObject.AgentID}, 
					Serialize : Agents.CopyAgent.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Agents.CopyAgent.onErrorReceived) ? Agents.CopyAgent.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Agents.Url, "CopyAgent", { AgentID : oObject.AgentID}, Agents.CopyAgent.Serialize || {});
    },
	GetAgent : function(AgentID, Callback) {
        return Agents.GetAgentObject({ AgentID : AgentID}, Callback);
    },

	GetAgentObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsValidators.GetAgent)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Agents.GetAgent.onValidationError))
					Agents.GetAgent.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Agents.Url, 
					Method : "GetAgent", 
					Params : { AgentID : oObject.AgentID}, 
					Serialize : Agents.GetAgent.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Agents.GetAgent.onErrorReceived) ? Agents.GetAgent.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Agents.Url, "GetAgent", { AgentID : oObject.AgentID}, Agents.GetAgent.Serialize || {});
    },
	GetAgentByAgentName : function(AgentName, Callback) {
        return Agents.GetAgentByAgentNameObject({ AgentName : AgentName}, Callback);
    },

	GetAgentByAgentNameObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsValidators.GetAgentByAgentName)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Agents.GetAgentByAgentName.onValidationError))
					Agents.GetAgentByAgentName.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Agents.Url, 
					Method : "GetAgentByAgentName", 
					Params : { AgentName : oObject.AgentName}, 
					Serialize : Agents.GetAgentByAgentName.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Agents.GetAgentByAgentName.onErrorReceived) ? Agents.GetAgentByAgentName.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Agents.Url, "GetAgentByAgentName", { AgentName : oObject.AgentName}, Agents.GetAgentByAgentName.Serialize || {});
    },
	GetAgents : function(Callback) {
        return Agents.GetAgentsObject({ }, Callback);
    },

	GetAgentsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsValidators.GetAgents)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Agents.GetAgents.onValidationError))
					Agents.GetAgents.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Agents.Url, 
					Method : "GetAgents", 
					Params : { }, 
					Serialize : Agents.GetAgents.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Agents.GetAgents.onErrorReceived) ? Agents.GetAgents.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Agents.Url, "GetAgents", { }, Agents.GetAgents.Serialize || {});
    },
	GetAgentsByAgentTypeID : function(AgentTypeID, Callback) {
        return Agents.GetAgentsByAgentTypeIDObject({ AgentTypeID : AgentTypeID}, Callback);
    },

	GetAgentsByAgentTypeIDObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsValidators.GetAgentsByAgentTypeID)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Agents.GetAgentsByAgentTypeID.onValidationError))
					Agents.GetAgentsByAgentTypeID.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Agents.Url, 
					Method : "GetAgentsByAgentTypeID", 
					Params : { AgentTypeID : oObject.AgentTypeID}, 
					Serialize : Agents.GetAgentsByAgentTypeID.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Agents.GetAgentsByAgentTypeID.onErrorReceived) ? Agents.GetAgentsByAgentTypeID.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Agents.Url, "GetAgentsByAgentTypeID", { AgentTypeID : oObject.AgentTypeID}, Agents.GetAgentsByAgentTypeID.Serialize || {});
    },
	GetAgentsByAgentTypeIDSp_PagingSp : function(AgentTypeID, Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return Agents.GetAgentsByAgentTypeIDSp_PagingSpObject({ AgentTypeID : AgentTypeID,Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetAgentsByAgentTypeIDSp_PagingSpObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsValidators.GetAgentsByAgentTypeIDSp_PagingSp)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Agents.GetAgentsByAgentTypeIDSp_PagingSp.onValidationError))
					Agents.GetAgentsByAgentTypeIDSp_PagingSp.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Agents.Url, 
					Method : "GetAgentsByAgentTypeIDSp_PagingSp", 
					Params : { AgentTypeID : oObject.AgentTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : Agents.GetAgentsByAgentTypeIDSp_PagingSp.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Agents.GetAgentsByAgentTypeIDSp_PagingSp.onErrorReceived) ? Agents.GetAgentsByAgentTypeIDSp_PagingSp.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Agents.Url, "GetAgentsByAgentTypeIDSp_PagingSp", { AgentTypeID : oObject.AgentTypeID,Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, Agents.GetAgentsByAgentTypeIDSp_PagingSp.Serialize || {});
    },
	GetAgentsSp_PagingSp : function(Search, SortColumn, SortAscending, SkipRows, NumRows, Callback) {
        return Agents.GetAgentsSp_PagingSpObject({ Search : Search,SortColumn : SortColumn,SortAscending : SortAscending,SkipRows : SkipRows,NumRows : NumRows}, Callback);
    },

	GetAgentsSp_PagingSpObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsValidators.GetAgentsSp_PagingSp)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Agents.GetAgentsSp_PagingSp.onValidationError))
					Agents.GetAgentsSp_PagingSp.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Agents.Url, 
					Method : "GetAgentsSp_PagingSp", 
					Params : { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, 
					Serialize : Agents.GetAgentsSp_PagingSp.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Agents.GetAgentsSp_PagingSp.onErrorReceived) ? Agents.GetAgentsSp_PagingSp.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Agents.Url, "GetAgentsSp_PagingSp", { Search : oObject.Search,SortColumn : oObject.SortColumn,SortAscending : oObject.SortAscending,SkipRows : oObject.SkipRows,NumRows : oObject.NumRows}, Agents.GetAgentsSp_PagingSp.Serialize || {});
    },
	InsertAgent : function(AgentName, ContextSettings, Data, Description, AgentTypeID, Callback) {
        return Agents.InsertAgentObject({ AgentName : AgentName,ContextSettings : ContextSettings,Data : Data,Description : Description,AgentTypeID : AgentTypeID}, Callback);
    },

	InsertAgentObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsValidators.InsertAgent)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Agents.InsertAgent.onValidationError))
					Agents.InsertAgent.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Agents.Url, 
					Method : "InsertAgent", 
					Params : { AgentName : oObject.AgentName,ContextSettings : oObject.ContextSettings,Data : oObject.Data,Description : oObject.Description,AgentTypeID : oObject.AgentTypeID}, 
					Serialize : Agents.InsertAgent.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Agents.InsertAgent.onErrorReceived) ? Agents.InsertAgent.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Agents.Url, "InsertAgent", { AgentName : oObject.AgentName,ContextSettings : oObject.ContextSettings,Data : oObject.Data,Description : oObject.Description,AgentTypeID : oObject.AgentTypeID}, Agents.InsertAgent.Serialize || {});
    },
	RemoveAgent : function(AgentID, Callback) {
        return Agents.RemoveAgentObject({ AgentID : AgentID}, Callback);
    },

	RemoveAgentObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsValidators.RemoveAgent)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Agents.RemoveAgent.onValidationError))
					Agents.RemoveAgent.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Agents.Url, 
					Method : "RemoveAgent", 
					Params : { AgentID : oObject.AgentID}, 
					Serialize : Agents.RemoveAgent.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Agents.RemoveAgent.onErrorReceived) ? Agents.RemoveAgent.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Agents.Url, "RemoveAgent", { AgentID : oObject.AgentID}, Agents.RemoveAgent.Serialize || {});
    },
	SendObjectToBuffaly : function(AgentID, Callback) {
        return Agents.SendObjectToBuffalyObject({ AgentID : AgentID}, Callback);
    },

	SendObjectToBuffalyObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsValidators.SendObjectToBuffaly)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Agents.SendObjectToBuffaly.onValidationError))
					Agents.SendObjectToBuffaly.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Agents.Url, 
					Method : "SendObjectToBuffaly", 
					Params : { AgentID : oObject.AgentID}, 
					Serialize : Agents.SendObjectToBuffaly.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Agents.SendObjectToBuffaly.onErrorReceived) ? Agents.SendObjectToBuffaly.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Agents.Url, "SendObjectToBuffaly", { AgentID : oObject.AgentID}, Agents.SendObjectToBuffaly.Serialize || {});
    },
	UpdateAgent : function(AgentID, AgentName, ContextSettings, Data, Description, AgentTypeID, Callback) {
        return Agents.UpdateAgentObject({ AgentID : AgentID,AgentName : AgentName,ContextSettings : ContextSettings,Data : Data,Description : Description,AgentTypeID : AgentTypeID}, Callback);
    },

	UpdateAgentObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsValidators.UpdateAgent)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Agents.UpdateAgent.onValidationError))
					Agents.UpdateAgent.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Agents.Url, 
					Method : "UpdateAgent", 
					Params : { AgentID : oObject.AgentID,AgentName : oObject.AgentName,ContextSettings : oObject.ContextSettings,Data : oObject.Data,Description : oObject.Description,AgentTypeID : oObject.AgentTypeID}, 
					Serialize : Agents.UpdateAgent.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Agents.UpdateAgent.onErrorReceived) ? Agents.UpdateAgent.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Agents.Url, "UpdateAgent", { AgentID : oObject.AgentID,AgentName : oObject.AgentName,ContextSettings : oObject.ContextSettings,Data : oObject.Data,Description : oObject.Description,AgentTypeID : oObject.AgentTypeID}, Agents.UpdateAgent.Serialize || {});
    },
	UpdateAgentContextSettings : function(AgentID, ContextSettings, Callback) {
        return Agents.UpdateAgentContextSettingsObject({ AgentID : AgentID,ContextSettings : ContextSettings}, Callback);
    },

	UpdateAgentContextSettingsObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsValidators.UpdateAgentContextSettings)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Agents.UpdateAgentContextSettings.onValidationError))
					Agents.UpdateAgentContextSettings.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Agents.Url, 
					Method : "UpdateAgentContextSettings", 
					Params : { AgentID : oObject.AgentID,ContextSettings : oObject.ContextSettings}, 
					Serialize : Agents.UpdateAgentContextSettings.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Agents.UpdateAgentContextSettings.onErrorReceived) ? Agents.UpdateAgentContextSettings.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Agents.Url, "UpdateAgentContextSettings", { AgentID : oObject.AgentID,ContextSettings : oObject.ContextSettings}, Agents.UpdateAgentContextSettings.Serialize || {});
    },
	UpdateAgentData : function(AgentID, Data, Callback) {
        return Agents.UpdateAgentDataObject({ AgentID : AgentID,Data : Data}, Callback);
    },

	UpdateAgentDataObject : function(oObject, Callback) {
        if (!ObjectUtil.HasValue(oObject.IsValidated) || !oObject.IsValidated)
        {
            if (!Validators.Validate(oObject, AgentsValidators.UpdateAgentData)) {
				var oError = { Error: "Invalid data", Data: oObject };
				if (ObjectUtil.HasValue(Agents.UpdateAgentData.onValidationError))
					Agents.UpdateAgentData.onValidationError(oError)
					
				else if (Page.HandleValidationErrors)
					Page.HandleValidationErrors(oError);	
								
				throw "Invalid data";
            }
        }
        
        if (Callback)
        {
            JsonMethod.callWithInitializer({Page: Agents.Url, 
					Method : "UpdateAgentData", 
					Params : { AgentID : oObject.AgentID,Data : oObject.Data}, 
					Serialize : Agents.UpdateAgentData.Serialize || {},
					onDataReceived : Callback, 
					onErrorReceived : (ObjectUtil.HasValue(Agents.UpdateAgentData.onErrorReceived) ? Agents.UpdateAgentData.onErrorReceived : Page.HandleUnexpectedError) });
        }
        else
            return JsonMethod.callSync(Agents.Url, "UpdateAgentData", { AgentID : oObject.AgentID,Data : oObject.Data}, Agents.UpdateAgentData.Serialize || {});
    }
};

var AgentsValidators = {
	

	CopyAgent : {
			AgentID : AgentsValidatorsFields.AgentID	
	},

	GetAgent : {
			AgentID : AgentsValidatorsFields.AgentID	
	},

	GetAgentByAgentName : {
			AgentName : AgentsValidatorsFields.AgentName	
	},

	GetAgents : {	
	},

	GetAgentsByAgentTypeID : {
			AgentTypeID : AgentsValidatorsFields.AgentTypeID	
	},

	GetAgentsByAgentTypeIDSp_PagingSp : {
			AgentTypeID : AgentsValidatorsFields.AgentTypeID,
			Search : AgentsValidatorsFields.Search,
			SortColumn : AgentsValidatorsFields.SortColumn,
			SortAscending : AgentsValidatorsFields.SortAscending,
			SkipRows : AgentsValidatorsFields.SkipRows,
			NumRows : AgentsValidatorsFields.NumRows	
	},

	GetAgentsSp_PagingSp : {
			Search : AgentsValidatorsFields.Search,
			SortColumn : AgentsValidatorsFields.SortColumn,
			SortAscending : AgentsValidatorsFields.SortAscending,
			SkipRows : AgentsValidatorsFields.SkipRows,
			NumRows : AgentsValidatorsFields.NumRows	
	},

	InsertAgent : {
			AgentName : AgentsValidatorsFields.AgentName,
			ContextSettings : AgentsValidatorsFields.ContextSettings,
			Data : AgentsValidatorsFields.Data,
			Description : AgentsValidatorsFields.Description,
			AgentTypeID : AgentsValidatorsFields.AgentTypeID	
	},

	RemoveAgent : {
			AgentID : AgentsValidatorsFields.AgentID	
	},

	SendObjectToBuffaly : {
			AgentID : AgentsValidatorsFields.AgentID	
	},

	UpdateAgent : {
			AgentID : AgentsValidatorsFields.AgentID,
			AgentName : AgentsValidatorsFields.AgentName,
			ContextSettings : AgentsValidatorsFields.ContextSettings,
			Data : AgentsValidatorsFields.Data,
			Description : AgentsValidatorsFields.Description,
			AgentTypeID : AgentsValidatorsFields.AgentTypeID	
	},

	UpdateAgentContextSettings : {
			AgentID : AgentsValidatorsFields.AgentID,
			ContextSettings : AgentsValidatorsFields.ContextSettings	
	},

	UpdateAgentData : {
			AgentID : AgentsValidatorsFields.AgentID,
			Data : AgentsValidatorsFields.Data	
	}
};

    