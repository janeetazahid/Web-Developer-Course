//loopsin js

for (i=0;i<=10;i++){
    console.log(i)
}

// Print out "Da ba dee da ba daa" 6 times, using a for loop
// for (i=0;i<=5;i++){
//     console.log("Da ba dee da ba daa")
// }
const SECRET="red";
let guess=prompt("enter the secrate code...");
while(guess!==SECRET){
    guess=prompt("enter the secrate code...");
}
console.log("Congrats you got it")

