const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// Flatten nested arrays
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