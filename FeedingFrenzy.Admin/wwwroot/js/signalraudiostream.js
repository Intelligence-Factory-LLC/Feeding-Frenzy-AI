let realtimeconnection = new signalR.HubConnectionBuilder()
	.withUrl("/audiostream", {
		skipNegotiation: true,
		transport: signalR.HttpTransportType.WebSockets
	})
	.configureLogging(signalR.LogLevel.Information)
	.build();

realtimeconnection.Processed = [];

realtimeconnection.ReceiveMessageProcessor = function (message) {
	console.log(`Message received - ${message}`)

	if (connection.Processed.any(x => x == message))
		return;

	connection.Processed.push(message);

	if (typeof message == 'string')
		message = JSON.parse(message);

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

realtimeconnection.on("ReceiveMessage", connection.ReceiveMessageProcessor);

realtimeconnection.on("ReceiveMessageToCaller", function (id, message) {
	console.log(`${id} - ${message}`)

});

realtimeconnection.on("RegisterUser", function (id) {
	console.log(`${id} - Here from RegisterUser method`)
});

realtimeconnection.on("GetUsers", function (users) {
	console.log('Here from GetUsers method');
	console.log(users)
});

realtimeconnection.onclose(async () => {

});

// Log connection start
realtimeconnection.start().then(() => {
	console.log("Audiostream real time Connection started successfully.");
}).catch(err => {
	console.error("Audiostream Connection failed:", err);
});
