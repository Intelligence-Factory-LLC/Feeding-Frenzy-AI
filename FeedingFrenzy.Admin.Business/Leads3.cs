using BasicUtilities;
using FeedingFrenzy.Admin.Business.ChatAgents;
using FeedingFrenzy.Data;
using System.Data;
using System.Reflection;
using WebAppUtilities;

namespace FeedingFrenzy.Admin.Business
{
	public partial class Leads : JsonWs
	{

		public static void MergeLeads(int SourceLeadID, int TargetLeadID, int SalesRepresentativeID)
		{
			LeadsRow rowLead = Leads.GetLead(TargetLeadID);
			LeadsRow rowDuplicate = Leads.GetLead(SourceLeadID);

			bool bUpdated = MergeValues(rowDuplicate.Company, rowLead, nameof(rowLead.Company));

			if (bUpdated)
				LeadsRepository.UpdateLead(rowLead);

			if (rowLead.FirstName != rowDuplicate.FirstName ||
				rowLead.LastName != rowDuplicate.LastName ||
				rowLead.Phone != rowDuplicate.Phone ||
				rowLead.Email != rowDuplicate.Email)
			{
				LeadContacts.InsertLeadContact(rowLead.LeadID, rowDuplicate.FirstName + " " + rowDuplicate.LastName, null,
					rowDuplicate.Phone, rowDuplicate.Email, rowDuplicate.Data);
			}

			if (rowLead.Address != rowDuplicate.Address)
			{
				LeadAddressesRow rowAddress = new LeadAddressesRow();
				rowAddress.LeadID = rowLead.LeadID;
				rowAddress.Line1 = rowDuplicate.Address;
				rowAddress.Line2 = rowDuplicate.Address2;
				rowAddress.City = rowDuplicate.City;
				rowAddress.State = rowDuplicate.State;
				rowAddress.Zip = rowDuplicate.ZipCode;
				rowAddress.Phone = rowDuplicate.Phone;

				LeadAddressesRepository.InsertLeadAddress(rowAddress);
			}

			foreach (LeadContactsRow contact in rowDuplicate.LeadContacts!)
			{
				contact.LeadID = rowLead.LeadID;
				LeadContactsRepository.InsertLeadContact(contact);
			}

			foreach (LeadNotesRow note in rowDuplicate.LeadNotes!)
			{
				note.DataObject["OriginalLeadID"] = note.LeadID;
				note.LeadID = rowLead.LeadID;
				LeadNotesRepository.UpdateLeadNote(note);
			}

			foreach (TagsRow tag in rowDuplicate.LeadTagTags!)
			{
				LeadTags.InsertOrUpdateLeadTag(rowLead.LeadID, tag.TagName);
			}

			LeadRelationships.InsertLeadRelationship(LeadRelationshipTypesEnum.Duplicate.LeadRelationshipTypeID, TargetLeadID, SourceLeadID, null);
			LeadRelationships.InsertLeadRelationship(LeadRelationshipTypesEnum.ReplacedBy.LeadRelationshipTypeID, SourceLeadID, TargetLeadID, null);

			LeadNotes.InsertLeadNote(rowLead.LeadID, SalesRepresentativeID, "Merged from lead: " + TargetLeadID, null, null, null);

			Leads.UpdateLeadStatus2(SourceLeadID, SalesRepresentativeID, "Defunct", "Duplicate");

		}

		static private bool MergeValues(string? strSource, LeadsRow rowTarget, string strColumnName)
		{
			PropertyInfo prop = typeof(LeadsRow).GetProperty(strColumnName) ?? throw new Exception("LeadsRow does not contain property: " + strColumnName);
			string? strTarget = prop.GetValue(rowTarget) as string;

			if (StringUtil.IsEmpty(strSource))
				return false;

			if (StringUtil.IsEmpty(strTarget))
			{
				prop.SetValue(rowTarget, strSource);
				return true;
			}

			if (!StringUtil.EqualNoCase(strSource, strTarget))
			{
				string strKey = strColumnName + ".Alternates";
				List<string?> lstAlternates = rowTarget.DataObject.GetJsonArrayOrDefault(strKey).ToStringList();
				if (!lstAlternates.Any(x => StringUtil.EqualNoCase(strSource, x)))
					lstAlternates.Add(strSource);
				rowTarget.DataObject[strKey] = new JsonArray(lstAlternates);
				return true;
			}

			return false;
		}

