


const tweetForm=document.querySelector("#tweetForm")

tweetForm.addEventListener('submit',function(e){
    alert("SUBMITTED");
    //prevent default behaviour
    e.preventDefault();
})