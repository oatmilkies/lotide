// test/assertEqualTest.js & head.js

const assertEqual = require('../assertEqual');
const head = require('../head');


// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([3,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(head([3]), 3);
assertEqual(head([]), 5);