// console.log("This is tutorial 43");
// //async return promise
// async function harry(){
//     console.log('Inside harry function');
//     const response = await fetch('https://api.github.com/users'); //wait for promise to resolve
//     console.log('before response');
//     const users = await response.json();
//     console.log('users resolved')
//     return users;

//     // return "harry";
// }

// console.log("Before calling harry")
// let a = harry();
// console.log("After calling harry")
// console.log(a);
// a.then(data => console.log(data)) // will execute when promise is resolved which return from async function
// console.log("Last line of this js file")

// function sayAfter2Seconds(x) {
//   return new Promise((reject, resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, 2000);
//   });
// }
// async function hello() {
//   //wait until the promise returns a value
//   console.log("before promise resolved");
//   var x = await sayAfter2Seconds("Hello Async/Await");
//   console.log("promise resolved");
//   return x; //Hello Async/Await
// }
// let a = hello();
// console.log("wait to return promise");

// a.then((data) => console.log(data)).catch((err) => console.log(err));

// Async Function will always returns promise and if return value it is wrapped inside promise

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved value!!");
  }, 3000);
});

// async function getData() {
//   return myPromise;
// }

// const dataPromise = getData();

// dataPromise.then((data) => {
//   console.log(data);
// });

// Before async await

// function myData() {
//   myPromise.then((data) => console.log(data));
//   console.log("My javascript")
// }

// myData();

// using Async Await

async function handlePromise() {
  console.log("Hello world");
  // JS Engine wait for promise to resolved at line 71 then only go to next line once promise is resolved
  const response = await myPromise;
  console.log("My javascript");
  console.log(response);
}

// Await is keyword can only be used inside your async function
handlePromise();

