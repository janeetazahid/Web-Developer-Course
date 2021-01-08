

const list_li=document.querySelectorAll('li'); //select all lis 
let i=0;

for (let l of list_li)
{
   l.classList.toggle('highlight') //iterate over them and toggle highlight class 
}