/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let longest = "";

    for (let i = 0; i < s.length; i++) {

        // Odd-length palindrome
        let left = i;
        let right = i;

        while (left >= 0 && right < s.length && s[left] === s[right]) {

            if (right - left + 1 > longest.length) {
                longest = s.slice(left, right + 1);
            }

            left--;
            right++;
        }

        // Even-length palindrome
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
// Time:  O(n²)
// Space: O(1) auxiliary space
// Approach: Expand around center (Two Pointers)