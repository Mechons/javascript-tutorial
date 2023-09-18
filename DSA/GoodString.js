

const repeatedCharacter =s => {
    //create empty array 

    const myarr = []

 /* Loop through String  if string present in array return string 
   else add the charecter in array 
   */

   for(let i=0; i<s.length;i++) {
    let char = s[i]
    if(myarr.includes(char)) {
        return char
    }
    else {
        myarr.push(char)
    }
   }
}
const result = repeatedCharacter('abbbacc')
     console.log(result); // b