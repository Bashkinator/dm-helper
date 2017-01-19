var version = "0.0.4";
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

	var aDiamondsField = this.getField("aDiamonds");	
	clearFieldHandlers(aDiamondsField);
	aDiamondsField.setAction("Validate","handlers.money.validate(event);");	
	aDiamondsField.setAction("Calculate","handlers.money.onChange(event,\"astralDiamonds\");");
	var addAstralDiamondsButton = this.getField("addADiamonds");	
	clearFieldHandlers(addAstralDiamondsButton);
	addAstralDiamondsButton.setAction("MouseUp", "handlers.addADiamonds.mouseUp(event);");	
	var spendAstralDiamondsButton = this.getField("spendADiamonds");	
	clearFieldHandlers(spendAstralDiamondsButton);
	spendAstralDiamondsButton.setAction("MouseUp", "handlers.spendADiamonds.mouseUp(event);");		

	var platinumField = this.getField("platinum");	
	clearFieldHandlers(platinumField);
	platinumField.setAction("Validate","handlers.money.validate(event);");	
	platinumField.setAction("Calculate","handlers.money.onChange(event,\"platinum\");");
	var addPlatinumButton = this.getField("addPlatinum");	
	clearFieldHandlers(addPlatinumButton);
	addPlatinumButton.setAction("MouseUp", "handlers.addPlatinum.mouseUp(event);");	
	var spendPlatinumButton = this.getField("spendPlatinum");	
	clearFieldHandlers(spendPlatinumButton);
	spendPlatinumButton.setAction("MouseUp", "handlers.spendPlatinum.mouseUp(event);");	

	var goldField = this.getField("gold");	
	clearFieldHandlers(goldField);
	goldField.setAction("Validate","handlers.money.validate(event);");	
	goldField.setAction("Calculate","handlers.money.onChange(event,\"gold\");");
	var addGoldButton = this.getField("addGold");	
	clearFieldHandlers(addGoldButton);
	addGoldButton.setAction("MouseUp", "handlers.addGold.mouseUp(event);");	
	var spendGoldButton = this.getField("spendGold");	
	clearFieldHandlers(spendGoldButton);
	spendGoldButton.setAction("MouseUp", "handlers.spendGold.mouseUp(event);");	

	var silverField = this.getField("silver");	
	clearFieldHandlers(silverField);
	silverField.setAction("Validate","handlers.money.validate(event);");	
	silverField.setAction("Calculate","handlers.money.onChange(event,\"silver\");");
	var addSilverButton = this.getField("addSilver");	
	clearFieldHandlers(addSilverButton);
	addSilverButton.setAction("MouseUp", "handlers.addSilver.mouseUp(event);");	
	var spendSilverButton = this.getField("spendSilver");	
	clearFieldHandlers(spendSilverButton);
	spendSilverButton.setAction("MouseUp", "handlers.spendSilver.mouseUp(event);");	

	var copperField = this.getField("copper");	
	clearFieldHandlers(copperField);
	copperField.setAction("Validate","handlers.money.validate(event);");	
	copperField.setAction("Calculate","handlers.money.onChange(event,\"copper\");");
	var addCopperButton = this.getField("addCopper");	
	clearFieldHandlers(addCopperButton);
	addCopperButton.setAction("MouseUp", "handlers.addCopper.mouseUp(event);");	
	var spendCopperButton = this.getField("spendCopper");	
	clearFieldHandlers(spendCopperButton);
	spendCopperButton.setAction("MouseUp", "handlers.spendCopper.mouseUp(event);");	

	var strField = this.getField("abilityStrScore");	
	clearFieldHandlers(strField);
	strField.setAction("Validate","handlers.abilityScore.validate(event);");	
	strField.setAction("Calculate","handlers.abilityScore.onChange(event,\"str\");");	
	var conField = this.getField("abilityConScore");	
	clearFieldHandlers(conField);
	conField.setAction("Validate","handlers.abilityScore.validate(event);");	
	conField.setAction("Calculate","handlers.abilityScore.onChange(event,\"con\");");
	var dexField = this.getField("abilityDexScore");	
	clearFieldHandlers(dexField);
	dexField.setAction("Validate","handlers.abilityScore.validate(event);");	
	dexField.setAction("Calculate","handlers.abilityScore.onChange(event,\"dex\");");
	var intField = this.getField("abilityIntScore");	
	clearFieldHandlers(intField);
	intField.setAction("Validate","handlers.abilityScore.validate(event);");	
	intField.setAction("Calculate","handlers.abilityScore.onChange(event,\"int\");");
	var wisField = this.getField("abilityWisScore");	
	clearFieldHandlers(wisField);
	wisField.setAction("Validate","handlers.abilityScore.validate(event);");	
	wisField.setAction("Calculate","handlers.abilityScore.onChange(event,\"wis\");");
	var chaField = this.getField("abilityChaScore");	
	clearFieldHandlers(chaField);
	chaField.setAction("Validate","handlers.abilityScore.validate(event);");	
	chaField.setAction("Calculate","handlers.abilityScore.onChange(event,\"cha\");");					

}

initFields();
character.loadValues(this);
character.updateView(this);
