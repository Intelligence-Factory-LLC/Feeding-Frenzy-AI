
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{
	public class UserContent
	{
		public string ContentName = string.Empty;
		public string Content = string.Empty;
		public string ? Data = null;
	}
	public partial class Contents : JsonWs
	{
		public static List<UserContent> GetUserContents(string Email)
		{
			List<UserContent> listUserContent = new List<UserContent>();

			ContentsRow ? rowContent = Contents.GetContentByContentName(Email);

			if (null == rowContent)
			{
				int iContentID = ContentsRepository.InsertContent(Email, "[]", null, ContentTypesEnum.UserContent.ContentTypeID);
				rowContent = Contents.GetContent(iContentID);
			}

			if (!StringUtil.IsEmpty(rowContent.Content))
				listUserContent = JsonUtil.ConvertTo<List<UserContent>>(rowContent.Content!) ?? throw new Exception($"Could not convert user content: {rowContent.ContentID}");


			return listUserContent.OrderBy(x => x.ContentName).ToList();
		}
		public static UserContent ? GetUserContent(string Email, string ContentName)
		{
			List<UserContent> listUserContent = GetUserContents(Email);

			return listUserContent.FirstOrDefault(x => StringUtil.EqualNoCase(x.ContentName, ContentName));
		}

		public static void InsertOrUpdateUserContent(
			string Email,
			UserContent Content)
		{
			try
			{
				List<UserContent> lstUserContents = GetUserContents(Email);

				lstUserContents = lstUserContents.Where(x => !StringUtil.EqualNoCase(x.ContentName, Content.ContentName)).ToList();
				lstUserContents.Add(Content);

				ContentsRow rowContent = Contents.GetContentByContentName(Email) ?? throw new Exception("Could not find Content: " + Email);
				rowContent.Content = JsonUtil.ToStringExt(lstUserContents).ToString();
				ContentsRepository.UpdateContent(rowContent);
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}
		}
		public static void RemoveUserContent(string Email, string ContentName)
		{
			try
			{
				List<UserContent> lstUserContents = GetUserContents(Email);

				lstUserContents.RemoveAll(x => StringUtil.EqualNoCase(x.ContentName, ContentName));

				ContentsRow rowContent = Contents.GetContentByContentName(Email) ?? throw new Exception("Could not find Content: " + Email);
				rowContent.Content = JsonUtil.ToStringExt(lstUserContents).ToString();
				ContentsRepository.UpdateContent(rowContent);
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}
		}

	
		public static int InsertOrUpdateContent(
	string ContentName,
	string Content,
	string Data)
		{
			try
			{
				ContentsRow ? rowContent = ContentsRepository.GetContentByContentName(ContentName);
				int iContentID;

				if (null == rowContent)
				{
					iContentID = ContentsRepository.InsertContent(
						ContentName,
						Content,
						Data, 
						null
					);
				}
				else
				{
					ContentsRepository.UpdateContent(rowContent.ContentID, ContentName, Content, Data, null);
					iContentID = rowContent.ContentID;
				}

				return iContentID;
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}
		}

        public static ContentsDataTable? GetContentsByContentTypeID(int? ContentTypeID)
        {
            return ContentsRepository.GetContentsByContentTypeID(ContentTypeID);
        }

    }
}    
		