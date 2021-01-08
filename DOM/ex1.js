const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //array of colors 


const spans=document.querySelectorAll('span'); //select all spans 
let i=0;
for (let span of spans) //iterate through each span and change the color 
{
    span.style.color=colors[i]
    i++;
}