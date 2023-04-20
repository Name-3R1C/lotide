const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// Return all the indices in the string where each character is found
const letterPositions = function(sentence) {
  const results = {};
  let ind = 0;

  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(ind);
      } else {
        results[letter] = [ind];
      }
    }
    ind++;
  }
  return results;
};

module.exports = letterPositions;