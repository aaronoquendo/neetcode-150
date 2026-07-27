/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const targetIndex = nums.length - k;

    let left = 0;
    let right = nums.length - 1;
    let found = false;

    while (left <= right && !found) {
        const randomIndex =
            left + Math.floor(Math.random() * (right - left + 1));

        [nums[randomIndex], nums[right]] =
            [nums[right], nums[randomIndex]];

        const pivot = nums[right];
        let pivotIndex = left;

        // Move every value smaller than or equal to the pivot
        // to the left side.
        for (let i = left; i < right; i++) {
            if (nums[i] <= pivot) {
                [nums[i], nums[pivotIndex]] =
                    [nums[pivotIndex], nums[i]];

                pivotIndex++;
            }
        }

        // Place the pivot in its correct position.
        [nums[pivotIndex], nums[right]] =
            [nums[right], nums[pivotIndex]];

        if (pivotIndex === targetIndex) {
            found = true;
        } else if (pivotIndex < targetIndex) {
            left = pivotIndex + 1;
        } else {
            right = pivotIndex - 1;
        }
    }

    return nums[targetIndex];
};
