

const tweetForm=document.querySelector("#tweetForm")
const list=document.querySelector("#tweets")

tweetForm.addEventListener('submit',function(e){
    //prevent default behaviour
    e.preventDefault();
    //get username and tweet
    const usernameInput= tweetForm.elements.username
    const tweetInput= tweetForm.elements.tweet
    //add tweet to ul
    addTweet(usernameInput.value,tweetInput.value)
    //set values back to default
    usernameInput.value='';
    tweetInput.value='';

})


//function to add tweet
const addTweet=(usernameInput,tweetInput)=>{
    /**
     * Creates a new tweet in the form: username - tweet 
     * @param string usernameInput: Username value 
     * @param string tweetInput: Tweet value 
     */

    //create new li
    const newTweet=document.createElement('li');
    //create new bold tag
    const bTag=document.createElement('b');
    //add username to bold tag
    bTag.append(usernameInput)
    //add bold tag to li
    newTweet.append(bTag)
    //add the tweet to the li in form - tweet
    newTweet.append(` - ${tweetInput}`)
    //add new tweet to ul 
    list.append(newTweet)
}

list.addEventListener('click',function(e){

    //make sure the li was clicked and if it was remove it
    e.target.nodeName=='LI'&& e.target.remove()
})