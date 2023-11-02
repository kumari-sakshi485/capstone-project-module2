function flipAndInvertImage(image) {
    // Ensure the matrix is not empty.
    if (image.length === 0 || image[0].length === 0) {
      return [];
    }
  
    // Get the number of rows and columns in the matrix.
    const numRows = image.length;
    const numCols = image[0].length;
  
    // Flip and invert the image.
    for (let i = 0; i < numRows; i++) {
      let left = 0;
      let right = numCols - 1;
  
      while (left <= right) {
        // Flip and invert the elements using a two-pointer approach.
        const temp = image[i][left] ^ 1; // XOR 1 to invert the bit
        image[i][left] = image[i][right] ^ 1;
        image[i][right] = temp;
        left++;
        right--;
      }
    }
  
    return image;
  }
  
  // Example usage:
  const input1 = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];
  const input2 = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]];
  
  const bestCaseOutput1 = flipAndInvertImage(input1);
  const worstCaseOutput1 = flipAndInvertImage(input1);
  
  const bestCaseOutput2 = flipAndInvertImage(input2);
  const worstCaseOutput2 = flipAndInvertImage(input2);
  
  console.log("Best-case scenario output 1:", bestCaseOutput1);
  console.log("Worst-case scenario output 1:", worstCaseOutput1);
  console.log("Best-case scenario output 2:", bestCaseOutput2);
  console.log("Worst-case scenario output 2:", worstCaseOutput2);
  
  //Best Case Scenario: In the best-case scenario, the input matrix contains a pattern or design that, when flipped and inverted, results in an enhanced and visually appealing image. The function successfully performs the operations, and the output matrix reflects the desired transformation.

//Worst Case Scenario: In the worst-case scenario, the input matrix may not have a visually appealing pattern. However, the function still operates as expected, flipping and inverting the elements in each row according to the specified logic.