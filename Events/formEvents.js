


const tweetForm=document.querySelector("#tweetForm")
const list=document.querySelector("ul")

tweetForm.addEventListener('submit',function(e){
    const usernameInput= tweetForm.elements.username.value;
    const tweetInput= tweetForm.elements.tweet.value;
    //prevent default behaviour
    console.log(usernameInput);
    console.log(tweetInput)
    e.preventDefault();
  

})