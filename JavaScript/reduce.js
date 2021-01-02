const nums=[3,5,7,9,11,2]


//first parameter is the total 
//whatever is returned is used for the next iterations accumulator
total=nums.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
});

console.log(total)


minVal=nums.reduce((min,currentNum)=>{
    if(currentNum<min)
    {
        return currentNum;
    }
    return min;
})

console.log(minVal)