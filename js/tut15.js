console.log("this is tut 15.js");
let cont= document.querySelector('.no')
 cont= document.querySelector('.container')
cont=cont.childNodes
//console.log(cont[0].nodeType)
//Node Tpes
// 1.element
// 2 attribute
// 3 text node

// 8comment
// 9 document
// 10 doctype 

let container= document.querySelector('div.container');
//console.log(container.children[1].children[0])
// console.log(container.firstChild)
// console.log(container.firstElementChild)
// console.log(container.lastElementChild)
// console.log(container.children)
// console.log(container.childElementCount)//count of child elements

console.log(container.firstElementChild.parentNode)
console.log(container.firstElementChild.nextSibling)
console.log(container.firstElementChild.nextElementSibling)
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling)