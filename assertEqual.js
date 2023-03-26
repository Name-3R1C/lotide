const assertEqual = function(actual, expected) {
  let correct = String.fromCodePoint(0x2705) + String.fromCodePoint(0x2705) + String.fromCodePoint(0x2705);
  let wrong = String.fromCodePoint(0x274C) + String.fromCodePoint(0x274C) + String.fromCodePoint(0x274C);
  console.log(actual === expected ? correct + "Assertion Passed: " + actual + " === " + expected :  wrong + "Assertion Failed: " + actual + " !== " + expected);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual("asdfghjkl","asdfghjkl");
assertEqual("asdfghjkl","asdfghjk");
assertEqual(10,10);
assertEqual("1",1);