		static public int? ImportZoomInfoLead(LeadsRow rowLead, string Source, string CampaignKey, string strTagName)
		{
			int? iResult = null;

			try
			{
				rowLead.SourceID = Sources.GetOrInsertSource(Source).SourceID;
				rowLead.CampaignID = Campaigns.GetOrInsertCampaignByCampaigKey(rowLead.SourceID, CampaignKey).CampaignID;
				rowLead.GeneratedDate = DateTime.Now;
				rowLead.LeadStatusID = StatusesEnum.NotContacted.LeadStatusID;
				rowLead.FriendlyPriority = LeadsRow.Priorities.Normal;

				if (StringUtil.IsEmpty(rowLead.ImportKey))
					throw new Exception("ImportKey should be set");

				LeadsRow? rowDuplicate = LeadsRepository.GetLeadsByImportKey(rowLead.ImportKey).FirstOrDefault();

				if (null != rowDuplicate)
				{
					ImportZoomInfoLeadContact(rowDuplicate, rowLead);
					rowLead.LeadID = rowDuplicate.LeadID;
				}
				else
				{
					rowLead.LeadID = LeadsRepository.InsertLead(rowLead);
					ImportZoomInfoLeadContact(rowLead, rowLead);
				}

				foreach (string strTag in StringUtil.Split(strTagName, ","))
				{
					LeadTags.InsertOrUpdateLeadTag(rowLead.LeadID, strTag.Trim());
				}

			}
			catch (Exception err)
			{
				Logs.DebugLog.WriteEvent("Lead", JsonUtil.ToString(rowLead).ToString());
				Logs.LogError(err);
			}

			return iResult;
		}

		static public int? ImportGenericLead(LeadsRow rowLead, string Source, string CampaignKey, string strTagName)
		{
			int? iResult = null;

			try
			{
				rowLead.SourceID = Sources.GetOrInsertSource(Source).SourceID;
				if (!String.IsNullOrEmpty(CampaignKey))
					rowLead.CampaignID = Campaigns.GetOrInsertCampaignByCampaigKey(rowLead.SourceID, CampaignKey).CampaignID;
				rowLead.GeneratedDate = DateTime.Now;
				rowLead.LeadStatusID = StatusesEnum.NotContacted.LeadStatusID;
				rowLead.FriendlyPriority = LeadsRow.Priorities.Normal;

				if (!StringUtil.IsEmpty(rowLead.ImportKey))
				{
					LeadsRow? rowDuplicate = LeadsRepository.GetLeadsByImportKey(rowLead.ImportKey).FirstOrDefault();

					if (null != rowDuplicate)
						throw new NotImplementedException();
				}


				{
					List<LeadsRow> lstMatching = GetMatchingLeads(rowLead);
					LeadsRow? rowExisting = lstMatching.FirstOrDefault();

					if (null != rowExisting)
					{
						ImportGenericLeadContact(rowExisting, rowLead);
						rowLead.LeadID = rowExisting.LeadID;
					}
					else
					{
						rowLead.LeadID = LeadsRepository.InsertLead(rowLead);
					}
				}

				//insert phone number
				try
				{
					// in case is an invalid number Twilio thrown an exception, so, I put this to continue with the tags
					PhoneNumbers.GetPhoneNumberInfo(rowLead.Phone);
				}
				catch (Exception)
				{
					PhoneNumbers.InsertPhoneNumber(rowLead.Phone, "Invalid", false, null, null, null, true, false);
					Logs.DebugLog.WriteEvent("Lead", JsonUtil.ToString(rowLead).ToString());
				}


				foreach (string strTag in StringUtil.Split(strTagName, ","))
				{
					LeadTags.InsertOrUpdateLeadTag(rowLead.LeadID, strTag.Trim());
				}

				iResult = rowLead.LeadID;

			}
			catch (Exception err)
			{
				Logs.DebugLog.WriteEvent("Lead", JsonUtil.ToString(rowLead).ToString());
				Logs.LogError(err);
			}

			return iResult;
		}

