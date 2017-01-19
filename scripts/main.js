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
	
	var versionField = this.getField("version");
	clearFieldHandlers(versionField);
	versionField.value = version;
	
	var portraitButton = this.getField("portraitButton");
	clearFieldHandlers(portraitButton);	
	portraitButton.setAction("MouseUp", "handlers.portraitButton.mouseUp(event);");	
	portraitButton.userName = l10n.translate("FIELD_HINT_PORTRAIT");

	var addXpButton = this.getField("addXpButton");	
	clearFieldHandlers(addXpButton);
	addXpButton.setAction("MouseUp", "handlers.addXpButton.mouseUp(event);");		

	var xpField = this.getField("xp");
	clearFieldHandlers(xpField);
	xpField.setAction("Validate","handlers.xp.validate(event);");	
	xpField.setAction("Calculate","handlers.xp.onChange(event);");
	var levelField = this.getField("level");	
	clearFieldHandlers(levelField);
	levelField.setAction("Validate","handlers.level.validate(event);");	
	levelField.setAction("Calculate","handlers.level.onChange(event);");	
}

initFields();
character.loadValues(this);
character.updateView(this);
