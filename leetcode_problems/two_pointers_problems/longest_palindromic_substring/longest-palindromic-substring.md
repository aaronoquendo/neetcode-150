# 5. Longest Palindromic Substring

**Difficulty:** Medium  
**Pattern:** Expand around center (two pointers)  
**Language:** JavaScript

## Problem

Given a string `s`, return its longest palindromic substring.

- A **palindrome** reads the same forward and backward, such as `"bab"`, `"bb"`, or `"abba"`.
- A **substring** is a continuous section of a string. You cannot skip characters.
- Return the actual substring, not its length. If multiple longest palindromes exist, any one is valid.

### Example 1

```text
Input: s = "babad"
Output: "bab"
```

`"aba"` is also a valid answer. Both have length 3. The solution below returns `"bab"` because it finds it first and only replaces it with a strictly longer palindrome.

### Example 2

```text
Input: s = "cbbd"
Output: "bb"
```

### Constraints

- `1 <= s.length <= 1000`
- `s` contains only digits and English letters.

## JavaScript solution

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        // Odd-length palindrome: start on ONE character.
        let left = i;
        let right = i;

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // Save this palindrome only if it is longer.
            if (right - left + 1 > longest.length) {
                longest = s.slice(left, right + 1);
            }

            // Expand one position in each direction.
            left--;
            right++;
        }

        // Even-length palindrome: start on TWO adjacent characters.
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

## The main idea

**Pick a center, expand while both sides match, and save the longest palindrome found.**

Every palindrome has a center. By checking every character and every gap between adjacent characters, we cover every possible center.

If the current substring is a palindrome and the next character on its left matches the next character on its right, the expanded substring is also a palindrome. If those characters do not match, stop expanding that center.

## Why two while loops are needed

An odd-length palindrome has **1, 3, 5, 7, ...** characters. An even-length palindrome has **2, 4, 6, 8, ...** characters.

| Type | Example | Center | Starting pointers | Expansion |
| --- | --- | --- | --- | --- |
| Odd length | `"bab"` | The single `"a"` | `left = i`, `right = i` | `"a"` becomes `"bab"` |
| Even length | `"abba"` | Between the two `"b"` characters | `left = i`, `right = i + 1` | `"bb"` becomes `"abba"` |

Each expansion adds two characters: one on the left and one on the right.

Starting with one character always gives odd lengths. It can never produce a palindrome of length 2 or 4. The second loop handles those even lengths by starting with two adjacent characters.

**Without the second loop, this code would return `"a"` for `"abba"`, missing the full palindrome.**

Both loops run for every `i`. We do not choose a loop based on whether the entire input string has an odd or even length.

## Understanding the code

### 1. Remember the best answer

```javascript
let longest = "";
```

This holds the longest palindrome found so far.

### 2. Try every center

```javascript
for (let i = 0; i < s.length; i++)
```

At every index, check an odd center on that character and an even center between it and the next character.

### 3. Check boundaries and matching characters

```javascript
left >= 0 && right < s.length && s[left] === s[right]
```

All three conditions must hold:

- `left >= 0`: the left pointer is inside the string.
- `right < s.length`: the right pointer is inside the string.
- `s[left] === s[right]`: the characters at the pointers match.

### 4. Calculate the palindrome's length

```javascript
right - left + 1
```

This counts the characters between the pointers, including both endpoints.

For `left = 0` and `right = 2`, the length is `2 - 0 + 1 = 3`.

### 5. Extract and save the palindrome

```javascript
if (right - left + 1 > longest.length) {
    longest = s.slice(left, right + 1);
}
```

`slice(start, end)` includes `start` but excludes `end`. Passing `right + 1` includes the character at `right`.

```javascript
"babad".slice(0, 3); // "bab": indices 0, 1, and 2
```

`right - left + 1` gives a **number**, while `slice()` gives the **actual substring**. The problem asks for the substring, so the length alone is not the answer.

`slice()` does not modify the original string.

### 6. Expand outward

