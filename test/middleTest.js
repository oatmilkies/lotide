// test/assertArraysEqualTest.js, test/eqArrays

const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

//Test cases
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

eqArrays(middle([2]), [2]);
eqArrays(middle([2, 3]), [2, 3]);