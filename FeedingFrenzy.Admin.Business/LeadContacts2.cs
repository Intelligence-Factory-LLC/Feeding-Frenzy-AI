using BasicUtilities;
using FeedingFrenzy.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FeedingFrenzy.Admin.Business
{
    public partial class LeadContacts2
    {
        static public void UpdateLeadContactPhoneType(int LeadContactID, string PhoneLineType)
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

            LeadContactsRow rowLeadContact = LeadContacts.GetLeadContact(LeadContactID);
            rowLeadContact.DataObject["PhoneLineType"] = strFriendlyType;
            LeadContactsRepository.UpdateLeadContact(rowLeadContact);
        }
    }
}
