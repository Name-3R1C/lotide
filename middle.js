const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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