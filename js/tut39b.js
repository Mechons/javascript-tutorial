console.log("this is tut37.js");

//pretend this response is coming from server
const students = [
    {name: "harry",subject: "javascipt"},
    {name: "Rohan",subject: "machineLearnig"}
]

function enrollStudent(student) {

    return new Promise(function (resolve,reject) {
        
        setTimeout(function() {
            students.push(student);
            console.log("students has been enrolled");
            const error = false;
       if(!error){

           resolve();
       }
       else{
           reject();
       }
        }, 3000);
    })
    
}

function getStudents() {

    setTimeout(function() {
        
        let str="";
        students.forEach(function (student) {
            str += `<li>${student.name} </li>`
            
        });

        document.getElementById("students").innerHTML = str;
        console.log("students has been fetch");
    }, 1000);
}

let newStudent = {name: "sunny",subject:"python"}
enrollStudent(newStudent).then(function(){
    getStudents();
}).catch(function () {
        console.log("some error occured");
})

//getStudents();
// function inside then is run as -- resolve()
// function inside catch is run as - reject()