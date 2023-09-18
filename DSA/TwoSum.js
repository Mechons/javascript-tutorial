/*****************************************************************************************************************************
 * GIVEN AN ARRAY OF INTEGERS NUMS AND AN INTEGER TARGET, RETURN INDICES OF THE TWO NUMBERS SUCH THAT THEY ADD UP TO TARGET. *
 *        YOU MAY ASSUME THAT EACH INPUT WOULD HAVE EXACTLY ONE SOLUTION, AND YOU MAY NOT USE THE SAME ELEMENT TWICE.        *
 *                                          YOU CAN RETURN THE ANSWER IN ANY ORDER.                                          *
 *****************************************************************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr= []
        for(let i =0 ; i<nums.length;i++) {
            let x = target -nums[i]
    if(arr.includes(x)) {
    return [arr.indexOf(x),i]
    }
    else {
        arr.push(nums[i])
    }
        }
        
    };