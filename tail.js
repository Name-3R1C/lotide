const assertEqual = require('./assertEqual');

const tail = function(arr) {
  if (arr.length <= 1) {
    return [];
  }
  let ans = arr.slice(1);
  return ans;
};

module.exports = tail;