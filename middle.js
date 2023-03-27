const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(firstArr, secArr) {
  let correct = String.fromCodePoint(0x2705) + String.fromCodePoint(0x2705) + String.fromCodePoint(0x2705);
  let wrong = String.fromCodePoint(0x274C) + String.fromCodePoint(0x274C) + String.fromCodePoint(0x274C);
  let ans = eqArrays(firstArr, secArr);
  if (ans) {
    console.log(`${correct} Assertion Passed: ${firstArr} === ${secArr}`);
  } else {
    console.log(`${wrong} Assertion Failed: ${firstArr} !== ${secArr}`);
  }
};

const middle = function(arr) {
  if (arr.length < 3) {
    return [];
  }
  let ans = [];
  let middle = Math.floor(arr.length / 2);
  if (arr.length % 2 !== 0) {
    ans = [arr[middle]];
  } else {
    ans = [arr[middle - 1], arr[middle]];
  }
  return ans;
};

assertArraysEqual((middle([1])), []); // => []
assertArraysEqual((middle([1, 2])), []); // => []
assertArraysEqual((middle([1, 2, 3])), [2]); // => [2]
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]); // => [3]
assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]); // => [2, 3]
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]); // => [3, 4]