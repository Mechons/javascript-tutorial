// // let myvar;
// // myvar=String(34);

// // console.log(myvar,typeof(myvar))

// // class Employee{
// //     constructor(id,name,age){
// //         this.id=id;
// //         this.name=name;
// //         this.age=age;
// //     }
// //     swipeIn(){
// //         console.log("Employee "+this.id+" has swiped in at "+new Date());
// //     }
// //     static code(){
// //         console.log("Employee is coding");
// //     }
// // }
// // e1=new Employee(100,"Mark",23);
// // e2=new Employee(101,"Jane",24);
// // console.log(e1.age);
// // e1.swipeIn();
// // e2.swipeIn();

// // Employee.code();
// class Employee{
//     constructor(id,name,age){
//         this.id=id;
//         this.name=name;
//         this.age=age;
//     }
//     swipeIn(){
//         console.log("Employee "+this.id+" has swiped in at "+new Date());
//     }
//     static code(){
//         console.log("Employee is coding");
//     }
// }
// class PartTimeEmployee extends Employee{
//     constructor(id,name,age,contractPeriod){
//         super(id,name,age);
//         this.contractPeriod=contractPeriod;
//     }
// }
// e1=new Employee(100,"Mark",23);
// e2= new PartTimeEmployee(101,"Jane",34,3);
// PartTimeEmployee.code();
// e2.swipeIn();
// console.log(e2.contractPeriod);
// function validateName(name) {
//     try {
//         if (name.match(/\$/)) {
//               throw new Error("Name should not contain $");
//         }
//         else {
//             return true;
//         }
//     }
//     catch (error) {
//             console.log(error.message);
//     }
//     finally{
//         console.log("Cleaning up resources");
//     }
// }
// validateName("Hello");

// let value;
// function check(val) {
//     console.log(val);
// }
// function getTrip(callback) {
//     setTimeout(function () {
//         value = "Let's go to Trip";
//         callback(value);
//        // console.log(value)
//     }, 1500);
// }
// getTrip(check);
// //check(value);// undefined

// function bookFlight(airline) {
//     return new Promise(function (resolve, reject) {
//         if (airline == "AirIndia") {
//             setTimeout(resolve(5600), 2000);
//         } else {
//             reject(Error("Flight can not be booked"))
//         }
//     })
// }
// function bookHotel(flightPrice) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve(7000 + flightPrice), 1000);
//     })
// }
// bookFlight("AirIndia")
//     .then(function (flightData) { return bookHotel(flightData) })
//     .then(function (cumulativeData) { console.log(" Total is " + cumulativeData) })
//     .catch(e => console.log(e.message))
var str ="ABCDE1234F";
var pattern = new RegExp("/^[A-Z]{5}[\d]{4}[A-Z]?$/");


    str.match(pattern);
