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

const flatten = function(arr) {
  let newArr = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      element.forEach(subElm => {
        newArr.push(subElm);
      });
    } else {
      newArr.push(element);
    }
  });
  return newArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([[1], [2], [3, 4], [5], [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([[1]]), [1]); // => [1]
assertArraysEqual(flatten([[]]), []); // => []
assertArraysEqual(flatten([1, 2, ["3", 4], 5, [6]]), [1, 2, "3", 4, 5, 6]); // => [1, 2, "3", 4, 5, 6]