function OnBulkAssignLeads() {
	let lstSelected = Page.LeadsGridSelector.m_setSelected.ToArray();
	if (lstSelected.length == 0) {
		UserMessages.DisplayNow("No rows selected", "Error");
	}
	else {
		ControlUtil.SetValue("txtBulkAssignNumOfLeads", lstSelected.length);
		jQuery("#divBulkAssign").modal('show');
	}
}

async function OnBulkAssignLeadsComplete() {
	let iSalesRepID = ControlUtil.GetValue($$("[kcs:FieldName=SalesRepresentativeID]")[0])
	let lstSelected = Page.LeadsGridSelector.m_setSelected.ToArray();

	jQuery("#divBulkAssign").modal('hide');

	if (ObjectUtil.HasValue(iSalesRepID) && !StringUtil.IsEmpty(iSalesRepID)) {
		UserMessages.DisplayNow("Starting reassign", "Info")

		Leads.AssignLead.DisableRequestCancelling = true;

		await Promise.all(lstSelected.map(async x => {
			return new Promise((resolve) => {
				Leads.AssignLead(x, iSalesRepID, function () {
					resolve();
				})
			});
		}));

		UserMessages.Display("Reassigned " + lstSelected.length + " leads", "Success");
		Page.Reload();
	}
}

function OnBulkUpdateStatus() {
	let lstSelected = Page.LeadsGridSelector.m_setSelected.ToArray();
	if (lstSelected.length == 0) {
		UserMessages.DisplayNow("No rows selected", "Error");
	}
	else {
		ControlUtil.SetValue("txtBulkUpdateStatusNumOfLeads", lstSelected.length);
		jQuery("#divBulkUpdateStatus").modal('show');
	}
}

async function OnBulkUpdateStatusComplete() {
	let lstSelected = Page.LeadsGridSelector.m_setSelected.ToArray();

	
	let sStatus = ControlUtil.GetValue("ddlQuickStatus");

	if (StringUtil.IsEmpty(sStatus)) {
		UserMessages.DisplayNow("Select a valid Status", "Warning");
		return;
	}

	if (!StringUtil.IsEmpty(sStatus)) {
		UserMessages.DisplayNow("Starting update", "Info")

		LeadsValidatorsFields.SubStatus.Validators = [];
		let sStatuses = StringUtil.Split(sStatus, "|");
		let sSubStatus = null;
		if (sStatuses.length == 1) {
			sStatus = sStatuses[0];
			sSubStatus = null;
		}
		else {
			sStatus = sStatuses[0];
			sSubStatus = sStatuses[1];
		}

		Leads.UpdateLeadStatus2.DisableRequestCancelling = true;

		await Promise.all(lstSelected.map(async x => {
			return new Promise((resolve) => {
				Leads.UpdateLeadStatus2(x, iSalesRepresentativeID, sStatus, sSubStatus, function () {
					resolve();
				});
			});
		}));

		UserMessages.DisplayNow("Updated " + lstSelected.length + " leads", "Success");
		Page.Reload();
	}
}

function OnBulkAddTag() {
	let lstSelected = Page.LeadsGridSelector.m_setSelected.ToArray();
	if (lstSelected.length == 0) {
		UserMessages.DisplayNow("No rows selected", "Error");
	}
	else {
		ControlUtil.SetValue("txtBulkAddTagNumOfLeads", lstSelected.length);
		jQuery("#divBulkAddTag").modal('show');
	}
}

async function OnBulkAddTagComplete() {
	let lstSelected = Page.LeadsGridSelector.m_setSelected.ToArray();

	let sTagName = ControlUtil.GetValue("ddlQuickTags");

	if (StringUtil.IsEmpty(sTagName)) {
		UserMessages.DisplayNow("Select a valid Tag", "Warning");
		return;
	}


	if (!StringUtil.IsEmpty(sTagName)) {
		UserMessages.DisplayNow("Starting update", "Info")

		LeadTags.InsertOrUpdateLeadTag.DisableRequestCancelling = true;

		await Promise.all(lstSelected.map(async x => {
			return new Promise((resolve) => {
				LeadTags.InsertOrUpdateLeadTag(x, sTagName, function () {
					resolve();
				});
			});
		}));


		UserMessages.Display("Updated " + lstSelected.length + " leads", "Success");
		Page.Reload();
	}
}