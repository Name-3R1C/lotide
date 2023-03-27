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

const without = function(source, itemsToRemove) {
  let subArr = [];
  // Go through each elms in array
  for (let i = 0; i < source.length; i++) {
    let match = 0;
    // compare elm to all items to remove
    itemsToRemove.forEach(key => {
      if (source[i] === key) {
        match = 1;
      }
    });
    // if no match, append to sub arr
    if (match === 0) {
      subArr.push(source[i]);
    }
  }
  return subArr;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
assertArraysEqual(without([1], []), [1]); // => [1]
assertArraysEqual(without([1, 1, 1], [1]), []); // => []
assertArraysEqual(without([1, "1", 1], ["1"]), [1, 1]); // => [1]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);