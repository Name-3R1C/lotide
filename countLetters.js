const assertEqual = require('./assertEqual');

// Count occurance of each letter in a given string
const countLetters = function(str) {
  const result = {};

  for (const letter of str) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter]++;
      } else {
        result[letter] = 1;
      }
    }
  }

  return result;
};

module.exports = countLetters;