// SPREAD OPERATOR
//USE TO EXPAND ITERABLE WITH MORE THAN 1 ARGUMENTS
// CONCAT() - - -  The concat() method provided by javascript helps in concatenation of two or more strings(String concat() ) or is used to merge two or more arrays. 

// spread operator doing the concat job
let arr = [1,2,3];
let arr2 = [4,5];

arr = [...arr,...arr2];
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// spread operator for copying
let arr1 = ['a','b','c'];
let arr3 = [...arr1];

console.log(arr1); // [ 'a', 'b', 'c' ]

arr3.push('d'); //inserting an element at the end of arr2

console.log(arr3); // [ 'a', 'b', 'c', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

// normally used expand method
let array = ['a','b'];
let array2 = [array,'c','d'];

console.log(array2); // [ [ 'a', 'b' ], 'c', 'd' ]

// EXPAND 
// expand using spread operator

let array1 = ['a','b'];
let newarray = [...array1,'c','d'];

console.log(newarray); // [ 'a', 'b', 'c', 'd' ]

// Clone of objects
const user1 = {
	name: 'Jen',
	age: 22
};

const clonedUser = { ...user1 };
console.log(clonedUser);

// Merge of objects
const user2 = {
	name: 'Jen',
	age: 22,
};

const user3 = {
	name: "Andrew",
	location: "Philadelphia"
};

const mergedUsers = {...user2, ...user3};
console.log(mergedUsers)

//REST OPERATOR
// rest with function and other arguments
function fun(a,b,...c){
	console.log(`${a} ${b}`); //Mukul Latiyan
	console.log(c); //[ 'Lionel', 'Messi', 'Barcelona' ]
	console.log(c[0]); //Lionel
	console.log(c.length); //3
	console.log(c.indexOf('Lionel')); //0
}
fun('Mukul','Latiyan','Lionel','Messi','Barcelona');
//Destrucing using rest operator
let [a,...b] = [a,b,c,d]
console.log(a); //1
console.log(b); // [2,3,4,5] Rest operator return Array





