
const container=document.querySelector('#container');

//base address
let baseAddr='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
for(let i=1;i<151;i++)
{
    //create a new image 
    const newImg=document.createElement('img');
    //create source for image 
    newImg.src=`${baseAddr}${i}.png`
    //append image to container
    container.appendChild(newImg)
}