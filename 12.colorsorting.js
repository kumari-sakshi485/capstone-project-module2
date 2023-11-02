// logic building question 2

function sortColors(nums) {
    let low = 0;  // Index for the end of red (0) section
    let high = nums.length - 1;  // Index for the start of blue (2) section
    let i = 0;  // Current index

    while (i <= high) {
        if (nums[i] === 0) {
            // Swap the current element with the element at the 'low' index
            [nums[i], nums[low]] = [nums[low], nums[i]];
            low++;
            i++;
        } else if (nums[i] === 2) {
            // Swap the current element with the element at the 'high' index
            [nums[i], nums[high]] = [nums[high], nums[i]];
            high--;
        } else {
            // Element is 1, move to the next index
            i++;
        }
    }
}
