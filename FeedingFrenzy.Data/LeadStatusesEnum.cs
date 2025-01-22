
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{
	public partial class StatusesCache
	{
		private static RowCache m_cache = null;
		public static RowCache Cache
		{
			get
			{
				if (null == m_cache)
					m_cache = CacheManager.Instance.GetOrCreateCache("Statuses");

				return m_cache;
			}
		}

		public static LeadStatusesRow Get(int StatusID)
		{
			LeadStatusesRow ? rowStatus = Cache.Get<LeadStatusesRow>(StatusID);

			if (null == rowStatus)
			{
				rowStatus = LeadStatusesRepository.Get(StatusID);

				if (null == rowStatus)
					throw new Exception("Invalid StatusID: " + StatusID);

				Cache.Insert(rowStatus, rowStatus.LeadStatusID, rowStatus.StatusName); 
			}

			return rowStatus;
		}

		public static LeadStatusesRow Get(string StatusName)
		{
			LeadStatusesRow ? rowStatus = Cache.Get<LeadStatusesRow>(StatusName);

			if (null == rowStatus)
			{
				rowStatus = LeadStatusesRepository.GetLeadStatusByStatusName(StatusName);

				if (null == rowStatus)
					throw new Exception("Invalid StatusName: " + StatusName);

				Cache.Insert(rowStatus, rowStatus.LeadStatusID, rowStatus.StatusName);
			}

			return rowStatus;
		}
	}

	public partial class StatusesEnum
	{
		
		private static LeadStatusesRow ? m_rowSold = null;
		public static LeadStatusesRow Sold
		{
			get
			{
				if (null == m_rowSold)
					m_rowSold = StatusesCache.Get("Sold");

				if (null == m_rowSold)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Sold lookup value");

				return m_rowSold;
			}
		}	
		
		private static LeadStatusesRow ? m_rowInthePipeline = null;
		public static LeadStatusesRow InthePipeline
		{
			get
			{
				if (null == m_rowInthePipeline)
					m_rowInthePipeline = StatusesCache.Get("In the Pipeline");

				if (null == m_rowInthePipeline)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing In the Pipeline lookup value");

				return m_rowInthePipeline;
			}
		}	
		
		private static LeadStatusesRow? m_rowLost = null;
		public static LeadStatusesRow Lost
		{
			get
			{
				if (null == m_rowLost)
					m_rowLost = StatusesCache.Get("Lost");

				if (null == m_rowLost)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Lost lookup value");

				return m_rowLost;
			}
		}	
		
		private static LeadStatusesRow ? m_rowDefunct = null;
		public static LeadStatusesRow Defunct
		{
			get
			{
				if (null == m_rowDefunct)
					m_rowDefunct = StatusesCache.Get("Defunct");

				if (null == m_rowDefunct)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Defunct lookup value");

				return m_rowDefunct;
			}
		}	
		
		private static LeadStatusesRow? m_rowContacted = null;
		public static LeadStatusesRow Contacted
		{
			get
			{
				if (null == m_rowContacted)
					m_rowContacted = StatusesCache.Get("Contacted");

				if (null == m_rowContacted)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Contacted lookup value");

				return m_rowContacted;
			}
		}	
		
		private static LeadStatusesRow? m_rowNotContacted = null;
		public static LeadStatusesRow NotContacted
		{
			get
			{
				if (null == m_rowNotContacted)
					m_rowNotContacted = StatusesCache.Get("Not Contacted");

				if (null == m_rowNotContacted)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Not Contacted lookup value");

				return m_rowNotContacted;
			}
		}	
					
	}
}
		