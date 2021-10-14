var lengthOfLongestSubstring = function (s) {
  let ss = new Set();
  let maxlen = 0;
  for (let i = 0, j = 0; i < s.length && j < s.length; i++) {
    while (j < s.length) {
      if (ss.has(s[j])) {
        maxlen = ss.size > maxlen ? ss.size : maxlen;
        ss.delete(s[i]);
        break;
      } else {
        ss.add(s[j++]);
      }
    }
    if (j >= s.length) {
      maxlen = ss.size > maxlen ? ss.size : maxlen;
    }
  }
  return maxlen;
};

var lengthOfLongestSubstring2 = function (s) {
  let ss = new Set();
  let maxlen = 0;
  for (let i = 0, j = 0; i < s.length && j < s.length; i++) {
    while (j < s.length && !ss.has(s[j])) {
      ss.add(s[j++]);
    }
    maxlen = ss.size > maxlen ? ss.size : maxlen;
    ss.delete(s[i]);
    if (j === s.length - 1) {
      j++;
    }
  }
  return maxlen;
};

let s = "bbbbbb";
result = lengthOfLongestSubstring2(s);
console.log(result);