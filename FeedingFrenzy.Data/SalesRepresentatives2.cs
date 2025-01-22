
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class SalesRepresentativesRow : RooTrax.Common.DB.BasicRow
	{
		public bool IsAlertedByEmail
		{
			get
			{
				return this.DataObject.GetBooleanOrFalse(nameof(IsAlertedByEmail));
			}
			set
			{
				this.DataObject[nameof(IsAlertedByEmail)] = value;
			}
		}
		
		public bool IsAlertedBySMS
		{
			get
			{
				return DataObject.GetBooleanOrFalse(nameof(IsAlertedBySMS));
			}
			set
			{
				this.DataObject[nameof(IsAlertedBySMS)] = value;
			}
		}


		public bool RecordCalls
		{
			get
			{
				return DataObject.GetBooleanOrFalse(nameof(RecordCalls));
			}
			set
			{
				this.DataObject[nameof(RecordCalls)] = value;
			}
		}


		public bool ViewQuoting
		{
			get
			{
				return DataObject.GetBooleanOrFalse(nameof(ViewQuoting));
			}
			set
			{
				this.DataObject[nameof(ViewQuoting)] = value;
			}
		}

		public int Weight
		{
			get
			{
				int iWeight = DataObject.GetIntOrDefault(nameof(Weight), 0) ?? 0;

				if (null != this.LastClaimedLead)
				{
					int iMinutesAgo = (int) (DateTime.Now - this.LastClaimedLead.Value).TotalMinutes;
					int iDwellTime = 20;
					if (iMinutesAgo < iDwellTime)
						return Math.Max(iWeight, (iDwellTime - iMinutesAgo));
				}

				return iWeight;
			}
			set
			{
				this.DataObject[nameof(Weight)] = value;
			}
		}

	

		public bool IsEmailIntegrated
		{
			get
			{
				return DataObject.GetBooleanOrFalse("IsEmailIntegrated");
			}
			set
			{
				this.DataObject["IsEmailIntegrated"] = value;
			}
		}
		

		public int LimitClaimsByFollowUps
		{
			get
			{
				return DataObject.GetIntOrDefault(nameof(LimitClaimsByFollowUps), 0) ?? 0;
			}

			set
			{
				this.DataObject[nameof(LimitClaimsByFollowUps)] = value;
			}
		}

		public DateTime? LastClaimedLead
		{
			get
			{
				return DataObject.GetDateTimeOrNull(nameof(LastClaimedLead));
			}

			set
			{
				this.DataObject[nameof(LastClaimedLead)] = value;
			}
		}


		public string Email
		{
			get
			{
				return this.User.Email;
			}
		}

		public string Name
		{
			get
			{
				return this.User.FirstName + " " + this.User.LastName;
			}
		}

		public string Phone
		{
			get
			{
				return this.User.Phone;
			}
		}

		public bool IsEnabled
		{
			get
			{
				return this.User.IsEnabled;
			}
		}

	}

}	

		