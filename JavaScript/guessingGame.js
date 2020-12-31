//guessing gam which generates a random number and makes user guess it 
//based on the guess the program gives the user hints

//get the max number form the user 
let maxNum=parseInt(prompt("Enter the max number")); 
//if the vlaue entered is not a number 
while (!maxNum)
    {
        //keep asking until you get a number 
        maxNum=parseInt(prompt("Enter a valid number, Please")); 
    }
//generate the target number 
const targetNum=Math.floor(Math.random()*maxNum)+1;
console.log(targetNum)

//ask user to make a guess 
let guess=parseInt(prompt("Enter your first guess"));
let attempts=1; //number of guesses 

while (parseInt(guess)!==targetNum)
    {
        if (guess==='q') 
            {
                break;
            }
            
        attempts++;
        if (guess>targetNum)
            {
                guess=prompt("Too high! Enter a new guess!")
            }
        else
            {
                guess=prompt("Too low! Enter a new guess!")
            }
    }
if (guess==='q')
    {
        console.log("Quiting...")
    }
else
{
    console.log(`You got it! It took you ${attempts} guesses`)
}

