/**
 * Definition for a binary tree node:
 * function TreeNode(val, left, right) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let current = root;
    let ancestor = null;

    while (current !== null && ancestor === null) {
        if (p.val < current.val && q.val < current.val) {
            // Both nodes are smaller, so move left.
            current = current.left;
        } else if (p.val > current.val && q.val > current.val) {
            // Both nodes are larger, so move right.
            current = current.right;
        } else {
            // The nodes split directions, or current is p or q.
            ancestor = current;
        }
    }

    return ancestor;
};
