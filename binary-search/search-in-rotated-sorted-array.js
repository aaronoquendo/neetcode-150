/**
 * Search in Rotated Sorted Array
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right && result === -1) {
        const middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) {
            result = middle;
        } else if (nums[left] <= nums[middle]) {
            // The left half is sorted.
            if (nums[left] <= target && target < nums[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        } else {
            // The right half is sorted.
            if (nums[middle] < target && target <= nums[right]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
    }

    return result;
};
