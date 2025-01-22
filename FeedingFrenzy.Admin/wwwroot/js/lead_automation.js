

class LeadState {

	static m_Lead = null;
	static m_LeadNoteTypes = null; 

	static GetLead() {

		if (null == LeadState.m_Lead) {
			Leads.GetLead.Serialize = { Source: true, Campaign: true, LeadTagTags: true, Status: true, LeadNotes: true };
			let lead = Leads.GetLead(iLeadID);
			lead.DataObject = JSON.decode(oLead.Data);
			lead.LeadNotes.sort((a, b) => b.LeadNoteID - a.LeadNoteID);

			for (let i = 0; i < lead.LeadNotes.length; i++) {
				let leadNote = lead.LeadNotes[i];
				if (!leadNote.DataObject) {
					try {
						leadNote.DataObject = JSON.decode(StringUtil.IsEmpty(leadNote.Data) ? "{}" : leadNote.Data);
					}
					catch (err) {
						leadNote.DataObject = {};
					}

				}
			}

			LeadState.m_Lead = lead;
		}

		return LeadState.m_Lead;
	}


	static IsLeadNoteType(leadNote, strType) {
		if (LeadState.m_LeadNoteTypes == null) {
			LeadState.m_LeadNoteTypes = LeadNoteTypes.GetLeadNoteTypes();
		}

		return (LeadState.m_LeadNoteTypes.any(x =>
			leadNote.LeadNoteTypeID == x.LeadNoteTypeID
			&& StringUtil.EqualNoCase(x.LeadNoteTypeName, strType)));
	}

	static GetMostRecentLeadNoteOfType(strType) {
		let lead = LeadState.GetLead();
		return lead.LeadNotes.find(x => LeadState.IsLeadNoteType(x, strType))
	}

	static GetAppointment() {
		return LeadState.GetMostRecentLeadNoteOfType("Appointment Set");
	}

	static _resolveEmailNote(leadNote) {
		if (null == leadNote.RawEmail) {
			let oRawEmail = RawEmails.GetRawEmail(leadNote.DataObject.RawEmailID);
			leadNote.RawEmail = oRawEmail;
			leadNote.RawEmail.IsReceived = StringUtil.InString(oRawEmail.From, LeadState.m_Lead.Email);
		}
		return leadNote;
	}

	static GetMostRecentEmail() {

		let lead = LeadState.GetLead();

		for (let i = 0; i < lead.LeadNotes.length; i++) {
			let leadNote = lead.LeadNotes[i];
			if (null != leadNote.DataObject.RawEmailID) {
				leadNote = LeadState._resolveEmailNote(leadNote);
				return leadNote;
			}
		}

		return null;
	}

	static GetMostRecentSentEmail() {

		let lead = LeadState.GetLead();

		for (let i = 0; i < lead.LeadNotes.length; i++) {
			let leadNote = lead.LeadNotes[i];
			if (null != leadNote.DataObject.RawEmailID) {
				leadNote = LeadState._resolveEmailNote(leadNote);
				if (leadNote.RawEmail.IsReceived == false)
					return leadNote;
			}
		}

		return null;
	}

	static GetMostRecentReceivedEmail() {

		let lead = LeadState.GetLead();

		for (let i = 0; i < lead.LeadNotes.length; i++) {
			let leadNote = lead.LeadNotes[i];
			if (null != leadNote.DataObject.RawEmailID) {
				leadNote = LeadState._resolveEmailNote(leadNote);
				if (leadNote.RawEmail.IsReceived == true)
					return leadNote;
			}
		}

		return null;
	}

	static GetSentEmailTemplates() {

		let lead = LeadState.GetLead();

		return lead.LeadNotes.filter(x => x.DataObject.IsSentEmailTemplate == true);
	}

	static GetSentEmailTemplateNames() {
		let emails = LeadState.GetSentEmailTemplates().map(x => StringUtil.RightOfFirst(x.Notes, "Contacted - Emailed - "));
		return emails.filter(x => !StringUtil.IsEmpty(x));		
	}

	static HasUnrespondedEmail() {

		let email = LeadState.GetMostRecentEmail();
		return null != email && email.RawEmail.IsReceived;
	}

	static SentEmailThisWeek() {
		let email = LeadState.GetMostRecentSentEmail();
		if (null == email)
			return false;
		return (DateUtil.DaysBetween(email.DateCreated, new Date()) < 7);
	}



}



function OnGetState() {

	let state = GetState();

	BlindBind2("tblState", state);
}


