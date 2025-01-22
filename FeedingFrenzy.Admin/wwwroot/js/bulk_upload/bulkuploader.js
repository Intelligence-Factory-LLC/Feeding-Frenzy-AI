FilesValidatorsFields.Contents = { Validators: [Validators.Text], InvalidMessage: "Invalid Contents. " + ValidatorDescriptions.Required() };
//FilesValidators.InsertFileContents.Contents = FilesValidatorsFields.Contents;
//FilesValidators.UpdateFileContents.Contents = FilesValidatorsFields.Contents;

function ConvertSourceToDestination2(oSourceObject, oColumns) {
	var oDestObject = {};

	Object.keys(oColumns).each(function (oCol) {
		var oMapping = oColumns[oCol];
		if ($defined(oSourceObject[oMapping.SourceName])) {
			if (ObjectUtil.HasValue(oMapping.Filter)) {
				if ($type(oMapping.Filter)=='function')
					oDestObject[oCol]=oMapping.Filter(oSourceObject[oMapping.SourceName], oSourceObject);
				else
					oDestObject[oCol]=oMapping.Filter;
			}
			else {				
				oDestObject[oCol] = oSourceObject[oMapping.SourceName];
			}
		}
		else if (ObjectUtil.HasValue(oMapping.Filter)) {		//default value filter
			if ($type(oMapping.Filter)=='function')
				oDestObject[oCol]=oMapping.Filter(null, oSourceObject);
			else
				oDestObject[oCol]=oMapping.Filter;
		}
	});


	return oDestObject;
}


function BulkUploader2(oObjects, oColumns, oRowProcessor, strSuffix, fCB) {

	var iNumUploaded = 0;
	var iNumSkipped = 0;

	if (null != oRowProcessor)
		oRowProcessor.TotalRows = oObjects.length;

	var i = 0;
	var bDone = false;
	var sErrors = "";

	oPreview = new PreviewRowProcessor(strSuffix);

	if (!ObjectUtil.HasValue(oObjects)) {
		UserMessages.DisplayNow("No table selected", "Error");
		return;
	}

	(function () {
		if (i < oObjects.length) {

			var oObject = oObjects[i];

			try {
				if (oObject != {}) {
					var oConvertedObject = null;
					if (null != oColumns)
						oConvertedObject = ConvertSourceToDestination2(oObject, oColumns);

					else
						oConvertedObject = oObject;

					if (null != oRowProcessor)
						oConvertedObject = oRowProcessor.Process(oConvertedObject);

					iNumUploaded++;

					if (null != oConvertedObject)
						oPreview.Process(oConvertedObject);
				}				

			}
			catch (err) {
				trace(err);
				iNumSkipped++;
				if ($defined(err.Message))
					sErrors += "<p>Error in row #: " + (i + 1).toString() + " - " + err.Message + "</p>";
			}

			UpdateProgress(i / oObjects.length * 100.0);

			i++;
		}
		else if (!bDone) {
			UserMessages.DisplayNow(iNumUploaded + " records were uploaded and " + iNumSkipped + " were skipped due to error" + sErrors, "Info");
			bDone = true;
			UpdateProgress(100);
			if (fCB)
				fCB();
		}
	}).periodical(1);

	Page.LocalSettings.File = '';
}


