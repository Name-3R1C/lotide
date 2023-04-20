const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// Return a slice of the array, with elements taken from the beginning, 
// until callback condition meets
const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    // push item until callback return true
    if (!callback(item)) {
      result.push(item);
    } else {
      break;  //break for loop
    }
  }

  return result;
};

module.exports = takeUntil;