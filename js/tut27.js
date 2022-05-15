console.log('this is tut 27.js');

//object literal for creating object
let car={
    name:'maruti 800',
    topSpeed: 90,
   run: function(){
        console.log("car is runnig");
    }
}

console.log(car);
//car.run();

//this is constructor
//new Date();

//creating constructor for cars
function GenralCar(name,topSpeed){
    this.name=name;
    this.topSpeed=topSpeed;
    this.run= function(){
        console.log(`${this.name} is Running`);
    }

    this.analyze=function(){
        console.log(`${this.name} car is slower by ${200-this.topSpeed} km/hr than mercedes`);
    }
}

car1= new GenralCar('Nissan',180);
car2= new GenralCar('Maruti alto',90);
car3= new GenralCar('Mercedes',200);

console.log(car1,car2,car3);