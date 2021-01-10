
const container=document.querySelector('#container');

//base address
let baseAddr='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
for(let i=1;i<151;i++)
{
    //create div
    const pokemon=document.createElement('div');
    pokemon.classList.add('pokemon')
    
    //create span
    const label=document.createElement('span');
    //add text to span
    label.innerText=`#${i}`
    //create a new image 
    const newImg=document.createElement('img');
    //create source for image 
    newImg.src=`${baseAddr}${i}.png`
    //add image to div
    pokemon.appendChild(newImg);
    //add label to div 
    pokemon.appendChild(label);
    //append image to div
    container.appendChild(pokemon);
}