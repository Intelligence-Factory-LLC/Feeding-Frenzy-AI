using BasicUtilities;
using ClosedXML.Excel;
using FeedingFrenzy.Data;
using FeedingFrenzy.TwilioAPI;
using FeedingFrenzy.WhatsApp;
using System.Data;
using WebAppUtilities;

namespace FeedingFrenzy.Admin.Business
{
	public partial class Leads : JsonWs
	{
		public static int? AutomationRepresentative
		{
			get
			{
				return BasicUtilities.Settings.GetIntOrDefault("Leads.AutomationSalesRep", null);
			}
		}

		public static LeadsDataTable GetLeadsByEmail(string Email)
		{
			if (Email.Contains("<"))
			{
				Email = StringUtil.Between(Email, "<", ">");
			}

			return LeadsRepository.GetLeadsByEmail(Email);
		}

		public static LeadsDataTable GetLeadsByPhone(string Phone)
		{
			if (StringUtil.IsEmpty(Phone))
				return new LeadsDataTable();

			return LeadsRepository.GetLeadsByPhone(Phone);
		}

		public static SalesRepresentativesRow? GetSalesRepresentativeByLeadByPhone(string Phone)
		{
			SalesRepresentativesRow? rowSalesRepresentative = null;
			LeadsDataTable dtLeads = Leads.GetLeadsByPhone(Phone);
			LeadsRow? rowLead = dtLeads.Where(x => x.SalesRepresentativeID != null).OrderByDescending(x => x.LeadID).FirstOrDefault();
			if (null != rowLead && null != rowLead.SalesRepresentativeID)
			{
				rowSalesRepresentative = SalesRepresentativesRepository.Get(rowLead.SalesRepresentativeID.Value);

				LeadNotes.InsertLeadNote(rowLead.LeadID, rowSalesRepresentative?.SalesRepresentativeID ?? 7, "Lead called in", null, null, LeadNoteTypesEnum.PhoneCallIn.LeadNoteTypeID);
			}

			return rowSalesRepresentative;
		}

		static public void ClaimLead(int LeadID, int SalesRepresentativeID)
		{
			SalesRepresentativesRow rowSalesRepresentative = SalesRepresentatives.GetSalesRepresentative(SalesRepresentativeID);

			//LeadsDataTable dtLeads = LeadsRepository.GetLeadsByStatusIDSalesRepresentativeIDSp_PagingSp(StatusesEnum.NotContacted.LeadStatusID, SalesRepresentativeID, "", "LeadID", false, 0, 10);

			LeadsRow rowLead = Leads.GetLead(LeadID);

			if (rowLead.SalesRepresentativeID != null && rowLead.SalesRepresentativeID != SalesRepresentativeID)
			{
				if (rowLead.SalesRepresentativeID != AutomationRepresentative)
					throw new JsonWsException("This lead is already claimed");
			}

			//if (SalesRepresentativeID != AutomationRepresentative && dtLeads.Count > 0)
			//	throw new JsonWsException("You have uncontacted leads. Cannot claim a new one");

			if (!CanClaimLead(LeadID, SalesRepresentativeID))
				throw new JsonWsException("You cannot claim this type of lead");

			rowLead.SalesRepresentativeID = SalesRepresentativeID;
			rowLead.DataObject["ClaimExpires"] = DateTime.Now.AddHours(2);

			LeadsRepository.UpdateLead(rowLead);

			//Check for double claim
			rowLead = Leads.GetLead(rowLead.LeadID)!;
			if (rowLead.SalesRepresentativeID != SalesRepresentativeID)
				throw new JsonWsException("This lead is already claimed");

			rowSalesRepresentative.LastClaimedLead = DateTime.Now;
			SalesRepresentativesRepository.UpdateSalesRepresentativeData(rowSalesRepresentative);
		}


		static public bool CanClaimLead(int LeadID, int SalesRepresentativeID)
		{
			SalesRepresentativesRow rowSalesRepresentative = SalesRepresentatives.GetSalesRepresentative(SalesRepresentativeID);
			LeadsRow rowLead = Leads.GetLead(LeadID);

			return CanClaimLead(rowLead, rowSalesRepresentative);
		}

