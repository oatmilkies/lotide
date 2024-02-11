// test/assertArraysEqualTest.js, test/eqArrays

const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns ['yellow'] for ['blue', 'yellow', 'green']", () => {
    assert.deepEqual(middle(['blue', 'yellow', 'green']), ['yellow']);
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

});



//Test cases
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

eqArrays(middle([2]), [2]);
eqArrays(middle([2, 3]), [2, 3]);