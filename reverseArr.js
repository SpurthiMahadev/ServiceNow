// Method 1:

var input = [1,2,3,4,5];

function reverseArray(arr) {
    const length = arr.length;
    for(let i=0; i< Math.floor(length/2); i++ ){
        let temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp
    }
    return arr;
}

const output = reverseArray(input);
console.log(output);



// Method 2 

function reverseArray(arr) {
  return arr.reverse();
}

const originalArray = [1, 2, 3, 4, 5];

console.log("Original Array:", originalArray);

const reversedArray = reverseArray(originalArray);

console.log("Reversed Array:", reversedArray);


// Method 3

function reverseArray(arr) {
  const reversedArray = [];

  // Use a for loop to iterate over the original array in reverse order
  for (let i = arr.length - 1; i >= 0; i--) {
    // Append each element to the reversedArray
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}

const originalArray = [1, 2, 3, 4, 5];

console.log("Original Array:", originalArray);

const reversedArray = reverseArray(originalArray);

console.log("Reversed Array:", reversedArray);
