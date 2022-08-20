// console.log("this is tut 39.js");

// // promise:
// // -resolve
// // -reject
// // -pending

// function func1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const error = false;
//             if (!error) {
//                 console.log("Function: your promise has been resolve");
//                 resolve();

//             }
//             else {
//                 console.log("Function: your promise has not been resolve");
//                 reject('sorry not fulfilled');
//             }
//         }, 2000);

//     })
// }

// func1().then(function(){
//     console.log("Harry: thanks for resolving");
// }).catch(function (error) {
//     console.log("Harry: very bad bro!! " + error);
// })

// var myPromise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("success");
//     }, 2000);
// });
// myPromise.then(
//     function (data) {
//         console.log(data + " received in 2 seconds");
//     },
//     function (error) {
//         console.log(error);
//     }
// );
// new Promise(function (resolve, reject) {
// 	let b;
// 	setTimeout(compute = (a) => resolve(a + b), 10000);
// 	b = 25;
// }).then(function (data) { console.log(data); });
// compute(5);

function bookFlight(airline) {
        return new Promise(function (resolve, reject) {
            if (airline == "AirIndia") {
                setTimeout(()=>{
                    console.log('inside book flight'); 
                    resolve(5600)} ,2000);
            } else {
                reject(Error("Flight can not be booked"))
            }
        })
    }
    function bookHotel(flightPrice) {
        return new Promise(function (resolve) {
            setTimeout(()=>{
                console.log('inside book hotel');
                resolve(7000 + flightPrice)}, 1000);
        })
    }
    bookFlight("AirIndia")
        .then(function (flightData) {  console.log('resoved book flight'); return bookHotel(flightData) })
        .then(function (cumulativeData) { console.log(" Total is " + cumulativeData) }) //7000 +5600 = 12600
        .catch(e => console.log(e.message))
 
