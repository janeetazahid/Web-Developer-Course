

const btn2=document.querySelector("#v2");

btn2.onclick=function(){
    console.log("you clicked me")
    console.log("I hope it worked")
}


function scream(){
    console.log("AAAAAAAAAAA")
} 
btn2.onmouseenter=scream;


const btn3=document.querySelector('#v3');

btn3.addEventListener('click',function(){
    alert("CLICKED");
})