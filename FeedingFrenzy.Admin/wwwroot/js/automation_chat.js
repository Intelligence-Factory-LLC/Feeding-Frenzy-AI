
Page.AddOnload(function () {
	const chatSidebar = _$("chatSidebar");

	// Load settings from local storage
	ChatAgent.load();

	// Set initial state based on ChatAgentSettings
	if (ChatAgent.Settings.ShowSideBar) {
		ToggleChatSidebarOn();
	} else {
		ToggleChatSidebarOff();
	}

	// Hide chat sidebar when clicking outside
	document.addEventListener('click', (event) => {
		if (
			!chatSidebar.hasClass('hidden') &&        // Chat is visible
			!chatSidebar.contains(event.target) &&    // Click is outside the sidebar
			!event.target.closest('.dropdown')  &&      // Click is not on the toggle button
			!event.target.closest('.new-chat-link')
		) {
			ToggleChatSidebarOff();
		}
	});

	RestoreChatHistory();

	// Prevent sidebar from hiding while interacting with its elements
	chatSidebar.addEventListener('focusin', () => {
		// Prevent unintended hiding
		// You can implement logic here if needed
	});

	// Set initial state on page load for maximize and restore buttons
	const maximizeBtn = _$("maximizeBtn");
	const restoreBtn = _$("restoreBtn");

	if (maximizeBtn && restoreBtn) {
		maximizeBtn.style.display = 'inline-block';
		restoreBtn.style.display = 'none';
	}

	// Add event listener to send message on Enter key press
	const messageInput = _$("messageInput");
	messageInput.addEventListener('keydown', function (event) {
		if (event.key === 'Enter') {
			sendMessage();
			event.preventDefault();
		}
	});
});

Page.AddOnUnload(function () {
	// Save settings to local storage
	ChatAgent.save();
});



