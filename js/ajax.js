console.log("this is ajax tutuorial");

let fetchBtn= document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {

    console.log("you have clicked the fetchBtn");
    //Instantiate xhr object

    const xhr = new XMLHttpRequest();

    //open the object
    
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1', true); //Asynchronous for true
    
    
    xhr.open('POST','https://dummy.restapiexample.com/api/v1/create', true); //Asynchronous for true
    xhr.getResponseHeader('Content-type', 'application/json');

    // What to do on progress(optional)
    xhr.onprogress= function () {
        
        console.log('on progress');
    }
    // xhr.onreadystatechange = function () {
    //         console.log('ready state is', xhr.readyState);
    // }
    //What to do when response is ready
    xhr.onload = function () {

        if(this.status===200){
            
            console.log(this.responseText);
        }
        else{
            console.log("Some error occured");
        }
    }

    //send the request
    params = `{"name":"test34adnfjh545","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("we are done!");
}

let popBtn= document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    
    console.log("you have clicked the popBtn");
    //Instantiate xhr object

    const xhr = new XMLHttpRequest();

    //open the object
    
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true); //Asynchronous for true

    //What to do when response is ready
    xhr.onload = function () {

        if(this.status===200){
            
           let obj = JSON.parse(this.responseText);
           console.log(obj);
           let list= document.getElementById('list');

           str="";
           for (key in obj) {
            str += `<li>${obj[key].id} </li>`;
           }
           list.innerHTML = str;
        }
        else{
            console.log("Some error occured");
        }
    }

    //send the request
    xhr.send();

    console.log("we are done fetching employee!");
}
