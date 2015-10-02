// 'use strict'

// var prompt = require('prompt');
// prompt.start();

// function getPrompt() {
// 	prompt.get(['stack1', 'stack2'], function (error, result) {
// 		getPrompt();
// 	});
// }

// getPrompt();

// function compareBlock (fromStack, toStack) {
// 	var fromStackLastIdx = fromStack.length - 1;
// 	var currentBlock = fromStack[fromStackLastIdx];
// 	var toStackLastInx = toStack.length - 1;
// 	var compareBlock = toStack[toStackLastInx];

// 	if (currentBlock < compareBlock) {
// 		return true;
// 	}
// 	reutrn false; 
// }

// compareStack []

// function compareStack (stack1, stack2) {
// // return true if last block in stack1 is less then last block in stack2
// 	var lastIdx1 = stack1.length - 1;
// 	var lastInx2 = stack2.length - 1;
// 	var block1 = stack1[lastIdx1];
// 	var block2 = stack2{lastInx2};

// 	if (block1 < block2) {
// 		return true;
// 	}
// 	return false;
// }

// function moveBlock (stack1, stack2) {
// 	var block = stack1.pop();
// 	stack2.push(block);
// }

// if (compareStack === true) {
// 	moveBlock();
// }
// return false;


// checkForWin () {

// }

// var board {
// 	a: [4, 3, 2, 1],
// 	b: [],
// 	c: [],
}


'use strict'

var prompt = require('prompt');
prompt.start();

var stack {
	a: [4, 3, 2, 1],
	b: [],
	c: [],
}

function printStacks() {
	console.log('a: ' + stack.a);
	console.log('b: ' + stack.b);
	console.log('c: ' + stack.c);
}

function moveBlock(start, finish) {
	var block = start.pop();
	finish.push(block);
}

function getPrompt() {
  prompt.get(['start', 'finish'], function (error, result) {
    getPrompt();
  });
}

getPrompt();




























