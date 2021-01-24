//select player one button
const player1Button=document.querySelector('#p1Inc')
//select player 2 button 
const player2Button=document.querySelector('#p2Inc')
//select the display of player 1
const player1Display=document.querySelector('#p1Display')
//select the display of player 2
const player2Display=document.querySelector('#p2Display')

let player1Score=0; //start at 0 for both players 
let player2Score=0; //start at 0 for both players 

let winningScore=5; //score needed to win 

let gameOver=false; //wether the game is over or not

//add listner event to buttons and listen for a click event 
player1Button.addEventListener('click',function(){
    if (!gameOver)
        {
            //increase score 
            player1Score+=1;
            //update display 
            if (player1Score===winningScore)
                {
                    gameOver=true;
                }
            player1Display.textContent=player1Score;
        }

})


player2Button.addEventListener('click',function(){
    if (!gameOver)
        {
            //increase score 
            player2Score+=1;
            //update display 
            if (player2Score===winningScore)
                {
                    gameOver=true;
                }
            player2Display.textContent=player2Score;
        }

})