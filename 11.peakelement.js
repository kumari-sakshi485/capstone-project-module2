//logic building coding question1
function findPeakElement(nums) {
    function binarySearch(nums, left, right) {
        if (left === right) {
            return left;
        }
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            return binarySearch(nums, left, mid);
        } else {
            return binarySearch(nums, mid + 1, right);
        }
    }

    return binarySearch(nums, 0, nums.length - 1);
}
