
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{
	public partial class ContentTypesCache
	{
		private static RowCache ? m_cache = null;
		public static RowCache Cache
		{
			get
			{
				if (null == m_cache)
					m_cache = CacheManager.Instance.GetOrCreateCache("ContentTypes");

				return m_cache;
			}
		}

		public static ContentTypesRow Get(int ContentTypeID)
		{
			ContentTypesRow ? rowContentType = Cache.Get<ContentTypesRow>(ContentTypeID);

			if (null == rowContentType)
			{
				rowContentType = ContentTypesRepository.Get(ContentTypeID);

				if (null == rowContentType)
					throw new Exception("Invalid ContentTypeID: " + ContentTypeID);

				Cache.Insert(rowContentType, rowContentType.ContentTypeID, rowContentType.ContentTypeName); 
			}

			return rowContentType;
		}

		public static ContentTypesRow Get(string ContentTypeName)
		{
			ContentTypesRow ? rowContentType = Cache.Get<ContentTypesRow>(ContentTypeName);

			if (null == rowContentType)
			{
				rowContentType = ContentTypesRepository.GetContentTypeByContentTypeName(ContentTypeName);

				if (null == rowContentType)
					throw new Exception("Invalid ContentTypeName: " + ContentTypeName);

				Cache.Insert(rowContentType, rowContentType.ContentTypeID, rowContentType.ContentTypeName);
			}

			return rowContentType;
		}
	}

	public partial class ContentTypesEnum
	{
		
		private static ContentTypesRow ? m_rowUserContent = null;
		public static ContentTypesRow UserContent
		{
			get
			{
				if (null == m_rowUserContent)
					m_rowUserContent = ContentTypesCache.Get("User Content");

				if (null == m_rowUserContent)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing User Content lookup value");

				return m_rowUserContent;
			}
		}	
		
		private static ContentTypesRow ? m_rowCallScript = null;
		public static ContentTypesRow CallScript
		{
			get
			{
				if (null == m_rowCallScript)
					m_rowCallScript = ContentTypesCache.Get("Call Script");

				if (null == m_rowCallScript)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Call Script lookup value");

				return m_rowCallScript;
			}
		}

		private static ContentTypesRow? m_rowkScript = null;
		public static ContentTypesRow kScript
		{
			get
			{
				if (null == m_rowkScript)
					m_rowkScript = ContentTypesCache.Get("kScript");

				if (null == m_rowkScript)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing kScript lookup value");

				return m_rowkScript;
			}
		}
		private static ContentTypesRow? m_rowQuickHelp = null;
		public static ContentTypesRow QuickHelp
		{
			get
			{
				if (null == m_rowQuickHelp)
					m_rowQuickHelp = ContentTypesCache.Get("Quick Help");

				if (null == m_rowQuickHelp)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Quick Help lookup value");

				return m_rowQuickHelp;
			}
		}

        private static ContentTypesRow? m_rowAgentScript = null;
        public static ContentTypesRow AgentScript
        {
            get
            {
                if (null == m_rowAgentScript)
                    m_rowAgentScript = ContentTypesCache.Get("Agent Script");

                if (null == m_rowAgentScript)
                    throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Agent Script lookup value");

                return m_rowAgentScript;
            }
        }

    }
}
		