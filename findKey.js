const assertEqual = require('./assertEqual');

// Scan given object and return the first key for which the callback 
// returns a truthy value. Return undefined if no key is found
const findKey = function(object, callback) {
  for (const item in object) {
    if (callback(object[item])) {
      return item;
    }
  }
  return undefined;
};

module.exports = findKey;