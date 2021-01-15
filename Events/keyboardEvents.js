

document.querySelector('button').addEventListener('click',function(){
    alert("CLICKED")
})


const input=document.querySelector('input')


input.addEventListener('keydown',function(e){
    //prints key 
    console.log(e.key)
    //prints key code
    console.log(e.code)
})

//listner for whole window
window.addEventListener('keydown',function(e){
    //changing output based on input key
    switch(e.code){
        case 'ArrowUp':
            console.log("UP")
    }
})