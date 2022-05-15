class Demo{


    constructor(num1) { // creating constructor
        
        this.num1=num1;

    }

    check() {

        if(this.num1>50){
            return `Range is high`
        }
        else if (this.num1<1){
            return`Not Valid`
        }
        else if(this.num1%5==0 & this.num1%3==0){
            return `jump`
        }
        else if(this.num1%5==0) {
            return `clap`
        }
        else if(this.num1%3==0){
            return `Tap`
        }
        else {
            return JSON.stringify(this.num1) // convert integer into string 
        }
    }
     
   
     
}

n1 =new  Demo(4) // creating object
console.log(n1.check());