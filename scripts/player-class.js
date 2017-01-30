var PlayerClass = {
	
	CLASS_CLERIC: {
		defenseMods: {
			will: 2
		},		
		startHits: 12, //+con
		hitsByLevel: 5,
		surgesByDay: 7, //+con
		powerSource: "divine",
		skills: ["religion"],
		paragonPaths: [
			"PARAGON_PATH_ANGELIC_AVENGER",
			"PARAGON_PATH_DIVINE_ORACLE",
			"PARAGON_PATH_RADIANT_SERVANT",
			"PARAGON_PATH_WARPRIEST"						
		]

	},

	CLASS_FIGHTER: {
		defenseMods: {
			fort: 2
		},		
		startHits: 15, //+con
		hitsByLevel: 6,
		surgesByDay: 9, //+con
		powerSource: "martial",		
		skills: [],
		paragonPaths: [
			"PARAGON_PATH_IRON_VANGUARD",
			"PARAGON_PATH_KENSEI",
			"PARAGON_PATH_PIT_FIGHTER",
			"PARAGON_PATH_SWORDMASTER"
		]		
	},
	
	CLASS_PALADIN: {
		defenseMods: {
			fort: 1,
			ref: 1,
			will: 1
		},		
		startHits: 15, //+con
		hitsByLevel: 6,
		surgesByDay: 10, //+con
		powerSource: "divine",		
		skills: ["religion"],
		paragonPaths: [
			"PARAGON_PATH_ASTRAL_WEAPON",
			"PARAGON_PATH_CHAMPION_OF_ORDER",
			"PARAGON_PATH_HOSPITALER",
			"PARAGON_PATH_JUSTICIAR"
		]
	},
	
	CLASS_RANGER: {
		defenseMods: {
			fort: 1,
			ref: 1
		},		
		startHits: 12, //+con
		hitsByLevel: 5,
		surgesByDay: 6, //+con
		powerSource: "martial",
		skills: [], // "dungeoneering" or "nature"
		paragonPaths: [
			"PARAGON_PATH_BATTLEFIELD_ARCHER",
			"PARAGON_PATH_BEAST_STALKER",
			"PARAGON_PATH_PATHFINDER",
			"PARAGON_PATH_STORMWARDEN"
		]

	},
	
	CLASS_ROGUE: {
		defenseMods: {
			ref: 2
		},		
		startHits: 12, //+con
		hitsByLevel: 5,
		surgesByDay: 7, //+con
		powerSource: "martial",
		skills: ["stealth", "thievery"],
		paragonPaths: [
			"PARAGON_PATH_CAT_BURGLAR",
			"PARAGON_PATH_DAGGERMASTER",
			"PARAGON_PATH_MASTER_INFILTRATOR",
			"PARAGON_PATH_SHADOW_ASSASSIN"
		]
	},
	
	CLASS_WARLOCK: {
		defenseMods: {
			ref: 1,
			will: 1
		},		
		startHits: 12, //+con
		hitsByLevel: 5,
		surgesByDay: 6, //+con
		powerSource: "arcane",
		skills: [],
		paragonPaths: [
			"PARAGON_PATH_DOOMSAYER",
			"PARAGON_PATH_FEYTOUCHED",
			"PARAGON_PATH_LIFE_STEALER"
		]
	},
	
	CLASS_WARLORD: {
		defenseMods: {
			fort: 1,
			will: 1
		},		
		startHits: 12, //+con
		hitsByLevel: 5,
		surgesByDay: 7, //+con
		powerSource: "martial",
		skills: ["religion"],
		paragonPaths: [
			"PARAGON_PATH_BATTLE_CAPTAIN",
			"PARAGON_PATH_COMBAT_VETERAN",
			"PARAGON_PATH_KNIGHT_COMMANDER",
			"PARAGON_PATH_SWORD_MARSHAL"
		]
	},
	
	CLASS_WIZARD: {
		defenseMods: {
			will: 2
		},		
		startHits: 10, //+con
		hitsByLevel: 4,
		surgesByDay: 6, //+con
		skills: ["arcana"],
		paragonPaths: [
			"PARAGON_PATH_BATTLE_MAGE",
			"PARAGON_PATH_BLOOD_MAGE",
			"PARAGON_PATH_SPELLSTORM_MAGE",
			"PARAGON_PATH_WIZARD_OF_THE_SPIRAL_TOWER",
		]

	},
	
	CLASS_AVENGER: {
		defenseMods: {
			fort: 1,
			ref: 1,
			will: 1
		},		
		startHits: 14, //+con
		hitsByLevel: 6,
		surgesByDay: 7, //+con
		powerSource: "divine",
		skills: ["religion"],
		paragonPaths: [
			"PARAGON_PATH_HAMMER_OF_JUDGMENT",
			"PARAGON_PATH_OATHSWORN",
			"PARAGON_PATH_UNVEILED_VISAGE",
			"PARAGON_PATH_ZEALOUS_ASSASSIN"
		]

	},
	
	CLASS_BARBARIAN: {
		defenseMods: {
			fort: 2
		},		
		startHits: 15, //+con
		hitsByLevel: 6,
		surgesByDay: 8, //+con
		powerSource: "primal",
		skills: [],
		paragonPaths: [
			"PARAGON_PATH_BEAR_WARRIOR",
			"PARAGON_PATH_FEARBRINGER_THANE",
			"PARAGON_PATH_FRENZIED_BERSERKER",
			"PARAGON_PATH_WILDRUNNER"
		]

	},
	
	CLASS_BARD: {
		defenseMods: {
			ref: 1,
			will: 1
		},		
		startHits: 12, //+con
		hitsByLevel: 5,
		surgesByDay: 7, //+con
		powerSource: "arcane",
		skills: ["arcana"],
		paragonPaths: [
			"PARAGON_PATH_STUDENT_OF_THE_SEVEN",
			"PARAGON_PATH_SUMMER_RHYMER",
			"PARAGON_PATH_VOICE_OF_THUNDER",
			"PARAGON_PATH_WAR_CHANTER"
		]

	},
	
	CLASS_DRUID: {
		defenseMods: {
			ref: 1,
			will: 1
		},		
		startHits: 12, //+con
		hitsByLevel: 5,
		surgesByDay: 7, //+con
		powerSource: "primal",
		skills: ["nature"],
		paragonPaths: [
			"PARAGON_PATH_BLOOD_MOON_STALKER",
			"PARAGON_PATH_GUARDIAN_OF_THE_LIVING_GATE",
			"PARAGON_PATH_KEEPER_OF_THE_HIDDEN_FLAME",
			"PARAGON_PATH_SKY_HUNTER"
		]

	},
	
	CLASS_INVOKER: {
		defenseMods: {
			fort: 1,
			ref: 1,
			will: 1
		},		
		startHits: 10, //+con
		hitsByLevel: 4,
		surgesByDay: 6, //+con
		powerSource: "divine",
		skills: ["religion"],
		paragonPaths: [
			"PARAGON_PATH_ANGELIC_ASPECT",
			"PARAGON_PATH_BLIGHTSPEAKER",
			"PARAGON_PATH_FLAME_OF_HOPE",
			"PARAGON_PATH_HAMMER_OF_VENGEANCE"
		]

	},
	
	CLASS_SHAMAN: {
		defenseMods: {
			fort: 1,			
			will: 1
		},		
		startHits: 12, //+con
		hitsByLevel: 5,
		surgesByDay: 7, //+con
		powerSource: "primal",
		skills: ["nature"],
		paragonPaths: [
			"PARAGON_PATH_DISCIPLE_OF_THE_WORLD_SERPENT",
			"PARAGON_PATH_GHOST_PANTHER",
			"PARAGON_PATH_GREAT_BEAR_SHAMAN",
			"PARAGON_PATH_SPIRIT_TEMPEST"
		]

	},
	
	CLASS_SORCERER: {
		defenseMods: {
			will: 2
		},		
		startHits: 12, //+con
		hitsByLevel: 5,
		surgesByDay: 6, //+con
		powerSource: "arcane",
		skills: ["arcana"],
		paragonPaths: [
			"PARAGON_PATH_ARCANE_WELLSPRING",
			"PARAGON_PATH_DEMONSKIN_ADEPT",
			"PARAGON_PATH_DRAGONSOUL_HEIR",
			"PARAGON_PATH_WILD_MAGE"
		]

	},
	
	CLASS_WARDEN: {
		defenseMods: {
			fort: 1,			
			will: 1
		},		
		startHits: 17, //+con
		hitsByLevel: 7,
		surgesByDay: 9, //+con
		powerSource: "primal",
		skills: ["nature"],
		paragonPaths: [
			"PARAGON_PATH_BLOODWRATH_GUARDIAN",
			"PARAGON_PATH_HORNED_CHAMPION",
			"PARAGON_PATH_STORM_SENTINEL",
			"PARAGON_PATH_VERDANT_LORD"
		]

	},
	
	CLASS_ARDENT: {
		defenseMods: {
			fort: 1,			
			will: 1
		},		
		startHits: 12, //+con
		hitsByLevel: 5,
		surgesByDay: 7, //+con
		powerSource: "psionic",
		skills: [],
		paragonPaths: [
			"PARAGON_PATH_ARGENT_SOUL",
			"PARAGON_PATH_PSIONIC_BINDER",
			"PARAGON_PATH_STYGIAN_ADEPT",
			"PARAGON_PATH_TALARIC_STRATEGIST"
		]

	},
	
	CLASS_BATTLEMIND: {
		defenseMods: {
			will: 2
		},		
		startHits: 15, //+con
		hitsByLevel: 6,
		surgesByDay: 9, //+con
		powerSource: "psionic",
		skills: [],
		paragonPaths: [
			"PARAGON_PATH_ETERNAL_BLADE",
			"PARAGON_PATH_IRON_GUARDIAN",
			"PARAGON_PATH_STEEL_EGO",
			"PARAGON_PATH_ZEPHYR_BLADE",
		]

	},
	
	CLASS_MONK: {
		defenseMods: {
			fort: 1,
			ref: 1,
			will: 1
		},		
		startHits: 12, //+con
		hitsByLevel: 5,
		surgesByDay: 7, //+con
		powerSource: "psionic",
		skills: [],
		paragonPaths: [
			"PARAGON_PATH_GHOSTWALKER",
			"PARAGON_PATH_INITIATE_OF_THE_DRAGON",
			"PARAGON_PATH_MOUNTAIN_DEVOTEE",
			"PARAGON_PATH_RADIANT_FIST"
		]

	},
	
	CLASS_PSION: {
		defenseMods: {
			will: 2
		},		
		startHits: 12, //+con
		hitsByLevel: 4,
		surgesByDay: 6, //+con
		powerSource: "psionic",
		skills: [],
		paragonPaths: [
			"PARAGON_PATH_CERULEAN_ADEPT",
			"PARAGON_PATH_DREAMWALKER",
			"PARAGON_PATH_TIME_BENDER",
			"PARAGON_PATH_UNCARNATE"
		]

	},
	
	CLASS_RUNEPRIEST: {
		defenseMods: {
			will: 2
		},		
		startHits: 12, //+con
		hitsByLevel: 5,
		surgesByDay: 7, //+con
		powerSource: "divine",
		skills: ["religion"],
		paragonPaths: [
			"PARAGON_PATH_HAMMER_OF_VENGEANCE",
			"PARAGON_PATH_LIGHT_BRINGER",
			"PARAGON_PATH_MASTER_OF_THE_FORGE",
			"PARAGON_PATH_RUNE_SHIELD"
		]

	},
	
	CLASS_SEEKER: {
		defenseMods: {
			will: 2
		},		
		startHits: 12, //+con
		hitsByLevel: 5,
		surgesByDay: 7, //+con
		powerSource: "primal",
		skills: ["religion"],
		paragonPaths: [
			"PARAGON_PATH_CRIMSON_HUNTER",
			"PARAGON_PATH_DEATH_ARROW",
			"PARAGON_PATH_SEVEN_FATES_ARCHER",
			"PARAGON_PATH_SWIFT_STRIDER"
		]

	}

};

