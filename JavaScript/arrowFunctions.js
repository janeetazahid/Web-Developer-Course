const nums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]


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

//with single argument paranthesis is not needed 
const addArr=arr=>{
    let i=0;
    let sum=0;
    for (i;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum;
}

console.log(addArr(nums))


//implicit return 

const rollDie=()=>Math.floor(Math.random()*6)+1


console.log(rollDie())