class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {

      let left = 0;
      let right = s.length - 1;
      let isValid = true;

      while (left < right) {

          // Skip non-alphanumeric characters from the left
          while (left < right && !this.isAlphaNum(s[left])) {
              left++;
          }

          // Skip non-alphanumeric characters from the right
          while (left < right && !this.isAlphaNum(s[right])) {
              right--;
          }

          // Compare lowercase characters
          if (s[left].toLowerCase() !== s[right].toLowerCase()) {
              isValid = false;
              break;
          }

          // Move both pointers inward
          left++;
          right--;
      }

      return isValid;
  }

  // Helper function to check if character is alphanumeric
  isAlphaNum(c) {

      let code = c.charCodeAt(0);

      if (
          (code >= 48 && code <= 57) ||
          (code >= 65 && code <= 90) ||
          (code >= 97 && code <= 122)
      ) {
          return true;
      } else {
          return false;
      }
  }
}