/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var round = require( '@stdlib/math-base-special-round' );
var randu = require( '@stdlib/random-base-randu' );
var Float32Array = require( '@stdlib/array-float32' );
var ssortins = require( './../lib' );

var rand;
var sign;
var i;

var x = new Float32Array( 10 );
for ( i = 0; i < x.length; i++ ) {
	if ( randu() < 0.2 ) {
		x[ i ] = NaN;
	} else {
		rand = round( randu()*100.0 );
		sign = randu();
		if ( sign < 0.5 ) {
			sign = -1.0;
		} else {
			sign = 1.0;
		}
		x[ i ] = sign * rand;
	}
}
console.log( x );

ssortins( x.length, -1.0, x, -1 );
console.log( x );
