class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    let isValid = true;

    if (s.length !== t.length) {
      isValid = false;
    } else {
      let count = new Map();

      for (let i = 0; i < s.length; i++) {
        if (count.has(s[i])) {
          count.set(s[i], count.get(s[i]) + 1);
        } else {
          count.set(s[i], 1);
        }

        if (count.has(t[i])) {
          count.set(t[i], count.get(t[i]) - 1);
        } else {
          count.set(t[i], -1);
        }
      }

      let values = Array.from(count.values());

      for (let i = 0; i < values.length; i++) {
        if (values[i] !== 0) {
          isValid = false;
          break;
        }
      }
    }

    return isValid;
  }
}