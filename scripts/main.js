var version = "0.0.11";
l10n.currentLanguage = "eng";

Array.prototype.includes = function(item){
	for(var i = 0; i < this.length; i++){
		if(item == this[i]){
			return true;
		}
	}
	return false;
}

function signedNumberToString(number){
	number = parseInt(number);
	if(!Number.isNaN(number)){
		return ((number>0)?"+":"")+number;
	}else{
		return 0;
	}
}

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
	portraitButton.setAction("MouseUp", "Handlers.portraitButton.onClick(event);");	
	portraitButton.userName = l10n.translate("FIELD_HINT_PORTRAIT");

	var addXpButton = this.getField("addXpButton");	
	clearFieldHandlers(addXpButton);
	addXpButton.setAction("MouseUp", "Handlers.addXpButton.onClick(event);");		

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
	addAstralDiamondsButton.setAction("MouseUp", "Handlers.moneyButton.onClick(event,\"astralDiamonds\",true);");	
	var spendAstralDiamondsButton = this.getField("spendADiamonds");	
	clearFieldHandlers(spendAstralDiamondsButton);
	spendAstralDiamondsButton.setAction("MouseUp", "Handlers.moneyButton.onClick(event,\"astralDiamonds\",false);");		

	var platinumField = this.getField("platinum");	
	clearFieldHandlers(platinumField);
	platinumField.setAction("Validate","Handlers.money.validate(event);");	
	platinumField.setAction("Calculate","Handlers.money.onChange(event,\"platinum\");");	
	var addPlatinumButton = this.getField("addPlatinum");	
	clearFieldHandlers(addPlatinumButton);
	addPlatinumButton.setAction("MouseUp", "Handlers.moneyButton.onClick(event,\"platinum\",true);");	
	var spendPlatinumButton = this.getField("spendPlatinum");	
	clearFieldHandlers(spendPlatinumButton);
	spendPlatinumButton.setAction("MouseUp", "Handlers.moneyButton.onClick(event,\"platinum\",false);");	

	var goldField = this.getField("gold");	
	clearFieldHandlers(goldField);
	goldField.setAction("Validate","Handlers.money.validate(event);");	
	goldField.setAction("Calculate","Handlers.money.onChange(event,\"gold\");");	
	var addGoldButton = this.getField("addGold");	
	clearFieldHandlers(addGoldButton);
	addGoldButton.setAction("MouseUp", "Handlers.moneyButton.onClick(event,\"gold\",true);");	
	var spendGoldButton = this.getField("spendGold");	
	clearFieldHandlers(spendGoldButton);
	spendGoldButton.setAction("MouseUp", "Handlers.moneyButton.onClick(event,\"gold\",false);");	

	var silverField = this.getField("silver");	
	clearFieldHandlers(silverField);
	silverField.setAction("Validate","Handlers.money.validate(event);");	
	silverField.setAction("Calculate","Handlers.money.onChange(event,\"silver\");");	
	var addSilverButton = this.getField("addSilver");	
	clearFieldHandlers(addSilverButton);
	addSilverButton.setAction("MouseUp", "Handlers.moneyButton.onClick(event,\"silver\",true);");	
	var spendSilverButton = this.getField("spendSilver");	
	clearFieldHandlers(spendSilverButton);
	spendSilverButton.setAction("MouseUp", "Handlers.moneyButton.onClick(event,\"silver\",false);");	

	var copperField = this.getField("copper");	
	clearFieldHandlers(copperField);
	copperField.setAction("Validate","Handlers.money.validate(event);");	
	copperField.setAction("Calculate","Handlers.money.onChange(event,\"copper\");");	
	var addCopperButton = this.getField("addCopper");	
	clearFieldHandlers(addCopperButton);
	addCopperButton.setAction("MouseUp", "Handlers.moneyButton.onClick(event,\"copper\",true);");	
	var spendCopperButton = this.getField("spendCopper");	
	clearFieldHandlers(spendCopperButton);
	spendCopperButton.setAction("MouseUp", "Handlers.moneyButton.onClick(event,\"copper\",false);");	

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
	initiativeMiscModField.setAction("Validate","Handlers.modValidate(event);");		
	initiativeMiscModField.setAction("Calculate","Handlers.initiativeMiscMod.onChange(event);");		

	var deityDropdown = this.getField("deityDropdown");
	clearFieldHandlers(deityDropdown);
	var deities = [];
	for(var i = 0; i < Deities.length; i++){
		deities.push([l10n.translate(Deities[i]),Deities[i]]);
	}
	deities.sort();	
	deityDropdown.clearItems();
	deityDropdown.setItems(deities);
	deityDropdown.value = "-";
	deityDropdown.setAction("Calculate","Handlers.deityDropdown.onChange(event);");

	var classDropdown = this.getField("classDropdown");
	clearFieldHandlers(classDropdown);
	var classes = [];
	for (var playerClass in PlayerClass) {
	    if (PlayerClass.hasOwnProperty(playerClass)) {
	        classes.push([l10n.translate(playerClass),playerClass]);
	    }
	}
	classes.sort();	
	classDropdown.clearItems();
	classDropdown.setItems(classes);
	classDropdown.value = "-";
	classDropdown.setAction("Calculate","Handlers.classDropdown.onChange(event);");		

	var raceDropdown = this.getField("raceDropdown");
	clearFieldHandlers(raceDropdown);
	var races = [];
	for (var playerRace in PlayerRace) {
	    if (PlayerRace.hasOwnProperty(playerRace)) {
	        races.push([l10n.translate(playerRace),playerRace]);
	    }
	}
	races.sort();	
	raceDropdown.clearItems();
	raceDropdown.setItems(races);
	raceDropdown.value = "-";
	raceDropdown.setAction("Calculate","Handlers.raceDropdown.onChange(event);");			

	var sizeDropdown = this.getField("sizeDropdown");
	clearFieldHandlers(sizeDropdown);
	var sizes = [];
	for(var i = 0; i < Sizes.length; i++){
		sizes.push([l10n.translate(Sizes[i]),Sizes[i]]);
	}
	sizes.sort();	
	sizeDropdown.clearItems();
	sizeDropdown.setItems(sizes);
	sizeDropdown.value = "-";
	sizeDropdown.setAction("Calculate","Handlers.sizeDropdown.onChange(event);");

	var genderDropdown = this.getField("genderDropdown");
	clearFieldHandlers(genderDropdown);
	var genders = [];
	for(var i = 0; i < Genders.length; i++){
		genders.push([l10n.translate(Genders[i]),Genders[i]]);
	}
	genders.sort();	
	genderDropdown.clearItems();
	genderDropdown.setItems(genders);
	genderDropdown.value = "-";
	genderDropdown.setAction("Calculate","Handlers.genderDropdown.onChange(event);");		

	var alignmentDropdown = this.getField("alignmentDropdown");
	clearFieldHandlers(alignmentDropdown);
	var alignment = [];
	for(var i = 0; i < Alignments.length; i++){
		alignment.push([l10n.translate(Alignments[i]),Alignments[i]]);
	}
	alignment.sort();	
	alignmentDropdown.clearItems();
	alignmentDropdown.setItems(alignment);	
	alignmentDropdown.setAction("Calculate","Handlers.alignmentDropdown.onChange(event);");		
		

	var paragonPathDropdown = this.getField("paragonPathDropdown");
	clearFieldHandlers(paragonPathDropdown);
	paragonPathDropdown.setAction("Calculate","Handlers.paragonPathDropdown.onChange(event);");	

	var epicDestinyDropdown = this.getField("epicDestinyDropdown");
	clearFieldHandlers(epicDestinyDropdown);	
	epicDestinyDropdown.setAction("Calculate","Handlers.epicDestinyDropdown.onChange(event);");		

	var speedBaseField = this.getField("speedBase");	
	clearFieldHandlers(speedBaseField);
	speedBaseField.setAction("Validate","Handlers.speedBase.validate(event);");		
	speedBaseField.setAction("Calculate","Handlers.speedBase.onChange(event);");		

	var speedArmorField = this.getField("speedArmor");	
	clearFieldHandlers(speedArmorField);
	speedArmorField.setAction("Validate","Handlers.modValidate(event);");		
	speedArmorField.setAction("Calculate","Handlers.speedArmor.onChange(event);");		

	var speedItemField = this.getField("speedItem");	
	clearFieldHandlers(speedItemField);
	speedItemField.setAction("Validate","Handlers.modValidate(event);");		
	speedItemField.setAction("Calculate","Handlers.speedItem.onChange(event);");		

	var speedMiscField = this.getField("speedMisc");	
	clearFieldHandlers(speedMiscField);
	speedMiscField.setAction("Validate","Handlers.modValidate(event);");		
	speedMiscField.setAction("Calculate","Handlers.speedMisc.onChange(event);");	

	var acAbilField = this.getField("acAbil");	
	clearFieldHandlers(acAbilField);
	acAbilField.setAction("Validate","Handlers.modValidate(event);");		
	acAbilField.setAction("Calculate","Handlers.acAbil.onChange(event);");	

	var acClassField = this.getField("acClass");	
	clearFieldHandlers(acClassField);
	acClassField.setAction("Validate","Handlers.modValidate(event);");		
	acClassField.setAction("Calculate","Handlers.defenseClass.onChange(event,\"ac\");");	

	var acFeatField = this.getField("acFeat");	
	clearFieldHandlers(acFeatField);
	acFeatField.setAction("Validate","Handlers.modValidate(event);");		
	acFeatField.setAction("Calculate","Handlers.defenseFeat.onChange(event,\"ac\");");	

	var acEnhField = this.getField("acEnh");	
	clearFieldHandlers(acEnhField);
	acEnhField.setAction("Validate","Handlers.modValidate(event);");		
	acEnhField.setAction("Calculate","Handlers.defenseEnh.onChange(event,\"ac\");");	

	var acMisc1Field = this.getField("acMisc1");	
	clearFieldHandlers(acMisc1Field);
	acMisc1Field.setAction("Validate","Handlers.modValidate(event);");		
	acMisc1Field.setAction("Calculate","Handlers.defenseMisc1.onChange(event,\"ac\");");	

	var acMisc2Field = this.getField("acMisc2");	
	clearFieldHandlers(acMisc2Field);
	acMisc2Field.setAction("Validate","Handlers.modValidate(event);");		
	acMisc2Field.setAction("Calculate","Handlers.defenseMisc2.onChange(event,\"ac\");");						

	var fortClassField = this.getField("fortClass");	
	clearFieldHandlers(fortClassField);
	fortClassField.setAction("Validate","Handlers.modValidate(event);");		
	fortClassField.setAction("Calculate","Handlers.defenseClass.onChange(event,\"fort\");");	

	var fortFeatField = this.getField("fortFeat");	
	clearFieldHandlers(fortFeatField);
	fortFeatField.setAction("Validate","Handlers.modValidate(event);");		
	fortFeatField.setAction("Calculate","Handlers.defenseFeat.onChange(event,\"fort\");");	

	var fortEnhField = this.getField("fortEnh");	
	clearFieldHandlers(fortEnhField);
	fortEnhField.setAction("Validate","Handlers.modValidate(event);");		
	fortEnhField.setAction("Calculate","Handlers.defenseEnh.onChange(event,\"fort\");");	

	var fortMisc1Field = this.getField("fortMisc1");	
	clearFieldHandlers(fortMisc1Field);
	fortMisc1Field.setAction("Validate","Handlers.modValidate(event);");		
	fortMisc1Field.setAction("Calculate","Handlers.defenseMisc1.onChange(event,\"fort\");");	

	var fortMisc2Field = this.getField("fortMisc2");	
	clearFieldHandlers(fortMisc2Field);
	fortMisc2Field.setAction("Validate","Handlers.modValidate(event);");		
	fortMisc2Field.setAction("Calculate","Handlers.defenseMisc2.onChange(event,\"fort\");");

	var refClassField = this.getField("refClass");	
	clearFieldHandlers(refClassField);
	refClassField.setAction("Validate","Handlers.modValidate(event);");		
	refClassField.setAction("Calculate","Handlers.defenseClass.onChange(event,\"ref\");");	

	var refFeatField = this.getField("refFeat");	
	clearFieldHandlers(refFeatField);
	refFeatField.setAction("Validate","Handlers.modValidate(event);");		
	refFeatField.setAction("Calculate","Handlers.defenseFeat.onChange(event,\"ref\");");	

	var refEnhField = this.getField("refEnh");	
	clearFieldHandlers(refEnhField);
	refEnhField.setAction("Validate","Handlers.modValidate(event);");		
	refEnhField.setAction("Calculate","Handlers.defenseEnh.onChange(event,\"ref\");");	

	var refMisc1Field = this.getField("refMisc1");	
	clearFieldHandlers(refMisc1Field);
	refMisc1Field.setAction("Validate","Handlers.modValidate(event);");		
	refMisc1Field.setAction("Calculate","Handlers.defenseMisc1.onChange(event,\"ref\");");	

	var refMisc2Field = this.getField("refMisc2");	
	clearFieldHandlers(refMisc2Field);
	refMisc2Field.setAction("Validate","Handlers.modValidate(event);");		
	refMisc2Field.setAction("Calculate","Handlers.defenseMisc2.onChange(event,\"ref\");");

	var willClassField = this.getField("willClass");	
	clearFieldHandlers(willClassField);
	willClassField.setAction("Validate","Handlers.modValidate(event);");		
	willClassField.setAction("Calculate","Handlers.defenseClass.onChange(event,\"will\");");	

	var willFeatField = this.getField("willFeat");	
	clearFieldHandlers(willFeatField);
	willFeatField.setAction("Validate","Handlers.modValidate(event);");		
	willFeatField.setAction("Calculate","Handlers.defenseFeat.onChange(event,\"will\");");	

	var willEnhField = this.getField("willEnh");	
	clearFieldHandlers(willEnhField);
	willEnhField.setAction("Validate","Handlers.modValidate(event);");		
	willEnhField.setAction("Calculate","Handlers.defenseEnh.onChange(event,\"will\");");	

	var willMisc1Field = this.getField("willMisc1");	
	clearFieldHandlers(willMisc1Field);
	willMisc1Field.setAction("Validate","Handlers.modValidate(event);");		
	willMisc1Field.setAction("Calculate","Handlers.defenseMisc1.onChange(event,\"will\");");	

	var willMisc2Field = this.getField("willMisc2");	
	clearFieldHandlers(willMisc2Field);
	willMisc2Field.setAction("Validate","Handlers.modValidate(event);");		
	willMisc2Field.setAction("Calculate","Handlers.defenseMisc2.onChange(event,\"will\");");			

	var maxHpField = this.getField("maxHp");	
	clearFieldHandlers(maxHpField);
	maxHpField.setAction("Validate","Handlers.maxHp.validate(event);");	
	maxHpField.setAction("Calculate","Handlers.maxHp.onChange(event);");			

	var surgeValueField = this.getField("surgeValue");	
	clearFieldHandlers(surgeValueField);
	surgeValueField.setAction("Validate","Handlers.surgeValue.validate(event);");	
	surgeValueField.setAction("Calculate","Handlers.surgeValue.onChange(event);");			

	var surgesByDayField = this.getField("surgesByDay");	
	clearFieldHandlers(surgesByDayField);
	surgesByDayField.setAction("Validate","Handlers.surgesByDay.validate(event);");	
	surgesByDayField.setAction("Calculate","Handlers.surgesByDay.onChange(event);");						

}

PlayerCharacter.loadValues(this);
initFields();
PlayerCharacter.updateView(this);
