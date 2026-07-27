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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const result = [];
    const queue = [];

    if (root !== null) {
        queue.push(root);
    }

    let queueIndex = 0;

    while (queueIndex < queue.length) {
        const levelSize = queue.length - queueIndex;

        for (let i = 0; i < levelSize; i++) {
            const node = queue[queueIndex];
            queueIndex++;

            // The last node on this level is visible from the right.
            if (i === levelSize - 1) {
                result.push(node.val);
            }

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    }

    return result;
};
