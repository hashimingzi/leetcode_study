var zConvert = function (s = "", numRows) {
  let map = new Map();
  for (let i = 0; i < numRows; i++) {
    map.set(i, []);
  }
  let i = 0, flag = -1;
  for (char of s) {
    if (i == numRows - 1 || i == 0) {
      flag *= -1
    }
    let arr = map.get(i);
    arr.push(char);
    i += flag;
  }
  let zconver = "";
  let t = map.get(0);
  map.forEach((val) => zconver = zconver.concat(val.join("")))
  return zconver;
};

let s = "PAYPALISHIRING"; // PAHNAPLSIIGYIR
let numRows = 4;
result = zConvert(s, numRows);
console.log(result)
console.log(result === "PINALSIGYAHRPI");;