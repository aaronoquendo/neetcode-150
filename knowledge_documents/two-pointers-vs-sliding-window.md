# Two Pointers vs Sliding Window

Although both techniques often use two indices (`left` and `right`), they solve different kinds of problems.

## Two Pointers

**Purpose:** Compare or process elements from different positions in an array.

Think: **How do two positions relate to each other?**

Common problems:
- Two Sum II
- 3Sum
- Container With Most Water
- Valid Palindrome
- Move Zeroes
- Remove Duplicates from Sorted Array

Example:
```js
let left = 0;
let right = nums.length - 1;

while (left < right) {
  const sum = nums[left] + nums[right];

  if (sum === target) return [left, right];
  if (sum < target) left++;
  else right--;
}
```

Characteristics:
- Pointers often start at opposite ends.
- They move independently.
- Focuses on comparing two positions.

---

## Sliding Window

**Purpose:** Maintain a contiguous range (window) while expanding and shrinking it.

Think: **What is true about this entire range?**

Common problems:
- Longest Substring Without Repeating Characters
- Longest Repeating Character Replacement
- Minimum Window Substring
- Permutation in String
- Maximum Average Subarray
- Fruits Into Baskets

Example:
```js
let left = 0;

for (let right = 0; right < nums.length; right++) {
  // Expand window

  while (windowIsInvalid) {
    // Shrink window
    left++;
  }

  // Update answer
}
```

Characteristics:
- `right` expands the window.
- `left` shrinks the window when necessary.
- Represents a continuous subarray or substring.

---

## Quick Rule

Ask yourself:

- Interested in **two positions or elements**? → **Two Pointers**
- Interested in a **continuous range**? → **Sliding Window**

---

## Key Insight

Sliding Window is a specialized form of the Two Pointers technique. Both use `left` and `right`, but in Sliding Window the pointers define a moving contiguous range instead of comparing two independent positions.
