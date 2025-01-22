
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Campaigns : JsonWs
    {  

    	public static CampaignsRow GetOrInsertCampaignByCampaignName(
    		int SourceID, 
    		string CampaignName)    	    	
    	{
			CampaignsRow ? rowCampaign = CampaignsRepository.GetCampaignByCampaignName(CampaignName);
			if (null == rowCampaign)
			{
				int iCampaignID = CampaignsRepository.InsertCampaign(SourceID, CampaignName, null, null);
				rowCampaign = CampaignsRepository.Get(iCampaignID);
			}

			return rowCampaign!;
		}
		public static CampaignsRow GetOrInsertCampaignByCampaigKey(
			int SourceID,
			string CampaignKey)
		{
			CampaignsRow ? rowCampaign = CampaignsRepository.GetCampaignByCampaignKey(CampaignKey);
			if (null == rowCampaign)
			{
				int iCampaignID = CampaignsRepository.InsertCampaign(SourceID, CampaignKey, CampaignKey, null);
				rowCampaign = CampaignsRepository.Get(iCampaignID);
			}

			return rowCampaign!;
		}
	}
}    
		