function OnPlan() {

	let state = GetState();
	BlindBind2("tblState", state);
	let actions = Plan(state);

	actions.forEach(action => {

		let oLi = ["button", { "class": "Edit btn btn-info-alt btn-label", click:action.Action }, action.Description];

		_$("ulActions").appendChild($$$(oLi));

	})
	return actions;
}


async function OnProcess() {
	let state = GetState();
	var actions = Plan(state);

	for (let i = 0; i < actions.length; i++) {
		let action = actions[i];
		if (action.Action != null)
			await action.Action();
	}
}


////////////////////Auto Sales Control
var bCancelled = false;
function OnCancelAutoSales(ctrl) {
	bCancelled = true;
	ctrl.disabled = true;
	ctrl.innerText = "Cancelled";
}

function OnStartAutoSales() {
	new LocalStorage().set("Leads.AutoSales", true);
}
function OnStopAutoSales() {
	new LocalStorage().set("Leads.AutoSales", false);
}

//////////////////////Initializer////////////////////////
var AutoSales = {
	IsEnabled: false,
	Delay: 2000
}
Page.AddOnload(async function () {

	AutoSales = $merge(AutoSales, new LocalStorage().get("Leads.AutoSales"));

	if (!_$("divAutoSalesSettigns"))
		return;
	BlindBind2("divAutoSalesSettings", AutoSales);	
	var oActions = await OnPlan();

	if (true == AutoSales.IsEnabled) {
		//var oActions = await OnPlan();
		UserMessages.DisplayNow(oActions[0].Description + " in " + (AutoSales.Delay / 1000) + " seconds <button onclick='OnCancelAutoSales(this)'>Cancel</button>", "Info", true);
		(function () {
			if (!bCancelled) {
				OnProcess();
			}
		}).delay(AutoSales.Delay);
	}

});

function OnSaveAutoSalesSettings() {
	let oAutoSales = BlindUnbind("divAutoSalesSettings");
	AutoSales = $merge(AutoSales, oAutoSales);
	new LocalStorage().set("Leads.AutoSales", AutoSales);
}


///////////////////Actions

async function ReplyHere(iRawEmailID) {

	let f = new Promise((resolve) => {
		RawEmails.GetRawEmail(iRawEmailID, async function (oRawEmail) {
			oRawEmail.DataObject = JSON.decode(oRawEmail.Data);
			jQuery("#divEmailPreview").modal('hide');
			jQuery("#divEmailReply").modal('show');
			await FillInReply(oLead.Email, oLead.FirstName, oRawEmail.Subject, oRawEmail.DataObject.MessageID, oRawEmail.DataObject.ThreadID);
			resolve();
		});
	});

	await f;
}

async function SendEmailTemplateAction(sTemplate) {
	OnSendEmailTemplate();
	await SelectEmailTemplate(sTemplate);
	OnFollowUpDate2("week", "txtEmailFollowUp");
	await SendEmailTemplate();
}

async function SendEmailTemplateReplyAction(sTemplate, iRawEmailID) {
	await ReplyHere(iRawEmailID);
	await SelectEmailTemplate(sTemplate);
	OnFollowUpDate2("week", "txtEmailFollowUp");
	await SendEmailTemplate();
}
async function SendSMSAction(sTemplate) {
	OnSendTextTemplate();
	await SelectSMSTemplate(sTemplate);
	await SendTextTemplate();
}

async function RecommendCall() {
	UserMessages.DisplayNow("Recommend calling this lead", "Info");
}


async function Unresponsive() {
	let f = new Promise((resolve) => {
		Leads.UpdateLeadStatus2(iLeadID, iSalesRepresentativeID, "Lost", "Unresponsive", function () {
			UserMessages.DisplayNow("Status Updated", "Success");
			resolve();
		});
	});

	await f;
}

async function LostDidNotSeeValue() {
	let f = new Promise((resolve) => {
		Leads.UpdateLeadStatus2(iLeadID, iSalesRepresentativeID, "Lost", "Did not See Value", function () {
			UserMessages.DisplayNow("Status Updated", "Success");
			resolve();
		});
	});

	await f;
}

async function LeadTooSmall() {
	let f = new Promise((resolve) => {
		Leads.UpdateLeadStatus2(iLeadID, iSalesRepresentativeID, "Lost", "Too Busy", function () {
			UserMessages.DisplayNow("Status Updated", "Success");
			resolve();
		});
	});

	await f;
}
async function UpdateLeadStatus(sStatus, sSubStatus) {
	let f = new Promise((resolve) => {
		Leads.UpdateLeadStatus2(iLeadID, iSalesRepresentativeID, sStatus, sSubStatus, function () {
			UserMessages.DisplayNow("Status Updated", "Success");
			resolve();
		});
	});

	await f;
}
async function ClaimLead() {
	let f = new Promise((resolve) => {
		Leads.ClaimLead(iLeadID, iSalesRepresentativeID, function () {
			UserMessages.Display("Lead Claimed", "Success");
			resolve();
		})
	});
	await f;
}



