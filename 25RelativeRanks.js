function findRelativeRanks(score) {
    const sortedScore = [...score].sort((a, b) => b - a);
    const rankMap = {};
  
    for (let i = 0; i < sortedScore.length; i++) {
      if (i === 0) {
        rankMap[sortedScore[i]] = "Gold Medal";
      } else if (i === 1) {
        rankMap[sortedScore[i]] = "Silver Medal";
      } else if (i === 2) {
        rankMap[sortedScore[i]] = "Bronze Medal";
      } else {
        rankMap[sortedScore[i]] = (i + 1).toString();
      }
    }
  
    return score.map((s) => rankMap[s]);
  }
  
  // Example usage:
  const input = [5, 4, 3, 2, 1];
  const output = findRelativeRanks(input);
  console.log(output); // Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
  

  //Best Case Scenario: In the best-case scenario, the input array is well-structured, and the function successfully assigns ranks to each athlete according to their scores. The output accurately represents the ranks.

//Worst Case Scenario: In the worst-case scenario, the input array may have a different structure or distribution of scores, but the function still operates as expected, assigning ranks based on the input.