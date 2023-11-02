// logic building question 4
function minSumOfFourDigits(number) {
    const digits = number.toString().split('').map(Number);
    digits.sort((a, b) => a - b);
    let minSum = 0;

    for (let i = 0; i < 4; i++) {
        minSum += digits[i];
    }

    return minSum;
}

const number = 987251;
const minSum = minSumOfFourDigits(number);
console.log(`Minimum sum of four digits: ${minSum}`);
