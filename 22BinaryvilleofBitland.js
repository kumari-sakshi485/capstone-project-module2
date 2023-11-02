function maxBitwise(nums) {
    if (nums.length < 2) {
      // At least two integers are required to form a pair.
      return null;
    }
  
    let maxBitwiseValue = Number.MIN_SAFE_INTEGER; // Initialize to the smallest possible value
  
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        const bitwiseAnd = nums[i] & nums[j]; // Perform bitwise AND operation
        maxBitwiseValue = Math.max(maxBitwiseValue, bitwiseAnd);
      }
    }
  
    return maxBitwiseValue;
  }
  
  // Example usage:
  const input1 = [2, 3, 4, 5, 6];
  const input2 = [10, 12, 6, 8];
  
  const bestCaseOutput1 = maxBitwise(input1);
  const worstCaseOutput1 = maxBitwise(input1);
  
  const bestCaseOutput2 = maxBitwise(input2);
  const worstCaseOutput2 = maxBitwise(input2);
  
  console.log("Best-case scenario output 1:", bestCaseOutput1);
  console.log("Worst-case scenario output 1:", worstCaseOutput1);
  console.log("Best-case scenario output 2:", bestCaseOutput2);
  console.log("Worst-case scenario output 2:", worstCaseOutput2);
  //Here's how the best and worst-case scenarios are demonstrated:

//Best Case Scenario: In the best-case scenario, the array contains numbers that result in a high bitwise AND value when combined. The function successfully finds the pair with the maximum bitwise AND value. For example, in the second input, the pair (12, 8) results in a bitwise AND value of 8.

//Worst Case Scenario: In the worst-case scenario, the array contains numbers that do not produce a high bitwise AND value when combined. The function still operates as expected but returns the maximum value possible, which is Number.MIN_SAFE_INTEGER as initialized in the code.