function CheckerClass(color, position) {
	this.color = color;
	this.position = position;
}

function BoardClass() {
	this.grid = [];


	this.checkers = [ ]
	this.createCheckers = function() {
		var whitePositions = [[0,1], [0,3], [0,5], [0,7], [1,0]... ]
		var redPositions = [[5,0], [5,2], [5,4], [5,6], [5,8]...]
		for (var i = 0; i < 12; i++) {
			this.checkers.push(new Checker('white', whitePositions[i]))
			this.checkers.push(new Checker('red', redPositions[i]))
		}
	}
	this.placeCheckers = function() {
		var checker1 = this.checkers[0]
		var checkerPosition = checker1.position
		this.grid[checkerPosition[0]][checkerPosition[1]] = checker1
	}
}