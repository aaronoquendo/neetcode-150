class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let freq = {}; // frequency map
    for (let i = 0; i < nums.length; i++) freq[nums[i]] = (freq[nums[i]] || 0) + 1; // count occurrences
    let buckets = Array(nums.length + 1).fill(0).map(() => []); // bucket index = frequency
    for (let key in freq) buckets[freq[key]].push(Number(key)); // place numbers into buckets
    let result = []; // collect top k elements
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) { // iterate high freq to low
      for (let j = 0; j < buckets[i].length && result.length < k; j++) result.push(buckets[i][j]); // add until k reached
    }
    return result; // single return
  }
}