
let maxNum=parseInt(prompt("Enter the max number")); 

while (!maxNum)
    {
        maxNum=parseInt(prompt("Enter a valid number, Please")); 
    }
const targetNum=Math.floor(Math.random()*maxNum)+1;
console.log(targetNum)
