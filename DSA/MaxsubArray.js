// function maxSubarraySum(arr,num) {

//     if(arr.length<num) return null

//     let max = -Infinity

//     for(let i=0;i<arr.length-num+1;i++) {
//         let temp =0

//         for(let j=0; j<num;j++ ){
//             temp +=arr[i+j]
//         }
//         if(temp>max){
//             max=temp
//         }
//     }
//     return max
// }

const result = maxSubarraySum([2,6,9,2,1,8,5,4,6,3],3)

console.log(result);

/*******************************************
 * // 2ND SOLUTION SLIDING WINDOW SOLUTION *
 *******************************************/

function maxSubarraySum(arr,num) {
    if(arr.length<num) return null
    let tempSum = 0
    let maxSum = 0

    for(let i=0;i<num;i++) {
        maxSum+= arr[i]
    }

    tempSum = maxSum

    for(let i=num;i<arr.length;i++) {
        tempSum = tempSum-arr[i-num]+arr[i]
        maxSum = Math.max(maxSum,tempSum)
    }

    return maxSum
}