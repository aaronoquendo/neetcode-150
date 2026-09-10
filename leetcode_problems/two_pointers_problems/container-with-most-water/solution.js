class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxWater = 0;

    while (left < right) {
      const width = right - left;
      const containerHeight = Math.min(heights[left], heights[right]);
      const currentWater = width * containerHeight;

      maxWater = Math.max(maxWater, currentWater);

      if (heights[left] < heights[right]) {
        left++;
      } else {
        right--;
      }
    }

    return maxWater;
  }
}
