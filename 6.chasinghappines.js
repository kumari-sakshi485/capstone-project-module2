//rewrite code using set object


function isHappy(n) {
    // Helper function to calculate the sum of squares of digits
    function calculateSumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    let seen = new Set();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = calculateSumOfSquares(n);
    }

    return n === 1;
}
