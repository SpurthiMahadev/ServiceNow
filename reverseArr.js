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
