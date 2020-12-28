console.log("Hello World");
let total=2+9;
let random=Math.random()
//if statements 
// if (random>0.5){
//     console.log("your number is greater than 0.5")
//     console.log(random)
// }
// if (random<=0.5){
//     console.log("your number is less than  or equals 0.5")
//     console.log(random) 
// }

// const dayofWeek=prompt("Enter a day").toLowerCase();

// if(dayofWeek==="monday")
//     {
//         console.log("I hate mondays")
//     }
// else if(dayofWeek==="sunday")
//     {
//         console.log("I suppose this works")
//     }
// else if(dayofWeek==="friday") 
//     {
//         console.log("YAY!")
//     }
// else 
//     {
//         console.log("Meh")
//     
const password=prompt("Please enter a password")
if (password.length>=6 && password.indexOf(' ')===-1){
    console.log("Good password")
}
else{
    console.log("Invalid password");
}