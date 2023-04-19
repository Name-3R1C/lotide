const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([5,6,7]), 5); // pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // pass
assertEqual(head([1]), 1); // pass
assertEqual(head([]), 5); // fail