		static internal bool CanClaimLead(LeadsRow rowLead, SalesRepresentativesRow rowSalesRepresentative)
		{
			//if (StringUtil.EqualNoCase(rowLead.LeadType, "RPM") && !rowSalesRepresentative.AllowRPMLeads)
			//	return false;

			//if (StringUtil.EqualNoCase(rowLead.LeadType, "TestKit") && !rowSalesRepresentative.AllowTestKitLeads)
			//	return false;

			//if (null != rowLead.Campaign && StringUtil.InString(rowLead.Campaign.CampaignName, "PCR") && !rowSalesRepresentative.AllowPCRLeads)
			//	return false;

			return true;
		}

		static public string ExportLeads(int SalesRepresentativeID, int StatusID)
		{
			SalesRepresentativesRow rowSalesRepresentative = SalesRepresentatives.GetSalesRepresentative(SalesRepresentativeID);
			DataTable dt = LeadsRepository.GetLeadsByStatusIDSalesRepresentativeIDSp_PagingSp2(StatusID, SalesRepresentativeID, "", "LeadID", true, 0, 10000);
			dt.Columns.Add(new DataColumn("Notes"));

			return StringUtil.RightOfLast(SaveDataTableToExcel(dt, rowSalesRepresentative.Name + " Lead Export"), "\\");
		}

		static public string ExportLeads2(int SalesRepresentativeID, int StatusID, int TagID)
		{
			SalesRepresentativesRow rowSalesRepresentative = SalesRepresentatives.GetSalesRepresentative(SalesRepresentativeID);
			DataTable dt = LeadsRepository.GetLeadsByTagIDStatusIDSalesRepresentativeIDSp_PagingSp2(TagID, StatusID, SalesRepresentativeID, "", "LeadID", true, 0, 10000);
			dt.Columns.Add(new DataColumn("Notes"));

			return StringUtil.RightOfLast(SaveDataTableToExcel(dt, rowSalesRepresentative.Name + " Lead Export"), "\\");
		}
		static internal string SaveDataTableToExcel(DataTable dtReport, string strReportName)
		{
			XLWorkbook workbook = new XLWorkbook();
			workbook.Worksheets.Add("Export").Cell(1, 1).InsertTable(dtReport);
			return SaveFile(workbook, strReportName);
		}
		static internal string SaveFile(XLWorkbook workbook, string strReportName)
		{
			string strName = string.Format("{0}-{1}.xlsx", strReportName, DateTime.Now.ToString("hhmmss"));
			strName = strName.Replace(" ", "");

			string rootFolderPath = $"{Directory.GetCurrentDirectory()}\\wwwroot\\reports";

			if (!Directory.Exists(rootFolderPath))
			{
				Directory.CreateDirectory(rootFolderPath);
			}

			string strReportPath = BasicUtilities.Settings.GetStringOrDefault("ReportsPath222", rootFolderPath)!;
			//strReportPath = DirectoryUtil.GetDirectoryAsString(strReportPath, iOrganizationID.ToString());
			string strFullName = Path.Combine(strReportPath, strName);
			workbook.SaveAs(strFullName);
			return strFullName;
		}

		static internal void UpdateLeadStatusSimple(int LeadID, string StatusName, string SubStatus)
		{
			//Update the lead status without any notes, or follow up logic
			LeadsRow rowLead = Leads.GetLead(LeadID);
			LeadStatusesRow rowStatus = LeadStatuses.GetLeadStatusByStatusName(StatusName);

			LeadSubStatusesRow? rowSubStatus = null;
			if (!StringUtil.IsEmpty(SubStatus))
			{
				rowSubStatus = LeadSubStatuses.GetLeadSubStatusBySubStatusName(SubStatus);

				if (rowSubStatus.LeadStatusID != rowStatus.LeadStatusID)
					throw new Exception("Mismatched sub-status / status");
			}

			rowLead.LeadStatusID = rowStatus.LeadStatusID;
			rowLead.LeadSubStatusID = null == rowSubStatus ? null : (int?)rowSubStatus.LeadSubStatusID;

			if (rowStatus.LeadStatusID == StatusesEnum.Defunct.LeadStatusID || rowStatus.LeadStatusID == StatusesEnum.Lost.LeadStatusID)
			{
				rowLead.Priority = 4;
				LeadTags.RemoveLeadTag2(LeadID, "Follow Up");
			}

			LeadsRepository.UpdateLead(rowLead);
		}

