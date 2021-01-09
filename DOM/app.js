const allImages=document.getElementsByTagName('img');


//selecting all images (by tag name) and changing them
for (let img of allImages)
{
    img.src='https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
}


document.querySelector('#banner') //will find first of this type


console.log(document.querySelector('p').innerText) //shows the text inside element



const allLinks=document.querySelectorAll('a');

for (let link of allLinks){
    link.innerText='I AM LINK'
}


document.querySelector('h1').innerHTML='<i>CHICKENS</i>' //select and update html
document.querySelector('h1').innerHTML +='<sup>Chiken</sup>'

const firstLink=document.querySelector('a'); //first link
console.log(firstLink.getAttribute('title'));


firstLink.setAttribute('href','https://www.google.com'); //change href


const h1=document.querySelector('h1');
console.log(h1.style) //does not contain styles from style sheet 

h1.style.color='blue'


for (let link of allLinks)
{
    link.style.color='rgb(255,108,134)'
}


console.log(window.getComputedStyle(h1).fontSize);


//classList 
const h2=document.querySelector('h2');
h2.setAttribute('class','purple'); //add a class to it 

h2.classList.add('border'); //add border class


//traversing parent/child/sibling

const firstBoldTag=document.querySelector('b')
console.log(firstBoldTag )

console.log(firstBoldTag.parentElement.parentElement)


const paragraph=firstBoldTag.parentElement //(first bold tags parent element is a paragraph)

console.log(paragraph.children) //prints child of paragraph tag


const sqaureImg=document.querySelector('.square') //select first sqaure image

console.log(sqaureImg.nextSibling,sqaureImg.previousSibling) //white space is treated as text so thats why this results in text

console.log(sqaureImg.nextElementSibling,sqaureImg.previousElementSibling)