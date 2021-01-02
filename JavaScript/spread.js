const nums=[2,3,2,8]

//spreads array into seprate arguments 
console.log(Math.max(...nums))


const cats=['Blue','Scout','Rocket']
const dogs=['Rusty','Wyatt']


const allPets=[...cats, ...dogs]
console.log(allPets)


const feline={
    legs:4,
    family:'Felidae'
};
const canine={
    family:'Canine',
    furry:true
};

const dog={...canine,isPet:true};
console.log(dog);
const lion={...feline,genus:'Panthera'};
console.log(lion)

const catDog={...feline,...canine};
console.log(catDog)