		static private int ImportZoomInfoLeadContact(LeadsRow rowExisting, LeadsRow rowLead)
		{
			LeadContactsRow? rowLeadContact = rowExisting.LeadContacts.FirstOrDefault(x => !StringUtil.IsEmpty(x.ImportKey) && x.ImportKey == rowLead.DataObject.GetStringOrNull("ContactImportKey"));

			if (null == rowLeadContact)
			{
				rowLeadContact = new LeadContactsRow();
				rowLeadContact.LeadID = rowExisting.LeadID;
			}

			rowLeadContact.Name = rowLead.FirstName + " " + rowLead.LastName;

			string? strPhone = rowLead.DataObject.GetStringOrNull("ContactDirectPhone");
			if (StringUtil.InString(strPhone, "ext"))
			{
				rowLeadContact.PhoneExtension = StringUtil.Clean(StringUtil.RightOfLast(strPhone!, "ext"), "0123456789");
				strPhone = StringUtil.LeftOfLast(strPhone!, "ext");
			}

			rowLeadContact.Phone = strPhone;
			rowLeadContact.Email = rowLead.Email;
			rowLeadContact.Department = rowLead.DataObject.GetStringOrNull("Department");
			rowLeadContact.LinkedInUrl = rowLead.DataObject.GetStringOrNull("ContactLinkedInUrl");
			rowLeadContact.MobilePhone = rowLead.DataObject.GetStringOrNull("ContactMobilePhone");
			rowLeadContact.ExternalLink = rowLead.DataObject.GetStringOrNull("ContactExternalLink");
			rowLeadContact.ImportKey = rowLead.DataObject.GetStringOrNull("ContactImportKey");

			if (0 == rowLeadContact.LeadContactID)
				rowLeadContact.LeadContactID = LeadContactsRepository.InsertLeadContact(rowLeadContact);
			else
				LeadContactsRepository.UpdateLeadContact(rowLeadContact);

			return rowLeadContact.LeadContactID;
		}

		static private int ImportGenericLeadContact(LeadsRow rowExisting, LeadsRow rowLead)
		{
			LeadContactsRow? rowLeadContact = rowExisting.LeadContacts.FirstOrDefault(x =>
				StringUtil.InString(x.Name, rowLead.FirstName) && StringUtil.InString(x.Name, rowLead.LastName));

			if (null == rowLeadContact)
			{
				rowLeadContact = new LeadContactsRow();
				rowLeadContact.LeadID = rowExisting.LeadID;
			}

			rowLeadContact.Name = rowLead.FirstName + " " + rowLead.LastName;

			string? strPhone = rowLead.DataObject.GetStringOrNull("ContactDirectPhone");
			if (StringUtil.InString(strPhone, "ext"))
			{
				rowLeadContact.PhoneExtension = StringUtil.Clean(StringUtil.RightOfLast(strPhone!, "ext"), "0123456789");
				strPhone = StringUtil.LeftOfLast(strPhone!, "ext");
			}

			rowLeadContact.Phone = strPhone;
			rowLeadContact.Email = rowLead.Email;
			rowLeadContact.Department = rowLead.DataObject.GetStringOrNull("Department");
			rowLeadContact.LinkedInUrl = rowLead.DataObject.GetStringOrNull("ContactLinkedInUrl");
			rowLeadContact.MobilePhone = rowLead.DataObject.GetStringOrNull("ContactMobilePhone");
			rowLeadContact.ExternalLink = rowLead.DataObject.GetStringOrNull("ContactExternalLink");
			rowLeadContact.ImportKey = rowLead.DataObject.GetStringOrNull("ContactImportKey");

			if (0 == rowLeadContact.LeadContactID)
				rowLeadContact.LeadContactID = LeadContactsRepository.InsertLeadContact(rowLeadContact);
			else
				LeadContactsRepository.UpdateLeadContact(rowLeadContact);

			return rowLeadContact.LeadContactID;
		}

		public class LeadSearch
		{
			public string? State = null;
			public int? SourceID = null;
			public int? StatusID = null;
			public string? Speciality = null;
			public string? City = null;
			public string? Zip = null;

			public int? TagID = null;
			public int? NegativeTagID = null;
			public bool MatchesSearch(LeadsRow rowLead)
			{
				if (null != this.SourceID && rowLead.SourceID != this.SourceID)
					return false;

				if (null != this.StatusID && rowLead.LeadStatusID != this.StatusID)
					return false;

				if (!StringUtil.IsEmpty(this.State) && !StringUtil.EqualNoCase(rowLead.State, this.State))
					return false;

				if (!StringUtil.IsEmpty(this.City) && !StringUtil.InString(rowLead.City, City))
					return false;

				if (!StringUtil.IsEmpty(this.Zip) && !StringUtil.InString(rowLead.ZipCode, Zip))
					return false;

				return true;
			}
			public bool MatchesSearch2(LeadsRow rowLead)
			{
				if (null != this.TagID && !rowLead.LeadTags.Any(x => x.TagID == this.TagID))
					return false;

				if (null != this.NegativeTagID && rowLead.LeadTags.Any(x => x.TagID == this.NegativeTagID))
					return false;

				return true;
			}
		}