		static public int UpdateLeadStatus(int LeadID, int SalesRepresentativeID, string StatusName, string SubStatus, string? LeadNoteTypeName)
		{
			//This method is for quick actions and will set a follow up date
			LeadsRow rowLead = Leads.GetLead(LeadID);
			LeadStatusesRow rowStatus = LeadStatuses.GetLeadStatusByStatusName(StatusName);

			DateTime? dtFollowUp = null;
			string strNotes = StatusName + " - " + SubStatus;
			if (StringUtil.EqualNoCase(SubStatus, "No Answer"))
			{
				SubStatus = "Called";
			}

			if (StringUtil.EqualNoCase(SubStatus, "Left Voice Mail"))
			{
				SubStatus = "Called";
			}

			LeadSubStatusesRow? rowSubStatus = null;
			if (!StringUtil.IsEmpty(SubStatus))
			{
				rowSubStatus = LeadSubStatuses.GetLeadSubStatusBySubStatusName(SubStatus);

				if (rowSubStatus.LeadStatusID != rowStatus.LeadStatusID)
					throw new Exception("Mismatched sub-status / status");
			}

			if (rowStatus.LeadStatusID == StatusesEnum.Contacted.LeadStatusID)
			{
				dtFollowUp = DateTime.Now.AddDays(1).Date;
				if (dtFollowUp.Value.Date.DayOfWeek == DayOfWeek.Saturday)
					dtFollowUp = dtFollowUp.Value.AddDays(2);
				else if (dtFollowUp.Value.Date.DayOfWeek == DayOfWeek.Sunday)
					dtFollowUp = dtFollowUp.Value.AddDays(1);
			}

			//Only change the status if we haven't reached the InThePipeline or Sold statuses
			if (rowLead.LeadStatusID != StatusesEnum.InthePipeline.LeadStatusID && rowLead.LeadStatusID != StatusesEnum.Sold.LeadStatusID)
			{
				rowLead.LeadStatusID = rowStatus.LeadStatusID;
				rowLead.LeadSubStatusID = null == rowSubStatus ? null : (int?)rowSubStatus.LeadSubStatusID;
			}

			if (rowStatus.LeadStatusID == StatusesEnum.Contacted.LeadStatusID)
			{
				rowLead.LastContactedDate = DateTime.Now;
			}

			if (rowStatus.LeadStatusID == StatusesEnum.Defunct.LeadStatusID || rowStatus.LeadStatusID == StatusesEnum.Lost.LeadStatusID)
			{
				rowLead.Priority = 4;
				LeadTags.RemoveLeadTag2(LeadID, "Follow Up");
			}

			LeadsRepository.UpdateLead(rowLead);

			if (dtFollowUp != null && dtFollowUp.Value > DateTime.Now)
			{
				LeadTags.RemoveLeadTag2(LeadID, "Follow Up");
			}

			LeadNoteTypesRow? rowLeadNoteType = null;
			if (!StringUtil.IsEmpty(LeadNoteTypeName))
				rowLeadNoteType = LeadNoteTypesRepository.GetLeadNoteTypeByLeadNoteTypeName(LeadNoteTypeName!);

			return LeadNotes.InsertLeadNote(LeadID, SalesRepresentativeID, strNotes, dtFollowUp, null, rowLeadNoteType?.LeadNoteTypeID);
		}

