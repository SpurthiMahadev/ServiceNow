const arr = ['1', '2','2', '3', '5','5' , '55', '3','3','9','7','44','55']


const result = [...new Set(arr)]

// const result = Array.from([...new Set(arr)])
// Array.from() creates new array from array like object or iterables.

console.log(result)

// function removeDuplicates(array) {
//   const uniqueArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (uniqueArray.indexOf(array[i]) === -1) {
//       uniqueArray.push(array[i]);
//     }
//   }
//   return uniqueArray;
// }

// const array = [1, 2, 3, 4, 2, 3, 5, 6, 7, 7, 8, 9, 9];
// const uniqueArray = removeDuplicates(array);
// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

