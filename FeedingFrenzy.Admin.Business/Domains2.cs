
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Domains : JsonWs
    {  
    	public static int GetOrInsertDomain(string DomainName)    	    	
    	{
			DomainsRow ? rowDomain = DomainsRepository.GetDomainByDomainName(DomainName);
			if (null == rowDomain)
			{
				return InsertDomain(DomainName, null);
			}
			else
			{
				return rowDomain.DomainID;
			}
		}
    }
}    
		