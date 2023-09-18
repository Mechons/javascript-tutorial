
function sumZero(arr1) {
  /*********************************************************************************************************
   * TAKE TWO POINTER LEFT START OF ARRAY AND RIGHT END OF ARRAY RUN THE LOOP TILL LEFT IS LESS THAN RIGHT *
   *                 AND CHECK FOR SUM OF LEFT AND RIGHT INDICES IF IT IS ZERO RETUN VALUE OF INDICES      *
   *                                       ELSEIF SUM>0 MAKE RIGHT--                                       *
   *                                              ELSE LEFT++                                              *
   *********************************************************************************************************/

  let left = 0;
  let right = arr1.length - 1;

  while (left < right) {
    let sum = arr1[left] + arr1[right];
    if (sum == 0) {
      return [arr1[left], arr1[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const paramArray = [-3, -2, -1, 0, 1, 2, 3, 10];

const result = sumZero(paramArray);  
console.log(result);
