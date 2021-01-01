function singSong()
    {
        console.log("DO");
        console.log("RE");
        console.log("ME");
    }

singSong()

//multiplication function
function multiply(num1,num2)
{
    return num1*num2
}


// function that checks tempreture and determies wether the weather 
//good enough to wear shorts (less than 75F) or not 
function isShortsWeather(temp)
{
    if(temp>=75)
    {
        return true;
    }
    else 
    {
        return false;
    }
}


//function that returns last element in array
function lastElement(arr)
{
    if (arr.length==0)
    {
        return null;
    }
    return (arr[arr.length-1]);
}


// functio that takes in a string and returns same string with the 
// first letter captilized 
function capitalize(str)
{
    let str2='';
    let i=0;
    for (i;i<str.length;i++)
    {
        if (i===0)
        {
            str2+=str[i].toUpperCase();
        }
        else 
        {
            str2+=str[i];
        }
    }
    return str2;
}

//function that returns sum of elements in array
function sumArray(arr)
{
    let sum=0;
    let i=0;
    for (i;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum;
}


//takes in a number between 1-7 and returns a string of the day of 
// the week that corresponds to the number 
function returnDay(num)
{
    if (num<1 || num>7)
    {
        return null;
    }
    let arr_day=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    return arr_day[num-1];
}

//function expression
const add=function(x,y){
            return x+y;
        }
console.log(add(3,4))


//higher order functions 

function callTwice(func)
{
    func();
    func();
}

function rollDie()
{
    const roll=Math.floor(Math.random()*6)+1
    console.log(roll)
}
callTwice(rollDie)



