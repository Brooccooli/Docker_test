class Car { 
	type: string; 
	model: string; 
	year: number;

	consructor(t: string, m: string, y: number) {
		this.type = t;
		this.model = m;
		this.year = y;
	}
 }

const numbers = [1, 2, 3];
numbers.push(4);

const car = new Car("Toyota", "Corolla", 2009);

function greet(name: string): string {
	return `Hello, ${name}! Welcome to TypeScript.`;
}

function printNumbers(a) {
	for (let i = 0; i < a.length; i++) {
		console.log(`Number ${a[i]}`)
	}
}

function printCar(c: Car) {
	if(c instanceof Car){
		console.log("This is a car")
	}

	console.log(`Brand: ${c.type}`);
	console.log(`Model: ${c.model}`);
	console.log(`Year: ${c.year}`);
}

console.log(greet("Developer"));
printNumbers(numbers);
printCar(car);