		static public void UpdateLeadStatus2(int LeadID, int SalesRepresentativeID, string StatusName, string SubStatus)
		{
			LeadsRow rowLead = Leads.GetLead(LeadID);
			LeadStatusesRow rowStatus = LeadStatuses.GetLeadStatusByStatusName(StatusName);

			DateTime? dtFollowUp = null;
			string strNotes = StatusName + " - " + SubStatus;
			if (StringUtil.EqualNoCase(SubStatus, "No Answer"))
			{
				dtFollowUp = DateTime.Now.AddDays(1).Date;
				SubStatus = "Called";
			}

			if (StringUtil.EqualNoCase(SubStatus, "Left Voice Mail"))
			{
				dtFollowUp = DateTime.Now.AddDays(1).Date;
				SubStatus = "Called";
			}

			LeadSubStatusesRow? rowSubStatus = null;
			if (!StringUtil.IsEmpty(SubStatus))
			{
				rowSubStatus = LeadSubStatuses.GetLeadSubStatusBySubStatusName(SubStatus);

				if (rowSubStatus.LeadStatusID != rowStatus.LeadStatusID)
					throw new Exception("Mismatched sub-status / status");
			}


			rowLead.LeadStatusID = rowStatus.LeadStatusID;
			rowLead.LeadSubStatusID = null == rowSubStatus ? null : (int?)rowSubStatus.LeadSubStatusID;

			if (rowStatus.LeadStatusID == StatusesEnum.Contacted.LeadStatusID)
			{
				rowLead.LastContactedDate = DateTime.Now;
			}

			if (rowStatus.LeadStatusID == StatusesEnum.Defunct.LeadStatusID || rowStatus.LeadStatusID == StatusesEnum.Lost.LeadStatusID)
			{
				rowLead.Priority = 4;
				LeadTags.RemoveLeadTag2(LeadID, "Follow Up");
			}

			LeadsRepository.UpdateLead(rowLead);

			if (dtFollowUp != null && dtFollowUp.Value > DateTime.Now)
			{
				LeadTags.RemoveLeadTag2(LeadID, "Follow Up");
			}

			LeadNotes.InsertLeadNote(LeadID, SalesRepresentativeID, strNotes, dtFollowUp, null, null);
		}
		public static void UpdatePriority(int LeadID, int Priority)
		{
			LeadsRow rowLead = Leads.GetLead(LeadID);
			rowLead.Priority = Priority;
			LeadsRepository.UpdateLead(rowLead);
		}
		public static void UpdateOpportunitySize(int LeadID, int OpportunitySize)
		{
			LeadsRow rowLead = Leads.GetLead(LeadID);
			rowLead.OpportunitySize = OpportunitySize;
			LeadsRepository.UpdateLead(rowLead);
		}

		public static int? GetNextLead(int SalesRepresentativeID)
		{
			List<LeadNotesRow> dtLeadNotes = LeadNotes.GetFollowUps(SalesRepresentativeID);
			LeadNotesRow? rowLeadNote = dtLeadNotes.FirstOrDefault(x => x.FollowUpDate < DateTime.Now);
			if (null != rowLeadNote)
				return rowLeadNote.LeadID;

			LeadsDataTable dtLeads = LeadsRepository.GetLeadsBySalesRepresentativeID(SalesRepresentativeID);

			foreach (LeadsRow rowLead in dtLeads)
			{
				if (rowLead.LeadStatusID == StatusesEnum.NotContacted.LeadStatusID)
					return rowLead.LeadID;
			}

			return null;
		}

		public static int? GetNextLeadByTag(int SalesRepresentativeID, string TagName)
		{
			{
				TagsRow rowFollowUp = Tags.GetTagByTagName("Follow Up") ?? throw new Exception("Follow Up tag not configured");

				LeadsDataTable dtLeads = LeadsRepository.GetLeadsByTagIDSalesRepresentativeID(rowFollowUp.TagID, SalesRepresentativeID);
				TagsRow rowTag = TagsRepository.GetTagByTagName(TagName) ?? throw new Exception("Tag not found: " + TagName);


				//Not Contacted
				{
					LeadsRow? rowLead = dtLeads.Where(x => x.LeadStatusID == StatusesEnum.NotContacted.LeadStatusID).OrderByDescending(x => x.OpportunitySize ?? 0).FirstOrDefault(x => x.LeadTags.Any(y => y.TagID == rowTag.TagID));
					if (null != rowLead)
						return rowLead.LeadID;
				}

				//In the pipeline
				{
					LeadsRow? rowLead = dtLeads.Where(x => x.LeadStatusID == StatusesEnum.InthePipeline.LeadStatusID).OrderByDescending(x => x.OpportunitySize ?? 0).FirstOrDefault(x => x.LeadTags.Any(y => y.TagID == rowTag.TagID));
					if (null != rowLead)
						return rowLead.LeadID;
				}

				//Contacted
				{
					LeadsRow? rowLead = dtLeads.Where(x => x.LeadStatusID == StatusesEnum.Contacted.LeadStatusID).OrderByDescending(x => x.OpportunitySize ?? 0).FirstOrDefault(x => x.LeadTags.Any(y => y.TagID == rowTag.TagID));
					if (null != rowLead)
						return rowLead.LeadID;
				}
			}


			{
				LeadsDataTable dtLeads = LeadsRepository.GetLeadsBySalesRepresentativeID(SalesRepresentativeID);

				foreach (LeadsRow rowLead in dtLeads)
				{
					if (rowLead.LeadStatusID == StatusesEnum.NotContacted.LeadStatusID)
						return rowLead.LeadID;
				}
			}

			return null;
		}




