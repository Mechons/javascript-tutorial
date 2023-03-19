const myObject = [
  {
    name: "ishank",
    amount: "30",
    pass : true
  },
  {
    name: "rohit",
    amount: 40,
    pass : true
  },
  {
    name: "ayush",
    amount: 50,
    rate: "A",
    pass : true
  },
  {
    name: "harshit",
    amount: 80,
    rate: "A",
    pass : false
  },
];

const changeName = (name) => {
  return name.toUpperCase();
};
const changeAmount = (amount) => {
  return "$" + amount;
};

const result = myObject.map((obj, i, arr) => {
  arr = {
    ...obj,
    name: changeName(obj.name),
    amount: changeAmount(obj.amount),
  };
  return arr;
});

console.log(result);

// for loop
for (let i = 0; i < myObject.length; i++) {
    console.log(myObject[i]);
}

// Filter 

const filterResult = myObject.filter((obj)=>{
return obj.amount>40
})

const keys = Object.keys(myObject)
console.log(keys);
console.log(filterResult);

//Reduce sum of ammount
const totalAmount = myObject.reduce((prev,current)=>prev+Number(current.amount),0)
console.log(totalAmount);

//sort an array

let employees = [
  {
      firstName: 'John',
      lastName: 'Doe',
      age: 27,
      joinedDate: 'December 15, 2017'
  },

  {
      firstName: 'Ana',
      lastName: 'Rosy',
      age: 25,
      joinedDate: 'January 15, 2019'
  },

  {
      firstName: 'Zion',
      lastName: 'Albert',
      age: 30,
      joinedDate: 'February 15, 2011'
  }
];
employees.sort((a, b) => {
  return b.age - a.age;
});
employees.forEach((e) => {
  console.log(`${e.firstName} ${e.lastName} ${e.age}`);
});
console.log(employees);

employees.sort((a, b) => {
  let fa = a.firstName.toLowerCase(),
      fb = b.firstName.toLowerCase();

  if (fa < fb) {
      return -1;
  }
  if (fa > fb) {
      return 1;
  }
  return 0;
});
employees.sort((a, b) => {
  let da = new Date(a.joinedDate),
      db = new Date(b.joinedDate);
  return da - db;
});
employees.forEach((e) => {
  console.log(`${e.firstName} ${e.lastName} ${e.joinedDate}`);
});

// Modify original array ForEach
employees.forEach((obj,i,arr)=>{

   obj.adult = obj.age>18
})

console.log(employees);

// const modifyObject = employees.map((obj,i,arr)=>{
//   arr = {...arr,obj['adult'] : obj.age<18}
//   return arr
// })
// console.log('...........',modifyObject);

//At position 2, add 2 elements:
const fruits = ["Banana", "Orange", "Apple", "Mango"]; //array.splice(index, howmany, item1, ....., itemX)

fruits.splice(2, 0, "Lemon", "Kiwi");