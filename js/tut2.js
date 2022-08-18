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
// var str ="ABCDE1234F";
// var pattern = new RegExp("/^[A-Z]{5}[\d]{4}[A-Z]?$/");


//     str.match(pattern);
// let name = "sam"
// function demo () {
//     name += "mark"

// }
// console.log(name);

// const r = []
// function check (par1,...par2) {
//     return r.push(par1,par2)
// }
// console.log(check("Hello","world"));
// let ar = new Array([1,2,3])
// ar.delete(1)
// console.log(ar)
// var c = 5
// var c = 6
// console.log(c);
// let empId = "I1005"
// let employee = {
//     empId,
//     getEmpDetails() {
//         return this.empId
//     },
//     getDetails() {
//         setInterval( ()=> {
//             return this.empId
//         },1000)
//     }
    
// }
// console.log(employee.getEmpDetails());
// console.log(employee.getDetails());
// 
// let state = []
// state.push(['rihana', {
//     empid : "hiw",
//     city : "shfj",
//     age : 46
// }])
// console.log(...state);
let emp = [
    {
        id : "wegh",name: "hef"
    },
    {
        id : "wegh",name: "hef"
    },
    {
        id : "wegh",name: "hef"
    }
]
console.log(`empid ${emp[0].id} empname : ${emp[0].id}`);
console.log(typeof(emp));
let my = undefined
// my = 27
console.log(my);