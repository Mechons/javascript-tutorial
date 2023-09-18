// Hoisting means using variable before declaring it 
console.log("First name: " + firstName); //First name: undefined it is used by VAR only not by let and const
var firstName = "Mark";
// For let and const we will get ”Uncaught ReferenceError: while Hoisting

//It takes an argument of type string which can be an expression, statement or sequence of statements and evaluates them.
eval("let num1=2; let num2=3;let result= num1 * num2;console.log(result)");

// PARSE FLOAT
console.log(parseFloat("10.34"));      //10.34 // 	This function parses string and returns a float number.   

console.log(parseFloat("10 20 30"));   //10 The method stops parsing when it encounters a non-numerical character and further characters are ignored.

console.log(parseFloat("10.50 years")); //10.50 It returns NaN when the first non-whitespace character cannot be converted to number.
console.log(parseFloat(" year 10.50 years")); //NaN (Not a Number)


let name = undefined
console.log(typeof(name)); // undefined

let data = null
console.log(typeof(data)); // object

// Temporal Dead Zone

// During merory allocation phase a is assigned to script scope with undefined value 
// while b is assigned to global scope

// So temporal dead zone is time when let and const is hoisted means assigned memory space till it is intialised 
console.log(a); // Rfference error can't acces a before intialization
let a= 10
var b= 100
