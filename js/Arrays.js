// Array store value in ordered list of any data type which object doesn't do
//ARRAYS CAN BE DELETED USING DELETE METHOD
let numArr = [1, 2, 3, 4];
console.log(numArr[0]); //1
console.log(numArr[3]); //4

//Arrays constructor
let colors = new Array(2);
console.log(colors.length); //2
//Assign values to an empty array using indexes
colors[0] = "Red";
colors[1] = "Green";
console.log(colors); //['Red','Green']

//Spread operator COMBINING TWO AARAY
let arr1 = [3, 5, 1];
let arr2 = [8, 2, 6];
let newArr = [0, ...arr1, 4, ...arr2];
console.log(newArr); // [0,3,5,1,4,8,2,6]

//DESTRUCTURING OF ARRAYS
let [empName, , location] = ["Shaan", 104567, "Bangalore"];
//Here second element of array is skipped and third element is assigned to location variable
console.log(empName); // Shaan
console.log(location); // Bangalore

//For in loop
let colors = ["Red", "Orange", "Green"];
// iterates over array elements
for (let color of colors) {
    console.log(color);//Red
    //Orange
    //Green
    
}

//Push
let myArray = ["Android", "iOS", "Windows"];

myArray.push("Linux");

console.log(myArray);

// ["Android","iOS","Windows","Linux"]

//POP
let myArray1 = ["Android", "iOS", "Windows"];

myArray1.POP();

console.log(myArray1);



//SHIFT
let myArray2 = ["Android", "iOS", "Windows"];

console.log(myArray2.shift()); //Android

console.log(myArray2); //["iOS", "Windows"]

//UNSHIFT
let myArray3 = ["Android", "iOS", "Windows"];

myArray3.unshift("Linux"); 

console.log(myArray3);

//["Linux","Android","iOS","Windows"]

//SPLICE
let myArray4 = ["Android", "iOS", "Windows"];

//inserts at index 1

myArray4.splice(1, 0, "Linux"); 

console.log(myArray4); 

// ["Android","Linux", "iOS", "Windows"]

//SLICE
let myArray5=["Android","iOS","Windows"];

console.log(myArray5.slice(1,3));

// ["iOS", "Windows"]

//CONCAT
let myArray6 = ["Android","iOS"];

let myArray7 =  ["Samsung", "Apple"];

console.log(myArray6.concat(myArray7));

//["Android", "iOS", "Samsung", "Apple"]

 
//FIND return the first element of the array if fon find return undefined
let myArray8 = ["Android", "iOS", "Windows", "Linux"];

let result = myArray8.find(element => element.length > 5);

console.log(result); //Android 

//FILTER
let myArray9 = ["Android", "iOS", "Windows", "Linux"];

let result1 = myArray9.filter(element => element.length > 5);

console.log(result1)

//["Android","Windows"]

//FOR-EACH
let myArr = ["Android", "iOS", "Windows"];

myArr.forEach((element, index) => 

console.log(index + "-" + element));

//0-Android

//1-iOS

//2-Windows

//3-Linux

//Maps
let numArr1 = [2, 4, 6, 8];

let result2 = numArr1.map(num=>num/2);

console.log(result2);

//[ 1, 2, 3, 4 ]

//JOINS
let myArr1 = ["Android", "iOS", "Windows"];

console.log(myArr1.join()); 

// Android,iOS,Windows return string by default seperator  is comma

console.log(myArr1.join('-'));

 // Android-iOS-Windows

 //REDUCE
//  The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.
const numbers = [175, 50, 25];

numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num; // 100
}

const numArr3 = [1, 2, 3, 4];

// 1 + 2 + 3 + 4

console.log(numArr3.reduce(

(accumulator, currentVal) => 

accumulator + currentVal));

// 10

// 5 + 1 + 2 + 3 + 4

console.log(numArr3.reduce(

(accumulator, currentVal) => 

accumulator + currentVal,5)); // 5 IN THE INTIAL VALUE 

// 15