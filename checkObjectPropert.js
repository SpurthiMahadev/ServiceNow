const myObject = {
  prop1: 'value1',
  prop2: 'value2'
};

const checkProperty = (property) => {
if(myObject.hasOwnProperty(property)){
return true
} return false
}
//Method 2:
// const checkProperty = property => {
// if(property in myObject) {return true}
// return false
// }

//Method 3:

// checkProperty = property => {
// const keys = Object.keys(myObject)
// if(keys.includes(property)){
// return true
// } return false
// }

console.log(checkProperty('prop1')) //true
console.log(checkProperty('age')) // false
