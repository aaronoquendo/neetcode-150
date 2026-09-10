/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let p1 = 0;
    let p2 = 0;

    let characters = new Set();
    let longest = 0;

    for (let i = 0; i < s.length; i++) {
        // Remove characters until the duplicate is gone.
        while (characters.has(s[p2])) {
            characters.delete(s[p1]);
            p1++;
        }

        characters.add(s[p2]);

        // Update longest if the current window is longer.
        let currentLength = p2 - p1 + 1;

        if (currentLength > longest) {
            longest = currentLength;
        }

        p2++;
    }

    return longest;
};