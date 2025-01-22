
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;
using FeedingFrenzy.Admin.Business.ChatAgents;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Agents : JsonWs
    {
		public static string SendObjectToBuffaly(int AgentID)
		{
			AgentsRow rowAgent = Agents.GetAgent(AgentID);
			string strPrototypeName = FeedingFrenzyAgent.InsertObject(nameof(AgentsRow), rowAgent.AgentID);
			rowAgent.DataObject["PrototypeName"] = strPrototypeName;
			AgentsRepository.UpdateAgentData(rowAgent);

			if (!StringUtil.IsEmpty(rowAgent.AgentName))
				FeedingFrenzyAgent.InsertEntity(rowAgent.AgentName, "AgentsRow.AgentName", strPrototypeName);

			return strPrototypeName;
		}
	}
}    
		