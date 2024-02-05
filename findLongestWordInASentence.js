function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let longestWord = "";

  words.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

const testSentence = "The quick brown fox jumps over the lazy dog";
const longestWord = findLongestWord(testSentence);
console.log("Longest Word:", longestWord);
