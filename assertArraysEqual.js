const eqArrays = require('./eqArrays');

const assertArraysEqual = function(firstArr, secArr) {
  const ans = eqArrays(firstArr, secArr);
  if (ans) {
    console.log(`✅✅✅ Assertion Passed: ${firstArr} === ${secArr}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArr} !== ${secArr}`);
  }
};

module.exports = assertArraysEqual;