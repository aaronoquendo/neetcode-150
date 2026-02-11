// Problem: Contains Duplicate
// Link: https://neetcode.io/problems/duplicate-integer/question?list=neetcode150
// Pattern: Hash Map / Set
// Time: O(n)
// Space: O(n)

class Solution {
  hasDuplicate(nums) {
    let seen = {};
    let hasDup = false;
    for (let i = 0; i < nums.length; i++) {
      if (seen[nums[i]]) { hasDup = true; break; }
      seen[nums[i]] = true;
    }
    return hasDup;
  }
}