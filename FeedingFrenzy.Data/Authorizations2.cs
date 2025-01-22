
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common.DB;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class AuthorizationsRow : RooTrax.Common.DB.BasicRow
	{
		public bool IsApiKey
		{
			get
			{
				return this.DataObject.GetBooleanOrFalse(nameof(IsApiKey));
			}
			set
			{
				this.DataObject[nameof(IsApiKey)] = value;
			}
		}
		
		public string ? KeyName
		{
			get
			{
				return this.DataObject.GetStringOrNull(nameof(KeyName));
			}
			set
			{
				this.DataObject[nameof(KeyName)] = value;
			}
		}
		
		public string Last4
		{
			get
			{
				return this.AuthorizationToken.Substring(this.AuthorizationToken.Length - 4);
			}
		}
		
	}


}	

		