function shortDistance(wordDict, word1, word2) {
  let minDistance = Infinity;
  let pos1 = -1;
  let pos2 = -1;

  for (let i = 0; i < wordDict.length; i++) {
    if (wordDict[i] === word1) {
      pos1 = i;
    } else if (wordDict[i] === word2) {
      pos2 = i;
    }

    if (pos1 !== -1 && pos2 !== -1) {
      minDistance = Math.min(minDistance, Math.abs(pos1 - pos2));
    }
  }

  return minDistance;
}

const wordDict = ["practice", "make", "perfect", "coding", "makes", "coding", "coding"];
console.log(shortDistance(wordDict, "coding", "makes")); 
const wordDict2 = ["apple", "banana", "cherry", "apple", "dates", "banana", "flag", "apple", "flag"];
console.log(shortDistance(wordDict2, "apple", "flag"));