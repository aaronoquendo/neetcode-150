class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let left = 0, right = s.length - 1, isValid = true; // two pointers + result flag
    while (left < right) { // move inward
      while (left < right && !this.isAlphaNum(s[left])) left++; // skip non-alphanumeric
      while (left < right && !this.isAlphaNum(s[right])) right--; // skip non-alphanumeric
      if (s[left].toLowerCase() !== s[right].toLowerCase()) { isValid = false; break; } // compare lowercase
      left++; right--; // move pointers
    }
    return isValid; // single return
  }
  isAlphaNum(c) { // helper to check alphanumeric
    let code = c.charCodeAt(0); // ASCII code
    return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
  }
}