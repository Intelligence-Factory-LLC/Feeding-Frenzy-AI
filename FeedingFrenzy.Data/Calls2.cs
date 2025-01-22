
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class CallsRow : RooTrax.Common.DB.BasicRow
	{
		public string ? ExternalKey
		{
			get
			{
				return this.DataObject.GetStringOrNull(nameof(ExternalKey));
			}
			set
			{
				this.DataObject[nameof(ExternalKey)] = value;
			}
		}

		public string ? ParentExternalKey
		{
			get
			{
				return this.DataObject.GetStringOrNull(nameof(ParentExternalKey));
			}
			set
			{
				this.DataObject[nameof(ParentExternalKey)] = value;
			}
		}
		
		
		public int ? LeadNoteID
		{
			get
			{
				return this.DataObject.GetIntOrNull(nameof(LeadNoteID));
			}
			set
			{
				this.DataObject[nameof(LeadNoteID)] = value;
			}

		}
		
		
	}	
}	

		