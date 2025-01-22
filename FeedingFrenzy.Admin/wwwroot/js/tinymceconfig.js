var useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

function base64_image_uploader(blobInfo, success, failure, progress) {
	console.log(blobInfo);
	UploadBase64ImageToS3(blobInfo, 'images', 0, function (sFileName) {
		let sPresigned = "https://" + bucketName + ".s3." + bucketRegion + ".amazonaws.com/" + sFileName;
		success(sPresigned);
	});
}

var oTinyMCEAdvanced = {
	selector: 'textarea#txtContent',
	plugins: 'print paste searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link template table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
	imagetools_cors_hosts: ["medek-public-images-dev.s3.us-east-1.amazonaws.com"],
	menubar: 'file edit view insert format tools table help',
	toolbar: 'fullscreen  | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | template link | outdent indent |  numlist bullist | forecolor backcolor removeformat | alignleft aligncenter alignright alignjustify | insertfile image  ',
	toolbar_sticky: true,
	autosave_ask_before_unload: false,
	autosave_interval: '30s',
	autosave_prefix: '{path}{query}-{id}-',
	autosave_restore_when_empty: false,
	autosave_retention: '2m',
	image_advtab: true,
	images_upload_handler: base64_image_uploader,
	file_picker_callback: function (cb, value, meta) {
		var input = document.createElement('input');
		input.setAttribute('type', 'file');
		input.setAttribute('accept', 'image/*');

		input.onchange = function () {
			var file = this.files[0];

			UploadImageToS3(this, 'images', 0, function (sFileName) {
				let sPresigned = "https://" + bucketName + ".s3." + bucketRegion + ".amazonaws.com/" + sFileName;
				cb(sPresigned, { title: file.name });
			});
		};

		input.click();

	},
	browser_spellcheck: true,
	contextmenu: false,
	templates: [],
	template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
	template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
	height: 600,
	image_caption: true,
	quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
	noneditable_noneditable_class: 'mceNonEditable',
	toolbar_mode: 'sliding',
	/*contextmenu: 'link image imagetools table',*/
	skin: useDarkMode ? 'oxide-dark' : 'oxide',
	content_css: useDarkMode ? 'dark' : 'default',
	content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
	statusbar: false,
	    setup: function (editor) {
		editor.on('change', function () {
			editor.save();
		});
	}
}

var oTinyMCESimple = {
	height: 500,
	menubar: false,
	browser_spellcheck: true,
	plugins: [
		'advlist autolink lists link image charmap print preview anchor',
		'searchreplace fullscreen',
		'insertdatetime media table paste help'
	],
	toolbar: ' bold italic | insertfile image link | alignleft aligncenter ' +
		'alignright alignjustify | bullist numlist outdent indent | ' +
		'removeformat | fullscreen | help',
	content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
	statusbar: false,
	contextmenu: false,
	setup: function (editor) {
		editor.on('change', function () {
			editor.save();
		});
	}
	/*,
	file_picker_callback: function (cb, value, meta) {
		var input = document.createElement('input');
		input.setAttribute('type', 'file');
		//input.setAttribute('accept', 'image/*');


		input.onchange = function () {
			var file = this.files[0];

			UploadImageToS3(this, 'blog-images', 0, function (sFileName) {
				let sPresigned = "https://" + bucketName + ".s3." + bucketRegion + ".amazonaws.com/" + sFileName;
				cb(sPresigned, { title: file.name });
			});

		};

		input.click();

	}*/
};

