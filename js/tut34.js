console.log("this is tut34.js");

//asynchronous programing
setTimeout(() => {

    for (let index = 0; index < 4005; index++) {
        const element = index;
        console.log("This is index number"+ index);
        
    }
    
}, 100);


console.log("printing is done");