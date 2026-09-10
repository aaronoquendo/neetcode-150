# Container With Most Water

## Problem

You are given an array where each number represents the height of a vertical bar.

Choose two bars that can hold the most water and return the maximum area.

## Approach: Two Pointers

Start with one pointer at the beginning of the array and one pointer at the end.

For every pair of bars:

1. Calculate the width between the bars.
2. Use the shorter bar as the container height.
3. Calculate the current water area.
4. Save the largest area found.
5. Move the pointer pointing to the shorter bar inward.

We move the shorter bar because the shorter bar limits how high the water can rise. Moving the taller bar would only make the container narrower without improving its limiting height.

## Formula

```text
area = width × shorter height
```

In JavaScript:

```javascript
const width = right - left;
const containerHeight = Math.min(heights[left], heights[right]);
const currentWater = width * containerHeight;
```

## Example

```text
Input: [1, 7, 2, 5, 4, 7, 3, 6]
```

Start with the first and last bars:

```text
Heights: 1 and 6
Width: 7
Area: 7 × 1 = 7
```

The left bar is shorter, so move the left pointer inward.

Now the bars have heights `7` and `6`:

```text
Width: 6
Area: 6 × 6 = 36
```

The largest area is `36`.

## JavaScript Solution

```javascript
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
```

## Complexity

- Time: `O(n)` because each pointer moves through the array once.
- Space: `O(1)` because only a few variables are used.

## Pattern to Remember

Start at both ends, calculate the area, and move the shorter bar.
