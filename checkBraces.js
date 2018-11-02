

function checkBraces(s) {
  const openingBraces = new Set(['{', '(', '[', '<']);
  const closingBraces = new Set(['}', ')', ']', '>']);
  const closeToOpen = {
    '}': '{',
    ')': '(',
    ']': '[',
    '>': '<',
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (openingBraces.has(s[i])) {
      stack.push(s[i]);
      continue;
    }

    if (closingBraces.has(s[i]) && closeToOpen[s[i]] !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
}

module.exports = checkBraces;