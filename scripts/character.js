var character = {

	loadValues: function(doc) {	
		var xpField = doc.getField("xp");
		this.xp = xpField.value;
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
	},

	updateView: function(doc) {		
		var xpField = doc.getField("xp");
		if(xpField.value != this.xp){
			xpField.value = this.xp;	
		}		
		var levelField = doc.getField("level");
		var newLevel = this.getLevel(); 
		if(levelField.value != newLevel){
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
	},	

	xp: 0,

	getLevel: function(){
		return level.fromXp(this.xp);
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

	maxHp: 0,
	surgeValue: 0,
	surgesPerDay: 0,

	initiativeMiscBonus: 0,

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