		/*
				public static int InsertLead(
			 int? LeadSubStatusID,
			 string Company,
			 string FirstName,
			 string LastName,
			 string Title,
			 string Function,
			 string Phone,
			 string Email,
			 string Address,
			 string Address2,
			 string City,
			 string State,
			 string ZipCode,
			 int SourceID,
			 string CampainKey,
			 DateTime? LastContactedDate,
			 int Priority,
			 int StatusID,
			 int? OpportunitySize,
			 string Data,
			 int? SalesRepresentativeID,
			 string ImportKey,
			 DateTime? GeneratedDate,
			 int? CampaignID)
				{
					try
					{
						if (null == GeneratedDate)
							GeneratedDate = DateTime.Now;

						bool bDuplicate = false;
						LeadsDataTable dtLeads = LeadsRepository.Lead_GetDuplicate_Sp(Company, FirstName, LastName, Phone, Email, Address);

						if (dtLeads.Count > 0)
							bDuplicate = true; 

						int iLeadID = LeadsRepository.InsertLead(
							LeadSubStatusID, 
							null,
							Company,
							FirstName,
							LastName,
							Title,
							Function,
							Phone,
							Email,
							Address,
							Address2,
							City,
							State,
							ZipCode,
							SourceID,
							CampainKey,
							LastContactedDate,
							Priority,
							StatusID,
							OpportunitySize,
							Data,
							SalesRepresentativeID,
							ImportKey,
							GeneratedDate,
							CampaignID
						);

						LeadsRow rowLead = LeadsRepository.Get(iLeadID);
						if (!StringUtil.IsEmpty(rowLead.LeadType))
							LeadTags.InsertOrUpdateLeadTag(iLeadID, rowLead.LeadType);

						if (bDuplicate)
						{
							EmailTemplates.SendEmailTemplateByName("Duplicate Lead Inserted", new { LeadID = iLeadID }, "mfurnari@medekhealth.com");

							foreach (LeadsRow rowLead2 in dtLeads)
							{
								LeadNotes.InsertLeadNote(iLeadID, 7, $"Potential duplicate of <a href='/lead?LeadID={rowLead2.LeadID}'>{rowLead2.LeadID}</a>", null, null, null);
							}
						}

						return iLeadID;
					}
					catch (RooTrax.Common.DB.InsertFailedException err)
					{
						throw new JsonWsException(err.Message, err);
					}
				}
		*/
		/*
		public static int InsertLead2(

string Company,
string FirstName,
string LastName,
string Phone,
string Email,
string SourceName,
string CampainName,
int? SalesRepresentativeID,
DateTime? GeneratedDate,
string StatusName,
string SubStatusName,
string Data
)
		{
			try
			{
				if (null == GeneratedDate)
					GeneratedDate = DateTime.Now;

				int iSourceID = Sources.GetOrInsertSource(SourceName).SourceID;
				int iCampaignID = Campaigns.GetOrInsertCampaignByCampaigKey(iSourceID, CampainName).CampaignID;

				int iLeadID = LeadsRepository.InsertLead(
					null == SubStatusName ? null : (int?) SubStatusesRepository.GetSubStatusBySubStatusName(SubStatusName).LeadSubStatusID,
					null,
					Company,
					FirstName,
					LastName,
					null,
					null,
					Phone,
					Email,
					null,
					null,
					null,
					null,
					null,
					iSourceID,
					null,
					null,
					2,
					LeadStatusesRepository.GetStatusByStatusName(StatusName).LeadStatusID,
					null,
					Data,
					SalesRepresentativeID,
					null,
					GeneratedDate,
					iCampaignID
				);

				return iLeadID;
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}
		}*/


