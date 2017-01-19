var character = {

	loadValues: function(doc) {	
		var xpField = doc.getField("xp");
		this.xp = xpField.value;
		var levelVal = this.getLevel();
		if(levelVal == 30){
			var levelField = doc.getField("level");
			this.extraLevels = parseInt(levelField.value) - levelVal;
		}else{
			this.extraLevels = 0;
		}
		var astralDiamondsField = doc.getField("aDiamonds");
		this.money.astralDiamonds = astralDiamondsField.value;		
		var platinumField = doc.getField("platinum");
		this.money.platinum = platinumField.value;				
		var goldField = doc.getField("gold");
		this.money.gold = goldField.value;		
		var silverField = doc.getField("silver");
		this.money.silver = silverField.value;		
		var copperField = doc.getField("copper");
		this.money.copper = copperField.value;		

		var strField = doc.getField("abilityStrScore");
		this.abilities.str = strField.value;		
		var conField = doc.getField("abilityConScore");
		this.abilities.con = conField.value;
		var dexField = doc.getField("abilityDexScore");
		this.abilities.dex = dexField.value;
		var intField = doc.getField("abilityIntScore");
		this.abilities.int = intField.value;
		var wisField = doc.getField("abilityWisScore");
		this.abilities.wis = wisField.value;								
		var chaField = doc.getField("abilityChaScore");
		this.abilities.cha = chaField.value;

		var initiativeMiscField = doc.getField("initiativeMiscMod");
		this.initiativeMiscBonus = initiativeMiscField.value;				

	},

	updateView: function(doc) {		
		var xpField = doc.getField("xp");
		if(xpField.value != this.xp){
			xpField.value = this.xp;	
		}		
		var levelField = doc.getField("level");
		var newLevel = this.getLevel(); 		
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
		strModField.value = ((strMod>0)?"+":"")+strMod;
		var strModLevField = doc.getField("abilityStrModLev");
		var strModLev = this.getAbilityModPlusLevel("str");
		strModLevField.value = ((strModLev>0)?"+":"")+strModLev;		
		
		var conField = doc.getField("abilityConScore");
		if(conField.value != this.abilities.con){
			conField.value = this.abilities.con;	
		}
		var conModField = doc.getField("abilityConMod");		
		var conMod = this.getAbilityMod("con");
		conModField.value = ((conMod>0)?"+":"")+conMod;
		var conModLevField = doc.getField("abilityConModLev");
		var conModLev = this.getAbilityModPlusLevel("con");
		conModLevField.value = ((conModLev>0)?"+":"")+conModLev;				
		
		var dexField = doc.getField("abilityDexScore");
		if(dexField.value != this.abilities.dex){
			dexField.value = this.abilities.dex;	
		}
		var dexModField = doc.getField("abilityDexMod");
		var dexMod = this.getAbilityMod("dex");
		dexModField.value = ((dexMod>0)?"+":"")+dexMod;
		var dexModLevField = doc.getField("abilityDexModLev");
		var dexModLev = this.getAbilityModPlusLevel("dex");
		dexModLevField.value = ((dexModLev>0)?"+":"")+dexModLev;				
		
		var intField = doc.getField("abilityIntScore");
		if(intField.value != this.abilities.int){
			intField.value = this.abilities.int;	
		}
		var intModField = doc.getField("abilityIntMod");
		var intMod = this.getAbilityMod("int");
		intModField.value = ((intMod>0)?"+":"")+intMod;	
		var intModLevField = doc.getField("abilityIntModLev");
		var intModLev = this.getAbilityModPlusLevel("int");
		intModLevField.value = ((intModLev>0)?"+":"")+intModLev;					

		var wisField = doc.getField("abilityWisScore");
		if(wisField.value != this.abilities.wis){
			wisField.value = this.abilities.wis;	
		}
		var wisModField = doc.getField("abilityWisMod");
		var wisMod = this.getAbilityMod("wis");
		wisModField.value = ((wisMod>0)?"+":"")+wisMod;
		var wisModLevField = doc.getField("abilityWisModLev");
		var wisModLev = this.getAbilityModPlusLevel("wis");
		wisModLevField.value = ((wisModLev>0)?"+":"")+wisModLev;				

		var chaField = doc.getField("abilityChaScore");
		if(chaField.value != this.abilities.cha){
			chaField.value = this.abilities.cha;	
		}
		var chaModField = doc.getField("abilityChaMod");
		var chaMod = this.getAbilityMod("cha");
		chaModField.value = ((chaMod>0)?"+":"")+chaMod;				
		var chaModLevField = doc.getField("abilityChaModLev");
		var chaModLev = this.getAbilityModPlusLevel("cha");
		chaModLevField.value = ((chaModLev>0)?"+":"")+chaModLev;				

		var initiativeField = doc.getField("initiativeScore");
		var initiative = this.getInitiative();
		initiativeField.value = ((initiative>0)?"+":"")+initiative;
		var initiativeDexModField = doc.getField("initiativeDexMod");
		initiativeDexModField.value = ((dexMod>0)?"+":"")+dexMod;		
		var initiativeLevelModField = doc.getField("initiativeLevelMod");
		var levelMod = this.getLevelMod();
		initiativeLevelModField.value = ((levelMod>0)?"+":"")+levelMod;		
		var initiativeMiscField = doc.getField("initiativeMiscMod");
		if(initiativeMiscField.value != this.initiativeMiscBonus){
			initiativeMiscField.value = this.initiativeMiscBonus;
		}			
						
	},	

	xp: 0,
	extraLevels: 0,

	getLevel: function(){		
		return level.fromXp(this.xp) + this.extraLevels;
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

	class: "",
	paragonPath: "-",
	epicDestiny: "-",

	race: "",

	size: "",

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

	maxHp: 0,
	surgeValue: 0,
	surgesPerDay: 0,

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
			armorOrAbilityMod: 0,
			classMod: 0,
			featMod: 0,
			enhancementMod: 0,
			firstMiscMod: 0,
			secondMiscMod: 0
		},

		ref: {
			armorOrAbilityMod: 0,
			classMod: 0,
			featMod: 0,
			enhancementMod: 0,
			firstMiscMod: 0,
			secondMiscMod: 0
		},

		will: {
			armorOrAbilityMod: 0,
			classMod: 0,
			featMod: 0,
			enhancementMod: 0,
			firstMiscMod: 0,
			secondMiscMod: 0
		},		
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

};