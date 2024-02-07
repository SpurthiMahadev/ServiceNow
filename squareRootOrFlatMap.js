const array = [16, 9, 4, -1, 0, 25];

const roots = array.flatMap((val) => {
  if (val < 0) return []; // If negative, return an empty array (no result)
  const root = Math.sqrt(val); // Calculate square root
  if (Number.isInteger(root)) return [root, root]; // If square root is integer, return it twice
  return [val]; // Otherwise, return the original number
});

console.log(roots); // Output: [4, 4, 3, 3, 2, 2, 0, 5, 5]
