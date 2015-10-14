function Car(color) {
	this.color = color;
	this.tires = 4;

	this.drive = function() {
		console.log('VVRROOOOMM!!')
	}
}

function Driveway(maxCars) {
	this.cars = [];

	this.maxCars = maxCars;

	this.parkHere = function(car) {
		if (this.cars.length < maxCars) {
			this.cars.push(car);
		} else {
			console.log('No Vacancy');
		}
	}
}

