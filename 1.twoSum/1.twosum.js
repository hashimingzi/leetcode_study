// 先排序再找
let twoSum1 = function (nums = [], target) {
  nums.sort((a, b) => a - b);
  for (let i = 0, j = nums.length - 1; i < nums.length - 1;) {
    if (nums[i] + nums[j] === target) {
      return [nums[i], nums[j]];
    } else if (nums[i] + nums[j] >= target) {
      j--;
    } else {
      i++;
    }
  }
  return []
};

// Map
let twoSum2 = function (nums = [], target) {
  let map = new Map();
  for (i = 0; i < nums.length; i++) {
    let x = target - nums[i];
    if (map.has(x)) {
      return [i, map.get(x)].sort();
    }
    map.set(nums[i], i)
  }
  return [];
};

let nums = [5, 7, 11, 2, 15];
let target = 9;

let result = twoSum2(nums, target);
console.log(result);

