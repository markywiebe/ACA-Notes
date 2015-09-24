'use strict';

var prompt = require('prompt');
prompt.start();

prompt.get(['word'], function(error, result) {
	var word = result.['word'];
	var firstLetter = word[0];
	var restWord = word.replace(firstLetter, '');
	console.log('Hello, ' + restWord + firstLetter + 'ay');
});
