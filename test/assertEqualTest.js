const assertEqual = require('../assertEqual');

assertEqual(1,1); // Pass
assertEqual("asdfghjkl","asdfghjkl"); //Pass
assertEqual(10,10); // Pass
assertEqual("asdfghjkl","asdfghjk"); // Fail
assertEqual("Lighthouse Labs", "Bootcamp"); // Fail
assertEqual("1",1); // Fail