function sendMessage() {
	const messageInput = document.getElementById('messageInput');
	const chatWindow = document.getElementById('chatWindow');
	const message = messageInput.value.trim();

	if (!message) return;

	// Display the user's message
	const userMessage = document.createElement('div');
	userMessage.className = 'chat-message user-message';
	userMessage.textContent = message;
	chatWindow.appendChild(userMessage);

	ChatAgent.Settings.History.push({ MessageType: "User", Message: message });

    // Display a loading indicator
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = `<i class="mdi mdi-loading mdi-spin"></i> Waiting for response...`;
    chatWindow.appendChild(loader);

    // Clear the input field
    messageInput.value = '';

    FeedingFrenzyAgent.ProcessDirective(ChatAgent.Settings.SessionKey, message, function (oRes) {

		try {
			console.log(oRes);

            // Remove loading indicator
            if (chatWindow.contains(loader)) {
                chatWindow.removeChild(loader);
            }

			let responseText = '';

			if (oRes && ObjectUtil.HasValue(oRes.SessionKey)) {
				if (ChatAgent.Settings.SessionKey !== oRes.SessionKey ||
					oRes.Request.Entities[0].PrototypeName !== ChatAgent.Settings.Entity) {
					//DisplayModality(oRes.Request.Modality);
					let oEntities = HandleEntities(oRes.Request);
					if (oEntities.length > 0) {
						DisplayEntitySelection(oEntities);
					}
					else {
						DisplayModality(oRes.Request.Modality);
					}
				}

				ChatAgent.Settings.SessionKey = oRes.SessionKey;

				if (oRes.Request.Entities[0].PrototypeName)
					ChatAgent.Settings.Entity = oRes.Request.Entities[0].PrototypeName;
				else 
					ChatAgent.Settings.Entity = null;

				ChatAgent.save(); // save before any navigation
			}

            if (!oRes || oRes.ResultType === 'Error') {
				// If no response or error result, show an error message
				DisplayTextResponse("I’m still learning. Can you ask that in another way?", false);

                // Log the server error if available
                if (oRes && oRes.ErrorMessage) {
                    console.error("Server Error:", oRes.ErrorMessage);
                }
            }
            else if (oRes.ResultType === "ProtoScript Result") {
                // Handle ProtoScript results
                let oPrototypes = ConvertPrototypeToJs(oRes.ProtoScriptResult);

                if ($type(oPrototypes) == 'string') {
					DisplayTextResponse(oPrototypes, true);
				}

				else if ($type(oPrototypes) == 'object') {
					// If it's an object/array, process each prototype
					console.log(JSON.stringify(oPrototypes, null, 2));

					ProcessJavascriptAction(oPrototypes)
				}
				else {
                    // If it's an object/array, process each prototype
					console.log(JSON.stringify(oPrototypes, null, 2));


                    // Assuming oPrototypes is iterable
                    oPrototypes.each(function (oPrototype) {
						ProcessJavascriptAction(oPrototype);
                    });
                }
			}
			else if (oRes.ResultType === "Markdown")
			{
				// Handle Markdown results
				DisplayMarkdownResponse(oRes.Result, true);
			}

			else if (oRes.ResultType == "JSON")
			{
				//	{ "InformationNeeded": "", "IsAnswerable": false, "IsUnrelatedMessage": true, "Response": "" }
				if (!StringUtil.IsEmpty(oRes.InformationNeeded)) {
					DisplayTextResponse(oRes.InformationNeeded, false)
				}
				else if (oRes.IsAnswerable) {
					DisplayMarkdownResponse(oRes.Response, true);
				}
			}

            else if (oRes.ResultType === "SQL" && oRes.Data) {
                // Handle SQL results
				console.log(oRes.Data.NumRows + " in " + oRes.Data.Time + "ms.");
				oRes.Data.SQL = oRes.GeneratedSQL;
				DisplaySQLResponse(oRes.Data, true);
			}

			else if (oRes.ResultType === "UnknownRequest") {

				DisplayTextResponse(oRes.Result, false);

				// Handle text results
				if (oRes.Options && oRes.Options.length > 0) {
					oRes.Options.each(function (oOption) {
						DisplayTextResponse(oOption, false);
					});
				}


			}
            else {
                // Fallback for unknown result types
				DisplayTextResponse("I’m still learning. Can you ask that in another way?", false);
            }


        } catch (error) {
            // Catch any unexpected errors in the callback code execution
            if (chatWindow.contains(loader)) {
                chatWindow.removeChild(loader);
            }

			DisplayErrorResponse("An error occurred while processing your request. Please try again later.");
            console.error("Chat Callback Error:", error);
        }
    });
}

