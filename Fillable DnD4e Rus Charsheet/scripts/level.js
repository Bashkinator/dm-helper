var Level = {

	getLevel: function(){
		return this.getField("level").value;
	},

	setLevel: function(newLevel){
		if(1 <= newLevel && newLevel <= 30){
			this.getField("level").value = newLevel;	
		}
	},	

	expToLevel: function(exp){
		if(0 <= exp && exp < 1000) {
			return 1;		
		} else if(1000 <= exp && exp < 2250) {
			return 2;
		} else if(2250 <= exp && exp < 3750) {
			return 3;
		} else if(3750 <= exp && exp < 5500) {
			return 4;
		} else if(5500 <= exp && exp < 7500) {
			return 5;
		} else if(7500 <= exp && exp < 10000) {
			return 6;
		} else if(10000 <= exp && exp < 13000) {
			return 7;
		} else if(13000 <= exp && exp < 16500) {
			return 8;
		} else if(16500 <= exp && exp < 20500) {
			return 9;
		} else if(20500 <= exp && exp < 26000) {
			return 10;
		} else if(26000 <= exp && exp < 32000) {
			return 11;
		} else if(32000 <= exp && exp < 39000) {
			return 12;
		} else if(39000 <= exp && exp < 47000) {
			return 13;
		} else if(47000 <= exp && exp < 57000) {
			return 14;
		} else if(57000 <= exp && exp < 69000) {
			return 15;
		} else if(69000 <= exp && exp < 83000) {
			return 16;
		} else if(83000 <= exp && exp < 99000) {
			return 17;
		} else if(99000 <= exp && exp < 119000) {
			return 18;
		} else if(119000 <= exp && exp < 143000) {
			return 19;
		} else if(143000 <= exp && exp < 175000) {
			return 20;
		} else if(175000 <= exp && exp < 210000) {
			return 21;
		} else if(210000 <= exp && exp < 255000) {
			return 22;
		} else if(255000 <= exp && exp < 310000) {
			return 23;
		} else if(310000 <= exp && exp < 375000) {
			return 24;
		} else if(375000 <= exp && exp < 450000) {
			return 25;
		} else if(450000 <= exp && exp < 550000) {
			return 26;
		} else if(550000 <= exp && exp < 675000) {
			return 27;
		} else if(675000 <= exp && exp < 825000) {
			return 28;
		} else if(825000 <= exp && exp < 1000000) {
			return 29;
		} else if(1000000 <= exp) {
			return 30;
		} else { // error			
			return 1;
		}		
	},

	onLevelChange: function(newLevel){},

	onTotalExpChange: function(newTotalExp){}

}