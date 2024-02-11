// test/assertEqualTest.js & eqArrays.js

const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 5, 3], [1, 2, 3]), false);

assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true);
assertEqual(eqArrays(["a", "b", "g"], ["a", "b", "c"]), false);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);