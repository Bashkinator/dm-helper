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

	xpField: {
		validate: function(event){
			var newXp = parseInt(event.value);
			if(Number.isNaN(newXp) || (newXp<0)){
				event.rc = false;
			}
		},
		onChange: function(event) {
			if(!event) return;
			var newXp = parseInt(event.value);
			if(!Number.isNaN(newXp) && (newXp != character.xp)){
				character.xp = newXp;
				character.updateView(event.target.doc);
			}			
		}
	},	

	levelField: {
		validate: function(event){
			var newLevel = parseInt(event.value);
			if(Number.isNaN(newLevel) || (newLevel<1)){
				event.rc = false;
			}			
		},		
		onChange: function(event) {
			if(!event) return;
			var newLevel = parseInt(event.value);
			if(!Number.isNaN(newLevel)){
				var oldLevel = level.fromXp(character.xp);
				if(oldLevel != newLevel){
					character.xp = level.toXp(newLevel);
					character.updateView(event.target.doc);	
				}
				
			}		
		}
	}	

};
