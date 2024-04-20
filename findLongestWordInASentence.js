const findLongestWord = (testSentence) => {
const words = testSentence.split(' ')
let longestWord = []
let maxLength = 0
words.forEach(item => {
let length = item.length
if( length > maxLength){
maxLength = length
longestWord = [item]
} else if (length === maxLength){
longestWord.push(item)
}
})
return longestWord
}



const testSentence = "The quick brown fox jumps over the lazy dog";
const longestWord = findLongestWord(testSentence);
console.log(longestWord);
