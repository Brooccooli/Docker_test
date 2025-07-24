var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.consructor = function (t, m, y) {
        this.type = t;
        this.model = m;
        this.year = y;
    };
    return Car;
}());
var numbers = [1, 2, 3];
numbers.push(4);
var car = new Car("Toyota", "Corolla", 2009);
function greet(name) {
    return "Hello, ".concat(name, "! Welcome to TypeScript.");
}
function printNumbers(a) {
    for (var i = 0; i < a.length; i++) {
        console.log("Number ".concat(a[i]));
    }
}
function printCar(c) {
    if (c instanceof Car) {
        console.log("This is a car");
    }
    console.log("Brand: ".concat(c.type));
    console.log("Model: ".concat(c.model));
    console.log("Year: ".concat(c.year));
}
console.log(greet("Developer"));
printNumbers(numbers);
printCar(car);
