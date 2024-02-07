 // const array = [2, 6, [2,6,[4,7]]]
 // const flat = array.flat(2)
 // console.log(flat)

 const array = [2, 6, [2,6,[4,7]]]
 
 const flatArray = (array) => {
 return array.reduce((acc, current) => {
 
 if(Array.isArray(current)){
 return acc.concat(flatArray(current))
 
 }
 else {
 return acc.concat(current)
 }
 
 
 }
 
 ,[])
 }

 console.log(flatArray(array))   

