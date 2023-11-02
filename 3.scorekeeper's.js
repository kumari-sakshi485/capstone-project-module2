//code with solution
var callPoints = function(operations) {
    const stack = [];

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "+") {
            if (stack.length >= 2) {
                const sum = stack[stack.length - 2] + stack[stack.length - 1];
                stack.push(sum);
            }
        } else if (operations[i] === "D") {
            if (stack.length >= 1) {
                const newD = stack[stack.length - 1] * 2;
                stack.push(newD);
            }
        } else if (operations[i] === "C") {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            const integer = parseInt(operations[i]);
            stack.push(integer);
        }
    }

    // Calculate the totalSum
    let totalSum = 0;
    for (let num of stack) {
        totalSum += num;
    }

    return totalSum;
};
