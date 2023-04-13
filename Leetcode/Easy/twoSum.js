// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example input / outputs
let nums = [2, 7, 11, 15];
let target = 9;
let output = [0, 1];

let nums1 = [3, 2, 4];
let target1 = 6;
let output1 = [1, 2];

let nums2 = [3, 3];
let target2 = 6;
let output2 = [0, 1];

// Brute Force
function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// console.log(twoSumBruteForce(nums, target));
// console.log(twoSumBruteForce(nums1, target1));
// console.log(twoSumBruteForce(nums2, target2));

// Hash Map
function twoSumHashMap(nums, target) {
  let hashObj = {};
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];

    if (difference in hashObj) {
      return [hashObj[difference], i];
    }

    hashObj[nums[i]] = i;
  }
}

// Two Pointers if the list is sorted
// This solution does not work for some cases, aka nums1 because it does not keep track of the original indicies before the array is sorted.
function twoSumTwoPointers(nums, target) {
  let sortedArr = nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let sumOfPointers = sortedArr[left] + sortedArr[right];
    if (sumOfPointers < target) {
      left++;
    } else if (sumOfPointers > target) {
      right--;
    } else {
      return [left, right];
    }
  }
  return null;
}
