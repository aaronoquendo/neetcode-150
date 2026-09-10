class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
      let stack = []; // stack to track open brackets
      let pairs = { ')': '(', '}': '{', ']': '[' }; // matching pairs
      let isValid = true; // result flag
      for (let i = 0; i < s.length; i++) { // iterate through string
        let char = s[i];
        if (!pairs[char]) stack.push(char); // if opening bracket, push
        else {
          if (stack.length === 0 || stack[stack.length - 1] !== pairs[char]) { isValid = false; break; } // mismatch
          stack.pop(); // matched pair, remove open bracket
        }
      }
      if (stack.length !== 0) isValid = false; // leftover open brackets
      return isValid; // single return
    }
  }