////GPT Methods

function HTMLToText(sHTML) {
	const parser = new DOMParser();
	const doc = parser.parseFromString(sHTML, 'text/html');
	return doc.body.textContent || "";
}

function LeadNotesTableToText(sHTML) {
	const parser = new DOMParser();
	const doc = parser.parseFromString(sHTML, 'text/html');
	const table = doc.querySelector('table'); // Assuming there's only one table in the HTML
	const rows = table.querySelectorAll('tr');
	let result = '';

	rows.forEach(row => {
		const cells = row.querySelectorAll('td');
		if (cells.length >= 6) { // Ensure there are at least 5 columns
			const salesRep = cells[1].textContent.trim();
			const notes = cells[2].innerText.trim();
			const date = cells[5].textContent.trim();
			result += `On Date: ${date} Sales Representative: ${salesRep} Added a Note: ${notes}\r\n\r\n`;
		}
	});

	return result;
}

function EmailJsonToText(jsonData) {
	let result = "";

	jsonData.forEach(entry => {
		result += "\r\nStart of Email Thread\r\n";
		result += `StartDate: ${entry.StartDate}\n`;
		result += `StopDate: ${entry.StopDate}\n`;
		result += `Subject: ${entry.Subject}\n\n`;

		entry.Emails.forEach(email => {
			if (!email.IsInternalOnly) {
				result += `To: ${email.To}\n`;
				result += `From: ${email.From}\n`;
				result += `Subject: ${email.Subject}\n`;
				result += `Body: ${HTMLToText(StringUtil.IsEmpty(email.BodyHtml) ? email.BodyText : email.BodyHtml)}\n`;
				result += `Date: ${email.DateCreated}\n\n`;
			}
		});

		result += "\r\nEnd of Email Thread\r\n";
	});

	return result;
}

async function GatherPromptInfo() {

	let fields = ["Last Updated"]; // to exclude
	let sLeadHTML = "*** Lead Info: ***\r\n"; // HTMLToText($$("table")[0].innerHTML);

	let divParent = new ElementList($$("table")[0].parentElement.children);
	divParent.forEach(el => {
		if (el.tagName == "H3"|| el.tagName == "H4") {
			sLeadHTML += "\r\n" + el.innerText + "\r\n";
		}
		else if (el.tagName == "TABLE") {
			let rows = el.rows;
			for (let i = 0; i < rows.length; i++) {
				let row = rows[i];
				let cells = row.cells;
				
				let cell = cells[0];
				if (!fields.contains(cell.innerText.trim())) {
					sLeadHTML += cell.innerText + ": " + cells[1].innerText + "\r\n";
				}
				
			}
		}
	});
	

	let sLeadNoteHTML = "";
	let sEmails = "";

	//const leadNotesPromise = new Promise((resolve) => {
	//	LeadNotesAdmin.GetGridByLeadIDHtml(iLeadID, "", "LeadID", false, 0, 30, function (sRes) {
	//		sLeadNoteHTML = sRes;
	//		resolve();
	//	});
	//});

	//if (typeof RawEmails != "undefined") {

	//	RawEmails.GetLeadConversations.Serialize = { Emails: true };
	//	const emailsPromise = new Promise((resolve) => {
	//		RawEmails.GetLeadConversations(iLeadID, function (sRes) {
	//			sEmails = EmailJsonToText(sRes);
	//			resolve();
	//		});
	//	});

	//	await Promise.all([leadNotesPromise, emailsPromise]);
	//}
	//else {
	//	await leadNotesPromise;
	//}

	// Convert sLeadNoteHTML to text
	sLeadNoteHTML = LeadNotesAdmin.GetGridByLeadIDHtml(iLeadID, "", "LeadID", false, 0, 30);
	const leadNoteText = LeadNotesTableToText(sLeadNoteHTML);

	let sPrompt = "***Lead Info: ****\r\n" + sLeadHTML + "\r\n *** Recent Notes and Interactions: *** \r\n " + leadNoteText + "\r\n ****** Recent Emails ***** \r\n" + sEmails;
	return sPrompt;

}