function LoadDataSetFromFile(sFile) {

	const fileInput = document.getElementById('fileInput');
	const file = fileInput.files[0];

	if (!file) {
		UserMessages.DisplayNow("Please select a file first.", "Info");
		return;
	}

	const formData = new FormData();
	formData.append('file', file);

	// Using fetch API for the file upload
	fetch('FileUpload/upload', {
		method: 'POST',
		body: formData
	})
		.then(response => response.text())
		.then(result => {
			BulkUploadWorkbench.GetDataSetFromFile(sFile, function (oRes) {
				if ($type(oRes) == 'string' && sFile.indexOf('.csv') >= 0) {
					oValidColumns = JSON.decode(oRes)
					if (oValidColumns.hasOwnProperty('InvalidColumnNames')) {
						UserMessages.DisplayNow("Missing columans names: " + oValidColumns.InvalidColumnNames, "Info");
						return;
					}
				}

				Page.LocalSettings.File = sFile;
				oDatas = oRes;
				LoadDatasetFile2(oDatas);
				Page.LocalSettings.File = '';

				if (!StringUtil.IsEmpty(Page.LocalSettings.SelectedSheet)) {
					SelectSheet(Page.LocalSettings.SelectedSheet);
					ControlUtil.SetValue("ddlTables", Page.LocalSettings.SelectedSheet);
				}
			})

		})
		.catch(error => {
			console.error('Error uploading file:', error);
			UserMessages.DisplayNow("Failed to upload file.", "Info");
		});
	
}
function LoadDatasetFile2(oData) {

	if ($type(oData) == 'string')
		oData = JSON.decode(oData);

	oDatasetEditor=new DatasetEditor();
	oDatasetEditor.Sheets = oData;

	for (var i in oDatasetEditor.Sheets) {
		oDatasetEditor.Sheets[i] = RemoveEmptyRows(oDatasetEditor.Sheets[i]);
	}

	oDatasetEditor.Sheet = null;
	oDatasetEditor.SelectedSheetName = '';

	UserMessages.DisplayNow("Dataset was loaded successfully", "Success");

	if (!StringUtil.IsEmpty(Page.LocalSettings.File))
		_$("divImport").removeClass("hidden");

	_$("panelForImport").removeClass("hidden");
	

	BuildTableSelect();

	Page.Modals["divLoadFile"].HideContent();

	//oDatasetEditor.DatasetFileID = oFile.FileID;

//	BlindBind(_$("divSaveFile"), oFile);

}



function RemoveEmptyRows(oJson) {
	var oJson2 = [];

	if (oJson != null) {
		oJson.each(function(o) {
			if (Json.toString(o) != "{}")
				oJson2.push(o);
		});
	}

	return oJson2;
}

function OnUpdateCell(evt) {
//	oDatasetEditor.SaveUndo();
	let oInput=evt.target;
	var i=oInput.getAttribute("kcs:Index");
	var sCol=oInput.getAttribute("kcs:FieldName");
	var sVal=ControlUtil.GetValue(oInput);
	oDatasetEditor.Sheet[i][sCol]=sVal;
}
function JsonToTable(oJson) {
	_$("divPreview").innerHTML="";
	var oCols = [];

	oJson.each(function(o) {
		for (var i in o) {
			if (!oCols.contains(i))
				oCols.push(i);
		}
	});

	var oTrs = [];

	var oTd = [tr, [td, { style: "height: 35px" }, `<span data-bs-toggle="tooltip" data-bs-placement="top" title="This row represents the mapping from the file to the import. Click on a mapping to edit it.">
    <i class="bi bi-pencil-square"></i>
</span>`]];

	var oTh=[tr, [th, [div, { style: "white-space:nowrap;" },
		`<span data-bs-toggle="tooltip" data-bs-placement="top" title="This row represents the column headers from the file.">
    <i class="bi bi-info-circle"></i>
</span>`
	]]];
	oCols.each(function(oCol) {
		oTh.push([th, [input, { type: "text", value: oCol, "kcs:Index": -1, "kcs:FieldName": oCol.toString()}]]);
		//oTd.push([td, [input, { type: "button", value: "Make Column", onclick: "OnMakeColumn('"+oCol+"')" }], [input, { type: "button", value: "Adopt Orphans", onclick: "OnAdoptOrphans('"+oCol+"')" }]]);
		oTd.push([td, { click: function () { OnEditColumnMappings(oCol) } } ]);
	});

	let oThead = ["thead", { "class": "table-light", style: "position: sticky; top: 0; z-index: 10;"}, [oTh, oTd]];

	oTrs.push(oThead);

	var i = 0;

	let oTbody = ["tbody"];
	oJson.each(function (o) {

		if (i<1000) {
			var oTd=[tr, [td, [div, { style: "white-space:nowrap;" },
				[span, { onclick: "OnDeleteIndex("+i+")" }, ["i", {"class": "fa fa-remove"}]]
				//, [input, { type: "checkbox", "kcs:Index": i.toString() }]
			]]];
			oCols.each(function (oCol) {
				if (i>=0) {
					if ($defined(o[oCol]))
						oTd.push([td, [span, { "contenteditable": true, "input": OnUpdateCell, "kcs:Index": i.toString(), "kcs:FieldName": oCol.toString() }, o[oCol]]]);
					else
						oTd.push([td, [span, { "contenteditable": true, "input": OnUpdateCell, "kcs:Index": i.toString(), "kcs:FieldName": oCol.toString() }, ""]]);
				}
				else {
					if ($defined(o[oCol]))
						oTd.push([td, [input, { type: "text", value: o[oCol], "kcs:Index": i.toString(), "kcs:FieldName": oCol.toString() }]]);
					else
						oTd.push([td, [input, { type: "text", value: "", "kcs:Index": i.toString(), "kcs:FieldName": oCol.toString() }]]);
				}
			});

			oTbody.push(oTd);
		}

		i++;
	});

	oTrs.push(oTbody);

	_$("divPreview").appendChild($$$([table, { id: "tblData", "class": "table table-bordered table-hover", style: "border-collapse: collapse; " }, oTrs]));

	_$("tblData").getElements("input[type='text']").each(function(oInput) {
		ControlUtil.AddEvent(oInput, 'blur', function() {

			oDatasetEditor.SaveUndo();

			var i = oInput.getAttribute("kcs:Index");
			var sCol = oInput.getAttribute("kcs:FieldName");
			var sVal = ControlUtil.GetValue(oInput);
			var oData2 = [];
			if (i == -1) {
				oDatasetEditor.Sheet.each(function(o) {
					o[sVal] = o[sCol];
					delete o[sCol];
					oData2.push(o)
				});

				oDatasetEditor.Sheet=oData2;
				oDatasetEditor.m_cachedColumns=null;
			}
			else if (i>-1){
				oDatasetEditor.Sheet[i][sCol] = sVal;
			}
		});
		//JsonToTable(oData);
	});

	AddAltToGrids();

	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});
}

