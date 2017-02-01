var PlayerCharacter = {

	loadValues: function(doc) {	
		var xpField = doc.getField("xp");
		this.xp = parseInt(xpField.value);
		var levelVal = this.getLevel();
		if(levelVal == 30){
			var levelField = doc.getField("level");
			this.extraLevels = parseInt(levelField.value) - levelVal;
		}else{
			this.extraLevels = 0;
		}
		var astralDiamondsField = doc.getField("aDiamonds");
		this.money.astralDiamonds = parseInt(astralDiamondsField.value);		
		var platinumField = doc.getField("platinum");
		this.money.platinum = parseInt(platinumField.value);				
		var goldField = doc.getField("gold");
		this.money.gold = parseInt(goldField.value);		
		var silverField = doc.getField("silver");
		this.money.silver = parseInt(silverField.value);		
		var copperField = doc.getField("copper");
		this.money.copper = parseInt(copperField.value);		

		var strField = doc.getField("abilityStrScore");
		this.abilities.str = parseInt(strField.value);		
		var conField = doc.getField("abilityConScore");
		this.abilities.con = parseInt(conField.value);
		var dexField = doc.getField("abilityDexScore");
		this.abilities.dex = parseInt(dexField.value);
		var intField = doc.getField("abilityIntScore");
		this.abilities.int = parseInt(intField.value);
		var wisField = doc.getField("abilityWisScore");
		this.abilities.wis = parseInt(wisField.value);								
		var chaField = doc.getField("abilityChaScore");
		this.abilities.cha = parseInt(chaField.value);

		var initiativeMiscField = doc.getField("initiativeMiscMod");
		this.initiativeMiscBonus = initiativeMiscField.value;

		var deityDropdown = doc.getField("deityDropdown");
		var deityIndex = deityDropdown.currentValueIndices;
		this.deity = (deityIndex>=0) ? deityDropdown.getItemAt(deityIndex) : deityDropdown.value;

		var classDropdown = doc.getField("classDropdown");
		var classIndex = classDropdown.currentValueIndices;
		this.class = (classIndex>=0) ? classDropdown.getItemAt(classIndex) : classDropdown.value;		

		var raceDropdown = doc.getField("raceDropdown");
		var raceIndex = raceDropdown.currentValueIndices;
		this.race = (raceIndex>=0) ? raceDropdown.getItemAt(raceIndex) : raceDropdown.value;				

		var sizeDropdown = doc.getField("sizeDropdown");
		var sizeIndex = sizeDropdown.currentValueIndices;
		this.size = (sizeIndex>=0) ? sizeDropdown.getItemAt(sizeIndex) : sizeDropdown.value;		

		var genderDropdown = doc.getField("genderDropdown");
		var genderIndex = genderDropdown.currentValueIndices;
		this.gender = (genderIndex>=0) ? genderDropdown.getItemAt(genderIndex) : genderDropdown.value;				

		var alignmentDropdown = doc.getField("alignmentDropdown");
		var alignmentIndex = alignmentDropdown.currentValueIndices;
		this.alignment = (alignmentIndex>=0) ? alignmentDropdown.getItemAt(alignmentIndex) : alignmentDropdown.value;				

		var paragonPathDropdown = doc.getField("paragonPathDropdown");
		var paragonPathIndex = paragonPathDropdown.currentValueIndices;
		this.paragonPath = (paragonPathIndex>=0) ? paragonPathDropdown.getItemAt(paragonPathIndex) : paragonPathDropdown.value;				

		var epicDestinyDropdown = doc.getField("epicDestinyDropdown");
		var epicDestinyIndex = epicDestinyDropdown.currentValueIndices;
		this.epicDestiny = (epicDestinyIndex>=0) ? epicDestinyDropdown.getItemAt(epicDestinyIndex) : epicDestinyDropdown.value;						

		var speedBaseField = doc.getField("speedBase");
		this.speed.base = parseInt(speedBaseField.value);	
		var speedArmorField = doc.getField("speedArmor");
		this.speed.armorMod = parseInt(speedArmorField.value);
		var speedItemField = doc.getField("speedItem");
		this.speed.itemMod = parseInt(speedItemField.value);
		var speedMiscField = doc.getField("speedMisc");
		this.speed.miscMod = parseInt(speedMiscField.value);

		var acAbilField = doc.getField("acAbil");
		this.defenses.ac.armorOrAbilityMod = parseInt(acAbilField.value);
		var acClassField = doc.getField("acClass");
		this.defenses.ac.classMod = parseInt(acClassField.value);
		var acFeatField = doc.getField("acFeat");
		this.defenses.ac.featMod = parseInt(acFeatField.value);
		var acEnhField = doc.getField("acEnh");		
		this.defenses.ac.enhancementMod = parseInt(acEnhField.value);
		var acMisc1Field = doc.getField("acMisc1");
		this.defenses.ac.firstMiscMod = parseInt(acMisc1Field.value);
		var acMisc2Field = doc.getField("acMisc2");
		this.defenses.ac.secondMiscMod = parseInt(acMisc2Field.value);

		var fortClassField = doc.getField("fortClass");
		this.defenses.fort.classMod = parseInt(fortClassField.value);
		var fortFeatField = doc.getField("fortFeat");
		this.defenses.fort.featMod = parseInt(fortFeatField.value);
		var fortEnhField = doc.getField("fortEnh");		
		this.defenses.fort.enhancementMod = parseInt(fortEnhField.value);
		var fortMisc1Field = doc.getField("fortMisc1");
		this.defenses.fort.firstMiscMod = parseInt(fortMisc1Field.value);
		var fortMisc2Field = doc.getField("fortMisc2");
		this.defenses.fort.secondMiscMod = parseInt(fortMisc2Field.value);	

		var refClassField = doc.getField("refClass");
		this.defenses.ref.classMod = parseInt(refClassField.value);
		var refFeatField = doc.getField("refFeat");
		this.defenses.ref.featMod = parseInt(refFeatField.value);
		var refEnhField = doc.getField("refEnh");		
		this.defenses.ref.enhancementMod = parseInt(refEnhField.value);
		var refMisc1Field = doc.getField("refMisc1");
		this.defenses.ref.firstMiscMod = parseInt(refMisc1Field.value);
		var refMisc2Field = doc.getField("refMisc2");
		this.defenses.ref.secondMiscMod = parseInt(refMisc2Field.value);	

		var willClassField = doc.getField("willClass");
		this.defenses.will.classMod = parseInt(willClassField.value);
		var willFeatField = doc.getField("willFeat");
		this.defenses.will.featMod = parseInt(willFeatField.value);
		var willEnhField = doc.getField("willEnh");		
		this.defenses.will.enhancementMod = parseInt(willEnhField.value);
		var willMisc1Field = doc.getField("willMisc1");
		this.defenses.will.firstMiscMod = parseInt(willMisc1Field.value);
		var willMisc2Field = doc.getField("willMisc2");
		this.defenses.will.secondMiscMod = parseInt(willMisc2Field.value);

		var maxHpField = doc.getField("maxHp");				
		var maxHp = this.getMaxHp();
		var newMaxHp = parseInt(maxHpField.value);
		this.extraHp = newMaxHp - maxHp;		

		var surgeValueField = doc.getField("surgeValue");				
		var surgeValue = this.getSurgeValue();
		var newSurgeValue = parseInt(surgeValueField.value);
		this.extraSurgeValue = newSurgeValue - surgeValue;		

		var surgesPerDayField = doc.getField("surgesByDay");				
		var surgesPerDay = this.getSurgesPerDay();
		var newSurgesPerDay = parseInt(surgesPerDayField.value);
		this.extraSurgesPerDay = newSurgesPerDay - surgesPerDay;

		var acrobaticsTrainingBonusField = doc.getField("acrobaticsTrainingBonus");
		this.skills.acrobatics.trainedBonus = parseInt(acrobaticsTrainingBonusField.value);
		var acrobaticsArmorPenaltyField = doc.getField("acrobaticsArmorPenalty");
		this.skills.acrobatics.armorPenalty = parseInt(acrobaticsArmorPenaltyField.value);
		var acrobaticsMiscModField = doc.getField("acrobaticsMiscMod");
		this.skills.acrobatics.miscMod = parseInt(acrobaticsMiscModField.value);						

		var arcanaTrainingBonusField = doc.getField("arcanaTrainingBonus");
		this.skills.arcana.trainedBonus = parseInt(arcanaTrainingBonusField.value);
		var arcanaMiscModField = doc.getField("arcanaMiscMod");
		this.skills.arcana.miscMod = parseInt(arcanaMiscModField.value);	

		var athleticsTrainingBonusField = doc.getField("athleticsTrainingBonus");
		this.skills.athletics.trainedBonus = parseInt(athleticsTrainingBonusField.value);
		var athleticsArmorPenaltyField = doc.getField("athleticsArmorPenalty");
		this.skills.athletics.armorPenalty = parseInt(athleticsArmorPenaltyField.value);
		var athleticsMiscModField = doc.getField("athleticsMiscMod");
		this.skills.athletics.miscMod = parseInt(athleticsMiscModField.value);	

		var bluffTrainingBonusField = doc.getField("bluffTrainingBonus");
		this.skills.bluff.trainedBonus = parseInt(bluffTrainingBonusField.value);
		var bluffMiscModField = doc.getField("bluffMiscMod");
		this.skills.bluff.miscMod = parseInt(bluffMiscModField.value);	

		var diplomacyTrainingBonusField = doc.getField("diplomacyTrainingBonus");
		this.skills.diplomacy.trainedBonus = parseInt(diplomacyTrainingBonusField.value);
		var diplomacyMiscModField = doc.getField("diplomacyMiscMod");
		this.skills.diplomacy.miscMod = parseInt(diplomacyMiscModField.value);	

		var dungeoneeringTrainingBonusField = doc.getField("dungeoneeringTrainingBonus");
		this.skills.dungeoneering.trainedBonus = parseInt(dungeoneeringTrainingBonusField.value);
		var dungeoneeringMiscModField = doc.getField("dungeoneeringMiscMod");
		this.skills.dungeoneering.miscMod = parseInt(dungeoneeringMiscModField.value);	

		var enduranceTrainingBonusField = doc.getField("enduranceTrainingBonus");
		this.skills.endurance.trainedBonus = parseInt(enduranceTrainingBonusField.value);
		var enduranceArmorPenaltyField = doc.getField("enduranceArmorPenalty");
		this.skills.endurance.armorPenalty = parseInt(enduranceArmorPenaltyField.value);
		var enduranceMiscModField = doc.getField("enduranceMiscMod");
		this.skills.endurance.miscMod = parseInt(enduranceMiscModField.value);	

		var healTrainingBonusField = doc.getField("healTrainingBonus");
		this.skills.heal.trainedBonus = parseInt(healTrainingBonusField.value);
		var healMiscModField = doc.getField("healMiscMod");
		this.skills.heal.miscMod = parseInt(healMiscModField.value);	

		var historyTrainingBonusField = doc.getField("historyTrainingBonus");
		this.skills.history.trainedBonus = parseInt(historyTrainingBonusField.value);
		var historyMiscModField = doc.getField("historyMiscMod");
		this.skills.history.miscMod = parseInt(historyMiscModField.value);	

		var insightTrainingBonusField = doc.getField("insightTrainingBonus");
		this.skills.insight.trainedBonus = parseInt(insightTrainingBonusField.value);
		var insightMiscModField = doc.getField("insightMiscMod");
		this.skills.insight.miscMod = parseInt(insightMiscModField.value);	

		var intimidateTrainingBonusField = doc.getField("intimidateTrainingBonus");
		this.skills.intimidate.trainedBonus = parseInt(intimidateTrainingBonusField.value);
		var intimidateMiscModField = doc.getField("intimidateMiscMod");
		this.skills.intimidate.miscMod = parseInt(intimidateMiscModField.value);	

		var natureTrainingBonusField = doc.getField("natureTrainingBonus");
		this.skills.nature.trainedBonus = parseInt(natureTrainingBonusField.value);
		var natureMiscModField = doc.getField("natureMiscMod");
		this.skills.nature.miscMod = parseInt(natureMiscModField.value);	

		var perceptionTrainingBonusField = doc.getField("perceptionTrainingBonus");
		this.skills.perception.trainedBonus = parseInt(perceptionTrainingBonusField.value);
		var perceptionMiscModField = doc.getField("perceptionMiscMod");
		this.skills.perception.miscMod = parseInt(perceptionMiscModField.value);	

		var religionTrainingBonusField = doc.getField("religionTrainingBonus");
		this.skills.religion.trainedBonus = parseInt(religionTrainingBonusField.value);
		var religionMiscModField = doc.getField("religionMiscMod");
		this.skills.religion.miscMod = parseInt(religionMiscModField.value);	

		var stealthTrainingBonusField = doc.getField("stealthTrainingBonus");
		this.skills.stealth.trainedBonus = parseInt(stealthTrainingBonusField.value);
		var stealthArmorPenaltyField = doc.getField("stealthArmorPenalty");
		this.skills.stealth.armorPenalty = parseInt(stealthArmorPenaltyField.value);
		var stealthMiscModField = doc.getField("stealthMiscMod");
		this.skills.stealth.miscMod = parseInt(stealthMiscModField.value);	

		var streetwiseTrainingBonusField = doc.getField("streetwiseTrainingBonus");
		this.skills.streetwise.trainedBonus = parseInt(streetwiseTrainingBonusField.value);
		var streetwiseMiscModField = doc.getField("streetwiseMiscMod");
		this.skills.streetwise.miscMod = parseInt(streetwiseMiscModField.value);	

		var thieveryTrainingBonusField = doc.getField("thieveryTrainingBonus");
		this.skills.thievery.trainedBonus = parseInt(thieveryTrainingBonusField.value);
		var thieveryArmorPenaltyField = doc.getField("thieveryArmorPenalty");
		this.skills.thievery.armorPenalty = parseInt(thieveryArmorPenaltyField.value);
		var thieveryMiscModField = doc.getField("thieveryMiscMod");
		this.skills.thievery.miscMod = parseInt(thieveryMiscModField.value);	

	},

	updateView: function(doc) {		
		var xpField = doc.getField("xp");
		if(xpField.value != this.xp){
			xpField.value = this.xp;	
		}		
		var levelField = doc.getField("level");
		var newLevel = this.getLevel(); 		
		var levelMod = this.getLevelMod();
		var oldLevel = parseInt(levelField.value);		
		if( (oldLevel!=newLevel) && ((newLevel!=30) || (oldLevel<30)) ){			
			levelField.value = newLevel;				
		}

		var astralDiamondsField = doc.getField("aDiamonds");
		if(astralDiamondsField.value != this.money.astralDiamonds){
			astralDiamondsField.value = this.money.astralDiamonds;	
		}				
		var platinumField = doc.getField("platinum");
		if(platinumField.value != this.money.platinum){
			platinumField.value = this.money.platinum;	
		}		
		var goldField = doc.getField("gold");
		if(goldField.value != this.money.gold){
			goldField.value = this.money.gold;	
		}		
		var silverField = doc.getField("silver");
		if(silverField.value != this.money.silver){
			silverField.value = this.money.silver;	
		}		
		var copperField = doc.getField("copper");
		if(copperField.value != this.money.copper){
			copperField.value = this.money.copper;	
		}	

		var strField = doc.getField("abilityStrScore");
		if(strField.value != this.abilities.str){
			strField.value = this.abilities.str;	
		}
		var strModField = doc.getField("abilityStrMod");
		var strMod = this.getAbilityMod("str");
		strModField.value = signedNumberToString(strMod);
		var strModLevField = doc.getField("abilityStrModLev");
		var strModLev = this.getAbilityModPlusLevel("str");
		strModLevField.value = signedNumberToString(strModLev);		
		
		var conField = doc.getField("abilityConScore");
		if(conField.value != this.abilities.con){
			conField.value = this.abilities.con;	
		}
		var conModField = doc.getField("abilityConMod");		
		var conMod = this.getAbilityMod("con");
		conModField.value = signedNumberToString(conMod);
		var conModLevField = doc.getField("abilityConModLev");
		var conModLev = this.getAbilityModPlusLevel("con");
		conModLevField.value = signedNumberToString(conModLev);				
		
		var dexField = doc.getField("abilityDexScore");
		if(dexField.value != this.abilities.dex){
			dexField.value = this.abilities.dex;	
		}
		var dexModField = doc.getField("abilityDexMod");
		var dexMod = this.getAbilityMod("dex");
		dexModField.value = signedNumberToString(dexMod);
		var dexModLevField = doc.getField("abilityDexModLev");
		var dexModLev = this.getAbilityModPlusLevel("dex");
		dexModLevField.value = signedNumberToString(dexModLev);				
		
		var intField = doc.getField("abilityIntScore");
		if(intField.value != this.abilities.int){
			intField.value = this.abilities.int;	
		}
		var intModField = doc.getField("abilityIntMod");
		var intMod = this.getAbilityMod("int");
		intModField.value = signedNumberToString(intMod);	
		var intModLevField = doc.getField("abilityIntModLev");
		var intModLev = this.getAbilityModPlusLevel("int");
		intModLevField.value = signedNumberToString(intModLev);					

		var wisField = doc.getField("abilityWisScore");
		if(wisField.value != this.abilities.wis){
			wisField.value = this.abilities.wis;	
		}
		var wisModField = doc.getField("abilityWisMod");
		var wisMod = this.getAbilityMod("wis");
		wisModField.value = signedNumberToString(wisMod);
		var wisModLevField = doc.getField("abilityWisModLev");
		var wisModLev = this.getAbilityModPlusLevel("wis");
		wisModLevField.value = signedNumberToString(wisModLev);				

		var chaField = doc.getField("abilityChaScore");
		if(chaField.value != this.abilities.cha){
			chaField.value = this.abilities.cha;	
		}
		var chaModField = doc.getField("abilityChaMod");
		var chaMod = this.getAbilityMod("cha");
		chaModField.value = signedNumberToString(chaMod);				
		var chaModLevField = doc.getField("abilityChaModLev");
		var chaModLev = this.getAbilityModPlusLevel("cha");
		chaModLevField.value = signedNumberToString(chaModLev);				

		var initiativeField = doc.getField("initiativeScore");
		var initiative = this.getInitiative();
		initiativeField.value = signedNumberToString(initiative);
		var initiativeDexModField = doc.getField("initiativeDexMod");
		initiativeDexModField.value = signedNumberToString(dexMod);		
		var initiativeLevelModField = doc.getField("initiativeLevelMod");
		initiativeLevelModField.value = signedNumberToString(levelMod);		
		var initiativeMiscField = doc.getField("initiativeMiscMod");
		if(initiativeMiscField.value != this.initiativeMiscBonus){
			initiativeMiscField.value = signedNumberToString(this.initiativeMiscBonus);
		}			

		var deityDropdown = doc.getField("deityDropdown");		
		if(deityDropdown.value != this.deity){
			var deityIndex = findItem(deityDropdown, this.deity);
			if(deityIndex>=0){
				deityDropdown.currentValueIndices = deityIndex;		
			}else{
				deityDropdown.value = this.deity;
			}	
		}

		var classDropdown = doc.getField("classDropdown");		

		if( (classDropdown.value != this.class) && classDropdown.value) {
			var classIndex = findItem(classDropdown, this.class);
			if(classIndex>=0){
				classDropdown.currentValueIndices = classIndex;		
			}else{
				classDropdown.value = this.class;
			}
		}	

		var raceDropdown = doc.getField("raceDropdown");		

		if( (raceDropdown.value != this.race) && raceDropdown.value) {
			var raceIndex = findItem(raceDropdown, this.race);
			if(raceIndex>=0){
				raceDropdown.currentValueIndices = raceIndex;		
			}else{
				raceDropdown.value = this.race;
			}
		}			

		var sizeDropdown = doc.getField("sizeDropdown");		
		if( (sizeDropdown.value != this.size) && sizeDropdown.value){
			var sizeIndex = findItem(sizeDropdown, this.size);
			if(sizeIndex>=0){
				sizeDropdown.currentValueIndices = sizeIndex;		
			}else{
				sizeDropdown.value = this.size;
			}	
		}		

		var genderDropdown = doc.getField("genderDropdown");		
		if( (genderDropdown.value != this.gender) && genderDropdown.value){
			var genderIndex = findItem(genderDropdown, this.gender);
			if(genderIndex>=0){
				genderDropdown.currentValueIndices = genderIndex;		
			}else{
				genderDropdown.value = this.gender;
			}	
		}		

		var alignmentDropdown = doc.getField("alignmentDropdown");		
		if( (alignmentDropdown.value != this.alignment) && alignmentDropdown.value) {
			var alignmentIndex = findItem(alignmentDropdown, this.alignment);
			if(alignmentIndex>=0){
				alignmentDropdown.currentValueIndices = alignmentIndex;		
			}else{
				alignmentDropdown.value = this.alignment;
			}	
		}			


		var playerLevel = this.getLevel();

		var paragonPathDropdown = doc.getField("paragonPathDropdown");
		var paragonPathOldValue = this.paragonPath;
		var paragonPathOldIndex = findItem(paragonPathDropdown, this.paragonPath);
		var paragonPaths = [];
		if(playerLevel>10){
			var raceData = PlayerRace[this.race];
			if(raceData){
				for(var i = 0; i < raceData.paragonPaths.length; i++){
					paragonPaths.push([l10n.translate(raceData.paragonPaths[i]),raceData.paragonPaths[i]]);
				}
			}
			var classData = PlayerClass[this.class];
			if(classData){
				for(var i = 0; i < classData.paragonPaths.length; i++){
					paragonPaths.push([l10n.translate(classData.paragonPaths[i]),classData.paragonPaths[i]]);
				}
			}				
		}
		paragonPathDropdown.clearItems();
		if(paragonPaths.length>0){
			paragonPaths.sort();
			paragonPathDropdown.setItems(paragonPaths);
		}		
		if(playerLevel>10){
			this.paragonPath = paragonPathOldValue;
		}else{
			this.paragonPath = "-";
		}		
		
		if(paragonPathDropdown.value != this.paragonPath){						
			if(paragonPathOldIndex>=0){
				var paragonPathIndex = findItem(paragonPathDropdown, this.paragonPath);
				if(paragonPathIndex>=0){
					paragonPathDropdown.currentValueIndices = paragonPathIndex;		
				}else{
					paragonPathDropdown.value = "-";
				}
			}else if(playerLevel>10){				 				
				paragonPathDropdown.value = this.paragonPath;
			}
		}	

		var epicDestinyDropdown = doc.getField("epicDestinyDropdown");
		var epicDestinyOldValue = this.epicDestiny;
		var epicDestinyOldIndex = findItem(epicDestinyDropdown, this.epicDestiny);
		var epicDestinies = [];		
		for (var destiny in PlayerEpicDestinies) {
		    if (PlayerEpicDestinies.hasOwnProperty(destiny) && PlayerEpicDestinies[destiny].isPrerequisitesOk(this)) {
		        epicDestinies.push([l10n.translate(destiny),destiny]);
		    }
		}		
		epicDestinyDropdown.clearItems();
		if(epicDestinies.length>0){
			epicDestinies.sort();			
			epicDestinyDropdown.setItems(epicDestinies);
		}		
		if(playerLevel>20){
			this.epicDestiny = epicDestinyOldValue;	
		}else{
			this.epicDestiny = "-";
		}		
		if(epicDestinyDropdown.value != this.epicDestiny){						
			if(epicDestinyOldIndex>=0){
				var epicDestinyIndex = findItem(epicDestinyDropdown, this.epicDestiny);
				if(epicDestinyIndex>=0){
					epicDestinyDropdown.currentValueIndices = epicDestinyIndex;		
				}else{
					epicDestinyDropdown.value = "-";
				}
			}else{				 				
				epicDestinyDropdown.value = this.epicDestiny;
			}
		}	

		var speedScoreField = doc.getField("speedScore");
		var speedScore = this.getSpeed();
		speedScoreField.value = speedScore;
		var speedBaseField = doc.getField("speedBase");		
		if(speedBaseField.value != this.speed.base){
			speedBaseField.value = this.speed.base;		
		}							
		var speedArmorField = doc.getField("speedArmor");		
		if(speedArmorField.value != this.speed.armorMod){
			speedArmorField.value = signedNumberToString(this.speed.armorMod);		
		}	
		var speedItemField = doc.getField("speedItem");		
		if(speedItemField.value != this.speed.itemMod){
			speedItemField.value = signedNumberToString(this.speed.itemMod);		
		}
		var speedMiscField = doc.getField("speedMisc");		
		if(speedMiscField.value != this.speed.miscMod){
			speedMiscField.value = signedNumberToString(this.speed.miscMod);		
		}	

		var acScoreField = doc.getField("acScore");
		var acScore = this.getDefenseScore("ac");
		acScoreField.value = acScore;
		var acLevelField = doc.getField("acLevel");		
		acLevelField.value = 10 + levelMod;		
		var acAbilField = doc.getField("acAbil");		
		if(acAbilField.value != this.defenses.ac.armorOrAbilityMod){
			acAbilField.value = signedNumberToString(this.defenses.ac.armorOrAbilityMod);		
		}							
		var acClassField = doc.getField("acClass");		
		if(acClassField.value != this.defenses.ac.classMod){
			acClassField.value = signedNumberToString(this.defenses.ac.classMod);		
		}	
		var acFeatField = doc.getField("acFeat");		
		if(acFeatField.value != this.defenses.ac.featMod){
			acFeatField.value = signedNumberToString(this.defenses.ac.featMod);		
		}
		var acEnhField = doc.getField("acEnh");		
		if(acEnhField.value != this.defenses.ac.enhancementMod){
			acEnhField.value = signedNumberToString(this.defenses.ac.enhancementMod);		
		}			
		var acMisc1Field = doc.getField("acMisc1");		
		if(acMisc1Field.value != this.defenses.ac.firstMiscMod){
			acMisc1Field.value = signedNumberToString(this.defenses.ac.firstMiscMod);		
		}			
		var acMisc2Field = doc.getField("acMisc2");		
		if(acMisc2Field.value != this.defenses.ac.secondMiscMod){
			acMisc2Field.value = signedNumberToString(this.defenses.ac.secondMiscMod);		
		}				

		var fortScoreField = doc.getField("fortScore");
		var fortScore = this.getDefenseScore("fort");
		fortScoreField.value = fortScore;
		var fortLevelField = doc.getField("fortLevel");		
		fortLevelField.value = 10 + levelMod;		
		var fortAbilField = doc.getField("fortAbil");
		var fortAbilMod = this.getDefenseAbilityMod("fort"); 		
		if(fortAbilField.value != fortAbilMod){
			fortAbilField.value = signedNumberToString(fortAbilMod);		
		}							
		var fortClassField = doc.getField("fortClass");		
		if(fortClassField.value != this.defenses.fort.classMod){
			fortClassField.value = signedNumberToString(this.defenses.fort.classMod);		
		}	
		var fortFeatField = doc.getField("fortFeat");		
		if(fortFeatField.value != this.defenses.fort.featMod){
			fortFeatField.value = signedNumberToString(this.defenses.fort.featMod);		
		}
		var fortEnhField = doc.getField("fortEnh");		
		if(fortEnhField.value != this.defenses.fort.enhancementMod){
			fortEnhField.value = signedNumberToString(this.defenses.fort.enhancementMod);		
		}			
		var fortMisc1Field = doc.getField("fortMisc1");		
		if(fortMisc1Field.value != this.defenses.fort.firstMiscMod){
			fortMisc1Field.value = signedNumberToString(this.defenses.fort.firstMiscMod);		
		}			
		var fortMisc2Field = doc.getField("fortMisc2");		
		if(fortMisc2Field.value != this.defenses.fort.secondMiscMod){
			fortMisc2Field.value = signedNumberToString(this.defenses.fort.secondMiscMod);		
		}	

		var refScoreField = doc.getField("refScore");
		var refScore = this.getDefenseScore("ref");
		refScoreField.value = refScore;
		var refLevelField = doc.getField("refLevel");		
		refLevelField.value = 10 + levelMod;		
		var refAbilField = doc.getField("refAbil");
		var refAbilMod = this.getDefenseAbilityMod("ref"); 		
		if(refAbilField.value != refAbilMod){
			refAbilField.value = signedNumberToString(refAbilMod);		
		}						
		var refClassField = doc.getField("refClass");		
		if(refClassField.value != this.defenses.ref.classMod){
			refClassField.value = signedNumberToString(this.defenses.ref.classMod);		
		}	
		var refFeatField = doc.getField("refFeat");		
		if(refFeatField.value != this.defenses.ref.featMod){
			refFeatField.value = signedNumberToString(this.defenses.ref.featMod);		
		}
		var refEnhField = doc.getField("refEnh");		
		if(refEnhField.value != this.defenses.ref.enhancementMod){
			refEnhField.value = signedNumberToString(this.defenses.ref.enhancementMod);		
		}			
		var refMisc1Field = doc.getField("refMisc1");		
		if(refMisc1Field.value != this.defenses.ref.firstMiscMod){
			refMisc1Field.value = signedNumberToString(this.defenses.ref.firstMiscMod);		
		}			
		var refMisc2Field = doc.getField("refMisc2");		
		if(refMisc2Field.value != this.defenses.ref.secondMiscMod){
			refMisc2Field.value = signedNumberToString(this.defenses.ref.secondMiscMod);		
		}	

		var willScoreField = doc.getField("willScore");
		var willScore = this.getDefenseScore("will");
		willScoreField.value = willScore;
		var willLevelField = doc.getField("willLevel");		
		willLevelField.value = 10 + levelMod;		
		var willAbilField = doc.getField("willAbil");
		var willAbilMod = this.getDefenseAbilityMod("will"); 		
		if(willAbilField.value != willAbilMod){
			willAbilField.value = signedNumberToString(willAbilMod);		
		}						
		var willClassField = doc.getField("willClass");		
		if(willClassField.value != this.defenses.will.classMod){
			willClassField.value = signedNumberToString(this.defenses.will.classMod);		
		}	
		var willFeatField = doc.getField("willFeat");		
		if(willFeatField.value != this.defenses.will.featMod){
			willFeatField.value = signedNumberToString(this.defenses.will.featMod);		
		}
		var willEnhField = doc.getField("willEnh");		
		if(willEnhField.value != this.defenses.will.enhancementMod){
			willEnhField.value = signedNumberToString(this.defenses.will.enhancementMod);		
		}			
		var willMisc1Field = doc.getField("willMisc1");		
		if(willMisc1Field.value != this.defenses.will.firstMiscMod){
			willMisc1Field.value = signedNumberToString(this.defenses.will.firstMiscMod);		
		}			
		var willMisc2Field = doc.getField("willMisc2");		
		if(willMisc2Field.value != this.defenses.will.secondMiscMod){
			willMisc2Field.value = signedNumberToString(this.defenses.will.secondMiscMod);		
		}

		var maxHpField = doc.getField("maxHp");				
		var maxHp = this.getMaxHp();
		if(maxHpField.value != maxHp){
			maxHpField.value = maxHp;
		}

		var bloodiedValueField = doc.getField("bloodiedValue");				
		var bloodiedValue = this.getBloodiedValue();
		if(bloodiedValueField.value != bloodiedValue){
			bloodiedValueField.value = bloodiedValue;
		}	

		var surgeValueField = doc.getField("surgeValue");				
		var surgeValue = this.getSurgeValue();
		if(surgeValueField.value != surgeValue){
			surgeValueField.value = surgeValue;
		}	

		var surgesByDayField = doc.getField("surgesByDay");				
		var surgesByDay = this.getSurgesPerDay();
		if(surgesByDayField.value != surgesByDay){
			surgesByDayField.value = surgesByDay;
		}	

		var acrobaticsScoreField = doc.getField("acrobaticsScore");
		var acrobaticsScore = this.getSkillScore("acrobatics");				
		acrobaticsScoreField.value = signedNumberToString(acrobaticsScore); 
		var acrobaticsAbilLevelModField = doc.getField("acrobaticsAbilLevelMod");
		var acrobaticsAbilLevelMod = this.getAbilityModPlusLevel(this.skills.acrobatics.ability);				
		acrobaticsAbilLevelModField.value = signedNumberToString(acrobaticsAbilLevelMod);
		var acrobaticsTrainingBonusField = doc.getField("acrobaticsTrainingBonus");
		if(parseInt(acrobaticsTrainingBonusField.value) != this.skills.acrobatics.trainedBonus){
			acrobaticsTrainingBonusField.value = signedNumberToString(this.skills.acrobatics.trainedBonus);	
		}
		var acrobaticsArmorPenaltyField = doc.getField("acrobaticsArmorPenalty");
		if(parseInt(acrobaticsArmorPenaltyField.value) != this.skills.acrobatics.armorPenalty){
			acrobaticsArmorPenaltyField.value = signedNumberToString(this.skills.acrobatics.armorPenalty);	
		}	
		var acrobaticsMiscModField = doc.getField("acrobaticsMiscMod");
		if(parseInt(acrobaticsMiscModField.value) != this.skills.acrobatics.miscMod){
			acrobaticsMiscModField.value = signedNumberToString(this.skills.acrobatics.miscMod);	
		}		

		var arcanaScoreField = doc.getField("arcanaScore");
		var arcanaScore = this.getSkillScore("arcana");				
		arcanaScoreField.value = signedNumberToString(arcanaScore); 
		var arcanaAbilLevelModField = doc.getField("arcanaAbilLevelMod");
		var arcanaAbilLevelMod = this.getAbilityModPlusLevel(this.skills.arcana.ability);				
		arcanaAbilLevelModField.value = signedNumberToString(arcanaAbilLevelMod);
		var arcanaTrainingBonusField = doc.getField("arcanaTrainingBonus");
		if(arcanaTrainingBonusField.value != this.skills.arcana.trainedBonus){
			arcanaTrainingBonusField.value = signedNumberToString(this.skills.arcana.trainedBonus);	
		}
		var arcanaMiscModField = doc.getField("arcanaMiscMod");
		if(arcanaMiscModField.value != this.skills.arcana.miscMod){
			arcanaMiscModField.value = signedNumberToString(this.skills.arcana.miscMod);	
		}

		var athleticsScoreField = doc.getField("athleticsScore");
		var athleticsScore = this.getSkillScore("athletics");				
		athleticsScoreField.value = signedNumberToString(athleticsScore); 
		var athleticsAbilLevelModField = doc.getField("athleticsAbilLevelMod");
		var athleticsAbilLevelMod = this.getAbilityModPlusLevel(this.skills.athletics.ability);				
		athleticsAbilLevelModField.value = signedNumberToString(athleticsAbilLevelMod);
		var athleticsTrainingBonusField = doc.getField("athleticsTrainingBonus");
		if(athleticsTrainingBonusField.value != this.skills.athletics.trainedBonus){
			athleticsTrainingBonusField.value = signedNumberToString(this.skills.athletics.trainedBonus);	
		}
		var athleticsArmorPenaltyField = doc.getField("athleticsArmorPenalty");
		if(athleticsArmorPenaltyField.value != this.skills.athletics.armorPenalty){
			athleticsArmorPenaltyField.value = signedNumberToString(this.skills.athletics.armorPenalty);	
		}	
		var athleticsMiscModField = doc.getField("athleticsMiscMod");
		if(athleticsMiscModField.value != this.skills.athletics.miscMod){
			athleticsMiscModField.value = signedNumberToString(this.skills.athletics.miscMod);	
		}

		var bluffScoreField = doc.getField("bluffScore");
		var bluffScore = this.getSkillScore("bluff");				
		bluffScoreField.value = signedNumberToString(bluffScore); 
		var bluffAbilLevelModField = doc.getField("bluffAbilLevelMod");
		var bluffAbilLevelMod = this.getAbilityModPlusLevel(this.skills.bluff.ability);				
		bluffAbilLevelModField.value = signedNumberToString(bluffAbilLevelMod);
		var bluffTrainingBonusField = doc.getField("bluffTrainingBonus");
		if(bluffTrainingBonusField.value != this.skills.bluff.trainedBonus){
			bluffTrainingBonusField.value = signedNumberToString(this.skills.bluff.trainedBonus);	
		}
		var bluffMiscModField = doc.getField("bluffMiscMod");
		if(bluffMiscModField.value != this.skills.bluff.miscMod){
			bluffMiscModField.value = signedNumberToString(this.skills.bluff.miscMod);	
		}

		var diplomacyScoreField = doc.getField("diplomacyScore");
		var diplomacyScore = this.getSkillScore("diplomacy");				
		diplomacyScoreField.value = signedNumberToString(diplomacyScore); 
		var diplomacyAbilLevelModField = doc.getField("diplomacyAbilLevelMod");
		var diplomacyAbilLevelMod = this.getAbilityModPlusLevel(this.skills.diplomacy.ability);				
		diplomacyAbilLevelModField.value = signedNumberToString(diplomacyAbilLevelMod);
		var diplomacyTrainingBonusField = doc.getField("diplomacyTrainingBonus");
		if(diplomacyTrainingBonusField.value != this.skills.diplomacy.trainedBonus){
			diplomacyTrainingBonusField.value = signedNumberToString(this.skills.diplomacy.trainedBonus);	
		}
		var diplomacyMiscModField = doc.getField("diplomacyMiscMod");
		if(diplomacyMiscModField.value != this.skills.diplomacy.miscMod){
			diplomacyMiscModField.value = signedNumberToString(this.skills.diplomacy.miscMod);	
		}

		var dungeoneeringScoreField = doc.getField("dungeoneeringScore");
		var dungeoneeringScore = this.getSkillScore("dungeoneering");				
		dungeoneeringScoreField.value = signedNumberToString(dungeoneeringScore); 
		var dungeoneeringAbilLevelModField = doc.getField("dungeoneeringAbilLevelMod");
		var dungeoneeringAbilLevelMod = this.getAbilityModPlusLevel(this.skills.dungeoneering.ability);				
		dungeoneeringAbilLevelModField.value = signedNumberToString(dungeoneeringAbilLevelMod);
		var dungeoneeringTrainingBonusField = doc.getField("dungeoneeringTrainingBonus");
		if(dungeoneeringTrainingBonusField.value != this.skills.dungeoneering.trainedBonus){
			dungeoneeringTrainingBonusField.value = signedNumberToString(this.skills.dungeoneering.trainedBonus);	
		}
		var dungeoneeringMiscModField = doc.getField("dungeoneeringMiscMod");
		if(dungeoneeringMiscModField.value != this.skills.dungeoneering.miscMod){
			dungeoneeringMiscModField.value = signedNumberToString(this.skills.dungeoneering.miscMod);	
		}

		var enduranceScoreField = doc.getField("enduranceScore");
		var enduranceScore = this.getSkillScore("endurance");				
		enduranceScoreField.value = signedNumberToString(enduranceScore); 
		var enduranceAbilLevelModField = doc.getField("enduranceAbilLevelMod");
		var enduranceAbilLevelMod = this.getAbilityModPlusLevel(this.skills.endurance.ability);				
		enduranceAbilLevelModField.value = signedNumberToString(enduranceAbilLevelMod);
		var enduranceTrainingBonusField = doc.getField("enduranceTrainingBonus");
		if(enduranceTrainingBonusField.value != this.skills.endurance.trainedBonus){
			enduranceTrainingBonusField.value = signedNumberToString(this.skills.endurance.trainedBonus);	
		}
		var enduranceArmorPenaltyField = doc.getField("enduranceArmorPenalty");
		if(enduranceArmorPenaltyField.value != this.skills.endurance.armorPenalty){
			enduranceArmorPenaltyField.value = signedNumberToString(this.skills.endurance.armorPenalty);	
		}	
		var enduranceMiscModField = doc.getField("enduranceMiscMod");
		if(enduranceMiscModField.value != this.skills.endurance.miscMod){
			enduranceMiscModField.value = signedNumberToString(this.skills.endurance.miscMod);	
		}

		var healScoreField = doc.getField("healScore");
		var healScore = this.getSkillScore("heal");				
		healScoreField.value = signedNumberToString(healScore); 
		var healAbilLevelModField = doc.getField("healAbilLevelMod");
		var healAbilLevelMod = this.getAbilityModPlusLevel(this.skills.heal.ability);				
		healAbilLevelModField.value = signedNumberToString(healAbilLevelMod);
		var healTrainingBonusField = doc.getField("healTrainingBonus");
		if(healTrainingBonusField.value != this.skills.heal.trainedBonus){
			healTrainingBonusField.value = signedNumberToString(this.skills.heal.trainedBonus);	
		}
		var healMiscModField = doc.getField("healMiscMod");
		if(healMiscModField.value != this.skills.heal.miscMod){
			healMiscModField.value = signedNumberToString(this.skills.heal.miscMod);	
		}

		var historyScoreField = doc.getField("historyScore");
		var historyScore = this.getSkillScore("history");				
		historyScoreField.value = signedNumberToString(historyScore); 
		var historyAbilLevelModField = doc.getField("historyAbilLevelMod");
		var historyAbilLevelMod = this.getAbilityModPlusLevel(this.skills.history.ability);				
		historyAbilLevelModField.value = signedNumberToString(historyAbilLevelMod);
		var historyTrainingBonusField = doc.getField("historyTrainingBonus");
		if(historyTrainingBonusField.value != this.skills.history.trainedBonus){
			historyTrainingBonusField.value = signedNumberToString(this.skills.history.trainedBonus);	
		}
		var historyMiscModField = doc.getField("historyMiscMod");
		if(historyMiscModField.value != this.skills.history.miscMod){
			historyMiscModField.value = signedNumberToString(this.skills.history.miscMod);	
		}

		var insightScoreField = doc.getField("insightScore");
		var insightScore = this.getSkillScore("insight");				
		insightScoreField.value = signedNumberToString(insightScore); 
		var insightAbilLevelModField = doc.getField("insightAbilLevelMod");
		var insightAbilLevelMod = this.getAbilityModPlusLevel(this.skills.insight.ability);				
		insightAbilLevelModField.value = signedNumberToString(insightAbilLevelMod);
		var insightTrainingBonusField = doc.getField("insightTrainingBonus");
		if(insightTrainingBonusField.value != this.skills.insight.trainedBonus){
			insightTrainingBonusField.value = signedNumberToString(this.skills.insight.trainedBonus);	
		}
		var insightMiscModField = doc.getField("insightMiscMod");
		if(insightMiscModField.value != this.skills.insight.miscMod){
			insightMiscModField.value = signedNumberToString(this.skills.insight.miscMod);	
		}

		var intimidateScoreField = doc.getField("intimidateScore");
		var intimidateScore = this.getSkillScore("intimidate");				
		intimidateScoreField.value = signedNumberToString(intimidateScore); 
		var intimidateAbilLevelModField = doc.getField("intimidateAbilLevelMod");
		var intimidateAbilLevelMod = this.getAbilityModPlusLevel(this.skills.intimidate.ability);				
		intimidateAbilLevelModField.value = signedNumberToString(intimidateAbilLevelMod);
		var intimidateTrainingBonusField = doc.getField("intimidateTrainingBonus");
		if(intimidateTrainingBonusField.value != this.skills.intimidate.trainedBonus){
			intimidateTrainingBonusField.value = signedNumberToString(this.skills.intimidate.trainedBonus);	
		}
		var intimidateMiscModField = doc.getField("intimidateMiscMod");
		if(intimidateMiscModField.value != this.skills.intimidate.miscMod){
			intimidateMiscModField.value = signedNumberToString(this.skills.intimidate.miscMod);	
		}

		var natureScoreField = doc.getField("natureScore");
		var natureScore = this.getSkillScore("nature");				
		natureScoreField.value = signedNumberToString(natureScore); 
		var natureAbilLevelModField = doc.getField("natureAbilLevelMod");
		var natureAbilLevelMod = this.getAbilityModPlusLevel(this.skills.nature.ability);				
		natureAbilLevelModField.value = signedNumberToString(natureAbilLevelMod);
		var natureTrainingBonusField = doc.getField("natureTrainingBonus");
		if(natureTrainingBonusField.value != this.skills.nature.trainedBonus){
			natureTrainingBonusField.value = signedNumberToString(this.skills.nature.trainedBonus);	
		}
		var natureMiscModField = doc.getField("natureMiscMod");
		if(natureMiscModField.value != this.skills.nature.miscMod){
			natureMiscModField.value = signedNumberToString(this.skills.nature.miscMod);	
		}

		var perceptionScoreField = doc.getField("perceptionScore");
		var perceptionScore = this.getSkillScore("perception");				
		perceptionScoreField.value = signedNumberToString(perceptionScore); 
		var perceptionAbilLevelModField = doc.getField("perceptionAbilLevelMod");
		var perceptionAbilLevelMod = this.getAbilityModPlusLevel(this.skills.perception.ability);				
		perceptionAbilLevelModField.value = signedNumberToString(perceptionAbilLevelMod);
		var perceptionTrainingBonusField = doc.getField("perceptionTrainingBonus");
		if(perceptionTrainingBonusField.value != this.skills.perception.trainedBonus){
			perceptionTrainingBonusField.value = signedNumberToString(this.skills.perception.trainedBonus);	
		}
		var perceptionMiscModField = doc.getField("perceptionMiscMod");
		if(perceptionMiscModField.value != this.skills.perception.miscMod){
			perceptionMiscModField.value = signedNumberToString(this.skills.perception.miscMod);	
		}

		var religionScoreField = doc.getField("religionScore");
		var religionScore = this.getSkillScore("religion");				
		religionScoreField.value = signedNumberToString(religionScore); 
		var religionAbilLevelModField = doc.getField("religionAbilLevelMod");
		var religionAbilLevelMod = this.getAbilityModPlusLevel(this.skills.religion.ability);				
		religionAbilLevelModField.value = signedNumberToString(religionAbilLevelMod);
		var religionTrainingBonusField = doc.getField("religionTrainingBonus");
		if(religionTrainingBonusField.value != this.skills.religion.trainedBonus){
			religionTrainingBonusField.value = signedNumberToString(this.skills.religion.trainedBonus);	
		}
		var religionMiscModField = doc.getField("religionMiscMod");
		if(religionMiscModField.value != this.skills.religion.miscMod){
			religionMiscModField.value = signedNumberToString(this.skills.religion.miscMod);	
		}

		var stealthScoreField = doc.getField("stealthScore");
		var stealthScore = this.getSkillScore("stealth");				
		stealthScoreField.value = signedNumberToString(stealthScore); 
		var stealthAbilLevelModField = doc.getField("stealthAbilLevelMod");
		var stealthAbilLevelMod = this.getAbilityModPlusLevel(this.skills.stealth.ability);				
		stealthAbilLevelModField.value = signedNumberToString(stealthAbilLevelMod);
		var stealthTrainingBonusField = doc.getField("stealthTrainingBonus");
		if(stealthTrainingBonusField.value != this.skills.stealth.trainedBonus){
			stealthTrainingBonusField.value = signedNumberToString(this.skills.stealth.trainedBonus);	
		}
		var stealthArmorPenaltyField = doc.getField("stealthArmorPenalty");
		if(stealthArmorPenaltyField.value != this.skills.stealth.armorPenalty){
			stealthArmorPenaltyField.value = signedNumberToString(this.skills.stealth.armorPenalty);	
		}	
		var stealthMiscModField = doc.getField("stealthMiscMod");
		if(stealthMiscModField.value != this.skills.stealth.miscMod){
			stealthMiscModField.value = signedNumberToString(this.skills.stealth.miscMod);	
		}

		var streetwiseScoreField = doc.getField("streetwiseScore");
		var streetwiseScore = this.getSkillScore("streetwise");				
		streetwiseScoreField.value = signedNumberToString(streetwiseScore); 
		var streetwiseAbilLevelModField = doc.getField("streetwiseAbilLevelMod");
		var streetwiseAbilLevelMod = this.getAbilityModPlusLevel(this.skills.streetwise.ability);				
		streetwiseAbilLevelModField.value = signedNumberToString(streetwiseAbilLevelMod);
		var streetwiseTrainingBonusField = doc.getField("streetwiseTrainingBonus");
		if(streetwiseTrainingBonusField.value != this.skills.streetwise.trainedBonus){
			streetwiseTrainingBonusField.value = signedNumberToString(this.skills.streetwise.trainedBonus);	
		}
		var streetwiseMiscModField = doc.getField("streetwiseMiscMod");
		if(streetwiseMiscModField.value != this.skills.streetwise.miscMod){
			streetwiseMiscModField.value = signedNumberToString(this.skills.streetwise.miscMod);	
		}

		var thieveryScoreField = doc.getField("thieveryScore");
		var thieveryScore = this.getSkillScore("thievery");				
		thieveryScoreField.value = signedNumberToString(thieveryScore); 
		var thieveryAbilLevelModField = doc.getField("thieveryAbilLevelMod");
		var thieveryAbilLevelMod = this.getAbilityModPlusLevel(this.skills.thievery.ability);				
		thieveryAbilLevelModField.value = signedNumberToString(thieveryAbilLevelMod);
		var thieveryTrainingBonusField = doc.getField("thieveryTrainingBonus");
		if(thieveryTrainingBonusField.value != this.skills.thievery.trainedBonus){
			thieveryTrainingBonusField.value = signedNumberToString(this.skills.thievery.trainedBonus);	
		}
		var thieveryArmorPenaltyField = doc.getField("thieveryArmorPenalty");
		if(thieveryArmorPenaltyField.value != this.skills.thievery.armorPenalty){
			thieveryArmorPenaltyField.value = signedNumberToString(this.skills.thievery.armorPenalty);	
		}	
		var thieveryMiscModField = doc.getField("thieveryMiscMod");
		if(thieveryMiscModField.value != this.skills.thievery.miscMod){
			thieveryMiscModField.value = signedNumberToString(this.skills.thievery.miscMod);	
		}

		var passiveInsightScoreField = doc.getField("passiveInsightScore");
		passiveInsightScoreField.value = 10 + insightScore;
		var passiveInsightModField = doc.getField("passiveInsightSkillMod");
		passiveInsightModField.value = signedNumberToString(insightScore);		

		var passivePerceptionScoreField = doc.getField("passivePerceptionScore");
		passivePerceptionScoreField.value = 10 + perceptionScore;
		var passivePerceptionModField = doc.getField("passivePerceptionSkillMod");
		passivePerceptionModField.value = signedNumberToString(perceptionScore);			

	},	

	xp: 0,
	extraLevels: 0,

	getLevel: function(){		
		return Level.fromXp(this.xp) + this.extraLevels;
	},

	getLevelMod: function(){
		var level = this.getLevel();		
		var halfLevel = level/2;
		return Math.floor(halfLevel);
	},

	money: {
		astralDiamonds: 0,
		platinum: 0,
		gold: 0,
		silver: 0,
		copper: 0
	},

	class: "-",
	paragonPath: "-",
	epicDestiny: "-",

	setClassData: function(newClass){
		for (var defense in this.defenses) {
		    if (this.defenses.hasOwnProperty(defense)) {
		        if(newClass.defenseMods[defense]){
		        	this.defenses[defense].classMod = newClass.defenseMods[defense];
		        }else{
		        	this.defenses[defense].classMod = 0;
		        }
		    }
		}
		// var level = this.getLevel();	
		// var conMod = this.getAbilityMod("con");	
		// maxHp = newClass.startHits + conMod + newClass.hitsByLevel*(level-1);
		// surgeValue = maxHp/4;
		// surgesPerDay = newClass.surgesByDay + conMod;
		for (var skill in this.skills) {
		    if (this.skills.hasOwnProperty(skill)) {
		    	if(newClass.skills.includes(skill)){
		    		this.skills[skill].trainedBonus = 5;
		    	}else{
		    		this.skills[skill].trainedBonus = 0;
		    	}
		    }
		}		
	},

	race: "-",

	setRaceData: function(newRace){
		for (var skill in this.skills) {
		    if (this.skills.hasOwnProperty(skill)) {
		        if(newRace.skillMods[skill]>0){
		        	this.skills[skill].miscMod = newRace.skillMods[skill];
		        }else{
		        	this.skills[skill].miscMod = 0;
		        }
		    }
		}		
		this.size = newRace.size;
		this.speed.base = newRace.speed; 
	},

	size: "-",

	deity: "-",

	gender: "-",

	alignment: "ALIGNMENT_UNALIGNED",

	abilities: {
		str: 0,
		con: 0,
		dex: 0,
		int: 0,
		wis: 0,
		cha: 0
	},

	getAbilityMod: function(ability){
		var abilityValue = this.abilities[ability];
		if(ability in this.abilities){			
			return Math.floor( (this.abilities[ability]-10) / 2 )
		}
	},

	getAbilityModPlusLevel: function(ability){
		return this.getAbilityMod(ability) + this.getLevelMod();
	},

	extraHp: 0,
	extraSurgeValue: 0,
	extraSurgesPerDay: 0,

	getBaseHp: function(){
		var level = this.getLevel();		
		var classData = PlayerClass[this.class];
		if(classData){
			return classData.startHits + this.abilities.con + classData.hitsByLevel*(level-1);
		} else {
			return this.abilities.con;	
		}		 
	},

	getMaxHp: function(){
		var baseHp = this.getBaseHp();
		return baseHp + this.extraHp;
	},

	getBloodiedValue: function(){
		var hp = this.getMaxHp();
		return Math.floor(hp/2); 		
	},

	getBaseSurgeValue: function(){
		var hp = this.getMaxHp();
		return Math.floor(hp/4); 
	},

	getSurgeValue: function(){
		var baseSurgeValue = this.getBaseSurgeValue();
		return baseSurgeValue + this.extraSurgeValue;
	},

	getBaseSurgesPerDay: function(){		
		var conMod = this.getAbilityMod("con");	
		var classData = PlayerClass[this.class];
		if(classData){
			return classData.surgesByDay + conMod;
		} else {
			return conMod;	
		}
	},

	getSurgesPerDay: function(){
		var baseSurgesPerDay = this.getBaseSurgesPerDay();
		return baseSurgesPerDay + this.extraSurgesPerDay;
	},	

	initiativeMiscBonus: 0,

	getInitiative: function(){
		return this.getAbilityModPlusLevel("dex") + this.initiativeMiscBonus; 
	},

	speed: {
		base: 0,
		armorMod: 0,
		itemMod: 0,
		miscMod: 0		
	},	

	getSpeed: function(){
		return this.speed.base + this.speed.armorMod + this.speed.itemMod + this.speed.miscMod;
	},

	defenses: {
		ac: {
			armorOrAbilityMod: 0,
			classMod: 0,
			featMod: 0,
			enhancementMod: 0,
			firstMiscMod: 0,
			secondMiscMod: 0
		},

		fort: {			
			classMod: 0,
			featMod: 0,
			enhancementMod: 0,
			firstMiscMod: 0,
			secondMiscMod: 0
		},

		ref: {			
			classMod: 0,
			featMod: 0,
			enhancementMod: 0,
			firstMiscMod: 0,
			secondMiscMod: 0
		},

		will: {			
			classMod: 0,
			featMod: 0,
			enhancementMod: 0,
			firstMiscMod: 0,
			secondMiscMod: 0
		},		
	},	

	getDefenseScore: function(defense){
		var levelMod = this.getLevelMod();
		var abilityMod = this.getDefenseAbilityMod(defense);
		return 10 + levelMod + abilityMod 
			+ this.defenses[defense].classMod + this.defenses[defense].featMod 
			+ this.defenses[defense].enhancementMod + this.defenses[defense].firstMiscMod
			+ this.defenses[defense].secondMiscMod;
	},

	getDefenseAbilityMod: function(defense){
		if(defense == "ac"){
			return this.defenses.ac.armorOrAbilityMod;
		}
		var fisrtAbilityMod = 0;
		var secondAbilityMod = 0;
		switch(defense){
			case "fort":
				fisrtAbilityMod = this.getAbilityMod("str");
				secondAbilityMod = this.getAbilityMod("con");
				break;
			case "ref":
				fisrtAbilityMod = this.getAbilityMod("dex");
				secondAbilityMod = this.getAbilityMod("int");
				break;				
			case "will":
				fisrtAbilityMod = this.getAbilityMod("wis");
				secondAbilityMod = this.getAbilityMod("cha");
				break;												
		}
		return (fisrtAbilityMod>secondAbilityMod) ? fisrtAbilityMod : secondAbilityMod;
	},

	skills: {
		acrobatics: {
			ability: "dex",
			trainedBonus: 0,
			armorPenalty: 0,
			miscMod: 0
		},
		arcana: {
			ability: "int",
			trainedBonus: 0,
			armorPenalty: 0,
			miscMod: 0
		},
		athletics: {
			ability: "str",
			trainedBonus: 0,
			armorPenalty: 0,
			miscMod: 0
		},
		bluff: {
			ability: "cha",
			trainedBonus: 0,
			armorPenalty: 0,
			miscMod: 0
		},
		diplomacy: {
			ability: "cha",
			trainedBonus: 0,
			armorPenalty: 0,
			miscMod: 0
		},
		dungeoneering: {
			ability: "wis",
			trainedBonus: 0,
			armorPenalty: 0,
			miscMod: 0
		},
		endurance: {
			ability: "con",
			trainedBonus: 0,
			armorPenalty: 0,
			miscMod: 0
		},
		heal: {
			ability: "wis",
			trainedBonus: 0,
			armorPenalty: 0,
			miscMod: 0
		},
		history: {
			ability: "int",
			trainedBonus: 0,
			armorPenalty: 0,
			miscMod: 0
		},
		insight: {
			ability: "wis",
			trainedBonus: 0,
			armorPenalty: 0,
			miscMod: 0
		},
		intimidate: {
			ability: "cha",
			trainedBonus: 0,
			armorPenalty: 0,
			miscMod: 0
		},
		nature: {
			ability: "wis",
			trainedBonus: 0,
			armorPenalty: 0,
			miscMod: 0
		},
		perception: {
			ability: "wis",
			trainedBonus: 0,
			armorPenalty: 0,
			miscMod: 0
		},
		religion: {
			ability: "int",
			trainedBonus: 0,
			armorPenalty: 0,
			miscMod: 0
		},
		stealth: {
			ability: "dex",
			trainedBonus: 0,
			armorPenalty: 0,
			miscMod: 0
		},
		streetwise: {
			ability: "cha",
			trainedBonus: 0,
			armorPenalty: 0,
			miscMod: 0
		},
		thievery: {
			ability: "dex",
			trainedBonus: 0,
			armorPenalty: 0,
			miscMod: 0
		}			
	},

	getSkillScore: function(skill){
		var abilityMod = this.getAbilityModPlusLevel(this.skills[skill].ability);
		return abilityMod + this.skills[skill].trainedBonus 
			+ this.skills[skill].armorPenalty + this.skills[skill].miscMod;
	}

};