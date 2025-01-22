function SelectNewestSheet() {
	let ddl = _$("ddlTables");
	let sSheetName = ddl.options[ddl.options.length - 1].value;
	ControlUtil.SetValue(ddl, sSheetName);
}



function UpdateProgress(percent) {
	if (percent > 0)
		_$("progressBar").removeClass("hidden");
	if (percent >= 100)
		_$("progressBar").addClass("hidden");

	_$("progressBar").value = Math.round(percent);
}

