var Directives = {

	Process: function (strDirective, f) {

		if (StringUtil.EqualNoCase(strDirective.trim(), "reload")) {
			Directives.OnResetApplication();
			Automation.OnDoneProcessing();
			return;
		}

		Directives.IsProcessing = true;
	},



	SetDirective: function (sMsg) {
		ControlUtil.SetValue("txtDirective", sMsg);
		_$("txtDirective").focus();
		window.editDirective.setValue(sCode);
	},

	OnDirectiveSuccess: function (oRes) {
		if (!StringUtil.IsEmpty(oRes)) {
			console.log(oRes);

			if (oRes.length < 255) {
				UserMessages.DisplayNow(oRes, "Success");
			}
			else {
				_$("spanResultInfo").innerText = oRes;
				jQuery("#divResultModal").modal('show');
			}
		}

	},

	GetDirective: function () {
		return window.editDirective.getValue();
	},

	OnResetApplication: function () {
		Automation.InsertMessage("Application reloaded", "sent");
	
	},

	IsProcessing: false
}