function OnSelectAll() {
	var bIsChecked = true;
	_$("tblData").getElements("tr").each(function(oTr) {
		var oChks = oTr.getElements("input[type='checkbox']");
		oChks.each(function(oChk) {
			if (oChk.getAttribute("kcs:Index") == -2)
				bIsChecked = oChk.checked;
			oChk.checked = bIsChecked;
		});
	});
}

function OnDeleteIndex(i) {
	if (-1 == i)
	{
		var oChk = _$("tblData").getElements("input[kcs:index='0']")[0];
		OnPromoteToHeaders2(oChk);
		oDatasetEditor.Sheet.erase(0, 1);
	}
	else
	{
		oDatasetEditor.Sheet.erase(i, 1);
	}

	JsonToTable(oDatasetEditor.Sheet);
}





function OnUndo() {
	oDatasetEditor.Undo();
}


class DatasetEditor
{

	DatasetFileID=null;
	ProcessorFileID=null;

	UndoRecords=[];

	Sheets=null;
	Sheet=null;

	SelectedSheetName=null;

	m_cachedColumns=null; 
	Transforms=[];
	AllTransforms={};

	SetTransform(oTransform) {
		if (!StringUtil.IsEmpty(oTransform.ID)) {
			let i=this.Transforms.findIndex(x => x.ID==oTransform.ID);
			if (i>=0&&this.Transforms[i].SourceName == oTransform.SourceName)
				this.Transforms[i]=oTransform
			else {
				oTransform.ID=StringUtil.UniqueID();
				this.Transforms.push(oTransform);
			}				
		}
		else {
			oTransform.ID=StringUtil.UniqueID();
			this.Transforms.push(oTransform);
		}

		return oTransform;
	}

	RemoveTransform(oTransform) {
		let i=this.Transforms.findIndex(x => x.ID==oTransform.ID);

		if (i>=0)
			this.Transforms.splice(i, 1);

	}

	Columns() {

		if (null==this.m_cachedColumns) {
			let oCols=[];

			if (null!=this.Sheet) {
				this.Sheet.forEach(function (o) {
					for (var i in o) {
						if (!oCols.contains(i))
							oCols.push(i);
					}
				});
			}

			this.m_cachedColumns=[];
			let i=0;
			oCols.forEach(col => { this.m_cachedColumns.push({ ColumnName: col, Index: i++ }) });
		}

		return this.m_cachedColumns;
	}

	GetColumn(sColumnName) {
		return this.Columns().find(x => x.ColumnName==sColumnName);
	}

	GetColumnControl(col) {
		return _$("tblData").children[0].children[1].children[col.Index+1];
	}

	GetElementControl(iRow, sColumnName) {
		let col=this.GetColumn(sColumnName);
		return _$("tblData").querySelectorAll("tr")[iRow+2].children[col.Index+1];
	}