function HandleEntities(data) {
	const actions = [];

	if (data.Entities && data.Entities.length > 0) {
		data.Entities.forEach(entity => {
			entity = ConvertPrototypeToJs(entity);

			let action = null;
			let description = null;

			if (entity.TypeOf.some(c => c.PrototypeName === "LeadsRow")) {
				const objectId = entity.ObjectID;
				description = `Lead #${objectId}`;
				action = {
					PrototypeName: "NavigateToUrl",
					Url: '/lead',
					Parameters: [{ Name: 'LeadID', Value: objectId }]
				};
			} else if (entity.TypeOf.some(c => c.PrototypeName === "SalesRepresentativesRow")) {
				const objectId = entity.ObjectID;
				description = `Sales Representative #${objectId}`;
				action = {
					PrototypeName: "NavigateToUrl",
					Url: '/sales-representative',
					Parameters: [{ Name: 'SalesRepresentativeID', Value: objectId }]
				};
			} else if (entity.TypeOf.some(c => c.PrototypeName === "GoogleDocument")) {
				const documentId = entity.DocumentID;
				description = `Document "${entity.PrototypeName}"`; // Use document name or title if available
				action = {
					PrototypeName: "NavigateToUrl",
					Url: 'https://docs.google.com/document/d/"',
					Parameters: [{ Name: 'DocumentID', Value: documentId }]
				};
			}

			if (action && description) {
				actions.push({ Description: description, Action: action });
			}
		});
	}

	ChatAgent.Settings.History.push({ MessageType: "Agent", Message: actions, MessageFormat: "entities" });


	return actions;

}
function DisplayEntitySelection(entityList) {
	if (!entityList || entityList.length === 0) return;

	// Create a wrapper for the entire block
	const infoWrapper = document.createElement('div');
	infoWrapper.className = 'small text-muted mt-1 new-chat-link';

	// We'll treat the first entity in the list as the main entity
	const mainEntity = entityList[0];

	// Build the base HTML structure
	infoWrapper.innerHTML = `
        <div>
            <i class="fas fa-info-circle"></i>
            Now chatting about
            <a href="#" class="text-decoration-none text-primary main-entity">${mainEntity.Description}</a>.
            You may ask follow-up questions.

            <!-- We only show this "Also explore" section if there's more than one entity -->
            <div class="mt-2 optional-entities" style="display: none;">
                Also explore:
                <ul class="entity-list" style="margin: 0; padding-left: 1.2rem;"></ul>
            </div>

            <a href="javascript:void(0);" onclick="newChat()" class="text-decoration-none ms-2">
                Start a new chat
            </a> 
            to discuss a different topic.
        </div>
    `;

	// Reference to the chat window
	const chatWindow = document.getElementById('chatWindow');

	// Get the link for the main entity and add a click listener
	const mainEntityLink = infoWrapper.querySelector('.main-entity');
	mainEntityLink.addEventListener('click', (event) => {
		event.preventDefault();      // Prevent default <a> navigation
		event.stopPropagation();     // Prevent any outside click listener from closing the sidebar
		ProcessJavascriptAction(mainEntity.Action);
	});

	// If there's more than one entity, display them as optional items
	if (entityList.length > 1) {
		const optionalEntitiesContainer = infoWrapper.querySelector('.optional-entities');
		const entityListElement = infoWrapper.querySelector('.entity-list');

		// Show the "Also explore" section
		optionalEntitiesContainer.style.display = 'block';

		// Loop through the rest of the entities and append them
		for (let i = 1; i < entityList.length; i++) {
			const entity = entityList[i];
			const listItem = document.createElement('li');
			listItem.style.marginBottom = '0.25rem';

			// Create the clickable link
			const entityLink = document.createElement('a');
			entityLink.href = '#';
			entityLink.className = 'text-decoration-none text-primary';
			entityLink.textContent = entity.Description;

			entityLink.addEventListener('click', (event) => {
				event.preventDefault();     // Prevent default <a> navigation
				event.stopPropagation();    // Prevent outside click listeners from firing
				ProcessJavascriptAction(entity.Action);
			});

			listItem.appendChild(entityLink);
			entityListElement.appendChild(listItem);
		}
	}

	// Append our entire block to the chat window
	chatWindow.appendChild(infoWrapper);
	chatWindow.scrollTop = chatWindow.scrollHeight;
}


function handleFeedback(feedbackType, responseText) {
	console.log(`Feedback: ${feedbackType}, Response: ${responseText}`);
	alert(`Thank you for your feedback: ${feedbackType === 'up' ? '👍' : '👎'}`);

}


function clearHistory() {
	// Clear the history in ChatAgent settings
	ChatAgent.Settings.History = [];

	// Clear the chat window, keeping the initial chatbot message
	const chatWindow = _$("chatWindow");
	chatWindow.innerHTML = '';

	// Add the initial chatbot message back
	const initialMessage = document.createElement('div');
	initialMessage.className = 'chat-message chatbot-message';
	initialMessage.innerHTML = `
        <i class="mdi mdi-robot-outline" style="font-size: 20px; color: #007bff; vertical-align: middle;"></i>
        Hello! How can I assist you today?
    `;
	chatWindow.appendChild(initialMessage);
	chatWindow.scrollTop = chatWindow.scrollHeight;
}

