function same(arr1,arr2) {
    // check the length of two array 
    if(arr1.length!==arr2.length) false

    // create two object to store the frequncy of array in key value pair

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of arr1){
frequencyCounter1[val] = (frequencyCounter1[val] || 0  )+1
 }
 for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0  )+1
     }

    for(let key in frequencyCounter1) {
        if(!(key**2 in frequencyCounter2)){
            return flase
        }
        if(frequencyCounter1[key]!==frequencyCounter2[key**2]) {
            return false
        }
    }
console.log(frequencyCounter1);
console.log(frequencyCounter2);
return true
}


const result = same([1,2,3,2],[4,9,1,4])

console.log(result);


var uniqueOccurrences = function(arr) {

    let obj = {}
    let arr1 = []

    for(let val of arr) {
        obj[val] = (obj[val]||0)+1
    }

   for(let key in obj) {
    if(arr1.includes(obj[key])) {
return false
    }
    arr1.push(obj[key])
   }
   console.log('obj',obj);
   return true
};

console.log(uniqueOccurrences([1,2,2,1,1,3]));