
# Sliding Window Code Shapes

## Core Idea

Sliding window is used when working with a **contiguous substring or subarray**.

You usually have:

- `left` = start of the window
    
- `right` = end of the window
    
- `right` expands the window
    
- `left` shrinks the window
    

Basic mental model:

```js
let left = 0;

for (let right = 0; right < arr.length; right++) {
    // expand window with right

    while (windowIsInvalid) {
        // shrink window from left
        left++;
    }

    // update answer
}
```

---

# 1. Fixed-Size Window

Use when the problem gives you a window size `k`.

Typical clues:

- `subarray of size k`
    
- `substring of length k`
    
- `k consecutive elements`
    

```js
let left = 0;

for (let right = 0; right < arr.length; right++) {
    // add arr[right] to the window

    if (right - left + 1 > k) {
        // remove arr[left] from the window
        left++;
    }

    if (right - left + 1 === k) {
        // update answer
    }
}
```

### Mental Model

```text
Expand right
→ window gets too large
→ move left
→ process window of size k
```

### Examples

- Maximum Average Subarray I
    
- Maximum Number of Vowels in a Substring of Given Length
    
- Maximum Sum Subarray of Size K
    

---

# 2. Longest Valid Variable Window

Use when you want the **longest** substring or subarray satisfying a condition.

```js
let left = 0;

for (let right = 0; right < arr.length; right++) {
    // add arr[right]

    while (windowIsInvalid) {
        // remove arr[left]
        left++;
    }

    // update maximum answer
}
```

### Mental Model

```text
Expand
→ invalid
→ shrink until valid
→ record longest
```

### Examples

- Longest Substring Without Repeating Characters
    
- Fruit Into Baskets
    
- Max Consecutive Ones III
    
- Longest Repeating Character Replacement
    

---

# 3. Shortest Valid Variable Window

Use when you want the **smallest** window that satisfies a condition.

```js
let left = 0;

for (let right = 0; right < arr.length; right++) {
    // add arr[right]

    while (windowIsValid) {
        // update minimum answer

        // remove arr[left]
        left++;
    }
}
```

### Mental Model

```text
Expand until valid
→ record answer
→ shrink
→ keep shrinking while still valid
```

### Examples
- Minimum Size Subarray Sum
- Minimum Window Substring

---

# 4. Sliding Window With a Set

Use a `Set` when you mainly care whether something is already inside the current window.

```js
let left = 0;
let set = new Set();

for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
        set.delete(s[left]);
        left++;
    }

    set.add(s[right]);

    // update answer
}
```

### Mental Model

```text
Duplicate found
→ move left
→ remove characters
→ continue until duplicate is gone
```

### Classic Example

- Longest Substring Without Repeating Characters
    

---

# 5. Sliding Window With a Frequency Map

Use a `Map` when you need to know **how many times** each value appears in the window.

```js
let left = 0;
let map = new Map();

for (let right = 0; right < s.length; right++) {
    map.set(
        s[right],
        (map.get(s[right]) || 0) + 1
    );

    while (windowIsInvalid) {
        map.set(
            s[left],
            map.get(s[left]) - 1
        );

        left++;
    }

    // update answer
}
```

### Mental Model

```text
Map = what is currently inside my window
```

### Examples

- Minimum Window Substring
    
- Find All Anagrams in a String
    
- Permutation in String
    
- Fruit Into Baskets
    

---

# 6. Fixed Window With Running Sum

Use this when working with numbers and the window size is fixed.

```js
let left = 0;
let sum = 0;

for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    if (right - left + 1 > k) {
        sum -= arr[left];
        left++;
    }

    if (right - left + 1 === k) {
        // use sum
    }
}
```

Instead of recalculating the whole window:

```js
arr[left] + arr[left + 1] + ... + arr[right]
```

you update the existing value:

```js
sum += arr[right];
sum -= arr[left];
```

### Examples

- Maximum Average Subarray I
    
- Maximum Sum Subarray of Size K
    

---

# 7. Variable Window With Running Sum

Useful when the size of the window changes based on a numeric condition.

```js
let left = 0;
let sum = 0;

for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum >= target) {
        // update answer

        sum -= arr[left];
        left++;
    }
}
```

