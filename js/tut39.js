console.log("this is tut 39.js");

// promise:
// -resolve
// -reject
// -pending

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Function: your promise has been resolve");
                resolve();

            }
            else {
                console.log("Function: your promise has not been resolve");
                reject('sorry not fulfilled');
            }
        }, 2000);

    })
}

func1().then(function(){
    console.log("Harry: thanks for resolving");
}).catch(function (error) {
    console.log("Harry: very bad bro!! " + error);
})
    