# Container With Most Water

**Difficulty:** Medium  
**Pattern:** Two pointers

## Problem

Given an integer array `heights`, each `heights[i]` represents the height of a vertical bar at index `i`.

Choose two bars to form the sides of a container. Return the maximum amount of water that any such container can hold.

The water level is limited by the shorter of the two bars. The width is the distance between their indices. Bars between the two selected bars do not reduce the container's capacity.

```text
area = shorter height × distance between indices
     = Math.min(heights[left], heights[right]) × (right - left)
```

## Example

```text
Input: heights = [1, 7, 2, 5, 4, 7, 3, 6]
Output: 36
```

Choose the bars at indices `1` and `7`:

- Heights: `7` and `6`.
- Water height: `6`, the shorter bar.
- Width: `7 - 1 = 6`.
- Area: `6 × 6 = 36`.

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
```

## Why Move the Shorter Bar

The shorter bar limits the water height. If you keep that bar and move the taller side inward, the width decreases and the water height cannot increase beyond the shorter bar. That cannot improve the current area.

Moving the shorter side gives you a chance to find a taller bar that compensates for the reduced width. If both heights are equal, moving either pointer is valid; this solution moves `right`.

## Step-by-Step Walkthrough

For `heights = [1, 7, 2, 5, 4, 7, 3, 6]`:

| Left index | Right index | Left height | Right height | Width | Area | Largest | Next move |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 7 | 1 | 6 | 7 | 7 | 7 | `left++` |
| 1 | 7 | 7 | 6 | 6 | 36 | 36 | `right--` |
| 1 | 6 | 7 | 3 | 5 | 15 | 36 | `right--` |
| 1 | 5 | 7 | 7 | 4 | 28 | 36 | `right--` |
| 1 | 4 | 7 | 4 | 3 | 12 | 36 | `right--` |
| 1 | 3 | 7 | 5 | 2 | 10 | 36 | `right--` |
| 1 | 2 | 7 | 2 | 1 | 2 | 36 | `right--` |

The pointers meet at index `1`, so the loop ends and returns `36`.

## Complexity

- **Time: O(n)** — each iteration moves one pointer inward, giving at most `n - 1` iterations.
- **Extra space: O(1)** — only a fixed number of variables are used.

## Key Reminders

- Use `right - left` for width, not `right - left + 1`: you are measuring distance between bars, not counting array elements.
- Use the shorter bar's height, not the taller bar's height.
- Move the shorter side after checking the current area.
- Do not sort the array: the original positions determine the width.
