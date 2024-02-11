// test/assertArraysEqualTest.js

const assertArraysEqual = require('../assertArraysEqual');

//Test cases
assertArraysEqual([1, 2, 3], [1, 2]);

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 5, 3], [1, 2, 3]);

assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]);
assertArraysEqual(["a", "b", "c"], ["a", "d", "c"]);