	DeleteSelectedSheet() {
		if (!StringUtil.IsEmpty(this.SelectedSheetName)) {
			delete this.Sheets[this.SelectedSheetName];

			this.SelectedSheetName = '';
			for (var i in this.Sheets) {
				this.SelectSheet(i);
				break;
			}
		}
	};

	FromJSON(sJSON) {
		let oTempDataset=JSON.parse(sJSON);
		this.Sheets=oTempDataset.Sheets;
		this.AllTransforms=oTempDataset.AllTransforms;
	}

	SaveUndo() {
		this.UndoRecords.push($clone(this.Sheets));
	};

	SaveState() {
		if (!StringUtil.IsEmpty(this.SelectedSheetName)) {
			this.Sheets[this.SelectedSheetName]=this.Sheet;
			this.AllTransforms[this.SelectedSheetName]=this.Transforms;
		}
	};

	SelectSheet(sSheet) {
		if (!ObjectUtil.IsDefined(this.Sheets[sSheet]))
			return;

		if (!StringUtil.IsEmpty(this.SelectedSheetName)) {
			this.Sheets[this.SelectedSheetName]=this.Sheet;
			this.AllTransforms[this.SelectedSheetName]=this.Transforms;
		}

		this.Sheet=this.Sheets[sSheet];
		if (!ObjectUtil.IsDefined(this.AllTransforms[sSheet]))
			this.AllTransforms[sSheet]=[];

		this.Transforms=this.AllTransforms[sSheet]		
		this.SelectedSheetName=sSheet;
		this.m_cachedColumns=null;
	};


	Undo() {
		if (this.UndoRecords.length > 0) {
			this.Sheets = this.UndoRecords.last();
			this.UndoRecords.pop();

			this.Sheet = this.Sheets[this.SelectedSheetName];

			JsonToTable(this.Sheet);
		}
	}
}

var oDatasetEditor=new DatasetEditor();

////////////////////////////////File Functionality
async function LoadDatasetFile(iID) {

	let f=new Promise(resolve => {
		Files.GetPhysicalFileAndContents(iID, function (oFile) {
			oFile.DataObject=JSON.parse(oFile.Data);
			oDatasetEditor=new DatasetEditor();
			oDatasetEditor.FromJSON(oFile.DataObject.Contents);

			for (var i in oDatasetEditor.Sheets) {
				oDatasetEditor.Sheets[i]=RemoveEmptyRows(oDatasetEditor.Sheets[i]);
			}

			oDatasetEditor.Sheet=null;
			oDatasetEditor.SelectedSheetName='';

			UserMessages.DisplayNow(oFile.FileName+" dataset was loaded successfully", "Success");
			BuildTableSelect();

			Page.Modals["divLoadFile"].HideContent();

			oDatasetEditor.DatasetFileID=oFile.FileID;
			Page.LocalSettings.DatasetFileID=oFile.FileID;

			BlindBind(_$("divSaveFile"), oFile);

			resolve();
		});
	});

	await f;
}



/////////////////////////////////////Operations




function OnPromoteToHeaders() {
	var oChk=_$("tblData").getElements("input:checked")[0];
	OnPromoteToHeaders2(oChk);
	JsonToTable(oDatasetEditor.Sheet);
}

function OnPromoteToHeaders2(oChk) {
	oDatasetEditor.SaveUndo();

	var oData2=[];

	var oHeaders=[];
	var oCurrentHeaders=[];

	oChk.parentNode.parentNode.parentNode.getElements("td").each(function (oTh) {
		oTh.getElements("input[type='text']").each(function (oTxt) {
			oHeaders.push(oTxt.getValue());
		});
	});

	_$("tblData").getElements("th").each(function (oTh) {
		oTh.getElements("input[type='text']").each(function (oTxt) {
			oCurrentHeaders.push(oTxt.getValue());
		});
	});

	oDatasetEditor.Sheet.each(function (o) {
		var o2={};
		for (var i=0; i<oCurrentHeaders.length; i++) {
			if ($defined(o[oCurrentHeaders[i]]))
				o2[oHeaders[i]]=o[oCurrentHeaders[i]];
			else
				o2[oHeaders[i]]="";
		}
		oData2.push(o2);
	});

	oDatasetEditor.Sheet=oData2;
}

