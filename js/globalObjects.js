//Concat
let myStr1 = "Hello";
let myStr2 = " ";
let myStr3 = "World";
console.log("Concatenated string: " + myStr1.concat(myStr2, myStr3));
//Returns: Concatenated string: Hello World

// IndexOf()
console.log('index of mystr', myStr1.indexOf('e')); // 1 if not present then -1
console.log('index of mystr', myStr1.indexOf(1)); // Not present then -1

//Replace
let myStr = "Are you enjoying JavaScript?";
myStr = myStr.replace('you', 'they');
console.log(myStr);
//Returns Are they enjoying JavaScript?

//Search
let myString1 = "can you find it?";
console.log("Occurrence of find in statement1: " + myString1.search('find'));
let myString2 = "Or you can not?";
console.log("Occurrence of find in statement2: " + myString2.search('find'));
/*Returns: 
 The Occurrence of find in statement1: 8, 
 The Occurrence of find in statement2: -1*/

//Split convert string into an array
let myString = "Hello World";
console.log("Split string based on paces: " + myString.split(" "));
myString.split('')
//Returns: Split of string based on spaces: Hello,World
console.log(typeof (myString));

//Slice
let myword = "Hello world"
const mysl = myword.slice(5) //world
console.log("slice", mysl);
console.log("slice of two no :", myword.slice(0, 5)); // end parameter not included // hello

//substring
let word = "Hello world";
console.log("substring word", word.substring(5)); // start from 5 and end to last //world
console.log("substring word", word.substring(2, 5)); // start from 5 and end to last //llo it can take negative parameter

//Substr
//first parameter as start and second parameter as length of extaracted string 

let sub = "Apple Banana Kiwi"
console.log(sub.length); //17 space included
console.log("substr : ", sub.substr(7, 5)); // anana

//Parse() conver JSON into object
let stringJSON = '{"firstName":"Sam","lastName":"Fernandes"}'
let obj = JSON.parse(stringJSON);
console.log(typeof(obj));
console.log(obj);
//OUTPUT: { firstName: 'Sam', lastName: 'Fernandes' }

// STRINGIFY CONVERT OBject into JSON string
let dataJSON = { firstName: "Sam", lastName: "Fernandes" };
let obj1 = JSON.stringify(dataJSON);
console.log(typeof(obj1));
console.log(obj1);
//OUTPUT: {"firstName":"Sam","lastName":"Fernandes"}

// assign()

// Loads new HTML document. 
// location.assign('http://www.facebook.com'); 
//Opens facebook page 
//reload() reload the current html

// target Event Property:

// Refers to the HTML element that fired the event. 

{/* <p id="para1" onclick="executeMe(event)"> Para one of my page</p> 
<script> 
     function executeMe(event) {
            alert(event.target.nodeName)
        }
</script>  */}
//alert box shows P ID="PARA1" 
// event.type show what type of event accour





