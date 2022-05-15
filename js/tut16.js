console.log('this is tut 16.js')

let element= document.createElement('li')
//element.innerHTML='<> this is created nodes'
let text= document.createTextNode('This is text Node')
element.appendChild(text)
element.className='childul'
element.id='createdLi'
element.setAttribute('title','mytitle')
let ul= document.querySelector('ul.this')
ul.appendChild(element)
// console.log(ul)
// console.log(element)

let elem2= document.createElement('h3')
let tNode=document.createTextNode('This is created heading')
elem2.appendChild(tNode)
elem2.id='elem2'
elem2.className='elem2'
element.replaceWith(elem2)

console.log(elem2)

let myul=document.getElementById('myul')
console.log(myul)
myul.replaceChild(element,document.getElementById('ful'))

myul.removeChild(document.getElementById('lul'))
elem2.removeAttribute('id')
let pr=elem2.hasAttribute('class')

console.log(pr)

let elem3= document.createElement('a')
let tnode1= document.createTextNode('Go to code with Harry')
//document.create
elem3.appendChild(tnode1)
elem3.id="elem3"
elem3.className="elem3"
elem3.href="https://www.codewithharry.com"
console.log(elem3)
elem2.replaceWith(elem3)