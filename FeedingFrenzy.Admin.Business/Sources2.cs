
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Sources : JsonWs
    {
		static public SourcesRow GetOrInsertSource(string strCampaign)
		{
			SourcesRow ? rowSource = SourcesRepository.GetSourceBySourceName(strCampaign);
			if (null == rowSource)
			{
				int iSourceID = SourcesRepository.InsertSource(strCampaign, null);
				rowSource = SourcesRepository.Get(iSourceID);
			}

			return rowSource!;
		}

	}
}    
		