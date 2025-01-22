
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{
	public partial class EmailAddresses : JsonWs
	{
		static public EmailAddressesRow GetOrInsertEmailAddress(string Email)
		{
			EmailAddressesRow? rowEmailAddress = EmailAddressesRepository.GetEmailAddressByEmail(Email);
			if (null == rowEmailAddress)
			{
				string strDomain = StringUtil.RightOfLast(Email, "@");
				int iDomainID = Domains.GetOrInsertDomain(strDomain);
				int iEmailAddressID = InsertEmailAddress(Email, null, false, false, iDomainID);
				return EmailAddressesRepository.Get(iEmailAddressID);
			}
			else
			{
				return rowEmailAddress;
			}

		}
	}
}    
		