// Method 1: 

function findDuplicates(arr) {
  const duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // Compare elements at indices i and j
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        // If they are equal and not already in duplicates array, add to duplicates
        duplicates.push(arr[i]);
      }
    }
  }

  return duplicates;
}

// Example usage
const arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9, 1];

const duplicateElements = findDuplicates(arrayWithDuplicates);

console.log("Array with Duplicates:", arrayWithDuplicates);
console.log("Duplicate Elements:", duplicateElements);

// Method 2: 

function findDuplicates(arr) {
  const uniqueElements = new Set();
  const duplicates = [];

  for (const element of arr) {
    if (uniqueElements.has(element)) {
      // If the element is already in the set, it's a duplicate
      duplicates.push(element);
    } else {
      // Otherwise, add it to the set
      uniqueElements.add(element);
    }
  }

  return duplicates;
}

// Example usage
const arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9, 1];

const duplicateElements = findDuplicates(arrayWithDuplicates);

console.log("Array with Duplicates:", arrayWithDuplicates);
console.log("Duplicate Elements:", duplicateElements);

