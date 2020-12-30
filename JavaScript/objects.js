//JS objects 
//obejcts are a collection of properties, with key-value pairs 


const person={
                firstname: 'Mick',
                lastName: 'Jagger'
            }           

console.log(person)
//accessing values 
console.log(person["firstname"])
console.log(person.lastName)


const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

let fullAddress=restaurant['address'] + ' '+ restaurant['city'] + ' ' +restaurant['state']+ ' ' +restaurant['zipcode']


console.log(fullAddress)


const midterms={
                danielle: 96,
                thomas:78

                }
