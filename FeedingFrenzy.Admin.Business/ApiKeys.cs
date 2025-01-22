using FeedingFrenzy.Admin.Business.API;

using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;
using System.Linq;
using Microsoft.AspNetCore.Http;

namespace FeedingFrenzy.Admin.Business
{

	public partial class ApiKeys : JsonWs
	{
		private static IHttpContextAccessor _httpContextAccessor;

		public ApiKeys(IHttpContextAccessor httpContextAccessor)
		{
			_httpContextAccessor = httpContextAccessor;
		}


		public static AuthorizationsRow InsertApiKey(string KeyName)
		{
			UserState userState = new UserState(_httpContextAccessor.HttpContext);

			if (AuthorizationsRepository.GetAuthorizationsByUserID(userState.UserID).Any(x => x.KeyName == KeyName))
				throw new JsonWsException("Key already exists");


			AuthorizationsDataTable keys = AuthorizationsRepository.GetAuthorizationsByUserID(userState.UserID);

			AuthorizationsRow rowAuthorization = new AuthorizationsRow();
			rowAuthorization.UserID = userState.UserID;
			rowAuthorization.IsApiKey = true;
			rowAuthorization.KeyName = KeyName;
			rowAuthorization.AuthorizationToken = Guid.NewGuid().ToString();
			rowAuthorization.RefreshToken = Guid.NewGuid().ToString();
			rowAuthorization.Expiration = DateTime.Now.AddYears(1);
			AuthorizationsRepository.InsertAuthorization(rowAuthorization);

			return rowAuthorization;
		}

	}


}   
		