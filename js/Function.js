console.log("this is function js");

// What is function Expression ?

// ANS : When fuction is stored in some variable
const square = function name(num) {
  return num * num;
};
console.log(square(5));

// What is called First class Function ?

// ANS : When a function is assigned as a variable
// A function that returns a function or takes other functions as arguments is called a higher-order function.

const foo = () => {
  console.log("foo bar");
};

foo();

// When a function is passed as an argument to another function

const sayHello = () => {
  return "Hello";
};

const greeting = (helloMessage, name) => {
  console.log(helloMessage(), name);
};
// passing sayHello function as an argument to greeting function
greeting(sayHello, "Ishank");

// When a function is return from another function

function display() {
  return () => {
    console.log("Hi I am Ishank");
  };
}
display()();
const finalDisplay = display();
finalDisplay();

function func() {
  return function () {
    return "!";
  };
}

let result = func();
console.log(result()); // shows '!'

/// QUESTION 3 : Function Scope
// Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function. 
// However, a function can access all variables and functions defined inside the scope in which it is defined.

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

getScore(); // Returns "Chamakh scored 5"


// Hoisting in fuction  : Function can be hoisted

hoisted();
function hoisted() {
    console.log('i am hoisted');
}

// displayHoisting()
// function displayHoisting() {
//     console.log(x); // undefined x is hoisted
    
// }
// var x =21  // global scope

var x =21  // global scope
function displayHoisting() {
    console.log(x); // undefined x is hoisted as it take local scope which is used before declare
    var x = 20
    
}
displayHoisting()

// Prams vs Argument

function multiply(num) {  // num is Parms 
    return num*5
    
}

console.log(multiply(5)); // 5 is argumemt giving to multiply method

// Spread vs rest operator

function displayRest(...nums) {  // this is rest operator taking all value return an array
    console.log(nums);  // [5,6,7]
}

var restValue = [5,6,7]
displayRest(...restValue)  // Spread operator giving all value

// Question   : Output 

function showResult (x,y,...num) {  // rest operator always come at end of fun parms and take the rest of value from argument if more no is passed than params
console.log(x,y,num);
}

showResult(2,3,4,5,6,7) // 2,3,[4,5,6,7]