		//static public string ExportLeadView(string ExportName, string JSON)
		//{
		//	JsonArray jsonArray = new JsonArray(JSON);

		//	GoogleSheet sheet = GoogleSheet.CreateEmptySheetAndShare(ExportName);
		//	GoogleSheetTab tab = sheet.Tabs("Sheet1");

		//	List<IList<object>> tableData = new List<IList<object>>();

		//	foreach (JsonValue value in jsonArray)
		//	{
		//		tableData.Add(value.ToJsonArray().ToStringList().Select(x => x as object).ToList());
		//	}

		//	tab.AppendData(tableData);

		//	return sheet.SheetID;
		//}

		static public List<LeadsRow> GetMatchingLeads(LeadsRow rowLead)
		{
			rowLead.Phone = StringUtil.Clean(rowLead.Phone, "0123456789");

			LeadsDataTable dtLeads = LeadsRepository.GetDuplicate(rowLead.Company, rowLead.FirstName, rowLead.LastName, rowLead.Phone, rowLead.Email, rowLead.Address);

			foreach (LeadsRow row in dtLeads)
			{
				double dMatch = 0.0;

				if (!StringUtil.IsEmpty(rowLead.Phone) && rowLead.Phone == row.Phone)
					dMatch = 2;

				if (!StringUtil.IsEmpty(rowLead.Email) && rowLead.Email == row.Email)
					dMatch += 2;

				if (!StringUtil.IsEmpty(rowLead.FirstName))
				{
					if (StringUtil.EqualNoCase(row.FirstName, rowLead.FirstName))
						dMatch += 1;

					else if (StringUtil.IsEmpty(row.FirstName))
						dMatch -= 0.5;

					else if (row.FirstName.StartsWith(rowLead.FirstName, StringComparison.InvariantCultureIgnoreCase))
						dMatch += 0.5;

					else if (rowLead.FirstName.StartsWith(row.FirstName, StringComparison.InvariantCultureIgnoreCase))
						dMatch += 0.5;

					else
						dMatch -= 0.5;
				}

				if (!StringUtil.IsEmpty(rowLead.LastName))
				{
					if (StringUtil.EqualNoCase(row.LastName, rowLead.LastName))
						dMatch += 1;

					else if (StringUtil.IsEmpty(row.LastName))
						dMatch -= 0.5;

					else if (row.LastName.StartsWith(rowLead.LastName, StringComparison.InvariantCultureIgnoreCase))
						dMatch += 0.5;

					else if (rowLead.LastName.StartsWith(row.LastName, StringComparison.InvariantCultureIgnoreCase))
						dMatch += 0.5;

					else
						dMatch -= 0.5;
				}

				if (!StringUtil.IsEmpty(rowLead.Address))
				{
					if (StringUtil.EqualNoCase(row.Address, rowLead.Address))
						dMatch += 1;

					else if (StringUtil.IsEmpty(row.Address))
						dMatch -= 0.5;

					else if (row.Address.StartsWith(rowLead.Address, StringComparison.InvariantCultureIgnoreCase))
						dMatch += 0.5;

					else if (rowLead.Address.StartsWith(row.Address, StringComparison.InvariantCultureIgnoreCase))
						dMatch += 0.5;

					else
						dMatch -= 0.5;
				}

				if (!StringUtil.IsEmpty(rowLead.City))
				{
					if (StringUtil.EqualNoCase(row.City, rowLead.City))
						dMatch += 0.25;

					else if (!StringUtil.IsEmpty(row.City))
						dMatch -= 0.25;
				}

				if (!StringUtil.IsEmpty(rowLead.State))
				{
					if (StringUtil.EqualNoCase(row.State, rowLead.State))
						dMatch += 0.25;
				}

				if (!StringUtil.IsEmpty(rowLead.ZipCode))
				{
					if (StringUtil.EqualNoCase(row.ZipCode, rowLead.ZipCode))
						dMatch += 0.25;

					else if (!StringUtil.IsEmpty(row.ZipCode))
						dMatch -= 0.25;
				}


				if (0 != rowLead.LeadStatusID)
				{
					if (row.LeadStatusID == rowLead.LeadStatusID)
						dMatch += 0.5;
					else
						dMatch -= 0.25;
				}

				foreach (var pair in rowLead.DataObject)
				{
					if (row.DataObject.ContainsKey(pair.Key))
					{
						if (row.DataObject[pair.Key] == pair.Value)
							dMatch += 0.5;
						else
							dMatch -= 0.25;
					}
				}

				row.DataObject["Match"] = dMatch;
			}

			//Requires 2 or more matches to be considered a duplicate
			return dtLeads.OrderByDescending(x => x.DataObject.GetDoubleOrDefault("Match", 0.0)).Where(x => x.DataObject.GetDoubleOrDefault("Match", 0.0) >= 2).ToList();
		}

