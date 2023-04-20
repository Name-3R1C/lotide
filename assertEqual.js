// Assertion on primitive type
const assertEqual = function(actual, expected) {
  let ans = (actual === expected);
  if (ans) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;