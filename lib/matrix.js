
/*

	Matrix is a combination of an array, start position in that array and its size which will be passed as arguments separately.
	
	Element (0, 0) of a matrix is element at index 'first + 0' with 'first' is the start position of the matrix in the array.
	
	Element (i, j) of Mat[m, n] of a matrix is element at index 'first + getArrayIndex(i, j, m)' with any m
	
	Matrix stored in array as column-major order, which means:
		| a d g |
	Mat	| b e h | => Array [a, b, c, d, e, f, g, h, i]
		| c f i |

*/


function main(out) {
	'use strict';
	
	var utilities = require("utilities");
	var setproto = Object.setPrototypeOf;
	
	setproto(out, utilities);
	
	function copyMatrix(matR, startR, matA, startA, count) {
		for (let i = startR, ii = startA, e = i + count; i != e; ++i, ++ii) {
			
		}
	}
	
}

main(exports);
