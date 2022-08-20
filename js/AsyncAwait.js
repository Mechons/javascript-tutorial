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

function sayAfter2Seconds(x) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(x);
		}, 2000);
	});
}
async function hello() {
	//wait until the promise returns a value
    console.log('before promise resolved');
	var x = await sayAfter2Seconds("Hello Async/Await");
	return x; //Hello Async/Await
}
let a = hello();
console.log('wait to return promise');

a.then(data=>console.log(data))
