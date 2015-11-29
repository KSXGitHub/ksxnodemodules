
function KSXNodeModules() {
	'use strict';
	
	var self = this;
	
	add("utilities", "js");
	add("mimex", "json");
	add("mimeutils", "js");
	add("stringutils", "js");
	add("prime", "js");
	
	function add(name, ext) {
		Object.defineProperty(self, name, {
			value: require("./lib/" + name + '.' + ext),
			enumarable: true,
			writable: false,
			configurable: false
		});
	}
	
}

module.exports = new KSXNodeModules();
