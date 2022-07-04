/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // base condition where cannot divide more
  if (nums.length < 2) {
    return nums;
  }

  // divide one array for two arrays

  let length = nums.length;
  let middle = Math.ceil(length / 2);
  let left = nums.slice(0, middle);
  let right = nums.slice(middle);

  // recursively do division
  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
};

const merge = (left, right) => {
  let result = [];

  while (left.length && right.length) {
    if (left[0] >= right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  return result.concat(left, right);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
