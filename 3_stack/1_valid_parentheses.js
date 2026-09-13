var isValid = function(s) {
  let stack = [];
  let result = true;

  let pairs = {
      ")": "(",
      "}": "{",
      "]": "["
  };

  for (let i = 0; i < s.length; i++) {
      let char = s[i];

      // Opening bracket → save it
      if (char === "(" || char === "{" || char === "[") {
          stack.push(char);
      } else {
          // Closing bracket → check the most recent opening bracket
          let lastOpening = stack.pop();

          if (lastOpening !== pairs[char]) {
              result = false;
              break;
          }
      }
  }

  // Make sure there aren't unmatched opening brackets
  if (stack.length > 0) {
      result = false;
  }

  return result;
};
// Time: O(n)
// Space: O(n)
// Pattern: Stack