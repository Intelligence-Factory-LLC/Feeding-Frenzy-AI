
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;
using System.Numerics;

namespace FeedingFrenzy.Data
{	
	public partial class PhoneNumbersRow : RooTrax.Common.DB.BasicRow
	{
		private AreaCodesRow? m_rowAreaCode = null;
		public AreaCodesRow? AreaCode
		{
			get
			{
				if (null == m_rowAreaCode && this.PhoneNumber.Length > 3)
				{
					m_rowAreaCode = AreaCodesRepository.GetAreaCodeByAreaCode(this.PhoneNumber.Substring(0, 3));
				}

				return m_rowAreaCode;
			}
		}

		public bool IsCallable
		{
			get
			{
				return !IsBlocked && !IsSpam && !StringUtil.EqualNoCase("Invalid", PhoneType);
			}
		}

		public bool IsTextable
		{
			get
			{
				return IsCallable && !StringUtil.EqualNoCase("Landline", PhoneType);
			}			
		}	
		
		public DateTime? LastContacted
		{
			get
			{
				return this.DataObject.GetDateTimeOrNull(nameof(LastContacted));
			}
			set
			{
				this.DataObject[nameof(LastContacted)] = value;
			}
		}
		
		public bool IsFrequentlyContacted
		{
			get
			{
				return this.CallCount > 3 && this.LastContacted.HasValue && this.LastContacted.Value > DateTime.Now.AddDays(-30);
			}
		}

		public int CallCount
		{
			get
			{
				return this.DataObject.GetIntOrDefault(nameof(CallCount), 0)!.Value;
			}
			set
			{
				this.DataObject[nameof(CallCount)] = value;
			}
		}
		
	
	}
	
	

}	

		