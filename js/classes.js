class Car {
    constructor(name,color,topSpeed) {
        // properties
        this.name = name
        // ferrari.name = 'ferrari'
        this.color = color
        this.topSpeed = topSpeed
        this.currentSpeed= 0;
    }
    //Methods
    // getCurrentSpeed() {
    //     return currentSpeed
    // }

    zeroToSixty() {
        setTimeout(() => {
            console.log('ohh That is fast');
            this.currentSpeed = 60
            console.log(this.currentSpeed);
        },3000);
    }

    drive(speed= 10) {
        console.log('just drove two miles');
        this.currentSpeed += speed
        console.log(`driving speed at ${this.currentSpeed}`);
    }
    brake() {
        console.log('braking');
        this.currentSpeed -=10
        console.log(`driving speed at ${this.currentSpeed}`);
    }
    stop() {
        console.log('car stop')
        this.currentSpeed = 0;
        console.log(`driving speed at ${this.currentSpeed}`);
    }
}
//Inheritance
class Scooter extends Car {
    constructor(name,color,topSpeed,size) {
        super(name,color,topSpeed)
        this.size= size
    }
    noWheel() {
        for(let colors of color)
        console.log(colors);
    }
    // super.brake() not aplicable
}

const ferrari = new Car()
const tvs = new Scooter('tvs','black',80)
tvs.drive()
tvs.noWheel()
// console.log(ferrari.name);
// console.log(ferrari.color);
// console.log(ferrari.topSpeed);
// console.log(ferrari.currentSpeed);
// ferrari.drive()
// ferrari.brake()
// ferrari.drive()
// console.log(ferrari.currentSpeed); // 20
// console.log(ferrari.currentSpeed);
//  ferrari.zeroToSixty()
// console.log(ferrari);
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// const nums = [1,2,3,4,5]
// nums.forEach(_ =>
//     ferrari.drive() // loop to array of size five
// );
// ferrari.drive(40)
// ferrari.drive(80)
// console.log(ferrari.currentSpeed);
// ferrari.brake()
// console.log(ferrari.currentSpeed);
// ferrari.stop()
// console.log(ferrari.currentSpeed);

// //You can only have nethods inside of classes
// const num = [1,2,3,4] //  It is class
// num.push(4) // it is method as it called by dot operator
// Array.prototype.mypush = function() {
//     this.length
//     return this.length
// }
//  const fruits = [ 'banaana','kiwi','apple']
//  console.log(fruits.mypush());