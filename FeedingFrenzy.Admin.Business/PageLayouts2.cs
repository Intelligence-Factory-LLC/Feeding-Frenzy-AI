
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;
using Amazon.Runtime.Internal.Endpoints.StandardLibrary;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class PageLayouts : JsonWs
    {  
		public static ContentsRow GetQuickHelpContentByURL(string URL, string DefaultContent)
		{
			PageLayoutsRow rowLayout = PageLayouts.GetPageLayoutByUrl(URL) ?? throw new Exception("Could not find PageLayout: " + URL);
			string strPage = StringUtil.Between(rowLayout.Handler, "Output=", "&Class");
			string strContentName = strPage + "::QuickHelp";

			ContentsRow ? rowContent = ContentsRepository.GetContentByContentName(strContentName);
			if (null == rowContent)
			{
				int iContentID = Contents.InsertContent(strContentName, DefaultContent, null, ContentTypesEnum.QuickHelp.ContentTypeID);
				rowContent = Contents.GetContent(iContentID);
			}

			return rowContent;
		}
			
    				
    }
}    
		