function OnMakeColumn(sCol) {

	oDatasetEditor.SaveUndo();

	var sActiveValue='';
	var sNewCol='New Column';

	_$("tblData").getElements("tr").each(function (oTr) {

		var oChks=oTr.getElements("input[type='checkbox']");
		if (oChks.length==0) return;
		var oChk=oChks[0];
		var i=parseInt(oChk.getAttribute("kcs:Index"));

		if (i>-1) {
			if (oChk.checked) {
				sActiveValue=oDatasetEditor.Sheet[i][sCol];
			}

			oDatasetEditor.Sheet[i][sNewCol]=sActiveValue;
		}
		else {
			if (oChk.checked) {
				sActiveValue=sCol;
			}
		}
	});

	JsonToTable(oDatasetEditor.Sheet);

}


function OnAdoptOrphans(sCol) {

	oDatasetEditor.SaveUndo();

	var oLastIndex=-1;

	_$("tblData").getElements("tr").each(function (oTr) {

		var oChks=oTr.getElements("input[type='checkbox']");
		if (oChks.length==0) return;
		var oChk=oChks[0];
		var i=parseInt(oChk.getAttribute("kcs:Index"));

		if (i>-1) {
			if (oChk.checked) {
				oDatasetEditor.Sheet[oLastIndex][sCol]+=" "+oDatasetEditor.Sheet[i][sCol];
			}

			else
				oLastIndex=i;
		}
		else {

		}
	});

	JsonToTable(oDatasetEditor.Sheet);

}

function OnRunCustomFilter() {

	oDatasetEditor.SaveUndo();

	var sFilter=prompt("What custom filter to run?");

	_$("tblData").getElements("tr").each(function (oTr) {

		var oChks=oTr.getElements("input[type='checkbox']");
		if (oChks.length==0) return;
		var oChk=oChks[0];
		var i=parseInt(oChk.getAttribute("kcs:Index"));

		if (i>-1) {
			if (oChk.checked) {
				oDatasetEditor.Sheet[i].Index=i;

				window[sFilter](oDatasetEditor.Sheet[i]);
			}

			else
				oLastIndex=i;
		}
		else {

		}
	});

	JsonToTable(oDatasetEditor.Sheet);

}

function OnDeleteMultiple() {

	oDatasetEditor.SaveUndo();

	var oTrs=_$("tblData").getElements("tr");

	for (var i=0; i<oTrs.length; i++) {
		var oTr=oTrs[oTrs.length-1-i];

		var oChks=oTr.getElements("input[type='checkbox']");
		if (oChks.length!=0) {
			var oChk=oChks[0];
			var iIndex=parseInt(oChk.getAttribute("kcs:Index"));

			if (iIndex>-1) {
				if (oChk.checked) {
					oDatasetEditor.Sheet.erase(iIndex, 1);
				}
			}
		}
	};

	JsonToTable(oDatasetEditor.Sheet);
}


var iProcessorFileID = null;

function BuildTableSelect() {
	_$("ddlTables").length = 1;
	for (var i in oDatasetEditor.Sheets) {
		ControlUtil.AddOption(_$("ddlTables"), i, i);
	}
}




function SelectSheet(sName) {
	oDatasetEditor.SelectSheet(sName);
	PreviewBulkUpload();
}
function PreviewBulkUpload() {

	if (ObjectUtil.HasValue(oDatasetEditor.Sheet)) {
		JsonToTable(oDatasetEditor.Sheet);
		BindColumnMappings();
	}
}

function OnDeleteSheet() {
	oDatasetEditor.SaveUndo();
	oDatasetEditor.DeleteSelectedSheet();
	BuildTableSelect();

	_$("divPreview").innerHTML = "";

	UserMessages.DisplayNow("The sheet was deleted", "Success");
}




class PreviewRowProcessor
{
	m_strNewSheet="";
	m_strSuffix="Processed";

	constructor(strSuffix) {
		if (strSuffix)
			this.m_strSuffix=strSuffix;
	}

	Process(oRow) {
		if (StringUtil.IsEmpty(this.m_strNewSheet)) {
			this.m_strNewSheet=oDatasetEditor.SelectedSheetName+" "+this.m_strSuffix;
			oDatasetEditor.Sheets[this.m_strNewSheet] = [];
			oDatasetEditor.SelectSheet(this.m_strNewSheet);
			BuildTableSelect();
		}

		oDatasetEditor.Sheets[this.m_strNewSheet].push(oRow);
	}
}