		static public void SendFeedingFrenzy(int LeadID)
		{
			try
			{
				LeadsRow rowLead = Leads.GetLead(LeadID);

				List<SalesRepresentativesRow> dtSalesRepresentatives = SalesRepresentatives.GetEnabledSalesRepresentatives();

				for (int iWeight = 0; iWeight < 10; iWeight++)
				{
					Logs.DebugLog.WriteEvent("Feeding Frenzy Weight", iWeight.ToString());

					foreach (SalesRepresentativesRow rowSalesRepresentative in dtSalesRepresentatives)
					{
						int iSalesWeight = rowSalesRepresentative.DataObject.GetIntOrDefault("Weight", 0)!.Value;
						if (iSalesWeight != iWeight)
							continue;

						CampaignsRow? rowCampaign = null == rowLead.CampaignID ? null : CampaignsRepository.Get(rowLead.CampaignID.Value);

						bool bWhale = false;
						bool bAlerted = false;

						if (!bAlerted)
							continue;

						if (rowSalesRepresentative.IsAlertedByEmail)
						{
							EmailTemplates.SendEmailTemplateByName("Sales - Feeding Frenzy - New Lead", new { LeadID = LeadID, oLead = JsonUtil.ToString(rowLead, 0).ToString(), CampaignName = rowCampaign?.CampaignName }, rowSalesRepresentative.Email);
						}

						if (rowSalesRepresentative.IsAlertedBySMS && !StringUtil.IsEmpty(rowSalesRepresentative.Phone))
						{
							EmailTemplates.SendSMSTemplateByName("Sales - Feeding Frenzy - New Lead - SMS", new { LeadID = LeadID, oLead = JsonUtil.ToString(rowLead, 0).ToString(), CampaignName = rowCampaign?.CampaignName, Whale = bWhale }, rowSalesRepresentative.Phone!);
						}
					}

					System.Threading.Thread.Sleep(10 * 1000);
				}
			}
			catch (Exception err)
			{
				Logs.LogError(err);
			}
		}

		static public void MessageLead(int LeadID, int SalesRepresentativeID, string Message)
		{
			LeadsRow rowLead = Leads.GetLead(LeadID);
			SalesRepresentativesRow rowSalesRepresentative = SalesRepresentatives.GetSalesRepresentative(SalesRepresentativeID);

			if (StringUtil.IsEmpty(rowLead.Phone))
				throw new JsonWsException("Cannot send message, this lead does not have a phone number");

			//Helper.SendSMSViaTwilio(rowLead.Phone, Message);
			//MessagesRepository.InsertMessage(Message, rowSalesRepresentative.Phone, rowLead.Phone, null,
			//	null, null, null, null, true, rowLead.LeadID, rowSalesRepresentative.SalesRepresentativeID);

			if (rowLead.LeadStatusID == StatusesEnum.NotContacted.LeadStatusID)
			{
				UpdateLeadStatus(LeadID, SalesRepresentativeID, "Contacted", "Texted", null);
			}
		}

		static public void MessageLead2(int LeadID, int? SalesRepresentativeID, string Phone, string Message)
		{
			LeadsRow rowLead = LeadsRepository.Get(LeadID);
			bool bMatched = false;

			if (StringUtil.EqualNoCase(Phone, rowLead.Phone))
				bMatched = true;

			else
			{
				foreach (LeadContactsRow rowLeadContact in rowLead.LeadContacts)
				{
					if (StringUtil.EqualNoCase(Phone, rowLeadContact.Phone))
						bMatched = true;
				}
			}

			if (!bMatched)
				throw new JsonWsException("Cannot send message, phone number does not belong to this lead");

			TwilioHelper.SendSMSViaTwilio(Phone, Message);

			TwilioFeature feature = TwilioFeature.Feature;

			if (SalesRepresentativeID.HasValue)
			{
				MessagesRepository.InsertMessage(Message, feature.FromNumber, Phone, null, true, false, false);

				if (rowLead.LeadStatusID == StatusesEnum.NotContacted.LeadStatusID)
				{
					UpdateLeadStatus(LeadID, SalesRepresentativeID.Value, "Contacted", "Texted", null);
				}
			}

		}

		//public static void UpdateLead(
		//	int? LeadSubStatusID,
		//	int LeadID,
		//	string Company,
		//	string FirstName,
		//	string LastName,
		//	string Title,
		//	string Function,
		//	string Phone,
		//	string Email,
		//	string Address,
		//	string Address2,
		//	string City,
		//	string State,
		//	string ZipCode,
		//	int SourceID,
		//	string CampainKey,
		//	DateTime? LastContactedDate,
		//	int Priority,
		//	int StatusID,
		//	int? OpportunitySize,
		//	string Data,
		//	int? SalesRepresentativeID,
		//	string ImportKey,
		//	DateTime? GeneratedDate,
		//	int? CampaignID)
		//{
		//	LeadsRow rowLead = LeadsRepository.Get(LeadID) ?? throw new Exception("Lead does not exist");
		//	int ? iSalesRep = rowLead.SalesRepresentativeID;

