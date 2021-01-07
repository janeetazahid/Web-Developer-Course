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