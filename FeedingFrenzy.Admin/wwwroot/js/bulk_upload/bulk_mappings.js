function SetDefaultMappings(schema, bExtendedSearch) {

	let oCols = oDatasetEditor.Columns();
	let oMappings = [];
	oCols.forEach(col => {
		oMappings = oMappings.concat(FindColumnMapping(col, schema, bExtendedSearch));
	});

	oDatasetEditor.Transforms = [];
	oMappings.forEach(x => oDatasetEditor.SetTransform(x));
	BindColumnMappings();
}

function BindColumnMappings() {
	let oMappings = oDatasetEditor.Transforms;
	let oCols = oDatasetEditor.Columns();

	oCols.forEach(col => {
		let oColMappings = oMappings.filter(x => x.SourceName == col.ColumnName);
		oDatasetEditor.GetColumnControl(col).innerHTML = "Not Mapped";
		oDatasetEditor.GetColumnControl(col).style = "";
		oColMappings.forEach(mapping => {

			if (oDatasetEditor.GetColumnControl(col).innerHTML == "Not Mapped")
				oDatasetEditor.GetColumnControl(col).innerHTML = "";

			if (!StringUtil.IsEmpty(oDatasetEditor.GetColumnControl(col).innerHTML))
				oDatasetEditor.GetColumnControl(col).innerHTML += ", "
			oDatasetEditor.GetColumnControl(col).innerHTML += mapping.TargetName;

			if (oMappings.any(x => x.TargetName == mapping.TargetName && x.SourceName != mapping.SourceName))
				oDatasetEditor.GetColumnControl(col).style = "color: red;";
		});
	});

}

function FindColumnMapping(col, schema, bExtendedSearch) {

	if (ObjectUtil.HasValue(schema[col.ColumnName]))
		return [$merge(schema[col.ColumnName], { SourceName: col.ColumnName, TargetName: col.ColumnName })];

	let oResults = Page.LocalSettings.CustomTransforms.filter(x => x.SourceName == col.ColumnName);
	if (oResults.length > 0) {
		oResults.forEach(x => {
			x = $merge(x, { TargetName: col.ColumnName });
		});
		return oResults;
	}

	if (bExtendedSearch) {
		Object.keys(schema).forEach(x => {
			if (StringUtil.InString(x, col.ColumnName.replaceAll(" ", "")) || StringUtil.InString(col.ColumnName, x))
				oResults.push($merge(schema[x], { SourceName: col.ColumnName, TargetName: x }));
		});
	}

	return oResults;
}

function EditColumnMappings(sCol, schema) {
	Page.Modals.divEditColumnTransforms.ShowContent();
	let oTransforms = oDatasetEditor.Transforms.filter(x => x.SourceName == sCol);
	if (oTransforms.length > 0)
		BlindBind("divEditColumnTransforms", oTransforms[0]);
	else
		BlindBind("divEditColumnTransforms", { SourceName: sCol, TargetName: null, Filter: null });


	{
		let list = document.getElementById('dataTargetName');
		list.innerHTML = "";
		Object.keys(schema).forEach(function (item) {
			var option = document.createElement('option');
			option.value = item;
			option.text = item;
			list.appendChild(option);
		});
	}

	{
		let list = document.getElementById('dataFilter');
		list.innerHTML = "";
		Object.keys(CommonFilters).forEach(function (item) {
			var option = document.createElement('option');
			option.value = "CommonFilters." + item;
			option.text = "CommonFilters." + item;
			list.appendChild(option);
		});
	}
}


function OnSaveColumnTransform() {

	Page.Modals.divEditColumnTransforms.HideContent();
	let oTransform = BlindUnbind("divEditColumnTransforms");
	if (StringUtil.IsEmpty(oTransform.TargetName)) {
		UserMessages.DisplayNow("Can't set a blank target", "Error");
		return;
	}

	oTransform = oDatasetEditor.SetTransform(oTransform);
	BindColumnMappings();

	Page.LocalSettings.CustomTransforms.push(oTransform);
}

function OnRemoveColumnTransform() {

	Page.Modals.divEditColumnTransforms.HideContent();
	let oTransform = BlindUnbind("divEditColumnTransforms");
	oTransform = oDatasetEditor.RemoveTransform(oTransform);
	BindColumnMappings();
}


function SaveCurrentMappingsToDB(sFileName) {

	let sJSON = JSON.stringify(oDatasetEditor.Transforms);

	Files.InsertOrUpdateDatabaseFile("Bulk Upload Column Transforms", sFileName, "Column transforms", sJSON, function () {
		UserMessages.DisplayNow("Column transforms updated", "Success");
	})

}

async function LoadCurrentMappingsFromDB(sFileName) {

	let f = new Promise(resolve => {
		Files.GetDatabaseFileContents(sFileName, function (oFile) {
			oDatasetEditor.Transforms = JSON.decode(oFile);
			BindColumnMappings();
			UserMessages.DisplayNow("Column transforms loaded", "Success");

			resolve();
		})
	});

	await f;
}


function DeduplicateCustomTransforms() {
	let oTransforms = [];

	Page.LocalSettings.CustomTransforms.forEach(transform => {
		if (oTransforms.any(x => x.SourceName == transform.SourceName && x.TargetName == transform.TargetName))
			return;

		if (StringUtil.IsEmpty(tranform.TargetName))
			return;

		oTransforms.push(transform);
	})

	Page.LocalSettings.CustomTransforms = oTransforms;

}

function EditCustomTransforms() {
	let oTransforms = Page.LocalSettings.CustomTransforms;
	oTransforms.sort((a, b) => a.SourceName.localeCompare(b.SourceName))
	oDatasetEditor.Sheet = oTransforms;
	PreviewBulkUpload();
}

function SetImportColumnMappings(oSchema) {
	let oCols = oDatasetEditor.Columns();

	let oMappings = [];
	oCols.forEach(col => {

		if (ObjectUtil.IsDefined(oSchema[col.ColumnName]))
			oMappings.push({ SourceName: col.ColumnName, TargetName: col.ColumnName, Filter: null });
		else if (!StringUtil.IsEmpty(col.ColumnName))
			oMappings.push({ SourceName: col.ColumnName, TargetName: "DataObject." + col.ColumnName, Filter: null });
	});

	oDatasetEditor.Transforms = [];
	oMappings.forEach(x => oDatasetEditor.SetTransform(x));
	BindColumnMappings();
}