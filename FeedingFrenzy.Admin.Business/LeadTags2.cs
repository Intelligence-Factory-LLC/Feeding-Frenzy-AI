
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;
using System.Linq;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class LeadTags : JsonWs
    {  
		public static void InsertOrUpdateLeadTag(int LeadID, string TagName)
		{
			TagsRow ? rowTag = TagsRepository.GetTagByTagName(TagName);
			if (null == rowTag)
			{
				rowTag = TagsRepository.Get(Tags.InsertTag(null, TagName, null));
			}

			TagsDataTable dtTags = LeadTagsRepository.GetTagsByLeadTagLeadID(LeadID);
			if (!dtTags.Any(x => x.TagID == rowTag.TagID))
			{
				LeadTagsRepository.InsertLeadTag(LeadID, rowTag.TagID, null);
			}
		}


		public static void RemoveLeadTag2(int LeadID, string TagName)
		{
			TagsRow ? rowTag = TagsRepository.GetTagByTagName(TagName);
			if (null != rowTag)
			{
				LeadTagsDataTable dtLeadTags = LeadTagsRepository.GetLeadTagsByLeadID(LeadID);
				LeadTagsRow ? rowLeadTag = dtLeadTags.FirstOrDefault(x => x.TagID == rowTag.TagID);
				if (null != rowLeadTag)
					LeadTagsRepository.RemoveLeadTag(rowLeadTag.LeadTagID);
			}
		}

	}
}    
		