function newChat() {
	// Reset the SessionKey and clear history
	ChatAgent.Settings.SessionKey = null;
	clearHistory();
	FeedingFrenzyAgent.Reset();
}

function ConvertPrototypeToJs(prototype) {
	var js = {};

	if (StringUtil.StartsWith(prototype.PrototypeName, "System.String"))
		return StringUtil.Between(prototype.PrototypeName, "[", "]");

	if (StringUtil.StartsWith(prototype.PrototypeName, "System.Int32"))
		return StringUtil.Between(prototype.PrototypeName, "[", "]");

	if (StringUtil.StartsWith(prototype.PrototypeName, "Ontology.Collection")) {
		let children = [];
		if (prototype.Children) {
			prototype.Children.each(x => {
				children.push(ConvertPrototypeToJs(x))
			});
		}
		return children;
	}



	Object.entries(prototype).each(function (pair) {
		if (["PrototypeID", "PrototypeName"].contains(pair[0]))
			js[pair[0]] = pair[1];

		else {
			if (!pair[0].contains("."))
				js[pair[0]] = pair[1];		//allow this to be called serially

			else if ($type(pair[1]) == 'object')
				js[StringUtil.RightOfLast(pair[0], ".")] = ConvertPrototypeToJs(pair[1]);
		}
		//else

	});

	return js;
}

function DisplayModality(modalityType) {
	// Determine the text based on the modality
	let modalityText;
	switch (modalityType) {
		case "GoogleDocument":
			modalityText = "Now chatting about a Google Document";
			break;
		case "LeadsRow":
			modalityText = "Now chatting about a Lead";
			break;
		case "SalesRepresentativesRow":
			modalityText = "Now chatting about a Sales Representative";
			break;
		default:
			modalityText = "Now chatting about an unknown topic";
			break;
	}

	// Create the container for the modality message
	const modalityContainer = document.createElement('div');
	modalityContainer.className = 'small text-muted mt-1 new-chat-link';

	// Insert the message and info text
	modalityContainer.innerHTML = `
        <div class="">
            <i class="fas fa-info-circle"></i>
            ${modalityText}. You may ask follow-up questions. <a href="javascript:void(0);" onclick="newChat()" class="text-decoration-none">Start a new chat</a> to discuss a different topic.
        </div>
    `;

	ChatAgent.Settings.History.push({ MessageType: "Agent", Message: modalityText, MessageFormat: "modality" });

	// Append to the chat window
	const chatWindow = document.getElementById('chatWindow');
	chatWindow.appendChild(modalityContainer);
	chatWindow.scrollTop = chatWindow.scrollHeight;
}

function DisplayTextResponse(responseText, bFeedback) {
	const botResponse = document.createElement('div');
	botResponse.className = 'chat-message chatbot-message d-flex flex-column';
	botResponse.textContent = responseText;

	ChatAgent.Settings.History.push({ MessageType: "Agent", Message: responseText, MessageFormat: "text" });

	if (bFeedback) {
		botResponse.appendChild(GetFeedbackContainer());
	}

	// Append the bot response to the chat window
	const chatWindow = document.getElementById('chatWindow');
	chatWindow.appendChild(botResponse);
	chatWindow.scrollTop = chatWindow.scrollHeight;
}

function DisplayMarkdownResponse(responseText, bFeedback) {
	const botResponse = document.createElement('div');
	botResponse.className = 'chat-message chatbot-message d-flex flex-column';

	const htmlContent = marked.parse(responseText);
	botResponse.innerHTML = htmlContent;

	ChatAgent.Settings.History.push({ MessageType: "Agent", Message: responseText, MessageFormat: "markdown" });

	if (bFeedback) {
		botResponse.appendChild(GetFeedbackContainer());
	}

	// Append the bot response to the chat window
	const chatWindow = document.getElementById('chatWindow');
	chatWindow.appendChild(botResponse);
	chatWindow.scrollTop = chatWindow.scrollHeight;
}





