//rewrite the code using binary search algorithm

var searchRange = function(nums, target) {
    function findLeftIndex(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let leftIndex = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                leftIndex = mid;
                right = mid - 1; // Continue searching on the left side
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return leftIndex;
    }

    function findRightIndex(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let rightIndex = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                rightIndex = mid;
                left = mid + 1; // Continue searching on the right side
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return rightIndex;
    }

    const leftIndex = findLeftIndex(nums, target);
    
    if (leftIndex === -1) {
        return [-1, -1];
    }

    const rightIndex = findRightIndex(nums, target);

    return [leftIndex, rightIndex];
};
