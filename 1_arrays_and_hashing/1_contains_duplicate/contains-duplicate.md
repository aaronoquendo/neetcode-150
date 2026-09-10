# Contains Duplicate

## Problem

Given an integer array `nums`, return `true` if any value appears more than once in the array. Otherwise, return `false`.

## Example 1

```javascript
// Input:
// nums = [1, 2, 3, 3]

// Output:
// true

// Explanation:
// The number 3 appears more than once.
```

## Example 2

```javascript
// Input:
// nums = [1, 2, 3, 4]

// Output:
// false

// Explanation:
// Every number appears only once.
```

## JavaScript Solution

```javascript
var containsDuplicate = function(nums) {
    // Create a Set to store numbers we have already seen.
    let seen = new Set();

    // Loop through every number in the array.
    for (let i = 0; i < nums.length; i++) {

        // If the number is already in the Set,
        // then we found a duplicate.
        if (seen.has(nums[i])) {
            return true;
        }

        // Add the current number to the Set.
        seen.add(nums[i]);
    }

    // No duplicate numbers were found.
    return false;
};

// Example 1:
// containsDuplicate([1, 2, 3, 3]);
// Output: true

// Example 2:
// containsDuplicate([1, 2, 3, 4]);
// Output: false
```

## Complexity

```javascript
// Time Complexity: O(n)
// Space Complexity: O(n)
```
