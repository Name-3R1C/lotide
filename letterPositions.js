const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

// let res = letterPositions("hello");
// let i = 0;
// let expectedRes = [[0],[1],[2,3],[4]];
// for (const item in res) {
//   assertArraysEqual(res[item],expectedRes[i]);
//   i++;
// }

// console.log("\n ");
// res = letterPositions("lighthouse in the house");
// i = 0;
// expectedRes = [[0],[1, 11],[2],[3, 5, 15, 18],[4, 14],[6, 19],[7, 20],[8, 21],[9, 16, 22],[12]];
// for (const item in res) {
//   assertArraysEqual(res[item],expectedRes[i]);
//   i++;
// }