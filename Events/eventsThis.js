
//function to create random color 
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}


const buttons=document.querySelectorAll('button') //select all buttons 

for (let button of buttons){
    button.addEventListener('click', colorize)
}

//select all h1s
const h1s=document.querySelectorAll('h1')

//loop through h1s
for(let h1 of h1s){
    //add event listner
    h1.addEventListener('click',colorize)
}

//function to change background and text color 
function colorize(){
    //randomly generate 2 colors and set them to the background and text color
    this.style.backgroundColor=makeRandColor();
    this.style.color=makeRandColor();
}