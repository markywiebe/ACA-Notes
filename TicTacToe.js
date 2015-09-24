'use strict';

var prompt = require('prompt');
prompt.start();

var board = [ 
	[ ' ', ' ', ' ' ], 
	[ ' ', ' ', ' ' ], 
	[ ' ', ' ', ' ' ] 
];

function showBoard() {
	console.log(board[0].join(' | '));
	console.log('---------');
	console.log(board[1].join(' | '));
	console.log('---------');
	console.log(board[2].join(' | '));
};

var playerTurn = 'X';

function horizontalWin() {
    return (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) ||
           (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) ||
           (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn);
}

function verticalWin() {
    return (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) ||
  		   (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) ||
    	   (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn);
}

function diagonalWin() {
    return (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) ||
           (board[2][0] === playerTurn && board[1][1] === playerTurn && board[0][2]=== playerTurn);
}

function checkForWin() {
	if (horizontalWin() || verticalWin() || diagonalWin()) {
		console.log('Player ' + playerTurn + ' won!');
		showBoard();
		return true;
	}
	return false;
}

function placeMark(result) {
	var row_idx = parseInt(result['row'], 10);
   	var column_idx = parseInt(result['column'], 10);
    board [row_idx][column_idx] = playerTurn;
}

function promptUser() {
	console.log('Its player ' + playerTurn + ' turn.')
    prompt.get(['row', 'column'], function(error, result) {
        if (result['input'] === 'exit') {
            return false;
        }
        placeMark(result);
        if (checkForWin() === true) {
        	return false;
        }

        playerTurn = (playerTurn === 'X') ? 'O' : 'X';
        showBoard();
        promptUser();
    });
}

showBoard();
promptUser();




