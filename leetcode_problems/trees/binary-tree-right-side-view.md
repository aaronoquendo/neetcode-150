# Binary Tree Right Side View

## Problem

Given the root of a binary tree, return the values of the nodes visible when looking at the tree from the right side. Return the values from top to bottom.

## Examples

```text
Input:  root = [1,2,3,null,4,null,5]
Output: [1,3,5]
```

```text
Input:  root = [1,2,3,4,null,null,null,5]
Output: [1,3,4,5]
```

## Approach

Use breadth-first search to process the tree one level at a time.

For each level:

1. Record how many nodes are currently on that level.
2. Visit all of those nodes.
3. Add the final node's value to the result because it is the node visible from the right.
4. Add each node's children to the queue for the next level.

A queue index is used instead of `shift()` so removing nodes from the front does not require JavaScript to reindex the array.

## Complexity

- Time: `O(n)`, because every node is visited once.
- Space: `O(n)` for the queue in the worst case.
