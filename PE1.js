'use strict';

var numArray = [];

for (var i = 0; i < 1001; i++) {
	
	if ( i % 3 === 0 || i % 5 === 0) {
		numArray.push(i);
	}

}

// console.log(numArray);

var sum = 0;

// iterate over my array and add 
// each number to the sum

for (var j = 0; j < numArray.length; j++) {
	sum = sum + numArray[j];
}

console.log(sum);