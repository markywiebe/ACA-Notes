'use strict';

var prompt = require('prompt');
prompt.start();

var colors = require('colors/safe');

var board = [];

function printBoard() {
	// console.log(board[0]);
	// console.log(board[1]);
	// console.log(board[2]);
	for (var i = 0; i < board.length; i++) {
		console.log(board[i]);
	}
}

function generateHints(solution, guess) {
	var solutionArray = solution.split(''); // ['g', 'h', 'a', 'null']
	var guessArray = guess.split(''); // ['a', 'b', 'c', 'd']

	var correctLetterLocations = 0;

	// write a loop that loops over each
	// item in soulutionArray
	for(var i = 0; i < solutionArray.length; i++) {
			// if soulutionArray at index i is equal to 
			// guessArray at index i, then increment correctLetterLocations,
			// and cancel out solutionArray at that index
			if (solutionArray[i] === guessArray[i]) {
				correctLetterLocations++;
				solutionArray[i] = null;
			}
	}

	var correctLetters = 0; 
	for (var i = 0; i < solutionArray.length; i++) {
		// if solutionArray contains guessArray at index i, 
		// increment correctLetters and cancel out ndex i of
		// solutionArray

		// must save the index just in case it does exist
		var targetIndex = solutionArray.indexOf(guessArray[i]);
		if (targetIndex > -1 ) {
			correctLetters++; 

			// so that we can 'target' it for nullification
			solutionArray[targetIndex] = null;
		}
	}

	return colors.red(correctLetterLocations) + ' - ' + correctLetters;

}

function insertCode(guess, hint) {
	board.push(guess + ' ' + hint);
}

function checkSolution(guess) {
	if (guess === solution) {
		console.log('You Win!')
		console.log(solution);
		return true;
	} else {
		return false;
	}
}

var solution = '';

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function generateSolution() {
	for (var i = 0; i < 4; i++) {
		var randomIndex = getRandomInt(0, letters.length);
		solution += letters[randomIndex];
	}
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getPrompt() {
	printBoard();
	prompt.get(['guess'], function (error, result) {
		var guess = result['guess'];
		if (checkSolution(guess) === true) {
			return false;
		}
		var hint = generateHints(solution, guess); // 2 - 2
		insertCode(guess, hint);
		if (board.length === 10) {
			console.log('Ran out of turns. You lose.')
			console.log(solution);
			return false;
		}
		getPrompt();

	});
}

generateSolution();
// console.log('solution: ' + solution);

getPrompt();

// console.log(generateHints(solution, guess)); 