		static public void InsertEmailDomain(int LeadID, string Domain)
		{
			LeadsRow rowLead = Leads.GetLead(LeadID);

			if (StringUtil.IsEmpty(rowLead.Website))
				rowLead.Website = Domain;

			JsonArray jsonValues = rowLead.DataObject.GetJsonArrayOrDefault("EmailDomains");
			jsonValues.Add(new JsonValue(Domain, false));
			rowLead.DataObject["EmailDomains"] = jsonValues;

			LeadsRepository.UpdateLeadData(LeadID, rowLead.Data);
		}

		public static int Leads_GetUnassigned_Sp_CountSp(int SalesRepresentativeID, string Search)
		{
			SalesRepresentativesRow rowSalesRepresentative = SalesRepresentativesRepository.Get(SalesRepresentativeID);

			if (rowSalesRepresentative.SalesRepresentativeTypeID == SalesRepresentativeTypesEnum.SalesManager.SalesRepresentativeTypeID)
			{
				return LeadsRepository.Leads_GetUnassigned_Sp_CountSp(Search) ?? 0;
			}

			int iCount = LeadsRepository.Leads_GetUnassigned2_Sp_CountSp(Search, rowSalesRepresentative.Weight) ?? 0;

			if (iCount < 20)
				iCount = Leads_GetUnassigned_Sp_PagingSp(SalesRepresentativeID, Search, "", true, 0, 20).Count;

			return iCount;
		}
		public static List<LeadsRow> Leads_GetUnassigned_Sp_PagingSp(int SalesRepresentativeID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			SalesRepresentativesRow rowSalesRepresentative = SalesRepresentativesRepository.Get(SalesRepresentativeID);

			if (rowSalesRepresentative.SalesRepresentativeTypeID == SalesRepresentativeTypesEnum.SalesManager.SalesRepresentativeTypeID)
			{
				return LeadsRepository.Leads_GetUnassigned_Sp_PagingSp(Search, SortColumn, SortAscending, SkipRows, NumRows);
			}

			LeadsDataTable dtLeads = LeadsRepository.Leads_GetUnassigned2_Sp_PagingSp(Search, SortColumn, SortAscending, SkipRows, NumRows, rowSalesRepresentative.Weight);

			List<LeadsRow> lstLeads = new List<LeadsRow>();

			foreach (LeadsRow rowLead in dtLeads)
			{
				if (Leads.CanClaimLead(rowLead, rowSalesRepresentative))
				{
					lstLeads.Add(rowLead);
				}
			}

			return lstLeads;
		}


		static public string SendObjectToBuffaly(int LeadID)
		{
			LeadsRow rowLead = Leads.GetLead(LeadID);
			string strPrototypeName = FeedingFrenzyAgent.InsertObject(nameof(LeadsRow), rowLead.LeadID);
			rowLead.DataObject["PrototypeName"] = strPrototypeName;
			LeadsRepository.UpdateLeadData(rowLead);
			
			if (!StringUtil.IsEmpty(rowLead.Company))
				FeedingFrenzyAgent.InsertEntity(rowLead.Company!, "LeadsRow.Company", strPrototypeName);

			if (!StringUtil.IsEmpty(rowLead.FirstName))
				FeedingFrenzyAgent.InsertEntity(rowLead.FirstName! + " " + rowLead.LastName, "LeadsRow.Name", strPrototypeName);

			LeadNotesDataTable lstNotes = LeadNotesRepository.GetLeadNotesByLeadIDLeadNoteTypeID(LeadID, LeadNoteTypesEnum.GoogleDocFile.LeadNoteTypeID);

			foreach (LeadNotesRow rowNote in lstNotes)
			{
				LeadNotes.SendGoogleDocumentToBuffaly(rowNote);
			}


			return strPrototypeName;
		}
	}
}

