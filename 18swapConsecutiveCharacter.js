function swapConsecutiveCharacter(input) {
    let swappedString = "";
    
    for (let i = 0; i < input.length - 1; i += 2) {
      swappedString += input[i + 1] + input[i];
    }
    
    if (input.length % 2 !== 0) {
      swappedString += input[input.length - 1];
    }
    
    return swappedString;
  }
  
  const input1 = "abcdef";
  console.log(swapConsecutiveCharacter(input1)); // Output: "badcfe"
  
  const input2 = "elma better";
  console.log(swapConsecutiveCharacter(input2)); // Output: "leam bttee