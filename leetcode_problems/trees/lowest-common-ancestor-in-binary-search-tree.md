# Lowest Common Ancestor in a Binary Search Tree

## Problem

Given the root of a binary search tree and two nodes, `p` and `q`, return their lowest common ancestor.

The lowest common ancestor is the lowest node in the tree that has both `p` and `q` as descendants. A node can be a descendant of itself.

All values in the binary search tree are unique.

## Example

```text
Input:  root = [5,3,8,1,4,7,9,null,2], p = 3, q = 8
Output: 5
```

Node `5` is the lowest node that has both `3` and `8` beneath it.

## Approach

Use the ordering rules of a binary search tree:

- If both values are smaller than the current node, move left.
- If both values are larger than the current node, move right.
- Otherwise, the nodes split in different directions, or the current node equals one of them. The current node is therefore the lowest common ancestor.

## Complexity

- Time: `O(h)`, where `h` is the height of the tree.
- Space: `O(1)`.
