// code with bug fixed

var findErrorNums = function(nums) {
    const hashmap = new Map();
    const output = [];
    let maxValue = 0;

    for (let i = 0; i < nums.length; i++) { // Change <= to < to avoid going out of bounds
        const num = nums[i];
        if (hashmap.has(num)) {
            output.push(num);
        }
        hashmap.set(num, i);
        maxValue = Math.max(maxValue, num);
    }

    for (let i = 1; i <= maxValue; i++) { // Change maxValue + 1 to maxValue
        if (!hashmap.has(i)) {
            output.push(i);
            break;
        }
    } 

    return output;
};