function DisplayErrorResponse(responseText) {
	const errorMessage = document.createElement('div');
	errorMessage.className = 'chat-message chatbot-message text-danger fw-bold';
	errorMessage.textContent = responseText;

	// Append the bot response to the chat window
	const chatWindow = document.getElementById('chatWindow');
	chatWindow.appendChild(errorMessage);
	chatWindow.scrollTop = chatWindow.scrollHeight;
}


function DisplaySQLResponse(oData, bFeedback) {
	const botResponse = document.createElement('div');
	botResponse.className = 'chat-message chatbot-message d-flex flex-column';

	if (bFeedback) { //If no feedback this is probably from history
		// Store SQL result in history for later restoration
		ChatAgent.Settings.History.push({
			MessageType: "Agent",
			Message: JSON.stringify(oData),
			MessageFormat: "sql"
		});
	}

	// Ensure table data is parsed from string if needed
	if (typeof oData.Table === 'string') {
		oData.Table = JSON.parse(oData.Table);
	}

	// Build the table
	const tableHTML = BuildResultsAsTable(oData.Table, oData.Columns);

	// Create Bootstrap Card
	const cardContainer = document.createElement('div');
	cardContainer.className = 'row';

	const cardCol = document.createElement('div');
	cardCol.className = 'col-12'; // Ensure it takes full width

	const card = document.createElement('div');
	card.className = 'card border-primary shadow-sm';

	// Card Header
	const cardHeader = document.createElement('div');
	cardHeader.className = 'card-header d-flex justify-content-between align-items-center bg-light';

	// Title
	const headerTitle = document.createElement('h4');
	headerTitle.className = 'header-title mb-0';
	headerTitle.textContent = 'Query';

	// SQL Open Editor Button
	const sqlEditorButton = document.createElement('button');
	sqlEditorButton.type = 'button';
	sqlEditorButton.className = 'btn btn-sm btn-blue waves-effect waves-light float-end';
	sqlEditorButton.innerHTML = `<i class="mdi mdi-pencil me-1"></i> SQL: Open Editor`;
    sqlEditorButton.onclick = () => {
        ToggleChatSidebarOff();
        window.location.href = '/sql-workbench?sql=' + oData.SQL;
    };

	// Assemble Header
	cardHeader.appendChild(headerTitle);
	cardHeader.appendChild(sqlEditorButton);

	// Card Body
	const cardBody = document.createElement('div');
	cardBody.className = 'card-body p-2';

	// Table Container
	const tableContainer = document.createElement('div');
	tableContainer.className = 'table-responsive'; // Ensure horizontal scroll if needed
	tableContainer.style.overflowX = 'auto'; // Enforce horizontal scrolling if overflow happens
	tableContainer.innerHTML = tableHTML;


	// Append to Card Body
	cardBody.appendChild(tableContainer);

	// Final Assembly
	card.appendChild(cardHeader);
	card.appendChild(cardBody);
	cardCol.appendChild(card);
	cardContainer.appendChild(cardCol);

	// Append the card to botResponse
	botResponse.appendChild(cardContainer);

	// Adjust chat sidebar height if table is large
	const chatSidebar = document.getElementById('chatSidebar');
	const windowHeight = window.innerHeight;
	if (tableContainer.scrollHeight > 200) {
		chatSidebar.style.height = Math.min(windowHeight - 50, tableContainer.scrollHeight + 150) + 'px';
	}
	maximizeChat();

	if (bFeedback) {
		botResponse.appendChild(GetFeedbackContainer());
	}

	// Append the bot response to the chat window
	const chatWindow = document.getElementById('chatWindow');
	chatWindow.appendChild(botResponse);
	chatWindow.scrollTop = chatWindow.scrollHeight;
}