		//	LeadsRepository.UpdateLead(
		//		LeadSubStatusID,
		//		rowLead.FollowUpDate,
		//		LeadID,
		//		Company,
		//		FirstName,
		//		LastName,
		//		Title,
		//		Function,
		//		Phone,
		//		Email,
		//		Address,
		//		Address2,
		//		City,
		//		State,
		//		ZipCode,
		//		SourceID,
		//		CampainKey,
		//		LastContactedDate,
		//		Priority,
		//		StatusID,
		//		OpportunitySize,
		//		Data,
		//		SalesRepresentativeID,
		//		ImportKey,
		//		GeneratedDate,
		//		CampaignID);

		//	rowLead = LeadsRepository.Get(LeadID);

		//	if (!StringUtil.IsEmpty(rowLead.LeadType))
		//	{
		//		LeadTags.InsertOrUpdateLeadTag(rowLead.LeadID, rowLead.LeadType);
		//		if (strLeadType != rowLead.LeadType && !StringUtil.IsEmpty(strLeadType))
		//		{
		//			LeadTags.RemoveLeadTag2(rowLead.LeadID, strLeadType);
		//		}
		//	}

		//	if (rowLead.SalesRepresentativeID != iSalesRep && iSalesRep != null && UserState.RoleID == RolesEnum.SalesRepresentative.RoleID)
		//	{
		//		SalesRepresentativesRow rowSalesRepOrig = SalesRepresentativesRepository.Get(iSalesRep.Value);
		//		SalesRepresentativesRow rowSalesRepNew = rowLead.SalesRepresentativeID == null ? null : SalesRepresentativesRepository.Get(rowLead.SalesRepresentativeID.Value);

		//		LeadNotes.InsertLeadNote(rowLead.LeadID, UserState.SalesRepresentativeID, rowSalesRepOrig.Name + " -> " + (rowSalesRepNew?.Name ?? "unassigned"), null, null, null);
		//	}
		//}

		static public void ForfeitLead(int LeadID, int SalesRepresentativeID)
		{
			LeadsRow rowLead = Leads.GetLead(LeadID);
			if (rowLead.SalesRepresentativeID != SalesRepresentativeID)
				throw new JsonWsException("Cannot forfeit someone else's lead");


			LeadNotes.InsertLeadNote(LeadID, rowLead.SalesRepresentativeID.Value, "Forfeited lead", null, null, null);

			rowLead.SalesRepresentativeID = AutomationRepresentative;
			LeadsRepository.UpdateLead(rowLead);
		}


		static public void UpdatePhoneType(int LeadID, string PhoneLineType)
		{
			string strFriendlyType;

			switch (PhoneLineType?.ToUpper())
			{
				case "":
				case null:
					strFriendlyType = "";
					break;
				case "CELL PHONE":
					strFriendlyType = "Mobile";
					break;
				case "LANDLINE":
					strFriendlyType = "Landline";
					break;
				case "VOIP":
					strFriendlyType = "VoIP";
					break;
				default:
					strFriendlyType = StringUtil.UppercaseFirstLetter(PhoneLineType);
					break;
			}

			LeadsRow rowLead = Leads.GetLead(LeadID);
			rowLead.DataObject["PhoneLineType"] = strFriendlyType;
			LeadsRepository.UpdateLeadData(rowLead);
		}




		public static List<LeadsRow> GetPotentialDuplicates(LeadsRow rowLead)
		{
			LeadsDataTable dtLeads = LeadsRepository.GetDuplicate(rowLead.Company, rowLead.FirstName, rowLead.LastName, rowLead.Phone, rowLead.Email, rowLead.Address);
			return dtLeads.Where(x => x.LeadID != rowLead.LeadID).ToList();
		}

