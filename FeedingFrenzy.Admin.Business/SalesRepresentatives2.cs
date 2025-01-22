
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;
using FeedingFrenzy.Admin.Business.Admin.API;
using FeedingFrenzy.Admin.Business.API;
using Microsoft.AspNetCore.Http;
using DocumentFormat.OpenXml.Drawing.Charts;
using DocumentFormat.OpenXml.Spreadsheet;
using FeedingFrenzy.Admin.Business.ChatAgents;

namespace FeedingFrenzy.Admin.Business
{
	public partial class SalesRepresentatives : JsonWs
	{
		public static int InsertSalesRepresentative(
	string? Notes,
	bool IsEnabled,
	string? Data,
	string Name,
	string Email,
	string? Phone,
	int? SalesRepresentativeTypeID)
		{
			try
			{
				int iUserID;
				UsersRow ? rowUser = UsersRepository.GetUserByEmail(Email);
				if (null == rowUser)
				{
					string strPassword = Authorizations.GeneratePassword();
					iUserID = Users.InsertUser2(Email, strPassword, Name, Phone);
					UserRoles.InsertUserRole2(iUserID, RolesEnum.SalesRepresentative.RoleID);
				}				
				else
				{
					iUserID = rowUser.UserID;
					UserRoles.InsertUserRole2(rowUser.UserID, RolesEnum.SalesRepresentative.RoleID);
				}		
				
				int iSalesRepresentativeID = SalesRepresentativesRepository.InsertSalesRepresentative(
					Notes,
					Data,					
					SalesRepresentativeTypeID, iUserID
				);

				return iSalesRepresentativeID;
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}
		}
		static public Permissions GetPermissionBySalesRepresentative(SalesRepresentativesRow rowSalesRepresentative)
		{
			Permissions permission = new Permissions();

			if (rowSalesRepresentative.SalesRepresentativeTypeID == SalesRepresentativeTypesEnum.SalesManager.SalesRepresentativeTypeID)
			{
				permission.AllLeads = true;
				permission.EditLead = true;
				permission.InsertLead = true;
				permission.ReassignLead = true;
				permission.CanCommunicateWithUnclaimedLead = true;
				permission.AllowBulkLeadOperations = true;
				permission.AllowBulkClaimedLeadOperations = rowSalesRepresentative.DataObject.GetBooleanOrFalse("AllowBulkClaimedLeadOperations");

				permission.ViewSalesRepresentatives = true;
				permission.InsertSalesRepresentative = true;

				permission.ViewAllOrganizations = true;
				permission.ViewAllInvoices = true;

				permission.ViewSalesReports = true;

			}

			if (rowSalesRepresentative.SalesRepresentativeTypeID == SalesRepresentativeTypesEnum.InternalSales.SalesRepresentativeTypeID)
			{
				permission.AllLeads = true;
				permission.EditLead = true;
				permission.InsertLead = true;

				permission.InsertSalesRepresentative = false;
				permission.ViewAllInvoices = true;
			}

			if (rowSalesRepresentative.SalesRepresentativeTypeID == SalesRepresentativeTypesEnum.ISD.SalesRepresentativeTypeID)
			{
				permission.AllLeads = false;
				permission.EditLead = true;
				permission.InsertLead = true;
				permission.ViewAllInvoices = false;

				permission.InsertSalesRepresentative = false;
			}

			permission.ViewQuoting = rowSalesRepresentative.DataObject.GetBooleanOrFalse("ViewQuoting");

			return permission;
		}


		static public void Impersonate(int SalesRepresentativeID, HttpContext? context)
		{
			if (null == context || !new UserState(context).HasRole(RolesEnum.Administrator.RoleID))
				throw new Exception("Not authorized");

			SalesRepresentativesRow rowSalesRepresentative = SalesRepresentativesRepository.Get(SalesRepresentativeID) ?? throw new ArgumentException("SalesRepresentativeID");
			UsersRow rowUser = Users.GetUserByEmail(rowSalesRepresentative.Email);

			Authentication.SetupLogin(rowUser, context);
		}

		public static List<SalesRepresentativesRow> GetEnabledSalesRepresentatives()
		{
			return SalesRepresentativesRepository.GetAll().Where(x => x.IsEnabled).OrderBy(x => x.Name).ToList();
		}

		public static List<SalesRepresentativesRow> GetReportedSalesRepresentatives()
		{
			return SalesRepresentativesRepository.GetAll().Where(x => x.DataObject.GetBooleanOrFalse("IsShownOnReports")).OrderBy(x => x.Name).ToList();
        }
        public static string GetSalesRepAvailability()
        {

            List<SalesRepresentativesRow> lstSalesReps = GetEnabledSalesRepresentatives();

            foreach (SalesRepresentativesRow rowSalesRep in lstSalesReps)
            {
                List<LeadNotesRow> lstAppointments = LeadNotes
                    .GetLeadNotesByLeadNoteTypeID(LeadNoteTypesEnum.AppointmentSet.LeadNoteTypeID)
                    .ToList();

                JsonArray availableDates = new JsonArray();
                for (int i = 0; i < 7; i++)
                {
                    DateTime date = DateTime.Today.AddDays(i);
                    JsonArray timeSlots = new JsonArray();

                    // Add hourly slots from 8 AM to 6 PM
                    for (int hour = 8; hour < 18; hour++) // 18 = 6 PM in 24-hour format
                    {
                        DateTime slot = date.AddHours(hour);

						//TODO: Check appointment status

                        // Check if this slot is not occupied by any existing appointments
                        bool isSlotBusy = lstAppointments.Any(appt => appt.FollowUpDate == slot.Date && appt.FollowUpDate.Value.Hour == slot.Hour);

                        if (!isSlotBusy) // Only add the slot if it's not busy
                        {
                            timeSlots.Add(slot.ToString("yyyy-MM-dd HH:mm"));
                        }
                    }

                    // Only add the date if there are available time slots
                    if (timeSlots.Count > 0)
                    {
                        JsonObject dateObject = new JsonObject
                        {
                            ["Date"] = date.ToString("yyyy-MM-dd"),
                            ["TimeSlots"] = timeSlots
                        };

                        availableDates.Add(dateObject);
                    }
                }

                if (availableDates.Count > 0) 
                {
                    JsonObject salesRepJson = new JsonObject
                    {
                        ["SalesRepresentativeID"] = rowSalesRep.SalesRepresentativeID,
                        ["Name"] = rowSalesRep.Name,
                        ["AvailableDates"] = availableDates
                    };

                    return salesRepJson.ToJSON();
                }
            }

            return "{}"; 
        }

		static public string SendObjectToBuffaly(int SalesRepresentativeID)
		{
			SalesRepresentativesRow rowSalesRepresentative = SalesRepresentatives.GetSalesRepresentative(SalesRepresentativeID);
			string strPrototypeName = FeedingFrenzyAgent.InsertObject(nameof(SalesRepresentativesRow), rowSalesRepresentative.SalesRepresentativeID);
			rowSalesRepresentative.DataObject["PrototypeName"] = strPrototypeName;
			SalesRepresentativesRepository.UpdateSalesRepresentativeData(rowSalesRepresentative);

			if (!StringUtil.IsEmpty(rowSalesRepresentative.Name))
				FeedingFrenzyAgent.InsertEntity(rowSalesRepresentative.Name, "SalesRepresentativesRow.Name", strPrototypeName);

			return strPrototypeName;
		}



	}
}    
		