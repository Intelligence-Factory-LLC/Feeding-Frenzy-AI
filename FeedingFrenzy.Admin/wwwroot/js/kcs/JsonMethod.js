var JsonMethod = {
	EncodeData: false,
	_requestIdCounter: 0,

	// Global fallback handlers if not specified at call-time
	_globalOnError: null,
	_globalOnSessionExpired: null,

	/**
	 * Set global error and session expired handlers.
	 * 
	 * @param {Object} handlers 
	 *  handlers.onError: function(errorObj) - called on general error if not provided in initializer
	 *  handlers.onSessionExpired: function(retryCallback) - called on session expired if not provided in initializer
	 */
	setGlobalHandlers: function (handlers) {
		if (handlers) {
			if (typeof handlers.onError === 'function') {
				this._globalOnError = handlers.onError;
			}
			if (typeof handlers.onSessionExpired === 'function') {
				this._globalOnSessionExpired = handlers.onSessionExpired;
			}
		}
	},

	call: function (sPage, sMethodName, oArgs, fCallBack) {
		// Maintains original signature
		this.callWithInitializer({
			Page: sPage,
			Method: sMethodName,
			Params: oArgs,
			onDataReceived: fCallBack
		});
	},

	callWithInitializer: function (oInitializer) {
		// Determine if call is async or sync based on presence of a callback
		var isAsync = (typeof oInitializer.onDataReceived === 'function');
		var requestID = this._getNextRequestId();

		if (isAsync) {
			this._sendRequest(oInitializer, true, requestID);
		} else {
			this._sendRequest(oInitializer, false, requestID);
		}
	},

	callSync: function (sPage, sMethodName, oArgs, oSerialize) {
		// Synchronous request using XMLHttpRequest
		var requestID = this._getNextRequestId();

		var oInitializer = {
			Page: sPage,
			Method: sMethodName,
			Params: oArgs,
			Serialize: oSerialize,
			// Note: no callbacks provided, so global or console error handling will apply
			onErrorReceived: null,
			onSessionExpired: null,
			onDataReceived: null,
			AuthToken: null
		};

		var headers = {
			'kcs-IsAjax': 'true',
			'kcs-Serialize': JSON.stringify(oInitializer.Serialize || {})
		};

		var bodyData = { Method: sMethodName, ...oArgs };

		if (oInitializer.AuthToken) {
			headers['Authorization'] = 'Bearer ' + oInitializer.AuthToken;
		}

		if (this.EncodeData) {
			bodyData = 'json=' + encodeURIComponent(JSON.stringify(bodyData));
			headers['Content-Type'] = 'application/x-www-form-urlencoded';
		} else {
			headers['Content-Type'] = 'application/json';
			bodyData = JSON.stringify(bodyData);
		}

		var xhr = new XMLHttpRequest();
		xhr.open("POST", sPage, false);
		for (const h in headers) {
			xhr.setRequestHeader(h, headers[h]);
		}

		try {
			xhr.send(bodyData);
		} catch (err) {
			this._handleGeneralError(oInitializer, { Error: err });
			return null;
		}

		return this._handleSyncResponse(xhr, oInitializer, requestID);
	},

	_handleSyncResponse: function (xhr, oInitializer, requestID) {
		var responseText = xhr.responseText;
		var parsed = this._tryParseResponse(responseText);

		if (parsed && parsed.Error) {
			if ((parsed.Error + '').toLowerCase() === "session expired") {
				// Session expired
				this._handleSessionExpired(oInitializer, () => {
					// Retry callback (though sync retry isn't typical, we provide mechanism anyway)
					this._sendRequest(oInitializer, false, requestID);
				});
				return null;
			} else {
				// General error
				this._handleGeneralError(oInitializer, parsed);
				return null;
			}
		}

		return parsed;
	},

	_getNextRequestId: function () {
		return this._requestIdCounter++;
	},

	_sendRequest: function (oInitializer, isAsync, requestID) {
		var headers = {
			'kcs-IsAjax': 'true'
		};

		var serialize = oInitializer.Serialize || {};
		headers['kcs-Serialize'] = JSON.stringify(serialize);

		var bodyData = { Method: oInitializer.Method, ...oInitializer.Params };

		if (this.EncodeData) {
			bodyData = 'json=' + encodeURIComponent(JSON.stringify(bodyData));
			headers['Content-Type'] = 'application/x-www-form-urlencoded';
		} else {
			headers['Content-Type'] = 'application/json';
			bodyData = JSON.stringify(bodyData);
		}

		if (oInitializer.AuthToken) {
			headers['Authorization'] = 'Bearer ' + oInitializer.AuthToken;
		}

		if (isAsync) {
			// Asynchronous request using fetch
			fetch(oInitializer.Page, {
				method: 'POST',
				headers: headers,
				body: bodyData
			})
				.then(response => {
					if (!response.ok) {
						return response.text().then(txt => { throw txt; });
					}
					return response.text();
				})
				.then(responseText => {
					this._handleAsyncResponse(oInitializer, responseText, requestID);
				})
				.catch(err => {
					// Network or unexpected failure
					this._handleGeneralError(oInitializer, { Error: err });
				});

		} else {
			// Synchronous call via XMLHttpRequest
			var xhr = new XMLHttpRequest();
			xhr.open("POST", oInitializer.Page, false);
			for (let h in headers) {
				xhr.setRequestHeader(h, headers[h]);
			}

			try {
				xhr.send(bodyData);
			} catch (err) {
				this._handleGeneralError(oInitializer, { Error: err });
				return;
			}

			this._handleAsyncResponse(oInitializer, xhr.responseText, requestID, xhr.status);
		}
	},

	_handleAsyncResponse: function (oInitializer, responseText, requestID, status = 200) {
		var parsed = this._tryParseResponse(responseText);

		if (parsed && parsed.Error) {
			if ((parsed.Error + '').toLowerCase() === "session expired") {
				this._handleSessionExpired(oInitializer, () => {
					// Retry
					this._sendRequest(oInitializer, (typeof oInitializer.onDataReceived === 'function'), requestID);
				});
			} else {
				this._handleGeneralError(oInitializer, parsed);
			}
		} else {
			// Success
			if (oInitializer.onDataReceived) {
				try {
					oInitializer.onDataReceived(parsed, requestID);
				} catch (err) {
					this._handleGeneralError(oInitializer, { Error: err });
				}
			}
		}
	},

	_tryParseResponse: function (responseText) {
		// Try parse as JSON
		try {
			var data = JSON.parse(responseText);
			//if (data !== null && (Array.isArray(data) || typeof data === 'object')) {
			//	return data;
			//} else {
			//	// If it's a primitive (string/number), return the raw text
			//	return responseText;
			//}
			return data;
		} catch (ex) {
			// Not valid JSON, return as text
			return responseText;
		}
	},

	_handleSessionExpired: function (oInitializer, retryCallback) {
		// If the user provided onSessionExpired, use it
		if (typeof oInitializer.onSessionExpired === 'function') {
			oInitializer.onSessionExpired(retryCallback);
		} else if (typeof this._globalOnSessionExpired === 'function') {
			this._globalOnSessionExpired(retryCallback);
		} else {
			// No handler provided, default behavior: log and do nothing
			console.warn("Session expired and no handler provided to handle it.");
		}
	},

	_handleGeneralError: function (oInitializer, errorObj) {
		if (typeof oInitializer.onErrorReceived === 'function') {
			oInitializer.onErrorReceived(errorObj);
		} else if (typeof this._globalOnError === 'function') {
			this._globalOnError(errorObj);
		} else {
			console.error("Unhandled Error:", errorObj);
		}
	}
};
