console.log("this is tut 28 js");

//object literal:object.prototype
let obj={
name:"harry",
channel:"code with harry",
adress:"mars"
}
//console.log(obj);

function Obj(givenName){
    this.name= givenName
}
Obj.prototype.getName = function() {
    return this.name;
}

Obj.prototype.setName= function(newName){
    this.name= newName;
}

let obj2= new Obj("rohan");
console.log(obj2);