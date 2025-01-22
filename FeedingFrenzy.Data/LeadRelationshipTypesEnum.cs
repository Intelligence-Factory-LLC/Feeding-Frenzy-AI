
using RooTrax.Common;
using RooTrax.Cache;


namespace FeedingFrenzy.Data
{
	public partial class LeadRelationshipTypesCache
	{
		private static RowCache ? m_cache = null;
		public static RowCache Cache
		{
			get
			{
				if (null == m_cache)
					m_cache = CacheManager.Instance.GetOrCreateCache("LeadRelationshipTypes");

				return m_cache;
			}
		}

		public static LeadRelationshipTypesRow Get(int LeadRelationshipTypeID)
		{
			LeadRelationshipTypesRow ? rowLeadRelationshipType = Cache.Get<LeadRelationshipTypesRow>(LeadRelationshipTypeID);

			if (null == rowLeadRelationshipType)
			{
				rowLeadRelationshipType = LeadRelationshipTypesRepository.Get(LeadRelationshipTypeID);

				if (null == rowLeadRelationshipType)
					throw new Exception("Invalid LeadRelationshipTypeID: " + LeadRelationshipTypeID);

				Cache.Insert(rowLeadRelationshipType, rowLeadRelationshipType.LeadRelationshipTypeID, rowLeadRelationshipType.LeadRelationshipTypeName); 
			}

			return rowLeadRelationshipType;
		}

		public static LeadRelationshipTypesRow Get(string LeadRelationshipTypeName)
		{
			LeadRelationshipTypesRow ? rowLeadRelationshipType = Cache.Get<LeadRelationshipTypesRow>(LeadRelationshipTypeName);

			if (null == rowLeadRelationshipType)
			{
				rowLeadRelationshipType = LeadRelationshipTypesRepository.GetLeadRelationshipTypeByLeadRelationshipTypeName(LeadRelationshipTypeName);

				if (null == rowLeadRelationshipType)
					throw new Exception("Invalid LeadRelationshipTypeName: " + LeadRelationshipTypeName);

				Cache.Insert(rowLeadRelationshipType, rowLeadRelationshipType.LeadRelationshipTypeID, rowLeadRelationshipType.LeadRelationshipTypeName);
			}

			return rowLeadRelationshipType;
		}
	}

	public partial class LeadRelationshipTypesEnum
	{

		private static LeadRelationshipTypesRow ? m_rowDuplicate = null;
		public static LeadRelationshipTypesRow Duplicate
		{
			get
			{
				if (null == m_rowDuplicate)
					m_rowDuplicate = LeadRelationshipTypesCache.Get("Duplicate");

				if (null == m_rowDuplicate)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Duplicate lookup value");

				return m_rowDuplicate;
			}
		}


		private static LeadRelationshipTypesRow ? m_rowReplacedBy = null;
		public static LeadRelationshipTypesRow ReplacedBy
		{
			get
			{
				if (null == m_rowReplacedBy)
					m_rowReplacedBy = LeadRelationshipTypesCache.Get("Replaced By");

				if (null == m_rowReplacedBy)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Replaced By lookup value");

				return m_rowReplacedBy;
			}
		}
		private static LeadRelationshipTypesRow? m_rowParent = null;
		public static LeadRelationshipTypesRow Parent
		{
			get
			{
				if (null == m_rowParent)
					m_rowParent = LeadRelationshipTypesCache.Get("Parent");

				if (null == m_rowParent)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Parent lookup value");

				return m_rowParent;
			}
		}	
		
		private static LeadRelationshipTypesRow? m_rowChild = null;
		public static LeadRelationshipTypesRow Child
		{
			get
			{
				if (null == m_rowChild)
					m_rowChild = LeadRelationshipTypesCache.Get("Child");

				if (null == m_rowChild)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Child lookup value");

				return m_rowChild;
			}
		}	
		
	
					
	}
}
		