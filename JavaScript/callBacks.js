const nums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]


function print(element)
    {
        console.log(element);
    }


nums.forEach(function(el){
    if (el%2===0){
        console.log(el);
    }
    
}) 


const movies=[
    {
        title:'Amadues',
        score:99
    },
    {
        title:'Stand by Me',
        score:85
    },
    {
        title:'Parasite',
        score:95
    },
    {
        title:'Alien',
        score:90
    }
]


movies.forEach(function(movie){
        console.log(`${movie.title} - ${movie.score}/100`)
}

)


//maps method 

const doubles=nums.map(function(num){
    return num*2;
})

console.log(doubles)


const movieTitles=movies.map(function(movie){
    return movie.title;
})

console.log(movieTitles)