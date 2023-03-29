const assertEqual = function(actual, expected) {
  let ans = (actual === expected);
  if (ans) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp"); // Fail
assertEqual(1,1); // Pass
assertEqual("asdfghjkl","asdfghjkl"); //Pass
assertEqual("asdfghjkl","asdfghjk"); // Fail
assertEqual(10,10); // Pass
assertEqual("1",1); // Fail