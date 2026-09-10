class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    let n = nums.length, result = Array(n).fill(1); // output array initialized to 1
    let prefix = 1; // running product from left
    for (let i = 0; i < n; i++) { result[i] = prefix; prefix *= nums[i]; } // store left product
    let suffix = 1; // running product from right
    for (let i = n - 1; i >= 0; i--) { result[i] *= suffix; suffix *= nums[i]; } // multiply right product
    return result; // single return
  }
}