function GetFeedbackContainer() {
	// Add feedback buttons (thumbs up)
	const feedbackContainer = document.createElement('div');
	feedbackContainer.className = 'd-flex mt-2 gap-2';

	const thumbUp = document.createElement('button');
	thumbUp.className = 'btn btn-outline-success btn-sm';
	thumbUp.innerHTML = '<i class="mdi mdi-thumb-up"></i>';
	thumbUp.onclick = () => handleFeedback('up', responseText);

	feedbackContainer.appendChild(thumbUp);

	return feedbackContainer
}

function ProcessJavascriptAction(action) {
	if (action.TypeOf.any(x => StringUtil.StartsWith(x.PrototypeName, "APICall"))) {
		DisplayTextResponse(`Calling API...`);
		CallAPI(action, function (res) {
			DisplayTextResponse(res);
		});
	}

	else if (StringUtil.StartsWith(action.PrototypeName, "NavigateToUrl")) {
		NavigateToUrl(action);
	}

}

function NavigateToUrl(action) {
	let sUrl = action.Url;
	const oParams = {};
	action.Parameters.forEach(oParam => {
		oParams[oParam.Name] = oParam.Value;
	});

	DisplayTextResponse(`Navigating to ${sUrl}...`);
	//Write immediatly 
	ChatAgent.save();

	// Determine if the URL is external
	let bIsExternal = false;
	try {
		const url = new URL(sUrl, window.location.origin);
		bIsExternal = url.origin !== window.location.origin;
	} catch (e) {
		// If URL constructor fails, assume it's internal
		bIsExternal = false;
	}

	Page.Redirect(sUrl, oParams, bIsExternal ? "_blank" : "_self");
}

