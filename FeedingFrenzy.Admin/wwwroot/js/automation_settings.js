var AutomationSettings = {
	SavedDirectives: [],
	Application: "Windows.Agent"
}

Page.AddOnLoad(function () {
	var oSettings = Page.LocalStorage.get("AutomationAgent::Settings");
	if (null != oSettings) {
		AutomationSettings = $merge(AutomationSettings, oSettings);
	}
});

Page.AddOnUnload(function () {
	Page.LocalStorage.set("AutomationAgent::Settings", AutomationSettings);
})


//Page.AddOnload(function () {
//	NaturalLanguageService.LoadApplication(AutomationSettings.Application, function () {
//		console.log("Application loaded");
//		NaturalLanguageService.GetSymbols(AutomationSettings.Application, function (oRes) {
//			DirectiveEditor.Symbols = oRes;
//		});
//	});

//	Automation.OnProcessSuccess = Directives.OnDirectiveSuccess;

//});
