
function KSXNodeModules() {
	'use strict';
	
	var utilities = require('./lib/utilities.js');
	
	var self = this;
	
	utilities
		.setConst
			(self, "utilities", utilities)
	;
	
}

module.exports = new KSXNodeModules();
