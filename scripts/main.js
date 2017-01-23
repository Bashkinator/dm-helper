var version = "0.0.6";
l10n.currentLanguage = "eng";

function findItem(dropdown, value) {
	if(!dropdown) return -1;
	for(var i = 0; i < dropdown.numItems; i++){
		if(dropdown.getItemAt(i) == value){
			return i;
		}
	}
	return -1;
}

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
	portraitButton.setAction("MouseUp", "Handlers.portraitButton.mouseUp(event);");	
	portraitButton.userName = l10n.translate("FIELD_HINT_PORTRAIT");

	var addXpButton = this.getField("addXpButton");	
	clearFieldHandlers(addXpButton);
	addXpButton.setAction("MouseUp", "Handlers.addXpButton.mouseUp(event);");		

	var xpField = this.getField("xp");
	clearFieldHandlers(xpField);
	xpField.setAction("Validate","Handlers.xp.validate(event);");	
	xpField.setAction("Calculate","Handlers.xp.onChange(event);");
	var levelField = this.getField("level");	
	clearFieldHandlers(levelField);
	levelField.setAction("Validate","Handlers.level.validate(event);");	
	levelField.setAction("Calculate","Handlers.level.onChange(event);");

	var aDiamondsField = this.getField("aDiamonds");	
	clearFieldHandlers(aDiamondsField);
	aDiamondsField.setAction("Validate","Handlers.money.validate(event);");	
	aDiamondsField.setAction("Calculate","Handlers.money.onChange(event,\"astralDiamonds\");");
	var addAstralDiamondsButton = this.getField("addADiamonds");	
	clearFieldHandlers(addAstralDiamondsButton);
	addAstralDiamondsButton.setAction("MouseUp", "Handlers.addADiamonds.mouseUp(event);");	
	var spendAstralDiamondsButton = this.getField("spendADiamonds");	
	clearFieldHandlers(spendAstralDiamondsButton);
	spendAstralDiamondsButton.setAction("MouseUp", "Handlers.spendADiamonds.mouseUp(event);");		

	var platinumField = this.getField("platinum");	
	clearFieldHandlers(platinumField);
	platinumField.setAction("Validate","Handlers.money.validate(event);");	
	platinumField.setAction("Calculate","Handlers.money.onChange(event,\"platinum\");");
	var addPlatinumButton = this.getField("addPlatinum");	
	clearFieldHandlers(addPlatinumButton);
	addPlatinumButton.setAction("MouseUp", "Handlers.addPlatinum.mouseUp(event);");	
	var spendPlatinumButton = this.getField("spendPlatinum");	
	clearFieldHandlers(spendPlatinumButton);
	spendPlatinumButton.setAction("MouseUp", "Handlers.spendPlatinum.mouseUp(event);");	

	var goldField = this.getField("gold");	
	clearFieldHandlers(goldField);
	goldField.setAction("Validate","Handlers.money.validate(event);");	
	goldField.setAction("Calculate","Handlers.money.onChange(event,\"gold\");");
	var addGoldButton = this.getField("addGold");	
	clearFieldHandlers(addGoldButton);
	addGoldButton.setAction("MouseUp", "Handlers.addGold.mouseUp(event);");	
	var spendGoldButton = this.getField("spendGold");	
	clearFieldHandlers(spendGoldButton);
	spendGoldButton.setAction("MouseUp", "Handlers.spendGold.mouseUp(event);");	

	var silverField = this.getField("silver");	
	clearFieldHandlers(silverField);
	silverField.setAction("Validate","Handlers.money.validate(event);");	
	silverField.setAction("Calculate","Handlers.money.onChange(event,\"silver\");");
	var addSilverButton = this.getField("addSilver");	
	clearFieldHandlers(addSilverButton);
	addSilverButton.setAction("MouseUp", "Handlers.addSilver.mouseUp(event);");	
	var spendSilverButton = this.getField("spendSilver");	
	clearFieldHandlers(spendSilverButton);
	spendSilverButton.setAction("MouseUp", "Handlers.spendSilver.mouseUp(event);");	

	var copperField = this.getField("copper");	
	clearFieldHandlers(copperField);
	copperField.setAction("Validate","Handlers.money.validate(event);");	
	copperField.setAction("Calculate","Handlers.money.onChange(event,\"copper\");");
	var addCopperButton = this.getField("addCopper");	
	clearFieldHandlers(addCopperButton);
	addCopperButton.setAction("MouseUp", "Handlers.addCopper.mouseUp(event);");	
	var spendCopperButton = this.getField("spendCopper");	
	clearFieldHandlers(spendCopperButton);
	spendCopperButton.setAction("MouseUp", "Handlers.spendCopper.mouseUp(event);");	

	var strField = this.getField("abilityStrScore");	
	clearFieldHandlers(strField);
	strField.setAction("Validate","Handlers.abilityScore.validate(event);");	
	strField.setAction("Calculate","Handlers.abilityScore.onChange(event,\"str\");");	
	var conField = this.getField("abilityConScore");	
	clearFieldHandlers(conField);
	conField.setAction("Validate","Handlers.abilityScore.validate(event);");	
	conField.setAction("Calculate","Handlers.abilityScore.onChange(event,\"con\");");
	var dexField = this.getField("abilityDexScore");	
	clearFieldHandlers(dexField);
	dexField.setAction("Validate","Handlers.abilityScore.validate(event);");	
	dexField.setAction("Calculate","Handlers.abilityScore.onChange(event,\"dex\");");
	var intField = this.getField("abilityIntScore");	
	clearFieldHandlers(intField);
	intField.setAction("Validate","Handlers.abilityScore.validate(event);");	
	intField.setAction("Calculate","Handlers.abilityScore.onChange(event,\"int\");");
	var wisField = this.getField("abilityWisScore");	
	clearFieldHandlers(wisField);
	wisField.setAction("Validate","Handlers.abilityScore.validate(event);");	
	wisField.setAction("Calculate","Handlers.abilityScore.onChange(event,\"wis\");");
	var chaField = this.getField("abilityChaScore");	
	clearFieldHandlers(chaField);
	chaField.setAction("Validate","Handlers.abilityScore.validate(event);");	
	chaField.setAction("Calculate","Handlers.abilityScore.onChange(event,\"cha\");");	

	var initiativeMiscModField = this.getField("initiativeMiscMod");	
	clearFieldHandlers(initiativeMiscModField);
	initiativeMiscModField.setAction("Validate","Handlers.initiativeMiscMod.validate(event);");		
	initiativeMiscModField.setAction("Calculate","Handlers.initiativeMiscMod.onChange(event);");
	initiativeMiscModField.setAction("Format","Handlers.initiativeMiscMod.format(event);");		

	var deityDropdown = this.getField("deityDropdown");
	clearFieldHandlers(deityDropdown);
	var deities = [];
	for(var i = 0; i < Deities.length; i++){
		deities.push(l10n.translate(Deities[i]));
	}
	deities.sort();
	deities.unshift(" ");
	deityDropdown.setItems(deities);
	deityDropdown.setAction("Calculate","Handlers.deityDropdown.onChange(event);")


}

PlayerCharacter.loadValues(this);
initFields();
PlayerCharacter.updateView(this);
