console.log("this is tut6")
//single element selector

 let element=document.getElementById('myfirst')
// //element=element.className;
// //element=element.childNodes;
 element.style.color='red'
// element.innerText='Ishank is good boy'
element.innerHTML="<b> Ishank is a good boy</b>"
// console.log(element)

let sel=document.querySelector('#myfirst');
  sel=document.querySelector('h1');
  sel=document.querySelector('.child')
  sel=document.querySelector('b')
  sel=document.querySelector('div')
 sel.style.color='green';
//console.log(sel)

//multi element selector
 let elems=document.getElementsByClassName('child')
// elems=document.getElementsByClassName('container')
// elems=document.getElementsByTagName('div')
 console.log(elems);

 Array.from(elems).forEach(element=>{
    console.log(element);
   element.style.color='blue';
 })
//console.log(elems[0].getElementsByClassName('child'))