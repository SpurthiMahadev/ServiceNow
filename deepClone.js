// Method 1:

function deepClone(obj) {
  // Check if the input is an object
  if (typeof obj !== 'object' || obj === null) {
    return obj; // Return primitive values and null directly
  }

  // Create a new object or array based on the type of the input
  const clonedObject = Array.isArray(obj) ? [] : {};

  // Iterate through each property in the input object
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Recursively deep clone each property
      clonedObject[key] = deepClone(obj[key]);
    }
  }

  return clonedObject;
}

// Example usage
const originalObject = {
  name: 'John',
  age: 25,
  address: {
    city: 'New York',
    country: 'USA'
  },
  hobbies: ['reading', 'traveling']
};

const clonedObject = deepClone(originalObject);

console.log("Original Object:", originalObject);
console.log("Cloned Object:", clonedObject);

// Method 2:

/** Start deep clone using Stringify */
var obj = {
  a: 1,
 b: {
   c: 2,
 },
 };
var newObj = JSON.parse(JSON.stringify(obj));
obj.b.c = 20;

console.log(obj); // { a: 1, b: { c: 20 } }
console.log(newObj); // { a: 1, b: { c: 2 } }
