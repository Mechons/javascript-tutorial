// function counter(len,acc,str) {

// }

// var firstUniqChar = function(s) {
//     let arr = s.split("")
//     let marr =[]
//         for(let i=0;i<arr.length;i++ ){
//          const result =  marr.includes(arr[i])  
//          if(!result) {
//             marr.push(arr[i])
//          }
//          console.log(result);
//         }
//         console.log(marr);
//     };

    

//     var firstUniqChar = function(s,k) {
//         let arr =s.split("")
//         let myarr = Array.from({length:arr.length})

//         let visited = Array.from({length: arr.length}, (_, i) => false);
//         console.log(myarr);

//     for(let i=0; i<arr.length;i++) {
     
// let count = 1
//         for(let j=0; j<myarr.length;j++){
//             // if(arr[i]!==visited){

//             // }
//             console.log(myarr[j],"myarr");
//             if(arr[i]===myarr[j]){
              
//                 count ++
//                 // myarr.push(arr[i])
                
//             //    console.log( arr[j] = visited);
//             }
//             // console.log(arr[i],count);
//         }
//         console.log('count',count);
//         if(count<=k){

//             myarr[i]=arr[i]
//             console.log(myarr);
//         }
//         else{
//             console.log(i,'i');
        
//             console.log(myarr);
//         }
    
//       console.log(i,'final arr');
//       console.log(",,,,,,,,,,,,,,,,,");
        
        
//     }
//     const result =  myarr.filter(item=> item!==undefined)
//     console.log(result);
//     console.log(myarr);
//     }

//     firstUniqChar("abcaacbccb",3)


    // Return The first letter appear twice
    const repeatedCharacter = s => {
        // Create Object 
        const obj = {}
  /* Loop through String  if string present in obj return string 
   else add the charecter in object
   */
        for(let i =0; i<s.length;i++) {
            let char = s[i]
            if(obj[char]) {
                return char
            }
            else{
                obj[char] = 1
            }
        }
     };

     const result = repeatedCharacter('abacc')
     console.log(result);  // a will first character


    //  var a= 10
    //  function num (){
    //     if(a) var a=10
    //     console.log(a);
    //  }

    //  num()