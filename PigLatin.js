'use strict';

var prompt = require('prompt');
prompt.start();

prompt.get(['word'], function(error, result) {
	var firstLetter = result.word[0];
	var restWord = result.word.replace(firstLetter, '');
	console.log('Hello, ' + restWord + firstLetter + 'ay');
});
