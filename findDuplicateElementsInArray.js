function findDuplicates(array) {
  const duplicates = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j] && !duplicates.includes(array[i])) {
        duplicates.push(array[i]);
      }
    }
  }
  return duplicates;
}

const array = [1, 2, 3, 4, 2, 3, 5, 6, 7, 7, 8, 9, 9];
const duplicateElements = findDuplicates(array);
console.log(duplicateElements); // Output: [2, 3, 7, 9]

// Method 2
// function findDuplicates(array) {
//   return array.reduce((acc, cur, index) => {  // also we can use self argument here  -  return array.reduce((acc, cur, index, self) => { 
//   if(array.indexOf(cur) !==  index){ // if(self.indexOf(cur) !==  index){
//    return acc.concat(cur)
//   } return acc
  
//   }, [])
// }

// const array = [1, 2, 3, 4, 2, 3, 5, 6, 7, 7, 7, 8, 9, 9];
// const duplicateElements = findDuplicates(array);
// console.log(duplicateElements); // Output: [2, 3, 7, 9]


//Method 3

 // function findDuplicates(array) {
 // const dup = []
 //  return array.filter((ele, index) => {
 //  return array.indexOf(ele) !== index 
 //  })
 // }

 // const array = [1, 2, 3, 4, 2, 3, 5, 6, 7, 7, 7, 8, 9, 9];
 // const duplicateElements = findDuplicates(array);
 // console.log(duplicateElements); // Output: [2, 3, 7, 9]



//Method3


 // const array = [1, 2, 3, 4, 2, 3, 5, 6, 7, 7, 7, 8, 9, 9];
 // const duplicateElements = array.filter((ele, index) => {
 //  return array.indexOf(ele) !== index })
 // console.log(duplicateElements); // Output: [2, 3, 7, 9]
