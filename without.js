const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = without;

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
// assertArraysEqual(without([1], []), [1]); // => [1]
// assertArraysEqual(without([1, 1, 1], [1]), []); // => []
// assertArraysEqual(without([1, "1", 1], ["1"]), [1, 1]); // => [1]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);