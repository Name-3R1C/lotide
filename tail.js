const assertEqual = require('./assertEqual');

// Return all item in except the head of a given array
const tail = function(arr) {
  if (arr.length <= 1) {
    return [];
  }
  let ans = arr.slice(1);
  return ans;
};

module.exports = tail;