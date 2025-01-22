
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{
	public partial class RolesCache
	{
		private static RowCache ? m_cache = null;
		public static RowCache Cache
		{
			get
			{
				if (null == m_cache)
					m_cache = CacheManager.Instance.GetOrCreateCache("Roles");

				return m_cache;
			}
		}

		public static RolesRow Get(int RoleID)
		{
			RolesRow ? rowRole = Cache.Get<RolesRow>(RoleID);

			if (null == rowRole)
			{
				rowRole = RolesRepository.Get(RoleID);

				if (null == rowRole)
					throw new Exception("Invalid RoleID: " + RoleID);

				Cache.Insert(rowRole, rowRole.RoleID, rowRole.RoleName); 
			}

			return rowRole;
		}

		public static RolesRow Get(string RoleName)
		{
			RolesRow ? rowRole = Cache.Get<RolesRow>(RoleName);

			if (null == rowRole)
			{
				rowRole = RolesRepository.GetRoleByRoleName(RoleName);

				if (null == rowRole)
					throw new Exception("Invalid RoleName: " + RoleName);

				Cache.Insert(rowRole, rowRole.RoleID, rowRole.RoleName);
			}

			return rowRole;
		}
	}

	public partial class RolesEnum
	{
		
		private static RolesRow ? m_rowAdministrator = null;
		public static RolesRow Administrator
		{
			get
			{
				if (null == m_rowAdministrator)
					m_rowAdministrator = RolesCache.Get("Administrator");

				if (null == m_rowAdministrator)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Administrator lookup value");

				return m_rowAdministrator;
			}
		}	
		
		private static RolesRow ? m_rowSalesRepresentative = null;
		public static RolesRow SalesRepresentative
		{
			get
			{
				if (null == m_rowSalesRepresentative)
					m_rowSalesRepresentative = RolesCache.Get("Sales Representative");

				if (null == m_rowSalesRepresentative)
					throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Sales Representative lookup value");

				return m_rowSalesRepresentative;
			}
		}	
					
	}
}
		