function CallAPI(action, cb) {
	const oParams = {};
	action.Parameters.forEach(oParam => {
		oParams[oParam.Name] = oParam.Value;
	});
	oParams["Method"] = action.Method;

	const bearerToken = '3e95212f-4bf6-498f-8657-316ab305cd76'; // Replace with your actual token

	fetch(action.BaseUrl + action.Method, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${bearerToken}`
		},
		body: JSON.stringify(oParams)
	})
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then(data => {
			cb(data);
		})
		.catch(error => {
			Page.HandleUnexpectedError(error);
		});
}


function BuildResultsAsTable(oRes, oCols) {
	var oColumns = [];
	if (oRes.length > 0) {
		oCols.each(function (oKey) {
			oColumns.push(oKey);
		})
	}

	var tbl = [table, { "class": "table table-sm table-striped table-bordered table-hover table-responsive", style: "" },
		["thead", { "class": "table-light", style: "position: sticky; top: 0; z-index: 10; background-color: #f8f9fa;" }, [tr]]
	];

	oColumns.each(function (oCol) {
		tbl[2][2].push([th, oCol])
	})

	oRes.each(function (oRow) {
		var oTr = [tr];
		oColumns.each(function (oCol) {
			var oVal = oRow[oCol];
			oTr.push([td, FormatValue(oVal)]);
		});

		tbl.push(oTr);
	})

	console.log(tbl);
	return $$$(tbl).outerHTML;

}

function FormatValue(oVal) {
	if (null == oVal)
		return "NULL";

	return new String(oVal);
}




/////////////////Chat Window Controls/////////////////
const ChatAgent = {
	Settings: {
		ShowSideBar: true,
		SessionKey: "",
		History: []
	},

	load: function () {
		const savedSettings = new LocalStorage().get("ChatAgentSettings");
		if (savedSettings) {
			try {
				this.Settings = JSON.parse(savedSettings);
			} catch (e) {
				console.error("Failed to parse ChatAgentSettings from local storage:", e);
			}
		}
	},

	save: function () {
		new LocalStorage().set("ChatAgentSettings", JSON.stringify(this.Settings));
	}
};


function ClearHistory() {
	ChatAgent.Settings.History = [];
	const chatWindow = document.getElementById('chatWindow');
	chatWindow.innerHTML = '';
}

function toggleChatSidebar(event) {
	if (event) {
		event.preventDefault(); // Prevent default anchor link behavior
	}

	const chatSidebar = _$("chatSidebar");

	// Decide which method to call based on the current state
	if (chatSidebar.hasClass('hidden')) {
		ToggleChatSidebarOn();
	} else {
		ToggleChatSidebarOff();
	}
}

function ToggleChatSidebarOn() {
	const chatSidebar = _$("chatSidebar");
	chatSidebar.removeClass('hidden'); // Show chat window
	chatSidebar.focus();               // Set focus to chat window
	ChatAgent.Settings.ShowSideBar = true;
}

function ToggleChatSidebarOff() {
	const chatSidebar = _$("chatSidebar");
	chatSidebar.addClass('hidden');    // Hide chat window
	ChatAgent.Settings.ShowSideBar = false;
}


function RestoreChatHistory() {
	// Load messages from history to the chat window
	const chatWindow = _$("chatWindow");

	ChatAgent.Settings.History.forEach(message => {
		// If it's a user message, just display it as text
		if (message.MessageType === "User") {
			const userMessage = document.createElement('div');
			userMessage.className = 'chat-message user-message';
			userMessage.textContent = message.Message;
			chatWindow.appendChild(userMessage);
		}
		// Otherwise, it's from the agent—decide how to render it
		else {
			const botResponse = document.createElement('div');
			botResponse.className = 'chat-message chatbot-message d-flex flex-column';

			// Use a custom property to decide rendering (e.g., MessageFormat: "text", "markdown", "sql", etc.)
			switch (message.MessageFormat) {
				case "markdown":
					// Render as Markdown
					botResponse.innerHTML = marked.parse(message.Message);
					chatWindow.appendChild(botResponse);
					break;

				case "sql":
					// Render as a table (assuming the message contains SQL result data in stringified form)
					// This is very simplified; in practice you'd parse columns/data again.
					let oData = JSON.decode(message.Message);
					if (typeof oData.Table === 'string') {
						oData.Table = JSON.decode(oData.Table);
					}

					DisplaySQLResponse(oData, false); // Display without feedback (as it's a history item)

					break;

				case "modality":
					// Restore modality message
					const modalityContainer = document.createElement('div');
					modalityContainer.className = 'small text-muted mt-1 new-chat-link';
					modalityContainer.innerHTML = `
                <div class="">
                    <i class="fas fa-info-circle"></i>
                    ${message.Message}. You may ask follow-up questions. 
                    <a href="javascript:void(0);" onclick="newChat()" class="new-chat-link text-decoration-none">Start a new chat</a> to discuss a different topic.
                </div>
            `;
					chatWindow.appendChild(modalityContainer);
					break;

				case "entities":
					// Restore entity selection message
					DisplayEntitySelection(message.Message);
					break;
				default:
					// Render as plain text
					botResponse.textContent = message.Message;
					chatWindow.appendChild(botResponse);
					break;
			}

		}
	});

	// Scroll to bottom
	chatWindow.scrollTop = chatWindow.scrollHeight;
}


function maximizeChat() {
	const sidebar = _$("chatSidebar");
	sidebar.addClass('chat-maximized');
	const maximizeBtn = _$("maximizeBtn");
	const restoreBtn = _$("restoreBtn");
	maximizeBtn.style.display = 'none';
	restoreBtn.style.display = 'inline-block';
}

function restoreChat() {
	const sidebar = _$("chatSidebar");
	sidebar.removeClass('chat-maximized');
	const maximizeBtn = _$("maximizeBtn");
	const restoreBtn = _$("restoreBtn");
	maximizeBtn.style.display = 'inline-block';
	restoreBtn.style.display = 'none';
}
