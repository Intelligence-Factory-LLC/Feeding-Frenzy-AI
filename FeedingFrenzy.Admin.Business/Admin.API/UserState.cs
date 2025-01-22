using BasicUtilities.Collections;
using Microsoft.AspNetCore.Http;
using FeedingFrenzy.Data;
using WebAppUtilities;



namespace FeedingFrenzy.Admin.Business.API
{
	public class SessionExpiredException : JsonWsException
	{
		public SessionExpiredException() : base("Session Expired - Please login again")
		{

		}
	}

	public class UserState
	{
		private HttpContext m_Context;
		public UserState(HttpContext context)
		{
			m_Context = context;
		}
		private void SetState<T>(string strKey, T tValue)
		{
			m_Context.Session.SetValue<T>(strKey, tValue);
		}
		private T GetState<T>(string strKey) where T: class
		{
			T? tValue = m_Context.Session.GetValue<T>(strKey); 

			if (null == tValue)
				throw new SessionExpiredException();

			return tValue;
		}


		public int UserID
		{
			get
			{				
				return m_Context.Session.GetInt(nameof(UserID)) ?? throw new SessionExpiredException();
			}

			set
			{
				SetState<int>(nameof(UserID), value);
			}
		}
		public bool HasRole(int RoleID)
		{
			return this.User.UserRoleRoles?.Any(x => x.RoleID == RoleID) ?? false;
		}

		public bool IsSalesRepresentative
		{
			get
			{
				return HasRole(RolesEnum.SalesRepresentative.RoleID);
			}
		}

		public bool IsAdministrator
		{
			get
			{
				return HasRole(RolesEnum.Administrator.RoleID);
			}
		}

		public int SalesRepresentativeID
		{
			get
			{
				return SalesRepresentative.SalesRepresentativeID;
			}

		}

		private SalesRepresentativesRow? m_rowSalesRepresentative = null; 
		public SalesRepresentativesRow SalesRepresentative
		{
			get
			{
				if (null == m_rowSalesRepresentative)
				{
					if (!User.UserRoleRoles.Any(x => x.RoleName == "Sales Representative"))
						throw new Exception("User does not have Sales Representative Role: " + User.Email);

					SalesRepresentativesRow? rowSalesRepresentative = SalesRepresentativesRepository.GetSalesRepresentativeByUserID(UserID);
					if (null == rowSalesRepresentative)
						throw new Exception("No sales representative setup for user: " + User.Email);

					m_rowSalesRepresentative = rowSalesRepresentative;

				}

				return m_rowSalesRepresentative;
			}
		}

		private UsersRow? m_rowUser = null; 
		public UsersRow User
		{
			get
			{
				//Objects can't be saved to session since it serializes to JSON
				if (null == m_rowUser)
					m_rowUser = UsersRepository.Get(this.UserID) ?? throw new Exception("Cannot find user: " + this.UserID);

				return m_rowUser;
			}		
		}

		public string UserName
		{
			get
			{
				return User.Email;
			}
		}


		public Permissions Permission
		{
			get
			{
				Permissions permission = GetState<Permissions>(nameof(Permission));
				if (null == permission)
					throw new SessionExpiredException();

				return permission;
			}

			set
			{
				SetState<Permissions>(nameof(Permission), value);
			}
		}
	}
}
