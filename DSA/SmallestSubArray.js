function smallestSubArray(arr,target) {

    let start= 0
   
    let minwindowSize = Number.MAX_VALUE
    let sum =0 

    for( let end = 0;end<arr.length;end++){
        sum+=arr[end]

        while(sum>=target){
            minwindowSize =Math.min(minwindowSize,end-start+1)
            sum-=arr[start]
            start++
        }
    }

    return minwindowSize
}

const result = smallestSubArray([4,2,2,7,8,1,2,8,1,0],9)

console.log(result);