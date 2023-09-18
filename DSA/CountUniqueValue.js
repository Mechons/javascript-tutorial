/**********************
 * COUNT UNIQUE VALUE *
 **********************/

function uniqueValue(arr) {
    
  /***************************************************************************
   * TAKE TWO POINTER I AND J CHECK THE VALUE IF DOESN'T MATCH INC I POINTER *
   *          AND MAKE THE VALUE I EQUAL TO J AND AGAIN LOOP FOR J           *
   ***************************************************************************/

  let i = 0;

  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

const paramArray = [1, 2, 2, 2, 3, 4, 4, 6, 7]; // 6 unique value
const result = uniqueValue(paramArray);

console.log(result);
