const assertEqual = function(actual, expected) {
  let ans = (actual === expected);
  if (ans) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// console.log(countLetters("lighthouse in the house"));
const res = (countLetters("lighthouse in the house"));
let i = 0;
const count = [1,2, 1, 4, 2, 2, 2, 2, 3, 1];
for (const item of Object.keys(res)) {
  assertEqual(res[item], count[i]);
  i++;
}