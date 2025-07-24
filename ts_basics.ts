const numbers = [1, 2, 3];
numbers.push(4);

const car: {type: string, model: string, year: number} = {
	type: "Toyota", 
	model: "Corolla", 
	year: 2009
};

function greet(name: string): string {
	return `Hello, ${name}! Welcome to TypeScript.`;
}

function printNumbers(a: Array<number>) {
	for (let i = 0; i < a.length; i++) {
		console.log(`Number ${a[i]}`)
	}
}

function printCar(c: {type: string, model: string, year: number}) {
	console.log(`Brand: ${c.type}`);
	console.log(`Model: ${c.model}`);
	console.log(`Year: ${c.year}`);
}

console.log(greet("Developer"));
printNumbers(numbers);
printCar(car);