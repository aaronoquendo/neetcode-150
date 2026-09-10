class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let largest = 0;

        while (left < right) {
            // Water can only reach the shorter bar's height.
            let height = Math.min(heights[left], heights[right]);

            // Width is the distance between the bars.
            let width = right - left;
            let area = height * width;

            // Keep the largest area found so far.
            if (area > largest) {
                largest = area;
            }

            // Move the shorter side to look for a taller bar.
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return largest;
    }
}