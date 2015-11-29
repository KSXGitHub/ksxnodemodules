
function main(out) {
	'use strict';
	
	var utilities = require('utilities');
	
	var _key_iterator = Symbol.iterator;
	
	class PrimeGenerator {
		
		constructor(List, loop) {
			
			if (typeof List !== "function") {
				List = Set;
			}
			
			if (typeof loop !== "function") {
				loop = () => 1;
			}
			
			var primegenerator = this;
			
			var allprimes;
			var current;
			
			reset();
			
			utilities
				.setConst
					(primegenerator, _key_iterator, PrimeIterator)
					(primegenerator, "entries", PrimeIterator)
				.setMethod
					(primegenerator, "reset", reset)
			;
			
			function * PrimeIterator() {
					
				// Loop: "Find Prime"
				for ( ; loop(current); current += 2) {
					
					let isprime = 1;
					
					// Loop: "Find Composite"
					for (let divisor of allprimes) {
						if (!(current % divisor)) {
							isprime = 0;
							break; // Escape "Find Composite", go to the rest of "Find Prime"
						}
					}
					
					if (isprime) {
						yield current;
						allprimes.add(current);
					}
				
				}
			
			}
			
			function reset() {
				allprimes = new List();
				current = 3;
				return reset;
			}
			
		}
		
	}
	
	utilities
		.setMethod
			(out, "PrimeGenerator", PrimeGenerator)
	;
	
}

main(exports);
