const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// Return the middle-most item of a given array
const middle = function(arr) {
  if (arr.length < 3) {
    return [];
  }
  
  let middle = Math.floor(arr.length / 2);
  if (arr.length % 2 !== 0) {
    return [arr[middle]];
  } else {
    return [arr[middle - 1], arr[middle]];
  }
};

module.exports = middle;