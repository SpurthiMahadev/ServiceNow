const arr = ['1', '2','2', '3', '5','5' , '55', '3','3','9','7','44','55']


const result = [...new Set(arr)]

// const result = Array.from([...new Set(arr)])
// Array.from() creates new array from array like object or iterables.

console.log(result)
