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

assertArraysEqual([1,2,3],[1,2,3]); // true
assertArraysEqual([],[]); // true
assertArraysEqual([1,2],[1,2,3]); // false
assertArraysEqual([],[1,2,3]); // false
assertArraysEqual(["1",2,3,4],[1,2,3,4]); // false