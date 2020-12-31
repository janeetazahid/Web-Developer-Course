
let todoList=[]//array for todo
userInput=prompt("What would you like to do?");

while (userInput!=="quit")
    {
        
        userInput=prompt("What would you like to do?");
        if (userInput==="new")
            {
                todo=prompt("Enter new todo");
                todoList.unshift(todo); //add to array
                console.log(`${todo} added to list`);

            }
        if (userInput==="list")
        {
            console.log("********")
            for(i=0;i<=todoList.length;i++)
                {
                    console.log(i+" : "+todoList[i])
                }
                console.log("********")
        }
    }