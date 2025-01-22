
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{
	public partial class AgentTypesCache
	{
		private static RowCache ? m_cache = null;
		public static RowCache Cache
		{
			get
			{
				if (null == m_cache)
					m_cache = CacheManager.Instance.GetOrCreateCache("AgentTypes");

				return m_cache;
			}
		}

		public static AgentTypesRow Get(int AgentTypeID)
		{
			AgentTypesRow ? rowAgentType = Cache.Get<AgentTypesRow>(AgentTypeID);

			if (null == rowAgentType)
			{
				rowAgentType = AgentTypesRepository.Get(AgentTypeID);

				if (null == rowAgentType)
					throw new Exception("Invalid AgentTypeID: " + AgentTypeID);

				Cache.Insert(rowAgentType, rowAgentType.AgentTypeID, rowAgentType.AgentTypeName); 
			}

			return rowAgentType;
		}

		public static AgentTypesRow Get(string AgentTypeName)
		{
			AgentTypesRow ? rowAgentType = Cache.Get<AgentTypesRow>(AgentTypeName);

			if (null == rowAgentType)
			{
				rowAgentType = AgentTypesRepository.GetAgentTypeByAgentTypeName(AgentTypeName);

				if (null == rowAgentType)
					throw new Exception("Invalid AgentTypeName: " + AgentTypeName);

				Cache.Insert(rowAgentType, rowAgentType.AgentTypeID, rowAgentType.AgentTypeName);
			}

			return rowAgentType;
		}
	}

	public partial class AgentTypesEnum
	{
		
		private static AgentTypesRow ? m_rowTIM = null;
		public static AgentTypesRow TIM
		{
			get
			{
				if (null == m_rowTIM)
					m_rowTIM = AgentTypesCache.Get("TIM");

				if (null == m_rowTIM)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing TIM lookup value");

				return m_rowTIM;
			}
		}	
		
		private static AgentTypesRow ? m_rowVoiceAgent = null;
		public static AgentTypesRow VoiceAgent
		{
			get
			{
				if (null == m_rowVoiceAgent)
					m_rowVoiceAgent = AgentTypesCache.Get("Voice Agent");

				if (null == m_rowVoiceAgent)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Voice Agent lookup value");

				return m_rowVoiceAgent;
			}
		}	
					
	}
}
		