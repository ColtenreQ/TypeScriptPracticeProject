// JS Foundations - part 1 - Exercise 1
var greeting = "Hello, World!";
console.log(greeting);
// JS Intermediate Concepts - Exercise 2 and 3
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello, im ".concat(this.name);
    };
    return Person;
}());
var user1 = new Person("Nolan", 25);
var user2 = new Person("Colten", 24);
console.log(user1.greet());
console.log(user2.greet());
// JS Essential Concepts - Exercise 2
var testNumber = multiply(5, 8);
console.log("The product of 8 and 5 is: " + testNumber);
function multiply(number1, number2) {
    var product = number1 * number2;
    return product;
}
// JS foundations - part 2- Exercise 2 but using generics
function sayThing(thing, thing2) {
    var statement = thing;
    var statement2 = thing2;
    return "".concat(thing, " and ").concat(thing2);
}
var statement = sayThing("Hello", "world");
var statement2 = sayThing(1, 45);
console.log(statement);
console.log(statement2);
