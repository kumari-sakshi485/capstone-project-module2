function asteroidCollision(asteroids) {
    const result = [];
    const stack = [];
  
    for (const asteroid of asteroids) {
      if (asteroid > 0) {
        stack.push(asteroid);
      } else {
        while (stack.length > 0 && stack[stack.length - 1] > 0) {
          const top = stack.pop();
          const collisionResult = top + asteroid;
          if (collisionResult > 0) {
            stack.push(top);
            break; // Smaller asteroid survives
          } else if (collisionResult === 0) {
            // Both asteroids annihilate each other
            break;
          }
        }
        if (stack.length === 0 || stack[stack.length - 1] < 0) {
          stack.push(asteroid);
        }
      }
    }
  
    return stack;
  }
  
  // Example usage:
  const input1 = [5, 4, -3, 2, -1];
  const input2 = [-10, 3, 8, -9, 4];
  
  const bestCaseOutput1 = asteroidCollision(input1);
  const worstCaseOutput1 = asteroidCollision(input1);
  
  const bestCaseOutput2 = asteroidCollision(input2);
  const worstCaseOutput2 = asteroidCollision(input2);
  
  console.log("Best-case scenario output 1:", bestCaseOutput1);
  console.log("Worst-case scenario output 1:", worstCaseOutput1);
  console.log("Best-case scenario output 2:", bestCaseOutput2);
  console.log("Worst-case scenario output 2:", worstCaseOutput2);
  
  //Best Case Scenario: In the best-case scenario, the input array contains a mix of positive and negative asteroids that lead to interesting interactions. The function successfully simulates the interactions and returns the state of the remaining asteroids after all collisions.

//Worst Case Scenario: In the worst-case scenario, the input array may not contain any collisions, or the collisions may result in the destruction of all asteroids. The function still operates as expected, handling the cases where no collisions or annihilation occurs.