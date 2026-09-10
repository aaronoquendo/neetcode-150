# Permutation in String

**Difficulty:** Medium  
**Pattern:** Sliding window / frequency counting

## Problem

You are given two strings, `s1` and `s2`.

Return `true` if `s2` contains a substring that is a permutation of `s1`. Otherwise, return `false`.

A permutation uses the same characters with the same frequencies, but the order may be different.

Both strings contain only lowercase English letters.

## Examples

```text
Input:  s1 = "abc", s2 = "lecabee"
Output: true
```

The substring `"cab"` is a permutation of `"abc"`.

```text
Input:  s1 = "abc", s2 = "lecaabee"
Output: false
```

No three-character substring contains exactly one `a`, one `b`, and one `c`.

## Key idea

Every possible answer must have exactly `s1.length` characters. Therefore, move a window of that fixed size across `s2` and compare letter counts.

For `s1 = "abc"`, the required counts are:

```text
{ a: 1, b: 1, c: 1 }
```

The order does not matter. `"abc"`, `"bca"`, and `"cab"` all have the same counts.

Because the strings contain lowercase letters only, use two arrays of length 26:

- `target` stores the counts required by `s1`.
- `window` stores the counts for the current section of `s2`.

## JavaScript solution

```javascript
class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let result = false;
        let left = 0;

        // Index 0 represents 'a', index 1 represents 'b', ..., index 25 represents 'z'.
        let target = new Array(26).fill(0);
        let window = new Array(26).fill(0);

        // Count every character required by s1.
        for (let i = 0; i < s1.length; i++) {
            let index = s1.charCodeAt(i) - 97;
            target[index]++;
        }

        // Expand the window one character at a time.
        for (let right = 0; right < s2.length; right++) {
            let incomingIndex = s2.charCodeAt(right) - 97;
            window[incomingIndex]++;

            // Remove the leftmost character if the window is too large.
            if (right - left + 1 > s1.length) {
                let outgoingIndex = s2.charCodeAt(left) - 97;
                window[outgoingIndex]--;
                left++;
            }

            // Only a window with s1.length characters can be a permutation.
            if (right - left + 1 === s1.length) {
                let matches = true;

                // Compare all 26 character counts.
                for (let i = 0; i < 26; i++) {
                    if (target[i] !== window[i]) {
                        matches = false;
                        break;
                    }
                }

                if (matches) {
                    result = true;
                    break;
                }
            }
        }

        return result;
    }
}
```

## Walkthrough

For `s1 = "abc"` and `s2 = "lecabee"`, the window length is `3`:

| Window | Result |
|---|---|
| `"lec"` | Not a match |
| `"eca"` | Not a match |
| `"cab"` | Match — return `true` |

When the window moves from `"lec"` to `"eca"`, the algorithm removes `l` and adds `a`. This keeps the window at exactly three characters without rebuilding substrings.

## Why this works

A substring is a permutation of `s1` exactly when:

1. It has the same length as `s1`.
2. Every character appears the same number of times in both strings.

The sliding window guarantees the first condition, and the two frequency arrays check the second condition.

## Complexity

- **Time:** `O(s1.length + s2.length)` because each character enters and leaves the window at most once. Comparing 26 letters is constant work.
- **Space:** `O(1)` because both frequency arrays always contain only 26 positions.
