function firstUniqChar(s) {
  const charCount = {};

  // Count the frequency of each character
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the index of the first non-repeating character
  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]] === 1) {
      return i;
    }
  }

  // If no unique character is found, return -1
  return -1;
}

// Test cases
console.log(firstUniqChar("leetcode"));      // Output: 0
console.log(firstUniqChar("loveleetcode"));   // Output: 2
console.log(firstUniqChar("aabb"));           // Output: -1
