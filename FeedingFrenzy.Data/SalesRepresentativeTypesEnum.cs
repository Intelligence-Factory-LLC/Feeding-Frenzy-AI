
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{
	public partial class SalesRepresentativeTypesCache
	{
		private static RowCache ? m_cache = null;
		public static RowCache Cache
		{
			get
			{
				if (null == m_cache)
					m_cache = CacheManager.Instance.GetOrCreateCache("SalesRepresentativeTypes");

				return m_cache;
			}
		}

		public static SalesRepresentativeTypesRow Get(int SalesRepresentativeTypeID)
		{
			SalesRepresentativeTypesRow ? rowSalesRepresentativeType = Cache.Get<SalesRepresentativeTypesRow>(SalesRepresentativeTypeID);

			if (null == rowSalesRepresentativeType)
			{
				rowSalesRepresentativeType = SalesRepresentativeTypesRepository.Get(SalesRepresentativeTypeID);

				if (null == rowSalesRepresentativeType)
					throw new Exception("Invalid SalesRepresentativeTypeID: " + SalesRepresentativeTypeID);

				Cache.Insert(rowSalesRepresentativeType, rowSalesRepresentativeType.SalesRepresentativeTypeID, rowSalesRepresentativeType.SalesRepresentativeTypeName); 
			}

			return rowSalesRepresentativeType;
		}

		public static SalesRepresentativeTypesRow Get(string SalesRepresentativeTypeName)
		{
			SalesRepresentativeTypesRow ? rowSalesRepresentativeType = Cache.Get<SalesRepresentativeTypesRow>(SalesRepresentativeTypeName);

			if (null == rowSalesRepresentativeType)
			{
				rowSalesRepresentativeType = SalesRepresentativeTypesRepository.GetSalesRepresentativeTypeBySalesRepresentativeTypeName(SalesRepresentativeTypeName);

				if (null == rowSalesRepresentativeType)
					throw new Exception("Invalid SalesRepresentativeTypeName: " + SalesRepresentativeTypeName);

				Cache.Insert(rowSalesRepresentativeType, rowSalesRepresentativeType.SalesRepresentativeTypeID, rowSalesRepresentativeType.SalesRepresentativeTypeName);
			}

			return rowSalesRepresentativeType;
		}
	}

	public partial class SalesRepresentativeTypesEnum
	{
		
		private static SalesRepresentativeTypesRow ? m_rowInternalSales = null;
		public static SalesRepresentativeTypesRow InternalSales
		{
			get
			{
				if (null == m_rowInternalSales)
					m_rowInternalSales = SalesRepresentativeTypesCache.Get("Internal Sales");

				if (null == m_rowInternalSales)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Internal Sales lookup value");

				return m_rowInternalSales;
			}
		}	
		
		private static SalesRepresentativeTypesRow ? m_rowSalesManager = null;
		public static SalesRepresentativeTypesRow SalesManager
		{
			get
			{
				if (null == m_rowSalesManager)
					m_rowSalesManager = SalesRepresentativeTypesCache.Get("Sales Manager");

				if (null == m_rowSalesManager)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Sales Manager lookup value");

				return m_rowSalesManager;
			}
		}	
		
		private static SalesRepresentativeTypesRow ? m_rowISD = null;
		public static SalesRepresentativeTypesRow ISD
		{
			get
			{
				if (null == m_rowISD)
					m_rowISD = SalesRepresentativeTypesCache.Get("ISD");

				if (null == m_rowISD)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing ISD lookup value");

				return m_rowISD;
			}
		}	
					
	}
}
		