var PlayerEpicDestinies = {
	"EPIC_DESTINY_ARCHMAGE": {
		isPrerequisitesOk: function(playerCharacter){
			if(!playerCharacter) return false;
			var level = playerCharacter.getLevel();
			return level > 20 && playerCharacter.class == "CLASS_WIZARD";
		}
	},
	"EPIC_DESTINY_DEADLY_TRICKSTER": {
		isPrerequisitesOk: function(playerCharacter){
			if(!playerCharacter) return false;
			var level = playerCharacter.getLevel();
			var abilityPrereq = (playerCharacter.abilities.dex>=21) || (playerCharacter.abilities.cha>=21);
			var skillsPrereq = (playerCharacter.skills.acrobatics.trainedBonus>0) || (playerCharacter.skills.bluff.trainedBonus>0)
								|| (playerCharacter.skills.stealth.trainedBonus>0) || (playerCharacter.skills.thievery.trainedBonus>0);
			return (level > 20) && abilityPrereq && skillsPrereq;
		}
	},
	"EPIC_DESTINY_DEMIGOD": {
		isPrerequisitesOk: function(playerCharacter){
			if(!playerCharacter) return false;
			var level = playerCharacter.getLevel();
			return level > 20;
		}
	},
	"EPIC_DESTINY_ETERNAL_SEEKER": {
		isPrerequisitesOk: function(playerCharacter){
			if(!playerCharacter) return false;
			var level = playerCharacter.getLevel();
			return level > 20;
		}
	},
	"EPIC_DESTINY_FATESINGER": {
		isPrerequisitesOk: function(playerCharacter){
			if(!playerCharacter) return false;
			var level = playerCharacter.getLevel();			
			return level > 20 && playerCharacter.class == "CLASS_BARD";
		}
	},
	"EPIC_DESTINY_GLORIOUS_SPIRIT": {
		isPrerequisitesOk: function(playerCharacter){
			if(!playerCharacter) return false;
			var level = playerCharacter.getLevel();						
			var playerClass = PlayerClass[playerCharacter.class];
			if(playerClass){				
				return level > 20 && playerClass.powerSource == "primal";
			}else{
				return false;
			}			
		}
	},
	"EPIC_DESTINY_HARBINGER_OF_DOOM": {
		isPrerequisitesOk: function(playerCharacter){
			if(!playerCharacter) return false;
			var level = playerCharacter.getLevel();
			return level > 20;
		}
	},
	"EPIC_DESTINY_LOREKEEPER": {
		isPrerequisitesOk: function(playerCharacter){
			if(!playerCharacter) return false;
			var level = playerCharacter.getLevel();
			var abilityPrereq = (playerCharacter.abilities.int>=21) || (playerCharacter.abilities.wis>=21);
			var knowledgeSkillsTrained = 0;
			knowledgeSkillsTrained += (playerCharacter.skills.arcana.trainedBonus>0) ? 1 : 0;
			knowledgeSkillsTrained += (playerCharacter.skills.dungeoneering.trainedBonus>0) ? 1 : 0;
			knowledgeSkillsTrained += (playerCharacter.skills.history.trainedBonus>0) ? 1 : 0;
			knowledgeSkillsTrained += (playerCharacter.skills.nature.trainedBonus>0) ? 1 : 0;
			knowledgeSkillsTrained += (playerCharacter.skills.religion.trainedBonus>0) ? 1 : 0;						
			return (level > 20) && abilityPrereq && knowledgeSkillsTrained>=2;
		}
	},
	"EPIC_DESTINY_PRIMAL_AVATAR": {
		isPrerequisitesOk: function(playerCharacter){
			if(!playerCharacter) return false;
			var level = playerCharacter.getLevel();						
			var playerClass = PlayerClass[playerCharacter.class];
			if(playerClass){				
				return level > 20 && playerClass.powerSource == "primal";
			}else{
				return false;
			}	
		}
	},
	"EPIC_DESTINY_REVERED_ONE": {
		isPrerequisitesOk: function(playerCharacter){
			if(!playerCharacter) return false;
			var level = playerCharacter.getLevel();						
			var playerClass = PlayerClass[playerCharacter.class];
			if(playerClass){				
				return level > 20 && playerClass.powerSource == "divine";
			}else{
				return false;
			}	
		}
	},
	"EPIC_DESTINY_DIAMOND_SOUL": {
		isPrerequisitesOk: function(playerCharacter){
			if(!playerCharacter) return false;
			var level = playerCharacter.getLevel();
			return level > 20 && playerCharacter.class == "CLASS_MONK";
		}
	},
	"EPIC_DESTINY_GODMIND": {
		isPrerequisitesOk: function(playerCharacter){
			if(!playerCharacter) return false;
			var level = playerCharacter.getLevel();						
			var playerClass = PlayerClass[playerCharacter.class];
			if(playerClass){				
				return level > 20 && playerClass.powerSource == "psionic";
			}else{
				return false;
			}	
		}
	},
	"EPIC_DESTINY_INVINCIBLE_MIND": {
		isPrerequisitesOk: function(playerCharacter){
			if(!playerCharacter) return false;
			var level = playerCharacter.getLevel();
			return level > 20 && playerCharacter.class == "CLASS_BATTLEMIND";
		}
	},
	"EPIC_DESTINY_MASTER_OF_THE_ETERNAL_HUNT": {
		isPrerequisitesOk: function(playerCharacter){
			if(!playerCharacter) return false;
			var level = playerCharacter.getLevel();
			return level > 20 && playerCharacter.class == "CLASS_SEEKER";
		}
	},
	"EPIC_DESTINY_RUNE_MAKER": {
		isPrerequisitesOk: function(playerCharacter){
			if(!playerCharacter) return false;
			var level = playerCharacter.getLevel();
			return level > 20 && playerCharacter.class == "CLASS_RUNEPRIEST";
		}
	},
	"EPIC_DESTINY_WAR_MASTER": {
		isPrerequisitesOk: function(playerCharacter){
			if(!playerCharacter) return false;
			var level = playerCharacter.getLevel();
			return level > 20 && playerCharacter.class == "CLASS_ARDENT";
		}
	}
};