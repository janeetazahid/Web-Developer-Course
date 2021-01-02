const nums=[9,10,8,12,13]

//filter the array to only include the odd numbers 
const odds=nums.filter(n=>{
    return n%2===1;
})

console.log(odds)