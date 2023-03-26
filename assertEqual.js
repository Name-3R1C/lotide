const assertEqual = function(actual, expected) {
  // Emoji
  let correct = String.fromCodePoint(0x2705) + String.fromCodePoint(0x2705) + String.fromCodePoint(0x2705);
  let wrong = String.fromCodePoint(0x274C) + String.fromCodePoint(0x274C) + String.fromCodePoint(0x274C);
  let ans = (actual === expected);
  if(ans) {
    console.log(`${correct} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${wrong} Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual("asdfghjkl","asdfghjkl");
assertEqual("asdfghjkl","asdfghjk");
assertEqual(10,10);
assertEqual("1",1);