
let todoList=['wash car','laundary']//array for todo
userInput=prompt("What would you like to do?"); //get user input

while (userInput!=="quit")
    {
        
        
        if (userInput==="new")
            {
                todo=prompt("Enter new todo"); //get new todo to add 
                todoList.push(todo); //add to array
                console.log(`${todo} added to list`);

            }
        else if (userInput==="list")
        {
            console.log("********")
            for(i=0;i<todoList.length;i++)
                {
                    console.log(i+": "+todoList[i]) //print list 
                }
                console.log("********")
        }
        else if (userInput==="delete")
        {
            let indexDel=parseInt(prompt("which list entry would you like to delete?"));
            if(!Number.isNaN(indexDel)) //make sure its a valid number
            {
                const del=todoList.splice(indexDel,1); //delete specified index
                console.log(`Deleted ${del}`);
            }
            else{
                console.log("Unknown Index"); //else its a unknown index
            }
            
        }
        userInput=prompt("What would you like to do?");
    }
console.log("You Quit")