		static public void MessageWhatsAppLead(int LeadID, int? SalesRepresentativeID, string Phone, string Message)
		{
			LeadsRow rowLead = LeadsRepository.Get(LeadID);
			bool bMatched = false;

			if (StringUtil.EqualNoCase(Phone, rowLead.Phone))
				bMatched = true;

			else
			{
				foreach (LeadContactsRow rowLeadContact in rowLead.LeadContacts)
				{
					if (StringUtil.EqualNoCase(Phone, rowLeadContact.Phone))
						bMatched = true;
				}
			}

			if (!bMatched)
				throw new JsonWsException("Cannot send message, phone number does not belong to this lead");

			FeedingFrenzy.WhatsApp.WhatsAppService service = new FeedingFrenzy.WhatsApp.WhatsAppService();
			service.SendMessage(Phone, Message).Wait();

			WhatsAppFeature feature = WhatsAppFeature.Feature;

			if (SalesRepresentativeID.HasValue)
			{
				JsonObject data = new JsonObject();
				data["IsWhatsApp"] = new JsonValue("true", false);

				MessagesRepository.InsertMessage(Message, feature._phoneNumber, Phone, data.ToString(), true, false, false);

				if (rowLead.LeadStatusID == StatusesEnum.NotContacted.LeadStatusID)
				{
					UpdateLeadStatus(LeadID, SalesRepresentativeID.Value, "Contacted", "Texted", null);
				}
			}

		}

		public static List<LeadsRow> GetUnassignedGridWithSearchHtml(int SalesRepresentativeID, string Search, string SortColumn, string SortAscending, string SkipRows, string NumRows, string searchOptions)
		{
			LeadSearch search = JsonUtil.ConvertTo<LeadSearch>(searchOptions);
			if (StringUtil.IsEmpty(search.State))
				search.State = null;
			if (StringUtil.IsEmpty(search.Speciality))
				search.Speciality = null;

			List<LeadsRow> dtLeads = Leads_GetUnassigned_Sp_PagingSp(SalesRepresentativeID, Search, SortColumn, Convert.ToBoolean(SortAscending), 0, 100000);

			int iSkipRows = Convert.ToInt32(SkipRows);
			int iNumRows = Convert.ToInt32(NumRows);

			Logs.DebugLog.CreateTimer("Filter");
			List<LeadsRow> lstLeads = new List<LeadsRow>();
			int iFoundRows = 0;
			foreach (LeadsRow rowLead in dtLeads)
			{
				if (search.MatchesSearch(rowLead))
				{
					if (++iFoundRows >= iSkipRows)
						lstLeads.Add(rowLead);

					if (lstLeads.Count >= iNumRows)
						break;
				}
			}
			Logs.DebugLog.WriteTimer("Filter");

			return lstLeads;
		}

		public static int GetUnassignedGridWithSearchCount(int SalesRepresentativeID, string Search, string searchOptions)
		{
			LeadSearch search = JsonUtil.ConvertTo<LeadSearch>(searchOptions);
			if (StringUtil.IsEmpty(search.State))
				search.State = null;
			if (StringUtil.IsEmpty(search.Speciality))
				search.Speciality = null;

			List<LeadsRow> dtLeads = Leads_GetUnassigned_Sp_PagingSp(SalesRepresentativeID, Search, "LeadID", false, 0, 100000);

			Logs.DebugLog.CreateTimer("Filter");
			List<LeadsRow> lstLeads = new List<LeadsRow>();
			int iFoundRows = 0;
			foreach (LeadsRow rowLead in dtLeads)
			{
				if (search.MatchesSearch(rowLead))
				{
					++iFoundRows;
				}
			}
			Logs.DebugLog.WriteTimer("Filter");

			return iFoundRows;
		}

		public static void AssignLead(int LeadID, int SalesRepresentativeID)
		{
			LeadsRepository.AssignLead(LeadID, SalesRepresentativeID);
		}

		public static int AssignLeads(int SalesRepresentativeID, int Count)
		{
			LeadsDataTable dtDataTable = LeadsRepository.GetLeadsSp_PagingSp("", "Priority", true, 0, 1000);

			int iTotal = 0;
			foreach (LeadsRow rowLead in dtDataTable)
			{
				if (rowLead.SalesRepresentativeID != null)
					continue;

				if (rowLead.LeadStatusID == StatusesEnum.NotContacted.LeadStatusID)
				{
					rowLead.SalesRepresentativeID = SalesRepresentativeID;
					LeadsRepository.UpdateLead(rowLead);
					iTotal++;

					if (iTotal >= Count)
						break;
				}
			}

			if (iTotal < Count)
				Logs.LogError(new Exception("Not enough leads found."));

			return iTotal;
		}
	}
}

