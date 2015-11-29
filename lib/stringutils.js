
function main(out) {
	'use strict';
	
	var utilities = require('./utilities');
	
	var _key_root = Symbol(".root");
	var setproto = Object.setPrototypeOf;
	
	setproto(out, utilities);
	
	var sliceFromChar = (string, char) => string.slice(string.indexOf(char));
	var sliceFromLastChar = (string, char) => string.slice(string.lastIndexOf(char));
	var sliceToChar = (string, char) => string.slice(0, string.indexOf(char));
	var sliceToLastChar = (string, char) => string.slice(0, string.lastIndexOf(char));
	
	(function (proto) {
		var makemethod = func =>
			function (arg) {
				return func(this, arg);
			}
		;
		var keys = Object.freeze({
			sliceFromChar: Symbol(".sliceFromChar"),
			sliceFromLastChar: Symbol(".sliceFromLastChar"),
			sliceToChar: Symbol(".sliceToChar"),
			sliceToLastChar: Symbol(".sliceToLastChar"),
			__proto__: null
		});
		utilities
			.setConst
				(out, "<String>.*", keys)
				(proto, keys.sliceFromChar, makemethod(sliceFromChar))
				(proto, keys.sliceFromLastChar, makemethod(sliceFromLastChar))
				(proto, keys.sliceToChar, makemethod(sliceToChar))
				(proto, keys.sliceToLastChar, makemethod(sliceToLastChar))
		;
	})(String.prototype);
	
	utilities
		.setConst
			(out, _key_root, out)
			(out, "<stringutils>.root", _key_root)
			(out, "sliceFromChar", sliceFromChar)
			(out, "sliceFromLastChar", sliceFromLastChar)
			(out, "sliceToChar", sliceToChar)
			(out, "sliceToLastChar", sliceToLastChar)
	;
	
}

main(exports);
