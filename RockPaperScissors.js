'use strict';

var prompt = require('prompt');
prompt.start()

prompt.get(['hand1', 'hand2'], function(error, result) {
	var hand1 = result['hand1'];
	var hand2 = result['hand2'];

	compareHands(hand1, hand2);

});


function compareHands (handOne, handTwo) {
	if ( handOne === handTwo) {
		console.log('Its a tie!');
	} else if ()
}