'use strict';

var board = {
	[ ],
	[ ],
	[ ]
}

function printBoard() {
	console.log(board[0]);
	console.log(board[1]);
	console.log(board[2]);
}

var solution = 'ghab';
var guess = 'abcd';

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

	var correctLetterLocations = 0; 

	for (var i = 0; i < solutionArray.length; i++) {
		// if solutionArray contains guessArray at index i, 
		// increment correctLetters and cancel out ndex i of
		// solutionArray
		if (solutionArray.indexOf(guessArray[i]) > -1 ) {
			correctLetters++; 
			solutionArray[i] = null;
		}
	}

	return correctLetterLocations + ' - ' + correctLetters;



}