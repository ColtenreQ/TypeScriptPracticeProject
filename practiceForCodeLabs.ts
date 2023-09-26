// JS Foundations - part 1 - Exercise 1
let greeting: string = "Hello, World!"
 console.log(greeting);
 

// JS Intermediate Concepts - Exercise 2 and 3
class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
  
    public greet() {
        return `Hello, im ${this.name}`;
    }
}

const user1 = new Person("Nolan", 25);
const user2 = new Person("Colten", 24);
console.log(user1.greet());
console.log(user2.greet());

// JS Essential Concepts - Exercise 2
let testNumber: number = multiply(5, 8);
console.log("The product of 8 and 5 is: " + testNumber);

function multiply(number1: number, number2: number) {
    let product: number = number1 * number2;
    return product;
}


// JS foundations - part 2- Exercise 2 but using generics
function sayThing<type>(thing: type, thing2: type): string {
    let statement: type = thing;
    let statement2: type = thing2;
    return `${thing} and ${thing2}`;
}

let statement = sayThing<string>("Hello", "world");
let statement2 = sayThing<number>(1, 45);
console.log(statement);
console.log(statement2);


// Interfacing Practice
interface cityInterface {
    cityName: string;
    cityPop: number;
}
