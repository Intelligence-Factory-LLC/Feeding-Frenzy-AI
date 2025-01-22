

var Automation = {
	PrePrompt : `
		You are a sales representative for {CompanyName} looking at a lead's information. Basic information about the lead is contained
		in the section marked as

***Lead Info: ***

You can use this information to refer to the lead more specifically. You can use the "Next Follow Up"
information and any information in the sections

*** Recent Notes and Interactions: ***

These are notes put in by the sales representative or system messages. They may also contain conversations
between a sales rep and the lead.

*** Recent Emails ***

These are email conversations between {CompanyName} and the lead.

Use that information to answering the following command or question. Do not make up any information, pull only from the information
provided.

Question or Command:

`,
	ProcessDirective: function (sMessage) {
		Automation.SetAgentStatus("Processing...");




		Automation.InsertMessage(sMessage, "received");
		AutomationSettings.SavedDirectives = QueueFront(AutomationSettings.SavedDirectives, { Directive: sMessage }, 500, function (x, item) { return !StringUtil.EqualNoCase(x.Directive, item.Directive); });

		const dateString = `Today is ${moment().format('dddd, MMMM Do YYYY')}`;

		LeadAutomation.CompleteBasedOnLeadInfo2(iLeadID, dateString + Automation.PrePrompt + sMessage, LeadSummarySettings.SmallModel, function (sResult) {
			Automation.OnDoneProcessing();
			Automation.InsertMessage(sResult, "sent");
		})
	},
	SetAgentStatus: function (sMessage) {
		if (_$("spanAgentStatus"))
			_$("spanAgentStatus").innerHTML = sMessage;
	},
	OnDoneProcessing: function () {
		if (_$("spanAgentStatus"))
			_$("spanAgentStatus").innerHTML = "How can I help you?";
	},

	InsertMessage: function (sMessage, sClass) {
		let lstPreviousMessages = Automation.GetPreviousMessages();
		let iIndex = 0;
		if (sClass.contains("sent")) {
			let iEnd = lstPreviousMessages.findIndex(x => x.css == "divider");
			if (iEnd > 0)
				iIndex = iEnd;
		}

		if (iIndex >= lstPreviousMessages.length || lstPreviousMessages[iIndex].message != sMessage || lstPreviousMessages[iIndex].css != sClass) {

			lstPreviousMessages.insertAt(iIndex, {
				timestamp: new Date().toLocaleTimeString(),
				message: sMessage,
				css: sClass
			});
		}

		Automation.SetPreviousMessage(lstPreviousMessages);

		Automation.DisplayMessages();
	},

	GetPreviousMessages: function () {
		var lstPreviousMessages = Page.ObjectStorage.GetValue("Portal.Automation.JavaScript.PreviousMessages");

		if (null == lstPreviousMessages)
			lstPreviousMessages = [];

		return lstPreviousMessages;
	},

	SetPreviousMessage: function (lstPreviousMessage) {
		Page.ObjectStorage.SetValue("Portal.Automation.JavaScript.PreviousMessages", lstPreviousMessage);
	},

	DisplayMessages: function () {
		var lstMessages = Automation.GetPreviousMessages();
		var strHtml = "";

		lstMessages.forEach(function (message) {
			if (message.css.contains('sent'))
				strHtml += "<div class='chatmsg " + message.css + "'><p>" + message.message + "</p><span class='timestamp'>" + message.timestamp + "</span></div>"
			else if (message.css == 'divider')
				strHtml += "<hr/>";
			else
				strHtml += "<div class='chatmsg " + message.css + "'><p><a href='javascript:Automation.ProcessDirective(\"" + message.message + "\")'>" + message.message + "</a></p><span class='timestamp'>" + message.timestamp + "</span></div>"
		});

		_$("chathistory").innerHTML = strHtml;
	},

	ClearMessages: function () {
		Automation.SetPreviousMessage([]);
	}
}

var DirectiveEditor = {

	OnSuggest: function (cm, option) {
		var cursor = cm.getCursor(), line = cm.getLine(cursor.line)
		let iPos = cm.indexFromPos(cursor);

		line = line.substr(0, cursor.ch);

		if (StringUtil.InString(line, "//"))
			return null;

		if (StringUtil.IsEmpty(line))
			return null;

		let iOffset = line.length;
		let sSearch = "";
		for (var i = line.length - 1; i >= 0; i--) {
			let ch = line[i];
			if (isLetter(ch)) {
				sSearch = ch + sSearch;
				iOffset--;
			}
			else {
				break;
			}
		}

		if (StringUtil.IsEmpty(sSearch))
			return null;


		let oRes = DirectiveEditor.Symbols.filter(x => !StringUtil.IsEmpty(sSearch) && StringUtil.StartsWith(x.SymbolName, sSearch) /* && sSearch != x.SymbolName*/);
		let oRes2 = AutomationSettings.SavedDirectives.filter(x => !StringUtil.IsEmpty(line) && StringUtil.StartsWith(x.Directive, line));


		var results = [];

		for (let i = 0; i < oRes2.length; i++)
			results.push(oRes2[i].Directive);

		for (let i = 0; i < oRes.length && i < 10; i++)
			results.push(oRes[i].SymbolName);


		if (results.length > 0) {
			var iStartingOffset = iOffset;
			var iLength = sSearch.length;

			return {
				list: results,
				from: cm.posFromIndex(iStartingOffset),
				to: cm.posFromIndex(iStartingOffset + iLength)
				//from: CodeMirror.Pos(cursor.line, iStartingOffset),
				//to: CodeMirror.Pos(cursor.line, iStartingOffset + iLength)			
			}
		}
		else
			return null;
	},

	OnEnter: function (cm) {
		let sDirective = Directives.GetDirective();
		Automation.ProcessDirective(sDirective);
	},

	Symbols: []
};

var ExcludedIntelliSenseTriggerKeys =
{
	"8": "backspace",
	"9": "tab",
	"13": "enter",
	"16": "shift",
	"17": "ctrl",
	"18": "alt",
	"19": "pause",
	"20": "capslock",
	"27": "escape",
	"33": "pageup",
	"34": "pagedown",
	"35": "end",
	"36": "home",
	"37": "left",
	"38": "up",
	"39": "right",
	"40": "down",
	"45": "insert",
	"46": "delete",
	"91": "left window key",
	"92": "right window key",
	"93": "select",
	"107": "add",
	"109": "subtract",
	"110": "decimal point",
	"111": "divide",
	"112": "f1",
	"113": "f2",
	"114": "f3",
	"115": "f4",
	"116": "f5",
	"117": "f6",
	"118": "f7",
	"119": "f8",
	"120": "f9",
	"121": "f10",
	"122": "f11",
	"123": "f12",
	"144": "numlock",
	"145": "scrolllock",
	"186": "semicolon",
	"187": "equalsign",
	"188": "comma",
	"189": "dash",
	//"190": "period",
	"191": "slash",
	"192": "graveaccent",
	"220": "backslash",
	"222": "quote"
}


function isLetter(str) {
	return str.length === 1 && str.match(/[a-z]/i);
}