const LinkedList = require("../utils/nodelist/Linkedlist");

var addTwoNums = function (l1, l2) {
  let p1 = l1.head;
  let p2 = l2.head;
  let l3 = new LinkedList();
  let flag = 0; // 是否进位
  while (p1 || p2) {
    let val1 = p1 ? p1.element : 0;
    let val2 = p2 ? p2.element : 0;
    let val = val1 + val2 + flag;
    if (val >= 10) {
      val %= 10;
      flag = 1;
    } else {
      flag = 0;
    }
    l3.append(val);
    if (p1) {
      p1 = p1.next;
    }
    if (p2) {
      p2 = p2.next;
    }
  }
  if (flag) {
    l3.append(1);
  }
  return l3;
};

let l1 = new LinkedList();
let l2 = new LinkedList();
l1.append(2).append(4).append(0);
console.log(l1.toString());
l2.append(5).append(6).append(9);
console.log(l2.toString());
result = addTwoNums(l1, l2);
console.log(result.toString());