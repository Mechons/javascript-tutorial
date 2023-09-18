// // LEXICAL SCOPE

// function a (){
// // console.log(b); 
// // 10 As it first check local scope x not found then it check parent scope i.e global scope and it found b
// // var b = 20
// c()
// function c() {
//    console.log(b); 
// }
// }
// let b = 10
// a()

// // Lexical Env is local memory along with lexical env of its parent lexical means heriharcy

// // Block - {var a= 10; } compound statement

// {
//     // compound statement
//     var a= 10
//     console.log(a)
// }
// // if require one statement so use block to group multiple statement to single statement
// if(true) {

// } 


// // Block scope function or variable which can be access inside block

// {
//     var a =10 
//     let b= 20
//     const c = 30
// }


// const data = {
//     ['name'] : {
//         ['natwest' ]: 'Natwestname',
//         ['rbs' ]: 'RBSname'
//     },
//     ['sign']: {
//         ['natwest'] : 'Natwestsign',
//         ['namrbswest'] : 'RBSsign'
//     }
// }

// function setBrandName(env,brand) {
//     return data[env][brand]
// }

// const result = setBrandName('name','rbs')

// console.log(result);

let a= 10
{
  let  a = 100
    console.log(a);
}

console.log(a);