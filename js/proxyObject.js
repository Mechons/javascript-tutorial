// 'use strict'

// // * Proxy in JavaScript

// /*
// *   Proxy object enables you to intercept and customize the
// *   operations performed on objects
// */


let person = {
    firstname: 'Richard',
    lastname: 'Hendricks',
    age: 25
};

console.log(person);
console.log(person.firstname);

// person.age = 300;
// console.log(person);

console.log('---------------------');

let goodPerson = new Proxy(person, {

    get: function(target, prop, receiver) {
        console.log(prop + ' is being accessed');
        if(prop === 'allowedtovote') {
            if(target.age >= 18) {
                return true;
            } else {
                return false;
            }
        } else if(prop === 'fullname') {
            return target.firstname + ' ' + target.lastname;
        } else if(!(prop in target)) {
            throw new ReferenceError('Unknown property:- ' + prop);
        }
        return Reflect.get(target, prop, receiver);
        // return target[prop];  // property value return for target[prop]
    },

    set: function(target, prop, value) {
        if(prop === 'age' && value > 200) {
            throw new Error('Age is not valid');
        }
        return Reflect.set(target, prop, value);
        // target[prop] = value;  // property value set
        // return true;
    }
});

// console.log(goodPerson.firstname);

// console.log('-------------------');

// console.log(goodPerson.allowedtovote);
// console.log(goodPerson.fullname);

// console.log('-------------------------');

goodPerson.age = 15;
console.log(goodPerson);
console.log(goodPerson.allowedtovote);

console.log(goodPerson);
console.log(goodPerson.firstname);
console.log(goodPerson.lastname);
console.log(goodPerson.age);

console.log('---------------------');

try {
    goodPerson.age = 250;
} catch(e) {
    console.log(e.message);
}

console.log(goodPerson);
console.log(goodPerson.age);

 let x= {p:'1'}
 let myobj = new Proxy(x,{
    get(t,k,r) {
        return k + 'bar'
        // return Reflect.get(t,k,r)
    }
 })
 let result = Reflect.get(myobj,'foo')
 console.log(result);

 var target = {
    get foo(){
        return this.bar
    },
    bar:3
 }

 var handler = {
    get(target,prop,reciever){
        if(prop==='bar'){
            return 2
            (Reflect.get(target,prop,reciever));
            (target[prop]);
        }
    }
 }

 var obj= new Proxy(target,handler)
 console.log(obj.foo());