const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// Take in an array and a callback function,
// return a new array based on the results of the callback function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;