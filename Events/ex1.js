const h1=document.querySelector('h1'); //select h1
const input=document.querySelector('input'); //input

input.addEventListener('input',function(e){
    if(input.value===''){
        h1.innerText='Enter Your Username';
    }
    else
    {
        h1.innerText=`Welcome, ${input.value}`;
    }
    
    
    
})