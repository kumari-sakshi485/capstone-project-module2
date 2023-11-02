//logic building question 3
function maxPositiveNegativeCount(arr) {
    let maxPositive = 0;
    let maxNegative = 0;
    let currentPositive = 0;
    let currentNegative = 0;

    for (let num of arr) {
        if (num > 0) {
            currentPositive++;
            currentNegative = 0; // Reset negative count
        } else if (num < 0) {
            currentNegative++;
            currentPositive = 0; // Reset positive count
        } else {
            currentPositive = 0; // Reset counts for zeros
            currentNegative = 0;
        }

        maxPositive = Math.max(maxPositive, currentPositive);
        maxNegative = Math.max(maxNegative, currentNegative);
    }

    return { maxPositive, maxNegative };
}

const arr = [1, 2, -3, -4, 5, 6, 7, -8, 9];
const { maxPositive, maxNegative } = maxPositiveNegativeCount(arr);
console.log(`Maximum count of consecutive positive integers: ${maxPositive}`);
console.log(`Maximum count of consecutive negative integers: ${maxNegative}`);
