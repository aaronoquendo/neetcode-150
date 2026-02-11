class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let map = {}; // key: sorted string, value: array of anagrams
    for (let i = 0; i < strs.length; i++) { // iterate input
      let key = strs[i].split('').sort().join(''); // normalize by sorting chars
      if (!map[key]) map[key] = []; // initialize group if missing
      map[key].push(strs[i]); // add original string to its group
    }
    let result = []; // collect grouped values
    for (let k in map) result.push(map[k]); // push each anagram group
    return result; // single return
  }
}