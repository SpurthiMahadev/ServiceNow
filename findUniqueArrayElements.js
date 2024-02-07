const array = ['2', '4', '5', '2', '5', '5', '5', '1', '4']

const uniqArray = array.reduce((acc, cur) => acc.includes(cur) ? acc : [...acc, cur]
// const uniqArray = array.reduce((acc, cur) => acc.includes(cur) ? acc : acc.concat(cur)

, [])

console.log(uniqArray)
