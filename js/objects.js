// //-------------states of the object--------- 
// let myCar = {
//     name: "Fiat",
//     model: "VXI",
//     color: "red",
//     numberOfGears: 5,
//     currentGear: 3,
//     currentSpeed: 45,
//     //-------------Behaviour of the object--------- 
//     accelerate: function (speedCounter) {
//         this.currentSpeed = this.currentSpeed + speedCounter;
//         return this.currentSpeed;
//     },

//     brake: function (speedCounter) {
//         this.currentSpeed = this.currentSpeed - speedCounter;
//         return this.currentSpeed;
//     }
// }
// //New way of creating objects
// let name = "Arnold";
// let age = 65;
// let country = "USA";
// let obj = { name, age, country };

// //Adding dynamic objects
let dynamicProperty = "age";
let personalDetails = {
    name: "Stian Kirkeberg",
    country: "Norway",
    [dynamicProperty]: 45
};
personalDetails['current'+dynamicProperty] = 5
console.log(personalDetails.currentage);
// personalDetails.age=30
// // personalDetails[dynamicProperty] = 45;
// console.log(personalDetails.age);//Output: 45 Accessing objects using dot
// console.log(personalDetails["country"]); // Accessing objects using bracket
// personalDetails.four = 4 //setting object key value
// console.log(personalDetails.four);// output 4 accessing objects using dot

// //Destructure of objects
// let myObject = { name: 'Marty', age: 65, country: 'California' };
// function showDetails({ country }) {
//     console.log(country);
// }
// showDetails(myObject);//invoke the function using the object 
// //OUTPUT: California

//Method2
// let myObject1 = { name1: 'Arnold', age: 65, country: 'USA' };
// let { name1: age,hero} = myObject1; //alias can be used with : 
// console.log(age);
// console.log(hero);
// console.log(currentAge);
//OUTPUT: Arnold 65

// //Accessing object
// // objectName.key = value;
// // //OR
// // objectName[key] = value; 
// personalDetails['gender']='female' // setting object using bracket
// console.log(personalDetails.gender); // Accessing object using dot
// console.log('.....................');


// //For in loop to access object key values

// for(let user in personalDetails) {
//     console.log(user); // gives key
//     console.log(personalDetails[user]); // to access values pair of key dot operator doesnt work
//     // console.log(personalDetails.user); // Dot operator doesnt work
// }


