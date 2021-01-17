


const tweetForm=document.querySelector("#tweetForm")
const list=document.querySelector("ul")

tweetForm.addEventListener('submit',function(e){
    //prevent default behaviour
    e.preventDefault();
    const usernameInput= tweetForm.elements.username.value;
    const tweetInput= tweetForm.elements.tweet.value;
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
    list.append(newTweet)


})