```javascript
left--;
right++;
```

Move the left pointer one position left and the right pointer one position right. Then check the while condition again.

## Walkthrough: s = "babad"

| Index | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| Character | b | a | b | a | d |

Start with `longest = ""`.

### i = 0: center on "b"

1. `left = 0`, `right = 0`: `"b"` matches itself.
2. Length 1 is greater than 0, so save `longest = "b"`.
3. Expand to `left = -1`, `right = 1`. The left pointer is outside the string, so stop.
4. Even check: indices 0 and 1 contain `"b"` and `"a"`. They do not match, so stop immediately.

### i = 1: center on "a"

1. `left = 1`, `right = 1`: find `"a"`. It ties the current length of 1, so no update.
2. Expand to `left = 0`, `right = 2`: both characters are `"b"`.
3. The palindrome is `"bab"`, with length 3. Save `longest = s.slice(0, 3)`, which is `"bab"`.
4. Expand to `left = -1`, `right = 3`. Stop at the boundary.
5. Even check: indices 1 and 2 contain `"a"` and `"b"`. No match.

### i = 2: center on "b"

1. `left = 2`, `right = 2`: find `"b"`. It is shorter than `"bab"`.
2. Expand to `left = 1`, `right = 3`: both characters are `"a"`.
3. The palindrome is `"aba"`, with length 3. It ties `"bab"`, so no update: the condition uses `>`, not `>=`.
4. Expand to `left = 0`, `right = 4`: `"b"` and `"d"` do not match. Stop.
5. Even check: indices 2 and 3 contain `"b"` and `"a"`. No match.

### i = 3: center on "a"

1. Find the single character `"a"`. No update.
2. Expand to indices 2 and 4: `"b"` and `"d"` do not match. Stop.
3. Even check: indices 3 and 4 contain `"a"` and `"d"`. No match.

### i = 4: center on "d"

1. Find the single character `"d"`. No update.
2. Expand to `right = 5`. This is outside the string, so stop.
3. Even check starts with `right = 5`, so it also stops immediately.

### Final answer

```javascript
return longest; // "bab"
```

## Walkthrough: the even palindrome in "cbbd"

| Index | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| Character | c | b | b | d |

The odd checks find only single-character palindromes.

At `i = 1`, the second loop does this:

| Step | left | right | Comparison | Result |
| --- | --- | --- | --- | --- |
| Start on adjacent characters | 1 | 2 | `"b" === "b"` | Save `"bb"`, length 2 |
| Expand outward | 0 | 3 | `"c" !== "d"` | Stop |

No other center gives a longer palindrome.

**Final answer: `"bb"`.**

For `"abba"`, that same expansion would compare `"a"` with `"a"`, successfully growing `"bb"` into `"abba"`.

## Complexity

Let `n` be the length of `s`.

- **Time: O(n²).** There are O(n) centers and each can expand O(n) times. Even if slicing a substring of length `k` costs O(k), total time stays O(n²) here: slicing occurs only when the best length strictly increases, so there are at most n updates and their total copying cost is at most O(n²).
- **Space: O(n) for stored substring data under a copying model.** The pointers use O(1) space, but `longest` can hold up to n characters, and slicing can allocate strings. Exact string storage depends on the JavaScript engine. The screenshot's O(1) label describes the pointer bookkeeping, not all string allocations in this version.

To avoid repeated slicing, another version could store only the best starting index and length, then call `slice()` once at the end. That version uses O(1) auxiliary space excluding its output string.

## Example calls and answers

```javascript
longestPalindrome("babad"); // "bab"
longestPalindrome("cbbd");  // "bb"
longestPalindrome("abba");  // "abba"
longestPalindrome("racecar"); // "racecar"
longestPalindrome("a");     // "a"
longestPalindrome("ac");    // "a"
longestPalindrome("aaaa");  // "aaaa"
```

## Remember

**One-character center finds odd lengths. Two-character center finds even lengths. Expand both ways and save a longer match.**