async function ConfigureSideChatArea() {


	window.editDirective = CodeMirror.fromTextArea(document.getElementById('txtDirective'), {
		//mode: "text/x-csharp",
		//indentWithTabs: true,
		//smartIndent: true,
		//lineNumbers: true,
		lineWrapping: true,
		//matchBrackets: true,
		autofocus: false,
		lineSeparator: '\r\n',
		extraKeys: { "Ctrl-Space": "autocomplete", "Ctrl-Enter": DirectiveEditor.OnEnter },
		hintOptions: { hint: DirectiveEditor.OnSuggest, completeSingle: false }//,
		//gutters: ['gutter-error', "breakpoints"]
	});

	editDirective.on("keyup", function (cm, event) {
		if (!cm.state.completionActive && /*Enables keyboard navigation in autocomplete list*/
			!ExcludedIntelliSenseTriggerKeys[(event.keyCode || event.which).toString()]) {        /*Enter - do not open autocomplete list just after item has been selected in it*/
			CodeMirror.commands.autocomplete(cm, null, { completeSingle: false });
		}
	});

	window.editDirective.getWrapperElement().addEventListener('contextmenu', function (e) {
		// Allow the native context menu by not calling e.preventDefault().
		// Stop CodeMirror’s internal handler from firing and causing errors.
		e.stopImmediatePropagation();
	}, true);

	Automation.SetAgentStatus("Gathering lead info...");	
	let sInfo = await GatherPromptInfo();

	LeadAutomation.UpdateLeadInfo(iLeadID, sInfo, function (bRes) {

		Automation.InsertMessage(bRes ? "Lead info updated" : "Lead info already up to date", "sent");
		Automation.OnDoneProcessing();

		if (bRes) {
			UpdateLeadSummary(sInfo);
		}

		_$("divSummary").removeClass("hidden");
	})
	

}

class LeadSummarySettings {
	static SmallTokenSize = 100000;
	static SmallModel = "gpt-4o-mini";
	static LargeModel = "gpt-4o";
	static SummaryPrimaryPrompt =
		`
	You are a sales representative for {CompanyName} looking at a lead's information. Basic information about the lead is contained in the section marked as

***Lead Info: ***

You can use this information to refer to the lead more specifically. You can use the "Next Follow Up" information and any information in the sections

*** Recent Notes and Interactions: ***

These are notes put in by the sales representative or system messages. They may also contain conversations between a sales rep and the lead.

*** Recent Emails ***

These are email conversations between {CompanyName} and the lead.

Your job is to give a useful overview of the recent progress on this lead. Give a short summary of the lead and recent notes and emails. If there are open action items, then list those. Fill in the following fields

 Summary - give a short summary of the status of the lead
 RecentActions - give an array of actions that have been taken lately, or important things that have happened
 NextAction - what (if any) is the next thing that should happen, according to any notes or emails
 Contact - who have we primarily been talking to
 LastInteraction - what was the last interaction with the lead, if any
 Recommendation - given the entire history, what is the best next step to try to sell this lead? If the lead is waiting on some information, or there is a pending action, then list that here

Unless otherwise indicated, each of the fields should be a simple string, not a nested JSON object. Return the result as valid JSON. Highlight any entities using html bold tags. For example, if the lead's name is John Doe, then you would return something like <b>John Doe</b>
`;

	static SummarySecondaryPrompt = '';
}

function UpdateLeadSummary(sInfo) {
	Automation.SetAgentStatus("Updating lead summary...");

	const sPrompt = LeadSummarySettings.SummaryPrimaryPrompt + LeadSummarySettings.SummarySecondaryPrompt;
	const dateString = `Today is ${moment().format('dddd, MMMM Do YYYY')}`;

	let sModel = sInfo.length > LeadSummarySettings.SmallTokenSize ? LeadSummarySettings.LargeModel : LeadSummarySettings.SmallModel;
	console.log("Using model: " + sModel + " for summary");

	LeadAutomation.CompleteJSONBasedOnLeadInfo2(iLeadID, sPrompt + dateString, sModel, function (sResult) {
		Automation.InsertMessage("Lead summary updated", "sent");
		Automation.OnDoneProcessing();

		try {
			oLead = Leads.GetLead(iLeadID);

			oLead.DataObject = JSON.parse(oLead.Data);
			oLead.DataObject.Summary = JSON.parse(sResult);
			Leads.UpdateLeadData(oLead.LeadID, JSON.stringify(oLead.DataObject), function () { });

			BlindBind("divSummaryContent", oLead.DataObject.Summary);
		}
		catch (err) {
			console.log("update summary returned invalid JSON")
		}
	})

}



