# 2. Add Two Numbers

**Difficulty:** Medium  
**Pattern:** Linked-list traversal with a carry

## Problem

You are given the heads of two non-empty linked lists, `l1` and `l2`. Each list represents a non-negative integer, with one digit per node and the digits stored in reverse order.

Add the two numbers and return the head of a new linked list containing the sum, also in reverse order. The input numbers have no leading zeros, except for the number zero itself.

For example, `[2, 4, 3]` represents **342**: the first node stores the ones digit, the second stores the tens digit, and the third stores the hundreds digit.

### Examples

```text
Input:  l1 = [2, 4, 3], l2 = [5, 6, 4]
Output: [7, 0, 8]
Explanation: 342 + 465 = 807.

Input:  l1 = [0], l2 = [0]
Output: [0]

Input:  l1 = [9, 9], l2 = [1]
Output: [0, 0, 1]
Explanation: 99 + 1 = 100.
```

## Linked lists are not arrays

Although LeetCode displays inputs like `[2, 4, 3]`, your function receives a node object, not an array.

- `l1.val` reads the current node's digit.
- `l1.next` points to the next node, or `null` at the end.
- `l1 = l1.next` moves your pointer forward.
- `l1.length` is not a provided property, so it cannot control the loop in your screenshot.

## Approach

Add corresponding digits just as you would when adding numbers by hand. Since the lists already start with the ones digits, you can traverse them directly.

1. Create a dummy node to make building the result easier.
2. Add the current digits and the previous carry. Treat a missing node as zero.
3. Store `sum % 10` in a new node.
4. Set the next carry to `Math.floor(sum / 10)`.
5. Move to the next input nodes and repeat while either list has nodes or a carry remains.
6. Return `dummy.next`, the first actual result node.

## JavaScript solution

LeetCode provides the `ListNode` constructor shown in the comment.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // Placeholder before the first actual result node.
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    // Keep going if either list has digits or a final carry remains.
    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        // Example: sum = 14 means store 4 and carry 1.
        let digit = sum % 10;
        carry = Math.floor(sum / 10);

        // Attach the new digit and move the result pointer forward.
        current.next = new ListNode(digit);
        current = current.next;
    }

    // Skip the placeholder node.
    let result = dummy.next;
    return result;
};
```

## Walkthrough

For `l1 = [2, 4, 3]` and `l2 = [5, 6, 4]`:

| Step | First digit | Second digit | Carry in | Sum | Digit added | Carry out | Result so far |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2 | 5 | 0 | 7 | 7 | 0 | `[7]` |
| 2 | 4 | 6 | 0 | 10 | 0 | 1 | `[7, 0]` |
| 3 | 3 | 4 | 1 | 8 | 8 | 0 | `[7, 0, 8]` |

The returned list `[7, 0, 8]` represents **807**.

### Why check the carry in the loop condition?

For `[9] + [1]`, the first iteration stores `0` and leaves a carry of `1`. Both input lists then end, but we need one more iteration to append `1`. The result is `[0, 1]`, representing 10.

### Why use a dummy node?

The dummy gives us a starting node to attach the first digit to. `current` moves as we append nodes; `dummy` stays in place so we can return `dummy.next` after the loop.

## Complexity

Let `m` and `n` be the lengths of the input lists.

- **Time:** `O(max(m, n))` — process each digit once, with at most one extra iteration for the final carry.
- **Output space:** `O(max(m, n))` — allocate the result nodes.
- **Auxiliary space:** `O(1)` excluding the returned list — use a fixed number of pointers and numeric variables.

Adding one digit at a time also avoids JavaScript number-precision problems from converting very long lists into whole numbers.
