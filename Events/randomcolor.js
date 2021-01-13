const button=document.querySelector('button') //select button 
const h1=document.querySelector('h1')

//add event
button.addEventListener('click',function(){

    const newColor=makeRandomColor()
    document.body.style.backgroundColor=newColor; //set that as background color
    h1.innerText=newColor;
})


const makeRandomColor=()=>{
    const r=Math.floor(Math.random()*255); //randomly generate RGB color
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return newColor=`rgb(${r},${g},${b})`;

}