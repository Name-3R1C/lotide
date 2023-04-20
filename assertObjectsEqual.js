const eqArrays = require('./eqArrays');

// Compare two objects
const eqObjects = function(object1, object2) {
  // Compare length of both objects
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // Compare key value
  for (const item in object1) {
    // Check if key value is array
    if (Array.isArray(object1[item])) {
      if (!eqArrays(object1[item], object2[item])) {
        return false;
      }
    } else if (object1[item] !== object2[item]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  const ans = eqObjects(actual, expected);
  if (ans) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;