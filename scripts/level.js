var level = {

	fromXp: function(xp) {
		if (1000000 <= xp) {
			return 30;		
		} else if ( (825000 <= xp) && (xp < 1000000) ) {
			return 29;		
		} else if ( (675000 <= xp) && (xp < 825000) ) {
			return 28;		
		} else if ( (550000 <= xp) && (xp < 675000) ) {
			return 27;		
		} else if ( (450000 <= xp) && (xp < 550000) ) {
			return 26;		
		} else if ( (375000 <= xp) && (xp < 450000) ) {
			return 25;		
		} else if ( (310000 <= xp) && (xp < 375000) ) {
			return 24;		
		} else if ( (255000 <= xp) && (xp < 310000) ) {
			return 23;		
		} else if ( (210000 <= xp) && (xp < 255000) ) {
			return 22;		
		} else if ( (175000 <= xp) && (xp < 210000) ) {
			return 21;		
		} else if ( (143000 <= xp) && (xp < 175000) ) {
			return 20;		
		} else if ( (119000 <= xp) && (xp < 143000) ) {
			return 19;		
		} else if ( (99000 <= xp) && (xp < 119000) ) {
			return 18;		
		} else if ( (83000 <= xp) && (xp < 99000) ) {
			return 17;		
		} else if ( (69000 <= xp) && (xp < 83000) ) {
			return 16;		
		} else if ( (57000 <= xp) && (xp < 69000) ) {
			return 15;		
		} else if ( (47000 <= xp) && (xp < 57000) ) {
			return 14;		
		} else if ( (39000 <= xp) && (xp < 47000) ) {
			return 13;		
		} else if ( (32000 <= xp) && (xp < 39000) ) {
			return 12;		
		} else if ( (26000 <= xp) && (xp < 32000) ) {
			return 11;		
		} else if ( (20500 <= xp) && (xp < 26000) ) {
			return 10;		
		} else if ( (16500 <= xp) && (xp < 20500) ) {
			return 9;		
		} else if ( (13000 <= xp) && (xp < 16500) ) {
			return 8;		
		} else if ( (10000 <= xp) && (xp < 13000) ) {
			return 7;		
		} else if ( (7500 <= xp) && (xp < 10000) ) {
			return 6;		
		} else if ( (5500 <= xp) && (xp < 7500) ) {
			return 5;		
		} else if ( (3750 <= xp) && (xp < 5500) ) {
			return 4;		
		} else if ( (2250 <= xp) && (xp < 3750) ) {
			return 3;		
		} else if ( (1000 <= xp) && (xp < 2250) ) {
			return 2;		
		} else if ( (0 <= xp) && (xp < 1000) ) {
			return 1;
		} else {
			return -1;		
		}
	},

	toXp: function(level) {
		switch(level){
			case 1: return 0;
			case 2: return 1000;			
			case 3: return 2250;
			case 4: return 3750;
			case 5: return 5500;
			case 6: return 7500;
			case 7: return 10000;
			case 8: return 13000;
			case 9: return 16500;
			case 10: return 20500;
			case 11: return 26000;
			case 12: return 32000;
			case 13: return 39000;
			case 14: return 47000;
			case 15: return 57000;
			case 16: return 69000;
			case 17: return 83000;
			case 18: return 99000;
			case 19: return 119000;
			case 20: return 143000;
			case 21: return 175000;
			case 22: return 210000;
			case 23: return 255000;
			case 24: return 310000;
			case 25: return 375000;
			case 26: return 450000;
			case 27: return 550000;
			case 28: return 675000;
			case 29: return 825000;
			case 30: return 1000000;
			default: return 1000000;

		}

	}

};