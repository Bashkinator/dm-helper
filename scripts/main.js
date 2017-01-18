var version = "0.0.2";
l10n.currentLanguage = "eng";

function clearFieldHandlers(field) {
	if(!field) return;
	field.setAction("MouseUp","");
	field.setAction("MouseDown","");
	field.setAction("MouseEnter","");
	field.setAction("MouseExit","");
	field.setAction("OnFocus","");
	field.setAction("OnBlur","");
	field.setAction("Keystroke","");
	field.setAction("Validate","");
	field.setAction("Calculate","");
	field.setAction("Format","");		
}

function initFields() {
	
	var versionField = this.getField("versionField");
	clearFieldHandlers(versionField);
	versionField.value = version;
	
	var portraitButton = this.getField("portraitButton");
	clearFieldHandlers(portraitButton);	
	portraitButton.setAction("MouseUp", "handlers.portraitButton.mouseUp(event);");	
	portraitButton.userName = l10n.translate("FIELD_HINT_PORTRAIT");

	var addXpButton = this.getField("addXpButton");	
	clearFieldHandlers(addXpButton);
	addXpButton.setAction("MouseUp", "handlers.addXpButton.mouseUp(event);");		

	var xpField = this.getField("xpField");
	clearFieldHandlers(xpField);
	xpField.setAction("Validate","handlers.xpField.validate(event);");	
	xpField.setAction("Calculate","handlers.xpField.onChange(event);");
	var levelField = this.getField("levelField");	
	clearFieldHandlers(levelField);
	levelField.setAction("Validate","handlers.levelField.validate(event);");	
	levelField.setAction("Calculate","handlers.levelField.onChange(event);");	
}

initFields();
character.loadValues(this);
character.updateView(this);
