let year=2020;
console.log(year)
console.log(year+=5)
year--
console.log(year)



let username="Janeeta";
console.log(username)
console.log(username[0])
console.log(username.length)
let num=" 1";
let concat=username+num
console.log(concat)

//string methods
//toUpperCase()
console.log(username.toUpperCase())
//trim()
let userInput="   Hello, my name is bob"
console.log(userInput)
console.log(userInput.trim())
//indexOf()
//gives FIRST matching index
console.log(userInput.indexOf('ob'))

//slice 
console.log(userInput.slice(10))

//replace()
//first matching instance replaced only
console.log(userInput.replace('bob','tom'))

//Template literals 
//must use backtick key 

console.log(`Hello ${1+2+9}`)

qty=3
price=3

console.log(`You bought ${qty} Avacados, for ${price} each. Total is $${qty*price}`)
 
//Math 
console.log(Math.PI)

//comparison operations 
console.log((1=='1')) //shows true because it does not care about type 
console.log((1==='1')) //cares about type


