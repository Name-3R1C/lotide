const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(arr) {
  const newArr = [];
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

module.exports = flatten;

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
// assertArraysEqual(flatten([[1], [2], [3, 4], [5], [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
// assertArraysEqual(flatten([[1]]), [1]); // => [1]
// assertArraysEqual(flatten([[]]), []); // => []
// assertArraysEqual(flatten([1, 2, ["3", 4], 5, [6]]), [1, 2, "3", 4, 5, 6]); // => [1, 2, "3", 4, 5, 6]