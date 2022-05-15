console.log("this is tut37.js");

//pretend this response is coming from server
const students = [
    {name: "harry",subject: "javascipt"},
    {name: "Rohan",subject: "machineLearnig"}
]

function enrollStudent(student, callBack) {

    setTimeout(function() {
        students.push(student);
        console.log("students has been enrolled");
        callBack();
    }, 3000);
    
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
enrollStudent(newStudent, getStudents);
//getStudents();