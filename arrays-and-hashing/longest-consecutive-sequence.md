# Longest Consecutive Sequence

## Problem

Given an array of integers, return the length of its longest consecutive sequence.

The numbers do not need to appear consecutively in the original array. The solution must run in `O(n)` time.

## JavaScript solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numbers = new Set(nums);
    let longest = 0;

    for (const number of numbers) {
        // Only begin counting if this is the start of a sequence.
        if (!numbers.has(number - 1)) {
            let currentNumber = number;
            let currentLength = 1;

            while (numbers.has(currentNumber + 1)) {
                currentNumber++;
                currentLength++;
            }

            longest = Math.max(longest, currentLength);
        }
    }

    return longest;
};
```

## Step-by-step explanation

Consider:

```javascript
nums = [2, 20, 4, 10, 3, 4, 5];
```

The longest sequence is:

```text
2 → 3 → 4 → 5
```

Its length is `4`.

### 1. Put the numbers into a Set

```javascript
const numbers = new Set(nums);
```

The set contains:

```text
{2, 20, 4, 10, 3, 5}
```

A `Set` removes duplicates and lets us quickly check whether a number exists.

```javascript
numbers.has(3);  // true
numbers.has(12); // false
```

### 2. Look at every number

```javascript
for (const number of numbers)
```

For each number, determine whether it starts a sequence.

### 3. Check the number before it

```javascript
if (!numbers.has(number - 1))
```

A number starts a sequence only if the number immediately before it does not exist.

For `2`:

```text
Does 1 exist? No.
```

Therefore, `2` starts a sequence.

For `3`:

```text
Does 2 exist? Yes.
```

Therefore, `3` does not start a new sequence. It belongs to the sequence starting at `2`.

### 4. Count forward

Starting from `2`:

```text
Does 3 exist? Yes → length = 2
Does 4 exist? Yes → length = 3
Does 5 exist? Yes → length = 4
Does 6 exist? No  → stop
```

The sequence is `[2, 3, 4, 5]`.

### 5. Save the longest length

```javascript
longest = Math.max(longest, currentLength);
```

This compares the sequence just counted with the longest sequence found so far.

## Main idea

Only count forward from the beginning of a sequence:

```text
2 → Count because 1 is missing
3 → Skip because 2 exists
4 → Skip because 3 exists
5 → Skip because 4 exists
```

This prevents the same sequence from being counted repeatedly.

## Complexity

- Time: `O(n)`
- Space: `O(n)`
