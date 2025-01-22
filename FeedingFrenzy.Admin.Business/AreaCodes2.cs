
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class AreaCodes : JsonWs
    {
		public static AreaCodesRow ? GetAreaCodeByPhone(string Phone)
		{
			AreaCodesRow ? rowAreaCode = null;

			if (!StringUtil.IsEmpty(Phone) && Phone.Length > 3)
			{
				if (Phone.StartsWith("1"))
					Phone = StringUtil.RightOfFirst(Phone, "1");

				rowAreaCode = AreaCodesRepository.GetAreaCodeByAreaCode(Phone.Substring(0, 3));
			}

			return rowAreaCode;
		}
	}
}    
		