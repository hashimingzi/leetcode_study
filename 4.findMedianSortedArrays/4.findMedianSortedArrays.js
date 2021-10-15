var findMedianSortedArrays = function (nums1 = [], nums2 = []) {
  let totallen = nums1.length + nums2.length;
  let k = Math.floor((totallen + 1) / 2);
  if (totallen === 0) {
    return 0;
  }
  if (totallen % 2 === 1) {
    return getKth(nums1, nums2, k);
  } else {
    return (getKth(nums1, nums2, k) + getKth(nums1, nums2, k + 1)) / 2;
  }
};

var getKth = function (nums1 = [], nums2 = [], k) {
  // init point
  let p1 = p2 = 0;
  while (p1 < nums1.length || p2 < nums2.length) {
    if (p1 >= nums1.length) {
      return nums2[p2 + k - 1];
    }
    if (p2 >= nums2.length) {
      return nums1[p2 + k - 1];
    }
    if (k === 1) {
      return Math.min(nums1[p1], nums2[p2])
    }
    let tk = Math.floor(k / 2);
    let n1_idx = Math.min(p1 + tk - 1, nums1.length - 1);
    let n2_idx = Math.min(p2 + tk - 1, nums2.length - 1);
    if (nums1[n1_idx] >= nums2[n2_idx]) {
      p2 += tk;
    } else {
      p1 += tk;
    }
    k -= tk;
  };
};

let nums1 = [1, 3];
let nums2 = [2];
let result = findMedianSortedArrays(nums1, nums2);
console.log(result);