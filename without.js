const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// Remove target(s) from a given array
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