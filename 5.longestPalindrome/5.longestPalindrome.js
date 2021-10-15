var longestPalindrome = function (s = "") {
  let longestpalindrome = s[0];
  for (i = 1; i < s.length; i++) {
    let newpalindrome = "";
    if (s[i] === s[i - 1]) {
      newpalindrome = getPalindrome(s, i, i - 1);
    }
    if (i > 1 && s[i] === s[i - 2]) {
      newpalindrome = getPalindrome(s, i, i - 2);
    }
    longestpalindrome = longestpalindrome.length > newpalindrome.length ? longestpalindrome : newpalindrome;
  }
  return longestpalindrome;
};

let getPalindrome = function (s = "", i, j) {
  for (; i < s.length && j > -1 && s[i] === s[j]; i++, j--);
  palindrome = s.slice(j + 1, i);
  return palindrome;
};

let s = "babadabd";
let result = longestPalindrome(s)
console.log(result);