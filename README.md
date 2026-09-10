# NeetCode 150

Practice repo for [NeetCode 150](https://neetcode.io/practice) and extra [LeetCode](https://leetcode.com/) problems. Each problem is kept with its solution and, when written up, an explanation of the approach.

Solutions are in JavaScript. Explanations are in Markdown.

## How this repo is organized

| Folder | What it contains |
| --- | --- |
| Numbered topic folders (`1_arrays_and_hashing`, `2_two_pointers`, `3_stack`) | NeetCode 150 problems, in list order |
| `leetcode_problems/` | Extra LeetCode problems, grouped by pattern |
| `knowledge_documents/` | Pattern notes that apply across problems |

A problem can be a single file or a small folder:

- **`.js`** — working solution
- **`.md` / `README.md`** — problem statement, approach, examples, and complexity
- **both** — solution and write-up kept together

## NeetCode 150

Problems follow the NeetCode 150 topic order. Folder numbers match that sequence.

### Arrays and hashing

[`1_arrays_and_hashing/`](1_arrays_and_hashing)

| Problem | Solution | Explanation |
| --- | --- | --- |
| Contains Duplicate | [JS](1_arrays_and_hashing/1_contains_duplicate/1_contains_duplicate.js) | [MD](1_arrays_and_hashing/1_contains_duplicate/contains-duplicate.md) |
| Two Sum | [JS](1_arrays_and_hashing/2_two_sum.js) | |
| Valid Anagram | [JS](1_arrays_and_hashing/2_valid_anagram.js) | |
| Group Anagrams | [JS](1_arrays_and_hashing/3_group_anagrams.js) | |
| Top K Frequent Elements | [JS](1_arrays_and_hashing/4_top_k_frequent_elements.js) | |
| Product of Array Except Self | [JS](1_arrays_and_hashing/5_product_of_array_except_self.js) | |

### Two pointers

[`2_two_pointers/`](2_two_pointers)

| Problem | Solution | Explanation |
| --- | --- | --- |
| Valid Palindrome | [JS](2_two_pointers/1_valid_palindrone.js) | |
| Container With Most Water | [JS](2_two_pointers/container_with_most_water/container_with_most_water.js) | [MD](2_two_pointers/container_with_most_water/container-with-most-water.md) |

### Stack

[`3_stack/`](3_stack)

| Problem | Solution | Explanation |
| --- | --- | --- |
| Valid Parentheses | [JS](3_stack/1_valid_parentheses.js) | |
| Min Stack | [JS](3_stack/2_min_stack.js) | |

## LeetCode problems

Extra LeetCode questions live under [`leetcode_problems/`](leetcode_problems), grouped by pattern rather than NeetCode list order.

### Arrays and hashing

| Problem | Solution | Explanation |
| --- | --- | --- |
| Longest Consecutive Sequence | | [MD](leetcode_problems/arrays-and-hashing/longest-consecutive-sequence.md) |

### Two pointers

| Problem | Solution | Explanation |
| --- | --- | --- |
| Container With Most Water | [JS](leetcode_problems/two_pointers_problems/container-with-most-water/solution.js) | [README](leetcode_problems/two_pointers_problems/container-with-most-water/README.md) |
| 3Sum | [JS](leetcode_problems/two_pointers_problems/three-sum.js) | |
| 3Sum Closest | [JS](leetcode_problems/two_pointers_problems/threeSumClosest.js) | |
| Longest Palindromic Substring | [JS](leetcode_problems/two_pointers_problems/longest_palindromic_substring/longest_palindromic_substring.js) | [MD](leetcode_problems/two_pointers_problems/longest_palindromic_substring/longest-palindromic-substring.md) |

### Sliding window

| Problem | Solution | Explanation |
| --- | --- | --- |
| Longest Substring Without Repeating Characters | [JS](leetcode_problems/sliding_window_problems/Longest%20Substring%20Without%20Repeating%20Characters/Longest%20Substring%20Without%20Repeating%20Characters.js) | |
| Longest Repeating Character Replacement | | [MD](leetcode_problems/sliding_window_problems/longest-repeating-character-replacement/longest-repeating-character-replacement.md) |
| Permutation in String | | [MD](leetcode_problems/sliding_window_problems/permutation-in-string/permutation-in-string.md) |

### Stack

| Problem | Solution | Explanation |
| --- | --- | --- |
| Daily Temperatures | [JS](leetcode_problems/stack/daily-temperatures.js) | |

### Linked lists

| Problem | Solution | Explanation |
| --- | --- | --- |
| Add Two Numbers | | [MD](leetcode_problems/linked_lists/add-two-numbers.md) |

### Trees

| Problem | Solution | Explanation |
| --- | --- | --- |
| Binary Tree Right Side View | [JS](leetcode_problems/trees/binary-tree-right-side-view.js) | [MD](leetcode_problems/trees/binary-tree-right-side-view.md) |
| Lowest Common Ancestor of a BST | [JS](leetcode_problems/trees/lowest-common-ancestor-in-binary-search-tree.js) | [MD](leetcode_problems/trees/lowest-common-ancestor-in-binary-search-tree.md) |

### Tries

| Problem | Solution | Explanation |
| --- | --- | --- |
| Implement Trie (Prefix Tree) | [JS](leetcode_problems/tries/implement-trie-prefix-tree.js) | |

### Heap / priority queue

| Problem | Solution | Explanation |
| --- | --- | --- |
| Kth Largest Element in an Array | [JS](leetcode_problems/heap-priority-queue/kth-largest-element-in-an-array.js) | |

### Depth-first search

| Problem | Solution | Explanation |
| --- | --- | --- |
| Combination Sum | [JS](leetcode_problems/depth_first_search/Combination%20Sum.js) | |
| Word Search | [JS](leetcode_problems/depth_first_search/leet-code-79-word-search.js) | |

## Pattern notes

[`knowledge_documents/`](knowledge_documents) holds reusable pattern write-ups, not a single problem.

| Note | Path |
| --- | --- |
| Sliding window shapes | [sliding_window_patterns.md](knowledge_documents/sliding_window_patterns.md) |
| Two pointers vs sliding window | [two-pointers-vs-sliding-window.md](knowledge_documents/two-pointers-vs-sliding-window.md) |
| Search in Rotated Sorted Array | [search-in-rotated-sorted-array.js](knowledge_documents/binary-search/search-in-rotated-sorted-array.js) |
| Time Based Key-Value Store | [time-based-key-value-store.js](knowledge_documents/binary-search/time-based-key-value-store.js) |

## Adding a new problem

1. Put NeetCode 150 work in the matching numbered topic folder.
2. Put extra LeetCode work under `leetcode_problems/<pattern>/`.
3. Keep the JavaScript solution next to a Markdown explanation when you write one up.
4. Name files after the problem (`three-sum.js`, `add-two-numbers.md`).
