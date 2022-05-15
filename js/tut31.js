console.log("this is tut 31.js");

class Employee{
    constructor(givenName,givenExperience,givenDivision){

    this.name= givenName;
    this.experience= givenExperience;
    this.division= givenDivision;
}

slogan() {
    return `I am ${this.name} and my company is best`
}

JoiningYear() {
 return `This person join in ${2021 - this.experience} year`;
}

// static method
static add(a ,b) {
    return a+b;
}

}
//Inheritance
class Programmer extends Employee {

    constructor(givenName,givenExperience,givenDivision,language) {
        super(givenName,givenExperience,givenDivision);
         this.language= language;
         
    }

     favoriteLanguage(){

        if(this.language=="python"){
            return "python"
        }
        else {
            return "Java script"
        }
    }

    static Multiply(a, b) {
        return a*b ;
    }
}

// harry = new Employee("ishank",1,"SE")
// console.log(harry.JoiningYear());

// console.log(Employee.add(36,38));

rohan = new Programmer("Rohan",3,"lays","C++")
console.log(rohan);
console.log(rohan.favoriteLanguage());
console.log(Programmer.Multiply(8,5));

