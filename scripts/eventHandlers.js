var handlers = {

	portraitButton: {

		mouseUp: function(event) {
			if(!event) return;
			event.target.buttonImportIcon();
		}
		
	},

	addXpButton: {
		mouseUp: function(event) {
			if(!event) return;
			var newXp = app.response({
				cQuestion: l10n.translate("ADD_XP_REPONSE_TEXT"),
				cTitle: l10n.translate("ADD_XP_RESPONSE_TITLE"),
				cDefault: 0,
				cLabel: "+"
			});
			newXp = parseInt(newXp);
			if(!Number.isNaN(newXp) && newXp > 0){
				character.xp += newXp;
				character.updateView(event.target.doc);			
			}
		}
	},

	addADiamonds: {
		mouseUp: function(event) {
			if(!event) return;
			var newDiamonds = app.response({
				cQuestion: l10n.translate("ADD_ADIAMONDS_REPONSE_TEXT"),
				cTitle: l10n.translate("ADD_ADIAMONDS_RESPONSE_TITLE"),
				cDefault: 0,
				cLabel: "+"
			});
			newDiamonds = parseInt(newDiamonds);
			if(!Number.isNaN(newDiamonds) && newDiamonds > 0){
				character.money.astralDiamonds += newDiamonds;
				character.updateView(event.target.doc);			
			}
		}
	},	
	
	spendADiamonds: {
		mouseUp: function(event) {
			if(!event) return;
			var spentDiamonds = app.response({
				cQuestion: l10n.translate("SPEND_ADIAMONDS_REPONSE_TEXT"),
				cTitle: l10n.translate("SPEND_ADIAMONDS_RESPONSE_TITLE"),
				cDefault: 0,
				cLabel: "-"
			});
			spentDiamonds = parseInt(spentDiamonds);
			if(!Number.isNaN(spentDiamonds) && spentDiamonds > 0 && spentDiamonds <= character.money.astralDiamonds){
				character.money.astralDiamonds -= spentDiamonds;
				character.updateView(event.target.doc);			
			}
		}
	},	

	addPlatinum: {
		mouseUp: function(event) {
			if(!event) return;
			var newPlatinum = app.response({
				cQuestion: l10n.translate("ADD_PLATINUM_REPONSE_TEXT"),
				cTitle: l10n.translate("ADD_PLATINUM_RESPONSE_TITLE"),
				cDefault: 0,
				cLabel: "+"
			});
			newPlatinum = parseInt(newPlatinum);
			if(!Number.isNaN(newPlatinum) && newPlatinum > 0){
				character.money.platinum += newPlatinum;
				character.updateView(event.target.doc);			
			}
		}
	},	
	
	spendPlatinum: {
		mouseUp: function(event) {
			if(!event) return;
			var spentPlatinum = app.response({
				cQuestion: l10n.translate("SPEND_PLATINUM_REPONSE_TEXT"),
				cTitle: l10n.translate("SPEND_PLATINUM_RESPONSE_TITLE"),
				cDefault: 0,
				cLabel: "-"
			});
			spentPlatinum = parseInt(spentPlatinum);
			if(!Number.isNaN(spentPlatinum) && spentPlatinum > 0 && spentPlatinum <= character.money.platinum){
				character.money.platinum -= spentPlatinum;
				character.updateView(event.target.doc);			
			}
		}
	},	

	addGold: {
		mouseUp: function(event) {
			if(!event) return;
			var newGold = app.response({
				cQuestion: l10n.translate("ADD_GOLD_REPONSE_TEXT"),
				cTitle: l10n.translate("ADD_GOLD_RESPONSE_TITLE"),
				cDefault: 0,
				cLabel: "+"
			});
			newGold = parseInt(newGold);
			if(!Number.isNaN(newGold) && newGold > 0){
				character.money.gold += newGold;
				character.updateView(event.target.doc);			
			}
		}
	},	
	
	spendGold: {
		mouseUp: function(event) {
			if(!event) return;
			var spentGold = app.response({
				cQuestion: l10n.translate("SPEND_GOLD_REPONSE_TEXT"),
				cTitle: l10n.translate("SPEND_GOLD_RESPONSE_TITLE"),
				cDefault: 0,
				cLabel: "-"
			});
			spentGold = parseInt(spentGold);
			if(!Number.isNaN(spentGold) && spentGold > 0 && spentGold <= character.money.gold){
				character.money.gold -= spentGold;
				character.updateView(event.target.doc);			
			}
		}
	},	

	addSilver: {
		mouseUp: function(event) {
			if(!event) return;
			var newSilver = app.response({
				cQuestion: l10n.translate("ADD_SILVER_REPONSE_TEXT"),
				cTitle: l10n.translate("ADD_SILVER_RESPONSE_TITLE"),
				cDefault: 0,
				cLabel: "+"
			});
			newSilver = parseInt(newSilver);
			if(!Number.isNaN(newSilver) && newSilver > 0){
				character.money.silver += newSilver;
				character.updateView(event.target.doc);			
			}
		}
	},	
	
	spendSilver: {
		mouseUp: function(event) {
			if(!event) return;
			var spentSilver = app.response({
				cQuestion: l10n.translate("SPEND_SILVER_REPONSE_TEXT"),
				cTitle: l10n.translate("SPEND_SILVER_RESPONSE_TITLE"),
				cDefault: 0,
				cLabel: "-"
			});
			spentSilver = parseInt(spentSilver);
			if(!Number.isNaN(spentSilver) && spentSilver > 0 && spentSilver <= character.money.silver){
				character.money.silver -= spentSilver;
				character.updateView(event.target.doc);			
			}
		}
	},	

	addCopper: {
		mouseUp: function(event) {
			if(!event) return;
			var newCopper = app.response({
				cQuestion: l10n.translate("ADD_COPPER_REPONSE_TEXT"),
				cTitle: l10n.translate("ADD_COPPER_RESPONSE_TITLE"),
				cDefault: 0,
				cLabel: "+"
			});
			newCopper = parseInt(newCopper);
			if(!Number.isNaN(newCopper) && newCopper > 0){
				character.money.copper += newCopper;
				character.updateView(event.target.doc);			
			}
		}
	},	
	
	spendCopper: {
		mouseUp: function(event) {
			if(!event) return;
			var spentCopper = app.response({
				cQuestion: l10n.translate("SPEND_COPPER_REPONSE_TEXT"),
				cTitle: l10n.translate("SPEND_COPPER_RESPONSE_TITLE"),
				cDefault: 0,
				cLabel: "-"
			});
			spentCopper = parseInt(spentCopper);
			if(!Number.isNaN(spentCopper) && spentCopper > 0 && spentCopper <= character.money.copper){
				character.money.copper -= spentCopper;
				character.updateView(event.target.doc);			
			}
		}
	},					

	xp: {
		validate: function(event){
			var newXp = parseInt(event.value);
			if(Number.isNaN(newXp) || (newXp<0)){
				event.rc = false;
			}
		},
		onChange: function(event) {
			if(!event) return;
			var newXp = parseInt(event.value);
			if(newXp != character.xp){
				character.xp = newXp;
				character.updateView(event.target.doc);
			}			
		}
	},	

	level: {
		validate: function(event){
			var newLevel = parseInt(event.value);
			if(Number.isNaN(newLevel) || (newLevel<1)){
				event.rc = false;
			}			
		},		
		onChange: function(event) {
			if(!event) return;
			var newLevel = parseInt(event.value);
			var oldLevel = character.getLevel();						
			if(newLevel != oldLevel){
				if(newLevel>30){
					character.extraLevels = newLevel - 30;
					if(oldLevel<30){
						character.xp = level.toXp(newLevel);
					}					
				}else{
					character.extraLevels = 0
					character.xp = level.toXp(newLevel);
				}
				character.updateView(event.target.doc);		
			}
			
		}
	},

	money: {
		validate: function(event){
			var newMoney = parseInt(event.value);
			if(Number.isNaN(newMoney) || (newMoney<0)){
				event.rc = false;
			}
		},
		onChange: function(event, money) {
			if(!event) return;
			var newMoney = parseInt(event.value);
			if(newMoney != character.money[money]){
				character.money[money] = newMoney;
				character.updateView(event.target.doc);
			}			
		}
	},


	abilityScore: {
		validate: function(event){
			var newScore = parseInt(event.value);
			if(Number.isNaN(newScore) || (newScore<0)){
				event.rc = false;
			}
		},
		onChange: function(event, ability) {
			if(!event) return;
			var newScore = parseInt(event.value);
			if(newScore != character.abilities[ability]){
				character.abilities[ability] = newScore;
				character.updateView(event.target.doc);
			}			
		}
	},						

	initiativeMiscMod: {
		validate: function(event){
			if(!event) return;
			var newMod = parseInt(event.value);
			if(Number.isNaN(newMod)){
				event.rc = false;
			}
		},
		format: function(event){
			if(!event) return;
			var val = parseInt(event.value);
			event.value = ((val>0)?"+":"") + val;
			character.updateView(event.target.doc);	
		},
		onChange: function(event) {
			if(!event) return;
			var newMod = parseInt(event.value);
			if(newMod != character.initiativeMiscBonus){
				character.initiativeMiscBonus = newMod;				
			}			
		}
	}	

};
