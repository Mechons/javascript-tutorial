console.log('this is tut 20')

let impArray =['adrak','pyaz','bhindi'];
// let aray=['munna','ram']
// console.log(aray)
// man= JSON.stringify(aray)
// console.log(man)
//Add a key value pair inside local storage
localStorage.setItem('name','harry')
localStorage.setItem('name2','ishank')
localStorage.setItem('sabzi',JSON.stringify(impArray))//convert JavaScript object or value to a JSON string,

//to remove a single item
localStorage.removeItem('name')

//retrive item from local storage
let name=localStorage.getItem('name')
 name=JSON.parse(localStorage.getItem('sabzi'));//convert string to array
console.log(name)