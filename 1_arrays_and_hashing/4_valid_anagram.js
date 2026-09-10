class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    let isValid = true; // result flag
    if (s.length !== t.length) {
        isValid = false; // lengths must match
    }else {
      let count = {}; // frequency map
      for (let i = 0; i < s.length; i++) { // count chars in s
        count[s[i]] = (count[s[i]] || 0) + 1;
        count[t[i]] = (count[t[i]] || 0) - 1; // subtract using t
      }
      for (let key in count) { // verify all counts zero
        if (count[key] !== 0) { isValid = false; break; }
      }
    }
    return isValid; // single return
  }
}