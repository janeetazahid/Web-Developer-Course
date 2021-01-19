
//select button 
const button=document.querySelector('#button2');
//select div 
const container=document.querySelector('#container');

button.addEventListener('click',function(e){
    container.style.backgroundColor=makeRandColor();
    //prevents event from bubbling up
    e.stopPropagation();
})

container.addEventListener('click',function(){
    container.classList.toggle('hide');
})


const makeRandColor=()=>{
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}