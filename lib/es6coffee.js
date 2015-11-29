
function main(out) {
	'use strict';

	var utilities = require('./utilities.js');

	var _key_root = Symbol('.root');

	Object.setPrototypeOf(out, utilities);

	var forOf = (object, callback) => {
		for (let element of object) {
			if (callback(element, object)) {
				break;
			}
		}
		return forOf;
	};

	utilities
		.setConst
			(out, '<es6coffee>.root', _key_root)
			(out, _key_root, out)
		.setMethod
			(out, 'forOf', forOf)
	;

}

main(exports);
