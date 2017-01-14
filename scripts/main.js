var version = "0.0.1";
l10n.currentLanguage = "eng";

function initFields() {
	
	var versionField = this.getField("versionField");
	versionField.value = version;
	
	var portraitButton = this.getField("portraitButton");
	portraitButton.setAction("MouseUp", "handlers.portraitButton.mouseUp(event);");	
	portraitButton.userName = l10n.translate("FIELD_HINT_PORTRAIT");
}

initFields();
