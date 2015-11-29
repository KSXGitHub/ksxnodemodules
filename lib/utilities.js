
// utilities.js v1.0.0
// © 2015 Individual Khải, Inc. All rights reserved.
// Author, Contributor: Hoàng Văn Khải.

function main(out) {
	'use strict';
	
	var _key_root = Symbol(".root");
	
	var propertynames = Object.getOwnPropertyNames;
	var propertysymbols = Object.getOwnPropertySymbols;
	var prodes = Object.getOwnPropertyDescriptor;
	var defpro = Object.defineProperty;
	var setproto = Object.setPrototypeOf;
	var emptyfunc = () => {};
	
	out.utilities = out;
	
	class ConstDescriptor {
		constructor(value) {
			this.value = value;
		}
	}
	
	var setConst = (object, name, value) => {
		defpro(object, name, new ConstDescriptor(value));
		return setConst;
	};
	
	var mapProperties = (object, mapper) => {
		propertynames(object).forEach(mapper);
		propertysymbols(object).forEach(mapper);
		return mapProperties;
	};
	
	var setProperties = (target, source) => {
		mapProperties(source, (property) => defpro(target, property, prodes(source, property)));
		return setProperties;
	};
	
	function setPropertiesFromRequire(url, target) {
		if (typeof target !== "object" || !object)
			target = global;
		setProperties(target, require(url));
		return setPropertiesFromRequire;
	}
	
	function setMethod(object, name, method) {
		var newproto = Object.create(object);
		setProperties(newproto, Function.prototype);
		setConst(object, name, method);
		setproto(method, newproto);
		return setMethod;
	}
	
	function createConstructorFromPrototype(proto, initor) {
		if (typeof initor !== "function") {
			initor = emptyfunc;
		}
		constructor.prototype = proto;
		return constructor;
		function constructor(arg) {
			return initor(arg);
		}
	}
	
	function createClassFromPrototype(proto, initor) {
		return class extends createConstructorFromPrototype(proto, initor) {
			constructor(arg) {
				super(arg);
			}
		};
	}
	
	setConst
		(out, _key_root, out)
		(out, "<utilities>.root", _key_root)
		(out, "createConstructorFromPrototype", createConstructorFromPrototype)
		(out, "createClassFromPrototype", createClassFromPrototype)
	;
	setMethod
		(out, "ConstDescriptor", ConstDescriptor)
		(out, "setConst", setConst)
		(out, "mapProperties", mapProperties)
		(out, "setProperties", setProperties)
		(out, "setPropertiesFromRequire", setPropertiesFromRequire)
		(out, "setMethod", setMethod)
	;

}

main(exports);
