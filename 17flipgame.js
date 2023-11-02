function findMoves(input) {
  const moves = [];
  const len = input.length;

  for (let i = 0; i < len - 1; i++) {
    if (input[i] === "+" && input[i + 1] === "+") {
      const newState = input.substring(0, i) + "--" + input.substring(i + 2);
      moves.push(newState);
    }
  }

  return moves;
}

const input1 = "++++"; 
console.log(findMoves(input1)); 

const input2 = "++-++"; 
console.log(findMoves(input2)); 

