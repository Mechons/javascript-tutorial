// // SETS

let obj1 = {clothes:'tshirt'}
let obj2 = {clothes:'tshirt'}
let courses = new Set(["Angular","React","Jvascript","Angular"])
console.log( typeof(courses) );
// courses.add(obj1)
// courses.add(obj2)
// console.log(courses);
// courses.delete({clothes:'tshirt'})
// console.log(courses);
courses.add("Express","Nodejs") // add only one element Express
console.log(courses);
courses.add("Nodejs")
console.log(courses);
console.log(courses.delete("Nodejs"));
console.log(courses);

// // //console.log(courses.values());
// // // console.log(courses.size());

// // let myIterator = courses.values() // It create the SetIterator Object
// // console.log(myIterator);
// // console.log(myIterator.next()); // The .values() method on a set returns a new iterator object called SetIterator which can be stored in a variable and loop through each item using .next().
// // console.log(myIterator.next())
// // console.log(myIterator.next())  //.next()  is used to loop through each item in SETITERATOR Object
// // console.log(myIterator.next()) // setIterator Example
// // console.log(myIterator.next())

// // //For of Loop
// // for(course of courses){
// //     console.log("this is inside for of loop",course);
// //     console.log(typeof(course));
// // }

// const oven = {
//     tem : 450
// }
// const newoven = oven
// oven.tem += 50
// console.log('oven',typeof(newoven)); // objects

// // MAPS
// const employees = new Map();
// employees.set('abc@gmail.com',{
//     firstName: 'Radhe',
//     age: 25
// })
// employees.set('efg@gmail.com',{
//     firstName: 'Rohan',
//     age: 35
// })
// console.log(employees);
// console.log(typeof(employees));
// const getEmp = employees.get('abc@gmail.com') // Fething value for given key
// console.log(getEmp);
// employees.delete('abc@gmail.com') // Remove the key value pair 
// console.log(employees);

// console.log("This is tutorial 57");

// // Maps in JavaScript: We can use any type of key or value
// const myMap = new Map();

// const key1 = 'myStr', key2 = {}, key3 = function () { };

// // Setting map values
// myMap.set(key1, 'This is a string');
// myMap.set(key2, 'This is a blank obj');
// myMap.set(key3, 'This is an empty function');
// console.log(myMap);

// // Getting the values from a Map 
// let value1 = myMap.get(key3);
// console.log(value1);

// // Get the size of the map
// console.log(myMap.size);

// // You can loop using for..of to get keys and values
// for (let [key, value] of myMap) {
//     console.log(key, value);
// }

// // Get only keys
// for (let key of myMap.keys()) {
//     console.log('key is ', key);
// }
// // Get only values
// for (let value of myMap.values()) {
//     console.log('value is ', value);
// }

// // You can loop through a map using for each loop
// myMap.forEach((value, key)=>{
//     console.log('Key is ', key);
//     console.log('Value is ', value);
// })

// // Converting map to an array
// let myArray = Array.from(myMap);
// console.log('Map to array is ', myArray);

// // Converting map keys to an array
// let myKeysArray = Array.from(myMap.keys());
// console.log('Map to keys array is ', myKeysArray);

// // Converting map values to an array
// let myValuesArray = Array.from(myMap.values());
// console.log('Map to values array is ', myValuesArray);
 