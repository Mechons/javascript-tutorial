// console.log('hello')
//var name=String(harry) // harry not defined
let name = String('harry') // String
name = 43 // Number
console.log('data type is ' +typeof(name))

let nullvar=null;
console.log('data type is ' +typeof(nullvar)) // object

myarr=[1,2,3,4];

console.log('data type is ' +typeof(myarr)) // object

 let marks={
     harry:34,
     ishank:56,
     rohan:76
 }

console.log(marks)

function findName() {
    
}
console.log('find name ',typeof findName) // Function

// THIS Keyword
// This in Global scope
//this refer to the object which is calling the function....
console.log(this); // show window scope
this.garage = 'this is garage' // garage is global property
// console.log(window.garage);

// This inside object
const obj = {
    name: 'ishank',
   print: console.log(this) ,// this represent window object
   realobj : function() {
    console.log('this refer to the object property itself',this.name);
   }
}
obj.realobj()
let person = {
    age: 28,
    greet1 : function() {
        console.log('Greet1 age',this.age);
        console.log('Greet1 ',this); // refer to person object as it is greet1 function is called by person object
        function greet2() {
            console.log('Greet2 age ',this.age);
            console.log('Greet2 ',this); // refer to window object greet2 is called inside greet1 not by person object
        }
        greet2()
    } 
}
person.greet1()

// This inside Arrow Function is based on the scope the arrow function is defined within :- In this EX it is defined in person1 object 
let person1 = {
    age: 28,
    greet1 : function() {
        console.log('Greet1 age',this.age);
        console.log('Greet1 ',this); // refer to person object as it is greet function is called by person object
        const greet2 = () => {
            console.log('Greet2 age ',this.age);
            console.log('Greet2 ',this); // refer to person1 object 
        }
        greet2()
    } 
}
person1.greet1()