### Mental Model

```text
Add right
→ condition reached
→ record answer
→ remove left
→ try making window smaller
```

### Classic Example

- Minimum Size Subarray Sum
    

---

# 8. Fixed Window With Character Matching

Use when your current window needs to match the characters or frequencies of another string.

```js
let left = 0;

let need = new Map();
let window = new Map();

for (let right = 0; right < s.length; right++) {
    // add s[right] to window

    while (right - left + 1 > targetLength) {
        // remove s[left] from window
        left++;
    }

    if (windowMatchesTarget) {
        // match found
    }
}
```

### Examples

- Permutation in String
    
- Find All Anagrams in a String
    

---

# The 4 Main Shapes to Memorize

You do not need to memorize every sliding window problem independently.

Memorize these four ideas.

---

## Shape 1: Fixed Window

```js
let left = 0;

for (let right = 0; right < arr.length; right++) {
    if (right - left + 1 > k) {
        left++;
    }

    if (right - left + 1 === k) {
        // answer
    }
}
```

### Mental Model

```text
Keep the window exactly size k.
```

---

## Shape 2: Longest Valid Window

```js
let left = 0;

for (let right = 0; right < arr.length; right++) {
    while (windowIsInvalid) {
        left++;
    }

    // update maximum
}
```

### Mental Model

```text
Invalid?
Shrink.

Valid?
Measure the window.
```

---

## Shape 3: Shortest Valid Window

```js
let left = 0;

for (let right = 0; right < arr.length; right++) {
    while (windowIsValid) {
        // update minimum
        left++;
    }
}
```

### Mental Model

```text
Valid?
Record answer.

Then shrink and see if it can become smaller.
```

---

## Shape 4: Window + State

Your window usually tracks something.

Possible state:

```text
Set
Map
sum
count
frequency
number of zeros
number of distinct characters
maximum frequency
```

Example:

```js
let left = 0;
let map = new Map();

for (let right = 0; right < arr.length; right++) {
    // add right to state

    while (windowIsInvalid) {
        // remove left from state
        left++;
    }

    // update answer
}
```

---

# Sliding Window Recognition Rule

When you see:

```text
contiguous
+
substring or subarray
+
longest / shortest / maximum / minimum
+
some condition
```

Think:

```text
SLIDING WINDOW
```

---

# Recognition Examples

## Example 1

```text
Longest substring without duplicates
```

Think:

```text
Sliding Window
```

---

## Example 2

```text
Shortest subarray whose sum is at least target
```

Think:

```text
Sliding Window
```

---

## Example 3

```text
Maximum sum of k consecutive elements
```

Think:

```text
Sliding Window
```

---

## Example 4

```text
Longest substring containing at most 2 distinct characters
```

Think:

```text
Sliding Window
```

---

# Universal Mental Model

```text
        CURRENT WINDOW
      ↓──────────────↓
    left            right
```

```text
right → expands the window

left → shrinks the window
```

---

# Most Important Template to Memorize

```js
let left = 0;

for (let right = 0; right < arr.length; right++) {
    // add right

    while (windowIsInvalid) {
        // remove left
        left++;
    }

    // update answer
}
```

The core idea is:

```text
1. Right expands
2. Check the condition
3. Left shrinks when necessary
4. Update the answer
```

---

# Quick Cheat Sheet

|Problem Clue|Sliding Window Shape|
|---|---|
|`size k`|Fixed Window|
|`length k`|Fixed Window|
|`k consecutive`|Fixed Window|
|`longest ... satisfying condition`|Longest Valid Window|
|`shortest ... satisfying condition`|Shortest Valid Window|
|`no duplicates`|Window + Set|
|`character counts`|Window + Map|
|`distinct characters`|Window + Map|
|`sum of consecutive values`|Window + Running Sum|
|`match characters of another string`|Frequency Map Window|

---

# Final Pattern

```text
CONTIGUOUS
     +
SUBARRAY / SUBSTRING
     +
LONGEST / SHORTEST / MAX / MIN
     +
CONDITION
     ↓
SLIDING WINDOW
```

And remember:

```text
RIGHT EXPANDS

LEFT SHRINKS

BETWEEN LEFT AND RIGHT = WINDOW
```
