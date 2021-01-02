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
});

console.log(minVal)


const movies=[
    {
        title:'Amadues',
        score:72,
        year:1984
    },
    {
        title:'Stand by Me',
        score:85,
        year:2013
    },
    {
        title:'Parasite',
        score:80,
        year:2004
    },
    {
        title:'Alien',
        score:70,
        year:1986
    }
]

highestRated=movies.reduce((movie,currentMovie)=>{
    if(currentMovie.score>movie.score)
        {  
            return currentMovie;
        }
    return movie
})

console.log(highestRated)