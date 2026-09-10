# Longest Repeating Character Replacement

## Problem

You are given a string `s` containing only uppercase English letters and an integer `k`.

You may replace up to `k` characters with any other uppercase letter. Return the length of the longest substring that can be changed so every character is the same.

### Example 1

```text
Input:  s = "XXXX", k = 2
Output: 4
```

The substring already contains one distinct character, so no replacements are needed.

### Example 2

```text
Input:  s = "AAABABB", k = 1
Output: 5
```

The substring `"AABAB"` can become `"AAAAA"` by replacing one `B`.

## Pattern

**Sliding window with a frequency map**

## Main Idea

For every window, choose the character that appears most often. Every other character must be replaced.

```text
replacements needed = window length - most frequent character count
```

A window is valid when:

```text
window length - max frequency <= k
```

## Step-by-Step Approach

1. Start with `left = 0` and expand the window using `right`.
2. Count each character in a `Map`.
3. Track `maxFrequency`, the largest count of one character in the window.
4. If the window needs more than `k` replacements, move `left` forward until it becomes valid.
5. Record the largest valid window length.

### Example

For the window `"AABAB"`:

```text
Window length = 5
Most frequent character = A
Frequency of A = 4
Replacements needed = 5 - 4 = 1
```

Because `1 <= k`, the window is valid.

## JavaScript Solution

```javascript
class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let longest = 0;
        let maxFrequency = 0;
        let counts = new Map();

        for (let right = 0; right < s.length; right++) {
            let character = s[right];

            // Add the new character to the current window.
            counts.set(character, (counts.get(character) || 0) + 1);

            // Track the highest frequency in the window.
            if (counts.get(character) > maxFrequency) {
                maxFrequency = counts.get(character);
            }

            // Shrink the window if too many replacements are needed.
            while (right - left + 1 - maxFrequency > k) {
                let leftCharacter = s[left];

                counts.set(
                    leftCharacter,
                    counts.get(leftCharacter) - 1
                );

                left++;
            }

            let windowLength = right - left + 1;

            if (windowLength > longest) {
                longest = windowLength;
            }
        }

        return longest;
    }
}
```

## Why the Formula Works

Suppose a window has length `7`, and its most common character appears `5` times. Keep those five characters and replace the remaining two:

```text
7 - 5 = 2 replacements
```

If `k = 2`, the window is valid. If `k = 1`, the window is too large and must shrink.

## Complexity

- **Time:** `O(n)` because each character enters and leaves the window at most once.
- **Space:** `O(1)` because the Map contains at most 26 uppercase letters.
