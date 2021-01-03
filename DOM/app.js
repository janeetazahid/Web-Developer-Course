const allImages=document.getElementsByTagName('img');


//selecting all images (by tag name) and changing them
for (let img of allImages)
{
    img.src='https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
}


document.querySelector('#banner') //will find first of this type