const assertEqual = require('./assertEqual');

// Given an object, return the first key which contains the given value, 
// return undefined if not found
const findKeyByValue = function(object, value) {
  for (const item in object) {
    if (object[item] === value) {
      return item;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;