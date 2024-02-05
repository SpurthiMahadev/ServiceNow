const myArr = [1, 2, [3, [4, 5, 6], 7], 8];

function flattenArr(arr) {
    const resultArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            resultArr.push(...flattenArr(arr[i]));
        } else {
            resultArr.push(arr[i]);
        }
    }
    
    return resultArr;
}

const flattenedArray = flattenArr(myArr);
console.log(flattenedArray); // Output the flattened array
