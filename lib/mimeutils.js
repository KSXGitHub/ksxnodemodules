
// mimeutils.js v1.0.0
// © 2015 Individual Khải, Inc. All rights reserved.
// Author, Contributor: Hoàng Văn Khải.
// This is a secret software which is created for the author himself.


function main(out) {
	'use strict';
	
	var utilities = require('utilities');
	var mimex = require('mimex');
	
	var setproto = Object.setPrototypeOf;
	
	setproto(out, utilities);
	
	class XInfo {
		constructor(mime, ext) {
			this.mime = mime;
			this.ext = ext;
		}
	}
	
	class XBrowser extends utilities.createClassFromPrototype(mimex) {
		constructor() {
			if (xbrowser) {
				return xbrowser;
			}
			super();
			utilities
				.setConst
					(this, "mimex", mimex)
			;
		}
		findMimeByX(ext) {
			for (let info of this) {
				if (info.ext === ext) {
					return info.mime;
				}
			}
			return "";
		}
		* [Symbol.iterator]() {
			for (let mime of Object.getOwnPropertyNames(mimex)) {
				for (let ext of mimex[mime]) {
					yield new XInfo(mime, ext);
				}
			}
		}
	}
	
	var xbrowser = new XBrowser();
	
	utilities
		.setConst
			(out, "XBrowser", XBrowser)
			(out, "xbrowser", xbrowser)
	;
	
}

main(exports);
