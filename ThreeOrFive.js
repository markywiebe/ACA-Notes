'use strict';

var prompt = require ('prompt');
prompt.start()
prompt.get(['number'], function(error, result) {
	var num = parseInt(result['number']);
		// if (num % 3 === 0) {
		// 	console.log(num + ' is divisable by 3!');
		// }

		// if (num % 5 === 0) {
		// 	console.log(num + ' is divisable by 5!');
		// }

		if (num % 3 === 0 && num % 5 === 0) {
			
			console.log(num + ' is divisable by 3 and 5!');

		} else if (num % 5 === 0) {

			console.log(num + ' is divisable by 5!');

		} else if (num % 3 === 0) {

			console.log(num + ' is divisable by 3!');
		}
});