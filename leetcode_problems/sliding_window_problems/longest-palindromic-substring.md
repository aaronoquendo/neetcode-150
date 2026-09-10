# 5. Longest Palindromic Substring

**Difficulty:** Medium  
**Pattern:** Expand around center (two pointers)

## Problem

Given a string `s`, return the longest substring of `s` that is a palindrome.

A **palindrome** reads the same forward and backward, such as `"bab"` or `"abba"`. A **substring** is a continuous section of the string; you cannot skip characters.

### Example 1

```text
Input: s = "babad"
Output: "bab"
```

`"aba"` is also a valid answer.

### Example 2

```text
Input: s = "cbbd"
Output: "bb"
```

### Constraints

- `1 <= s.length <= 1000`
- `s` contains only digits and English letters.

## JavaScript Solution

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        // Odd-length palindrome: both pointers start on one character.
        let left = i;
        let right = i;

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // Include both endpoints when calculating the length.
            if (right - left + 1 > longest.length) {
                // slice excludes its end index, so use right + 1.
                longest = s.slice(left, right + 1);
            }

            // Expand outward to check the next pair of characters.
            left--;
            right++;
        }

        // Even-length palindrome: start on two adjacent characters.
        left = i;
        right = i + 1;

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > longest.length) {
                longest = s.slice(left, right + 1);
            }

            left--;
            right++;
        }
    }

    return longest;
};
```

## Why Two While Loops?

| Type | Example | Center | Starting pointers |
| --- | --- | --- | --- |
| Odd length | `"aba"` (3 characters) | One character: `b` | `left = i`, `right = i` |
| Even length | `"abba"` (4 characters) | The gap between the two `b` characters | `left = i`, `right = i + 1` |

Expanding from one character checks lengths 1, 3, 5, and so on. Expanding from two adjacent characters checks lengths 2, 4, 6, and so on. We need both loops to find both kinds of palindrome.

## Walkthrough: `s = "cbbd"`

At `i = 1`, the even-length loop starts on the two `b` characters:

| Step | left | right | Comparison | Action |
| --- | --- | --- | --- | --- |
| 1 | 1 | 2 | `b === b` | Save `"bb"` as the longest palindrome. |
| 2 | 0 | 3 | `c !== d` | Stop expanding this center. |

The other centers produce no longer palindrome, so the function returns `"bb"`.

## Complexity

- **Time:** `O(n²)`. There are `n` positions, with up to `O(n)` expansion work per position. Copying a substring only when a new longest is found also totals at most `O(n²)` work.
- **Space:** `O(1)` for the pointers and other bookkeeping. Stored substring characters can take `O(n)` space; JavaScript's handling of substring storage depends on the engine.
