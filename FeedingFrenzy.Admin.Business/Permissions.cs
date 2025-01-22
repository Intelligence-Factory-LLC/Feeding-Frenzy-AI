using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FeedingFrenzy.Admin.Business
{
	public class Permissions
	{
		public bool AllLeads = false;
		public bool InsertLead = false;
		public bool EditLead = false;
		public bool ReassignLead = false;
		public bool CanCommunicateWithUnclaimedLead = false;
		public bool AllowBulkLeadOperations = false;
		public bool AllowBulkClaimedLeadOperations = false;

		public bool ViewSalesRepresentatives = false;
		public bool InsertSalesRepresentative = false;
		public bool EditSalesRepresentativeWeight = false;
		public bool ViewSalesReports = false;


		public bool InsertOrganization = false;
		public bool EditOrganization = false;
		public bool ViewAllOrganizations = false;

		public bool ViewQuoting = false;
		public bool ViewPurchaseOrders = false;
		public bool ViewAllInvoices = false;

		public bool AllowExportInvoices = false;

		public bool AllowEditQuickHelp = false;
	}
}
