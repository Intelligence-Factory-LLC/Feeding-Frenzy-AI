let connection = new signalR.HubConnectionBuilder()
	.withUrl("/notifications", {
		skipNegotiation: true,
		transport: signalR.HttpTransportType.WebSockets
	})
	.configureLogging(signalR.LogLevel.Information)
	.build();

connection.Processed = [];

/** 
 * A map of messageType -> array of callback functions 
 * that can be registered from other pages (e.g. LoggingWorkbench).
 */
connection.CustomHandlers = {};

/** 
 * Allows pages (like LoggingWorkbench) to install extra handlers for specific message types.
 */
connection.RegisterHandler = function (messageType, callback) {
	if (!connection.CustomHandlers[messageType]) {
		connection.CustomHandlers[messageType] = [];
	}
	connection.CustomHandlers[messageType].push(callback);
};

connection.ReceiveMessageProcessor = function (message) {
	console.log(`Message received - ${message}`)

	let sMessage = message;
	if (typeof message == 'string')
		message = JSON.parse(message);

	// NEW: fire any custom-registered handlers for this message type
	if (connection.CustomHandlers[message.MessageType]) {
		connection.CustomHandlers[message.MessageType].forEach(function (callback) {
			callback(message);
		});
	}

	//Note: The custom handlers need to do their own de-duplication if needed.
	if (connection.Processed.any(x => x == sMessage))
		return;

	connection.Processed.push(sMessage);


	let oNotification = null;

	if (message.MessageType == "LeadCalledIn") {
		let lead = message.Payload.Lead;
		let sName = lead.FirstName + " " + lead.LastName;
		let sLink = "<a href='/lead?LeadID=" + lead.LeadID + "'>Open Lead</a>";

		let sNotification = sName + " is calling the main office line (Lead# " + lead.LeadID + ")";
		oNotification = { Title: 'Lead Calling', Text: sNotification, Link: '/lead?LeadID=' + lead.LeadID };

		UserMessages.DisplayNow(sNotification + "<br />" + sLink, "Info", true);
	}

	else if (message.MessageType == "LeadOpenedEmail") {
		let lead = message.Payload.Lead;
		let note = message.Payload.LeadNote;
		let sName = lead.FirstName + " " + lead.LastName;
		let sLink = "<a href='/lead?LeadID=" + lead.LeadID + "'>Open Lead</a>";

		let sNotification = sName + " opened email " + note.Notes + " (Lead# " + lead.LeadID + ")";
		oNotification = { Title: 'Lead Opened Email', Text: sNotification, Link: '/lead?LeadID=' + lead.LeadID };

		UserMessages.DisplayNow(sNotification + "<br />" + sLink, "Info", true);
	}


	else if (message.MessageType == "LeadSentEmail") {
		let lead = message.Payload.Lead;
		let note = message.Payload.LeadNote;
		let sName = lead.FirstName + " " + lead.LastName;
		let sLink = "<a href='/lead?LeadID=" + lead.LeadID + "'>Open Lead</a>";

		let sNotification = sName + " sent an email " + note.Notes + " (Lead# " + lead.LeadID + ")";
		oNotification = { Title: 'Lead Sent Email', Text: sNotification, Link: '/lead?LeadID=' + lead.LeadID };

		UserMessages.DisplayNow(sNotification + "<br />" + sLink, "Info", true);
	}

	else if (message.MessageType == "LeadSMS") {
		let lead = message.Payload.Lead;
		let note = message.Payload.MessageText;
		let sName = lead.FirstName + " " + lead.LastName;
		let sLink = "<a href='/lead?LeadID=" + lead.LeadID + "'>Open Lead</a>";

		let sNotification = "Lead " + sName + " SMS: " + StringToPhone(message.Payload.SentByPhone) + " " + message.Payload.MessageText;
		let sNotification2 = "Lead " + sName + " SMS:<br/> " + StringToPhone(message.Payload.SentByPhone) + " " + message.Payload.MessageText;

		oNotification = {
			Title: StringToPhone(message.Payload.SentByPhone),
			Text: sNotification, Link: '/lead?LeadID=' + message.Payload.LeadID
		};

		UserMessages.DisplayNow(sNotification2 + "<br />" + sLink, "Info", true);
	}

	else if (message.MessageType == "LeaseAquired") {

		if (ObjectUtil.HasValue(window["iObjectID"]) && ObjectUtil.HasValue(window["ObjectName"])) {

			let lease = message.Payload;
			if (iObjectID == lease.ObjectID && ObjectName == lease.ObjectName) {
				DisplayLease(lease);
			}
		}

	}

	else if (message.MessageType == "LeaseRemoved") {

		if (ObjectUtil.HasValue(window["iObjectID"]) && ObjectUtil.HasValue(window["ObjectName"])) {

			let lease = message.Payload;
			if (iObjectID == lease.ObjectID && ObjectName == lease.ObjectName) {
				RemoveLease(lease);
			}
		}

	}


	else if (message.MessageType == "ReviewerPatientSMS") {
		let sNotification = "Patient " + message.Payload.PatientID + " SMS: " + StringToPhone(message.Payload.SentByPhone) + " " + message.Payload.MessageText;
		let sNotification2 = "Patient " + message.Payload.PatientID + " SMS:<br/> " + StringToPhone(message.Payload.SentByPhone) + " " + message.Payload.MessageText;
		oNotification = {
			Title: StringToPhone(message.Payload.SentByPhone),
			Text: sNotification, Link: '/reviewer/patient?PatientID=' + message.Payload.PatientID
		};

		let sLink = "<a href='/reviewer/patient?PatientID=" + message.Payload.PatientID + "'>Open Patient</a>";

		UserMessages.DisplayNow(sNotification2 + "<br />" + sLink, "Info", true);


		if (ObjectUtil.HasValue(window["iObjectID"]) && ObjectUtil.HasValue(window["ObjectName"])) {

			if (iObjectID == message.Payload.PatientID && ObjectName == "Patient" && null != OnRefreshMessages) {
				OnRefreshMessages();
			}
		}
	}

	else if (message.MessageType == "POBPatientSMS") {
		let sNotification = "Patient " + message.Payload.PatientID + " SMS: " + StringToPhone(message.Payload.SentByPhone) + " " + message.Payload.MessageText;
		let sNotification2 = "Patient " + message.Payload.PatientID + " SMS:<br/> " + StringToPhone(message.Payload.SentByPhone) + " " + message.Payload.MessageText;
		oNotification = {
			Title: StringToPhone(message.Payload.SentByPhone),
			Text: sNotification, Link: '/onboarders/patient-status-panel?PatientID=' + message.Payload.PatientID
		};

		let sLink = "<a href='/onboarders/patient-status-panel?PatientID=" + message.Payload.PatientID + "'>Open Patient</a>";

		UserMessages.DisplayNow(sNotification2 + "<br />" + sLink, "Info", true);

		if (ObjectUtil.HasValue(window["iObjectID"]) && ObjectUtil.HasValue(window["ObjectName"])) {

			if (iObjectID == message.Payload.PatientID && ObjectName == "Patient" && OnRefreshMessages) {
				OnRefreshMessages();
			}
		}
	}
	else if (message.MessageType == "GenericMessage") {

		if (message.Formats.contains("Notification")) {
			let sNotification = "Message: " + message.Payload;
			oNotification = {
				Title: message.Title || "RPM CRM Message",
				Text: sNotification,
				Link: message.Link
			};
		}

		if (message.Formats.contains("UserMessage")) {
			UserMessages.DisplayNow(message.UserMessage, "Info", true);
		}

		if (message.Formats.contains("Modal")) {
			_$("divSignalRMessages_Title").innerHTML = message.Title || "RPM CRM Message";
			_$("divSignalRMessages_Message").innerHTML = message.Payload;
			Page.Modals["divSignalRMessages"].ShowContent();
		}
	}
	else if (message.MessageType == "ProgressMessage") {

		_$("progressMessaging").removeClass("hidden");
		_$("progressMessaging").value = message.Payload;
		_$("progressMessaging").title = message.UserMessage;
	}

	if (null != oNotification) {
		if (!window.Notification) {
			console.log('Browser does not support notifications.');
		} else {
			// check if permission is already granted
			if (Notification.permission === 'granted') {
				var notify = new Notification(oNotification.Title, {
					body: oNotification.Text,
					icon: 'https://admin.medekrpm.com/images/icons/circle-green-16.png',
					tag: oNotification.Link
				});
				notify.addEventListener('click', function () {
					window.open(oNotification.Link);
				});
			} else {
				// request permission from user
				Notification.requestPermission().then(function (p) {
					if (p === 'granted') {
						// show notification here
					} else {
						console.log('User blocked notifications.');
					}
				}).catch(function (err) {
					console.error(err);
				});
			}
		}
	}


}

connection.on("ReceiveMessage", connection.ReceiveMessageProcessor);

connection.on("ReceiveMessageToCaller", function (id, message) {
	console.log(`${id} - ${message}`)

});

connection.on("RegisterUser", function (id) {
	console.log(`${id} - Here from RegisterUser method`)
});

connection.on("GetUsers", function (users) {
	console.log('Here from GetUsers method');
	console.log(users)
});

connection.onclose(async () => {

});

// Log connection start
connection.start().then(() => {
	console.log("Connection started successfully.");
}).catch(err => {
	console.error("Connection failed:", err);
});
