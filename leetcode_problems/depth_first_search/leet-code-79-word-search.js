/**
79. Word Search

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

https://leetcode.com/problems/word-search/description/?envType=problem-list-v2&envId=depth-first-search
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let result = false;

    const dfs = (row, col, index) => {
        let found = false;

        if (index === word.length) {
            found = true;
        } else if (
            row >= 0 &&
            row < board.length &&
            col >= 0 &&
            col < board[0].length &&
            board[row][col] === word[index]
        ) {
            const temp = board[row][col];

            // Mark as visited
            board[row][col] = "#";

            // Check all 4 directions
            found =
                dfs(row - 1, col, index + 1) ||
                dfs(row + 1, col, index + 1) ||
                dfs(row, col - 1, index + 1) ||
                dfs(row, col + 1, index + 1);

            // Backtrack
            board[row][col] = temp;
        }

        return found;
    };

    for (let row = 0; row < board.length && !result; row++) {
        for (let col = 0; col < board[row].length && !result; col++) {
            result = dfs(row, col, 0);
        }
    }

    return result;
};
