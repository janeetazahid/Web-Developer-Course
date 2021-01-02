 function sumAll(...nums){
     return nums.reduce((total,el)=>total+el);
 }


 console.log(sumAll(1,2,3))


 function raceResults(gold,silver,...everyoneElse)
 {
     console.log(`Gold Medal goes to: ${gold}`)
     console.log(`Silver Medal goes to: ${silver}`)
     console.log(`and thanks to everyone else: ${everyoneElse}`)
 }

 raceResults('Tina','Tod','Bob','Tom','Stacey','Bobby')