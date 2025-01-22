
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class LeadContactsRow : RooTrax.Common.DB.BasicRow
	{
		public string ? PhoneExtension
		{
			get
			{
				return this.DataObject.GetStringOrNull(nameof(PhoneExtension));
			}
			set
			{
				this.DataObject[nameof(PhoneExtension)] = value;
			}
		}
		
		public string ? Function
		{
			get
			{
				return this.DataObject.GetStringOrNull(nameof(Function));
			}
			set
			{
				this.DataObject[nameof(Function)] = value;
			}
		}
		
	
		
		public string ? Department
		{
			get
			{
				return this.DataObject.GetStringOrNull(nameof(Department));
			}
			set
			{
				this.DataObject[nameof(Department)] = value;
			}
		}
		
		public string ? MobilePhone
		{
			get
			{
				return this.DataObject.GetStringOrNull(nameof(MobilePhone));
			}
			set
			{
				this.DataObject[nameof(MobilePhone)] = StringUtil.IsEmpty(value) ? "" : DataAccess.Formatters.CleanPhoneNumber(value!);
			}
		}		

		public string? LinkedInUrl
		{
			get
			{
				return this.DataObject.GetStringOrNull(nameof(LinkedInUrl));
			}
			set
			{
				this.DataObject[nameof(LinkedInUrl)] = value;
			}
		}


		public string? ExternalLink
		{
			get
			{
				return this.DataObject.GetStringOrNull(nameof(ExternalLink));
			}
			set
			{
				this.DataObject[nameof(ExternalLink)] = value;
			}
		}

		public string? ImportKey
		{
			get
			{
				return this.DataObject.GetStringOrNull(nameof(ImportKey));
			}
			set
			{
				this.DataObject[nameof(ImportKey)] = value;
			}
		}


	}

}	

		