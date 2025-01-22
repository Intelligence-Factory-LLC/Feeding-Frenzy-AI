using Microsoft.AspNetCore.Http;
using System.Collections.Concurrent;
using WebAppUtilities;

namespace FeedingFrenzy.Messaging
{
	public class Leases : JsonWs
	{
		public class Lease
		{
			public string ObjectName;
			public int ObjectID;
			public string LeaseType;
			public string User;
			public bool IsDeleted = false;
			public string SessionID;
			public DateTime DateAquired;
			public string Key
			{
				get
				{
					return ObjectID + "|" + ObjectName;
				}
			}
		}

		static private ConcurrentDictionary<string, List<Lease>> m_mapUserToLease = new ConcurrentDictionary<string, List<Lease>>();
		static private ConcurrentDictionary<string, List<Lease>> m_mapKeyToLease = new ConcurrentDictionary<string, List<Lease>>();

		private static IHttpContextAccessor _httpContextAccessor;

		public Leases(IHttpContextAccessor httpContextAccessor)
		{
			_httpContextAccessor = httpContextAccessor;
		}

		public static List<Lease> AquireLease(string User, string ObjectName, int ObjectID, string LeaseType)
		{
			Logs.DebugLog.WriteMethodStart();

			List<Lease> lstByKeyLeases = null;

			try
			{
				string strKey = ObjectID + "|" + ObjectName;
				Lease leaseNew = new Lease
				{
					User = User,
					ObjectID = ObjectID,
					ObjectName = ObjectName,
					LeaseType = LeaseType
				};


				//Send notifications
				{
					List<Lease> lstLeases;
					if (m_mapKeyToLease.TryGetValue(strKey, out lstLeases))
					{
						for (int i = 0; i < lstLeases.Count; i++)
						{
							Lease lease = lstLeases[i];
							if (!lease.IsDeleted)
							{
								new Messages(_httpContextAccessor).SendMessageAsync(lease.User, new Messages.Message
								{
									MessageType = "LeaseAquired",
									To = lease.User,
									Payload = leaseNew
								});
							}
						}
					}
					else
					{
						lstLeases = new List<Lease>();
						m_mapKeyToLease[strKey] = lstLeases;
					}

					lstByKeyLeases = lstLeases;
				}

				//Add new lease
				{
					List<Lease> lstLeases;
					if (!m_mapUserToLease.TryGetValue(User, out lstLeases))
					{
						lstLeases = new List<Lease>();
						m_mapUserToLease[User] = lstLeases;
					}

					bool bExists = false;
					for (int i = 0; i < lstLeases.Count; i++)
					{
						Lease lease = lstLeases[i];

						if (lease.ObjectName == leaseNew.ObjectName &&
							lease.ObjectID == leaseNew.ObjectID &&
							//lease.LeaseType == leaseNew.LeaseType && 
							lease.IsDeleted == false)
						{
							bExists = true;
							lease.LeaseType = leaseNew.LeaseType;
							break;
						}
					}

					if (!bExists)
					{
						lstLeases.Add(leaseNew);
						lstByKeyLeases.Add(leaseNew);
					}

					//Only keep a max of 5 leases 
					for (int i = 5; i < lstLeases.Count; i++)
					{
						lstLeases[i - 5].IsDeleted = true;
					}
				}
			}
			catch (Exception err)
			{
				Logs.LogError(err);
			}

			Logs.DebugLog.WriteMethodStop();

			return lstByKeyLeases;
		}

		public static List<Lease> AquireLease2(string User, string SessionID, string ObjectName, int ObjectID, string LeaseType)
		{
			Logs.DebugLog.WriteMethodStart();

			List<Lease> lstByKeyLeases = null;

			try
			{
				Lease leaseNew = new Lease
				{
					User = User,
					ObjectID = ObjectID,
					ObjectName = ObjectName,
					LeaseType = LeaseType,
					SessionID = SessionID,
					DateAquired = DateTime.Now
				};

				string strKey = leaseNew.Key;

				//Send notifications
				lstByKeyLeases = GetLeasesByKey(strKey);
				SendLeaseAquired(leaseNew);

				//Add new lease
				List<Lease> lstRemovedLeases = new List<Lease>();

				{
					List<Lease> lstLeases;
					if (!m_mapUserToLease.TryGetValue(User, out lstLeases))
					{
						lstLeases = new List<Lease>();
						m_mapUserToLease[User] = lstLeases;
					}

					for (int i = 0; i < lstLeases.Count; i++)
					{
						Lease lease = lstLeases[i];

						//Remove any leases from this same session id
						if (lease.IsDeleted == false && lease.SessionID == leaseNew.SessionID)
						{
							lease.IsDeleted = true;
							lstRemovedLeases.Add(lease);
						}
					}

					lstLeases.Add(leaseNew);
					lstByKeyLeases.Add(leaseNew);
				}

				for (int i = 0; i < lstRemovedLeases.Count; i++)
				{
					Lease lease = lstRemovedLeases[i];

					SendLeaseRemoved(lease);
				}
			}
			catch (Exception err)
			{
				Logs.LogError(err);
			}

			Logs.DebugLog.WriteMethodStop();

			return GetNonDeleted(lstByKeyLeases);
		}

		private static List<Lease> GetLeasesByKey(string strKey)
		{
			List<Lease> lstLeases;

			if (!m_mapKeyToLease.TryGetValue(strKey, out lstLeases))
			{
				lstLeases = new List<Lease>();
				m_mapKeyToLease[strKey] = lstLeases;
			}

			return lstLeases;
		}

		private static void SendLeaseAquired(Lease leaseNew)
		{
			List<Lease> lstLeases = GetLeasesByKey(leaseNew.Key);

			for (int i = 0; i < lstLeases.Count; i++)
			{
				Lease lease = lstLeases[i];
				if (!lease.IsDeleted)
				{
					new Messages(_httpContextAccessor).SendMessageAsync(lease.User, new Messages.Message
					{
						MessageType = "LeaseAquired",
						To = lease.User,
						Payload = leaseNew
					});
				}
			}
		}

		private static void SendLeaseRemoved(Lease leaseRemoved)
		{
			List<Lease> lstLeases = GetLeasesByKey(leaseRemoved.Key);
			for (int i = 0; i < lstLeases.Count; i++)
			{
				Lease lease = lstLeases[i];
				if (!lease.IsDeleted)
				{
					new Messages(_httpContextAccessor).SendMessageAsync(leaseRemoved.User, new Messages.Message
					{
						MessageType = "LeaseRemoved",
						To = lease.User,
						Payload = leaseRemoved
					});
				}
			}
		}


		public static List<string> GetUsers()
		{
			return m_mapUserToLease.Keys.ToList<string>();
		}

		public static List<Lease> GetLeases(string User)
		{
			return m_mapUserToLease[User];
		}

		private static List<Lease> GetNonDeleted(List<Lease> leases)
		{
			List<Lease> leasesActive = new List<Lease>();

			for (int i = 0; i < leases.Count; i++)
			{
				Lease lease = leases[i];
				if (!lease.IsDeleted)
					leasesActive.Add(lease);
			}

			return leasesActive;
		}

		public static List<Lease> GetActiveLeases(string ObjectName, int ObjectID)
		{
			List<Lease> leases = GetLeasesByKey(ObjectID + "|" + ObjectName);
			return GetNonDeleted(leases);
		}
	}
}
